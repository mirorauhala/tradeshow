'use strict';

/**
 * exhibitor service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::exhibitor.exhibitor');
