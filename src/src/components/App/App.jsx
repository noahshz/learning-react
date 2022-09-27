import ProductList from '../ProductList/ProductList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <h1>My first Application</h1>
        <Routes>
          <Route path="/" element={<ProductList/>}></Route>
          <Route path="/test" element={<h1>Test</h1>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;