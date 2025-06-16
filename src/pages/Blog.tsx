import { Link } from "react-router-dom";
import { CalendarDays, User, ArrowRight } from "lucide-react";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import ChatbotLauncher from "@/components/ChatbotLauncher";

const posts = [
  {
    title: "The Future of AI in Local Business",
    author: "Alex Thompson",
    date: "2024-01-20",
    contentSnippet: "Explore how AI is revolutionizing local businesses, from marketing to customer service.",
    slug: "future-of-ai-in-local-business",
  },
  {
    title: "Top 5 AI Tools for Small Businesses",
    author: "Sarah Johnson",
    date: "2024-02-15",
    contentSnippet: "Discover the best AI-powered tools to streamline operations and boost productivity for small businesses.",
    slug: "top-5-ai-tools-for-small-businesses",
  },
  {
    title: "How AI Can Improve Customer Engagement",
    author: "Emily Davis",
    date: "2024-03-10",
    contentSnippet: "Learn how artificial intelligence can enhance customer engagement and satisfaction through personalized experiences.",
    slug: "how-ai-can-improve-customer-engagement",
  },
  {
    title: "AI-Driven Marketing Strategies for Local Businesses",
    author: "David Wilson",
    date: "2024-04-05",
    contentSnippet: "Uncover effective AI-driven marketing strategies to attract and retain customers in the local market.",
    slug: "ai-driven-marketing-strategies",
  },
  {
    title: "The Role of AI in Business Automation",
    author: "Olivia Brown",
    date: "2024-05-01",
    contentSnippet: "Understand how AI is transforming business automation, reducing manual tasks and increasing efficiency.",
    slug: "role-of-ai-in-business-automation",
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
