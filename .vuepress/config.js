module.exports = {
  title: 'Vuepress Starter',
  description: 'This is a page description. Data for title/desc/navbar is in .vuepress/config.js',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Chapter 1', link: '/chapter-1/' },
      { text: 'Chapter 2', link: '/chapter-2/' },
      { text: 'Google Example', link: 'https://google.com', external: true },
    ],
    sidebar: [
      '/',
      'chapter-1/',
      'chapter-2/'
    ]
  },

  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ],
  serviceWorker: true
}
