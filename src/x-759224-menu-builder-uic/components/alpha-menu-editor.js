import { createCustomElement } from "@servicenow/ui-core";
import snabbdom, { Fragment } from "@servicenow/ui-renderer-snabbdom";
import styles from "../styles/alpha-menu-editor.scss";
import "@servicenow/now-button";

// File description: This is the editor bar to create new top-level menu items and actions, or delete everything.

const view = () => {
  return (
    <Fragment>
      <div>
        {/*
		  * append-to-meta is used to differentiate which now-button was clicked as they all use the same action 
		  */}
        <now-button
          label=""
          variant="primary"
          size="md"
          icon="undo-top-fill"
          tooltip-content="Undo"
          append-to-meta={{ elementId: "undo" }}
        ></now-button>
        <now-button
          label=""
          variant="primary"
          size="md"
          icon="redo-top-fill"
          tooltip-content="Redo"
          append-to-meta={{ elementId: "redo" }}
        ></now-button>
        <now-button
          label="Action"
          variant="primary"
          size="md"
          icon="circle-plus-outline"
          tooltip-content="Add Action"
          append-to-meta={{ elementId: "action" }}
        ></now-button>
        <now-button
          label="Menu"
          variant="primary"
          size="md"
          icon="circle-plus-outline"
          tooltip-content="Add Menu"
          append-to-meta={{ elementId: "menu" }}
        ></now-button>
        <now-button
          label="Delete All"
          variant="primary-negative"
          size="md"
          icon="trash-outline"
          tooltip-content="Delete All"
          append-to-meta={{ elementId: "delete_all" }}
        ></now-button>
      </div>
    </Fragment>
  );
};

/* 
 * Toolbar of buttons to create new top-level menu items in a menu
 */
createCustomElement("alpha-menu-editor", {
  renderer: { type: snabbdom },
  view,
  styles,
  actionHandlers: {
    "NOW_BUTTON#CLICKED": ({
      action: {
        meta: {
          appended: { elementId },
        },
      },
      dispatch,
    }) => {
      // Dispatch back to menu-builder component the new menu item information
      dispatch("MENU_ITEM_EDITED", {
        id: crypto.randomUUID(), // Generate a random ID for the new menu item
        choice: elementId, // Set the choice to the elementId (e.g., "action", "menu", "delete_all")
        parent: null, // Set the parent to null (it's a top-level menu item)
      });
    },
  },
});
