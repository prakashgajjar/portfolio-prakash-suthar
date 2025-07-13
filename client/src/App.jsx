import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './home/home'
import ProjectPage from './projects/ProjectPage'
import PageTransition from './components/PageTransition'

export default function App() {
  const location = useLocation()

  return (
    <div>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/projects/:name"
            element={
              <PageTransition>
                <ProjectPage />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  )
}
