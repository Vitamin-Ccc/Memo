import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Protected from './pages/Protected';
import Layout from './pages/Layout';
import RequireAuth from './components/RequireAuth';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* {public routes go here} */}
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route element={<RequireAuth />}>
          {/* protected routes go here */}
          <Route path='/protected' element={<Protected />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
