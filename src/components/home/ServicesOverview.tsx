import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ServicesOverview() {
  return (
    <section id="services-overview" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-left">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">OUR SERVICES</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
              Startup workforce optimization
            </h2>
            <p className="text-base lg:text-lg mb-6 text-gray-600 leading-relaxed">
              We help startups optimize their workforce and streamline operations for maximum efficiency. Our expert team provides comprehensive solutions tailored to your unique business needs.
            </p>
            <p className="text-base lg:text-lg mb-8 text-gray-600 leading-relaxed">
              From financial planning to strategic consulting, we're here to support your growth journey every step of the way.
            </p>
            <Link to="/services">
              <Button className="bg-purple-900 text-white hover:bg-purple-800 font-medium px-6 py-6 h-auto rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                Learn More
                <ArrowRightIcon size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Image */}
<div className="animate-fade-in-right flex justify-center">
  <div className="group w-full overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-500">
    <img
      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
      alt="Team collaboration"
      width={800}
      height={600}
      loading="lazy"
      className="
        w-full 
        h-auto 
        object-cover
        transition-transform 
        duration-500 
        ease-out
        group-hover:scale-105
      "
    />
  </div>
</div>

        </div>
      </div>
    </section>
  );
}
