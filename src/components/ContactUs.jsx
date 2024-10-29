import {contacts} from '../constants'

function ContactUs() {
  return (
    <div className='py-12 text-center mt-8'>
        <div className="">
            <h2 className='text-3xl font-bold'>CONTACT US</h2>
            <p className='mt-1 italic text-neutral-400'>We would love to hear from you</p>
        </div>
        <div className="mt-6 justify-center">
            <ul className='flex flex-wrap gap-4 justify-center'>
                {
                    contacts.map((contact, index) => (
                        <a href={contact.href} target='_blank' key={index} className='border border-neutral-500 p-8 rounded-full hover:bg-slate-400'>   
                            <li>{contact.name}</li>
                        </a>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default ContactUs;