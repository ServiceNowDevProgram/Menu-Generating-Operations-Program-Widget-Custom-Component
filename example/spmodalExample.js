//A simple function to create a delcaration popup via Catalog Client Script.
function onLoad() {

	spModal.open({
    title: 'Declaration',
		message: "I hereby declared that all files submitted are personally checked and thus this action task can be closed",
		noDismiss: true,
    backdrop: 'static',
		size: "md",
		buttons: [
			{label:'I Agree', primary: true},
		]
	}).then(function(ans){
		if (ans.label == "I Agree"){
			//set task closure - state change, translates to activity stream audit trail
		} 
	});

}
