import {$} from 'bun'

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
]

const logError = (pkg: string, operation: string, error: unknown) => {
  console.error('\n❌ ═══════════════════════════════════════════════════')
  console.error(`   FAILED: ${operation}`)
  console.error(`   Package: ${pkg}`)
  console.error('   ───────────────────────────────────────────────────')
  console.error(`   Error: ${error instanceof Error ? error.message : String(error)}`)
  console.error('═══════════════════════════════════════════════════\n')
}

for (const p of packages) {
  try {
    await $`cd ${p} && rm -rf node_modules && rm -rf bun.lock && rm -rf dist`
  } catch (error) {
    logError(p, 'Clean directories', error)
    continue
  }

  try {
    await $`cd ${p} && bun install && bun update --latest --force`
  } catch (error) {
    logError(p, 'Install and update dependencies', error)
    continue
  }

  try {
    const packageJson = await Bun.file(`${p}/package.json`).json()
    const biomeField = packageJson.devDependencies?.['@biomejs/biome']
    if(biomeField){
      const biomeVersion = biomeField.slice(1)
      const biomeSchema = await Bun.file(`${p}/biome.json`).json()
      const newBiomeSchema = {
        ...biomeSchema,
        $schema: `https://biomejs.dev/schemas/${biomeVersion}/schema.json`,
      }
      await Bun.write(`${p}/biome.json`, JSON.stringify(newBiomeSchema, null, 2))
    }
  } catch (error) {
    logError(p, 'Update Biome schema', error)
  }

  try {
    await $`cd ${p} && rm -rf .husky`
  } catch (error) {
    logError(p, 'Remove .husky', error)
    continue
  }

  try {
    const packageJson = await Bun.file(`${p}/package.json`).json()
    if(packageJson.scripts?.['lint:fix']){
      await $`cd ${p} && bun run lint:fix`
    }
  } catch (error) {
    logError(p, 'Run lint:fix', error)
  }
}

try {
  await $`bunx better-sort-package-json **/package.json`
} catch (error) {
  logError('all packages', 'Sort package.json files', error)
}
