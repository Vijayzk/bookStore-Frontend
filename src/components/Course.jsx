import React, { useEffect } from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const Course = () => {

  const [book,setBook] = useState([])
  useEffect(() => {
     const getBook = async() => {
      try{
        const res = await axios.get(`${import.meta.env.VITE_API}/book`)
        //console.log(res.data)
        setBook(res.data)
      }
      catch(error){
        console.log(error)
      }
     };

     getBook();
  },[]);

  return (
    <>
     <div className='max-w-screen-2xl container mx-auto md:px-20 py-4'>
       <div className='mt-28 justify-center text-center'>
        <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'> Here :)</span></h1>
        <p className='mt-12'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut enim aliquid praesentium facilis consequatur nostrum veniam suscipit harum laboriosam deserunt, itaque expedita? Ad perspiciatis quaerat veritatis, illum ea quae libero blanditiis eveniet voluptatum consequatur quos! Quasi aliquam fugit voluptatem, commodi exercitationem obcaecati dolore laboriosam libero mollitia omnis beatae dignissimos voluptate aut. Repellendus, cumque!</p>
        <Link to={'/'}>
        <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6'>Back</button>
        </Link>
       </div>
       <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
         {
            book.map((item)=>(
                <Cards key={item.id} item={item}/>
            ))
         }
       </div>
     </div>
    </>
  )
}

export default Course
Course