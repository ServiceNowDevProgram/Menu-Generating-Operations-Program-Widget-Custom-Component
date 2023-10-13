import { createCustomElement } from "@servicenow/ui-core";
import snabbdom, { Fragment } from "@servicenow/ui-renderer-snabbdom";
import styles from "../styles/menu-tree.scss";
import "@servicenow/now-button";
import "@servicenow/now-collapse";
import "./menu-item";

// File description: This displays a top-level menu item (and child items), expand/collapse functionality for the container


const view = ({ properties: { tree }, expanded }, { updateState }) => {
	const { id, children, parent, choice, label, type, page, sys_id, href } =
		tree;

	const hasChildren = children && children.length > 0;

	const EXPAND_PARENT = () => {
		updateState({
			expanded: true,
		});
	}

	return (
		<Fragment>
			<div>
				{/* Render a button to expand/collapse menu items if they have children */}
				{hasChildren ? (
					<now-button-iconic
						icon={!expanded ? "chevron-down-fill" : "chevron-up-fill"}
						bare={true}
						append-to-meta={{ action: "collapse", id: tree.id }}
					></now-button-iconic>
				) : null}
				<menu-item
					id={id}
					parent={parent}
					choice={choice}
					label={label}
					type={type}
					page={page}
					sysId={sys_id}
					href={href}
					className="menu-item"
					expandParent={EXPAND_PARENT}
				></menu-item>
			</div>
			{/* Render child menu items in a collapsible container if they exist */}
			{hasChildren ? (
				<ul>
					<now-collapse expanded={expanded}>
						{children.map((child) => {
							return <menu-tree key={child.id} tree={child}></menu-tree>;
						})}
					</now-collapse>
				</ul>
			) : null}
		</Fragment>
	);
};

createCustomElement("menu-tree", {
	renderer: { type: snabbdom },
	view,
	styles,
	properties: {
		// An individual object / item from the menuTree property of the menu-builder component
		tree: {
			default: {},
		},
	},
	initialState: {
		expanded: true,
	},
	actionHandlers: {
		"NOW_BUTTON_ICONIC#CLICKED": ({
			properties: { tree },
			state: { expanded },
			action: {
				meta: {
					appended: { id, action },
				},
			},
			updateState,
		}) => {
			/**
			 * Check which button instance was pressed, since this event will fire multiple times
			 * If child button is pressed, this event will fire twice for child and then its parent
			 * But only want the child menu to collapse/expand in that scenario
			 */
			if (id === tree.id && action === "collapse")
				updateState({
					expanded: !expanded,
				});
		},
	},
});
