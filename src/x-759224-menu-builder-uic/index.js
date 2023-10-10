import { createCustomElement } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";
import "./components/menu-ui";

// File description: This is the starting point of the custom component, UI Builder manages its properties and events.

const view = (
  { properties: { menuTree, importJSON }, initialImport },
  { updateState, dispatch }
) => {

  // Check if there's JSON data to import and it hasn't been imported yet
  if (importJSON && initialImport) {
    dispatch("IMPORTED_JSON", {
      json: importJSON,
    });

    // Update the initialImport flag to prevent re-importing
    updateState({
      initialImport: false,
    });
  }

  return <menu-ui menuTree={menuTree}></menu-ui>;
};

createCustomElement("x-512099-menu-builder-h23", {
  renderer: { type: snabbdom },
  view,
  styles,
  properties: {
	/*
	 * Representation of a menu (items). Default value is the representation of the OOB value of the chrome_menu UX Page Property from a new App Engine Studio Portal
	 * The entire menu is an array, where each index is a top level menu item
	 * Each index is an object defined like:
	 * {
	 * 	id: unique identifer for an item (randomly generated)
	 * 	children: an array of menuTrees (the JSON is recursive structure)
	 * 	parent: id of an item's parent
	 * 	choice: menu or action
	 * 	label: name of the item
	 * 	type: external or internal link
	 * 	page: what page to link to if internal type link
	 * 	sys_id: what sys_id to link to on a page if internal type link
	 * 	href: the href link for an external type link
	 * }
	 * If you look at how the default value is setup and compare it to the actual menu in a UI Builder portal page then hopefully the structure starts to make sense
	 * This is mainly used for keeping track of a menu item's place in the menu (is it a top-level item, is it a sub item and who is it parent, etc.) in order to visually show that in the menu-ui
     */
    menuTree: {
		default: [
			{
				id: "b6d95648-cc01-4756-8aec-b0ddc69a75b2",
				children: [
					{
						id: "7929f820-1b8d-4a5f-8e29-251ae619ee84",
						children: [
							{
								id: "f14dbfd1-2fa1-4392-8685-b163aff520cf",
								children: [],
								parent: "7929f820-1b8d-4a5f-8e29-251ae619ee84",
								choice: "menu",
								label: "Menu Item 1.1",
								type: "route",
								page: "article",
								sys_id: "3020c9b1474321009db4b5b08b9a712d",
								href: null,
							},
							{
								id: "2e4c690c-dfda-4d08-8e0b-087d39cd098b",
								children: [],
								parent: "7929f820-1b8d-4a5f-8e29-251ae619ee84",
								choice: "menu",
								label: "Menu Item 1.2",
								type: "route",
								page: "article",
								sys_id: "3020c9b1474321009db4b5b08b9a712d",
								href: null,
							},
							{
								id: "6e698b78-7973-490e-8c55-f7616a7229be",
								children: [],
								parent: "7929f820-1b8d-4a5f-8e29-251ae619ee84",
								choice: "action",
								label: "Browse Menu Item 1",
								type: "route",
								page: "article",
								sys_id: "3020c9b1474321009db4b5b08b9a712d",
								href: null,
							},
						],
						parent: "b6d95648-cc01-4756-8aec-b0ddc69a75b2",
						choice: "menu",
						label: "Menu Item 1",
						type: null,
						page: null,
						sys_id: null,
						href: null,
					},
					{
						id: "a1742e12-e0ed-4fc7-bf65-5415ed81b2b4",
						children: [
							{
								id: "206327db-2d3d-46b7-bb40-09d4370adb03",
								children: [],
								parent: "a1742e12-e0ed-4fc7-bf65-5415ed81b2b4",
								choice: "menu",
								label: "Menu Item 2.1",
								type: "external",
								page: null,
								sys_id: null,
								href: "www.servicenow.com",
							},
							{
								id: "d28da383-0f7b-4e93-ac05-205eb0e1463c",
								children: [],
								parent: "a1742e12-e0ed-4fc7-bf65-5415ed81b2b4",
								choice: "menu",
								label: "Menu Item 2.2",
								type: "external",
								page: null,
								sys_id: null,
								href: "www.servicenow.com",
							},
							{
								id: "514e8f84-76b5-47ec-8b47-51dbf641b8f5",
								children: [],
								parent: "a1742e12-e0ed-4fc7-bf65-5415ed81b2b4",
								choice: "menu",
								label: "Menu Item 2.3",
								type: "external",
								page: null,
								sys_id: null,
								href: "www.servicenow.com",
							},
							{
								id: "bc1d8630-e11a-4a37-90f9-5c19beb5e70c",
								children: [],
								parent: "a1742e12-e0ed-4fc7-bf65-5415ed81b2b4",
								choice: "action",
								label: "Browse Menu Item 2",
								type: "route",
								page: "article",
								sys_id: "3020c9b1474321009db4b5b08b9a712d",
								href: null,
							},
						],
						parent: "b6d95648-cc01-4756-8aec-b0ddc69a75b2",
						choice: "menu",
						label: "Menu Item 2",
						type: null,
						page: null,
						sys_id: null,
						href: null,
					},
					{
						id: "9e2dbde6-40df-4e9e-abaa-9cdced815af4",
						children: [],
						parent: "b6d95648-cc01-4756-8aec-b0ddc69a75b2",
						choice: "action",
						label: "Report Issue",
						type: "route",
						page: "catalog",
						sys_id: "3f1dd0320a0a0b99000a53f7604a2ef9",
						href: null,
					},
				],
				parent: null,
				choice: "menu",
				label: "Menu 1",
				type: null,
				page: null,
				sys_id: null,
				href: null,
			},
			{
				id: "0bbfc5ea-d804-4870-9a8d-17c484aa24eb",
				children: [
					{
						id: "364eea5e-46ce-49fd-a80e-a4b7a59ba096",
						children: [
							{
								id: "00830cda-95ec-4272-8159-21f8864e0ba3",
								children: [
									{
										id: "bd03e70f-fe78-4f63-99bf-c99ff05e5298",
										children: [],
										parent: "00830cda-95ec-4272-8159-21f8864e0ba3",
										choice: "menu",
										label: "Menu Item 1.1.1",
										type: "route",
										page: "article",
										sys_id: "8aef1935474321009db4b5b08b9a7113",
										href: null,
									},
									{
										id: "71050f9d-3a85-4bd1-a2b9-b5564b0ec94b",
										children: [],
										parent: "00830cda-95ec-4272-8159-21f8864e0ba3",
										choice: "menu",
										label: "Menu Item 1.1.2",
										type: null,
										page: null,
										sys_id: null,
										href: null,
									},
									{
										id: "c93dd0fe-1bb9-4577-a7e9-f0163b25d7f0",
										children: [],
										parent: "00830cda-95ec-4272-8159-21f8864e0ba3",
										choice: "action",
										label: "Browse all Menu Item 1.1",
										type: "route",
										page: "article",
										sys_id: "8aef1935474321009db4b5b08b9a7113",
										href: null,
									},
								],
								parent: "364eea5e-46ce-49fd-a80e-a4b7a59ba096",
								choice: "menu",
								label: "Menu Item 1.1",
								type: null,
								page: null,
								sys_id: null,
								href: null,
							},
							{
								id: "d2b2abde-9b92-4d9e-93d3-917cd3547ab0",
								children: [
									{
										id: "23eafd15-13cb-4492-bb52-bade0c492790",
										children: [],
										parent: "d2b2abde-9b92-4d9e-93d3-917cd3547ab0",
										choice: "menu",
										label: "Menu Item 1.2.1",
										type: "external",
										page: null,
										sys_id: null,
										href: "www.servicenow.com",
									},
									{
										id: "e187b34f-305c-46d1-8734-0044516797a4",
										children: [],
										parent: "d2b2abde-9b92-4d9e-93d3-917cd3547ab0",
										choice: "menu",
										label: "Menu Item 1.2.2",
										type: "external",
										page: null,
										sys_id: null,
										href: "www.servicenow.com",
									},
									{
										id: "146f225a-7634-4042-a612-48aa5c11d09c",
										children: [],
										parent: "d2b2abde-9b92-4d9e-93d3-917cd3547ab0",
										choice: "menu",
										label: "Menu Item 1.2.3",
										type: "external",
										page: null,
										sys_id: null,
										href: "www.servicenow.com",
									},
									{
										id: "7cff50c8-95d0-46c2-81cf-af7ad0649fff",
										children: [],
										parent: "d2b2abde-9b92-4d9e-93d3-917cd3547ab0",
										choice: "action",
										label: "Browse all Menu Item 1.2",
										type: "route",
										page: "article",
										sys_id: "8aef1935474321009db4b5b08b9a7113",
										href: null,
									},
								],
								parent: "364eea5e-46ce-49fd-a80e-a4b7a59ba096",
								choice: "menu",
								label: "Menu Item 1.2",
								type: null,
								page: null,
								sys_id: null,
								href: null,
							},
							{
								id: "4005516c-c26d-4652-b751-5468a1eb7a5e",
								children: [],
								parent: "364eea5e-46ce-49fd-a80e-a4b7a59ba096",
								choice: "action",
								label: "Browse all Menu Item 1",
								type: "route",
								page: "article",
								sys_id: "8aef1935474321009db4b5b08b9a7113",
								href: null,
							},
						],
						parent: "0bbfc5ea-d804-4870-9a8d-17c484aa24eb",
						choice: "menu",
						label: "Menu Item 1",
						type: null,
						page: null,
						sys_id: null,
						href: null,
					},
					{
						id: "bde0bc68-4242-4b58-bb0f-8d54aa04781e",
						children: [
							{
								id: "b9d30b29-181f-4943-9a5d-636035744e1a",
								children: [
									{
										id: "26f7a188-7a74-4eb0-898d-099b602fb901",
										children: [],
										parent: "b9d30b29-181f-4943-9a5d-636035744e1a",
										choice: "menu",
										label: "Menu Item 2.1.1",
										type: "route",
										page: "article",
										sys_id: "8aef1935474321009db4b5b08b9a7113",
										href: null,
									},
									{
										id: "27815a61-2576-4a20-a9c4-876847035db4",
										children: [],
										parent: "b9d30b29-181f-4943-9a5d-636035744e1a",
										choice: "menu",
										label: "Menu Item 2.1.2",
										type: "route",
										page: "article",
										sys_id: "8aef1935474321009db4b5b08b9a7113",
										href: null,
									},
									{
										id: "85221a7b-7367-40f1-add4-adbc5f9f4e5d",
										children: [],
										parent: "b9d30b29-181f-4943-9a5d-636035744e1a",
										choice: "action",
										label: "Browse all Menu Item 2.1",
										type: "route",
										page: "article",
										sys_id: "8aef1935474321009db4b5b08b9a7113",
										href: null,
									},
								],
								parent: "bde0bc68-4242-4b58-bb0f-8d54aa04781e",
								choice: "menu",
								label: "Menu Item 2.1",
								type: null,
								page: null,
								sys_id: null,
								href: null,
							},
							{
								id: "fa5ac1e1-6443-45bb-b356-37efbed8048a",
								children: [
									{
										id: "cd3cabc8-f45a-47d9-9925-0f457799fa7a",
										children: [],
										parent: "fa5ac1e1-6443-45bb-b356-37efbed8048a",
										choice: "menu",
										label: "Menu Item 2.2.1",
										type: "external",
										page: null,
										sys_id: null,
										href: "www.servicenow.com",
									},
									{
										id: "48677198-f1df-42a9-b547-6d691477790d",
										children: [],
										parent: "fa5ac1e1-6443-45bb-b356-37efbed8048a",
										choice: "action",
										label: "Browse all Menu Item 2.2",
										type: "route",
										page: "article",
										sys_id: "8aef1935474321009db4b5b08b9a7113",
										href: null,
									},
								],
								parent: "bde0bc68-4242-4b58-bb0f-8d54aa04781e",
								choice: "menu",
								label: "Menu Item 2.2",
								type: null,
								page: null,
								sys_id: null,
								href: null,
							},
							{
								id: "16cd82eb-797e-48f3-8eaa-29ea7a8cfdab",
								children: [],
								parent: "bde0bc68-4242-4b58-bb0f-8d54aa04781e",
								choice: "action",
								label: "Browse all Menu Item 2",
								type: "route",
								page: "article",
								sys_id: "8aef1935474321009db4b5b08b9a7113",
								href: null,
							},
						],
						parent: "0bbfc5ea-d804-4870-9a8d-17c484aa24eb",
						choice: "menu",
						label: "Menu Item 2",
						type: null,
						page: null,
						sys_id: null,
						href: null,
					},
					{
						id: "748ed43d-6a60-4b89-872f-80226e5dfa28",
						children: [],
						parent: "0bbfc5ea-d804-4870-9a8d-17c484aa24eb",
						choice: "action",
						label: "Perform another action",
						type: "route",
						page: "article",
						sys_id: "8aef1935474321009db4b5b08b9a7113",
						href: null,
					},
				],
				parent: null,
				choice: "menu",
				label: "Menu 2",
				type: null,
				page: null,
				sys_id: null,
				href: null,
			},
			{
				id: "cd327089-d05e-4dbf-8935-d02c96585935",
				children: [],
				parent: null,
				choice: "menu",
				label: "Direct action",
				type: "route",
				page: "article",
				sys_id: "7c8f75b5474321009db4b5b08b9a71b5",
				href: null,
			},
		],
	},
	// A chrome_menu UX Page Property value
    importJSON: {
      default: null,
    },
  },
  // Flag to track initial JSON import
  initialState: {
    initialImport: true,
  },
  // These events are handled on the UI Builder page
  actionHandlers: {
	// This event is for updating the content of an individual menu item. The label, link type, href or page/sys_id values of the item has changed
    INPUT_UPDATED: ({ action: { payload }, dispatch }) => {
      dispatch("MENU_UPDATED", {
        menu: payload,
      });
    },
	// This event is for updating an individual menu item. A new top-level or sub-level menu item has been added/deleted
    MENU_ITEM_EDITED: ({ action: { payload }, dispatch }) => {
      dispatch("TREE_UPDATED", {
        tree: payload,
      });
    },
	// Starting from a saved menu, this event is for converting the JSON structure of the chrome_menu value into the menuTree property representation
    IMPORTED_JSON: ({ action: { payload }, dispatch }) => {
      dispatch("JSON_IMPORTED", {
        json: payload,
      });
    },
  },
});
