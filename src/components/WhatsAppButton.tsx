import { MessageCircleIcon } from 'lucide-react';
import { useState } from 'react';

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  
  // Replace with your actual WhatsApp business number (include country code without + or spaces)
  // Example: For +1 555-123-4567, use 15551234567
  const whatsappNumber = '+91 8089732244'; // Replace with your actual number
  const message = encodeURIComponent('Hello! I would like to know more about your services.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip */}
      <div
        className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
      >
        Chat with us on WhatsApp
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
          <div className="border-8 border-transparent border-l-gray-900"></div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <div className="relative">
        {/* Pulse animation rings */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
        <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-50"></div>
        
        {/* Main button */}
        <div className="relative bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-3xl">
          <MessageCircleIcon size={32} className="drop-shadow-lg" />
        </div>
      </div>
    </a>
  );
}
