import approvedPortfolioCopy from "./approved/portfolio-v12.json";
import approvedBlogCopy from "./approved/blog-v12.1.json";

// Keep the supplied copy files byte-for-byte; render only supported UI states.
export const portfolioCopy = approvedPortfolioCopy;
export const blogCopy = approvedBlogCopy.blog;
export const blogNavigationCopy = approvedBlogCopy.global;
export type ProjectCopy = (typeof portfolioCopy.projects)[number];
