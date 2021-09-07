const getCookie = (cname:string,cookies:any): (string | null )=> {
	var name = cname + "=";
	var ca = cookies.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
		c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
		}
	}
	return null;
}

export default {getCookie};