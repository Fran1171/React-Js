(this["webpackJsonpmakeup-ecommerce"]=this["webpackJsonpmakeup-ecommerce"]||[]).push([[0],{100:function(e,a,t){"use strict";t.r(a);var c=t(1),s=t.n(c),n=t(36),r=t.n(n),i=(t(83),t(18)),o=t(8),l=t(0),d=Object(c.createContext)([]),j=function(){return Object(c.useContext)(d)};var m=function(e){var a=e.children,t=Object(c.useState)([]),s=Object(o.a)(t,2),n=s[0],r=s[1],j=Object(c.useState)(1),m=Object(o.a)(j,2),b=m[0],u=m[1],p=Object(c.useState)(0),x=Object(o.a)(p,2),h=x[0],O=x[1],f=Object(c.useState)(0),g=Object(o.a)(f,2),v=g[0],N=g[1],w=function(e){return n.findIndex((function(a){return a.item.id===e}))};return Object(l.jsx)(d.Provider,{value:{cartList:n,agregarProducto:function(e){console.log("agregarProducto"),w(e.item.id)<0&&(r([].concat(Object(i.a)(n),[e])),O(h+e.cantidad))},setCartList:r,vaciarCarrito:function(){r([]),O(0)},eliminarItem:function(e){console.log("eliminarItem");var a=n,t=w(e);t>=0&&(h>n[t].cantidad&&O(h-n[t].cantidad),a.splice(t,1),u(e)),r(a)},idDelete:b,setIdDelete:u,itemsCounter:h,setItemsCounter:O,terminarCompra:function(){r([]),O(0)},orderId:v,setIOrderId:N,calcularTotal:function(e){for(var a=0,t=0;t<e.length;t++)a+=e[t].item.precio*parseInt(e[t].cantidad);return a}},children:a})};var b=function(){var e=j().itemsCounter;return Object(l.jsxs)("div",{children:[Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",className:"bi bi-cart text-white cart wow animate__animated animate__bounceInDown","data-wow-delay":"0.8s",viewBox:"0 0 16 16",children:Object(l.jsx)("path",{d:"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"})}),e>0&&Object(l.jsxs)("span",{className:"contador wow animate__animated animate__bounceInDown",children:[" ",e," "]})]})},u=t(17),p=t(109),x=t(106),h=t(111),O=t(108),f=t.p+"static/media/logodiaz.1f004f54.png";t(85);var g=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(p.a,{className:"bg-navbar",expand:"lg",children:Object(l.jsxs)(x.a,{fluid:"sm",children:[Object(l.jsx)(p.a.Brand,{children:Object(l.jsx)(u.b,{to:"/",className:"navbar-brand ms-3",children:Object(l.jsx)("img",{src:f,alt:"logo",className:"logo__img--center wow animate__animated animate__flipInX"})})}),Object(l.jsx)(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(l.jsx)(p.a.Collapse,{id:"basic-navbar-nav",children:Object(l.jsxs)(h.a,{className:"me-auto",children:[Object(l.jsx)(h.a.Link,{children:Object(l.jsx)(u.b,{to:"/",className:"text-decoration-none fw-bold text-uppercase menuSecciones wow animate__animated animate__bounceInDown","data-wow-delay":"0.2s",children:"Home"})}),Object(l.jsx)(h.a.Link,{children:Object(l.jsx)(u.b,{to:"/nosotros",className:"text-decoration-none fw-bold text-uppercase menuSecciones wow animate__animated animate__bounceInDown","data-wow-delay":"0.3s",children:"Nosotros"})}),Object(l.jsxs)(O.a,{title:"Productos",id:"basic-nav-dropdown",children:[Object(l.jsx)(O.a.Item,{className:"hoverOpciones",children:Object(l.jsx)(u.b,{to:"/productos/indumentaria",className:"text-decoration-none text-white",children:"Indumentaria"})}),Object(l.jsx)(O.a.Item,{className:"hoverOpciones",children:Object(l.jsx)(u.b,{to:"/productos/accesorios",className:"text-decoration-none text-white",children:"Accesorios"})}),Object(l.jsx)(O.a.Item,{className:"hoverOpciones",children:Object(l.jsx)(u.b,{to:"/productos/cosmeticos",className:"text-decoration-none text-white",children:"Cosmeticos"})})]}),Object(l.jsx)(h.a.Link,{children:Object(l.jsx)(u.b,{to:"/galeria",className:"text-decoration-none fw-bold text-uppercase menuSecciones wow animate__animated animate__bounceInDown","data-wow-delay":"0.6s",children:"Galer\xeda"})}),Object(l.jsx)(h.a.Link,{children:Object(l.jsx)(u.b,{to:"/contacto",className:"text-decoration-none fw-bold text-uppercase menuSecciones wow animate__animated animate__bounceInDown","data-wow-delay":"0.6s",children:"Contacto"})}),Object(l.jsx)(h.a.Link,{id:"IdCart",children:Object(l.jsx)(u.b,{to:"/cart",children:Object(l.jsx)(b,{})})})]})})]})})})},v=(t(90),t(91),t(16));t(92);var N=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("main",{children:Object(l.jsxs)("div",{className:"contenidoPrincipal",children:[Object(l.jsxs)("section",{className:"m-3 p-4",children:[Object(l.jsx)("h1",{className:"text-uppercase text-center pb-3 wow animate__animated animate__fadeInUp",children:"VESTIMENTA"}),Object(l.jsx)("div",{className:"text-start wow animate__animated animate__fadeInUp","data-wow-delay":"0.1s",children:Object(l.jsx)("p",{children:"No solo permite cubrir el cuerpo para que el fr\xedo del invierno no lo afecte sino que tambi\xe9n en el plano est\xe9tico le reportar\xe1 a la persona placer, especialmente si se trata de alguien fan\xe1tico de la moda y del buen parecido f\xedsico. la indumentaria ya no es tan importante como protecci\xf3n o diferenciaci\xf3n social sino como una especie de obra de arte en s\xed misma en la que dise\xf1adores y artistas se unen para darle forma, y hay un p\xfablico consumidor \xe1vido por adquirirla porque la misma los ubica dentro del grupo que viste de acuerdo a la moda y las tendencias que se usan, hecho que reporta reconocimiento y valoraci\xf3n positiva en algunos contextos"})})]}),Object(l.jsxs)("section",{className:"m-3 p-4",children:[Object(l.jsx)("h2",{className:"text-uppercase text-center pb-3 wow animate__animated animate__fadeInUp",children:"ACCESORIOS"}),Object(l.jsx)("div",{className:"text-start wow animate__animated animate__fadeInUp","data-wow-delay":"0.1s",children:Object(l.jsx)("p",{children:"Los complementos o accesorios son todas esas piezas que no son parte de las prendas de vestir, pero que se combinan con ellas para completar el atuendo. Estos complementos realzan el estilo, lo hacen m\xe1s casual o m\xe1s elegante, y destacan sus atributos. La importancia de los complementos radica en que pueden cambiar totalmente un outfit. Por ejemplo, un mismo vestido puede ser considerado para uso de d\xeda o de noche, de acuerdo a los accesorios que lo acompa\xf1en. La magia de los accesorios es que no hay que invertir grandes cantidades de dinero en ellos, con muy poco se puede lograr mucho, s\xf3lo hay que saber escogerlos y combinarlos de manera creativa. Otro atributo importante de los complementos es que muchos de ellos son atemporales, por lo tanto se pueden usar a trav\xe9s de los a\xf1os, completando la ropa de cada temporada. Es el caso de las joyas, que son de los accesorios m\xe1s utilizados, estas piezas son muy vers\xe1tiles y elegantes."})})]}),Object(l.jsxs)("section",{className:"m-3 p-4",children:[Object(l.jsx)("h2",{className:"text-uppercase text-center pb-3 wow animate__animated animate__fadeInUp",children:"Maquillaje Art\xedstico"}),Object(l.jsxs)("div",{className:"text-start wow animate__animated animate__fadeInUp","data-wow-delay":"0.1s",children:[Object(l.jsx)("p",{children:"Normalmente, se trabaja con unos bocetos previos y se trata de adaptar el dibujo al cuerpo y al rostro. Las t\xe9cnicas de aer\xf3grafo en esta clase de dibujos, son esenciales para que el trabajo sea a\xfan m\xe1s perfecto. El maquillaje de fantas\xeda o profesional se diferencia al maquillaje convencional en que en este \xfaltimo, se intenta disimular o dar un toque o un aspecto natural, sin embargo, en el de fantas\xeda o art\xedstico se busca todo lo contrario, se busca realzar y trabajar el surrealismo lo m\xe1ximo posible, figuras de animales, monstruos, unicornios, dioses\u2026y un sinf\xedn de figuras m\xe1s propias del cine y del teatro son tratadas con esta clase de maquillaje."}),Object(l.jsxs)("p",{children:[" ","Con esta clase de maquillaje, no nos referimos solo a aplicar color con pincel, sino tambi\xe9n a extensiones de pelo, de piel, de telas originales y extravagantes que hagan aparentar lo que no se es a diferencia muy notoria del maquillaje natural y convencional."]}),Object(l.jsx)("p",{})]})]})]})})})};var w=function(){return Object(l.jsx)("main",{children:Object(l.jsxs)("section",{children:[Object(l.jsx)("h1",{className:"text-center pt-3 wow animate__animated animate__fadeInUp",children:"\xbfQuienes Somos?"}),Object(l.jsx)("div",{className:"container wow animate__animated animate__fadeInUp",children:Object(l.jsx)("article",{className:"text-center p-4",children:Object(l.jsx)("p",{children:"Gringa Sotre es una empresa dedicada a la venta online de ropa, accesorios y mackup. Nuestro objetivo es ofrecer la moda m\xe1s actual a los mejores precios. Tenemos a su disposici\xf3n una gran variedad de productos, los cuales son renovados cada temporada para dar siempre las prendas m\xe1s trendy. Tenemos un equipo que est\xe1 dedicado a satisfacer tus necesidades y que te contestar\xe1 a tus dudas con la mayor brevedad posible. Para una mejor comunicaci\xf3n puedes contactar con nosotros a trav\xe9s de WhatsApp o mensaje privado de Facebook y tan s\xf3lo en unos minutos tu duda ser\xe1 resuelta."})})})]})})},I=t(2),_=t.n(I),y=t(6);function C(){console.log("Evento onAddShoppingCart aca debe guardar en Local Storage el producto")}t(94);var k=function(e){return Object(l.jsx)("div",{className:"col",children:Object(l.jsxs)("div",{className:"card h-100 w-75 card-ancho",children:[Object(l.jsx)(u.b,{to:"/item/".concat(e.producto.id),children:Object(l.jsx)("img",{src:e.producto.imagen,className:"card-img-top img-fluid",alt:e.producto.descripcion})}),Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("div",{className:"card-title pt-3 fw-bold productoMakeup pb-2",children:e.producto.nombre}),Object(l.jsx)("div",{className:"h6 text-muted",children:"$ "+parseFloat(e.producto.precio).toFixed(2)}),Object(l.jsxs)("div",{className:"h6 text-muted",children:[e.producto.stock," disponibles"]})]})]})})};var q=function(e){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{class:"separador"}),Object(l.jsx)("main",{children:Object(l.jsxs)("section",{children:[Object(l.jsx)("h1",{className:"text-center p-4",children:"ProductosInicio01"}),Object(l.jsx)("div",{className:"container-sm container-md container-lg",children:Object(l.jsx)("div",{className:"row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-2 g-lg-3 g-md-3 g-sm-2 ms-md-5",children:e.productos.map((function(a){return Object(l.jsx)(k,{producto:a,onAddShoppingCart:e.onAddShoppingCart},a.id)}))})})]})}),Object(l.jsx)("div",{className:"separador"})]})};t(95);var F=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"parallaxStars",children:[Object(l.jsx)("div",{id:"stars"}),Object(l.jsx)("div",{id:"stars2"}),Object(l.jsx)("div",{id:"stars3"}),Object(l.jsxs)("div",{class:"title",children:[Object(l.jsx)("p",{class:"display-1 fw-bold",children:"404"}),Object(l.jsx)("p",{class:"display-4",children:"P\xe1gina en Construcci\xf3n"}),Object(l.jsx)("p",{class:"display-6",children:"Estamos trabajando..."})]})]})})},M=t(5),S=t(3),L=t(4),z=t(26),P=function(){function e(){Object(S.a)(this,e)}return Object(L.a)(e,null,[{key:"getProductById",value:function(){var e=Object(y.a)(_.a.mark((function e(a,t){var c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Method getProductById"),e.next=3,Object(z.d)(Object(z.c)(t,"productos","".concat(a)));case 3:return c=e.sent,e.abrupt("return",Object(M.a)({id:c.id},c.data()));case 5:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()},{key:"getProductByCatalog",value:function(){var e=Object(y.a)(_.a.mark((function e(a,t,c,s){var n,r,i;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(z.g)(Object(z.b)(s,"productos"),Object(z.h)("".concat(a),"".concat(t),"".concat(c))),e.next=3,Object(z.e)(n);case 3:return r=e.sent,i=r.docs.map((function(e){return Object(M.a)({id:e.id},e.data())})),e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})));return function(a,t,c,s){return e.apply(this,arguments)}}()},{key:"getProducts",value:function(){var e=Object(y.a)(_.a.mark((function e(a){var t,c,s;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(z.b)(a,"productos"),e.next=3,Object(z.e)(t);case 3:return c=e.sent,s=c.docs.map((function(e){return Object(M.a)({id:e.id},e.data())})),e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()}]),e}(),A=P,B=t(75),D=Object(B.a)({apiKey:"AIzaSyB0oid5wWiO0OAs46uV2NeFjXAR28J23Fs",authDomain:"coderhouse-ecommerce-489ce.firebaseapp.com",projectId:"coderhouse-ecommerce-489ce",storageBucket:"coderhouse-ecommerce-489ce.appspot.com",messagingSenderId:"43805418401",appId:"1:43805418401:web:2db191c63bf39bbf69a1e0",measurementId:"G-KN6MDWRPEZ"}),E=Object(z.f)(D);var H=function(){var e=Object(c.useState)([]),a=Object(o.a)(e,2),t=a[0],s=a[1],n=Object(c.useState)(!0),r=Object(o.a)(n,2),i=r[0],d=r[1],j=Object(v.h)().categoriaId;return Object(c.useEffect)(Object(y.a)(_.a.mark((function e(){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.getProductByCatalog("categoria","==",j,E);case 3:a=e.sent,s(a),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:return e.prev=9,d(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,7,9,12]])}))),[j]),Object(l.jsx)(l.Fragment,{children:i?Object(l.jsx)("h2",{children:"Cargando..."}):t.length>0?Object(l.jsx)(q,{productos:t,onAddShoppingCart:C}):Object(l.jsx)(F,{})})},T=[{id:"1000",srcImagen:t.p+"static/media/1.fb48ffd1.png",alt:"Maquillaje egipcio"},{id:"1001",srcImagen:t.p+"static/media/2.66e927c5.png",alt:"Maquillaje parpados"},{id:"1002",srcImagen:t.p+"static/media/3.b3143dd4.png",alt:"Maquillaje turquesa"},{id:"1003",srcImagen:t.p+"static/media/4.0bb21c2f.png",alt:"Maquillaje gala"},{id:"1004",srcImagen:t.p+"static/media/5.87a2258a.png",alt:"Maquillaje delineado"},{id:"1005",srcImagen:t.p+"static/media/6.afd10b67.png",alt:"Maquillaje sport"},{id:"1006",srcImagen:t.p+"static/media/7.8e74a59c.png",alt:"Maquillaje casamiento"},{id:"1007",srcImagen:t.p+"static/media/8.06191130.png",alt:"Maquillaje evento"},{id:"1008",srcImagen:t.p+"static/media/9.435658ac.png",alt:"Maquillaje verde"},{id:"1009",srcImagen:t.p+"static/media/10.60b452bd.png",alt:"Maquillaje blue"},{id:"1010",srcImagen:t.p+"static/media/11.e28240ff.png",alt:"Maquillaje black"},{id:"1011",srcImagen:t.p+"static/media/12.446569be.png",alt:"Maquillaje epoca"},{id:"1012",srcImagen:t.p+"static/media/13.929b78bf.png",alt:"Maquillaje casual"},{id:"1013",srcImagen:t.p+"static/media/14.7dedd311.png",alt:"Maquillaje art\xedstico"},{id:"1014",srcImagen:t.p+"static/media/15.e07ba420.png",alt:"Maquillaje hindu"},{id:"1015",srcImagen:t.p+"static/media/16.8c3b9260.png",alt:"Maquillaje casual"},{id:"1016",srcImagen:t.p+"static/media/17.66bc2db7.png",alt:"Maquillaje hindu"},{id:"1017",srcImagen:t.p+"static/media/18.2b42cc22.png",alt:"Maquillaje delineado"}],G=new Promise((function(e,a){setTimeout((function(){e(T)}),2e3)}));t(72);var U=function(e){return Object(l.jsx)("div",{className:"box wow animate__animated animate__fadeInUp","data-wow-delay":"0.1s",children:Object(l.jsxs)("a",{href:e.urlInstagram,target:"_blank",rel:"noopener noreferrer",children:[Object(l.jsx)("img",{src:e.srcImagen,alt:e.alt,loading:"lazy",className:"img-fluid"}),Object(l.jsx)("div",{className:"overlay"})]})})},V=t(76);var R=function(e){return e.galeria.map((function(e){return Object(l.jsx)(V.a,{lg:4,children:Object(l.jsx)(U,{urlInstagram:e.urlInstagram,srcImagen:e.srcImagen,alt:e.alt},e.id)})}))},Q=t(107);var $=function(){var e=Object(c.useState)([]),a=Object(o.a)(e,2),t=a[0],s=a[1],n=Object(c.useState)(!0),r=Object(o.a)(n,2),i=r[0],d=r[1];return Object(c.useEffect)((function(){G.then((function(e){s(e)})).catch((function(e){return console.log(e)})).finally((function(){return d(!1)}))}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{class:"separador"}),Object(l.jsx)("main",{children:Object(l.jsxs)("section",{children:[Object(l.jsx)("h1",{className:"text-center pb-4 wow animate__animated animate__fadeInUp",children:"Galer\xeda"}),Object(l.jsx)(x.a,{children:Object(l.jsx)(Q.a,{className:"gy-3",children:i?Object(l.jsx)("h2",{children:"Cargando..."}):Object(l.jsx)(R,{galeria:t})})})]})}),Object(l.jsx)("div",{className:"separador"})]})},J=t(110),W=t(56);t(97);var K=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{class:"separador"}),Object(l.jsx)("main",{children:Object(l.jsx)("section",{children:Object(l.jsx)(x.a,{className:"containerFormulario mt-5",children:Object(l.jsxs)("div",{className:"boxFormulario",children:[Object(l.jsx)("h1",{className:"p-3 ps-2 text-start h3 wow animate__animated animate__fadeIn","data-wow-delay":"1s",children:"Contactate con Nosotros"}),Object(l.jsxs)(J.a,{className:"ms-2 pb-4 fw-bold",children:[Object(l.jsxs)(Q.a,{className:"wow animate__animated animate__fadeIn","data-wow-delay":"0.3s",children:[Object(l.jsx)(V.a,{lg:6,md:6,sm:12,className:"pb-3",children:Object(l.jsxs)(J.a.Group,{controlId:"contactForm.ControlInput1",children:[Object(l.jsx)(J.a.Label,{children:"Nombre Completo"}),Object(l.jsx)(J.a.Control,{type:"text",placeholder:"Nombre Completo",required:!0})]})}),Object(l.jsx)(V.a,{lg:6,md:6,sm:12,className:"pb-3",children:Object(l.jsxs)(J.a.Group,{controlId:"contactForm.ControlInput2",children:[Object(l.jsx)(J.a.Label,{children:"Direcci\xf3n de email"}),Object(l.jsx)(J.a.Control,{type:"email",placeholder:"Email",required:!0})]})})]}),Object(l.jsxs)(J.a.Group,{className:"mb-3 wow animate__animated animate__fadeIn","data-wow-delay":"0.3s",controlId:"contactForm.ControlInput3",children:[Object(l.jsx)(J.a.Label,{children:"Asunto"}),Object(l.jsxs)(J.a.Select,{children:[Object(l.jsx)("option",{children:"Escriba o elija una opci\xf3n"}),Object(l.jsx)("option",{value:"1",children:"Maquillaje"}),Object(l.jsx)("option",{value:"2",children:"Pedicuria"}),Object(l.jsx)("option",{value:"3",children:"Peinado"}),Object(l.jsx)("option",{value:"4",children:"Pesta\xf1as"}),Object(l.jsx)("option",{value:"5",children:"U\xf1as"})]})]}),Object(l.jsxs)(J.a.Group,{className:"mb-3 wow animate__animated animate__fadeIn","data-wow-delay":"0.4s",controlId:"exampleForm.ControlTextarea1",children:[Object(l.jsx)(J.a.Label,{children:"Mensaje"}),Object(l.jsx)(J.a.Control,{as:"textarea",placeholder:"Mensaje",rows:3})]}),Object(l.jsx)(J.a.Check,{type:"checkbox",id:"contactCheckbox",className:"mb-3 wow animate__animated animate__fadeIn","data-wow-delay":"0.5s",label:"\xbfDesea recibir Newsletter?"}),Object(l.jsxs)(Q.a,{className:"gap-2 wow animate__animated animate__fadeIn","data-wow-delay":"0.6s",children:[Object(l.jsx)(V.a,{sm:12,md:2,lg:3,children:Object(l.jsx)(W.a,{type:"submit",variant:"dark",className:"w-100",children:"Enviar"})}),Object(l.jsx)(V.a,{sm:12,md:2,lg:3,children:Object(l.jsx)(W.a,{type:"reset",variant:"dark",className:"w-100",children:"Reset"})})]})]})]})})})}),Object(l.jsx)("div",{className:"separador"})]})};var X=function(e){var a=j(),t=a.cartList,s=a.setCartList,n=a.itemsCounter,r=a.setItemsCounter,i=Object(c.useState)(e.initial),d=Object(o.a)(i,2),m=d[0],b=d[1];return Object(c.useEffect)((function(){b(e.initial)}),[e.initial]),Object(l.jsxs)("div",{className:"h6 qtyBox d-flex align-items-center justify-content-around border w-100",children:[Object(l.jsx)("div",{className:"btnQty qtyMinus fs-3 ps-3 text-muted",role:"button",onClick:function(){m>1&&(b(m-1),e.fromCart?(s(t.map((function(a){return a.item.id===e.id?Object(M.a)(Object(M.a)({},a),{},{cantidad:m-1}):a}))),r(n-1)):e.onAdd(m-1))},children:"-"}),Object(l.jsx)("div",{className:"qtyInput border-0 text-center form-control shadow-none text-muted",children:m}),Object(l.jsx)("div",{className:"btnQty qtyPlus fs-3 pe-3 text-muted",role:"button",onClick:function(){m<e.stock&&(b(m+1),e.fromCart?(s(t.map((function(a){return a.item.id===e.id?Object(M.a)(Object(M.a)({},a),{},{cantidad:m+1}):a}))),r(n+1)):e.onAdd(m+1))},children:"+"})]})};t(98);var Z=function(e){var a=j().agregarProducto,t=Object(c.useState)(1),s=Object(o.a)(t,2),n=s[0],r=s[1],i=Object(c.useState)("AgregarCarrito"),d=Object(o.a)(i,2),m=d[0],b=d[1],p=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)("button",{id:e.item.id,type:"button",onClick:function(){return r(t=n),b("CheckoutCarrito"),void a({item:e.item,cantidad:t});var t},className:"btn btn-dark w-100 mt-3",children:["Agregar al carrito",Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",className:"bi bi-cart3 ps-2",viewBox:"0 0 16 16",children:Object(l.jsx)("path",{d:"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"})})]})})},x=function(){return Object(l.jsx)(u.b,{to:"/cart",children:Object(l.jsx)("div",{children:Object(l.jsx)("button",{id:e.item.id,type:"button",className:"btn btn-primary w-100 mt-3",children:"Ir al carrito"})})})};return Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col",children:Object(l.jsx)("img",{src:e.item.imagen,alt:e.item.alt,className:"img-fluid"})}),Object(l.jsxs)("div",{className:"col",children:[Object(l.jsx)("div",{className:"fw-bold mb-2 productoMakeup productoMakeup--title",children:e.item.nombre}),Object(l.jsx)("div",{className:"text-muted mb-2 productoMakeup--fontSize",children:"$ "+parseFloat(e.item.precio).toFixed(2)}),Object(l.jsx)("div",{className:"mb-2 productoMakeup--widthCount",children:Object(l.jsx)(X,{id:e.item.id,stock:e.item.stock,onAdd:function(e){r(e)},initial:1})}),Object(l.jsxs)("div",{className:"mt-3",children:[Object(l.jsx)("div",{className:"fw-bold productoMakeup productoMakeup--fontSize--stock",children:"Stock Disponible"}),Object(l.jsx)("div",{className:"text-muted",children:e.item.stock+" Unidades"})]}),Object(l.jsx)("div",{className:"productoMakeup--widthButton",children:"AgregarCarrito"===m?Object(l.jsx)(p,{}):Object(l.jsx)(x,{})})]})]})};var Y=function(){var e=Object(c.useState)({}),a=Object(o.a)(e,2),t=a[0],s=a[1],n=Object(c.useState)(!0),r=Object(o.a)(n,2),i=r[0],d=r[1],j=Object(v.h)().id;return Object(c.useEffect)(Object(y.a)(_.a.mark((function e(){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.getProductById(j,E);case 3:a=e.sent,s(a),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:return e.prev=9,d(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,7,9,12]])}))),[j]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{class:"separador"}),Object(l.jsx)("div",{className:"container container-sm container-md container-lg",children:i?Object(l.jsx)("h2",{children:"Cargando..."}):Object(l.jsx)(Z,{item:t})}),Object(l.jsx)("div",{class:"separador"})]})};var ee=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"separador"}),Object(l.jsx)(x.a,{fluid:!0,className:"p-1",children:Object(l.jsx)("div",{className:"h1 text-center",children:"Tu carrito est\xe1 vac\xedo"})}),Object(l.jsx)("div",{className:"separador"})]})};var ae=function(e){var a=j(),t=a.eliminarItem,c=a.setIdDelete,s=a.cartList,n=a.setItemsCounter;return Object(l.jsx)("div",{className:"container container-sm container-md container-lg",children:Object(l.jsxs)("div",{className:"row text-muted align-items-center",children:[Object(l.jsx)("div",{className:"col-2 col-lg-2 col-md-2",children:Object(l.jsx)("img",{src:e.item.item.imagen,className:"img-fluid",alt:e.item.item.alt})}),Object(l.jsx)("div",{className:"col-5 col-lg-6 col-md-6",children:Object(l.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center",children:[Object(l.jsx)("div",{className:"fw-bold nombreProductoCart",children:e.item.item.nombre}),Object(l.jsxs)("div",{className:"cartCountwidth",children:[Object(l.jsx)(X,{id:e.item.item.id,stock:e.item.item.stock,initial:e.cantidad,fromCart:!0}),Object(l.jsxs)("span",{className:"fs-6 stockPadding",children:[e.item.item.stock," disponibles"]})]})]})}),Object(l.jsxs)("div",{className:"col-3 h6",children:["$ ",parseFloat(e.item.item.precio).toFixed(2)]}),Object(l.jsx)("div",{className:"col",children:Object(l.jsx)("button",{className:"btn-black border-0",onClick:function(){return a=e.item.item.id,t(a),c(a),void(0===s.length&&n(0));var a},children:Object(l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-trash",viewBox:"0 0 16 16",children:[Object(l.jsx)("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),Object(l.jsx)("path",{"fill-rule":"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})]})})}),Object(l.jsx)("hr",{className:"mt-4 solid"})]})})};var te=function(e){var a,t=j(),c=t.vaciarCarrito,s=t.calcularTotal;return a=parseFloat(s(e.items)).toFixed(2),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"separador"}),e.items.map((function(e){return Object(l.jsx)(ae,{item:e,cantidad:e.cantidad},e.id)})),Object(l.jsxs)("div",{className:"container container-sm container-md container-lg mt-2",children:[Object(l.jsxs)("div",{className:"row text-muted align-items-center",children:[Object(l.jsx)("div",{className:"col col-lg-6 "}),Object(l.jsx)("div",{className:"col fw-bold fs-4",children:"Total"}),Object(l.jsxs)("div",{className:"col fw-bold fs-4",children:["$ ",a]}),Object(l.jsx)("hr",{className:"mt-4 solid"})]}),Object(l.jsxs)("div",{className:"d-flex gap-2 justify-content-end pt-2",children:[Object(l.jsx)("button",{type:"button",onClick:function(){c()},className:"btn btn-dark",children:"Vaciar carrito"}),Object(l.jsx)(u.b,{to:"/formularioCompra",children:Object(l.jsx)("button",{type:"button",className:"btn btn-dark",children:"Iniciar compra"})})]})]})," ",Object(l.jsx)("div",{className:"separador"})]})};var ce=function(){var e=j().cartList;return Object(l.jsx)(l.Fragment,{children:e.length>0?Object(l.jsx)(te,{items:e}):Object(l.jsx)(ee,{})})};var se=function(){var e=j().orderId;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(x.a,{fluid:"sm",children:[Object(l.jsx)("div",{className:"separador"}),Object(l.jsxs)("div",{className:"p-5 text-center",children:[Object(l.jsx)("h3",{children:"Felicidades su compra se realizo satisfactoriamente!"}),Object(l.jsxs)("h5",{children:["Su Orden generada para el seguimiento es: ",e]})]}),Object(l.jsx)("div",{className:"separador"})]})})},ne=t(44);t(99);var re=function(){return Object(l.jsx)("footer",{className:"bg-dark",children:Object(l.jsx)("div",{className:"container-fluid",children:Object(l.jsxs)("div",{className:"row p-5 pb-1",children:[Object(l.jsxs)("div",{className:"col-lg-4 col-md-6 col-sm-12 ps-md-5",children:[Object(l.jsx)("p",{className:"h6 text-uppercase text-white fw-bold mb-3 letterSpacing",children:"Contacto"}),Object(l.jsx)("div",{className:"mb-2 mb-lg-3",children:Object(l.jsxs)("a",{href:"https://www.google.com/maps/place/Praia+dos+Ingleses/@-27.4348599,-48.396024,15z/data=!3m1!4b1!4m5!3m4!1s0x952769fc6bfe7f01:0xf8143f736603057c!8m2!3d-27.4371624!4d-48.3894599",className:" text-decoration-none textoFooter",target:"_blank",rel:"noopener noreferrer",children:[Object(l.jsx)(ne.c,{className:"me-1"}),"Dos Ingleses, Brasil"]})}),Object(l.jsx)("div",{className:"mb-2 mb-lg-3",children:Object(l.jsxs)("a",{href:"mailto:info@gmail.com",className:"text-decoration-none textoFooter",target:"_blank",rel:"noopener noreferrer",children:[Object(l.jsx)(ne.a,{className:"me-1"}),"info@gmail.com"]})}),Object(l.jsx)("div",{className:"mb-4",children:Object(l.jsxs)("a",{href:"https://api.whatsapp.com/send?phone=5411618107&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Makeup.",className:"text-decoration-none textoFooter",target:"_blank",rel:"noopener noreferrer",children:[Object(l.jsx)(ne.f,{className:"me-1"}),"+5411111111"]})})]}),Object(l.jsxs)("div",{className:"col-lg-4 col-md-6 col-sm-12 ps-lg-5",children:[Object(l.jsx)("p",{className:"h6 text-uppercase text-white fw-bold mb-3 letterSpacing",children:"Secciones"}),Object(l.jsx)("div",{className:"mb-2 mb-lg-3 ",children:Object(l.jsx)(u.b,{to:"/home",className:"text-decoration-none textoFooter",children:"Home"})}),Object(l.jsx)("div",{className:"mb-2 mb-lg-3 ",children:Object(l.jsx)(u.b,{to:"/nosotros",className:"text-decoration-none textoFooter",children:"Nosotros"})}),Object(l.jsx)("div",{className:"mb-2 mb-lg-3 ",children:Object(l.jsx)(u.b,{to:"/galeria",className:"text-decoration-none textoFooter",children:"Galer\xeda"})}),Object(l.jsx)("div",{className:"mb-4 ",children:Object(l.jsx)(u.b,{to:"/contacto",className:"text-decoration-none textoFooter",children:"Contacto"})})]}),Object(l.jsxs)("div",{className:"col-lg-4 col-md-12 col-sm-12 ps-md-5",children:[Object(l.jsx)("p",{className:"h6 text-uppercase text-white fw-bold mb-4 letterSpacing",children:"Redes Sociales"}),Object(l.jsx)("div",{className:"mb-2 mb-lg-3 ",children:Object(l.jsxs)("a",{href:"https://www.facebook.com",className:"me-1  text-decoration-none textoFooter",target:"_blank",rel:"noopener noreferrer",children:[Object(l.jsx)(ne.b,{className:"me-1"}),"Facebook"]})}),Object(l.jsx)("div",{className:"mb-2 mb-lg-3 ",children:Object(l.jsxs)("a",{href:"https://twitter.com/?lang=es",className:"me-1  text-decoration-none textoFooter",target:"_blank",rel:"noopener noreferrer",children:[Object(l.jsx)(ne.g,{className:"me-1"}),"Twitter"]})}),Object(l.jsx)("div",{className:"mb-2 mb-lg-3 ",children:Object(l.jsxs)("a",{href:"https://www.instagram.com",className:"me-1  text-decoration-none textoFooter",target:"_blank",rel:"noopener noreferrer",children:[Object(l.jsx)(ne.d,{className:"me-1"}),"Instagram"]})}),Object(l.jsx)("div",{className:"mb-2 mb-lg-3 ",children:Object(l.jsxs)("a",{href:"https://ar.linkedin.com/",className:"me-1  text-decoration-none textoFooter",target:"_blank",rel:"noopener noreferrer",children:[Object(l.jsx)(ne.e,{className:"me-1"}),"Linkedin"]})})]}),Object(l.jsx)("div",{className:"col-12 text-center m-3 text-muted",children:"\xa9 2022 Copyright"})]})})})},ie=function(){function e(){Object(S.a)(this,e)}return Object(L.a)(e,null,[{key:"createOrder",value:function(){var e=Object(y.a)(_.a.mark((function e(a,t){var c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Method createOrder"),e.next=3,Object(z.a)(Object(z.b)(t,"orders"),a);case 3:return c=e.sent,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()}]),e}(),oe=ie;var le=function(){var e=j(),a=e.cartList,t=e.calcularTotal,c=e.terminarCompra,s=e.setIOrderId,n=function(e){for(var c="",s="",n="",r="",i=0;i<e.target.length;i++)switch(e.target[i].id){case"1":c=e.target[i].value;break;case"2":s=e.target[i].value;break;case"3":n=e.target[i].value;break;case"4":r=e.target[i].value}var o={};return o.date=new Date,o.buyer={nombre:c,direccion:s,telefono:n,email:r},o.total=t(a),o.items=a.map((function(e){return{id:e.item.id,nombre:e.item.nombre,precioUnitario:e.item.precio,precioNeto:e.item.precio*e.cantidad,cantidad:e.cantidad}})),o},r=function(){var e=Object(y.a)(_.a.mark((function e(a){var t,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),t=n(a),e.prev=2,e.next=5,oe.createOrder(t,E);case 5:r=e.sent,s(r.id),c(),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(2);case 12:return e.prev=12,e.finish(12);case 14:case"end":return e.stop()}}),e,null,[[2,10,12,14]])})));return function(a){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"separador"}),Object(l.jsxs)(x.a,{fluid:"sm",children:[Object(l.jsx)("h1",{className:"text-center mb-5",children:"Opciones de Env\xedo"}),Object(l.jsxs)(J.a,{id:"IdForm",onSubmit:r,className:"cartBoxContact",children:[Object(l.jsxs)(J.a.Group,{className:"mb-3",children:[Object(l.jsx)(J.a.Label,{className:"h5",children:Object(l.jsx)("h5",{children:"Nombre Completo"})}),Object(l.jsx)(J.a.Control,{id:"1",type:"text",placeholder:"Ingrese Nombre completo",required:!0})]}),Object(l.jsxs)(J.a.Group,{className:"mb-3",children:[Object(l.jsx)(J.a.Label,{className:"h5",children:Object(l.jsx)("h5",{children:"Direcci\xf3n de env\xedo"})}),Object(l.jsx)(J.a.Control,{id:"2",type:"text",placeholder:"Ingrese su direcci\xf3n",required:!0})]}),Object(l.jsxs)(J.a.Group,{className:"mb-3",children:[Object(l.jsx)(J.a.Label,{className:"h5",children:Object(l.jsx)("h5",{children:"Tel\xe9fono"})}),Object(l.jsx)(J.a.Control,{id:"3",type:"text",placeholder:"Ingrese su n\xfamero",required:!0})]}),Object(l.jsxs)(J.a.Group,{className:"mb-4",controlId:"formBasicEmail",children:[Object(l.jsx)(J.a.Label,{children:Object(l.jsx)("h5",{children:"Direcci\xf3n de email"})}),Object(l.jsx)(J.a.Control,{id:"4",type:"email",placeholder:"Ingrese su email",required:!0})]}),Object(l.jsx)(W.a,{variant:"primary",type:"submit",className:"btn btn-dark cartBoxContact--button",children:"Comprar"})]})]}),Object(l.jsx)("div",{className:"separador"}),0===a.length&&Object(l.jsx)(v.a,{replace:!0,to:"/terminarCompra"})]})};var de=function(){return Object(l.jsx)(m,{children:Object(l.jsxs)(u.a,{children:[Object(l.jsx)(g,{}),Object(l.jsxs)(v.d,{children:[Object(l.jsx)(v.b,{exact:!0,path:"/",element:Object(l.jsx)(N,{})}),Object(l.jsx)(v.b,{exact:!0,path:"/nosotros",element:Object(l.jsx)(w,{})}),Object(l.jsx)(v.b,{exact:!0,path:"/productos/:categoriaId",element:Object(l.jsx)(H,{})}),Object(l.jsx)(v.b,{exact:!0,path:"/item/:id",element:Object(l.jsx)(Y,{})}),Object(l.jsx)(v.b,{exact:!0,path:"/galeria",element:Object(l.jsx)($,{})}),Object(l.jsx)(v.b,{exact:!0,path:"/contacto",element:Object(l.jsx)(K,{})}),Object(l.jsx)(v.b,{exact:!0,path:"/cart",element:Object(l.jsx)(ce,{})}),Object(l.jsx)(v.b,{exact:!0,path:"/terminarCompra",element:Object(l.jsx)(se,{})}),Object(l.jsx)(v.b,{exact:!0,path:"/formularioCompra",element:Object(l.jsx)(le,{})}),Object(l.jsx)(v.b,{exact:!0,path:"/display404",element:Object(l.jsx)(F,{})})]}),Object(l.jsx)(re,{})]})})},je=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,112)).then((function(a){var t=a.getCLS,c=a.getFID,s=a.getFCP,n=a.getLCP,r=a.getTTFB;t(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(de,{})}),document.getElementById("root")),je()},72:function(e,a,t){},83:function(e,a,t){},85:function(e,a,t){},91:function(e,a,t){},92:function(e,a,t){},94:function(e,a,t){},95:function(e,a,t){},97:function(e,a,t){},98:function(e,a,t){},99:function(e,a,t){}},[[100,1,2]]]);
//# sourceMappingURL=main.5488a10c.chunk.js.map