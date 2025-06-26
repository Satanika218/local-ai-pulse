
import { ConversationTree } from './types';

export const conversationTree: ConversationTree = {
  start: {
    id: 'start',
    text: [
      "Hi there! I'm your AI business consultant from 11th Temple Solutions. I help businesses identify areas where technology and automation can save time, reduce costs, and drive growth.",
      "What brings you here today? Are you looking to solve a specific business challenge, or are you interested in exploring how technology might help your business run more smoothly?"
    ],
    options: [
      { text: "Solve a specific challenge", next: 'first_level_diagnostic' },
      { text: "Explore what's possible", next: 'first_level_diagnostic' },
      { text: "Other", next: 'other_start' },
    ],
  },
  other_start: {
    id: 'other_start',
    text: "I understand you have something else in mind. Please feel free to tell me what you're looking for, and I'll do my best to help guide you in the right direction.",
    options: [
      { text: "Go back to main options", next: 'start' },
      { text: "Chat with a specialist", next: 'closing' },
    ],
  },
  first_level_diagnostic: {
    id: 'first_level_diagnostic',
    text: "What area of your business currently takes up the most time or feels like the biggest headache?",
    options: [
      { text: "Your website and online presence", next: 'website_presence_q' },
      { text: "Getting the word out and finding new customers", next: 'marketing_q' },
      { text: "Paperwork, invoices and financial tasks", next: 'finance_q' },
      { text: "Keeping in touch with customers", next: 'customer_relations_q' },
      { text: "Other", next: 'other_business_area' },
      { text: "Go back", next: 'start' },
    ],
  },
  other_business_area: {
    id: 'other_business_area',
    text: "That's perfectly fine - every business has unique challenges. I'd love to connect you with one of our specialists who can discuss your specific needs in detail.",
    options: [
      { text: "Chat with a specialist", next: 'closing' },
      { text: "Go back to business areas", next: 'first_level_diagnostic' },
    ],
  },
  // Website Path
  website_presence_q: {
    id: 'website_presence_q',
    text: "Thanks for sharing that. Your website is like your digital shopfront - it needs to work hard for your business. What seems to be the main issue with your online presence?",
    options: [
      { text: "Not enough people are contacting/buying through the site", next: 'website_leads_q' },
      { text: "Making updates to the site is too time-consuming", next: 'website_updates_q' },
      { text: "Other website issue", next: 'other_website' },
      { text: "Go back", next: 'first_level_diagnostic' },
    ],
  },
  other_website: {
    id: 'other_website',
    text: "Website challenges can be complex and varied. Our specialists can help identify and solve whatever specific issues you're facing with your online presence.",
    options: [
      { text: "Chat with a specialist", next: 'closing' },
      { text: "Go back to website questions", next: 'website_presence_q' },
    ],
  },
  website_leads_q: {
    id: 'website_leads_q',
    text: "I understand your website isn't bringing in as many customers as you'd like. You're definitely not alone - about 60% of small businesses face this same challenge. To help find the right solution, could you tell me: can people easily find your business when they search online for what you offer?",
    options: [
        { text: "Yes, we seem to rank well", next: 'website_leads_solutions' },
        { text: "No, we're hard to find online", next: 'website_leads_solutions' },
        { text: "I'm not sure", next: 'website_leads_solutions' },
        { text: "Other", next: 'other_website_leads' },
        { text: "Go back", next: 'website_presence_q' },
    ],
  },
  other_website_leads: {
    id: 'other_website_leads',
    text: "Lead generation challenges can have many different causes. Let's connect you with a specialist who can analyze your specific situation.",
    options: [
      { text: "Chat with a specialist", next: 'closing' },
      { text: "Go back", next: 'website_leads_q' },
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
          { text: "Other content type", next: 'other_website_updates' },
          { text: "Go back", next: 'website_presence_q' },
      ],
  },
  other_website_updates: {
    id: 'other_website_updates',
    text: "Website management can involve many different types of content and updates. Our specialists can help create a solution tailored to your specific content needs.",
    options: [
      { text: "Chat with a specialist", next: 'closing' },
      { text: "Go back", next: 'website_updates_q' },
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
      { text: "Other marketing challenge", next: 'other_marketing' },
      { text: "Go back", next: 'first_level_diagnostic' },
    ],
  },
  other_marketing: {
    id: 'other_marketing',
    text: "Marketing challenges come in many forms. Our specialists can help develop a strategy that addresses your specific marketing needs and goals.",
    options: [
      { text: "Chat with a specialist", next: 'closing' },
      { text: "Go back to marketing questions", next: 'marketing_q' },
    ],
  },
  marketing_content_q: {
      id: 'marketing_content_q',
      text: "I understand. Consistently creating fresh content is a major challenge for many business owners. What type of content do you find most difficult to produce?",
      options: [
          { text: "Social media posts", next: 'marketing_solutions' },
          { text: "Email newsletters", next: 'marketing_solutions' },
          { text: "Blog articles", next: 'marketing_solutions' },
          { text: "Other content type", next: 'other_marketing_content' },
          { text: "Go back", next: 'marketing_q' },
      ],
  },
  other_marketing_content: {
    id: 'other_marketing_content',
    text: "Content creation can involve many different formats and approaches. Let's connect you with a specialist who can help streamline your specific content needs.",
    options: [
      { text: "Chat with a specialist", next: 'closing' },
      { text: "Go back", next: 'marketing_content_q' },
    ],
  },
  marketing_roi_q: {
      id: 'marketing_roi_q',
      text: "It's crucial to know what's working so you can invest your time and money wisely. Are you currently using any tools to track website visitors or marketing campaign performance?",
      options: [
          { text: "Yes, but the data is confusing", next: 'marketing_solutions' },
          { text: "No, we're not tracking performance", next: 'marketing_solutions' },
          { text: "Other tracking situation", next: 'other_marketing_roi' },
          { text: "Go back", next: 'marketing_q' },
      ],
  },
  other_marketing_roi: {
    id: 'other_marketing_roi',
    text: "Marketing measurement can be complex with many different approaches. Our specialists can help you find the right tracking solution for your business.",
    options: [
      { text: "Chat with a specialist", next: 'closing' },
      { text: "Go back", next: 'marketing_roi_q' },
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
        { text: "Other financial task", next: 'other_finance' },
        { text: "Go back", next: 'first_level_diagnostic' },
    ],
  },
  other_finance: {
    id: 'other_finance',
    text: "Financial management involves many different processes and challenges. Our specialists can help identify automation opportunities for your specific financial workflows.",
    options: [
      { text: "Chat with a specialist", next: 'closing' },
      { text: "Go back to finance questions", next: 'finance_q' },
    ],
  },
  finance_invoices_q: {
    id: 'finance_invoices_q',
    text: "Handling invoices and receipts manually can feel like you're constantly shuffling papers. Roughly how many invoices or receipts do you handle each month?",
     options: [
          { text: "Less than 50", next: 'finance_solutions' },
          { text: "Between 50 and 200", next: 'finance_solutions' },
          { text: "More than 200", next: 'finance_solutions' },
          { text: "Other amount/situation", next: 'other_finance_invoices' },
          { text: "Go back", next: 'finance_q' },
      ],
  },
  other_finance_invoices: {
    id: 'other_finance_invoices',
    text: "Every business has different invoice processing needs. Our specialists can design a solution that fits your specific volume and workflow requirements.",
    options: [
      { text: "Chat with a specialist", next: 'closing' },
      { text: "Go back", next: 'finance_invoices_q' },
    ],
  },
  finance_chasing_q: {
    id: 'finance_chasing_q',
    text: "Chasing payments is an uncomfortable but necessary task. Is this something you'd prefer to be fully automated or would you want a system that just reminds you to follow up?",
     options: [
          { text: "Fully automated chasing", next: 'finance_solutions' },
          { text: "Just send me reminders", next: 'finance_solutions' },
          { text: "Other approach", next: 'other_finance_chasing' },
          { text: "Go back", next: 'finance_q' },
      ],
  },
  other_finance_chasing: {
    id: 'other_finance_chasing',
    text: "Payment collection strategies can be customized in many ways. Let's connect you with a specialist to discuss the best approach for your business relationships.",
    options: [
      { text: "Chat with a specialist", next: 'closing' },
      { text: "Go back", next: 'finance_chasing_q' },
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
          { text: "Explore other challenges", next: 'first_level_diagnostic' },
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
        { text: "Other customer challenge", next: 'other_customer' },
        { text: "Go back", next: 'first_level_diagnostic' },
    ],
  },
  other_customer: {
    id: 'other_customer',
    text: "Customer relationship challenges can take many forms. Our specialists can help design systems to improve your specific customer interactions and processes.",
    options: [
      { text: "Chat with a specialist", next: 'closing' },
      { text: "Go back to customer questions", next: 'customer_relations_q' },
    ],
  },
  customer_response_q: {
      id: 'customer_response_q',
      text: "Responding quickly to customers while managing everything else can feel impossible sometimes. Do you find yourself answering the same questions repeatedly?",
      options: [
          { text: "Yes, all the time!", next: 'customer_relations_solutions' },
          { text: "Sometimes, but not often", next: 'customer_relations_solutions' },
          { text: "No, most questions are unique", next: 'customer_relations_solutions' },
          { text: "Other situation", next: 'other_customer_response' },
          { text: "Go back", next: 'customer_relations_q' },
      ]
  },
  other_customer_response: {
    id: 'other_customer_response',
    text: "Customer communication patterns vary greatly between businesses. Let's connect you with a specialist to discuss your specific response challenges.",
    options: [
      { text: "Chat with a specialist", next: 'closing' },
      { text: "Go back", next: 'customer_response_q' },
    ],
  },
  customer_data_q: {
      id: 'customer_data_q',
      text: "Keeping customer information in one place is key to providing great service. Where do you currently store customer details?",
      options: [
          { text: "In spreadsheets or documents", next: 'customer_relations_solutions' },
          { text: "In my email contacts", next: 'customer_relations_solutions' },
          { text: "We don't have a central system", next: 'customer_relations_solutions' },
          { text: "Other system", next: 'other_customer_data' },
          { text: "Go back", next: 'customer_relations_q' },
      ]
  },
  other_customer_data: {
    id: 'other_customer_data',
    text: "Customer data management systems come in many forms. Our specialists can help optimize whatever system you're currently using or suggest better alternatives.",
    options: [
      { text: "Chat with a specialist", next: 'closing' },
      { text: "Go back", next: 'customer_data_q' },
    ],
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
          { text: "Explore other challenges", next: 'first_level_diagnostic' },
          { text: "Go back", next: 'customer_response_q' },
      ]
  },
  // Closing
  closing: {
    id: 'closing',
    text: "Perfect! I'd love to connect you with one of our specialists who can discuss these solutions in detail and create a customised plan for your business. To book your free consultation, simply close this chat and click the 'Get Started' button at the top of the page, or scroll down to the booking section on our consultation page.",
    options: [
      { text: "Book consultation now", next: 'end_chat_specialist' },
    ],
    isEnd: false,
  },
  end_chat_specialist: {
    id: 'end_chat_specialist',
    text: "Excellent! Please close this chat and look for the 'Get Started' button at the top of the page to book your free consultation. We're excited to help transform your business with the right technology solutions!",
    isEnd: true
  }
};
