import Link from 'next/link';

const Nav = () => {
  return (
    <nav className='shadow-lg mb-4'>
      <div className='container mx-auto px-4 py-5 flex justify-between items-center'>
        <Link href='/'>
          <a className='logo text-2xl font-bold'>The<span className='text-green-600'>I</span>Blog</a>
        </Link>
        <div className='nav__links flex space-x-6'>
          <Link href='/'><a className='hover:text-green-600'>Home</a></Link>
          <Link href='/about'><a className='hover:text-green-600'>About</a></Link>
          <Link href='/contact'><a className='hover:text-green-600'>Contact</a></Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav