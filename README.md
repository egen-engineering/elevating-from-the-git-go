# Elevating from the git-go

Our playbook of engineering principles and patterns

### Contributing guidelines

Refer to [`src/pages/contributing-guidelines`](https://egen-engineering.github.io/elevating-from-the-git-go/contributing-guidelines/) to know more.

## Technical details

- This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator. You may refer to the online documentation to learn more.
- When a pull request is made to `main`, upon merging the changes, Github Actions creates a build and pushes it to `gh-pages` branch and the changes will be live. If you push your changes to `main` directly, the build and deploy step will occur right away.

### How to install

Requires [Node.js](https://nodejs.org/en/). Next, install project dependencies by running:

```bash
npm install
```

or

```bash
yarn install
```

### Local Development

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

```bash
npm start
```

or

```bash
yarn start
```

### Build

This command generates static content into the `build` directory, which can be served using any static contents hosting service like Github Pages. You mostly wouldn't need to do this yourself, it is handled by Github Actions.

```
npm run build
```

or

```bash
yarn build
```

### Deployment

Deployment occurs automatically via Github Actions when you merge your commits to `main`.
