import Aside from "./components/Aside"
import Header from "./components/Header"
import Center from "./components/Center"
import {Routes,Route} from "react-router-dom"


export default function App() {
 return (
  
    <div className="flex flex-row  bg-gray-900 text-white h-screen w-screen overflow-hidden select-none">
      <Aside />
      <div className="flex flex-col flex-1 overflow-hidden mx-10 relative self-stretch my-4">
        <Header />
        <Center />
      </div>
    </div>
 )
}