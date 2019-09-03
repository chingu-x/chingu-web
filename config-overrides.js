const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "#000",
      "@border-radius-base": 0,
      "@border-color-base": "#000",
      "@font-size-base": "16px"
    }
  })
);

// CHINGU: #15cf89
// @link-color: #1890ff; // link color
// @success-color: #52c41a; // success state color
// @warning-color: #faad14; // warning state color
// @error-color: #f5222d; // error state color