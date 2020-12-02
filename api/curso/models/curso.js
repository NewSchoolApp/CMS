'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

const slugify = require('slugify');

module.exports = {
	lifecycles: {
		async beforeCreate(data) {
			data.slug = slugify(data.titulo, {lower: true});
		},
		async beforeUpdate(params, data) {
			if (data.titulo) data.slug = slugify(data.titulo, {lower: true});
		},
	},
}
