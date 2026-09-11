const test = require("node:test");
const assert = require("node:assert/strict");
const { createApp } = require("../src/server");
test("app can be created", () => assert.ok(createApp()));
