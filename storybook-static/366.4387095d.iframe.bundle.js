"use strict";(self.webpackChunkproject1=self.webpackChunkproject1||[]).push([[366],{"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/shared/ui/Button/Button.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,`.UE4qyBHn83gLbBbzXYLZ {
  cursor: pointer;
}

.Iyh0U3lCq2_FO3hqZMXk {
  background: none;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  color: (var(--primary-color));
}

.Y4dmG2DAPsswq_1uBTOm {
  padding: 10px;
  border: 10px solid var(--primary-color);
  color: var(--primary-color);
}

svg {
  width: 50px;
  height: 50px;
  fill: #002a18;
}
`,"",{version:3,sources:["webpack://./src/shared/ui/Button/Button.module.css"],names:[],mappings:"AAAA;EACE,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,UAAU;EACV,SAAS;EACT,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,uCAAuC;EACvC,2BAA2B;AAC7B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;AACf",sourcesContent:[".Button {\n  cursor: pointer;\n}\n\n.clear {\n  background: none;\n  border: none;\n  outline: none;\n  padding: 0;\n  margin: 0;\n  color: (var(--primary-color));\n}\n\n.outline {\n  padding: 10px;\n  border: 10px solid var(--primary-color);\n  color: var(--primary-color);\n}\n\nsvg {\n  width: 50px;\n  height: 50px;\n  fill: #002a18;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Button:"UE4qyBHn83gLbBbzXYLZ",clear:"Iyh0U3lCq2_FO3hqZMXk",outline:"Y4dmG2DAPsswq_1uBTOm"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/shared/lib/classNames/classNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _to_consumable_array(arr){return _array_without_holes(arr)||_iterable_to_array(arr)||_unsupported_iterable_to_array(arr)||_non_iterable_spread()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function classNames(cls){var mods=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},additional=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return[cls].concat(_to_consumable_array(additional.filter(Boolean)),_to_consumable_array(Object.entries(mods).filter(function(param){var _param=_sliced_to_array(param,2);return _param[0],!!_param[1]}).map(function(param){var _param=_sliced_to_array(param,2),className=_param[0];return _param[1],className}))).join(" ")}__webpack_require__.d(__webpack_exports__,{A:()=>classNames})},"./src/shared/ui/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button,U:()=>ThemeButton});var ThemeButton,react=__webpack_require__("./node_modules/react/index.js"),classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Button_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/shared/ui/Button/Button.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(Button_module.Z,options);let Button_Button_module=Button_module.Z&&Button_module.Z.locals?Button_module.Z.locals:void 0;function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}!function(ThemeButton){ThemeButton.CLEAR="clear",ThemeButton.OUTLINE="outline"}(ThemeButton||(ThemeButton={}));var Button=function(props){var className=props.className,children=props.children,theme=props.theme,otherProps=_object_without_properties(props,["className","children","theme"]);return react.createElement("button",_object_spread({type:"button",className:(0,classNames.A)(Button_Button_module.Button,_define_property({},Button_Button_module[theme],!0),[className])},otherProps),children)};try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"clear"'},{value:'"outline"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/shared/ui/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/ui/themeSwitcher/ui/ThemeSwitcher.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>ThemeSwitcher});var _path,_path2,_path3,_path4,_path5,_path6,_path7,_path8,_path9,_path10,_path11,_path12,_path13,_path14,_path15,_path16,_path17,night_path,night_path2,react=__webpack_require__("./node_modules/react/index.js"),ThemeProvider=__webpack_require__("./src/app/providers/ThemeProvider/index.tsx");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}let day=function SvgDay(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",viewBox:"0 0 429.018 429.018"},props),react.createElement("path",{fill:"#F57547",d:"M415.398 211.178c5.07 1.96 7.88 6.09 7.34 11.17-.7 6.52-2.18 13.07-4.3 19.27-2.49 7.27-5.61 14.41-9.23 21.19-3.77 7.07-7.13 8.39-14.56 5.98-16.89-5.47-29.12-16.9-38.13-31.81-2.91-4.81-3.93-10.58-.04-15.62 4.21-5.44 10.51-7.61 16.76-6.07 8.05 1.98 15.7 5.64 24.62 8.98 1.37-2.42 2.82-5.84 5.02-8.69 3.09-4 7.14-6.48 12.52-4.4m1.97 13.27c.9-3.17-.21-6.62-6.03-7.98-4.15 5.34-8.7 11.18-14.11 18.14-1.98-1.6-3.99-3.79-6.46-5.1-5.43-2.88-10.9-6.16-16.77-7.6-3.24-.8-8.86.71-10.58 3.17-1.66 2.36-.98 8.21.94 10.91 7.3 10.21 16.47 18.74 28.06 24.03 7.06 3.21 11.72 2.37 14.76-4.51 4.39-9.92 7.2-20.57 10.19-31.06",style:{fill:"#a3a3a3"}}),_path||(_path=react.createElement("path",{fill:"#FBB03B",d:"M411.338 216.468c5.82 1.36 6.93 4.81 6.03 7.98-2.99 10.49-5.8 21.14-10.19 31.06-3.04 6.88-7.7 7.72-14.76 4.51-11.59-5.29-20.76-13.82-28.06-24.03-1.92-2.7-2.6-8.55-.94-10.91 1.72-2.46 7.34-3.97 10.58-3.17 5.87 1.44 11.34 4.72 16.77 7.6 2.47 1.31 4.48 3.5 6.46 5.1 5.41-6.96 9.96-12.8 14.11-18.14"})),react.createElement("path",{fill:"#F57547",d:"M413.358 92.008c3.09 9.97.92 19.84-1.01 29.49-4.43 22.18-12.85 26.97-34.43 19.93-8.01-2.62-15.97-5.75-23.44-9.62-14.57-7.53-15.77-20.12-3.2-30.81 9.67-8.22 20.36-11.78 32.91-4.75 1.97-3.05 3.6-5.8 5.44-8.4 3.2-4.54 7.42-7.28 13.18-6.01 5.46 1.21 8.87 4.76 10.55 10.17m-5.26 11.84c.37-2.09.32-4.59-.5-6.49-1.35-3.13-2.83-7.35-5.44-8.54-4.06-1.86-6.24 2.56-8.12 5.63-1.89 3.09-3.43 6.39-5.64 10.56-2.56-1.18-4.21-1.9-5.82-2.69-10.87-5.36-20.76-3.4-28.55 5.66-5.57 6.49-4.74 13.66 2.92 17.16 9.3 4.25 19.07 7.47 28.69 10.97 1.66.6 3.61.5 5.43.55 8.26.25 9.87-.42 11.99-8.11 2.23-8.09 3.57-16.43 5.04-24.7",style:{fill:"#a3a3a3"}}),_path2||(_path2=react.createElement("path",{fill:"#FBB03B",d:"M407.598 97.358c.82 1.9.87 4.4.5 6.49-1.47 8.27-2.81 16.61-5.04 24.7-2.12 7.69-3.73 8.36-11.99 8.11-1.82-.05-3.77.05-5.43-.55-9.62-3.5-19.39-6.72-28.69-10.97-7.66-3.5-8.49-10.67-2.92-17.16 7.79-9.06 17.68-11.02 28.55-5.66 1.61.79 3.26 1.51 5.82 2.69 2.21-4.17 3.75-7.47 5.64-10.56 1.88-3.07 4.06-7.49 8.12-5.63 2.61 1.19 4.09 5.41 5.44 8.54"})),react.createElement("path",{fill:"#F57547",d:"M401.348 12.988c1.09 5.66.75 11.68.4 17.51-.31 5.1-1.19 10.22-2.41 15.19-1.76 7.2-5.52 10.01-12.88 8.67-7.16-1.31-14.34-3.26-21.07-6.02-9.08-3.72-12.01-10.17-9.71-18.42 2.25-8.08 9.89-13.29 18.44-12.42 2.12.21 4.2.87 6.71 1.41 2.93-3.74 4.96-6.86 7.51-9.47 5.2-5.31 11.59-3.8 13.01 3.55m-9.55 34.8c4.31-11.48 4.74-22.62 3.4-33.88-.78-.2-1.56-.41-2.33-.62l-9.98 14.39c-3.99-1.68-6.85-3.5-9.94-4.06-5.07-.91-8.41 2.15-10.22 6.56-1.6 3.92-2.02 8.37 2.16 10.85 8.16 4.83 16.77 8.59 26.91 6.76M393.848 345.118c4.16 10.09 4.21 20.75 2.64 31.37-.86 5.81-5.6 7.58-10.57 7.68-12.05.24-23.19-3.47-33.14-9.99-6.63-4.35-6.67-13.04.23-17.44 4.83-3.07 11.1-3.88 18.33-6.21.75-1.32 2.14-4.8 4.37-7.6 5.88-7.39 14.61-6.38 18.14 2.19m-5.7 32.08c4.09-11.67 1.79-21.77-2.86-34.64-3.05 4.58-4.75 6.78-6.05 9.19-1.53 2.81-2.71 5.81-3.95 8.52-15.72-2.26-16.21-2.06-19.5 7.98 10.01 5.85 20.24 10.7 32.36 8.95",style:{fill:"#a3a3a3"}}),_path3||(_path3=react.createElement("path",{fill:"#FBB03B",d:"M395.198 13.908c1.34 11.26.91 22.4-3.4 33.88-10.14 1.83-18.75-1.93-26.91-6.76-4.18-2.48-3.76-6.93-2.16-10.85 1.81-4.41 5.15-7.47 10.22-6.56 3.09.56 5.95 2.38 9.94 4.06l9.98-14.39c.77.21 1.55.42 2.33.62M385.288 342.558c4.65 12.87 6.95 22.97 2.86 34.64-12.12 1.75-22.35-3.1-32.36-8.95 3.29-10.04 3.78-10.24 19.5-7.98 1.24-2.71 2.42-5.71 3.95-8.52 1.3-2.41 3-4.61 6.05-9.19"})),react.createElement("path",{fill:"#F57547",d:"M326.908 396.358c.82 9.2.77 18.39-5.61 26.19-4.38 5.35-9.75 7.82-16.51 5.73-6.64-2.06-13.32-4.17-19.67-6.94-4.13-1.8-7.58-5.15-6.26-10.39 1.28-5.11 4.99-8.54 10.23-8.5 5.67.04 11.34 1.36 17.34 2.17 2.34-3.77 4.52-8.53 7.88-12.22 1.81-1.99 5.85-3.29 8.45-2.77 1.82.36 3.93 4.26 4.15 6.73m-8.2 17.02c1.86-4.65 2.47-9.41.89-16.34l-8.55 13.77c-4-1.17-7.41-2.43-10.93-3.1-3.19-.61-6.63-1.17-9.73-.58-2.08.41-4.91 2.64-5.28 4.48-.32 1.59 1.92 4.68 3.77 5.55 4.27 1.99 8.94 3.23 13.54 4.43 8.91 2.33 12.87.3 16.29-8.21",style:{fill:"#a3a3a3"}}),_path4||(_path4=react.createElement("path",{fill:"#FBB03B",d:"M319.598 397.038c1.58 6.93.97 11.69-.89 16.34-3.42 8.51-7.38 10.54-16.29 8.21-4.6-1.2-9.27-2.44-13.54-4.43-1.85-.87-4.09-3.96-3.77-5.55.37-1.84 3.2-4.07 5.28-4.48 3.1-.59 6.54-.03 9.73.58 3.52.67 6.93 1.93 10.93 3.1z"})),react.createElement("path",{fill:"#F57547",d:"M306.388 50.458c2.28 14.96.34 29.35-9.02 41.94-3.57 4.8-8.6 7.03-14.46 6.38-17.33-1.92-32.75-8.2-44.8-21.23-11.23-12.14-8.45-24.83 7.35-29.68 6.59-2.02 14.33-.63 21.52-.19 2.7.16 5.29 2.03 8.38 3.31 1.33-2.12 2.41-3.97 3.62-5.73 3.58-5.21 8.18-8.64 14.85-7.26 6.78 1.4 11.55 5.85 12.56 12.46m-14.88 33.83c5.31-9.28 7.17-19.3 5.97-29.73-.35-3.02-3.06-5.77-5.52-10.12-5.92 6.63-10.48 11.73-15.97 17.86-2.78-2.05-5.3-4.1-8-5.88-5.57-3.68-11.75-4.18-17.97-2.38-10.83 3.14-13.02 10.63-5.39 18.92 9.67 10.49 22.3 15.13 36.08 17.14 5 .73 8.33-1.5 10.8-5.81",style:{fill:"#a3a3a3"}}),_path5||(_path5=react.createElement("path",{d:"M304.808 287.338c.45 7.9.25 16.65-2.69 23.76-9.17 22.14-19.51 43.94-37.29 60.81-6.6 6.26-13.86 12.19-21.73 16.68-21 11.97-43.37 20.08-67.92 20.99-8.44.31-16.86 1.27-25.68 1.97-43.86-1.25-81.66-17.46-111.51-49.87-19.81-21.52-29.62-48.29-31.4-77.45-2.71-44.42 9.27-84.74 36.9-119.76 26.18-33.19 60.81-51.89 102.96-55.47 12.16-1.04 24.37 1.65 34.51 9.36 4.57 3.47 10.28 7.25 8.31 14.29-1.77 6.31-8.11 6.84-13.39 8.19-4.24 1.09-8.9 1.06-12.84 2.76-45.1 19.4-85.91 66.47-74.12 132.79 2.07 11.64 4.5 23.1 10.53 33.52 16.13 27.89 46.47 43.18 78.33 38.85 25.03-3.4 48.77-10.68 70.5-24.1 6.32-3.91 10.76-8.72 13.4-15.48 2.67-6.86 5.19-13.8 8.23-20.5 3.16-7 8.27-12.2 16.01-14.13 9.96-2.48 18.32 2.56 18.89 12.79m-13.56 22.15c3.34-8.46 5.12-17.38 1-26.34-6.8-.42-10.18 3.38-12.75 8.01-2.49 4.49-4.49 9.26-6.82 13.85-6.27 12.42-11.72 25.06-24.79 32.8-25.76 15.26-53.71 22.42-83.16 22.25-34.49-.21-69.97-21.74-80.96-63.22-1.69-6.39-3.05-12.92-3.92-19.47-4.68-35.26.25-68.34 22.97-97.14 19.09-24.2 42.09-42.15 73.88-45.97 1.33-.16 2.57-1.02 5.7-2.33-3.29-3.25-5.39-6.08-8.15-7.93-6.9-4.61-14.71-6.61-23-6.58-21.14.08-40.55 6.38-58.84 16.56-12.67 7.05-23.4 16.5-33.63 26.7-11.61 11.57-17.52 26.74-26.41 40.02-.89 1.34-1.23 3.05-2.72 6.91 11.24-8.27 20.44-15.04 29.63-21.81.47.63.93 1.26 1.4 1.89-9.5 7.86-18.73 16.07-28.58 23.46-7.79 5.84-10.09 13.38-10.32 23.47 10.2-8.07 19.48-15.41 28.75-22.75l1.63 1.93c-2.8 2.68-5.54 5.42-8.4 8.01-6.55 5.94-13.27 11.69-19.73 17.72-6.38 5.95-7.2 9.42-5.21 19.3 7.07-5.92 14.06-11.77 21.04-17.62-4.23 6.38-8.71 12.36-14.39 16.81-10.88 8.54-9.88 19.05-7.24 32.49 10.9-12.07 20.33-23.04 32.89-30.57-1.91 3.52-4.33 6.55-6.95 9.39-6 6.49-11.79 13.22-18.25 19.22-7.31 6.77-8.38 13.85-2.89 22.9 10.28-9.33 18.18-20.85 30.69-27.28-9.79 10.89-19.58 21.79-30.28 33.69 2.97 4.61 5.85 9.08 8.73 13.56l.61.55c.13 6.27 3.64 10.64 7.98 15.27 6.15-6.87 11.88-13.25 17.61-19.63.5.41 1.01.83 1.51 1.25-5.63 7.39-11.26 14.79-17.18 22.57 3.07 3.39 5.45 6.02 7.84 8.67 7.25-7.24 13.48-13.47 19.71-19.69.46.47.91.95 1.37 1.42-5.68 7.01-11.36 14.02-17.5 21.59 12.59 10.08 23.86 19.78 39.27 22.46.02-.03.05-.05.07-.08 9.77 7.66 21.33 10.35 33.13 12.32 7.6-7.87 14.49-15.91 24.18-20.81l-18.35 20.58c2.87 1 4.23 1.89 5.58 1.88 22.08-.13 44.08-.75 65.6-6.74 44.12-12.29 71.34-42.24 87.65-83.54"})),_path6||(_path6=react.createElement("path",{fill:"#FBB03B",d:"M297.478 54.558c1.2 10.43-.66 20.45-5.97 29.73-2.47 4.31-5.8 6.54-10.8 5.81-13.78-2.01-26.41-6.65-36.08-17.14-7.63-8.29-5.44-15.78 5.39-18.92 6.22-1.8 12.4-1.3 17.97 2.38 2.7 1.78 5.22 3.83 8 5.88 5.49-6.13 10.05-11.23 15.97-17.86 2.46 4.35 5.17 7.1 5.52 10.12M292.248 283.148c4.12 8.96 2.34 17.88-1 26.34-16.31 41.3-43.53 71.25-87.65 83.54-21.52 5.99-43.52 6.61-65.6 6.74-1.35.01-2.71-.88-5.58-1.88l18.35-20.58c-9.69 4.9-16.58 12.94-24.18 20.81-11.8-1.97-23.36-4.66-33.13-12.32.03-.03.06-.06.08-.09 1.29.23 3.02.86 3.53.34 5.61-5.87 10.99-11.96 16.44-17.98-.7-.65-1.41-1.29-2.12-1.93-5.95 6.52-11.9 13.05-17.85 19.57-.09-.01-.17-.03-.25-.04h-.01l-.03-.03.08.13c.02.04.06.11.06.11-15.41-2.68-26.68-12.38-39.27-22.46 6.14-7.57 11.82-14.58 17.5-21.59-.46-.47-.91-.95-1.37-1.42-6.23 6.22-12.46 12.45-19.71 19.69-2.39-2.65-4.77-5.28-7.84-8.67 5.92-7.78 11.55-15.18 17.18-22.57-.5-.42-1.01-.84-1.51-1.25-5.73 6.38-11.46 12.76-17.61 19.63-4.34-4.63-7.85-9-7.98-15.27 8.39-9.33 16.77-18.67 25.16-28-10.23 7.73-21.02 14.92-25.77 27.45-2.88-4.48-5.76-8.95-8.73-13.56 10.7-11.9 20.49-22.8 30.28-33.69-12.51 6.43-20.41 17.95-30.69 27.28-5.49-9.05-4.42-16.13 2.89-22.9 6.46-6 12.25-12.73 18.25-19.22 2.62-2.84 5.04-5.87 6.95-9.39-12.56 7.53-21.99 18.5-32.89 30.57-2.64-13.44-3.64-23.95 7.24-32.49 5.68-4.45 10.16-10.43 14.39-16.81-6.98 5.85-13.97 11.7-21.04 17.62-1.99-9.88-1.17-13.35 5.21-19.3 6.46-6.03 13.18-11.78 19.73-17.72 2.86-2.59 5.6-5.33 8.4-8.01l-1.63-1.93c-9.27 7.34-18.55 14.68-28.75 22.75.23-10.09 2.53-17.63 10.32-23.47 9.85-7.39 19.08-15.6 28.58-23.46-.47-.63-.93-1.26-1.4-1.89-9.19 6.77-18.39 13.54-29.63 21.81 1.49-3.86 1.83-5.57 2.72-6.91 8.89-13.28 14.8-28.45 26.41-40.02 10.23-10.2 20.96-19.65 33.63-26.7 18.29-10.18 37.7-16.48 58.84-16.56 8.29-.03 16.1 1.97 23 6.58 2.76 1.85 4.86 4.68 8.15 7.93-3.13 1.31-4.37 2.17-5.7 2.33-31.79 3.82-54.79 21.77-73.88 45.97-22.72 28.8-27.65 61.88-22.97 97.14.87 6.55 2.23 13.08 3.92 19.47 10.99 41.48 46.47 63.01 80.96 63.22 29.45.17 57.4-6.99 83.16-22.25 13.07-7.74 18.52-20.38 24.79-32.8 2.33-4.59 4.33-9.36 6.82-13.85 2.57-4.63 5.95-8.43 12.75-8.01m-95.08 95.19c-.54-.56-1.08-1.13-1.62-1.69-5.21 4.79-10.42 9.58-15.63 14.38.57.59 1.14 1.19 1.71 1.79 5.18-4.83 10.36-9.65 15.54-14.48m-44.21 18.43c6.69-7.1 13.38-14.19 20.06-21.28-9.09 4.78-16.73 10.95-20.06 21.28m-36.67-4.34c4.99-5.87 9.97-11.73 14.95-17.6-.6-.52-1.21-1.04-1.81-1.55-5.21 5.64-10.41 11.29-15.62 16.94zm-31.02-13.54c7.26-8.08 14.52-16.15 21.78-24.23-.62-.56-1.23-1.11-1.84-1.67-7.47 7.84-16.62 14.12-21.92 23.99.66.63 1.32 1.27 1.98 1.91m-15.57-12.25c3.47-3.99 6.94-7.98 10.41-11.98-.56-.49-1.12-.99-1.68-1.48l-10.68 11.43c.65.68 1.3 1.36 1.95 2.03"})),react.createElement("path",{fill:"#F57547",d:"M259.458 181.018c4.48 11.57 3.39 23.78 1.46 35.85-.72 4.52-3.31 7.55-7.65 8.33-16.04 2.86-32.09 3.67-47.81-1.79-7.5-2.6-14.82-6.11-15.61-15.13-.78-8.97 5.76-14.11 12.6-17.83 5.64-3.07 12.09-4.66 19.25-7.29 1.89-4.42 3.41-9.42 6.01-13.78 5.28-8.85 13.71-10.46 21.24-3.47 4.42 4.1 8.34 9.52 10.51 15.11m-8.16 34.6c.1-16.31 5.63-33.34-10.97-45.51-7.2 4.51-8.18 11.14-8.99 17.66-.54 4.3-2.75 8.45-6.62 6.1-9.74-5.91-16.14.18-22.51 5.14-8.14 6.33-6.83 12.57 3.16 15.7 14.9 4.66 30.04 5.39 45.93.91",style:{fill:"#a3a3a3"}}),_path7||(_path7=react.createElement("path",{fill:"#FBB03B",d:"M240.328 170.108c16.6 12.17 11.07 29.2 10.97 45.51-15.89 4.48-31.03 3.75-45.93-.91-9.99-3.13-11.3-9.37-3.16-15.7 6.37-4.96 12.77-11.05 22.51-5.14 3.87 2.35 6.08-1.8 6.62-6.1.81-6.52 1.79-13.15 8.99-17.66"})),_path8||(_path8=react.createElement("path",{d:"M195.548 376.648c.54.56 1.08 1.13 1.62 1.69-5.18 4.83-10.36 9.65-15.54 14.48-.57-.6-1.14-1.2-1.71-1.79 5.21-4.8 10.42-9.59 15.63-14.38"})),react.createElement("path",{fill:"#F57547",d:"M186.318 269.108c6.52 11.31 7.01 23.87 5 36.33-.4 2.48-5.23 6-8.03 6.01-10.92.05-22.05-.05-32.71-2.12-10.63-2.06-12.88-10.58-6.11-19.12 5.35-6.76 12.16-10.65 21.52-8.26 2.29-5.1 3.62-9.38 5.97-13.01 3.79-5.84 10.9-5.84 14.36.17m-.99 35.47c.24-12.22.9-22.87-6.98-34.3-2.51 7.3-4.35 12.65-6.18 17.96-17.55-2.62-22.21-.16-24.25 13.63 12.08 4.51 24.33 4.48 37.41 2.71",style:{fill:"#a3a3a3"}}),_path9||(_path9=react.createElement("path",{fill:"#FBB03B",d:"M178.348 270.278c7.88 11.43 7.22 22.08 6.98 34.3-13.08 1.77-25.33 1.8-37.41-2.71 2.04-13.79 6.7-16.25 24.25-13.63 1.83-5.31 3.67-10.66 6.18-17.96"})),_path10||(_path10=react.createElement("path",{d:"M173.018 375.488c-6.68 7.09-13.37 14.18-20.06 21.28 3.33-10.33 10.97-16.5 20.06-21.28"})),react.createElement("path",{fill:"#F57547",d:"M163.588 9.018c8.29 15.31 10.25 32.26 5.67 49.2-1.05 3.88-5.65 8.15-9.6 9.68-19.94 7.7-39.98 6.38-58.71-3.58-14.28-7.58-14.88-22.18-2.28-32.52 8.06-6.61 17.07-10.13 26.99-5.99 4.27-6.79 7.45-13.08 11.77-18.45 8.22-10.23 19.91-9.9 26.16 1.66m-9.11 53.12c5.88-1.39 9.04-5.26 8.77-11.05-.47-10.25-1.37-20.5-2.55-30.69-.31-2.76-1.92-5.58-3.55-7.95-4.74-6.89-8.76-7.12-13.86-.61-5.67 7.24-10.55 14.93-7.64 26.16-3.5-1.51-5.78-2.32-7.91-3.42-9.66-5-16.24-4.22-24.04 2.99-8.61 7.94-7.5 16.94 3.26 21.76 15.38 6.89 31.38 6.64 47.52 2.81",style:{fill:"#a3a3a3"}}),_path11||(_path11=react.createElement("path",{fill:"#FBB03B",d:"M163.248 51.088c.27 5.79-2.89 9.66-8.77 11.05-16.14 3.83-32.14 4.08-47.52-2.81-10.76-4.82-11.87-13.82-3.26-21.76 7.8-7.21 14.38-7.99 24.04-2.99 2.13 1.1 4.41 1.91 7.91 3.42-2.91-11.23 1.97-18.92 7.64-26.16 5.1-6.51 9.12-6.28 13.86.61 1.63 2.37 3.24 5.19 3.55 7.95 1.18 10.19 2.08 20.44 2.55 30.69"})),_path12||(_path12=react.createElement("path",{d:"M131.238 374.828c-4.98 5.87-9.96 11.73-14.95 17.6l-2.48-2.21c5.21-5.65 10.41-11.3 15.62-16.94.6.51 1.21 1.03 1.81 1.55M111.388 366.138c.71.64 1.42 1.28 2.12 1.93-5.45 6.02-10.83 12.11-16.44 17.98-.51.52-2.24-.11-3.53-.34 5.95-6.52 11.9-13.05 17.85-19.57M107.048 354.658c-7.26 8.08-14.52 16.15-21.78 24.23-.66-.64-1.32-1.28-1.98-1.91 5.3-9.87 14.45-16.15 21.92-23.99.61.56 1.22 1.11 1.84 1.67M93.538 385.708c-.02.03-.05.06-.08.09-.06-.04-.11-.08-.17-.13.08.01.16.03.25.04"})),_path13||(_path13=react.createElement("path",{d:"M93.458 385.798c-.02.03-.05.05-.07.08 0 0-.04-.07-.06-.11a1 1 0 0 1-.05-.1h.01c.06.05.11.09.17.13"})),_path14||(_path14=react.createElement("path",{d:"m93.328 385.768-.08-.13.03.03s.02.05.05.1M80.108 354.658c-3.47 4-6.94 7.99-10.41 11.98-.65-.67-1.3-1.35-1.95-2.03l10.68-11.43c.56.49 1.12.99 1.68 1.48"})),react.createElement("path",{fill:"#F57547",d:"M69.238 84.678c2.87 10.32 1.38 20.63-4.84 29.39-1.99 2.8-6.69 4.83-10.3 5.1-10.47.78-20.45-2.05-29.22-7.8-8.46-5.54-8.11-14.36.85-19.13 3.61-1.93 8.28-2.31 12.5-2.5 3.15-.14 6.36 1.17 9.74 1.87 2.4-3.45 4.38-6.98 7.02-9.92 5.26-5.83 12.14-4.58 14.25 2.99m-8.59 23.75c3.55-6.93 4.01-14.29 2.28-22.19-9.21 2.46-4.85 15.01-14.84 15.89-4.22-6.08-10.03-8.99-17.59-5.66-5.86 2.58-6.54 7.6-1.17 10.75 7.79 4.57 16.44 6.64 25.46 5.5 2.15-.27 4.85-2.32 5.86-4.29",style:{fill:"#a3a3a3"}}),_path15||(_path15=react.createElement("path",{fill:"#FBB03B",d:"M62.928 86.238c1.73 7.9 1.27 15.26-2.28 22.19-1.01 1.97-3.71 4.02-5.86 4.29-9.02 1.14-17.67-.93-25.46-5.5-5.37-3.15-4.69-8.17 1.17-10.75 7.56-3.33 13.37-.42 17.59 5.66 9.99-.88 5.63-13.43 14.84-15.89"})),react.createElement("path",{fill:"#F57547",d:"M53.938 389.758c4.72 6.57 6.33 14 3.97 21.98-5.02 16.97-13.48 20.88-29.64 13.74-8.5-3.76-12.2-8.16-11.12-13.2 1.2-5.63 6.96-9.39 15.49-10.02 1.81-.13 3.64-.02 6.24-.02 1.46-4.45 2.26-8.09 3.83-11.36 2.59-5.42 7.7-6.01 11.23-1.12m-7.16 30.96c6.71-5.75 7.67-16.9 2.28-25.74-.55 1.05-1.2 1.93-1.51 2.9-2.97 9.37-2.97 9.14-12.74 9.98-4.15.36-8.94.69-10.73 6.54 4.27 6.16 10.93 7.59 17.83 8.21 1.57.14 3.6-.8 4.87-1.89",style:{fill:"#a3a3a3"}}),_path16||(_path16=react.createElement("path",{d:"M57.938 303.968c-8.39 9.33-16.77 18.67-25.16 28l-.61-.55c4.75-12.53 15.54-19.72 25.77-27.45"})),_path17||(_path17=react.createElement("path",{fill:"#FBB03B",d:"M49.058 394.978c5.39 8.84 4.43 19.99-2.28 25.74-1.27 1.09-3.3 2.03-4.87 1.89-6.9-.62-13.56-2.05-17.83-8.21 1.79-5.85 6.58-6.18 10.73-6.54 9.77-.84 9.77-.61 12.74-9.98.31-.97.96-1.85 1.51-2.9"})))};function night_extends(){return(night_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}let night=function SvgNight(props){return react.createElement("svg",night_extends({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 429.017 429.017"},props),night_path||(night_path=react.createElement("path",{d:"M149.495 411.55c-43.855-1.255-81.658-17.458-111.502-49.873-19.813-21.52-29.626-48.285-31.405-77.453-2.71-44.414 9.268-84.734 36.898-119.757 26.187-33.192 60.813-51.886 102.967-55.471 12.152-1.033 24.361 1.655 34.502 9.362 4.572 3.475 10.282 7.255 8.311 14.291-1.768 6.308-8.106 6.842-13.383 8.194-4.246 1.087-8.902 1.06-12.847 2.757-45.099 19.394-85.909 66.465-74.118 132.791 2.068 11.636 4.499 23.093 10.526 33.513 16.133 27.892 46.478 43.181 78.331 38.856 25.038-3.4 48.776-10.679 70.504-24.103 6.322-3.906 10.758-8.718 13.397-15.482 2.677-6.86 5.193-13.798 8.228-20.498 3.168-6.994 8.279-12.197 16.016-14.126 9.962-2.482 18.318 2.556 18.892 12.789.443 7.896.248 16.645-2.697 23.76-9.165 22.139-19.505 43.934-37.282 60.805-6.601 6.265-13.866 12.197-21.738 16.685-20.994 11.969-43.369 20.076-67.919 20.984-8.439.312-16.854 1.278-25.681 1.976m-56.108-25.675-.136-.234c9.819 7.781 21.455 10.499 33.333 12.478 7.605-7.874 14.498-15.908 24.184-20.806l-18.351 20.576c2.873.999 4.231 1.889 5.583 1.88 22.076-.135 44.076-.748 65.595-6.741 44.124-12.287 71.342-42.239 87.65-83.538 3.342-8.465 5.128-17.384 1.004-26.34-6.805-.421-10.18 3.376-12.749 8.005-2.494 4.496-4.497 9.262-6.819 13.856-6.272 12.414-11.719 25.055-24.789 32.796-25.764 15.258-53.715 22.426-83.167 22.248-34.492-.208-69.968-21.74-80.96-63.222-1.693-6.388-3.048-12.914-3.917-19.462-4.677-35.266.245-68.34 22.972-97.148 19.09-24.197 42.083-42.14 73.877-45.961 1.325-.159 2.565-1.022 5.698-2.332-3.287-3.257-5.391-6.085-8.152-7.931-6.893-4.609-14.707-6.609-22.995-6.578-21.139.08-40.552 6.377-58.845 16.558-12.667 7.05-23.396 16.501-33.628 26.698-11.606 11.566-17.522 26.743-26.405 40.024-.894 1.338-1.231 3.049-2.726 6.909l29.631-21.81 1.402 1.893c-9.497 7.856-18.727 16.07-28.577 23.455-7.794 5.844-10.096 13.384-10.324 23.465l28.754-22.742 1.622 1.93c-2.795 2.674-5.532 5.413-8.398 8.008-6.553 5.934-13.267 11.693-19.732 17.721-6.374 5.943-7.2 9.417-5.206 19.293l21.044-17.619c-4.234 6.38-8.718 12.358-14.396 16.816-10.875 8.538-9.879 19.044-7.233 32.484 10.898-12.063 20.328-23.037 32.888-30.569-1.909 3.517-4.329 6.551-6.957 9.391-6 6.487-11.782 13.225-18.249 19.217-7.311 6.773-8.374 13.854-2.888 22.898 10.278-9.322 18.185-20.842 30.694-27.277l-30.288 33.688 8.735 13.564.608.551c.131 6.269 3.645 10.642 7.977 15.268l17.612-19.631 1.513 1.248-17.18 22.57 7.842 8.675 19.708-19.694 1.37 1.422-17.499 21.595c12.589 10.076 23.861 19.777 39.27 22.455M125.653 25.805c4.274-6.792 7.454-13.077 11.773-18.447 8.224-10.225 19.908-9.903 26.163 1.657 8.288 15.316 10.25 32.267 5.669 49.203-1.051 3.883-5.65 8.152-9.605 9.679-19.939 7.698-39.971 6.376-58.708-3.577-14.277-7.585-14.876-22.186-2.277-32.52 8.064-6.613 17.07-10.131 26.985-5.995m9.995 12.188c-3.502-1.501-5.778-2.314-7.905-3.414-9.667-4.999-16.242-4.217-24.043 2.984-8.612 7.949-7.503 16.949 3.257 21.768 15.376 6.886 31.385 6.636 47.517 2.81 5.889-1.396 9.044-5.261 8.776-11.058-.474-10.248-1.37-20.491-2.547-30.683-.319-2.765-1.925-5.585-3.555-7.957-4.735-6.885-8.756-7.119-13.857-.605-5.668 7.238-10.548 14.931-7.643 26.155"})),night_path2||(night_path2=react.createElement("path",{d:"M221.702 183.153c1.884-4.416 3.405-9.417 6.004-13.775 5.278-8.85 13.711-10.464 21.239-3.473 4.42 4.105 8.343 9.521 10.512 15.114 4.484 11.565 3.397 23.779 1.464 35.845-.725 4.527-3.309 7.552-7.654 8.33-16.039 2.867-32.083 3.675-47.811-1.784-7.494-2.601-14.819-6.113-15.607-15.134-.783-8.965 5.762-14.104 12.6-17.827 5.64-3.07 12.089-4.656 19.253-7.296m18.628-13.044c-7.199 4.509-8.177 11.142-8.994 17.658-.539 4.299-2.748 8.447-6.615 6.101-9.739-5.907-16.138.178-22.508 5.135-8.141 6.335-6.833 12.575 3.156 15.7 14.903 4.661 30.039 5.393 45.926.915.104-16.308 5.633-33.339-10.965-45.509M275.362 50.983c1.327-2.113 2.406-3.967 3.616-5.73 3.576-5.207 8.183-8.632 14.852-7.255 6.775 1.399 11.548 5.854 12.554 12.455 2.281 14.966.349 29.359-9.018 41.948-3.572 4.802-8.597 7.028-14.457 6.38-17.333-1.918-32.752-8.207-44.798-21.229-11.232-12.141-8.454-24.831 7.345-29.682 6.59-2.024 14.337-.632 21.52-.193 2.7.166 5.296 2.031 8.386 3.306m.624 11.318c-2.777-2.055-5.3-4.098-7.997-5.88-5.574-3.684-11.748-4.187-17.975-2.381-10.822 3.14-13.018 10.631-5.382 18.917 9.662 10.486 22.297 15.13 36.076 17.139 4.997.729 8.326-1.5 10.796-5.812 5.313-9.279 7.176-19.297 5.975-29.723-.349-3.025-3.059-5.778-5.516-10.121zM384.193 96.246c1.961-3.047 3.594-5.795 5.431-8.397 3.201-4.536 7.425-7.284 13.18-6.01 5.467 1.21 8.874 4.763 10.55 10.169 3.09 9.966.927 19.837-1.003 29.488-4.435 22.187-12.857 26.976-34.436 19.93-8.013-2.616-15.964-5.745-23.441-9.612-14.568-7.536-15.768-20.129-3.194-30.816 9.671-8.219 20.358-11.78 32.913-4.752m4.208 8.767c-2.564-1.185-4.21-1.903-5.819-2.695-10.878-5.356-20.764-3.401-28.554 5.663-5.573 6.484-4.743 13.659 2.924 17.16 9.294 4.244 19.062 7.464 28.684 10.965 1.661.605 3.613.498 5.436.553 8.254.247 9.866-.418 11.987-8.114 2.227-8.084 3.566-16.423 5.039-24.695.373-2.092.321-4.593-.498-6.49-1.352-3.136-2.836-7.355-5.441-8.546-4.059-1.857-6.244 2.562-8.124 5.637-1.887 3.086-3.428 6.384-5.634 10.562M397.856 224.272c1.37-2.427 2.823-5.846 5.02-8.693 3.089-4.003 7.146-6.483 12.519-4.404 5.073 1.963 7.889 6.098 7.342 11.177-.702 6.513-2.18 13.068-4.302 19.27a145 145 0 0 1-9.226 21.188c-3.773 7.072-7.132 8.386-14.556 5.982-16.894-5.469-29.122-16.908-38.134-31.809-2.911-4.813-3.931-10.585-.035-15.627 4.204-5.441 10.503-7.603 16.753-6.065 8.054 1.982 15.699 5.635 24.619 8.981m-.631 10.336c-1.98-1.601-3.982-3.791-6.452-5.1-5.438-2.882-10.905-6.163-16.773-7.602-3.245-.796-8.862.717-10.581 3.171-1.657 2.366-.985 8.216.94 10.909 7.3 10.213 16.468 18.744 28.062 24.029 7.055 3.217 11.713 2.373 14.758-4.505 4.391-9.919 7.204-20.573 10.186-31.058.904-3.179-.205-6.624-6.027-7.98zM371.343 350.528c.741-1.324 2.132-4.799 4.365-7.603 5.882-7.382 14.615-6.377 18.145 2.199 4.152 10.086 4.21 20.743 2.638 31.362-.861 5.815-5.599 7.582-10.567 7.682-12.052.241-23.194-3.473-33.14-9.993-6.636-4.35-6.68-13.038.222-17.432 4.83-3.077 11.107-3.881 18.337-6.215m13.942-7.974c-3.046 4.582-4.743 6.782-6.05 9.193-1.525 2.813-2.708 5.811-3.943 8.517-15.721-2.257-16.211-2.06-19.502 7.987 10.008 5.849 20.241 10.697 32.353 8.947 4.098-11.674 1.798-21.766-2.858-34.644M165.985 281.949c2.291-5.104 3.625-9.384 5.974-13.008 3.787-5.843 10.901-5.839 14.36.164 6.521 11.318 7.015 23.875 5.004 36.337-.399 2.474-5.232 5.993-8.035 6.007-10.918.053-22.048-.051-32.708-2.118-10.633-2.06-12.876-10.579-6.114-19.124 5.351-6.763 12.158-10.649 21.519-8.258m6.185 6.294c-17.548-2.62-22.21-.162-24.256 13.63 12.08 4.504 24.337 4.48 37.418 2.709.237-12.225.898-22.875-6.984-34.301-2.508 7.295-4.349 12.646-6.178 17.962M380.829 18.911c2.929-3.738 4.955-6.86 7.507-9.468 5.205-5.319 11.594-3.804 13.012 3.543 1.092 5.66.748 11.686.397 17.51-.308 5.098-1.189 10.222-2.403 15.191-1.76 7.206-5.52 10.016-12.885 8.673-7.162-1.307-14.343-3.262-21.07-6.021-9.078-3.724-12.012-10.17-9.708-18.425 2.254-8.077 9.892-13.282 18.436-12.417 2.125.215 4.205.872 6.714 1.414m2.059 8.77c-3.985-1.683-6.847-3.5-9.936-4.059-5.071-.917-8.415 2.15-10.219 6.556-1.606 3.92-2.022 8.373 2.161 10.852 8.157 4.833 16.767 8.592 26.908 6.754 4.309-11.478 4.736-22.621 3.398-33.871l-2.333-.624zM47.965 91.605c2.404-3.443 4.381-6.98 7.027-9.914 5.256-5.829 12.132-4.587 14.243 2.991 2.876 10.322 1.386 20.623-4.838 29.389-1.987 2.798-6.687 4.824-10.303 5.094-10.468.783-20.443-2.045-29.217-7.796-8.456-5.543-8.11-14.356.854-19.132 3.611-1.924 8.276-2.306 12.502-2.494 3.148-.141 6.359 1.162 9.732 1.862m.126 10.528c-4.224-6.085-10.032-8.99-17.597-5.66-5.852 2.577-6.534 7.594-1.165 10.746 7.785 4.57 16.435 6.637 25.458 5.503 2.146-.27 4.848-2.326 5.859-4.296 3.554-6.928 4.012-14.283 2.279-22.183-9.206 2.457-4.847 15.001-14.834 15.89M306.43 404.618c2.337-3.771 4.522-8.527 7.877-12.22 1.81-1.991 5.849-3.291 8.455-2.769 1.817.363 3.927 4.258 4.146 6.731.815 9.198.771 18.392-5.608 26.186-4.383 5.355-9.749 7.821-16.516 5.726-6.642-2.056-13.314-4.162-19.672-6.935-4.124-1.799-7.577-5.147-6.258-10.394 1.285-5.109 4.996-8.541 10.233-8.501 5.676.045 11.339 1.367 17.343 2.176m4.616 6.187c-3.999-1.163-7.409-2.43-10.932-3.099-3.19-.604-6.624-1.172-9.722-.574-2.083.402-4.913 2.631-5.285 4.473-.323 1.595 1.925 4.688 3.77 5.549 4.274 1.997 8.942 3.235 13.54 4.436 8.912 2.329 12.871.298 16.288-8.214 1.866-4.649 2.472-9.412.893-16.333zM38.88 402.238c1.463-4.447 2.262-8.087 3.827-11.36 2.593-5.422 7.7-6.012 11.227-1.115 4.727 6.562 6.338 13.992 3.976 21.971-5.026 16.971-13.479 20.883-29.641 13.742q-12.747-5.631-11.124-13.197c1.208-5.635 6.965-9.391 15.494-10.021 1.81-.133 3.637-.02 6.241-.02M24.081 414.4c4.264 6.157 10.93 7.589 17.827 8.209 1.575.142 3.603-.804 4.872-1.891 6.707-5.752 7.672-16.9 2.282-25.738-.557 1.051-1.2 1.924-1.511 2.902-2.973 9.369-2.977 9.138-12.739 9.98-4.154.359-8.943.69-10.731 6.538M32.17 331.419c4.748-12.529 15.542-19.72 25.768-27.455q-12.581 14.002-25.161 28.006zM83.289 376.976c5.302-9.872 14.448-16.145 21.917-23.988l1.84 1.67-21.776 24.23zM173.019 375.487l-20.057 21.279c3.323-10.323 10.965-16.495 20.057-21.279M113.81 390.219l15.615-16.945 1.815 1.549-14.947 17.609zM93.387 385.875l18.003-19.737 2.12 1.928c-5.448 6.025-10.833 12.109-16.443 17.979-.543.568-2.478-.195-3.792-.372-.024-.033.112.202.112.202M179.915 391.025l15.633-14.378 1.618 1.696-15.54 14.472zM67.752 364.612l10.681-11.436 1.677 1.486-10.416 11.981z"})))};var classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),Button=__webpack_require__("./src/shared/ui/Button/Button.tsx"),ThemeSwitcher=function(param){var className=param.className,_useTheme=(0,ThemeProvider.Fg)(),theme=_useTheme.theme,toggleTheme=_useTheme.toggleTheme;return react.createElement(Button.z,{theme:Button.U.CLEAR,className:(0,classNames.A)("",{},[className]),onClick:toggleTheme},theme===ThemeProvider.Q2.LIGHT?react.createElement(day,null):react.createElement(night,null))};try{ThemeSwitcher.displayName="ThemeSwitcher",ThemeSwitcher.__docgenInfo={description:"",displayName:"ThemeSwitcher",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/themeSwitcher/ui/ThemeSwitcher.tsx#ThemeSwitcher"]={docgenInfo:ThemeSwitcher.__docgenInfo,name:"ThemeSwitcher",path:"src/shared/ui/themeSwitcher/ui/ThemeSwitcher.tsx#ThemeSwitcher"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=366.4387095d.iframe.bundle.js.map