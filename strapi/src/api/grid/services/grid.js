'use strict';

/**
 * grid service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::grid.grid');
