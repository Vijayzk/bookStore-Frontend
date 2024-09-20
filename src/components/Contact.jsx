import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import axios from 'axios'


const Contact = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const userInput = {
            name: data.name,
            email: data.email,
            message: data.message
        }
        // action=""method='POST'
        try {
            axios.post(import.meta.env.VITE_POST_LINK, userInput)
            toast.success('Your message has been sent!!');
        }
        catch (error) {
            toast.error('Something went wrong!!');
        }
    }

    return (
        <>
            <Navbar />
            <div className='min-h-screen'>
                <div className='max-w-screen-2xl container mx-auto md:px-20 py-4'>
                    <div className='flex items-center justify-center mt-44'>
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)} className='bg-slate-100 w-96 px-8 py-6 rounded-xl dark:bg-slate-800 dark:text-white'>
                                <h1 className="font-bold text-xl">Contact Us</h1>
                                <div className='mt-4 space-y-2'>
                                    <span>Name:</span>
                                    <br />
                                    <input
                                        {...register("name", { required: true })}
                                        type="name"
                                        id='name'
                                        name='name'
                                        placeholder='Enter your name'
                                        className='w-80 px-3 py-1 border border-slate-800 bg-white rounded-md outline-none dark:bg-slate-900 dark:text-white'
                                    />
                                    {errors.name && <span className='text-red-500'>This field is required</span>}
                                </div>
                                <div className='mt-4 space-y-2'>
                                    <span>Email:</span>
                                    <br />
                                    <input
                                        {...register("email", { required: true })}
                                        type="email"
                                        id='email'
                                        name='email'
                                        placeholder='Enter your email'
                                        className='w-80 px-3 py-1 border border-slate-800 bg-white rounded-md outline-none dark:bg-slate-900 dark:text-white'
                                    />
                                    {errors.email && <span className='text-red-500'>This field is required</span>}
                                </div>
                                <div className='mt-4 space-y-2'>
                                    <span>Message:</span>
                                    <br />
                                    <textarea
                                        {...register("message", { required: true })}
                                        className="textarea textarea-bordered w-80 border-slate-800 dark:bg-slate-900 dark:text-white"
                                        id='message'
                                        type='text'
                                        name='message'
                                        placeholder="Type your message"
                                    />
                                    {errors.message && <span className='text-red-500'>This field is required</span>}
                                </div>
                                {/* Button */}
                                <button type='submit' className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200 mx-2 dark:bg-black'>Submit</button>
                                <Link to={'/'}>
                                    <button className='bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-700 duration-300 mt-6 dark:bg-black'>Back</button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact
