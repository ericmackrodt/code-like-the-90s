"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test = require("tape");
const props_1 = require("../src/props");
test('fetchProps', t => {
    t.plan(5);
    const props = props_1.fetchProps();
    t.true(!!props);
    t.true(!!props.listItems);
    t.true(!!props.menuItems);
    t.equal(props.listItems.length, 5);
    t.equal(props.menuItems.length, 5);
});
