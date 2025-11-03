(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function ic(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ul={exports:{}},eo={},Vl={exports:{}},x={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yn=Symbol.for("react.element"),ac=Symbol.for("react.portal"),lc=Symbol.for("react.fragment"),sc=Symbol.for("react.strict_mode"),uc=Symbol.for("react.profiler"),cc=Symbol.for("react.provider"),dc=Symbol.for("react.context"),fc=Symbol.for("react.forward_ref"),pc=Symbol.for("react.suspense"),hc=Symbol.for("react.memo"),mc=Symbol.for("react.lazy"),La=Symbol.iterator;function yc(e){return e===null||typeof e!="object"?null:(e=La&&e[La]||e["@@iterator"],typeof e=="function"?e:null)}var Ql={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ql=Object.assign,Yl={};function on(e,t,n){this.props=e,this.context=t,this.refs=Yl,this.updater=n||Ql}on.prototype.isReactComponent={};on.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};on.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $l(){}$l.prototype=on.prototype;function Hi(e,t,n){this.props=e,this.context=t,this.refs=Yl,this.updater=n||Ql}var ji=Hi.prototype=new $l;ji.constructor=Hi;ql(ji,on.prototype);ji.isPureReactComponent=!0;var Ma=Array.isArray,Kl=Object.prototype.hasOwnProperty,zi={current:null},Zl={key:!0,ref:!0,__self:!0,__source:!0};function Xl(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)Kl.call(t,r)&&!Zl.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:Yn,type:e,key:i,ref:a,props:o,_owner:zi.current}}function gc(e,t){return{$$typeof:Yn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Bi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yn}function vc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Oa=/\/+/g;function ko(e,t){return typeof e=="object"&&e!==null&&e.key!=null?vc(""+e.key):t.toString(36)}function vr(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Yn:case ac:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+ko(a,0):r,Ma(o)?(n="",e!=null&&(n=e.replace(Oa,"$&/")+"/"),vr(o,t,n,"",function(c){return c})):o!=null&&(Bi(o)&&(o=gc(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(Oa,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",Ma(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+ko(i,l);a+=vr(i,t,n,s,o)}else if(s=yc(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+ko(i,l++),a+=vr(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function tr(e,t,n){if(e==null)return e;var r=[],o=0;return vr(e,r,"","",function(i){return t.call(n,i,o++)}),r}function wc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var le={current:null},wr={transition:null},kc={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:wr,ReactCurrentOwner:zi};function Jl(){throw Error("act(...) is not supported in production builds of React.")}x.Children={map:tr,forEach:function(e,t,n){tr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return tr(e,function(){t++}),t},toArray:function(e){return tr(e,function(t){return t})||[]},only:function(e){if(!Bi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};x.Component=on;x.Fragment=lc;x.Profiler=uc;x.PureComponent=Hi;x.StrictMode=sc;x.Suspense=pc;x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kc;x.act=Jl;x.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ql({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=zi.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Kl.call(t,s)&&!Zl.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Yn,type:e.type,key:o,ref:i,props:r,_owner:a}};x.createContext=function(e){return e={$$typeof:dc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:cc,_context:e},e.Consumer=e};x.createElement=Xl;x.createFactory=function(e){var t=Xl.bind(null,e);return t.type=e,t};x.createRef=function(){return{current:null}};x.forwardRef=function(e){return{$$typeof:fc,render:e}};x.isValidElement=Bi;x.lazy=function(e){return{$$typeof:mc,_payload:{_status:-1,_result:e},_init:wc}};x.memo=function(e,t){return{$$typeof:hc,type:e,compare:t===void 0?null:t}};x.startTransition=function(e){var t=wr.transition;wr.transition={};try{e()}finally{wr.transition=t}};x.unstable_act=Jl;x.useCallback=function(e,t){return le.current.useCallback(e,t)};x.useContext=function(e){return le.current.useContext(e)};x.useDebugValue=function(){};x.useDeferredValue=function(e){return le.current.useDeferredValue(e)};x.useEffect=function(e,t){return le.current.useEffect(e,t)};x.useId=function(){return le.current.useId()};x.useImperativeHandle=function(e,t,n){return le.current.useImperativeHandle(e,t,n)};x.useInsertionEffect=function(e,t){return le.current.useInsertionEffect(e,t)};x.useLayoutEffect=function(e,t){return le.current.useLayoutEffect(e,t)};x.useMemo=function(e,t){return le.current.useMemo(e,t)};x.useReducer=function(e,t,n){return le.current.useReducer(e,t,n)};x.useRef=function(e){return le.current.useRef(e)};x.useState=function(e){return le.current.useState(e)};x.useSyncExternalStore=function(e,t,n){return le.current.useSyncExternalStore(e,t,n)};x.useTransition=function(){return le.current.useTransition()};x.version="18.3.1";Vl.exports=x;var je=Vl.exports;const Sc=ic(je);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cc=je,Tc=Symbol.for("react.element"),_c=Symbol.for("react.fragment"),Pc=Object.prototype.hasOwnProperty,Ec=Cc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ac={key:!0,ref:!0,__self:!0,__source:!0};function es(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Pc.call(t,r)&&!Ac.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Tc,type:e,key:i,ref:a,props:o,_owner:Ec.current}}eo.Fragment=_c;eo.jsx=es;eo.jsxs=es;Ul.exports=eo;var S=Ul.exports,Qo={},ts={exports:{}},ve={},ns={exports:{}},rs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,I){var b=_.length;_.push(I);e:for(;0<b;){var U=b-1>>>1,$=_[U];if(0<o($,I))_[U]=I,_[b]=$,b=U;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var I=_[0],b=_.pop();if(b!==I){_[0]=b;e:for(var U=0,$=_.length,Jn=$>>>1;U<Jn;){var yt=2*(U+1)-1,wo=_[yt],gt=yt+1,er=_[gt];if(0>o(wo,b))gt<$&&0>o(er,wo)?(_[U]=er,_[gt]=b,U=gt):(_[U]=wo,_[yt]=b,U=yt);else if(gt<$&&0>o(er,b))_[U]=er,_[gt]=b,U=gt;else break e}}return I}function o(_,I){var b=_.sortIndex-I.sortIndex;return b!==0?b:_.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],c=[],h=1,m=null,p=3,w=!1,v=!1,k=!1,F=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(_){for(var I=n(c);I!==null;){if(I.callback===null)r(c);else if(I.startTime<=_)r(c),I.sortIndex=I.expirationTime,t(s,I);else break;I=n(c)}}function y(_){if(k=!1,f(_),!v)if(n(s)!==null)v=!0,go(T);else{var I=n(c);I!==null&&vo(y,I.startTime-_)}}function T(_,I){v=!1,k&&(k=!1,d(A),A=-1),w=!0;var b=p;try{for(f(I),m=n(s);m!==null&&(!(m.expirationTime>I)||_&&!Ee());){var U=m.callback;if(typeof U=="function"){m.callback=null,p=m.priorityLevel;var $=U(m.expirationTime<=I);I=e.unstable_now(),typeof $=="function"?m.callback=$:m===n(s)&&r(s),f(I)}else r(s);m=n(s)}if(m!==null)var Jn=!0;else{var yt=n(c);yt!==null&&vo(y,yt.startTime-I),Jn=!1}return Jn}finally{m=null,p=b,w=!1}}var P=!1,E=null,A=-1,G=5,D=-1;function Ee(){return!(e.unstable_now()-D<G)}function sn(){if(E!==null){var _=e.unstable_now();D=_;var I=!0;try{I=E(!0,_)}finally{I?un():(P=!1,E=null)}}else P=!1}var un;if(typeof u=="function")un=function(){u(sn)};else if(typeof MessageChannel<"u"){var Na=new MessageChannel,oc=Na.port2;Na.port1.onmessage=sn,un=function(){oc.postMessage(null)}}else un=function(){F(sn,0)};function go(_){E=_,P||(P=!0,un())}function vo(_,I){A=F(function(){_(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){v||w||(v=!0,go(T))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(_){switch(p){case 1:case 2:case 3:var I=3;break;default:I=p}var b=p;p=I;try{return _()}finally{p=b}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,I){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var b=p;p=_;try{return I()}finally{p=b}},e.unstable_scheduleCallback=function(_,I,b){var U=e.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?U+b:U):b=U,_){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=b+$,_={id:h++,callback:I,priorityLevel:_,startTime:b,expirationTime:$,sortIndex:-1},b>U?(_.sortIndex=b,t(c,_),n(s)===null&&_===n(c)&&(k?(d(A),A=-1):k=!0,vo(y,b-U))):(_.sortIndex=$,t(s,_),v||w||(v=!0,go(T))),_},e.unstable_shouldYield=Ee,e.unstable_wrapCallback=function(_){var I=p;return function(){var b=p;p=I;try{return _.apply(this,arguments)}finally{p=b}}}})(rs);ns.exports=rs;var Ic=ns.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bc=je,ge=Ic;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var os=new Set,Dn={};function xt(e,t){Zt(e,t),Zt(e+"Capture",t)}function Zt(e,t){for(Dn[e]=t,e=0;e<t.length;e++)os.add(t[e])}var Ve=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qo=Object.prototype.hasOwnProperty,xc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fa={},Wa={};function Dc(e){return qo.call(Wa,e)?!0:qo.call(Fa,e)?!1:xc.test(e)?Wa[e]=!0:(Fa[e]=!0,!1)}function Rc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Nc(e,t,n,r){if(t===null||typeof t>"u"||Rc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function se(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ee[t]=new se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new se(e,5,!1,e.toLowerCase(),null,!1,!1)});var Gi=/[\-:]([a-z])/g;function Ui(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Gi,Ui);ee[t]=new se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Gi,Ui);ee[t]=new se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Gi,Ui);ee[t]=new se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new se(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new se(e,1,!1,e.toLowerCase(),null,!0,!0)});function Vi(e,t,n,r){var o=ee.hasOwnProperty(t)?ee[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Nc(t,n,o,r)&&(n=null),r||o===null?Dc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var $e=bc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nr=Symbol.for("react.element"),Nt=Symbol.for("react.portal"),Lt=Symbol.for("react.fragment"),Qi=Symbol.for("react.strict_mode"),Yo=Symbol.for("react.profiler"),is=Symbol.for("react.provider"),as=Symbol.for("react.context"),qi=Symbol.for("react.forward_ref"),$o=Symbol.for("react.suspense"),Ko=Symbol.for("react.suspense_list"),Yi=Symbol.for("react.memo"),Ze=Symbol.for("react.lazy"),ls=Symbol.for("react.offscreen"),Ha=Symbol.iterator;function cn(e){return e===null||typeof e!="object"?null:(e=Ha&&e[Ha]||e["@@iterator"],typeof e=="function"?e:null)}var z=Object.assign,So;function vn(e){if(So===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);So=t&&t[1]||""}return`
`+So+e}var Co=!1;function To(e,t){if(!e||Co)return"";Co=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var s=`
`+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Co=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?vn(e):""}function Lc(e){switch(e.tag){case 5:return vn(e.type);case 16:return vn("Lazy");case 13:return vn("Suspense");case 19:return vn("SuspenseList");case 0:case 2:case 15:return e=To(e.type,!1),e;case 11:return e=To(e.type.render,!1),e;case 1:return e=To(e.type,!0),e;default:return""}}function Zo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Lt:return"Fragment";case Nt:return"Portal";case Yo:return"Profiler";case Qi:return"StrictMode";case $o:return"Suspense";case Ko:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case as:return(e.displayName||"Context")+".Consumer";case is:return(e._context.displayName||"Context")+".Provider";case qi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Yi:return t=e.displayName||null,t!==null?t:Zo(e.type)||"Memo";case Ze:t=e._payload,e=e._init;try{return Zo(e(t))}catch{}}return null}function Mc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zo(t);case 8:return t===Qi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function dt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ss(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Oc(e){var t=ss(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function rr(e){e._valueTracker||(e._valueTracker=Oc(e))}function us(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ss(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function xr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xo(e,t){var n=t.checked;return z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ja(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=dt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function cs(e,t){t=t.checked,t!=null&&Vi(e,"checked",t,!1)}function Jo(e,t){cs(e,t);var n=dt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ei(e,t.type,n):t.hasOwnProperty("defaultValue")&&ei(e,t.type,dt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function za(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ei(e,t,n){(t!=="number"||xr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var wn=Array.isArray;function Vt(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+dt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ti(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(g(91));return z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ba(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(g(92));if(wn(n)){if(1<n.length)throw Error(g(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:dt(n)}}function ds(e,t){var n=dt(t.value),r=dt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ga(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ni(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var or,ps=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(or=or||document.createElement("div"),or.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=or.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Rn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Cn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fc=["Webkit","ms","Moz","O"];Object.keys(Cn).forEach(function(e){Fc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Cn[t]=Cn[e]})});function hs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Cn.hasOwnProperty(e)&&Cn[e]?(""+t).trim():t+"px"}function ms(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=hs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Wc=z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ri(e,t){if(t){if(Wc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(g(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(g(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(g(61))}if(t.style!=null&&typeof t.style!="object")throw Error(g(62))}}function oi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ii=null;function $i(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ai=null,Qt=null,qt=null;function Ua(e){if(e=Zn(e)){if(typeof ai!="function")throw Error(g(280));var t=e.stateNode;t&&(t=io(t),ai(e.stateNode,e.type,t))}}function ys(e){Qt?qt?qt.push(e):qt=[e]:Qt=e}function gs(){if(Qt){var e=Qt,t=qt;if(qt=Qt=null,Ua(e),t)for(e=0;e<t.length;e++)Ua(t[e])}}function vs(e,t){return e(t)}function ws(){}var _o=!1;function ks(e,t,n){if(_o)return e(t,n);_o=!0;try{return vs(e,t,n)}finally{_o=!1,(Qt!==null||qt!==null)&&(ws(),gs())}}function Nn(e,t){var n=e.stateNode;if(n===null)return null;var r=io(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(g(231,t,typeof n));return n}var li=!1;if(Ve)try{var dn={};Object.defineProperty(dn,"passive",{get:function(){li=!0}}),window.addEventListener("test",dn,dn),window.removeEventListener("test",dn,dn)}catch{li=!1}function Hc(e,t,n,r,o,i,a,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Tn=!1,Dr=null,Rr=!1,si=null,jc={onError:function(e){Tn=!0,Dr=e}};function zc(e,t,n,r,o,i,a,l,s){Tn=!1,Dr=null,Hc.apply(jc,arguments)}function Bc(e,t,n,r,o,i,a,l,s){if(zc.apply(this,arguments),Tn){if(Tn){var c=Dr;Tn=!1,Dr=null}else throw Error(g(198));Rr||(Rr=!0,si=c)}}function Dt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ss(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Va(e){if(Dt(e)!==e)throw Error(g(188))}function Gc(e){var t=e.alternate;if(!t){if(t=Dt(e),t===null)throw Error(g(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Va(o),e;if(i===r)return Va(o),t;i=i.sibling}throw Error(g(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a)throw Error(g(189))}}if(n.alternate!==r)throw Error(g(190))}if(n.tag!==3)throw Error(g(188));return n.stateNode.current===n?e:t}function Cs(e){return e=Gc(e),e!==null?Ts(e):null}function Ts(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ts(e);if(t!==null)return t;e=e.sibling}return null}var _s=ge.unstable_scheduleCallback,Qa=ge.unstable_cancelCallback,Uc=ge.unstable_shouldYield,Vc=ge.unstable_requestPaint,V=ge.unstable_now,Qc=ge.unstable_getCurrentPriorityLevel,Ki=ge.unstable_ImmediatePriority,Ps=ge.unstable_UserBlockingPriority,Nr=ge.unstable_NormalPriority,qc=ge.unstable_LowPriority,Es=ge.unstable_IdlePriority,to=null,Fe=null;function Yc(e){if(Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(to,e,void 0,(e.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:Zc,$c=Math.log,Kc=Math.LN2;function Zc(e){return e>>>=0,e===0?32:31-($c(e)/Kc|0)|0}var ir=64,ar=4194304;function kn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Lr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~o;l!==0?r=kn(l):(i&=a,i!==0&&(r=kn(i)))}else a=n&~o,a!==0?r=kn(a):i!==0&&(r=kn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-De(t),o=1<<n,r|=e[n],t&=~o;return r}function Xc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-De(i),l=1<<a,s=o[a];s===-1?(!(l&n)||l&r)&&(o[a]=Xc(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}function ui(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function As(){var e=ir;return ir<<=1,!(ir&4194240)&&(ir=64),e}function Po(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function $n(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-De(t),e[t]=n}function ed(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-De(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Zi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-De(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var N=0;function Is(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var bs,Xi,xs,Ds,Rs,ci=!1,lr=[],rt=null,ot=null,it=null,Ln=new Map,Mn=new Map,Je=[],td="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qa(e,t){switch(e){case"focusin":case"focusout":rt=null;break;case"dragenter":case"dragleave":ot=null;break;case"mouseover":case"mouseout":it=null;break;case"pointerover":case"pointerout":Ln.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mn.delete(t.pointerId)}}function fn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Zn(t),t!==null&&Xi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function nd(e,t,n,r,o){switch(t){case"focusin":return rt=fn(rt,e,t,n,r,o),!0;case"dragenter":return ot=fn(ot,e,t,n,r,o),!0;case"mouseover":return it=fn(it,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Ln.set(i,fn(Ln.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Mn.set(i,fn(Mn.get(i)||null,e,t,n,r,o)),!0}return!1}function Ns(e){var t=kt(e.target);if(t!==null){var n=Dt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ss(n),t!==null){e.blockedOn=t,Rs(e.priority,function(){xs(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=di(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ii=r,n.target.dispatchEvent(r),ii=null}else return t=Zn(n),t!==null&&Xi(t),e.blockedOn=n,!1;t.shift()}return!0}function Ya(e,t,n){kr(e)&&n.delete(t)}function rd(){ci=!1,rt!==null&&kr(rt)&&(rt=null),ot!==null&&kr(ot)&&(ot=null),it!==null&&kr(it)&&(it=null),Ln.forEach(Ya),Mn.forEach(Ya)}function pn(e,t){e.blockedOn===t&&(e.blockedOn=null,ci||(ci=!0,ge.unstable_scheduleCallback(ge.unstable_NormalPriority,rd)))}function On(e){function t(o){return pn(o,e)}if(0<lr.length){pn(lr[0],e);for(var n=1;n<lr.length;n++){var r=lr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rt!==null&&pn(rt,e),ot!==null&&pn(ot,e),it!==null&&pn(it,e),Ln.forEach(t),Mn.forEach(t),n=0;n<Je.length;n++)r=Je[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Je.length&&(n=Je[0],n.blockedOn===null);)Ns(n),n.blockedOn===null&&Je.shift()}var Yt=$e.ReactCurrentBatchConfig,Mr=!0;function od(e,t,n,r){var o=N,i=Yt.transition;Yt.transition=null;try{N=1,Ji(e,t,n,r)}finally{N=o,Yt.transition=i}}function id(e,t,n,r){var o=N,i=Yt.transition;Yt.transition=null;try{N=4,Ji(e,t,n,r)}finally{N=o,Yt.transition=i}}function Ji(e,t,n,r){if(Mr){var o=di(e,t,n,r);if(o===null)Mo(e,t,r,Or,n),qa(e,r);else if(nd(o,e,t,n,r))r.stopPropagation();else if(qa(e,r),t&4&&-1<td.indexOf(e)){for(;o!==null;){var i=Zn(o);if(i!==null&&bs(i),i=di(e,t,n,r),i===null&&Mo(e,t,r,Or,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Mo(e,t,r,null,n)}}var Or=null;function di(e,t,n,r){if(Or=null,e=$i(r),e=kt(e),e!==null)if(t=Dt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ss(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Or=e,null}function Ls(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qc()){case Ki:return 1;case Ps:return 4;case Nr:case qc:return 16;case Es:return 536870912;default:return 16}default:return 16}}var tt=null,ea=null,Sr=null;function Ms(){if(Sr)return Sr;var e,t=ea,n=t.length,r,o="value"in tt?tt.value:tt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return Sr=o.slice(e,1<r?1-r:void 0)}function Cr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function sr(){return!0}function $a(){return!1}function we(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?sr:$a,this.isPropagationStopped=$a,this}return z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sr)},persist:function(){},isPersistent:sr}),t}var an={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ta=we(an),Kn=z({},an,{view:0,detail:0}),ad=we(Kn),Eo,Ao,hn,no=z({},Kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:na,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hn&&(hn&&e.type==="mousemove"?(Eo=e.screenX-hn.screenX,Ao=e.screenY-hn.screenY):Ao=Eo=0,hn=e),Eo)},movementY:function(e){return"movementY"in e?e.movementY:Ao}}),Ka=we(no),ld=z({},no,{dataTransfer:0}),sd=we(ld),ud=z({},Kn,{relatedTarget:0}),Io=we(ud),cd=z({},an,{animationName:0,elapsedTime:0,pseudoElement:0}),dd=we(cd),fd=z({},an,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pd=we(fd),hd=z({},an,{data:0}),Za=we(hd),md={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=gd[e])?!!t[e]:!1}function na(){return vd}var wd=z({},Kn,{key:function(e){if(e.key){var t=md[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Cr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:na,charCode:function(e){return e.type==="keypress"?Cr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kd=we(wd),Sd=z({},no,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xa=we(Sd),Cd=z({},Kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:na}),Td=we(Cd),_d=z({},an,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pd=we(_d),Ed=z({},no,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ad=we(Ed),Id=[9,13,27,32],ra=Ve&&"CompositionEvent"in window,_n=null;Ve&&"documentMode"in document&&(_n=document.documentMode);var bd=Ve&&"TextEvent"in window&&!_n,Os=Ve&&(!ra||_n&&8<_n&&11>=_n),Ja=" ",el=!1;function Fs(e,t){switch(e){case"keyup":return Id.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ws(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Mt=!1;function xd(e,t){switch(e){case"compositionend":return Ws(t);case"keypress":return t.which!==32?null:(el=!0,Ja);case"textInput":return e=t.data,e===Ja&&el?null:e;default:return null}}function Dd(e,t){if(Mt)return e==="compositionend"||!ra&&Fs(e,t)?(e=Ms(),Sr=ea=tt=null,Mt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Os&&t.locale!=="ko"?null:t.data;default:return null}}var Rd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Rd[e.type]:t==="textarea"}function Hs(e,t,n,r){ys(r),t=Fr(t,"onChange"),0<t.length&&(n=new ta("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Pn=null,Fn=null;function Nd(e){Ks(e,0)}function ro(e){var t=Wt(e);if(us(t))return e}function Ld(e,t){if(e==="change")return t}var js=!1;if(Ve){var bo;if(Ve){var xo="oninput"in document;if(!xo){var nl=document.createElement("div");nl.setAttribute("oninput","return;"),xo=typeof nl.oninput=="function"}bo=xo}else bo=!1;js=bo&&(!document.documentMode||9<document.documentMode)}function rl(){Pn&&(Pn.detachEvent("onpropertychange",zs),Fn=Pn=null)}function zs(e){if(e.propertyName==="value"&&ro(Fn)){var t=[];Hs(t,Fn,e,$i(e)),ks(Nd,t)}}function Md(e,t,n){e==="focusin"?(rl(),Pn=t,Fn=n,Pn.attachEvent("onpropertychange",zs)):e==="focusout"&&rl()}function Od(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ro(Fn)}function Fd(e,t){if(e==="click")return ro(t)}function Wd(e,t){if(e==="input"||e==="change")return ro(t)}function Hd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ne=typeof Object.is=="function"?Object.is:Hd;function Wn(e,t){if(Ne(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!qo.call(t,o)||!Ne(e[o],t[o]))return!1}return!0}function ol(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function il(e,t){var n=ol(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ol(n)}}function Bs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gs(){for(var e=window,t=xr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=xr(e.document)}return t}function oa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function jd(e){var t=Gs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Bs(n.ownerDocument.documentElement,n)){if(r!==null&&oa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=il(n,i);var a=il(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var zd=Ve&&"documentMode"in document&&11>=document.documentMode,Ot=null,fi=null,En=null,pi=!1;function al(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pi||Ot==null||Ot!==xr(r)||(r=Ot,"selectionStart"in r&&oa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),En&&Wn(En,r)||(En=r,r=Fr(fi,"onSelect"),0<r.length&&(t=new ta("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ot)))}function ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ft={animationend:ur("Animation","AnimationEnd"),animationiteration:ur("Animation","AnimationIteration"),animationstart:ur("Animation","AnimationStart"),transitionend:ur("Transition","TransitionEnd")},Do={},Us={};Ve&&(Us=document.createElement("div").style,"AnimationEvent"in window||(delete Ft.animationend.animation,delete Ft.animationiteration.animation,delete Ft.animationstart.animation),"TransitionEvent"in window||delete Ft.transitionend.transition);function oo(e){if(Do[e])return Do[e];if(!Ft[e])return e;var t=Ft[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Us)return Do[e]=t[n];return e}var Vs=oo("animationend"),Qs=oo("animationiteration"),qs=oo("animationstart"),Ys=oo("transitionend"),$s=new Map,ll="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pt(e,t){$s.set(e,t),xt(t,[e])}for(var Ro=0;Ro<ll.length;Ro++){var No=ll[Ro],Bd=No.toLowerCase(),Gd=No[0].toUpperCase()+No.slice(1);pt(Bd,"on"+Gd)}pt(Vs,"onAnimationEnd");pt(Qs,"onAnimationIteration");pt(qs,"onAnimationStart");pt("dblclick","onDoubleClick");pt("focusin","onFocus");pt("focusout","onBlur");pt(Ys,"onTransitionEnd");Zt("onMouseEnter",["mouseout","mouseover"]);Zt("onMouseLeave",["mouseout","mouseover"]);Zt("onPointerEnter",["pointerout","pointerover"]);Zt("onPointerLeave",["pointerout","pointerover"]);xt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xt("onBeforeInput",["compositionend","keypress","textInput","paste"]);xt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ud=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sn));function sl(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Bc(r,t,void 0,e),e.currentTarget=null}function Ks(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;sl(o,l,c),i=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,c=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;sl(o,l,c),i=s}}}if(Rr)throw e=si,Rr=!1,si=null,e}function M(e,t){var n=t[vi];n===void 0&&(n=t[vi]=new Set);var r=e+"__bubble";n.has(r)||(Zs(t,e,2,!1),n.add(r))}function Lo(e,t,n){var r=0;t&&(r|=4),Zs(n,e,r,t)}var cr="_reactListening"+Math.random().toString(36).slice(2);function Hn(e){if(!e[cr]){e[cr]=!0,os.forEach(function(n){n!=="selectionchange"&&(Ud.has(n)||Lo(n,!1,e),Lo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[cr]||(t[cr]=!0,Lo("selectionchange",!1,t))}}function Zs(e,t,n,r){switch(Ls(t)){case 1:var o=od;break;case 4:o=id;break;default:o=Ji}n=o.bind(null,t,n,e),o=void 0,!li||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Mo(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;a=a.return}for(;l!==null;){if(a=kt(l),a===null)return;if(s=a.tag,s===5||s===6){r=i=a;continue e}l=l.parentNode}}r=r.return}ks(function(){var c=i,h=$i(n),m=[];e:{var p=$s.get(e);if(p!==void 0){var w=ta,v=e;switch(e){case"keypress":if(Cr(n)===0)break e;case"keydown":case"keyup":w=kd;break;case"focusin":v="focus",w=Io;break;case"focusout":v="blur",w=Io;break;case"beforeblur":case"afterblur":w=Io;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Ka;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=sd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Td;break;case Vs:case Qs:case qs:w=dd;break;case Ys:w=Pd;break;case"scroll":w=ad;break;case"wheel":w=Ad;break;case"copy":case"cut":case"paste":w=pd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Xa}var k=(t&4)!==0,F=!k&&e==="scroll",d=k?p!==null?p+"Capture":null:p;k=[];for(var u=c,f;u!==null;){f=u;var y=f.stateNode;if(f.tag===5&&y!==null&&(f=y,d!==null&&(y=Nn(u,d),y!=null&&k.push(jn(u,y,f)))),F)break;u=u.return}0<k.length&&(p=new w(p,v,null,n,h),m.push({event:p,listeners:k}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",p&&n!==ii&&(v=n.relatedTarget||n.fromElement)&&(kt(v)||v[Qe]))break e;if((w||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,w?(v=n.relatedTarget||n.toElement,w=c,v=v?kt(v):null,v!==null&&(F=Dt(v),v!==F||v.tag!==5&&v.tag!==6)&&(v=null)):(w=null,v=c),w!==v)){if(k=Ka,y="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(k=Xa,y="onPointerLeave",d="onPointerEnter",u="pointer"),F=w==null?p:Wt(w),f=v==null?p:Wt(v),p=new k(y,u+"leave",w,n,h),p.target=F,p.relatedTarget=f,y=null,kt(h)===c&&(k=new k(d,u+"enter",v,n,h),k.target=f,k.relatedTarget=F,y=k),F=y,w&&v)t:{for(k=w,d=v,u=0,f=k;f;f=Rt(f))u++;for(f=0,y=d;y;y=Rt(y))f++;for(;0<u-f;)k=Rt(k),u--;for(;0<f-u;)d=Rt(d),f--;for(;u--;){if(k===d||d!==null&&k===d.alternate)break t;k=Rt(k),d=Rt(d)}k=null}else k=null;w!==null&&ul(m,p,w,k,!1),v!==null&&F!==null&&ul(m,F,v,k,!0)}}e:{if(p=c?Wt(c):window,w=p.nodeName&&p.nodeName.toLowerCase(),w==="select"||w==="input"&&p.type==="file")var T=Ld;else if(tl(p))if(js)T=Wd;else{T=Od;var P=Md}else(w=p.nodeName)&&w.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(T=Fd);if(T&&(T=T(e,c))){Hs(m,T,n,h);break e}P&&P(e,p,c),e==="focusout"&&(P=p._wrapperState)&&P.controlled&&p.type==="number"&&ei(p,"number",p.value)}switch(P=c?Wt(c):window,e){case"focusin":(tl(P)||P.contentEditable==="true")&&(Ot=P,fi=c,En=null);break;case"focusout":En=fi=Ot=null;break;case"mousedown":pi=!0;break;case"contextmenu":case"mouseup":case"dragend":pi=!1,al(m,n,h);break;case"selectionchange":if(zd)break;case"keydown":case"keyup":al(m,n,h)}var E;if(ra)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Mt?Fs(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(Os&&n.locale!=="ko"&&(Mt||A!=="onCompositionStart"?A==="onCompositionEnd"&&Mt&&(E=Ms()):(tt=h,ea="value"in tt?tt.value:tt.textContent,Mt=!0)),P=Fr(c,A),0<P.length&&(A=new Za(A,e,null,n,h),m.push({event:A,listeners:P}),E?A.data=E:(E=Ws(n),E!==null&&(A.data=E)))),(E=bd?xd(e,n):Dd(e,n))&&(c=Fr(c,"onBeforeInput"),0<c.length&&(h=new Za("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:c}),h.data=E))}Ks(m,t)})}function jn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Fr(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Nn(e,n),i!=null&&r.unshift(jn(e,i,o)),i=Nn(e,t),i!=null&&r.push(jn(e,i,o))),e=e.return}return r}function Rt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ul(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&c!==null&&(l=c,o?(s=Nn(n,i),s!=null&&a.unshift(jn(n,s,l))):o||(s=Nn(n,i),s!=null&&a.push(jn(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Vd=/\r\n?/g,Qd=/\u0000|\uFFFD/g;function cl(e){return(typeof e=="string"?e:""+e).replace(Vd,`
`).replace(Qd,"")}function dr(e,t,n){if(t=cl(t),cl(e)!==t&&n)throw Error(g(425))}function Wr(){}var hi=null,mi=null;function yi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gi=typeof setTimeout=="function"?setTimeout:void 0,qd=typeof clearTimeout=="function"?clearTimeout:void 0,dl=typeof Promise=="function"?Promise:void 0,Yd=typeof queueMicrotask=="function"?queueMicrotask:typeof dl<"u"?function(e){return dl.resolve(null).then(e).catch($d)}:gi;function $d(e){setTimeout(function(){throw e})}function Oo(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),On(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);On(t)}function at(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function fl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ln=Math.random().toString(36).slice(2),Oe="__reactFiber$"+ln,zn="__reactProps$"+ln,Qe="__reactContainer$"+ln,vi="__reactEvents$"+ln,Kd="__reactListeners$"+ln,Zd="__reactHandles$"+ln;function kt(e){var t=e[Oe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Qe]||n[Oe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fl(e);e!==null;){if(n=e[Oe])return n;e=fl(e)}return t}e=n,n=e.parentNode}return null}function Zn(e){return e=e[Oe]||e[Qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Wt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(g(33))}function io(e){return e[zn]||null}var wi=[],Ht=-1;function ht(e){return{current:e}}function O(e){0>Ht||(e.current=wi[Ht],wi[Ht]=null,Ht--)}function L(e,t){Ht++,wi[Ht]=e.current,e.current=t}var ft={},oe=ht(ft),de=ht(!1),Pt=ft;function Xt(e,t){var n=e.type.contextTypes;if(!n)return ft;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function fe(e){return e=e.childContextTypes,e!=null}function Hr(){O(de),O(oe)}function pl(e,t,n){if(oe.current!==ft)throw Error(g(168));L(oe,t),L(de,n)}function Xs(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(g(108,Mc(e)||"Unknown",o));return z({},n,r)}function jr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ft,Pt=oe.current,L(oe,e),L(de,de.current),!0}function hl(e,t,n){var r=e.stateNode;if(!r)throw Error(g(169));n?(e=Xs(e,t,Pt),r.__reactInternalMemoizedMergedChildContext=e,O(de),O(oe),L(oe,e)):O(de),L(de,n)}var ze=null,ao=!1,Fo=!1;function Js(e){ze===null?ze=[e]:ze.push(e)}function Xd(e){ao=!0,Js(e)}function mt(){if(!Fo&&ze!==null){Fo=!0;var e=0,t=N;try{var n=ze;for(N=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ze=null,ao=!1}catch(o){throw ze!==null&&(ze=ze.slice(e+1)),_s(Ki,mt),o}finally{N=t,Fo=!1}}return null}var jt=[],zt=0,zr=null,Br=0,ke=[],Se=0,Et=null,Be=1,Ge="";function vt(e,t){jt[zt++]=Br,jt[zt++]=zr,zr=e,Br=t}function eu(e,t,n){ke[Se++]=Be,ke[Se++]=Ge,ke[Se++]=Et,Et=e;var r=Be;e=Ge;var o=32-De(r)-1;r&=~(1<<o),n+=1;var i=32-De(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Be=1<<32-De(t)+o|n<<o|r,Ge=i+e}else Be=1<<i|n<<o|r,Ge=e}function ia(e){e.return!==null&&(vt(e,1),eu(e,1,0))}function aa(e){for(;e===zr;)zr=jt[--zt],jt[zt]=null,Br=jt[--zt],jt[zt]=null;for(;e===Et;)Et=ke[--Se],ke[Se]=null,Ge=ke[--Se],ke[Se]=null,Be=ke[--Se],ke[Se]=null}var ye=null,me=null,W=!1,xe=null;function tu(e,t){var n=Ce(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ml(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ye=e,me=at(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ye=e,me=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Et!==null?{id:Be,overflow:Ge}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ce(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ye=e,me=null,!0):!1;default:return!1}}function ki(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Si(e){if(W){var t=me;if(t){var n=t;if(!ml(e,t)){if(ki(e))throw Error(g(418));t=at(n.nextSibling);var r=ye;t&&ml(e,t)?tu(r,n):(e.flags=e.flags&-4097|2,W=!1,ye=e)}}else{if(ki(e))throw Error(g(418));e.flags=e.flags&-4097|2,W=!1,ye=e}}}function yl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function fr(e){if(e!==ye)return!1;if(!W)return yl(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yi(e.type,e.memoizedProps)),t&&(t=me)){if(ki(e))throw nu(),Error(g(418));for(;t;)tu(e,t),t=at(t.nextSibling)}if(yl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){me=at(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}me=null}}else me=ye?at(e.stateNode.nextSibling):null;return!0}function nu(){for(var e=me;e;)e=at(e.nextSibling)}function Jt(){me=ye=null,W=!1}function la(e){xe===null?xe=[e]:xe.push(e)}var Jd=$e.ReactCurrentBatchConfig;function mn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(g(309));var r=n.stateNode}if(!r)throw Error(g(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var l=o.refs;a===null?delete l[i]:l[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(g(284));if(!n._owner)throw Error(g(290,e))}return e}function pr(e,t){throw e=Object.prototype.toString.call(t),Error(g(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function gl(e){var t=e._init;return t(e._payload)}function ru(e){function t(d,u){if(e){var f=d.deletions;f===null?(d.deletions=[u],d.flags|=16):f.push(u)}}function n(d,u){if(!e)return null;for(;u!==null;)t(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function o(d,u){return d=ct(d,u),d.index=0,d.sibling=null,d}function i(d,u,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<u?(d.flags|=2,u):f):(d.flags|=2,u)):(d.flags|=1048576,u)}function a(d){return e&&d.alternate===null&&(d.flags|=2),d}function l(d,u,f,y){return u===null||u.tag!==6?(u=Uo(f,d.mode,y),u.return=d,u):(u=o(u,f),u.return=d,u)}function s(d,u,f,y){var T=f.type;return T===Lt?h(d,u,f.props.children,y,f.key):u!==null&&(u.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ze&&gl(T)===u.type)?(y=o(u,f.props),y.ref=mn(d,u,f),y.return=d,y):(y=br(f.type,f.key,f.props,null,d.mode,y),y.ref=mn(d,u,f),y.return=d,y)}function c(d,u,f,y){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=Vo(f,d.mode,y),u.return=d,u):(u=o(u,f.children||[]),u.return=d,u)}function h(d,u,f,y,T){return u===null||u.tag!==7?(u=_t(f,d.mode,y,T),u.return=d,u):(u=o(u,f),u.return=d,u)}function m(d,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Uo(""+u,d.mode,f),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case nr:return f=br(u.type,u.key,u.props,null,d.mode,f),f.ref=mn(d,null,u),f.return=d,f;case Nt:return u=Vo(u,d.mode,f),u.return=d,u;case Ze:var y=u._init;return m(d,y(u._payload),f)}if(wn(u)||cn(u))return u=_t(u,d.mode,f,null),u.return=d,u;pr(d,u)}return null}function p(d,u,f,y){var T=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return T!==null?null:l(d,u,""+f,y);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case nr:return f.key===T?s(d,u,f,y):null;case Nt:return f.key===T?c(d,u,f,y):null;case Ze:return T=f._init,p(d,u,T(f._payload),y)}if(wn(f)||cn(f))return T!==null?null:h(d,u,f,y,null);pr(d,f)}return null}function w(d,u,f,y,T){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(f)||null,l(u,d,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case nr:return d=d.get(y.key===null?f:y.key)||null,s(u,d,y,T);case Nt:return d=d.get(y.key===null?f:y.key)||null,c(u,d,y,T);case Ze:var P=y._init;return w(d,u,f,P(y._payload),T)}if(wn(y)||cn(y))return d=d.get(f)||null,h(u,d,y,T,null);pr(u,y)}return null}function v(d,u,f,y){for(var T=null,P=null,E=u,A=u=0,G=null;E!==null&&A<f.length;A++){E.index>A?(G=E,E=null):G=E.sibling;var D=p(d,E,f[A],y);if(D===null){E===null&&(E=G);break}e&&E&&D.alternate===null&&t(d,E),u=i(D,u,A),P===null?T=D:P.sibling=D,P=D,E=G}if(A===f.length)return n(d,E),W&&vt(d,A),T;if(E===null){for(;A<f.length;A++)E=m(d,f[A],y),E!==null&&(u=i(E,u,A),P===null?T=E:P.sibling=E,P=E);return W&&vt(d,A),T}for(E=r(d,E);A<f.length;A++)G=w(E,d,A,f[A],y),G!==null&&(e&&G.alternate!==null&&E.delete(G.key===null?A:G.key),u=i(G,u,A),P===null?T=G:P.sibling=G,P=G);return e&&E.forEach(function(Ee){return t(d,Ee)}),W&&vt(d,A),T}function k(d,u,f,y){var T=cn(f);if(typeof T!="function")throw Error(g(150));if(f=T.call(f),f==null)throw Error(g(151));for(var P=T=null,E=u,A=u=0,G=null,D=f.next();E!==null&&!D.done;A++,D=f.next()){E.index>A?(G=E,E=null):G=E.sibling;var Ee=p(d,E,D.value,y);if(Ee===null){E===null&&(E=G);break}e&&E&&Ee.alternate===null&&t(d,E),u=i(Ee,u,A),P===null?T=Ee:P.sibling=Ee,P=Ee,E=G}if(D.done)return n(d,E),W&&vt(d,A),T;if(E===null){for(;!D.done;A++,D=f.next())D=m(d,D.value,y),D!==null&&(u=i(D,u,A),P===null?T=D:P.sibling=D,P=D);return W&&vt(d,A),T}for(E=r(d,E);!D.done;A++,D=f.next())D=w(E,d,A,D.value,y),D!==null&&(e&&D.alternate!==null&&E.delete(D.key===null?A:D.key),u=i(D,u,A),P===null?T=D:P.sibling=D,P=D);return e&&E.forEach(function(sn){return t(d,sn)}),W&&vt(d,A),T}function F(d,u,f,y){if(typeof f=="object"&&f!==null&&f.type===Lt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case nr:e:{for(var T=f.key,P=u;P!==null;){if(P.key===T){if(T=f.type,T===Lt){if(P.tag===7){n(d,P.sibling),u=o(P,f.props.children),u.return=d,d=u;break e}}else if(P.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ze&&gl(T)===P.type){n(d,P.sibling),u=o(P,f.props),u.ref=mn(d,P,f),u.return=d,d=u;break e}n(d,P);break}else t(d,P);P=P.sibling}f.type===Lt?(u=_t(f.props.children,d.mode,y,f.key),u.return=d,d=u):(y=br(f.type,f.key,f.props,null,d.mode,y),y.ref=mn(d,u,f),y.return=d,d=y)}return a(d);case Nt:e:{for(P=f.key;u!==null;){if(u.key===P)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){n(d,u.sibling),u=o(u,f.children||[]),u.return=d,d=u;break e}else{n(d,u);break}else t(d,u);u=u.sibling}u=Vo(f,d.mode,y),u.return=d,d=u}return a(d);case Ze:return P=f._init,F(d,u,P(f._payload),y)}if(wn(f))return v(d,u,f,y);if(cn(f))return k(d,u,f,y);pr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(n(d,u.sibling),u=o(u,f),u.return=d,d=u):(n(d,u),u=Uo(f,d.mode,y),u.return=d,d=u),a(d)):n(d,u)}return F}var en=ru(!0),ou=ru(!1),Gr=ht(null),Ur=null,Bt=null,sa=null;function ua(){sa=Bt=Ur=null}function ca(e){var t=Gr.current;O(Gr),e._currentValue=t}function Ci(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function $t(e,t){Ur=e,sa=Bt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ce=!0),e.firstContext=null)}function _e(e){var t=e._currentValue;if(sa!==e)if(e={context:e,memoizedValue:t,next:null},Bt===null){if(Ur===null)throw Error(g(308));Bt=e,Ur.dependencies={lanes:0,firstContext:e}}else Bt=Bt.next=e;return t}var St=null;function da(e){St===null?St=[e]:St.push(e)}function iu(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,da(t)):(n.next=o.next,o.next=n),t.interleaved=n,qe(e,r)}function qe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Xe=!1;function fa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function au(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ue(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function lt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,qe(e,n)}return o=r.interleaved,o===null?(t.next=t,da(r)):(t.next=o.next,o.next=t),r.interleaved=t,qe(e,n)}function Tr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zi(e,n)}}function vl(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Vr(e,t,n,r){var o=e.updateQueue;Xe=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,c=s.next;s.next=null,a===null?i=c:a.next=c,a=s;var h=e.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==a&&(l===null?h.firstBaseUpdate=c:l.next=c,h.lastBaseUpdate=s))}if(i!==null){var m=o.baseState;a=0,h=c=s=null,l=i;do{var p=l.lane,w=l.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,k=l;switch(p=t,w=n,k.tag){case 1:if(v=k.payload,typeof v=="function"){m=v.call(w,m,p);break e}m=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=k.payload,p=typeof v=="function"?v.call(w,m,p):v,p==null)break e;m=z({},m,p);break e;case 2:Xe=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[l]:p.push(l))}else w={eventTime:w,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(c=h=w,s=m):h=h.next=w,a|=p;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;p=l,l=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(h===null&&(s=m),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=h,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);It|=a,e.lanes=a,e.memoizedState=m}}function wl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(g(191,o));o.call(r)}}}var Xn={},We=ht(Xn),Bn=ht(Xn),Gn=ht(Xn);function Ct(e){if(e===Xn)throw Error(g(174));return e}function pa(e,t){switch(L(Gn,t),L(Bn,e),L(We,Xn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ni(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ni(t,e)}O(We),L(We,t)}function tn(){O(We),O(Bn),O(Gn)}function lu(e){Ct(Gn.current);var t=Ct(We.current),n=ni(t,e.type);t!==n&&(L(Bn,e),L(We,n))}function ha(e){Bn.current===e&&(O(We),O(Bn))}var H=ht(0);function Qr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wo=[];function ma(){for(var e=0;e<Wo.length;e++)Wo[e]._workInProgressVersionPrimary=null;Wo.length=0}var _r=$e.ReactCurrentDispatcher,Ho=$e.ReactCurrentBatchConfig,At=0,j=null,q=null,K=null,qr=!1,An=!1,Un=0,ef=0;function te(){throw Error(g(321))}function ya(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ne(e[n],t[n]))return!1;return!0}function ga(e,t,n,r,o,i){if(At=i,j=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_r.current=e===null||e.memoizedState===null?of:af,e=n(r,o),An){i=0;do{if(An=!1,Un=0,25<=i)throw Error(g(301));i+=1,K=q=null,t.updateQueue=null,_r.current=lf,e=n(r,o)}while(An)}if(_r.current=Yr,t=q!==null&&q.next!==null,At=0,K=q=j=null,qr=!1,t)throw Error(g(300));return e}function va(){var e=Un!==0;return Un=0,e}function Me(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return K===null?j.memoizedState=K=e:K=K.next=e,K}function Pe(){if(q===null){var e=j.alternate;e=e!==null?e.memoizedState:null}else e=q.next;var t=K===null?j.memoizedState:K.next;if(t!==null)K=t,q=e;else{if(e===null)throw Error(g(310));q=e,e={memoizedState:q.memoizedState,baseState:q.baseState,baseQueue:q.baseQueue,queue:q.queue,next:null},K===null?j.memoizedState=K=e:K=K.next=e}return K}function Vn(e,t){return typeof t=="function"?t(e):t}function jo(e){var t=Pe(),n=t.queue;if(n===null)throw Error(g(311));n.lastRenderedReducer=e;var r=q,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=a=null,s=null,c=i;do{var h=c.lane;if((At&h)===h)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(l=s=m,a=r):s=s.next=m,j.lanes|=h,It|=h}c=c.next}while(c!==null&&c!==i);s===null?a=r:s.next=l,Ne(r,t.memoizedState)||(ce=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,j.lanes|=i,It|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function zo(e){var t=Pe(),n=t.queue;if(n===null)throw Error(g(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);Ne(i,t.memoizedState)||(ce=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function su(){}function uu(e,t){var n=j,r=Pe(),o=t(),i=!Ne(r.memoizedState,o);if(i&&(r.memoizedState=o,ce=!0),r=r.queue,wa(fu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||K!==null&&K.memoizedState.tag&1){if(n.flags|=2048,Qn(9,du.bind(null,n,r,o,t),void 0,null),Z===null)throw Error(g(349));At&30||cu(n,t,o)}return o}function cu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=j.updateQueue,t===null?(t={lastEffect:null,stores:null},j.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function du(e,t,n,r){t.value=n,t.getSnapshot=r,pu(t)&&hu(e)}function fu(e,t,n){return n(function(){pu(t)&&hu(e)})}function pu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ne(e,n)}catch{return!0}}function hu(e){var t=qe(e,1);t!==null&&Re(t,e,1,-1)}function kl(e){var t=Me();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vn,lastRenderedState:e},t.queue=e,e=e.dispatch=rf.bind(null,j,e),[t.memoizedState,e]}function Qn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=j.updateQueue,t===null?(t={lastEffect:null,stores:null},j.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function mu(){return Pe().memoizedState}function Pr(e,t,n,r){var o=Me();j.flags|=e,o.memoizedState=Qn(1|t,n,void 0,r===void 0?null:r)}function lo(e,t,n,r){var o=Pe();r=r===void 0?null:r;var i=void 0;if(q!==null){var a=q.memoizedState;if(i=a.destroy,r!==null&&ya(r,a.deps)){o.memoizedState=Qn(t,n,i,r);return}}j.flags|=e,o.memoizedState=Qn(1|t,n,i,r)}function Sl(e,t){return Pr(8390656,8,e,t)}function wa(e,t){return lo(2048,8,e,t)}function yu(e,t){return lo(4,2,e,t)}function gu(e,t){return lo(4,4,e,t)}function vu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wu(e,t,n){return n=n!=null?n.concat([e]):null,lo(4,4,vu.bind(null,t,e),n)}function ka(){}function ku(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ya(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Su(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ya(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Cu(e,t,n){return At&21?(Ne(n,t)||(n=As(),j.lanes|=n,It|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ce=!0),e.memoizedState=n)}function tf(e,t){var n=N;N=n!==0&&4>n?n:4,e(!0);var r=Ho.transition;Ho.transition={};try{e(!1),t()}finally{N=n,Ho.transition=r}}function Tu(){return Pe().memoizedState}function nf(e,t,n){var r=ut(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_u(e))Pu(t,n);else if(n=iu(e,t,n,r),n!==null){var o=ae();Re(n,e,r,o),Eu(n,t,r)}}function rf(e,t,n){var r=ut(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_u(e))Pu(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,n);if(o.hasEagerState=!0,o.eagerState=l,Ne(l,a)){var s=t.interleaved;s===null?(o.next=o,da(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=iu(e,t,o,r),n!==null&&(o=ae(),Re(n,e,r,o),Eu(n,t,r))}}function _u(e){var t=e.alternate;return e===j||t!==null&&t===j}function Pu(e,t){An=qr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Eu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zi(e,n)}}var Yr={readContext:_e,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useInsertionEffect:te,useLayoutEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useMutableSource:te,useSyncExternalStore:te,useId:te,unstable_isNewReconciler:!1},of={readContext:_e,useCallback:function(e,t){return Me().memoizedState=[e,t===void 0?null:t],e},useContext:_e,useEffect:Sl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Pr(4194308,4,vu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Pr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Pr(4,2,e,t)},useMemo:function(e,t){var n=Me();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Me();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=nf.bind(null,j,e),[r.memoizedState,e]},useRef:function(e){var t=Me();return e={current:e},t.memoizedState=e},useState:kl,useDebugValue:ka,useDeferredValue:function(e){return Me().memoizedState=e},useTransition:function(){var e=kl(!1),t=e[0];return e=tf.bind(null,e[1]),Me().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=j,o=Me();if(W){if(n===void 0)throw Error(g(407));n=n()}else{if(n=t(),Z===null)throw Error(g(349));At&30||cu(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Sl(fu.bind(null,r,i,e),[e]),r.flags|=2048,Qn(9,du.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Me(),t=Z.identifierPrefix;if(W){var n=Ge,r=Be;n=(r&~(1<<32-De(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Un++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ef++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},af={readContext:_e,useCallback:ku,useContext:_e,useEffect:wa,useImperativeHandle:wu,useInsertionEffect:yu,useLayoutEffect:gu,useMemo:Su,useReducer:jo,useRef:mu,useState:function(){return jo(Vn)},useDebugValue:ka,useDeferredValue:function(e){var t=Pe();return Cu(t,q.memoizedState,e)},useTransition:function(){var e=jo(Vn)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:su,useSyncExternalStore:uu,useId:Tu,unstable_isNewReconciler:!1},lf={readContext:_e,useCallback:ku,useContext:_e,useEffect:wa,useImperativeHandle:wu,useInsertionEffect:yu,useLayoutEffect:gu,useMemo:Su,useReducer:zo,useRef:mu,useState:function(){return zo(Vn)},useDebugValue:ka,useDeferredValue:function(e){var t=Pe();return q===null?t.memoizedState=e:Cu(t,q.memoizedState,e)},useTransition:function(){var e=zo(Vn)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:su,useSyncExternalStore:uu,useId:Tu,unstable_isNewReconciler:!1};function Ie(e,t){if(e&&e.defaultProps){t=z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ti(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var so={isMounted:function(e){return(e=e._reactInternals)?Dt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ae(),o=ut(e),i=Ue(r,o);i.payload=t,n!=null&&(i.callback=n),t=lt(e,i,o),t!==null&&(Re(t,e,o,r),Tr(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ae(),o=ut(e),i=Ue(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=lt(e,i,o),t!==null&&(Re(t,e,o,r),Tr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ae(),r=ut(e),o=Ue(n,r);o.tag=2,t!=null&&(o.callback=t),t=lt(e,o,r),t!==null&&(Re(t,e,r,n),Tr(t,e,r))}};function Cl(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!Wn(n,r)||!Wn(o,i):!0}function Au(e,t,n){var r=!1,o=ft,i=t.contextType;return typeof i=="object"&&i!==null?i=_e(i):(o=fe(t)?Pt:oe.current,r=t.contextTypes,i=(r=r!=null)?Xt(e,o):ft),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=so,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Tl(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&so.enqueueReplaceState(t,t.state,null)}function _i(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},fa(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=_e(i):(i=fe(t)?Pt:oe.current,o.context=Xt(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ti(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&so.enqueueReplaceState(o,o.state,null),Vr(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function nn(e,t){try{var n="",r=t;do n+=Lc(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Bo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Pi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var sf=typeof WeakMap=="function"?WeakMap:Map;function Iu(e,t,n){n=Ue(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Kr||(Kr=!0,Mi=r),Pi(e,t)},n}function bu(e,t,n){n=Ue(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Pi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Pi(e,t),typeof r!="function"&&(st===null?st=new Set([this]):st.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function _l(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new sf;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Cf.bind(null,e,t,n),t.then(e,e))}function Pl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function El(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ue(-1,1),t.tag=2,lt(n,t,1))),n.lanes|=1),e)}var uf=$e.ReactCurrentOwner,ce=!1;function ie(e,t,n,r){t.child=e===null?ou(t,null,n,r):en(t,e.child,n,r)}function Al(e,t,n,r,o){n=n.render;var i=t.ref;return $t(t,o),r=ga(e,t,n,r,i,o),n=va(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ye(e,t,o)):(W&&n&&ia(t),t.flags|=1,ie(e,t,r,o),t.child)}function Il(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ia(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,xu(e,t,i,r,o)):(e=br(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Wn,n(a,r)&&e.ref===t.ref)return Ye(e,t,o)}return t.flags|=1,e=ct(i,r),e.ref=t.ref,e.return=t,t.child=e}function xu(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Wn(i,r)&&e.ref===t.ref)if(ce=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(ce=!0);else return t.lanes=e.lanes,Ye(e,t,o)}return Ei(e,t,n,r,o)}function Du(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},L(Ut,he),he|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,L(Ut,he),he|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,L(Ut,he),he|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,L(Ut,he),he|=r;return ie(e,t,o,n),t.child}function Ru(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ei(e,t,n,r,o){var i=fe(n)?Pt:oe.current;return i=Xt(t,i),$t(t,o),n=ga(e,t,n,r,i,o),r=va(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ye(e,t,o)):(W&&r&&ia(t),t.flags|=1,ie(e,t,n,o),t.child)}function bl(e,t,n,r,o){if(fe(n)){var i=!0;jr(t)}else i=!1;if($t(t,o),t.stateNode===null)Er(e,t),Au(t,n,r),_i(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=_e(c):(c=fe(n)?Pt:oe.current,c=Xt(t,c));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==c)&&Tl(t,a,r,c),Xe=!1;var p=t.memoizedState;a.state=p,Vr(t,r,a,o),s=t.memoizedState,l!==r||p!==s||de.current||Xe?(typeof h=="function"&&(Ti(t,n,h,r),s=t.memoizedState),(l=Xe||Cl(t,n,l,r,p,s,c))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=c,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,au(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Ie(t.type,l),a.props=c,m=t.pendingProps,p=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=_e(s):(s=fe(n)?Pt:oe.current,s=Xt(t,s));var w=n.getDerivedStateFromProps;(h=typeof w=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==m||p!==s)&&Tl(t,a,r,s),Xe=!1,p=t.memoizedState,a.state=p,Vr(t,r,a,o);var v=t.memoizedState;l!==m||p!==v||de.current||Xe?(typeof w=="function"&&(Ti(t,n,w,r),v=t.memoizedState),(c=Xe||Cl(t,n,c,r,p,v,s)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=s,r=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Ai(e,t,n,r,i,o)}function Ai(e,t,n,r,o,i){Ru(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&hl(t,n,!1),Ye(e,t,i);r=t.stateNode,uf.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=en(t,e.child,null,i),t.child=en(t,null,l,i)):ie(e,t,l,i),t.memoizedState=r.state,o&&hl(t,n,!0),t.child}function Nu(e){var t=e.stateNode;t.pendingContext?pl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&pl(e,t.context,!1),pa(e,t.containerInfo)}function xl(e,t,n,r,o){return Jt(),la(o),t.flags|=256,ie(e,t,n,r),t.child}var Ii={dehydrated:null,treeContext:null,retryLane:0};function bi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Lu(e,t,n){var r=t.pendingProps,o=H.current,i=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),L(H,o&1),e===null)return Si(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=fo(a,r,0,null),e=_t(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=bi(n),t.memoizedState=Ii,e):Sa(t,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return cf(e,t,a,r,l,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=ct(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=ct(l,i):(i=_t(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?bi(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Ii,r}return i=e.child,e=i.sibling,r=ct(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Sa(e,t){return t=fo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hr(e,t,n,r){return r!==null&&la(r),en(t,e.child,null,n),e=Sa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function cf(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Bo(Error(g(422))),hr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=fo({mode:"visible",children:r.children},o,0,null),i=_t(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&en(t,e.child,null,a),t.child.memoizedState=bi(a),t.memoizedState=Ii,i);if(!(t.mode&1))return hr(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(g(419)),r=Bo(i,r,void 0),hr(e,t,a,r)}if(l=(a&e.childLanes)!==0,ce||l){if(r=Z,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,qe(e,o),Re(r,e,o,-1))}return Aa(),r=Bo(Error(g(421))),hr(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Tf.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,me=at(o.nextSibling),ye=t,W=!0,xe=null,e!==null&&(ke[Se++]=Be,ke[Se++]=Ge,ke[Se++]=Et,Be=e.id,Ge=e.overflow,Et=t),t=Sa(t,r.children),t.flags|=4096,t)}function Dl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ci(e.return,t,n)}function Go(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Mu(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ie(e,t,r.children,n),r=H.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dl(e,n,t);else if(e.tag===19)Dl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(L(H,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Qr(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Go(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Qr(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Go(t,!0,n,null,i);break;case"together":Go(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Er(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ye(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),It|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(g(153));if(t.child!==null){for(e=t.child,n=ct(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ct(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function df(e,t,n){switch(t.tag){case 3:Nu(t),Jt();break;case 5:lu(t);break;case 1:fe(t.type)&&jr(t);break;case 4:pa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;L(Gr,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(L(H,H.current&1),t.flags|=128,null):n&t.child.childLanes?Lu(e,t,n):(L(H,H.current&1),e=Ye(e,t,n),e!==null?e.sibling:null);L(H,H.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Mu(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),L(H,H.current),r)break;return null;case 22:case 23:return t.lanes=0,Du(e,t,n)}return Ye(e,t,n)}var Ou,xi,Fu,Wu;Ou=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xi=function(){};Fu=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Ct(We.current);var i=null;switch(n){case"input":o=Xo(e,o),r=Xo(e,r),i=[];break;case"select":o=z({},o,{value:void 0}),r=z({},r,{value:void 0}),i=[];break;case"textarea":o=ti(e,o),r=ti(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Wr)}ri(n,r);var a;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var l=o[c];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Dn.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(l=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&s!==l&&(s!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(i||(i=[]),i.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Dn.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&M("scroll",e),i||l===s||(i=[])):(i=i||[]).push(c,s))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Wu=function(e,t,n,r){n!==r&&(t.flags|=4)};function yn(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ff(e,t,n){var r=t.pendingProps;switch(aa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(t),null;case 1:return fe(t.type)&&Hr(),ne(t),null;case 3:return r=t.stateNode,tn(),O(de),O(oe),ma(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,xe!==null&&(Wi(xe),xe=null))),xi(e,t),ne(t),null;case 5:ha(t);var o=Ct(Gn.current);if(n=t.type,e!==null&&t.stateNode!=null)Fu(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(g(166));return ne(t),null}if(e=Ct(We.current),fr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Oe]=t,r[zn]=i,e=(t.mode&1)!==0,n){case"dialog":M("cancel",r),M("close",r);break;case"iframe":case"object":case"embed":M("load",r);break;case"video":case"audio":for(o=0;o<Sn.length;o++)M(Sn[o],r);break;case"source":M("error",r);break;case"img":case"image":case"link":M("error",r),M("load",r);break;case"details":M("toggle",r);break;case"input":ja(r,i),M("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},M("invalid",r);break;case"textarea":Ba(r,i),M("invalid",r)}ri(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&dr(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&dr(r.textContent,l,e),o=["children",""+l]):Dn.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&M("scroll",r)}switch(n){case"input":rr(r),za(r,i,!0);break;case"textarea":rr(r),Ga(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Wr)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Oe]=t,e[zn]=r,Ou(e,t,!1,!1),t.stateNode=e;e:{switch(a=oi(n,r),n){case"dialog":M("cancel",e),M("close",e),o=r;break;case"iframe":case"object":case"embed":M("load",e),o=r;break;case"video":case"audio":for(o=0;o<Sn.length;o++)M(Sn[o],e);o=r;break;case"source":M("error",e),o=r;break;case"img":case"image":case"link":M("error",e),M("load",e),o=r;break;case"details":M("toggle",e),o=r;break;case"input":ja(e,r),o=Xo(e,r),M("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=z({},r,{value:void 0}),M("invalid",e);break;case"textarea":Ba(e,r),o=ti(e,r),M("invalid",e);break;default:o=r}ri(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?ms(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&ps(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Rn(e,s):typeof s=="number"&&Rn(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Dn.hasOwnProperty(i)?s!=null&&i==="onScroll"&&M("scroll",e):s!=null&&Vi(e,i,s,a))}switch(n){case"input":rr(e),za(e,r,!1);break;case"textarea":rr(e),Ga(e);break;case"option":r.value!=null&&e.setAttribute("value",""+dt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Vt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Vt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Wr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ne(t),null;case 6:if(e&&t.stateNode!=null)Wu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(g(166));if(n=Ct(Gn.current),Ct(We.current),fr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Oe]=t,(i=r.nodeValue!==n)&&(e=ye,e!==null))switch(e.tag){case 3:dr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&dr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Oe]=t,t.stateNode=r}return ne(t),null;case 13:if(O(H),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&me!==null&&t.mode&1&&!(t.flags&128))nu(),Jt(),t.flags|=98560,i=!1;else if(i=fr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(g(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(g(317));i[Oe]=t}else Jt(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ne(t),i=!1}else xe!==null&&(Wi(xe),xe=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?Y===0&&(Y=3):Aa())),t.updateQueue!==null&&(t.flags|=4),ne(t),null);case 4:return tn(),xi(e,t),e===null&&Hn(t.stateNode.containerInfo),ne(t),null;case 10:return ca(t.type._context),ne(t),null;case 17:return fe(t.type)&&Hr(),ne(t),null;case 19:if(O(H),i=t.memoizedState,i===null)return ne(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)yn(i,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Qr(e),a!==null){for(t.flags|=128,yn(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return L(H,H.current&1|2),t.child}e=e.sibling}i.tail!==null&&V()>rn&&(t.flags|=128,r=!0,yn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Qr(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!W)return ne(t),null}else 2*V()-i.renderingStartTime>rn&&n!==1073741824&&(t.flags|=128,r=!0,yn(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=V(),t.sibling=null,n=H.current,L(H,r?n&1|2:n&1),t):(ne(t),null);case 22:case 23:return Ea(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?he&1073741824&&(ne(t),t.subtreeFlags&6&&(t.flags|=8192)):ne(t),null;case 24:return null;case 25:return null}throw Error(g(156,t.tag))}function pf(e,t){switch(aa(t),t.tag){case 1:return fe(t.type)&&Hr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tn(),O(de),O(oe),ma(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ha(t),null;case 13:if(O(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(g(340));Jt()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(H),null;case 4:return tn(),null;case 10:return ca(t.type._context),null;case 22:case 23:return Ea(),null;case 24:return null;default:return null}}var mr=!1,re=!1,hf=typeof WeakSet=="function"?WeakSet:Set,C=null;function Gt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){B(e,t,r)}else n.current=null}function Di(e,t,n){try{n()}catch(r){B(e,t,r)}}var Rl=!1;function mf(e,t){if(hi=Mr,e=Gs(),oa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,c=0,h=0,m=e,p=null;t:for(;;){for(var w;m!==n||o!==0&&m.nodeType!==3||(l=a+o),m!==i||r!==0&&m.nodeType!==3||(s=a+r),m.nodeType===3&&(a+=m.nodeValue.length),(w=m.firstChild)!==null;)p=m,m=w;for(;;){if(m===e)break t;if(p===n&&++c===o&&(l=a),p===i&&++h===r&&(s=a),(w=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=w}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(mi={focusedElem:e,selectionRange:n},Mr=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var k=v.memoizedProps,F=v.memoizedState,d=t.stateNode,u=d.getSnapshotBeforeUpdate(t.elementType===t.type?k:Ie(t.type,k),F);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(g(163))}}catch(y){B(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return v=Rl,Rl=!1,v}function In(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Di(t,n,i)}o=o.next}while(o!==r)}}function uo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ri(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Hu(e){var t=e.alternate;t!==null&&(e.alternate=null,Hu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Oe],delete t[zn],delete t[vi],delete t[Kd],delete t[Zd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ju(e){return e.tag===5||e.tag===3||e.tag===4}function Nl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ju(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ni(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Wr));else if(r!==4&&(e=e.child,e!==null))for(Ni(e,t,n),e=e.sibling;e!==null;)Ni(e,t,n),e=e.sibling}function Li(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Li(e,t,n),e=e.sibling;e!==null;)Li(e,t,n),e=e.sibling}var X=null,be=!1;function Ke(e,t,n){for(n=n.child;n!==null;)zu(e,t,n),n=n.sibling}function zu(e,t,n){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(to,n)}catch{}switch(n.tag){case 5:re||Gt(n,t);case 6:var r=X,o=be;X=null,Ke(e,t,n),X=r,be=o,X!==null&&(be?(e=X,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):X.removeChild(n.stateNode));break;case 18:X!==null&&(be?(e=X,n=n.stateNode,e.nodeType===8?Oo(e.parentNode,n):e.nodeType===1&&Oo(e,n),On(e)):Oo(X,n.stateNode));break;case 4:r=X,o=be,X=n.stateNode.containerInfo,be=!0,Ke(e,t,n),X=r,be=o;break;case 0:case 11:case 14:case 15:if(!re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Di(n,t,a),o=o.next}while(o!==r)}Ke(e,t,n);break;case 1:if(!re&&(Gt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){B(n,t,l)}Ke(e,t,n);break;case 21:Ke(e,t,n);break;case 22:n.mode&1?(re=(r=re)||n.memoizedState!==null,Ke(e,t,n),re=r):Ke(e,t,n);break;default:Ke(e,t,n)}}function Ll(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new hf),t.forEach(function(r){var o=_f.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ae(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:X=l.stateNode,be=!1;break e;case 3:X=l.stateNode.containerInfo,be=!0;break e;case 4:X=l.stateNode.containerInfo,be=!0;break e}l=l.return}if(X===null)throw Error(g(160));zu(i,a,o),X=null,be=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(c){B(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Bu(t,e),t=t.sibling}function Bu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ae(t,e),Le(e),r&4){try{In(3,e,e.return),uo(3,e)}catch(k){B(e,e.return,k)}try{In(5,e,e.return)}catch(k){B(e,e.return,k)}}break;case 1:Ae(t,e),Le(e),r&512&&n!==null&&Gt(n,n.return);break;case 5:if(Ae(t,e),Le(e),r&512&&n!==null&&Gt(n,n.return),e.flags&32){var o=e.stateNode;try{Rn(o,"")}catch(k){B(e,e.return,k)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&cs(o,i),oi(l,a);var c=oi(l,i);for(a=0;a<s.length;a+=2){var h=s[a],m=s[a+1];h==="style"?ms(o,m):h==="dangerouslySetInnerHTML"?ps(o,m):h==="children"?Rn(o,m):Vi(o,h,m,c)}switch(l){case"input":Jo(o,i);break;case"textarea":ds(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?Vt(o,!!i.multiple,w,!1):p!==!!i.multiple&&(i.defaultValue!=null?Vt(o,!!i.multiple,i.defaultValue,!0):Vt(o,!!i.multiple,i.multiple?[]:"",!1))}o[zn]=i}catch(k){B(e,e.return,k)}}break;case 6:if(Ae(t,e),Le(e),r&4){if(e.stateNode===null)throw Error(g(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(k){B(e,e.return,k)}}break;case 3:if(Ae(t,e),Le(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{On(t.containerInfo)}catch(k){B(e,e.return,k)}break;case 4:Ae(t,e),Le(e);break;case 13:Ae(t,e),Le(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(_a=V())),r&4&&Ll(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(re=(c=re)||h,Ae(t,e),re=c):Ae(t,e),Le(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(C=e,h=e.child;h!==null;){for(m=C=h;C!==null;){switch(p=C,w=p.child,p.tag){case 0:case 11:case 14:case 15:In(4,p,p.return);break;case 1:Gt(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(k){B(r,n,k)}}break;case 5:Gt(p,p.return);break;case 22:if(p.memoizedState!==null){Ol(m);continue}}w!==null?(w.return=p,C=w):Ol(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{o=m.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,s=m.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=hs("display",a))}catch(k){B(e,e.return,k)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(k){B(e,e.return,k)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ae(t,e),Le(e),r&4&&Ll(e);break;case 21:break;default:Ae(t,e),Le(e)}}function Le(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ju(n)){var r=n;break e}n=n.return}throw Error(g(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Rn(o,""),r.flags&=-33);var i=Nl(e);Li(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Nl(e);Ni(e,l,a);break;default:throw Error(g(161))}}catch(s){B(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yf(e,t,n){C=e,Gu(e)}function Gu(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var o=C,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||mr;if(!a){var l=o.alternate,s=l!==null&&l.memoizedState!==null||re;l=mr;var c=re;if(mr=a,(re=s)&&!c)for(C=o;C!==null;)a=C,s=a.child,a.tag===22&&a.memoizedState!==null?Fl(o):s!==null?(s.return=a,C=s):Fl(o);for(;i!==null;)C=i,Gu(i),i=i.sibling;C=o,mr=l,re=c}Ml(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,C=i):Ml(e)}}function Ml(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:re||uo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!re)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ie(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&wl(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}wl(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&On(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(g(163))}re||t.flags&512&&Ri(t)}catch(p){B(t,t.return,p)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function Ol(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function Fl(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{uo(4,t)}catch(s){B(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){B(t,o,s)}}var i=t.return;try{Ri(t)}catch(s){B(t,i,s)}break;case 5:var a=t.return;try{Ri(t)}catch(s){B(t,a,s)}}}catch(s){B(t,t.return,s)}if(t===e){C=null;break}var l=t.sibling;if(l!==null){l.return=t.return,C=l;break}C=t.return}}var gf=Math.ceil,$r=$e.ReactCurrentDispatcher,Ca=$e.ReactCurrentOwner,Te=$e.ReactCurrentBatchConfig,R=0,Z=null,Q=null,J=0,he=0,Ut=ht(0),Y=0,qn=null,It=0,co=0,Ta=0,bn=null,ue=null,_a=0,rn=1/0,He=null,Kr=!1,Mi=null,st=null,yr=!1,nt=null,Zr=0,xn=0,Oi=null,Ar=-1,Ir=0;function ae(){return R&6?V():Ar!==-1?Ar:Ar=V()}function ut(e){return e.mode&1?R&2&&J!==0?J&-J:Jd.transition!==null?(Ir===0&&(Ir=As()),Ir):(e=N,e!==0||(e=window.event,e=e===void 0?16:Ls(e.type)),e):1}function Re(e,t,n,r){if(50<xn)throw xn=0,Oi=null,Error(g(185));$n(e,n,r),(!(R&2)||e!==Z)&&(e===Z&&(!(R&2)&&(co|=n),Y===4&&et(e,J)),pe(e,r),n===1&&R===0&&!(t.mode&1)&&(rn=V()+500,ao&&mt()))}function pe(e,t){var n=e.callbackNode;Jc(e,t);var r=Lr(e,e===Z?J:0);if(r===0)n!==null&&Qa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Qa(n),t===1)e.tag===0?Xd(Wl.bind(null,e)):Js(Wl.bind(null,e)),Yd(function(){!(R&6)&&mt()}),n=null;else{switch(Is(r)){case 1:n=Ki;break;case 4:n=Ps;break;case 16:n=Nr;break;case 536870912:n=Es;break;default:n=Nr}n=Zu(n,Uu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Uu(e,t){if(Ar=-1,Ir=0,R&6)throw Error(g(327));var n=e.callbackNode;if(Kt()&&e.callbackNode!==n)return null;var r=Lr(e,e===Z?J:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Xr(e,r);else{t=r;var o=R;R|=2;var i=Qu();(Z!==e||J!==t)&&(He=null,rn=V()+500,Tt(e,t));do try{kf();break}catch(l){Vu(e,l)}while(!0);ua(),$r.current=i,R=o,Q!==null?t=0:(Z=null,J=0,t=Y)}if(t!==0){if(t===2&&(o=ui(e),o!==0&&(r=o,t=Fi(e,o))),t===1)throw n=qn,Tt(e,0),et(e,r),pe(e,V()),n;if(t===6)et(e,r);else{if(o=e.current.alternate,!(r&30)&&!vf(o)&&(t=Xr(e,r),t===2&&(i=ui(e),i!==0&&(r=i,t=Fi(e,i))),t===1))throw n=qn,Tt(e,0),et(e,r),pe(e,V()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(g(345));case 2:wt(e,ue,He);break;case 3:if(et(e,r),(r&130023424)===r&&(t=_a+500-V(),10<t)){if(Lr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ae(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=gi(wt.bind(null,e,ue,He),t);break}wt(e,ue,He);break;case 4:if(et(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-De(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=V()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gf(r/1960))-r,10<r){e.timeoutHandle=gi(wt.bind(null,e,ue,He),r);break}wt(e,ue,He);break;case 5:wt(e,ue,He);break;default:throw Error(g(329))}}}return pe(e,V()),e.callbackNode===n?Uu.bind(null,e):null}function Fi(e,t){var n=bn;return e.current.memoizedState.isDehydrated&&(Tt(e,t).flags|=256),e=Xr(e,t),e!==2&&(t=ue,ue=n,t!==null&&Wi(t)),e}function Wi(e){ue===null?ue=e:ue.push.apply(ue,e)}function vf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Ne(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function et(e,t){for(t&=~Ta,t&=~co,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-De(t),r=1<<n;e[n]=-1,t&=~r}}function Wl(e){if(R&6)throw Error(g(327));Kt();var t=Lr(e,0);if(!(t&1))return pe(e,V()),null;var n=Xr(e,t);if(e.tag!==0&&n===2){var r=ui(e);r!==0&&(t=r,n=Fi(e,r))}if(n===1)throw n=qn,Tt(e,0),et(e,t),pe(e,V()),n;if(n===6)throw Error(g(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wt(e,ue,He),pe(e,V()),null}function Pa(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(rn=V()+500,ao&&mt())}}function bt(e){nt!==null&&nt.tag===0&&!(R&6)&&Kt();var t=R;R|=1;var n=Te.transition,r=N;try{if(Te.transition=null,N=1,e)return e()}finally{N=r,Te.transition=n,R=t,!(R&6)&&mt()}}function Ea(){he=Ut.current,O(Ut)}function Tt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,qd(n)),Q!==null)for(n=Q.return;n!==null;){var r=n;switch(aa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Hr();break;case 3:tn(),O(de),O(oe),ma();break;case 5:ha(r);break;case 4:tn();break;case 13:O(H);break;case 19:O(H);break;case 10:ca(r.type._context);break;case 22:case 23:Ea()}n=n.return}if(Z=e,Q=e=ct(e.current,null),J=he=t,Y=0,qn=null,Ta=co=It=0,ue=bn=null,St!==null){for(t=0;t<St.length;t++)if(n=St[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}St=null}return e}function Vu(e,t){do{var n=Q;try{if(ua(),_r.current=Yr,qr){for(var r=j.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}qr=!1}if(At=0,K=q=j=null,An=!1,Un=0,Ca.current=null,n===null||n.return===null){Y=1,qn=t,Q=null;break}e:{var i=e,a=n.return,l=n,s=t;if(t=J,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,h=l,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=Pl(a);if(w!==null){w.flags&=-257,El(w,a,l,i,t),w.mode&1&&_l(i,c,t),t=w,s=c;var v=t.updateQueue;if(v===null){var k=new Set;k.add(s),t.updateQueue=k}else v.add(s);break e}else{if(!(t&1)){_l(i,c,t),Aa();break e}s=Error(g(426))}}else if(W&&l.mode&1){var F=Pl(a);if(F!==null){!(F.flags&65536)&&(F.flags|=256),El(F,a,l,i,t),la(nn(s,l));break e}}i=s=nn(s,l),Y!==4&&(Y=2),bn===null?bn=[i]:bn.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=Iu(i,s,t);vl(i,d);break e;case 1:l=s;var u=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(st===null||!st.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=bu(i,l,t);vl(i,y);break e}}i=i.return}while(i!==null)}Yu(n)}catch(T){t=T,Q===n&&n!==null&&(Q=n=n.return);continue}break}while(!0)}function Qu(){var e=$r.current;return $r.current=Yr,e===null?Yr:e}function Aa(){(Y===0||Y===3||Y===2)&&(Y=4),Z===null||!(It&268435455)&&!(co&268435455)||et(Z,J)}function Xr(e,t){var n=R;R|=2;var r=Qu();(Z!==e||J!==t)&&(He=null,Tt(e,t));do try{wf();break}catch(o){Vu(e,o)}while(!0);if(ua(),R=n,$r.current=r,Q!==null)throw Error(g(261));return Z=null,J=0,Y}function wf(){for(;Q!==null;)qu(Q)}function kf(){for(;Q!==null&&!Uc();)qu(Q)}function qu(e){var t=Ku(e.alternate,e,he);e.memoizedProps=e.pendingProps,t===null?Yu(e):Q=t,Ca.current=null}function Yu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=pf(n,t),n!==null){n.flags&=32767,Q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Y=6,Q=null;return}}else if(n=ff(n,t,he),n!==null){Q=n;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);Y===0&&(Y=5)}function wt(e,t,n){var r=N,o=Te.transition;try{Te.transition=null,N=1,Sf(e,t,n,r)}finally{Te.transition=o,N=r}return null}function Sf(e,t,n,r){do Kt();while(nt!==null);if(R&6)throw Error(g(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(g(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(ed(e,i),e===Z&&(Q=Z=null,J=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yr||(yr=!0,Zu(Nr,function(){return Kt(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Te.transition,Te.transition=null;var a=N;N=1;var l=R;R|=4,Ca.current=null,mf(e,n),Bu(n,e),jd(mi),Mr=!!hi,mi=hi=null,e.current=n,yf(n),Vc(),R=l,N=a,Te.transition=i}else e.current=n;if(yr&&(yr=!1,nt=e,Zr=o),i=e.pendingLanes,i===0&&(st=null),Yc(n.stateNode),pe(e,V()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Kr)throw Kr=!1,e=Mi,Mi=null,e;return Zr&1&&e.tag!==0&&Kt(),i=e.pendingLanes,i&1?e===Oi?xn++:(xn=0,Oi=e):xn=0,mt(),null}function Kt(){if(nt!==null){var e=Is(Zr),t=Te.transition,n=N;try{if(Te.transition=null,N=16>e?16:e,nt===null)var r=!1;else{if(e=nt,nt=null,Zr=0,R&6)throw Error(g(331));var o=R;for(R|=4,C=e.current;C!==null;){var i=C,a=i.child;if(C.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var c=l[s];for(C=c;C!==null;){var h=C;switch(h.tag){case 0:case 11:case 15:In(8,h,i)}var m=h.child;if(m!==null)m.return=h,C=m;else for(;C!==null;){h=C;var p=h.sibling,w=h.return;if(Hu(h),h===c){C=null;break}if(p!==null){p.return=w,C=p;break}C=w}}}var v=i.alternate;if(v!==null){var k=v.child;if(k!==null){v.child=null;do{var F=k.sibling;k.sibling=null,k=F}while(k!==null)}}C=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,C=a;else e:for(;C!==null;){if(i=C,i.flags&2048)switch(i.tag){case 0:case 11:case 15:In(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,C=d;break e}C=i.return}}var u=e.current;for(C=u;C!==null;){a=C;var f=a.child;if(a.subtreeFlags&2064&&f!==null)f.return=a,C=f;else e:for(a=u;C!==null;){if(l=C,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:uo(9,l)}}catch(T){B(l,l.return,T)}if(l===a){C=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,C=y;break e}C=l.return}}if(R=o,mt(),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(to,e)}catch{}r=!0}return r}finally{N=n,Te.transition=t}}return!1}function Hl(e,t,n){t=nn(n,t),t=Iu(e,t,1),e=lt(e,t,1),t=ae(),e!==null&&($n(e,1,t),pe(e,t))}function B(e,t,n){if(e.tag===3)Hl(e,e,n);else for(;t!==null;){if(t.tag===3){Hl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(st===null||!st.has(r))){e=nn(n,e),e=bu(t,e,1),t=lt(t,e,1),e=ae(),t!==null&&($n(t,1,e),pe(t,e));break}}t=t.return}}function Cf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ae(),e.pingedLanes|=e.suspendedLanes&n,Z===e&&(J&n)===n&&(Y===4||Y===3&&(J&130023424)===J&&500>V()-_a?Tt(e,0):Ta|=n),pe(e,t)}function $u(e,t){t===0&&(e.mode&1?(t=ar,ar<<=1,!(ar&130023424)&&(ar=4194304)):t=1);var n=ae();e=qe(e,t),e!==null&&($n(e,t,n),pe(e,n))}function Tf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),$u(e,n)}function _f(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(g(314))}r!==null&&r.delete(t),$u(e,n)}var Ku;Ku=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||de.current)ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ce=!1,df(e,t,n);ce=!!(e.flags&131072)}else ce=!1,W&&t.flags&1048576&&eu(t,Br,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Er(e,t),e=t.pendingProps;var o=Xt(t,oe.current);$t(t,n),o=ga(null,t,r,e,o,n);var i=va();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,fe(r)?(i=!0,jr(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,fa(t),o.updater=so,t.stateNode=o,o._reactInternals=t,_i(t,r,e,n),t=Ai(null,t,r,!0,i,n)):(t.tag=0,W&&i&&ia(t),ie(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Er(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Ef(r),e=Ie(r,e),o){case 0:t=Ei(null,t,r,e,n);break e;case 1:t=bl(null,t,r,e,n);break e;case 11:t=Al(null,t,r,e,n);break e;case 14:t=Il(null,t,r,Ie(r.type,e),n);break e}throw Error(g(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ie(r,o),Ei(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ie(r,o),bl(e,t,r,o,n);case 3:e:{if(Nu(t),e===null)throw Error(g(387));r=t.pendingProps,i=t.memoizedState,o=i.element,au(e,t),Vr(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=nn(Error(g(423)),t),t=xl(e,t,r,n,o);break e}else if(r!==o){o=nn(Error(g(424)),t),t=xl(e,t,r,n,o);break e}else for(me=at(t.stateNode.containerInfo.firstChild),ye=t,W=!0,xe=null,n=ou(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jt(),r===o){t=Ye(e,t,n);break e}ie(e,t,r,n)}t=t.child}return t;case 5:return lu(t),e===null&&Si(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,yi(r,o)?a=null:i!==null&&yi(r,i)&&(t.flags|=32),Ru(e,t),ie(e,t,a,n),t.child;case 6:return e===null&&Si(t),null;case 13:return Lu(e,t,n);case 4:return pa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=en(t,null,r,n):ie(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ie(r,o),Al(e,t,r,o,n);case 7:return ie(e,t,t.pendingProps,n),t.child;case 8:return ie(e,t,t.pendingProps.children,n),t.child;case 12:return ie(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,L(Gr,r._currentValue),r._currentValue=a,i!==null)if(Ne(i.value,a)){if(i.children===o.children&&!de.current){t=Ye(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Ue(-1,n&-n),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?s.next=s:(s.next=h.next,h.next=s),c.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Ci(i.return,n,t),l.lanes|=n;break}s=s.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(g(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Ci(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}ie(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,$t(t,n),o=_e(o),r=r(o),t.flags|=1,ie(e,t,r,n),t.child;case 14:return r=t.type,o=Ie(r,t.pendingProps),o=Ie(r.type,o),Il(e,t,r,o,n);case 15:return xu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ie(r,o),Er(e,t),t.tag=1,fe(r)?(e=!0,jr(t)):e=!1,$t(t,n),Au(t,r,o),_i(t,r,o,n),Ai(null,t,r,!0,e,n);case 19:return Mu(e,t,n);case 22:return Du(e,t,n)}throw Error(g(156,t.tag))};function Zu(e,t){return _s(e,t)}function Pf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,t,n,r){return new Pf(e,t,n,r)}function Ia(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ef(e){if(typeof e=="function")return Ia(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qi)return 11;if(e===Yi)return 14}return 2}function ct(e,t){var n=e.alternate;return n===null?(n=Ce(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function br(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")Ia(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Lt:return _t(n.children,o,i,t);case Qi:a=8,o|=8;break;case Yo:return e=Ce(12,n,t,o|2),e.elementType=Yo,e.lanes=i,e;case $o:return e=Ce(13,n,t,o),e.elementType=$o,e.lanes=i,e;case Ko:return e=Ce(19,n,t,o),e.elementType=Ko,e.lanes=i,e;case ls:return fo(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case is:a=10;break e;case as:a=9;break e;case qi:a=11;break e;case Yi:a=14;break e;case Ze:a=16,r=null;break e}throw Error(g(130,e==null?e:typeof e,""))}return t=Ce(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function _t(e,t,n,r){return e=Ce(7,e,r,t),e.lanes=n,e}function fo(e,t,n,r){return e=Ce(22,e,r,t),e.elementType=ls,e.lanes=n,e.stateNode={isHidden:!1},e}function Uo(e,t,n){return e=Ce(6,e,null,t),e.lanes=n,e}function Vo(e,t,n){return t=Ce(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Af(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Po(0),this.expirationTimes=Po(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Po(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ba(e,t,n,r,o,i,a,l,s){return e=new Af(e,t,n,l,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ce(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fa(i),e}function If(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Nt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Xu(e){if(!e)return ft;e=e._reactInternals;e:{if(Dt(e)!==e||e.tag!==1)throw Error(g(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(g(171))}if(e.tag===1){var n=e.type;if(fe(n))return Xs(e,n,t)}return t}function Ju(e,t,n,r,o,i,a,l,s){return e=ba(n,r,!0,e,o,i,a,l,s),e.context=Xu(null),n=e.current,r=ae(),o=ut(n),i=Ue(r,o),i.callback=t??null,lt(n,i,o),e.current.lanes=o,$n(e,o,r),pe(e,r),e}function po(e,t,n,r){var o=t.current,i=ae(),a=ut(o);return n=Xu(n),t.context===null?t.context=n:t.pendingContext=n,t=Ue(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=lt(o,t,a),e!==null&&(Re(e,o,a,i),Tr(e,o,a)),a}function Jr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function jl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function xa(e,t){jl(e,t),(e=e.alternate)&&jl(e,t)}function bf(){return null}var ec=typeof reportError=="function"?reportError:function(e){console.error(e)};function Da(e){this._internalRoot=e}ho.prototype.render=Da.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(g(409));po(e,t,null,null)};ho.prototype.unmount=Da.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bt(function(){po(null,e,null,null)}),t[Qe]=null}};function ho(e){this._internalRoot=e}ho.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ds();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Je.length&&t!==0&&t<Je[n].priority;n++);Je.splice(n,0,e),n===0&&Ns(e)}};function Ra(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function mo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zl(){}function xf(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Jr(a);i.call(c)}}var a=Ju(t,r,e,0,null,!1,!1,"",zl);return e._reactRootContainer=a,e[Qe]=a.current,Hn(e.nodeType===8?e.parentNode:e),bt(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var c=Jr(s);l.call(c)}}var s=ba(e,0,!1,null,null,!1,!1,"",zl);return e._reactRootContainer=s,e[Qe]=s.current,Hn(e.nodeType===8?e.parentNode:e),bt(function(){po(t,s,n,r)}),s}function yo(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var s=Jr(a);l.call(s)}}po(t,a,e,o)}else a=xf(n,t,e,o,r);return Jr(a)}bs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=kn(t.pendingLanes);n!==0&&(Zi(t,n|1),pe(t,V()),!(R&6)&&(rn=V()+500,mt()))}break;case 13:bt(function(){var r=qe(e,1);if(r!==null){var o=ae();Re(r,e,1,o)}}),xa(e,1)}};Xi=function(e){if(e.tag===13){var t=qe(e,134217728);if(t!==null){var n=ae();Re(t,e,134217728,n)}xa(e,134217728)}};xs=function(e){if(e.tag===13){var t=ut(e),n=qe(e,t);if(n!==null){var r=ae();Re(n,e,t,r)}xa(e,t)}};Ds=function(){return N};Rs=function(e,t){var n=N;try{return N=e,t()}finally{N=n}};ai=function(e,t,n){switch(t){case"input":if(Jo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=io(r);if(!o)throw Error(g(90));us(r),Jo(r,o)}}}break;case"textarea":ds(e,n);break;case"select":t=n.value,t!=null&&Vt(e,!!n.multiple,t,!1)}};vs=Pa;ws=bt;var Df={usingClientEntryPoint:!1,Events:[Zn,Wt,io,ys,gs,Pa]},gn={findFiberByHostInstance:kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rf={bundleType:gn.bundleType,version:gn.version,rendererPackageName:gn.rendererPackageName,rendererConfig:gn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$e.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Cs(e),e===null?null:e.stateNode},findFiberByHostInstance:gn.findFiberByHostInstance||bf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gr.isDisabled&&gr.supportsFiber)try{to=gr.inject(Rf),Fe=gr}catch{}}ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Df;ve.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ra(t))throw Error(g(200));return If(e,t,null,n)};ve.createRoot=function(e,t){if(!Ra(e))throw Error(g(299));var n=!1,r="",o=ec;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ba(e,1,!1,null,null,n,!1,r,o),e[Qe]=t.current,Hn(e.nodeType===8?e.parentNode:e),new Da(t)};ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(g(188)):(e=Object.keys(e).join(","),Error(g(268,e)));return e=Cs(t),e=e===null?null:e.stateNode,e};ve.flushSync=function(e){return bt(e)};ve.hydrate=function(e,t,n){if(!mo(t))throw Error(g(200));return yo(null,e,t,!0,n)};ve.hydrateRoot=function(e,t,n){if(!Ra(e))throw Error(g(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=ec;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Ju(t,null,e,1,n??null,o,!1,i,a),e[Qe]=t.current,Hn(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ho(t)};ve.render=function(e,t,n){if(!mo(t))throw Error(g(200));return yo(null,e,t,!1,n)};ve.unmountComponentAtNode=function(e){if(!mo(e))throw Error(g(40));return e._reactRootContainer?(bt(function(){yo(null,null,e,!1,function(){e._reactRootContainer=null,e[Qe]=null})}),!0):!1};ve.unstable_batchedUpdates=Pa;ve.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!mo(n))throw Error(g(200));if(e==null||e._reactInternals===void 0)throw Error(g(38));return yo(e,t,n,!1,r)};ve.version="18.3.1-next-f1338f8080-20240426";function tc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tc)}catch(e){console.error(e)}}tc(),ts.exports=ve;var Nf=ts.exports,Bl=Nf;Qo.createRoot=Bl.createRoot,Qo.hydrateRoot=Bl.hydrateRoot;const Lf=({className:e})=>S.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:`w-5 h-5 ${e}`,children:S.jsx("path",{fillRule:"evenodd",d:"M2 4.75A.75.75 0 0 1 2.75 4h5.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 0 1.5 0v-.5A2.25 2.25 0 0 0 8.25 2h-5.5A2.25 2.25 0 0 0 0 4.25v11.5A2.25 2.25 0 0 0 2.25 18h15.5A2.25 2.25 0 0 0 20 15.75V8.25A2.25 2.25 0 0 0 17.75 6h-5.5a.75.75 0 0 1-.75-.75v-.5a.75.75 0 0 0-1.5 0v.5A2.25 2.25 0 0 0 12.25 8h5.5A.75.75 0 0 1 18.5 8.75v7a.75.75 0 0 1-.75.75H2.25a.75.75 0 0 1-.75-.75V4.75Z",clipRule:"evenodd"})}),Mf=({className:e})=>S.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:`w-5 h-5 ${e}`,children:S.jsx("path",{fillRule:"evenodd",d:"M4.25 2A2.25 2.25 0 0 0 2 4.25v11.5A2.25 2.25 0 0 0 4.25 18h11.5A2.25 2.25 0 0 0 18 15.75V4.25A2.25 2.25 0 0 0 15.75 2H4.25ZM6 6.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm0 3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm0 3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z",clipRule:"evenodd"})}),Of=({className:e})=>S.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:`w-5 h-5 ${e}`,children:S.jsx("path",{fillRule:"evenodd",d:"M8.5 3.543a.75.75 0 1 0-1.5 0V4.5h.5A2.5 2.5 0 0 1 10 7v3.5a.75.75 0 0 0 1.5 0V7A2.5 2.5 0 0 1 14 4.5h.5v-.957a.75.75 0 0 0-1.5 0V4.5h-.5A1 1 0 0 0 11.5 5.5v1.858a.75.75 0 0 0 1.5 0V5.5a1 1 0 0 0-.5-1 .75.75 0 0 0-.5.5v.043a.75.75 0 1 0 1.5 0V4.5h.5A2.5 2.5 0 0 1 16 7v7.25A2.25 2.25 0 0 1 13.75 16.5h-1.375a.75.75 0 0 0 0 1.5h1.375A3.75 3.75 0 0 0 17.5 14.25V7A4 4 0 0 0 13.5 3h-.5a.75.75 0 0 0 0-1.5H13A2.5 2.5 0 0 1 10.5 0h-1A2.5 2.5 0 0 1 7 2.5H6.5a.75.75 0 0 0 0 1.5h.5A4 4 0 0 0 11 7v7.25c0 .9-.356 1.748-.97 2.375a.75.75 0 1 0-1.06-1.06A2.238 2.238 0 0 1 9.5 14.25V7a2.5 2.5 0 0 1-2.5-2.5H6v.957a.75.75 0 0 0 1.5 0V4.5h.5a1 1 0 0 0 1-1V3.457a.75.75 0 0 0-1.5 0V3.5h-.5A2.5 2.5 0 0 1 4 6v.5a.75.75 0 0 0 1.5 0V6a1 1 0 0 0-.5-1 .75.75 0 0 0-.5.5v.5a.75.75 0 1 0 1.5 0v-.5A2.5 2.5 0 0 1 8.5 3.5v.043ZM6.25 18a.75.75 0 0 0 0-1.5H4.875a.75.75 0 0 0 0 1.5H6.25Z",clipRule:"evenodd"})}),Ff=({className:e})=>S.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:`w-5 h-5 ${e}`,children:S.jsx("path",{fillRule:"evenodd",d:"M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"})}),Wf=({className:e})=>S.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:`w-5 h-5 ${e}`,children:S.jsx("path",{fillRule:"evenodd",d:"M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z",clipRule:"evenodd"})}),Hf=({className:e})=>S.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:`w-5 h-5 ${e}`,children:S.jsx("path",{d:"M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"})}),nc=({data:e,selectedFile:t,onFileSelect:n,expandedFolders:r,onToggleFolder:o,basePath:i=""})=>{const a=[...e].sort((l,s)=>l.type==="directory"&&s.type==="file"?-1:l.type==="file"&&s.type==="directory"?1:l.name.localeCompare(s.name));return S.jsx("ul",{className:"space-y-1",children:a.map(l=>{const s=i?`${i}/${l.name}`:l.name;if(l.type==="directory"){const c=r.has(s);return S.jsxs("li",{children:[S.jsxs("div",{className:"flex items-center p-2 rounded-md cursor-pointer hover:bg-gray-700/50 text-gray-300",onClick:()=>o(s),children:[S.jsx(Ff,{className:`mr-2 transform transition-transform duration-200 ${c?"rotate-90":"rotate-0"}`}),S.jsx(Lf,{className:"mr-2 text-sky-400"}),S.jsx("span",{className:"flex-1 truncate",children:l.name})]}),c&&S.jsx("div",{className:"pl-5 border-l border-gray-700 ml-2.5",children:S.jsx(nc,{data:l.children,selectedFile:t,onFileSelect:n,expandedFolders:r,onToggleFolder:o,basePath:s})})]},s)}if(l.type==="file"){const c=t===s,h=l.name.endsWith(".json");return S.jsx("li",{children:S.jsxs("div",{className:`flex items-center p-2 rounded-md cursor-pointer group ${c?"bg-sky-600/30 text-sky-300":"hover:bg-gray-700/50 text-gray-400 hover:text-gray-200"}`,onClick:()=>n(s),children:[S.jsx("div",{className:"w-5 mr-2"})," ",h?S.jsx(Of,{className:"mr-2 text-yellow-400"}):S.jsx(Mf,{className:"mr-2 text-gray-500 group-hover:text-gray-400"}),S.jsx("span",{className:"flex-1 truncate",children:l.name})]})},s)}return null})})},jf=e=>{const t=e.split(`
`),n=[];let r=!1,o="",i=[],a=[];const l=s=>{a.length>0&&(n.push(S.jsx("ul",{className:"pl-6 my-3 space-y-1 list-disc",children:a.map((c,h)=>S.jsx("li",{children:c},h))},s)),a=[])};return t.forEach((s,c)=>{if(s.trim().startsWith("```")){l(`list-before-code-${c}`),r?(n.push(S.jsxs("div",{className:"my-4 rounded-lg bg-gray-950/70 border border-gray-700 overflow-hidden",children:[S.jsx("div",{className:"text-xs text-gray-400 bg-gray-800 px-4 py-1",children:o}),S.jsx("pre",{className:"p-4 overflow-x-auto",children:S.jsx("code",{className:"text-sm font-mono text-cyan-300",children:i.join(`
`)})})]},`code-block-${c}`)),i=[],o=""):o=s.trim().substring(3).trim(),r=!r;return}if(r){i.push(s);return}!s.trim().startsWith("- ")&&!s.trim().startsWith("* ")&&l(`list-${c}`),s.startsWith("# ")?n.push(S.jsx("h1",{className:"text-3xl lg:text-4xl font-bold mt-8 mb-4 border-b border-gray-600 pb-3 text-gray-100",children:s.substring(2)},c)):s.startsWith("## ")?n.push(S.jsx("h2",{className:"text-2xl lg:text-3xl font-semibold mt-7 mb-3 border-b border-gray-700 pb-2 text-gray-200",children:s.substring(3)},c)):s.startsWith("### ")?n.push(S.jsx("h3",{className:"text-xl lg:text-2xl font-semibold mt-6 mb-2 text-gray-300",children:s.substring(4)},c)):s.trim().startsWith("- ")||s.trim().startsWith("* ")?a.push(s.trim().substring(2)):s.trim()==="---"||s.trim()==="⸻"?n.push(S.jsx("hr",{className:"my-8 border-gray-700"},c)):s.trim()!==""&&n.push(S.jsx("p",{className:"my-3 leading-relaxed text-gray-300",children:s},c))}),l("final-list"),r&&i.length>0&&n.push(S.jsxs("div",{className:"my-4 rounded-lg bg-gray-950/70 border border-gray-700 overflow-hidden",children:[S.jsx("div",{className:"text-xs text-gray-400 bg-gray-800 px-4 py-1",children:o}),S.jsx("pre",{className:"p-4 overflow-x-auto",children:S.jsx("code",{className:"text-sm font-mono text-cyan-300",children:i.join(`
`)})})]},"final-code")),n},zf=({file:e})=>{if(!e)return S.jsx("div",{className:"flex items-center justify-center h-full text-gray-500",children:S.jsxs("div",{className:"text-center",children:[S.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Client Acquisition System"}),S.jsx("p",{children:"Select a file from the sidebar to view its content."})]})});const t=e.name.endsWith(".json"),n=e.name.endsWith(".csv");return S.jsxs("div",{className:"p-4 sm:p-6 md:p-8 lg:p-10",children:[S.jsx("h1",{className:"text-lg font-semibold text-gray-400 mb-6 pb-2 border-b border-gray-700",children:e.name}),S.jsx("div",{className:"prose prose-invert max-w-none",children:t||n?S.jsx("pre",{className:"bg-gray-800/50 p-4 rounded-md overflow-x-auto my-4 w-full",children:S.jsx("code",{className:"text-sm font-mono text-yellow-300 whitespace-pre-wrap",children:e.content})}):jf(e.content).map((r,o)=>S.jsx("div",{children:r},o))})]})},Gl={children:[{type:"directory",name:"strategy",children:[{type:"file",name:"ICP.md",content:`
# Ideal Customer Profile (ICP)

This document outlines the primary buyer personas for the "GitHub Repo Architect" service. We focus on organizations where repository health directly impacts developer velocity, onboarding efficiency, and product stability.

---

### ICP 1: Seed-to-Series A SaaS Startup

*   **Company Size:** 10-50 employees (5-20 engineers).
*   **Tech Stack:** Modern (e.g., TypeScript, Go, Python, Rust), often with a single large monorepo that grew "organically" and is now showing signs of strain.
*   **Buying Trigger:**
    *   Hired the first VPE or senior engineering manager who is now tasked with "professionalizing" the engineering org.
    *   Onboarding new engineers is taking days instead of hours due to a lack of documentation and a confusing repo structure.
    *   The CI/CD pipeline is slow, flaky, and a source of constant developer complaints.
    *   Preparing for a SOC2 audit or first major enterprise customer and needs to demonstrate process maturity.
    *   "Bus factor" is high; critical knowledge is in the heads of 1-2 founders/early engineers.
*   **Pains:**
    *   "My repo is a mess."
    *   "Onboarding is a nightmare."
    *   "Our builds are constantly breaking."
    *   "I have no idea if our code is secure."
*   **Value Prop Focus:** Speed, stability, and laying a scalable foundation for future growth. Emphasize "Time-to-Onboard" reduction and "Release Reliability."

---

### ICP 2: Scaling Tech Company (Series B+ or Established)

*   **Company Size:** 50-500 employees (20-150 engineers).
*   **Tech Stack:** Multiple services, likely a mix of monorepos and microservices. Polyglot environment. May have legacy codebases.
*   **Buying Trigger:**
    *   Acquisition of another company, leading to a messy repo integration project.
    *   A major refactor is planned, and they need a clean, consistent structure to build upon.
    *   Developer Experience (DevEx) has become a board-level concern due to high engineering attrition or slow feature velocity.
    *   Multiple teams are stepping on each other's toes, causing merge conflicts and deployment failures.
    *   A push for better governance, security scanning (SAST/DAST), and standardized CI/CD practices across the organization.
*   **Pains:**
    *   "Our developer experience is poor."
    *   "We have no consistency across our 50 repos."
    *   "A simple change requires updating 5 different CI files."
    *   "Our staff engineers are bogged down with repo janitorial work."
*   **Value Prop Focus:** Consistency, governance, and DevEx ROI. Highlight the "Branch Protection Matrix," CI hardening, and creating a paved road for developers.

---

### ICP 3: Digital & Dev Agencies

*   **Company Size:** 10-100 employees.
*   **Business Model:** Builds software for clients, often handing off the codebase at the end of the engagement.
*   **Buying Trigger:**
    *   Client is unhappy with the quality of the final deliverable's documentation and structure.
    *   Wants to productize their offering and use a standardized, high-quality repo template for all new projects.
    *   Needs to impress sophisticated enterprise clients with a "GitPolish-grade" handoff process.
    *   Spends too much non-billable time cleaning up repos before project start or after handoff.
*   **Pains:**
    *   "Client handoffs are painful."
    *   "Our repos look amateurish."
    *   "We waste time setting up the same boilerplate for every project."
    *   "We need to show our clients we are professional and organized."
*   **Value Prop Focus:** Professionalism, efficiency, and client satisfaction. Emphasize the "one-page architecture map," "Contributor Quickstart," and creating a repeatable, high-quality delivery standard.
`},{type:"file",name:"Positioning.md",content:`
# Positioning Statement

This document defines how we position the "GitHub Repo Architect" service in the market. It clarifies our value proposition and targets specific, high-value pains felt by our ICPs.

---

### Core Positioning Statement

**For CTOs, VPEs, and agency owners who are frustrated by slow onboarding, flaky CI/CD, and inconsistent codebases, [BrandName] is the specialized service that transforms chaotic GitHub repositories into polished, scalable, and self-documenting assets.**

**Unlike generic DevOps consultancies or internal platform teams with competing priorities, we deliver a focused, rapid engagement that installs best-practice architecture, documentation, and automation, directly translating to faster developer velocity and higher team confidence.**

---

### Key Pains We Solve

*   **Onboarding Drag:** New engineers take days or weeks to become productive because of tribal knowledge, missing documentation, and a confusing repo layout.
*   **Flaky CI & Deployment Friction:** The build is always red. Developers waste hours debugging CI scripts instead of shipping features. Releasing code is a stressful, manual, and error-prone event.
*   **Tribal Knowledge & High Bus Factor:** Critical information about how a service is built, deployed, or maintained lives only in the heads of a few senior engineers. If they leave, the project is at risk.
*   **Slow Code Reviews:** Pull requests are massive, lack context, and take forever to review and merge, creating a major bottleneck in the development cycle.
*   **Inconsistent Repositories:** Every repository in the organization has a different structure, different CI setup, and different contribution guidelines, creating cognitive overhead and making it difficult for engineers to move between projects.
*   **Pre-Diligence "Code Shame":** The codebase is about to be audited by investors or an acquiring company, and it's not in a state that inspires confidence.

---

### Our Promise (The Transformation)

*   **Before:** Chaotic, undocumented, inconsistent, high-friction.
*   **After:** Organized, self-documenting, consistent, low-friction.

We turn your most critical code repository from a liability into a strategic asset that accelerates your team.
`},{type:"file",name:"Offers&Pricing.md",content:`
# Offers & Pricing

Our services are packaged into three distinct tiers to meet clients where they are, from needing a quick diagnostic to requiring a complete overhaul and ongoing support.

*   **Pricing Philosophy:** Value-based. We price based on the outcome (reduced onboarding time, increased developer velocity, decreased risk) rather than hours. Prices are presented as fixed fees or retainers for budget predictability.
*   **Default Price Anchor (Goal):** {{PriceAnchors.avg_deal_goal}} (e.g., $15,000)
*   **Minimum Engagement:** {{PriceAnchors.min}} (e.g., $5,000)
*   **Ceiling:** {{PriceAnchors.ceil}} (e.g., $50,000+ for large-scale projects)

---

### Tier 1: Rapid Repo Audit

*   **Ideal For:** Teams that know they have a problem but aren't sure where to start. A perfect entry-point offer.
*   **Price:** Fixed Fee (e.g., $5,000)
*   **Timeline:** 1 Week
*   **Deliverables:**
    1.  **Repo Health Score (0-100):** A quantitative assessment across 5 key areas (Structure, Documentation, CI/CD, Security, Governance).
    2.  **Top 10 Fixes Report:** A prioritized list of the most impactful issues to address immediately.
    3.  **7-Day Remediation Plan:** A concise, actionable plan for your team to execute, with clear instructions.
    4.  **90-Minute Debrief & Strategy Call:** We walk you through the findings and the plan.
*   **SLA:** Report delivered within 5 business days of kickoff.

---

### Tier 2: QuickStart Hardening

*   **Ideal For:** Teams that need a hands-on partner to fix the core problems and establish a strong foundation. Our most popular offering.
*   **Price:** Fixed Fee (e.g., $15,000 - $25,000, scoped based on repo complexity)
*   **Timeline:** 2-4 Weeks
*   **Deliverables:**
    1.  **Everything in Tier 1.**
    2.  **Branching Strategy Implementation:** Mainline/Trunk-based development setup with clear naming conventions.
    3.  **Branch Protection Matrix:** Configure required checks, reviews, and signing for key branches.
    4.  **CI Sanity Suite:** Implement foundational checks (linting, testing, security scanning) that run on every PR.
    5.  **README 2.0 Overhaul:** A complete rewrite of the root README to be the "front door" of the project.
    6.  **Contributor Quickstart Kit:** Creation of \`CONTRIBUTING.md\`, issue templates, and PR templates.
    7.  **Handoff & Training Session:** A recorded session with the engineering team on the new setup and best practices.
*   **SLA:** All configurations and documents implemented and delivered within the agreed-upon timeline.

---

### Tier 3: Ongoing Steward (Retainer)

*   **Ideal For:** Organizations that want to ensure their repositories stay clean and continuously improve their DevEx.
*   **Price:** Monthly Retainer (e.g., $5,000 - $10,000/month)
*   **Timeline:** 3-month minimum engagement
*   **Deliverables:**
    1.  **Monthly Repo Health Audit & Report:** Proactively catch deviations from best practices.
    2.  **Proactive PR Hygiene:** Gentle, non-blocking feedback on key PRs to coach best practices.
    3.  **Incident Response Playbooks:** "What to do when the build breaks" or "How to handle a security alert" guides.
    4.  **Release Cadence Coaching:** Help teams refine their release process for better stability and predictability.
    5.  **Priority Support:** A dedicated Slack channel and monthly strategy call.
*   **SLA:** <4-hour response time on Slack during business hours. Monthly reports delivered by the 5th business day of the month.
`},{type:"file",name:"Differentiators_GitHubRepoArchitect.md",content:`
# Differentiators: Why Choose Us

This document articulates what makes the "GitHub Repo Architect" service unique and superior to alternatives. These points should be woven into all marketing and sales copy.

---

### 1. The "Repo Health Score" - We Make Quality Measurable

*   **The Problem:** "Repo health" is a vague, subjective concept. It's hard to get budget to fix something you can't measure.
*   **Our Solution:** We've developed a proprietary 50-point rubric that scores your repository from 0-100 across five critical domains: Code Structure, Documentation, CI/CD, Security Posture, and Governance.
*   **Why It's Different:** We transform a qualitative problem into a quantitative one. You get a concrete baseline and can track ROI as the score improves. It's a powerful tool for communicating the need for improvement to leadership.

---

### 2. "GitPolish-Grade" Documentation - We Fight Tribal Knowledge

*   **The Problem:** Most developer documentation is an afterthought. It's outdated, hard to find, and incomplete. This leads to massive tribal knowledge and slows down new hires.
*   **Our Solution:** We treat documentation as a product. Our "README 2.0" framework turns your README into a true project dashboard. Our "Contributor Quickstart" kits make the first contribution experience seamless.
*   **Why It's Different:** We don't just write docs; we design a documentation *system*. We focus on discoverability, maintainability, and creating artifacts that developers *actually want to use*.

---

### 3. "Time-to-Onboard" Shrink - We Deliver DevEx ROI

*   **The Problem:** VPEs know that slow onboarding is expensive, but it's hard to fix when everyone is busy shipping features.
*   **Our Solution:** Our entire engagement is laser-focused on one key metric: reducing the time it takes for a new engineer to ship their first meaningful pull request.
*   **Why It's Different:** We don't talk vaguely about "good DevEx." We target a specific, painful, and expensive business problem and solve it. We frame the engagement in terms of ROI (e.g., "We'll save you 20 engineering hours per new hire").

---

### 4. Focused Specialist vs. Generalist Consultant

*   **The Alternative:** Hire a large, expensive DevOps consultancy or try to have your internal platform team fix it.
*   **The Problem with Alternatives:** Generalists lack the specific expertise in repo architecture. Internal teams are constantly pulled in different directions and lack the dedicated time to do a deep, focused cleanup.
*   **Why We're Different:** This is all we do. We are masters of this specific craft. We bring a playbook, a set of battle-tested tools, and a focused methodology that delivers results in weeks, not months. You get senior-level expertise without the long-term commitment or high cost of a full-time hire.
`}]},{type:"directory",name:"funnel",children:[{type:"file",name:"LandingPage.md",content:`
# Landing Page Copy

---

### **[Headline]**
**Is Your GitHub Repo Slowing You Down?**
Transform your chaotic codebase from a development bottleneck into your team's greatest asset.

### **[Sub-headline / Promise]**
We architect clean, scalable, and self-documenting GitHub repositories that cut developer onboarding time in half and make shipping code a joy, not a chore. Stop wasting time on flaky builds and tribal knowledge.

### **[Call to Action - Primary]**
**[Button] Book a Free 20-Minute Repo Strategy Call**
*Get a concrete plan to fix your top 3 repository issues.*

---

### **[Credibility / Social Proof Bar]**
As seen in: [Logo 1], [Logo 2], [Redacted Client Quote]
*"[BrandName] turned our messy monorepo into a well-oiled machine. Our new engineers are pushing code on day one." - CTO, Series A SaaS*

---

### **[Problem/Agitation Section]**
**If This Sounds Familiar, You're Not Alone:**

*   **Onboarding is a nightmare.** It takes new hires days to get their environment set up and understand the codebase.
*   **CI is constantly red.** Your best engineers are debugging YAML files instead of building your product.
*   **Code reviews are a slog.** PRs are huge, lack context, and block your team's momentum.
*   **"Don't touch that!"** Critical parts of your system are undocumented "black boxes" that everyone is afraid to change.

**A messy repository isn't just a technical problem; it's a business problem. It burns money, frustrates engineers, and kills your product velocity.**

---

### **[Solution / Offer Section]**
**Introducing the GitHub Repo Architect Service**

We provide a fast, focused engagement to install the structure, documentation, and automation your team needs to move faster with confidence.

**Our Core Offerings:**

1.  **Rapid Repo Audit:** Get a "Repo Health Score" and a prioritized action plan in one week.
2.  **QuickStart Hardening:** We'll implement best-practice branching, CI checks, and documentation for you in 2-4 weeks.
3.  **Ongoing Stewardship:** We'll help you maintain high standards with monthly audits and expert coaching.

### **[How It Works Section]**

1.  **Book a Call:** A free, no-obligation chat to discuss your repository's challenges.
2.  **Get a Plan:** We'll outline a clear, fixed-price proposal with guaranteed deliverables.
3.  **Execute:** We get to work, transforming your repository in a matter of weeks.
4.  **Handoff & Empower:** We deliver the finished product and train your team on how to use and maintain it.

---

### **[Call to Action - Secondary / Lead Magnet]**
**Not Ready to Talk? Get Our Free Checklist.**
**[Box with Image] The Ultimate Repo Audit Checklist**
*Download our 40-point checklist used to diagnose and fix critical repository issues.*
**[Button] Download Now**

---

### **[FAQ Section]**

*   **Who is this for?**
    *   CTOs and VPEs at startups and scale-ups.
    *   Engineering Managers who own team velocity.
    *   Agency owners who need professional, repeatable client handoffs.
*   **How much does it cost?**
    *   Our Rapid Repo Audit starts at $5,000. Our most popular QuickStart Hardening engagement is typically between $15-25k.
*   **What if our repo is a total disaster?**
    *   That's what we specialize in. The messier, the better. We've seen it all.
*   **Why not just hire a DevOps engineer?**
    *   You could, but that's a 3-6 month search and a $200k+ annual commitment. We deliver a focused outcome in weeks for a fraction of the cost.

---

### **[Risk Reversal / Final CTA]**
**Your Repository's Future Starts Here.**
Stop letting a disorganized repo dictate your team's potential.

**[Button] Book Your Free Strategy Call**
*100% Satisfaction Guarantee. If you don't find our initial call valuable, we'll send you a $100 gift card for your time.*
`},{type:"file",name:"LeadMagnet.md",content:`
# Lead Magnet: Repo Audit Checklist (v1.0)

This is the content for the downloadable PDF / Notion page.

---

## **The Ultimate GitHub Repo Audit Checklist**

**By [BrandName]** - *We turn chaotic repos into scalable assets.*

Is your GitHub repository an accelerator or an anchor? Use this 40-point checklist to score your repo's health and identify critical areas for improvement.

---

### **Section 1: Structure & Organization (Score: __/10)**

*   [ ] **1. Root Directory Clarity:** Is the purpose of every top-level file and folder immediately obvious? (Max 10-15 items)
*   [ ] **2. Clear Application Entrypoint:** Is it obvious where the application code lives (e.g., \`/src\`, \`/app\`)?
*   [ ] **3. Scripts Folder:** Are all shell scripts and utility scripts located in a single \`/scripts\` folder?
*   [ ] **4. Configuration Management:** Is there a clear, documented strategy for managing environment variables (e.g., \`.env.example\`)?
*   [ ] **5. Gitignore:** Is \`.gitignore\` comprehensive, ignoring OS files, IDE folders, and sensitive credentials?
*   [ ] **6. Dockerfile:** If containerized, is the \`Dockerfile\` multi-stage, optimized for caching, and secure?
*   [ ] **7. No Large Binary Files:** Has \`git-lfs\` or an alternative been used for large assets?
*   [ ] **8. Logical Code Grouping:** Are related components, modules, or services grouped together logically?
*   [ ] **9. Consistent Naming Conventions:** Are files and folders named consistently (e.g., kebab-case, PascalCase)?
*   [ ] **10. Dependency Manifest:** Is there a single, clean package manifest (\`package.json\`, \`go.mod\`, etc.) with no commented-out dependencies?

---

### **Section 2: Documentation (Score: __/10)**

*   [ ] **1. README 2.0:** Does the README contain a project description, badges, setup instructions, and how to run tests?
*   [ ] **2. CONTRIBUTING.md:** Is there a clear guide for new contributors explaining the development process?
*   [ ] **3. PULL_REQUEST_TEMPLATE.md:** Does the PR template prompt for a description, testing steps, and related issue links?
*   [ ] **4. ISSUE_TEMPLATES:** Are there templates for bug reports and feature requests?
*   [ ] **5. ARCHITECTURE.md:** Is there a high-level overview of the system architecture? (Even a simple one-pager).
*   [ ] **6. "Magic" is Documented:** Are non-obvious code blocks, environment variables, or scripts explained with comments or docs?
*   [ ] **7. Setup is Scripted & Simple:** Can a new developer set up the project by running a single command (e.g., \`./scripts/setup.sh\`)?
*   [ ] **8. CODEOWNERS File:** Is there a \`CODEOWNERS\` file to automatically assign reviewers?
*   [ ] **9. ADRs (Architectural Decision Records):** Are significant architectural decisions documented in an \`/adr\` folder?
*   [ ] **10. License:** Is there an open-source \`LICENSE\` file?

---

### **Section 3: CI/CD & Automation (Score: __/10)**

*   [ ] **1. CI on Every PR:** Does a CI pipeline run automatically for every pull request?
*   [ ] **2. Fast Feedback Loop:** Does the CI pipeline complete in under 10 minutes?
*   [ ] **3. Linting Check:** Is code style enforced automatically with a linter?
*   [ ] **4. Unit/Integration Tests:** Are tests run as part of the CI pipeline?
*   [ ] **5. No Flaky Tests:** Are tests reliable and deterministic?
*   [ ] **6. Build/Compilation Check:** Does the CI pipeline confirm the application builds or compiles successfully?
*   [ ] **7. Dependency Caching:** Is dependency installation cached to speed up CI runs?
*   [ ] **8. Staging/Preview Deployments:** Are PRs automatically deployed to a preview environment?
*   [ ] **9. Secrets Management:** Are secrets and keys managed securely (e.g., GitHub Actions Secrets) and not hardcoded?
*   [ ] **10. Actionable Failure Notifications:** Are CI failures immediately sent to the right channel (e.g., Slack)?

---

### **Section 4: Security & Governance (Score: __/10)**

*   [ ] **1. Branch Protections:** Is the main branch protected, requiring PRs and passing checks before merging?
*   [ ] **2. Require Reviews:** Is at least one peer review required for all PRs to the main branch?
*   [ ] **3. Security Scanning (SAST):** Is a tool like CodeQL or Snyk run to find vulnerabilities in code?
*   [ ] **4. Dependency Vulnerability Scanning:** Is there a tool (e.g., Dependabot, Snyk) that scans for vulnerable dependencies?
*   [ ] **5. No Long-Lived Branches:** Are feature branches short-lived and merged back to main frequently?
*   [ ] **6. Linear History:** Is a "squash and merge" or "rebase and merge" strategy enforced to keep git history clean?
*   [ ] **7. Signed Commits:** Are developers required to sign their commits?
*   [ ] **8. Secret Scanning:** Is there a tool in place to prevent secrets from being committed to the repository?
*   [ ] **9. Least Privilege Access:** Are repository permissions managed, giving developers the minimum access they need?
*   [ ] **10. Stale Branch Policy:** Are stale branches automatically detected and flagged for deletion?

---

### **Finished? Tally your score.**

*   **30-40:** Excellent! Your repository is a model of clarity and efficiency.
*   **20-29:** Solid foundation, but there are key areas for improvement that could significantly boost developer velocity.
*   **10-19:** Warning signs. Your repo is likely causing friction, slowing down your team, and introducing risk.
*   **0-9:** Critical. Your repository is a major liability and needs immediate attention.

**Ready to turn your repository into a 40/40?**
Book a free, no-obligation strategy call with us. We'll help you build a concrete plan to get there.
**[Link to Calendar]**
`},{type:"file",name:"TY-Page.md",content:`
# Thank You Page Copy

This is the page users see after submitting a form (either downloading the lead magnet or booking a call).

---

### **Scenario 1: After Lead Magnet Download**

**[Headline]**
**Thanks! The Repo Audit Checklist is on its way to your inbox.**

**[Sub-headline]**
You've taken the first step toward a cleaner, more efficient repository.

**What to do next:**

*   **Step 1: Check Your Email.** Look for an email from {{FounderName}} with the subject line "Your Repo Audit Checklist."
*   **Step 2: Whitelist Us.** Add our email address to your contacts to ensure you get future resources.
*   **Step 3: Take the Test.** Run through the checklist on your main repository. It should only take 15-20 minutes.

**[Primary Call to Action]**
**Want to fast-track your results?**

The checklist is great for diagnosis, but implementation takes time and focus.
Book a free 20-minute call, and we'll personally walk you through your top 3 biggest opportunities for improvement based on your score. No pressure, just actionable advice.

**[Button] Book a Free 20-Minute Strategy Call**

---

### **Scenario 2: After Booking a Call**

**[Headline]**
**Confirmed! Your Repo Strategy Call is Booked.**

**[Sub-headline]**
You'll receive a calendar invitation and a confirmation email shortly. I look forward to speaking with you!

**To make our call as productive as possible, please:**

*   **Step 1: Accept the Calendar Invite.** It contains the meeting link.
*   **Step 2: Have Your Repo URL Ready.** If it's a private repo, no problem. We can discuss it conceptually.
*   **Step 3: Think About Your #1 Challenge.** What is the single biggest frustration your repository causes for your team?

**[Reassurance / What to Expect]**
This will be a working session, not a sales pitch. My goal is for you to leave the call with at least two concrete actions you can take immediately to improve your repository, whether you choose to work with us or not.

Talk soon,
{{FounderName}}
`},{type:"file",name:"CalendarPage.md",content:`
# Calendar Page Copy

This is the copy that appears on or next to the Calendly/booking widget.

---

### **[Page Title]**
**Book Your Free 20-Minute Repo Strategy Call**

### **[Headline Above Widget]**
**Let's Build Your Action Plan.**

### **[Description]**
Choose a time that works for you. In this quick, no-fluff call, we will:

1.  **Diagnose Your Biggest Bottleneck:** We'll pinpoint the #1 issue in your repository that's costing your team time and momentum.
2.  **Identify Quick Wins:** You'll walk away with 2-3 specific, actionable steps you can take *this week* to improve your repo health.
3.  **Outline a High-Level Strategy:** If it makes sense, we'll discuss what a full "Repo Hardening" engagement could look like for your team.

**This is a 100% free, no-obligation working session.** My goal is to provide immense value upfront.

I look forward to our conversation!

*- {{FounderName}}*
`},{type:"file",name:"FormQuestions.md",content:`
# Form Questions

These are the questions to ask on the booking/contact form. The goal is to qualify leads without adding excessive friction.

---

### **Lead Magnet Download Form (Low Friction)**

1.  **Work Email:** (Required)
2.  **First Name:** (Optional)

---

### **Book a Call Form (Progressive Disclosure / Qualification)**

#### **Page 1: Basic Info**

1.  **Full Name:** (Required, from calendar)
2.  **Work Email:** (Required, from calendar)

#### **Page 2: Context (After time is selected)**

These questions help me prepare for our call.

1.  **What's your current role?** (Required)
    *   *Dropdown: C-Level (CTO/CEO), VP/Director of Engineering, Engineering Manager, Staff/Principal Engineer, Agency Owner, Other*

2.  **How large is your engineering team?** (Required)
    *   *Dropdown: 1-5, 6-15, 16-30, 31-50, 50+*

3.  **What's your primary tech stack? (e.g., TypeScript, Go, Python)** (Optional, Text Field)

4.  **What's the biggest challenge with your current repository?** (Required)
    *   *Dropdown/Multi-select:*
        *   Slow/painful developer onboarding
        *   Flaky or slow CI/CD pipeline
        *   Inconsistent structure across repos
        *   Lack of documentation / too much tribal knowledge
        *   Code quality and review bottlenecks
        *   Other (please specify)

5.  **GitHub Repository URL (Optional):**
    *   *If you're comfortable sharing, this allows me to do some prep work. Private repos are fine, I won't be able to access the code, just the public metadata.*

6.  **How did you hear about us?** (Optional)
    *   *Dropdown: LinkedIn, Google Search, Referral, Upwork, Other*

---
### **CRM Mapping Logic**
*   **Role** -> maps to Persona field.
*   **Team Size** -> maps to Company Size field.
*   **Biggest Challenge** -> maps to "Pain Point" tag and can be used for lead scoring.
*   **Repo URL** -> custom "Repo URL" field.
`}]},{type:"directory",name:"copy",children:[{type:"file",name:"ValueProps.md",content:`
# Core Value Propositions

A bank of copy-pasteable value props for use in emails, social posts, and ad copy.

---

### **Category: Speed & Velocity**

*   **Cut developer onboarding from a week to a day.** We build self-documenting repos that let new hires ship code on day one.
*   **Merge with confidence.** Our CI sanity suites catch errors *before* they hit the main branch, making releases boringly predictable.
*   **Stop wasting time on boilerplate.** We create a golden path for your developers so they can focus on building features, not fighting their tools.
*   **Shrink your PR cycle time.** With automated checks and clear contribution guidelines, code reviews become faster and more effective.

---

### **Category: Risk & Stability**

*   **De-risk your team's knowledge.** We eliminate tribal knowledge by turning it into durable, discoverable documentation and automation.
*   **Go from "code shame" to "code confidence."** We'll get your repository ready for investor diligence or a SOC2 audit.
*   **Secure your software supply chain.** We implement best-practice branch protections, security scanning, and dependency management to harden your codebase.
*   **Reduce your "bus factor."** When critical knowledge is codified in the repo, you're no longer dependent on any single engineer.

---

### **Category: Quality & Professionalism**

*   **Achieve "GitPolish-grade" quality.** We transform your repository into a polished, professional asset that reflects the quality of your engineering team.
*   **Deliver a client handoff that wows.** For agencies, our process ensures the codebase you deliver is as impressive as the application itself.
*   **Establish a culture of excellence.** A clean, well-organized repository sets the standard for quality and encourages better engineering practices across the team.
*   **Create a single source of truth.** Your repository becomes the central, trusted hub for how your software is built, tested, and deployed.
`},{type:"file",name:"FAQs.md",content:`
# Frequently Asked Questions (Master List)

A comprehensive list of FAQs for use on the website, in proposals, and for sales enablement.

---

### **About the Service**

*   **Q: What exactly is a "GitHub Repo Architect"?**
    *   A: We are specialists who focus exclusively on the structure, documentation, automation, and governance of your source code repositories. We turn them from messy folders of code into efficient, self-service platforms for your developers.

*   **Q: Is this just a DevOps service?**
    *   A: While it involves DevOps principles, our focus is much narrower and deeper. A general DevOps consultant might focus on your entire cloud infrastructure. We are laser-focused on the developer experience *within* GitHub. This is about making the day-to-day work of writing, reviewing, and shipping code as frictionless as possible.

*   **Q: Do you write application code?**
    *   A: No. We architect the repository *around* your code. We'll refactor CI/CD scripts, write documentation, and configure repository settings, but we do not touch your core application logic. This maintains a clear separation of concerns and allows us to move very quickly.

### **Process & Timeline**

*   **Q: How long does an engagement take?**
    *   A: Our "Rapid Audit" is a 1-week sprint. Our "QuickStart Hardening" engagements typically take 2-4 weeks, depending on the complexity of the repository.

*   **Q: What is the process like?**
    *   A: It's a 4-step process: 1) **Discover:** A deep dive into your current setup and pain points. 2) **Plan:** We present a detailed plan with clear deliverables and timelines. 3) **Execute:** We get to work, providing regular updates. We do the heavy lifting. 4) **Handoff:** We deliver the finished, polished repository and provide training to your team.

*   **Q: Do we need to pause development while you work?**
    *   A: Not at all. We work in a way that is non-disruptive to your team's ongoing development. We'll coordinate on the final cutover for things like new branch protection rules.

### **Pricing & ROI**

*   **Q: How much does it cost?**
    *   A: Engagements are fixed-price to ensure budget predictability. Audits start at $5,000, and our core "Hardening" projects typically range from $15,000 to $25,000.

*   **Q: Why is it so expensive? Can't we do this ourselves?**
    *   A: You certainly could, but consider the hidden costs. How many hours do your senior engineers waste per week on CI issues? What is the cost of a new hire taking 3 weeks to become productive instead of 3 days? Our service pays for itself by freeing up your most expensive resources to focus on what they do best: building your product. We deliver a result in weeks that might take an internal team a year to prioritize.

*   **Q: What's the ROI?**
    *   A: The ROI comes from three main areas: 1) **Reduced Onboarding Costs:** Faster time-to-productivity for every new engineer. 2) **Increased Developer Velocity:** Less time wasted on friction and debugging means more features shipped. 3) **Reduced Risk:** Lower chance of security breaches, deployment failures, and knowledge loss.

### **Security & Access**

*   **Q: Do you need access to our private code?**
    *   A: Yes, to do our work effectively, we need temporary, privileged access to your repository.

*   **Q: How do you handle security and confidentiality?**
    *   A: We take this extremely seriously. We will sign a comprehensive NDA, use a dedicated, secure GitHub account, and follow the principle of least privilege. Access is revoked immediately upon project completion. All of our work is done on your systems, so we do not store your code on our own machines.
`},{type:"file",name:"Objection-Handling.md",content:`
# Objection Handling

A script/guide for handling common sales objections during calls.

---

### **Objection 1: "It's too expensive." / "We don't have the budget."**

*   **Empathize:** "I understand, that's a significant investment, and it's smart to be cautious with your budget."
*   **Reframe to Cost of Inaction:** "Could we explore the cost of *not* fixing this? For example, you mentioned it takes about 2 weeks for a new engineer to get fully up to speed. If an engineer's loaded cost is, say, $15k/month, that's $7.5k in lost productivity right there for just one hire. How many engineers are you planning to hire this year?"
*   **Isolate the Issue:** "If budget weren't an issue, would this be a problem you'd want to solve right now?" (This tells you if it's a real budget issue or a value issue).
*   **Offer a Stepped Approach:** "I get that the full hardening project might be too much right now. What if we started with the 'Rapid Audit' for $5k? That would give you a concrete, prioritized roadmap and arm you with the data you need to make the case for a larger budget in the next quarter."

---

### **Objection 2: "We can do this ourselves." / "My team is smart, they can handle it."**

*   **Agree & Validate:** "You absolutely could. You have a very sharp team, and there's no question they are capable of doing this work."
*   **Introduce the "Focus & Time" Constraint:** "The challenge we see with even the best internal teams isn't capability, it's *opportunity cost* and *focus*. Your best engineers are needed to build and ship your product. Every hour they spend refactoring CI scripts or writing documentation is an hour they aren't spending on the features that drive revenue. We provide a dedicated, focused burst of effort to get this done in weeks, so your team doesn't have to de-prioritize their core work."
*   **Highlight Specialist Expertise:** "Additionally, because this is all we do, we bring a playbook and have seen the patterns across dozens of companies. We can help you avoid common pitfalls and get to the ideal state much faster."

---

### **Objection 3: "Now is not the right time." / "We're too busy."**

*   **Acknowledge:** "That makes sense. It sounds like the team is completely heads-down right now, which is a good sign of a growing business."
*   **Connect the Pain to the "Busy-ness":** "Often, the reason teams are so 'busy' is because of the very friction we're talking about. Things like slow CI, painful code reviews, and onboarding drag are what *create* the feeling of being constantly behind. By fixing the foundation, we actually *create* more time and bandwidth for the team."
*   **Quantify the Time Suck:** "You mentioned PRs can sometimes take a day or two to get reviewed. If we could cut that time in half, how many hours would that save the team each week?"
*   **Propose a "Light Lift" Start:** "The initial 'Rapid Audit' phase requires very little time from your team - just a 60-minute kickoff call and a 90-minute debrief. We do all the heavy lifting in between. It's designed to be a very low-impact process for a busy team."

---

### **Objection 4: "I need to talk to my team/CTO/CEO."**

*   **Support & Empower:** "That's a great idea. It's crucial that the whole team is on board. What are the key things you think will be most important to them?"
*   **Offer to Help:** "Would it be helpful if I joined for a brief 15-minute Q&A with your team? Or I could put together a concise one-page summary of our discussion and the proposed plan that you can share internally."
*   **Clarify the Decision Process:** "So I can follow up appropriately, what does the decision-making process look like from here, and what's a realistic timeline for you to have that conversation?"
`},{type:"file",name:"CaseStudy-Template.md",content:`
# Case Study Template

A template for writing compelling case studies based on successful client projects. Use the "Problem-Agitate-Solve" framework.

---

### **Case Study: [Client Name] Cuts Developer Onboarding Time by 80%**

**[Client Logo]**
**Client:** [Client Name], a [Description, e.g., Series B FinTech company]
**Industry:** [e.g., FinTech]
**Team Size:** [e.g., 50 Engineers]
**Service:** QuickStart Hardening

---

### **[Headline]: How [Client Name] Went From a 2-Week Onboarding Nightmare to New Hires Shipping Code on Day 2**

---

### **The Problem: A "Great" Company with a "Terrifying" Monorepo**

[Client Name] was a rapidly growing company with a brilliant engineering team. But behind the scenes, their core monorepo had become a victim of its own success. Years of rapid development, changing priorities, and a lack of consistent standards had created a codebase that was difficult to navigate, impossible to set up, and a source of daily frustration for developers.

*"Onboarding was a nightmare,"* says [Name], [Title]. *"We'd tell new hires to block off their first week just to get their development environment working. It was a huge drain on morale and a massive waste of time."*

---

### **The Agitation: The True Cost of Friction Was Millions**

The problem went far beyond onboarding.
*   **Flaky CI:** The CI pipeline took over 45 minutes to run and failed unpredictably, causing developers to lose hours of focus.
*   **Tribal Knowledge:** Critical deployment knowledge was held by two senior engineers, creating a huge bus-factor risk.
*   **Inconsistent Tooling:** Different parts of the monorepo used different linters, testing frameworks, and scripts, creating high cognitive overhead.

The leadership team calculated that this friction was costing them over **$500,000 per year** in lost productivity and engineering attrition.

---

### **The Solution: A 3-Week "QuickStart Hardening" Engagement**

[Client Name] engaged [BrandName] for a 3-week "QuickStart Hardening" project. The goal was to transform their monorepo from a liability into a strategic asset.

**Here's what we delivered:**

1.  **Repo Health Audit:** We first baselined their repository, giving them a **Repo Health Score of 12/100**. This quantitative data was key to getting team buy-in.
2.  **README 2.0 & Contributor Quickstart:** We rewrote the documentation from the ground up, creating a single, scripted setup command and clear contribution guidelines.
3.  **CI/CD Overhaul:** We refactored their CI pipeline, parallelizing jobs and implementing aggressive caching.
4.  **Branch Protection & Governance:** We implemented strict branch protection rules, required CI checks, and a CODEOWNERS file to streamline reviews.

---

### **The Results: Tangible, Measurable Improvements**

*   **80% Reduction in Onboarding Time:** New hire "time-to-first-PR" went from an average of **8 days to just 2 days**.
*   **75% Faster CI/CD:** The CI pipeline now runs in just **10 minutes**, giving developers near-instant feedback.
*   **Repo Health Score increased from 12 to 88.**
*   **Improved Developer Morale:** The team reported a significant increase in satisfaction and a reduction in daily frustrations.

*"The change was night and day,"* [Name] says. *"The repo is no longer a source of dread. It's a platform that helps us move faster. The investment paid for itself within the first two months."*

**[Final CTA]**
**Ready to achieve similar results? Book a free repo strategy call today.**
`}]},{type:"directory",name:"outreach",children:[{type:"file",name:"ColdEmails.md",content:`
# Cold Email Sequences

---

### **Sequence 1: The "I Saw Your Job Post" Trigger**

*   **Trigger:** Company posts a job for "Senior/Staff Engineer" or "DevOps Engineer."
*   **Audience:** VPE or hiring manager.

**Email 1**
*   **Subject:** Question about your [Role] role at [Company]
*   **Body:**
    Hi [Name],

    Saw you're hiring for a [Role] at [Company]. It looks like you're scaling the team, which is always exciting.

    Often when teams are growing fast, the repo itself starts to feel the strain – onboarding gets slower and CI gets flaky. Many VPEs I work with are trying to fix this so their new senior hires can be productive from day one.

    I specialize in architecting GitHub repos for exactly this stage. We help teams cut onboarding time in half and build a stable foundation for growth.

    Open to a brief 20-minute chat next week to share a couple of specific ways you could streamline your new-hire experience?

    Best,
    {{FounderName}}

**Email 2 (3 days later, reply in thread)**
*   **Body:**
    Hi [Name],

    Just a quick follow-up. A clean, well-documented repo is one of the best ways to attract and retain top engineering talent. They can see right away that you care about developer experience.

    Would be happy to send over our free "40-point Repo Audit Checklist" if that's more helpful right now.

    Best,
    {{FounderName}}

---

### **Sequence 2: The "Failed CI" Trigger**

*   **Trigger:** You notice a public repo with consistently failing CI checks on its main branch.
*   **Audience:** Engineering manager or a committer on the project.

**Email 1**
*   **Subject:** GitHub CI at [Repo Name]
*   **Body:**
    Hi [Name],

    I was looking at the [Repo Name] repository on GitHub and noticed the CI pipeline seems to be a bit unstable on the main branch.

    As someone who lives and breathes CI/CD, I know how frustrating a red build can be – it kills momentum and erodes trust in the test suite.

    I specialize in hardening CI/CD pipelines for reliability and speed. I recently helped a team cut their build time from 40 minutes to 8 and eliminate flaky tests.

    If you're interested, I'd be happy to take a quick look at your setup and share 2-3 specific suggestions for improvement. No strings attached.

    Cheers,
    {{FounderName}}

---

### **Sequence 3: The Persona-Based (VPE) Outreach**

*   **Trigger:** General outreach to a VPE at an ICP-fit company.
*   **Audience:** VP of Engineering.

**Email 1**
*   **Subject:** Repo Onboarding at [Company]
*   **Body:**
    Hi [Name],

    As a VPE at a company of [Company]'s size, I imagine one of your top priorities is maximizing the productivity of your engineering team.

    I've spent the last [X] years focused on one specific lever for this: the repository itself. I help VPEs turn their repos from sources of friction (slow onboarding, flaky CI) into accelerators.

    For example, we helped [Similar Company] cut their time-to-first-PR for new hires from a week to a single day.

    Could I steal 20 minutes of your time next week to walk you through how we did it?

    Best,
    {{FounderName}}

**Email 2 (3 days later, reply in thread)**
*   **Body:**
    Hi [Name],

    Is improving developer experience and onboarding efficiency on your roadmap for this quarter?

    Happy to share a case study if that's helpful.

    Best,
    {{FounderName}}

---

### **Sequence 4: The Agency Owner Outreach**

*   **Trigger:** General outreach to an agency owner.
*   **Audience:** Founder/Owner/CTO of a dev agency.

**Email 1**
*   **Subject:** Client Handoffs
*   **Body:**
    Hi [Name],

    As the owner of a successful agency, I'm sure you know that a great client handoff is just as important as the app you build.

    I specialize in creating "GitPolish-grade" repositories that make your agency look incredibly professional and make your clients' lives easy. We build standardized, well-documented repo templates that your team can use for every project.

    This means less time spent on cleanup and more time delivering value. It also becomes a selling point for sophisticated clients.

    Open to a brief chat about how we could productize your project scaffolding?

    Best,
    {{FounderName}}

---

### **Sequence 5: The "Congrats on Funding" Trigger**

*   **Trigger:** Company announces a Seed or Series A funding round.
*   **Audience:** CTO or Founder.

**Email 1**
*   **Subject:** Congrats on the raise!
*   **Body:**
    Hi [Name],

    Huge congratulations on the recent funding round! It's an exciting time, and you're probably getting ready to scale the engineering team.

    I work with CTOs post-raise to get their codebase ready for that influx of new talent. We focus on cleaning up the main repo, improving documentation, and stabilizing CI/CD so that every new engineer you hire can be productive from day one.

    It's about turning that new capital into product velocity as efficiently as possible.

    If this is on your radar, I'd be happy to have a quick 20-minute call to share a few best practices.

    Congrats again,
    {{FounderName}}
`},{type:"file",name:"LinkedIn-Scripts.md",content:`
# LinkedIn Outreach Scripts

Scripts for connection requests, DMs, and nurturing sequences. The key is to be helpful, not salesy.

---

### **Connection Request Note**

*   **Goal:** Get the connection accepted. Keep it short, personalized, and non-demanding.
*   **Template:**
    > Hi [Name], I saw your post about [Topic] / that we're both in the [Group Name] group. I'm also focused on developer experience and engineering leadership. Would be great to connect and follow your work.

---

### **Sequence 1: The "Value Drop" After Connecting**

*   **Goal:** Establish credibility and start a conversation.
*   **Timing:** 1 day after they accept the connection request.

**DM 1:**
> Thanks for connecting, [Name]!
>
> Since you're a [VPE/Eng Manager], I thought you might find this interesting. I just published a "40-point GitHub Repo Audit Checklist" that a lot of engineering leaders are using to benchmark their codebase's health.
>
> Happy to send it over if you'd like a copy. No forms to fill out, just the direct link.
>
> Cheers,
> {{FounderName}}

**DM 2 (If they reply with interest):**
> Awesome, here it is: [Link to Lead Magnet]
>
> Let me know what you think, or if you have any questions as you go through it!

**DM 3 (If they reply positively after seeing it):**
> Glad it was helpful! A lot of teams find they're strong in one area (like CI) but have gaps in another (like documentation).
>
> If you ever want a second pair of eyes on your repo, I do free 20-minute strategy calls to help teams prioritize the top 2-3 fixes. Happy to find a time if that's useful.

---

### **Sequence 2: The Nurture Cadence (for connections who went cold)**

*   **Goal:** Stay top of mind by being consistently helpful.
*   **Timing:** Drip these messages out every 2-3 weeks.

**Nurture DM 1 (Sharing a Post):**
> Hi [Name], I wrote a post recently about the 3 most common mistakes teams make in their CI/CD setup. Thought you might find it relevant given your role at [Company].
>
> [Link to your LinkedIn Post]

**Nurture DM 2 (Sharing a Case Study/Result):**
> Hi [Name], hope you're having a great week.
>
> Just wanted to share a quick win. We recently worked with a Series B company to overhaul their main repository, and they were able to cut their new engineer onboarding time from 10 days down to 2.
>
> It's amazing how much leverage you can get from a clean, well-documented repo. Just thought it was a cool result to share!

**Nurture DM 3 (The Soft Ask):**
> Hi [Name], hope all is well.
>
> Is improving developer experience or onboarding efficiency on your team's roadmap for this quarter?

---

### **Sequence 3: Responding to a Trigger Post**

*   **Goal:** Use their content as a natural entry point for a conversation.
*   **Trigger:** They post about hiring, scaling challenges, tech debt, etc.

**Public Comment:**
> Great point about [Topic]. The cost of friction in the development process is so much higher than most teams realize. Especially agree with your take on [Specific Point].

**Follow-up DM:**
> Loved your post on [Topic]. It really resonated.
>
> The issue of [Pain Point from their post] is something I'm obsessed with. I spend all my time helping teams solve this specifically at the repository level (better docs, faster CI, clearer structure).
>
> If you're ever open to brainstorming solutions, I'd love to connect.
`},{type:"file",name:"GitHub-Community-Outreach.md",content:`
# GitHub Community Outreach (Non-Spammy Patterns)

The goal here is to build authority and generate inbound interest by being a genuinely helpful member of the community. This is a long-term play.

---

### **1. Value-Driven Comments in OSS Project Issues & Discussions**

*   **Target:** Popular open-source tools that your ICP uses (e.g., Vercel's Next.js, Storybook, testing libraries, infrastructure tools).
*   **The Wrong Way:** "Hey, I can solve this for you, book a call!"
*   **The Right Way:**
    1.  Find an issue or discussion thread where a user is struggling with something related to repository setup, CI/CD, or documentation.
    2.  **Provide a genuinely helpful, detailed answer.** Share a code snippet, link to a helpful resource, or explain a complex concept clearly.
    3.  **Your Profile is Your Landing Page:** Your GitHub profile should be optimized. It should have a clear bio ("Helping teams build world-class repositories"), a link to your landing page, and pinned repositories that showcase your expertise (e.g., a template repository).

*   **Example Comment:**
    > "Hey @user123, I've run into this exact CI issue before with GitHub Actions. The problem is often that the cache key isn't specific enough. You could try something like this: \`[YAML snippet]\`. This includes the lock file hash in the key, so it only re-installs when your dependencies actually change. Also, here's a great article that goes deeper on optimizing GHA caching: [Link]. Hope that helps!"

---

### **2. OSS Maintainer Partnerships**

*   **Target:** Maintainers of mid-sized but influential OSS projects.
*   **The Angle:** Many OSS projects are run by brilliant developers who are passionate about the code but don't have time for the "janitorial" work of repo hygiene.
*   **The Offer (Pro-Bono):**
    > "Hi [Maintainer Name], I'm a huge fan of [Project Name] and use it all the time. I specialize in repository architecture and developer experience. I noticed the contribution guidelines are a bit sparse and the issue templates could be more detailed.
    >
    > As a thank you to the project, I'd be happy to spend a few hours (pro-bono) to do a full overhaul of your \`CONTRIBUTING.md\`, PR/Issue templates, and add a "Good First Issue" workflow to make it easier for new contributors to jump in.
    >
    > Let me know if you'd be open to that. Thanks for all your work on this amazing tool!"

*   **The Payoff:** You get a public PR and contribution credit that serves as a powerful case study. You can then write a blog post about "How We Improved the Contributor Experience for [Project Name]."

---

### **3. Conference & Meetup CFP Pitches**

*   **Target:** Developer-focused conferences and local meetups.
*   **The Angle:** Your expertise is a niche but highly relevant topic that many engineering leaders care about.
*   **Talk Title Ideas:**
    *   "From Messy Repo to Money Repo: How to Turn Your Codebase into a High-Velocity Platform"
    *   "The First 60 Minutes: Architecting a Repository for Instant Developer Onboarding"
    *   "Beyond Linting: A Deep Dive into CI/CD Sanity Suites"
    *   "Stop the Bleeding: A VPE's Guide to Taming Tribal Knowledge"

*   **The Payoff:** Speaking at events establishes you as a thought leader, gives you incredible content to share, and generates warm inbound leads. Your talk is a top-of-funnel asset.
`},{type:"file",name:"Upwork-Proposal-Template.md",content:`
# Upwork Proposal Template

A template for quickly responding to relevant Upwork job posts. The key is to be fast, specific, and demonstrate you've read the post.

---

### **Template Structure**

**Subject: Re: [Job Post Title] - Proposal from a GitHub Repo Architect**

Hi there,

I just read your job post looking for help with [restate their primary problem, e.g., cleaning up your messy monorepo and improving CI/CD]. I'm a specialist in exactly this area, and I can help.

I've helped companies like yours solve these exact problems, resulting in:
*   **Faster Onboarding:** Cutting new hire setup time from days to hours.
*   **Reliable CI/CD:** Eliminating flaky builds and shrinking pipeline run-times by up to 75%.
*   **Better Documentation:** Creating a self-service repository that reduces developer confusion.

Based on your description, here's what I'd propose as a first step:

**Mini-Audit & Action Plan:**

1.  **Repo Structure:** [Provide one specific, insightful comment based on their description, e.g., "I would immediately establish a clear \`/src\` directory and a \`/scripts\` folder to separate application code from tooling."]
2.  **CI/CD:** [Provide another specific comment, e.g., "For your slow build times, I would start by implementing dependency caching in your GitHub Actions workflow, which often provides a quick 2-3x speed boost."]
3.  **Documentation:** [Provide a third specific comment, e.g., "I would overhaul your root README.md to act as a 'front door' for the project, with clear setup instructions and links to key architectural documents."]

I have a portfolio of "before and after" repository transformations I can share. My engagements are fixed-price, ensuring you get a predictable outcome without billing surprises.

I am available to start immediately and can connect for a brief call tomorrow to discuss your project in more detail.

Best regards,
{{FounderName}}

**[Link to your portfolio/landing page]**

---
### **Acceptance Criteria for Sending Proposal:**

*   [ ] Does the job post explicitly mention GitHub, CI/CD, documentation, onboarding, or developer experience?
*   [ ] Is the client's budget within a reasonable range of your minimum engagement?
*   [ ] Have you customized the 3 "mini-audit" bullet points to be specific to their job post?
*   [ ] Is the proposal sent within the first hour of the job being posted? (Speed is critical on Upwork).
`},{type:"file",name:"Partner-Intro-Email.md",content:`
# Partner Intro Email

An email template for reaching out to potential referral partners.

---

### **Target Partners:**

*   **MSPs (Managed Service Providers):** They manage cloud infrastructure but often don't go deep into the application code layer.
*   **Dev Agencies:** They build products but may not specialize in the final "polishing" and documentation for handoff.
*   **CTO Roundtables / Fractional CTOs:** They advise companies and are often the first to hear about scaling pains.
*   **VCs / Accelerators:** They have a portfolio of companies that are all facing these problems as they scale.

---

### **Email Template**

*   **Subject:** Partnership Idea: Helping your clients with GitHub DevEx

Hi [Partner Name],

My name is {{FounderName}}, and I run a specialized consultancy called [BrandName]. I'm reaching out because I see a potential overlap in the clients we serve.

You help companies with [Their Service, e.g., building amazing web applications]. I help them by ensuring the GitHub repository behind that application is clean, well-documented, and easy for their internal team to manage long after your engagement ends.

**The Problem I Solve:**
Many times, after a successful project handoff, a client's internal team struggles to navigate the new codebase. This can lead to frustration and reflect poorly on the initial engagement, even when the app itself is perfect.

**My Service:**
I offer a "QuickStart Hardening" service that creates a "GitPolish-grade" repository with excellent documentation, a solid CI/CD foundation, and clear contribution guidelines. For agencies, this turns the codebase itself into a professional, high-value deliverable.

**The Partnership Idea:**
If you ever have clients who need to professionalize their existing codebase, or if you want to offer a "premium handoff" package, I can be a white-label or referral partner to deliver that component.

I offer a standard **[e.g., 15%] referral fee** for any closed business.

Would you be open to a brief 15-minute introductory call next week to see if there's a fit?

Best,
{{FounderName}}
`}]},{type:"directory",name:"email",children:[{type:"file",name:"SpeedToLead-3Day.md",content:`
# Speed-to-Lead Sequence (First 3 Days)

This sequence triggers the moment someone books a call. The goal is to build rapport, provide value, and reduce the no-show rate.

---

### **Email 1: Instant Confirmation (Automated)**

*   **From:** {{FounderName}}
*   **Subject:** Your Repo Strategy Call is Confirmed!
*   **Body:**
    Hi [Name],

    Thanks for booking a Repo Strategy Call. I've just sent over a calendar invitation for our meeting on [Date] at [Time].

    To help you prepare, here are a couple of resources that you might find valuable:
    *   [Link to a relevant case study or blog post]
    *   [Link to the Repo Audit Checklist, in case they haven't seen it]

    My goal for our call is simple: for you to walk away with at least two actionable ideas to improve your repository, whether you choose to work with me or not.

    Looking forward to our chat!

    Best,
    {{FounderName}}

---

### **SMS Variant (Optional, requires phone number & consent)**

*   **Timing:** Instant
*   **Body:**
    > Hi [Name], it's {{FounderName}}. Just confirmed our Repo Strategy Call for [Date] at [Time]. Calendar invite is on its way to your email. Looking forward to it!

---

### **Email 2: The "Thinking About Your Problem" Email (1 Day Before Meeting)**

*   **From:** {{FounderName}}
*   **Subject:** Prepping for our call tomorrow
*   **Body:**
    Hi [Name],

    Looking forward to our chat tomorrow at [Time].

    I was reviewing the notes you shared in the booking form, especially your comment about [mention their specific pain point, e.g., "slow developer onboarding"]. This is a super common (and solvable!) problem.

    It got me thinking about a similar situation with a client, [Client Story Snippet, e.g., "a FinTech company that had the same issue. We found that the biggest bottleneck wasn't the code complexity, but a lack of a single, scripted setup process."].

    Come to the call ready to discuss [a specific question, e.g., "what the first day looks like for a new engineer on your team"]. I have a feeling we can find some quick wins there.

    Talk to you tomorrow!

    Best,
    {{FounderName}}

---

### **Email 3: Day-Of Reminder (1 Hour Before Meeting, Automated)**

*   **From:** {{FounderName}}
*   **Subject:** See you in 60 minutes
*   **Body:**
    Hi [Name],

    Just a quick reminder that our Repo Strategy Call is coming up in about an hour at [Time].

    The meeting link is in the calendar invite.

    Grab a coffee, and I'll see you shortly!

    Best,
    {{FounderName}}
`},{type:"file",name:"LeadMagnet-Delivery.md",content:`
# Lead Magnet Delivery Email

This email is sent automatically when someone requests the "Repo Audit Checklist."

---

### **Email 1: Here's Your Checklist!**

*   **From:** {{FounderName}}
*   **Subject:** Your Repo Audit Checklist is here
*   **Preheader:** The first step to a cleaner codebase.
*   **Body:**
    Hi [Name],

    Thanks for your interest in a more organized and efficient GitHub repository.

    As promised, here is your copy of the "Ultimate 40-Point Repo Audit Checklist."

    **[Button] Download the Checklist Now**
    (Or, use a direct link: [Link to PDF/Notion Page])

    I recommend running through this with your primary repository. It should take about 15-20 minutes and will give you a fantastic baseline "Repo Health Score."

    **Here's a common pattern I see:**
    Many teams score well on the "Code" and "CI/CD" sections but find major gaps in "Documentation" and "Governance." These are the areas that create hidden drag on your team's velocity.

    If you run through the list and find yourself with a score under 25, you're not alone. I'd be happy to jump on a free 20-minute call to help you prioritize the top 2-3 most impactful fixes. You can book a time that works for you here:
    **[Link to your calendar]**

    Let me know if you have any questions!

    Best,
    {{FounderName}}
`},{type:"file",name:"Nurture-10Emails.md",content:`
# 10-Part Nurture Sequence

This sequence is for leads who downloaded the checklist but did not book a call. It's dripped out over 4-6 weeks. The goal is to build trust by teaching, not selling.

---

*   **Timing:** Start 3 days after lead magnet download.
*   **Theme:** A "Repo Makeover" story arc.

**Email 1: The #1 Mistake in Repo Structure**
*   **Subject:** The one folder that's killing your repo's clarity
*   **Content:** The problem of a messy root directory. The solution: Aggressively use \`/scripts\`, \`/docs\`, and \`/src\` to keep the root clean. Provide a "before and after" file tree example.

**Email 2: Your README is a Billboard, Not a Novel**
*   **Subject:** Your README is your repo's front door
*   **Content:** Explain the "README 2.0" framework. It must answer 3 questions in 5 seconds: What is this? How do I set it up? How do I use it? Include a template.

**Email 3: The "Magic" in Your Code is Dangerous**
*   **Subject:** Is your code full of "magic"?
*   **Content:** Talk about tribal knowledge and undocumented scripts or environment variables. The solution: a simple \`ARCHITECTURE.md\` file and liberal use of comments for non-obvious code.

**Email 4: A Quick Win for Your CI Pipeline**
*   **Subject:** Speed up your CI by 2x today
*   **Content:** A mini-playbook on implementing dependency caching in GitHub Actions. Show the 3 lines of YAML that can save hours of build time.

**Email 5: Case Study Snippet**
*   **Subject:** How [Client] cut onboarding from a week to a day
*   **Content:** A short, punchy version of your main case study. Focus on the pain, the one key change (e.g., scripted setup), and the amazing result. (CTA: "Want to see if we can do the same for you? Book a call.")

**Email 6: The Power of a Good PR Template**
*   **Subject:** The 3 things every PR needs
*   **Content:** Why a blank PR description box is a missed opportunity. Provide a PULL_REQUEST_TEMPLATE.md that prompts for a summary, testing steps, and a link to the issue.

**Email 7: Are You Reviewing Code or Just "LGTM"-ing?**
*   **Subject:** Stop wasting time on code reviews
*   **Content:** Talk about how a CODEOWNERS file and clear branch protection rules can automate the review process and ensure the right eyes are on the right code.

**Email 8: The "Bus Factor" Litmus Test**
*   **Subject:** What happens if your top engineer wins the lottery?
*   **Content:** A direct discussion about the business risk of tribal knowledge. Frame your service as a form of "key person" insurance for their codebase.

**Email 9: The Hard Question**
*   **Subject:** Is your repo helping or hurting?
*   **Content:** A more direct email summarizing the costs of a messy repo (wasted salary, engineer frustration, shipping delays). (CTA: "If you're tired of dealing with this, let's talk. Here's my calendar.")

**Email 10: The Breakup / Final Offer**
*   **Subject:** Is this not a priority right now?
*   **Content:** A soft breakup email. "Hey, I've been sending you some resources on improving your repo, but it seems like this isn't a top priority for you right now, which is totally fine. I'll stop sending you these emails, but if anything changes, feel free to book a call. Here's a link to all the resources I've shared in one place."
`},{type:"file",name:"NoShow-Reschedule.md",content:`
# No-Show & Reschedule Sequence

This sequence triggers when a prospect misses a scheduled call.

---

### **Email 1: The "Hope Everything is OK" Email (5 Minutes After No-Show)**

*   **From:** {{FounderName}}
*   **Subject:** Checking in
*   **Body:**
    Hi [Name],

    I was on our scheduled call just now but it looks like you couldn't make it.

    Hope everything is alright!

    If you're still interested in chatting about your repository, my calendar is open – please feel free to grab a new time that works for you:
    **[Link to your calendar]**

    If your priorities have changed, no worries at all.

    Best,
    {{FounderName}}

---

### **SMS Variant (Optional, more direct)**

*   **Timing:** 5 minutes after no-show.
*   **Body:**
    > Hey [Name], it's {{FounderName}}. Just missed you on our call. Hope all is well. If you'd like to reschedule, just grab a new time from my calendar link I just emailed you. Thanks!

---

### **Email 2: The Gentle Nudge (2 Days Later)**

*   **From:** {{FounderName}}
*   **Subject:** Re: Checking in
*   **Reply in the same thread.**
*   **Body:**
    Hi [Name],

    Just wanted to quickly follow up. If you're still looking to tackle [their #1 pain point from the form], I'm happy to find another time to connect this week.

    Here's my calendar link again for convenience:
    **[Link to your calendar]**

    Let me know!

    Best,
    {{FounderName}}

---

### **Email 3: The Breakup (4 Days Later)**

*   **From:** {{FounderName}}
*   **Subject:** Closing the loop
*   **Body:**
    Hi [Name],

    Since I haven't heard back, I'm going to assume that improving your repository strategy isn't a priority for you at the moment, and I'll be closing your file.

    If that's not the case, and you'd still like to chat, you know where to find me.

    Wishing you and [Company] all the best.

    Best,
    {{FounderName}}
`},{type:"file",name:"PostCall-Followup.md",content:`
# Post-Call Follow-up Email

This email is sent within 1-2 hours after a successful discovery call.

---

### **Template**

*   **From:** {{FounderName}}
*   **Subject:** Great chat about [Company]'s repository
*   **Body:**
    Hi [Name],

    Thanks again for your time today. I really enjoyed learning about [Company] and the challenges you're facing with [mention a specific detail, e.g., "managing the complexity of your monorepo as you scale"].

    **To recap our conversation, here are the key takeaways:**

    *   **Your Primary Goal:** [e.g., To reduce new engineer onboarding time from 1 week to 1-2 days.]
    *   **The Main Obstacles:**
        *   [Obstacle 1, e.g., Lack of a scripted, one-command setup process.]
        *   [Obstacle 2, e.g., A slow and unreliable CI pipeline.]
        *   [Obstacle 3, e.g., Undocumented "tribal knowledge" around deployments.]
    *   **The Business Impact:** [e.g., This is currently costing you significant engineering hours and slowing down feature velocity.]

    **Next Steps:**
    As discussed, I am putting together a formal proposal for our **[Name of Service, e.g., QuickStart Hardening]** engagement. It will outline the full scope of work, deliverables, timeline, and a fixed-price investment.

    I will have that over to you by [Date, e.g., EOD tomorrow].

    In the meantime, here is the [Resource you promised, e.g., case study about the FinTech company] we talked about.

    Please let me know if you have any questions. It was great speaking with you, and I'm excited about the possibility of helping you build a world-class repository.

    Best,
    {{FounderName}}
`},{type:"file",name:"Breakup-Sequence.md",content:`
# Breakup Sequence (Post-Proposal, No Response)

This sequence is for leads who have received a proposal but have gone silent.

---

### **Email 1: The Gentle Check-In (5-7 Days After Proposal Sent)**

*   **From:** {{FounderName}}
*   **Subject:** Re: Proposal for [Company]
*   **Reply in the proposal email thread.**
*   **Body:**
    Hi [Name],

    Just wanted to check in and see if you had a chance to review the proposal I sent over last week.

    Happy to answer any questions you might have.

    Let me know what you think!

    Best,
    {{FounderName}}

---

### **Email 2: The "Is This Still a Priority?" Email (7 Days Later)**

*   **From:** {{FounderName}}
*   **Subject:** Re: Proposal for [Company]
*   **Reply in the same thread.**
*   **Body:**
    Hi [Name],

    Following up on the proposal for the repository hardening project.

    When we last spoke, tackling [Their #1 Pain Point] seemed like a key priority for this quarter. Has anything changed on your end?

    Even if you've decided to go in a different direction, a quick reply to let me know would be much appreciated.

    Thanks,
    {{FounderName}}

---

### **Email 3: The Breakup Email (7 Days Later)**

*   **From:** {{FounderName}}
*   **Subject:** Closing your file
*   **Body:**
    Hi [Name],

    I've tried to get in touch a few times regarding the proposal for the repository architecture project, but haven't heard back.

    This usually means one of three things:
    1.  You're swamped and this has fallen off your radar.
    2.  Your priorities have changed and this is no longer relevant.
    3.  You've decided to go in another direction or handle it internally.

    In any case, I'm going to go ahead and close your file for now to avoid cluttering your inbox.

    If you do decide you want to pick this back up in the future, please don't hesitate to reach out.

    Wishing you and [Company] all the best.

    Best,
    {{FounderName}}
`}]},{type:"directory",name:"content",children:[{type:"file",name:"30Day-ContentCalendar.md",content:`
# 30-Day Content Calendar (LinkedIn Focus)

A daily plan for LinkedIn content to build authority and generate inbound leads. Mix of formats: text-only, image, video (Loom).

---

**Week 1: The Problem & The Pain**

*   **Day 1 (Mon):** Text Post - "Your GitHub repo is either an accelerator or an anchor. There is no in-between. Which is yours?" (Engage with comments)
*   **Day 2 (Tue):** Image Post - "Before and After" file tree of a messy vs. clean repo root.
*   **Day 3 (Wed):** Loom Video - 2-min teardown of a public repo's README, explaining how it could be improved.
*   **Day 4 (Thu):** Text Post - "The 3 silent killers of developer velocity: 1. Slow CI, 2. Tribal Knowledge, 3. Onboarding Friction. You must fix them."
*   **Day 5 (Fri):** Poll - "What's the biggest pain in your repo right now? A) Slow CI, B) Bad Docs, C) Confusing Structure, D) All of the above."

**Week 2: The Solution & The Frameworks**

*   **Day 8 (Mon):** Text Post - Introduce the "Repo Health Score" concept. "You can't improve what you don't measure. We score repos from 0-100."
*   **Day 9 (Tue):** Carousel Post - 5 slides explaining the "README 2.0" framework.
*   **Day 10 (Wed):** Text Post - "Hot take: Your CI pipeline should be so fast and reliable that developers *want* to run it."
*   **Day 11 (Thu):** Loom Video - "How to set up a PULL_REQUEST_TEMPLATE.md in 90 seconds." (Quick, actionable tutorial).
*   **Day 12 (Fri):** Text Post - Share a client win. "Just helped a client cut their new hire onboarding from 1 week to 1 day. The lever? A single scripted setup command."

**Week 3: The ROI & The Business Case**

*   **Day 15 (Mon):** Text Post - "How to calculate the ROI of a clean repo. Formula: (Avg Engineer Salary / Hours in Year) * (Hours Wasted Per Week) * (Number of Engineers)."
*   **Day 16 (Tue):** Image Post - A simple chart showing the decreasing "Time to First PR" for a client.
*   **Day 17 (Wed):** Text Post - "Talking to your CTO about DevEx? Don't talk about 'clean code.' Talk about 'cost of delay' and 'hiring advantage'."
*   **Day 18 (Thu):** Carousel Post - 3 slides on "Why hiring a Repo Architect is cheaper than a full-time DevOps engineer."
*   **Day 19 (Fri):** Q&A Post - "I specialize in fixing messy GitHub repos. Ask me anything."

**Week 4: The Call to Action & The Offer**

*   **Day 22 (Mon):** Text Post - "I created a 40-point checklist to audit your own repo. Want a copy?" (Drive lead magnet downloads).
*   **Day 23 (Tue):** Loom Video - Walkthrough of you using the checklist on a public repo, calculating its score.
*   **Day 24 (Wed):** Case Study Post - Link to your full case study. Pull out the best quote for the post body.
*   **Day 25 (Thu):** Text Post - Direct offer. "I have 2 slots open next month for a 'QuickStart Hardening' engagement. We'll take your repo from chaos to clarity in 3 weeks. DM me 'repo' if you want details."
*   **Day 26 (Fri):** Personal Story - "Why I'm obsessed with this niche. My story of working in a company with a repo from hell..."
`},{type:"file",name:"8-LinkedIn-Posts.md",content:`
# 8 LinkedIn Posts (Copy-Pasteable)

---

### **Post 1: The Hook (Text-Only)**

Your GitHub repo is either an accelerator or an anchor.

It's either helping your team ship faster, or it's actively slowing them down with friction, confusion, and tech debt.

There is no in-between.

Which is yours?

#DevEx #EngineeringLeadership #GitHub

---

### **Post 2: The Pain Point (Text-Only)**

The 3 silent killers of developer velocity:

1.  **Onboarding Friction:** Your new hire spends their first week just trying to get the project to run locally. (Cost: ~$3,000 in salary).
2.  **Tribal Knowledge:** Critical deployment info lives only in the head of your one senior engineer. (Risk: Catastrophic).
3.  **Slow CI/CD:** A 30-minute build that runs 20 times a day is 10 hours of dead time. For a team of 10, that's a full-time job. (Cost: ~$15,000/month).

Fixing your repo isn't "janitorial work."
It's high-leverage business optimization.

#VPE #CTO #DeveloperExperience

---

### **Post 3: The Framework (Carousel/Image)**

**Title:** You're thinking about your README all wrong.

**Slide 1:** Your README isn't a novel. It's a billboard.
**Slide 2:** It must answer 3 questions in 5 seconds:
    1. What is this project? (A one-sentence description)
    2. How do I get it running? (A single, copy-pasteable command)
    3. How do I use it? (Link to key usage examples or next steps)
**Slide 3:** Add badges for CI status and code coverage. Trust signals matter.
**Slide 4:** Include a simple diagram of the architecture. A picture is worth 1000 words of documentation.
**Slide 5:** Stop treating it like an afterthought. Your README is the front door to your codebase. Make it welcoming.

#Documentation #GitHub #CleanCode

---

### **Post 4: The Quick Win (Loom/Video Idea)**

(Video of you showing a GitHub Actions workflow file)

"Here's how to speed up your GitHub Actions CI by 2-3x in 60 seconds.

Most teams forget to cache their dependencies. This means you're re-downloading gigs of packages on every single run.

All you need to do is add this 'actions/cache' step to your YAML file. (Show the code).

It uses a hash of your lock file as a key. This tells GitHub: 'If the dependencies haven't changed, just reuse the ones from the last run.'

It's a tiny change that can save your team hours every single week."

#GitHubActions #CI/CD #DevOps

---

### **Post 5: The Case Study Snippet (Text-Only)**

We just helped a Series B FinTech company cut their new engineer onboarding time from 10 days down to 2.

The crazy part? We didn't touch a single line of their application code.

The entire win came from:
1.  Creating a single, scripted setup command.
2.  Rewriting the README to be a step-by-step guide.
3.  Recording a 15-minute Loom video walking through the architecture.

Don't underestimate the power of a great developer experience.

#Onboarding #DevEx #CaseStudy

---

### **Post 6: The Business Case (Text-Only)**

Talking to your non-technical CEO about repo health?

Don't say:
"We need to refactor our CI scripts and improve documentation."

Say:
"I want to launch a project to cut new hire onboarding costs by 80% and increase our feature shipping velocity by 15%. It's a one-time investment that will pay dividends on every future engineer we hire."

Frame the solution in the language of the business.

#CTO #VPE #EngineeringManagement

---

### **Post 7: The Direct Offer (Text-Only)**

I have 2 slots open in [Month] for a "QuickStart Repo Hardening" engagement.

In 3 weeks, we'll take your most critical repository from chaos to clarity.
- We'll fix your CI pipeline.
- We'll overhaul your documentation.
- We'll implement best-practice branch protections and contribution guidelines.

The result? Your team moves faster, with less friction.

This is for teams of 10-50 engineers who are tired of fighting their own codebase.

DM me "repo" if you want the details.

#GitHub #DevOps #Consulting

---

### **Post 8: The Poll**

What's the most painful part of your primary GitHub repo?

- Flaky / Slow CI
- Lack of Good Documentation
- Confusing Folder Structure
- All of the above (help)

#DeveloperExperience #GitHub #Poll
`},{type:"file",name:"3-YouTube-Scripts.md",content:`
# 3 YouTube Video Scripts (Short-Form, 5-10 mins)

---

### **Video 1: "I Audited Google's Go-Microservice Repo - Here's What I Found"**

*   **Hook:** "Google is known for world-class engineering. But is their public code perfect? I ran their microservices-demo repo through my 40-point audit checklist. Here's the good, the bad, and the ugly."
*   **Segment 1: The Good (Praise Publicly)**
    *   Show screen recording of the repo.
    *   "First off, the structure is excellent. Clear separation of services, a top-level \`/src\` directory. This gets a 10/10."
    *   "Their use of a \`Taskfile.yml\` to standardize commands is brilliant. It's like a Makefile but simpler."
*   **Segment 2: The Opportunities for Improvement (Critique Gently)**
    *   "The README is good, but it's very dense. I'd add a quick-start section right at the top for impatient developers."
    *   "Their CI pipeline is split across many files. I'd consolidate it into a single, more discoverable GitHub Actions workflow."
    *   "There's no PULL_REQUEST_TEMPLATE. This is a huge missed opportunity to guide contributors."
*   **Segment 3: The Final Score & Takeaway**
    *   "Overall, I give this repo a solid 32/40. It's fantastic, but even Google has room to improve their public-facing developer experience."
    *   **CTA:** "If you want to run this same audit on your own repository, I've made the checklist I used today available for free. Link in the description."

---

### **Video 2: "Stop Writing Documentation. Start Designing It."**

*   **Hook:** "Everyone hates writing documentation. And nobody reads it. Why? Because we treat it like a chore. Today, I'm going to show you how to *design* a documentation system that developers actually love to use."
*   **Segment 1: The 3 Levels of Documentation**
    *   Use a simple whiteboard or digital equivalent.
    *   "**Level 1: The README.** This is your front door. It needs a description, a single setup command, and a link to Level 2."
    *   "**Level 2: The How-To Guides.** These live in \`/docs\`. They are recipe-style guides for common tasks: 'How to run tests,' 'How to deploy to staging,' 'How to connect to the database'."
    *   "**Level 3: The Why (ADRs).** Architectural Decision Records. A simple markdown file for every major decision. 'Why we chose Postgres over MySQL.' This stops recurring debates."
*   **Segment 2: The Tools of the Trade**
    *   Show screen recording.
    *   "Use a PULL_REQUEST_TEMPLATE to force documentation updates."
    *   "Use a CODEOWNERS file to assign documentation ownership."
    *   "Use a linter for documentation (like Vale) to enforce style."
*   **Segment 3: The Golden Rule**
    *   "The golden rule is this: documentation should live as close to the code as possible. That's why I'm a huge fan of keeping it all in the GitHub repo, not in a separate system like Confluence where it will go stale."
    *   **CTA:** "I help teams design and implement these documentation systems. If your docs are a mess, click the link in the description to book a free strategy call."

---

### **Video 3: "The 5 CI Checks Every Repo MUST Have (The Sanity Suite)"**

*   **Hook:** "Your CI pipeline is your repository's immune system. If it's weak, you'll get sick. Here are the 5 essential checks that form a 'CI Sanity Suite' for any modern codebase."
*   **Segment 1: The Checks (Show YAML snippets for each)**
    *   **1. Linter:** "This is the cheapest and fastest check. It catches style errors before they even become a discussion. Run it first."
    *   **2. Unit Tests:** "These check the individual components of your code. They should be fast and have no external dependencies."
    *   **3. Integration Tests:** "These check that your components work together. They're slower, so run them after the unit tests pass."
    *   **4. Build Check:** "'Does it compile?' This seems obvious, but it's a critical check, especially for compiled languages."
    *   **5. Security Scan:** "This is non-negotiable. Use something like CodeQL or Snyk to automatically scan for vulnerabilities on every PR. This is your first line of defense."
*   **Segment 2: The Philosophy**
    *   "The goal of the Sanity Suite is a fast feedback loop. It should run in under 10 minutes. Anything longer, and developers will start to ignore it."
    *   "Notice what's NOT in here: end-to-end tests, performance tests. Those are important, but they should be in a separate, slower pipeline that runs post-merge, not on every single PR."
*   **Segment 3: The Next Step**
    *   "Implementing a solid CI Sanity Suite is one of the highest-leverage things you can do for your team's productivity and your product's stability."
    *   **CTA:** "If your CI is slow, flaky, or non-existent, this is my specialty. Let's chat. Link in the description to book a call."
`},{type:"file",name:"Webinar-Outline.md",content:`
# Webinar Outline: "From Messy Repo to Money Repo"

**Title:** From Messy Repo to Money Repo: How to Turn Your Codebase into a High-Velocity Platform

**Audience:** CTOs, VPEs, Engineering Managers

---

### **Part 1: The "A-ha" Moment (10 minutes)**

*   **Introduction:**
    *   "Hi, I'm {{FounderName}}, and I'm obsessed with the one thing most engineering leaders ignore: the health of their GitHub repository."
    *   "My story: a tale of a project I worked on where a messy repo brought a team of 20 brilliant engineers to a grinding halt."
*   **The Core Thesis:**
    *   "Your repository is not just a folder for your code. It is the factory floor for your entire engineering team. A messy factory is an unproductive factory."
*   **The Hidden Costs of a Messy Repo (The "Why You Should Care"):**
    *   Show a slide with 3 numbers:
        *   **$7,500:** The average cost of onboarding one new engineer in a messy repo (2 weeks of lost productivity).
        *   **10 hours/week:** The time an average team of 10 wastes on flaky CI and debugging setup issues.
        *   **50%:** The hit to developer morale and retention when tools are constantly getting in the way.
*   **Poll:** "On a scale of 1-5, how would you rate the health of your primary repository?"

---

### **Part 2: The 3-Pillar Framework for a "Money Repo" (25 minutes)**

*   **Introduction to the Framework:** "A world-class repository stands on three pillars: Clarity, Automation, and Governance."
*   **Pillar 1: Clarity (The Self-Documenting Repo)**
    *   The README 2.0: Your repo's front door.
    *   The Scripted Setup: One command to rule them all.
    *   ADRs: Why over What.
    *   *Live Demo:* Show a "before" and "after" of a README and a one-line setup script.
*   **Pillar 2: Automation (The Trust Engine)**
    *   The CI Sanity Suite: The 5 checks every PR needs.
    *   Dependency Management: Dependabot is your best friend.
    *   Preview Environments: The ultimate PR review tool.
    *   *Live Demo:* Walk through a GitHub Actions workflow YAML, explaining the key parts (caching, required checks).
*   **Pillar 3: Governance (The Paved Road)**
    *   Branch Protection: Why your 'main' branch should be sacred.
    *   CODEOWNERS: Automating the review process.
    *   Issue/PR Templates: Guiding developers to success.
    *   *Live Demo:* Show the branch protection settings screen in GitHub and a well-structured PR template in action.

---

### **Part 3: The 7-Day Action Plan & Q&A (15 minutes)**

*   **The "You Can Start Today" Plan:**
    *   **Day 1:** Install a PULL_REQUEST_TEMPLATE.md file. (5-minute win).
    *   **Day 2:** Run a linter in your CI pipeline.
    *   **Day 3-5:** Rewrite your README.
    *   **Day 6-7:** Script your local setup process.
*   **The Offer (The Soft Pitch):**
    *   "This framework works. But implementing it takes focus and time that you and your team might not have."
    *   "If you want to accelerate this process, I offer a 'QuickStart Hardening' service where my team and I implement this entire framework for you in about 3 weeks."
    *   "As a thank you for attending this webinar, I'm offering a free, no-obligation Repo Strategy Call. We'll spend 30 minutes mapping out exactly how these principles would apply to your specific repository."
*   **The CTA:**
    *   "A link to my calendar is in the chat. The first 5 people to book will also get a free, detailed 'Repo Health Score' audit."
*   **Q&A Session:**
    *   Open the floor for questions.
`}]},{type:"directory",name:"ads",children:[{type:"file",name:"Google-Search.md",content:`
# Google Search Ads Copy

**Campaign Goal:** Lead Generation (Book a Call)
**Targeting:** Based on keywords.

---

### **Ad Group 1: Problem-Aware (e.g., "slow ci/cd")**

*   **Headline 1:** Slow CI/CD? Fix it in Weeks
*   **Headline 2:** GitHub Actions & CI/CD Experts
*   **Headline 3:** Cut Your Build Times by 75%
*   **Description 1:** Stop wasting engineer hours on flaky builds. We harden your CI/CD pipeline for speed and reliability.
*   **Description 2:** Get a free CI/CD audit. We'll find your top 3 bottlenecks in a free 20-minute strategy call.
*   **Landing Page:** Funnel -> LandingPage.md

---

### **Ad Group 2: Solution-Aware (e.g., "github consulting")**

*   **Headline 1:** Expert GitHub Consultants
*   **Headline 2:** We Architect World-Class Repos
*   **Headline 3:** Improve Your Developer Experience
*   **Description 1:** We help CTOs and VPEs turn their GitHub repos into high-velocity development platforms.
*   **Description 2:** Onboarding, CI/CD, Documentation, and Governance. Book a free consultation today.
*   **Landing Page:** Funnel -> LandingPage.md

---

### **Ad Group 3: Onboarding Pain (e.g., "developer onboarding")**

*   **Headline 1:** Slow Developer Onboarding?
*   **Headline 2:** Cut Onboarding Time by 80%
*   **Headline 3:** New Hires Shipping Code Day 1
*   **Description 1:** Our "Repo Hardening" service creates a self-service, well-documented codebase for new engineers.
*   **Description 2:** Stop wasting your senior engineers' time on hand-holding. Let's automate your onboarding.
*   **Landing Page:** Funnel -> LandingPage.md

---

### **Sitelink Extensions:**

*   **Sitelink 1:** Free Repo Audit
    *   *Description:* Get a free 40-point checklist.
*   **Sitelink 2:** Case Studies
    *   *Description:* See how we helped our clients.
*   **Sitelink 3:** Our Services
    *   *Description:* Audits, Hardening, & Retainers.
*   **Sitelink 4:** Book a Free Call
    *   *Description:* Get a no-obligation strategy plan.
`},{type:"file",name:"LinkedIn-Ads.md",content:`
# LinkedIn Ads Copy & Creatives

**Campaign Goal:** Lead Generation (Lead Magnet Download)
**Targeting:**
*   **Job Titles:** VP of Engineering, Director of Engineering, Engineering Manager, Head of Engineering, CTO.
*   **Company Size:** 10-500 employees.
*   **Industry:** Computer Software, IT Services, FinTech.

---

### **Ad Creative 1: The Checklist (Single Image Ad)**

*   **Image:** A visually appealing mockup of the "Repo Audit Checklist" PDF.
*   **Ad Copy:**
    *   **Intro:** Is your GitHub repo an accelerator or an anchor?
    *   **Body:** Most engineering teams are slowed down by hidden friction in their codebase: messy structure, tribal knowledge, and flaky CI. I created a 40-point checklist that helps VPEs and Engineering Managers score their repository's health and pinpoint the biggest bottlenecks.
    *   **CTA:** Download the free "GitHub Repo Audit Checklist" and get a clear picture of where you stand.
*   **Headline:** Free Download: The Repo Audit Checklist
*   **Landing Page:** A dedicated landing page for the lead magnet.

---

### **Ad Creative 2: The "Before & After" (Carousel Ad)**

*   **Card 1:**
    *   **Image:** A screenshot of a messy, cluttered repository file tree.
    *   **Headline:** Does this look familiar?
*   **Card 2:**
    *   **Image:** A screenshot of a clean, perfectly organized repository file tree.
    *   **Headline:** We help you get to this.
*   **Card 3:**
    *   **Image:** A simple graphic with the text "Result: 80% Faster Onboarding".
    *   **Headline:** So you can achieve this.
*   **Ad Copy:**
    *   **Intro:** We turn chaotic codebases into high-velocity platforms.
    *   **Body:** A messy GitHub repo isn't just a nuisance; it's a tax on every single engineer, every single day. We help engineering leaders clean up their repos, streamline their CI/CD, and create a developer experience that attracts and retains top talent.
    *   **CTA:** Learn more about our "Repo Hardening" service.
*   **Headline:** From Chaos to Clarity in GitHub
*   **Landing Page:** Funnel -> LandingPage.md

---

### **Ad Creative 3: The Video Ad (Talking Head)**

*   **Video:** A 60-second video of {{FounderName}} speaking directly to the camera.
*   **Script:**
    > "If you're a VP of Engineering, how much does it cost you when a new hire spends their first two weeks just trying to get your main app to run locally? At least $5,000.
    > How much does it cost when your CI pipeline is slow and your best engineers are debugging YAML files instead of shipping code?
    > These aren't small problems. They are massive drains on your budget and your team's momentum.
    > My name is {{FounderName}}, and I help engineering teams fix this. We architect GitHub repositories for speed, clarity, and stability.
    > If you're tired of fighting your own tools, click the link below to book a free, 20-minute Repo Strategy Call. I guarantee you'll walk away with at least two actionable ideas you can implement immediately."
*   **Headline:** Stop Wasting Engineering Hours
*   **Landing Page:** Funnel -> CalendarPage.md
`},{type:"file",name:"Retargeting-Creatives.md",content:`
# Retargeting Ads Creatives

**Campaign Goal:** Conversion (Book a Call)
**Targeting:**
*   Website visitors from the last 90 days.
*   Excluding those who have already converted (booked a call).
*   People who have engaged with LinkedIn page/ads.

---

### **Ad Creative 1: The Case Study (LinkedIn/Facebook)**

*   **Image:** A graphic with the client's logo and the primary result: "80% Faster Developer Onboarding".
*   **Ad Copy:**
    *   **Intro:** You've seen what we do. Here's what we've done.
    *   **Body:** We helped [Client Name] transform their onboarding process, taking new hires from a 2-week setup nightmare to shipping code on day two. This was achieved not by changing their application, but by architecting their repository for clarity and efficiency.
    *   **CTA:** Ready to get similar results?
*   **Headline:** See How [Client Name] Did It
*   **Landing Page:** The full case study page (or a blog post).

---

### **Ad Creative 2: The Direct Offer (LinkedIn/Facebook)**

*   **Image:** A simple, text-based graphic: "Still struggling with your repo?"
*   **Ad Copy:**
    *   **Intro:** Still thinking about cleaning up that messy repo?
    *   **Body:** Procrastination won't fix a slow CI pipeline or a confusing codebase. Let's hop on a quick 20-minute call. We'll diagnose your top bottleneck and map out a concrete action plan. No pressure, just solutions.
    *   **CTA:** Book your free, no-obligation Repo Strategy Call today.
*   **Headline:** Let's Fix Your Repo
*   **Landing Page:** Funnel -> CalendarPage.md

---

### **Ad Creative 3: The "Why Not Us?" Ad (LinkedIn)**

*   **Image:** A simple graphic comparing two options.
    *   **Left Side (DIY):** "Spend 6 months trying to fix it internally."
    *   **Right Side (With Us):** "Get it done in 3 weeks with a specialist."
*   **Ad Copy:**
    *   **Intro:** You can fix your repo yourself. But should you?
    *   **Body:** Your best engineers should be building your product, not getting bogged down in repo janitorial work. We provide the focused, expert effort to solve the problem quickly, so your team can get back to what they do best.
    *   **CTA:** Save time and get a better result.
*   **Headline:** The Smartest Path to a Clean Repo
*   **Landing Page:** Funnel -> LandingPage.md
`},{type:"file",name:"Keyword-Seedlist.csv",content:`
"Keyword","Match Type","Ad Group"
"slow github actions","Broad Match","Problem-Aware"
"slow ci/cd pipeline","Broad Match","Problem-Aware"
"improve ci/cd speed","Broad Match","Problem-Aware"
"github actions consulting","Phrase Match","Solution-Aware"
"github consultant","Phrase Match","Solution-Aware"
"devops consulting services","Broad Match","Solution-Aware"
"developer experience consultant","Phrase Match","Solution-Aware"
"improve developer experience","Broad Match","Onboarding Pain"
"developer onboarding process","Broad Match","Onboarding Pain"
"technical onboarding for engineers","Broad Match","Onboarding Pain"
"how to structure a monorepo","Broad Match","Problem-Aware"
"github repository best practices","Phrase Match","Solution-Aware"
"github branch protection rules","Exact Match","Problem-Aware"
"what is developer velocity","Broad Match","Solution-Aware"
"cto consulting","Phrase Match","Solution-Aware"
"vpe services","Phrase Match","Solution-Aware"
"professionalize engineering team","Phrase Match","Onboarding Pain"
"fix messy codebase","Broad Match","Problem-Aware"
"code quality consultant","Phrase Match","Solution-Aware"
"github actions expert","Exact Match","Solution-Aware"
`}]},{type:"directory",name:"crm",children:[{type:"file",name:"Pipeline-Stages.md",content:`
# CRM Pipeline Stages

This document defines the deal stages for our sales pipeline in the CRM (e.g., HubSpot, Pipedrive, Airtable).

---

### **Pipeline: "New Client Acquisition"**

**Stage 1: New**
*   **Definition:** A new lead has entered the system via form submission, list import, or manual creation. No two-way communication has occurred yet.
*   **Entry Criteria:** Lead created.
*   **Exit Criteria:** A two-way conversation has started (email reply, call booked).
*   **SLA:** Must be moved out of this stage within 24 hours.

**Stage 2: Qualified**
*   **Definition:** A two-way conversation has occurred. The lead has been qualified through the BANT framework (Budget, Authority, Need, Timeline) or a similar methodology. They are a good fit for our services.
*   **Entry Criteria:** Discovery call booked OR positive email reply confirming interest and fit.
*   **Exit Criteria:** Discovery call completed.
*   **SLA:** Lead should not stay in this stage for more than 7 days.

**Stage 3: Discovery**
*   **Definition:** The discovery call is complete. We are in the process of deeply understanding the client's needs and preparing a formal proposal.
*   **Entry Criteria:** Discovery call marked as "Completed" in the CRM.
*   **Exit Criteria:** Proposal has been sent to the client.
*   **SLA:** Proposal should be sent within 48 hours of the discovery call.

**Stage 4: Proposal**
*   **Definition:** The client has received our proposal and is reviewing it.
*   **Entry Criteria:** Proposal sent.
*   **Exit Criteria:** Client has verbally or via email agreed to move forward and is ready for the contract, or has requested changes.
*   **SLA:** Follow up every 3-5 days. If no response after 14 days, move to "On Hold" or "Lost".

**Stage 5: Negotiation**
*   **Definition:** The client has accepted the proposal in principle but is negotiating terms (scope, price, legal). The contract (MSA/SOW) is under review.
*   **Entry Criteria:** Positive feedback on proposal, contract sent for review.
*   **Exit Criteria:** Contract signed by both parties.
*   **SLA:** Drive to a conclusion within 7-10 days.

**Stage 6: Won**
*   **Definition:** The contract is signed and the invoice has been sent. The project is ready to be handed off to the delivery team.
*   **Entry Criteria:** Signed contract received.
*   **Exit Criteria:** Project is successfully onboarded and moved to a "Current Client" status.

**Stage 7: Lost**
*   **Definition:** The deal is lost for a specified reason.
*   **Entry Criteria:** Client explicitly says no, or has gone completely cold after the proposal stage.
*   **Required Action:** Must fill in "Lost Reason" custom field (e.g., Price, Timing, Competition, No Response).

**Stage 8: On Hold**
*   **Definition:** The client is still interested but the project is paused due to internal factors (budget freeze, re-org, etc.).
*   **Entry Criteria:** Client has communicated a delay.
*   **Action:** Set a follow-up task for the agreed-upon date (e.g., "Check in next quarter").
`},{type:"file",name:"Custom-Fields.md",content:`
# CRM Custom Fields

These are the custom fields to create on the Contact and Deal objects in the CRM to track critical information.

---

### **Contact Object Fields**

*   **Role (Dropdown):**
    *   *Values:* C-Level, VP/Director, Manager, IC (Individual Contributor), Agency Owner, Other
    *   *Source:* Form submission, manual entry.

*   **LinkedIn Profile URL (URL):**
    *   *Purpose:* Quick access for research and social selling.
    *   *Source:* Manual entry, enrichment tool (e.g., Clearbit).

*   **Lead Source (Dropdown):**
    *   *Values:* Organic Search, Paid Search, LinkedIn (Organic), LinkedIn (Paid), Referral, Upwork, Cold Outreach, Other.
    *   *Purpose:* Track channel effectiveness.
    *   *Source:* Automation based on form UTM parameters, manual entry.

---

### **Deal Object Fields**

*   **Service Tier (Dropdown):**
    *   *Values:* Tier 1 - Audit, Tier 2 - Hardening, Tier 3 - Steward.
    *   *Purpose:* Track which services are most popular.

*   **GitHub Repo URL (URL):**
    *   *Purpose:* Central place to store the primary repository we are discussing.
    *   *Source:* Form submission, discovery call.

*   **Primary Tech Stack (Text):**
    *   *Purpose:* Understand the client's technical environment (e.g., "TypeScript, Go, AWS").
    *   *Source:* Form submission, discovery call.

*   **Engineering Team Size (Number):**
    *   *Purpose:* Key ICP qualification data.
    *   *Source:* Form submission, discovery call.

*   **Primary Pain Point (Dropdown - Multi-select):**
    *   *Values:* Onboarding, CI/CD, Documentation, Governance, Code Quality, Security.
    *   *Purpose:* Quickly understand the client's main driver for the engagement. Used for reporting.
    *   *Source:* Form submission, discovery call.

*   **Urgency (Dropdown):**
    *   *Values:* High (This Quarter), Medium (Next Quarter), Low (Exploring).
    *   *Purpose:* Helps with forecasting.
    *   *Source:* Discovery call.

*   **Blockers (Text):**
    *   *Purpose:* Note any internal issues on the client side that might stall the deal (e.g., "Needs CTO budget approval").
    *   *Source:* Discovery call, follow-up conversations.

*   **Lost Reason (Dropdown):**
    *   *Required when a deal is moved to "Lost".*
    *   *Values:* Price, Timing, Competition, Went with Internal Solution, No Response, Unqualified.
    *   *Purpose:* Analyze losses to improve the sales process.

*   **Referral Partner (Lookup to Contact/Company):**
    *   *Purpose:* Track deals that came from referral partners to manage payouts.
`},{type:"file",name:"Lead-Scoring.md",content:`
# Lead Scoring Model

This model assigns points to leads based on their fit (demographics) and intent (behaviors) to help prioritize follow-up.

*   **Thresholds:**
    *   **0-20:** Low Priority (Nurture sequence only)
    *   **21-50:** MQL (Marketing Qualified Lead) - SDR/BDR Follow-up
    *   **51+:** SQL (Sales Qualified Lead) - Founder/AE immediate follow-up

---

### **Part 1: Fit Scoring (Who they are)**

**Role:**
*   C-Level, VP/Director: **+20 points**
*   Manager, Agency Owner: **+15 points**
*   IC (Staff/Principal): **+5 points** (Influencer)
*   Other/Student: **-10 points**

**Engineering Team Size:**
*   10-50: **+20 points** (Sweet Spot)
*   51-150: **+15 points**
*   5-9: **+10 points**
*   150+: **+5 points** (Potentially too complex/political)
*   1-4: **0 points** (Too small)

**Primary Pain Point (from form):**
*   "Onboarding" or "CI/CD" selected: **+10 points**

**Tech Stack:**
*   Contains "TypeScript", "Go", "Python", "Rust": **+5 points**

---

### **Part 2: Intent Scoring (What they do)**

**Website & Email Engagement:**
*   Booked a Call (form submission): **+100 points (Auto-SQL)**
*   Downloaded Lead Magnet (form submission): **+15 points**
*   Visited Pricing Page: **+10 points**
*   Visited Case Study Page: **+10 points**
*   Clicked link in Nurture Email: **+5 points**
*   Opened Nurture Email: **+1 point**
*   Unsubscribed from email: **-50 points**

**Activity Timeline:**
*   Activity in the last 7 days: **+10 points**
*   No activity in 30 days: **-20 points (Score Decay)**

---

### **Example Scenarios**

*   **Scenario A: High-Fit, High-Intent Lead**
    *   **Who:** VP of Engineering at a 40-person SaaS company. Pain point is onboarding.
    *   **Fit Score:** 20 (Role) + 20 (Team Size) + 10 (Pain) = 50 points.
    *   **Action:** Books a call.
    *   **Intent Score:** +100 points.
    *   **Total Score:** 150. **Result: HOT LEAD (SQL).** Immediate, personalized follow-up.

*   **Scenario B: Good-Fit, Low-Intent Lead**
    *   **Who:** Engineering Manager at a 20-person agency.
    *   **Fit Score:** 15 (Role) + 20 (Team Size) = 35 points.
    *   **Action:** Downloads the checklist. Visits the pricing page a day later.
    *   **Intent Score:** 15 (Download) + 10 (Pricing Page) = 25 points.
    *   **Total Score:** 60. **Result: Strong Lead (SQL).** Personal outreach is warranted.

*   **Scenario C: Low-Fit, High-Intent Lead**
    *   **Who:** A student at a university.
    *   **Fit Score:** -10 (Role) + 0 (Team Size) = -10 points.
    *   **Action:** Downloads checklist, visits 5 pages.
    *   **Intent Score:** 15 + ... = 30 points.
    *   **Total Score:** 20. **Result: Low Priority.** Keep in nurture sequence, but no manual outreach needed.
`},{type:"file",name:"n8n-Zaps-Pseudocode.md",content:`
# Automation Workflows (n8n / Zapier / Make - Pseudocode)

This document outlines the key automation workflows to connect our marketing, sales, and operations systems.

---

### **Workflow 1: New Lead Capture (Book a Call Form)**

*   **Trigger:** New form submission on Calendly ("Book a Call").
*   **Platform Option A (OSS):** n8n
*   **Platform Option B (Commercial):** Zapier or Make

**Steps:**
1.  **TRIGGER:** \`Calendly: Invitee Created\`
2.  **SEARCH/CREATE CONTACT:**
    *   Search for a Contact in [CRM] with the email from the trigger.
    *   If no contact exists, create one.
    *   Map form fields:
        *   \`contact.firstname\` = \`form.firstName\`
        *   \`contact.email\` = \`form.email\`
        *   \`contact.role\` = \`form.role_question\`
        *   etc.
3.  **SEARCH/CREATE DEAL:**
    *   Search for an open Deal associated with the Contact.
    *   If no open deal exists, create a new Deal in [CRM].
    *   Set Deal Name: "[Contact Name] - New Repo Strategy Call"
    *   Set Deal Stage: "Qualified"
    *   Associate Deal with the Contact.
    *   Map form fields to deal custom fields (\`deal.team_size\`, \`deal.pain_point\`, etc.).
4.  **CREATE CALENDAR EVENT:** Create an event in [Founder's Calendar] and invite the lead's email. (Calendly does this, but this is a failsafe).
5.  **SEND SLACK NOTIFICATION:**
    *   Send a message to the \`#new-leads\` channel in Slack.
    *   Message: "🚀 New Call Booked! **[Name]** from **[Company (if available)]**. Role: **[Role]**. Pain: **[Pain Point]**. [Link to CRM Deal]."
6.  **TRIGGER "SPEED TO LEAD" EMAIL SEQUENCE:** Add a tag "Call_Booked" to the contact in the email marketing tool (e.g., Mailchimp, ConvertKit) to trigger the pre-call nurture sequence.

---

### **Workflow 2: Lead Magnet Delivery**

*   **Trigger:** New form submission on Landing Page ("Download Checklist").

**Steps:**
1.  **TRIGGER:** \`Webflow/HubSpot Form: Submission\`
2.  **SEARCH/CREATE CONTACT:**
    *   Same as Workflow 1, but with fewer fields (just email/name).
3.  **ADD TAG:**
    *   Add the tag "Downloaded_Checklist" to the contact in the email marketing tool.
4.  **TRIGGER "LEAD MAGNET DELIVERY" EMAIL:**
    *   The tag addition triggers an automation in the email tool to send the email containing the link to the checklist.
5.  **TRIGGER "NURTURE SEQUENCE":**
    *   The same tag also adds the contact to the long-term nurture sequence, which starts after a 3-day delay.
6.  **SEND SLACK NOTIFICATION (Optional, can be noisy):**
    *   Send a message to \`#marketing-leads\`: "📄 New Checklist Download: **[Email]**."

---

### **Workflow 3: No-Show Detection & Follow-up**

*   **Trigger:** Manual trigger (e.g., clicking a button in a Chrome extension or CRM).

**Steps:**
1.  **TRIGGER (Manual):** \`Webhook received\` from a custom button in the CRM on the Deal page called "Mark as No-Show".
2.  **FIND DEAL & CONTACT:** Get the deal and contact info from the webhook payload.
3.  **MOVE DEAL:**
    *   Change Deal Stage in [CRM] to "On Hold".
    *   Add a note to the Deal timeline: "Marked as No-Show for meeting on [Date]".
4.  **TRIGGER "NO-SHOW" EMAIL SEQUENCE:**
    *   Add a tag "No_Show" to the contact in the email marketing tool.
    *   This tag triggers the 3-email no-show and reschedule sequence.
5.  **CREATE FOLLOW-UP TASK:**
    *   Create a task in the [CRM] for the deal owner, due in 4 days: "Check for reschedule. If none, move to Lost."
`},{type:"file",name:"SLA-Playbook.md",content:`
# Service Level Agreement (SLA) Playbook

This document defines the internal standards for response and action times to ensure a high-quality prospect and client experience.

---

### **1. Speed to Lead**

*   **SLA:** All new inbound leads (form submissions for "Book a Call") must receive their automated confirmation email **within 5 minutes**.
*   **Playbook:**
    *   **Owner:** Marketing Ops / Automation System (n8n/Zapier).
    *   **Process:** The automation workflow described in \`n8n-Zaps-Pseudocode.md\` is responsible for this.
    *   **Metric:** Time from form submission to email sent.
    *   **Monitoring:** Weekly check of automation logs to ensure no failures.

---

### **2. First Personal Touch**

*   **SLA:** Every lead that books a call must receive a *personal* (or personalized automated) follow-up email **within 24 hours**. (This is the "Thinking About Your Problem" email).
*   **Playbook:**
    *   **Owner:** Founder / Sales Rep.
    *   **Process:** An automated email is sent 24 hours before the meeting time. The template should use personalization tokens from the form submission.
    *   **Metric:** Open and reply rate on this email.
    *   **Monitoring:** The email sequence platform tracks this.

---

### **3. Proposal Delivery**

*   **SLA:** A formal proposal must be sent to a qualified prospect **within 48 business hours** of a completed discovery call.
*   **Playbook:**
    *   **Owner:** Founder / Sales Rep.
    *   **Process:**
        1.  Immediately after the call, create a "Proposal" task in the CRM, due EOD the next day.
        2.  Use the standard proposal template (\`Proposal-SOW-Template.md\`).
        3.  Customize the "Recap," "Scope," and "Pricing" sections based on the discovery call.
        4.  Send the proposal via a trackable document tool (e.g., PandaDoc, Proposify, or a simple PDF via email).
        5.  Update the deal stage in the CRM to "Proposal."
    *   **Metric:** Time from "Discovery Call Completed" to "Proposal Sent."

---

### **4. Follow-up Cadence**

*   **SLA:** A deal in the "Proposal" stage must receive a follow-up **every 3-5 business days** until a response is received.
*   **Playbook:**
    *   **Owner:** Founder / Sales Rep.
    *   **Process:** After sending a proposal, immediately create a follow-up task in the CRM, due in 3 business days. Use the email templates from \`Breakup-Sequence.md\`.
    *   **Metric:** Percentage of deals in the proposal stage with a future follow-up task scheduled.

---

### **5. "On Hold" and "Lost" Management**

*   **SLA:** No deal should remain in the pipeline without activity for more than **14 days**.
*   **Playbook:**
    *   **Owner:** Founder / Sales Rep.
    *   **Process:** During the weekly pipeline review, any deal that has been idle for 14+ days must be actioned:
        1.  Send a final "Breakup" email.
        2.  If no response, move the deal to "Lost" and select the "No Response" reason.
        3.  If the client has communicated a delay, move the deal to "On Hold" and set a specific follow-up task for the future.
    *   **Metric:** Number of "stale" deals in the pipeline.
`}]},{type:"directory",name:"sops",children:[{type:"file",name:"Discovery-Call-SOP.md",content:`
# SOP: Discovery Call

A standard operating procedure for conducting a successful discovery call.

---

### **Objective**

*   To determine if the prospect is a good fit for our services.
*   To deeply understand their pain points and desired outcomes.
*   To build rapport and establish ourselves as credible experts.
*   To get the prospect's agreement on a clear "next step."

### **Preparation (15 minutes before the call)**

1.  **Review CRM:** Read all notes on the contact and deal. Understand their role, team size, and the pain points they listed in the form.
2.  **Review LinkedIn:** Look at the prospect's profile. What's their background? Have they written any posts recently?
3.  **Review Company Website:** What does their company do? Who are their customers?
4.  **Review GitHub Repo (if provided):** Do a quick 5-minute scan. What is the language? How old is the repo? Are there obvious signs of trouble (e.g., thousands of open issues, no recent commits)?
5.  **Prepare Questions:** Have the script below open, but be ready to deviate.

### **The Call Structure (30 Minutes)**

**Part 1: Rapport & Agenda (5 minutes)**

*   "Hi [Name], thanks for taking the time. I'm really looking forward to our chat."
*   "Just to make sure we make the most of our 30 minutes, I was hoping we could:
    *   Briefly learn a bit more about your role and [Company].
    *   Dive into the challenges you're facing with your repository.
    *   I can share a bit about how we've helped other companies in your situation.
    *   And then, if it makes sense, we can figure out what the next steps might look like.
*   "Does that sound good to you?"

**Part 2: Discovery & Diagnosis (15 minutes)**

*   **Broad Questions (Understand the Context):**
    *   "Tell me about your team. How is it structured?"
    *   "What are the biggest goals for the engineering team this year?"
    *   "Walk me through your current development process, from idea to deployment."
*   **Problem Questions (Dig into the Pain):**
    *   "You mentioned [Pain from form] in the form. Can you tell me more about that? What does that look like day-to-day?"
    *   "What have you tried so far to fix this?"
    *   "Who on the team is feeling this pain the most?"
*   **Impact Questions (Connect Pain to Business Cost):**
    *   "What happens if you don't fix this? What's the impact on your roadmap?"
    *   "How does this affect developer morale or your ability to hire?"
    *   "If we could wave a magic wand and solve this, what would be different a month from now?" (This is your desired outcome).
*   **Qualification (BANT):**
    *   **Budget:** "To give you a ballpark, projects like this typically range from $15-25k. Is that in the realm of what you'd be able to invest for a solution?"
    *   **Authority:** "Who besides yourself would be involved in the decision-making process for a project like this?"
    *   **Need:** (You've been establishing this all along).
    *   **Timeline:** "If you were to move forward, when would you ideally want to see this problem solved?"

**Part 3: The Pivot & Next Steps (10 minutes)**

*   **Educate & Position:**
    *   "Thanks for sharing all that. It's a very common story, and it sounds a lot like the situation at [Similar Client], where we..." (Tell a short, relevant story).
    *   "Based on what you've told me, it sounds like our 'QuickStart Hardening' service would be a perfect fit. We'd come in and tackle the [Top 2-3 problems] we discussed."
*   **Define Next Step:**
    *   "My typical next step is to put together a detailed proposal. It will outline the exact deliverables, a clear timeline, and a fixed-price investment."
    *   "I can have that over to you by EOD tomorrow."
*   **Gain Agreement:**
    *   "How does that sound to you?"
    *   "Once you've had a chance to review it, what would be a good time to briefly connect again to walk through it?" (Try to book the next meeting on the call).

### **Post-Call (Immediately After)**

1.  **Update CRM:** Add detailed notes from the call to the Deal object.
2.  **Schedule Tasks:** Create tasks for "Send Proposal" and any other follow-ups.
3.  **Send Follow-up Email:** Use the template in \`PostCall-Followup.md\`.
`},{type:"file",name:"Proposal-SOW-Template.md",content:`
# Proposal & Statement of Work (SOW) Template

This is a template for the proposal document sent to clients after a successful discovery call.

---

**[Your Brand Logo]**
**[Date]**

**Prepared for:**
[Client Name]
[Client Contact Name], [Client Title]

**Prepared by:**
{{FounderName}}
[BrandName]
[Your Website]

---

### **1. The Situation: A Recap of Our Conversation**

Hi [Client Contact Name],

Thank you for taking the time to speak with me on [Date of Call]. I enjoyed learning about your goals at [Client Name], particularly your focus on [Client's Primary Goal, e.g., scaling the engineering team without losing velocity].

As we discussed, your current GitHub repository, while functional, is presenting several challenges that are creating a "tax" on your team's productivity. Specifically, we identified:

*   **[Pain Point 1]:** e.g., A manual and time-consuming onboarding process for new engineers, delaying their time-to-impact.
*   **[Pain Point 2]:** e.g., A slow and unreliable CI/CD pipeline, which is eroding developer trust and slowing down the feedback loop.
*   **[Pain Point 3]:** e.g., A significant amount of "tribal knowledge," which creates a high bus factor and makes the system difficult for new team members to understand.

If left unaddressed, these issues will only be magnified as you continue to hire and scale, ultimately hindering your ability to achieve your product roadmap goals.

---

### **2. The Objective: Desired Outcomes**

This project will transform your primary repository from a source of friction into a strategic asset. By the end of this 3-week engagement, you will have:

*   **A Self-Service Onboarding Experience:** New engineers will be able to get the project set up and running locally in under an hour by following a single, scripted command.
*   **A Fast & Reliable CI Pipeline:** Your CI pipeline will provide feedback on all pull requests in under 10 minutes and will be a trusted source of truth for code quality.
*   **A "GitPolish-Grade" Repository:** Your repository will be well-documented, easy to navigate, and will serve as the gold standard for all future projects at [Client Name].

**Success Metric:** We will measure success by a >75% reduction in the "Time to First PR" for a new engineer and a >50% reduction in average CI/CD pipeline duration.

---

### **3. Scope of Work: Deliverables**

To achieve these objectives, we will deliver the following in a 3-week sprint:

**Week 1: Audit & Foundation**
*   [ ] **Deliverable 1:** A comprehensive **Repo Health Audit** and a baseline **Repo Health Score**.
*   [ ] **Deliverable 2:** Implementation of a standardized **Branching Strategy** and **Branch Protection Rules**.
*   [ ] **Deliverable 3:** Creation of core contribution documents: \`CONTRIBUTING.md\`, Issue Templates, and a \`PULL_REQUEST_TEMPLATE.md\`.

**Week 2: Automation & Documentation**
*   [ ] **Deliverable 4:** A complete overhaul and optimization of the **CI/CD Pipeline** in GitHub Actions.
*   [ ] **Deliverable 5:** A "README 2.0" rewrite, turning the root README into a project dashboard.
*   [ ] **Deliverable 6:** A scripted, one-command local setup process.

**Week 3: Governance & Handoff**
*   [ ] **Deliverable 7:** Implementation of a \`CODEOWNERS\` file to automate review assignments.
*   [ ] **Deliverable 8:** Creation of a high-level \`ARCHITECTURE.md\` document.
*   [ ] **Deliverable 9:** A 60-minute recorded **Team Training & Handoff Session**.

---

### **4. Investment**

The total investment for this "QuickStart Hardening" project is a **fixed fee of [e.g., $18,500]**.

*   **Payment Terms:** 50% due upon signing to commence work, 50% due upon project completion.
*   **Guarantee:** We are committed to your success. If you are not satisfied with the quality of the deliverables, we will continue to work until they meet the standards outlined in this proposal.

---

### **5. Next Steps**

1.  **Review & Approve:** Please review this proposal. I'm happy to answer any questions you may have.
2.  **Sign Agreement:** If you're ready to move forward, simply sign the accompanying Master Services Agreement.
3.  **Kickoff:** Once the agreement is signed and the initial invoice is paid, we can schedule our project kickoff call for the week of [Date].

I am confident that this investment will pay for itself many times over by unlocking your team's productivity. I look forward to the opportunity to partner with you.

Best regards,

{{FounderName}}
`},{type:"file",name:"Onboarding-HandOff-SOP.md",content:`
# SOP: Client Onboarding & Handoff (Post-Sale)

A standard operating procedure for onboarding a new client after the deal is won and handing them off to the delivery team (even if the delivery team is just you).

---

### **Phase 1: Onboarding (The First 48 Hours After "Won")**

**Owner:** Founder / Sales Rep

**Goal:** Create a seamless transition from sales to project kickoff.

**Checklist:**

*   [ ] **1. Counter-sign the MSA/SOW:** Ensure the agreement is signed by both parties and a final copy is sent to the client.
*   [ ] **2. Send a "Welcome" Email:**
    *   **To:** The client's primary point of contact.
    *   **Subject:** Welcome to [BrandName]! Next steps for our project.
    *   **Content:**
        *   Express excitement about the partnership.
        *   Confirm receipt of the signed agreement.
        *   State that the initial invoice has been sent (or is attached).
        *   Provide a link to schedule the official Project Kickoff call.
        *   List any "homework" for them (e.g., "Please be prepared to grant GitHub access to our user, \`[YourGitHubUsername]\`, during the call").
*   [ ] **3. Create Invoice:** Generate and send the 50% upfront invoice using your accounting software.
*   [ ] **4. Internal Project Setup:**
    *   Create a new private Slack channel: \`#client-[client-name]\`. Invite the client POC.
    *   Create a new project folder in Google Drive / Notion.
    *   Duplicate your project management template (in Asana, ClickUp, or GitHub Projects) and set up the deliverables from the SOW as tasks.
*   [ ] **5. Update CRM:**
    *   Ensure the deal is marked as "Won."
    *   Set the deal value to the final contract amount.
    *   Create a new "Current Client" tag for the associated Company and Contact.

---

### **Phase 2: Project Kickoff Call**

**Owner:** Project Lead / Delivery Owner

**Goal:** Align on goals, timeline, and communication, and gain necessary access.

**Agenda:**

1.  **Introductions & Celebration (5 mins):** Reiterate excitement for the project.
2.  **Goal & Scope Review (10 mins):**
    *   "I want to quickly review the objectives from the SOW to ensure we're all perfectly aligned."
    *   "Our primary goal is [State the #1 goal]. Does that still hold true?"
3.  **Timeline & Deliverables (10 mins):**
    *   Walk through the 3-week project plan.
    *   "Here's what you can expect from us each week."
4.  **Communication Cadence (5 mins):**
    *   "We'll provide a brief summary of progress in our shared Slack channel at the end of each day."
    *   "We'll have a standing 30-minute check-in call every [Day, e.g., Wednesday] at this time."
    *   "For anything urgent, please tag me directly in Slack."
5.  **Access & Logistics (10 mins):**
    *   "To get started, we'll need you to grant 'Admin' access to the [Repo Name] repository for our GitHub user: \`[YourGitHubUsername]\`." (Do this live on the call if possible).
    *   Confirm any other necessary tool access (e.g., AWS, Vercel).
6.  **Next Steps (5 mins):**
    *   "Our next step is to begin the Repo Health Audit. We'll have the initial report ready for you by EOD Friday."
    *   "Any final questions before we dive in?"

---

### **Phase 3: Project Handoff (Final Call)**

**Owner:** Project Lead / Delivery Owner

**Goal:** Successfully deliver the finished project, train the client team, and ensure they feel empowered.

**This is the "Team Training & Handoff Session" from the SOW.**

**Checklist:**

*   [ ] **1. Prepare a Demo:** Create a concise presentation/demo of all the improvements made. Show the "before" and "after."
*   [ ] **2. Record the Session:** Inform the client you will be recording the call for their future reference.
*   [ ] **3. Conduct the Handoff Call:**
    *   Celebrate the successful project completion.
    *   Demo the new, improved repository and workflows.
    *   Walk through the updated documentation (\`README\`, \`CONTRIBUTING\`, etc.).
    *   Explain the new CI/CD pipeline and how to interpret its results.
    *   Explain the new branch protection rules and the expected PR lifecycle.
    *   Open the floor for an extensive Q&A with the engineering team.
*   [ ] **4. Send Final Invoice:** Immediately after the call, send the final 50% invoice.
*   [ ] **5. Send Handoff Email:**
    *   Thank them for a great partnership.
    *   Include a link to the recorded training session.
    *   Attach or link to all final documentation.
    *   Explain the process for post-project support (if any).
    *   **PLANT THE SEED:** Ask for a review/testimonial and mention your referral program.
`},{type:"file",name:"Referral-Program.md",content:`
# SOP: Referral Program

A simple program to incentivize past clients and partners to send new business our way.

---

### **Program Offer**

*   **For Closed Business:** We offer a **15% cash referral fee** on the initial project value for any new client that you introduce to us, which results in a signed contract.
*   **Payout:** The referral fee is paid out via [Payment Method, e.g., Wise, PayPal] after the new client has paid their initial 50% invoice.
*   **Example:** You refer a client who signs an $18,000 "QuickStart Hardening" contract. Once they pay their first $9,000 invoice, we send you **$2,700** (15% of $18k). It's that simple.

---

### **Who is a Good Referral?**

You know a company is a great fit for us if you hear them say things like:

*   "We're hiring a bunch of new engineers."
*   "Our build is always breaking."
*   "Onboarding new developers is taking forever."
*   "Our documentation is a mess."
*   "We need to get our codebase ready for a security audit."

**Ideal Titles to Refer:**
*   CTO, VP of Engineering, Director of Engineering, Head of Engineering.

---

### **How to Make an Introduction**

The best way to refer someone is via a **double opt-in email introduction.**

**Step 1: Ask Them First**
> "Hey [Potential Client], I know you were mentioning struggles with [Pain Point]. I worked with a specialist, {{FounderName}}, who was fantastic and solved this exact problem for us. Would you be open to a brief email intro?"

**Step 2: Make the Introduction**

*   **To:** \`{{FounderName}}'s Email\`, \`[Referral's Email]\`
*   **Subject:** Intro: [Referral Name] <> {{FounderName}}
*   **Body:**
    > Hi both,
    >
    > [Referral Name], please meet {{FounderName}}. As I mentioned, {{FounderName}} is the expert who helped us overhaul our GitHub repository and dramatically improved our developer onboarding and CI/CD process. I thought of him immediately when you mentioned [Pain Point].
    >
    > {{FounderName}}, please meet [Referral Name], the [Title] at [Company]. They're doing some amazing work in [Industry] and are facing some of the scaling challenges we discussed.
    >
    > I'll let you two take it from here!
    >
    > Best,
    > [Your Name]

---

### **Internal Process**

1.  **Track Referrals:** When an intro email is received, immediately create a new Deal in the CRM.
2.  **Set Referral Partner:** In the "Referral Partner" custom field on the Deal, associate it with the contact who made the introduction.
3.  **Communicate:** Reply to the intro email, moving the referrer to BCC, to thank them and schedule a call with the new lead.
4.  **Payout:** When the deal is "Won" and the first invoice is paid, create a task for "Pay Referral Fee to [Referrer Name]".
5.  **Confirm Payout:** Send a thank you email to the referrer confirming the payment has been sent.
`},{type:"file",name:"Review-Testimonial-Playbook.md",content:`
# SOP: Review & Testimonial Request Playbook

A procedure for systematically capturing social proof from happy clients.

---

### **The Golden Rule: Ask at "Peak Happiness"**

The best time to ask for a review or testimonial is immediately after a major success milestone. This is typically:

1.  **During the project:** Right after you deliver a significant "wow" moment (e.g., "We just cut your CI time from 40 mins to 8 mins!").
2.  **During the final handoff call:** After you've demoed all the great work and the client is thrilled.
3.  **1-2 months post-project:** When they have had time to experience the full benefits of the improved repository (e.g., they've successfully onboarded a new engineer in record time).

---

### **The "Testimonial Ask" Script (During a Call)**

*   **Context:** You are on the final handoff call. The client has just said something like, "This is amazing! The team is going to love this."

*   **Script:**
    > "I am so glad to hear you say that. Your feedback means a lot to us.
    >
    > While it's fresh in your mind, would you be open to providing a brief testimonial about your experience working with us? It would be incredibly helpful for other engineering leaders who are facing the same challenges you were.
    >
    > It could be as simple as a sentence or two that we could feature on our website. Would that be okay?"

---

### **The "Testimonial Ask" Email Template**

*   **Context:** Sent 1-2 weeks after project completion.
*   **Subject:** A quick question about your experience

Hi [Client Name],

I hope you and the team are enjoying the new and improved repository!

I'm writing to ask for a small favor. Would you be willing to write a sentence or two about your experience working with [BrandName]?

Testimonials from great clients like you are incredibly helpful in showing other engineering leaders what's possible.

**To make it super easy, here are a few prompts (feel free to use or ignore):**

*   What was the biggest challenge you were facing before we started?
*   What was the most impactful result of our work together?
*   What would you say to another CTO who is considering working with us?

No pressure at all, but any words you could share would be greatly appreciated.

Thank you again for a fantastic partnership.

Best,
{{FounderName}}

---

### **The "Case Study Ask" Email Template**

*   **Context:** For your best clients who have seen amazing, quantifiable results. Sent 1 month after project completion.
*   **Subject:** Featuring [Client Company] as a success story

Hi [Client Name],

I was just reviewing the metrics from our project last month, and the results are fantastic. Seeing your "Time to First PR" drop by over 80% is exactly the kind of outcome we strive for.

Because the results were so strong, I'd love to feature [Client Company] as a premier case study on our website. This would be a more detailed look at the challenges you faced, the solutions we implemented, and the incredible results you've achieved.

It would be a great way to showcase the innovative work your engineering team is doing. The process would be simple: a 30-minute recorded interview with you, and then we would handle all the writing and send it to you for final approval.

Would you be open to this?

Best,
{{FounderName}}
`}]},{type:"directory",name:"metrics",children:[{type:"file",name:"KPIs-Dashboard.md",content:`
# KPIs & Metrics Dashboard

A list of the key performance indicators (KPIs) to track for the client acquisition system. This should be built into a simple dashboard (e.g., in Google Sheets, Databox, or your CRM's dashboard).

---

### **Top-of-Funnel (TOFU) - Marketing Metrics**

*   **Website Visitors:** Total unique visitors to the landing page.
    *   *Source:* Google Analytics
    *   *Baseline:* 0
    *   *Target (Month 1):* 500
*   **Lead Magnet Conversion Rate:** (Downloads / Unique Visitors) %
    *   *Source:* Google Analytics / Landing Page Tool
    *   *Baseline:* 10%
    *   *Target:* 15%+
*   **Total MQLs (Marketing Qualified Leads):** Number of new contacts from lead magnet downloads and other non-booking forms.
    *   *Source:* CRM
    *   *Baseline:* 0
    *   *Target (Month 1):* 50
*   **Cost Per MQL:** (Total Ad Spend / Total MQLs)
    *   *Source:* Ad Platforms / CRM
    *   *Baseline:* N/A
    *   *Target:* < $100

---

### **Middle-of-Funnel (MOFU) - Sales Development Metrics**

*   **Book a Call Form Conversion Rate:** (Booked Calls / Unique Visitors) %
    *   *Source:* Google Analytics / Calendly
    *   *Baseline:* 1%
    *   *Target:* 3%+
*   **Total SQLs (Sales Qualified Leads):** Number of discovery calls booked.
    *   *Source:* CRM
    *   *Baseline:* 0
    *   *Target (Month 1):* 10
*   **MQL to SQL Conversion Rate:** (Total SQLs / Total MQLs) %
    *   *Source:* CRM
    *   *Baseline:* 5%
    *   *Target:* 20%
*   **Meeting Show Rate:** (Meetings Attended / Meetings Booked) %
    *   *Source:* CRM / Calendar
    *   *Baseline:* 70%
    *   *Target:* 85%+

---

### **Bottom-of-Funnel (BOFU) - Sales Metrics**

*   **SQL to Proposal Rate:** (Proposals Sent / SQLs) %
    *   *Source:* CRM
    *   *Baseline:* 60%
    *   *Target:* 75%
*   **Proposal to Win Rate (Close Rate):** (Deals Won / Proposals Sent) %
    *   *Source:* CRM
    *   *Baseline:* 25%
    *   *Target:* 40%
*   **Overall Win Rate:** (Deals Won / SQLs) %
    *   *Source:* CRM
    *   *Baseline:* 15%
    *   *Target:* 30%
*   **Average Deal Size:** Total Revenue / Number of Deals Won
    *   *Source:* CRM
    *   *Baseline:* N/A
    *   *Target:* {{PriceAnchors.avg_deal_goal}}
*   **Sales Cycle Length:** Average number of days from "Qualified" to "Won".
    *   *Source:* CRM
    *   *Baseline:* 45 days
    *   *Target:* < 30 days

---

### **Business & Revenue Metrics**

*   **Total Booked Revenue:** Sum of all "Won" deal values in a period.
    *   *Source:* CRM
    *   *Baseline:* $0
    *   *Target (Month 3):* $40,000
*   **CAC (Customer Acquisition Cost):** Total Sales & Marketing Spend / Number of New Customers.
    *   *Source:* Accounting / Ad Platforms
    *   *Baseline:* N/A
    *   *Target:* < $5,000
*   **LTV (Lifetime Value):** (Average Deal Size * Number of Repeat Projects) + Retainer Value.
    *   *Source:* CRM / Accounting
    *   *Note:* This is a lagging indicator. Initial estimate is Average Deal Size.
*   **Payback Period:** CAC / (Average Monthly Revenue Per Client)
    *   *Source:* Accounting
    *   *Target:* < 3 months
`},{type:"file",name:"Weekly-Review-Checklist.md",content:`
# SOP: Weekly GTM Review Checklist

A checklist to run through every Friday to review performance and set priorities for the following week.

---

### **Meeting Agenda (30 Minutes)**

**Attendees:** Founder, anyone else involved in marketing/sales.
**Goal:** Review metrics, identify bottlenecks, and define next week's priorities.

---

### **1. Metrics Review (10 mins)**

*   **Open the KPI Dashboard.**
*   **Top of Funnel:**
    *   [ ] How many new MQLs this week? (Target: 12)
    *   [ ] Which marketing channel drove the most leads? (LinkedIn, Google, etc.)
    *   [ ] What was our top-performing content/ad? Why?
*   **Middle of Funnel:**
    *   [ ] How many new SQLs (calls booked) this week? (Target: 2-3)
    *   [ ] What was the show rate for this week's calls? (Target: >85%)
    *   [ ] Any no-shows? Were they followed up with?
*   **Bottom of Funnel:**
    *   [ ] How many proposals were sent this week?
    *   [ ] Any new deals Won or Lost?
    *   [ ] What is the total value of the open pipeline?

---

### **2. Pipeline Review (15 mins)**

*   **Open the CRM Pipeline View.**
*   **Go through deal-by-deal for anything in "Proposal" or "Negotiation".**
    *   [ ] What is the status of the [Client Name] deal?
    *   [ ] What is the next action?
    *   [ ] Is a follow-up task scheduled?
    *   [ ] Are there any blockers? Can I help remove them?
*   **Review "Qualified" Stage.**
    *   [ ] Any calls from this week that need proposals sent? (Check against 48hr SLA).
*   **Review "New" Stage.**
    *   [ ] Are there any leads stuck in this stage for more than 24 hours?
*   **Review Stale Deals.**
    *   [ ] Any deals with no activity for more than 7 days? Plan a follow-up or breakup email.

---

### **3. Priorities & Action Items for Next Week (5 mins)**

*   **Based on the review, what is the #1 priority for next week?**
    *   *Example:* "We have too few calls booked. Priority is sending out a new cold email sequence."
    *   *Example:* "Our show rate was low. Priority is to improve the pre-call nurture sequence."
    *   *Example:* "The [Big Client] proposal is stuck. Priority is to get a follow-up call booked with the CTO."
*   **Assign Action Items:**
    *   [ ] **Action Item 1:** [Owner], [Task], [Due Date].
    *   [ ] **Action Item 2:** [Owner], [Task], [Due Date].
`},{type:"file",name:"AB-Test-Plan.md",content:`
# A/B Test Plan

A plan for systematically testing and optimizing key parts of the funnel.

---

### **Guiding Principles**

1.  **One Test at a Time:** Only test one variable at a time to ensure you can attribute the results correctly.
2.  **Statistical Significance:** Use a calculator to ensure your test has run long enough and with enough traffic to be statistically significant (aim for >95% confidence).
3.  **Hypothesis-Driven:** Every test must start with a clear hypothesis.
4.  **Track Everything:** Document all tests, hypotheses, results, and learnings in a central place (like this document or a Notion table).

---

### **Test 1: Landing Page Headline**

*   **Location:** Funnel -> LandingPage.md
*   **Variable:** Headline
*   **Hypothesis:** A more pain-oriented headline will resonate more strongly with the target audience than a solution-oriented one, leading to a higher call booking conversion rate.
*   **Version A (Control):** "Transform your chaotic codebase into your team's greatest asset." (Solution-oriented)
*   **Version B (Variant):** "Is Your GitHub Repo Slowing You Down?" (Pain-oriented)
*   **Primary Metric:** Call booking conversion rate (SQLs / Visitors).
*   **Duration:** 2 weeks or 1,000 unique visitors, whichever comes first.

---

### **Test 2: Call-to-Action Button Copy**

*   **Location:** Funnel -> LandingPage.md
*   **Variable:** Main CTA button text.
*   **Hypothesis:** A more specific and benefit-driven CTA will outperform a generic CTA.
*   **Version A (Control):** "Book a Free Consultation"
*   **Version B (Variant):** "Book a Free Repo Strategy Call"
*   **Primary Metric:** Click-through rate on the CTA button.
*   **Duration:** 2 weeks or 50 clicks.

---

### **Test 3: Cold Email Subject Line**

*   **Location:** Outreach -> ColdEmails.md (Sequence 3)
*   **Variable:** Email 1 Subject Line
*   **Hypothesis:** A highly personalized subject line mentioning the prospect's company will have a higher open rate than a more generic, topic-based one.
*   **Version A (Control):** "Question about DevEx"
*   **Version B (Variant):** "Repo Onboarding at [Company]"
*   **Primary Metric:** Open rate.
*   **Audience Size:** Send each version to 100 prospects.

---

### **Test 4: LinkedIn Ad Creative**

*   **Location:** Ads -> LinkedIn-Ads.md
*   **Variable:** Ad Format
*   **Hypothesis:** A carousel ad showcasing a "before and after" will have a higher click-through rate and lower cost-per-lead than a single image ad for the checklist.
*   **Version A (Control):** Ad Creative 1 (Single Image - Checklist)
*   **Version B (Variant):** Ad Creative 2 (Carousel - Before & After)
*   **Primary Metric:** Cost Per Lead (for checklist download).
*   **Budget:** $500 per ad creative.
`}]},{type:"directory",name:"legal",children:[{type:"file",name:"NDA-Template.md",content:`
# Non-Disclosure Agreement (NDA) Template

**Disclaimer:** This is a template for informational purposes only and does not constitute legal advice. You should consult with a qualified legal professional to ensure any agreement is appropriate for your specific circumstances.

---

### **MUTUAL NON-DISCLOSURE AGREEMENT**

This Mutual Non-Disclosure Agreement (the "Agreement") is entered into as of **[Date]** (the "Effective Date") by and between:

**[Client Full Legal Name]**, a [State of Incorporation] [Entity Type], with its principal place of business at [Client Address] ("Client"),

and

**[Your Full Legal Name or Company Name]**, a [Your State of Incorporation] [Your Entity Type], with its principal place of business at [Your Address] ("Consultant").

(Hereinafter referred to individually as a "Party" and collectively as the "Parties").

**1. Purpose.** The Parties wish to explore a potential business relationship (the "Purpose") during which it may be necessary for one Party (the "Disclosing Party") to disclose certain Confidential Information to the other Party (the "Receiving Party").

**2. Definition of Confidential Information.** "Confidential Information" means any and all non-public information, including but not limited to, business strategies, customer lists, financial information, product designs, specifications, source code, and any other information disclosed by the Disclosing Party to the Receiving Party, whether orally, visually, or in writing.

**3. Obligations.** The Receiving Party agrees: (a) to hold the Confidential Information in strict confidence and to take all reasonable precautions to protect such Confidential Information; (b) not to disclose any Confidential Information to any third party; and (c) not to use any Confidential Information for any purpose except for the Purpose.

**4. Exclusions.** Confidential Information shall not include information that: (a) is or becomes publicly known and made generally available through no fault of the Receiving Party; (b) is already in the possession of the Receiving Party at the time of disclosure; (c) is obtained by the Receiving Party from a third party without a breach of such third party's obligations of confidentiality; or (d) is independently developed by the Receiving Party without use of or reference to the Disclosing Party's Confidential Information.

**5. Term and Termination.** The obligations of this Agreement shall survive for a period of three (3) years from the Effective Date.

**6. Return of Information.** Upon written request of the Disclosing Party, the Receiving Party shall promptly return or certify the destruction of all documents and other tangible materials representing the Confidential Information.

**7. No License.** Nothing in this Agreement is intended to grant any rights to the Receiving Party under any patent, copyright, or other intellectual property right of the Disclosing Party.

**8. Governing Law.** This Agreement shall be governed by and construed in accordance with the laws of the State of [Your State], without regard to its conflict of laws principles.

**IN WITNESS WHEREOF,** the Parties have executed this Agreement as of the Effective Date.

**CLIENT:**
By: _________________________
Name: _______________________
Title: ________________________
Date: ________________________

**CONSULTANT:**
By: _________________________
Name: _______________________
Title: ________________________
Date: ________________________
`},{type:"file",name:"MSA-SOW-Template.md",content:`
# Master Services Agreement (MSA) & Statement of Work (SOW) Template

**Disclaimer:** This is a template for informational purposes only. It is not a substitute for professional legal advice. Consult with a lawyer to draft agreements that fit your business needs.

---

## **MASTER SERVICES AGREEMENT**

This Master Services Agreement ("MSA") is entered into as of **[Date]** ("Effective Date") by and between **[Client Full Legal Name]** ("Client") and **[Your Company Name]** ("Consultant").

**1. Services and Statements of Work (SOWs).** Consultant agrees to provide services ("Services") to Client as described in one or more Statements of Work. Each SOW will be a separate agreement that incorporates the terms of this MSA.

**2. Fees and Payment.** Client agrees to pay Consultant the fees set forth in the applicable SOW. Unless otherwise specified, invoices are due within 15 days of receipt.

**3. Term and Termination.** This MSA shall commence on the Effective Date and continue until terminated by either party with 30 days' written notice.

**4. Confidentiality.** Each party agrees to protect the other's Confidential Information as defined in the Mutual Non-Disclosure Agreement executed between the parties.

**5. Intellectual Property.**
    *   **Pre-existing IP:** Each party retains ownership of its pre-existing intellectual property.
    *   **Work Product:** Upon full payment for the Services in an SOW, Consultant grants Client a non-exclusive, perpetual, worldwide, royalty-free license to use the deliverables ("Work Product") for its internal business purposes. Consultant retains the right to use the underlying know-how and methodologies for other clients.

**6. Warranties and Limitation of Liability.** Consultant warrants that Services will be performed in a professional and workmanlike manner. IN NO EVENT SHALL EITHER PARTY'S LIABILITY EXCEED THE FEES PAID UNDER THE APPLICABLE SOW.

**7. Governing Law.** This MSA shall be governed by the laws of the State of [Your State].

---

## **STATEMENT OF WORK (SOW) NO. 1**

This SOW is made effective as of **[Date]** and is subject to the terms of the MSA between Client and Consultant.

**1. Project Title:** QuickStart Repo Hardening

**2. Term:** This SOW shall commence on **[Start Date]** and is expected to be completed by **[End Date]** (the "Term").

**3. Scope of Services & Deliverables:**
*(This section should be copied directly from the "Scope of Work: Deliverables" section of the final proposal.)*

*   **Week 1: Audit & Foundation**
    *   [ ] Deliverable 1: ...
    *   [ ] Deliverable 2: ...
*   **Week 2: Automation & Documentation**
    *   [ ] Deliverable 3: ...
    *   [ ] Deliverable 4: ...
*   **Week 3: Governance & Handoff**
    *   [ ] Deliverable 5: ...
    *   [ ] Deliverable 6: ...

**4. Fees & Payment Schedule:**
*   **Total Project Fee:** A fixed fee of **[Total Amount, e.g., $18,500 USD]**.
*   **Payment Schedule:**
    *   50% ($[Amount]) due upon execution of this SOW.
    *   50% ($[Amount]) due upon completion and handoff of the final deliverable.

**5. Assumptions:**
*   Client will provide timely access to necessary personnel and systems (GitHub, etc.).
*   The scope of work is limited to one primary repository.

**IN WITNESS WHEREOF,** the parties have executed this SOW.

**CLIENT:**
By: _________________________
Name: _______________________
Title: ________________________
Date: ________________________

**CONSULTANT:**
By: _________________________
Name: _______________________
Title: ________________________
Date: ________________________
`},{type:"file",name:"DPA-Template.md",content:`
# Data Processing Addendum (DPA) Template

**Disclaimer:** Data privacy laws (like GDPR and CCPA) are complex. This template is for informational purposes only and is not legal advice. You MUST consult with a lawyer specializing in data privacy to draft a DPA that is compliant and suitable for your business.

---

### **DATA PROCESSING ADDENDUM**

This Data Processing Addendum ("DPA") is incorporated into the Master Services Agreement ("MSA") between **[Client Full Legal Name]** ("Controller") and **[Your Company Name]** ("Processor").

This DPA is intended to satisfy the requirements of Article 28 of the General Data Protection Regulation (EU) 2016/679 ("GDPR") and other applicable data protection laws.

**1. Definitions**
*   **"Personal Data," "Processing," "Data Subject," "Controller," and "Processor"** shall have the meanings ascribed to them in the GDPR.
*   **"Client Data"** means any Personal Data that Processor Processes on behalf of Controller in the course of providing the Services under the MSA.

**2. Processing of Client Data**
*   **Processor's Role:** Processor shall act as a Data Processor and will process Client Data only on the documented instructions of the Controller (the Client) for the sole purpose of providing the services outlined in the SOW.
*   **Nature of Processing:** The subject matter of the Processing is the performance of the Services, which may involve accessing source code and related metadata within the Controller's GitHub repository. The duration of the Processing is the term of the applicable SOW. The types of Personal Data may include names, email addresses, and other identifiers present within git commits, source code comments, or configuration files.

**3. Processor's Obligations**
Processor agrees to:
*   a) Implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk.
*   b) Ensure that persons authorized to process the Personal Data have committed themselves to confidentiality.
*   c) Assist the Controller in responding to Data Subject requests.
*   d) At the choice of the Controller, delete or return all Personal Data after the end of the provision of services.
*   e) Make available to the Controller all information necessary to demonstrate compliance with Article 28 of the GDPR.
*   f) Not engage another processor ("Sub-processor") without prior specific written authorization of the Controller.

**4. Security of Processing**
Processor will maintain administrative, physical, and technical safeguards for the protection of the security, confidentiality, and integrity of Client Data. This includes, but is not limited to, using multi-factor authentication for all systems, encrypting data at rest and in transit where feasible, and maintaining a principle of least privilege for data access.

**5. Data Breach Notification**
Processor shall notify Controller without undue delay after becoming aware of a Personal Data Breach affecting Client Data.

**IN WITNESS WHEREOF,** the parties have executed this DPA.

**CONTROLLER (CLIENT):**
By: _________________________
Name: _______________________
Title: ________________________
Date: ________________________

**PROCESSOR (CONSULTANT):**
By: _________________________
Name: _______________________
Title: ________________________
Date: ________________________
`}]},{type:"file",name:"repo_map.json",content:`
{
  "files": [
    { "path": "strategy/ICP.md", "purpose": "Defines the Ideal Customer Profiles.", "owner": "Founder", "review_frequency": "Quarterly" },
    { "path": "strategy/Positioning.md", "purpose": "Core value proposition and market positioning.", "owner": "Founder", "review_frequency": "Quarterly" },
    { "path": "strategy/Offers&Pricing.md", "purpose": "Defines service tiers and pricing.", "owner": "Founder", "review_frequency": "Bi-Annually" },
    { "path": "strategy/Differentiators_GitHubRepoArchitect.md", "purpose": "Articulates unique selling points.", "owner": "Founder", "review_frequency": "Quarterly" },
    { "path": "funnel/LandingPage.md", "purpose": "Main landing page copy.", "owner": "Marketing", "review_frequency": "As Needed" },
    { "path": "funnel/LeadMagnet.md", "purpose": "Content for the 'Repo Audit Checklist'.", "owner": "Marketing", "review_frequency": "Annually" },
    { "path": "funnel/TY-Page.md", "purpose": "Thank you page copy for form submissions.", "owner": "Marketing", "review_frequency": "Annually" },
    { "path": "funnel/CalendarPage.md", "purpose": "Copy for the meeting booking page.", "owner": "Sales", "review_frequency": "Annually" },
    { "path": "funnel/FormQuestions.md", "purpose": "Questions for lead capture and qualification forms.", "owner": "Marketing", "review_frequency": "Bi-Annually" },
    { "path": "copy/ValueProps.md", "purpose": "Bank of reusable value proposition statements.", "owner": "Marketing", "review_frequency": "Quarterly" },
    { "path": "copy/FAQs.md", "purpose": "Master list of frequently asked questions.", "owner": "Sales", "review_frequency": "Quarterly" },
    { "path": "copy/Objection-Handling.md", "purpose": "Scripts for handling common sales objections.", "owner": "Sales", "review_frequency": "Quarterly" },
    { "path": "copy/CaseStudy-Template.md", "purpose": "Template for writing client case studies.", "owner": "Marketing", "review_frequency": "N/A" },
    { "path": "outreach/ColdEmails.md", "purpose": "Templates for cold email outreach sequences.", "owner": "Sales", "review_frequency": "Quarterly" },
    { "path": "outreach/LinkedIn-Scripts.md", "purpose": "Scripts for LinkedIn connection requests and DMs.", "owner": "Sales", "review_frequency": "Quarterly" },
    { "path": "outreach/GitHub-Community-Outreach.md", "purpose": "Playbook for non-spammy community outreach on GitHub.", "owner": "Marketing", "review_frequency": "Bi-Annually" },
    { "path": "outreach/Upwork-Proposal-Template.md", "purpose": "Template for responding to Upwork job posts.", "owner": "Sales", "review_frequency": "As Needed" },
    { "path": "outreach/Partner-Intro-Email.md", "purpose": "Template for reaching out to potential referral partners.", "owner": "Founder", "review_frequency": "Bi-Annually" },
    { "path": "email/SpeedToLead-3Day.md", "purpose": "Sequence sent immediately after a call is booked.", "owner": "Sales", "review_frequency": "Bi-Annually" },
    { "path": "email/LeadMagnet-Delivery.md", "purpose": "Email that delivers the lead magnet.", "owner": "Marketing", "review_frequency": "Annually" },
    { "path": "email/Nurture-10Emails.md", "purpose": "Long-term nurture sequence for leads.", "owner": "Marketing", "review_frequency": "Bi-Annually" },
    { "path": "email/NoShow-Reschedule.md", "purpose": "Sequence for handling meeting no-shows.", "owner": "Sales", "review_frequency": "Annually" },
    { "path": "email/PostCall-Followup.md", "purpose": "Follow-up email sent after a discovery call.", "owner": "Sales", "review_frequency": "Quarterly" },
    { "path": "email/Breakup-Sequence.md", "purpose": "Sequence for unresponsive leads post-proposal.", "owner": "Sales", "review_frequency": "Bi-Annually" },
    { "path": "content/30Day-ContentCalendar.md", "purpose": "A 30-day content plan for LinkedIn.", "owner": "Marketing", "review_frequency": "Monthly" },
    { "path": "content/8-LinkedIn-Posts.md", "purpose": "Copy-pasteable LinkedIn posts.", "owner": "Marketing", "review_frequency": "As Needed" },
    { "path": "content/3-YouTube-Scripts.md", "purpose": "Scripts for short-form YouTube videos.", "owner": "Marketing", "review_frequency": "As Needed" },
    { "path": "content/Webinar-Outline.md", "purpose": "Outline for a lead-generation webinar.", "owner": "Marketing", "review_frequency": "As Needed" },
    { "path": "ads/Google-Search.md", "purpose": "Ad copy for Google Search campaigns.", "owner": "Marketing", "review_frequency": "Quarterly" },
    { "path": "ads/LinkedIn-Ads.md", "purpose": "Ad copy and creative ideas for LinkedIn Ads.", "owner": "Marketing", "review_frequency": "Quarterly" },
    { "path": "ads/Retargeting-Creatives.md", "purpose": "Ideas for retargeting ad creatives.", "owner": "Marketing", "review_frequency": "Quarterly" },
    { "path": "ads/Keyword-Seedlist.csv", "purpose": "Seed list of keywords for search campaigns.", "owner": "Marketing", "review_frequency": "Bi-Annually" },
    { "path": "crm/Pipeline-Stages.md", "purpose": "Definition of sales pipeline stages.", "owner": "Sales", "review_frequency": "Annually" },
    { "path": "crm/Custom-Fields.md", "purpose": "List of required custom fields in the CRM.", "owner": "Sales", "review_frequency": "Annually" },
    { "path": "crm/Lead-Scoring.md", "purpose": "Model for scoring and prioritizing leads.", "owner": "Marketing", "review_frequency": "Bi-Annually" },
    { "path": "crm/n8n-Zaps-Pseudocode.md", "purpose": "Pseudocode for automation workflows.", "owner": "Marketing Ops", "review_frequency": "As Needed" },
    { "path": "crm/SLA-Playbook.md", "purpose": "Internal SLAs for lead response times.", "owner": "Sales", "review_frequency": "Annually" },
    { "path": "sops/Discovery-Call-SOP.md", "purpose": "Standard Operating Procedure for discovery calls.", "owner": "Sales", "review_frequency": "Quarterly" },
    { "path": "sops/Proposal-SOW-Template.md", "purpose": "Template for proposals and Statements of Work.", "owner": "Sales", "review_frequency": "Quarterly" },
    { "path": "sops/Onboarding-HandOff-SOP.md", "purpose": "SOP for client onboarding and project kickoff.", "owner": "Sales", "review_frequency": "Bi-Annually" },
    { "path": "sops/Referral-Program.md", "purpose": "Defines the client and partner referral program.", "owner": "Founder", "review_frequency": "Annually" },
    { "path": "sops/Review-Testimonial-Playbook.md", "purpose": "Playbook for requesting testimonials and case studies.", "owner": "Marketing", "review_frequency": "Annually" },
    { "path": "metrics/KPIs-Dashboard.md", "purpose": "Defines the key metrics and KPIs to track.", "owner": "Founder", "review_frequency": "Monthly" },
    { "path": "metrics/Weekly-Review-Checklist.md", "purpose": "Checklist for the weekly GTM performance review.", "owner": "Founder", "review_frequency": "N/A" },
    { "path": "metrics/AB-Test-Plan.md", "purpose": "Plan for A/B testing key parts of the funnel.", "owner": "Marketing", "review_frequency": "As Needed" },
    { "path": "legal/NDA-Template.md", "purpose": "Template for a Mutual Non-Disclosure Agreement.", "owner": "Legal", "review_frequency": "Annually" },
    { "path": "legal/MSA-SOW-Template.md", "purpose": "Template for Master Services & Statement of Work.", "owner": "Legal", "review_frequency": "Annually" },
    { "path": "legal/DPA-Template.md", "purpose": "Template for a Data Processing Addendum.", "owner": "Legal", "review_frequency": "Annually" },
    { "path": "README.md", "purpose": "Instructions on how to use the acquisition system.", "owner": "Founder", "review_frequency": "Quarterly" }
  ]
}
`},{type:"file",name:"README.md",content:`
# README: The GitHub Repo Architect Client Acquisition System

Welcome to your complete, production-ready client acquisition system. This repository contains every strategic document, piece of copy, and operational playbook you need to find, sell, and win high-ticket service engagements.

---

### **How to Use This System in 15 Minutes**

**Your Goal:** Get your first lead booked within 7 days.

1.  **Start with Strategy (5 mins):**
    *   Open \`strategy/Offers&Pricing.md\`. Decide on your pricing. Replace the placeholder numbers.
    *   Open \`strategy/ICP.md\`. Read the three profiles. Pick the ONE you want to target first.

2.  **Set Up Your Funnel (5 mins):**
    *   Open \`funnel/LandingPage.md\` and \`funnel/CalendarPage.md\`.
    *   Copy this content into your website builder (e.g., Webflow, Carrd) and your calendar tool (e.g., Calendly).
    *   Connect your form to your CRM using the logic in \`crm/n8n-Zaps-Pseudocode.md\`.

3.  **Launch Your First Outreach (5 mins):**
    *   Open \`outreach/ColdEmails.md\`.
    *   Pick the sequence that matches your chosen ICP.
    *   Find 10 people on LinkedIn who fit your ICP.
    *   Send them the first email.

**That's it.** You are now live.

---

### **Runbook: First 7 Days**

*   **Day 1:** Customize pricing & choose your target ICP. Set up your landing page & calendar.
*   **Day 2:** Send your first 20 cold emails. Send 10 LinkedIn connection requests using the scripts.
*   **Day 3:** Post your first piece of content on LinkedIn from \`content/8-LinkedIn-Posts.md\`.
*   **Day 4:** Follow up on your first batch of cold emails.
*   **Day 5:** Find a relevant job post on Upwork and use the \`Upwork-Proposal-Template.md\`.
*   **Day 6:** Reach out to one potential referral partner using \`outreach/Partner-Intro-Email.md\`.
*   **Day 7:** Review your week. Did you get any replies? Any calls booked? Use the \`metrics/Weekly-Review-Checklist.md\` to guide you.

---
### **System Overview**

*   **\`/strategy\`**: Your GTM plan. Who you sell to, what you sell, and why you're different.
*   **\`/funnel\`**: The assets for your online presence (landing page, forms, etc.).
*   **\`/copy\`**: Your messaging bible. Value props, FAQs, and objection handling.
*   **\`/outreach\`**: Templates for actively finding new clients.
*   **\`/email\`**: Automated email sequences for nurturing and operations.
*   **\`/content\` & \`/ads\`**: Your top-of-funnel engine for building authority and generating inbound interest.
*   **\`/crm\` & \`/sops\`**: The operating system for your sales process. How you manage leads and run your business.
*   **\`/metrics\` & \`/legal\`**: How you measure success and protect yourself.

This is a living system. Use the \`repo_map.json\` to understand the purpose of each file and assign owners as you grow. Now, go execute.
`}]},Bf=()=>{const[e,t]=je.useState(null),[n,r]=je.useState(new Set(["strategy"])),[o,i]=je.useState(!1),a=je.useMemo(()=>{const h=new Map,m=(p,w)=>{p.forEach(v=>{const k=w?`${w}/${v.name}`:v.name;v.type==="file"?h.set(k,v):v.type==="directory"&&m(v.children,k)})};return m(Gl.children,"client-acquisition"),h},[]),l=je.useCallback(h=>{t(h),window.innerWidth<768&&i(!1)},[]),s=je.useCallback(h=>{r(m=>{const p=new Set(m);return p.has(h)?p.delete(h):p.add(h),p})},[]),c=e?a.get(e)??null:null;return S.jsxs("div",{className:"flex h-screen w-screen overflow-hidden bg-gray-900 text-gray-200",children:[S.jsxs("header",{className:"md:hidden fixed top-0 left-0 right-0 h-14 bg-gray-900/80 backdrop-blur-sm border-b border-gray-700 flex items-center justify-between px-4 z-20",children:[S.jsx("h1",{className:"text-lg font-semibold text-gray-200 truncate",children:"Client Acquisition System"}),S.jsx("button",{onClick:()=>i(!o),className:"p-2 -mr-2",children:o?S.jsx(Hf,{}):S.jsx(Wf,{})})]}),S.jsxs("aside",{className:`fixed md:relative top-14 md:top-0 h-[calc(100vh-3.5rem)] md:h-screen w-72 md:w-80 lg:w-96 flex-shrink-0 bg-gray-800/50 border-r border-gray-700/50 transform transition-transform duration-300 ease-in-out z-10 ${o?"translate-x-0":"-translate-x-full"} md:translate-x-0`,children:[S.jsxs("div",{className:"p-4 border-b border-gray-700 hidden md:block",children:[S.jsx("h1",{className:"text-xl font-bold text-gray-100",children:"GitHub Repo Architect"}),S.jsx("p",{className:"text-sm text-gray-400",children:"Client Acquisition System"})]}),S.jsx("div",{className:"overflow-y-auto h-[calc(100%-4rem)] md:h-[calc(100%-5rem)] p-4",children:S.jsx(nc,{data:Gl.children,selectedFile:e,onFileSelect:l,expandedFolders:n,onToggleFolder:s,basePath:"client-acquisition"})})]}),S.jsx("main",{className:"flex-1 overflow-y-auto pt-14 md:pt-0",children:S.jsx(zf,{file:c})})]})},rc=document.getElementById("root");if(!rc)throw new Error("Could not find root element to mount to");const Gf=Qo.createRoot(rc);Gf.render(S.jsx(Sc.StrictMode,{children:S.jsx(Bf,{})}));
