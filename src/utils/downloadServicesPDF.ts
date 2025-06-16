
import { generateServicesPDF } from './servicesPDFGenerator';

// Service data for PDF generation
const services = [
  {
    title: "Website & Digital Presence",
    description: "Professional websites and digital solutions that convert visitors into customers.",
    bullets: [
      "AI-powered website building and optimization",
      "Mobile-responsive design with fast loading",
      "SEO optimization for local search visibility",
      "User experience improvements to reduce bounce rates"
    ]
  },
  {
    title: "Digital Marketing",
    description: "AI-driven marketing strategies that attract and retain customers.",
    bullets: [
      "Automated social media content creation and scheduling",
      "Personalized email marketing campaigns",
      "Local SEO to dominate search results",
      "Content optimization for maximum engagement"
    ]
  },
  {
    title: "Creative & Design",
    description: "Professional visual identity and marketing materials that captivate audiences.",
    bullets: [
      "AI-powered logo design and brand development",
      "Automated graphic creation for social media",
      "Consistent brand application across all materials",
      "Professional image enhancement and editing"
    ]
  },
  {
    title: "Financial Operations",
    description: "Streamline financial processes with intelligent automation.",
    bullets: [
      "Automated invoice and receipt processing",
      "AI-powered cash flow forecasting",
      "Budget variance tracking and alerts",
      "Financial document classification and storage"
    ]
  },
  {
    title: "Customer Relationships",
    description: "Build stronger connections with AI-powered customer insights.",
    bullets: [
      "Personalized customer communication at scale",
      "Intelligent customer segmentation",
      "Competitive intelligence and market analysis",
      "Trend identification for emerging opportunities"
    ]
  },
  {
    title: "Sales & Lead Generation",
    description: "Automate your sales pipeline and generate more qualified leads.",
    bullets: [
      "AI-powered lead generation and qualification",
      "Automated follow-up sequences",
      "Professional proposal generation",
      "Sales pipeline optimization and tracking"
    ]
  },
  {
    title: "Human Resources",
    description: "Streamline HR processes from recruitment to employee engagement.",
    bullets: [
      "Automated resume screening and candidate matching",
      "AI-powered interview scheduling coordination",
      "Personalized employee onboarding experiences",
      "Employee sentiment analysis and engagement tracking"
    ]
  },
  {
    title: "Customer Support",
    description: "Provide exceptional 24/7 support with AI-powered solutions.",
    bullets: [
      "Intelligent chatbots for instant customer service",
      "Automated response suggestions for support teams",
      "Customer satisfaction sentiment analysis",
      "Predictive customer churn prevention"
    ]
  },
  {
    title: "Project Management",
    description: "Optimize workflows and resource allocation with smart automation.",
    bullets: [
      "AI-powered task prioritization and scheduling",
      "Predictive project timeline generation",
      "Team workload optimization and balancing",
      "Automated time tracking and categorization"
    ]
  },
  {
    title: "Administrative Operations",
    description: "Eliminate manual tasks with intelligent document and communication management.",
    bullets: [
      "Automated document classification and organization",
      "Smart email management and prioritization",
      "AI-powered meeting scheduling coordination",
      "Intelligent data extraction from any document type"
    ]
  }
];

export const downloadServicesPDFForTesting = async () => {
  try {
    await generateServicesPDF(services);
    console.log('PDF generated successfully for testing');
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
};
