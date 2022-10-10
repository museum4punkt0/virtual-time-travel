import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  getInViewThresholdAngle,
  getInViewThresholdDistance,
} from '@virtual-time-travel/app-config';
import { geolocation } from '@virtual-time-travel/geo';
import {
  CurrentGeoFence,
  GeoState,
  StateOrientation,
  StatePosition,
} from '@virtual-time-travel/geo-types';
import { RootState } from '../main';
import { getFencesState } from './fences.slice';
import { getPovsState } from './povs.slice';

const inViewThresholdAngle = getInViewThresholdAngle();
const inViewThresholdDistance = getInViewThresholdDistance();

export const GEO_FEATURE_KEY = 'geo';

export const initialGeoState: GeoState = {
  position: null,
  orientation: null,
};

export const geoSlice = createSlice({
  name: GEO_FEATURE_KEY,
  initialState: initialGeoState,
  reducers: {
    updateLocation(
      state: GeoState,
      action: PayloadAction<StatePosition | null>
    ) {
      const { payload } = action;
      state.position = payload;
    },

    updateOrientation(
      state: GeoState,
      action: PayloadAction<StateOrientation | null>
    ) {
      const { payload } = action;
      state.orientation = payload;
    },
  },
});

export const geoReducer = geoSlice.reducer;

export const geoActions = geoSlice.actions;

export const getGeoState = (rootState: RootState): GeoState =>
  rootState[GEO_FEATURE_KEY];

export const selectPosition = createSelector(
  getGeoState,
  ({ position }) => position
);

export const selectOrientation = createSelector(
  getGeoState,
  ({ orientation }) => orientation
);

export const selectCurrentGeoFence = createSelector(
  [getGeoState, getFencesState, getPovsState],
  (
    { position, orientation },
    { entries: fences },
    { entries: povs }
  ): CurrentGeoFence | null => {
    if (!position) return null;

    const currentPosition = geolocation.getLongLat(position.coordinates);

    const currentFence = fences?.find(
      (fence) =>
        !!fence.geometry.coordinates.find(
          (geometry) =>
            !!geolocation.isPointInPolygon(currentPosition, geometry)
        )
    );

    const currentPovs = (povs || [])
      .filter(
        (pov) =>
          pov.fence === currentFence?.id &&
          pov.geometry.coordinates.length === 2
      )
      .map((pov) => {
        const bearingViewportOrientation =
          (orientation?.compassHeading || 0) - (pov.orientation || 0);
        const bearingDistance = geolocation.getBearingDistance(
          position.coordinates,
          pov.geometry.coordinates
        );
        return {
          ...pov,
          distance: geolocation.getDistance(
            currentPosition,
            geolocation.getLongLat(pov.geometry.coordinates)
          ),
          bearingDistance,

          bearingViewportOrientation,
          inView:
            Math.abs(bearingViewportOrientation) < inViewThresholdAngle &&
            bearingDistance < inViewThresholdDistance,
        };
      });

    // TODO !!! ???
    // if there are no points in view show directions to clostest one?
    // should we filter povs by

    return {
      fence: currentFence,
      povs: currentPovs,
    };
  }
);
