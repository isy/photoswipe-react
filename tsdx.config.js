const copy = require('rollup-plugin-copy');

module.exports = {
    rollup(config, options) {
        config.plugins.push(
            copy({
                targets: [
                    { src: 'lib/*', dest: 'dist/' }
                ]
            })
        );
        return config;
    },
  };