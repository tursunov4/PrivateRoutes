import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PrivateRoutes from './Untils/ProtectedRoutes'
import Users from './Users';
import Product from './Product';
import Login from './Login';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
        <Routes>
          <Route element={<PrivateRoutes/>}>
            <Route path='*' element={<NotFound/>} />
              <Route path='/' element={<Users/>} />
              <Route path='/products' element={<Product/>} />
          </Route>
          <Route path='/login' element={<Login/>}/>
        </Routes>
    </Router>
  );
}
export default App