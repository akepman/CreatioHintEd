 
async function loadScript(url, callback) //hinted
{
	
    var head = document.head;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.setAttribute('isspa', 'true');
    script.setAttribute('spaselector', 'body');
    script.setAttribute('organizationId', '922db638-98a5-42a3-996e-64dfe56b812c');
	script.setAttribute('host', 'https://hinted.me/api');
    script.onreadystatechange = callback;
    script.onload = callback;
    head.appendChild(script);
}
var hint = function() {
	HintedWidget.player.setLocale('ru');
};
loadScript("https://hinted.me/script.js", hint);

//loadScript("https://hinted.me/logic/croc/hinted-ondemand-widget.min.js", hint);
//loadScript("https://hinted.me/script.js", hint);