import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About Page',
    description: 'Página con la descripción del sitio',
    keywords: ['About Page', 'Felipe', 'Información'],
}

// AboutPage() o About() solo? revisar error que da con context

export default function AboutPage() {
    return <span className='text-7xl'>About Page</span>
}
