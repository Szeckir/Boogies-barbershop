import video from '../assets/videobarber.mp4'

function HeroSection() {
  return (
    <div>
        <div className="flex justify-between items-center flex-wrap">
            <div className="flex-row text-4xl italic font-bold">
                <p className='mb-1'>Made</p>
                <p className='mb-1'>Exclusively</p>
                <p className='mb-8'>for Men</p>

                <div>
                    <button className="px-14 py-1 bg-gradient-to-r from-orange-600 to-orange-900 font-bold rounded w-full">
                        Book Now
                    </button>
                </div>
            </div>
            <video className="rounded-lg w-2/3 border border-orange-500 shadow-orange-400 mx-2 my-4" loop muted autoPlay={true}>
                    <source src={video} type="video/mp4"/>
                    Your browser does not support the video tag
            </video>
        </div>
    </div>
  )
}

export default HeroSection