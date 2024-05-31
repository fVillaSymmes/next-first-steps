import Link from 'next/link'
import { HomeIcon } from '@primer/octicons-react'
import { ActiveLink } from '../active-link/ActiveLink'

const navItems = [
    { path: '/about', text: 'About' },
    { path: '/contact', text: 'Contact' },
    { path: '/pricing', text: 'Pricing  ' },
]

export const Navbar = async () => {
    console.log('Navbar creado')
    // La weá genera 8 console logs seguidos en el servidor ¿Qué sucede con eso?

    return (
        <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
            <Link href={'/'} className='flex items-center'>
                <HomeIcon className='mr-2' />
                <span>Home</span>
            </Link>

            <div className='flex flex-1'></div>

            {navItems.map((navItem) => (
                <ActiveLink key={navItem.text} {...navItem} /> // Operador Spread
            ))}
        </nav>
    )
}

// En esta versión de Next.js el prefetch de Link solo funciona en el modo de producción.
// No podremos apreciar las bondades de Link en el modo de desarrollo "npm run dev"
