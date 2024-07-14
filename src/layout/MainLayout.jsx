
import { Outlet } from 'react-router-dom'

export default function MainLayout() {

  return (
    <div className="main">
      <nav className="bg-blue-500 p-4 flex justify-center">
          <div className="text-white text-2xl font-bold">
              NY Most Popular Articles
          </div>
      </nav>
      {<Outlet/>}
    </div>
  )
}
