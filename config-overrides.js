/* eslint-disable */
const rewireStyledComponents = require('react-app-rewire-styled-components');

module.exports = function override(config, env) {
  if(process.env.NODE_ENV !== 'production') {
    config = rewireStyledComponents(config, env);
  }

  return config;
};
