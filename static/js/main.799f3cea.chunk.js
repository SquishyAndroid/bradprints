(window.webpackJsonpbradprints=window.webpackJsonpbradprints||[]).push([[0],{48:function(e,t,a){e.exports=a(80)},53:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(7),r=a.n(i),l=(a(53),a(18)),o=a(19),c=a(21),m=a(20),u=a(22),h=a(40),p=a.n(h),d=a(41),b=a(42),f=a.n(b),g=a(85),E=a(12),v=a(14),w=a(86),O=a(25),y=a(83),C=a(84),j=g.a.create({position:E.a.TOP}),k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={name:"",email:"",message:"",sent:!1,buttonIcon:"fas fa-paper-plane"},a.handleFormSubmit=function(e){a.state.name&&a.state.email&&a.state.message&&!a.state.sent?f.a.post("https://tinymailer.herokuapp.com/api/mail",{name:a.state.name,email:a.state.email,message:a.state.message},{headers:{Accept:"application/json"}}).then(function(e){console.log(e),200===e.status&&(a.showToast("Message sent!",v.a.SUCCESS),a.setState({buttonIcon:"fas fa-check-circle",sent:!0}),a.props.handleClose())}).catch(function(e){console.log(e),a.showToast("There was an issue.",v.a.DANGER)}):a.showToast("Please complete all the fields and try again.",v.a.DANGER),e.preventDefault()},a.handleFields=function(e){a.setState(Object(d.a)({},e.target.name,e.target.value))},a.showToast=function(e,t){j.show({message:e,intent:t,timeout:3e3})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e;return this.state.name&&this.state.email&&this.state.message.length>5?(e="submit-button",this.state.sent&&(e="submit-button sent disabled")):e="submit-button disabled",s.a.createElement(w.a,Object.assign({title:"Contact Me",onClose:this.props.handleClose},this.props),s.a.createElement("div",{className:O.a.DIALOG_BODY},s.a.createElement("p",{style:{fontSize:"18px",lineHeight:"1.5em"}},"Please feel free to reach out to me regarding any inquiries!"),s.a.createElement("form",{onSubmit:this.handleFormSubmit},s.a.createElement(y.a,{id:"name",name:"name",type:"text",placeholder:"Name",large:"true",fill:"true",rounded:"true",onChange:this.handleFields}),s.a.createElement(y.a,{id:"email",name:"email",type:"email",placeholder:"Email Address",large:"true",fill:"true",rounded:"true",onChange:this.handleFields}),s.a.createElement(C.a,{id:"message",name:"message",placeholder:"Write a message",fill:"true",large:"true",rounded:"true",onChange:this.handleFields}),s.a.createElement("button",{className:e,type:"submit"},"Submit",s.a.createElement("span",null," ",s.a.createElement("i",{className:this.state.buttonIcon}))))))}}]),t}(n.Component),S=(a(79),{particles:{number:{value:150,density:{enable:!0,value_area:2500}},line_linked:{enable:!0,opacity:.04},move:{direction:"right",speed:.05},size:{value:1},opacity:{anim:{enable:!0,speed:1,opacity_min:.05}}},interactivity:{events:{onclick:{enable:!0,mode:"push"}},modes:{push:{particles_nb:1}}},retina_detect:!0}),N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={isOpen:!1},a.handleOpen=function(){return a.setState({isOpen:!0})},a.handleClose=function(){return a.setState({isOpen:!1})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement(n.Fragment,null,s.a.createElement(k,{isOpen:this.state.isOpen,handleClose:this.handleClose}),s.a.createElement("div",{className:"App"},s.a.createElement(p.a,{params:S}),s.a.createElement("header",{className:"App-header"},s.a.createElement("h1",null,"bradprints"),s.a.createElement("div",{style:{marginBottom:"10px"}},"Contact me"),s.a.createElement("div",{className:"links"},s.a.createElement("a",{href:"https://www.instagram.com/bradprints/",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("i",{className:"fab fa-instagram"})),s.a.createElement("i",{className:"far fa-envelope",onClick:this.handleOpen})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[48,1,2]]]);
//# sourceMappingURL=main.799f3cea.chunk.js.map