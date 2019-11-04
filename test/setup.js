process.env.NODE_ENV = 'test';
process.env.API_TOKEN = 'test-auth-token';

const { expect } = require('chai');
const supertest = require('supertest');

//sets 2 global variables
global.expect = expect;
global.supertest = supertest;