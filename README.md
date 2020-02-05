# Monorepo Starter

> Note - this starter is still a work in progress and some features described below have not been set up yet

> An example setup of how to do a monorepo, used in our [Monorepo Getting Started Guide]()

> Usable as a template from github

## Using this Starter

1. Clone this repository, or click the `use this template` button on Github.
2. Delete packages you do not need, and add your own packages in the folder that makes most sense.
3. Run `yarn`

You are now ready to start developing within the monorepo!

If you are interested in how to further configure your project, or want more information on why it is set up like this, check out our [Monorepo Style Guide](https://github.com/Thinkmill/monorepo)

## What is included in this starter

### Packages set up

We have set up three different folders to put packages, based on their needs, each of which can include new packages. Here is the base structure:

```
- packages/
    - simple-package
    - with-multi-entrypoints
    - private-package
- apps/
    - placeholder-app
- websites/
    - placeholder-website
```

To determine where to place a new package:

- If it is designed to be consumed by other packages, and not run on its own, put it in the `/packages` folder. These may be published to npm, but can also include private packages.
- If it is a node app to be deployed, put it in the `/apps` folder
- If it a website to be deployed, put it in the `/websites` folder

> We recommend deleting any of these folders that you don't intend to use in your project

### Tools set up

- [Yarn Workspaces](https://legacy.yarnpkg.com/en/docs/workspaces/)
- [Preconstruct](https://preconstruct.tools/)
- [Manypkg](https://github.com/thinkmill/manypkg)
- [Changesets](https://github.com/changesets/changesets)
- [Babel](https://babeljs.io/)
- [Jest](https://jestjs.io/)

Each of these tools have configuration specific to their usage in a monorepo, which has been configured for you. See our [style guide](https://github.com/Thinkmill/monorepo) for more information on the configuration for each tool.

If you plan to use any of the following, please see the style guide for how to set them up:

### Installing new packages

When you install new packages, you will need to determine if they are intended to be used by the monorepo as a whole, or by an individual package.

If it is intended for use by the monorepo as a whole, add the package to the root `package.json` and run `yarn` to install.

If it is intended for use by an individual package, add it to that's `package.json` and run `yarn` to install.

Within a monorepo, all of your packages must use the same version of external packages. `yarn manypkg check` will tell you if you have any problems. `yarn manypkgs fix` will fix all problems. You can find out more about these rules in the [manypkg docs](https://github.com/thinkmill/manypkg)

### Quick Start Guide for some other tools

<details><summary>- next.js</summary>

1. Use the existing `/website` folder, or create a folder for a new website in `/apps/your-app-name`
2. [Follow the normal Next.js setup instructions](https://nextjs.org/docs/getting-started)
   - where the guide asks you to perform terminal commands (such as installing packages), run them from your app's folder, not from the repository root.
3. Done.

We also have additional guides to [using next.js with monorepos](https://github.com/Thinkmill/monorepo#nextjs)

</details>

- [Gatsby](https://github.com/Thinkmill/monorepo#gatsby)
- TypeScript

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
