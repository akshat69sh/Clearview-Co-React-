
import Websitename from './Websitename'
import Navlinks from './navlinks'
import Buttons from './buttons'
import Hamburger from './hamburger'

function Header() {
  return (
    <div className='flex items-center justify-between w-full p-4 bg-bg-cream  '>
    {/* <Hamburger/> */}
    <Websitename  />
    <Navlinks/>
    <Buttons/>

    </div>
  )
}

export default Header
