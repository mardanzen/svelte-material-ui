import{S as n,i as t,s as a,_ as o,L as c,m as e,E as s,o as i,p as d,k as l,P as r,$ as u,F as p,v as m,w as b,G as $,u as f,d as _,V as h,W as g,a0 as v,a1 as x,M as y,Z as k,a2 as w,a3 as I,e as j,b as M,f as S,j as E,a4 as F,a5 as N}from"./client.41683df4.js";function U(n){let t;return{c(){t=j("div"),this.h()},l(n){t=M(n,"DIV",{class:!0}),S(t).forEach(_),this.h()},h(){E(t,"class","mdc-button__ripple")},m(n,a){l(n,t,a)},d(n){n&&_(t)}}}function V(n){let t;return{c(){t=j("div"),this.h()},l(n){t=M(n,"DIV",{class:!0}),S(t).forEach(_),this.h()},h(){E(t,"class","mdc-button__touch")},m(n,a){l(n,t,a)},d(n){n&&_(t)}}}function D(n){let t,a,o,c=n[2]&&U();const e=n[17].default,i=F(e,n,n[19],null);let d=n[5]&&V();return{c(){c&&c.c(),t=s(),i&&i.c(),d&&d.c(),a=s()},l(n){c&&c.l(n),t=s(),i&&i.l(n),d&&d.l(n),a=s()},m(n,e){c&&c.m(n,e),l(n,t,e),i&&i.m(n,e),d&&d.m(n,e),l(n,a,e),o=!0},p(n,o){n[2]?c||(c=U(),c.c(),c.m(t.parentNode,t)):c&&(c.d(1),c=null),i&&i.p&&524288&o&&N(i,e,n,n[19],o,null,null),n[5]?d||(d=V(),d.c(),d.m(a.parentNode,a)):d&&(d.d(1),d=null)},i(n){o||(f(i,n),o=!0)},o(n){m(i,n),o=!1},d(n){c&&c.d(n),n&&_(t),i&&i.d(n),d&&d.d(n),n&&_(a)}}}function B(n){let t,a,h;const g=[{use:[[o,{ripple:n[2],unbounded:!1,disabled:!!n[13].disabled,classForward:n[18]}],n[11],...n[0]]},{class:"\n    mdc-button\n    "+n[1]+"\n    "+n[7].join(" ")+"\n    "+("raised"===n[4]?"mdc-button--raised":"")+"\n    "+("unelevated"===n[4]?"mdc-button--unelevated":"")+"\n    "+("outlined"===n[4]?"mdc-button--outlined":"")+"\n    "+("secondary"===n[3]?"smui-button--color-secondary":"")+"\n    "+(n[5]?"mdc-button--touch":"")+"\n    "+("card:action"===n[12]?"mdc-card__action":"")+"\n    "+("card:action"===n[12]?"mdc-card__action--button":"")+"\n    "+("dialog:action"===n[12]?"mdc-dialog__button":"")+"\n    "+("top-app-bar:navigation"===n[12]?"mdc-top-app-bar__navigation-icon":"")+"\n    "+("top-app-bar:action"===n[12]?"mdc-top-app-bar__action-item":"")+"\n    "+("snackbar"===n[12]?"mdc-snackbar__action":"")+"\n  "},n[9],n[10],c(n[13],["use","class","ripple","color","variant","touch","component",...n[8]])];var v=n[6];function x(n){let t={$$slots:{default:[D]},$$scope:{ctx:n}};for(let n=0;n<g.length;n+=1)t=y(t,g[n]);return{props:t}}return v&&(t=new v(x(n))),{c(){t&&e(t.$$.fragment),a=s()},l(n){t&&i(t.$$.fragment,n),a=s()},m(n,o){t&&d(t,n,o),l(n,a,o),h=!0},p(n,[s]){const i=16319&s?r(g,[10373&s&&{use:[[o,{ripple:n[2],unbounded:!1,disabled:!!n[13].disabled,classForward:n[18]}],n[11],...n[0]]},4282&s&&{class:"\n    mdc-button\n    "+n[1]+"\n    "+n[7].join(" ")+"\n    "+("raised"===n[4]?"mdc-button--raised":"")+"\n    "+("unelevated"===n[4]?"mdc-button--unelevated":"")+"\n    "+("outlined"===n[4]?"mdc-button--outlined":"")+"\n    "+("secondary"===n[3]?"smui-button--color-secondary":"")+"\n    "+(n[5]?"mdc-button--touch":"")+"\n    "+("card:action"===n[12]?"mdc-card__action":"")+"\n    "+("card:action"===n[12]?"mdc-card__action--button":"")+"\n    "+("dialog:action"===n[12]?"mdc-dialog__button":"")+"\n    "+("top-app-bar:navigation"===n[12]?"mdc-top-app-bar__navigation-icon":"")+"\n    "+("top-app-bar:action"===n[12]?"mdc-top-app-bar__action-item":"")+"\n    "+("snackbar"===n[12]?"mdc-snackbar__action":"")+"\n  "},512&s&&u(n[9]),1024&s&&u(n[10]),8448&s&&u(c(n[13],["use","class","ripple","color","variant","touch","component",...n[8]]))]):{};if(524324&s&&(i.$$scope={dirty:s,ctx:n}),v!==(v=n[6])){if(t){p();const n=t;m(n.$$.fragment,1,0,(()=>{b(n,1)})),$()}v?(t=new v(x(n)),e(t.$$.fragment),f(t.$$.fragment,1),d(t,a.parentNode,a)):t=null}else v&&t.$set(i)},i(n){h||(t&&f(t.$$.fragment,n),h=!0)},o(n){t&&m(t.$$.fragment,n),h=!1},d(n){n&&_(a),t&&b(t,n)}}}function G(n,t,a){let{$$slots:o={},$$scope:c}=t;const e=h(g());let{use:s=[]}=t,{class:i=""}=t,{ripple:d=!0}=t,{color:l="primary"}=t,{variant:r="text"}=t,{touch:u=!1}=t,{href:p=null}=t,{action:m="close"}=t,{default:b=!1}=t,{component:$=(null==p?w:I)}=t,f=v("SMUI:button:context"),_=[];x("SMUI:label:context","button"),x("SMUI:icon:context","button");let j,M,S;return n.$$set=n=>{a(13,t=y(y({},t),k(n))),"use"in n&&a(0,s=n.use),"class"in n&&a(1,i=n.class),"ripple"in n&&a(2,d=n.ripple),"color"in n&&a(3,l=n.color),"variant"in n&&a(4,r=n.variant),"touch"in n&&a(5,u=n.touch),"href"in n&&a(14,p=n.href),"action"in n&&a(15,m=n.action),"default"in n&&a(16,b=n.default),"component"in n&&a(6,$=n.component),"$$scope"in n&&a(19,c=n.$$scope)},n.$$.update=()=>{32768&n.$$.dirty&&a(9,M="dialog:action"===f&&null!==m?{"data-mdc-dialog-action":m}:{}),65536&n.$$.dirty&&a(10,S="dialog:action"===f&&b?{"data-mdc-dialog-button-default":""}:{})},a(8,j="dialog:action"===f?["action","default"]:[]),t=k(t),[s,i,d,l,r,u,$,_,j,M,S,e,f,t,p,m,b,o,n=>a(7,_=n),c]}class L extends n{constructor(n){super(),t(this,n,G,B,a,{use:0,class:1,ripple:2,color:3,variant:4,touch:5,href:14,action:15,default:16,component:6})}}export{L as B};
