
export const initialPurposeOptions = [
  'Solve a specific business challenge',
  'Explore how AI and automation might benefit my operations',
  'Just browsing and learning'
];

export const businessAreas = [
  'Website and online presence',
  'Getting the word out and finding new customers', 
  'Paperwork, invoices and financial tasks',
  'Keeping in touch with customers',
  'Finding and converting new business opportunities',
  'Day-to-day office tasks and administration',
  'Keeping projects on track',
  'Managing staff and recruitment',
  'Branding, design, website appearance, logos',
  'Going paperless',
  'Moving to the cloud',
  'Website legal compliance and GDPR',
  'Something else (please tell me more)'
];

export const biggestChallenges = [
  'Growing revenue',
  'Reducing costs',
  'Improving efficiency',
  'Enhancing customer experience',
  'Managing workload with limited staff',
  'Keeping up with competitors',
  'Maintaining quality while scaling',
  'Other (please specify)'
];

export const techLevels = [
  'Mostly paper-based processes',
  'Basic digital tools (email, spreadsheets)',
  'Some specialized software but not integrated',
  'Multiple digital systems that don\'t work well together',
  'Fairly digitized but looking to optimize',
  'Advanced systems but not using AI or automation'
];

export const secondLevelQuestions: Record<string, { question: string; options: string[] }> = {
  'Website and online presence': {
    question: "Thanks for sharing that. Your website is like your digital shopfront - it needs to work hard for your business. What seems to be the main issue with your online presence?",
    options: [
      'Not enough people are contacting you or buying through your website',
      'Making changes or updates to your website is too time-consuming',
      'You\'re not sure how people are using your website or if it\'s working well',
      'Your website doesn\'t look good or work well on phones and tablets',
      'Creating new content for your website is a struggle',
      'Your website feels outdated compared to competitors'
    ]
  },
  'Getting the word out and finding new customers': {
    question: "Marketing your business can feel like juggling too many balls at once. Which part is giving you the biggest challenge?",
    options: [
      'Creating regular posts, emails or content to share with customers',
      'Understanding if your marketing efforts are actually working',
      'Figuring out which marketing activities bring in the most customers',
      'Finding time to keep up with social media',
      'Your email newsletters aren\'t getting opened or leading to sales',
      'Standing out from competitors in your area'
    ]
  },
  'Paperwork, invoices and financial tasks': {
    question: "Keeping on top of paperwork and finances can be a real drain on your time. What specific part is most frustrating for you?",
    options: [
      'Processing bills, receipts and invoices takes too long',
      'Planning your business finances and predicting cash flow is difficult',
      'You\'re still using paper documents for many financial processes',
      'Matching bank transactions with your records is time-consuming',
      'Preparing for tax returns or financial reporting is stressful',
      'Chasing late payments from customers is a hassle'
    ]
  },
  'Keeping in touch with customers': {
    question: "Building and maintaining good customer relationships is vital for any business. What's your biggest challenge in this area?",
    options: [
      'Responding to customer questions quickly enough',
      'Keeping in regular contact with customers without it taking all your time',
      'Understanding how satisfied your customers really are',
      'Keeping customer information organized and up-to-date',
      'Making customers feel their experience is personalized to them',
      'Remembering to follow up with customers at the right time'
    ]
  },
  'Finding and converting new business opportunities': {
    question: "Turning potential customers into paying ones can be challenging. What part of this process is most difficult for you?",
    options: [
      'Identifying which potential customers are most likely to buy',
      'Following up with interested people consistently',
      'Keeping track of where each potential customer is in their buying journey',
      'Creating quotes or proposals takes too much time',
      'Understanding why potential customers choose not to buy',
      'Managing the sales process when dealing with multiple potential customers'
    ]
  },
  'Day-to-day office tasks and administration': {
    question: "The daily running of a business involves many administrative tasks. Which ones are taking up too much of your time?",
    options: [
      'Managing emails and communications is overwhelming',
      'Scheduling meetings and appointments is complicated',
      'Finding important documents when you need them is difficult',
      'Routine data entry and information processing is tedious',
      'Coordinating with team members takes a lot of back-and-forth',
      'Managing business expenses and receipts is disorganized'
    ]
  },
  'Keeping projects on track': {
    question: "Managing projects and deadlines can be challenging when you're wearing many hats. What's your biggest project management headache?",
    options: [
      'Keeping track of multiple project deadlines and milestones',
      'Coordinating team members and ensuring everyone knows what to do',
      'Managing project budgets and resources effectively',
      'Communicating project status to clients or stakeholders',
      'Dealing with project delays and changing requirements',
      'Finding time to properly plan and organize projects'
    ]
  },
  'Managing staff and recruitment': {
    question: "People management is one of the most complex parts of running a business. What aspect is causing you the most difficulty?",
    options: [
      'Finding and attracting qualified candidates for open positions',
      'Managing employee schedules and time tracking',
      'Handling employee performance reviews and feedback',
      'Keeping track of employee documents and HR compliance',
      'Managing payroll and employee benefits administration',
      'Maintaining team communication and morale'
    ]
  },
  'Branding, design, website appearance, logos': {
    question: "Your brand is how customers perceive and remember your business. What aspect of your branding feels like the biggest challenge?",
    options: [
      'Creating a professional logo and visual identity that represents your business',
      'Maintaining consistent branding across all your marketing materials',
      'Designing marketing materials without professional design skills',
      'Making your website look modern and professional',
      'Creating branded content for social media and online platforms',
      'Ensuring your brand stands out from competitors in your market'
    ]
  },
  'Going paperless': {
    question: "Moving away from paper documents can save space, time, and trees. What's your main concern about going paperless?",
    options: [
      'You\'re not sure how to start converting paper documents to digital',
      'You\'re worried about the security of digital documents',
      'You need certain documents to have signatures or be legally valid',
      'You\'re concerned about finding digital documents when you need them',
      'Your team is used to paper processes and might resist change',
      'You need to keep some paper records for compliance or regulatory reasons'
    ]
  },
  'Moving to the cloud': {
    question: "Storing your information and running programs over the internet instead of just on your computer can be a big change. What's your main question or concern about moving to the cloud?",
    options: [
      'You\'re not sure what "the cloud" actually means for your business',
      'You\'re concerned about the security of your information online',
      'You\'re worried about what happens if the internet goes down',
      'You\'re not sure if cloud solutions will work with your existing systems',
      'You\'re concerned about the cost of cloud services',
      'You\'re worried about being dependent on another company for your systems'
    ]
  },
  'Website legal compliance and GDPR': {
    question: "Making sure your website follows data protection laws is important for avoiding fines and building customer trust. What specific aspect of website compliance concerns you most?",
    options: [
      'You\'re not sure if your website is GDPR compliant',
      'You need to update your privacy policy or cookie notices',
      'You\'re concerned about collecting and storing customer data securely',
      'You want to make sure your contact forms are legally compliant',
      'You\'re worried about potential fines or penalties for non-compliance',
      'You need to conduct a website compliance audit but don\'t know where to start'
    ]
  }
};

export const understandingOptions = [
  'Yes, that sounds exactly like my situation',
  'Partially, but there are other factors involved',
  'Not quite, let me explain more'
];

export const problemDetailsQuestions: Record<string, string> = {
  'Not enough people are contacting you or buying through your website': 'I understand that can be frustrating. Can you tell me - when people visit your website, do you know where they typically leave without taking action? For example, do they browse your services but not contact you, or do they leave right from the homepage?',
  'Processing bills, receipts and invoices takes too long': 'That sounds like it takes up a lot of your valuable time. Can you help me understand your current process? Are you manually typing information from paper invoices into your computer, or are you dealing with digital files that still need manual sorting?',
  'Responding to customer questions quickly enough': 'Customer response time is so important for business success. Are your customers mainly reaching out through email, phone calls, or through your website? And what would you consider a "timely" response in your business?',
  'Identifying which potential customers are most likely to buy': 'Lead quality can make such a difference to your sales success. When you do get leads, are you finding that many of them aren\'t a good fit for your services, or is it more that you\'re not getting enough leads in the first place?',
  'Creating regular posts, emails or content to share with customers': 'Content creation can definitely feel overwhelming. Are you trying to manage social media, email newsletters, website content, or all of the above? And is the challenge more about finding time to create content or knowing what content to create?',
  'Creating a professional logo and visual identity that represents your business': 'Brand identity is so important for making a good first impression. Are you looking to create a completely new brand identity, or do you have some existing elements that need to be refined and made more professional?',
  'You\'re not sure how to start converting paper documents to digital': 'Going paperless can seem overwhelming at first. Are you dealing mainly with incoming documents like invoices and receipts, or do you also have years of archived paperwork that needs to be digitized?',
  'You\'re not sure what "the cloud" actually means for your business': 'That\'s a very common question! Are you currently storing most of your business information on individual computers, or are you already using some online services like email or online banking?'
};

export const solutionRecommendations: Record<string, { title: string; solutions: Array<{ name: string; description: string; benefit: string }> }> = {
  'Not enough people are contacting you or buying through your website': {
    title: "Website Lead Generation Solutions",
    solutions: [
      {
        name: "Smart Website Improvement",
        description: "We can use technology that watches how visitors use your website and automatically makes small changes to help more people contact you or make purchases. Think of it like having a shop assistant who notices which displays attract the most customers and adjusts your store layout accordingly.",
        benefit: "Businesses typically see 25-30% more inquiries with this approach."
      },
      {
        name: "24/7 Digital Assistant",
        description: "Adding a helpful chat feature to your website means potential customers can get answers anytime, even outside business hours. It's like having a knowledgeable staff member who never sleeps!",
        benefit: "Our clients typically capture 35% more leads during evenings and weekends this way."
      },
      {
        name: "Getting Found Online",
        description: "Our tools can help your website appear higher in search results when people look for businesses like yours. It's similar to moving your shop from a quiet side street to a busy main road.",
        benefit: "Most businesses see 40-60% more website visitors within three months."
      }
    ]
  },
  'Processing bills, receipts and invoices takes too long': {
    title: "Financial Document Processing Solutions",
    solutions: [
      {
        name: "Smart Document Reader",
        description: "Our system can automatically read information from invoices and receipts with remarkable accuracy, similar to having a dedicated assistant who never makes typing errors.",
        benefit: "This typically saves businesses 15-20 hours every week."
      },
      {
        name: "Digital Filing Cabinet",
        description: "Moving from paper to a secure online system means you can instantly find any document with a simple search - imagine never having to dig through filing cabinets again!",
        benefit: "Everything is backed up safely and accessible from anywhere."
      },
      {
        name: "Connected Financial Systems",
        description: "We can create automatic connections between your documents and accounting software, eliminating double-entry. It's like having your filing system and accounting books magically stay in sync with each other.",
        benefit: "Many similar businesses have reduced their paperwork time by 60-70% with these approaches."
      }
    ]
  },
  'Responding to customer questions quickly enough': {
    title: "Customer Response Management Solutions",
    solutions: [
      {
        name: "Smart Response Assistant",
        description: "We can set up a system that automatically answers common customer questions instantly, day or night. It's like having a knowledgeable team member who specializes in handling routine inquiries, freeing you to focus on more complex customer needs.",
        benefit: "Businesses respond to customers 5x faster while spending less time on communication."
      },
      {
        name: "Customer Communication Hub",
        description: "All your customer conversations from email, social media, and website inquiries can flow into one organized system. Imagine having all customer conversations in one place instead of scattered across different platforms.",
        benefit: "Reduces response time and ensures no customer inquiry gets missed."
      },
      {
        name: "Follow-up Reminder System",
        description: "Our tools can automatically remind you when it's time to check in with important customers or follow up on inquiries. It's like having a personal assistant who never forgets an important customer touchpoint.",
        benefit: "Improves customer satisfaction and increases repeat business."
      }
    ]
  }
};

export const concernAddressing = {
  technology: "I completely understand your concern about bringing in new technology. Many business owners worry about whether it will be too complicated or if their team will resist using it. The good news is that modern systems are much more user-friendly than they used to be - think of how much easier smartphones are to use now compared to computers from 10 years ago. The same improvements have happened with business technology. Our approach includes hands-on training and ongoing support to make sure everyone feels comfortable. We typically find that even the most technology-hesitant team members become comfortable within just 1-2 weeks, and many become the biggest supporters once they see how much time it saves them from tedious tasks.",
  security: "Your concern about keeping your business information secure is absolutely valid. It's like making sure your business premises have good locks and security systems. All the solutions we recommend include strong security measures - similar to how banks protect financial information. Your data is encrypted (which means scrambled so only authorized people can read it), regularly backed up, and protected by multiple security layers. Many of our clients actually find their information becomes more secure after moving to our recommended systems, compared to older methods like storing important documents in filing cabinets or on individual computers that could break down or be stolen.",
  cost: "I understand your concern about costs - every business investment needs to make financial sense. The good news is that these solutions are designed to pay for themselves quickly. Think of it like upgrading from an old, inefficient heating system - there's an upfront cost, but the monthly savings make it worthwhile. Based on businesses similar to yours, these solutions typically pay for themselves within 4-6 months through time savings and increased business. For example, companies using our document automation typically save about £4,200 monthly in staff time that can be redirected to growing the business instead. We can start with a smaller project to demonstrate the value before making any bigger changes.",
  gdpr: "Your concerns about GDPR compliance are completely understandable. Many business owners feel overwhelmed by these regulations. Think of GDPR compliance like having the proper safety equipment in a physical shop - it protects both your customers and your business. While the regulations might seem complex, implementing them is often more straightforward than you might expect. The good news is that once proper compliance measures are in place, they're relatively easy to maintain. Most of our clients find that becoming compliant is much less disruptive than they feared, and many discover that improved data practices actually help them serve their customers better. We can guide you through the process step by step, focusing on practical solutions rather than legal jargon."
};
