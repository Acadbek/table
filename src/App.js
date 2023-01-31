import Navbar from './navbar'
import {Routes, Route} from 'react-router-dom'
import About from './about'
import Blog from './blog'
import Table from './table'
import {Navigate, useLocation} from 'react-router-dom'

const App = () => {
  const navigate = useLocation()
  console.log(navigate);
  return (
          <div>
            <Routes>
              <Route element={<Navbar/>}>
                <Route path='/' element={<Navigate to='/table'/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/table' element={<Table/>}/>
                <Route path='*' element={ <h1 className='text-red-700 text-[45px]'>404</h1> }/>
              </Route>
            </Routes>
          </div>
  )
}

export default App