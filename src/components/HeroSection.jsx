import video from '../assets/videobarber.mp4'

function HeroSection() {
  return (
    <div>
        <div className="flex justify-between items-center flex-wrap px-8">
            <div className="flex-row text-4xl italic font-bold">
                <p className='mb-1'>Made</p>
                <p className='mb-1'>Exclusively</p>
                <p className='mb-8'>for Men.</p>

                <div className=''>
                    <a href='https://booksy.com/en-us/184757_boogies-barbershop_barber-shop_134763_orlando#ba_s=seo' target='_blank' className="p-3 lg:px-14 py-1 bg-gradient-to-r from-orange-600 to-orange-900 text-transparent bg-clip-text border border-neutral-700 font-bold rounded w-full hover:text-orange-900">
                        Book Now
                    </a>
                </div>
            </div>
            <video className="rounded-lg w-2/3 border border-orange-500 shadow-orange-400 my-4" loop muted autoPlay={true}>
                    <source src={video} type="video/mp4"/>
                    Your browser does not support the video tag
            </video>
        </div>
    </div>
  )
}

export default HeroSection