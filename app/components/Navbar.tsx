import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
      <nav className="bg-gray-600/10 p-4 sticky top-0 drop-shadow-xl z-10">
          <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
              <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">

              <Link href="/" className="text-white/90 no-underline hover:text-white">
                      Akshay Varma</Link>
              </h1>
              {/* help me write links to navbar based on tailwind sizes */}
              <div className="flex flex-row space-x-4 place-content-center">
                  <Link href="/blog" className="text-white/90 no-underline hover:text-white">
                      Blog</Link>
                  <Link href="/projects" className="text-white/90 no-underline hover:text-white">
                      Projects</Link>
                  <Link href="/about" className="text-white/90 no-underline hover:text-white">
                      About</Link>


              </div>

          </div>
    </nav>
  )
}
