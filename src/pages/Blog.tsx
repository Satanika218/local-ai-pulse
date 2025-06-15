
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { blogs } from "@/content/blogData";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Blog = () => {
  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />
      
      <section className="pt-20 pb-16 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              11th Temple <span className="text-brand-lime">Blog</span>
            </h1>
            <p className="text-xl text-brand-silver max-w-3xl mx-auto">
              Insights and analysis on technology challenges and opportunities for UK SMEs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Card key={blog.id} className="bg-brand-navy border-brand-silver/20 hover:border-brand-lime/50 transition-all duration-300 flex flex-col">
                <CardHeader>
                  <CardTitle className="text-white text-xl leading-tight">{blog.title}</CardTitle>
                  <CardDescription className="text-brand-silver/80 pt-2">{blog.date}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-brand-silver">{blog.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Link to={`/blog/${blog.slug}`} className="w-full">
                    <Button variant="outline" className="w-full border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-navy">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
