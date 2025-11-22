export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope. An MVP typically takes 8-12 weeks, while enterprise solutions may take 4-6 months. We provide detailed timelines during our discovery phase."
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer: "Yes! We provide 30 days of post-launch support included with every project. We also offer monthly maintenance packages for ongoing updates, monitoring, and technical support."
  },
  {
    question: "What's your development process?",
    answer: "We follow an agile methodology with 5 key phases: Discovery (requirements gathering), Design (architecture & UI/UX), Development (2-week sprints), Deployment (CI/CD), and ongoing Support & Optimization."
  },
  {
    question: "Can you work with our existing systems?",
    answer: "Absolutely. We specialize in integrations and can connect with existing databases, APIs, and third-party services. We'll assess your current tech stack during discovery."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We work with modern stacks including React, Next.js, React Native, Python, FastAPI, Node.js, MongoDB, PostgreSQL, and cloud platforms like AWS and GCP."
  },
  {
    question: "Do you sign NDAs?",
    answer: "Yes, we're happy to sign NDAs before discussing your project details. We take confidentiality and intellectual property seriously."
  },
  {
    question: "What's your pricing structure?",
    answer: "We offer fixed-price project quotes and monthly retainer options. Pricing depends on project scope, timeline, and technology requirements. Contact us for a custom quote."
  },
  {
    question: "Can you scale our application as we grow?",
    answer: "Yes! We build with scalability in mind from day one, using containerization (Kubernetes), auto-scaling infrastructure, and microservices architecture when appropriate."
  }
];
