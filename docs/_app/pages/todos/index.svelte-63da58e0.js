import{S as t,i as e,s as a,e as o,k as s,c as n,a as l,n as d,d as r,b as c,H as i,f as u,I as h,Y as m,Z as f,_ as p,$ as v,a0 as g,a1 as b,a2 as x,R as E,t as j,V as w,g as y,a3 as T,w as q,x as _,u as k,a4 as M,a5 as O,r as I,a6 as N,J as R}from"../../chunks/vendor-25a1a96f.js";function U(t,{pending:e,error:a,result:o}){let s;async function n(n){const l=s={};n.preventDefault();const d=new FormData(t);e&&e(d,t);try{const e=await fetch(t.action,{method:t.method,headers:{accept:"application/json"},body:d});if(l!==s)return;e.ok?o(e,t):a?a(e,null,t):console.error(await e.text())}catch(r){if(!a)throw r;a(null,r,t)}}return t.addEventListener("submit",n),{destroy(){t.removeEventListener("submit",n)}}}function D(t,e,a){const o=t.slice();return o[6]=e[a],o[7]=e,o[8]=a,o}function F(t,e){let a,j,w,y,T,q,_,k,I,N,D,F,B,P,V,$,H,L,S,A,C,J,Y,Z,z,G,K,Q,W=R;function X(...t){return e[3](e[6],e[7],e[8],...t)}function tt(){return e[4](e[6],e[7],e[8])}function et(){return e[5](e[6])}return{key:t,first:null,c(){a=o("div"),j=o("form"),w=o("input"),T=s(),q=o("button"),N=s(),D=o("form"),F=o("input"),P=s(),V=o("button"),H=s(),L=o("form"),S=o("button"),Y=s(),this.h()},l(t){a=n(t,"DIV",{class:!0});var e=l(a);j=n(e,"FORM",{action:!0,method:!0});var o=l(j);w=n(o,"INPUT",{type:!0,name:!0,class:!0}),T=d(o),q=n(o,"BUTTON",{class:!0,"aria-label":!0}),l(q).forEach(r),o.forEach(r),N=d(e),D=n(e,"FORM",{class:!0,action:!0,method:!0});var s=l(D);F=n(s,"INPUT",{"aria-label":!0,type:!0,name:!0,class:!0}),P=d(s),V=n(s,"BUTTON",{class:!0,"aria-label":!0}),l(V).forEach(r),s.forEach(r),H=d(e),L=n(e,"FORM",{action:!0,method:!0});var c=l(L);S=n(c,"BUTTON",{class:!0,"aria-label":!0}),l(S).forEach(r),c.forEach(r),Y=d(e),e.forEach(r),this.h()},h(){c(w,"type","hidden"),c(w,"name","done"),w.value=y=e[6].done?"":"true",c(w,"class","svelte-dmxqmd"),c(q,"class","toggle svelte-dmxqmd"),c(q,"aria-label",_="Mark todo as "+(e[6].done?"not done":"done")),c(j,"action",k="/todos/"+e[6].uid+".json?_method=patch"),c(j,"method","post"),c(F,"aria-label","Edit todo"),c(F,"type","text"),c(F,"name","text"),F.value=B=e[6].text,c(F,"class","svelte-dmxqmd"),c(V,"class","save svelte-dmxqmd"),c(V,"aria-label","Save todo"),c(D,"class","text svelte-dmxqmd"),c(D,"action",$="/todos/"+e[6].uid+".json?_method=patch"),c(D,"method","post"),c(S,"class","delete svelte-dmxqmd"),c(S,"aria-label","Delete todo"),S.disabled=A=e[6].pending_delete,c(L,"action",C="/todos/"+e[6].uid+".json?_method=delete"),c(L,"method","post"),c(a,"class","todo svelte-dmxqmd"),i(a,"done",e[6].done),this.first=a},m(t,o){u(t,a,o),h(a,j),h(j,w),h(j,T),h(j,q),h(a,N),h(a,D),h(D,F),h(D,P),h(D,V),h(a,H),h(a,L),h(L,S),h(a,Y),G=!0,K||(Q=[m(I=U.call(null,j,{pending:X,result:e[1]})),m(U.call(null,D,{result:e[1]})),m(J=U.call(null,L,{pending:tt,result:et}))],K=!0)},p(t,o){e=t,(!G||1&o&&y!==(y=e[6].done?"":"true"))&&(w.value=y),(!G||1&o&&_!==(_="Mark todo as "+(e[6].done?"not done":"done")))&&c(q,"aria-label",_),(!G||1&o&&k!==(k="/todos/"+e[6].uid+".json?_method=patch"))&&c(j,"action",k),I&&f(I.update)&&1&o&&I.update.call(null,{pending:X,result:e[1]}),(!G||1&o&&B!==(B=e[6].text)&&F.value!==B)&&(F.value=B),(!G||1&o&&$!==($="/todos/"+e[6].uid+".json?_method=patch"))&&c(D,"action",$),(!G||1&o&&A!==(A=e[6].pending_delete))&&(S.disabled=A),(!G||1&o&&C!==(C="/todos/"+e[6].uid+".json?_method=delete"))&&c(L,"action",C),J&&f(J.update)&&1&o&&J.update.call(null,{pending:tt,result:et}),1&o&&i(a,"done",e[6].done)},r(){z=a.getBoundingClientRect()},f(){p(a),W(),v(a,z)},a(){W(),W=g(a,z,M,{duration:200})},i(t){G||(t&&b((()=>{Z||(Z=x(a,O,{start:.7},!0)),Z.run(1)})),G=!0)},o(t){t&&(Z||(Z=x(a,O,{start:.7},!1)),Z.run(0)),G=!1},d(t){t&&r(a),t&&Z&&Z.end(),K=!1,E(Q)}}}function B(t){let e,a,i,p,v,g,b,x,E,M,O,R,B=[],P=new Map,V=t[0];const $=t=>t[6].uid;for(let o=0;o<V.length;o+=1){let e=D(t,V,o),a=$(e);P.set(a,B[o]=F(a,e))}return{c(){e=s(),a=o("div"),i=o("h1"),p=j("Todos"),v=s(),g=o("form"),b=o("input"),E=s();for(let t=0;t<B.length;t+=1)B[t].c();this.h()},l(t){w('[data-svelte="svelte-181o7gf"]',document.head).forEach(r),e=d(t),a=n(t,"DIV",{class:!0});var o=l(a);i=n(o,"H1",{});var s=l(i);p=y(s,"Todos"),s.forEach(r),v=d(o),g=n(o,"FORM",{class:!0,action:!0,method:!0});var c=l(g);b=n(c,"INPUT",{name:!0,"aria-label":!0,placeholder:!0,class:!0}),c.forEach(r),E=d(o);for(let e=0;e<B.length;e+=1)B[e].l(o);o.forEach(r),this.h()},h(){document.title="Todos",c(b,"name","text"),c(b,"aria-label","Add todo"),c(b,"placeholder","+ tap to add a todo"),c(b,"class","svelte-dmxqmd"),c(g,"class","new svelte-dmxqmd"),c(g,"action","/todos.json"),c(g,"method","post"),c(a,"class","todos svelte-dmxqmd")},m(o,s){u(o,e,s),u(o,a,s),h(a,i),h(i,p),h(a,v),h(a,g),h(g,b),h(a,E);for(let t=0;t<B.length;t+=1)B[t].m(a,null);M=!0,O||(R=m(x=U.call(null,g,{result:t[2]})),O=!0)},p(t,[e]){if(x&&f(x.update)&&1&e&&x.update.call(null,{result:t[2]}),3&e){V=t[0],I();for(let t=0;t<B.length;t+=1)B[t].r();B=T(B,e,$,1,t,V,P,a,N,F,null,D);for(let t=0;t<B.length;t+=1)B[t].a();q()}},i(t){if(!M){for(let t=0;t<V.length;t+=1)_(B[t]);M=!0}},o(t){for(let e=0;e<B.length;e+=1)k(B[e]);M=!1},d(t){t&&r(e),t&&r(a);for(let e=0;e<B.length;e+=1)B[e].d();O=!1,R()}}}const P=async({fetch:t})=>{const e=await t("/todos.json");if(e.ok){return{props:{todos:await e.json()}}}const{message:a}=await e.json();return{error:new Error(a)}};function V(t,e,a){let{todos:o}=e;return t.$$set=t=>{"todos"in t&&a(0,o=t.todos)},[o,async function(t){const e=await t.json();a(0,o=o.map((t=>t.uid===e.uid?e:t)))},async(t,e)=>{const s=await t.json();a(0,o=[...o,s]),e.reset()},(t,e,s,n)=>{a(0,e[s].done=!!n.get("done"),o)},(t,e,s)=>a(0,e[s].pending_delete=!0,o),t=>{a(0,o=o.filter((e=>e.uid!==t.uid)))}]}class $ extends t{constructor(t){super(),e(this,t,V,B,a,{todos:0})}}export{$ as default,P as load};
