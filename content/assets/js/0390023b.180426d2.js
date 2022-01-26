"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[41947],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),y=c(n),d=a,m=y["".concat(l,".").concat(d)]||y[d]||u[d]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(87462),a=n(67294),i=n(72389),o=n(79443);var s=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(63616),c=n(86010),p="tabItem_vU9c";function u(e){var t,n,i,o=e.lazy,u=e.block,y=e.defaultValue,d=e.values,m=e.groupId,h=e.className,k=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.lx)(f,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===y?y:null!=(t=null!=y?y:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=k[0])?void 0:i.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=s(),C=b.tabGroupChoices,N=b.setTabGroupChoices,w=(0,a.useState)(g),K=w[0],P=w[1],E=[],R=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var T=C[m];null!=T&&T!==K&&f.some((function(e){return e.value===T}))&&P(T)}var _=function(e){var t=e.currentTarget,n=E.indexOf(t),r=f[n].value;r!==K&&(R(t),P(r),null!=m&&N(m,r))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=E.indexOf(e.currentTarget)+1;n=E[r]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;n=E[a]||E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":u},h)},f.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:K===t?0:-1,"aria-selected":K===t,key:t,ref:function(e){return E.push(e)},onKeyDown:O,onFocus:_,onClick:_},i,{className:(0,c.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":K===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(k.filter((function(e){return e.props.value===K}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==K})}))))}function y(e){var t=(0,i.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},52521:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return y},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(26396),s=n(58215),l=["components"],c={id:"security-encryption",title:"Pulsar Encryption",sidebar_label:"End-to-End Encryption",original_id:"security-encryption"},p=void 0,u={unversionedId:"security-encryption",id:"version-2.2.0/security-encryption",title:"Pulsar Encryption",description:"Applications can use Pulsar encryption to encrypt messages at the producer side and decrypt messages at the consumer side. You can use the public and private key pair that the application configures to perform encryption. Only the consumers with a valid key can decrypt the encrypted messages.",source:"@site/versioned_docs/version-2.2.0/security-encryption.md",sourceDirName:".",slug:"/security-encryption",permalink:"/docs/2.2.0/security-encryption",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.2.0/security-encryption.md",tags:[],version:"2.2.0",frontMatter:{id:"security-encryption",title:"Pulsar Encryption",sidebar_label:"End-to-End Encryption",original_id:"security-encryption"},sidebar:"version-2.2.0/docsSidebar",previous:{title:"Authorization and ACLs",permalink:"/docs/2.2.0/security-authorization"},next:{title:"Extending",permalink:"/docs/2.2.0/security-extending"}},y=[{value:"Asymmetric and symmetric encryption",id:"asymmetric-and-symmetric-encryption",children:[],level:2},{value:"Producer",id:"producer",children:[],level:2},{value:"Consumer",id:"consumer",children:[],level:2},{value:"Get started",id:"get-started",children:[],level:2},{value:"Key rotation",id:"key-rotation",children:[],level:2},{value:"Enable encryption at the producer application",id:"enable-encryption-at-the-producer-application",children:[],level:2},{value:"Decrypt encrypted messages at the consumer application",id:"decrypt-encrypted-messages-at-the-consumer-application",children:[],level:2},{value:"Handle failures",id:"handle-failures",children:[],level:2}],d={toc:y};function m(e){var t=e.components,c=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Applications can use Pulsar encryption to encrypt messages at the producer side and decrypt messages at the consumer side. You can use the public and private key pair that the application configures to perform encryption. Only the consumers with a valid key can decrypt the encrypted messages."),(0,i.kt)("h2",{id:"asymmetric-and-symmetric-encryption"},"Asymmetric and symmetric encryption"),(0,i.kt)("p",null,"Pulsar uses dynamically generated symmetric AES key to encrypt messages(data). You can use the application provided ECDSA/RSA key pair to encrypt the AES key(data key), so you do not have to share the secret with everyone."),(0,i.kt)("p",null,"Key is a public and private key pair used for encryption or decryption. The producer key is the public key of the key pair, and the consumer key is the private key of the key pair."),(0,i.kt)("p",null,"The application configures the producer with the public key. You can use this key to encrypt the AES data key. The encrypted data key is sent as part of message header. Only entities with the private key (in this case the consumer) are able to decrypt the data key which is used to decrypt the message."),(0,i.kt)("p",null,"You can encrypt a message with more than one key. Any one of the keys used for encrypting the message is sufficient to decrypt the message."),(0,i.kt)("p",null,"Pulsar does not store the encryption key anywhere in the Pulsar service. If you lose or delete the private key, your message is irretrievably lost, and is unrecoverable."),(0,i.kt)("h2",{id:"producer"},"Producer"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt text",src:n(30213).Z,title:"Pulsar Encryption Producer"})),(0,i.kt)("h2",{id:"consumer"},"Consumer"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt text",src:n(58532).Z,title:"Pulsar Encryption Consumer"})),(0,i.kt)("h2",{id:"get-started"},"Get started"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Enter the commands below to create your ECDSA or RSA public and private key pair.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\nopenssl ecparam -name secp521r1 -genkey -param_enc explicit -out test_ecdsa_privkey.pem\nopenssl ec -in test_ecdsa_privkey.pem -pubout -outform pem -out test_ecdsa_pubkey.pem\n\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the public and private key to the key management and configure your producers to retrieve public keys and consumers clients to retrieve private keys.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Implement the CryptoKeyReader interface, specifically CryptoKeyReader.getPublicKey() for producer and CryptoKeyReader.getPrivateKey() for consumer, which Pulsar client invokes to load the key.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Add encryption key name to producer builder: PulsarClient.newProducer().addEncryptionKey("myapp.key").')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Configure a ",(0,i.kt)("inlineCode",{parentName:"p"},"CryptoKeyReader")," to a producer, consumer or reader. "))),(0,i.kt)(o.Z,{defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"C++",value:"C++"},{label:"Python",value:"Python"},{label:"Node.JS",value:"Node.JS"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nPulsarClient pulsarClient = PulsarClient.builder().serviceUrl("pulsar://localhost:6650").build();\nString topic = "persistent://my-tenant/my-ns/my-topic";\n// RawFileKeyReader is just an example implementation that\'s not provided by Pulsar\nCryptoKeyReader keyReader = new RawFileKeyReader("test_ecdsa_pubkey.pem", "test_ecdsa_privkey.pem");\n\nProducer<byte[]> producer = pulsarClient.newProducer()\n        .topic(topic)\n        .cryptoKeyReader(keyReader)\n        .addEncryptionKey(\u201cmyappkey\u201d)\n        .create();\n\nConsumer<byte[]> consumer = pulsarClient.newConsumer()\n        .topic(topic)\n        .subscriptionName("my-subscriber-name")\n        .cryptoKeyReader(keyReader)\n        .subscribe();\n\nReader<byte[]> reader = pulsarClient.newReader()\n        .topic(topic)\n        .startMessageId(MessageId.earliest)\n        .cryptoKeyReader(keyReader)\n        .create();\n\n'))),(0,i.kt)(s.Z,{value:"C++",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c++"},'\nClient client("pulsar://localhost:6650");\nstd::string topic = "persistent://my-tenant/my-ns/my-topic";\n// DefaultCryptoKeyReader is a built-in implementation that reads public key and private key from files\nauto keyReader = std::make_shared<DefaultCryptoKeyReader>("test_ecdsa_pubkey.pem", "test_ecdsa_privkey.pem");\n\nProducer producer;\nProducerConfiguration producerConf;\nproducerConf.setCryptoKeyReader(keyReader);\nproducerConf.addEncryptionKey("myappkey");\nclient.createProducer(topic, producerConf, producer);\n\nConsumer consumer;\nConsumerConfiguration consumerConf;\nconsumerConf.setCryptoKeyReader(keyReader);\nclient.subscribe(topic, "my-subscriber-name", consumerConf, consumer);\n\nReader reader;\nReaderConfiguration readerConf;\nreaderConf.setCryptoKeyReader(keyReader);\nclient.createReader(topic, MessageId::earliest(), readerConf, reader);\n\n'))),(0,i.kt)(s.Z,{value:"Python",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"\nfrom pulsar import Client, CryptoKeyReader\n\nclient = Client('pulsar://localhost:6650')\ntopic = 'persistent://my-tenant/my-ns/my-topic'\n# CryptoKeyReader is a built-in implementation that reads public key and private key from files\nkey_reader = CryptoKeyReader('test_ecdsa_pubkey.pem', 'test_ecdsa_privkey.pem')\n\nproducer = client.create_producer(\n    topic=topic,\n    encryption_key='myappkey',\n    crypto_key_reader=key_reader\n)\n\nconsumer = client.subscribe(\n    topic=topic,\n    subscription_name='my-subscriber-name',\n    crypto_key_reader=key_reader\n)\n\nreader = client.create_reader(\n    topic=topic,\n    start_message_id=MessageId.earliest,\n    crypto_key_reader=key_reader\n)\n\nclient.close()\n\n"))),(0,i.kt)(s.Z,{value:"Node.JS",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nodejs"},"\nconst Pulsar = require('pulsar-client');\n\n(async () => {\n// Create a client\nconst client = new Pulsar.Client({\n    serviceUrl: 'pulsar://localhost:6650',\n    operationTimeoutSeconds: 30,\n});\n\n// Create a producer\nconst producer = await client.createProducer({\n    topic: 'persistent://public/default/my-topic',\n    sendTimeoutMs: 30000,\n    batchingEnabled: true,\n    publicKeyPath: \"public-key.client-rsa.pem\",\n    encryptionKey: \"encryption-key\"\n});\n\n// Create a consumer\nconst consumer = await client.subscribe({\n    topic: 'persistent://public/default/my-topic',\n    subscription: 'sub1',\n    subscriptionType: 'Shared',\n    ackTimeoutMs: 10000,\n    privateKeyPath: \"private-key.client-rsa.pem\"\n});\n\n// Send messages\nfor (let i = 0; i < 10; i += 1) {\n    const msg = `my-message-${i}`;\n    producer.send({\n    data: Buffer.from(msg),\n    });\n    console.log(`Sent message: ${msg}`);\n}\nawait producer.flush();\n\n// Receive messages\nfor (let i = 0; i < 10; i += 1) {\n    const msg = await consumer.receive();\n    console.log(msg.getData().toString());\n    consumer.acknowledge(msg);\n}\n\nawait consumer.close();\nawait producer.close();\nawait client.close();\n})();\n\n")))),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Below is an example of a ",(0,i.kt)("strong",{parentName:"li"},"customized")," ",(0,i.kt)("inlineCode",{parentName:"li"},"CryptoKeyReader")," implementation.")),(0,i.kt)(o.Z,{defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"C++",value:"C++"},{label:"Python",value:"Python"},{label:"Node.JS",value:"Node.JS"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nclass RawFileKeyReader implements CryptoKeyReader {\n\n    String publicKeyFile = "";\n    String privateKeyFile = "";\n\n    RawFileKeyReader(String pubKeyFile, String privKeyFile) {\n        publicKeyFile = pubKeyFile;\n        privateKeyFile = privKeyFile;\n    }\n\n    @Override\n    public EncryptionKeyInfo getPublicKey(String keyName, Map<String, String> keyMeta) {\n        EncryptionKeyInfo keyInfo = new EncryptionKeyInfo();\n        try {\n            keyInfo.setKey(Files.readAllBytes(Paths.get(publicKeyFile)));\n        } catch (IOException e) {\n            System.out.println("ERROR: Failed to read public key from file " + publicKeyFile);\n            e.printStackTrace();\n        }\n        return keyInfo;\n    }\n\n    @Override\n    public EncryptionKeyInfo getPrivateKey(String keyName, Map<String, String> keyMeta) {\n        EncryptionKeyInfo keyInfo = new EncryptionKeyInfo();\n        try {\n            keyInfo.setKey(Files.readAllBytes(Paths.get(privateKeyFile)));\n        } catch (IOException e) {\n            System.out.println("ERROR: Failed to read private key from file " + privateKeyFile);\n            e.printStackTrace();\n        }\n        return keyInfo;\n    }\n}\n\n'))),(0,i.kt)(s.Z,{value:"C++",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c++"},"\nclass CustomCryptoKeyReader : public CryptoKeyReader {\n    public:\n    Result getPublicKey(const std::string& keyName, std::map<std::string, std::string>& metadata,\n                        EncryptionKeyInfo& encKeyInfo) const override {\n        // TODO:\n        return ResultOk;\n    }\n\n    Result getPrivateKey(const std::string& keyName, std::map<std::string, std::string>& metadata,\n                        EncryptionKeyInfo& encKeyInfo) const override {\n        // TODO:\n        return ResultOk;\n    }\n};\n\nauto keyReader = std::make_shared<CustomCryptoKeyReader>(/* ... */);\n// TODO: create producer, consumer or reader based on keyReader here\n\n")),(0,i.kt)("p",null,"Besides, you can use the ",(0,i.kt)("strong",{parentName:"p"},"default")," implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"CryptoKeyReader")," by specifying the paths of ",(0,i.kt)("inlineCode",{parentName:"p"},"private key")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"public key"),".")),(0,i.kt)(s.Z,{value:"Python",mdxType:"TabItem"},(0,i.kt)("p",null,"Currently, ",(0,i.kt)("strong",{parentName:"p"},"customized")," ",(0,i.kt)("inlineCode",{parentName:"p"},"CryptoKeyReader")," implementation is not supported in Python. However, you can use the ",(0,i.kt)("strong",{parentName:"p"},"default")," implementation by specifying the path of ",(0,i.kt)("inlineCode",{parentName:"p"},"private key")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"public key"),".")),(0,i.kt)(s.Z,{value:"Node.JS",mdxType:"TabItem"},(0,i.kt)("p",null,"Currently, ",(0,i.kt)("strong",{parentName:"p"},"customized")," ",(0,i.kt)("inlineCode",{parentName:"p"},"CryptoKeyReader")," implementation is not supported in Node.JS. However, you can use the ",(0,i.kt)("strong",{parentName:"p"},"default")," implementation by specifying the path of ",(0,i.kt)("inlineCode",{parentName:"p"},"private key")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"public key"),"."))),(0,i.kt)("h2",{id:"key-rotation"},"Key rotation"),(0,i.kt)("p",null,"Pulsar generates a new AES data key every 4 hours or after publishing a certain number of messages. A producer fetches the asymmetric public key every 4 hours by calling CryptoKeyReader.getPublicKey() to retrieve the latest version."),(0,i.kt)("h2",{id:"enable-encryption-at-the-producer-application"},"Enable encryption at the producer application"),(0,i.kt)("p",null,"If you produce messages that are consumed across application boundaries, you need to ensure that consumers in other applications have access to one of the private keys that can decrypt the messages. You can do this in two ways:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The consumer application provides you access to their public key, which you add to your producer keys."),(0,i.kt)("li",{parentName:"ol"},"You grant access to one of the private keys from the pairs that producer uses. ")),(0,i.kt)("p",null,"When producers want to encrypt the messages with multiple keys, producers add all such keys to the config. Consumer can decrypt the message as long as the consumer has access to at least one of the keys."),(0,i.kt)("p",null,"If you need to encrypt the messages using 2 keys (myapp.messagekey1 and myapp.messagekey2), refer to the following example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nPulsarClient.newProducer().addEncryptionKey("myapp.messagekey1").addEncryptionKey("myapp.messagekey2");\n\n')),(0,i.kt)("h2",{id:"decrypt-encrypted-messages-at-the-consumer-application"},"Decrypt encrypted messages at the consumer application"),(0,i.kt)("p",null,"Consumers require access one of the private keys to decrypt messages that the producer produces. If you want to receive encrypted messages, create a public or private key and give your public key to the producer application to encrypt messages using your public key."),(0,i.kt)("h2",{id:"handle-failures"},"Handle failures"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Producer/ Consumer loses access to the key",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Producer action fails indicating the cause of the failure. Application has the option to proceed with sending unencrypted message in such cases. Call PulsarClient.newProducer().cryptoFailureAction(ProducerCryptoFailureAction) to control the producer behavior. The default behavior is to fail the request."),(0,i.kt)("li",{parentName:"ul"},"If consumption fails due to decryption failure or missing keys in consumer, application has the option to consume the encrypted message or discard it. Call PulsarClient.newConsumer().cryptoFailureAction(ConsumerCryptoFailureAction) to control the consumer behavior. The default behavior is to fail the request. Application is never able to decrypt the messages if the private key is permanently lost."))),(0,i.kt)("li",{parentName:"ul"},"Batch messaging",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If decryption fails and the message contains batch messages, client is not able to retrieve individual messages in the batch, hence message consumption fails even if cryptoFailureAction() is set to ConsumerCryptoFailureAction.CONSUME."))),(0,i.kt)("li",{parentName:"ul"},"If decryption fails, the message consumption stops and application notices backlog growth in addition to decryption failure messages in the client log. If application does not have access to the private key to decrypt the message, the only option is to skip or discard backlogged messages.")))}m.isMDXComponent=!0},58532:function(e,t,n){t.Z=n.p+"assets/images/pulsar-encryption-consumer-2831a122b5b79a1619d00af823b2506c.jpg"},30213:function(e,t,n){t.Z=n.p+"assets/images/pulsar-encryption-producer-1d7f4562a5c743e0442a0ec472ca8ef6.jpg"}}]);