import {Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { SuccessOrder } from './pages/SuccessOrder'


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/success-order" element={<SuccessOrder/>}/>
    </Routes>
  )
}