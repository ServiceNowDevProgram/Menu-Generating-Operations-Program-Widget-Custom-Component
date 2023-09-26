import { createCustomElement } from "@servicenow/ui-core";
import snabbdom, { Fragment } from "@servicenow/ui-renderer-snabbdom";
import styles from "../styles.scss";
import "./alpha-menu-editor";
import "./menu-tree";

const view = ({ properties: { menuTree } }) => {
	return (
		<Fragment>
			<alpha-menu-editor></alpha-menu-editor>
			{menuTree.map((tree) => {
				return (
					<ul key={tree.id}>
						<menu-tree tree={tree}></menu-tree>
					</ul>
				);
			})}
		</Fragment>
	);
};

createCustomElement("menu-ui", {
	renderer: { type: snabbdom },
	view,
	styles,
	properties: {
		/*
		 * Passed from the menu-builder component
		 * Will be empty when creating a new menu
		 * Will have a value if starting from a saved menu (importJSON property is not empty)
		 */
		menuTree: {
			default: [],
		},
	},
});
