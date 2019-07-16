(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{100:function(e,t,n){"use strict";var a=n(24),r=n(0),l=n.n(r);n(99);function i(){var e=Object(a.a)([" "]);return i=function(){return e},e}function o(){var e=Object(a.a)([" "]);return o=function(){return e},e}function c(){var e=Object(a.a)([" "]);return c=function(){return e},e}function u(){var e=Object(a.a)([" "]);return u=function(){return e},e}var d=function(e){var t=e.elementConfig,n=e.elementType,a=e.value,r=e.label,d=e.changed,s=e.invalid,m=e.shouldValidate,p=e.touched,h=null,v=["InputElement"];switch(s&&m&&p&&v.push("Invalid"),n){case"input":h=l.a.createElement("input",Object.assign({className:v.join(u())},t,{value:a,onChange:d}));break;case"textarea":h=l.a.createElement("textarea",Object.assign({className:v.join(c())},t,{value:a,onChange:d}));break;case"select":h=l.a.createElement("select",{className:v.join(o()),value:a,onChange:d},t.options.map(function(e){return l.a.createElement("option",{key:e,value:e},e)}));break;default:h=l.a.createElement("input",Object.assign({className:v.join(i())},t,{value:a,onChange:d}))}return l.a.createElement("div",{className:"InputField"},l.a.createElement("label",null,r),h)};t.a=d},101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){},107:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=(n(101),n(49)),i=n(32),o=function(e){return r.a.createElement("div",{className:"CheckoutSummary"},r.a.createElement("h1",null,"We hope it tastes well!"),r.a.createElement("div",{className:"Burger"},r.a.createElement(l.a,{ingredients:e.ingredients})),r.a.createElement("h2",null,"The total price of your order is: ",e.price.toFixed(2),"$"),r.a.createElement(i.a,{btnType:"Danger",clicked:e.checkoutCancelled},"Cancel"),r.a.createElement(i.a,{btnType:"Success",clicked:e.checkoutContinued},"Continue"))},c=n(25),u=n(98),d=n(4),s=n(5),m=n(7),p=n(6),h=n(8),v=n(38),f=n(19),b=n(100),g=n(15),y=n(16),E=n(39),C=n(2),j=(n(102),function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={orderForm:{name:{elementType:"input",label:"Your name:",elementConfig:{type:"text",placeholder:"Enter Your Name"},value:"",validation:{required:!0},valid:!1,shouldValidate:!0,touched:!1},street:{elementType:"input",label:"Your street:",elementConfig:{type:"text",placeholder:"Enter Your Street"},value:"",validation:{required:!0},valid:!1,shouldValidate:!0,touched:!1},postalCode:{elementType:"input",label:"Your postal code:",elementConfig:{type:"number",placeholder:"Enter Your Postal Code"},value:"",validation:{required:!0,minLength:5,maxLength:6},valid:!1,shouldValidate:!0,touched:!1},country:{elementType:"input",label:"Your country:",elementConfig:{type:"text",placeholder:"Enter Your Country"},value:"",validation:{required:!0},valid:!0,shouldValidate:!1,touched:!1},email:{elementType:"input",label:"Your e-mail:",elementConfig:{type:"email",placeholder:"Enter Your E-Mail"},value:"",validation:{required:!0},valid:!1,shouldValidate:!0,touched:!1},deliveryMethod:{elementType:"select",label:"Delivery method:",elementConfig:{options:["Pigeons","Horses","Rats","Mice","Ants"]},value:"Pigeons",shouldValidate:!1,touched:!1,valid:!0}},formIsValid:!1},n.orderHandler=function(e){e.preventDefault();var t=n.props,a=t.userId,r=t.ingredients,l=t.price,i=t.onOrderBurger,o=t.token;i({userId:a,ingredients:r,price:l,date:new Date,customerData:Object.entries(n.state.orderForm).map(function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];return"".concat(n,": ").concat(a.value)})},o)},n.inputChangedHandler=function(e,t){var a=e.target.value,r=Object(c.a)({},n.state.orderForm),l=Object(c.a)({},r[t]);l.value=a,l.touched=!0,l.valid=Object(C.a)(l),r[t]=l,n.setState({orderForm:r})},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e,t){var n=Object.entries(this.state.orderForm).every(function(e){return e[1].valid});n!==t.formIsValid&&this.setState({formIsValid:n}),this.props.purchased&&this.props.history.replace("/")}},{key:"render",value:function(){var e=this;console.log("Contact data render()");var t=r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Enter your Contact Data"),r.a.createElement("form",null,Object.entries(this.state.orderForm).map(function(t){var n=Object(u.a)(t,2),a=n[0],l=n[1];return r.a.createElement(b.a,{key:a,elementType:l.elementType,elementConfig:l.elementConfig,value:l.value,label:l.label,invalid:!l.valid,shouldValidate:l.shouldValidate,touched:l.touched,changed:function(t){return e.inputChangedHandler(t,a)}})}),r.a.createElement("div",{className:"ButtonDiv"},r.a.createElement(i.a,{enabled:this.state.formIsValid,btnType:"Success",clicked:this.orderHandler},"Order"))));return this.props.loading&&(t=r.a.createElement(v.a,null)),r.a.createElement("div",{className:"ContactData"},t)}}]),t}(a.Component)),O=Object(g.b)(function(e){return{ingredients:e.builder.ingredients,price:e.builder.totalPrice,loading:e.order.loading,purchased:e.order.purchased,token:e.auth.token,userId:e.auth.userId}},function(e){return{onOrderBurger:function(t,n){return e(Object(y.g)(t,n))}}})(Object(E.a)(j,f.a)),k=n(18),T=(n(103),Object(g.b)(function(e){return{ingredients:e.builder.ingredients,price:e.builder.totalPrice}})(function(e){var t=e.ingredients,n=e.price,l=e.match.path;Object(a.useEffect)(function(){console.log("ingredients in checkout from Redux :",t)});var i=r.a.createElement(k.a,{to:"/"});return e.ingredients&&(i=r.a.createElement("div",{className:"Checkout"},r.a.createElement(o,{ingredients:t,price:n,checkoutContinued:function(){e.history.replace("/checkout/contact-data")},checkoutCancelled:function(){e.history.goBack()}}),r.a.createElement(k.b,{path:l+"/contact-data",component:O}))),i}));t.default=T},98:function(e,t,n){"use strict";function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,l=void 0;try{for(var i,o=e[Symbol.iterator]();!(a=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(c){r=!0,l=c}finally{try{a||null==o.return||o.return()}finally{if(r)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",function(){return a})},99:function(e,t,n){}}]);
//# sourceMappingURL=3.8ad63ad1.chunk.js.map