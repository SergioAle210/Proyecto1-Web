import { NavigationProvider } from '@hooks/useNavigate'

import Header from '@components/Header'
import Footer from '@components/Footer'
import Pages from './pages'

import './App.css'

function App() {
  return (
    <NavigationProvider>
      <Header />
      <Pages />
      <Footer />
    </NavigationProvider>
  )
}

export default App
