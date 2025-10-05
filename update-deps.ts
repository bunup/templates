import {$} from 'bun'

const packages = [
  "full-react",
  "full-ts",
  "full-ts-monorepo",
  "minimal-react",
  "minimal-ts",
  "minimal-ts-monorepo",
]

for (const p of packages) {
   await $`cd ${p} && rm -rf node_modules && rm -rf bun.lock && rm -rf dist`
  await $`cd ${p} && bun install && bun update --latest --force`
  try {
    const packageJson = await Bun.file(`${p}/package.json`).json()
    const biomeVersion = packageJson.devDependencies['@biomejs/biome'].slice(1)
    const biomeSchema = await Bun.file(`${p}/biome.json`).json()
    const newBiomeSchema = {
      ...biomeSchema,
      $schema: `https://biomejs.dev/schemas/${biomeVersion}/schema.json`,
    }
    await Bun.write(`${p}/biome.json`, JSON.stringify(newBiomeSchema, null, 2))
    await $`cd ${p} && bun run build && rm -rf .husky && bun run lint:fix`
  } catch {}
}
