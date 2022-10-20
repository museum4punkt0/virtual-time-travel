/* eslint-disable react/jsx-no-useless-fragment */
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import {
  MainRoutes,
  useNestedRoute,
  useSubpageLink,
} from '@virtual-time-travel/app-router'
import {
  Markdown,
  MenuBackLink,
  MenuLink,
  Page,
  StyledMenuMain,
  StyledSubMenu,
} from '@virtual-time-travel/ui'
import { RootState } from '../../../main'
import LanguagesMenu from '../../languages-menu/languages-menu'
import {
  EnhancedPageEntry,
  usePageWithSubpages,
} from '../../store/pages.slice'
import { RouteAnimation } from '../route-animation'

export function MenuScreen() {
  const { route, isSubroute } = useNestedRoute()
  const { basePathname, currentPage } = route
  const selectPageBySlug = useMemo(usePageWithSubpages, [])
  const entry = useSelector((state: RootState) =>
    selectPageBySlug(state, currentPage || MainRoutes.Menu)
  )
  const { page, subpages } = entry || {}

  if (!page) return <></>

  const { slug, localizedTitle, contentUrl } = page

  return (
    <RouteAnimation key={currentPage}>
      <Page withLogo={!isSubroute}>
        {isSubroute && (
          <MenuBackLink
            {...{ label: localizedTitle || slug, linkTo: basePathname }}
          />
        )}

        <Markdown contentUrl={contentUrl} />

        {isSubroute ? (
          <SubMenu {...{ subpages }} />
        ) : (
          <>
            <MainMenu {...{ subpages }} />
            <LanguagesMenu />
          </>
        )}
      </Page>
    </RouteAnimation>
  )
}

interface MenuProps {
  subpages?: Array<EnhancedPageEntry>
}

function MainMenu({ subpages }: MenuProps) {
  if (!subpages || !subpages.length) return <></>
  return (
    <StyledMenuMain>
      {subpages.map((sp) => (
        <MenuSubpageLink {...{ page: sp, main: true }} key={sp.id} />
      ))}
    </StyledMenuMain>
  )
}

function SubMenu({ subpages }: MenuProps) {
  if (!subpages || !subpages.length) return <></>
  return (
    <StyledSubMenu>
      {subpages.map((sp) => (
        <MenuSubpageLink {...{ page: sp }} key={sp.id} />
      ))}
    </StyledSubMenu>
  )
}

interface MenuSubpageLinkProps {
  page: EnhancedPageEntry
  main?: boolean
}

function MenuSubpageLink({ page, main }: MenuSubpageLinkProps) {
  const { localizedTitle, slug } = page
  const linkTo = useSubpageLink(slug)
  return <MenuLink {...{ label: localizedTitle, linkTo, main }} />
}

export default MenuScreen
