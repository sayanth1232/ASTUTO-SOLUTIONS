import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeftIcon, CheckCircle2Icon, ArrowRightIcon, FileTextIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function TaxCompliancePage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    'Comprehensive tax planning and strategy',
    'Regulatory compliance management',
    'Audit preparation and support',
    'Tax optimization opportunities',
    'Risk mitigation strategies',
    'Ongoing compliance monitoring',
  ];

  const services = [
    {
      title: 'Tax Planning',
      description: 'Strategic tax planning to minimize liabilities and maximize savings',
    },
    {
      title: 'Compliance Management',
      description: 'Ensure your business meets all regulatory requirements and deadlines',
    },
    {
      title: 'Audit Support',
      description: 'Expert guidance and representation during tax audits',
    },
    {
      title: 'Regulatory Guidance',
      description: 'Stay informed about changing tax laws and regulations',
    },
    {
      title: 'Filing Services',
      description: 'Accurate and timely preparation of all tax filings',
    },
    {
      title: 'Tax Credits',
      description: 'Identify and claim all available tax credits and incentives',
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
                <span className="text-sm font-medium">TAX & COMPLIANCE</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                Tax & Compliance Services
              </h1>
              <p className="text-lg lg:text-xl font-light leading-relaxed opacity-90">
                Navigate complex tax regulations with confidence and ensure full compliance.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop"
                alt="Tax & Compliance"
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
                Stay compliant, minimize risk
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our tax and compliance services ensure your business meets all regulatory requirements while optimizing your tax position.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We provide comprehensive support from strategic tax planning to audit representation, helping you navigate complex regulations with confidence.
              </p>
            </div>
            <div>
              <Card className="p-8 bg-purple-50 border-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Our commitment to you
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
              Complete Tax & Compliance Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From planning to filing, we handle all aspects of tax and compliance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <FileTextIcon size={24} className="text-purple-900" />
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

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-purple-900 mb-2">100%</div>
              <p className="text-gray-600 text-lg">Compliance Rate</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-purple-900 mb-2">500+</div>
              <p className="text-gray-600 text-lg">Successful Audits</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-purple-900 mb-2">$50M+</div>
              <p className="text-gray-600 text-lg">Tax Savings Achieved</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-purple-900 to-purple-700">
        <div className="max-w-4xl mx-auto px-8 lg:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ensure compliance with confidence
          </h2>
          <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
            Let's discuss how our tax and compliance services can protect your business.
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
