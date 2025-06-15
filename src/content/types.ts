
export interface BlogPostType {
  id: number;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: JSX.Element;
}
