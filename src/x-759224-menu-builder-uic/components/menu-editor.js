import { createCustomElement } from "@servicenow/ui-core";
import snabbdom, { Fragment } from "@servicenow/ui-renderer-snabbdom";
import styles from "../styles/menu-editor.scss";
import "@servicenow/now-split-button";

// File description: This is similar to the alpha-menu-editor, but this creates sub-level menu items or actions for an existing menu item.

const view = () => {
	return (
		<Fragment>
			<now-dropdown
				items={[
					{ id: "add_child_action", label: "Add Child Action" },
					{ id: "add_child_menu", label: "Add Child Menu" },
				]}
				variant="tertiary"
				selected-items={[]}
				select="none"
				placeholder=""
				icon="circle-plus-outline"
				size="lg"
				bare={true}
				hide-caret={true}
				tooltip-content="Add a child menu or action"
				panel-fit-props={{}}
				config-aria={{}}
				search="none"
			></now-dropdown>
		</Fragment>
	);
};

// Dropdown button to add a child menu or action to the selected menu item
createCustomElement("menu-editor", {
	renderer: { type: snabbdom },
	view,
	styles,
	properties: {
		// Id of the parent menu item
		parent: {
			default: null,
		},

		expandParent: {
			default: null,
		}
	},
	actionHandlers: {
		"NOW_DROPDOWN#ITEM_CLICKED": ({
			action: {
				payload: { item },
			},
			properties: { parent, expandParent },
			dispatch,
		}) => {
			let choice = "";
			switch (item.id) {
				case "add_child_action":
					choice = "action";
					break;
				case "add_child_menu":
					choice = "menu";
					break;
				default:
					choice = "menu";
			}

			const eventPayload = {
				id: crypto.randomUUID(), // Generate a random ID for the new menu item
				parent, // Set the parent to the value from the prop (this is a sub-level menu item)
				choice, // Set the choice to the item.id (e.g., "action", "menu")
			};

			// Dispatch back to menu-builder component the new menu item information
			dispatch("MENU_ITEM_EDITED", eventPayload);
			expandParent();
		},
	},
});
