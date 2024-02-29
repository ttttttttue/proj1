(self.webpackChunkproject1=self.webpackChunkproject1||[]).push([[117],{"./node_modules/react-i18next/dist/es/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";let i18nInstance;__webpack_require__.d(__webpack_exports__,{$G:()=>useTranslation_useTranslation});var react=__webpack_require__("./node_modules/react/index.js"),void_elements=__webpack_require__("./node_modules/void-elements/index.js");function a(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(a,"")+"</"+t.name+">";case"comment":return e+"<!--"+t.comment+"-->"}}function utils_warn(){if(console&&console.warn){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];"string"==typeof args[0]&&(args[0]=`react-i18next:: ${args[0]}`),console.warn(...args)}}Object.create(null);let alreadyWarned={};function utils_warnOnce(){for(var _len2=arguments.length,args=Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];"string"==typeof args[0]&&alreadyWarned[args[0]]||("string"==typeof args[0]&&(alreadyWarned[args[0]]=new Date),utils_warn(...args))}let loadedClb=(i18n,cb)=>()=>{if(i18n.isInitialized)cb();else{let initialized=()=>{setTimeout(()=>{i18n.off("initialized",initialized)},0),cb()};i18n.on("initialized",initialized)}};function loadNamespaces(i18n,ns,cb){i18n.loadNamespaces(ns,loadedClb(i18n,cb))}function loadLanguages(i18n,lng,ns,cb){"string"==typeof ns&&(ns=[ns]),ns.forEach(n=>{0>i18n.options.ns.indexOf(n)&&i18n.options.ns.push(n)}),i18n.loadLanguages(lng,loadedClb(i18n,cb))}function oldI18nextHasLoadedNamespace(ns,i18n){let options=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},lng=i18n.languages[0],fallbackLng=!!i18n.options&&i18n.options.fallbackLng,lastLng=i18n.languages[i18n.languages.length-1];if("cimode"===lng.toLowerCase())return!0;let loadNotPending=(l,n)=>{let loadState=i18n.services.backendConnector.state[`${l}|${n}`];return -1===loadState||2===loadState};return(!(options.bindI18n&&options.bindI18n.indexOf("languageChanging")>-1)||!i18n.services.backendConnector.backend||!i18n.isLanguageChangingTo||!!loadNotPending(i18n.isLanguageChangingTo,ns))&&!!(i18n.hasResourceBundle(lng,ns)||!i18n.services.backendConnector.backend||i18n.options.resources&&!i18n.options.partialBundledLanguages||loadNotPending(lng,ns)&&(!fallbackLng||loadNotPending(lastLng,ns)))}function hasLoadedNamespace(ns,i18n){let options=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return i18n.languages&&i18n.languages.length?void 0!==i18n.options.ignoreJSONStructure?i18n.hasLoadedNamespace(ns,{lng:options.lng,precheck:(i18nInstance,loadNotPending)=>{if(options.bindI18n&&options.bindI18n.indexOf("languageChanging")>-1&&i18nInstance.services.backendConnector.backend&&i18nInstance.isLanguageChangingTo&&!loadNotPending(i18nInstance.isLanguageChangingTo,ns))return!1}}):oldI18nextHasLoadedNamespace(ns,i18n,options):(utils_warnOnce("i18n.languages were undefined or empty",i18n.languages),!0)}let matchHtmlEntity=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,htmlEntities={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},unescapeHtmlEntity=m=>htmlEntities[m],defaultOptions={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:text=>text.replace(matchHtmlEntity,unescapeHtmlEntity)};function defaults_getDefaults(){return defaultOptions}function getAsArray(data){return Array.isArray(data)?data:[data]}function i18nInstance_getI18n(){return i18nInstance}let context_I18nContext=(0,react.createContext)();class ReportNamespaces{constructor(){this.usedNamespaces={}}addUsedNamespaces(namespaces){namespaces.forEach(ns=>{this.usedNamespaces[ns]||(this.usedNamespaces[ns]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}let usePrevious=(value,ignore)=>{let ref=(0,react.useRef)();return(0,react.useEffect)(()=>{ref.current=ignore?ref.current:value},[value,ignore]),ref.current};function useTranslation_useTranslation(ns){let props=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{i18n:i18nFromProps}=props,{i18n:i18nFromContext,defaultNS:defaultNSFromContext}=(0,react.useContext)(context_I18nContext)||{},i18n=i18nFromProps||i18nFromContext||i18nInstance_getI18n();if(i18n&&!i18n.reportNamespaces&&(i18n.reportNamespaces=new ReportNamespaces),!i18n){utils_warnOnce("You will need to pass in an i18next instance by using initReactI18next");let notReadyT=(k,optsOrDefaultValue)=>"string"==typeof optsOrDefaultValue?optsOrDefaultValue:optsOrDefaultValue&&"object"==typeof optsOrDefaultValue&&"string"==typeof optsOrDefaultValue.defaultValue?optsOrDefaultValue.defaultValue:Array.isArray(k)?k[k.length-1]:k,retNotReady=[notReadyT,{},!1];return retNotReady.t=notReadyT,retNotReady.i18n={},retNotReady.ready=!1,retNotReady}i18n.options.react&&void 0!==i18n.options.react.wait&&utils_warnOnce("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");let i18nOptions={...defaults_getDefaults(),...i18n.options.react,...props},{useSuspense,keyPrefix}=i18nOptions,namespaces=ns||defaultNSFromContext||i18n.options&&i18n.options.defaultNS;namespaces="string"==typeof namespaces?[namespaces]:namespaces||["translation"],i18n.reportNamespaces.addUsedNamespaces&&i18n.reportNamespaces.addUsedNamespaces(namespaces);let ready=(i18n.isInitialized||i18n.initializedStoreOnce)&&namespaces.every(n=>hasLoadedNamespace(n,i18n,i18nOptions));function getT(){return i18n.getFixedT(props.lng||null,"fallback"===i18nOptions.nsMode?namespaces:namespaces[0],keyPrefix)}let[t,setT]=(0,react.useState)(getT),joinedNS=namespaces.join();props.lng&&(joinedNS=`${props.lng}${joinedNS}`);let previousJoinedNS=usePrevious(joinedNS),isMounted=(0,react.useRef)(!0);(0,react.useEffect)(()=>{let{bindI18n,bindI18nStore}=i18nOptions;function boundReset(){isMounted.current&&setT(getT)}return isMounted.current=!0,ready||useSuspense||(props.lng?loadLanguages(i18n,props.lng,namespaces,()=>{isMounted.current&&setT(getT)}):loadNamespaces(i18n,namespaces,()=>{isMounted.current&&setT(getT)})),ready&&previousJoinedNS&&previousJoinedNS!==joinedNS&&isMounted.current&&setT(getT),bindI18n&&i18n&&i18n.on(bindI18n,boundReset),bindI18nStore&&i18n&&i18n.store.on(bindI18nStore,boundReset),()=>{isMounted.current=!1,bindI18n&&i18n&&bindI18n.split(" ").forEach(e=>i18n.off(e,boundReset)),bindI18nStore&&i18n&&bindI18nStore.split(" ").forEach(e=>i18n.store.off(e,boundReset))}},[i18n,joinedNS]);let isInitial=(0,react.useRef)(!0);(0,react.useEffect)(()=>{isMounted.current&&!isInitial.current&&setT(getT),isInitial.current=!1},[i18n,keyPrefix]);let ret=[t,i18n,ready];if(ret.t=t,ret.i18n=i18n,ret.ready=ready,ready||!ready&&!useSuspense)return ret;throw new Promise(resolve=>{props.lng?loadLanguages(i18n,props.lng,namespaces,()=>resolve()):loadNamespaces(i18n,namespaces,()=>resolve())})}},"./node_modules/void-elements/index.js":module=>{module.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}}}]);