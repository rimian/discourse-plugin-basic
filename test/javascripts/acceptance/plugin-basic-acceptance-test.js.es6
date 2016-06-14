import { acceptance } from "helpers/qunit-helpers";
acceptance("Plugin Basic", { loggedIn: true });

test("A basic integration test", () => {
  visit("/");

  andThen(() => {
    ok(exists('.below-footer-outlet'), "Hello world");
  });
});
