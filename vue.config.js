module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/scss/init/variables.scss";
        `,
      },
    },
  },
};
