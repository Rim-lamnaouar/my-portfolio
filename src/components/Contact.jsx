import React from 'react'

const Contact = () => {
  return (
        <div name='contact' className='w-full h-screen bg-[#fff] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/8cd93dcd-6765-42b8-b21d-0080fa747b84" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-[#8892b0]'>Contact</p>
                <p className='text-gray-300 py-4 text-xl'> Let's grab a coffee and jump on conversation <span className='text-pink-600'>chat with me.</span></p>
            </div>
            <input className="input-secondary my-4 p-2 bg-[#ffecfc] rounded-sm" type="text" placeholder='Your Name' name='name' />
            <input className='input-secondary my-4 p-2 bg-[#ffecfc] rounded-sm' type="email" placeholder='Your Email' name='email' />
            <textarea className='input-secondary my-4 p-2 bg-[#ffecfc] rounded-sm' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white hover:text-black border-2 hover:bg-transparent hover:border-black
             bg-pink-600 border-pink-600
             px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact;