(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2bf6734c"],{"0b42":function(t,e,n){var r=n("da84"),o=n("e8b5"),a=n("68ee"),c=n("861d"),s=n("b622"),i=s("species"),u=r.Array;t.exports=function(t){var e;return o(t)&&(e=t.constructor,a(e)&&(e===u||o(e.prototype))?e=void 0:c(e)&&(e=e[i],null===e&&(e=void 0))),void 0===e?u:e}},"1dde":function(t,e,n){var r=n("d039"),o=n("b622"),a=n("2d00"),c=o("species");t.exports=function(t){return a>=51||!r((function(){var e=[],n=e.constructor={};return n[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"65f0":function(t,e,n){var r=n("0b42");t.exports=function(t,e){return new(r(t))(0===e?0:e)}},8418:function(t,e,n){"use strict";var r=n("a04b"),o=n("9bf2"),a=n("5c6c");t.exports=function(t,e,n){var c=r(e);c in t?o.f(t,c,a(0,n)):t[c]=n}},"99af":function(t,e,n){"use strict";var r=n("23e7"),o=n("da84"),a=n("d039"),c=n("e8b5"),s=n("861d"),i=n("7b0b"),u=n("07fa"),d=n("8418"),f=n("65f0"),l=n("1dde"),p=n("b622"),b=n("2d00"),m=p("isConcatSpreadable"),v=9007199254740991,g="Maximum allowed index exceeded",h=o.TypeError,w=b>=51||!a((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),j=l("concat"),O=function(t){if(!s(t))return!1;var e=t[m];return void 0!==e?!!e:c(t)},x=!w||!j;r({target:"Array",proto:!0,forced:x},{concat:function(t){var e,n,r,o,a,c=i(this),s=f(c,0),l=0;for(e=-1,r=arguments.length;e<r;e++)if(a=-1===e?c:arguments[e],O(a)){if(o=u(a),l+o>v)throw h(g);for(n=0;n<o;n++,l++)n in a&&d(s,l,a[n])}else{if(l>=v)throw h(g);d(s,l++,a)}return s.length=l,s}})},ac5b:function(t,e,n){"use strict";n.r(e);var r=n("7a23"),o={class:"container"},a=Object(r["g"])("h2",{class:"fw-bold text-center py-3"},"登入頁面",-1),c={class:"form-floating mb-3"},s=Object(r["g"])("label",{for:"floatingInput"},"Email address",-1),i={class:"form-floating mb-3"},u=Object(r["g"])("label",{for:"floatingPassword"},"Password",-1),d=Object(r["g"])("button",{class:"btn btn-primary d-block ms-auto",type:"submit"},"登入",-1);function f(t,e,n,f,l,p){return Object(r["s"])(),Object(r["f"])("div",o,[a,Object(r["g"])("form",{onSubmit:e[2]||(e[2]=Object(r["G"])((function(){return p.login&&p.login.apply(p,arguments)}),["prevent"]))},[Object(r["g"])("div",c,[Object(r["F"])(Object(r["g"])("input",{type:"email",class:"form-control",id:"floatingInput",placeholder:"name@example.com",required:"","onUpdate:modelValue":e[0]||(e[0]=function(t){return l.user.username=t})},null,512),[[r["C"],l.user.username]]),s]),Object(r["g"])("div",i,[Object(r["F"])(Object(r["g"])("input",{type:"password",class:"form-control",id:"floatingPassword",placeholder:"Password",required:"","onUpdate:modelValue":e[1]||(e[1]=function(t){return l.user.password=t})},null,512),[[r["C"],l.user.password]]),u]),d],32)])}n("99af");var l={data:function(){return{user:{username:"",password:""}}},methods:{login:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","admin/signin");this.$http.post(e,this.user).then((function(e){if(console.log(e),e.data.success){var n=e.data,r=n.token,o=n.expired;document.cookie="carrieToken=".concat(r,"; expires=").concat(new Date(o),";"),t.$router.push("/dashboard")}})).catch((function(t){console.log(t)}))}}},p=n("d959"),b=n.n(p);const m=b()(l,[["render",f]]);e["default"]=m},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}}}]);
//# sourceMappingURL=chunk-2bf6734c.b55d670e.js.map