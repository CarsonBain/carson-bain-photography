import { Link } from 'gatsby';
import React from 'react';

export default function Layout({ children }) {
  return (
    <div className='text-gray-900 flex flex-col h-full'>
      <div className='w-full max-w-screen-lg py-10 px-6 md:px-16 mx-auto flex-1'>
        <header>
          <nav className='flex justify-between items-center mb-12'>
            <Link
              to='/'
              className='font-extrabold text-xl md:text-3xl uppercase tracking-wide'
            >
              Carson Bain
            </Link>
            <div>
              <ul className='flex list-none space-x-3'>
                <li>
                  <Link
                    activeClassName='border-b-2 border-solid border-current'
                    className='md:text-lg py-1'
                    to='/galleries'
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    activeClassName='border-b-2 border-solid border-current'
                    className='md:text-lg py-1'
                    to='/about'
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <main className='relative mt-16 md:mt-24'>{children}</main>
      </div>
      <footer className='mt-16 w-full bg-blue-50 text-blue-900'>
        <div className='max-w-screen-lg px-6 md:px-16 mx-auto flex flex-col space-y-6 justify-items-center items-center py-16'>
          <div className='text-base font-semibold'>
            <ul className='flex space-x-8'>
              <li>
                <Link className='py-1' to='/galleries'>
                  Work
                </Link>
              </li>
              <li>
                <Link className='py-1' to='/wallpapers'>
                  Wallpapers
                </Link>
              </li>
              <li>
                <Link className='py-1' to='/about'>
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className='text-sm flex flex-col items-center'>
            <a className='underline' href='mailto:carsonbain@gmail.com'>
              carsonbain@gmail.com
            </a>
            <div>
              Follow on{' '}
              <a className='underline' href='/'>
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
