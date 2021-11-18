document.addEventListener('DOMContentLoaded', function(event) {
    var traf_helper = {
        get_q: function (e) {
            var t = window.location.search;
            return t = t.match(new RegExp(e + "=([^&=]+)")), t ? t[1] : "";
        },
        setCookie: function (e, t, n) {
            n = {
                expires: 2678400,
                domain: window.location.host,
                path: "/"
            };
            var o = n.expires;
            if ("number" === typeof o && o) {
                var r = new Date;
                r.setTime(r.getTime() + 1000 * o), o = n.expires = r;
            }
            o && o.toUTCString && (n.expires = o.toUTCString()), t = encodeURIComponent(t);
            var i = e + "=" + t;
            for (var a in n) {
                i += "; " + a;
                var c = n[a];
                c !== !0 && (i += "=" + c);
            }
            document.cookie = i;
        },
        getCookie: function (e) {
            var t = document.cookie.match(new RegExp("(?:^|; )" + e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
            return t ? decodeURIComponent(t[1]) : void 0;
        }
    };

    var traf_int = {
        utm_source: 'utm_source',//метка, которую проверяем
        utm_value: 'tf',//значение метки, которое говорит, что это перфлюенс
        utm_cookie: 'tf_url',//название куки, в которую сохраняем ссылку
        pb_cookie: 'tf_pb',//название куки, в которую сохраняем время отправки постбэка
        checkTrafUtm: function () {
            return traf_helper.get_q(traf_int.utm_source) === traf_int.utm_value;
        },
        checkTrafCookie: function () {
            if (traf_int.checkTrafUtm()) {
                traf_helper.setCookie(traf_int.utm_cookie, location.href);
            }
            return traf_helper.getCookie(traf_int.utm_cookie) || '';
        }
    }
    console.log("Traf tool loaded");
    var url = traf_int.checkTrafCookie();
    var wallet = document.querySelector(".head-wallet__container .head-wallet__key");
    if (url.length > 0 && wallet && !traf_helper.getCookie(traf_int.pb_cookie)) {
        console.log("https://t.trfl.me/p/13?id="+encodeURIComponent(wallet.innerText)+"&url="+encodeURIComponent(url));
        (new Image()).src = "https://t.trfl.me/p/13?id="+encodeURIComponent(wallet.innerText)+"&url="+encodeURIComponent(url);
        traf_helper.setCookie(traf_int.pb_cookie, new Date().toISOString());
    }
});