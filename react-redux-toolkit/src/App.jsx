import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Product from './components/Product'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import DashBoard from './components/DashBoard';
import Cart from './components/Cart';

function App() {
 
  const router =createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<DashBoard/>}/>
      <Route path='/cart'  element={<Cart/>}/>

    </Route>
  ))

  return (
    <>
      <div className='App'>
        <RouterProvider router={router} />
        {/* <Product/> */}
       </div>
    </>
  )
}

export default App
