"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[24437],{3905:function(n,e,a){a.d(e,{Zo:function(){return u},kt:function(){return d}});var t=a(67294);function r(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function i(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function o(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function s(n,e){if(null==n)return{};var a,t,r=function(n,e){if(null==n)return{};var a,t,r={},i=Object.keys(n);for(t=0;t<i.length;t++)a=i[t],e.indexOf(a)>=0||(r[a]=n[a]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)a=i[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(r[a]=n[a])}return r}var c=t.createContext({}),l=function(n){var e=t.useContext(c),a=e;return n&&(a="function"==typeof n?n(e):o(o({},e),n)),a},u=function(n){var e=l(n.components);return t.createElement(c.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},m=t.forwardRef((function(n,e){var a=n.components,r=n.mdxType,i=n.originalType,c=n.parentName,u=s(n,["components","mdxType","originalType","parentName"]),m=l(a),d=r,g=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return a?t.createElement(g,o(o({ref:e},u),{},{components:a})):t.createElement(g,o({ref:e},u))}));function d(n,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=n,s.mdxType="string"==typeof n?n:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},20014:function(n,e,a){a.r(e),a.d(e,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var t=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],s={id:"io-managing",title:"Managing Connectors",sidebar_label:"Managing Connectors",original_id:"io-managing"},c=void 0,l={unversionedId:"io-managing",id:"version-2.2.0/io-managing",title:"Managing Connectors",description:"This section describes how to manage Pulsar IO connectors in a Pulsar cluster. You will learn how to:",source:"@site/versioned_docs/version-2.2.0/io-managing.md",sourceDirName:".",slug:"/io-managing",permalink:"/docs/2.2.0/io-managing",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.2.0/io-managing.md",tags:[],version:"2.2.0",frontMatter:{id:"io-managing",title:"Managing Connectors",sidebar_label:"Managing Connectors",original_id:"io-managing"},sidebar:"version-2.2.0/docsSidebar",previous:{title:"Getting started",permalink:"/docs/2.2.0/io-quickstart"},next:{title:"Built-in connector",permalink:"/docs/2.2.0/io-connectors"}},u=[{value:"Using Builtin Connectors",id:"using-builtin-connectors",children:[],level:2},{value:"Configuring Connectors",id:"configuring-connectors",children:[],level:2},{value:"Running Connectors",id:"running-connectors",children:[{value:"Running sources",id:"running-sources",children:[],level:3},{value:"Running Sinks",id:"running-sinks",children:[{value:"Note",id:"note",children:[],level:4}],level:3}],level:2},{value:"Monitoring Connectors",id:"monitoring-connectors",children:[{value:"Retrieve Connector Metadata",id:"retrieve-connector-metadata",children:[],level:3},{value:"Retrieve Connector Running Status",id:"retrieve-connector-running-status",children:[],level:3}],level:2}],p={toc:u};function m(n){var e=n.components,a=(0,r.Z)(n,o);return(0,i.kt)("wrapper",(0,t.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section describes how to manage Pulsar IO connectors in a Pulsar cluster. You will learn how to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Deploy builtin connectors"),(0,i.kt)("li",{parentName:"ul"},"Monitor and update running connectors with Pulsar Admin CLI"),(0,i.kt)("li",{parentName:"ul"},"Deploy customized connectors"),(0,i.kt)("li",{parentName:"ul"},"Upgrade a connector")),(0,i.kt)("h2",{id:"using-builtin-connectors"},"Using Builtin Connectors"),(0,i.kt)("p",null,"Pulsar bundles several ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.2.0/io-overview#working-with-connectors"},"builtin connectors")," that should be used for moving data in and out\nof commonly used systems such as databases, messaging systems. Getting set up to use these builtin connectors is simple. You can follow\nthe ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.2.0/#installing-builtin-connectors"},"instructions")," on installing builtin connectors. After setup, all\nthe builtin connectors will be automatically discovered by Pulsar brokers (or function-workers), so no additional installation steps are\nrequired."),(0,i.kt)("h2",{id:"configuring-connectors"},"Configuring Connectors"),(0,i.kt)("p",null,"Configuring Pulsar IO connectors is straightforward. What you need to do is to provide a yaml configuration file when your ",(0,i.kt)("a",{parentName:"p",href:"#running-connectors"},"run connectors"),".\nThe yaml configuration file basically tells Pulsar where to locate the sources and sinks and how to connect those sources and sinks with Pulsar topics."),(0,i.kt)("p",null,"Below is an example yaml configuration file for Cassandra Sink:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'\ntenant: public\nnamespace: default\nname: cassandra-test-sink\n...\n# cassandra specific config\nconfigs:\n    roots: "localhost:9042"\n    keyspace: "pulsar_test_keyspace"\n    columnFamily: "pulsar_test_table"\n    keyname: "key"\n    columnName: "col"\n\n')),(0,i.kt)("p",null,"The example yaml basically tells Pulsar which Cassandra cluster to connect, what is the ",(0,i.kt)("inlineCode",{parentName:"p"},"keyspace")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"columnFamily")," to be used in Cassandra for collecting data,\nand how to map a Pulsar message into Cassandra table key and columns."),(0,i.kt)("p",null,"For details, consult the documentation for ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.2.0/io-overview#working-with-connectors"},"individual connectors"),"."),(0,i.kt)("h2",{id:"running-connectors"},"Running Connectors"),(0,i.kt)("p",null,"Pulsar connectors can be managed using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.2.0/pulsar-admin#source"},(0,i.kt)("inlineCode",{parentName:"a"},"source"))," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.2.0/pulsar-admin#sink"},(0,i.kt)("inlineCode",{parentName:"a"},"sink"))," commands of the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin"},(0,i.kt)("inlineCode",{parentName:"a"},"pulsar-admin"))," CLI tool."),(0,i.kt)("h3",{id:"running-sources"},"Running sources"),(0,i.kt)("p",null,"You can submit a source to be run in an existing Pulsar cluster using a command of this form:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ ./bin/pulsar-admin source create --classname  <classname> --archive <jar-location> --tenant <tenant> --namespace <namespace> --name <source-name> --destination-topic-name <output-topic>\n\n")),(0,i.kt)("p",null,"Here\u2019s an example command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\nbin/pulsar-admin source create --classname org.apache.pulsar.io.twitter.TwitterFireHose --archive ~/application.jar --tenant test --namespace ns1 --name twitter-source --destination-topic-name twitter_data\n\n")),(0,i.kt)("p",null,"Instead of submitting a source to run on an existing Pulsar cluster, you alternatively can run a source as a process on your local machine:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\nbin/pulsar-admin source localrun --classname  org.apache.pulsar.io.twitter.TwitterFireHose --archive ~/application.jar --tenant test --namespace ns1 --name twitter-source --destination-topic-name twitter_data\n\n")),(0,i.kt)("p",null,"If you are submitting a built-in source, you don't need to specify ",(0,i.kt)("inlineCode",{parentName:"p"},"--classname")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"--archive"),".\nYou can simply specify the source type ",(0,i.kt)("inlineCode",{parentName:"p"},"--source-type"),". The command to submit a built-in source is\nin following form:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n./bin/pulsar-admin source create \\\n    --tenant <tenant> \\\n    --namespace <namespace> \\\n    --name <source-name> \\\n    --destination-topic-name <input-topics> \\\n    --source-type <source-type>\n\n")),(0,i.kt)("p",null,"Here's an example to submit a Kafka source:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n./bin/pulsar-admin source create \\\n    --tenant test-tenant \\\n    --namespace test-namespace \\\n    --name test-kafka-source \\\n    --destination-topic-name pulsar_sink_topic \\\n    --source-type kafka\n\n")),(0,i.kt)("h3",{id:"running-sinks"},"Running Sinks"),(0,i.kt)("p",null,"You can submit a sink to be run in an existing Pulsar cluster using a command of this form:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n./bin/pulsar-admin sink create --classname  <classname> --archive <jar-location> --tenant test --namespace <namespace> --name <sink-name> --inputs <input-topics>\n\n")),(0,i.kt)("p",null,"Here\u2019s an example command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n./bin/pulsar-admin sink create --classname  org.apache.pulsar.io.cassandra --archive ~/application.jar --tenant test --namespace ns1 --name cassandra-sink --inputs test_topic\n\n")),(0,i.kt)("p",null,"Instead of submitting a sink to run on an existing Pulsar cluster, you alternatively can run a sink as a process on your local machine:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n./bin/pulsar-admin sink localrun --classname  org.apache.pulsar.io.cassandra --archive ~/application.jar --tenant test --namespace ns1 --name cassandra-sink --inputs test_topic\n\n")),(0,i.kt)("p",null,"If you are submitting a built-in sink, you don't need to specify ",(0,i.kt)("inlineCode",{parentName:"p"},"--classname")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"--archive"),".\nYou can simply specify the sink type ",(0,i.kt)("inlineCode",{parentName:"p"},"--sink-type"),". The command to submit a built-in sink is\nin following form:"),(0,i.kt)("h4",{id:"note"},"Note"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"sink-type")," parameter of the currently built-in connectors is determined by the setting of the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," parameter specified in the pulsar-io.yaml file.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n./bin/pulsar-admin sink create \\\n    --tenant <tenant> \\\n    --namespace <namespace> \\\n    --name <sink-name> \\\n    --inputs <input-topics> \\\n    --sink-type <sink-type>\n\n")),(0,i.kt)("p",null,"Here's an example to submit a Cassandra sink:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n./bin/pulsar-admin sink create \\\n    --tenant test-tenant \\\n    --namespace test-namespace \\\n    --name test-cassandra-sink \\\n    --inputs pulsar_input_topic \\\n    --sink-type cassandra\n\n")),(0,i.kt)("h2",{id:"monitoring-connectors"},"Monitoring Connectors"),(0,i.kt)("p",null,"Since Pulsar IO connectors are running as ",(0,i.kt)("a",{parentName:"p",href:"functions-overview"},"Pulsar Functions"),", so you can use ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.2.0/pulsar-admin#source"},(0,i.kt)("inlineCode",{parentName:"a"},"functions"))," commands\navailable in the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin"},(0,i.kt)("inlineCode",{parentName:"a"},"pulsar-admin"))," CLI tool."),(0,i.kt)("h3",{id:"retrieve-connector-metadata"},"Retrieve Connector Metadata"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\nbin/pulsar-admin functions get \\\n    --tenant <tenant> \\\n    --namespace <namespace> \\\n    --name <connector-name>\n\n")),(0,i.kt)("h3",{id:"retrieve-connector-running-status"},"Retrieve Connector Running Status"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\nbin/pulsar-admin functions getstatus \\\n    --tenant <tenant> \\\n    --namespace <namespace> \\\n    --name <connector-name>\n\n")))}m.isMDXComponent=!0}}]);