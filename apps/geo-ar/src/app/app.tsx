import { CameraStream } from '@virtual-time-travel/camera'
import { DeviceResponsePermission, DeviceFeatures } from '@virtual-time-travel/util-device'
import { DeviceLocationEventRes, DeviceOrientationEventRes, Geo } from '@virtual-time-travel/geo'


import { useDispatch } from 'react-redux'
import { deviceActions } from './state/device.slice'
import { geoActions } from './state/geo.slice'

import './app.scss'
import ArUi from './ar-ui/ar-ui'


export function App() {

  const dispatch = useDispatch()

  const onRequestCameraComplete = (res: DeviceResponsePermission) => {
    dispatch(deviceActions.handlePermissionEvent({ permission: DeviceFeatures.Camera, ...res }))
  }

  const onRequestGeolocationComplete = (res: DeviceResponsePermission) => {
    dispatch(deviceActions.handlePermissionEvent({ permission: DeviceFeatures.Geolocation, ...res }))
  }

  const onRequestOrientationComplete = (res: DeviceResponsePermission) => {
    dispatch(deviceActions.handlePermissionEvent({ permission: DeviceFeatures.Orientation, ...res }))
  }

  function onChangePosition(position: DeviceLocationEventRes) {
    if (position?.coords) dispatch(geoActions.updateLocation(position))
  }

  function onChangeOrientation(event: DeviceOrientationEventRes) {
    dispatch(geoActions.updateOrientation(event))
  }

  return (
    <>
      <ArUi />
      <Geo {...{ onChangePosition, onRequestGeolocationComplete, onChangeOrientation, onRequestOrientationComplete }} />
      <CameraStream {...{ onRequestCameraComplete }} />
    </>
  )
}

export default App
