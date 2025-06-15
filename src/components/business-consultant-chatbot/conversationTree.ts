
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
    ],
  },
  // Website Path
  website_presence_q: {
    id: 'website_presence_q',
    text: "Thanks for sharing that. Your website is like your digital shopfront - it needs to work hard for your business. What seems to be the main issue with your online presence?",
    options: [
      { text: "Not enough people are contacting/buying through the site", next: 'website_leads_q' },
      { text: "Making updates to the site is too time-consuming", next: 'website_updates_q' },
    ],
  },
  website_leads_q: {
    id: 'website_leads_q',
    text: "I understand your website isn't bringing in as many customers as you'd like. You're definitely not alone - about 60% of small businesses face this same challenge. To help find the right solution, could you tell me: can people easily find your business when they search online for what you offer?",
    options: [
        { text: "Yes, we seem to rank well", next: 'website_leads_solutions' },
        { text: "No, we're hard to find online", next: 'website_leads_solutions' },
        { text: "I'm not sure", next: 'website_leads_solutions' },
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
        { text: "Discuss these solutions", next: 'closing' },
        { text: "Explore other challenges", next: 'first_level_diagnostic' },
    ]
  },
  website_updates_q: {
      id: 'website_updates_q',
      text: "It's frustrating when updating your own website becomes a major task. To suggest the right solution, could you tell me what type of content you struggle with most?",
      options: [
          { text: "Updating text and images", next: 'website_updates_solutions' },
          { text: "Adding new pages or sections", next: 'website_updates_solutions' },
          { text: "Creating blog posts or news", next: 'website_updates_solutions' },
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
          { text: "Discuss these solutions", next: 'closing' },
          { text: "Explore other challenges", next: 'first_level_diagnostic' },
      ]
  },
  // Marketing Path
  marketing_q: {
    id: 'marketing_q',
    text: "Marketing your business can feel like juggling too many balls at once. Which part is giving you the biggest challenge?",
    options: [
      { text: "Creating regular content to share with customers", next: 'marketing_content_q' },
      { text: "Figuring out which marketing brings in customers", next: 'marketing_roi_q' },
    ],
  },
  marketing_content_q: {
      id: 'marketing_content_q',
      text: "I understand. Consistently creating fresh content is a major challenge for many business owners. What type of content do you find most difficult to produce?",
      options: [
          { text: "Social media posts", next: 'marketing_solutions' },
          { text: "Email newsletters", next: 'marketing_solutions' },
          { text: "Blog articles", next: 'marketing_solutions' },
      ],
  },
  marketing_roi_q: {
      id: 'marketing_roi_q',
      text: "It's crucial to know what's working so you can invest your time and money wisely. Are you currently using any tools to track website visitors or marketing campaign performance?",
      options: [
          { text: "Yes, but the data is confusing", next: 'marketing_solutions' },
          { text: "No, we're not tracking performance", next: 'marketing_solutions' },
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
          { text: "Discuss these solutions", next: 'closing' },
          { text: "Explore other challenges", next: 'first_level_diagnostic' },
      ]
  },
  // Finance Path
  finance_q: {
    id: 'finance_q',
    text: "Keeping on top of paperwork and finances can be a real drain on your time. What specific part is most frustrating for you?",
    options: [
        { text: "Processing bills, receipts and invoices takes too long", next: 'finance_invoices_q' },
        { text: "Chasing late payments from customers is a hassle", next: 'finance_chasing_q' },
    ],
  },
  finance_invoices_q: {
    id: 'finance_invoices_q',
    text: "Handling invoices and receipts manually can feel like you're constantly shuffling papers. Roughly how many invoices or receipts do you handle each month?",
     options: [
          { text: "Less than 50", next: 'finance_solutions' },
          { text: "Between 50 and 200", next: 'finance_solutions' },
          { text: "More than 200", next: 'finance_solutions' },
      ],
  },
  finance_chasing_q: {
    id: 'finance_chasing_q',
    text: "Chasing payments is an uncomfortable but necessary task. Is this something you'd prefer to be fully automated or would you want a system that just reminds you to follow up?",
     options: [
          { text: "Fully automated chasing", next: 'finance_solutions' },
          { text: "Just send me reminders", next: 'finance_solutions' },
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
          { text: "Discuss these solutions", next: 'closing' },
          { text: "Explore other challenges", next: 'first_level_diagnostic' },
      ]
  },
  // Customer Relations Path
  customer_relations_q: {
    id: 'customer_relations_q',
    text: "Building and maintaining good customer relationships is vital for any business. What's your biggest challenge in this area?",
    options: [
        { text: "Responding to customer questions quickly enough", next: 'customer_response_q' },
        { text: "Keeping customer information organised and up-to-date", next: 'customer_data_q' },
    ],
  },
  customer_response_q: {
      id: 'customer_response_q',
      text: "Responding quickly to customers while managing everything else can feel impossible sometimes. Do you find yourself answering the same questions repeatedly?",
      options: [
          { text: "Yes, all the time!", next: 'customer_relations_solutions' },
          { text: "Sometimes, but not often", next: 'customer_relations_solutions' },
          { text: "No, most questions are unique", next: 'customer_relations_solutions' },
      ]
  },
  customer_data_q: {
      id: 'customer_data_q',
      text: "Keeping customer information in one place is key to providing great service. Where do you currently store customer details?",
      options: [
          { text: "In spreadsheets or documents", next: 'customer_relations_solutions' },
          { text: "In my email contacts", next: 'customer_relations_solutions' },
          { text: "We don't have a central system", next: 'customer_relations_solutions' },
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
          { text: "Discuss these solutions", next: 'closing' },
          { text: "Explore other challenges", next: 'first_level_diagnostic' },
      ]
  },
  // Closing
  closing: {
    id: 'closing',
    text: "What would be most helpful for you now?",
    options: [
      { text: "Chat with a specialist", next: 'end_chat_specialist' },
      { text: "See a case study", next: 'end_chat_casestudy' },
    ],
    isEnd: false,
  },
  end_chat_specialist: {
    id: 'end_chat_specialist',
    text: "Great! One of our specialists will be in touch shortly. You can also schedule a consultation directly on our website.",
    isEnd: true
  },
  end_chat_casestudy: {
    id: 'end_chat_casestudy',
    text: "Excellent choice. We have several case studies on our website that show how we've helped businesses like yours.",
    isEnd: true
  }
};
