(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{84:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(45),i=n.n(a),s=(n(84),n(5)),o=n(14),l=n(12),d=n(73),u=n(105),j=n(107),b=n(104),p=n(72),h=n(13),O=n(74),m=n(35),f="UPDATE_PRODUCTS",x="ADD_TO_CART",g="ADD_MULTIPLE_TO_CART",v="REMOVE_FROM_CART",y="CLEAR_CART",w="UPDATE_CART_QUANTITY",_="TOGGLE_CART",k="UPDATE_CATEGORIES",N="UPDATE_CURRENT_CATEGORY",C={products:[],categories:[],currentCategory:"",cart:[],cartOpen:!1},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(s.a)(Object(s.a)({},e),{},{products:Object(m.a)(t.products)});case x:return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(m.a)(e.cart),[t.product])});case g:return Object(s.a)(Object(s.a)({},e),{},{cart:[].concat(Object(m.a)(e.cart),Object(m.a)(t.products))});case w:return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case v:var n=e.cart.filter((function(e){return e._id!==t._id}));return Object(s.a)(Object(s.a)({},e),{},{cartOpen:n.length>0,cart:n});case y:return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!1,cart:[]});case _:return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!e.cartOpen});case k:return Object(s.a)(Object(s.a)({},e),{},{categories:Object(m.a)(t.categories)});case N:return Object(s.a)(Object(s.a)({},e),{},{currentCategory:t.currentCategory});default:return e}},T=Object(O.a)(S);function E(e,t){return 1===t?e:e+"s"}function A(e,t,n){return new Promise((function(c,r){var a,i,s,o=window.indexedDB.open("shop-shop",1);o.onupgradeneeded=function(e){var t=o.result;t.createObjectStore("products",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},o.onerror=function(e){console.log("There was an error")},o.onsuccess=function(r){switch(a=o.result,i=a.transaction(e,"readwrite"),s=i.objectStore(e),a.onerror=function(e){console.log("error",e)},t){case"put":s.put(n),c(n);break;case"get":var l=s.getAll();l.onsuccess=function(){c(l.result)};break;case"delete":s.delete(n._id);break;default:console.log("No valid method")}i.oncomplete=function(){a.close()}}}))}var $=n(1);var I,D,Q,P,R,F=function(e){var t=Object(h.b)(),n=Object(h.c)((function(e){return e})),c=e.image,r=e.name,a=e._id,i=e.price,l=e.quantity,d=n.cart;return Object($.jsxs)("div",{className:"card px-1 py-1",children:[Object($.jsxs)(o.b,{to:"/products/".concat(a),children:[Object($.jsx)("img",{alt:r,src:"/images/".concat(c)}),Object($.jsx)("p",{children:r})]}),Object($.jsxs)("div",{children:[Object($.jsxs)("div",{children:[l," ",E("item",l)," in stock"]}),Object($.jsxs)("span",{children:["$",i]})]}),Object($.jsx)("button",{onClick:function(){var n=d.find((function(e){return e._id===a}));n?(t({type:w,_id:a,purchaseQuantity:parseInt(n.purchaseQuantity)+1}),A("cart","put",Object(s.a)(Object(s.a)({},n),{},{purchaseQuantity:parseInt(n.purchaseQuantity)+1}))):(t({type:x,product:Object(s.a)(Object(s.a)({},e),{},{purchaseQuantity:1})}),A("cart","put",Object(s.a)(Object(s.a)({},e),{},{purchaseQuantity:1})))},children:"Add to cart"})]})},U=n(99),L=n(29),q=n(106),W=Object(q.a)(I||(I=Object(L.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]))),B=Object(q.a)(D||(D=Object(L.a)(["\n  query getCheckout($products: [ID]!) {\n    checkout(products: $products) {\n      session\n    }\n  }\n"]))),G=(Object(q.a)(Q||(Q=Object(L.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(q.a)(P||(P=Object(L.a)(["\n  {\n    categories {\n      _id\n      name\n    }\n  }\n"])))),Y=Object(q.a)(R||(R=Object(L.a)(["\n  {\n    user {\n      firstName\n      lastName\n      orders {\n        _id\n        purchaseDate\n        products {\n          _id\n          name\n          description\n          price\n          quantity\n          image\n        }\n      }\n    }\n  }\n"]))),M=n.p+"static/media/spinner.689d9a07.gif";var H=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e})),n=t.currentCategory,r=Object(U.a)(W),a=r.loading,i=r.data;return Object(c.useEffect)((function(){i?(e({type:f,products:i.products}),i.products.forEach((function(e){A("products","put",e)}))):a||A("products","get").then((function(t){e({type:f,products:t})}))}),[i,a,e]),Object($.jsxs)("div",{className:"my-2",children:[Object($.jsx)("h2",{children:"Our Products:"}),t.products.length?Object($.jsx)("div",{className:"flex-row",children:(n?t.products.filter((function(e){return e.category._id===n})):t.products).map((function(e){return Object($.jsx)(F,{_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity},e._id)}))}):Object($.jsx)("h3",{children:"You haven't added any products yet!"}),a?Object($.jsx)("img",{src:M,alt:"loading"}):null]})};var J=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e})).categories,n=Object(U.a)(G),r=n.loading,a=n.data;return Object(c.useEffect)((function(){a?(e({type:k,categories:a.categories}),a.categories.forEach((function(e){A("categories","put",e)}))):r||A("categories","get").then((function(t){e({type:k,categories:t})}))}),[a,r,e]),Object($.jsxs)("div",{children:[Object($.jsx)("h2",{children:"Choose a Category:"}),t.map((function(t){return Object($.jsx)("button",{onClick:function(){var n;n=t._id,e({type:N,currentCategory:n})},children:t.name},t._id)}))]})},z=n(21),V=n.n(z),K=n(33),X=n(20),Z=n(68),ee=n(100),te=function(e){var t=e.item,n=Object(h.b)();return Object($.jsxs)("div",{className:"flex-row",children:[Object($.jsx)("div",{children:Object($.jsx)("img",{src:"/images/".concat(t.image),alt:""})}),Object($.jsxs)("div",{children:[Object($.jsxs)("div",{children:[t.name,", $",t.price]}),Object($.jsxs)("div",{children:[Object($.jsx)("span",{children:"Qty:"}),Object($.jsx)("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:function(e){var c=e.target.value;"0"===c?(n({type:v,_id:t._id}),A("cart","delete",Object(s.a)({},t))):(n({type:w,_id:t._id,purchaseQuantity:parseInt(c)}),A("cart","put",Object(s.a)(Object(s.a)({},t),{},{purchaseQuantity:parseInt(c)})))}}),Object($.jsx)("span",{role:"img","aria-label":"trash",onClick:function(){return function(e){n({type:v,_id:e._id}),A("cart","delete",Object(s.a)({},e))}(t)},children:"\ud83d\uddd1\ufe0f"})]})]})]})},ne=n(69),ce=n(70),re=n(59),ae=n.n(re),ie=new(function(){function e(){Object(ne.a)(this,e)}return Object(ce.a)(e,[{key:"getProfile",value:function(){return ae()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return ae()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),se=(n(94),Object(Z.a)("pk_test_TYooMQauvdEDq54NiTphI7jx")),oe=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e})),n=Object(ee.a)(B),r=Object(X.a)(n,2),a=r[0],i=r[1].data;function s(){e({type:_})}return Object(c.useEffect)((function(){i&&se.then((function(e){e.redirectToCheckout({sessionId:i.checkout.session})}))}),[i]),Object(c.useEffect)((function(){function n(){return(n=Object(K.a)(V.a.mark((function t(){var n;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A("cart","get");case 2:n=t.sent,e({type:g,products:Object(m.a)(n)});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}t.cart.length||function(){n.apply(this,arguments)}()}),[t.cart.length,e]),t.cartOpen?Object($.jsxs)("div",{className:"cart",children:[Object($.jsx)("div",{className:"close",onClick:s,children:"[close]"}),Object($.jsx)("h2",{children:"Shopping Cart"}),t.cart.length?Object($.jsxs)("div",{children:[t.cart.map((function(e){return Object($.jsx)(te,{item:e},e._id)})),Object($.jsxs)("div",{className:"flex-row space-between",children:[Object($.jsxs)("strong",{children:["Total: $",function(){var e=0;return t.cart.forEach((function(t){e+=t.price*t.purchaseQuantity})),e.toFixed(2)}()]}),ie.loggedIn()?Object($.jsx)("button",{onClick:function(){var e=[];t.cart.forEach((function(t){for(var n=0;n<t.purchaseQuantity;n++)e.push(t._id)})),a({variables:{products:e}})},children:"Checkout"}):Object($.jsx)("span",{children:"(log in to check out)"})]})]}):Object($.jsxs)("h3",{children:[Object($.jsx)("span",{role:"img","aria-label":"shocked",children:"\ud83d\ude31"}),"You haven't added anything to your cart yet!"]})]}):Object($.jsx)("div",{className:"cart-closed",onClick:s,children:Object($.jsx)("span",{role:"img","aria-label":"trash",children:"\ud83d\uded2"})})},le=function(){return Object($.jsxs)("div",{className:"container",children:[Object($.jsx)(J,{}),Object($.jsx)(H,{}),Object($.jsx)(oe,{})]})};var de=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e})),n=Object(l.f)().id,r=Object(c.useState)({}),a=Object(X.a)(r,2),i=a[0],d=a[1],u=Object(U.a)(W),j=u.loading,b=u.data,p=t.products,O=t.cart;return Object(c.useEffect)((function(){p.length?d(p.find((function(e){return e._id===n}))):b?(e({type:f,products:b.products}),b.products.forEach((function(e){A("products","put",e)}))):j||A("products","get").then((function(t){e({type:f,products:t})}))}),[p,b,j,e,n]),Object($.jsxs)($.Fragment,{children:[i&&O?Object($.jsxs)("div",{className:"container my-1",children:[Object($.jsx)(o.b,{to:"/",children:"\u2190 Back to Products"}),Object($.jsx)("h2",{children:i.name}),Object($.jsx)("p",{children:i.description}),Object($.jsxs)("p",{children:[Object($.jsx)("strong",{children:"Price:"}),"$",i.price," ",Object($.jsx)("button",{onClick:function(){var t=O.find((function(e){return e._id===n}));t?(e({type:w,_id:n,purchaseQuantity:parseInt(t.purchaseQuantity)+1}),A("cart","put",Object(s.a)(Object(s.a)({},t),{},{purchaseQuantity:parseInt(t.purchaseQuantity)+1}))):(e({type:x,product:Object(s.a)(Object(s.a)({},i),{},{purchaseQuantity:1})}),A("cart","put",Object(s.a)(Object(s.a)({},i),{},{purchaseQuantity:1})))},children:"Add to Cart"}),Object($.jsx)("button",{disabled:!O.find((function(e){return e._id===i._id})),onClick:function(){e({type:v,_id:i._id}),A("cart","delete",Object(s.a)({},i))},children:"Remove from Cart"})]}),Object($.jsx)("img",{src:"/images/".concat(i.image),alt:i.name})]}):null,j?Object($.jsx)("img",{src:M,alt:"loading"}):null,Object($.jsx)(oe,{})]})};var ue,je,be,pe=function(e){var t=e.children;return Object($.jsx)("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"},children:t})},he=function(){return Object($.jsx)("div",{children:Object($.jsxs)(pe,{children:[Object($.jsx)("h1",{children:"404 Page Not Found"}),Object($.jsx)("h1",{children:Object($.jsx)("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji",children:"\ud83d\ude44"})})]})})},Oe=n(39),me=n(109),fe=Object(q.a)(ue||(ue=Object(L.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),xe=Object(q.a)(je||(je=Object(L.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        category {\n          name\n        }\n      }\n    }\n  }\n"]))),ge=Object(q.a)(be||(be=Object(L.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"])));var ve=function(e){var t=Object(c.useState)({email:"",password:""}),n=Object(X.a)(t,2),r=n[0],a=n[1],i=Object(me.a)(fe),l=Object(X.a)(i,2),d=l[0],u=l[1].error,j=function(){var e=Object(K.a)(V.a.mark((function e(t){var n,c;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,d({variables:{email:r.email,password:r.password}});case 4:n=e.sent,c=n.data.login.token,ie.login(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.target,n=t.name,c=t.value;a(Object(s.a)(Object(s.a)({},r),{},Object(Oe.a)({},n,c)))};return Object($.jsxs)("div",{className:"container my-1",children:[Object($.jsx)(o.b,{to:"/signup",children:"\u2190 Go to Signup"}),Object($.jsx)("h2",{children:"Login"}),Object($.jsxs)("form",{onSubmit:j,children:[Object($.jsxs)("div",{className:"flex-row space-between my-2",children:[Object($.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object($.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:b})]}),Object($.jsxs)("div",{className:"flex-row space-between my-2",children:[Object($.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object($.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:b})]}),u?Object($.jsx)("div",{children:Object($.jsx)("p",{className:"error-text",children:"The provided credentials are incorrect"})}):null,Object($.jsx)("div",{className:"flex-row flex-end",children:Object($.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var ye=function(e){var t=Object(c.useState)({email:"",password:""}),n=Object(X.a)(t,2),r=n[0],a=n[1],i=Object(me.a)(ge),l=Object(X.a)(i,1)[0],d=function(){var e=Object(K.a)(V.a.mark((function e(t){var n,c;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,l({variables:{email:r.email,password:r.password,firstName:r.firstName,lastName:r.lastName}});case 3:n=e.sent,c=n.data.addUser.token,ie.login(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(e){var t=e.target,n=t.name,c=t.value;a(Object(s.a)(Object(s.a)({},r),{},Object(Oe.a)({},n,c)))};return Object($.jsxs)("div",{className:"container my-1",children:[Object($.jsx)(o.b,{to:"/login",children:"\u2190 Go to Login"}),Object($.jsx)("h2",{children:"Signup"}),Object($.jsxs)("form",{onSubmit:d,children:[Object($.jsxs)("div",{className:"flex-row space-between my-2",children:[Object($.jsx)("label",{htmlFor:"firstName",children:"First Name:"}),Object($.jsx)("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:u})]}),Object($.jsxs)("div",{className:"flex-row space-between my-2",children:[Object($.jsx)("label",{htmlFor:"lastName",children:"Last Name:"}),Object($.jsx)("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:u})]}),Object($.jsxs)("div",{className:"flex-row space-between my-2",children:[Object($.jsx)("label",{htmlFor:"email",children:"Email:"}),Object($.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:u})]}),Object($.jsxs)("div",{className:"flex-row space-between my-2",children:[Object($.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object($.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:u})]}),Object($.jsx)("div",{className:"flex-row flex-end",children:Object($.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var we=function(){return Object($.jsxs)("header",{className:"flex-row px-1",children:[Object($.jsx)("h1",{children:Object($.jsxs)(o.b,{to:"/",children:[Object($.jsx)("span",{role:"img","aria-label":"shopping bag",children:"\ud83d\udecd\ufe0f"}),"-Shop-Shop"]})}),Object($.jsx)("nav",{children:ie.loggedIn()?Object($.jsxs)("ul",{className:"flex-row",children:[Object($.jsx)("li",{className:"mx-1",children:Object($.jsx)(o.b,{to:"/orderHistory",children:"Order History"})}),Object($.jsx)("li",{className:"mx-1",children:Object($.jsx)("a",{href:"/",onClick:function(){return ie.logout()},children:"Logout"})})]}):Object($.jsxs)("ul",{className:"flex-row",children:[Object($.jsx)("li",{className:"mx-1",children:Object($.jsx)(o.b,{to:"/signup",children:"Signup"})}),Object($.jsx)("li",{className:"mx-1",children:Object($.jsx)(o.b,{to:"/login",children:"Login"})})]})})]})};var _e=function(){var e=Object(me.a)(xe),t=Object(X.a)(e,1)[0];return Object(c.useEffect)((function(){function e(){return(e=Object(K.a)(V.a.mark((function e(){var n,c,r,a;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A("cart","get");case 2:if(n=e.sent,!(c=n.map((function(e){return e._id}))).length){e.next=11;break}return e.next=7,t({variables:{products:c}});case 7:r=e.sent,a=r.data,a.addOrder.products.forEach((function(e){A("cart","delete",e)}));case 11:setTimeout((function(){window.location.assign("/")}),3e3);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object($.jsx)("div",{children:Object($.jsxs)(pe,{children:[Object($.jsx)("h1",{children:"Success!"}),Object($.jsx)("h2",{children:"Thank you for your purchase!"}),Object($.jsx)("h2",{children:"You will now be redirected to the home page"})]})})};var ke=function(){var e,t=Object(U.a)(Y).data;return t&&(e=t.user),Object($.jsx)($.Fragment,{children:Object($.jsxs)("div",{className:"container my-1",children:[Object($.jsx)(o.b,{to:"/",children:"\u2190 Back to Products"}),e?Object($.jsxs)($.Fragment,{children:[Object($.jsxs)("h2",{children:["Order History for ",e.firstName," ",e.lastName]}),e.orders.map((function(e){return Object($.jsxs)("div",{className:"my-2",children:[Object($.jsx)("h3",{children:new Date(parseInt(e.purchaseDate)).toLocaleDateString()}),Object($.jsx)("div",{className:"flex-row",children:e.products.map((function(e,t){var n=e._id,c=e.image,r=e.name,a=e.price;return Object($.jsxs)("div",{className:"card px-1 py-1",children:[Object($.jsxs)(o.b,{to:"/products/".concat(n),children:[Object($.jsx)("img",{alt:r,src:"/images/".concat(c)}),Object($.jsx)("p",{children:r})]}),Object($.jsx)("div",{children:Object($.jsxs)("span",{children:["$",a]})})]},t)}))})]},e._id)}))]}):null]})})},Ne=Object(d.a)({uri:"/graphql"}),Ce=Object(p.a)((function(e,t){var n=t.headers,c=localStorage.getItem("id_token");return{headers:Object(s.a)(Object(s.a)({},n),{},{authorization:c?"Bearer ".concat(c):""})}})),Se=new u.a({link:Ce.concat(Ne),cache:new j.a});var Te=function(){return Object($.jsx)(b.a,{client:Se,children:Object($.jsx)(o.a,{children:Object($.jsx)("div",{children:Object($.jsxs)(h.a,{store:T,children:[Object($.jsx)(we,{}),Object($.jsxs)(l.c,{children:[Object($.jsx)(l.a,{exact:!0,path:"/",component:le}),Object($.jsx)(l.a,{exact:!0,path:"/login",component:ve}),Object($.jsx)(l.a,{exact:!0,path:"/signup",component:ye}),Object($.jsx)(l.a,{exact:!0,path:"/success",component:_e}),Object($.jsx)(l.a,{exact:!0,path:"/orderHistory",component:ke}),Object($.jsx)(l.a,{exact:!0,path:"/products/:id",component:de}),Object($.jsx)(l.a,{component:he})]})]})})})})},Ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ae(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object($.jsx)(r.a.StrictMode,{children:Object($.jsx)(Te,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Ee?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ae(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ae(t,e)}))}}()}},[[95,1,2]]]);
//# sourceMappingURL=main.2ae44341.chunk.js.map