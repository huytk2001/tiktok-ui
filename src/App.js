import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './routes'
import DefaultLayout from './Component/GlobalStyle';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Pape = route.component
            return <Route key={index} path={route.path} element={Pape} />
          })}
        </Routes>
      </div>
    </Router >

  );
}

export default App;
