import React, { useState } from "react";
import { Menu, X, Search, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const dropdownMenus = {
    Home: ["SEO Company", "Marketing Agency", "Creative Agency", "Advertising Agency"],
    Pages: ["About", "Services", "Our Team", "FAQ", "Pricing", "Tools"],
    Portfolio: ["Web Design", "Mobile Apps", "Branding"],
    Blog: ["Latest Posts", "Tutorials", "Industry News"],
    Contacts: ["Contact Form", "Location", "Support"]
  };

  return (
    <div className="w-full font-[Quicksand,sans-serif] fixed top-0 left-0 z-50 bg-transparent">
      <header className="flex items-center justify-between px-6 py-4 text-white backdrop-blur-md">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://seo.axiomthemes.com/wp-content/uploads/2023/03/logo-inverse1-nocopyright.png"
            alt="Smart SEO Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {Object.entries(dropdownMenus).map(([item, subItems]) => (
            <div className="relative group" key={item}>
              <a href="#" className="hover:text-cyan-400 transition">
                {item}
              </a>
              <div className="absolute left-0 top-full mt-2 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 transform origin-top hidden group-hover:flex flex-col bg-[#0e0e5b] text-white rounded-xl shadow-lg p-4 w-56 z-10">
                {subItems.map((sub, i) => (
                  <a href="#" key={i} className="py-1.5 px-2 hover:underline">
                    {sub}
                  </a>
                ))}
              </div>
            </div>
          ))}
          <button
            className="hover:text-cyan-400"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search size={20} />
          </button>
        </nav>

        {/* Right Side (Desktop) */}
        <div className="hidden md:flex items-center gap-6">
          
          <div className="flex items-center gap-2 text-white font-semibold text-sm">
            <Phone className="text-white" size={18} />
            <span>1 800 458 56 97</span>
          </div>
          <button className="bg-[#3a00ff] hover:bg-[#2900b3] text-white px-5 py-2 rounded-full font-semibold text-sm transition">
            Let’s talk
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-4">
          {/* Search Icon - Always visible */}
          <button onClick={() => setIsSearchOpen(true)}>
            <Search size={22} />
          </button>

          {/* Menu Toggle */}
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90 text-white flex flex-col gap-4 px-6 py-4">
          {Object.keys(dropdownMenus).map((item) => (
            <a href="#" key={item} className="hover:text-cyan-400">
              {item}
            </a>
          ))}
          <div className="flex flex-col gap-2 mt-4">
            <span>📞 1 800 458 56 97</span>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm">
              Let’s talk
            </button>
          </div>
        </div>
      )}

      {/* Fullscreen Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-[#0a0f1c] bg-opacity-95 z-50 flex flex-col p-6">
          <div className="flex justify-between items-center mb-10">
            {/* Logo */}
            <img
              src="https://seo.axiomthemes.com/wp-content/uploads/2023/03/logo-inverse1-nocopyright.png"
              alt="Smart SEO Logo"
              className="h-8 w-auto"
            />
            {/* Close Icon */}
            <button onClick={() => setIsSearchOpen(false)}>
              <X size={32} className="text-white" />
            </button>
          </div>

          {/* Input Field */}
          <div className="relative max-w-2xl w-full mx-auto">
            <input
              type="text"
              placeholder="Type words and hit enter"
              className="w-full border-b border-gray-600 bg-transparent text-gray-300 placeholder-gray-500 outline-none py-3 pr-10 pl-2 text-xl"
            />
            <Search className="absolute right-2 top-3 text-gray-400" size={24} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
