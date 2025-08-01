import { ConversationTree } from './types';

export const conversationTree: ConversationTree = {
  start: {
    id: 'start',
    text: [
      "Hi there! I'm your AI business consultant from 11th Temple Solutions. I help businesses identify areas where technology and automation can save time, reduce costs, and drive growth.",
      "What area would you like to explore first?"
    ],
    options: [
      { text: "GDPR Compliance & Data Protection", next: 'gdpr_compliance' },
      { text: "Digital Skills & Workplace Champions", next: 'digital_skills' },
      { text: "Explore other business areas", next: 'business_area_intro' },
    ],
  },

  business_area_intro: {
    id: 'business_area_intro',
    text: [
      "Let's explore what's possible for your business. What area currently takes up the most time or feels like the biggest headache?"
    ],
    options: [
      { text: "Your website and online presence", next: 'website_presence_q' },
      { text: "Getting the word out and finding new customers", next: 'marketing_q' },
      { text: "Paperwork, invoices and financial tasks", next: 'finance_q' },
      { text: "Keeping in touch with customers", next: 'customer_relations_q' },
      { text: "Other - Discuss problem now", next: 'redirect_consultation' },
    ],
  },

  gdpr_compliance: {
    id: 'gdpr_compliance',
    text: ["GDPR compliance is crucial for UK businesses. With 52% still not fully compliant and fines up to £17.5M, are you concerned about data protection risks?"],
    options: [
      { text: "Yes, we handle customer data", next: 'gdpr_data_handling' },
      { text: "We've had compliance issues", next: 'gdpr_issues' },
      { text: "Want to prevent future problems", next: 'gdpr_prevention' },
      { text: "Let's discuss how we can collaborate", next: 'redirect_consultation' }
    ]
  },

  gdpr_data_handling: {
    id: 'gdpr_data_handling',
    text: ["Customer data requires careful handling. With 73% of UK SMEs experiencing breaches, proper protection is essential for your business reputation and legal compliance."],
    solutions: [
      { title: "Automated Data Mapping", description: "Smart systems to identify and track all personal data across your organization, ensuring nothing falls through the cracks" },
      { title: "Consent Management", description: "Technology platforms to manage customer consent and preferences seamlessly, keeping you compliant automatically" },
      { title: "Staff Training Programs", description: "Comprehensive GDPR education to build a culture of data protection within your team" }
    ],
    options: [
      { text: "Let's discuss how we can collaborate", next: 'redirect_consultation' },
      { text: "Explore other areas", next: 'business_area_intro' }
    ]
  },

  gdpr_issues: {
    id: 'gdpr_issues',
    text: ["Compliance issues need immediate attention. We help businesses recover from breaches and build robust protection systems to prevent future incidents."],
    solutions: [
      { title: "Incident Response Plans", description: "Rapid response protocols to minimize damage and meet ICO reporting requirements within 72 hours" },
      { title: "Compliance Audits", description: "Thorough assessment of current practices and gap identification with actionable improvement plans" },
      { title: "Policy Development", description: "Custom GDPR policies and procedures tailored to your specific business needs and industry requirements" }
    ],
    options: [
      { text: "Let's discuss how we can collaborate", next: 'redirect_consultation' },
      { text: "Explore other areas", next: 'business_area_intro' }
    ]
  },

  gdpr_prevention: {
    id: 'gdpr_prevention',
    text: ["Prevention is always better than cure. We help businesses build proactive GDPR compliance from the ground up, avoiding costly mistakes."],
    solutions: [
      { title: "Privacy by Design", description: "Build data protection into your systems and processes from the start, making compliance automatic" },
      { title: "Regular Monitoring", description: "Ongoing compliance checking and alert systems for potential issues before they become problems" },
      { title: "GDPR Champions Program", description: "Train internal advocates to maintain compliance culture and support colleagues with confidence" }
    ],
    options: [
      { text: "Let's discuss how we can collaborate", next: 'redirect_consultation' },
      { text: "Explore other areas", next: 'business_area_intro' }
    ]
  },

  digital_skills: {
    id: 'digital_skills',
    text: ["60% of UK workers can't complete essential digital tasks, creating security risks and productivity gaps. Is your team confident with technology?"],
    options: [
      { text: "Our staff struggle with technology", next: 'skills_struggles' },
      { text: "We need better digital security", next: 'digital_security' },
      { text: "Want to improve productivity", next: 'productivity_improvement' },
      { text: "Let's discuss how we can collaborate", next: 'redirect_consultation' }
    ]
  },

  skills_struggles: {
    id: 'skills_struggles',
    text: ["Technology anxiety is common, especially among older workers in rural areas. We create supportive learning environments that build confidence gradually."],
    solutions: [
      { title: "Age-Appropriate Training", description: "Learning methods designed for different age groups and comfort levels, ensuring everyone feels supported" },
      { title: "One-to-One Mentoring", description: "Personal support to overcome technology fears and build confidence at each individual's pace" },
      { title: "Tech Workplace Champions", description: "Train internal advocates to provide ongoing peer support and create a positive digital culture" }
    ],
    options: [
      { text: "Let's discuss how we can collaborate", next: 'redirect_consultation' },
      { text: "Explore other areas", next: 'business_area_intro' }
    ]
  },

  digital_security: {
    id: 'digital_security',
    text: ["Digital security starts with educated staff. We help teams recognize threats and follow safe practices to protect your business from cyber attacks."],
    solutions: [
      { title: "Security Awareness Training", description: "Practical education about phishing, malware, and safe browsing tailored to your business context" },
      { title: "Password Management", description: "Tools and training for strong, unique passwords across all systems with easy-to-use solutions" },
      { title: "Incident Prevention", description: "Proactive measures to prevent data breaches and cyber attacks through staff education and smart technology" }
    ],
    options: [
      { text: "Let's discuss how we can collaborate", next: 'redirect_consultation' },
      { text: "Explore other areas", next: 'business_area_intro' }
    ]
  },

  productivity_improvement: {
    id: 'productivity_improvement',
    text: ["Digital skills directly impact productivity. We help teams master the 20 essential digital work tasks for maximum efficiency and confidence."],
    solutions: [
      { title: "Skills Assessment", description: "Identify specific gaps in your team's digital capabilities with our comprehensive evaluation" },
      { title: "Targeted Training", description: "Focus on the skills that will have the biggest impact on your business productivity and growth" },
      { title: "Progress Tracking", description: "Monitor improvement and ensure skills are being applied effectively in daily work" }
    ],
    options: [
      { text: "Let's discuss how we can collaborate", next: 'redirect_consultation' },
      { text: "Explore other areas", next: 'business_area_intro' }
    ]
  },
  redirect_consultation: {
    id: 'redirect_consultation',
    text: "Perfect! I'll connect you with one of our specialists who can discuss your specific needs in detail. To book your free consultation, simply close this chat and click the 'Get Started' button at the top of the page, or visit our consultation page directly.",
    options: [
      { text: "Book consultation now", next: 'end_chat_consultation' },
      { text: "Go back to main options", next: 'start' },
    ],
  },
  end_chat_consultation: {
    id: 'end_chat_consultation',
    text: "Excellent! Please close this chat and look for the 'Get Started' button at the top of the page to book your free consultation. We're excited to help transform your business with the right technology solutions!",
    isEnd: true
  },
  first_level_diagnostic: {
    id: 'first_level_diagnostic',
    text: "What area of your business currently takes up the most time or feels like the biggest headache?",
    options: [
      { text: "Your website and online presence", next: 'website_presence_q' },
      { text: "Getting the word out and finding new customers", next: 'marketing_q' },
      { text: "Paperwork, invoices and financial tasks", next: 'finance_q' },
      { text: "Keeping in touch with customers", next: 'customer_relations_q' },
      { text: "Other - Discuss problem now", next: 'redirect_consultation' },
      { text: "Go back", next: 'start' },
    ],
  },
  // Website Path
  website_presence_q: {
    id: 'website_presence_q',
    text: "Thanks for sharing that. Your website is like your digital shopfront - it needs to work hard for your business. What seems to be the main issue with your online presence?",
    options: [
      { text: "Not enough people are contacting/buying through the site", next: 'website_leads_q' },
      { text: "Making updates to the site is too time-consuming", next: 'website_updates_q' },
      { text: "Other - Discuss problem now", next: 'redirect_consultation' },
      { text: "Go back", next: 'first_level_diagnostic' },
    ],
  },
  website_leads_q: {
    id: 'website_leads_q',
    text: "I understand your website isn't bringing in as many customers as you'd like. You're definitely not alone - about 60% of small businesses face this same challenge. To help find the right solution, could you tell me: can people easily find your business when they search online for what you offer?",
    options: [
        { text: "Yes, we seem to rank well", next: 'website_leads_solutions' },
        { text: "No, we're hard to find online", next: 'website_leads_solutions' },
        { text: "I'm not sure", next: 'website_leads_solutions' },
        { text: "Other - Discuss problem now", next: 'redirect_consultation' },
        { text: "Go back", next: 'website_presence_q' },
    ],
  },
  website_leads_solutions: {
    id: 'website_leads_solutions',
    text: "Based on what you've shared about your website not bringing in enough new business, here are three approaches that could help:",
    solutions: [
      { title: "1. Smart Website Improvement", description: "We can use technology that watches how visitors use your website and automatically makes small changes to help more people contact you or make purchases. Think of it like having a shop assistant who notices which displays attract the most customers and adjusts your store layout accordingly. Businesses typically see 25-30% more inquiries with this approach." },
      { title: "2. 24/7 Digital Assistant", description: "Adding a helpful chat feature to your website means potential customers can get answers anytime, even outside business hours. It's like having a knowledgeable staff member who never sleeps! Our clients typically capture 35% more leads during evenings and weekends this way." },
      { title: "3. Getting Found Online", description: "Our tools can help your website appear higher in search results when people look for businesses like yours. It's similar to moving your shop from a quiet side street to a busy main road. Most businesses see 40-60% more website visitors within three months." },
    ],
    options: [
        { text: "Chat with a specialist", next: 'closing' },
        { text: "Explore other challenges", next: 'first_level_diagnostic' },
        { text: "Other - Discuss problem now", next: 'redirect_consultation' },
        { text: "Go back", next: 'website_leads_q' },
    ]
  },
  website_updates_q: {
      id: 'website_updates_q',
      text: "It's frustrating when updating your own website becomes a major task. To suggest the right solution, could you tell me what type of content you struggle with most?",
      options: [
          { text: "Updating text and images", next: 'website_updates_solutions' },
          { text: "Adding new pages or sections", next: 'website_updates_solutions' },
          { text: "Creating blog posts or news", next: 'website_updates_solutions' },
          { text: "Other - Discuss problem now", next: 'redirect_consultation' },
          { text: "Go back", next: 'website_presence_q' },
      ],
  },
  website_updates_solutions: {
      id: 'website_updates_solutions',
      text: "It sounds like you need a more user-friendly way to manage your site. We can help by:",
      solutions: [
          { title: "1. Content Management System (CMS) Upgrade", description: "We can move your site to a modern, easy-to-use platform that lets you update content as easily as writing an email, with no technical skills required." },
          { title: "2. On-Demand Website Support", description: "For a simple monthly fee, you can send us your updates, and we'll handle them for you within 24 hours, freeing you to focus on your business." },
      ],
      options: [
          { text: "Chat with a specialist", next: 'closing' },
          { text: "Explore other challenges", next: 'first_level_diagnostic' },
          { text: "Other - Discuss problem now", next: 'redirect_consultation' },
          { text: "Go back", next: 'website_updates_q' },
      ]
  },
  // Marketing Path
  marketing_q: {
    id: 'marketing_q',
    text: "Marketing your business can feel like juggling too many balls at once. Which part is giving you the biggest challenge?",
    options: [
      { text: "Creating regular content to share with customers", next: 'marketing_content_q' },
      { text: "Figuring out which marketing brings in customers", next: 'marketing_roi_q' },
      { text: "Other - Discuss problem now", next: 'redirect_consultation' },
      { text: "Go back", next: 'first_level_diagnostic' },
    ],
  },
  marketing_content_q: {
      id: 'marketing_content_q',
      text: "I understand. Consistently creating fresh content is a major challenge for many business owners. What type of content do you find most difficult to produce?",
      options: [
          { text: "Social media posts", next: 'marketing_solutions' },
          { text: "Email newsletters", next: 'marketing_solutions' },
          { text: "Blog articles", next: 'marketing_solutions' },
          { text: "Other - Discuss problem now", next: 'redirect_consultation' },
          { text: "Go back", next: 'marketing_q' },
      ],
  },
  marketing_roi_q: {
      id: 'marketing_roi_q',
      text: "It's crucial to know what's working so you can invest your time and money wisely. Are you currently using any tools to track website visitors or marketing campaign performance?",
      options: [
          { text: "Yes, but the data is confusing", next: 'marketing_solutions' },
          { text: "No, we're not tracking performance", next: 'marketing_solutions' },
          { text: "Other - Discuss problem now", next: 'redirect_consultation' },
          { text: "Go back", next: 'marketing_q' },
      ],
  },
  marketing_solutions: {
      id: 'marketing_solutions',
      text: "Based on your marketing challenges, here are a couple of ways we can help:",
      solutions: [
          { title: "1. AI Content Assistant", description: "We can provide you with an AI-powered tool that helps draft social media posts, emails, and even blog ideas tailored to your local audience. It's like having a marketing assistant on your team." },
          { title: "2. Clear Marketing Dashboard", description: "We can set up a simple, one-page report that clearly shows you which marketing activities are bringing in the most customers, so you can make data-driven decisions with confidence." },
      ],
      options: [
          { text: "Chat with a specialist", next: 'closing' },
          { text: "Explore other challenges", next: 'first_level_diagnostic' },
          { text: "Other - Discuss problem now", next: 'redirect_consultation' },
          { text: "Go back", next: 'marketing_content_q' },
      ]
  },
  // Finance Path
  finance_q: {
    id: 'finance_q',
    text: "Keeping on top of paperwork and finances can be a real drain on your time. What specific part is most frustrating for you?",
    options: [
        { text: "Processing bills, receipts and invoices takes too long", next: 'finance_invoices_q' },
        { text: "Chasing late payments from customers is a hassle", next: 'finance_chasing_q' },
        { text: "Other - Discuss problem now", next: 'redirect_consultation' },
        { text: "Go back", next: 'business_area_intro' },
    ],
  },
  finance_invoices_q: {
    id: 'finance_invoices_q',
    text: "Handling invoices and receipts manually can feel like you're constantly shuffling papers. Roughly how many invoices or receipts do you handle each month?",
     options: [
          { text: "Less than 50", next: 'finance_solutions' },
          { text: "Between 50 and 200", next: 'finance_solutions' },
          { text: "More than 200", next: 'finance_solutions' },
          { text: "Other - Discuss problem now", next: 'redirect_consultation' },
          { text: "Go back", next: 'finance_q' },
      ],
  },
  finance_chasing_q: {
    id: 'finance_chasing_q',
    text: "Chasing payments is an uncomfortable but necessary task. Is this something you'd prefer to be fully automated or would you want a system that just reminds you to follow up?",
     options: [
          { text: "Fully automated chasing", next: 'finance_solutions' },
          { text: "Just send me reminders", next: 'finance_solutions' },
          { text: "Other - Discuss problem now", next: 'redirect_consultation' },
          { text: "Go back", next: 'finance_q' },
      ],
  },
  finance_solutions: {
    id: 'finance_solutions',
    text: "Based on what you've shared about your financial admin, here are some solutions:",
     solutions: [
        { title: "1. Smart Document Reader", description: "Our system can automatically read information from invoices and receipts with remarkable accuracy, similar to having a dedicated assistant who never makes typing errors. This typically saves businesses 15-20 hours every week." },
        { title: "2. Automated Payment Reminders", description: "We can set up a polite, professional system to automatically follow up on unpaid invoices, so you get paid faster without the awkward conversations." },
      ],
      options: [
          { text: "Chat with a specialist", next: 'closing' },
          { text: "Explore other challenges", next: 'business_area_intro' },
          { text: "Other - Discuss problem now", next: 'redirect_consultation' },
          { text: "Go back", next: 'finance_invoices_q' },
      ]
  },
  // Customer Relations Path
  customer_relations_q: {
    id: 'customer_relations_q',
    text: "Building and maintaining good customer relationships is vital for any business. What's your biggest challenge in this area?",
    options: [
        { text: "Responding to customer questions quickly enough", next: 'customer_response_q' },
        { text: "Keeping customer information organised and up-to-date", next: 'customer_data_q' },
        { text: "Other - Discuss problem now", next: 'redirect_consultation' },
        { text: "Go back", next: 'business_area_intro' },
    ],
  },
  customer_response_q: {
      id: 'customer_response_q',
      text: "Responding quickly to customers while managing everything else can feel impossible sometimes. Do you find yourself answering the same questions repeatedly?",
      options: [
          { text: "Yes, all the time!", next: 'customer_relations_solutions' },
          { text: "Sometimes, but not often", next: 'customer_relations_solutions' },
          { text: "No, most questions are unique", next: 'customer_relations_solutions' },
          { text: "Other - Discuss problem now", next: 'redirect_consultation' },
          { text: "Go back", next: 'customer_relations_q' },
      ]
  },
  customer_data_q: {
      id: 'customer_data_q',
      text: "Keeping customer information in one place is key to providing great service. Where do you currently store customer details?",
      options: [
          { text: "In spreadsheets or documents", next: 'customer_relations_solutions' },
          { text: "In my email contacts", next: 'customer_relations_solutions' },
          { text: "We don't have a central system", next: 'customer_relations_solutions' },
          { text: "Other - Discuss problem now", next: 'redirect_consultation' },
          { text: "Go back", next: 'customer_relations_q' },
      ]
  },
  customer_relations_solutions: {
      id: 'customer_relations_solutions',
      text: "We can definitely help streamline your customer communications. Here are some options:",
      solutions: [
        { title: "1. Smart Response Assistant", description: "We can set up a system that automatically answers common customer questions instantly, day or night. It's like having a knowledgeable team member who specialises in handling routine inquiries." },
        { title: "2. Customer Communication Hub", description: "All your customer conversations and details from email, social media, and your website can flow into one organised system. Imagine having everything in one place instead of scattered across different platforms." },
      ],
       options: [
          { text: "Chat with a specialist", next: 'closing' },
          { text: "Explore other challenges", next: 'business_area_intro' },
          { text: "Other - Discuss problem now", next: 'redirect_consultation' },
          { text: "Go back", next: 'customer_response_q' },
      ]
  },
  // Closing
  closing: {
    id: 'closing',
    text: "Perfect! I'd love to connect you with one of our specialists who can discuss these solutions in detail and create a customised plan for your business. To book your free consultation, simply close this chat and click the 'Get Started' button at the top of the page, or scroll down to the booking section on our consultation page.",
    options: [
      { text: "Book consultation now", next: 'end_chat_specialist' },
      { text: "Other - Discuss problem now", next: 'redirect_consultation' },
    ],
    isEnd: false,
  },
  end_chat_specialist: {
    id: 'end_chat_specialist',
    text: "Excellent! Please close this chat and look for the 'Get Started' button at the top of the page to book your free consultation. We're excited to help transform your business with the right technology solutions!",
    isEnd: true
  }
};
