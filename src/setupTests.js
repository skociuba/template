import '@testing-library/jest-dom/extend-expect';
require('regenerator-runtime/runtime');
global.React = require('react');
global.render = require('@testing-library/react').render;
global.act = require('@testing-library/react').act;
global.renderWithRouter = require('utils/tests/renderWithRouter');
global.enhancedRender = require('utils/tests/enhancedRenderer');

process.env.TZ = 'UTC';

const crypto = require('crypto');

const replaceAllInserter = require('string.prototype.replaceall');

replaceAllInserter.shim();

Object.defineProperty(global.self, 'crypto', {
  value: {
    getRandomValues: (arr) => crypto.randomBytes(arr.length),
  },
});
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query) => ({
    matches: true,
    media: query,
    onchange: null,
    addListener: jest.fn(), //deprecated
    removeListener: jest.fn(), //deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchListener: jest.fn(),
  }),
});
