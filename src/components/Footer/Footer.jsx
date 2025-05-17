"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const Footer=()=> {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("home")

  const navItems = [
    { name: "HOME", href: "#", id: "home" },
    { name: "BIOGRAPHY", href: "#", id: "biography" },
    { name: "WORKS", href: "#", id: "works" },
    { name: "CHESS IN SLUM", href: "#", id: "chess-in-slum" },
    { name: "PARTNERSHIP", href: "#", id: "partnership" },
    { name: "SOCIAL MEDIA", href: "#", id: "social-media" },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center bg-[#fafafa]">
      <div className="w-full max-w-7xl flex flex-col items-center px-4">
        <div className="mt-16 mb-12 relative flex flex-col items-center">
          {/* SVG Circular Text */}
          <svg viewBox="0 0 300 300" className="w-[300px] h-[300px] max-w-full" aria-hidden="true">
            <defs>
              <path id="textCircle" d="M 150, 150 m 0, -120 a 120,120 0 1,1 -0.1,0 z" fill="transparent" />
            </defs>
            <text className="text-[#0a0a0a] font-bold">
              <textPath href="#textCircle" startOffset="0%" className="text-sm tracking-widest">
                THE ONLY TUNDE • ONAKOYA
              </textPath>
            </text>
          </svg>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32">
            <Image
              src="/chess-piece.png"
              alt="Chess piece logo"
              width={128}
              height={128}
              className="object-contain"
              priority
            />
          </div>
        </div>

       
        {/* Navigation */}
        <nav className="w-full mb-24" aria-label="Main navigation">
          <ul
            id="mobile-menu"
            className={`${!isMenuOpen ? "hidden" : "flex"} flex-row flex-wrap justify-center items-center space-x-2 md:space-x-8`}
          >
            {navItems.map((item, index) => (
              <>
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={`relative text-[#0a0a0a] hover:text-[#333333] transition-colors group ${
                      activeLink === item.id
                        ? "after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-[#0a0a0a]"
                        : ""
                    }`}
                    onClick={() => setActiveLink(item.id)}
                  >
                    {item.name}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#333333] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                { index < navItems.length - 1 && <li className="text-[#d9d9d9]">•</li>}
              </>
            ))}
          </ul>
        </nav>
      </div>

      {/* Footer with Copyright */}
      <footer className="w-full mt-auto relative overflow-hidden">
        {/* Abstract Background Pattern */}
        <div className="w-full h-16 bg-[#000000] overflow-hidden">

          <img
  src="/footer-pattern.jpeg"
  alt="Decorative pattern"
  class="w-full h-full object-cover"
/>
        </div>

        {/* Copyright Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-center text-[#fafafa] tracking-wider">© TUNDE ONAKOYA · 2024</p>
        </div>
      </footer>
    </main>
  )
}


export default Footer