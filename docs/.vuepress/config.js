module.exports = {
  base: "/hhhh/",
  title: "Orange-UI",
  description: "一个简约、易用的 UI 框架",
  themeConfig: {
    logo: "/assets/img/logo.png",
    nav: [
      { text: "主页", link: "/" },
      { text: "文档", link: "/get-started/" },
      { text: "Github", link: "https://github.com/chensheng01/hhhh" },
    ],
    displayAllHeaders: true, // 默认值：false
    sidebar: [
      {
        title: "入门",
        children: ["/introduce/", "/get-started/"],
      },
      {
        title: "组件",
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          "/components/button",
          "/components/input",
          "/components/grid",
          "/components/layout",
          "/components/toast",
        ],
      },
    ],
  },
};