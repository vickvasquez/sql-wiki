export interface Heading {
  depth: number;
  text: string;
  slug: string;
}

export interface MapDocument extends Heading {
  childs: Heading[];
}
