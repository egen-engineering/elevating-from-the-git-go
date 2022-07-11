// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Elevating from the git-go',
  tagline: 'Our playbook of engineering principles and patterns',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/elevating-from-the-git-go/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'egen-engineering', // Usually your GitHub org/user name.
  projectName: 'elevating-from-the-git-go', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/egen-engineering/elevating-from-the-git-go/edit/main',
          remarkPlugins: [require('mdx-mermaid')],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Intro',
          // },
          // {to: '/for-clients', label: 'For clients', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Our work',
            items: [
              {
                label: 'Website',
                to: 'https://egen.solutions',
              },
              {
                label: 'Insights',
                to: 'https://egen.solutions/insights',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Linkedin',
                href: 'https://egen.social/linkedin',
              },
              {
                label: 'Twitter',
                href: 'https://egen.social/twitter',
              },
              {
                label: 'Youtube',
                href: 'https://egen.social/youtube',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Egen Solutions. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
