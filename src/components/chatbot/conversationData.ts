
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
  'Creating regular posts, emails or content to share with customers': 'Content creation can definitely feel overwhelming. Are you trying to manage social media, email newsletters, website content, or all of the above? And is the challenge more about finding time to create content or knowing what content to create?'
};
