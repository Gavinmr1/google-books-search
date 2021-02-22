(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(66)},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(26),o=a.n(r),c=(a(35),a(36),a(37),a(28)),i=a(2),s=a(27),m=a(11),u=a(12),d=a(14),h=a(13),f=a(15);function g(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function v(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function E(e){var t=e.size,a=e.children;return l.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}var p=function(e){var t=e.children;return l.a.createElement("div",{style:{clear:"both",marginTop:30,paddingTop:120,paddingBottom:120,textAlign:"center",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundImage:"url(./google.jpg)"},className:"jumbotron border"},t)},b=a(10),k=a.n(b),N={searchBooks:function(e){return k.a.get("https://www.googleapis.com/books/v1/volumes?q="+e)},saveBook:function(e){return k.a.post("/api/books",e)},findBooks:function(){return k.a.get("/api/books")},deleteBook:function(e){return k.a.delete("/api/books/"+e)}},B=function(e){return l.a.createElement("div",{className:"card text-center",style:{marginBottom:"20px"}},l.a.createElement("div",{className:"card-header"},l.a.createElement("h5",null,e.heading)),l.a.createElement("div",{className:"card-body text-left"},e.children))},S=function(e){return l.a.createElement("form",null,l.a.createElement("div",{className:"form-group",style:{textAlign:"center"}},l.a.createElement("input",{style:{textAlign:"left"},onChange:e.handleInputChange,value:e.value,name:"title",type:"text",className:"form-control",placeholder:"Search for a Book, Author, or Topic",id:"title"}),l.a.createElement("br",null),l.a.createElement("button",{onClick:e.handleFormSubmit,className:"btn btn-primary"},"Search")))},y=function(e){return l.a.createElement("span",null,l.a.createElement("div",{className:"row",style:{marginBottom:20}},l.a.createElement("div",{className:"col-8"},l.a.createElement("h5",{className:"card-title"},e.title),l.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},e.authors)),l.a.createElement("div",{className:"col-4"},l.a.createElement("a",{href:e.link,target:"_blank",style:{paddingLeft:40,paddingRight:40,marginBottom:10,float:"right",marginLeft:10},className:"btn btn-primary"},"View"),l.a.createElement("button",{onClick:e.handleSave,className:"btn btn-primary save-btn",style:{paddingLeft:40,paddingRight:40,marginBottom:10,float:"right",marginLeft:10}},"Save Book"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-2 text-center"},l.a.createElement("img",{src:e.image,alt:"...",className:"img-thumbnail"})),l.a.createElement("div",{className:"col-10"},l.a.createElement("p",{className:"card-text"},e.description))),l.a.createElement("hr",{style:{clear:"both"}}))},x=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={books:[],title:""},a.handleInputChange=function(e){e.preventDefault();var t=e.target,n=t.name,l=t.value;a.setState(Object(s.a)({},n,l))},a.handleFormSubmit=function(e){e.preventDefault(),N.searchBooks(a.state.title).then(function(e){a.setState({books:e.data.items,title:""}),console.log(a.state.books)}).catch(function(e){return console.log(e)})},a.handleSave=function(e){N.saveBook(e).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(g,null,l.a.createElement(v,{fluid:!0},l.a.createElement(E,{size:"12"},l.a.createElement(p,null,l.a.createElement("h1",null,"Google Books Search"),l.a.createElement("p",null,"Serach for and Save Books of Interest")))),l.a.createElement(v,{fluid:!0},l.a.createElement(E,{size:"12"},l.a.createElement(B,{heading:"Google Books Search"},l.a.createElement(S,{value:this.state.title,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit})))),l.a.createElement(v,{fluid:!0},l.a.createElement(E,{size:"md-12"},this.state.books.length?l.a.createElement(B,{heading:"Search Results"},this.state.books.map(function(t){return l.a.createElement(y,{key:t.id,title:t.volumeInfo.title,authors:t.volumeInfo.authors,image:t.volumeInfo.imageLinks.thumbnail,description:t.volumeInfo.description,link:t.volumeInfo.infoLink,handleSave:function(){return e.handleSave({title:t.volumeInfo.title,authors:t.volumeInfo.authors,image:t.volumeInfo.imageLinks.thumbnail,description:t.volumeInfo.description,link:t.volumeInfo.infoLink})}})})):l.a.createElement(B,{heading:"Search Results"}))))}}]),t}(n.Component),I=function(e){return l.a.createElement("span",null,l.a.createElement("div",{className:"row",style:{marginBottom:20}},l.a.createElement("div",{className:"col-8"},l.a.createElement("h5",{className:"card-title"},e.title),l.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},e.authors)),l.a.createElement("div",{className:"col-4"},l.a.createElement("a",{href:e.link,target:"_blank",style:{paddingLeft:40,paddingRight:40,marginBottom:10,float:"right",marginLeft:10},className:"btn btn-primary"},"View"),l.a.createElement("button",{onClick:e.handleDelete,className:"btn btn-primary save-btn",style:{paddingLeft:40,paddingRight:40,marginBottom:10,float:"right",marginLeft:10}},"Delete"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-2 text-center"},l.a.createElement("img",{src:e.image,alt:"...",className:"img-thumbnail"})),l.a.createElement("div",{className:"col-10"},l.a.createElement("p",{className:"card-text"},e.description))),l.a.createElement("hr",{style:{clear:"both"}}))},w=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={books:[]},a.componentDidMount=function(){a.loadBooks()},a.handleDelete=function(e){N.deleteBook(e).then(function(e){return a.loadBooks()}).catch(function(e){return console.log(e)})},a.loadBooks=function(){N.findBooks().then(function(e){a.setState({books:e.data})}).catch(function(e){return console.log(e)})},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(g,{fluid:!0},l.a.createElement(v,{fluid:!0},l.a.createElement(E,{size:"12"},l.a.createElement(p,null,l.a.createElement("h1",null,"Google Books Search"),l.a.createElement("p",null,"Serach for and Save Books of Interest")))),l.a.createElement(v,{fluid:!0},l.a.createElement(E,{size:"md-12"},this.state.books.length?l.a.createElement(B,{heading:"Saved Books"},this.state.books.map(function(t){return l.a.createElement(I,{key:t._id,title:t.title,authors:t.authors,image:t.image,description:t.description,link:t.link,handleDelete:function(){return e.handleDelete(t._id)}})})):l.a.createElement(B,{heading:"Saved Books"}))))}}]),t}(n.Component);var j=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"Google Books"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/search"},"Search")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/saved"},"Saved")))))},L=function(){return l.a.createElement(g,{fluid:!0},l.a.createElement(v,{fluid:!0},l.a.createElement(E,{size:"md-12"},l.a.createElement(p,null,l.a.createElement("h1",null,"Google Books Search"),l.a.createElement("p",null,"Serach for and Save Books of Interest")))))};var O=function(){return l.a.createElement(c.a,null,l.a.createElement("div",null,l.a.createElement(j,null),l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:x}),l.a.createElement(i.a,{exact:!0,path:"/search",component:x}),l.a.createElement(i.a,{exact:!0,path:"/saved",component:w}),l.a.createElement(i.a,{component:L}))))};o.a.render(l.a.createElement(O,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.94f78825.chunk.js.map