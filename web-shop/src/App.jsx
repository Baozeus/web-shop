import './App.css'
import Header from './layout/Header'
import HeroSection from './Home/HeroSection'
import Categories from './Home/Categories'
function App() {
  
  return (
      <>
        <Header/>
        <HeroSection/>
        <div className='max-w-300 mx-auto mt-5'>
          <Categories/>
        </div>
      </>

  )
}

export default App

