import { PropsWithChildren, useMemo } from "react";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import { DialogsContentsIds } from "@virtual-time-travel/app-config";
import { LocalizedRoute } from "@virtual-time-travel/app-router";
import { Dialog, Icons, MainNav, MainNavButton } from "@virtual-time-travel/ui";
import tw from "twin.macro";
import useResizeObserver from "use-resize-observer";
import { useDialogByKey } from "../hooks/use-dialog-by-key";
import PovDetails from "../povs/details";
import { selectMainRoutes } from "../store/router";

export function Layout({ children }: PropsWithChildren) {
  const mainRoutes = useSelector(selectMainRoutes);
  const { ref, height, width } = useResizeObserver();
  const forcePortraitDialog = useDialogByKey(DialogsContentsIds.ForcePortrait);

  const forcePortrait = useMemo(
    () => (!!width && !!height ? width > height : false),
    [width, height],
  );

  return (
    <StyledLayout ref={ref}>
      <StyledMain>
        <>
          {children}
          <PovDetails />

          <Dialog
            {...{
              ...forcePortraitDialog,
              show: forcePortrait,
            }}
          />
        </>
      </StyledMain>

      <MainNav>
        <>
          {mainRoutes.map((route) => (
            <MainNavLink {...{ route }} key={route.path} />
          ))}
        </>
      </MainNav>
    </StyledLayout>
  );
}

interface MainNavLinkProps {
  route: LocalizedRoute;
}

function MainNavLink({ route }: MainNavLinkProps) {
  const { routeKey, route: routeLink } = route;

  const iconType = useMemo(() => {
    const indexOfS = Object.values(Icons).indexOf(routeKey as unknown as Icons);

    const key = Object.keys(Icons)[indexOfS];

    return key ? Icons[key as keyof typeof Icons] : Icons.Menu;
  }, [routeKey]);

  return <MainNavButton type={iconType} link={routeLink} />;
}

const StyledLayout = styled.div(tw`
    w-full h-full
    flex flex-col
`);

const StyledMain = styled.main(tw`
    w-full flex-1 overflow-hidden
    flex justify-center relative
`);

export default Layout;
