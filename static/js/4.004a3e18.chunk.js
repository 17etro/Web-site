(this["webpackJsonp24-rols"]=this["webpackJsonp24-rols"]||[]).push([[4],{233:function(t,e,n){"use strict";var c=n(0);n(1),n(234);e.a=function(t){var e=t.title,n=(t.svg,t.h);return Object(c.jsx)("div",{className:"heading-blog",children:"h1"===n?Object(c.jsx)("h1",{children:e}):Object(c.jsx)("h2",{children:e})})}},234:function(t,e,n){},236:function(t,e,n){},249:function(t,e,n){},268:function(t,e,n){"use strict";n.r(e);var c=n(2),i=n(3),a=n(1),r=n.n(a),o=n(0),s=n(12),l=n.n(s),p=n(7),j=n.n(p),d=n(5),u=n(67),m=n(14),O=n(70),b=(n(236),n(71)),f=n(233),h=n(8),y=(n(249),function(t){var e=Object(m.a)(),n=e.state,c=e.dispatch;return Object(o.jsx)("div",{className:"mobile-filters-block-content",children:t.filters&&t.filters.map((function(t){return d.c.includes(t._id)?null:Object(o.jsx)("div",{className:"mobile-filters-block-content__container",style:n.filterMode===t._id?{border:"2px solid #F89F46"}:null,children:Object(o.jsx)("img",{onClick:n.filterMode===t._id?function(){return c({type:h.a.DROP_FILTER})}:function(){return c({type:h.a.SET_FILTER,filterId:t._id})},className:"mobile-filters-block-content__container__item",alt:t.alt,src:d.a+"/"+t.image})},t._id)}))})}),g=n(10),x=n(22),_=r.a.memo((function(t){var e=Object(u.a)().t,n=Object(a.useState)([]),r=Object(i.a)(n,2),s=r[0],p=r[1],h=Object(a.useState)([]),_=Object(i.a)(h,2),v=_[0],L=_[1],S=Object(a.useState)(!1),w=Object(i.a)(S,2),k=w[0],R=w[1],E=Object(a.useState)(!1),N=Object(i.a)(E,2),z=N[0],J=N[1],I=Object(m.a)().state;Object(a.useEffect)((function(){R(!0),l.a.get(d.a+t.url).then((function(t){L(t.data),J(!1)})).catch((function(t){J(!0)})).finally((function(){return R(!1)}))}),[]);var A=function(){var e={"@context":"https://schema.org/","@type":"ItemList",description:"".concat(t.title," \u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430. \u0417\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u0439 ").concat(t.title," \u0441 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u043e\u0439 \u0432 \u0414\u043d\u0435\u043f\u0440\u0435, \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435 \u0438 \u0425\u0430\u0440\u044c\u043a\u043e\u0432\u0435\u2714\ufe0f").concat(t.title," \u043e\u0442 15\u0433\u0440\u043d \u260e 050 719-24-24 \u2714\ufe0f \u041e\u043d\u043b\u0430\u0439\u043d \u0437\u0430\u043a\u0430\u0437 \u0435\u0434\u044b \u043d\u0430 \u0434\u043e\u043c,\u043e\u0444\u0438\u0441."),name:t.title,numberOfItems:s.length,itemListElement:s.map((function(e){return{"@type":"Product",category:t.title,material:t.title,productID:e._id,slogan:e.name_ru,name:e.name_ru,brand:{"@type":"Organization",name:"24ROLLS",address:"\u0414\u043d\u0435\u043f\u0440, \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435",location:"\u0414\u043d\u0435\u043f\u0440, \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435"},description:e.description_ru,image:e.image,offers:{"@type":"Offer",offeredBy:{"@type":"Organization",name:"24ROLLS",address:"\u0414\u043d\u0435\u043f\u0440, \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435",location:"\u0414\u043d\u0435\u043f\u0440, \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435"},seller:{"@type":"Organization",name:"24ROLLS",address:"\u0414\u043d\u0435\u043f\u0440, \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435",location:"\u0414\u043d\u0435\u043f\u0440, \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435"},category:t.title,priceCurrency:"UAH",price:0!==e.percent?e.price*((100-e.percent)/100):e.price}}}))};return JSON.stringify(e)};return Object(a.useEffect)((function(){var e=j.a.get("24rolls").customOptions.city;if(v){var n=v.filter((function(t){var n=!1;return"Dnipro"===e?t.shop.map((function(t){"Dp"===t.name&&(n=!0)})):"Zaporijja"===e?t.shop.forEach((function(t){"Zp"===t.name&&(n=!0)})):"Kharkov"===e&&t.shop.forEach((function(t){"Kh"===t.name&&(n=!0)})),n}));p(n)}I.filterMode&&(R(!0),l.a.get(d.a+"/products/filter/category/".concat(t.categoryId,"/").concat(I.filterMode)).then((function(t){p(t.data),J(!1)})).catch((function(t){})).finally((function(){return R(!1)})))}),[I.filterMode,v]),Object(o.jsxs)("div",{className:"rolls_container",children:[Object(o.jsxs)(O.a,{children:[Object(o.jsx)("title",{children:"24ROLLS | "+t.title}),Object(o.jsx)("meta",{name:"description",content:"\u0421\u0443\u0448\u0438 \u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430. \u0417\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u0439 \u0435\u0434\u0443 \u0441 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u043e\u0439 \u0432 \u0414\u043d\u0435\u043f\u0440\u0435 \u0438 \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435\u2714\ufe0f\u0421\u0443\u0448\u0438 \u043e\u0442 15\u0433\u0440\u043d \u260e 050 719-24-24 \u2714\ufe0f\u0420\u043e\u043b\u043b\u044b \u2714\ufe0f\u0421\u0435\u0442\u044b \u2714\ufe0fWok \u2714\u041e\u043d\u043b\u0430\u0439\u043d \u0437\u0430\u043a\u0430\u0437 \u0435\u0434\u044b \u043d\u0430 \u0434\u043e\u043c,\u043e\u0444\u0438\u0441."}),Object(o.jsx)("meta",{name:"keywords",content:"\u0441\u0443\u0448\u0438, \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u0441\u0443\u0448\u0438, \u0437\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u0443\u0448\u0438, \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435, \u0414\u043d\u0435\u043f\u0440"}),Object(o.jsx)("script",{async:!0,type:"application/ld+json",children:A()}),Object(o.jsx)("title",{children:"24ROLLS | "+t.title}),Object(o.jsx)("meta",{name:"description",content:"".concat(t.title," \u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430. \u0417\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u0439 ").concat(t.title," \u0441 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u043e\u0439 \u0432 \u0414\u043d\u0435\u043f\u0440\u0435, \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435 \u0438 \u0425\u0430\u0440\u044c\u043a\u043e\u0432\u0435\u2714\ufe0f").concat(t.title," \u043e\u0442 15\u0433\u0440\u043d \u260e 050 719-24-24 \u2714\ufe0f \u041e\u043d\u043b\u0430\u0439\u043d \u0437\u0430\u043a\u0430\u0437 \u0435\u0434\u044b \u043d\u0430 \u0434\u043e\u043c,\u043e\u0444\u0438\u0441.")}),Object(o.jsx)("meta",{name:"keywords",content:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u0443\u0448\u0438, \u0440\u043e\u043b\u043b\u044b, wok, \u043f\u0430\u0441\u0442\u0443, \u0441\u0430\u043b\u0430\u0442\u044b, \u0441\u0443\u043f\u044b, \u043d\u0430\u043f\u0438\u0442\u043a\u0438, \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430, \u0414\u043d\u0435\u043f\u0440, \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435, \u0425\u0430\u0440\u044c\u043a\u043e\u0432, \u0432\u043a\u0443\u0441\u043d\u043e, \u0431\u044b\u0441\u0442\u0440\u0430\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430, \u0430\u043a\u0446\u0438\u0438, \u0441\u043a\u0438\u0434\u043a\u0438, \u0432\u044b\u0433\u043e\u0434\u043d\u044b\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u043f\u043e\u0434\u0430\u0440\u043a\u0438, \u0431\u043b\u043e\u0433 \u0438 \u0441\u0442\u0430\u0442\u0442\u0438 \u043a\u0443\u043b\u0438\u043d\u0430\u0440\u0438\u0438, \u043a\u0430\u043a \u043f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c \u0441\u0443\u0448\u0438, \u043a\u0440\u0443\u0433\u043b\u043e\u0441\u0443\u0442\u043e\u0447\u043d\u0430\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u0441\u0443\u0448\u0438, 24ROLLS, rolls, 24rolls.zp.ua"}),Object(o.jsx)("meta",{property:"twitter:title",content:"ROLLS24"}),Object(o.jsx)("meta",{property:"og:title",content:"ROLLS24"}),Object(o.jsx)("meta",{name:"twitter:description",content:"".concat(t.title," \u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430. \u0417\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u0439 ").concat(t.title," \u0441 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u043e\u0439 \u0432 \u0414\u043d\u0435\u043f\u0440\u0435, \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435 \u0438 \u0425\u0430\u0440\u044c\u043a\u043e\u0432\u0435\u2714\ufe0f").concat(t.title," \u043e\u0442 15\u0433\u0440\u043d \u260e 050 719-24-24 \u2714\ufe0f \u041e\u043d\u043b\u0430\u0439\u043d \u0437\u0430\u043a\u0430\u0437 \u0435\u0434\u044b \u043d\u0430 \u0434\u043e\u043c,\u043e\u0444\u0438\u0441.")}),Object(o.jsx)("meta",{name:"og:description",content:"".concat(t.title," \u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430. \u0417\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u0439 ").concat(t.title," \u0441 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u043e\u0439 \u0432 \u0414\u043d\u0435\u043f\u0440\u0435, \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435 \u0438 \u0425\u0430\u0440\u044c\u043a\u043e\u0432\u0435\u2714\ufe0f").concat(t.title," \u043e\u0442 15\u0433\u0440\u043d \u260e 050 719-24-24 \u2714\ufe0f \u041e\u043d\u043b\u0430\u0439\u043d \u0437\u0430\u043a\u0430\u0437 \u0435\u0434\u044b \u043d\u0430 \u0434\u043e\u043c,\u043e\u0444\u0438\u0441.")}),Object(o.jsx)("script",{async:!0,type:"application/ld+json",children:A()}),Object(o.jsx)("script",{type:"application/ld+json",children:JSON.stringify({"@context":"http://schema.org","@type":"WebSite","@id":"#website",url:"https://24rolls.zp.ua/",name:"\u0421\u0443\u0448\u0438 24Rolls Dnepr",potentialAction:{"@type":"SearchAction",target:"https://24rolls.zp.ua/?s={search_term_string}","query-input":"required name=search_term_string"}})}),Object(o.jsx)("script",{type:"application/ld+json",children:JSON.stringify({"@context":"http://schema.org","@type":"Organization",url:"https://24rolls.zp.ua/",contactPoint:[{"@type":"ContactPoint",telephone:"068 719 24 24",contactType:["customer service","sales"],areaServed:["UA"],contactOption:["TollFree"],availableLanguage:["Russian","Ukrainian"]}],sameAs:["https://www.youtube.com/channel/UCmJwKEidDraJtVdYtpnsJSA","https://www.instagram.com/24rolls.com.ua/"]})})]}),!z&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(f.a,{title:e(t.title),svg:!0,h:"h1"}),Object(o.jsx)(y,{filters:t.filters})]}),k&&Object(o.jsx)(g.a,{}),z&&!k&&Object(o.jsx)(x.a,{}),s&&!k&&!z&&Object(o.jsx)("div",{className:"rolls_container_block",children:s.map((function(e){return Object(a.createElement)(b.a,Object(c.a)(Object(c.a)({},t),{},{style:"open-modal",key:e._id,food:e,width:window.innerWidth<610}))}))}),!s[0]&&!k&&!z&&Object(o.jsxs)("p",{children:[" ","\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u043e\u0432\u0430\u0440\u043e\u0432..."," "]})]})}));e.default=_}}]);
//# sourceMappingURL=4.004a3e18.chunk.js.map