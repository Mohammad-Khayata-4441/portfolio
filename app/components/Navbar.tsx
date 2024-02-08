"use client"
import { useActiveLink } from '@/hooks/useActivePath';
import { Link } from '@/i18n';
import { BsGithub, BsInstagram, BsLinkedin, BsTelegram, BsTwitterX, BsWhatsapp } from 'react-icons/bs'
import { CiGrid41, CiHome, CiPhone, CiUser } from 'react-icons/ci'

const MyComponent: React.FC = () => {
  const isActivePath = useActiveLink()
  // const isDark = useDark({ initialValue: 'dark' });
  // const toggleDark = useToggle(isDark);

  const navLinks = [
    {
      title: 'Home',
      path: '/',
      disabled: false,
      icon: CiHome,
    },
    {
      title: 'About',
      path: '/about',
      disabled: false,
      icon: CiUser,
    },
    {
      title: 'Portfolio',
      path: '/portfolio',
      disabled: false,
      icon: CiGrid41,
    },
    {
      title: 'Contact',
      path: '/contact',
      disabled: false,
      icon: CiPhone,
    },
    // {
    //   title: 'Blog',
    //   path: '/blog',
    //   disabled: false,
    //   icon: 'newspaper',
    // },
  ];

  return (
    <header className="flex fixed bottom-0 md:top-0 md:bottom-auto w-screen items-center justify-center  p-5 z-10">

      <div className="content hidden md:block col-span-3"></div>

      <nav className="rounded-2xl col-span-12 sm:col-span-8 px-8 py-2 md:py-0 md:px-28  bg-dark/60 backdrop-blur-xl border border-text hover:scale-[1.01] hover:border-secondary transition duration-[3000ms] hover:shadow-2xl">
        <ul className="flex items-center justify-center list-none space-x-8 sm:space-x-12 md:space-x-16">
          {navLinks.map((item) => (
            <li key={item.path} className={'text-text  font-bold transition ' + `${isActivePath(item.path) ? 'nav-link-active' : 'hover:text-white'}`}>
              <Link href={item.path} className='className="py-2 md:py-6 flex space-x-1 items-center select-none"'>

                {/* Assuming Icon is another component */}
                <item.icon className="text-4xl md:text-2xl select-none" />
                <span className="font-semibold hidden md:inline">{item.title} </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="content hidden col-span-3 lg:flex justify-end">

        <ul className='flex items-center gap-8 flex-col fixed right-5 top-1/2 -translate-y-1/2' >
          <li>
            <Link href={'https://github.com/Mohammad-Khayata-4441'} className='text-lg text-text hover:text-white transition'>
              <BsGithub></BsGithub>
            </Link>
          </li>
          <li>
            <Link href={'https://twitter.com/Mohammad_Kh4441'} className='text-lg text-text hover:text-white transition'>
              <BsTwitterX></BsTwitterX>
            </Link>
          </li>
          <li>
            <Link href={'https://www.instagram.com/mohammad_khayat4441/'} className='text-lg text-text hover:text-white transition'>
              <BsInstagram></BsInstagram>
            </Link>
          </li>
          <li>
            <Link href={'https://t.me/Mohammadkh4441'} className='text-lg text-text hover:text-white transition'>
              <BsTelegram></BsTelegram>
            </Link>
          </li>
          <li>
            <Link href={'https://wa.me/+963956954441'} className='text-lg text-text hover:text-white transition'>
              <BsWhatsapp></BsWhatsapp>
            </Link>
          </li>
          <li>
            <Link href={'https://www.linkedin.com/in/mohammad-khayata-9169801a9'} className='text-lg text-text hover:text-white transition'>
              <BsLinkedin></BsLinkedin>
            </Link>
          </li>
        </ul>
      </div>

    </header >
  );
};

export default MyComponent;