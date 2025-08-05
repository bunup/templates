import {$} from 'bun'

const packages = [
  "react-lib",
  "ts-lib",
  "ts-lib-monorepo",
]

for (const p of packages) {
  await $`bun update`
  const packageJson = await Bun.file(`${p}/package.json`).json()
  const biomeVersion = packageJson.devDependencies['@biomejs/biome'].slice(1)
  const biomeSchema = await Bun.file(`${p}/biome.json`).json()
  const newBiomeSchema = {
    ...biomeSchema,
    $schema: `https://biomejs.dev/schemas/${biomeVersion}/schema.json`,
  }
  await Bun.write(`${p}/biome.json`, JSON.stringify(newBiomeSchema, null, 2))
  await $`cd ${p} && bun run lint:fix`
}
