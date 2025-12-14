import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeftIcon, CheckCircle2Icon, ArrowRightIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function BusinessStrategyPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    'Data-driven market analysis and insights',
    'Customized growth strategies aligned with your vision',
    'Competitive positioning and differentiation',
    'Risk assessment and mitigation planning',
    'Long-term sustainability roadmap',
    'Performance metrics and KPI tracking',
  ];

  const caseStudies = [
    {
      company: 'Tech Startup Inc.',
      challenge: 'Needed to scale operations while maintaining profitability',
      result: '300% revenue growth in 18 months',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    },
    {
      company: 'Retail Chain Co.',
      challenge: 'Facing increased competition from e-commerce',
      result: 'Successfully pivoted to omnichannel strategy',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop',
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
                <span className="text-sm font-medium">STRATEGIC PLANNING</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                Business Strategy Consulting
              </h1>
              <p className="text-lg lg:text-xl font-light leading-relaxed opacity-90">
                Transform your vision into actionable strategies that drive sustainable growth and competitive advantage.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                alt="Business Strategy"
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
                Strategic planning for long-term success
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our business strategy consulting services help you navigate complex market dynamics and make informed decisions that position your company for sustainable growth.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We work closely with your leadership team to develop comprehensive strategies that align with your vision, leverage your strengths, and address market opportunities.
              </p>
            </div>
            <div>
              <Card className="p-8 bg-purple-50 border-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  What you'll get
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

      {/* Case Studies */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how we've helped businesses achieve remarkable results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg">
                <img
                  src={study.image}
                  alt={study.company}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {study.company}
                  </h3>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-purple-900 mb-2">Challenge:</p>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-purple-900 mb-2">Result:</p>
                    <p className="text-gray-900 font-bold text-lg">{study.result}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-purple-900 to-purple-700">
        <div className="max-w-4xl mx-auto px-8 lg:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to develop your winning strategy?
          </h2>
          <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
            Let's discuss how our strategic planning services can help you achieve your business goals.
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
