(this["webpackJsonp10-photo-galley-store-react"]=this["webpackJsonp10-photo-galley-store-react"]||[]).push([[0],Array(27).concat([function(e,t,a){e.exports={title:"Title_title__1CZBv"}},,function(e,t,a){e.exports=a(63)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(25),r=a.n(c),i=a(1),o=a(7),s=a(2),u=(a(34),a(35),a(36),function(){var e={color:"#f4f4f4",tabindex:"-1"};return l.a.createElement("nav",null,l.a.createElement(o.b,{style:e,to:"/"},l.a.createElement("h1",null,"le Dessin")),l.a.createElement(o.b,{style:e,to:"/Login"},l.a.createElement("h2",{href:"/#"},"Log in")),l.a.createElement("div",{className:"bottom-border"}))}),m=a(27);var d=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),o=Object(i.a)(r,2),s=o[0],u=o[1],d=function(){fetch("https://api.kanye.rest").then((function(e){return e.json()})).then((function(e){return c(e.quote)})).then((function(){return console.log(a)}))};return Object(n.useEffect)((function(){d()}),[]),Object(n.useEffect)((function(){console.log("bobbbdadadadadadwe"),a&&!function(){var e=a.split(" ");console.log(e);for(var t=0,n=["porn","fuck","shit","f#%k","sex"];t<n.length;t++){var l=n[t];if(console.log(l),console.log(e.indexOf(l)),-1!==e.indexOf(l))return!1}return!0}()?(console.log("this quote is not apporiate"),d()):u(!0)}),[a]),l.a.createElement("div",{className:m.title},s&&l.a.createElement("h2",{className:"kanye-west-quote"},a),l.a.createElement("p",null,"-Kanye West"))},p=(a(41),a(11)),f=a(13);a(64),a(42);f.initializeApp({apiKey:"AIzaSyB8jL-e6j8X8GY5RiSJJfiz9Uw8a0BT1SQ",authDomain:"art-gallery-shop.firebaseapp.com",databaseURL:"https://art-gallery-shop.firebaseio.com",projectId:"art-gallery-shop",storageBucket:"art-gallery-shop.appspot.com",messagingSenderId:"316324423102",appId:"1:316324423102:web:af3e7d802d0435c3f8c5ef"});var E=f.storage(),b=f.firestore(),v=f.firestore.FieldValue.serverTimestamp,g=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),l=a[0],c=a[1];return Object(n.useEffect)((function(){var t=b.collection(e).orderBy("createdOn","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(p.a)(Object(p.a)({},e.data()),{},{id:e.id}))})),c(t)}));return function(){return t()}}),[e]),{docs:l}};a(46);var h=function(e){var t=e.doc,a=e.setClickedGalleryPhoto,c=t.title,r=t.price,s=t.description,u=t.url,m=t.id,d=Object(n.useState)(!1),p=Object(i.a)(d,2),f=p[0],E=p[1];return Object(n.useEffect)((function(){!function(){var e=s.split(" ",16);console.log(e),E(e),16===e.length&&E(e.reduce((function(e,t){return e+" "+t}))+"...")}()}),[]),l.a.createElement(o.b,{to:"/Art/"+m,onClick:function(){return a(t)}},l.a.createElement("div",{className:"gallery-photo"},l.a.createElement("img",{src:u,alt:"Artwork"}),l.a.createElement("div",{className:"caption-box"},l.a.createElement("h3",null,c),l.a.createElement("p",{className:"description"},f),l.a.createElement("p",{className:"price"},r))))};var j=function(e){var t=e.setClickedGalleryPhoto,a=g("images").docs;return console.log(a),l.a.createElement("div",{id:"gallery"},l.a.createElement("h1",null,"Gallery"),a&&a.map((function(e){return l.a.createElement(h,{key:e.id,doc:e,setClickedGalleryPhoto:t})})))};var O=function(e){var t=e.setClickedGalleryPhoto;return l.a.createElement(l.a.Fragment,null,l.a.createElement(u,null),l.a.createElement(d,null),l.a.createElement(j,{setClickedGalleryPhoto:t}))};a(47),a(48);var y=function(){return l.a.createElement("div",{id:"log-in-title"},l.a.createElement("div",{className:"header-container"},l.a.createElement("h1",null,"Log in")))};a(49),a(50);var N=function(){return l.a.createElement("div",{className:"LoginInput"},l.a.createElement("form",{action:""},l.a.createElement("div",{className:"input-container"},l.a.createElement("input",{type:"text",id:"Username",required:!0}),l.a.createElement("label",{htmlFor:"Username"},"Username")),l.a.createElement("div",{className:"input-container"},l.a.createElement("input",{type:"password",id:"Password",required:!0}),l.a.createElement("label",{htmlFor:"Password"},"Password")),l.a.createElement("input",{type:"submit",value:"Log in"})),l.a.createElement(o.b,{to:"/Guest"},l.a.createElement("button",{className:"log-in-as-guest-btn"},l.a.createElement("i",{className:"fa fa-user fa-2x log-in-icon"}),l.a.createElement("p",null,"Log in as Guest"))))};var k=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u,null),l.a.createElement("div",{id:"login"},l.a.createElement(y,null),l.a.createElement(N,null)))};a(51);var x=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!0),o=Object(i.a)(r,2),u=o[0],m=o[1],d=Object(s.e)(),p={};return a||u||(p={borderColor:"red"}),l.a.createElement("div",{className:"guest-info-input"},l.a.createElement("div",{className:"background"}),l.a.createElement("form",{action:""},l.a.createElement("div",{className:"input-container"},l.a.createElement("input",{type:"text",id:"Name",style:p,required:!0,tabIndex:"1000",onChange:function(e){c(e.target.value),console.log(e.target.value)}}),l.a.createElement("label",{htmlFor:"Name"},"Name*"),!a&&!u&&l.a.createElement("h3",{className:"input-valid"},l.a.createElement("i",{className:"fa fa-exclamation-triangle"})," Enter Guest Name")),l.a.createElement("p",null,"*As a Guest, you may display your work but you cannot set up a payment system."),l.a.createElement("input",{type:"submit",value:"Continue",tabIndex:"2 000",onClick:function(e){e.preventDefault(),a?d.push("/Guest/"+a):m(!1),console.log(u)}})))};a(52);var C=function(){return l.a.createElement("div",{className:"upload-title"},l.a.createElement("h1",null,"Upload"))},P=a(15);a(53);var S=function(e){var t=e.dimension,a=e.setTitle,n=e.setPrice,c=e.setDimension,r=e.setDescription,i=e.validTitle,o=e.validPrice,s=e.validDimension,u=e.validDescription,m=e.setValidTitle,d=e.setValidPrice,f=e.setValidDimension,E=e.setValidDescription,b=e.submitButtonPressed,v=function(e){var a=Object(p.a)(Object(p.a)({},t),{},Object(P.a)({},e.target.name,e.target.value));c(a),console.log(t),console.log(Object.values(a).every((function(e){return e}))),Object.values(a).every((function(e){return e}))?f(!0):f(!1)},g={},h={},j={},O={};return g=!i&&b?{outline:"red solid 1px"}:{},h=!o&&b?{outline:"red solid 1px"}:{},j=!s&&b?{outline:"red solid 1px"}:{},O=!u&&b?{outline:"red solid 1px"}:{},l.a.createElement("div",{id:"upload-info"},l.a.createElement("div",{className:"input-container big-container"},l.a.createElement("label",{htmlFor:"title",className:"input-header"},"Title"),l.a.createElement("input",{type:"text",id:"title",autoComplete:"off",style:g,onChange:function(e){e.target.value?m(!0):m(!1),console.log(i),a(e.target.value)}}),!i&&b&&l.a.createElement("label",{htmlFor:"title",className:"input-valid"},l.a.createElement("i",{className:"fa fa-exclamation-triangle"})," Enter Title")),l.a.createElement("div",{className:"two-row-container"},l.a.createElement("div",{className:"input-container small-container"},l.a.createElement("label",{htmlFor:"price",className:"input-header"},"Price"),l.a.createElement("div",{id:"price-container"},l.a.createElement("div",{id:"currency-symbol"},"$"),l.a.createElement("input",{type:"number",id:"price",min:"1",step:"any",max:"1000",autoComplete:"off",placeholder:"0.00",style:h,onChange:function(e){e.target.value?d(!0):d(!1),n(e.target.value)}})),!o&&b&&l.a.createElement("label",{htmlFor:"price",className:"input-valid"},l.a.createElement("i",{className:"fa fa-exclamation-triangle"})," Enter Price")),l.a.createElement("div",{className:"input-container medium-container"},l.a.createElement("label",{htmlFor:"first-dimension",className:"input-header"},"Dimension"),l.a.createElement("div",{id:"dimension-container"},l.a.createElement("input",{type:"number",id:"first-dimension",name:"firstDimension",min:"1",step:"any",max:"1000",autoComplete:"off",style:j,onChange:v})," ",l.a.createElement("p",{className:"x"},"x"),l.a.createElement("input",{type:"number",id:"second-dimension",name:"secondDimension",min:"1",step:"any",max:"1000",autoComplete:"off",style:j,onChange:v}),l.a.createElement("select",{name:"unitOfMeasure",id:"unit-of-measure",onChange:v},l.a.createElement("option",{value:"in"},"in"),l.a.createElement("option",{value:"ft"},"ft"),l.a.createElement("option",{value:"cm"},"cm"),l.a.createElement("option",{value:"m"},"m"),l.a.createElement("option",{value:"px"},"px")),!s&&b&&l.a.createElement("label",{htmlFor:"price",className:"input-valid"},l.a.createElement("i",{className:"fa fa-exclamation-triangle"})," Enter Dimension")))),l.a.createElement("div",{className:"input-container"},l.a.createElement("label",{htmlFor:"description",className:"input-header"},"Description"),l.a.createElement("textarea",{id:"description",style:O,onChange:function(e){e.target.value?E(!0):E(!1),r(e.target.value)}}),!u&&b&&l.a.createElement("label",{htmlFor:"description",className:"input-valid"},l.a.createElement("i",{className:"fa fa-exclamation-triangle"})," Enter Description")))};a(54);var D=function(){return l.a.createElement("div",{id:"upload-payment"},l.a.createElement("p",{disabled:"disabled"},"Not available as Guest"))};a(55);var w=function(){return l.a.createElement("div",{id:"upload-payment-title"},l.a.createElement("h1",null,"Payment"))},F=a(21),G=a.n(F),L=a(28),T=function(e,t,a,l,c,r){var o=Object(n.useState)(0),s=Object(i.a)(o,2),u=s[0],m=s[1],d=Object(n.useState)(null),p=Object(i.a)(d,2),f=p[0],g=p[1],h=Object(n.useState)(null),j=Object(i.a)(h,2),O=j[0],y=j[1],N=Object(n.useState)(null),k=Object(i.a)(N,2),x=k[0],C=k[1];return Object(n.useEffect)((function(){var n=E.ref(t.name);console.log("File name is "+t.name);var i=b.collection("images");n.put(t).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;m(t)}),(function(e){g(e)}),Object(L.a)(G.a.mark((function t(){var o,s;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.getDownloadURL();case 2:o=t.sent,s=v(),i.add({name:e,title:a,price:l,dimension:c,description:r,url:o,createdOn:s}).then((function(e){C(e.id)})),y(o);case 6:case"end":return t.stop()}}),t)}))))}),[t]),{progress:u,url:O,error:f,id:x}},B=(a(57),function(e){var t=e.name,a=e.file,c=e.title,r=e.price,i=e.dimension,o=e.description,u=T(t,a,c,r,i,o),m=u.progress,d=u.id,p=Object(s.e)();return Object(n.useEffect)((function(){p.push("/Art/"+d)}),[d]),l.a.createElement("div",{id:"progress-bar"},l.a.createElement("div",{id:"outer-bar"},l.a.createElement("p",{id:"uploading-progress"}," ",Math.round(m),"%"),l.a.createElement("div",{id:"inner-bar",style:{width:m+"%"}}," "),l.a.createElement("p",{id:"uploading-message"},100!==m&&"Let's work together",100===m&&"Done!")))});a(58);var U=function(e){var t=e.file,a=e.setFile,c=e.submitButtonPressed,r=Object(n.useState)(null),o=Object(i.a)(r,2),s=o[0],u=o[1];return l.a.createElement("div",{id:"upload-file"},l.a.createElement("div",{className:"file-upload-container"},l.a.createElement("input",{id:"file-upload",type:"file",onChange:function(e){var t=e.target.files[0];console.log(t);t&&["image/png","image/jpeg"].includes(t.type)?(a(t),u(null),console.log(s)):(a(null),u("Please select an image file (png or jpeg)"))},accept:".png, .jpeg, .jpg"}),l.a.createElement("label",{htmlFor:"file-upload",className:"fake-file-upload"},"Upload File")),l.a.createElement("div",{className:"output"},s&&l.a.createElement("h3",{className:"error"}," ",s," "),t&&l.a.createElement("h3",{className:"file"}," ",t.name," "),!t&&c&&l.a.createElement("h3",{className:"input-valid"},l.a.createElement("i",{className:"fa fa-exclamation-triangle"})," ","Enter Valid file")))},V=(a(59),a(60),function(){return l.a.createElement("div",{className:"darken-backdrop"})});var A=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),o=Object(i.a)(r,2),s=o[0],m=o[1],d=Object(n.useState)(null),p=Object(i.a)(d,2),f=p[0],E=p[1],b=Object(n.useState)({firstDimension:null,secondDimension:null,unitOfMeasure:"in"}),v=Object(i.a)(b,2),g=v[0],h=v[1],j=Object(n.useState)(null),O=Object(i.a)(j,2),y=O[0],N=O[1],k=Object(n.useState)(null),x=Object(i.a)(k,2),P=x[0],F=x[1],G=Object(n.useState)(!1),L=Object(i.a)(G,2),T=(L[0],L[1]),A=Object(n.useState)(!1),I=Object(i.a)(A,2),q=I[0],M=I[1],J=Object(n.useState)(!1),R=Object(i.a)(J,2),_=R[0],z=R[1],K=Object(n.useState)(!1),Q=Object(i.a)(K,2),W=Q[0],X=Q[1],Y=Object(n.useState)(!1),Z=Object(i.a)(Y,2),$=Z[0],H=Z[1],ee=Object(n.useState)(!1),te=Object(i.a)(ee,2),ae=te[0],ne=te[1],le="Guest "+window.location.pathname.substring(7);return console.log(g),console.log("dimension is "+W),Object(n.useEffect)((function(){}),[ae]),l.a.createElement(l.a.Fragment,null,l.a.createElement(u,null),l.a.createElement("div",{id:"guest-upload"},l.a.createElement(C,null),l.a.createElement(U,{file:a,setFile:c,submitButtonPressed:ae}),l.a.createElement(S,{dimension:g,setTitle:m,setPrice:E,setDimension:h,setDescription:N,validTitle:q,validPrice:_,validDimension:W,validDescription:$,setValidTitle:M,setValidPrice:z,setValidDimension:X,setValidDescription:H,submitButtonPressed:ae}),l.a.createElement(w,null),l.a.createElement(D,null),l.a.createElement("input",{type:"submit",value:"Complete",onClick:function(e){e.preventDefault(),a&&q&&_&&W&&$?(console.log(a),F(!0)):T(!0),ne(!0)}})),P&&l.a.createElement(l.a.Fragment,null,l.a.createElement(B,{name:le,file:a,title:s,price:f,dimension:g,description:y,setFile:c,setReadyToUpload:F}),l.a.createElement(V,null)))};var I=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(A,null),l.a.createElement(V,null),l.a.createElement(x,null))},q=(a(61),function(e){var t,a,n,c,r,o,s,u=e.doc,m=e.setClickedPhoto;return u&&(t=u.name,a=u.title,n=u.price,c=u.dimension,r=u.description,o=u.url,s=u.createdOn,function(){console.log(c);var e=c,t=e.firstDimension,a=e.secondDimension,n=e.unitOfMeasure;c="".concat(t," x ").concat(a," ").concat(n)}(),function(e){v().seconds;s=new Date(e).toLocaleDateString("en-US"),console.log(s),console.log(s.split("/"));var t=s.split("/"),a=Object(i.a)(t,3);a[0],a[1],a[2]}(1e3*s.seconds)),l.a.createElement("div",{id:"art-page-item"},l.a.createElement("div",{className:"background"},l.a.createElement("h2",{className:"title"},a),l.a.createElement("img",{className:"art-item-photo",src:o,alt:"",onClick:function(){m(o)}}),l.a.createElement("div",{className:"column-container"},l.a.createElement("h3",{className:"price"},n),l.a.createElement("p",{className:"artist"},t))),l.a.createElement("p",{className:"description"},r),l.a.createElement("h1",{className:"infomation-title"},"Infomation"),l.a.createElement("table",{className:"infomation"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Dimension:"),l.a.createElement("th",null,c)),l.a.createElement("tr",null,l.a.createElement("th",null,"Created on:"),l.a.createElement("th",null,s)))),l.a.createElement("button",{className:"buy-now"},l.a.createElement("i",{className:"fa fa-shopping-cart"})," Buy now"))});a(62);var M=function(e){var t=e.clickedPhoto,a=e.setClickedPhoto;return l.a.createElement("div",{className:"modal",onClick:function(e){e.target.classList.contains("darken-backdrop")&&a(null)}},l.a.createElement(V,null),l.a.createElement("img",{src:t,alt:"enlarged Photo"}))};var J=function(e){var t=e.clickedGalleryPhoto,a=e.setClickedGalleryPhoto,c=Object(n.useState)(null),r=Object(i.a)(c,2),o=r[0],s=r[1],m=g("images").docs,d=Object(n.useState)(null),p=Object(i.a)(d,2),f=p[0],E=p[1],b=window.location.hash.split("/"),v=b[b.indexOf("Art")+1];return console.log(v),Object(n.useEffect)((function(){t?(s(t),a(null)):m&&m.forEach((function(e){e.id===v&&(s(e),console.log(o))}))}),[m]),l.a.createElement("div",{id:"art-page"},l.a.createElement(u,null),l.a.createElement(q,{doc:o,setClickedPhoto:E}),f&&l.a.createElement(M,{clickedPhoto:f,setClickedPhoto:E}))};var R=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1];return console.log("."),console.log(window.location.pathname),l.a.createElement("div",{id:"app"},l.a.createElement(o.a,{basename:"le-dessin-react-project"},l.a.createElement(s.a,{path:"/",exact:!0,render:function(){return l.a.createElement(O,{setClickedGalleryPhoto:c})}}),l.a.createElement(s.a,{path:"/Login",component:k,exact:!0}),l.a.createElement(s.a,{path:"/Guest",component:I,exact:!0}),l.a.createElement(s.a,{path:"/Guest/:id",component:A}),l.a.createElement(s.a,{path:"/Art/:id",exact:!0,render:function(){return l.a.createElement(J,{clickedGalleryPhoto:a,setClickedGalleryPhoto:c})}})))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(R,null)),document.getElementById("root"))}]),[[29,1,2]]]);
//# sourceMappingURL=main.b7a5e7c2.chunk.js.map