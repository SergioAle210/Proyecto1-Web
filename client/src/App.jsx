import { NavigationProvider } from '@hooks/useNavigate'
import { TokenProvider } from '@hooks/useToken'
import React from 'react'

import Header from '@components/Header'
import Footer from '@components/Footer'
import Pages from './pages'

import './App.css'

function App
() {
  return (
     <TokenProvider>
      <NavigationProvider>
        <Header />
          <Pages />
        <Footer />
      </NavigationProvider>
    </TokenProvider>
  )
}

export default App
