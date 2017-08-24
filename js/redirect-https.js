var host = "appiko.org";
if ((host == window.location.host) && (window.location.protocol != 'https:')) {
	window.location = window.location.toString().replace(/^http:/, "https:");
}
