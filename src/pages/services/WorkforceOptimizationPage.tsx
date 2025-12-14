import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeftIcon, CheckCircle2Icon, ArrowRightIcon, UsersIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function WorkforceOptimizationPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    'Strategic workforce planning and analysis',
    'Talent acquisition and retention strategies',
    'Performance management systems',
    'Organizational structure optimization',
    'Employee engagement programs',
    'Leadership development initiatives',
  ];

  const services = [
    {
      title: 'Team Structure Design',
      description: 'Create efficient organizational structures that maximize productivity and collaboration',
    },
    {
      title: 'Resource Planning',
      description: 'Optimize resource allocation to ensure the right people are in the right roles',
    },
    {
      title: 'Talent Strategy',
      description: 'Develop comprehensive strategies for attracting and retaining top talent',
    },
    {
      title: 'Performance Management',
      description: 'Implement systems to track, measure, and improve employee performance',
    },
    {
      title: 'Training & Development',
      description: 'Build programs that enhance skills and prepare teams for future challenges',
    },
    {
      title: 'Culture Building',
      description: 'Foster a positive workplace culture that drives engagement and results',
    },
  ];

  const handleGetStarted = () => {
    window.location.href = '/contact';
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 min-h-[400px] flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-16 w-full">
          <Button
            onClick={() => navigate('/services')}
            variant="ghost"
            className="text-white hover:bg-white/10 mb-8"
          >
            <ArrowLeftIcon size={20} className="mr-2" />
            Back to Services
          </Button>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm font-medium">WORKFORCE OPTIMIZATION</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                Workforce Optimization
              </h1>
              <p className="text-lg lg:text-xl font-light leading-relaxed opacity-90">
                Build high-performing teams through strategic workforce planning and optimization.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Workforce Optimization"
                width={800}
                height={600}
                loading="eager"
                className="rounded-2xl w-full h-auto shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Your people are your greatest asset
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our workforce optimization services help you build, develop, and retain high-performing teams that drive business success.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We work with you to create organizational structures, talent strategies, and performance management systems that maximize productivity and employee satisfaction.
              </p>
            </div>
            <div>
              <Card className="p-8 bg-purple-50 border-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  What you'll achieve
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2Icon size={24} className="text-purple-900 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Workforce Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From team structure to talent development, we cover all aspects of workforce optimization
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <UsersIcon size={24} className="text-purple-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-purple-900 to-purple-700">
        <div className="max-w-4xl mx-auto px-8 lg:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Build your dream team
          </h2>
          <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
            Let's discuss how our workforce optimization services can help you build high-performing teams.
          </p>
          <Button
            onClick={handleGetStarted}
            className="bg-white text-purple-900 hover:bg-gray-100 font-semibold text-lg px-8 py-6 h-auto rounded-full"
            size="lg"
          >
            Schedule Free Consultation
            <ArrowRightIcon size={20} className="ml-2" />
          </Button>
        </div>
      </section>
    </main>
  );
}
