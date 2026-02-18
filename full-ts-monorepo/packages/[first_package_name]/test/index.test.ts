import { expect, test } from "bun:test";
import { greet } from "../src";

test("[first_package_name] package should greet correctly", () => {
	expect(greet("World")).toBe("Hello, World! Welcome to the [first_package_name] package.");
});
