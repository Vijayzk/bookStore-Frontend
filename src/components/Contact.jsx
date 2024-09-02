import React from 'react'
import Navbar from './Navbar'


const Contact = () => {

    return (
        <>
            <Navbar />
            <div className='min-h-screen'>
                <div className='max-w-screen-2xl container mx-auto md:px-20 py-4'>
                    <div className='flex items-center justify-center mt-44'>
                        <div>
                            <form method="dialog">
                                <h1 className="font-bold text-xl">Contact Us</h1>
                                <div className='mt-4 space-y-2'>
                                    <span>Name:</span>
                                    <br />
                                    <input
                                        type="name"
                                        placeholder='Enter your name'
                                        className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white'
                                    />
                                </div>
                                <div className='mt-4 space-y-2'>
                                    <span>Email:</span>
                                    <br />
                                    <input
                                        type="email"
                                        placeholder='Enter your email'
                                        className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white'
                                    />
                                </div> 
                                <div className='mt-4 space-y-2'>
                                    <span>Message:</span>
                                    <br />
                                    <textarea className="textarea textarea-bordered w-80 dark:bg-slate-900 dark:text-white dark:border-white" placeholder="Type your message"></textarea>
                                </div> 
                                {/* Button */}
                                <div className='mt-4'>
                                    <button className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact
