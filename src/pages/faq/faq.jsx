import React, { useState } from "react";
import "./faq.css";

export const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "How can I track my order?",
      answer: "You can track your order by visiting the 'Order Tracking' page and entering your order details.",
    },
    {
      id: 2,
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards and PayPal for payment.",
    },
    // Add more FAQ items as needed
  ]);

  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setActiveFAQ(id === activeFAQ ? null : id);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq) => (
        <div className="faq-item" key={faq.id}>
          <div
            className={`faq-question ${activeFAQ === faq.id ? "active" : ""}`}
            onClick={() => toggleFAQ(faq.id)}
          >
            {faq.question}
          </div>
          <div className={`faq-answer ${activeFAQ === faq.id ? "show" : ""}`}>{faq.answer}</div>
        </div>
      ))}
    </div>
  );
};


