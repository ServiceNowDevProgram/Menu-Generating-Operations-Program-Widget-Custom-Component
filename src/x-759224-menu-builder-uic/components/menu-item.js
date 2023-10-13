import { createCustomElement } from "@servicenow/ui-core";
import snabbdom, { Fragment } from "@servicenow/ui-renderer-snabbdom";
import styles from "../styles/menu-item.scss";
import "@servicenow/now-button";
import "@servicenow/now-collapse";
import "@servicenow/now-dropdown";
import "@servicenow/now-input";
import "./menu-editor";

// File description: This is where to configure all the details about a menu item, such as its name, link, or delete

const view = (
	{
		properties: { id, choice, label, type, page, sysId, href, expandParent },
		labelInput,
		typeInput,
		pageInput,
		sysIdInput,
		hrefInput,
		editMode,
	},
	{ dispatch }
) => {

	/* Set these based off of state or props
	 * If it's an import, then it will use props
	 * But once any input field is edited, or it's a new menu, then it will use state values
	 */
	const labelValue = labelInput || label;
	const typeValue = typeInput || type;
	const pageValue = pageInput || page;
	const sysIdValue = sysIdInput || sysId;
	const hrefValue = hrefInput || href;

	// This is constructing the JSON output that the chrome_menu UX Page Property expects for this specific menu item

	const routeJSON = {
		route: pageValue,
		fields: {
			sysId: sysIdValue,
		},
	};

	const externalJSON = {
		href: hrefValue,
	};

	const actionJSON = {
		value: {
			label: {
				translatable: true,
				message: labelValue,
			},
		},
	};

	if (typeValue) {
		actionJSON.value.type = typeValue;
		actionJSON.value.value = typeValue === "route" ? routeJSON : externalJSON;
	}

	// Let the menu-builder component know that the content of the menu item has changed
	dispatch("INPUT_UPDATED", {
		id,
		actionJSON,
	});

	return (
		<li className="menu-item">
			<div className="leftMenu">
				<now-button-iconic
					icon={editMode ? "gear-fill" : "gear-outline"}
					bare={true}
					append-to-meta={{ action: "edit" }}
				></now-button-iconic>
				<span data-choice={choice}>{choice}</span>
			</div>
			<div className="midMenu">
				<now-input
					size="md"
					helper-content=""
					label="Label"
					messages={[]}
					placeholder=""
					step="any"
					type="text"
					value={labelValue}
					name="labelInput"
					readonly={!editMode}
				></now-input>
				<now-dropdown
					items={[
						{ id: "external", label: "External Link" },
						{ id: "route", label: "Internal Link" },
					]}
					selectedItems={[typeValue]}
					name="typeInput"
					select="single"
					placeholder=""
					icon=""
					variant="secondary"
					size="md"
					bare={true}
					tooltip-content="Select internal or external link"
					panel-fit-props={{}}
					show-padding={true}
					config-aria={{}}
					disabled={!editMode}
					search="none"
				></now-dropdown>
			</div>
			<div className="rightMenu">
				<menu-editor parent={id} expandParent={expandParent}></menu-editor>
				<now-collapse expanded={editMode}>
					<div>
						{typeValue == "route" ? (
							<Fragment>
								<now-input
									size="md"
									helper-content=""
									label="Page"
									messages={[]}
									placeholder=""
									step="any"
									type="text"
									value={pageValue}
									name="pageInput"
									readonly={!editMode}
								></now-input>
								<now-input
									size="md"
									helper-content=""
									label="sys_id"
									messages={[]}
									placeholder=""
									step="any"
									type="text"
									value={sysIdValue}
									name="sysIdInput"
									readonly={!editMode}
								></now-input>
							</Fragment>
						) : null}
						{typeValue == "external" ? (
							<now-input
								size="md"
								helper-content=""
								label="HREF"
								messages={[]}
								placeholder=""
								step="any"
								type="text"
								value={hrefValue}
								name="hrefInput"
								readonly={!editMode}
							></now-input>
						) : null}
						<now-button-iconic
							icon="trash-fill"
							bare={true}
							className="trashFilled"
							size="md"
							variant="inherit"
							append-to-meta={{ action: "delete", id }}
						></now-button-iconic>
					</div>
				</now-collapse>
			</div>
		</li>
	);
};

// Inputs for the individual menu item. Here is where you can configure the different aspects of the menu item like its name, link type, etc.
createCustomElement("menu-item", {
	renderer: { type: snabbdom },
	view,
	styles,
	// Used if menu is imported (choosing to start from a saved menu rather than creating a new menu)
	properties: {
		id: {
			default: "",
		},
		parent: {
			default: "",
		},
		choice: {
			default: "",
		},
		label: {
			default: undefined,
		},
		type: {
			default: undefined,
		},
		page: {
			default: undefined,
		},
		sysId: {
			default: undefined,
		},
		href: {
			default: undefined,
		},
		expandParent: {
			default: undefined
		}
	},
	// Keeps track of any changes made during editing
	initialState: {
		labelInput: undefined,
		typeInput: undefined,
		pageInput: undefined,
		sysIdInput: undefined,
		hrefInput: undefined,
		editMode: false,
	},
	actionHandlers: {
		"NOW_DROPDOWN_LIST#ITEM_CLICKED": ({
			action: { payload },
			updateState,
		}) => {
			/**
			 * Only handle this event if called from this component
			 * Since menu-editor also uses this event
			 */
			switch (payload.item.id) {
				case "route":
				case "external":
					updateState({ typeInput: payload.item.id });
					break;
				default:
			}
		},
		// Text input field has changed (someone typed in the field or cleared value for example)
		"NOW_INPUT#INPUT": ({ action: { payload }, updateState }) => {
			updateState({ [payload.name]: payload.fieldValue });
		},
		"NOW_BUTTON_ICONIC#CLICKED": ({
			action: {
				meta: {
					appended: { action },
				},
			},
			properties: { parent, id },
			state: { editMode },
			dispatch,
			updateState,
		}) => {
			if (action === "delete") {
				const eventPayload = {
					id, // id of item to delete
					parent, // id of parent so it can remove this item from its children array
					choice: null, // no action or menu being added
					isDelete: true,
				};
				// Let menu-builder component know a menu item has been deleted
				dispatch("MENU_ITEM_EDITED", eventPayload);
			}

			if (action === "edit") {
				// Toggle edit mode. The inputs are read-only if edit mode is disabled
				updateState({
					editMode: !editMode,
				});
			}
		},
	},
});
