"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3381],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=l,d=p["".concat(c,".").concat(m)]||p[m]||k[m]||a;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2695:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>k,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(7462),l=(r(7294),r(3905));const a={sidebar_position:3},o="Kerberos\u534f\u8bae",i={unversionedId:"NetworkProtocolSecurity/Kerberos",id:"NetworkProtocolSecurity/Kerberos",title:"Kerberos\u534f\u8bae",description:"Kerberosprotocol",source:"@site/docs/NetworkProtocolSecurity/Kerberos.md",sourceDirName:"NetworkProtocolSecurity",slug:"/NetworkProtocolSecurity/Kerberos",permalink:"/en/docs/NetworkProtocolSecurity/Kerberos",draft:!1,editUrl:"https://github.com/Axsl666/Axsl666.github.io/tree/master/docs/NetworkProtocolSecurity/Kerberos.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"DocSidebar",previous:{title:"intro",permalink:"/en/docs/NetworkProtocolSecurity/intro"},next:{title:"IPsec\u534f\u8bae",permalink:"/en/docs/NetworkProtocolSecurity/ipsec"}},c={},u=[{value:"Kerberos\u534f\u8bae\u539f\u7406",id:"kerberos\u534f\u8bae\u539f\u7406",level:2},{value:"\u6e90\u8d77",id:"\u6e90\u8d77",level:3},{value:"Kerberos\u57fa\u672c\u6982\u5ff5",id:"kerberos\u57fa\u672c\u6982\u5ff5",level:2},{value:"Kerberos Principal",id:"kerberos-principal",level:2},{value:"\u8bbe\u8ba1\u52a8\u673a",id:"\u8bbe\u8ba1\u52a8\u673a",level:2},{value:"\u8ba4\u8bc1\u8fc7\u7a0b",id:"\u8ba4\u8bc1\u8fc7\u7a0b",level:2}],s={toc:u},p="wrapper";function k(e){let{components:t,...a}=e;return(0,l.kt)(p,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"kerberos\u534f\u8bae"},"Kerberos\u534f\u8bae"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Kerberos_protocol",src:r(6736).Z})),(0,l.kt)("p",null,"Single Sign On"),(0,l.kt)("h2",{id:"kerberos\u534f\u8bae\u539f\u7406"},"Kerberos\u534f\u8bae\u539f\u7406"),(0,l.kt)("h3",{id:"\u6e90\u8d77"},"\u6e90\u8d77"),(0,l.kt)("p",null,"The Kerberos model is based in part on Needham and Schroeder's trusted third-party authentication protocol and on modifications   suggested by Denning and Sacco."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6e90\u81ea Needham-Schroeder\u7684\u4e00\u79cd\u8ba4\u8bc1\u534f\u8bae"),(0,l.kt)("li",{parentName:"ul"},"\u8f6f\u4ef6 Kerberos V5"),(0,l.kt)("li",{parentName:"ul"},"MIT Project Athena\u7684\u4ea7\u7269"),(0,l.kt)("li",{parentName:"ul"},"RFC 1510 \u2013 Kerberos V5 (1992)"),(0,l.kt)("li",{parentName:"ul"},"RFC4120 - 2005"),(0,l.kt)("li",{parentName:"ul"},"\u96c6\u6210\u5230 Windows 2000+"),(0,l.kt)("li",{parentName:"ul"},"\u96c6\u6210\u5230Unix\u7684\u591a\u4e2a\u7248\u672c\u4ee5\u53ca\u5e94\u7528\u4e2d")),(0,l.kt)("h2",{id:"kerberos\u57fa\u672c\u6982\u5ff5"},"Kerberos\u57fa\u672c\u6982\u5ff5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Principal(\u5b89\u5168\u4e2a\u4f53)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u88ab\u8ba4\u8bc1\u7684\u4e2a\u4f53\uff0c\u6709\u4e00\u4e2a\u540d\u5b57(name)\u548c\u53e3\u4ee4(password)"))),(0,l.kt)("li",{parentName:"ul"},"KDC (Key distribution center)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u662f\u4e00\u4e2a\u7f51\u7edc\u670d\u52a1\uff0c\u63d0\u4f9bticket\u548c\u4e34\u65f6\u7684\u4f1a\u8bdd\u5bc6\u94a5\uff0c\u7531\u4e24\u4e2a\u670d\u52a1\u7ec4\u6210"))),(0,l.kt)("li",{parentName:"ul"},"Ticket",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u8bb0\u5f55\uff0c\u5ba2\u6237\u53ef\u4ee5\u7528\u5b83\u6765\u5411\u670d\u52a1\u5668\u8bc1\u660e\u81ea\u5df1\u7684\u8eab\u4efd\uff0c\u5176\u4e2d\u5305\u62ec\u5ba2\u6237\u7684\u6807\u8bc6\u3001\u4f1a\u8bdd\u5bc6\u94a5\u3001\u65f6\u95f4\u6233\uff0c\u4ee5\u53ca\u5176\u4ed6\u4e00\u4e9b\u4fe1\u606f\u3002Ticket \u4e2d\u7684\u5927\u591a\u6570\u4fe1\u606f\u90fd\u88ab\u52a0\u5bc6\uff0c\u5bc6\u94a5\u4e3a\u670d\u52a1\u5668\u7684\u5bc6\u94a5"))),(0,l.kt)("li",{parentName:"ul"},"Authenticator",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u8bb0\u5f55\uff0c\u5176\u4e2d\u5305\u542b\u4e00\u4e9b\u6700\u8fd1\u4ea7\u751f\u7684\u4fe1\u606f\uff0c\u4ea7\u751f\u8fd9\u4e9b\u4fe1\u606f\u9700\u8981\u7528\u5230\u5ba2\u6237\u548c\u670d\u52a1\u5668\u4e4b\u95f4\u5171\u4eab\u7684\u4f1a\u8bdd\u5bc6\u94a5"))),(0,l.kt)("li",{parentName:"ul"},"Credentials",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e00\u4e2aticket\u52a0\u4e0a\u4e00\u4e2a\u79d8\u5bc6\u7684\u4f1a\u8bdd\u5bc6\u94a5")))),(0,l.kt)("h2",{id:"kerberos-principal"},"Kerberos Principal"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Authentication Server (AS) ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 long-term key\u8ba4\u8bc1\u5ba2\u6237"),(0,l.kt)("li",{parentName:"ul"},"AS \u7ed9\u4e88\u5ba2\u6237 ticket granting ticket \u548c short-term key"),(0,l.kt)("li",{parentName:"ul"},"\u8ba4\u8bc1\u670d\u52a1"))),(0,l.kt)("li",{parentName:"ul"},"Ticket Granting Server (TGS) ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 short-term key \u548c ticket granting ticket\u8ba4\u8bc1\u5ba2\u6237"),(0,l.kt)("li",{parentName:"ul"},"TGS \u53d1\u653e tickets \u7ed9\u5ba2\u6237\u4ee5\u8bbf\u95ee\u5176\u4ed6\u7684\u670d\u52a1\u5668"),(0,l.kt)("li",{parentName:"ul"},"\u6388\u6743\u548c\u8bbf\u95ee\u63a7\u5236\u670d\u52a1")))),(0,l.kt)("h2",{id:"\u8bbe\u8ba1\u52a8\u673a"},"\u8bbe\u8ba1\u52a8\u673a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8ba4\u8bc1\u548c\u6388\u6743\u7684\u903b\u8f91\u5206\u79bb",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u867d\u7136AS\u548cTGS\u7269\u7406\u4e0a\u5e38\u5728\u4e00\u8d77"))),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u540c\u7684\u751f\u547d\u5468\u671f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ticket granting tickets (typically 10 hours), session tickets for actual access to services (typically 5 minutes)."),(0,l.kt)("li",{parentName:"ul"},"\u65b9\u4fbf\u5ba2\u6237"),(0,l.kt)("li",{parentName:"ul"},"\u964d\u4f4e\u5bc6\u94a5\u7684\u66b4\u9732\u65f6\u95f4")))),(0,l.kt)("h2",{id:"\u8ba4\u8bc1\u8fc7\u7a0b"},"\u8ba4\u8bc1\u8fc7\u7a0b"),(0,l.kt)("p",null,"\u5b8c\u6574\u7684\u8ba4\u8bc1\u6d41\u7a0b\uff0c\u6709\u5ba2\u6237\u7aef\u4e0eAS, TGS, AP\u76843\u6b21\u4ea4\u4e92\uff0c\u6bcf\u6b21\u4ea4\u4e92\uff0c\u54cd\u5e94\u5305\u90fd\u4f1a\u5305\u542b\u4e24\u6761\u4fe1\u606f\uff0c\u4e00\u6761\u53ef\u4ee5\u7528\u672c\u5730\u5bc6\u94a5\u89e3\u5bc6\uff0c\u53e6\u4e00\u6761\u9700\u8981\u8f6c\u53d1\u3002"))}k.isMDXComponent=!0},6736:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Kerberos_protocol-ccde8b68b2ddd2f5aa5fc9c91aaad50a.svg"}}]);