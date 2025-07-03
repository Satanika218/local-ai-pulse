
import React from 'react';
import { BlogPost } from './types';

// Import all blog content
import { aiForSMEs } from './blogs/ai-for-smes';
import { automationAdvantage } from './blogs/automation-advantage';
import { dataAnalyticsAdvantage } from './blogs/data-analytics-advantage';
import { cyberSecureWelshSMEs } from './blogs/cyber-secure-welsh-smes';
import { customerRelationshipsCRMAdvantage } from './blogs/customer-relationships-crm-advantage';
import { mindTheSkillsGap } from './blogs/mind-the-skills-gap';
import { mobileFirstBusiness } from './blogs/mobile-first-business';
import { hybridWorkSuccess } from './blogs/hybrid-work-success';
import { supplyChainDigitization } from './blogs/supply-chain-digitization';
import { businessContinuityInUncertainTimes } from './blogs/business-continuity-in-uncertain-times';
import { navigatingTheComplianceMaze } from './blogs/navigating-the-compliance-maze';
import { breakingFreeFromLegacySystems } from './blogs/breaking-free-from-legacy-systems';
import { twentyEssentialDigitalSkills } from './blogs/20-essential-digital-skills';

export const blogPosts: BlogPost[] = [
  {
    id: 'ai-automation-smes-wales-2024',
    title: 'AI Automation for Welsh SMEs: A Practical Guide for 2024',
    excerpt: 'Discover how Welsh small and medium enterprises can leverage AI automation to compete with larger businesses while maintaining their local advantage.',
    content: aiForSMEs.content,
    author: 'Dan Armour',
    date: '2024-03-15',
    readTime: '8 min read',
    tags: ['AI', 'Automation', 'SMEs', 'Wales', 'Technology'],
    featured: true,
    image: '/lovable-uploads/963e5718-1f17-4852-ace3-68119a97691d.png'
  },
  {
    id: 'automation-advantage-rural-businesses',
    title: 'The Automation Advantage: How Rural Businesses Can Compete',
    excerpt: 'Learn how automation levels the playing field for rural businesses, enabling them to compete effectively with urban enterprises.',
    content: automationAdvantage.content,
    author: 'Dan Armour',
    date: '2024-03-10',
    readTime: '6 min read',
    tags: ['Automation', 'Rural Business', 'Productivity', 'Competition'],
    featured: false,
    image: '/lovable-uploads/5c3ff16d-ca8e-477f-8c58-0b7a4193cbbc.png'
  },
  {
    id: 'data-analytics-advantage-smes',
    title: 'The Data Analytics Advantage for SMEs',
    excerpt: 'Transform your small business decision-making with practical data analytics strategies that actually work for SMEs.',
    content: dataAnalyticsAdvantage.content,
    author: 'Dan Armour',
    date: '2024-03-05',
    readTime: '7 min read',
    tags: ['Data Analytics', 'SMEs', 'Business Intelligence', 'Decision Making'],
    featured: true,
    image: '/lovable-uploads/dd8b5070-aff9-46a2-848d-770741ee222c.png'
  },
  {
    id: 'cyber-secure-welsh-smes',
    title: 'Cyber Security for Welsh SMEs: Essential Protection in 2024',
    excerpt: 'Protect your Welsh SME from cyber threats with practical, cost-effective security measures tailored for small businesses.',
    content: cyberSecureWelshSMEs.content,
    author: 'Dan Armour',
    date: '2024-02-28',
    readTime: '9 min read',
    tags: ['Cyber Security', 'SMEs', 'Wales', 'Data Protection', 'GDPR'],
    featured: false,
    image: '/lovable-uploads/75f77758-fb5a-45f9-a0e0-770aa7766795.png'
  },
  {
    id: 'customer-relationships-crm-advantage',
    title: 'Building Stronger Customer Relationships: The CRM Advantage',
    excerpt: 'Discover how Customer Relationship Management systems can transform your business relationships and boost customer loyalty.',
    content: customerRelationshipsCRMAdvantage.content,
    author: 'Dan Armour',
    date: '2024-02-20',
    readTime: '6 min read',
    tags: ['CRM', 'Customer Relations', 'Business Growth', 'Technology'],
    featured: false,
    image: '/lovable-uploads/a843b65b-2b60-430a-9e41-3f8031fd67f0.png'
  },
  {
    id: 'mind-the-skills-gap',
    title: 'Mind the Skills Gap: Digital Training for UK Businesses',
    excerpt: 'Address the critical digital skills shortage in UK businesses with practical training strategies and solutions.',
    content: mindTheSkillsGap.content,
    author: 'Dan Armour',
    date: '2024-02-15',
    readTime: '8 min read',
    tags: ['Digital Skills', 'Training', 'UK Business', 'Workforce Development'],
    featured: true,
    image: '/lovable-uploads/347422dc-12b8-4b65-8b63-98b195467f19.png'
  },
  {
    id: 'mobile-first-business',
    title: 'Mobile-First Business: Reaching Customers Where They Are',
    excerpt: 'Learn why mobile-first strategies are essential for modern businesses and how to implement them effectively.',
    content: mobileFirstBusiness.content,
    author: 'Dan Armour',
    date: '2024-02-10',
    readTime: '5 min read',
    tags: ['Mobile Strategy', 'Customer Engagement', 'Digital Marketing', 'UX'],
    featured: false,
    image: '/lovable-uploads/d9209409-b4f5-40dd-a65a-500fc9cc4c1d.png'
  },
  {
    id: 'hybrid-work-success',
    title: 'Hybrid Work Success: Tools and Strategies for Modern Teams',
    excerpt: 'Master the art of hybrid work with the right tools, strategies, and mindset for distributed team success.',
    content: hybridWorkSuccess.content,
    author: 'Dan Armour',
    date: '2024-02-05',
    readTime: '7 min read',
    tags: ['Hybrid Work', 'Remote Teams', 'Productivity', 'Collaboration'],
    featured: false,
    image: '/lovable-uploads/963e5718-1f17-4852-ace3-68119a97691d.png'
  },
  {
    id: 'supply-chain-digitization',
    title: 'Supply Chain Digitization: Efficiency in Every Link',
    excerpt: 'Transform your supply chain with digital tools that improve efficiency, reduce costs, and enhance visibility.',
    content: supplyChainDigitization.content,
    author: 'Dan Armour',
    date: '2024-01-30',
    readTime: '8 min read',
    tags: ['Supply Chain', 'Digitization', 'Efficiency', 'Business Operations'],
    featured: false,
    image: '/lovable-uploads/5c3ff16d-ca8e-477f-8c58-0b7a4193cbbc.png'
  },
  {
    id: 'business-continuity-uncertain-times',
    title: 'Business Continuity in Uncertain Times',
    excerpt: 'Build resilient business operations that can withstand disruptions and maintain continuity in challenging times.',
    content: businessContinuityInUncertainTimes.content,
    author: 'Dan Armour',
    date: '2024-01-25',
    readTime: '9 min read',
    tags: ['Business Continuity', 'Risk Management', 'Resilience', 'Planning'],
    featured: true,
    image: '/lovable-uploads/dd8b5070-aff9-46a2-848d-770741ee222c.png'
  },
  {
    id: 'navigating-compliance-maze',
    title: 'Navigating the Compliance Maze: GDPR and Beyond',
    excerpt: 'Understand and implement essential compliance requirements including GDPR, data protection, and industry regulations.',
    content: navigatingTheComplianceMaze.content,
    author: 'Dan Armour',
    date: '2024-01-20',
    readTime: '10 min read',
    tags: ['Compliance', 'GDPR', 'Data Protection', 'Legal Requirements'],
    featured: false,
    image: '/lovable-uploads/75f77758-fb5a-45f9-a0e0-770aa7766795.png'
  },
  {
    id: 'breaking-free-legacy-systems',
    title: 'Breaking Free from Legacy Systems',
    excerpt: 'Learn how to modernize outdated business systems without disrupting operations or breaking the budget.',
    content: breakingFreeFromLegacySystems.content,
    author: 'Dan Armour',
    date: '2024-01-15',
    readTime: '7 min read',
    tags: ['Legacy Systems', 'Digital Transformation', 'Modernization', 'Technology'],
    featured: false,
    image: '/lovable-uploads/a843b65b-2b60-430a-9e41-3f8031fd67f0.png'
  },
  {
    id: '20-essential-digital-skills',
    title: '20 Essential Digital Skills Every UK Business Owner Needs',
    excerpt: 'Master the fundamental digital skills that every UK business owner needs to succeed in today\'s competitive landscape.',
    content: twentyEssentialDigitalSkills.content,
    author: 'Dan Armour',
    date: '2024-01-10',
    readTime: '12 min read',
    tags: ['Digital Skills', 'Business Owners', 'UK Business', 'Essential Skills'],
    featured: true,
    image: '/lovable-uploads/347422dc-12b8-4b65-8b63-98b195467f19.png'
  }
];
