# Monorepo Starter

> Note - this starter is still a work in progress and some features described below have not been set up yet

> An example setup of how to do a monorepo, used in our [Monorepo Getting Started Guide](https://github.com/Thinkmill/monorepo/blob/master/GETTING_STARTED.md)

> Usable as a template from github as a fully setup monorepo - we configure the monorepo tooling so you can configure the rest however you want

## Using this Starter

1. Clone this repository, or click the `use this template` button on Github.
2. Delete packages you do not need, and add your own packages in the folder that makes most sense.
3. Run `yarn`
4. Start the server using `yarn start:server`
5. Start the website using `yarn start:next`
6. Visit `http://localhost:3000/` to see it running 😎

You are now ready to start developing within the monorepo!

If you are interested in how to further configure your project, or want more information on why it is set up like this, check out our [Monorepo Style Guide](https://github.com/Thinkmill/monorepo)

There is als a readme in each folder, to help explain why we have placed this folder there.

## Working in a monorepo

We have a [working in monorepos](https://github.com/Thinkmill/monorepo/blob/master/working-in-a-monorepo.md) section in our style guide with advice on how to work with this monorepo.

## What is included in this starter

### Packages set up

We have set up three different folders to put packages, based on their needs, each of which can include new packages. Here is what you have to start:

```
- packages/
    - button
- apps/
    - next-app
- services/
    - graphql-api
- websites/
```

To determine where to place a new package:

- If it is designed to be consumed by other packages, and not run on its own, put it in the `/packages` folder. These may be published to npm, but can also include private packages.
- If it is a user-facing app or website, it should live in the `/apps` folder
- If it is a back-end service or node app, it should live in the `/services` folder

The `website/` directory should be used for a documentation website, or other repository-wide website.

> We recommend deleting any of these folders that you don't intend to use in your project

### Tools we set up

- [Yarn Workspaces](https://legacy.yarnpkg.com/en/docs/workspaces/)
- [Preconstruct](https://preconstruct.tools/)
- [Manypkg](https://github.com/thinkmill/manypkg)
- [Changesets](https://github.com/changesets/changesets)
- [Babel](https://babeljs.io/)
- [Jest](https://jestjs.io/)
- [Eslint](https://eslint.org/) (but there are no rules yet)

Each of these tools have configuration specific to their usage in a monorepo, which has been configured for you. See our [style guide](https://github.com/Thinkmill/monorepo) for more information on the configuration for each tool.

If you plan to use any of the following, please see the style guide for how to set them up:

### Installing new packages

When you install new packages, you will need to determine if they are intended to be used by the monorepo as a whole, or by an individual package.

If it is intended for use by the monorepo as a whole, add the package to the root `package.json` and run `yarn` to install.

If it is intended for use by an individual package, add it to that's `package.json` and run `yarn` to install.

Within a monorepo, all of your packages must use the same version of external packages. `yarn manypkg check` will tell you if you have any problems. `yarn manypkgs fix` will fix all problems. You can find out more about these rules in the [manypkg docs](https://github.com/thinkmill/manypkg)

### Quick Start Guide for some other tools

<details><summary>Next.js</summary>

1. Use the existing `/website` folder, or create a folder for a new website in `/apps/your-app-name`
2. [Follow the normal Next.js setup instructions](https://nextjs.org/docs/getting-started)
   - where the guide asks you to perform terminal commands (such as installing packages), run them from your app's folder, not from the repository root.
3. Done.

We also have additional guides to [using next.js with monorepos](https://github.com/Thinkmill/monorepo#nextjs)

</details>

<details><summary>Gatsby</summary>

See the [guide to using Gatsby with monorepos](https://github.com/Thinkmill/monorepo#gatsby)
    
</details>

<details><summary>TypeScript</summary>

TypeScript configuration in monorepos works best with common `tsconfig` configurations. Reference [Configuration inheritance with `extends`](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#configuration-inheritance-with-extends)

1. Create a base `tsconfig.base.json` file in the project root.

   ```json
   {
     "compilerOptions": {
       "module": "esnext",
       "target": "es5",
       "moduleResolution": "node",
       "esModuleInterop": true,
       "lib": ["dom", "esnext"],
       "importHelpers": true,
       "rootDir": "./",
       "sourceMap": true,
       "declaration": true,
       "baseUrl": "./"
     }
   }
   ```

2. Create a base React `tsconfig.react.json` in the project root to add custom React settings.

   ```json
   {
     "extends": "./tsconfig.base.json",
     "compilerOptions": {
       "jsx": "react"
     }
   }
   ```

3. Then in your React components in your packages (eg. `./packages/button/`), add your `tsconfig.json` to extend your base `tsconfig.react.json`.

   ```json
   {
     "extends": "../../tsconfig.react.json",
     "include": ["src"]
   }
   ```

</details>

### Workflows set up

- Install: run `yarn`
  - This uses yarn workspaces to manage installation of dependencies for all your packages.
  - This also runs a `postinstall` hook that will validate your monorepo setup (using `Manykpkg`), and set your packages up for dev (using `Preconstruct`)
- Test: run `yarn test`, which will run Jest tests.
- Build: run `yarn build`
  - This uses Preconstruct to build `dist` files from the source of all packages in `/packages` and `/apps`.
  - For any build work you want done outside of Preconstruct building dists, you will need to add to this script.
- Release: run `yarn release`
  - this will run the build command, and then run `changeset publish`
- Clean: run `yarn clean`
  - this uses `Manypkg` to remove the `node_modules` and `dist` folders from each package in the repository, as well as from the root. It can be used to 'clean out' installed/built files to ensure running `yarn` or `build` gets you fresh information.

We strongly recommend using Changesets for versioning as well, here is a [base explanation of the workflow](https://github.com/atlassian/changesets/blob/master/docs/intro-to-using-changesets.md)
