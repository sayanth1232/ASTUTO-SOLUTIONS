import { Card } from '@/components/ui/card';
import { ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ServicesGrid() {
  const services = [
    {
      title: 'Business Strategy',
      description:
        'Strategic planning and execution to help your business achieve sustainable growth and competitive advantage.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    },
    {
      title: 'Planning and Analysis',
      description:
        'Comprehensive financial planning and analysis services to optimize your business performance and profitability.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    },
    {
      title: 'Ongoing Support',
      description:
        'Continuous support and guidance to ensure your business stays on track and adapts to changing market conditions.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop',
    },
  ];

  return (
    <section id="services-grid" className="py-16 lg:py-24 bg-purple-50">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-sm font-medium">WHAT WE DO</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Our Core Services
          </h2>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <Card className="p-8 lg:p-10 bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-base lg:text-lg mb-6 text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <Link to="/services">
                    <button className="flex items-center gap-2 text-purple-900 hover:text-purple-700 transition-colors font-semibold group">
                      Learn More
                      <ArrowRightIcon size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </Card>
              </div>

              {/* Image */}
<div className={index % 2 === 1 ? 'lg:order-1 flex justify-center' : 'flex justify-center'}>
  <div className="group w-full overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-500">
    <img
      src={service.image}
      alt={service.title}
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
          ))}
        </div>
      </div>
    </section>
  );
}
