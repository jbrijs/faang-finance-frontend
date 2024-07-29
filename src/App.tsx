import './App.css'
import { ThemeProvider } from './components/theme-provider'
import Navbar from './components/navbar'
import HomePage from './components/home-page'



function App() {


  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <Navbar/>
        <HomePage/>
    </ThemeProvider>
  )
}

export default App
