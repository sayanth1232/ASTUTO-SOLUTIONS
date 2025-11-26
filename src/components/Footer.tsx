import { Link } from 'react-router-dom';
import { MailIcon, PhoneIcon, MapPinIcon, FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
  };


  return (
    <footer className="bg-gray-900 text-gray-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">
              Latest News from
            </h3>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 rounded-lg"
              />
              <Button
                type="submit"
                className="bg-purple-600 text-white hover:bg-purple-700 font-medium rounded-lg"
              >
                Subscribe
              </Button>
            </form>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#resources" className="text-gray-300 hover:text-white transition-colors">
                  Insights
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start gap-2 text-gray-300">
                <MapPinIcon size={20} className="mt-1 flex-shrink-0" />
                <span>3rd Floor, JK Tower, Kottankavu Jn, Vennala PO,
Ernakulam 682028</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <PhoneIcon size={20} className="flex-shrink-0" />
                <span>+91 8089732244</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <MailIcon size={20} className="flex-shrink-0" />
                <span>ask@astutosolution.com</span>
              </li>
            </ul>
            <Link to="/contact">
              <Button className="bg-purple-600 text-white hover:bg-purple-700 font-medium w-full rounded-lg">
                Free Consultation
              </Button>
            </Link>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <TwitterIcon size={24} />
            </a>
            <a
              href="https://in.linkedin.com/company/astuto-solutions-llp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={24} />
            </a>
            <a
              href="https://www.instagram.com/astuto_solutions_llp/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon size={24} />
            </a>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-gray-400 text-sm">
              © 2024 Astuto Solutions LLP. All rights reserved.
            </p>
            <span className="text-gray-600"></span>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
