(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var s=a(1),i=a.n(s),n=a(9),r=a.n(n),o=a(4),c=a(2),l=a(3),d=a(6),u=a(5),m=(a(14),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}]),h=a(7),p=(a(15),a(0)),b=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={title:"",userName:"",classValidTitle:"",classValidUser:"",todoList:[]},e.userNameHandler=function(t){var a,s=t.target,i=s.name,n=s.value;e.setState((a={},Object(h.a)(a,i,n),Object(h.a)(a,"classValidUser",""),Object(h.a)(a,"classValidTitle",""),a))},e.addUserToList=function(t){t.preventDefault(),e.state.userName?e.state.title?e.setState((function(e){return{todoList:[].concat(Object(o.a)(e.todoList),[{title:e.title,name:e.userName,id:e.todoList.length+1}]),title:"",userName:""}})):e.setState({classValidTitle:"showTitle"}):e.setState({classValidUser:"showUser"})},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t,a){t.todoList!==this.state.todoList&&this.props.updateTodoList(this.state.todoList)}},{key:"render",value:function(){var e=this.props.users,t=this.state,a=t.title,s=t.userName,i=t.classValidTitle,n=t.classValidUser;return Object(p.jsx)("div",{className:"form-style-6",children:Object(p.jsxs)("form",{onSubmit:this.addUserToList,children:[Object(p.jsx)("h1",{children:"Add Todo form"}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{children:"Users: "}),e.length]}),Object(p.jsxs)("select",{name:"userName",onChange:this.userNameHandler,value:s,children:[Object(p.jsx)("option",{name:"userName",children:"Please select User..."}),e.map((function(e){return Object(p.jsx)("option",{children:e.name},e.id)}))]}),Object(p.jsx)("p",{className:"validation ".concat(n),children:"Please choose a user"}),Object(p.jsx)("input",{onChange:this.userNameHandler,name:"title",type:"text",placeholder:"Write a title...",maxLength:64,value:a}),Object(p.jsx)("p",{className:"validation ".concat(i),children:"Please enter the title"}),Object(p.jsx)("input",{type:"submit",value:"Add"})]})})}}]),a}(i.a.Component),j=function(e){var t=e.todoList;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("ul",{className:"todoList",children:t.map((function(e){return Object(p.jsxs)("li",{children:[Object(p.jsx)("h3",{children:e.name}),Object(p.jsx)("p",{children:e.title}),Object(p.jsx)("p",{children:e.id})]},e.id)}))})})},g=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={todoList:[]},e.updateTodoList=function(t){e.setState({todoList:Object(o.a)(t)})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(b,{users:m,updateTodoList:this.updateTodoList}),Object(p.jsx)(j,{todoList:this.state.todoList})]})}}]),a}(i.a.Component);r.a.render(Object(p.jsx)(g,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.abf8dd42.chunk.js.map