// Re-export full blog dataset and helpers from blogData for unified access
export type { BlogPost } from './blogData';
export {
  allBlogPosts as blogPosts,
  allBlogPosts,
  hasBlogImage,
  getBlogBySlug,
  getBlogsByCategory,
  getAllCategories,
  getRelatedPosts,
  searchBlogs,
  calculateReadTime,
} from './blogData';
