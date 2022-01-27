"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[6538],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},57633:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"pulsar-2.0",title:"Pulsar 2.0",sidebar_label:"Pulsar 2.0"},s=void 0,p={unversionedId:"pulsar-2.0",id:"pulsar-2.0",title:"Pulsar 2.0",description:"Pulsar 2.0 is a major new release for Pulsar that brings some bold changes to the platform, including simplified topic names, the addition of the Pulsar Functions feature, some terminology changes, and more.",source:"@site/docs/getting-started-pulsar.md",sourceDirName:".",slug:"/pulsar-2.0",permalink:"/docs/next/pulsar-2.0",editUrl:"https://github.com/apache/pulsar-site/edit/master/site2/website-next/docs/getting-started-pulsar.md",tags:[],version:"current",frontMatter:{id:"pulsar-2.0",title:"Pulsar 2.0",sidebar_label:"Pulsar 2.0"}},c=[{value:"New features in Pulsar 2.0",id:"new-features-in-pulsar-20",children:[],level:2},{value:"Major changes",id:"major-changes",children:[{value:"Properties versus tenants",id:"properties-versus-tenants",children:[],level:3},{value:"Topic names",id:"topic-names",children:[{value:"No cluster component",id:"no-cluster-component",children:[],level:4},{value:"Flexible topic naming",id:"flexible-topic-naming",children:[],level:4}],level:3}],level:2}],m={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pulsar 2.0 is a major new release for Pulsar that brings some bold changes to the platform, including ",(0,o.kt)("a",{parentName:"p",href:"#topic-names"},"simplified topic names"),", the addition of the ",(0,o.kt)("a",{parentName:"p",href:"functions-overview"},"Pulsar Functions")," feature, some terminology changes, and more."),(0,o.kt)("h2",{id:"new-features-in-pulsar-20"},"New features in Pulsar 2.0"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"functions-overview"},"Pulsar Functions")),(0,o.kt)("td",{parentName:"tr",align:"left"},"A lightweight compute option for Pulsar")))),(0,o.kt)("h2",{id:"major-changes"},"Major changes"),(0,o.kt)("p",null,"There are a few major changes that you should be aware of, as they may significantly impact your day-to-day usage."),(0,o.kt)("h3",{id:"properties-versus-tenants"},"Properties versus tenants"),(0,o.kt)("p",null,'Previously, Pulsar had a concept of properties. A property is essentially the exact same thing as a tenant, so the "property" terminology has been removed in version 2.0. The ',(0,o.kt)("a",{parentName:"p",href:"/docs/next/pulsar-admin#pulsar-admin"},(0,o.kt)("inlineCode",{parentName:"a"},"pulsar-admin properties"))," command-line interface, for example, has been replaced with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/pulsar-admin#pulsar-admin-tenants"},(0,o.kt)("inlineCode",{parentName:"a"},"pulsar-admin tenants"))," interface. In some cases the properties terminology is still used but is now considered deprecated and will be removed entirely in a future release."),(0,o.kt)("h3",{id:"topic-names"},"Topic names"),(0,o.kt)("p",null,"Prior to version 2.0, ",(0,o.kt)("em",{parentName:"p"},"all")," Pulsar topics had the following form:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},"\n{persistent|non-persistent}://property/cluster/namespace/topic\n\n")),(0,o.kt)("p",null,"Two important changes have been made in Pulsar 2.0:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"There is no longer a ",(0,o.kt)("a",{parentName:"li",href:"#no-cluster"},"cluster component")),(0,o.kt)("li",{parentName:"ul"},"Properties have been ",(0,o.kt)("a",{parentName:"li",href:"#tenants"},"renamed to tenants")),(0,o.kt)("li",{parentName:"ul"},"You can use a ",(0,o.kt)("a",{parentName:"li",href:"#flexible-topic-naming"},"flexible")," naming system to shorten many topic names"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/")," is not allowed in topic name")),(0,o.kt)("h4",{id:"no-cluster-component"},"No cluster component"),(0,o.kt)("p",null,"The cluster component has been removed from topic names. Thus, all topic names now have the following form:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},"\n{persistent|non-persistent}://tenant/namespace/topic\n\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Existing topics that use the legacy name format will continue to work without any change, and there are no plans to change that.")),(0,o.kt)("h4",{id:"flexible-topic-naming"},"Flexible topic naming"),(0,o.kt)("p",null,"All topic names in Pulsar 2.0 internally have the form shown ",(0,o.kt)("a",{parentName:"p",href:"#no-cluster-component"},"above")," but you can now use shorthand names in many cases (for the sake of simplicity). The flexible naming system stems from the fact that there is now a default topic type, tenant, and namespace:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Topic aspect"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"topic type"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"persistent"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"tenant"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"public"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"namespace"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"default"))))),(0,o.kt)("p",null,"The table below shows some example topic name translations that use implicit defaults:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Input topic name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Translated topic name"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"my-topic")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"persistent://public/default/my-topic"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"my-tenant/my-namespace/my-topic")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"persistent://my-tenant/my-namespace/my-topic"))))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/concepts-messaging#non-persistent-topics"},"non-persistent topics")," you'll need to continue to specify the entire topic name, as the default-based rules for persistent topic names don't apply. Thus you cannot use a shorthand name like ",(0,o.kt)("inlineCode",{parentName:"p"},"non-persistent://my-topic")," and would need to use ",(0,o.kt)("inlineCode",{parentName:"p"},"non-persistent://public/default/my-topic")," instead")))}u.isMDXComponent=!0}}]);