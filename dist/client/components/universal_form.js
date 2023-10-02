(()=>{"use strict";var e={590:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.HTML_ELEM=function e(t){var n=document.createElement(t);this.addElement=function(t){var a=new e(t);return n.appendChild(a.getElement()),a},this.addClass=function(e){n.classList.add(e)},this.addAttribute=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;t?n.setAttribute(e,t):n.setAttribute(e)},this.addText=function(e){n.textContent=e},this.getElement=function(){return n}}}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,n),o.exports}(()=>{var e=n(590);(Array.from(document.querySelectorAll("[data-form-select]"))||[]).forEach((function(e){(Array.from(e.children)||[]).forEach((function(t){t.value===e.dataset.defaultValue&&(t.selected=!0)}))}));var t=document.querySelector("[data-universal-form]"),a=document.querySelector("[data-universal-notification]"),r=!1;t.addEventListener("submit",(function(n){n.preventDefault(),Array.from(a.children).forEach((function(e){return e.remove()})),function(){if(!r){r=!0;var n=new FormData(t),o={target:{},validate:{},update:{}};if(n.forEach((function(e,t){var n=document.querySelector("[name=".concat(t,"]")).dataset.defaultValue;"target"===t&&(o.target._id=e),"token"===t&&(o.validate._csrf=e),"token"!==t&&e!==n&&""!==e&&("prefered_language"===t?o.update["user_preferences.lang"]=e:o.update[t]=e)})),Object.keys(o.update).length<1)!function(t){for(var n in r=!1,t){var o=new e.HTML_ELEM("p");switch(o.addText(langData[n][t[n]][lang]),n){case"notification":o.addClass("green");break;case"error":o.addClass("red");break;default:return}a.appendChild(o.getElement())}}({error:"no_change"});else{var i=t.getAttribute("action");console.log("submit_data"),console.log(JSON.stringify(o)),fetch(i,{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(o)}).then((function(e){console.log(e),window.location.href=e.url})).catch((function(e){}))}}}()}))})()})();