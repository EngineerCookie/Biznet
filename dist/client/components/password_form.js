(()=>{"use strict";var e,a,s,n,r,o,t,i={590:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.HTML_ELEM=function e(a){var s=document.createElement(a);this.addElement=function(a){var n=new e(a);return s.appendChild(n.getElement()),n},this.addClass=function(e){s.classList.add(e)},this.addAttribute=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;a?s.setAttribute(e,a):s.setAttribute(e,"")},this.addText=function(e){s.textContent=e},this.addStyle=function(e,a){s.style[e]=a},this.getElement=function(){return s}}},428:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.INPUT_CHECK=function(e){var a=e;this.checkLength=function(e){return a.trim().length>=e},this.checkEmpty=function(){return""===a||!a},this.checkSpace=function(){return!!/\s/.test(a)},this.checkLetter=function(){return!!/[A-Za-z]/.test(a)},this.checkNum=function(){return!!/[0-9]/.test(a)},this.checkSpecial=function(){return!/^[a-zA-Z0-9_\-\.]+$/.test(a)}}},805:e=>{e.exports=JSON.parse('{"header":{"search_bar":{"en":"search","es":"buscar"},"login":{"en":"LOGIN","es":"ENTRAR"},"navbar":{"home":{"en":"Home","es":"Inicio"},"catalog":{"en":"Catalog","es":"Catálogo"},"deals":{"en":"Deals","es":"Ofertas"},"return_search_results":{"en":"Return to search results","es":"Volver a los resultados de busqueda"}}},"profile":{"en":"Profile","es":"Perfil","title":{"en":"User Profile","es":"Perfil de Usuario"},"login":{"en":"Login","es":"Iniciar sesión"},"logout":{"en":"Logout","es":"Cerrar sesión"},"username":{"en":"Username","es":"Nombre de usuario"},"username_edit":{"en":"Username can not be changed","es":"No se puede cambiar el nombre de usuario"},"new_username":{"en":"New username","es":"Nuevo usuario"},"password":{"en":"Password","es":"Contraseña"},"password_confirm":{"en":"Confirm password","es":"Confirme la contraseña"},"password_forgot":{"en":"Forgot password?","es":"¿Olvidó su contraseña?"},"password_change":{"en":"Change Password","es":"Cambiar contraseña"},"password_current":{"en":"Current Password","es":"Contraseña actual"},"password_new":{"en":"New Password","es":"Nueva contraseña"},"password_new_confirm":{"en":"Confirm New Password","es":"Confirme nueva contraseña"},"username_requirement_title":{"en":"Username requirements:","es":"Requerimientos para el nombre de usuario:"},"username_requirement":[{"key":"length","en":"Four(4) or more characters.","es":"Cuatro(4) o más caracteres."},{"key":"spaces","en":"No blank spaces.","es":"Sin espacios en blanco."},{"key":"special","en":"No special characters. Exceptions: - _ . ","es":"Ningún caracter especial. Excepción: - _ . "}],"password_requirement_title":{"en":"Password requirements:","es":"Requerimientos para la contraseña:"},"password_requirement":[{"key":"length","en":"Six(6) or more characters.","es":"Seis(6) o más caracteres."},{"key":"letter","en":"At least one(1) letter.","es":"Al menos una(1) letra."},{"key":"number","en":"At least one(1) number.","es":"Al menos un(1) número."},{"key":"spaces","en":"No blank spaces.","es":"Sin espacios en blanco."}],"sign_up":{"en":"Create new account","es":"Crear una cuenta nueva"},"confirm":{"en":"Confirm","es":"Confirmar"},"cancel":{"en":"Cancel","es":"Cancelar"},"redirect_login":{"text":{"en":"Already have an account? ","es":"¿Ya tienes una cuenta? "},"link":{"en":"Log in","es":"Inicia sesión"}},"redirect_register":{"text":{"en":"Don\'t have an account? ","es":"¿No tienes una cuenta? "},"link":{"en":"Sign up","es":"Regístrate"}},"greeting":{"en":"Hello! ","es":"¡Hola! "},"edit":{"en":"Edit Profile","es":"Editar Perfil"},"profile_prefix":{"en":"","es":"Perfil de "},"profile_suffix":{"en":"\'s profile","es":""},"profile_name":{"en":"Profile Name","es":"Nombre de perfil"},"profile_name_change":{"en":"Change profile name","es":"Cambiar nombre de perfil"},"language_pref":{"en":"Language preference ","es":"Preferencia de lenguaje "},"language_pref_change":{"en":"Change language preference","es":"Cambiar lenguaje de preferencia"},"language_sel":{"en":"English","es":"Español"},"save_changes":{"en":"Save Changes","es":"Guardar cambios"}},"main":{"best_seller":{"en":"Best Seller","es":"Los más vendidos"},"deals_day":{"en":"Deals of the Day","es":"Ofertas del día"},"search_filter":{"sort_title":{"en":"Sort by:","es":"Ordenar por:"},"sort_options":{"price_ascending":{"en":"Price: 0 -> 9","es":"Precio: 0 -> 9"},"price_descending":{"en":"Price: 9 -> 0","es":"Precio: 9 -> 0"},"alphabetical_ascending":{"en":"Name: A -> Z","es":"Nombre: A -> Z"},"alphabetical_descending":{"en":"Name: Z -> A","es":"Nombre: Z -> A"}},"by_name":{"en":"By name","es":"Por nombre"},"by_price":{"en":"By price range","es":"Por rango de precio"},"by_category":{"en":"By category","es":"Por categoría","select":{"en":"Select a category","es":"Selecciona una categoría"}},"by_brand":{"en":"By brand","es":"Por marca","select":{"en":"Select a brand","es":"Selecciona una marca"}},"by_tags":{"en":"By tags","es":"Por etiquetas"},"on_sale":{"en":"On sale","es":"En descuento"},"best_seller":{"en":"Best seller","es":"Más vendidos"},"clear_fields":{"en":"Clear search fields","es":"Despejar campos de búsqueda"}},"similar_brand":{"en":"More products from the same brand","es":"Más productos de la misma marca"},"similar_other":{"en":"Similar products","es":"Otros productos similares"},"more_products":{"en":"Other products that might interest you","es":"Otros productos que te podrían interesar"}},"error":{"required_field":{"en":"This field is required.","es":"Este campo es obligatorio."},"javascript_disabled":{"en":"This website uses JavaScript primarily to fetch data from database in order to display it on the browser. With JavaScript disabled, this website will not be able to work as intended.","es":"Este sitio web utiliza JavaScript principalmente para recibir datos desde una base de datos y mostrarlo en el navegador. Con JavaScript desabilitado, este sitio web no podrá funcionar de manera correcta."},"confirm_password":{"en":"Password and Confirm Password mismatch. Make sure both Password and Confirm Password fields contain the same information.","es":"Los campos de Contraseña y Confirme la contraseña no son iguales. Asegurese de que ambos campos contengan la misma información."},"username_prefix":{"en":"The username ","es":"El nombre de usuario "},"username_space":{"en":"The username can not contain any spaces.","es":"El nombre de usuario no puede tener espacios."},"username_in_use":{"en":" is already in use.","es":" ya está en uso."},"username_special":{"en":"Username can not contain special characters. The exeptions are hyphen (-), Underline (_), and period (.).","es":"El nombre de usuario no puede contener caracteres especiales. Las excepciones son el guión (-), el guión bajo (_) y el punto (.)."},"username_length":{"en":"Username must be four (4) or more characters long.","es":"El nombre de usuario debe tener cuatro (4) caracteres o más."},"password_space":{"en":"Password can\'t contain any spaces.","es":"La contraseña no puede contener espacios."},"password_letter":{"en":"Password must contain at least one (1) letter.","es":"La contraseña debe de contener al menos una (1) letra."},"password_number":{"en":"Password must contain at least one (1) number.","es":"La contraseña debe de contener al menos un (1) número."},"password_length":{"en":"Password must contain at least six (6) or more characters.","es":"La contraseña debe de contener al menos seis (6) caracteres o más."},"invalid_login":{"en":"Invalid username and/or password.","es":"Nombre de usuario y/o contraseña no válido."},"wrong_password":{"en":"Current Password is incorrect.","es":"Su contraseña actual es incorrecto."},"unexpected_error":{"en":"Something went wrong. Please try again later.","es":"Algo salió mal. Porfavor intentelo nuevamente más tarde."},"save_fail":{"en":"Changes could not be saved.","es":"Los cambios no pudieron ser guardados."},"no_change":{"en":"No changes were made.","es":"No se ha realizado ningún cambio."}},"notification":{"save_success":{"en":"Changes has been saved successfully.","es":"Los cambios han sido guardados satisfactoriamente."},"account_disclaimer_prefix":{"en":"Notice: While we take great care to secure and encrypt users\' information, please ","es":"Nota: Aún cuando nos esforzamos por mantener la información de los usuarios encriptados y de manera segura, por favor "},"account_disclaimer":{"en":"AVOID USING ","es":"EVITE UTILIZAR "},"account_disclaimer_suffix":{"en":"credentials that you are already using on other websites or platforms.","es":"información que usted esté utilizando actualmente en otras plataformas o sitios web."}}}')}},c={};function d(e){var a=c[e];if(void 0!==a)return a.exports;var s=c[e]={exports:{}};return i[e](s,s.exports,d),s.exports}a=(e=d(805))&&e.__esModule?e:{default:e},s=d(590),n=d(428),r=document.querySelector("[data-universal-form]"),o=document.querySelectorAll("[data-form-notification]"),t=!1,r.addEventListener("submit",(function(e){e.preventDefault(),o.forEach((function(e){Array.from(e.children).forEach((function(e){return e.remove()}))})),function(e){if(!t){t=!0;var o,i=new FormData(e),c=i.get("password_current"),d=[];new n.INPUT_CHECK(c).checkEmpty()&&d.push("required_field"),d.length>0&&((o=o||{}).password_current=d);var u=i.get("password_new"),l=i.get("password_new_confirm"),m=new n.INPUT_CHECK(u),p=[],f=[];if(m.checkEmpty()&&p.push("required_field"),m.checkLength(6)||p.push("password_length"),m.checkLetter()||p.push("password_letter"),m.checkNum()||p.push("password_number"),m.checkSpace()&&p.push("password_space"),p.length>0&&((o=o||{}).password_new=p),u!==l&&f.push("confirm_password"),f.length>0&&((o=o||{}).password_new_confirm=f),o)!function(e){var n=document.documentElement.lang;t=!1;var r=function(){var r=document.querySelector("[data-form-notification=".concat(o,"]"));e[o].forEach((function(e){var o=new s.HTML_ELEM("p");o.addText(a.default.error[e][n]),o.addClass("error_notification"),r.appendChild(o.getElement())}))};for(var o in e)r()}(o);else{var h={validate:{},update:{}};i.forEach((function(e,a){switch(a){case"password_current":h.validate.password=e;break;case"token":h.validate._csrf=e;break;case"password_new":h.update.password=e;break;case"password_new_confirm":break;default:throw new Error("Submit Error")}}));var _=r.getAttribute("action");fetch(_,{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(h)}).then((function(e){window.location.href=e.url})).catch((function(e){}))}}}(r)}))})();