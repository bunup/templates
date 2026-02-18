import { $ } from "bun";

const packages = [
	"full-react-pure-css",
	"full-react-css-modules",
	"full-react-tailwindcss",
	"full-ts",
	"full-ts-monorepo",
	"minimal-react-pure-css",
	"minimal-react-css-modules",
	"minimal-react-tailwindcss",
	"minimal-ts",
	"minimal-ts-monorepo",
];

const logError = (pkg: string, operation: string, error: unknown) => {
	console.error("\n❌ ═══════════════════════════════════════════════════");
	console.error(`   FAILED: ${operation}`);
	console.error(`   Package: ${pkg}`);
	console.error("   ───────────────────────────────────────────────────");
	console.error(
		`   Error: ${error instanceof Error ? error.message : String(error)}`,
	);
	console.error("═══════════════════════════════════════════════════\n");
};

for (const p of packages) {
	try {
		await $`cd ${p} && rm -rf node_modules && rm -rf bun.lock && rm -rf dist`;
	} catch (error) {
		logError(p, "Clean directories", error);
		continue;
	}

	try {
		await $`cd ${p} && bun install && bun update --latest --force`;
	} catch (error) {
		logError(p, "Install and update dependencies", error);
		continue;
	}

	try {
		await $`cd ${p} && rm -rf .husky`;
	} catch (error) {
		logError(p, "Remove .husky", error);
		continue;
	}

	try {
		const packageJson = await Bun.file(`${p}/package.json`).json();
		if (packageJson.scripts?.format) {
			await $`cd ${p} && bun run format`;
		}
	} catch (error) {
		logError(p, "Run format", error);
	}
}
