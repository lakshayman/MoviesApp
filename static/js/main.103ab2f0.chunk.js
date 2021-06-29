(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{77:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var n,r,c,i,s,o=a(0),u=a.n(o),l=a(43),d=a.n(l),b=a(23),j=a(4),p=a(15),v=a(16),h=a(18),m=a(17),O=a(6),x=a(7),g=a(2),f=x.a.div.attrs({className:"collpase navbar-collapse"})(n||(n=Object(O.a)([""]))),y=x.a.div.attrs({className:"navbar-nav mr-auto"})(r||(r=Object(O.a)([""]))),w=x.a.div.attrs({className:"collpase navbar-collapse"})(c||(c=Object(O.a)([""]))),k=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"render",value:function(){return Object(g.jsx)(u.a.Fragment,{children:Object(g.jsx)(f,{children:Object(g.jsxs)(y,{children:[Object(g.jsx)(w,{children:Object(g.jsx)(b.b,{to:"/",className:"nav-link",children:"Create Movie"})}),Object(g.jsx)(w,{children:Object(g.jsx)(b.b,{to:"/list",className:"nav-link",children:"List Movies"})})]})})})}}]),a}(o.Component),C=x.a.div.attrs({className:"container"})(i||(i=Object(O.a)([""]))),N=x.a.nav.attrs({className:"navbar navbar-expand-lg navbar-dark bg-dark"})(s||(s=Object(O.a)(["\n    margin-bottom: 20 px;\n"]))),M=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"render",value:function(){return Object(g.jsx)(C,{children:Object(g.jsx)(N,{children:Object(g.jsx)(k,{})})})}}]),a}(o.Component),S=a(13),I=a.n(S),L=a(20),z=a(47),B=a.n(z).a.create({baseURL:"https://mysterious-river-71761.herokuapp.com/api"}),F={insertMovie:function(e){return B.post("/movie",e)},getAllMovies:function(){return B.get("/movies")},updateMovieById:function(e,t){return B.put("/movie/".concat(e),t)},deleteMovieById:function(e){return B.delete("/movie/".concat(e))},getMovieById:function(e){return B.get("/movie/".concat(e))}};a(77);var H,R,Y,A,D,J,P,U=function(){return Object(g.jsx)("div",{className:"loader"})},V=a(48),E=a.n(V),T=a(49),q=(a(96),x.a.div(H||(H=Object(O.a)(["\n    padding: 0 40px 40px 40px;\n"])))),G=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).componentDidMount=Object(L.a)(I.a.mark((function e(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isLoading:!0}),e.next=3,F.getAllMovies().then((function(e){n.setState({movies:e.data.data,isLoading:!1})}));case 3:case"end":return e.stop()}}),e)}))),n.state={movies:[],isLoading:!0},n}return Object(v.a)(a,[{key:"render",value:function(){var e=this.state,t=e.movies,a=e.isLoading,n=[{Header:"Video",accessor:"video",Cell:function(e){return Object(g.jsx)("span",{children:Object(g.jsx)(E.a,{className:"videoFrame activator",url:e.value,light:e.original.thumbnail,playing:!0,controls:!0})})}},{Header:"Name",accessor:"name",width:500},{Header:"Language",accessor:"language",width:400},{Header:"Year Of Realease",accessor:"year",width:200}],r=!0;return t.length||(r=!1),Object(g.jsx)(q,{children:a?Object(g.jsx)(U,{}):r&&Object(g.jsx)(T.a,{data:t,columns:n,loading:a,defaultPageSize:10,showPageSizeOptions:!0,minRows:0})})}}]),a}(o.Component),K=a(28),Q=a.n(K),W=x.a.h1.attrs({className:"h1"})(R||(R=Object(O.a)([""]))),X=x.a.div.attrs({className:"form-group"})(Y||(Y=Object(O.a)(["\n    margin: 0 30px;\n"]))),Z=x.a.label(A||(A=Object(O.a)(["\n    margin: 5px;\n"]))),$=x.a.input.attrs({className:"form-control"})(D||(D=Object(O.a)(["\n    margin: 5px;\n"]))),_=x.a.button.attrs({className:"btn btn-primary"})(J||(J=Object(O.a)(["\n    margin: 15px 15px 15px 5px;\n"]))),ee=x.a.a.attrs({className:"btn btn-danger"})(P||(P=Object(O.a)(["\n    margin: 15px 15px 15px 5px;\n"]))),te=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).handleChangeInputName=function(){var e=Object(L.a)(I.a.mark((function e(t){var a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.target.value,n.setState({name:a});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.handleChangeInputYear=function(){var e=Object(L.a)(I.a.mark((function e(t){var a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.target.validity.valid?t.target.value:n.state.year,n.setState({year:a});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.handleChangeInputLanguage=function(){var e=Object(L.a)(I.a.mark((function e(t){var a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.target.value,n.setState({language:a});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.handleIncludeMovie=Object(L.a)(I.a.mark((function e(){var t,a,r,c,i,s,o,u,l,d,b,j,p;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.state,a=t.name,r=t.year,c=t.language,i=t.thumbnail,s=t.video,o={name:a,year:r,language:c,thumbnail:i,video:s},u=i.indexOf("/"),l=i.indexOf(":"),d=i.substring(l+1,u),b=s.indexOf("/"),j=s.indexOf(":"),p=s.substring(j+1,b),"image"===d){e.next=11;break}return n.setState({error:n.state.error+" thumbnail type is wrong"}),e.abrupt("return");case 11:if("video"===p){e.next=14;break}return n.setState({error:n.state.error+" video type is wrong"}),e.abrupt("return");case 14:return n.setState({loading:!0}),e.next=17,F.insertMovie(o).then((function(e){n.setState({loading:!1}),window.alert("Movie inserted successfully"),window.location.reload()}));case 17:case"end":return e.stop()}}),e)}))),n.state={name:"",year:"",language:"",thumbnail:"",video:"",loading:!1,error:""},n}return Object(v.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.year,r=t.language,c=t.loading,i=t.error;return Object(g.jsx)("div",{children:c?Object(g.jsx)(U,{}):Object(g.jsxs)(X,{children:[Object(g.jsx)(W,{children:"Create Movie"}),Object(g.jsx)(Z,{children:"Name: "}),Object(g.jsx)($,{type:"text",value:a,onChange:this.handleChangeInputName}),Object(g.jsx)(Z,{children:"Year Of Release: "}),Object(g.jsx)($,{type:"number",step:"0.1",lang:"en-US",min:"0",max:"9999",pattern:"[0-9][0-9[0-9][0-9]",value:n,onChange:this.handleChangeInputYear}),Object(g.jsx)(Z,{children:"Language: "}),Object(g.jsx)($,{type:"text",value:r,onChange:this.handleChangeInputLanguage}),Object(g.jsx)(Z,{children:"Thumbnail:   (Max File Size 4 mb)   :"}),Object(g.jsx)(Q.a,{type:"file",multiple:!1,onDone:function(t){var a=t.base64;return e.setState({thumbnail:a})}}),Object(g.jsx)(Z,{children:"Video:   (Max File Size 10 mb) :"}),Object(g.jsx)(Q.a,{type:"file",multiple:!1,onDone:function(t){var a=t.base64;return e.setState({video:a})}}),Object(g.jsx)(_,{onClick:this.handleIncludeMovie,children:"Add Movie"}),Object(g.jsx)(ee,{href:"/movies/list",children:"Cancel"}),Object(g.jsx)("div",{children:i})]})})}}]),a}(o.Component);a(97);var ae=function(){return Object(g.jsxs)(b.a,{basename:"/",children:[Object(g.jsx)(M,{}),Object(g.jsx)(j.a,{path:"/list",exact:!0,component:G}),Object(g.jsx)(j.a,{path:"/",exact:!0,component:te})]})};d.a.render(Object(g.jsx)(ae,{}),document.getElementById("root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.103ab2f0.chunk.js.map