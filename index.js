'use strict';

module.exports = {
	name: require('./package').name,
	contentFor(type, config) {
		if (type === 'head-footer') {
			if (config.googleFonts) {
				let families = config.googleFonts.join('|');
				return '<link integrity="" rel="stylesheet" href="https://fonts.googleapis.com/css?family=' + families + '">';
			}
		}
	}
};
