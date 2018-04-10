# react-generator
Plop generator for React and Redux

## Usage
1. Install plop globally:

    `yarn global add plop` or `npm install -g react-generator-templates`
2. Install `react-generator-templates` in your project:
   
   `yarn add react-generator-templates` or `npm install react-generator-templates `
3. Create a `plopfile.js` in the root folder of your project, with the following content:
    ```javascript
    module.exports = require('react-generator-templates');
    ```

## Using templates

```sh
# to add a frontend model
yarn run add-model
# to add a frontend route
yarn run add-route
# to add a frontend component
yarn run add-component
```
