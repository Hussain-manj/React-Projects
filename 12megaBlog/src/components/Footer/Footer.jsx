import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo + Info */}
          <div>
            <div className="flex items-center mb-4">
              <Logo width="90px" />
            </div>
            <p className="text-sm text-gray-600">
              &copy; 2025 Sain's. All rights reserved.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-500 uppercase">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-600">Features</Link></li>
              <li><Link to="/" className="hover:text-blue-600">Pricing</Link></li>
              <li><Link to="/" className="hover:text-blue-600">Affiliate</Link></li>
              <li><Link to="/" className="hover:text-blue-600">Press</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-500 uppercase">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-600">Account</Link></li>
              <li><Link to="/" className="hover:text-blue-600">Help</Link></li>
              <li><Link to="/" className="hover:text-blue-600">Contact</Link></li>
              <li><Link to="/" className="hover:text-blue-600">Customer Support</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-500 uppercase">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-600">Terms</Link></li>
              <li><Link to="/" className="hover:text-blue-600">Privacy</Link></li>
              <li><Link to="/" className="hover:text-blue-600">Licensing</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
