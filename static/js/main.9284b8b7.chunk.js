(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),r=n(3),c=n.n(r),o=(n(12),n(4)),a=n(5),i=n(7),h=n(6),u=(n(13),n(14),n(15),n(0)),l=function(e){return Object(u.jsxs)("div",{className:"card-container",children:[Object(u.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),Object(u.jsx)("h1",{children:e.monster.name}),Object(u.jsx)("p",{children:e.monster.email})]})},d=function(e){return Object(u.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(u.jsx)(l,{monster:e},e.id)}))})},j=(n(17),function(e){var t=e.placeholder,n=e.handleChange;return Object(u.jsx)("input",{placeholder:t,className:"search",type:"search",onChange:n})}),m=function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchFilter:t.target.value})},e.state={monsters:[],searchFilter:""},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchFilter,s=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(j,{placeholder:"search monster",handleChange:this.handleChange}),Object(u.jsx)(d,{monsters:s})]})}}]),n}(s.Component),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),s(e),r(e),c(e),o(e)}))};c.a.render(Object(u.jsx)("div",{children:Object(u.jsx)("p",{children:Object(u.jsx)(m,{})})}),document.getElementById("root")),f()}],[[18,1,2]]]);
//# sourceMappingURL=main.9284b8b7.chunk.js.map