(this.webpackJsonpreactbasico=this.webpackJsonpreactbasico||[]).push([[0],{13:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c(6),r=c.n(o),a=c(5),i=c(7),u=c(15),s=c(0);function l(e){var t=e.ToDo,c=e.ToggleToDo,n=t.id,o=t.task,r=t.completed;return Object(s.jsxs)("li",{children:[Object(s.jsx)("input",{type:"checkbox",checked:r,onChange:function(){c(n)}}),o]})}function j(e){var t=e.ToDoes,c=e.ToggleToDo;return Object(s.jsx)("ul",{children:t.map((function(e){return Object(s.jsx)(l,{ToDo:e,ToggleToDo:c},e.id)}))})}var b="ToDoApp.ToDoes";function d(){var e=Object(n.useState)([{id:1,task:"Tarea 1",completed:!1}]),t=Object(i.a)(e,2),c=t[0],o=t[1],r=Object(n.useRef)();Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem(b));e&&o(e)}),[]),Object(n.useEffect)((function(){localStorage.setItem(b,JSON.stringify(c))}),[c]);return Object(s.jsxs)(n.Fragment,{children:[Object(s.jsx)(j,{ToDoes:c,ToggleToDo:function(e){var t=Object(a.a)(c),n=t.find((function(t){return t.id==e}));n.completed=!n.completleted,o(t)}}),Object(s.jsx)("input",{ref:r,type:"text",placeholder:"Nueva Tarea"}),Object(s.jsx)("button",{onClick:function(){var e=r.current.value;""!=e&&(o((function(t){return[].concat(Object(a.a)(t),[{id:Object(u.a)(),task:e,complete:!1}])})),r.current.value=null)},children:"\u2795"}),Object(s.jsx)("button",{onClick:function(){var e=c.filter((function(e){return!e.completed}));o(e)},children:"\ud83d\uddd1\ufe0f"}),Object(s.jsxs)("div",{children:["Te quedan ",c.filter((function(e){return!e.completed})).length," tareas por terminar"]})]})}r.a.render(Object(s.jsx)(d,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.97ffa0a7.chunk.js.map