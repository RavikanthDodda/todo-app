(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],{83:function(e,t,a){e.exports=a(94)},88:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(9),o=a.n(i),r=(a(88),a(38)),c=a(31),s=a(32),m=a(34),d=a(33),u=a(120),p=a(123),E=a(143),h=a(125),f=a(26),b=a(126),g=a(124),v=a(127),w=a(68),I=a.n(w),x=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.text;return l.a.createElement("div",null,l.a.createElement(u.a,{role:void 0,dense:!0,button:!0},l.a.createElement(p.a,null,l.a.createElement(E.a,{edge:"start",tabIndex:-1,disableRipple:!0})),l.a.createElement(h.a,null,l.a.createElement(f.a,{multiline:!0,style:{wordWrap:"break-word"}},a)),l.a.createElement(b.a,null,l.a.createElement(g.a,{edge:"end","aria-label":"comments",onClick:this.props.delItem.bind(this,t)},l.a.createElement(I.a,{fontSize:"small",color:"secondary"})))),l.a.createElement(v.a,null))}}]),a}(n.Component),S=a(56),O=a(70),T=a.n(O),j=a(129),y=a(130),k=a(73),C=a(142),_=a(131),D=a(132),J=a(144),N=a(128),z=Object(N.a)((function(e){return{paper:{padding:e.spacing(1),backgroundColor:e.palette.background.paper}}}));function M(e){var t=z(),a=l.a.useState(null),n=Object(S.a)(a,2),i=n[0],o=n[1],r=l.a.useState(!1),c=Object(S.a)(r,2),s=c[0],m=c[1],d=Boolean(i),u=function(){o(null),m(!0)},p=function(){o(null),e.delTodo()};return l.a.createElement("div",null,l.a.createElement(j.a,{open:d,anchorEl:i,placement:"bottom-end",transition:!0},(function(e){var a=e.TransitionProps;return l.a.createElement(y.a,Object.assign({},a,{timeout:350}),l.a.createElement(k.a,{elevation:1,className:t.paper},l.a.createElement(C.a,{flexDirection:"column"},l.a.createElement(_.a,{flex:!0,"aria-label":"rename",size:"small",onClick:u},"Rename"),l.a.createElement(_.a,{flex:!0,"aria-label":"rename",size:"small",onClick:p},"Delete"))))})),l.a.createElement(D.a,{action:l.a.createElement(g.a,{"aria-label":"settings",onClick:function(e){o(i?null:e.currentTarget)}},l.a.createElement(T.a,null)),title:e.title}),l.a.createElement(J.a,{open:s,onClose:function(){m(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},l.a.createElement(k.a,{style:{width:"400",height:"300"}},l.a.createElement("p",null,"dwdwdwdw"))))}var B=a(71),R=a.n(B),U=a(133),W=a(134),A=a(135),F=a(136),G=a(137),P=a(141),q=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).renameTodo=function(){console.log("dw")},n.addItem=function(){var e=""===n.state.inputText?"Task":n.state.inputText;n.setState({items:[].concat(Object(r.a)(n.state.items),[{id:n.state.newId,text:e,complete:!1}]),newId:n.state.newId+1,inputText:""})},n.delItem=function(e){n.setState({items:Object(r.a)(n.state.items.filter((function(t){return t.id!==e})))})},n.onChange=function(e){n.setState({inputText:e.target.value})},n.state={inputText:"",newId:3,items:[{id:1,text:"item",complete:!1},{id:2,text:"item",complete:!1}]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.setState({newId:localStorage.getItem("newId"+this.props.id)||this.state.newId,items:JSON.parse(localStorage.getItem("items"+this.props.id))||this.state.items})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("newId"+this.props.id,this.state.newId),localStorage.setItem("items"+this.props.id,JSON.stringify(this.state.items))}},{key:"render",value:function(){var e=this;return l.a.createElement(U.a,null,l.a.createElement(W.a,{variant:"elevation"},l.a.createElement(M,{title:this.props.title,renameTodo:this.renameTodo,delTodo:this.props.delTodo.bind(this,this.props.id)}),l.a.createElement(A.a,null,l.a.createElement(C.a,{height:"11rem",overflow:"auto"},l.a.createElement(F.a,null,this.state.items.map((function(t){return l.a.createElement(x,{id:t.id,text:t.text,delItem:e.delItem})}))))),l.a.createElement(G.a,{disableSpacing:!0},l.a.createElement(C.a,{display:"flex",alignItems:"flex-end",flexDirection:"row",style:{width:"100%"}},l.a.createElement(C.a,{flexGrow:2},l.a.createElement(P.a,{fullWidth:!0,multiline:!0,autoFocus:!0,onChange:this.onChange,value:this.state.inputText,label:"Add task..."})),l.a.createElement(C.a,null,l.a.createElement(g.a,{type:"submit",size:"small",onClick:this.addItem},l.a.createElement(R.a,{color:"secondary"})))))))}}]),a}(l.a.Component),H=a(138),K=a(72),L=a.n(K),Q=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),console.log(localStorage.getItem("todos")),(n=t.call(this,e)).addTodo=function(){n.setState({todos:[].concat(Object(r.a)(n.state.todos),[{id:n.state.new_id,title:"To do"}]),new_id:n.state.new_id+1})},n.delTodo=function(e){n.setState({todos:Object(r.a)(n.state.todos.filter((function(t){return t.id!==e})))})},n.state={new_id:2,todos:[{id:1,title:"To do"}]},n}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(){localStorage.setItem("new_id",this.state.new_id),localStorage.setItem("todos",JSON.stringify(this.state.todos))}},{key:"componentDidMount",value:function(){this.setState({new_id:localStorage.getItem("new_id")||this.state.new_id,todos:JSON.parse(localStorage.getItem("todos"))||this.state.todos})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(H.a,{container:!0,spacing:2,alignItems:"center",justify:"center"},this.state.todos.map((function(t){return l.a.createElement(H.a,{item:!0,xs:12,sm:4},l.a.createElement(C.a,{mt:2},l.a.createElement(q,{id:t.id,title:t.title,delTodo:e.delTodo,className:"col-md"})))})),l.a.createElement(g.a,{onClick:this.addTodo},l.a.createElement(L.a,{fontSize:"large"}))))}}]),a}(l.a.Component),V=a(139),X=a(140);var Y=function(){return l.a.createElement(H.a,{container:!0,direction:"column"},l.a.createElement(H.a,{item:!0,xs:12},l.a.createElement(V.a,{position:"static"},l.a.createElement(X.a,null,l.a.createElement(f.a,{variant:"h6"},"Todo app")))),l.a.createElement(C.a,{mt:"2rem"},l.a.createElement(H.a,{container:!0,item:!0,alignItems:"center"},l.a.createElement(H.a,{item:!0,xs:!1,sm:!1,md:1}),l.a.createElement(H.a,{item:!0,xs:12,sm:12,md:10},l.a.createElement(Q,null)),l.a.createElement(H.a,{item:!0,xs:!1,sm:!1,md:1}))))};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Y,null)),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.2368b049.chunk.js.map