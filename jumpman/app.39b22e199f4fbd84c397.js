(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{139:function(e,t,n){e.exports={jumpman:"RMQhq"}},140:function(e,t,n){e.exports={home:"_1R0Q0"}},149:function(e,t,n){e.exports={about:"_2JIic"}},150:function(e,t,n){e.exports={contact:"_1SoSr"}},152:function(e,t,n){e.exports={header:"_1HKcN"}},302:function(e,t,n){},303:function(e,t,n){"use strict";n.r(t);var r,a,o,c=n(0),i=n(22),l=n(57),u=n(134),s=n(309),m=n(311),p=n(135),f=n.n(p);a=r||(r={}),function(e){e.GET_PRODUCT_REQUEST="GET_PRODUCT_REQUEST",e.GET_PRODUCT_SUCCESS="GET_PRODUCT_SUCCESS",e.GET_PRODUCT_FAILURE="GET_PRODUCT_FAILURE"}(o=a.Type||(a.Type={})),a.getProducts=function(){var e=Object(m.a)(o.GET_PRODUCT_REQUEST),t=Object(m.a)(o.GET_PRODUCT_SUCCESS),n=Object(m.a)(o.GET_PRODUCT_FAILURE);return function(r){return r(e()),f.a.get("").then((function(e){r(t(e.data))})).catch((function(e){r(n(e))}))}};var d,E=n(136),h=n.n(E),_=Object(s.a)(((d={})[r.Type.GET_PRODUCT_REQUEST]=function(e,t){return e},d[r.Type.GET_PRODUCT_SUCCESS]=function(e,t){return h()(e,{products:{$set:t.payload}})},d[r.Type.GET_PRODUCT_FAILURE]=function(e,t){return e},d),{products:[]}),v=n(24),g=n(137),b=function(e){return function(e){return function(t){return"production"!==l.a.app.environment&&console.log(t),e(t)}}};var T=n(59),O=n(139),y=n(140),R=n(308),w=n.p+"b4113fe1597314baa1108b710cc52c80.jpg",P=function(e){return c.createElement("div",{id:"home",className:y.home},c.createElement("div",null,c.createElement(R.a,{src:w})))},C=n(149),S=function(){return c.createElement("div",{className:C.about,id:"about"},c.createElement("p",null,'The "Jumpman" logo is owned by Nike to promote the Air Jordan brand of basketball sneakers and other sportswear. It is the silhouette of former NBA player and current Charlotte Hornets owner Michael Jordan.'))},U=n(150),j=function(){return c.createElement("div",{id:"contact",className:U.contact},c.createElement("p",null,"Contact me for more of my Projects @ https://kristofferrobincanlas.com/contact"))},k=n(86);function N(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return Object.keys(e).reduce((function(n,r){return t.includes(r)||(n[r]=e[r]),n}),{})}var L,J=(L=function(e,t){return(L=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}L(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),D=function(e,t,n,r){var a,o=arguments.length,c=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(c=(o<3?a(c):o>3?a(t,n,c):a(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},A=(function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.state={},r}J(t,e),t.prototype.componentDidMount=function(){this.props.actions.getProducts()},t.prototype.render=function(){return c.createElement("main",null,this.props.productState.products.map((function(e,t){return c.createElement("span",{key:t},e.name," $",e.price)})))},t.defaultProps={},t=D([Object(T.b)((function(e,t){return{productState:e.product}}),(function(e){return{actions:Object(v.bindActionCreators)(N(r,"Type"),e)}}))],t)}(c.Component),n(60)),I=n(310),G=n(89),F=function(e){var t=c.useState(!1),n=t[0],r=t[1];return c.createElement(I.a,{key:e.data.name},c.createElement(R.a,{className:A.image,src:e.data.image,wrapped:!0,ui:!1}),c.createElement("span",{className:A.sizes},"Sizes: 8, 9, 10, 11, 12"),c.createElement(I.a.Content,null,c.createElement(I.a.Header,null,e.data.name),c.createElement(I.a.Meta,{className:A["date-icon"]},c.createElement("span",{className:"date"},"2020"),c.createElement("span",null,c.createElement(G.a,{onClick:function(){return r(!n)},size:"large",name:"heart",color:n?"red":void 0}))),c.createElement(I.a.Description,null,"$",e.data.price)))},B=function(){return c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 250 250"},c.createElement("path",{d:"M135.377 28.32c-.092-.488-.155-.993-.189-1.504-.493-7.083 4.839-13.225 11.922-13.724 7.089-.494 13.23 4.845 13.724 11.928.494 7.083-4.839 13.225-11.921 13.724-.448.034-.891.04-1.326.023-.287.074-.459.109-.706.327-.729 1.136 1.854.924.098 5.889 0 0-.012.545-.207 1.09-.138 1.906-.872 7.554-.976 10.562.373.436.477.648.437 1.705-.167 1.429-.494 4.931-1.022 7.175-.447 1.923-1.233 2.29-1.865 2.761-.89 3.984-1.125 7.284-3.409 12.123-.207 3.668-.465 4.667-1.234 6.458-.086 5.401.287 6.205-3.357 14.757-.941 4-.046 6.767.947 10.923 1.016 4.271 3.834 6.056 4.253 10.43.987 10.3.74 17.314-1.47 25.39l1.929 4.569c2.394 1.097 8.334 4.099 5.04 8.851 4.638 2.439 11.646 5.028 17.426 9.971 2.325 1.935 4.781 4.047 6.985 6.526 4.196.654 3.748.987 6.859 2.898 9.144 5.607 23.809 16.731 32.31 24.606 1.464.855 2.061 1.47 3.243 2.09.184.355.235.436.195.533-.407 1.028-.391 1.057-.758 1.877.459.506 1.314.981 1.825 1.424.477.149.477-.08 1.298-.281 1.067.999 2.388 1.803 2.863 1.757 1.447-.368 1.2-.069 2.423-1.436.441-.453 1.177.006 1.177.006.459-.539 1.446-1.613 2.761-2.388 1.05-.62 3.054-.688 3.054-.688.671.006.545.694.487.918-.757.391-2.364.821-3.266 1.486-1.963 2.032-3.501 4.771-3.501 4.771 3.954-.54 6.383.441 9.677.063 1.797-.103 3.123.012 5.011-1.354 0 0 1.814-1.291 3.438-1.975 1.579-.688 3.077-.321 4.466.689.981 1.107 1.572 1.113.08 2.675-.539.608-1.32 1.285-2.313 2.267-1.745 1.723-4.093 4.023-6.526 5.924-2.463 1.923-5.258 3.65-7.003 4.442-4.402 3.163-3.363 2.336-6.824 5.471-.437.39-1.596 1.09-2.158 1.463-1.366.896-1.791.149-2.681-1.492 0 0-.408-.614-1.079-1.923-.735-1.429-1.286-3.064-1.063-3.036-.82-.104-4.512-4.432-4.522-5.361-.781-.178-4.11-3.403-4.23-4.018l-2.95-2.365c-3.375.7-4.15-1.395-13.064-7.72-1.016-.018-2.588-.568-4.839-2.238-4.023-3.221-13.672-10.51-15.308-11.343-1.757-.895-3.857-1.738-5.144-2.801-1.928-.355-2.984-.557-3.948-.826-.987-.27-1.883-.62-4.38-.953-4.063-.505-8.277-2.187-12.289-4.195-1.899-.901-3.553-1.36-5.188-2.062-3.668-1.549-6.813-2.944-9.25-3.507-.93-.092-5.35-1.418-7.668-2.772-.804-.413-1.269-.809-1.797-.93-1.217-.281-1.998.201-2.548.385-2.973 1.55-5.757 2.887-8.329 4.271-2.394 1.28-4.598 2.611-6.934 3.955-2.107 1.217-4.541 2.364-7.043 3.559 0 0-7.135 3.576-11.032 4.965-3.381 2.761-10.292 7.536-14.51 9.901-2.089.993-6.147 3.564-8.019 4.139-1.068.86-4.873 3.575-7.852 5.814-2.302 1.722-4.041 3.174-4.041 3.174-1.337 1.199-1.246 1.768-3.788.688-.706.58-1.251.941-1.705 1.274-1.836 1.332-1.992 1.011-2.663.976-1.28 1.108-1.441.534-2.56 1.809-.735 1.137.017.866-1.533 1.418-.327.126-.482.521-.734.74-1.246 1.027-1.251 3.926-4.236 4.133-1.728 1.233-1.286 2.721-2.606 2.657.081 1.28-2.336 3.146-2.772 3.14-3.806 1.314-4.07-1.486-8.639.603-.591.27-1.458 1.017-2.6 1.234-2.009.379-4.437-.018-5.918-1.165-2.331-1.797-4.477-5.264-4.477-5.264-.741-1.751-.31-2.858 2.003-4.512.964-.614 1.142-1.073 2.761-1.183.804-.304.585.161 2.021-.355.832-.299.832-.086 2.508-.229.384-.259.924-.351 1.647-.586 1.326-.436 2.618-.924 2.618-.924s.338-.339 1.613-.218c1.079-.442 2.187-1.097 2.755-1.298-.144-1.71.04-1.63.832-2.318.987-.85 1.165-.712 1.9-.184.31-.179.459-.241.425-.5-.121-.89-.884-1.309-.654-3.271-.339-.786-.838-1.756-.729-2.342.161-.632.316-.936.7-1.137.408-.218.54.075.758.321.39.454.706 1.797.706 1.797.138 1.516.608 3.479 2.106 2.371.884-.896 1.056-3.283 2.858-2.772l1.286 1.119c1.091-1.027 1.143-1.027 1.797-1.44 0 0-1.022-1.033-.126-1.837.614-.546 1.354-.936 2.669-2.394 3.61-3.989 5.464-5.752 9.368-8.966 7.789-6.406 16.651-10.9 22.282-13.133 1.836-2.331 3.622-3.88 7.697-4.271 4.844-8.18 14.12-15.486 16.25-16.651 1.733-3.14 2.485-2.807 4.752-3.438 1.796-1.44 2.204-1.44 3.008-2.944.781-3.105-1.802-11.399 4.792-11.818 1.401-1.98 1.051-1.504 2.612-3.375-1.056-2.606-1.492-4.787-1.779-6.664-.052-.218-2.617-2.026-1.889-4.386-1.09-1.297-3.128-4.324-3.765-5.742-.292.006-.534-.104-.855-.149-.333-.052-.747-.034-1.211-.074-1.027 2.651-2.146 2.847-3.972 3.432-3.26 6.948-4.408 9.888-13.632 15.633-3.662 4.099-4.833 8.667-4.816 8.599-.631 1.354-.408 3.249-.075 4.265-.482 1.504-.356 1.653-.356 1.653.201.568.724 1.32 1.366 1.48 1.108.293 2.216.247 2.152 1.481-.149 1.544-2.175 1.291-3.134 1.119-3.691-.586-2.525-2.991-4.885-2.188-1.808 1.183-2.485 4.673-5.436 4.219-.39-.258-.27-1.021-.006-1.572.414-.861 1.148-1.573.712-1.895-1.917.603-5.763 1.877-5.763 1.877-1.808.494-3.789-.407-2.009-1.596.827-.321 2.009-.723 3.467-1.658 0 0 .751-1.022-.689-.511-1.573.563-3.892.912-5.556.729 0 0-3.45-.453-3.892-.724-.448-.27-.855-1.337.224-1.331 1.366.012 4.787-.391 7.439-1.097 1.28-.499 3.714-1.939 5.08-2.617 0 0 1.481-2.158 2.296-2.583 1.36-1.567 2.508-2.491 3.713-4.093 1.177-2.428 2.394-6.273 6.291-12.226 1.802-2.744 4.041-5.94 6.859-8.797 0 0 .729-4.574 4.397-7.829.81-1.906 2.038-4.15 3.249-6.228.471-.798.918-1.492 1.366-2.25 1.137-1.785 2.331-5.108 6.762-5.631 0 0 1.894-1.4 2.623-2.394 1.137-.97.878-2.479 1.802-3.542-1.412-1.377-5.022-3.966-5.373-7.565-.373-3.817.987-6.957 3.295-9.281 2.56-2.56 5.258-3.84 8.535-3.645 4.092.608 4.867 1.963 6.17 3.306 1.251 1.274 1.716.454 2.244 1.946 3.433.913 3.243.511 3.214 3.037.528.711 1.412 1.372 1.4 2.847 1.154-2.394 1.383-2.835 4.466-5.47.729-2.141 1.223-4.247 1.865-6.388.6-1.98 1.347-4.018 1.926-5.551-.614-4.328.648-5.045 2.33-8.839-.298-.522-.234-.671-.108-1.527.654-2.508 1.676-5.826 2.284-7.99 0 0 .201-.861 1.091-.924.769-2.738 1.923-7.835 2.118-8.874.792-2.864.281-3.783-.327-5.396-.195-.528-.104-1.28-.442-1.866-.958-1.67-1.991-3.84-2.691-5.39-.454-.987-1.172-4.707-1.172-4.707-.61-1.901-.076-.001-.076-.001"}))},x=n(152),H=n(46),M=function(){return c.createElement("header",{id:x.header},c.createElement("span",null,c.createElement(H.HashLink,{smooth:!0,to:"/#home"},"JUMPMAN")),c.createElement("span",null,c.createElement(H.HashLink,{smooth:!0,to:"/#shop"},"shop")),c.createElement("span",null,c.createElement(H.HashLink,{smooth:!0,to:"/#about"},"about")),c.createElement("span",null,c.createElement(H.HashLink,{smooth:!0,to:"/#contact"},"contact")),c.createElement("span",null,c.createElement(G.a,{size:"big",name:"shopping cart"})))},Q=n(40),z=function(e){var t=c.useState(0),n=t[0],r=t[1],a=0;return c.useEffect((function(){var e=setInterval((function(){if(a>=100)return clearInterval(e),void(document.body.style.overflowY="auto");a++,r(a)}),1e3/60);return function(){clearInterval(e)}}),[]),c.createElement("div",{className:Q.loader+" "+(n>=100?Q.hide:"")},c.createElement("div",{className:Q.content},c.createElement(B,null),c.createElement("div",{className:Q.barContainer},c.createElement("div",{style:{width:n+"%"},className:Q.bar})),c.createElement("div",null,"LOADING")))},K=[{name:"Jordan Jumpman Team II",image:"https://images.footlocker.com/is/image/EBFL2/19175006?wid=264&hei=264&fmt=png-alpha",price:140},{name:"Jordan Jumpman 2020",image:"https://images.footlocker.com/is/image/EBFL2/Q3449100?wid=264&hei=264&fmt=png-alpha",price:110},{name:"Jordan Jumpman Pro",image:"https://images.footlocker.com/is/image/EBFL2/96876106?wid=264&hei=264&fmt=png-alpha",price:119.99},{name:"Jordan Jumpman Z",image:"https://images.footlocker.com/is/image/EBFL2/Q9119001?wid=264&hei=264&fmt=png-alpha",price:150},{name:"Jordan Jumpman DNA Pro",image:"https://images.footlocker.com/is/image/EBFL2/K0009001?wid=264&hei=264&fmt=png-alpha",price:119.99},{name:"Jordan Jumpman Swift 23",image:"https://images.footlocker.com/is/image/EBFL2/T2555001?wid=264&hei=264&fmt=png-alpha",price:140}],V=function(){return c.createElement("div",{id:"shop",className:k.shop},c.createElement("div",{className:k.list},K.map((function(e){return c.createElement(F,{key:e.name,data:e})}))))},$=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Y=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.state={},r}return $(t,e),t.prototype.render=function(){return c.createElement(c.Fragment,null,c.createElement(z,null),c.createElement("span",null,c.createElement(M,null),c.createElement("div",{className:O.jumpman},c.createElement(B,null)),c.createElement(P,null),c.createElement(V,null),c.createElement(S,null),c.createElement(j,null)))},t}(c.Component),Z=n(82),q=(n(301),n(302),function(e){var t=Object(v.applyMiddleware)(b,u.a);"production"!==l.a.app.environment&&(t=Object(g.composeWithDevTools)(t));var n=Object(v.combineReducers)({product:_});return Object(v.createStore)(n,e,t)}());i.render(c.createElement(T.a,{store:q},c.createElement(Z.BrowserRouter,null,c.createElement(Y,null))),document.getElementById("root"))},40:function(e,t,n){e.exports={loader:"_2omFd",hide:"_3jkLi",content:"_2aZy4",barContainer:"dFOBl",bar:"_26BAp"}},57:function(e,t,n){"use strict";(function(e){t.a={app:{environment:"production",logLevel:e.env.APP_LOG_LEVEL,port:e.env.APP_PORT||8001},server:{host:e.env.SERVER_HOST,port:e.env.SERVER_PORT,productUrl:"products"}}}).call(this,n(95))},60:function(e,t,n){e.exports={image:"_26odp",sizes:"_30AUY","date-icon":"_2oIhN"}},86:function(e,t,n){e.exports={shop:"_3GIp7",list:"_2snKI"}}},[[303,1,2]]]);