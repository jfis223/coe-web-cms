import Logo from "extensions/icons/logo.png"
export default {
  config: {
    locales: [
      'es',
    ],

    translations: {
      en: {
        'app.components.LeftMenu.navbrand.title': 'Centro Oftalmológico del Este'
      },
      es: {
        'app.components.LeftMenu.navbrand.title': 'Centro Oftalmológico del Este'
      },
    },
    head: {
      favicon: Logo,
    },
    auth: {
      logo: Logo,
    },
    menu: {
      logo: Logo,
    },
  },
  bootstrap() {},
};
