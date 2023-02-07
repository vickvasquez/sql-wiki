import type { MDXInstance } from "astro";
import type { Post } from "@models/post";

function sortByDate(post: MDXInstance<Post>[] = []): MDXInstance<Post>[] | [] {
  if (post.length === 0) {
    return []
  }

  return post.sort(
    (a, b) =>
      new Date(b.frontmatter.date).valueOf() -
      new Date(a.frontmatter.date).valueOf()
  );
}

export default sortByDate
