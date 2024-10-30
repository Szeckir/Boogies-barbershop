import {about} from '../constants'
import boogies from '../assets/boggies.jpg'

function About() {
  return (
    <div className="mt-24">
        <div className='flex flex-wrap'>
            <div className='flex flex-col md:flex-row gap-12'>
                <div>
                    <h2 className='italic text-3xl font-bold mb-4'>About the Shop</h2>
                    {
                        about.map((item,index) => (
                            <span key={index}>
                                <p className='text-neutral-400 mb-2'>{item.text}</p>
                                <a href='https://g.co/kgs/LQN268A' target="_blank" className='text-neutral-600 hover:underline'>{item.address}</a>
                            </span>
                        ))
                    }
                </div>
                <img src={boogies} alt="Boggies barbershop" className='lg:w-1/2 md:w-1/2 sm:w-full rounded-md relative'/>
            </div>
        </div>
    </div>
  )
}

export default About