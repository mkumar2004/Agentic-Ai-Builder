import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FireworksBackground } from '@/components/animate-ui/components/backgrounds/fireworks'

const layout  =({
    children,
}:Readonly<{
    children:React.ReactNode;
}>)=>{
    return (
        <FireworksBackground className="min-h-screen w-full flex items-center justify-center"> 
            <div className="flex flex-col items-center gap-6">
                <Link href="/">
                    <Image
                        src="/antiLogo.png"
                        width={120}
                        height={120}
                        alt="Logo"
                        priority
                        className="h-16 w-auto rounded-2xl cursor-pointer hover:opacity-90 transition-opacity"
                    />
                </Link>
                {children}
            </div>
        </FireworksBackground>
    )
}

export default layout;