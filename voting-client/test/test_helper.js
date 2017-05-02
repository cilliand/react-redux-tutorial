//import jsdom from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';
var jsdom = require("jsdom/lib/old-api.js").jsdom;
const dom = jsdom('<!doctype html><html><body></body></html>');
const win = dom.defaultView;

global.document = dom;
global.window = win;

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

chai.use(chaiImmutable);