import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is the Founding Member Token?',
      answer: 'The Founding Member Token is a lifetime premium membership pass to the Fankoin platform. It grants holders permanent access to exclusive features, reduced fees, and unique member-only opportunities. One payment gives you forever membership.'
    },
    {
      question: 'How much does a Founding Member Token cost?',
      answer: 'Each Founding Member Token costs $1,000 USD. You can pay via bank transfer, credit card, or selected cryptocurrencies. The pre-sale is limited to only 5,000 tokens worldwide.'
    },
    {
      question: 'What benefits do Founding Members receive?',
      answer: 'Founding Members get lifetime premium access, loyalty incentives and bonus tokens, reduced transaction fees, priority access to new features and beta programs, and exclusive access to the Founders Club events and experiences.'
    },
    {
      question: 'When will I receive my Founding Member Token?',
      answer: 'All Founding Member Tokens will be distributed no later than January 2026. You will receive detailed instructions on how to access your membership benefits once the platform launches.'
    },
    {
      question: 'Are these tokens securities or investments?',
      answer: 'No, Founding Member Tokens are not securities and do not represent ownership in BOCChain or Fankoin. They are utility-based digital assets intended solely for use within the Fankoin ecosystem as membership passes.'
    },
    {
      question: 'What is the refund policy?',
      answer: 'All purchases are final and non-refundable. Please ensure you understand the terms and comply with your local laws before purchasing. The contracting entity is BOCChain, registered in Mumbai, India.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-purple-800 via-purple-700 to-pink-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Get answers to common questions about Fankoin, the token sale, and our platform.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left p-6 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-2xl transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 border border-white/20"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-white flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white/60 flex-shrink-0" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 pt-2 bg-white/10 backdrop-blur-sm rounded-b-2xl border-x border-b border-white/20">
                  <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
            <p className="text-white/80 mb-6">Our team is here to help. Reach out through any of our channels.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all border border-white/30">
                Join Discord
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all border border-white/30">
                Email Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}