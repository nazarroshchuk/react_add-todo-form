(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var s=a(1),i=a.n(s),n=a(4),r=a.n(n),o=a(7),l=a(2),c=a(5),d=a(6),m=a(9),u=a(8),h=(a(14),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}]),b=(a(15),a(0)),p=function(e){var t=e.users,a=e.userNameHandler,s=e.addUserHandler,i=e.valueTitle,n=e.valueUser,r=e.classValidTitle,o=e.classValidUser;return Object(b.jsx)("div",{className:"form-style-6",children:Object(b.jsxs)("form",{onSubmit:s,children:[Object(b.jsx)("h1",{children:"Add Todo form"}),Object(b.jsxs)("p",{children:[Object(b.jsx)("span",{children:"Users: "}),t.length]}),Object(b.jsxs)("select",{name:"userName",onChange:a,value:n,children:[Object(b.jsx)("option",{name:"userName",children:"Please select User..."}),t.map((function(e){return Object(b.jsx)("option",{children:e.name},e.id)}))]}),Object(b.jsx)("p",{className:"validation ".concat(o),children:"Please choose a user"}),Object(b.jsx)("input",{onChange:a,name:"title",type:"text",placeholder:"Write a title...",maxLength:64,value:i}),Object(b.jsx)("p",{className:"validation ".concat(r),children:"Please enter the title"}),Object(b.jsx)("input",{type:"submit",value:"Add"})]})})},g=function(e){var t=e.todoList;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("ul",{className:"todoList",children:t.map((function(e){return Object(b.jsxs)("li",{children:[Object(b.jsx)("h3",{children:e.name}),Object(b.jsx)("p",{children:e.title}),Object(b.jsx)("p",{children:e.id})]},e.id)}))})})},j=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={todoList:[],title:"",userName:"",classValidTitle:"",classValidUser:""},e.userNameHandler=function(t){var a,s=t.target,i=s.name,n=s.value;e.setState((a={},Object(l.a)(a,i,n),Object(l.a)(a,"classValidTitle",""),Object(l.a)(a,"classValidUser",""),a))},e.addUserHandler=function(t){t.preventDefault(),e.state.userName?e.state.title?(e.setState((function(e){return{todoList:[].concat(Object(o.a)(e.todoList),[{title:e.title,name:e.userName,id:e.todoList.length+1}])}})),e.setState({title:"",userName:""})):e.setState({classValidTitle:"showTitle"}):e.setState({classValidUser:"showUser"})},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(p,{users:h,userNameHandler:this.userNameHandler,addUserHandler:this.addUserHandler,valueTitle:this.state.title,valueUser:this.state.userName,classValidTitle:this.state.classValidTitle,classValidUser:this.state.classValidUser}),Object(b.jsx)(g,{todoList:this.state.todoList})]})}}]),a}(i.a.Component);r.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.143ea985.chunk.js.map