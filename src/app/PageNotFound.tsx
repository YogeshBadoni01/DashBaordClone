import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <>
        <div className="flex justify-center items-center">
            <p>This page is not found </p>
            <h1>404</h1>
            <Link href="/">Click here to Back to home menu</Link>
        </div>   
    </>
  )
}

export default NotFound