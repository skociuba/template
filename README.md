  # remove node-modules & build in mac
  `"clean": "rm -rf ./node-modules ./build"`

 # "dependencies": {
    "@emotion/css
    "@material/react-button
    "@material/react-switch
    "@testing-library/jest-dom
    "@testing-library/react
    "@testing-library/user-event
    "lodash
    "node-sass
    "react"
    "react-dom"
    "react-redux"
    "react-router-dom"
    "react-scripts"
    "redux"
    "redux-actions"
    "redux-devtools-extension"
    "redux-saga"
    "reselect"
    "web-vitals"
  },
# "devDependencies": {
    "@babel/preset-env"
    "@babel/preset-react"
    "@emotion/eslint-plugin"
    "@nake/stylelint-config"
    "@stylelint/postcss-css-in-js"
    "@welldone-software/why-did-you-render"
    "concurrently"                                - run couple task in the same time
    "env-cmd"                                   - using to run .env files
    "eslint"
    "eslint-config-prettier"
    "eslint-plugin-flowtype"
    "eslint-plugin-import"
    "eslint-plugin-prettier"
    "eslint-plugin-react"
    "nodemon"
    "npm-run-all"
    "prettier"
    "stylelint"
  }

  # for .prettierrc.json you should add in newest version
  "bracketSameLine":true

  "check:code-quality": "run-s -c lint:js lint:style prettier",
