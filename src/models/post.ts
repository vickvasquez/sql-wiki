export interface Frontmatter {
  title: string;
  description: string;
  date: string;
  image?: string;
  tags?: string[];
}

export interface Post extends Frontmatter {
  url?: string;
}
