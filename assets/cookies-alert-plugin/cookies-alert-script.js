
jQuery(function(){var b=jQuery,a=b("input[name=cookieData]");b.cookiesDirective({explicitConsent:!1,position:"bottom",duration:9999,limit:0,message:a.attr("data-cookie-text"),fontFamily:"Arial",fontColor:a.attr("data-cookie-colorText"),fontSize:"13px",backgroundColor:a.attr("data-cookie-colorBg"),backgroundOpacity:"",linkColor:a.attr("data-cookie-colorLink"),colorButton:a.attr("data-cookie-colorButton")});b(".cookieText").find("a").css({"text-decoration":a.attr("data-cookie-underlineLink")?"underline":
""});a.remove()});
