import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contacto',
    description: 'Página de contacto',
    keywords: ['contacto'],
}

export default function ContactPage() {
    return (
        <>
            <span className='text-7xl'>Contact Page</span>
        </>
    )
}
