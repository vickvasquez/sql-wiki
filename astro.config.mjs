import { defineConfig } from 'astro/config';
import codeTitle from 'remark-code-title';
import astroLayouts from 'astro-layouts'
import compress from 'astro-compress';

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  markdown: {
    extendDefaultPlugins: true,
    shikiConfig: {
      theme: 'dark-plus'
    },
  },
  integrations: [
    compress({
      css: true,
      html: true,
      js: true,
      img: true,
      svg: true,
      logger: 0,
    }),
    mdx({
      remarkPlugins: [
        [
          astroLayouts,
          {
            default: "@layouts/Layout.astro",
            'pages/**/*': "@layouts/BlogPost.astro",
          }
        ],
        codeTitle
      ]
    })
  ],
  base: '/'
});
