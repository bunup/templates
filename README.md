# bunup-new

Quickly scaffold modern libraries like TypeScript libraries, optional monorepos, etc., in 10 seconds with Bun. Powered by [Bunup](https://bunup.dev/) - the fastest TypeScript bundler available ⚡️.

- 🚀 **Zero Config**: Get started in seconds with sensible defaults
- 📦 **Modern Setup**: ESM and CJS output formats, TypeScript declarations
- ⚡️ **Bun Powered**: Leveraging Bun's speed for development, package management, and testing
- 🧩 **Monorepo Support**: Create workspace-based projects with ease
- 🔧 **Complete Tooling**: Testing with Bun test, linting, formatting, and CI workflows included
- 🚦 **Git Hooks**: Enforced code quality with Husky pre-commit hooks
- 📝 **Conventional Commits**: Standardized commit messages with commitlint
- 🚢 **Release Automation**: GitHub Actions for testing and publishing
- 🧹 **Modern Tooling**: Biome for linting and formatting

## Getting Started

You can create a new project by using:

```sh [bun]
bunx bunup@latest --new
```

### Next Steps

1. **Change into the created project directory**:

   ```sh
   cd my-ts-lib
   ```

2. **Install dependencies**:

   ```sh
   bun install
   ```

3. **Create a GitHub repository**:

   - Go to [GitHub](https://github.com/new)
   - Create a new repository with the same name as your project

4. **Initialize Git repository**:

   ```sh
   git init
   git add .
   git commit -m "chore: initial commit"
   git branch -M main
   git remote add origin https://github.com/username/my-ts-lib.git
   git push -u origin main
   ```

5. **Setup for Releases**:

   - Generate an npm token:

     1. Go to [npmjs.com](https://www.npmjs.com/) and sign in
     2. Navigate to your profile → Access Tokens → Generate New Token (Classic)
     3. Give it a descriptive name (e.g., "my-ts-lib publishing")
     4. Select "Automation" as the token type
     5. Click "Generate Token" and copy it immediately

   - Add npm token to GitHub repository:
     1. Go to your GitHub repository
     2. Navigate to Settings → Secrets and variables → Actions
     3. Click "New repository secret"
     4. Name: `NPM_TOKEN`
     5. Value: Paste your npm token
     6. Click "Add secret"

## Development Workflow

After completing the setup, here's how to use your project:

### Common Commands

```sh
bun run dev        # Start development mode with hot reloading
bun run test       # Run test suite
bun run lint       # Check code style and find problems
bun run lint:fix   # Fix linting issues automatically
bun run format:fix # Fix code formatting issues
bun run tsc        # Type check TypeScript code
bun run build      # Build production bundle
```

### Committing Code

The project uses [Conventional Commits](https://www.conventionalcommits.org/) for standardized commit messages:

```sh
# Example commit messages:
git commit -m "feat: add user authentication"
git commit -m "fix: resolve issue with data loading"
git commit -m "docs: update API documentation"
git commit -m "chore: update dependencies"
```

Pre-commit hooks will run automatically to check your code quality before each commit. The hooks run type checking, linting, and formatting validation.

## CI/CD Workflows

The project comes with three GitHub Actions workflows:

1. **CI**: Runs on pull requests and pushes to main, validating types, linting, and tests
2. **Release**: Triggered by tags, builds and publishes the package to npm with provenance
3. **Issue Management**: Automatically marks issues as stale after 30 days of inactivity

## 🚀 Releasing Your Package

When you're ready to release your package, simply run:

```sh
bun run release
# or
pnpm release
```

This will:

1. Prompt you for a new version (patch, minor, or major)
2. Update package.json version
3. Create a Git tag
4. Push changes and tag to GitHub

The GitHub Actions workflow will automatically:

1. Build the package
2. Generate a GitHub release with changelog
3. Publish to npm with provenance

Happy coding!
