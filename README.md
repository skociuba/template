  # remove node-modules & build in mac
  `"clean": "rm -rf ./node-modules ./build"`
  # on windows
  ` "clean": "rd /s /q node_modules build"`

 # "dependencies": {
    "@emotion/css                                    is a library designed for writing css styles with JavaScript

    "@testing-library/jest-dom
    "@testing-library/react                          unit tests
    "@testing-library/user-event
   
    "react"
    "react-dom"                                      react needed  
    "react-router-dom"
    "react-scripts"

    "redux"
    "react-redux"                                   redux needed  
    "redux-actions"
    "redux-devtools-extension"
    "redux-saga"                                    redux saga needed

    "reselect"                                      to createSelectors in selectors 
    "lodash"                                        to support iteration between environments for arrays, strings, and objects
  },
# "devDependencies": {
    "@babel/preset-env"                              ES6 compiler
    "@babel/preset-react"

  
    "@welldone-software/why-did-you-render"
    "concurrently"                                  run couple task in the same time
    "env-cmd"                                       using to run .env files

    "eslint"
    "eslint-config-prettier"
    "eslint-plugin-flowtype"
    "eslint-plugin-import"
    "eslint-plugin-prettier"                        for linting
    "eslint-plugin-react"
    "prettier"
    "stylelint"
    "@nake/stylelint-config"
    "@stylelint/postcss-css-in-js"
    "@emotion/eslint-plugin"

    "nodemon"                                       to run mockserver
    "npm-run-all"                                   run multiple npm-scripts in parallel or sequential

     "@cucumber/cucumber": "^7.3.1",
  - "cross-env": "^7.0.3",                         for e2e
  - "gherkin-testcafe": "^5.1.0",
  - "testcafe": "^1.16.1"
  

   "cross-env": "^7.0.3",                           run tests
   "string.prototype.replaceall": "^1.0.6",         for unit tests tests

  }

  # for .prettierrc.json you should add in newest version
  "bracketSameLine":true

  "check:code-quality": "run-s -c lint:js lint:style prettier",


  # ########################### e2e test ###########################################

  I packages:

  - "@cucumber/cucumber": "^7.3.1", - remember this version!
  - "cross-env": "^7.0.3",
  - "gherkin-testcafe": "^5.1.0",
  - "testcafe": "^1.16.1"


 II setting files:
 
  testcaferc.json:
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

tests
   e2e
    scenarios
       example.feature
    steps 
       example.js
    screenshot
    utils
    reports 
    config.js

  III. run:


      "test:e2e": "cross-env ENV_TYPE=local gherkin-testcafe"

# ##################### unit test ############################################

I . packages:

"cross-env": "^7.0.3",
"string.prototype.replaceall": "^1.0.6",
"@testing-library/jest-dom": "^5.14.1",
"@testing-library/react": "^11.2.7",
npm i full-icu 

II. settings files:

jest.config.json -> setupTests.js -> renderWithRouter.js & enhancedRender.js

III. run:

"test": "cross-env NODE_ICU_DATA=node_modules/full-icu react-scripts test",
"test:update-snapshots": "cross-env NODE_ICU_DATA=node_modules/full-icu react-scripts test -u",
