import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FAQSection() {
  const faqs = [
    {
      question: 'How can we achieve our goal or a better outcome in a given time?',
      answer:
        'We work with you to create a strategic roadmap tailored to your specific goals. Our team analyzes your current situation, identifies opportunities, and implements proven strategies to help you achieve better outcomes efficiently.',
    },
    {
      question: 'What should we do as a person and as a whole when technology is growing fast and exponentially?',
      answer:
        'Embrace continuous learning and adaptability. We help businesses stay ahead by implementing scalable systems, automating processes, and fostering a culture of innovation that keeps pace with technological advancement.',
    },
    {
      question: 'What experience should we look for in a person or a consultant?',
      answer:
        'Look for proven track records, industry expertise, strong communication skills, and a collaborative approach. Our consultants bring years of experience across various industries and are committed to understanding your unique needs.',
    },
    {
      question: 'How do the free consultations work for a person or a business?',
      answer:
        'Our free consultations are no-obligation sessions where we discuss your challenges, goals, and how we can help. We provide initial insights and recommendations, giving you a clear understanding of our approach and potential solutions.',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-purple-50">
      <div className="max-w-4xl mx-auto px-8 lg:px-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-sm font-medium">FAQ</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Have Questions? Get Answers.
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-xl px-6 border-none shadow-sm"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
