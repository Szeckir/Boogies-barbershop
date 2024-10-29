import {reviews} from '../constants'
import {Star} from 'lucide-react'

function Reviews() {
    const stars = [1,2,3,4,5];
  return (
    <div className="mt-16">
        <div className="justify-center items-center">
            <h2 className='text-3xl font-bold mb-8 text-center'>
                Reviews
            </h2>
            <div className="flex">
            <ul className='flex flex-col md:flex-row justify-center gap-4 flex-wrap'>
                {reviews.map((review, index) => (
                    <a key={index} className='border w-full md:w-1/2 border-neutral-500 rounded-md p-4 relative'>
                    <div className="flex justify-between mb-4">
                        <span className='font-bold'>{review.name}.</span>
                        <div className="flex">
                        {stars.map((star, index) => (
                            <Star key={index} size={24} color='#FE9400' fill='#FE9400' />
                        ))}
                        </div>
                    </div>
                    <span className='text-neutral-400 ml-4'>{review.text}</span>
                    </a>
                ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Reviews