"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[893],{9893:function(n,e,t){t.r(e),t.d(e,{default:function(){return N}});var r,o,i,a=t(2791),l=t(9434),c=t(4270),s=t(168),u=t(1191),d=u.ZP.ul(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n  width: 600px;\n"]))),p=u.ZP.li(o||(o=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n"]))),m=u.ZP.button(i||(i=(0,s.Z)(["\n  display: block;\n  outline: none;\n  border: none;\n  min-width: 50px;\n  height: 30px;\n  border-radius: 5px;\n  cursor: pointer;\n  background-color: orange;\n  margin-left: 10px;\n  &:hover {\n    background-color: red;\n    transition: 250;\n  }\n"]))),x=t(208),h=t(184),b=function(n){var e=n.visible,t=(0,l.I0)();return(0,h.jsxs)(p,{children:[e.name,": ",e.number,(0,h.jsx)(m,{type:"button",onClick:function(){return t((0,x.GK)(e.id))},children:"Delete"})]})},f=t(6916),g=function(n){return n.contacts.items};console.log(g);var j,v,Z,y,k,P,w,C=function(n){return n.contacts.isLoading},F=function(n){return n.contacts.error},q=(0,f.P1)([g,function(n){return n.filter}],(function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))})),A=function(){var n=(0,l.v9)(q);return(0,h.jsx)(d,{children:n.map((function(n){return(0,h.jsx)(b,{visible:n},n.id)}))})},z=u.ZP.form(j||(j=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n  border: 1px solid black;\n"]))),I=u.ZP.label(v||(v=(0,s.Z)(["\n  text-align: center;\n  margin-bottom: 10px;\n"]))),_=u.ZP.input(Z||(Z=(0,s.Z)(["\n  border: none;\n  border-radius: 5px;\n  background-color: lightblue;\n  margin-bottom: 10px;\n  padding-left: 10px;\n  height: 30px;\n"]))),L=u.ZP.button(y||(y=(0,s.Z)(["\n  display: block;\n  outline: none;\n  border: none;\n  min-width: 100px;\n  height: 30px;\n  border-radius: 5px;\n  cursor: pointer;\n  background-color: aqua;\n  &:hover {\n    background-color: aquamarine;\n    transition: 250;\n  }\n"]))),D=t(5984),B=function(){var n=(0,l.I0)(),e=(0,D.x0)(),t=(0,D.x0)();return(0,h.jsxs)(z,{onSubmit:function(e){e.preventDefault();var t=e.target,r={id:(0,D.x0)(),name:t.elements.name.value,number:t.elements.number.value};console.log(r),n((0,x.el)(r)),t.reset()},children:[(0,h.jsx)(I,{htmlFor:e,children:"Full name"}),(0,h.jsx)(_,{id:e,type:"text",name:"name",placeholder:"enter name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,h.jsx)(I,{htmlFor:t,children:"Phone number"}),(0,h.jsx)(_,{id:t,type:"tel",name:"number",placeholder:"enter number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,h.jsx)(L,{type:"submit",children:"Add contact"})]})},E=u.ZP.div(k||(k=(0,s.Z)(["\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),G=u.ZP.label(P||(P=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 5px;\n"]))),J=u.ZP.input(w||(w=(0,s.Z)(["\n  border: none;\n  border-radius: 5px;\n  background-color: lightblue;\n  margin-top: 10px;\n  padding-left: 10px;\n  height: 30px;\n"]))),K=t(6895),M=function(n){var e=n.value,t=(0,l.I0)();return(0,h.jsxs)(G,{children:["Find contact by name",(0,h.jsx)(J,{type:"text",name:"search",placeholder:"enter for search",value:e,onChange:function(n){return t((0,K.x)(n.target.value))}})]})};function N(){var n=(0,l.I0)(),e=(0,l.v9)(C),t=(0,l.v9)(g),r=(0,l.v9)(F);return(0,a.useEffect)((function(){n((0,x.yF)())}),[n]),(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(E,{children:[(0,h.jsx)(c.q,{children:(0,h.jsx)("h1",{children:"Phonebook"})}),(0,h.jsx)(B,{}),e&&!r&&(0,h.jsx)("b",{children:"Request in progress..."}),(0,h.jsx)("h2",{children:"Contacts"}),t.length>0&&(0,h.jsx)(M,{}),t.length>0&&(0,h.jsx)(A,{})]})})}}}]);
//# sourceMappingURL=893.151dbcbe.chunk.js.map