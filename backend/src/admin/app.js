const config = {
  locales: ["ko"],
  translations: {
    ko: {
      "app.components.LeftMenu.contentManager": "콘텐츠 관리",
      "plugin.content-manager.name": "콘텐츠 관리",
      "global.content-manager": "콘텐츠 관리",
    },
  },
  locale: "ko",
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
