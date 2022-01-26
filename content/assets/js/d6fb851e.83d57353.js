"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[22708],{3905:function(e,r,a){a.d(r,{Zo:function(){return c},kt:function(){return m}});var t=a(67294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function i(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?i(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function s(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=t.createContext({}),l=function(e){var r=t.useContext(p),a=r;return e&&(a="function"==typeof e?e(r):o(o({},r),e)),a},c=function(e){var r=l(e.components);return t.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(a),m=n,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return a?t.createElement(f,o(o({ref:r},c),{},{components:a})):t.createElement(f,o({ref:r},c))}));function m(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},44290:function(e,r,a){a.r(r),a.d(r,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var t=a(87462),n=a(63366),i=(a(67294),a(3905)),o=["components"],s={id:"adaptors-spark",title:"Pulsar adaptor for Apache Spark",sidebar_label:"Apache Spark",original_id:"adaptors-spark"},p=void 0,l={unversionedId:"adaptors-spark",id:"version-2.2.0/adaptors-spark",title:"Pulsar adaptor for Apache Spark",description:"The Spark Streaming receiver for Pulsar is a custom receiver that enables Apache Spark Streaming to receive raw data from Pulsar.",source:"@site/versioned_docs/version-2.2.0/adaptors-spark.md",sourceDirName:".",slug:"/adaptors-spark",permalink:"/docs/2.2.0/adaptors-spark",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.2.0/adaptors-spark.md",tags:[],version:"2.2.0",frontMatter:{id:"adaptors-spark",title:"Pulsar adaptor for Apache Spark",sidebar_label:"Apache Spark",original_id:"adaptors-spark"},sidebar:"version-2.2.0/docsSidebar",previous:{title:"Kafka client wrapper",permalink:"/docs/2.2.0/adaptors-kafka"},next:{title:"Apache Storm",permalink:"/docs/2.2.0/adaptors-storm"}},c=[{value:"Prerequisites",id:"prerequisites",children:[{value:"Maven",id:"maven",children:[],level:3},{value:"Gradle",id:"gradle",children:[],level:3}],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],u={toc:c};function d(e){var r=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},u,a,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Spark Streaming receiver for Pulsar is a custom receiver that enables Apache ",(0,i.kt)("a",{parentName:"p",href:"https://spark.apache.org/streaming/"},"Spark Streaming")," to receive raw data from Pulsar."),(0,i.kt)("p",null,"An application can receive data in ",(0,i.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/programming-guide.html#resilient-distributed-datasets-rdds"},"Resilient Distributed Dataset")," (RDD) format via the Spark Streaming receiver and can process it in a variety of ways."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"To use the receiver, include a dependency for the ",(0,i.kt)("inlineCode",{parentName:"p"},"pulsar-spark")," library in your Java configuration."),(0,i.kt)("h3",{id:"maven"},"Maven"),(0,i.kt)("p",null,"If you're using Maven, add this to your ",(0,i.kt)("inlineCode",{parentName:"p"},"pom.xml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"\n\x3c!-- in your <properties> block --\x3e\n<pulsar.version>@pulsar:version@</pulsar.version>\n\n\x3c!-- in your <dependencies> block --\x3e\n<dependency>\n  <groupId>org.apache.pulsar</groupId>\n  <artifactId>pulsar-spark</artifactId>\n  <version>${pulsar.version}</version>\n</dependency>\n\n")),(0,i.kt)("h3",{id:"gradle"},"Gradle"),(0,i.kt)("p",null,"If you're using Gradle, add this to your ",(0,i.kt)("inlineCode",{parentName:"p"},"build.gradle")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"\ndef pulsarVersion = \"@pulsar:version@\"\n\ndependencies {\n    compile group: 'org.apache.pulsar', name: 'pulsar-spark', version: pulsarVersion\n}\n\n")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Pass an instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"SparkStreamingPulsarReceiver")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"receiverStream")," method in ",(0,i.kt)("inlineCode",{parentName:"p"},"JavaStreamingContext"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nSparkConf conf = new SparkConf().setMaster("local[*]").setAppName("pulsar-spark");\nJavaStreamingContext jssc = new JavaStreamingContext(conf, Durations.seconds(5));\n\nClientConfiguration clientConf = new ClientConfiguration();\nConsumerConfiguration consConf = new ConsumerConfiguration();\nString url = "pulsar://localhost:6650/";\nString topic = "persistent://public/default/topic1";\nString subs = "sub1";\n\nJavaReceiverInputDStream<byte[]> msgs = jssc\n        .receiverStream(new SparkStreamingPulsarReceiver(clientConf, consConf, url, topic, subs));\n\n')),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"You can find a complete example ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master/tests/pulsar-spark-test/src/test/java/org/apache/pulsar/spark/example/SparkStreamingPulsarReceiverExample.java"},"here"),'.\nIn this example, the number of messages which contain the string "Pulsar" in received messages is counted.'))}d.isMDXComponent=!0}}]);