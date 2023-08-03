import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <header className="bg-black/90 border-b border-b-slate-700 text-white">
      <div className="container mx-auto p-4 flex items-center justify-between">
        {/* Logo */}
        <a className="text-2xl font-bold" data-aa-action="aa-link" href="/" tabIndex="0" data-di-id="#logo" data-aa-link-text="Toyota Logo"> 
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="56" height="31">
            <g>
              <path fill="#eb0a1e" d="M14 1.809h27.381V29.19H14z"></path>
              <path className="st5a" d="M32.257 9.528c-1.271-.409-2.852-.65-4.566-.65s-3.296.241-4.566.65c-3.38 1.087-5.702 3.343-5.702 5.951 0 3.668 4.597 6.643 10.269 6.643 5.67 0 10.267-2.975 10.267-6.643 0-2.608-2.323-4.864-5.702-5.951m-4.566 9.737c-.846 0-1.538-1.664-1.578-3.755a17.561 17.561 0 0 0 3.156 0c-.041 2.092-.732 3.755-1.578 3.755m-1.471-5.391c.231-1.468.802-2.507 1.471-2.507.668 0 1.24 1.04 1.47 2.507a16.18 16.18 0 0 1-2.941 0m3.841-.111c-.343-2.304-1.275-3.955-2.37-3.955-1.095 0-2.027 1.651-2.37 3.955-2.086-.326-3.544-1.067-3.544-1.93 0-1.163 2.648-2.106 5.914-2.106 3.266 0 5.914.943 5.914 2.106 0 .863-1.458 1.604-3.544 1.93m-11.14 1.472c0-1.125.433-2.178 1.188-3.085a1.338 1.338 0 0 0-.013.19c0 1.415 2.125 2.617 5.088 3.059-.002.107-.004.214-.004.322 0 2.63.73 4.858 1.738 5.626-4.482-.273-7.997-2.904-7.997-6.112m9.543 6.113c1.008-.768 1.738-2.996 1.738-5.626 0-.108-.001-.215-.004-.322 2.962-.442 5.087-1.645 5.087-3.059 0-.064-.005-.127-.014-.19.755.907 1.188 1.961 1.188 3.085.001 3.207-3.514 5.838-7.995 6.112"></path>
            </g>
          </svg> */}
          <Image alt="logo" src="/toyota.png" width={90} height={90} />
        </a>
        {/* Clickable Menu */}
        <nav className="space-x-2 sm:space-x-12 font-semibold">
          <a href="#why-us" className="text-white hover:text-light-blue hover:text-blue-500 mx-1 duration-300">Profil</a>
          <a href="#contact-us" className="text-white hover:text-light-blue hover:text-blue-500 mx-1 duration-300">Kontak</a>
          <a href="#bought-by" className="text-white hover:text-light-blue hover:text-blue-500 mx-1 duration-300">Galeri</a>
        </nav>

        {/* Contact Us Button */}
        {/* <button className="gradient-button tracking-wide text-white px-2 py-1 sm:px-4 sm:py-2 rounded-md hover:bg-light-orange transition-colors"> */}
        <button className="bg-green-500 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-md hover:bg-light-orange transition-colors hidden md:block">
          <a
            href="#car-list" // Replace with your WhatsApp number
            // href="https://api.whatsapp.com/send?phone=6281324740047" // Replace with your WhatsApp number
            // target="_blank"
            rel="noopener noreferrer"
          >
            Pesan Sekarang
          </a>
        </button>
      </div>
    </header>
  );
};

export default Header;
