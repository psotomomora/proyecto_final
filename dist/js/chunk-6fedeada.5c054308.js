(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fedeada"],{a55b:function(e,r,t){"use strict";t.r(r);var o=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"mt-5 tipoform"},[t("h1",{staticClass:"text-center my-5 tipotitulo"},[e._v("Login de Usuario")]),t("b-form",{on:{submit:function(r){return r.preventDefault(),e.login(r)},reset:e.onReset}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.error,expression:"error"}],staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(" "+e._s(e.error)+" ")]),t("b-form-group",{attrs:{id:"input-group-1",label:"Correo Electrónico:","label-for":"input-2"}},[t("b-form-input",{attrs:{id:"input-2",type:"email",required:"",placeholder:"Ingrese el correo electrónico"},model:{value:e.email,callback:function(r){e.email=r},expression:"email"}})],1),t("b-form-group",{attrs:{id:"input-group-2",label:"Ingresa una Contraseña:","label-for":"input-3"}},[t("b-form-input",{attrs:{id:"input-3",type:"password",required:"",placeholder:"Ingresa Contraseña"},model:{value:e.clave,callback:function(r){e.clave=r},expression:"clave"}})],1),t("b-button",{staticClass:"mx-2 colornegro",attrs:{type:"submit"}},[e._v("Entrar")]),t("b-button",{staticClass:"mx-2 colorrosa",attrs:{type:"reset"}},[e._v("Borrar")])],1)],1)},a=[],s=t("8aa5"),i=t.n(s),n=t("3d20"),l=t.n(n),u={name:"Login",data:function(){return{email:"",clave:"",error:""}},methods:{login:function(){var e=this;this.error="";var r=/\w+@\w+\.+[a-z]/;r.test(this.email)?!this.clave||this.clave.length<6?this.error="Error en las contraseñas":i.a.auth().signInWithEmailAndPassword(this.email,this.clave).then((function(r){var t={displayName:r.user.displayName,email:r.user.email,emailVerified:r.user.emailVerified,uid:r.user.uid};e.error="",e.email="",e.clave="",e.$store.dispatch("usurioRegistro",t),e.$router.push("/")})).catch((function(e){console.log(e),console.log(e.message),"auth/user-not-found"==e.code?l.a.fire({icon:"error",title:"Oops...",text:"El usuario no existe en nuestra base de datos",footer:"<b>Meganulon</b>"}):"auth/wrong-password"==e.code&&l.a.fire({icon:"error",title:"Oops...",text:"El Correo y/o Contraseña no son validos",footer:"Meganulon</b>"})})):this.error="Correo Electrónico no es valido"},onReset:function(){console.log("reset"),this.error=""}}},c=u,d=(t("d6db"),t("2877")),p=Object(d["a"])(c,o,a,!1,null,null,null);r["default"]=p.exports},d6db:function(e,r,t){"use strict";var o=t("e67a"),a=t.n(o);a.a},e67a:function(e,r,t){}}]);
//# sourceMappingURL=chunk-6fedeada.5c054308.js.map