// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Shadertoy中文教程',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://shadertoy.peakcoder.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'peakcoder', // Usually your GitHub org/user name.
  projectName: 'shadertoy-tutorial-cn', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          routeBasePath: '/', // 文档作为根路径
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Shadertoy 教程',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/iMemento/shadertoy-tutorial',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'Tutorial',
                to: 'https://shadertoy.peakcoder.com/',
              },
              {
                label: 'Email: zaijing@alu.hit.edu.cn',
                to: 'mailto:zaijing@alu.hit.edu.cn',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/1227721/peakcoder',
              },
              {
                label: '浪浪山外の的硬地骇客',
                href: 'https://langlangshanwai.com',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Peakcoder',
                href:'https://peakcoder.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/iMemento/shadertoy-tutorial',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Shadertoy 中文教程, PeakCocer Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      giscus: {
        repo: 'iMemento/shadertoy-tutorial',
        repoId: 'R_kgDON6rfNQ',
        category: 'Announcements',
        categoryId: 'DIC_kwDON6rfNc4CnNqo',
        mapping: 'title',
        strict: '0',
        reactionsEnabled: '1',
        emitMetadata: '0',
        inputPosition: 'bottom',
        theme: "dark_dimmed",       // 强制默认主题
        darkTheme: "dark_dimmed",
        lightTheme: "github_light",
        lang: 'en',
      },
    }),

    // scripts: [
    //   {
    //     src: 'https://giscus.app/client.js',
    //     async: true,
    //     crossorigin: 'anonymous',
    //     'data-repo': 'iMemento/shadertoy-tutorial',
    //     'data-repo-id': 'R_kgDON6rfNQ',
    //     'data-category': 'General',
    //     'data-category-id': 'DIC_kwDON6rfNc4CnNqp',
    //     'data-mapping': 'title',
    //     'data-strict': '0',
    //     'data-reactions-enabled': '1',
    //     'data-emit-metadata': '0',
    //     'data-input-position': 'bottom',
    //     'data-theme': 'preferred_color_scheme',
    //     'data-lang': 'en',
    //   },
    // ],
};

export default config;
