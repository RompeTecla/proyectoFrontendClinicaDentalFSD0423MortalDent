import './App.css'
import { Footer } from './common/Footer/Footer'
import { NavBar } from './common/Navbar/Navbar'
import { Home } from './pages/Home/Home'


export const App = () => {

  return (
    <>
      <NavBar />
      <Home />
      <Footer />
    </>
  )
}

export default App