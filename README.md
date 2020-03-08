# Web Test Automation

UI Test automation for WooliesX

The framework follows the page-object model structure.

## Getting started
1. Have a version of node. This test framework is currently tested to support `v12.16.1`
2. Clone this repository.
3. Install all dependencies. Run `npm install` on the terminal. This will generate a `node_modules` file on the project directory.
4. Create a `.env` file on the project root directory. Have the necessary credentials as set in the `.env.sample`. The test runner will check for these required ENV values
5. Make sure to have the supported browsers. This is tested to work with Firefox and Chrome. Browsers can be set in `browserName` in the config file.

## Running the test

Run `npm test` to start the test.

## Assumptions
1. The user making a purchase already has a an account and is logging in to link that account
2. The account the user has has corresponding address details and is considered controlled data in this test. These information are hard-coded as constants
3. The test assumes that the site will always display minimum of 2 products on home screen. It is not handling cases where the site failed to load the products, or when there is not enough products to display
4. The framework has been tested on a MacOS Catalina

## Features
1. The framework does not need to run a separate selenium server. It is capable of spawning a child service to run selenium standalone.
2. It takes a screenshot on fail, stored on the `errorShots` folder.