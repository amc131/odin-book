const supertest = require('supertest');
const app = require('../src/app');

exports.server = supertest.agent(app);
exports.BASE_URL = '/index';
