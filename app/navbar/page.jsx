import React from 'react';
import Link from 'next/link';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

export default function NavBar() {
  return (
    <div>
      <div>
        <nav>
          {/* <div className='flex'>
          <img src='/components/images/SM.png' alt="Logo" className='p-3 flex-basis-1' />

          </div> */}
          <div className='flex justify-end'>
            <Link href='/about'>About</Link>
            <Link href='/career'>Career</Link>
            <Link href='/education'>Education</Link>
            <Link href='/projects'>Projects</Link>
            <Link href='/contact'>Contact</Link>
            <button className='resume-button'>
              <Link href='/contact'>Resume</Link>
              {/* <ArrowDownTrayIcon className='h-6 w-6 flext-1 text-center text-white hover:text-emerald-700'/> */}
            </button>
          </div>
        </nav>
      </div>
    </div>
  )
}
