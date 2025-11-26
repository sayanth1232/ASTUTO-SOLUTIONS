import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      rating: 5,
      text: 'Astuto Solutions transformed our financial operations. Their expertise and dedication helped us scale efficiently and make better strategic decisions. Highly recommended!',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
    {
      name: 'Michael Chen',
      role: 'Founder, GrowthLabs',
      rating: 5,
      text: 'The team at Astuto Solutions is exceptional. They provided invaluable insights that helped us optimize our workforce and improve our bottom line significantly.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    },
    {
      name: 'Emily Rodriguez',
      role: 'CFO, InnovateCo',
      rating: 5,
      text: 'Working with Astuto Solutions has been a game-changer. Their strategic approach and attention to detail have been instrumental in our continued success and growth.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 lg:py-24 bg-purple-50">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-sm font-medium">TESTIMONIALS</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Reviews</h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="p-8 lg:p-10 bg-white border-none shadow-lg max-w-3xl mx-auto">
                    <div className="flex items-center gap-4 mb-6">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        loading="lazy"
                        className="rounded-full w-16 h-16 object-cover"
                      />
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <StarIcon key={i} size={20} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-purple-900' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <Button
              onClick={handlePrevious}
              variant="outline"
              size="icon"
              className="bg-white text-gray-900 border-gray-300 hover:bg-gray-100 rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon size={24} />
            </Button>
            <Button
              onClick={handleNext}
              variant="outline"
              size="icon"
              className="bg-white text-gray-900 border-gray-300 hover:bg-gray-100 rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon size={24} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
