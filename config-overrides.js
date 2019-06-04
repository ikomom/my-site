/**
 * Created by ikonon on 2019/5/27
 */
const {override, fixBabelImports, addDecoratorsLegacy, removeModuleScopePlugin} = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  addDecoratorsLegacy(),
  removeModuleScopePlugin(),
);
