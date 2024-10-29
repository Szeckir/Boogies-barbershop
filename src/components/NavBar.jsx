import {navItems} from '../constants'

function NavBar() {
  return (
    <nav className="sticky top-0 z-50 py-5 backdrop-blur-lg border border-neutral-800/35 ">
        <div className='flex justify-center flex-wrap'>
            <div className='bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent items-start'>
                <h1 className='text-3xl font-bold'>
                    Boogies
                </h1>
                <span className='text-2xl'>Barbershop</span>
            </div>
            <ul className='gap-5 flex ml-8 justify-center items-center content-center'>
                {
                    navItems.map((item,index) => (
                        <li key={index} className='text-1xl text-neutral-300 bg-clip-text hover:text-white'>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    </nav>
  )
}

export default NavBar