"use client"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gradient-to-br from-[#BF3131] via-[#A02828] to-[#8B1F1F] text-white relative overflow-hidden">
      {/* Background decorations di sini jika dibutuhkan... */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="footer-decoration absolute top-10 left-10 w-20 h-20">
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold mb-6">
              <span className="text-red-300">P</span>
              <span className="text-pink-300">A</span>
              <span className="text-green-400">N</span>
              <span className="text-yellow-300">O</span>
              <span className="text-blue-300">R</span>
              <span className="text-purple-400">I</span>
              <span className="text-yellow-300">C</span>
              <span className="text-blue-300">A</span>
              <span className="text-orange-300">M</span>
            </h1>
            <p className="text-white/80 text-lg">
              Abadikan momen spesial Anda dengan frame keren dan berbagi dengan
              teman-teman!
            </p>
          </div>

          {/* Instagram Section */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6">Ikuti Kami</h3>
            <a
              href="https://instagram.com/panoricam"
              target="_blank"
              rel="noreferrer"
              className="instagram-gradient hover:-translate-y-1 transition-all rounded-2xl p-4 inline-flex items-center space-x-3 text-white shadow-lg"
            >
              <span>@panoricam</span>
            </a>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-semibold mb-6">Hubungi Kami</h3>
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-4 mb-4">
              <p>+62 882-0013-30851</p>
              <p>panoricam5@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            © 2025 Panoricam. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 hover:-translate-y-1 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all"
          >
            ↑ Top
          </button>
        </div>
      </div>
    </footer>
  )
}
