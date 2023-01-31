import { Outlet, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search)
  return (
          <div>
            <div className='flex gap-8 bg-black py-4 text-white px-8 sticky top-0'>
              <NavLink style={({isActive}) => {
                return {
                  color: isActive ? 'red' : 'white'
                }
              }} to={'/about'}>page-1</NavLink>
              <NavLink style={({isActive}) => {
                return {
                  color: isActive ? 'red' : 'white'
                }
              }} to={'/blog'}>page-2</NavLink>
              <NavLink style={({isActive}) => {
                return {
                  color: isActive ? 'red' : 'white'
                }
              }} to={'/table'}>table</NavLink>
              <h1 className='text-gray-500'>{location.pathname}</h1>
              <p>{query.get('name')}</p>
            </div>
            <Outlet/>
          </div>
  )
}

export default Navbar