import{S as t,i as e,s as n,e as r,t as $,c as a,a as s,g as o,d as c,f as l,I as f,J as i,j as m,k as u,m as g,n as p,o as d,x as h,u as v,v as x,T as w,h as y,l as E,r as b,w as k,P as D,Q as H,R as S,b as T,U as I,V as O,W as L,X as M,Y as P,Z as j,_ as C,$ as A,a0 as _,a1 as N,a2 as q,a3 as B,a4 as V,a5 as W}from"../chunks/vendor-80dc5b58.js";function Y(t){let e,n;return{c(){e=r("p"),n=$("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan, diam et elementum\r\n\tgravida, arcu mi fermentum nibh, vel dapibus ligula orci non est. Morbi commodo sagittis finibus.\r\n\tMaecenas in volutpat massa. Nullam vulputate metus velit, quis interdum elit imperdiet ut.\r\n\tSuspendisse et sagittis erat, euismod vulputate enim. Etiam feugiat sit amet justo vitae commodo.")},l(t){e=a(t,"P",{});var r=s(e);n=o(r,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan, diam et elementum\r\n\tgravida, arcu mi fermentum nibh, vel dapibus ligula orci non est. Morbi commodo sagittis finibus.\r\n\tMaecenas in volutpat massa. Nullam vulputate metus velit, quis interdum elit imperdiet ut.\r\n\tSuspendisse et sagittis erat, euismod vulputate enim. Etiam feugiat sit amet justo vitae commodo."),r.forEach(c)},m(t,r){l(t,e,r),f(e,n)},p:i,i:i,o:i,d(t){t&&c(e)}}}class J extends t{constructor(t){super(),e(this,t,null,Y,n,{})}}function Q(t,e,n){const r=t.slice();return r[3]=e[n],r}function R(t,e,n){const r=t.slice();return r[3]=e[n],r}function U(t){let e,n=t[3]+"";return{c(){e=$(n)},l(t){e=o(t,n)},m(t,n){l(t,e,n)},p(t,r){1&r&&n!==(n=t[3]+"")&&y(e,n)},d(t){t&&c(e)}}}function X(t){let e,n,r;return e=new H({props:{close:!0,$$slots:{default:[U]},$$scope:{ctx:t}}}),e.$on("close",t[1]),{c(){m(e.$$.fragment),n=u()},l(t){g(e.$$.fragment,t),n=p(t)},m(t,$){d(e,t,$),l(t,n,$),r=!0},p(t,n){const r={};257&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){x(e,t),t&&c(n)}}}function Z(t){let e,n;return e=new I({props:{path:O}}),{c(){m(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,r){d(e,t,r),n=!0},p:i,i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){x(e,t)}}}function z(t){let e,n,$;return n=new S({props:{icon:!0,class:"pink-text",id:"add-tag-button",$$slots:{default:[Z]},$$scope:{ctx:t}}}),n.$on("click",t[2]),{c(){e=r("div"),m(n.$$.fragment),this.h()},l(t){e=a(t,"DIV",{slot:!0});var r=s(e);g(n.$$.fragment,r),r.forEach(c),this.h()},h(){T(e,"slot","append-outer")},m(t,r){l(t,e,r),d(n,e,null),$=!0},p(t,e){const r={};256&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){$||(h(n.$$.fragment,t),$=!0)},o(t){v(n.$$.fragment,t),$=!1},d(t){t&&c(e),x(n)}}}function F(t){let e,n,r=t[3]+"";return{c(){e=$(r),n=$(", ")},l(t){e=o(t,r),n=o(t,", ")},m(t,r){l(t,e,r),l(t,n,r)},p(t,n){1&n&&r!==(r=t[3]+"")&&y(e,r)},d(t){t&&c(e),t&&c(n)}}}function G(t){let e,n,i,y,H,S,T,I=t[0],O=[];for(let r=0;r<I.length;r+=1)O[r]=X(R(t,I,r));const L=t=>v(O[t],1,1,(()=>{O[t]=null}));n=new w({props:{solo:!0,placeholder:"New tag",id:"new-tag-field",$$slots:{"append-outer":[z]},$$scope:{ctx:t}}}),n.$on("keyup",t[2]);let M=t[0],P=[];for(let r=0;r<M.length;r+=1)P[r]=F(Q(t,M,r));return{c(){for(let t=0;t<O.length;t+=1)O[t].c();e=E(),m(n.$$.fragment),i=u(),y=r("p"),H=r("small"),S=$("Debugging tags are: ");for(let t=0;t<P.length;t+=1)P[t].c()},l(t){for(let e=0;e<O.length;e+=1)O[e].l(t);e=E(),g(n.$$.fragment,t),i=p(t),y=a(t,"P",{});var r=s(y);H=a(r,"SMALL",{});var $=s(H);S=o($,"Debugging tags are: ");for(let e=0;e<P.length;e+=1)P[e].l($);$.forEach(c),r.forEach(c)},m(t,r){for(let e=0;e<O.length;e+=1)O[e].m(t,r);l(t,e,r),d(n,t,r),l(t,i,r),l(t,y,r),f(y,H),f(H,S);for(let e=0;e<P.length;e+=1)P[e].m(H,null);T=!0},p(t,[r]){if(3&r){let n;for(I=t[0],n=0;n<I.length;n+=1){const $=R(t,I,n);O[n]?(O[n].p($,r),h(O[n],1)):(O[n]=X($),O[n].c(),h(O[n],1),O[n].m(e.parentNode,e))}for(b(),n=I.length;n<O.length;n+=1)L(n);k()}const $={};if(256&r&&($.$$scope={dirty:r,ctx:t}),n.$set($),1&r){let e;for(M=t[0],e=0;e<M.length;e+=1){const n=Q(t,M,e);P[e]?P[e].p(n,r):(P[e]=F(n),P[e].c(),P[e].m(H,null))}for(;e<P.length;e+=1)P[e].d(1);P.length=M.length}},i(t){if(!T){for(let t=0;t<I.length;t+=1)h(O[t]);h(n.$$.fragment,t),T=!0}},o(t){O=O.filter(Boolean);for(let e=0;e<O.length;e+=1)v(O[e]);v(n.$$.fragment,t),T=!1},d(t){D(O,t),t&&c(e),x(n,t),t&&c(i),t&&c(y),D(P,t)}}}function K(t,e,n){let r=["work","office","design","le guin"];return[r,t=>{const e=t.detail.currentTarget.closest(".s-chip").innerText;n(0,r=r.filter((t=>t!==e))),console.log(r)},t=>{const e=document.getElementById("new-tag-field"),$=e.value;if(""!=e.value.replace(",",""))if(null!=t.target.closest("button#add-tag-button"))n(0,r=[...r,$]),e.value="";else{const a=void 0!==t?t.keyCode:t.which;[59,44,13,186,188].includes(a)&&(n(0,r=[...r,$.replace(",","").replace(";","")]),e.value="")}}]}class tt extends t{constructor(t){super(),e(this,t,K,G,n,{})}}function et(t){let e;return{c(){e=$("Hello Annisa!")},l(t){e=o(t,"Hello Annisa!")},m(t,n){l(t,e,n)},d(t){t&&c(e)}}}function nt(t){let e,n,i,w,y,E,b;return w=new S({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),w.$on("click",t[2]),E=new J({}),{c(){e=r("h4"),n=$("Home"),i=u(),m(w.$$.fragment),y=u(),m(E.$$.fragment)},l(t){e=a(t,"H4",{});var r=s(e);n=o(r,"Home"),r.forEach(c),i=p(t),g(w.$$.fragment,t),y=p(t),g(E.$$.fragment,t)},m(t,r){l(t,e,r),f(e,n),l(t,i,r),d(w,t,r),l(t,y,r),d(E,t,r),b=!0},p(t,e){const n={};32&e&&(n.$$scope={dirty:e,ctx:t}),w.$set(n)},i(t){b||(h(w.$$.fragment,t),h(E.$$.fragment,t),b=!0)},o(t){v(w.$$.fragment,t),v(E.$$.fragment,t),b=!1},d(t){t&&c(e),t&&c(i),x(w,t),t&&c(y),x(E,t)}}}function rt(t){let e;return{c(){e=$("My name is:")},l(t){e=o(t,"My name is:")},m(t,n){l(t,e,n)},d(t){t&&c(e)}}}function $t(t){let e;return{c(){e=$("Line 1")},l(t){e=o(t,"Line 1")},m(t,n){l(t,e,n)},d(t){t&&c(e)}}}function at(t){let e;return{c(){e=$("Line 2")},l(t){e=o(t,"Line 2")},m(t,n){l(t,e,n)},d(t){t&&c(e)}}}function st(t){let e;return{c(){e=$("City")},l(t){e=o(t,"City")},m(t,n){l(t,e,n)},d(t){t&&c(e)}}}function ot(t){let e;return{c(){e=$("State")},l(t){e=o(t,"State")},m(t,n){l(t,e,n)},d(t){t&&c(e)}}}function ct(t){let e;return{c(){e=$("Post code")},l(t){e=o(t,"Post code")},m(t,n){l(t,e,n)},d(t){t&&c(e)}}}function lt(t){let e;return{c(){e=$("Country")},l(t){e=o(t,"Country")},m(t,n){l(t,e,n)},d(t){t&&c(e)}}}function ft(t){let e,n,i,y,E,b,k,D,H,S,T,I,O,L,M,P,j,C,A,_,N,q,B,V,W,Y,Q,R;return k=new w({props:{clearable:!0,counter:20,rules:t[1],$$slots:{default:[rt]},$$scope:{ctx:t}}}),M=new w({props:{clearable:!0,counter:20,rules:t[1],$$slots:{default:[$t]},$$scope:{ctx:t}}}),j=new w({props:{clearable:!0,counter:20,rules:t[1],$$slots:{default:[at]},$$scope:{ctx:t}}}),A=new w({props:{clearable:!0,counter:20,rules:t[1],$$slots:{default:[st]},$$scope:{ctx:t}}}),N=new w({props:{clearable:!0,counter:20,rules:t[1],$$slots:{default:[ot]},$$scope:{ctx:t}}}),B=new w({props:{clearable:!0,counter:20,rules:t[1],$$slots:{default:[ct]},$$scope:{ctx:t}}}),W=new w({props:{clearable:!0,counter:20,rules:t[1],$$slots:{default:[lt]},$$scope:{ctx:t}}}),Q=new J({}),{c(){e=r("h4"),n=$("Your name"),i=u(),y=r("p"),E=$("This is how your name will be on your edition, and on the envelope."),b=u(),m(k.$$.fragment),D=u(),H=r("h4"),S=$("Address"),T=u(),I=r("p"),O=$("Where should we send your edition?"),L=u(),m(M.$$.fragment),P=u(),m(j.$$.fragment),C=u(),m(A.$$.fragment),_=u(),m(N.$$.fragment),q=u(),m(B.$$.fragment),V=u(),m(W.$$.fragment),Y=u(),m(Q.$$.fragment)},l(t){e=a(t,"H4",{});var r=s(e);n=o(r,"Your name"),r.forEach(c),i=p(t),y=a(t,"P",{});var $=s(y);E=o($,"This is how your name will be on your edition, and on the envelope."),$.forEach(c),b=p(t),g(k.$$.fragment,t),D=p(t),H=a(t,"H4",{});var l=s(H);S=o(l,"Address"),l.forEach(c),T=p(t),I=a(t,"P",{});var f=s(I);O=o(f,"Where should we send your edition?"),f.forEach(c),L=p(t),g(M.$$.fragment,t),P=p(t),g(j.$$.fragment,t),C=p(t),g(A.$$.fragment,t),_=p(t),g(N.$$.fragment,t),q=p(t),g(B.$$.fragment,t),V=p(t),g(W.$$.fragment,t),Y=p(t),g(Q.$$.fragment,t)},m(t,r){l(t,e,r),f(e,n),l(t,i,r),l(t,y,r),f(y,E),l(t,b,r),d(k,t,r),l(t,D,r),l(t,H,r),f(H,S),l(t,T,r),l(t,I,r),f(I,O),l(t,L,r),d(M,t,r),l(t,P,r),d(j,t,r),l(t,C,r),d(A,t,r),l(t,_,r),d(N,t,r),l(t,q,r),d(B,t,r),l(t,V,r),d(W,t,r),l(t,Y,r),d(Q,t,r),R=!0},p(t,e){const n={};32&e&&(n.$$scope={dirty:e,ctx:t}),k.$set(n);const r={};32&e&&(r.$$scope={dirty:e,ctx:t}),M.$set(r);const $={};32&e&&($.$$scope={dirty:e,ctx:t}),j.$set($);const a={};32&e&&(a.$$scope={dirty:e,ctx:t}),A.$set(a);const s={};32&e&&(s.$$scope={dirty:e,ctx:t}),N.$set(s);const o={};32&e&&(o.$$scope={dirty:e,ctx:t}),B.$set(o);const c={};32&e&&(c.$$scope={dirty:e,ctx:t}),W.$set(c)},i(t){R||(h(k.$$.fragment,t),h(M.$$.fragment,t),h(j.$$.fragment,t),h(A.$$.fragment,t),h(N.$$.fragment,t),h(B.$$.fragment,t),h(W.$$.fragment,t),h(Q.$$.fragment,t),R=!0)},o(t){v(k.$$.fragment,t),v(M.$$.fragment,t),v(j.$$.fragment,t),v(A.$$.fragment,t),v(N.$$.fragment,t),v(B.$$.fragment,t),v(W.$$.fragment,t),v(Q.$$.fragment,t),R=!1},d(t){t&&c(e),t&&c(i),t&&c(y),t&&c(b),x(k,t),t&&c(D),t&&c(H),t&&c(T),t&&c(I),t&&c(L),x(M,t),t&&c(P),x(j,t),t&&c(C),x(A,t),t&&c(_),x(N,t),t&&c(q),x(B,t),t&&c(V),x(W,t),t&&c(Y),x(Q,t)}}}function it(t){let e,n,r=t[0][0]+"";return{c(){e=$("Inset "),n=$(r)},l(t){e=o(t,"Inset "),n=o(t,r)},m(t,r){l(t,e,r),l(t,n,r)},p(t,e){1&e&&r!==(r=t[0][0]+"")&&y(n,r)},d(t){t&&c(e),t&&c(n)}}}function mt(t){let e,n,r=t[0][1]+"";return{c(){e=$("Inset "),n=$(r)},l(t){e=o(t,"Inset "),n=o(t,r)},m(t,r){l(t,e,r),l(t,n,r)},p(t,e){1&e&&r!==(r=t[0][1]+"")&&y(n,r)},d(t){t&&c(e),t&&c(n)}}}function ut(t){let e,n,i,w,y,E,b,k,D,H,S,T,I,O,L,M,P,j,C,B,V,W,Y,Q,R,U,X,Z,z,F,G,K,et,nt,rt;function $t(e){t[3](e)}S=new tt({}),Q=new tt({}),U=new J({});let at={inset:!0,$$slots:{default:[it]},$$scope:{ctx:t}};function st(e){t[4](e)}void 0!==t[0][0]&&(at.checked=t[0][0]),Z=new A({props:at}),_.push((()=>N(Z,"checked",$t)));let ot={inset:!0,$$slots:{default:[mt]},$$scope:{ctx:t}};return void 0!==t[0][1]&&(ot.checked=t[0][1]),G=new A({props:ot}),_.push((()=>N(G,"checked",st))),nt=new J({}),{c(){e=r("h4"),n=$("Settings"),i=u(),w=r("div"),y=r("p"),E=$("TODO: bind this to a store, or to the DB or something ¯\\_( ͡° ͜ʖ ͡°)_/¯"),b=u(),k=r("h4"),D=$("Tags:"),H=u(),m(S.$$.fragment),T=u(),I=r("h4"),O=$("Search terms:"),L=u(),M=r("p"),P=$("TODO: make the js inside the component look for "),j=r("em"),C=$("this"),B=$(" input, not using\n\t\t\t\t\t\t"),V=r("code"),W=$("document"),Y=u(),m(Q.$$.fragment),R=u(),m(U.$$.fragment),X=u(),m(Z.$$.fragment),F=u(),m(G.$$.fragment),et=u(),m(nt.$$.fragment)},l(t){e=a(t,"H4",{});var r=s(e);n=o(r,"Settings"),r.forEach(c),i=p(t),w=a(t,"DIV",{});var $=s(w);y=a($,"P",{});var l=s(y);E=o(l,"TODO: bind this to a store, or to the DB or something ¯\\_( ͡° ͜ʖ ͡°)_/¯"),l.forEach(c),b=p($),k=a($,"H4",{});var f=s(k);D=o(f,"Tags:"),f.forEach(c),H=p($),g(S.$$.fragment,$),T=p($),I=a($,"H4",{});var m=s(I);O=o(m,"Search terms:"),m.forEach(c),L=p($),M=a($,"P",{});var u=s(M);P=o(u,"TODO: make the js inside the component look for "),j=a(u,"EM",{});var d=s(j);C=o(d,"this"),d.forEach(c),B=o(u," input, not using\n\t\t\t\t\t\t"),V=a(u,"CODE",{});var h=s(V);W=o(h,"document"),h.forEach(c),u.forEach(c),Y=p($),g(Q.$$.fragment,$),$.forEach(c),R=p(t),g(U.$$.fragment,t),X=p(t),g(Z.$$.fragment,t),F=p(t),g(G.$$.fragment,t),et=p(t),g(nt.$$.fragment,t)},m(t,r){l(t,e,r),f(e,n),l(t,i,r),l(t,w,r),f(w,y),f(y,E),f(w,b),f(w,k),f(k,D),f(w,H),d(S,w,null),f(w,T),f(w,I),f(I,O),f(w,L),f(w,M),f(M,P),f(M,j),f(j,C),f(M,B),f(M,V),f(V,W),f(w,Y),d(Q,w,null),l(t,R,r),d(U,t,r),l(t,X,r),d(Z,t,r),l(t,F,r),d(G,t,r),l(t,et,r),d(nt,t,r),rt=!0},p(t,e){const n={};33&e&&(n.$$scope={dirty:e,ctx:t}),!z&&1&e&&(z=!0,n.checked=t[0][0],q((()=>z=!1))),Z.$set(n);const r={};33&e&&(r.$$scope={dirty:e,ctx:t}),!K&&1&e&&(K=!0,r.checked=t[0][1],q((()=>K=!1))),G.$set(r)},i(t){rt||(h(S.$$.fragment,t),h(Q.$$.fragment,t),h(U.$$.fragment,t),h(Z.$$.fragment,t),h(G.$$.fragment,t),h(nt.$$.fragment,t),rt=!0)},o(t){v(S.$$.fragment,t),v(Q.$$.fragment,t),v(U.$$.fragment,t),v(Z.$$.fragment,t),v(G.$$.fragment,t),v(nt.$$.fragment,t),rt=!1},d(t){t&&c(e),t&&c(i),t&&c(w),x(S),x(Q),t&&c(R),x(U,t),t&&c(X),x(Z,t),t&&c(F),x(G,t),t&&c(et),x(nt,t)}}}function gt(t){let e,n,r,$,a,s;return e=new j({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),r=new j({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),a=new j({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),{c(){m(e.$$.fragment),n=u(),m(r.$$.fragment),$=u(),m(a.$$.fragment)},l(t){g(e.$$.fragment,t),n=p(t),g(r.$$.fragment,t),$=p(t),g(a.$$.fragment,t)},m(t,o){d(e,t,o),l(t,n,o),d(r,t,o),l(t,$,o),d(a,t,o),s=!0},p(t,n){const $={};32&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const s={};32&n&&(s.$$scope={dirty:n,ctx:t}),r.$set(s);const o={};33&n&&(o.$$scope={dirty:n,ctx:t}),a.$set(o)},i(t){s||(h(e.$$.fragment,t),h(r.$$.fragment,t),h(a.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),v(r.$$.fragment,t),v(a.$$.fragment,t),s=!1},d(t){x(e,t),t&&c(n),x(r,t),t&&c($),x(a,t)}}}function pt(t){let e,n,r;return n=new I({props:{path:B}}),{c(){e=$("Home"),m(n.$$.fragment)},l(t){e=o(t,"Home"),g(n.$$.fragment,t)},m(t,$){l(t,e,$),d(n,t,$),r=!0},p:i,i(t){r||(h(n.$$.fragment,t),r=!0)},o(t){v(n.$$.fragment,t),r=!1},d(t){t&&c(e),x(n,t)}}}function dt(t){let e,n,r;return n=new I({props:{path:V}}),{c(){e=$("Address"),m(n.$$.fragment)},l(t){e=o(t,"Address"),g(n.$$.fragment,t)},m(t,$){l(t,e,$),d(n,t,$),r=!0},p:i,i(t){r||(h(n.$$.fragment,t),r=!0)},o(t){v(n.$$.fragment,t),r=!1},d(t){t&&c(e),x(n,t)}}}function ht(t){let e,n,r;return n=new I({props:{path:W}}),{c(){e=$("Settings"),m(n.$$.fragment)},l(t){e=o(t,"Settings"),g(n.$$.fragment,t)},m(t,$){l(t,e,$),d(n,t,$),r=!0},p:i,i(t){r||(h(n.$$.fragment,t),r=!0)},o(t){v(n.$$.fragment,t),r=!1},d(t){t&&c(e),x(n,t)}}}function vt(t){let e,n,$,o,i,w,y;return n=new C({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),o=new C({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),w=new C({props:{$$slots:{default:[ht]},$$scope:{ctx:t}}}),{c(){e=r("div"),m(n.$$.fragment),$=u(),m(o.$$.fragment),i=u(),m(w.$$.fragment),this.h()},l(t){e=a(t,"DIV",{slot:!0});var r=s(e);g(n.$$.fragment,r),$=p(r),g(o.$$.fragment,r),i=p(r),g(w.$$.fragment,r),r.forEach(c),this.h()},h(){T(e,"slot","tabs")},m(t,r){l(t,e,r),d(n,e,null),f(e,$),d(o,e,null),f(e,i),d(w,e,null),y=!0},p(t,e){const r={};32&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r);const $={};32&e&&($.$$scope={dirty:e,ctx:t}),o.$set($);const a={};32&e&&(a.$$scope={dirty:e,ctx:t}),w.$set(a)},i(t){y||(h(n.$$.fragment,t),h(o.$$.fragment,t),h(w.$$.fragment,t),y=!0)},o(t){v(n.$$.fragment,t),v(o.$$.fragment,t),v(w.$$.fragment,t),y=!1},d(t){t&&c(e),x(n),x(o),x(w)}}}function xt(t){let e,n;return e=new P({props:{grow:!0,$$slots:{tabs:[vt],default:[gt]},$$scope:{ctx:t}}}),{c(){m(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,r){d(e,t,r),n=!0},p(t,n){const r={};33&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){x(e,t)}}}function wt(t){let e,n,i,w,y,E,b,k,D,H,S,I;return S=new L({props:{theme:Et,$$slots:{default:[xt]},$$scope:{ctx:t}}}),{c(){e=u(),n=r("section"),i=r("h2"),w=$("Debug"),y=u(),E=r("dl"),b=r("dt"),k=r("dd"),D=u(),H=r("section"),m(S.$$.fragment),this.h()},l(t){M('[data-svelte="svelte-1anpopb"]',document.head).forEach(c),e=p(t),n=a(t,"SECTION",{class:!0});var r=s(n);i=a(r,"H2",{});var $=s(i);w=o($,"Debug"),$.forEach(c),y=p(r),E=a(r,"DL",{});var l=s(E);b=a(l,"DT",{}),s(b).forEach(c),k=a(l,"DD",{}),s(k).forEach(c),l.forEach(c),r.forEach(c),D=p(t),H=a(t,"SECTION",{class:!0});var f=s(H);g(S.$$.fragment,f),f.forEach(c),this.h()},h(){document.title="Home",T(n,"class","svelte-1jlhe5t"),T(H,"class","svelte-1jlhe5t")},m(t,r){l(t,e,r),l(t,n,r),f(n,i),f(i,w),f(n,y),f(n,E),f(E,b),f(E,k),l(t,D,r),l(t,H,r),d(S,H,null),I=!0},p(t,[e]){const n={};33&e&&(n.$$scope={dirty:e,ctx:t}),S.$set(n)},i(t){I||(h(S.$$.fragment,t),I=!0)},o(t){v(S.$$.fragment,t),I=!1},d(t){t&&c(e),t&&c(n),t&&c(D),t&&c(H),x(S)}}}const yt=!0;let Et="light";function bt(t,e,n){const r=[!1,!0];return[r,[t=>t.length<=20||"Max 20 characters"],()=>{alert("I knew you'd click this!")},function(e){t.$$.not_equal(r[0],e)&&(r[0]=e,n(0,r))},function(e){t.$$.not_equal(r[1],e)&&(r[1]=e,n(0,r))}]}class kt extends t{constructor(t){super(),e(this,t,bt,wt,n,{})}}export{kt as default,yt as prerender};