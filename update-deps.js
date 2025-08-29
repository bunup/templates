import {$} from 'bun'

const packages = [
  "react-lib",
  "react-lib/test/ui",
  "ts-lib",
  "ts-lib-monorepo",
  "react-lib-basic",
  "ts-lib-basic",
  "ts-lib-monorepo-basic",
]

for (const p of packages) {
  await $`cd ${p} && bun update --latest`
  try {
    const packageJson = await Bun.file(`${p}/package.json`).json()
    const biomeVersion = packageJson.devDependencies['@biomejs/biome'].slice(1)
    const biomeSchema = await Bun.file(`${p}/biome.json`).json()
    const newBiomeSchema = {
      ...biomeSchema,
      $schema: `https://biomejs.dev/schemas/${biomeVersion}/schema.json`,
    }
    await Bun.write(`${p}/biome.json`, JSON.stringify(newBiomeSchema, null, 2))
    await $`cd ${p} && bun run lint:fix`
  } catch {}
}
