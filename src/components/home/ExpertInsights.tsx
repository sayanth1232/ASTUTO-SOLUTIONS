import { Card } from '@/components/ui/card';

export function ExpertInsights() {
  const experts = [
    {
      name: 'Tom White',
      role: 'Senior Financial Consultant',
      bio: 'Expert in financial planning with over 15 years of experience helping startups grow.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    },
    {
      name: 'Mark Taylor',
      role: 'Tax Strategy Expert',
      bio: 'Specializes in tax optimization and compliance for growing businesses.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    },
    {
      name: 'Emma Wilson',
      role: 'Business Operations Specialist',
      bio: 'Passionate about streamlining operations and improving business efficiency.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-sm font-medium">OUR TEAM</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Gain insights from experts.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experts.map((expert, index) => (
            <Card
              key={index}
              className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={expert.image}
                  alt={expert.name}
                  width={400}
                  height={400}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-gray-900">
                  {expert.name}
                </h3>
                <p className="text-purple-900 text-sm font-medium mb-3">{expert.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{expert.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
