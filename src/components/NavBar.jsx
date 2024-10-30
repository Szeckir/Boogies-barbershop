import {navItems} from '../constants'
import { Menu, X} from "lucide-react"
import { useState } from "react"

function NavBar() {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavBar = () => {
        console.log("Toggled Nav");
        setMobileDrawerOpen(!mobileDrawerOpen);
    }
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg border border-neutral-800/35">
        <div className='container p-7 mx-auto relative text-sm'>
            <div className='flex justify-between items-center'>
                <div className='bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent items-start'>
                    <h1 className='text-3xl font-bold'>
                        Boogies
                    </h1>
                    <span className='text-2xl'>Barbershop</span>
                </div>
                <ul className='hidden gap-5 lg:flex ml-8 justify-center items-center content-center'>
                    {
                        navItems.map((item,index) => (
                            <li key={index} className='text-1xl text-neutral-300 bg-clip-text hover:text-white'>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))
                    }
                </ul>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavBar}>
                        {mobileDrawerOpen ? <X className='z-10 relative'/> : <Menu className=''/>}
                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                    <ul>
                    {navItems.map((item,index) => (
                            <li key={index} className="py-4">
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>                   
                </div>
            )}
        </div>
    </nav>
  )
}

export default NavBar