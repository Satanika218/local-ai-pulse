
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { blogs } from '@/content/blogData';
import NotFound from './NotFound';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />
      <main className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="text-brand-silver prose prose-invert lg:prose-xl prose-h1:text-white prose-h2:text-white prose-h3:text-white prose-strong:text-white">
            <header className="mb-8">
              <Link to="/blog" className="mb-6 inline-block">
                <Button variant="ghost">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Button>
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">{blog.title}</h1>
              <p className="text-brand-silver/80 text-lg">{blog.date}</p>
            </header>
            <div className="prose-p:text-brand-silver prose-li:text-brand-silver prose-blockquote:text-brand-silver">
              {blog.content}
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;
