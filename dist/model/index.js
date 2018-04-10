'use strict';

const path = require('path');

module.exports = {
  description: 'Add new model',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      validate: (value) => {
        if ((/.+/).test(value)) { return true; }
        return 'folder name is required';
      }
    },
  ],
  actions: (data) => {
    const actions = ['actions', 'type', 'reducer', 'saga'].map((v) => {
      const templateFile = path.resolve(__dirname, `${v}.ts.hbs`);
      return {
        type: 'add',
        path: path.resolve(process.cwd(), `frontend/src/model/{{camelCase name}}/${v}.ts`),
        templateFile,
        abortOnFail: true,
      };
    });
    return actions;
  },
};
