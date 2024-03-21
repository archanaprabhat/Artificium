import Home from "./components/Home"
import {Routes,Route} from "react-router-dom"


export default function App() {
 return (
  <Routes>
    <Route path="/" element={<Home />}  />
    <Route path="*" element={<h1>Hello</h1>} />
    
  </Routes>
  
 )
}