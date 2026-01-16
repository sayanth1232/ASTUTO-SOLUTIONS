import { Card } from '@/components/ui/card';

export function CommitmentSection() {
  const values = [
    {
      title: 'Integrity',
      description: 'We uphold the highest standards of honesty and ethical conduct in everything we do.',
      color: 'bg-pink-500',
    },
    {
      title: 'Collaboration',
      description: 'We work together with our clients to achieve shared success and mutual growth.',
      color: 'bg-purple-500',
    },
    {
      title: 'Growth',
      description: 'We are committed to continuous improvement and helping your business scale.',
      color: 'bg-amber-500',
    },
    {
      title: 'Reliability',
      description: 'You can count on us to deliver consistent, quality results every time.',
      color: 'bg-blue-500',
    },
    {
      title: 'Commitment',
      description: 'We are dedicated to your long-term success and prosperity.',
      color: 'bg-green-500',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm font-medium">OUR VALUES</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-gray-900">
              Committed to growing and improving
            </h2>
            <p className="text-base lg:text-lg mb-8 text-gray-600 leading-relaxed">
              Our commitment goes beyond numbers. We partner with you to build a foundation for sustainable growth and lasting success.
            </p>
            <div className="space-y-4">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="p-4 bg-white border border-gray-200 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className={`${value.color} w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white font-bold text-lg">{value.title.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1 text-gray-900">{value.title}</h3>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Image */}
<div className="flex justify-center">
  <div className="group w-full overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-500">
    <img
      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
      alt="Team working together"
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
