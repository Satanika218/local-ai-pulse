import { generateServicesPDF } from './servicesPDFGenerator';
import { generateSEOAuditPDF } from './seoAuditPDFGenerator';
import { generateAuditPDF } from './pdfGenerator';
import { SEOAuditData } from '@/pages/SEOAudit';
import { AuditData } from '@/pages/AnalyticsAudit';

// Test data for SEO Audit PDF
const testSEOData: SEOAuditData = {
  websiteUrl: "https://example-business.co.uk",
  businessName: "Sample Local Business Ltd",
  contactName: "John Smith",
  contactEmail: "john@example-business.co.uk",
  industry: "Professional Services",
  targetLocation: "Cardiff, Wales",
  primaryKeywords: ["Cardiff accounting", "local bookkeeping", "tax services Cardiff", "small business accounting"],
  currentRanking: "Page 2-3 on Google",
  competitors: ["big-accounting-firm.co.uk", "cardiff-tax-services.com", "local-accountants.wales"],
  seoGoals: ["Rank #1 for 'Cardiff accounting'", "Increase organic traffic by 200%", "Improve local search visibility"],
  currentIssues: ["Slow page loading speed", "Missing meta descriptions", "No local schema markup", "Low domain authority"],
  gdprConsent: true
};

// Test data for Analytics Audit PDF
const testAnalyticsData: AuditData = {
  websiteUrl: "https://example-business.co.uk",
  businessName: "Sample Local Business Ltd",
  contactName: "John Smith",
  contactEmail: "john@example-business.co.uk",
  industry: "Professional Services",
  targetLocation: "Cardiff, Wales",
  monthlyVisitors: "500-1000",
  primaryGoals: ["Increase conversion rate", "Track user behavior", "Monitor marketing ROI", "Improve website performance"],
  currentChallenges: ["No goal tracking setup", "Can't identify traffic sources", "Poor conversion tracking", "No user behavior insights"],
  gdprConsent: true
};

// Test data for Services PDF
const testServicesData = [
  {
    title: "Sales & Lead Generation Tools",
    description: "AI-powered automation to generate more qualified leads and streamline your sales process.",
    bullets: [
      "Automated lead capture and qualification",
      "Intelligent follow-up sequences",
      "CRM integration and pipeline management",
      "Sales performance analytics and insights"
    ]
  },
  {
    title: "GDPR Compliance Solutions",
    description: "Comprehensive data protection services to ensure your business meets GDPR requirements.",
    bullets: [
      "Data audit and mapping services",
      "Automated consent management",
      "Policy development and staff training",
      "Ongoing compliance monitoring"
    ]
  },
  {
    title: "Digital Skills Training",
    description: "Upskill your workforce with practical digital literacy and AI automation training.",
    bullets: [
      "Custom training programs for your team",
      "Hands-on workshops and tutorials",
      "Digital skills assessment and gap analysis",
      "Ongoing support and certification"
    ]
  }
];

export const generateTestSEOPDF = async () => {
  try {
    const score = 67; // Test score
    const logoUrl = "/lovable-uploads/87c7e72a-88ad-4a5e-bd58-1bff5a3dee6b.png";
    await generateSEOAuditPDF(testSEOData, score, logoUrl);
    console.log('Test SEO Audit PDF generated successfully');
  } catch (error) {
    console.error('Error generating test SEO PDF:', error);
    throw error;
  }
};

export const generateTestAnalyticsPDF = async () => {
  try {
    const score = 73; // Test score
    const logoUrl = "/lovable-uploads/87c7e72a-88ad-4a5e-bd58-1bff5a3dee6b.png";
    await generateAuditPDF(testAnalyticsData, score, logoUrl);
    console.log('Test Analytics Audit PDF generated successfully');
  } catch (error) {
    console.error('Error generating test Analytics PDF:', error);
    throw error;
  }
};

export const generateTestServicesPDF = async () => {
  try {
    await generateServicesPDF(testServicesData);
    console.log('Test Services PDF generated successfully');
  } catch (error) {
    console.error('Error generating test Services PDF:', error);
    throw error;
  }
};