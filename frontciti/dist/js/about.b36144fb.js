(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"06b1":function(t,e,a){"use strict";var s=a("1616"),i=a.n(s);i.a},"0d5f":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("vue-diamond",{attrs:{cicode:t.cicode,cislug:t.cislug,category:t.category}}),a("citi-nav",{attrs:{cicode:t.cicode,cislug:t.cislug,category:t.category}}),a("vue-local",{attrs:{cicode:t.cicode,cislug:t.cislug,category:t.category}}),a("vue-mid-diamond",{attrs:{cicode:t.cicode,cislug:t.cislug,category:t.category}}),a("vue-destak",{attrs:{cicode:t.cicode,cislug:t.cislug,category:t.category}}),a("vue-top",{attrs:{cicode:t.cicode,cislug:t.cislug,category:t.category}}),a("div",{attrs:{id:"tops"}},[a("vue-basic",{attrs:{cicode:t.cicode,cislug:t.cislug,category:t.category}})],1)],1)},i=[],o=a("c173"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.modelos.length,expression:"modelos.length"}],attrs:{id:"diamond-big"}},[a("div",{staticClass:"owl-carousel owl-theme old-drag wiz-big-carousel"},t._l(t.modelos,function(t){return a("diam-item",{key:t.id,attrs:{modelo:t}})}),1)])},n=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item "},[a("div",{staticClass:"wiz-overlay"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8 offset-md-2 text-center"},[a("div",{staticClass:"wiz-diamond-content"},[a("div",{staticClass:"wiz-diamond"},[a("button",{staticClass:"btn btn-warning"},[a("font-awesome-icon",{attrs:{icon:["far","gem"]}})],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.modelo.perfil.is_vip,expression:"modelo.perfil.is_vip"}],staticClass:"wiz-vip"},[a("button",{staticClass:"btn btn-danger"},[a("font-awesome-icon",{attrs:{icon:["far","star"]}}),a("span",[t._v("VIP")])],1)]),a("div",{staticClass:"wiz-item-info"},[a("h1",[t._v(t._s(t.modelo.perfil.nome)+" "+t._s(t.modelo.perfil.sobrenome))]),a("em",[t._v("idade: "+t._s(t.modelo.perfil.idade)+" anos")]),a("br"),a("em",[t._v("Cidade:  "+t._s(t.modelo.perfil.city.name)+" -  "),a("b",{staticStyle:{"text-transform":"uppercase"}},[t._v(t._s(t.modelo.perfil.city.state.code))])]),a("br")]),a("div",{staticClass:"wiz-item-description"},[a("p",{staticStyle:{"text-transform":"uppercase"}},[t._v("\n                                        "+t._s(t._f("truncate")(t.modelo.perfil.description,150))+"\n                                    ")])]),a("div",{staticClass:"wiz-item-contact"},[a("a",{attrs:{href:"tel:+"+t.modelo.perfil.phone,target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fas","phone"],size:"3x"}})],1),a("a",{attrs:{href:"https://api.whatsapp.com/send?phone="+t.modelo.perfil.phone+"&text=Ol%C3%A1%20"+t.modelo.perfil.nome+"%20"+t.modelo.perfil.sobrenome+"%20Encontrei%20voc%C3%AA%20no%20EroCiti.com.",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","whatsapp"],size:"3x"}})],1),a("a",{directives:[{name:"show",rawName:"v-show",value:t.modelo.perfil.twitter,expression:"modelo.perfil.twitter"}],attrs:{href:"https://www.instagram.com/trexengenharia/",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","twitter"],size:"3x"}})],1),a("a",{directives:[{name:"show",rawName:"v-show",value:t.modelo.perfil.instagram,expression:"modelo.perfil.instagram"}],attrs:{href:"https://www.instagram.com/trexengenharia/",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","instagram"],size:"3x"}})],1)]),a("router-link",{staticClass:"btn btn-primary btn-block view-profile",staticStyle:{"margin-top":".3rem"},attrs:{to:"/"+t.modelo.perfil.city.state.code+"/"+t.modelo.perfil.city.slug+"/"+t.modelo.perfil.category+"/"+t.modelo.perfil.slug+"/"+t.modelo.perfil.code+"/"}},[t._v("Ver perfil")])],1)])])])]),a("img",{staticClass:"img-fluid",attrs:{src:t.modelo.perfil.capa,alt:""}})])},c=[],d={name:"DiamItem",props:{modelo:Object},filters:{truncate:function(t,e){return t.length>e&&(t=t.substring(0,e-3)+"..."),t}}},u=d,m=(a("3efe"),a("2877")),v=Object(m["a"])(u,l,c,!1,null,null,null),p=v.exports,h=a("1157"),f=a.n(h),_=a("218a"),g=f.a,w={name:"VueDiamond",components:{DiamItem:p},props:{cislug:String,cicode:String,category:String},data:function(){return{modelos:{}}},created:function(){var t=this;_["a"].get("subs/"+this.cicode+"/"+this.cislug+"/"+this.category+"/diamonds/").then(function(e){t.modelos=e.data})},beforeUpdate:function(){g(document).ready(function(){g(".owl-carousel").owlCarousel({items:1,margin:0,nav:!0,loop:!0,autoplay:!0,autoplayTimeout:3e3,responsive:{600:{items:1}}})})}},C=w,b=(a("06b1"),Object(m["a"])(C,r,n,!1,null,null,null)),y=b.exports,x=a("aab5"),S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.modelos.length,expression:"modelos.length"}],attrs:{id:"tops"}},[a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"row"},t._l(t.modelos,function(t){return a("vue-item",{key:t.id,attrs:{modelo:t}})}),1)])])},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 offset-md-3 text-center"},[a("hr",{staticStyle:{height:"1rem",color:"#000"}}),a("h4",{staticClass:"display-6",staticStyle:{margin:".5rem"}},[t._v("Seção Diamonds")]),a("hr",{staticStyle:{height:"1rem",color:"#000"}})])])}],k=a("3e85"),E={name:"VueMidDiamond",components:{VueItem:k["a"]},props:{cislug:String,cicode:String,category:String},data:function(){return{modelos:{}}},methods:{},mounted:function(){var t=this;_["a"].get("subs/"+this.cicode+"/"+this.cislug+"/"+this.category+"/diamonds/").then(function(e){t.modelos=e.data})}},N=E,j=Object(m["a"])(N,S,$,!1,null,null,null),q=j.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.modelos.length,expression:"modelos.length"}],attrs:{id:"tops"}},[a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"row"},t._l(t.modelos,function(t){return a("vue-item",{key:t.id,attrs:{modelo:t}})}),1)])])},D=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 offset-md-3 text-center"},[a("hr",{staticStyle:{height:"1rem",color:"#000"}}),a("h4",{staticClass:"display-6",staticStyle:{margin:".5rem"}},[t._v("Seção Destaques")]),a("hr",{staticStyle:{height:"1rem",color:"#000"}})])])}],V={name:"VueTop",components:{VueItem:k["a"]},props:{cislug:String,cicode:String,category:String},data:function(){return{modelos:{}}},methods:{},mounted:function(){var t=this;_["a"].get("subs/"+this.cicode+"/"+this.cislug+"/"+this.category+"/destaks/").then(function(e){t.modelos=e.data})}},O=V,T=Object(m["a"])(O,z,D,!1,null,null,null),I=T.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.modelos.length,expression:"modelos.length"}],attrs:{id:"tops"}},[a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"row"},t._l(t.modelos,function(t){return a("vue-item",{key:t.id,attrs:{modelo:t}})}),1)])])},M=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 offset-md-3 text-center"},[a("hr",{staticStyle:{height:"1rem",color:"#000"}}),a("h4",{staticClass:"display-6",staticStyle:{margin:".5rem"}},[t._v("Seção TOPs")]),a("hr",{staticStyle:{height:"1rem",color:"#000"}})])])}],F={name:"VueTop",components:{VueItem:k["a"]},props:{cislug:String,cicode:String,category:String},data:function(){return{modelos:{}}},methods:{},mounted:function(){var t=this;_["a"].get("subs/"+this.cicode+"/"+this.cislug+"/"+this.category+"/tops/").then(function(e){t.modelos=e.data})}},A=F,R=Object(m["a"])(A,P,M,!1,null,null,null),L=R.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.modelos.length,expression:"modelos.length"}]},[a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"row"},t._l(t.modelos,function(t){return a("vue-item",{key:t.id,attrs:{modelo:t}})}),1)])])},B=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 offset-md-3 text-center"},[a("hr",{staticStyle:{height:"1rem",color:"#000"}}),a("h4",{staticClass:"display-6",staticStyle:{margin:".5rem"}},[t._v("Acompanhantes")]),a("hr",{staticStyle:{height:"1rem",color:"#000"}})])])}],U={name:"VueBasic",components:{VueItem:k["a"]},props:{cislug:String,cicode:String,category:String},data:function(){return{modelos:{}}},methods:{},mounted:function(){var t=this;_["a"].get("subs/"+this.cicode+"/"+this.cislug+"/"+this.category+"/basic/").then(function(e){t.modelos=e.data})}},G=U,J=Object(m["a"])(G,H,B,!1,null,null,null),W=J.exports,K={name:"City",components:{CitiNav:o["a"],VueDiamond:y,VueLocal:x["a"],VueMidDiamond:q,VueDestak:I,VueTop:L,VueBasic:W},computed:{cicode:function(){return this.$route.params.cicode},cislug:function(){return this.$route.params.cislug},category:function(){return this.$route.params.category}}},Q=K,X=Object(m["a"])(Q,s,i,!1,null,null,null);e["default"]=X.exports},1616:function(t,e,a){},2395:function(t,e,a){},"2d3b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("citi-nav"),a("div",{attrs:{id:"tops"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 offset-md-3 text-center"},[a("h6",{staticClass:"display-6",staticStyle:{"margin-top":"7rem","text-transform":"uppercase"}},[t._v('Resultado da Pesquisa " '+t._s(this.$route.query.q)+' "')])])]),a("div",{staticClass:"row"},[a("p",{directives:[{name:"show",rawName:"v-show",value:!t.results.length,expression:"!results.length"}]},[t._v(" Nenhum resultado encontrado ..!")]),t._l(t.results,function(t){return a("vue-item",{key:t.id,attrs:{modelo:t}})})],2)])])],1)},i=[],o=a("c173"),r=a("3e85"),n=a("218a"),l={name:"Search",components:{CitiNav:o["a"],VueItem:r["a"]},data:function(){return{results:{}}},created:function(){var t=this;n["a"].get("sr/search/",{params:{q:this.$route.query.q,cq:this.$route.query.cq}}).then(function(e){t.results=e.data})}},c=l,d=a("2877"),u=Object(d["a"])(c,s,i,!1,null,null,null);e["default"]=u.exports},"386b":function(t,e,a){var s=a("5ca1"),i=a("79e5"),o=a("be13"),r=/"/g,n=function(t,e,a,s){var i=String(o(t)),n="<"+e;return""!==a&&(n+=" "+a+'="'+String(s).replace(r,"&quot;")+'"'),n+">"+i+"</"+e+">"};t.exports=function(t,e){var a={};a[t]=e(n),s(s.P+s.F*i(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",a)}},"3efe":function(t,e,a){"use strict";var s=a("2395"),i=a.n(s);i.a},"687b":function(t,e,a){"use strict";var s=a("c7d9"),i=a.n(s);i.a},"6f9f":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("in-nav"),t._m(0)],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tops"},[a("h1",[t._v("This is an privacy")])])}],o=a("d3ea"),r={name:"Privacy",components:{InNav:o["a"]}},n=r,l=a("2877"),c=Object(l["a"])(n,s,i,!1,null,null,null);e["default"]=c.exports},"82b6":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("in-nav"),a("not-found")],1)},i=[],o=a("d3ea"),r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"tops"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8 offset-md-2 text-center"},[a("h1",{staticStyle:{"margin-top":"50%"}},[t._v("(404) Page Not Found")])])])])])}],l={name:"NotFound"},c=l,d=a("2877"),u=Object(d["a"])(c,r,n,!1,null,null,null),m=u.exports,v={name:"urlerror",components:{InNav:o["a"],NotFound:m}},p=v,h=Object(d["a"])(p,s,i,!1,null,null,null);e["default"]=h.exports},a812:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vue-init")},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:"tops"}}),a("div",{staticClass:"modal",attrs:{tabindex:"-1",role:"dialog",id:"init"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(0),a("div",{staticClass:"modal-body"},[t._m(1),a("p",[t._v("A amazura não é responsável por ações cometidas dentro ou fora da nossa página, qualquer ocorrência fica por compleata responsabilidade do individuo ou grupo de individuo, dos pais e/ou tutores legais.")]),a("p",[t._v("Todas as fotografias são protegidas pela lei de direitos autorais. Não oferecemos serviços de natureza sexuais ou implícitos. Favor não insistir.")]),t._m(2),a("div",{directives:[{name:"show",rawName:"v-show",value:t.visualise,expression:"visualise"}],staticClass:"alert alert-danger text-center",staticStyle:{"font-size":"1.2rem"},attrs:{role:"alert"}},[t._v("\n                        Você não pode visualizar o conteúdo do site.\n                    ")]),a("div",{staticClass:"alert alert-info text-center",staticStyle:{"font-size":"1.3rem"},attrs:{role:"alert"}},[t._v("\n                        Você é maior de idade?\n                    ")])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-danger mr-auto",attrs:{type:"button",id:"sair"},on:{click:t.menor}},[t._v("Não")]),a("button",{staticClass:"btn btn-warning",attrs:{type:"submit",id:"enter"},on:{click:t.setCookie}},[t._v("Sou maior de idade")])])])])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v("Aviso legal")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Este site apresenta conteúdo voltado exclusivamente para o público adulto. Ao acessar você esta confirmando que tem "),a("strong",[t._v("18 anos ou mais")]),t._v(".")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"text-center"},[a("strong",[t._v("Eu li e Concordo com os termos estabelecidos")])])}],n=a("1157"),l=a.n(n),c={name:"VueInit",data:function(){return{visualise:!1}},methods:{menor:function(){this.visualise=!0},setCookie:function(){this.$cookies.set("erociti_access_token","true","1y"),this.$router.push({name:"home"}),window.location.reload()},checkCookie:function(){}},mounted:function(){l()("#init").modal({backdrop:"static",keyboard:!1})}},d=c,u=a("2877"),m=Object(u["a"])(d,o,r,!1,null,null,null),v=m.exports,p={name:"Init",components:{VueInit:v}},h=p,f=Object(u["a"])(h,s,i,!1,null,null,null);e["default"]=f.exports},abd5:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("in-nav"),t._m(0)],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tops"},[a("h1",[t._v("This is an about Termo de uso")])])}],o=a("d3ea"),r={name:"Termo",components:{InNav:o["a"]}},n=r,l=a("2877"),c=Object(l["a"])(n,s,i,!1,null,null,null);e["default"]=c.exports},b54a:function(t,e,a){"use strict";a("386b")("link",function(t){return function(e){return t(this,"a","href",e)}})},c173:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header",staticStyle:{"padding-top":".5rem"}},[a("nav",{staticClass:"navbar navbar-expand-lg"},[this.$route.params.cicode?a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"+this.$route.params.cicode+"/"+this.$route.params.cislug+"/mulheres/"}},[t._v("EroCiti")]):a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("EroCiti")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item dropdown",staticStyle:{"margin-left":"1.5rem"}},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n                        "+t._s(t.cat)+"\n                    ")]),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[a("router-link",{staticClass:"dropdown-item",attrs:{to:"/"+this.$route.params.cicode+"/"+this.$route.params.cislug+"/mulheres/"}},[t._v("Mulheres")]),a("div",{staticClass:"dropdown-divider"}),a("router-link",{staticClass:"dropdown-item",attrs:{to:"/"+this.$route.params.cicode+"/"+this.$route.params.cislug+"/homens/"}},[t._v("Homens")]),a("div",{staticClass:"dropdown-divider"}),a("router-link",{staticClass:"dropdown-item",attrs:{to:"/"+this.$route.params.cicode+"/"+this.$route.params.cislug+"/transex/"}},[t._v("Transex")])],1)])]),a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item"},[a("search-item")],1),t._m(1)])])],1)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"wiz-toggler navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item text-center",staticStyle:{"margin-left":"1.5rem",border:"2px solid #fff","margin-top":".2rem"}},[a("a",{staticClass:"nav-link",attrs:{href:"https://www.ads.erociti.com",target:"_blank"}},[t._v("Anuncie !")])])}],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{staticClass:"form-inline wiz-search col-12",on:{submit:function(e){return e.preventDefault(),t.search(e)}}},[a("div",{staticClass:"input-group",staticStyle:{width:"100%"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.q,expression:"q"}],staticClass:"form-control",attrs:{type:"text",name:"q",placeholder:"Entre um nome","aria-label":"Recipient's username","aria-describedby":"button-addon2"},domProps:{value:t.q},on:{input:function(e){e.target.composing||(t.q=e.target.value)}}}),a("select",{directives:[{name:"model",rawName:"v-model",value:t.cq,expression:"cq"}],staticClass:"form-control col-4",attrs:{id:"exampleFormControlSelect1",name:"cq"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.cq=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"mulheres"}},[t._v("Mulheres")]),a("option",{attrs:{value:"homens"}},[t._v("Homens")]),a("option",{attrs:{value:"transex"}},[t._v("Transex")])]),t._m(0)])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-warning",attrs:{type:"submit"}},[t._v("Pesquisar")])])}],n={name:"SearchItem",data:function(){return{q:null,cq:null}},methods:{search:function(){this.$router.push({path:"/search/",query:{q:this.q,cq:this.cq}})}}},l=n,c=a("2877"),d=Object(c["a"])(l,o,r,!1,null,null,null),u=d.exports,m={name:"CitiNav",computed:{cat:function(){return this.$route.params.category}},components:{SearchItem:u}},v=m,p=Object(c["a"])(v,s,i,!1,null,null,null);e["a"]=p.exports},c66d:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("citi-nav"),a("vue-profile")],1)},i=[],o=a("c173"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"d-flex align-items-center justify-content-center",attrs:{id:"present"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8 offset-md-2 text-center"},[a("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",margin:"5.5rem"}},[a("font-awesome-icon",{style:{color:"#fff"},attrs:{icon:["far","star"]}}),a("h2",{},[t._v(" "+t._s(t.per.nome)+" "+t._s(t.per.sobrenome)+" ")]),a("font-awesome-icon",{style:{color:"#fff"},attrs:{icon:["far","star"]}})],1),a("em",[t._v("Categoria: "+t._s(t.per.category))]),a("br"),a("em",[t._v("Age: "+t._s(t.per.idade)+" anos")]),a("br"),a("em",[t._v("Disponível para: "),a("em",{directives:[{name:"show",rawName:"v-show",value:t.dados.men,expression:"dados.men"}]},[t._v(" Homens,")]),a("em",{directives:[{name:"show",rawName:"v-show",value:t.dados.women,expression:"dados.women"}]},[t._v(" Mulheres,")]),a("em",{directives:[{name:"show",rawName:"v-show",value:t.dados.couple,expression:"dados.couple"}]},[t._v("Casais")])]),a("br"),a("div",{staticClass:"wiz-item-contact"},[a("a",{attrs:{href:"tel:+"+t.per.phone,target:"_blank"},on:{click:t.MoreClick}},[a("font-awesome-icon",{attrs:{icon:["fas","phone"],size:"3x"}})],1),a("a",{attrs:{href:"https://api.whatsapp.com/send?phone="+t.per.phone+"&text=",target:"_blank"},on:{click:t.MoreClick}},[a("font-awesome-icon",{attrs:{icon:["fab","whatsapp"],size:"3x"}})],1),t.dados.twitter?a("a",{attrs:{href:"https://t.me/ivy-salazar/text='Hello World'",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","twitter"],size:"3x"}})],1):t._e(),t.dados.instagram?a("a",{attrs:{href:"https://t.me/ivy-salazar/text='Hello World'",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","instagram"],size:"3x"}})],1):t._e()]),a("button",{staticClass:"btn btn-warning btn-block",staticStyle:{margin:".5rem"},attrs:{"data-toggle":"modal","data-target":"#more-detail",id:"detail"}},[a("font-awesome-icon",{attrs:{icon:["fas","plus"]}}),t._v(" Detalhes")],1)])])])]),a("div",{staticClass:"modal fade",attrs:{id:"more-detail",tabindex:"-1",role:"dialog","aria-labelledby":"myLargeModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg"},[a("div",{staticClass:"modal-content "},[t._m(0),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 offset-md-"},[a("ul",{staticClass:"list-group"},[a("li",{staticClass:"list-group-item active text-center"},[t._v("Perfil")]),a("li",{staticClass:"list-group-item"},[t._v("Idade - "+t._s(t.per.idade)+" anos")]),a("li",{staticClass:"list-group-item"},[t._v(" Altura - "+t._s(t.per.altura)+" m")]),a("li",{staticClass:"list-group-item"},[t._v(" Peso - "+t._s(t.per.peso)+" kg")]),a("li",{staticClass:"list-group-item"},[t._v("Peitos - "+t._s(t.dados.seios))]),a("li",{staticClass:"list-group-item"},[t._v(" Cabelos - "+t._s(t.dados.cabelo))]),a("li",{staticClass:"list-group-item"},[t._v(" Etnia - "+t._s(t.dados.etnia))]),t.per.dote?a("li",{staticClass:"list-group-item"},[t._v(" Cabelos - "+t._s(t.per.dote)+" cm")]):t._e(),a("li",{staticClass:"list-group-item"},[a("p",{staticClass:"mb-1"},[t._v(t._s(t.per.description))])])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("ul",{staticClass:"list-group",staticStyle:{"margin-top":"1rem"}},[a("li",{staticClass:"list-group-item active text-center"},[t._v("Valores")]),t.val.caches_1h?a("li",{staticClass:"list-group-item"},[t._v("1h - R$ "+t._s(t.val.caches_1h))]):t._e(),t.val.caches_2h?a("li",{staticClass:"list-group-item"},[t._v(" 2hs - R$ "+t._s(t.val.caches_2h))]):t._e(),t.val.caches_3h?a("li",{staticClass:"list-group-item"},[t._v(" 3hs - R$ "+t._s(t.val.caches_3h))]):t._e(),t.val.caches_4h?a("li",{staticClass:"list-group-item"},[t._v(" 4hs - R$ "+t._s(t.val.caches_4h))]):t._e(),t.val.caches_pernoite_dia_util?a("li",{staticClass:"list-group-item"},[t._v("Pernoite dia útil - R$ "+t._s(t.val.caches_pernoite_dia_util))]):t._e(),t.val.caches_sexta_noite?a("li",{staticClass:"list-group-item"},[t._v(" Sexta noite - R$ "+t._s(t.val.caches_sexta_noite))]):t._e(),t.val.caches_fim_semana_dia?a("li",{staticClass:"list-group-item"},[t._v(" Fim de semana dia - R$ "+t._s(t.val.caches_fim_semana_dia))]):t._e(),t.val.caches_sabado_noite?a("li",{staticClass:"list-group-item"},[t._v(" Sabádo noite - R$ "+t._s(t.val.caches_sabado_noite))]):t._e()]),t._m(1)])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 offset-md-"},[a("ul",{staticClass:"list-group",staticStyle:{"margin-top":"1rem"}},[a("li",{staticClass:"list-group-item active text-center"},[t._v("Serviços")]),a("li",{directives:[{name:"show",rawName:"v-show",value:t.serv.beijo_na_boca,expression:"serv.beijo_na_boca"}],staticClass:"list-group-item"},[t._v("Beijo na boca")]),a("li",{directives:[{name:"show",rawName:"v-show",value:t.serv.duplas,expression:"serv.duplas"}],staticClass:"list-group-item"},[t._v("Duplas")]),a("li",{directives:[{name:"show",rawName:"v-show",value:t.serv.ejacula_corpo,expression:"serv.ejacula_corpo"}],staticClass:"list-group-item"},[t._v("Ejaculação corpo")]),a("li",{directives:[{name:"show",rawName:"v-show",value:t.serv.massagem_erotica,expression:"serv.massagem_erotica"}],staticClass:"list-group-item"},[t._v("Massagem Erótica")]),a("li",{directives:[{name:"show",rawName:"v-show",value:t.serv.fan_disfarces,expression:"serv.fan_disfarces"}],staticClass:"list-group-item"},[t._v("Fantasias e disfarces")]),a("li",{directives:[{name:"show",rawName:"v-show",value:t.serv.namoradinha,expression:"serv.namoradinha"}],staticClass:"list-group-item"},[t._v("Namoradinha")]),a("li",{directives:[{name:"show",rawName:"v-show",value:t.serv.pse,expression:"serv.pse"}],staticClass:"list-group-item"},[t._v("PSE")]),a("li",{directives:[{name:"show",rawName:"v-show",value:t.serv.sexo_anal,expression:"serv.sexo_anal"}],staticClass:"list-group-item"},[t._v("Sexo Anal")]),a("li",{directives:[{name:"show",rawName:"v-show",value:t.serv.sexo_oral_sem_cam,expression:"serv.sexo_oral_sem_cam"}],staticClass:"list-group-item"},[t._v("Sexo Oral (sem camisinha)")]),a("li",{directives:[{name:"show",rawName:"v-show",value:t.serv.sexo_oral_com_cam,expression:"serv.sexo_oral_com_cam"}],staticClass:"list-group-item"},[t._v("Sexo Oral (com camisinha)")])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 offset-md-"},[a("ul",{staticClass:"list-group",staticStyle:{"margin-top":"1rem"}},[a("li",{staticClass:"list-group-item active text-center"},[t._v("Serviços Especiais")]),a("li",{directives:[{name:"show",rawName:"v-show",value:t.esp.beijo_negro,expression:"esp.beijo_negro"}],staticClass:"list-group-item"},[t._v("Beijo negro")]),a("li",{directives:[{name:"show",rawName:"v-show",value:t.esp.chuva_dourada,expression:"esp.chuva_dourada"}],staticClass:"list-group-item"},[t._v("Chuva dourada")]),a("li",{directives:[{name:"show",rawName:"v-show",value:t.esp.fetichismo,expression:"esp.fetichismo"}],staticClass:"list-group-item"},[t._v("Fetichismo")]),a("li",{directives:[{name:"show",rawName:"v-show",value:t.esp.garganta_profunda,expression:"esp.garganta_profunda"}],staticClass:"list-group-item"},[t._v("Garganta profunda")]),a("li",{directives:[{name:"show",rawName:"v-show",value:t.esp.sado_duro,expression:"esp.sado_duro"}],staticClass:"list-group-item"},[t._v("Sado duro")]),a("li",{directives:[{name:"show",rawName:"v-show",value:t.esp.sado_suave,expression:"esp.sado_suave"}],staticClass:"list-group-item"},[t._v("Sado suave")]),a("li",{directives:[{name:"show",rawName:"v-show",value:t.esp.squirting,expression:"esp.squirting"}],staticClass:"list-group-item"},[t._v("Squirting")]),a("li",{directives:[{name:"show",rawName:"v-show",value:t.esp.strap_on,expression:"esp.strap_on"}],staticClass:"list-group-item"},[t._v("Strap on")])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 offset-md-"},[a("ul",{staticClass:"list-group",staticStyle:{"margin-top":"1rem"}},[a("li",{staticClass:"list-group-item active text-center"},[t._v("Locais")]),a("li",{directives:[{name:"show",rawName:"v-show",value:t.loc.hotel,expression:"loc.hotel"}],staticClass:"list-group-item"},[t._v("Hoteis")]),a("li",{directives:[{name:"show",rawName:"v-show",value:t.loc.motel,expression:"loc.motel"}],staticClass:"list-group-item"},[t._v("Moteis")]),a("li",{directives:[{name:"show",rawName:"v-show",value:t.loc.local_proprio,expression:"loc.local_proprio"}],staticClass:"list-group-item"},[t._v("Local Próprio")]),a("li",{directives:[{name:"show",rawName:"v-show",value:t.loc.sobre_convite,expression:"loc.sobre_convite"}],staticClass:"list-group-item"},[t._v("Sobre convite (ir até o cliente)")])])])])])]),t._m(2)])])]),a("div",{attrs:{id:"galery"}},[t._m(3),a("section",{staticClass:"gallery-block grid-gallery",staticStyle:{"background-color":"#fff"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row",attrs:{id:"wiz-galery"}},[a("a",{staticClass:"col-sm-12 col-md-10 col-lg-10 item",attrs:{href:t.per.capa}},[a("img",{staticClass:"img-fluid image scale-on-hover",attrs:{id:"wiz-large",src:t.per.capa}})]),t._l(t.fotos,function(t){return a("a",{key:t.id,staticClass:"col-sm-12 col-md-6 col-lg-4 item",attrs:{href:t.image_erociti}},[a("img",{staticClass:"img-fluid image scale-on-hover",attrs:{src:t.image_erociti}})])})],2)])])]),a("vue-denuncia",{attrs:{perid:t.per.code}}),a("vue-related")],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v("Detalhe da Modelo")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"text-center"},[a("strong",[t._v(" Adicionais podem ser cobrados.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Fechar")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 offset-md-3 text-center"},[a("h3",{staticStyle:{margin:"1rem"}},[t._v("Minhas Fotos")])])])])}],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:"denuncia"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8 offset-md-2 text-center"},[a("div",[a("a",{attrs:{href:"","data-toggle":"modal","data-target":"#more-denuncia"}},[a("font-awesome-icon",{attrs:{icon:["fas","exclamation-circle"]}}),t._v(" Denunciar fotos fakes\n                        ")],1)])])])]),a("div",{staticClass:"modal fade",attrs:{id:"more-denuncia",tabindex:"-1",role:"dialog","aria-labelledby":"myLargeModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg"},[a("div",{staticClass:"modal-content"},[t._m(0),a("form",{on:{submit:function(e){return e.preventDefault(),t.denunciar(e)}}},[a("div",{staticClass:"modal-body"},[a("p",[t._v("askjhfjshf\n                                asklfkshlfhlshfls\n                            ")]),t._m(1),a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-form-label",attrs:{for:"link-to-evidence"}},[t._v("Link para a prova de mal uso:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.link,expression:"link"}],staticClass:"form-control",attrs:{type:"url",id:"link-to-evidence",placeholder:"http://",required:""},domProps:{value:t.link},on:{input:function(e){e.target.composing||(t.link=e.target.value)}}})])]),t._m(2)])])])])])])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Denunciar Fotos Fakes")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("small",[t._v("\n                                    Importante:\n                                ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary mr-auto",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Fechar")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Enviar Denuncia")])])}],d=(a("b54a"),a("218a")),u={name:"VueDenuncia",props:{perid:null},data:function(){return{link:null}},methods:{denunciar:function(){var t=this;d["a"].post("denuncia/denun/",{perid:this.perid,link:this.link}).then(function(e){t.$noty.success(e.data.message)})}}},m=u,v=a("2877"),p=Object(v["a"])(m,l,c,!1,null,null,null),h=p.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.modelos.length,expression:"modelos.length"}],attrs:{id:"related"}},[t._m(0),a("div",{staticClass:"owl-carousel owl-theme"},t._l(t.modelos,function(t){return a("mini-diamond",{key:t.id,attrs:{modelo:t}})}),1)])},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8 offset-md-2 text-center"},[a("h3",{staticClass:"display-6"},[t._v("Seleção exclusiva para você ")])])])])}],g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item "},[a("router-link",{staticClass:"wiz-card",staticStyle:{margin:"1rem"},attrs:{to:"/"+t.modelo.perfil.city.state.code+"/"+t.modelo.perfil.city.slug+"/"+t.modelo.perfil.category+"/"+t.modelo.perfil.slug+"/"+t.modelo.perfil.code+"/"}},[a("img",{staticClass:"img-fluid",attrs:{src:t.modelo.perfil.capa,alt:""}}),a("div",{staticClass:"wiz-header d-flex justify-content-between"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isDamond,expression:"isDamond"}],staticClass:"wiz-diamond",staticStyle:{position:"absolute",top:"2px"}},[a("button",{staticClass:"btn btn-warning"},[a("font-awesome-icon",{attrs:{icon:["far","gem"]}})],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isDestak,expression:"isDestak"}],staticClass:"wiz-diamond",staticStyle:{position:"absolute",top:"2.5rem"}},[a("button",{staticClass:"btn btn-warning"},[a("font-awesome-icon",{attrs:{icon:["fas","feather-alt"]}})],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.modelo.perfil.is_vip,expression:"modelo.perfil.is_vip"}],staticClass:"wiz-vip",staticStyle:{position:"absolute",top:"2px",right:"0px"}},[a("button",{staticClass:"btn btn-danger"},[a("font-awesome-icon",{attrs:{icon:["far","star"]}}),a("span",[t._v("VIP")])],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isTop,expression:"isTop"}],staticClass:"wiz-vip",staticStyle:{position:"absolute",top:"2.5rem",right:"0px"}},[a("button",{staticClass:"btn btn-danger"},[a("font-awesome-icon",{attrs:{icon:["fab","studiovinari"]}}),a("span",[t._v("TOP")])],1)])]),a("div",{staticClass:"wiz-footer"},[a("h4",[t._v(t._s(t.modelo.perfil.nome)+" "+t._s(t.modelo.perfil.sobrenome))]),a("em",[t._v("Idade: "+t._s(t.modelo.perfil.idade)+" anos")]),a("br"),a("em",[t._v(t._s(t.modelo.perfil.city.name)+" - "),a("b",{staticStyle:{"text-transform":"uppercase"}},[t._v(t._s(t.modelo.perfil.city.state.code)+",")]),t._v(" Brasil")])])])],1)},w=[],C={name:"MiniDiamond",props:{modelo:Object},computed:{isDamond:function(){return"Diamond"==this.modelo.membership.membership_type},isTop:function(){return"Top"==this.modelo.membership.membership_type},isDestak:function(){return"Destaque"==this.modelo.membership.membership_type}}},b=C,y=Object(v["a"])(b,g,w,!1,null,null,null),x=y.exports,S=a("1157"),$=a.n(S),k=$.a,E={name:"VueRelated",components:{MiniDiamond:x},computed:{cicode:function(){return this.$route.params.cicode},cislug:function(){return this.$route.params.cislug},category:function(){return this.$route.params.category}},data:function(){return{modelos:{}}},methods:{getData:function(){var t=this;d["a"].get("subs/"+this.cicode+"/"+this.cislug+"/"+this.category+"/diamonds/").then(function(e){t.modelos=e.data})}},created:function(){this.getData()},beforeUpdate:function(){k(document).ready(function(){k(".owl-carousel").owlCarousel({loop:!0,margin:10,nav:!0,responsive:{0:{items:1,nav:!0,loop:!0,autoplay:!0,autoplayTimeout:2e3},480:{items:2,nav:!0,loop:!0,autoplay:!0,autoplayTimeout:2e3},768:{items:3,nav:!0,loop:!0,autoplay:!0,autoplayTimeout:2e3},1024:{items:4,nav:!0,loop:!0,autoplay:!0,autoplayTimeout:2e3}}})})}},N=E,j=(a("687b"),Object(v["a"])(N,f,_,!1,null,null,null)),q=j.exports,z=$.a,D={name:"VueProfile",components:{VueDenuncia:h,VueRelated:q},data:function(){return{per:{},dados:{},esp:{},val:{},fotos:{},loc:{},serv:{},category:null}},methods:{getData:function(){var t=this;d["a"].get("p/"+this.$route.params.perid+"/").then(function(e){return[t.per=e.data,t.dados=e.data.dados[0],t.esp=e.data.especiais[0],t.loc=e.data.locais[0],t.val=e.data.valores[0],t.serv=e.data.services[0],t.fotos=e.data.images]}).catch(function(){t.$noty.error("Erro ao carregar dados..!")})},MoreView:function(){d["a"].post("views/"+this.per.id+"/more/").then()},MoreClick:function(){d["a"].post("clics/"+this.per.id+"/more/").then()}},beforeUpdate:function(){z(document).ready(function(){z("#wiz-galery").lightGallery({download:!1})}),this.MoreView()},created:function(){this.getData(),this.category=this.per.category},mounted:function(){}},V=D,O=Object(v["a"])(V,r,n,!1,null,null,null),T=O.exports,I={name:"Profile",components:{CitiNav:o["a"],VueProfile:T}},P=I,M=Object(v["a"])(P,s,i,!1,null,null,null);e["default"]=M.exports},c7d9:function(t,e,a){},f820:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an about page")])])}],o=a("2877"),r={},n=Object(o["a"])(r,s,i,!1,null,null,null);e["default"]=n.exports}}]);
//# sourceMappingURL=about.b36144fb.js.map