(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(2),s=n.n(r),c=(n(15),n(3)),l=n(4),o=n(6),u=n(5),m=n(7),d=n(1),h=n(9),b=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).createTasks=n.createTasks.bind(Object(d.a)(Object(d.a)(n))),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"createTasks",value:function(e){var t=this;return i.a.createElement("li",{onClick:function(){return t.delete(e.key)},key:e.key}," ",e.text," ")}},{key:"delete",value:function(e){console.log("Key is: "+e),this.props.delete(e)}},{key:"render",value:function(){var e=this.props.entries.map(this.createTasks);return i.a.createElement("ul",{className:"theList"},i.a.createElement(h.a,{duration:500,easing:"ease-out"},e))}}]),t}(a.Component),f=(n(17),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={items:[]},n.addItem=n.addItem.bind(Object(d.a)(Object(d.a)(n))),n.deleteItem=n.deleteItem.bind(Object(d.a)(Object(d.a)(n))),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"addItem",value:function(e){if(""!==this._inputElement.value){var t={text:this._inputElement.value,key:Date.now()};this.setState(function(e){return{items:e.items.concat(t)}})}this._inputElement.value="",console.log(this.state.items),e.preventDefault()}},{key:"deleteItem",value:function(e){console.log("key in deleteItem: "+e),console.log("Items at delete: "+this.state.items);var t=this.state.items.filter(function(t){return t.key!==e});this.setState({items:t})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"todoListMain"},i.a.createElement("div",{className:"header"},i.a.createElement("form",{onSubmit:this.addItem},i.a.createElement("input",{ref:function(t){return e._inputElement=t},placeholder:"Ingresar ingrediente"}),i.a.createElement("button",{type:"submit"},"A\xf1adir"))),i.a.createElement(b,{entries:this.state.items,delete:this.deleteItem}))}}]),t}(a.Component)),p=document.querySelector("#container");s.a.render(i.a.createElement("div",null,i.a.createElement("h2",null," Hoy prepararemos una deliciosa receta"),i.a.createElement("h4",null," Por favor a\xf1ade los ingredientes que necesitaremos, "),i.a.createElement("h4",null," Haz clic en un ingrediente registrado y \xe9ste se eliminar\xe1 "),i.a.createElement(f,null)),p)}},[[10,2,1]]]);
//# sourceMappingURL=main.25855503.chunk.js.map