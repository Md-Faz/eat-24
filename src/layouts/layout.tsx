import Header from '@/components/Header';
import Hero from '@/components/Hero';
import React from 'react'
type Props = {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {

    return (
        <div className='flex flex-col min-h-screen min-w-full'>
            <Header />
            <Hero />

            <div className='container mx-auto flex-1 py-10 bg-green-100 min-h-screen min-w-full'>
                {children}
            </div>
        </div>
    )
}

export default Layout