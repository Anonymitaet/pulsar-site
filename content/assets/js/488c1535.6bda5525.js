"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[791],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),c=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},p=function(t){var e=c(t.components);return n.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,u=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=c(r),d=a,k=m["".concat(u,".").concat(d)]||m[d]||s[d]||i;return r?n.createElement(k,l(l({ref:e},p),{},{components:r})):n.createElement(k,l({ref:e},p))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9234:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),l=["components"],o={id:"io-twitter-source",title:"Twitter Firehose source connector",sidebar_label:"Twitter Firehose source connector"},u=void 0,c={unversionedId:"io-twitter-source",id:"io-twitter-source",title:"Twitter Firehose source connector",description:"The Twitter Firehose source connector receives tweets from Twitter Firehose and",source:"@site/docs/io-twitter-source.md",sourceDirName:".",slug:"/io-twitter-source",permalink:"/docs/next/io-twitter-source",editUrl:"https://github.com/apache/pulsar-site/edit/master/site2/website-next/docs/io-twitter-source.md",tags:[],version:"current",frontMatter:{id:"io-twitter-source",title:"Twitter Firehose source connector",sidebar_label:"Twitter Firehose source connector"}},p=[{value:"Configuration",id:"configuration",children:[{value:"Property",id:"property",children:[],level:3}],level:2}],s={toc:p};function m(t){var e=t.components,r=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Twitter Firehose source connector receives tweets from Twitter Firehose and\nwrites the tweets to Pulsar topics."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"The configuration of the Twitter Firehose source connector has the following properties."),(0,i.kt)("h3",{id:"property"},"Property"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"consumerKey")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,i.kt)("td",{parentName:"tr",align:null},"The twitter OAuth consumer key.",(0,i.kt)("br",null),(0,i.kt)("br",null),"For more information, see ",(0,i.kt)("a",{parentName:"td",href:"https://developer.twitter.com/en/docs/basics/authentication/guides/access-tokens"},"Access tokens"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"consumerSecret")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,i.kt)("td",{parentName:"tr",align:null},"The twitter OAuth consumer secret.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"token")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,i.kt)("td",{parentName:"tr",align:null},"The twitter OAuth token.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"tokenSecret")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,i.kt)("td",{parentName:"tr",align:null},"The twitter OAuth secret.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"guestimateTweetTime")),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Most firehose events have null createdAt time.",(0,i.kt)("br",null),(0,i.kt)("br",null),"If ",(0,i.kt)("inlineCode",{parentName:"td"},"guestimateTweetTime")," set to true, the connector estimates the createdTime of each firehose event to be current time.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"clientName")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"openconnector-twitter-source"),(0,i.kt)("td",{parentName:"tr",align:null},"The twitter firehose client name.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"clientHosts")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Constants.STREAM_HOST"),(0,i.kt)("td",{parentName:"tr",align:null},"The twitter firehose hosts to which client connects.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"clientBufferSize")),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"50000"),(0,i.kt)("td",{parentName:"tr",align:null},"The buffer size for buffering tweets fetched from twitter firehose.")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For more information about OAuth credentials, see ",(0,i.kt)("a",{parentName:"p",href:"https://developer.twitter.com/en.html"},"Twitter developers portal"),".")))}m.isMDXComponent=!0}}]);