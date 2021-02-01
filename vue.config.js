module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/scss/init/variables.scss";
          @import "@/scss/init/mixins.scss"; 
        `, //Mixins import not working, why ? 
      },
    },
  },
};
