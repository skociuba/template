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


  # e2e test

  1 packages:

  - "@cucumber/cucumber": "^7.3.1", - remember this version!
  - "cross-env": "^7.0.3",
  - "gherkin-testcafe": "^5.1.0",
  - "testcafe": "^1.16.1"


  2 setting testcaferc.json:
 {
  "browsers": ["chrome"],
  "screenshots": {
    "path": "./tests/e2e/screenshots",
    "fullPage": false,
    "pathPattern": "${USERAGENT}/${TEST_INDEX}/${FILE_INDEX}.png"
  },
  "src": ["./tests/e2e/scenarios/test.feature", "./tests/e2e/steps/test.js"],
  "selectorTimeout": 20000,
  "assertionTimeout": 20000,
  "pageLoadTimeout": 20000,
  "pageRequestTimeout": 40000,
  "ajaxRequestTimeout": 40000,
  "browserInitTimeout": 3600000,
  "color": true,
  "hostname": "127.0.0.1",
  "quarantineMode": true,
  "debugMode": false,
  "debugOnFail": false,
  "stopOnFirstFail": false,
  "skipJsErrors": true,
  "skipUncaughtErrors": true,
  "speed": 0.1,
  "port1": 8000,
  "port2": 8001,
  "disablePageCaching": true,
  "developmentMode": true,
  "disableScreenshots": false,
  "retryTestPages": true,
  "proxyBypass": ["127.0.0.1"]
}

  and run in package.json:
      "test:e2e": "cross-env ENV_TYPE=local gherkin-testcafe"
