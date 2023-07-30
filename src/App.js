import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from '~/routes'
import DefaultLayout from '~/Layout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = DefaultLayout
            if (route.layout) {
              Layout = route.layout
            } else if (route.layout === null) {
              Layout = Fragment
            }
            const Pape = route.component
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout><Pape /></Layout>

                } />)
          })}
        </Routes>
      </div>
    </Router >

  );
}

export default App;