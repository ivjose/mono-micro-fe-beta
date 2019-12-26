const { override, babelInclude } = require('customize-cra')
const path = require('path')

module.exports = override(
  babelInclude([
    path.resolve('src'),
    path.resolve('../components') // don't reference it through node_modules/@my-project/components
                                  // because yarn workspaces already resolves it
  ])
)