import {services} from '../constants/'

const Services = () => {
  return (
    <div className="flex w-full justify-center items-center mt-28 tracking-wide">
      <div>
        <h2 className='text-5xl text-center italic'>Services</h2>

        <div className="flex">
            <ul className='flex justify-center mt-8 gap-5 flex-wrap'>
                {
                    services.map((service,index) => (
                        <a href='https://booksy.com/en-us/184757_boogies-barbershop_barber-shop_134763_orlando#ba_s=seo' target='_blank' key={index} className='w-60 h-80 relative hover:cursor-pointer mb-12 group'>
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white font-semibold text-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                Book Now
                            </div>
                            <img src={service.img} alt={service.label} className='w-60 h-80 object-cover rounded-tr-md rounded-tl-md'/>
                            <a href={service.href} className='bg-gradient-to-r from-orange-600 to-orange-900 p-2 w-full absolute rounded-br-md rounded-bl-md'>{service.label}</a>
                        </a>
                    ))
                }
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Services
