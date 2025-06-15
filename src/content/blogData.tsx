import { format, subDays, addDays } from 'date-fns';
import { BlogPostType } from './types';

import { post as post1 } from './blogs/cyber-secure-welsh-smes';
import { post as post2 } from './blogs/mind-the-skills-gap';
import { post as post3 } from './blogs/data-analytics-advantage';
import { post as post4 } from './blogs/breaking-free-from-legacy-systems';
import { post as post5 } from './blogs/customer-relationships-crm-advantage';
import { post as post6 } from './blogs/mobile-first-business';
import { post as post7 } from './blogs/business-continuity-in-uncertain-times';
import { post as post8 } from './blogs/automation-advantage';
import { post as post9 } from './blogs/ai-for-smes';
import { post as post10 } from './blogs/hybrid-work-success';
import { post as post11 } from './blogs/navigating-the-compliance-maze';
import { post as post12 } from './blogs/supply-chain-digitization';
import { post as post13 } from './blogs/20-essential-digital-skills';

const allPosts: Omit<BlogPostType, 'id' | 'date'>[] = [
  post13, // New post should appear first (most recent)
  post1,
  post2,
  post3,
  post4,
  post5,
  post6,
  post7,
  post8,
  post9,
  post10,
  post11,
  post12,
];

const today = new Date('2025-06-15');

export const blogs: BlogPostType[] = allPosts.map((post, i) => {
  let date;
  if (i === 0) {
    // First post (new one) should be 30 days in the future
    date = format(addDays(today, 30), 'MMMM d, yyyy');
  } else {
    // Other posts use the original logic
    date = format(subDays(today, (i - 1) * 30), 'MMMM d, yyyy');
  }
  
  return {
    ...post,
    id: i + 1,
    date,
  };
});
