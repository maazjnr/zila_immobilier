import React from 'react';
import {Link} from "react-router-dom"

const Error = () => {
  return (
    <section className='flex flex-col items-center justify-center w-screen h-screen p-20 bg-black'>
    <h2 my={5}>Page Not Found</h2>
   <p className='my-5'>
    Looks like you've followed a broken link or entered a URl that doesn't exist on this site.
    </p>
    <Link to="/">Back to our site</Link>
  </section>
  )
}

export default Error
