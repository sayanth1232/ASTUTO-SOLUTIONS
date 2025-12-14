import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeftIcon, CheckCircle2Icon, ArrowRightIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function FinancialPlanningPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: 'Budget Planning',
      description: 'Create comprehensive budgets that align with your strategic objectives',
    },
    {
      title: 'Financial Forecasting',
      description: 'Accurate projections to help you plan for the future with confidence',
    },
    {
      title: 'Performance Analysis',
      description: 'Deep dive into your financial metrics to identify opportunities',
    },
    {
      title: 'Cost Optimization',
      description: 'Identify and eliminate inefficiencies to improve profitability',
    },
    {
      title: 'Cash Flow Management',
      description: 'Ensure healthy cash flow to support operations and growth',
    },
    {
      title: 'Investment Strategy',
      description: 'Strategic guidance on capital allocation and investment decisions',
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
                <span className="text-sm font-medium">FINANCIAL PLANNING</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                Financial Planning & Analysis
              </h1>
              <p className="text-lg lg:text-xl font-light leading-relaxed opacity-90">
                Expert financial guidance to optimize performance and maximize profitability.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
                alt="Financial Planning"
                width={800}
                height={600}
                loading="eager"
                className="rounded-2xl w-full h-auto shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Financial Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From budgeting to forecasting, we provide the financial expertise you need
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <CheckCircle2Icon size={24} className="text-purple-900" />
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

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-purple-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                alt="Financial Analysis"
                width={800}
                height={600}
                loading="lazy"
                className="rounded-2xl w-full h-auto shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Data-driven financial decisions
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our financial planning and analysis services provide you with the insights and tools needed to make informed decisions that drive profitability and growth.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2Icon size={24} className="text-purple-900 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Real-time insights</h4>
                    <p className="text-gray-600">Access to up-to-date financial data and analytics</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2Icon size={24} className="text-blue-900 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Scenario planning</h4>
                    <p className="text-gray-600">Model different scenarios to prepare for the future</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2Icon size={24} className="text-blue-900 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Expert guidance</h4>
                    <p className="text-gray-600">Work with experienced financial professionals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-purple-900 to-purple-700">
        <div className="max-w-4xl mx-auto px-8 lg:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Optimize your financial performance
          </h2>
          <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
            Let's discuss how our financial planning services can help you achieve your goals.
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
