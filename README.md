# Readme

## About
qNinja-testBackend is a testing API backend for qNinja. It allows us to point qNinja to an api that does not interact with live data.

## Installation

1. `git clone gitrepo`
2. `npm install`
3. Configure qNinja to use this backend, change qNinja/config/env/development.js point to this application. For example, if running on localhost: `apiServer: 'http://localhost:3003/',`
4. Start node `node server.js`