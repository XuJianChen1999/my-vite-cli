import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import routes from './router'

function App() {
  return <Router>
    <Routes>
      {
        routes.map(item => {
          const Component = item.component
          return <Route exact key={item.path} path={item.path} element={<Component />} />
        })
      }
    </Routes>
  </Router>
}

export default App
