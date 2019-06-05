/**
 * Created by ikonon on 2019/5/27
 */
const {override, fixBabelImports, addDecoratorsLegacy, removeModuleScopePlugin, addWebpackAlias} = require('customize-cra');
const path = require('path');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  addWebpackAlias({
    ["web-url"]: path.resolve(__dirname, "src/api/web"),
  }),
  addDecoratorsLegacy(),
  removeModuleScopePlugin(),
);
