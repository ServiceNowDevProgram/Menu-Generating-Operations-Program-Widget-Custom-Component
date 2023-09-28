# Introduction
This is going to get somewhat complex, but I hope we have provided enough guidance here for you to get going. If you ever get stuck, you can find us over on the [SNDEVS](https://sndevs.com) slack ([invite.sndevs.com](https://invite.sndevs.com)) in either the #hactoberfest channel or the #next-experience-uib-workspace channel. 

Things you'll need:
- VS Code or a similar IDE (We'll move forward assuming you're using VS Code)
- Command line/Terminal access (again we'll assume you'll use VS Code)
- A [ServiceNow Developer Instance](https://developer.servicenow.com/)
- NOW-CLI (and its dependencies)
# Contents
- [Contributing guidelines](#contributing-guidelines)
- [Installation instructions](#installation-instructions)
	- NOW-CLI
	    - Upgrading for Vancouver
	- Instance setup
- [Making changes to the component](#making-changes-to-the-component)
- [Troubleshooting](#troubleshooting)

# Contributing guidelines
- The scope of the Component is an important thing to keep in mind while you are developing. You will need to make changes to the name of the scope in order to deploy it to your instance and test any changes without affecting the original Menu Item component. This way, you can always have the default page with the original working component, then have a variant where you are testing your changes. You will be walked through the steps to achieve this under [Making changes to the component](#making-changes-to-the-component).
- If you want to contribute changes to the Experience Page itself, be sure to go to the [sister repository](https://github.com/ServiceNowDevProgram/Menu-Generating-Operations-Program-Widget-Experience-Page) and work from there. Always make a Variant to make changes to!

# Installation instructions
Links you're going to need:
- Link to [Store Page](https://store.servicenow.com/sn_appstore_store.do#!/store/application/9085854adbb52810122156a8dc961910/1.1.0?referer=%2Fstore%2Fsearch%3Flistingtype%3Dallintegrations%25253Bancillary_app%25253Bcertified_apps%25253Bcontent%25253Bindustry_solution%25253Boem%25253Butility%25253Btemplate%25253Bgenerative_ai%25253Bsnow_solution%26q%3Dcli&sl=sh). 
	- In order to download the CLI from the Store, you need to log in to an account using the same email address you currently use to login to Now Support. 
- Link to [Product Docs page with installation instructions.]([https://docs.servicenow.com/bundle/vancouver-application-development/page/build/servicenow-cli/task/download-cli.html](https://docs.servicenow.com/bundle/vancouver-application-development/page/build/servicenow-cli/task/download-cli.html))
- Link to [Product Docs section on NOW-CLI](https://docs.servicenow.com/en-US/bundle/vancouver-application-development/page/build/servicenow-cli/concept/servicenow-cli.html).
- Link to [Alternative Download from GitHub](https://github.com/ServiceNow/servicenow-cli).
- Link to download [VS Code](https://code.visualstudio.com)
## NOW-CLI

### Installation instructions from Github repo
1. Click on the Download link under `Client download`.
2. Extract download and run the installer for your OS (Windows, Mac, Linux) 
3. Go through the prompts in the ServiceNow CLI Setup Wizard to install on your computer 

The CLI should now be installed. To use it and for any other custom component work, we recommend using Visual Studio Code. 

Once you have VS Code installed: 

1. Open VS Code 
2. Click on Terminal > New Terminal in the menu bar 
3. In the terminal, type “snc” and press enter 

You should get something like this: 

```
Name 
  snc 
Description 
  The ServiceNow Command Line Interface (CLI) is an extensible framework that enables users to communicate with an instance from any client machine using the command line. 
. 
.
. 
```

This means the CLI is working. **To set up the rest of your environment, [follow this article by our good friend Jon Lind.](https://www.servicenow.com/community/next-experience-articles/setting-up-command-line-interface-cli-for-custom-component-dev/ta-p/2361588)**

NOTE: The CLI now supports Node v14 as of Vancouver. So, Step 2 of this article should be updated to “Switch to Node.js version 14” 
```
> nvm install v14 

> nvm use v14 

Now using node v14.21.3
```

### Upgrading for Vancouver
If you already had the CLI installed, you can update the `ui-component` extension from the command line with the following command: `snc extension update --name ui-component`.

## Instance setup
Follow these instructions to install the experience page and 

1. Open App Engine Studio and import the sister repository directly to your instance: [Menu-Generating-Operations-Program-Widget-Experience-Page](https://github.com/ServiceNowDevProgram/Menu-Generating-Operations-Program-Widget-Experience-Page)
2. Install the [Update Set provided in the Releases section of this repository](https://github.com/ServiceNowDevProgram/Menu-Generating-Operations-Program-Widget-Custom-Component/releases/tag/original).
3. Search for `Hacktober23` in the Filter Navigation 
	1. **Menu Builder** – takes you to the page to play with the component 
	2. **UI Builder** – takes you to the UI Builder page for the Menu Builder page 

# Making changes to the component
These instructions will walk you through how to set yourself up to make changes to the Custom Component's code. Make sure to pay special attention to step 3, per the [Contributing guidelines](#contributing-guidelines), due to how custom components work with scopes you have to change it while you develop on it and then change it back or exclude these files from your Pull Requests when you submit.

The goal of this is to have the default page with the original working component, then have a variant where you are testing your changes.

Note: Your vendor prefix is found by looking up the system property `glide.appcreator.company.code`

1. Clone [Custom Component repository](https://github.com/ServiceNowDevProgram/Menu-Generating-Operations-Program-Widget-Custom-Component/) to your computer.
2. Open the repo in VS Code.
3. Make the following changes in these files.**IMPORTANT: When submitting your PR for this repo, be sure to revert these changes as per the [Contributing guidelines](#contributing-guidelines). 
	1. `now_ui.json `
		1. Replace line 3: `x-759224-menu-builder-uic` with `x-[your vendor prefix]-menu-builder-h23`. 
		2. Replace line 38: `"label": "Menu Builder"` with `"label": "Menu Builder H23"`
		3. Replace line 55: `"scopeName": "x_759224_menu_bu_1"` with `"scopeName": "x_[your vendor prefix]_menu_bu_1"` 
	2. `package.json `
		1. Replace line 2: `"name": "menu-builder-uic"` with `"name": "menu-builder-h23" `
		2. Replace line 9:` menu-builder-uic` with` menu-builder-h23 `
	3. `src > x-759224-menu-builder-uic > index.js `
		1. Replace line 26: `x-759224-menu-builder-uic` with `x-[your vendor prefix]-menu-builder-h23`. 
4. Deploy the component to your instance `snc ui-component deploy`.
5. Go to the UX Macroponent Definitions table `sys_ux_macroponent`.
6. Search for `Menu Builder` - 2 results should come up, the original and then the H23 version.
7. Open the `Menu Builder H23` record.
8. Add the following events to the Dispatched events field: “Tree updated”, “Menu updated”, “JSON imported” and save the record.
9. Open the UI Builder page from the filter navigator `Hacktoberfest23 > Configuration > UI Builder`.
10. Create a variant of the Default page.
11. Find where the “Menu Builder” component is in the left sidebar content tree.
12. Add the “Menu Builder H23” component below the “Menu Builder” one 
13. Configure the properties and events for the component by copying how it’s done for the “Menu Builder” component.
14. Delete the “Menu Builder” component from the page.
15. Go to the Menu Builder page for your variant and play around. If everything is set up correctly then your variant should work like the default page.
# Troubleshooting

- Anytime you use a cli-command and see “Response code 401 (Unauthorized)” 
	1. I fixed this by resetting my instance password and then creating a new profile with the new credentials 
- When typing your password in the CLI, be sure to escape special characters in your password. A password like `3L4#dEAjoLLb^C6T4#YsE2^` broke the cli and gave the 401 errors.
