(()=>{"use strict";function b(j,a,b,c,d,e,f){try{var g=j[e](f),h=g.value}catch(c){return void b(c)}g.done?a(h):Promise.resolve(h).then(c,d)}function a(i){return function(){var a=this,j=arguments;return new Promise(function(c,d){function e(h){b(g,c,d,e,f,"next",h)}function f(h){b(g,c,d,e,f,"throw",h)}var g=i.apply(a,j);e(void 0)})}}function e(i,a){var b="undefined"!=typeof Symbol&&i[Symbol.iterator]||i["@@iterator"];if(!b){if(Array.isArray(i)||(b=f(i))||a&&i&&"number"==typeof i.length){b&&(i=b);var j=0,d=function(){};return{s:d,n:function(){return j>=i.length?{done:!0}:{done:!1,value:i[j++]}},e:function(b){throw b},f:d}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var k,l=!0,g=!1;return{s:function(){b=b.call(i)},n:function(){var c=b.next();return l=c.done,c},e:function(b){g=!0,k=b},f:function a(){try{l||null==b["return"]||b["return"]()}finally{if(g)throw a}}}}function f(e,f){if(e){if("string"==typeof e)return d(e,f);var b=Object.prototype.toString.call(e).slice(8,-1);return"Object"===b&&e.constructor&&(b=e.constructor.name),"Map"===b||"Set"===b?Array.from(e):"Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)?d(e,f):void 0}}function d(e,a){(null==a||a>e.length)&&(a=e.length);for(var b=0,c=Array(a);b<a;b++)c[b]=e[b];return c}function c(){return g.apply(this,arguments)}function g(){return g=a(regeneratorRuntime.mark(function i(j){var b,k,d,e,f,g;return regeneratorRuntime.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return j.preventDefault(),b=new FormData(this),h.next=4,fetch(this.action,{method:this.method,body:b,headers:{Accept:"application/json"}});case 4:k=h.sent,k.ok?(d=document.querySelector(".contact"),e=document.createElement("div"),e.innerHTML="\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\" fill=\"currentColor\" class=\"bi bi-check-lg\" viewBox=\"0 0 16 16\">\n            <path d=\"M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z\"/>\n        </svg>\n        <h1>Su correo ha sido enviado con \xE9xito</h1>\n        <h2>\xA1Muchas gracias por comunicarse conmigo, me pondr\xE9 en contacto con usted en cuanto pueda!</h2>\n        ",d.appendChild(e),e.classList.add("popup")):(f=document.querySelector(".contact"),g=document.createElement("div"),g.innerHTML="\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\" fill=\"currentColor\" class=\"bi bi-x-lg\" viewBox=\"0 0 16 16\">\n            <path d=\"M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z\"/>\n        </svg>\n        <h1>\xA1Algo sali\xF3 mal!</h1>\n        <h2>Intenta nuevamente, o tambi\xE9n me puedes contactar a trav\xE9s de mis redes sociales</h2>\n        ",f.appendChild(g),g.classList.toggle("popup"),setTimeout(function(){g.classList.toggle("disapear")},4e3));case 6:case"end":return h.stop();}},i,this)})),g.apply(this,arguments)}var h=Math.floor,j=document.querySelectorAll(".categories-btn");window.addEventListener("scroll",function(){var b=document.querySelector("header");b.classList.toggle("sticky",0<window.scrollY)});var k=[],l=[],m=[],n=[k[0],l[0],m[0],k[1],l[1],m[1]];j.forEach(function(f){f.addEventListener("click",function(){var a,b=e(j);try{for(b.s();!(a=b.n()).done;){var c=a.value;c.classList.remove("marked")}}catch(c){b.e(c)}finally{b.f()}f.classList.toggle("marked")})});var o=document.querySelector("#form");o.addEventListener("submit",c);for(var p=document.querySelector(".bg"),q=0;q<window.innerHeight;q++){var i=Math.random()*window.innerWidth,r=Math.random()*window.innerHeight,s=document.createElement("div");s.classList.add("star"),p.appendChild(s),s.style.left="".concat(h(i),"px"),s.style.top="".concat(h(r),"px");var t=Math.random()*window.innerHeight,u=Math.random()*window.innerWidth,v=h(3*Math.random()),w=h(2*Math.random());v=0===v?"Y":"X",w=0===w?"-":"";var x=[{transform:"translate".concat(v,"(0px)")},{transform:"translate".concat(v,"(").concat(w).concat(h(t),"px)")},{transform:"translate".concat(v,"(0px)")}];s.animate(x,{duration:1e5,iterations:1/0})}})();