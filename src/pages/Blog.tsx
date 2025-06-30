
import { Link } from "react-router-dom";
import { CalendarDays, User, ArrowRight } from "lucide-react";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import ChatbotLauncher from "@/components/ChatbotLauncher";

const posts = [
  {
    title: "The Future of AI in Local Business",
    author: "Alex Thompson",
    date: "2024-01-08",
    contentSnippet: "Explore how AI is revolutionising local businesses, from marketing to customer service.",
    slug: "future-of-ai-in-local-business",
  },
  {
    title: "Top 5 AI Tools for Small Businesses",
    author: "Sarah Johnson", 
    date: "2024-01-15",
    contentSnippet: "Discover the best AI-powered tools to streamline operations and boost productivity for small businesses.",
    slug: "top-5-ai-tools-for-small-businesses",
  },
  {
    title: "How AI Can Improve Customer Engagement",
    author: "Emily Davis",
    date: "2024-01-22",
    contentSnippet: "Learn how artificial intelligence can enhance customer engagement and satisfaction through personalised experiences.",
    slug: "how-ai-can-improve-customer-engagement",
  },
  {
    title: "AI-Driven Marketing Strategies for Local Businesses",
    author: "David Wilson",
    date: "2024-01-29",
    contentSnippet: "Uncover effective AI-driven marketing strategies to attract and retain customers in the local market.",
    slug: "ai-driven-marketing-strategies",
  },
  {
    title: "The Role of AI in Business Automation",
    author: "Olivia Brown",
    date: "2024-02-05",
    contentSnippet: "Understand how AI is transforming business automation, reducing manual tasks and increasing efficiency.",
    slug: "role-of-ai-in-business-automation",
  },
  {
    title: "Digital Transformation for Rural SMEs",
    author: "Michael Clarke",
    date: "2024-02-12",
    contentSnippet: "A comprehensive guide to digital transformation specifically tailored for rural small and medium enterprises.",
    slug: "digital-transformation-rural-smes",
  },
  {
    title: "Building Customer Trust in the Digital Age",
    author: "Rachel Green",
    date: "2024-02-19",
    contentSnippet: "Strategies for maintaining customer trust while adopting new digital technologies and AI solutions.",
    slug: "building-customer-trust-digital-age",
  },
  {
    title: "Cost-Effective Tech Solutions for Welsh Businesses",
    author: "Thomas Evans",
    date: "2024-02-26",
    contentSnippet: "Practical advice on implementing affordable technology solutions that deliver real value for Welsh enterprises.",
    slug: "cost-effective-tech-solutions-welsh-businesses",
  },
  {
    title: "Seasonal Business Planning with AI Analytics",
    author: "Jennifer Williams",
    date: "2024-03-05",
    contentSnippet: "How AI-powered analytics can help seasonal businesses optimise their operations and cash flow management.",
    slug: "seasonal-business-planning-ai-analytics",
  },
  {
    title: "Community-Focused Marketing in the Digital Era",
    author: "Andrew Roberts",
    date: "2024-03-12",
    contentSnippet: "Balancing digital marketing strategies with traditional community engagement for maximum local impact.",
    slug: "community-focused-marketing-digital-era",
  },
  {
    title: "Data Protection and GDPR for Small Businesses",
    author: "Sophie Turner",
    date: "2024-03-19",
    contentSnippet: "Essential guide to GDPR compliance and data protection best practices for UK small businesses.",
    slug: "data-protection-gdpr-small-businesses",
  },
  {
    title: "The Future of Rural Business Technology",
    author: "James Morgan",
    date: "2024-03-26",
    contentSnippet: "Predictions and trends for how technology will continue to transform rural business landscapes in the coming years.",
    slug: "future-rural-business-technology",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-brand-lime">Blog</span>
            </h1>
            <p className="text-xl text-brand-silver max-w-3xl mx-auto mb-8">
              Insights, trends, and tips on leveraging AI for local business success.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-12 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div key={post.slug} className="bg-brand-navy rounded-2xl p-6 border border-brand-silver/20 shadow transition-transform hover:-translate-y-2">
                <Link to={`/blog/${post.slug}`} className="block no-underline">
                  <h2 className="text-2xl font-bold text-white mb-2">{post.title}</h2>
                  <div className="flex items-center text-brand-silver text-sm mb-4">
                    <CalendarDays className="h-4 w-4 mr-2" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <User className="h-4 w-4 mr-2" />
                    <span>{post.author}</span>
                  </div>
                  <p className="text-brand-silver mb-4">{post.contentSnippet}</p>
                  <div className="text-brand-lime hover:text-brand-lime-dark flex items-center">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ChatbotLauncher />
    </div>
  );
};

export default Blog;
