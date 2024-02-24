import {Routes, Route} from 'react-router-dom'
import Categories from './components/categories';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Categories />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
