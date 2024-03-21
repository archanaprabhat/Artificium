
import Aside from './Aside'
import Header from './Header'
import Center from './Center'
function Home() {
  return (
    <div className="flex flex-row  bg-gray-900 text-white h-screen w-screen overflow-hidden ">
    <Aside />
    <div className="flex flex-col flex-1 overflow-hidden mx-10 relative self-stretch my-4">
      <Header />
      <Center />
    </div>
  </div>
  )
}

export default Home