import Aside from "./components/Aside"
import Header from "./components/Header"
import Center from "./components/Center"


export default function App() {
 return (
    <div className="flex flex-row - bg-gray-900 text-white min-h-screen">
      <Aside />
      <div className="flex flex-col w-[1320px]">
        <Header />
        <Center />
      </div>
    </div>
 )
}