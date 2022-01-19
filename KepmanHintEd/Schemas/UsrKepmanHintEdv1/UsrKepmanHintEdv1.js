 function getOpt(optName) {
	return new Promise(function (resolve, reject) {
		this.Terrasoft.SysSettings.querySysSettingsItem(optName, function (val) {
			if(val) resolve(val);
			else reject();
		});
	});
}
