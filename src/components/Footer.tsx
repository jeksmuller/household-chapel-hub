
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-church-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img 
              src="/lovable-uploads/281ba11f-864f-4663-8623-8aa238b62433.png" 
              alt="Household Chapel International Logo" 
              className="h-24 mb-4 bg-white p-2 rounded-full" 
            />
            <p className="text-gray-300 mt-4">
              Christ in You! The hope of Glory
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" aria-label="Facebook" className="hover:text-church-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-church-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-church-red transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Youtube" className="hover:text-church-red transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-church-red transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-church-red transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-church-red transition-colors">Services</Link></li>
              <li><Link to="/sermons" className="hover:text-church-red transition-colors">Sermons</Link></li>
              <li><Link to="/events" className="hover:text-church-red transition-colors">Events</Link></li>
              <li><Link to="/contact" className="hover:text-church-red transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Service Times</h3>
            <ul className="space-y-3">
              <li>
                <p className="font-medium">Sunday Service</p>
                <p className="text-gray-300">9:00 AM - 11:30 AM</p>
              </li>
              <li>
                <p className="font-medium">Wednesday Bible Study</p>
                <p className="text-gray-300">6:30 PM - 8:00 PM</p>
              </li>
              <li>
                <p className="font-medium">Friday Prayer Meeting</p>
                <p className="text-gray-300">7:00 PM - 9:00 PM</p>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-church-red flex-shrink-0" />
                <span>123 Faith Avenue, City, Country</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-church-red" />
                <span>+1 (234) 567-8900</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-church-red" />
                <span>info@householdchapel.org</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Household Chapel International. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
