module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/scss/_global-vars.scss";
        `
      }
    }
  }
};
