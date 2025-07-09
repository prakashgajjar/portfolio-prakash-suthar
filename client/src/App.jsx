import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './home/home'

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<h1>Home</h1>} />
        <Route path='/work' element={<h1>Home</h1>} />
      </Routes>
    </div>
  )
}

export default App