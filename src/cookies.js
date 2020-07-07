// https://www.quirksmode.org/js/cookies.html

export default {
  set: function (name, value, ttl, domain, path) {
    let expires = "";
    let cookieDomain = "";
    let cookiePath = "";

    if (ttl) {
      let date = new Date();
      date.setTime(date.getTime() + (ttl * 60 * 1000));
      expires = "; expires=" + date.toGMTString();
    }
    if (domain) {
      cookieDomain = "; domain=" + domain;
    }

    if (path) {
      cookiePath = "; path=" + path
    } else {
      cookiePath = "; path=/"
    }

    document.cookie = name + "=" + escape(value) + expires + cookieDomain + cookiePath;
  },
  get: function (name) {
    let i, c;
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (i = 0; i < ca.length; i++) {
      c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) === 0) {
        return unescape(c.substring(nameEQ.length, c.length));
      }
    }
    return null;
  }
};
