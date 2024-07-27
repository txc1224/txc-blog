import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  base: '/txc_blog/',
  root: path.join(__dirname, 'docs'),
  title: 'txc的博客',
  description: 'txc的个人沉淀',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/web-infra-dev/rspress' },
    ],
  },
});
