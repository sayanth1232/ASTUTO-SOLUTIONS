import { CalendarIcon, ArrowRightIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';

export function BlogSection() {
  const posts = [
    {
      title: 'Equity',
      excerpt:
        'Understanding equity distribution and how it impacts your startup growth and investor relations.',
      date: 'March 15, 2024',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
      category: 'Finance',
    },
    {
      title: 'Diversity',
      excerpt:
        'Building diverse teams that drive innovation and create competitive advantages in the market.',
      date: 'March 10, 2024',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
      category: 'Culture',
    },
    {
      title: 'Fail-proof',
      excerpt:
        'Strategies to build resilient business models that withstand market challenges and uncertainties.',
      date: 'March 5, 2024',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      category: 'Strategy',
    },
  ];

  return (
    <section id="blog" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-sm font-medium">BLOG</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Recent Blog Posts & Update
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed with the latest insights and trends in business consulting
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-semibold text-purple-900">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <CalendarIcon size={16} />
                  <span>{post.date}</span>
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <Link to="/resources">
                  <button className="flex items-center gap-2 text-purple-900 hover:text-purple-700 transition-colors font-semibold text-sm group">
                    Read More
                    <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
