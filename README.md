![banner](/images/banner.png)

[![HitCount](https://hits.dwyl.com/ServiceNowDevProgram/Menu-Generating-Operations-Program-Widget-Custom-Component.svg?style=flat)](http://hits.dwyl.com/ServiceNowDevProgram/Menu-Generating-Operations-Program-Widget-Custom-Component) [![Pull Requests welcome](https://img.shields.io/badge/PRs-welcome-ff69b4.svg?style=flat-square)](https://github.com/ServiceNowDevProgram/Menu-Generating-Operations-Program-Widget-Custom-Component/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22) <a href="https://github.com/ServiceNowDevProgram/Menu-Generating-Operations-Program-Widget-Custom-Component/pulls"><img src="https://img.shields.io/github/last-commit/ServiceNowDevProgram/Menu-Generating-Operations-Program-Widget-Custom-Component?style=flat-square"></a> <a href="https://github.com/ServiceNowDevProgram/Menu-Generating-Operations-Program-Widget-Custom-Component/graphs/contributors"><img src="https://img.shields.io/github/contributors/ServiceNowDevProgram/Menu-Generating-Operations-Program-Widget-Custom-Component?style=flat-square"></a> <a href="https://invite.sndevs.com"><img src="https://img.shields.io/badge/community-sndevs-630330?style=flat-square"></a> 
# Welcome!
Hola! @MGOPW here. This Custom Component repository has a [sister repository](https://github.com/ServiceNowDevProgram/Menu-Generating-Operations-Program-Widget-Experience-Page) containing the accompanying Experience Page for this component, be sure to check out both repos to get the full picture of what we are doing here. This project has a slightly complex setup, but it should provide you with a great starting point to learn Custom Components and UI Builder. **You must check out the Instructions section below for more information on how to install these!**

We went over how to contribute to this repository in our [latest episode of You & I Builder Live](https://www.youtube.com/live/aq5Ww9NPXEc?si=LV3CIjCiH7nehzWt) - be sure to check it out! The component ended up working at the end after fixing the scope name and waiting a bit longer. It literally worked the moment we got off stream! 

Other resources you should check out:
- [Next Experience Center of Excellence](https://www.servicenow.com/community/next-experience-articles/next-experience-center-of-excellence/ta-p/2332092) - This is the main place where we post Next Experience, Workspace, and UI Builder enablement materials.
- [You & I Builder Live](https://www.youtube.com/playlist?list=PL3rNcyAiDYK2Bgzj4mRdtfxMpGkI5KXBJ) - A more technical and in-depth view in to UI Builder packaged in a hilarious and casual format. Come hang out in chat and learn some UI Builder while you're at it!
- [Next Experience Academy](https://www.servicenow.com/community/next-experience-blog/next-experience-academy-upcoming-and-recorded-sessions/ba-p/2272673) - Monthly webinar series we host for all audiences, all academies are uploaded to [this youtube playlist](https://www.youtube.com/watch?v=wuli92FRGC0&list=PLkGSnjw5y2U6hmEPcDcJ53FHwKJIvoLvr) after the fact.

And lastly, this repository is part of a larger coordinated effort by the ServiceNow Developer Advocate to provide lots of fun ServiceNow projects for Hacktoberfest. Be sure to check out the [main repository README](https://github.com/ServiceNowDevProgram/Hacktoberfest) to see what else you can participate in!
 
# Content
- [What is this even for?](#what-is-this-even-for)
- [What do i need to know?](#what-do-i-need-to-know)
- [File descriptions](#file-descriptions)
- [Information on Portal Experience menus](#some-information-on-portal-experience-menus)
- [Instructions](#instructions)
	- [Installation instructions](#installation-instructions)
		- NOW-CLI
		    - Upgrading for Vancouver
		- Instance setup
	- [Making changes to the component](#making-changes-to-the-component)
	- [Troubleshooting](#troubleshooting)
# What is this even for?
You can create something called Portal Experiences in UI Builder, which are similar to Workspaces. They aren't currently a replacement for Angular Service Portal as of the writing of this repo, you can read more about this [on the Next Experience Community forum](https://www.servicenow.com/community/next-experience-articles/portal-experience-faqs/ta-p/2331979). These Portal Experiences have menus that are generated from JSON, and it's a pain to manage them right now. So Jesalyn and I decided to do something fun - why not learn how to make a custom component while simultaneously spending hundreds of hours making a solution for something that only mildly inconvenienced us? (And then submit it as a Creator Con lab!)

And that's what you see here! We've created a Custom Component and Experience page combo to make menus for us. We didn't quite finish it, but we wanted to share the source code with everyone so you'd have a good starting point to look at when building your own custom components. 

But thanks to Hacktoberfest, it gets even better - now you can help us finish it by contributing! Be sure to check out our [CONTRIBUTING.md](CONTRIBUTING.md) file for more info on how you can help!

![my dream](/images/design.png)

This is what i pictured the final component would look like. We're almost there! 

# What do I need to know?
- We've created issues to list out contribution ideas you might want to pick up! Or if you think of new stuff to contribute, make a new issue and let us know what you're going to work on.
- Design philosophy: Components should be presentational if possible, but if the exchange with the server data is complex enough, and you're going to use it in multiple places, you're really better off with a connected component. In this case, we tried to stick to making the component more presentational in nature so keep that in mind when adding new features if possible.
- Collaborating with others on components is rather complex due to how the scopes work, so be sure to follow every step in this page so you can be successful and have your PRs approved. Make sure to check out the [CONTRIBUTING.md](CONTRIBUTING.md) file for important information.
- What you see right now is the source code you can download to make changes yourself. In order to deploy the current version of the component and explore how it works, you need to go to the [sister repository for this component to grab the Experience Page](https://github.com/ServiceNowDevProgram/Menu-Generating-Operations-Program-Widget-Experience-Page) as well as grab the update set for the compiled component [from the releases section of this repository](https://github.com/ServiceNowDevProgram/Menu-Generating-Operations-Program-Widget-Custom-Component/releases/tag/original).
# File descriptions
In case it's a bit confusing to start with, here's a brief description of what each file in the repository is for along with an image to explain the anatomy of the component.

![anatomy of the component](/images/componentanatomy.png)

### `src/x-759224-menu-builder-uic/`
- `index.js`
	- This is the starting point of the custom component, UI Builder manages its properties and events.
### `src/x-759224-menu-builder-uic/components/`
- `alpha-menu-editor.js`
	- This is the editor bar to create new top-level menu items and actions, or delete everything.
- `menu-editor.js`
	- This is similar to the alpha-menu-editor, but this creates sub-level menu items or actions for an existing menu item.
- `menu-item.js`
	- This is where to configure all the details about a menu item, such as its name, link, or delete
- `menu-tree.js`
	- This displays a top-level menu item (and child items), expand/collapse functionality for the container
- `menu-ui.js`
	- This is similar to menu-tree, but this displays all top-level menu items and is the starting point for the overall layout of the component
### `src/x-759224-menu-builder-uic/styles/`
- `alpha-menu-editor.scss`
	- styles for alpha-menu-editor
- `menu-editor.scss`
	- styles for menu-editor
- `menu-item.scss`
	- styles for menu-item
- `menu-tree.scss`
	- styles for menu-tree
- `styles.scss`
	- global styles for all components

# Some information on Portal Experience menus
I've tried to reverse engineer these as best as I could to make this component, but I know I haven't fully figured it out yet. Here's what I already know to help you get started.

Menus have a complex parent/child relationship that determines their behavior and how menus are presented. [There's an issue created to investigate and implement this feature](https://github.com/ServiceNowDevProgram/Menu-Generating-Operations-Program-Widget-Custom-Component/issues/1) so if you want to delve deeper, please go right ahead. 

For example, the more menus you have nested, their appearance and layout changes in the menu itself. I don't quite remember the number, unfortunately.

Actions have similar behavior, which I haven't cataloged. Sometimes they show up as buttons, while other times they show up as links. 

![anatomy of a menu](/images/menuanatomy.png)

Visual of what i've figured out so far.

# Instructions
This is going to get somewhat complex, but I hope we have provided enough guidance here for you to get going. If you ever get stuck, you can find us over on the [SNDEVS](https://sndevs.com) community ([invite.sndevs.com](https://invite.sndevs.com)) in either the `#hactoberfest` channel or the `#next-experience-uib-workspace channel.`

Things you'll need:
- VS Code or a similar IDE (We'll move forward assuming you're using VS Code)
- Command line/Terminal access (again we'll assume you'll use VS Code)
- A [ServiceNow Developer Instance](https://developer.servicenow.com/)
- NOW-CLI (and its dependencies)
## Contributing guidelines
- Check out the [CONTRUBUTING.md](CONTRIBUTING.md) file for more information.
## Installation instructions
Links you're going to need:
- Link to [Store Page](https://store.servicenow.com/sn_appstore_store.do#!/store/application/9085854adbb52810122156a8dc961910/1.1.0?referer=%2Fstore%2Fsearch%3Flistingtype%3Dallintegrations%25253Bancillary_app%25253Bcertified_apps%25253Bcontent%25253Bindustry_solution%25253Boem%25253Butility%25253Btemplate%25253Bgenerative_ai%25253Bsnow_solution%26q%3Dcli&sl=sh). 
	- In order to download the CLI from the Store, you need to log in to an account using the same email address you currently use to login to Now Support. 
- Link to [Product Docs page with installation instructions](https://docs.servicenow.com/bundle/vancouver-application-development/page/build/servicenow-cli/task/download-cli.html).
- Link to [Product Docs section on NOW-CLI](https://docs.servicenow.com/en-US/bundle/vancouver-application-development/page/build/servicenow-cli/concept/servicenow-cli.html).
- Link to [Alternative Download from GitHub](https://github.com/ServiceNow/servicenow-cli).
- Link to download [VS Code](https://code.visualstudio.com).
### NOW-CLI

#### Installation instructions from Github repo
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

#### Upgrading for Vancouver
If you already had the CLI installed, you can update the `ui-component` extension from the command line with the following command: `snc extension update --name ui-component`.

### Instance setup
Follow these instructions to install the experience page and the menu builder component in your instance.

1. Open App Engine Studio and import the sister repository directly to your instance: [Menu-Generating-Operations-Program-Widget-Experience-Page](https://github.com/ServiceNowDevProgram/Menu-Generating-Operations-Program-Widget-Experience-Page)
2. Install the [Update Set provided in the Releases section of this repository](https://github.com/ServiceNowDevProgram/Menu-Generating-Operations-Program-Widget-Custom-Component/releases/tag/original).
3. Search for `Hacktober23` in the Filter Navigation 
	1. **Menu Builder** – takes you to the page to play with the component 
	2. **UI Builder** – takes you to the UI Builder page for the Menu Builder page 

## Making changes to the component
These instructions will walk you through how to set yourself up to make changes to the Custom Component's code. Make sure to pay special attention to step 3, per the [Contributing guidelines](CONTRIBUTING.md), due to how custom components work with scopes you have to change it while you develop on it and then change it back or exclude these files from your Pull Requests when you submit.

The goal of this is to have the default page with the original working component, then have a variant where you are testing your changes.

Note: Your vendor prefix is found by looking up the system property `glide.appcreator.company.code`

1. Clone [Custom Component repository](https://github.com/ServiceNowDevProgram/Menu-Generating-Operations-Program-Widget-Custom-Component/) to your computer.
2. Open the repo in VS Code.
3. Make the following changes in these files.**IMPORTANT: When submitting your PR for this repo, be sure to revert these changes as per the [Contributing guidelines](CONTRIBUTING.md). 
	1. `now_ui.json`
		1. Replace line 3: `x-759224-menu-builder-uic` with `x-[your vendor prefix]-menu-builder-h23`. 
		2. Replace line 38: `"label": "Menu Builder"` with `"label": "Menu Builder H23"`
		3. Replace line 55: `"scopeName": "x_759224_menu_bu_1"` with `"scopeName": "x_[your vendor prefix]_menu_bu_1"` 
	2. `package.json`
		1. Replace line 2: `"name": "menu-builder-uic"` with `"name": "menu-builder-h23"`
		2. Replace line 9:` menu-builder-uic` with` menu-builder-h23 `
	3. `src > x-759224-menu-builder-uic > index.js`
		1. Replace line 28: `x-759224-menu-builder-uic` with `x-[your vendor prefix]-menu-builder-h23`. 
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
## Troubleshooting

- Anytime you use a cli-command and see “Response code 401 (Unauthorized)” 
	1. I fixed this by resetting my instance password and then creating a new profile with the new credentials 
- When typing your password in the CLI, be sure to escape special characters in your password. A password like `3L4#dEAjoLLb^C6T4#YsE2^` broke the cli and gave the 401 errors.
