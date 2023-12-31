module.exports = {
  title: "Element Plus Extend",// 网站标题
  description: '网站描述', //网站描述
  base: '/element-plus-extend/', //  部署时的路径 默认 /  可以使用二级地址 /base/
  // lang: 'en-US', //语言
  repo: 'vuejs/vitepress',
  head: [[
    'link',
      {
        rel: 'icon',
        href: 'https://element-plus.org/images/element-plus-logo-small.svg',//图片放在public文件夹下
      },
  ],],
  // 主题配置
  themeConfig: {
    logo: "https://element-plus.gitee.io/images/element-plus-logo-small.svg",
    nav: [
      { text: '菜单1', link: '/guide' },
      {
        text: '菜单2',
        items: [
          {
            text: 'Section A Title',
            items: [
              { text: 'Section A Item A', link: '...' },
              { text: 'Section B Item B', link: '...' }
            ]
          }
        ]
      },
    ],
    sidebar: [
      {
        text: 'Guide 使用指南',
        items: [
          { text: '快速开始', link: '/quickstart.md' },
          { text: '语言切换', link: '/language.md' },
          { text: '全局配置', link: '/globalconfig.md' },
        ]
      },
      {
        text: 'Form 表单组件',
        items: [
          { text: 'Inpu 输入框', link: '/component/input.md' },
          { text: 'DatePicker 日期选择器', link: '/component/datePicker.md' },
        ]
      },
      {
        text: 'Section Title A',
        items: [
          { text: 'Item A', link: '/item-a' },
          { text: 'Item B', link: '/item-b' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/loverli123/element-plus-extend' },
    ],
    footer: {
      message: 'MIT Licensed',
      copyright: 'Copyright © 2023 <a href="https://github.com/loverli123" target="_blank">潇洒系在</a>'
    }
  },
  lastUpdated: true,
  markdown:{
    lineNumbers: true,
  },
}