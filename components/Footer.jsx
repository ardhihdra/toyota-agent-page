// Footer.js

import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-t-stone-800 w-screen text-white">
      <div className="container mx-auto p-12 w-full md:w-2/4">
        {/* Quick Links */}
        <div className="w-full flex flex-col justify-center items-center gap-2 mx-auto text-center mb-12">
          <h2 className="font-bold text-3xl">Toyota Garut</h2>
          <Image alt="footer" src="/toyota.png" width={60} height={60} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-6">
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="footer-ul">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#why-us">About Us</a>
              </li>
              <li>
                <a href="#car-list">Cars</a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=123456789"
                  target='_blank'
                  rel='noreferrer'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Latest Post Blog */}
          <div>
            <h3 className="font-bold mb-4">Latest Post Blog</h3>
            <ul className="footer-ul">
              <li>
                <a href="/blog/harga-terbaik">Harga Terbaik</a>
              </li>
              <li>
                <a href="/blog/konsultasi-nyaman">Konsultasi Nyaman</a>
              </li>
              <li>
                <a href="/blog/promo-menarik">Promo Menarik</a>
              </li>
              {/* Add more latest blog posts as needed */}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <p className="pb-1 text-zinc-400">Email: infopromotoyotagarut@gmail.com</p>
            <p className="pb-1 text-zinc-400"><a href="https://api.whatsapp.com/send?phone=123456789">Phone: +6281324740047</a></p>
            <p className="pb-1 text-zinc-400">Address: 123 Street, City, Country</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-16">
          <p className="text-sm">&copy; {new Date().getFullYear()} Kaizeni. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
