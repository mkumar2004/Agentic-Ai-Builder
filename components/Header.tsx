"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

function Header() {
  return (
    <header className='fixed top-0 left-0 right-0 z-20 h-20 border-border/50 bg-background/80 backdrop-blur-md'>
      <nav className='mx-auto flex h-full max-w-7xl items-center justify-between'>

        {/* Logo */}
        <Link href="/" className='flex items-center'>
          <Image
            src={'/antiLogo.png'}
            width={120}
            height={120}
            alt='Logo'
            priority
            className='h-16 w-auto rounded-2xl'
          />
        </Link>

        {/* Nav Links */}
        <div className='flex items-center gap-6'>
          <Link href="/get-started" className='text-sm font-medium text-foreground/70 transition-colors hover:text-primary'>
            Get Started
          </Link>

          <Show when="signed-in">
            <Link href="/projects" className='text-sm font-medium text-foreground/70 transition-colors hover:text-primary'>
              Projects
            </Link>
            <Link href="/pricing" className='text-sm font-medium text-foreground/70 transition-colors hover:text-primary'>
              Pricing
            </Link>
            <Link href="/credits" className='text-sm font-medium text-foreground/70 transition-colors hover:text-primary'>
              Credits
            </Link>
          </Show>

          {/* White / Green theme toggle */}
          <ThemeToggle />

          <Show when="signed-out">
            <SignInButton>
              <button className="relative text-sm font-medium text-foreground/80 hover:text-foreground transition-colors px-4 h-10 sm:h-12 cursor-pointer">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="group relative inline-flex items-center justify-center rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-5 sm:px-6 cursor-pointer text-white overflow-hidden bg-gradient-to-r from-[#6c47ff] via-[#8b5cf6] to-[#a855f7] shadow-[0_0_20px_rgba(108,71,255,0.5)] hover:shadow-[0_0_30px_rgba(108,71,255,0.75)] transition-shadow duration-300">
                <span className="absolute inset-0 bg-gradient-to-r from-[#a855f7] via-[#8b5cf6] to-[#6c47ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">Sign Up</span>
              </button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
        </div>

      </nav>
    </header>
  )
}

export default Header