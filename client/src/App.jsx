import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './home/home'
import ProjectPage from './projects/ProjectPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects/:name' element={<ProjectPage/>} />
      </Routes>
    </div>
  )
}

export default App