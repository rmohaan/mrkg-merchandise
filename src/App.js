import {Routes, Route} from 'react-router-dom'
import Home from './routes/home';
import Navigation from './routes/navigation';
import SignIn from './routes/signin';

const Shop = () => {
  return (
    <div>
      I'm in the shopping page
    </div>
  )
}

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation />} >
          <Route index element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/signin' element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
