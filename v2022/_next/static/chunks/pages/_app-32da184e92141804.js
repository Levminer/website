(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1780:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(4994)}])},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(c){l=!0,a=c}finally{try{i||null==r.return||r.return()}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var o,i=(o=r(7294))&&o.__esModule?o:{default:o},l=r(6273),c=r(387),s=r(7190);var u={};function f(e,t,r,n){if(e&&l.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(a?"%"+a:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=c.useRouter(),o=i.default.useMemo((function(){var t=a(l.resolveHref(n,e.href,!0),2),r=t[0],o=t[1];return{href:r,as:e.as?l.resolveHref(n,e.as):o||r}}),[n,e.href,e.as]),d=o.href,h=o.as,m=e.children,p=e.replace,x=e.shallow,v=e.scroll,g=e.locale;"string"===typeof m&&(m=i.default.createElement("a",null,m));var y=(t=i.default.Children.only(m))&&"object"===typeof t&&t.ref,b=a(s.useIntersection({rootMargin:"200px"}),2),j=b[0],w=b[1],N=i.default.useCallback((function(e){j(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,j]);i.default.useEffect((function(){var e=w&&r&&l.isLocalURL(d),t="undefined"!==typeof g?g:n&&n.locale,a=u[d+"%"+h+(t?"%"+t:"")];e&&!a&&f(n,d,h,{locale:t})}),[h,d,w,g,r,n]);var k={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,i,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),t[a?"replace":"push"](r,n,{shallow:o,locale:c,scroll:i}))}(e,n,d,h,p,x,v,g)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l.isLocalURL(d)&&f(n,d,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var _="undefined"!==typeof g?g:n&&n.locale,L=n&&n.isLocaleDomain&&l.getDomainLocale(h,_,n&&n.locales,n&&n.domainLocales);k.href=L||l.addBasePath(l.addLocale(h,_,n&&n.defaultLocale))}return i.default.cloneElement(t,k)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(c){l=!0,a=c}finally{try{i||null==r.return||r.return()}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!l,u=o.useRef(),f=a(o.useState(!1),2),d=f[0],h=f[1],m=a(o.useState(t?t.current:null),2),p=m[0],x=m[1],v=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||d||e&&e.tagName&&(u.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=s.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=c.get(n):(t=c.get(r),s.push(r));if(t)return t;var a=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(r,t={id:r,observer:o,elements:a}),t}(r),a=n.id,o=n.observer,i=n.elements;return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),c.delete(a);var t=s.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));t>-1&&s.splice(t,1)}}}(e,(function(e){return e&&h(e)}),{root:p,rootMargin:r}))}),[n,p,r,d]);return o.useEffect((function(){if(!l&&!d){var e=i.requestIdleCallback((function(){return h(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){t&&x(t.current)}),[t]),[v,d]};var o=r(7294),i=r(9311),l="undefined"!==typeof IntersectionObserver;var c=new Map,s=[]},4994:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(5893),a=r(9008),o=r(1163),i=r(1664),l=function(){var e=(0,o.useRouter)();return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("header",{className:"sticky top-0 z-50 bg-gray-900 text-gray-50",children:(0,n.jsxs)("div",{className:"lex-shrink-0 container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row",children:[(0,n.jsx)("span",{className:"title-font mb-4 flex items-center font-medium text-white md:mb-0",children:(0,n.jsx)("span",{children:(0,n.jsx)(i.default,{href:"/",children:(0,n.jsx)("a",{className:"text-xl",children:"Levminer"})})})}),(0,n.jsxs)("nav",{className:"flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto",children:[(0,n.jsx)(i.default,{href:"/",children:(0,n.jsx)("a",{className:"mr-5 text-2xl duration-200 ease-in hover:text-gray-300",id:"/"==e.pathname?"activeLink":"",children:"Home"})}),(0,n.jsx)(i.default,{href:"/projects",children:(0,n.jsx)("a",{className:"mr-5 text-2xl duration-200 ease-in hover:text-gray-300",id:"/projects"==e.pathname?"activeLink":"",children:"Projects"})}),(0,n.jsxs)("div",{className:"dropdown relative",children:[(0,n.jsx)("button",{className:"mr-5 text-2xl",children:(0,n.jsx)("h1",{className:"mr-1 duration-200 ease-in hover:text-gray-300",children:"More"})}),(0,n.jsxs)("ul",{className:"dropdown-menu animation absolute z-50 hidden rounded-lg bg-gray-700 text-white",children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{className:"block whitespace-nowrap rounded-t-lg py-2 px-8 duration-200 ease-in hover:bg-gray-600",target:"_blank",href:"https://link.levminer.com/wp",rel:"noopener",children:"Warriors Pack"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{className:"block whitespace-nowrap py-2 px-8 duration-200 ease-in hover:bg-gray-600",target:"_blank",href:"https://developer.levminer.com",rel:"noopener",children:"Developer"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{className:"block whitespace-nowrap rounded-b-lg py-2 px-8 duration-200 ease-in hover:bg-gray-600",target:"_blank",href:"https://games.levminer.com",rel:"noopener",children:"Games"})})]})]}),(0,n.jsx)(i.default,{href:"/about",children:(0,n.jsx)("a",{className:"mr-5 text-2xl duration-200 ease-in hover:text-gray-300",id:"/about"==e.pathname?"activeLink":"",children:"About"})})]}),(0,n.jsx)("button",{className:"button mt-5 md:mt-0",children:(0,n.jsx)("a",{target:"_blank",rel:"noopener",href:"mailto:contact@levminer.com",children:"Contact"})})]})})})},c=function(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("footer",{className:"bg-gray-900",children:(0,n.jsxs)("div",{className:"mx-auto p-6",children:[(0,n.jsxs)("div",{className:"mb-3 flex w-full items-center justify-center gap-3",children:[(0,n.jsx)("a",{className:"text-2xl duration-200 ease-in hover:text-gray-300",target:"_blank",rel:"noopener",href:"https://www.levminer.com/policies/privacy",children:"Privacy"}),(0,n.jsx)("a",{className:"text-2xl duration-200 ease-in hover:text-gray-300",target:"_blank",rel:"noopener",href:"https://www.levminer.com/policies/terms",children:"Terms"})]}),(0,n.jsx)("div",{className:"flex",children:(0,n.jsx)("div",{className:"mb-3 w-full",children:(0,n.jsxs)("div",{className:"flex items-center justify-center gap-3",children:[(0,n.jsx)("a",{href:"https://twitter.com/levminer92",rel:"noopener",target:"_blank",className:"duration-200 ease-in hover:text-gray-300","aria-label":"Twitter",children:(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8",fill:"currentColor",viewBox:"0 0 512 512",children:[(0,n.jsx)("title",{children:"Twitter Logo"}),(0,n.jsx)("path",{d:"M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"})]})}),(0,n.jsx)("a",{href:"mailto:levminer@levminer.com",rel:"noopener",target:"_blank",className:"duration-200 ease-in hover:text-gray-300","aria-label":"Email",children:(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8",fill:"currentColor",viewBox:"0 0 512 512",children:[(0,n.jsx)("title",{children:"Email Logo"}),(0,n.jsx)("path",{d:"M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z"})]})}),(0,n.jsx)("a",{href:"https://github.com/levminer",rel:"noopener",target:"_blank",className:"duration-200 ease-in hover:text-gray-300","aria-label":"GitHub",children:(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8",fill:"currentColor",viewBox:"0 0 512 512",children:[(0,n.jsx)("title",{children:"Github Logo"}),(0,n.jsx)("path",{d:"M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"})]})})]})})}),(0,n.jsx)("div",{children:(0,n.jsx)("h3",{className:"text-center text-2xl",children:"Copyright \xa9 2022 L\u0151rik Levente"})})]})})})};r(906);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}var f=function(e){var t=e.Component,r=e.pageProps;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.default,{children:[(0,n.jsx)("title",{children:"Levminer"}),(0,n.jsx)("meta",{charSet:"UTF-8"}),(0,n.jsx)("meta",{name:"description",content:"Levminer's website - Websites and Desktop apps"}),(0,n.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,n.jsx)("link",{rel:"shortcut icon",href:"favicon.ico",type:"image/x-icon"})]}),(0,n.jsx)(l,{}),(0,n.jsx)(t,u({},r)),(0,n.jsx)(c,{})]})}},906:function(){},9008:function(e,t,r){e.exports=r(5443)},1664:function(e,t,r){e.exports=r(8418)},1163:function(e,t,r){e.exports=r(387)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(387)}));var r=e.O();_N_E=r}]);