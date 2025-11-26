import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarIcon, ClockIcon, ArrowRightIcon, BookOpenIcon, FileTextIcon, VideoIcon, DownloadIcon } from 'lucide-react';

export function ResourcesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      title: 'The Ultimate Guide to Financial Planning for Startups',
      excerpt: 'Learn the essential financial planning strategies every startup needs to succeed in their first year and beyond.',
      date: 'March 20, 2024',
      readTime: '8 min read',
      category: 'Finance',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    },
    {
      title: 'Building a High-Performance Team: Best Practices',
      excerpt: 'Discover proven strategies for recruiting, developing, and retaining top talent in your organization.',
      date: 'March 18, 2024',
      readTime: '6 min read',
      category: 'HR',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
    },
    {
      title: 'Tax Optimization Strategies for Growing Businesses',
      excerpt: 'Maximize your tax efficiency with these expert tips and strategies for businesses at every stage of growth.',
      date: 'March 15, 2024',
      readTime: '10 min read',
      category: 'Tax',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
    },
    {
      title: 'Digital Transformation: A Roadmap for Success',
      excerpt: 'Navigate the digital transformation journey with confidence using our comprehensive roadmap and best practices.',
      date: 'March 12, 2024',
      readTime: '7 min read',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
    },
    {
      title: 'Risk Management in Uncertain Times',
      excerpt: 'Learn how to identify, assess, and mitigate risks to protect your business in volatile market conditions.',
      date: 'March 10, 2024',
      readTime: '9 min read',
      category: 'Strategy',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=400&fit=crop',
    },
    {
      title: 'Scaling Your Business: When and How',
      excerpt: 'Understand the right time to scale your business and the strategies to do it successfully without losing quality.',
      date: 'March 8, 2024',
      readTime: '11 min read',
      category: 'Growth',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    },
  ];

  const resources = [
    {
      icon: <FileTextIcon size={32} />,
      title: 'Financial Planning Template',
      description: 'Comprehensive Excel template for creating detailed financial plans and forecasts.',
      type: 'Template',
      color: 'bg-blue-100 text-blue-900',
    },
    {
      icon: <BookOpenIcon size={32} />,
      title: 'Business Strategy Workbook',
      description: 'Step-by-step workbook to help you develop a winning business strategy.',
      type: 'Workbook',
      color: 'bg-purple-100 text-purple-900',
    },
    {
      icon: <VideoIcon size={32} />,
      title: 'Webinar: Tax Planning 101',
      description: 'On-demand webinar covering essential tax planning strategies for businesses.',
      type: 'Video',
      color: 'bg-green-100 text-green-900',
    },
    {
      icon: <FileTextIcon size={32} />,
      title: 'Cash Flow Management Guide',
      description: 'Practical guide to managing cash flow effectively in your business.',
      type: 'Guide',
      color: 'bg-amber-100 text-amber-900',
    },
  ];

  const categories = [
    'All',
    'Finance',
    'HR',
    'Tax',
    'Technology',
    'Strategy',
    'Growth',
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 min-h-[500px] flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-16 lg:py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm font-medium">RESOURCES</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                Knowledge hub for business success
              </h1>
              <p className="text-lg lg:text-xl font-light leading-relaxed opacity-90">
                Access expert insights, guides, templates, and tools to help your business thrive.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop"
                alt="Resources"
                width={800}
                height={600}
                loading="eager"
                className="rounded-2xl w-full h-auto shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Free Resources */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full mb-4">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm font-medium">FREE DOWNLOADS</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Free Resources & Tools
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Download our free templates, guides, and tools to help you get started
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <Card
                key={index}
                className="p-6 bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`${resource.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4`}>
                  {resource.icon}
                </div>
                <div className="text-xs font-semibold text-purple-900 mb-2 uppercase">
                  {resource.type}
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">
                  {resource.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {resource.description}
                </p>
                <Button
                  variant="outline"
                  className="w-full border-purple-900 text-purple-900 hover:bg-purple-900 hover:text-white"
                >
                  <DownloadIcon size={16} className="mr-2" />
                  Download
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 lg:py-24 bg-purple-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full mb-4">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm font-medium">BLOG</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Latest Insights & Articles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Stay informed with expert insights, industry trends, and practical advice
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0
                      ? 'bg-purple-900 text-white'
                      : 'bg-white text-gray-700 hover:bg-purple-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white cursor-pointer group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={400}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-semibold text-purple-900">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-gray-500 text-sm mb-3">
                    <div className="flex items-center gap-1">
                      <CalendarIcon size={16} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ClockIcon size={16} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-gray-900 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <button className="flex items-center gap-2 text-purple-900 hover:text-purple-700 transition-colors font-semibold">
                    Read More
                    <ArrowRightIcon size={16} />
                  </button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              className="bg-purple-900 text-white hover:bg-purple-800 font-medium px-8 py-6 h-auto rounded-lg"
            >
              View All Articles
              <ArrowRightIcon size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-purple-900 to-purple-700">
        <div className="max-w-4xl mx-auto px-8 lg:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Stay updated with our newsletter
          </h2>
          <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
            Get the latest insights, tips, and resources delivered straight to your inbox every week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button
              className="bg-white text-purple-900 hover:bg-gray-100 font-semibold px-8 py-4 h-auto rounded-full whitespace-nowrap"
            >
              Subscribe Now
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
