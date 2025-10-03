import { ConversationTree } from '../components/business-consultant-chatbot/types';

export const enhancedConversationTree: ConversationTree = {
  start: {
    id: 'start',
    text: [
      "Hi there! 👋 I'm your AI business consultant from 11th Temple Solutions.",
      "I help Welsh SMEs and border county businesses save time, cut costs, and compete with the big players using smart automation.",
      "I'm guessing you're here because you're either drowning in admin work, struggling to keep up with customer demands, or wondering how AI could actually help your business. Sound about right?"
    ],
    options: [
      { text: "Yes, that's exactly it! 💯", next: 'quick_qualifier' },
      { text: "Tell me what you do first 🤔", next: 'about_us' },
      { text: "I have a specific problem 🎯", next: 'specific_problem' },
      { text: "Show me your services 📋", next: 'services_overview' }
    ],
  },

  quick_qualifier: {
    id: 'quick_qualifier',
    text: [
      "Brilliant! Let's get straight to it. What's currently eating up most of your time or causing the biggest headache?"
    ],
    options: [
      { text: "📧 Customer emails & inquiries", next: 'customer_comms_solution' },
      { text: "📄 Paperwork, invoices & admin", next: 'admin_solution' },
      { text: "📱 Marketing & getting noticed", next: 'marketing_solution' },
      { text: "💰 Managing finances & cash flow", next: 'finance_solution' },
      { text: "🌐 Website not bringing in business", next: 'website_solution' },
      { text: "🤷 Multiple things - where do I start?", next: 'multiple_issues' }
    ],
  },

  about_us: {
    id: 'about_us',
    text: [
      "Fair enough! Here's what makes us different:",
      "🏴󠁧󠁢󠁷󠁬󠁳󠁿 We're based in Wales and understand rural business challenges firsthand",
      "💡 We specialize in making AI and automation accessible for SMEs (no tech jargon!)",
      "💰 Our clients typically save £10-15k annually while working fewer hours",
      "🎯 We focus on practical solutions that work for businesses with 1-10 employees",
      "92.6% of Welsh SMEs haven't adopted AI yet - but those who do gain a massive competitive edge. Ready to explore how we can help you?"
    ],
    options: [
      { text: "Yes, let's talk about my business 🚀", next: 'quick_qualifier' },
      { text: "What services do you offer? 📋", next: 'services_overview' },
      { text: "Show me some success stories 📈", next: 'success_stories' }
    ],
  },

  specific_problem: {
    id: 'specific_problem',
    text: [
      "Perfect! I love getting straight to the point. What's the specific challenge you're facing?"
    ],
    options: [
      { text: "GDPR compliance & data protection 🔒", next: 'gdpr_quick' },
      { text: "Staff lack digital skills 💻", next: 'digital_skills_quick' },
      { text: "Can't afford to hire more people 👥", next: 'automation_quick' },
      { text: "Losing customers to bigger competitors 📉", next: 'competitive_edge' },
      { text: "Something else - let's discuss 💬", next: 'consultation_direct' }
    ],
  },

  services_overview: {
    id: 'services_overview',
    text: [
      "Here's what we do best for Welsh and border county businesses:",
      "🤖 **Process Automation** - Free up 10-20 hours/week by automating repetitive tasks",
      "🔍 **Local SEO AI** - Get found by customers in Powys, Shropshire & Herefordshire",
      "📊 **Customer Insights** - Understand your customers better with smart analytics",
      "💬 **24/7 AI Support** - Never miss a customer inquiry, even at 2am",
      "🔒 **GDPR Compliance** - Stay legal without the headache",
      "🎓 **Digital Skills Training** - Get your team confident with technology",
      "Which of these would make the biggest difference to your business right now?"
    ],
    options: [
      { text: "Process Automation 🤖", next: 'automation_deep' },
      { text: "Local SEO 🔍", next: 'seo_deep' },
      { text: "Customer Support 💬", next: 'support_deep' },
      { text: "GDPR Compliance 🔒", next: 'gdpr_quick' },
      { text: "Digital Skills 🎓", next: 'digital_skills_quick' },
      { text: "Let's discuss my needs 📞", next: 'consultation_direct' }
    ],
  },

  // QUICK SOLUTION PATHS (Faster to value)

  customer_comms_solution: {
    id: 'customer_comms_solution',
    text: [
      "Ah, the never-ending inbox! 📬 You're definitely not alone.",
      "Most Welsh SMEs tell us they spend 10-15 hours a week on customer communications. That's nearly 2 full working days!",
      "Here's what we can do for you:"
    ],
    solutions: [
      {
        title: "🤖 AI Customer Service Assistant",
        description: "Handles routine questions 24/7 (opening hours, pricing, availability). You only deal with the complex stuff. Typical result: 60% fewer emails to handle personally."
      },
      {
        title: "📧 Smart Email Management",
        description: "Automatically categorizes, prioritizes, and even drafts responses to common inquiries. Saves 8-12 hours per week on average."
      },
      {
        title: "💬 Intelligent Chatbot",
        description: "Captures leads even when you're closed. Answers FAQs instantly. Books appointments automatically. Works while you sleep!"
      }
    ],
    options: [
      { text: "This sounds perfect! What's next? ✅", next: 'implementation_path' },
      { text: "What does this cost? 💰", next: 'pricing_customer_service' },
      { text: "Show me a real example 📊", next: 'case_study_customer_service' },
      { text: "Explore other solutions 🔄", next: 'quick_qualifier' }
    ],
  },

  admin_solution: {
    id: 'admin_solution',
    text: [
      "Paperwork - the bane of every small business owner! 📄",
      "Did you know the average SME spends 120 hours a year on admin that could be automated? That's 3 full working weeks!",
      "Here's how we can help:"
    ],
    solutions: [
      {
        title: "📄 Document Processing AI",
        description: "Automatically extracts data from invoices, receipts, and forms. No more manual data entry. Accuracy rate: 99.5%."
      },
      {
        title: "💰 Automated Invoicing",
        description: "Creates, sends, and tracks invoices automatically. Sends polite payment reminders. Typical result: Get paid 40% faster."
      },
      {
        title: "📊 Smart Bookkeeping",
        description: "Categorizes expenses automatically. Prepares reports for your accountant. Makes tax time painless."
      }
    ],
    options: [
      { text: "I need this yesterday! 🚀", next: 'implementation_path' },
      { text: "What's the investment? 💰", next: 'pricing_automation' },
      { text: "Show me the ROI 📈", next: 'roi_calculator' },
      { text: "Look at other options 🔄", next: 'quick_qualifier' }
    ],
  },

  marketing_solution: {
    id: 'marketing_solution',
    text: [
      "Marketing can feel like shouting into the void, especially when you're competing with bigger businesses! 📱",
      "Good news: AI levels the playing field. Here's how:"
    ],
    solutions: [
      {
        title: "🎯 Local SEO AI",
        description: "Get found when people search for businesses like yours in Powys, Shropshire, or Herefordshire. Typical result: 40-60% more website visitors in 3 months."
      },
      {
        title: "📱 AI Content Assistant",
        description: "Creates social media posts, emails, and blog ideas tailored to your local audience. Saves 5-8 hours per week on content creation."
      },
      {
        title: "📊 Smart Analytics Dashboard",
        description: "Shows exactly which marketing activities bring in customers. No more guessing. Make data-driven decisions with confidence."
      }
    ],
    options: [
      { text: "This is exactly what I need! ✨", next: 'implementation_path' },
      { text: "What does it cost? 💰", next: 'pricing_marketing' },
      { text: "Show me results 📈", next: 'case_study_marketing' },
      { text: "See other solutions 🔄", next: 'quick_qualifier' }
    ],
  },

  finance_solution: {
    id: 'finance_solution',
    text: [
      "Cash flow and financial management - crucial but time-consuming! 💰",
      "Let's make your financial life easier:"
    ],
    solutions: [
      {
        title: "💳 Automated Payment Processing",
        description: "Tracks invoices, sends reminders, processes payments. Get paid faster without the awkward conversations."
      },
      {
        title: "📊 Real-Time Financial Dashboard",
        description: "See your cash flow, expenses, and profitability at a glance. Make informed decisions quickly."
      },
      {
        title: "🤖 Expense Management AI",
        description: "Automatically categorizes expenses, flags unusual spending, prepares reports. Makes accountant meetings a breeze."
      }
    ],
    options: [
      { text: "Let's do this! 🎯", next: 'implementation_path' },
      { text: "What's the cost? 💰", next: 'pricing_finance' },
      { text: "Show me the savings 📈", next: 'roi_calculator' },
      { text: "Explore other options 🔄", next: 'quick_qualifier' }
    ],
  },

  website_solution: {
    id: 'website_solution',
    text: [
      "A website that doesn't bring in business is just an expensive business card! 🌐",
      "Let's fix that:"
    ],
    solutions: [
      {
        title: "🔍 Local SEO Optimization",
        description: "Get found by customers searching for businesses like yours in your area. Typical result: 3x more website visitors in 90 days."
      },
      {
        title: "💬 AI Chat Assistant",
        description: "Captures leads 24/7, answers questions instantly, books appointments automatically. Never miss an opportunity."
      },
      {
        title: "📊 Conversion Optimization",
        description: "AI analyzes visitor behavior and automatically improves your website to convert more visitors into customers."
      }
    ],
    options: [
      { text: "Perfect! How do we start? 🚀", next: 'implementation_path' },
      { text: "What's the investment? 💰", next: 'pricing_website' },
      { text: "Show me examples 📸", next: 'case_study_website' },
      { text: "See other solutions 🔄", next: 'quick_qualifier' }
    ],
  },

  multiple_issues: {
    id: 'multiple_issues',
    text: [
      "I hear you! Most businesses face multiple challenges at once. The good news? Many of our solutions work together to solve several problems at once.",
      "Here's my recommendation: Let's start with the ONE thing that would make the biggest immediate impact, then build from there.",
      "If you had to pick just one area where you'd love to see improvement in the next 30 days, what would it be?"
    ],
    options: [
      { text: "Save time on daily tasks ⏰", next: 'admin_solution' },
      { text: "Get more customers 📈", next: 'marketing_solution' },
      { text: "Better customer service 💬", next: 'customer_comms_solution' },
      { text: "Improve cash flow 💰", next: 'finance_solution' },
      { text: "Let's just talk it through 📞", next: 'consultation_direct' }
    ],
  },

  // QUICK PATHS FOR SPECIFIC TOPICS

  gdpr_quick: {
    id: 'gdpr_quick',
    text: [
      "GDPR compliance - important but confusing! 🔒",
      "With fines up to £17.5M and 52% of UK SMEs still not fully compliant, it's worth getting right.",
      "We make it simple:"
    ],
    solutions: [
      {
        title: "🔍 Automated Data Mapping",
        description: "Identifies and tracks all personal data across your business. Nothing falls through the cracks."
      },
      {
        title: "✅ Consent Management",
        description: "Manages customer consent and preferences automatically. Always compliant, always up-to-date."
      },
      {
        title: "🎓 Staff Training",
        description: "Comprehensive GDPR education for your team. Build a culture of data protection."
      }
    ],
    options: [
      { text: "I need this now! 🚨", next: 'implementation_path' },
      { text: "What does it cost? 💰", next: 'pricing_gdpr' },
      { text: "Book a compliance audit 📋", next: 'consultation_direct' },
      { text: "See other solutions 🔄", next: 'services_overview' }
    ],
  },

  digital_skills_quick: {
    id: 'digital_skills_quick',
    text: [
      "Digital skills gaps are holding back 72% of UK SMEs! 💻",
      "But here's the thing: your team doesn't need to become tech experts. They just need confidence with the tools that matter.",
      "Our approach:"
    ],
    solutions: [
      {
        title: "🎓 Practical Skills Training",
        description: "Focus on the 20 essential digital skills that actually matter for your business. No fluff, just practical knowledge."
      },
      {
        title: "👥 Workplace Champions Program",
        description: "Train internal advocates who support colleagues and maintain momentum. Creates lasting change."
      },
      {
        title: "🔒 Security Awareness",
        description: "Protect your business from cyber threats through educated staff. Prevention is better than cure."
      }
    ],
    options: [
      { text: "This is what we need! ✅", next: 'implementation_path' },
      { text: "What's the investment? 💰", next: 'pricing_training' },
      { text: "Tell me more about the program 📚", next: 'training_details' },
      { text: "Explore other options 🔄", next: 'services_overview' }
    ],
  },

  automation_quick: {
    id: 'automation_quick',
    text: [
      "Can't afford more staff? You're not alone! Most Welsh SMEs face the same challenge. 👥",
      "Good news: Automation can give you the equivalent of 1-2 extra team members without the salary, holidays, or sick days.",
      "Here's what's possible:"
    ],
    solutions: [
      {
        title: "🤖 Process Automation",
        description: "Automate repetitive tasks like data entry, report generation, and customer follow-ups. Typical saving: 15-20 hours per week."
      },
      {
        title: "💬 AI Customer Service",
        description: "Handle routine inquiries 24/7 without hiring. Like having a customer service team that never sleeps."
      },
      {
        title: "📊 Smart Workflows",
        description: "Connect your tools so they work together automatically. No more copying data between systems."
      }
    ],
    options: [
      { text: "Show me how to get started! 🚀", next: 'implementation_path' },
      { text: "What's the ROI? 📈", next: 'roi_calculator' },
      { text: "I want to see examples 📸", next: 'case_study_automation' },
      { text: "Look at other solutions 🔄", next: 'services_overview' }
    ],
  },

  competitive_edge: {
    id: 'competitive_edge',
    text: [
      "Competing with bigger businesses is tough, but you have advantages they don't! 🎯",
      "You're more agile, more personal, and more connected to your community. AI helps you leverage these strengths while matching their capabilities.",
      "Here's how:"
    ],
    solutions: [
      {
        title: "🔍 Local Market Dominance",
        description: "AI-powered local SEO ensures you're found first when people search for businesses like yours in your area."
      },
      {
        title: "💬 Personal Service at Scale",
        description: "Maintain your personal touch while serving more customers. AI handles routine stuff, you handle relationships."
      },
      {
        title: "📊 Data-Driven Decisions",
        description: "Make decisions based on real data, not guesswork. Know what your customers want before your competitors do."
      }
    ],
    options: [
      { text: "I'm ready to compete! 💪", next: 'implementation_path' },
      { text: "What's this going to cost? 💰", next: 'pricing_overview' },
      { text: "Show me success stories 📈", next: 'success_stories' },
      { text: "Explore other options 🔄", next: 'services_overview' }
    ],
  },

  // IMPLEMENTATION & NEXT STEPS

  implementation_path: {
    id: 'implementation_path',
    text: [
      "Brilliant! Here's how we typically work with Welsh SMEs:",
      "**Week 1:** Free 30-minute consultation - we discuss your specific needs and create a tailored plan",
      "**Week 2-3:** Implementation begins - we set up systems and train your team",
      "**Week 4:** You start seeing results - time saved, better customer service, more leads",
      "**Ongoing:** We monitor, optimize, and support you every step of the way",
      "Most clients see ROI within 6-9 months, with typical savings of £10-15k annually.",
      "Ready to get started?"
    ],
    options: [
      { text: "Yes! Book my free consultation 📅", next: 'consultation_booking' },
      { text: "What does this cost? 💰", next: 'pricing_overview' },
      { text: "I have more questions ❓", next: 'faq_quick' },
      { text: "Let me think about it 🤔", next: 'follow_up' }
    ],
  },

  consultation_direct: {
    id: 'consultation_direct',
    text: [
      "Perfect! Sometimes the best way forward is a proper conversation. 📞",
      "In our free 30-minute consultation, we'll:",
      "✅ Understand your specific challenges and goals",
      "✅ Identify quick wins and long-term opportunities",
      "✅ Create a tailored roadmap for your business",
      "✅ Answer all your questions (no sales pressure!)",
      "✅ Give you actionable advice even if you don't work with us",
      "Sound good?"
    ],
    options: [
      { text: "Yes, let's book it! 📅", next: 'consultation_booking' },
      { text: "What happens in the consultation? 🤔", next: 'consultation_details' },
      { text: "Can I see some examples first? 📊", next: 'success_stories' }
    ],
  },

  consultation_booking: {
    id: 'consultation_booking',
    text: [
      "Excellent! To book your free 30-minute consultation, simply:",
      "1️⃣ Close this chat",
      "2️⃣ Click the 'Get Started' button at the top of the page",
      "3️⃣ Choose a time that works for you",
      "We're excited to help your business thrive! 🚀",
      "See you soon!"
    ],
    isEnd: true
  },

  // PRICING PATHS

  pricing_overview: {
    id: 'pricing_overview',
    text: [
      "Great question! Our pricing is designed to be accessible for SMEs. 💰",
      "**Typical Investment:** £500-2,000/month depending on your needs",
      "**Typical Savings:** £10,000-15,000/year in time and efficiency",
      "**ROI Timeline:** Most clients break even in 6-9 months",
      "**Payment Options:** Monthly subscriptions (no long-term contracts)",
      "We also help you access Welsh Government funding and grants that can cover 30-50% of costs.",
      "Want to discuss specific pricing for your situation?"
    ],
    options: [
      { text: "Yes, let's talk numbers 📊", next: 'consultation_direct' },
      { text: "Tell me about funding options 💷", next: 'funding_info' },
      { text: "Show me the ROI calculator 📈", next: 'roi_calculator' },
      { text: "I'm ready to start 🚀", next: 'implementation_path' }
    ],
  },

  pricing_customer_service: {
    id: 'pricing_customer_service',
    text: [
      "AI Customer Service typically costs £300-800/month depending on volume. 💰",
      "Compare that to hiring someone part-time (£1,200-1,800/month) who can only work 9-5.",
      "**What you get:**",
      "✅ 24/7 coverage (even weekends and holidays)",
      "✅ Instant responses to routine questions",
      "✅ Handles multiple customers simultaneously",
      "✅ Never calls in sick or takes holidays",
      "✅ Learns and improves over time",
      "Most clients save 10-15 hours per week and capture 35% more leads.",
      "Want to see how this would work for your business?"
    ],
    options: [
      { text: "Yes, let's discuss my needs 📞", next: 'consultation_direct' },
      { text: "Show me a case study 📊", next: 'case_study_customer_service' },
      { text: "What about funding? 💷", next: 'funding_info' },
      { text: "I'm ready to start 🚀", next: 'implementation_path' }
    ],
  },

  pricing_automation: {
    id: 'pricing_automation',
    text: [
      "Process automation typically costs £400-1,200/month depending on complexity. 💰",
      "**Average ROI:** £10,000-15,000 saved annually",
      "**Time Saved:** 15-20 hours per week",
      "**Break-even:** Usually 6-9 months",
      "Think about it: If you're spending 15 hours a week on admin at £30/hour, that's £23,400 a year in your time. Our automation typically costs £6,000-14,000 annually.",
      "Plus, you get your time back to focus on growing your business!",
      "Want to calculate your specific ROI?"
    ],
    options: [
      { text: "Yes, show me my ROI 📈", next: 'roi_calculator' },
      { text: "Let's discuss my situation 📞", next: 'consultation_direct' },
      { text: "Tell me about funding 💷", next: 'funding_info' },
      { text: "I'm ready to proceed 🚀", next: 'implementation_path' }
    ],
  },

  pricing_marketing: {
    id: 'pricing_marketing',
    text: [
      "AI Marketing solutions typically cost £350-900/month. 💰",
      "**What you get:**",
      "✅ Local SEO optimization (get found by nearby customers)",
      "✅ AI content creation (social media, emails, blogs)",
      "✅ Smart analytics (know what's working)",
      "✅ Automated campaigns (save 5-8 hours/week)",
      "**Typical Results:**",
      "📈 40-60% more website visitors in 3 months",
      "💰 30% increase in leads",
      "⏰ 5-8 hours saved per week on content creation",
      "Compare that to hiring a marketing person (£2,000-3,000/month) or an agency (£1,500-5,000/month).",
      "Want to see how this would work for your business?"
    ],
    options: [
      { text: "Yes, let's talk 📞", next: 'consultation_direct' },
      { text: "Show me results 📊", next: 'case_study_marketing' },
      { text: "What about grants? 💷", next: 'funding_info' },
      { text: "Let's get started 🚀", next: 'implementation_path' }
    ],
  },

  pricing_finance: {
    id: 'pricing_finance',
    text: [
      "Financial automation typically costs £300-700/month. 💰",
      "**What you get:**",
      "✅ Automated invoicing and payment tracking",
      "✅ Smart expense categorization",
      "✅ Real-time financial dashboards",
      "✅ Automated payment reminders",
      "**Typical Results:**",
      "💰 Get paid 40% faster",
      "⏰ Save 10-12 hours per month on bookkeeping",
      "📊 Always know your financial position",
      "🎯 Make better business decisions with real data",
      "Most clients save more in time and improved cash flow than the system costs!",
      "Want to calculate your specific savings?"
    ],
    options: [
      { text: "Yes, show me the numbers 📈", next: 'roi_calculator' },
      { text: "Let's discuss my needs 📞", next: 'consultation_direct' },
      { text: "Tell me about funding 💷", next: 'funding_info' },
      { text: "I'm ready to start 🚀", next: 'implementation_path' }
    ],
  },

  pricing_website: {
    id: 'pricing_website',
    text: [
      "Website optimization typically costs £400-1,000/month. 💰",
      "**What you get:**",
      "✅ Local SEO (get found by nearby customers)",
      "✅ AI chatbot (capture leads 24/7)",
      "✅ Conversion optimization (turn visitors into customers)",
      "✅ Performance monitoring and improvements",
      "**Typical Results:**",
      "📈 3x more website visitors in 90 days",
      "💰 25-30% more inquiries",
      "🎯 35% more leads captured outside business hours",
      "Think about it: If just 2-3 extra customers per month come from your website, it pays for itself!",
      "Want to see how this would work for your business?"
    ],
    options: [
      { text: "Yes, let's discuss it 📞", next: 'consultation_direct' },
      { text: "Show me examples 📸", next: 'case_study_website' },
      { text: "What about funding? 💷", next: 'funding_info' },
      { text: "Let's get started 🚀", next: 'implementation_path' }
    ],
  },

  pricing_gdpr: {
    id: 'pricing_gdpr',
    text: [
      "GDPR compliance solutions typically cost £250-600/month. 💰",
      "**Compare that to:**",
      "❌ Potential fines: Up to £17.5M (or 4% of turnover)",
      "❌ Reputation damage: Priceless",
      "❌ Legal fees if something goes wrong: £5,000-50,000+",
      "**What you get:**",
      "✅ Automated data mapping and tracking",
      "✅ Consent management system",
      "✅ Staff training and ongoing support",
      "✅ Regular compliance audits",
      "✅ Peace of mind",
      "Plus, many insurance companies offer discounts for businesses with proper GDPR compliance!",
      "Want to book a compliance audit?"
    ],
    options: [
      { text: "Yes, let's do an audit 📋", next: 'consultation_direct' },
      { text: "Tell me more about the process 🔍", next: 'gdpr_details' },
      { text: "What about funding? 💷", next: 'funding_info' },
      { text: "I'm ready to get compliant 🚀", next: 'implementation_path' }
    ],
  },

  pricing_training: {
    id: 'pricing_training',
    text: [
      "Digital skills training typically costs £200-500/month per team member. 💰",
      "**Or:** £1,500-3,000 for a comprehensive team program",
      "**What you get:**",
      "✅ Practical skills training (no fluff)",
      "✅ Workplace champions program",
      "✅ Ongoing support and resources",
      "✅ Measurable progress tracking",
      "**ROI:**",
      "📈 60% improvement in productivity",
      "💰 Reduced errors and rework",
      "😊 Increased staff confidence and satisfaction",
      "🎯 Better security and compliance",
      "Plus, we help you access government funding that can cover 30-50% of training costs!",
      "Want to discuss a program for your team?"
    ],
    options: [
      { text: "Yes, let's talk 📞", next: 'consultation_direct' },
      { text: "Tell me about the program 📚", next: 'training_details' },
      { text: "What funding is available? 💷", next: 'funding_info' },
      { text: "Let's get started 🚀", next: 'implementation_path' }
    ],
  },

  // SUPPORT PATHS

  roi_calculator: {
    id: 'roi_calculator',
    text: [
      "Let's calculate your potential ROI! 📊",
      "**Average Welsh SME sees:**",
      "💰 £10,000-15,000 saved annually",
      "⏰ 15-20 hours saved per week",
      "📈 30% increase in productivity",
      "💼 Equivalent of 1-2 extra team members",
      "**Your time is valuable!**",
      "If you're spending 15 hours/week on tasks that could be automated:",
      "• At £30/hour = £23,400/year",
      "• At £50/hour = £39,000/year",
      "• At £75/hour = £58,500/year",
      "Our solutions typically cost £6,000-18,000/year. The math speaks for itself!",
      "Want to calculate your specific ROI?"
    ],
    options: [
      { text: "Yes, let's work it out 📞", next: 'consultation_direct' },
      { text: "Show me case studies 📊", next: 'success_stories' },
      { text: "I'm convinced - let's start! 🚀", next: 'implementation_path' },
      { text: "Tell me about funding 💷", next: 'funding_info' }
    ],
  },

  funding_info: {
    id: 'funding_info',
    text: [
      "Great news! There are several funding options available for Welsh businesses: 💷",
      "**Welsh Government Support:**",
      "🏴󠁧󠁢󠁷󠁬󠁳󠁿 Smart Innovation Programme - Up to 50% funding for AI projects",
      "🏴󠁧󠁢󠁷󠁬󠁳󠁿 Business Wales - Grants and support for digital transformation",
      "🏴󠁧󠁢󠁷󠁬󠁳󠁿 Digital Development Fund - Support for technology adoption",
      "**UK-Wide Support:**",
      "🇬🇧 Help to Grow: Digital - £5,000 towards digital technology",
      "🇬🇧 Innovation Loans - £25,000-£600,000 for innovative projects",
      "**Tax Relief:**",
      "💰 R&D Tax Credits - Claim back up to 33% of qualifying costs",
      "💰 Capital Allowances - 100% first-year allowance on qualifying equipment",
      "We help you navigate these options and maximize your funding. Many clients get 30-50% of costs covered!",
      "Want to explore what you're eligible for?"
    ],
    options: [
      { text: "Yes, help me access funding 💰", next: 'consultation_direct' },
      { text: "Tell me more about the process 📋", next: 'funding_details' },
      { text: "I'm ready to proceed 🚀", next: 'implementation_path' },
      { text: "Back to solutions 🔄", next: 'services_overview' }
    ],
  },

  success_stories: {
    id: 'success_stories',
    text: [
      "Here are some real results from Welsh and border county businesses: 📈"
    ],
    solutions: [
      {
        title: "🏪 Retail Business - Welshpool",
        description: "Implemented AI inventory management. Result: 35% reduction in excess stock, £15k saved annually, 12 hours/week freed up."
      },
      {
        title: "🏗️ Construction Company - Shropshire",
        description: "Automated admin and invoicing. Result: Get paid 45% faster, 10 hours/week saved, improved cash flow by £25k."
      },
      {
        title: "🏨 Tourism Business - Brecon",
        description: "AI customer service and booking system. Result: 60% more bookings, 24/7 availability, captured £40k in after-hours bookings."
      },
      {
        title: "🌾 Farm Shop - Herefordshire",
        description: "Local SEO and AI marketing. Result: 3x website traffic, 40% more customers, £30k additional revenue."
      }
    ],
    options: [
      { text: "I want results like these! 🚀", next: 'implementation_path' },
      { text: "What would this cost me? 💰", next: 'pricing_overview' },
      { text: "Let's discuss my business 📞", next: 'consultation_direct' },
      { text: "See more solutions 🔄", next: 'services_overview' }
    ],
  },

  case_study_customer_service: {
    id: 'case_study_customer_service',
    text: [
      "**Real Example: Tourism Business in Brecon** 🏨",
      "**Challenge:** Missing bookings outside business hours, spending 15 hours/week answering the same questions",
      "**Solution:** AI customer service assistant",
      "**Results:**",
      "✅ 60% of routine questions handled automatically",
      "✅ Captured £40,000 in after-hours bookings in first year",
      "✅ Saved 12 hours per week",
      "✅ Customer satisfaction increased (instant responses)",
      "✅ ROI achieved in 4 months",
      "**Owner's Quote:** &quot;It's like having a knowledgeable team member who never sleeps. Best investment we've made.&quot;",
      "Want similar results for your business?"
    ],
    options: [
      { text: "Yes! Let's make it happen 🚀", next: 'implementation_path' },
      { text: "What's the investment? 💰", next: 'pricing_customer_service' },
      { text: "Book a consultation 📞", next: 'consultation_direct' },
      { text: "See other examples 📊", next: 'success_stories' }
    ],
  },

  case_study_automation: {
    id: 'case_study_automation',
    text: [
      "**Real Example: Construction Company in Shropshire** 🏗️",
      "**Challenge:** Drowning in paperwork, slow invoicing, chasing payments",
      "**Solution:** Automated admin and financial processes",
      "**Results:**",
      "✅ 10 hours per week saved on admin",
      "✅ Get paid 45% faster",
      "✅ Improved cash flow by £25,000",
      "✅ Zero invoicing errors",
      "✅ ROI achieved in 6 months",
      "**Owner's Quote:** &quot;I used to spend evenings doing paperwork. Now I spend them with my family. The system paid for itself in saved time alone.&quot;",
      "Ready to reclaim your time?"
    ],
    options: [
      { text: "Absolutely! Let's do this 🚀", next: 'implementation_path' },
      { text: "What does it cost? 💰", next: 'pricing_automation' },
      { text: "Book a consultation 📞", next: 'consultation_direct' },
      { text: "See other examples 📊", next: 'success_stories' }
    ],
  },

  case_study_marketing: {
    id: 'case_study_marketing',
    text: [
      "**Real Example: Farm Shop in Herefordshire** 🌾",
      "**Challenge:** Competing with supermarkets, limited marketing budget, no time for social media",
      "**Solution:** AI-powered local SEO and content marketing",
      "**Results:**",
      "✅ 3x increase in website traffic",
      "✅ 40% more customers",
      "✅ £30,000 additional revenue in first year",
      "✅ 5 hours per week saved on content creation",
      "✅ ROI achieved in 5 months",
      "**Owner's Quote:** &quot;We're now the first result when people search for farm shops in our area. The AI creates our social media content, and it actually sounds like us!&quot;",
      "Want to dominate your local market?"
    ],
    options: [
      { text: "Yes! Let's get started 🚀", next: 'implementation_path' },
      { text: "What's the investment? 💰", next: 'pricing_marketing' },
      { text: "Book a consultation 📞", next: 'consultation_direct' },
      { text: "See other examples 📊", next: 'success_stories' }
    ],
  },

  case_study_website: {
    id: 'case_study_website',
    text: [
      "**Real Example: Professional Services in Powys** 💼",
      "**Challenge:** Website not generating leads, losing business to competitors",
      "**Solution:** Website optimization with AI chatbot and local SEO",
      "**Results:**",
      "✅ 250% increase in website inquiries",
      "✅ 35% of leads captured outside business hours",
      "✅ Ranking #1 for key local searches",
      "✅ £45,000 additional revenue in first year",
      "✅ ROI achieved in 3 months",
      "**Owner's Quote:** &quot;Our website went from a digital brochure to our best salesperson. The AI chatbot captures leads even when we're asleep.&quot;",
      "Ready to transform your website?"
    ],
    options: [
      { text: "Yes! Let's do it 🚀", next: 'implementation_path' },
      { text: "What does it cost? 💰", next: 'pricing_website' },
      { text: "Book a consultation 📞", next: 'consultation_direct' },
      { text: "See other examples 📊", next: 'success_stories' }
    ],
  },

  // DETAILED INFO PATHS

  automation_deep: {
    id: 'automation_deep',
    text: [
      "**Process Automation - The Details** 🤖",
      "We automate the repetitive tasks that eat up your time:",
      "**Common Automations:**",
      "📧 Email management and responses",
      "📄 Data entry and document processing",
      "💰 Invoicing and payment tracking",
      "📊 Report generation",
      "📅 Appointment scheduling",
      "🔄 Data synchronization between systems",
      "**How It Works:**",
      "1️⃣ We identify your most time-consuming tasks",
      "2️⃣ Design automation workflows",
      "3️⃣ Implement and test",
      "4️⃣ Train your team",
      "5️⃣ Monitor and optimize",
      "**Typical Results:** 15-20 hours saved per week, £10-15k saved annually",
      "Want to see how this applies to your business?"
    ],
    options: [
      { text: "Yes, let's discuss my processes 📞", next: 'consultation_direct' },
      { text: "Show me a case study 📊", next: 'case_study_automation' },
      { text: "What's the cost? 💰", next: 'pricing_automation' },
      { text: "I'm ready to start 🚀", next: 'implementation_path' }
    ],
  },

  seo_deep: {
    id: 'seo_deep',
    text: [
      "**Local SEO AI - The Details** 🔍",
      "Get found by customers searching for businesses like yours in your area.",
      "**What We Do:**",
      "🎯 Optimize for local search terms (e.g., &quot;accountant in Welshpool&quot;)",
      "📍 Google Business Profile optimization",
      "⭐ Review management and response",
      "📱 Local directory listings",
      "🗺️ Map pack optimization",
      "📊 Competitor analysis and monitoring",
      "**AI Advantages:**",
      "✅ Continuous optimization based on performance",
      "✅ Automatic content updates",
      "✅ Real-time competitor tracking",
      "✅ Predictive keyword analysis",
      "**Typical Results:** 40-60% more website visitors in 3 months, 3x increase in local search visibility",
      "Want to dominate local search?"
    ],
    options: [
      { text: "Yes! Let's talk strategy 📞", next: 'consultation_direct' },
      { text: "Show me results 📊", next: 'case_study_marketing' },
      { text: "What's the investment? 💰", next: 'pricing_marketing' },
      { text: "Let's get started 🚀", next: 'implementation_path' }
    ],
  },

  support_deep: {
    id: 'support_deep',
    text: [
      "**24/7 AI Customer Support - The Details** 💬",
      "Never miss a customer inquiry, even at 2am on a Sunday.",
      "**What It Does:**",
      "✅ Answers routine questions instantly",
      "✅ Books appointments automatically",
      "✅ Captures lead information",
      "✅ Escalates complex issues to you",
      "✅ Works across website, email, and social media",
      "✅ Learns from every interaction",
      "**Smart Features:**",
      "🧠 Understands context and intent",
      "🎯 Personalizes responses based on customer history",
      "📊 Provides insights on common questions",
      "🔄 Integrates with your existing systems",
      "**Typical Results:** 60% of inquiries handled automatically, 35% more leads captured, 12 hours/week saved",
      "Want to see how this works for your business?"
    ],
    options: [
      { text: "Yes, let's discuss it 📞", next: 'consultation_direct' },
      { text: "Show me an example 📊", next: 'case_study_customer_service' },
      { text: "What does it cost? 💰", next: 'pricing_customer_service' },
      { text: "I'm ready to implement 🚀", next: 'implementation_path' }
    ],
  },

  training_details: {
    id: 'training_details',
    text: [
      "**Digital Skills Training Program - The Details** 🎓",
      "Build a digitally confident team that embraces technology.",
      "**Our Approach:**",
      "👥 Age-appropriate training methods",
      "🎯 Focus on practical, job-relevant skills",
      "🏆 Workplace Champions program",
      "📚 Ongoing resources and support",
      "🔒 Security awareness training",
      "**The 20 Essential Digital Skills:**",
      "We focus on the skills that actually matter for your business, not generic computer training.",
      "**Program Structure:**",
      "Week 1-2: Assessment and baseline",
      "Week 3-6: Core skills training",
      "Week 7-8: Advanced topics and specialization",
      "Ongoing: Champions support and refresher sessions",
      "**Results:** 60% productivity improvement, increased confidence, better security, reduced errors",
      "Want to build a digitally confident team?"
    ],
    options: [
      { text: "Yes, let's create a program 📞", next: 'consultation_direct' },
      { text: "What's the investment? 💰", next: 'pricing_training' },
      { text: "Tell me about funding 💷", next: 'funding_info' },
      { text: "Let's get started 🚀", next: 'implementation_path' }
    ],
  },

  gdpr_details: {
    id: 'gdpr_details',
    text: [
      "**GDPR Compliance - The Details** 🔒",
      "Stay compliant without the headache.",
      "**Our Approach:**",
      "🔍 Comprehensive data audit",
      "📋 Policy and procedure development",
      "✅ Consent management system",
      "🎓 Staff training and awareness",
      "📊 Ongoing monitoring and updates",
      "🚨 Incident response planning",
      "**What We Cover:**",
      "✅ Data mapping and inventory",
      "✅ Lawful basis for processing",
      "✅ Subject access requests",
      "✅ Data protection impact assessments",
      "✅ Vendor management",
      "✅ Breach notification procedures",
      "**Why It Matters:**",
      "❌ Fines up to £17.5M or 4% of turnover",
      "❌ Reputation damage",
      "❌ Loss of customer trust",
      "✅ Peace of mind",
      "✅ Competitive advantage",
      "✅ Insurance discounts",
      "Ready to get compliant?"
    ],
    options: [
      { text: "Yes, let's do an audit 📋", next: 'consultation_direct' },
      { text: "What's the cost? 💰", next: 'pricing_gdpr' },
      { text: "Tell me about funding 💷", next: 'funding_info' },
      { text: "I'm ready to start 🚀", next: 'implementation_path' }
    ],
  },

  funding_details: {
    id: 'funding_details',
    text: [
      "**Accessing Funding - The Process** 💷",
      "We help you maximize available funding and grants.",
      "**Our Support:**",
      "1️⃣ **Eligibility Assessment:** We identify what you qualify for",
      "2️⃣ **Application Support:** We help prepare applications",
      "3️⃣ **Documentation:** We provide necessary technical documentation",
      "4️⃣ **Compliance:** We ensure projects meet funding requirements",
      "5️⃣ **Reporting:** We help with progress reports and claims",
      "**Common Funding Sources:**",
      "🏴󠁧󠁢󠁷󠁬󠁳󠁿 Welsh Government - 30-50% of project costs",
      "🇬🇧 Help to Grow: Digital - £5,000 towards technology",
      "💰 R&D Tax Credits - Up to 33% back on qualifying costs",
      "🎓 Training grants - Often cover 50-70% of training costs",
      "**Success Rate:** 85% of our clients secure some form of funding",
      "Want to explore what you're eligible for?"
    ],
    options: [
      { text: "Yes, help me access funding 💰", next: 'consultation_direct' },
      { text: "Show me the process 📋", next: 'implementation_path' },
      { text: "I'm ready to apply 🚀", next: 'consultation_direct' },
      { text: "Back to pricing 💷", next: 'pricing_overview' }
    ],
  },

  consultation_details: {
    id: 'consultation_details',
    text: [
      "**Free 30-Minute Consultation - What to Expect** 📞",
      "**Before the Call:**",
      "✅ No preparation needed",
      "✅ No sales pressure",
      "✅ Completely free",
      "**During the Call:**",
      "1️⃣ We listen to your challenges and goals (10 mins)",
      "2️⃣ We ask clarifying questions (5 mins)",
      "3️⃣ We share relevant insights and recommendations (10 mins)",
      "4️⃣ We answer your questions (5 mins)",
      "**After the Call:**",
      "✅ You'll receive a summary email with key points",
      "✅ We'll send relevant resources and case studies",
      "✅ If appropriate, we'll provide a tailored proposal",
      "✅ No obligation to proceed",
      "**What You'll Get:**",
      "💡 Actionable advice (even if you don't work with us)",
      "🎯 Clear understanding of opportunities",
      "📊 Realistic expectations on costs and timelines",
      "🗺️ Roadmap for moving forward",
      "Ready to book?"
    ],
    options: [
      { text: "Yes, let's book it! 📅", next: 'consultation_booking' },
      { text: "I have more questions first ❓", next: 'faq_quick' },
      { text: "Show me some examples 📊", next: 'success_stories' }
    ],
  },

  faq_quick: {
    id: 'faq_quick',
    text: [
      "**Quick Answers to Common Questions** ❓",
      "**Q: Do I need technical knowledge?**",
      "A: Not at all! We handle the technical stuff. You just need to know your business.",
      "**Q: How long does implementation take?**",
      "A: Typically 2-4 weeks for most solutions. Some can be live in days.",
      "**Q: What if it doesn't work for my business?**",
      "A: We offer a satisfaction guarantee. If you're not happy, we'll make it right or refund you.",
      "**Q: Can I start small and expand later?**",
      "A: Absolutely! Most clients start with one solution and add more as they see results.",
      "**Q: Do you work with businesses outside Wales?**",
      "A: Yes! While we specialize in Welsh and border county businesses, we work with SMEs across the UK.",
      "**Q: What ongoing support do you provide?**",
      "A: Unlimited support via email, phone, and video. Plus regular check-ins and optimization.",
      "Still have questions?"
    ],
    options: [
      { text: "Yes, let's talk 📞", next: 'consultation_direct' },
      { text: "No, I'm ready to start! 🚀", next: 'implementation_path' },
      { text: "Show me case studies 📊", next: 'success_stories' },
      { text: "Tell me about pricing 💰", next: 'pricing_overview' }
    ],
  },

  follow_up: {
    id: 'follow_up',
    text: [
      "That's completely understandable! This is an important decision. 🤔",
      "**Before you go, let me leave you with:**",
      "📧 **Free Resources:** We'll email you case studies and guides relevant to your situation",
      "📊 **ROI Calculator:** Calculate your potential savings",
      "🎓 **Free Webinars:** Join our monthly sessions on AI for SMEs",
      "💡 **Blog:** Practical tips and insights for Welsh businesses",
      "**Remember:**",
      "✅ 92.6% of Welsh SMEs haven't adopted AI yet",
      "✅ Those who do gain significant competitive advantage",
      "✅ The longer you wait, the harder it gets to catch up",
      "✅ We're here when you're ready (no pressure!)",
      "Want us to follow up with you in a week or two?"
    ],
    options: [
      { text: "Yes, follow up with me 📧", next: 'follow_up_confirm' },
      { text: "Actually, let's talk now 📞", next: 'consultation_direct' },
      { text: "Send me the resources 📚", next: 'resources_request' },
      { text: "I'm ready to start! 🚀", next: 'implementation_path' }
    ],
  },

  follow_up_confirm: {
    id: 'follow_up_confirm',
    text: [
      "Perfect! We'll follow up with you in a week with: 📧",
      "✅ Relevant case studies",
      "✅ ROI calculator",
      "✅ Funding opportunities",
      "✅ No-obligation consultation offer",
      "In the meantime, feel free to:",
      "📚 Browse our blog for tips and insights",
      "🎓 Join our free webinars",
      "📞 Book a consultation anytime (link in your email)",
      "Thanks for your time! We're excited to help your business thrive. 🚀",
      "Have a great day!"
    ],
    isEnd: true
  },

  resources_request: {
    id: 'resources_request',
    text: [
      "Excellent! We'll send you: 📚",
      "✅ Case studies from Welsh and border county businesses",
      "✅ ROI calculator and cost-benefit analysis",
      "✅ Guide to available funding and grants",
      "✅ Checklist for choosing the right solutions",
      "✅ Invitation to our next free webinar",
      "Check your email in the next few minutes!",
      "When you're ready to discuss your specific needs, just click the 'Get Started' button at the top of the page.",
      "Thanks for your interest! We're here to help whenever you're ready. 🚀"
    ],
    isEnd: true
  }
};