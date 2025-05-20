import { defineWorkspace } from "bunup";
import { report } from "bunup/plugins";

export default defineWorkspace([
    {
        name: "package-1",
        root: "packages/package-1",
        config: {
            entry: ["src/index.ts"],
            format: ["esm", "cjs"],
            dts: true,
            plugins: [report()],
        },
    },
]);
