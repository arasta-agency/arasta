import React from 'react'
import { Link } from 'react-router-dom'

//icons
import { FaArrowRight } from 'react-icons/fa'
import kurdistanMap from '../assets/FlagKurdistan.png'

const Header = () => {
  return (
    <div>
      <div className="relative isolate px-10 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto lg:max-w-2xl">
          <div className="hidden md:mb-8 md:flex md:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our Latest Program for Medical Students.{' '}
              <Link to="#" className="font-semibold text-primary">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-gray-800 sm:text-5xl">
             Arasta Creates a Pathway for Students to <span className='text-primary'>Study Abroad.</span>
            </h1>
            <p className="flex justify-center mt-6 text-sm text-gray-700 font-medium lg:text-base">
              <span className='w-4/6'>
                We Think About You & Strive to Deliver the Best Because You Deserve the Best.
              </span>
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/connect"
                className="btn">
                Connect
              </Link>
              <Link to="/programs" className="text-sm font-semibold flex items-center gap-1.5 leading-6 text-gray-700 hover:text-gray-500  duration-300 transition-colors">
                Our Programs<FaArrowRight />
              </Link>
            </div>
            <nav className="flex items-center justify-between p-6 lg:px-8">
  {/* navbar stays exactly the same */}
</nav>

{/* Glowing Kurdistan Section */}
<div className="relative flex flex-col items-center mt-6">
  {/* Glow background */}
  <div className="absolute inset-0 blur-3xl opacity-40 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 rounded-full w-40 h-40" />

  {/* Content */}
  <div className="relative flex flex-col items-center bg-white/70 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg">
    <img
      src={kurdistanMap}
      alt="Kurdistan Map"
      className="h-20 w-auto drop-shadow-xl"
    />

    <span className="mt-2 text-sm font-bold tracking-wide bg-gradient-to-r from-red-600 via-yellow-500 to-green-600 bg-clip-text text-transparent">
      2 + 2 = 1
    </span>
  </div>
</div>

          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Header