import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-purple-900 to-purple-700 min-h-[600px] lg:min-h-[700px] pt-20">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 animate-fade-in-up">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop"
              alt="Professional woman with glasses"
              width={800}
              height={600}
              loading="eager"
              className="rounded-2xl w-full h-auto shadow-2xl hover:shadow-3xl transition-shadow duration-500"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 text-white animate-fade-in-up animation-delay-200">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              We handle your numbers, you drive the growth.
            </h1>
            <p className="text-lg lg:text-xl mb-8 font-light leading-relaxed opacity-90">
              Focus on what you do best while we take care of your financial operations.
            </p>
            <Link to="/services">
              <Button className="bg-white text-purple-900 hover:bg-gray-100 font-semibold text-lg px-8 py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                Get Started
                <ArrowRightIcon size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
