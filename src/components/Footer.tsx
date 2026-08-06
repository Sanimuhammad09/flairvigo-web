import { Link } from '@tanstack/react-router'

export function Footer() {
  return (
    <footer className="bg-[#2a2a2a] text-white pt-16 pb-8">
      <div className="px-6 max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
        
        {/* Brand & Social */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold tracking-widest mb-2">WOMEN WHO<br/>CARE</h2>
          <p className="text-sm font-semibold tracking-widest mb-8">#WEARFLAIRVIGO</p>
          <div className="flex space-x-4">
            <a className="text-gray-400 hover:text-white flex items-center gap-2" href="https://instagram.com/flairvigo" target="_blank" rel="noreferrer">
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
              </svg>
              <span className="font-semibold tracking-wider text-sm">@flairvigo</span>
            </a>
          </div>
        </div>

        {/* Get Help */}
        <div>
          <h4 className="font-bold text-sm tracking-widest uppercase mb-4">Get Help</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><a className="hover:text-white" href="#">Help Center</a></li>
            <li><a className="hover:text-white" href="#">Shipping</a></li>
            <li><a className="hover:text-white" href="#">Returns & Exchanges</a></li>
            <li><a className="hover:text-white" href="#">Bulk Orders</a></li>
            <li><a className="hover:text-white" href="#">Sign up for Texts</a></li>
            <li><a className="hover:text-white" href="#">Contact Us</a></li>
            <li className="pt-2">424-500-8209<br/><span className="text-xs text-gray-400">Call or Text<br/>5am to 8pm PST M-F</span></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-sm tracking-widest uppercase mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link className="hover:text-white" to="/">Home</Link></li>
            <li><Link className="hover:text-white" to="/women">Products</Link></li>
            <li><Link className="hover:text-white" to="/about">About Us</Link></li>
            <li><Link className="hover:text-white" to="/women">Shop</Link></li>
            <li><a className="hover:text-white" href="#">Blog</a></li>
            <li><a className="hover:text-white" href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-bold text-sm tracking-widest uppercase mb-4">Legal</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><a className="hover:text-white" href="#">Terms &amp; Conditions</a></li>
            <li><a className="hover:text-white" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-white" href="#">California Privacy Notice</a></li>
            <li><a className="hover:text-white" href="#">Accessibility Statement</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-8 px-6 max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <p>© 2026 FLAIR VIGO, INC. ALL RIGHTS RESERVED</p>
        <div className="flex items-center space-x-2 mt-4 md:mt-0">
          <img alt="Nigeria Flag" className="w-5 h-auto rounded-sm" src="https://flagcdn.com/w40/ng.png"/>
          <span className="font-semibold text-white tracking-widest">NIGERIA | ENGLISH</span>
        </div>
      </div>
    </footer>
  )
}
