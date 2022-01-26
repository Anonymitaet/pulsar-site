"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[66090],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),h=n,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return r?a.createElement(m,s(s({ref:t},u),{},{components:r})):a.createElement(m,s({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5216:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),s=["components"],i={id:"reference-terminology",title:"Pulsar Terminology",sidebar_label:"Terminology",original_id:"reference-terminology"},l=void 0,c={unversionedId:"reference-terminology",id:"version-2.2.0/reference-terminology",title:"Pulsar Terminology",description:"Here is a glossary of terms related to Apache Pulsar:",source:"@site/versioned_docs/version-2.2.0/reference-terminology.md",sourceDirName:".",slug:"/reference-terminology",permalink:"/docs/2.2.0/reference-terminology",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.2.0/reference-terminology.md",tags:[],version:"2.2.0",frontMatter:{id:"reference-terminology",title:"Pulsar Terminology",sidebar_label:"Terminology",original_id:"reference-terminology"},sidebar:"version-2.2.0/docsSidebar",previous:{title:"Message queue",permalink:"/docs/2.2.0/cookbooks-message-queue"},next:{title:"Pulsar CLI tools",permalink:"/docs/2.2.0/reference-cli-tools"}},u=[{value:"Concepts",id:"concepts",children:[{value:"Pulsar",id:"pulsar",children:[],level:4},{value:"Message",id:"message",children:[],level:4},{value:"Topic",id:"topic",children:[],level:4},{value:"Partitioned Topic",id:"partitioned-topic",children:[],level:4},{value:"Namespace",id:"namespace",children:[],level:4},{value:"Namespace Bundle",id:"namespace-bundle",children:[],level:4},{value:"Tenant",id:"tenant",children:[],level:4},{value:"Subscription",id:"subscription",children:[],level:4},{value:"Pub-Sub",id:"pub-sub",children:[],level:4},{value:"Producer",id:"producer",children:[],level:4},{value:"Consumer",id:"consumer",children:[],level:4},{value:"Reader",id:"reader",children:[],level:4},{value:"Cursor",id:"cursor",children:[],level:4},{value:"Acknowledgment (ack)",id:"acknowledgment-ack",children:[],level:4},{value:"Negative Acknowledgment (nack)",id:"negative-acknowledgment-nack",children:[],level:4},{value:"Unacknowledged",id:"unacknowledged",children:[],level:4},{value:"Retention Policy",id:"retention-policy",children:[],level:4},{value:"Multi-Tenancy",id:"multi-tenancy",children:[],level:4}],level:3},{value:"Architecture",id:"architecture",children:[{value:"Standalone",id:"standalone",children:[],level:4},{value:"Cluster",id:"cluster",children:[],level:4},{value:"Instance",id:"instance",children:[],level:4},{value:"Geo-Replication",id:"geo-replication",children:[],level:4},{value:"Configuration Store",id:"configuration-store",children:[],level:4},{value:"Topic Lookup",id:"topic-lookup",children:[],level:4},{value:"Service Discovery",id:"service-discovery",children:[],level:4},{value:"Broker",id:"broker",children:[],level:4},{value:"Dispatcher",id:"dispatcher",children:[],level:4}],level:3},{value:"Storage",id:"storage",children:[{value:"BookKeeper",id:"bookkeeper",children:[],level:4},{value:"Bookie",id:"bookie",children:[],level:4},{value:"Ledger",id:"ledger",children:[],level:4}],level:3},{value:"Functions",id:"functions",children:[],level:3}],p={toc:u};function d(e){var t=e.components,r=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Here is a glossary of terms related to Apache Pulsar:"),(0,o.kt)("h3",{id:"concepts"},"Concepts"),(0,o.kt)("h4",{id:"pulsar"},"Pulsar"),(0,o.kt)("p",null,"Pulsar is a distributed messaging system originally created by Yahoo but now under the stewardship of the Apache Software Foundation."),(0,o.kt)("h4",{id:"message"},"Message"),(0,o.kt)("p",null,"Messages are the basic unit of Pulsar. They're what ",(0,o.kt)("a",{parentName:"p",href:"#producer"},"producers")," publish to ",(0,o.kt)("a",{parentName:"p",href:"#topic"},"topics"),"\nand what ",(0,o.kt)("a",{parentName:"p",href:"#consumer"},"consumers")," then consume from topics."),(0,o.kt)("h4",{id:"topic"},"Topic"),(0,o.kt)("p",null,"A named channel used to pass messages published by ",(0,o.kt)("a",{parentName:"p",href:"#producer"},"producers")," to ",(0,o.kt)("a",{parentName:"p",href:"#consumer"},"consumers")," who\nprocess those ",(0,o.kt)("a",{parentName:"p",href:"#message"},"messages"),"."),(0,o.kt)("h4",{id:"partitioned-topic"},"Partitioned Topic"),(0,o.kt)("p",null,"A topic that is served by multiple Pulsar ",(0,o.kt)("a",{parentName:"p",href:"#broker"},"brokers"),", which enables higher throughput."),(0,o.kt)("h4",{id:"namespace"},"Namespace"),(0,o.kt)("p",null,"A grouping mechanism for related ",(0,o.kt)("a",{parentName:"p",href:"#topic"},"topics"),"."),(0,o.kt)("h4",{id:"namespace-bundle"},"Namespace Bundle"),(0,o.kt)("p",null,"A virtual group of ",(0,o.kt)("a",{parentName:"p",href:"#topic"},"topics")," that belong to the same ",(0,o.kt)("a",{parentName:"p",href:"#namespace"},"namespace"),". A namespace bundle\nis defined as a range between two 32-bit hashes, such as 0x00000000 and 0xffffffff."),(0,o.kt)("h4",{id:"tenant"},"Tenant"),(0,o.kt)("p",null,"An administrative unit for allocating capacity and enforcing an authentication/authorization scheme."),(0,o.kt)("h4",{id:"subscription"},"Subscription"),(0,o.kt)("p",null,"A lease on a ",(0,o.kt)("a",{parentName:"p",href:"#topic"},"topic")," established by a group of ",(0,o.kt)("a",{parentName:"p",href:"#consumer"},"consumers"),". Pulsar has four subscription\nmodes (exclusive, shared, failover and key_shared)."),(0,o.kt)("h4",{id:"pub-sub"},"Pub-Sub"),(0,o.kt)("p",null,"A messaging pattern in which ",(0,o.kt)("a",{parentName:"p",href:"#producer"},"producer")," processes publish messages on ",(0,o.kt)("a",{parentName:"p",href:"#topic"},"topics")," that\nare then consumed (processed) by ",(0,o.kt)("a",{parentName:"p",href:"#consumer"},"consumer")," processes."),(0,o.kt)("h4",{id:"producer"},"Producer"),(0,o.kt)("p",null,"A process that publishes ",(0,o.kt)("a",{parentName:"p",href:"#message"},"messages")," to a Pulsar ",(0,o.kt)("a",{parentName:"p",href:"#topic"},"topic"),"."),(0,o.kt)("h4",{id:"consumer"},"Consumer"),(0,o.kt)("p",null,"A process that establishes a subscription to a Pulsar ",(0,o.kt)("a",{parentName:"p",href:"#topic"},"topic")," and processes messages published\nto that topic by ",(0,o.kt)("a",{parentName:"p",href:"#producer"},"producers"),"."),(0,o.kt)("h4",{id:"reader"},"Reader"),(0,o.kt)("p",null,"Pulsar readers are message processors much like Pulsar ",(0,o.kt)("a",{parentName:"p",href:"#consumer"},"consumers")," but with two crucial differences:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"you can specify ",(0,o.kt)("em",{parentName:"li"},"where")," on a topic readers begin processing messages (consumers always begin with the latest\navailable unacked message);"),(0,o.kt)("li",{parentName:"ul"},"readers don't retain data or acknowledge messages.")),(0,o.kt)("h4",{id:"cursor"},"Cursor"),(0,o.kt)("p",null,"The subscription position for a ",(0,o.kt)("a",{parentName:"p",href:"#consumer"},"consumer"),"."),(0,o.kt)("h4",{id:"acknowledgment-ack"},"Acknowledgment (ack)"),(0,o.kt)("p",null,"A message sent to a Pulsar broker by a ",(0,o.kt)("a",{parentName:"p",href:"#consumer"},"consumer")," that a message has been successfully processed.\nAn acknowledgement (ack) is Pulsar's way of knowing that the message can be deleted from the system;\nif no acknowledgement, then the message will be retained until it's processed."),(0,o.kt)("h4",{id:"negative-acknowledgment-nack"},"Negative Acknowledgment (nack)"),(0,o.kt)("p",null,'When an application fails to process a particular message, it can send a "negative ack" to Pulsar\nto signal that the message should be replayed at a later timer. (By default, failed messages are\nreplayed after a 1 minute delay). Be aware that negative acknowledgment on ordered subscription types,\nsuch as Exclusive, Failover and Key_Shared, can cause failed messages to arrive consumers out of the original order.'),(0,o.kt)("h4",{id:"unacknowledged"},"Unacknowledged"),(0,o.kt)("p",null,"A message that has been delivered to a consumer for processing but not yet confirmed as processed by the consumer."),(0,o.kt)("h4",{id:"retention-policy"},"Retention Policy"),(0,o.kt)("p",null,"Size and time limits that you can set on a ",(0,o.kt)("a",{parentName:"p",href:"#namespace"},"namespace")," to configure retention of ",(0,o.kt)("a",{parentName:"p",href:"#message"},"messages"),"\nthat have already been ",(0,o.kt)("a",{parentName:"p",href:"#acknowledgement-ack"},"acknowledged"),"."),(0,o.kt)("h4",{id:"multi-tenancy"},"Multi-Tenancy"),(0,o.kt)("p",null,"The ability to isolate ",(0,o.kt)("a",{parentName:"p",href:"#namespace"},"namespaces"),", specify quotas, and configure authentication and authorization\non a per-",(0,o.kt)("a",{parentName:"p",href:"#tenant"},"tenant")," basis."),(0,o.kt)("h3",{id:"architecture"},"Architecture"),(0,o.kt)("h4",{id:"standalone"},"Standalone"),(0,o.kt)("p",null,"A lightweight Pulsar broker in which all components run in a single Java Virtual Machine (JVM) process. Standalone\nclusters can be run on a single machine and are useful for development purposes."),(0,o.kt)("h4",{id:"cluster"},"Cluster"),(0,o.kt)("p",null,"A set of Pulsar ",(0,o.kt)("a",{parentName:"p",href:"#broker"},"brokers")," and ",(0,o.kt)("a",{parentName:"p",href:"#bookkeeper"},"BookKeeper")," servers (aka ",(0,o.kt)("a",{parentName:"p",href:"#bookie"},"bookies"),").\nClusters can reside in different geographical regions and replicate messages to one another\nin a process called ",(0,o.kt)("a",{parentName:"p",href:"#geo-replication"},"geo-replication"),"."),(0,o.kt)("h4",{id:"instance"},"Instance"),(0,o.kt)("p",null,"A group of Pulsar ",(0,o.kt)("a",{parentName:"p",href:"#cluster"},"clusters")," that act together as a single unit."),(0,o.kt)("h4",{id:"geo-replication"},"Geo-Replication"),(0,o.kt)("p",null,"Replication of messages across Pulsar ",(0,o.kt)("a",{parentName:"p",href:"#cluster"},"clusters"),", potentially in different datacenters\nor geographical regions."),(0,o.kt)("h4",{id:"configuration-store"},"Configuration Store"),(0,o.kt)("p",null,"Pulsar's configuration store (previously known as configuration store) is a ZooKeeper quorum that\nis used for configuration-specific tasks. A multi-cluster Pulsar installation requires just one\nconfiguration store across all ",(0,o.kt)("a",{parentName:"p",href:"#cluster"},"clusters"),"."),(0,o.kt)("h4",{id:"topic-lookup"},"Topic Lookup"),(0,o.kt)("p",null,"A service provided by Pulsar ",(0,o.kt)("a",{parentName:"p",href:"#broker"},"brokers")," that enables connecting clients to automatically determine\nwhich Pulsar ",(0,o.kt)("a",{parentName:"p",href:"#cluster"},"cluster")," is responsible for a ",(0,o.kt)("a",{parentName:"p",href:"#topic"},"topic")," (and thus where message traffic for\nthe topic needs to be routed)."),(0,o.kt)("h4",{id:"service-discovery"},"Service Discovery"),(0,o.kt)("p",null,"A mechanism provided by Pulsar that enables connecting clients to use just a single URL to interact\nwith all the ",(0,o.kt)("a",{parentName:"p",href:"#broker"},"brokers")," in a ",(0,o.kt)("a",{parentName:"p",href:"#cluster"},"cluster"),"."),(0,o.kt)("h4",{id:"broker"},"Broker"),(0,o.kt)("p",null,"A stateless component of Pulsar ",(0,o.kt)("a",{parentName:"p",href:"#cluster"},"clusters")," that runs two other components: an HTTP server\nexposing a REST interface for administration and topic lookup and a ",(0,o.kt)("a",{parentName:"p",href:"#dispatcher"},"dispatcher")," that\nhandles all message transfers. Pulsar clusters typically consist of multiple brokers."),(0,o.kt)("h4",{id:"dispatcher"},"Dispatcher"),(0,o.kt)("p",null,"An asynchronous TCP server used for all data transfers in-and-out a Pulsar ",(0,o.kt)("a",{parentName:"p",href:"#broker"},"broker"),". The Pulsar\ndispatcher uses a custom binary protocol for all communications."),(0,o.kt)("h3",{id:"storage"},"Storage"),(0,o.kt)("h4",{id:"bookkeeper"},"BookKeeper"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://bookkeeper.apache.org/"},"Apache BookKeeper")," is a scalable, low-latency persistent log storage\nservice that Pulsar uses to store data."),(0,o.kt)("h4",{id:"bookie"},"Bookie"),(0,o.kt)("p",null,"Bookie is the name of an individual BookKeeper server. It is effectively the storage server of Pulsar."),(0,o.kt)("h4",{id:"ledger"},"Ledger"),(0,o.kt)("p",null,"An append-only data structure in ",(0,o.kt)("a",{parentName:"p",href:"#bookkeeper"},"BookKeeper")," that is used to persistently store messages in Pulsar ",(0,o.kt)("a",{parentName:"p",href:"#topic"},"topics"),"."),(0,o.kt)("h3",{id:"functions"},"Functions"),(0,o.kt)("p",null,"Pulsar Functions are lightweight functions that can consume messages from Pulsar topics, apply custom processing logic, and, if desired, publish results to topics."))}d.isMDXComponent=!0}}]);