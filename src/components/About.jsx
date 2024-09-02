import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <>
            <Navbar />
            <div className='min-h-screen'>
                <div className='max-w-screen-2xl container mx-auto md:px-20 py-4'>
                    <div className='flex flex-col items-center justify-center mt-14 md:mt-28 space-y-3 md:px-10'>
                        <h1 className='text-2xl md:text-4xl'>About Us</h1>
                        <p className='text-sm px-10 md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ea id ducimus, alias explicabo ratione pariatur placeat praesentium architecto neque sapiente? Quae possimus, amet rerum qui dolore tempora enim quasi praesentium sed, ducimus unde ratione nulla obcaecati. Qui eligendi fugit expedita mollitia eaque vitae provident! Velit dolores hic molestiae, cum explicabo magnam nihil officia incidunt unde quas possimus fugit iste eveniet repellendus id odit autem voluptates obcaecati dignissimos deleniti, distinctio eos? Nihil dicta repellat autem? Quae, reprehenderit? Cum illum, eius qui ipsum nisi molestias maiores rem, a minima nam adipisci quidem. Ipsum vel maiores id quasi provident enim expedita harum! Tempore eos error laborum a, adipisci dolor alias hic sit dolore consequuntur vitae saepe quibusdam? Voluptatibus quis, ipsam expedita quibusdam eveniet iure unde libero rerum nesciunt iste quas, soluta voluptates quisquam reiciendis velit? Est ducimus eum officiis debitis, distinctio aliquam deleniti nesciunt vitae accusantium dolores sed quasi ipsum dolore amet soluta quos provident quas et sequi. Iusto iure alias itaque tempora beatae atque deleniti error sit, recusandae, minima numquam aspernatur dignissimos, quam ipsa ipsam nesciunt magni.</p>
                        <Link to={'/'}>
                            <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300 mt-6'>Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
