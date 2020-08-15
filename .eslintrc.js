module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['airbnb', 'airbnb/hooks'],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', '.'],
      },
    },
  },
};
