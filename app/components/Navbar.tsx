import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
      <nav className="bg-[rgb(32,32,35)] p-4 sticky top-0 drop-shadow-xl z-10">
          <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
              <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">

              <Link href="/" className="text-white/90 no-underline hover:text-white">
                      Akshay Varma</Link>
              </h1>
              <div className="flex flex-row space-x-4 place-content-center">
                  <Link href="https://av10.tech" className="text-white/90 no-underline hover:text-white">
                      Portfolio</Link>
                  <Link href="https://av10.tech/projects" className="text-white/90 no-underline hover:text-white">
                      Projects</Link>
                  <Link href="https://av10.tech/about" className="text-white/90 no-underline hover:text-white">
                      About</Link>


              </div>

          </div>
    </nav>
  )
}
