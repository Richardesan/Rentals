import React from 'react'

const Navbar = () => {
    const linkStyle = "cursor-pointer hover:text-white active:scale-95 hover:scale-105 transistion-all duration-100"
  return (
 <nav className="w-fit flex items-center  mx-auto gap-x-28 p-5 rounded-full bg-black/40 backdrop-blur-sm border border-white/20  text-white">
  <div className='cursor-pointer'>
    <img src="/Logo.svg" alt="Logo" />
  </div>
  <ul className="flex items-center text-lg capitalize gap-x-10  text-primary-light">
    <li className={linkStyle}>home</li>
    <li className={linkStyle}>about us</li>
    <li className={linkStyle}>listing</li>
    <li className={linkStyle}>agent</li>
  </ul>
  <button className={`px-6 py-3 border-primary-light border rounded-full font-semibold ${linkStyle}`}>
    Sign up
  </button>
</nav>

  )
}

export default Navbar