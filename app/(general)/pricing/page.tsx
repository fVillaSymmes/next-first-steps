import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Pricing Page',
    description: 'Página de precios',
    keywords: ['precios', 'pricing'],
}

export default function PricingPage() {
    return (
        <>
            <span className='text-7xl'>Pricing Page</span>
        </>
    )
}
