(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],{85:function(e,t,a){e.exports=a(96)},90:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(9),i=a.n(l),r=(a(90),a(28)),s=a(33),c=a(34),m=a(36),d=a(35),u=a(122),p=a(125),E=a(148),f=a(127),g=a(19),h=a(128),b=a(126),S=a(129),v=a(69),w=a.n(v),I=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.text;return o.a.createElement("div",null,o.a.createElement(u.a,{role:void 0,dense:!0,button:!0},o.a.createElement(p.a,null,o.a.createElement(E.a,{edge:"start",tabIndex:-1,disableRipple:!0})),o.a.createElement(f.a,{onClick:this.props.openDialog.bind(this,"task",this.props.id)},o.a.createElement(g.a,{multiline:!0,style:{wordWrap:"break-word"}},a)),o.a.createElement(h.a,null,o.a.createElement(b.a,{edge:"end","aria-label":"comments",onClick:this.props.delItem.bind(this,t)},o.a.createElement(w.a,{fontSize:"small",color:"secondary"})))),o.a.createElement(S.a,null))}}]),a}(n.Component),O=a(45),j=a(71),k=a.n(j),T=a(131),x=a(132),C=a(74),y=a(147),D=a(133),_=a(134),N=a(149),J=a(130),z=Object(J.a)((function(e){return{paper:{padding:e.spacing(1),backgroundColor:e.palette.background.paper}}}));function M(e){var t=z(),a=Object(n.useState)(null),l=Object(O.a)(a,2),i=l[0],r=l[1],s=Object(n.useState)(!1),c=Object(O.a)(s,2),m=c[0],d=c[1],u=Boolean(i),p=function(e){r(i?null:e.currentTarget)},E=function(){r(null),e.delTodo()};return o.a.createElement("div",null,o.a.createElement(T.a,{open:u,onMouseDown:function(){p(!1)},anchorEl:i,placement:"bottom-end",transition:!0},(function(a){var n=a.TransitionProps;return o.a.createElement(x.a,Object.assign({},n,{timeout:350}),o.a.createElement(C.a,{elevation:1,className:t.paper},o.a.createElement(y.a,{flexDirection:"column"},o.a.createElement(D.a,{flex:!0,"aria-label":"rename",size:"small",onClick:function(){return e.openDialog("to-do")}},"Rename"),o.a.createElement(D.a,{flex:!0,"aria-label":"delete",size:"small",onClick:E},"Delete"))))})),o.a.createElement(_.a,{action:o.a.createElement(b.a,{"aria-label":"settings",onClick:p},o.a.createElement(k.a,null)),title:e.title}),o.a.createElement(N.a,{open:m,onClose:function(){d(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},o.a.createElement(C.a,{style:{width:"400",height:"300"}},o.a.createElement("p",null,"dwdwdwdw"))))}var B=a(150),R=a(135),U=a(136),W=a(146),q=a(138),A=function(e){var t=e.onClose,a=e.open,l=e.mode,i=Object(n.useState)(""),r=Object(O.a)(i,2),s=r[0],c=r[1],m=function(e){t(s),c("")};return o.a.createElement(B.a,{onClose:function(){m()},"aria-labelledby":"simple-dialog-title",open:a},o.a.createElement(R.a,null,l),o.a.createElement(U.a,null,o.a.createElement(W.a,{onChange:function(e){c(e.target.value)},label:"Type here"}),o.a.createElement(q.a,null,o.a.createElement(D.a,{onClick:m},"Ok"),o.a.createElement(D.a,{onClick:m},"Cancel"))))},F=a(72),G=a.n(F),P=a(139),H=a(140),K=a(141),L=a(142),Q=a(137),V=a(143),X=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).openDialog=function(e,t){n.mode=e,n.id=t,n.setState({dialogStatus:!0})},n.closeDialog=function(e){""!==e&&"to-do"===n.mode&&n.renameTodo(e),""!==e&&"task"===n.mode&&n.renameItem(e,n.id),n.setState({dialogStatus:!1})},n.renameTodo=function(e){n.props.renameTodo(n.props.id,e)},n.renameItem=function(e,t){var a=Object(r.a)(n.state.items.map((function(a){return a.id===t&&(a.text=e),a})));n.setState({items:a})},n.addItem=function(){var e=""===n.state.inputText?"Task":n.state.inputText;n.setState({items:[].concat(Object(r.a)(n.state.items),[{id:n.state.newId,text:e,complete:!1}]),newId:n.state.newId+1,inputText:""})},n.delItem=function(e){n.setState({items:Object(r.a)(n.state.items.filter((function(t){return t.id!==e})))})},n.onChange=function(e){n.setState({inputText:e.target.value})},n.state={inputText:"",newId:1,items:[],dialogStatus:!1},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.setState({newId:localStorage.getItem("newId"+this.props.id)||this.state.newId,items:JSON.parse(localStorage.getItem("items"+this.props.id))||this.state.items})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("newId"+this.props.id,this.state.newId),localStorage.setItem("items"+this.props.id,JSON.stringify(this.state.items))}},{key:"render",value:function(){var e=this;return o.a.createElement(P.a,{item:!0,xs:12,sm:4},o.a.createElement(y.a,{mt:2},o.a.createElement(H.a,null,o.a.createElement(K.a,{variant:"elevation",elevation:"8"},o.a.createElement(M,{title:this.props.title,openDialog:this.openDialog,delTodo:this.props.delTodo.bind(this,this.props.id)}),o.a.createElement(L.a,null,o.a.createElement(y.a,{height:"11rem",overflow:"auto"},o.a.createElement(Q.a,null,this.state.items.map((function(t){return o.a.createElement(I,{id:t.id,text:t.text,delItem:e.delItem,openDialog:e.openDialog})}))))),o.a.createElement(V.a,{disableSpacing:!0},o.a.createElement(y.a,{display:"flex",alignItems:"flex-end",flexDirection:"row",style:{width:"100%"}},o.a.createElement(y.a,{flexGrow:2},o.a.createElement(W.a,{fullWidth:!0,multiline:!0,autoFocus:!0,onChange:this.onChange,value:this.state.inputText,label:"Add task...",required:"true"})),o.a.createElement(y.a,null,o.a.createElement(b.a,{type:"submit",size:"small",onClick:this.addItem},o.a.createElement(G.a,{color:"secondary"})))))))),o.a.createElement(A,{open:this.state.dialogStatus,onClose:this.closeDialog,mode:"Edit this ".concat(this.mode)}))}}]),a}(o.a.Component),Y=a(73),Z=a.n(Y),$=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),console.log(localStorage.getItem("todos")),(n=t.call(this,e)).openDialog=function(){n.setState({dialogStatus:!0})},n.onCloseDialog=function(e){n.setState({dialogStatus:!1}),n.addTodo(e)},n.addTodo=function(e){""!==e&&n.setState({todos:[].concat(Object(r.a)(n.state.todos),[{id:n.state.new_id,title:e}]),new_id:Number(n.state.new_id)+1,name:""})},n.delTodo=function(e){n.setState({todos:Object(r.a)(n.state.todos.filter((function(t){return t.id!==e})))})},n.renameTodo=function(e,t){var a=Object(r.a)(n.state.todos.map((function(a){return a.id===e&&(a.title=t),a})));n.setState({todos:a})},n.state={new_id:1,todos:[],dialogStatus:!1,name:""},n}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(){localStorage.setItem("new_id",this.state.new_id),localStorage.setItem("todos",JSON.stringify(this.state.todos))}},{key:"componentDidMount",value:function(){this.setState({new_id:Number(localStorage.getItem("new_id"))||this.state.new_id,todos:JSON.parse(localStorage.getItem("todos"))||this.state.todos})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(P.a,{container:!0,spacing:2,alignItems:"center",justify:"center"},this.state.todos.map((function(t){return o.a.createElement(X,{id:t.id,title:t.title,delTodo:e.delTodo,renameTodo:e.renameTodo,className:"col-md"})})),o.a.createElement(b.a,{onClick:this.openDialog},o.a.createElement(Z.a,{fontSize:"large"})),o.a.createElement(A,{open:this.state.dialogStatus,onClose:this.onCloseDialog,mode:"Title for new to-do"})))}}]),a}(o.a.Component),ee=a(144),te=a(145);var ae=function(){return o.a.createElement(P.a,{container:!0,direction:"column"},o.a.createElement(P.a,{item:!0,xs:12},o.a.createElement(ee.a,{position:"static"},o.a.createElement(te.a,null,o.a.createElement(g.a,{variant:"h6"},"Todo app")))),o.a.createElement(y.a,{mt:"2rem"},o.a.createElement(P.a,{container:!0,item:!0,alignItems:"center"},o.a.createElement(P.a,{item:!0,xs:!1,sm:!1,md:1}),o.a.createElement(P.a,{item:!0,xs:12,sm:12,md:10},o.a.createElement($,null)),o.a.createElement(P.a,{item:!0,xs:!1,sm:!1,md:1}))))};i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(ae,null)),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.1d321241.chunk.js.map