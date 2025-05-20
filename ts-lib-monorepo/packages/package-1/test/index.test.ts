import { expect, test } from "bun:test";
import { greet } from "../src";

test("package-1 package should greet correctly", () => {
    expect(greet("World")).toBe(
        "Hello, World! Welcome to the package-1 package.",
    );
});
