(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={filter:"Filter_filter__2_GWH",filter__search:"Filter_filter__search__1FUD6",filter__input:"Filter_filter__input__2m9U9"}},11:function(t,e,n){t.exports={container:"App_container__iR34h",title:"App_title__18Wec"}},26:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(7),s=n.n(r),i=n(4),o=(n(26),n(18)),l=n(2),u=n(3),b=n(17),d=n(14),f=n.n(d),m="https://61c4680ef1af4a0017d9950f.mockapi.io/",j=function(){var t=Object(b.a)(f.a.mark((function t(e){var n,a,c=arguments;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:{},t.next=3,fetch("".concat(m,"/").concat(e),n);case 3:return a=t.sent,t.abrupt("return",a.ok?a.json():Promise.reject(new Error(a.statusText)));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),_="contacts",p=Object(u.b)("contacts/getContactsStatus",(function(){return j(_,t);var t})),h=Object(u.b)("contacts/addContactStatus",(function(t){return function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=Object(l.a)({method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=UTF-8"}},n);return j(t,a)}(_,t)})),O=Object(u.b)("contacts/deleteContactStatus",(function(t){return function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return j("".concat(t,"/").concat(e),Object(l.a)({method:"DELETE"},n))}(_,t)})),x=Object(u.c)({name:"contacts",initialState:{items:[],filter:""},reducers:{chengeFilter:function(t,e){return Object(l.a)(Object(l.a)({},t),{},{filter:e.payload})}},extraReducers:function(t){t.addCase(p.fulfilled,(function(t,e){var n=e.payload;t.items=n})).addCase(h.fulfilled,(function(t,e){return Object(l.a)(Object(l.a)({},t),{},{items:[e.payload].concat(Object(o.a)(t.items))})})).addCase(O.fulfilled,(function(t,e){var n=e.payload,a=t.items.findIndex((function(t){return t.id===n.id}));t.items.splice(a,1)}))}}),v=x.actions.chengeFilter,C=x.reducer,g=n(15),N=n(5),y=n.n(N),w=n(1),S=function(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(g.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(""),o=Object(g.a)(i,2),l=o[0],u=o[1],b=function(t,e){"name"===t&&s(e),"number"===t&&u(e)};return Object(w.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e({name:r,number:l}),s(""),u("")},className:y.a.form,children:[Object(w.jsxs)("label",{className:y.a.label,children:["Name",Object(w.jsx)("input",{className:y.a.label__input,onChange:function(t){return b(t.target.name,t.target.value)},type:"text",name:"name",value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),Object(w.jsxs)("label",{className:y.a.label,children:["Number",Object(w.jsx)("input",{className:y.a.label__input,onChange:function(t){return b(t.target.name,t.target.value)},value:l,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),Object(w.jsx)("button",{className:"btn",children:"Add contact"})]})},F=n(9),k=n.n(F),A=function(t){var e=t.filterContactsList,n=t.onClickDel;return Object(w.jsx)("ul",{className:k.a.contacts__list,children:e.map((function(t){var e=t.name,a=t.phone,c=t.id;return Object(w.jsxs)("li",{className:k.a.contacts__item,children:[Object(w.jsxs)("p",{className:k.a.contacts__text,children:[e,": ",Object(w.jsx)("span",{children:a})]}),Object(w.jsx)("button",{className:"btn",onClick:function(){return n(c)},type:"button",children:"Delete"})]},c)}))})},L=n(10),z=n.n(L),Z=function(t){var e=t.onChangeValue,n=t.filter;return Object(w.jsx)("div",{className:z.a.filter,children:Object(w.jsxs)("label",{className:z.a.filter__search,children:["Find contacts by name",Object(w.jsx)("input",{className:z.a.filter__input,onChange:e,type:"text",name:"filter",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"})]})})},D=n(11),E=n.n(D),T=function(){var t=Object(i.c)((function(t){return t.contacts.items})),e=Object(i.c)((function(t){return t.contacts.filter})),n=Object(i.b)();Object(a.useEffect)((function(){n(p())}),[n]);var c=function(){var n=e.toLowerCase();return t.filter((function(t){var e;return null===(e=t.name)||void 0===e?void 0:e.toLowerCase().includes(n)}))}();return Object(w.jsx)("main",{children:Object(w.jsx)("section",{children:Object(w.jsxs)("div",{className:E.a.container,children:[Object(w.jsx)("h1",{className:E.a.title,children:"Phonebook"}),Object(w.jsx)(S,{onSubmit:function(e){var a=e.name,c={name:a,number:e.number};if(t.some((function(t){var e;return(null===(e=t.name)||void 0===e?void 0:e.toLowerCase())===c.name.toLowerCase()})))return alert("".concat(a," is alredy in contacts"));n(h(c))}}),Object(w.jsx)("h2",{className:E.a.title,children:"Contacts"}),Object(w.jsx)(Z,{onChangeValue:function(t){return n(v(t.target.value))},filter:e}),Object(w.jsx)(A,{filterContactsList:c,onClickDel:function(t){return n(O(t))}})]})})})},J=Object(u.a)({reducer:{contacts:C}});s.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(i.a,{store:J,children:Object(w.jsx)(T,{})})}),document.getElementById("root"))},5:function(t,e,n){t.exports={form:"ContactForm_form__2sHN_",label:"ContactForm_label__yeusj",label__input:"ContactForm_label__input____Sce"}},9:function(t,e,n){t.exports={contacts__list:"ContactList_contacts__list__3wgJs",contacts__item:"ContactList_contacts__item__1bwTU",contacts__text:"ContactList_contacts__text__1ZCfS"}}},[[29,1,2]]]);
//# sourceMappingURL=main.28302623.chunk.js.map