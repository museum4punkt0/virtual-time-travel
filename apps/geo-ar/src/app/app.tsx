
import { useSelector } from 'react-redux'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { useStateData } from './hooks/useStateData'
import Layout from './layout/layout'
import ArScreen from './screens/ar/ar-screen'
import IntroScreen from './screens/intro/intro-screen'
import ListScreen from './screens/list/list-screen'
import MenuScreen from './screens/menu/menu-screen'
import QrScreen from './screens/qr/qr-screen'
import SplashScreen from './screens/splash/splash-screen'
import { selectAppIsReady } from './store/general.slice'


export function App() {
  // const { povId } = useLocation()
  const appIsReady = useSelector(selectAppIsReady)
  useStateData()


  // const useQr = useMemo(() => {
  //   return 'qr' in qs.parse(search)
  // }, [search])


  if (!appIsReady) return <>...</>

  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/intro" element={<IntroScreen />} />
          <Route path="/ar" element={<ArScreen />} />
          <Route path="/qr" element={<QrScreen />} />
          <Route path="/list" element={<ListScreen />} />
          <Route path="/menu" element={<MenuScreen />} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}

export default App
