(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(6),i=a.n(n),s=a(3),c=a(2),r=a(5),l=a(1),o=a(0),d=function(e){var t=e.todo;return Object(o.jsxs)("div",{"data-id":t.id,children:[Object(o.jsx)("p",{children:t.id}),Object(o.jsx)("p",{children:t.title}),t.completed?Object(o.jsx)("p",{className:"completed",children:"Completed"}):Object(o.jsx)("p",{className:"notCompleted",children:"Not completed"})]})},u=function(e){var t=e.user;return Object(o.jsx)("strong",{children:t})},m=function(e){var t=e.todoWithUser;return Object(o.jsx)("ul",{className:"container",children:t.map((function(e){return Object(o.jsx)("li",{children:Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)(u,{user:e.user}),Object(o.jsx)(d,{todo:e})]})},e.id)}))})},j=(a(12),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),b=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"delectus aut autem",completed:!0,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],h=b.map((function(e){var t;return Object(r.a)(Object(r.a)({},e),{},{user:(null===(t=j.find((function(t){return t.id===e.userId})))||void 0===t?void 0:t.name)||null})}));h.sort((function(e,t){return e.id-t.id}));var p=b.sort((function(e,t){return t.id-e.id}))[0].id,O=function(){var e=Object(l.useState)(""),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(l.useState)(""),r=Object(c.a)(i,2),d=r[0],u=r[1],b=Object(l.useState)(p+1),O=Object(c.a)(b,2),f=O[0],x=O[1],v=Object(l.useState)(!0),N=Object(c.a)(v,2),g=N[0],y=N[1],S=Object(l.useState)(!0),C=Object(c.a)(S,2),w=C[0],_=C[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{className:"title",children:"Add todo form"}),Object(o.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault();var t=!0;a&&a.replace(/[^a-z\d \u0430-\u044f]/gi,"").trim()?y(!0):(y(!1),t=!1),d?_(!0):(_(!1),t=!1),t&&function(){var e=Object(s.a)({},f-1,{id:f,title:a.replace(/[^a-z\d \u0430-\u044f]/gi,""),completed:!1,user:d});h=Object.assign(h,e),x((function(e){return e+1}))}()},children:[Object(o.jsx)("input",{className:"input",type:"text",id:"newTodo",name:"newTodo",value:a,placeholder:"New todo",onChange:function(e){n(e.target.value)},"data-cy":"titleInput"}),Object(o.jsx)("span",{className:"message",children:!g&&"Please enter the title"}),Object(o.jsx)("div",{className:"select",children:Object(o.jsxs)("select",{className:"select__element",name:"users",onChange:function(e){u(e.target.value)},"data-cy":"userSelect",children:[Object(o.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Choose a user"}),j.map((function(e){return Object(o.jsx)("option",{value:e.name,children:e.name})}))]})}),Object(o.jsx)("span",{className:"message",children:!w&&"Please choose a user"}),Object(o.jsx)("button",{className:"button",type:"submit",children:"Add a new todo"})]}),Object(o.jsx)(m,{todoWithUser:h})]})};i.a.render(Object(o.jsx)(O,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.6322817a.chunk.js.map