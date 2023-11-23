import { expect, test } from "vitest";
import { sendMessage } from "../layout/Contact";
import { getRepos } from "../layout/Project";

test("Check if email sends", () => {
  sendMessage("Justin", "Elmourne", "jelmourne@outlook.com", "Test").then(
    (e) => {
      expect(e.status).equals(200);
    }
  );
});

test("List first repo's id", () => {
  getRepos().then((e) => {
    expect(e.data[0].id).equals(200);
  });
});
