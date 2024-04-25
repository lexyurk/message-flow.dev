import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Documentation',
      href: 'https://docs.message-flow.dev',
    },
    // {
    //   text: 'Blog',
    //   href: getBlogPermalink(),
    // },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/voro6yov/message-flow', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: 'https://docs.message-flow.dev' },
      ],
    },
  ],
  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/voro6yov/message-flow' },
  ],
  footNote: `
    Made with love from the world. · All rights reserved.
  `,
};
