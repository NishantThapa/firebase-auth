export function setCookie(cname, cvalue, expires_in) {
    let d = new Date();
    let expires = "";
    if (expires) {
      d.setTime(d.getTime() + expires);
      expires = "expires=" + d.toUTCString();
    }
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  export function getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
  export function deleteCookie(name) {
    setCookie(name, "", -1);
  }