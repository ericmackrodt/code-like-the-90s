"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test = require("tape");
const mime_types_1 = require("../src/mime-types");
test('lookup .js', t => {
    t.plan(1);
    const mime = mime_types_1.lookup('file.js');
    t.equal(mime, 'application/javascript');
});
test('lookup .js.map', t => {
    t.plan(1);
    const mime = mime_types_1.lookup('file.js.map');
    t.equal(mime, 'application/javascript');
});
test('lookup .json', t => {
    t.plan(1);
    const mime = mime_types_1.lookup('file.json');
    t.equal(mime, 'application/json');
});
test('lookup .css', t => {
    t.plan(1);
    const mime = mime_types_1.lookup('file.css');
    t.equal(mime, 'text/css');
});
test('lookup .html', t => {
    t.plan(1);
    const mime = mime_types_1.lookup('file.html');
    t.equal(mime, 'text/html');
});
test('lookup .txt', t => {
    t.plan(1);
    const mime = mime_types_1.lookup('/some/file.txt');
    t.equal(mime, 'text/plain');
});
