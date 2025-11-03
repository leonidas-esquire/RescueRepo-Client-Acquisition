(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function ic(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ul={exports:{}},tr={},Vl={exports:{}},x={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yn=Symbol.for("react.element"),ac=Symbol.for("react.portal"),lc=Symbol.for("react.fragment"),sc=Symbol.for("react.strict_mode"),uc=Symbol.for("react.profiler"),cc=Symbol.for("react.provider"),dc=Symbol.for("react.context"),pc=Symbol.for("react.forward_ref"),fc=Symbol.for("react.suspense"),hc=Symbol.for("react.memo"),mc=Symbol.for("react.lazy"),La=Symbol.iterator;function yc(e){return e===null||typeof e!="object"?null:(e=La&&e[La]||e["@@iterator"],typeof e=="function"?e:null)}var Ql={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ql=Object.assign,Yl={};function rn(e,t,n){this.props=e,this.context=t,this.refs=Yl,this.updater=n||Ql}rn.prototype.isReactComponent={};rn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};rn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $l(){}$l.prototype=rn.prototype;function Hi(e,t,n){this.props=e,this.context=t,this.refs=Yl,this.updater=n||Ql}var ji=Hi.prototype=new $l;ji.constructor=Hi;ql(ji,rn.prototype);ji.isPureReactComponent=!0;var Ma=Array.isArray,Kl=Object.prototype.hasOwnProperty,zi={current:null},Zl={key:!0,ref:!0,__self:!0,__source:!0};function Xl(e,t,n){var o,r={},i=null,a=null;if(t!=null)for(o in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)Kl.call(t,o)&&!Zl.hasOwnProperty(o)&&(r[o]=t[o]);var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];r.children=s}if(e&&e.defaultProps)for(o in l=e.defaultProps,l)r[o]===void 0&&(r[o]=l[o]);return{$$typeof:Yn,type:e,key:i,ref:a,props:r,_owner:zi.current}}function gc(e,t){return{$$typeof:Yn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Bi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yn}function vc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Oa=/\/+/g;function kr(e,t){return typeof e=="object"&&e!==null&&e.key!=null?vc(""+e.key):t.toString(36)}function wo(e,t,n,o,r){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Yn:case ac:a=!0}}if(a)return a=e,r=r(a),e=o===""?"."+kr(a,0):o,Ma(r)?(n="",e!=null&&(n=e.replace(Oa,"$&/")+"/"),wo(r,t,n,"",function(c){return c})):r!=null&&(Bi(r)&&(r=gc(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Oa,"$&/")+"/")+e)),t.push(r)),1;if(a=0,o=o===""?".":o+":",Ma(e))for(var l=0;l<e.length;l++){i=e[l];var s=o+kr(i,l);a+=wo(i,t,n,s,r)}else if(s=yc(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=o+kr(i,l++),a+=wo(i,t,n,s,r);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function to(e,t,n){if(e==null)return e;var o=[],r=0;return wo(e,o,"","",function(i){return t.call(n,i,r++)}),o}function wc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var le={current:null},ko={transition:null},kc={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:ko,ReactCurrentOwner:zi};function Jl(){throw Error("act(...) is not supported in production builds of React.")}x.Children={map:to,forEach:function(e,t,n){to(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return to(e,function(){t++}),t},toArray:function(e){return to(e,function(t){return t})||[]},only:function(e){if(!Bi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};x.Component=rn;x.Fragment=lc;x.Profiler=uc;x.PureComponent=Hi;x.StrictMode=sc;x.Suspense=fc;x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kc;x.act=Jl;x.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=ql({},e.props),r=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=zi.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Kl.call(t,s)&&!Zl.hasOwnProperty(s)&&(o[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];o.children=l}return{$$typeof:Yn,type:e.type,key:r,ref:i,props:o,_owner:a}};x.createContext=function(e){return e={$$typeof:dc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:cc,_context:e},e.Consumer=e};x.createElement=Xl;x.createFactory=function(e){var t=Xl.bind(null,e);return t.type=e,t};x.createRef=function(){return{current:null}};x.forwardRef=function(e){return{$$typeof:pc,render:e}};x.isValidElement=Bi;x.lazy=function(e){return{$$typeof:mc,_payload:{_status:-1,_result:e},_init:wc}};x.memo=function(e,t){return{$$typeof:hc,type:e,compare:t===void 0?null:t}};x.startTransition=function(e){var t=ko.transition;ko.transition={};try{e()}finally{ko.transition=t}};x.unstable_act=Jl;x.useCallback=function(e,t){return le.current.useCallback(e,t)};x.useContext=function(e){return le.current.useContext(e)};x.useDebugValue=function(){};x.useDeferredValue=function(e){return le.current.useDeferredValue(e)};x.useEffect=function(e,t){return le.current.useEffect(e,t)};x.useId=function(){return le.current.useId()};x.useImperativeHandle=function(e,t,n){return le.current.useImperativeHandle(e,t,n)};x.useInsertionEffect=function(e,t){return le.current.useInsertionEffect(e,t)};x.useLayoutEffect=function(e,t){return le.current.useLayoutEffect(e,t)};x.useMemo=function(e,t){return le.current.useMemo(e,t)};x.useReducer=function(e,t,n){return le.current.useReducer(e,t,n)};x.useRef=function(e){return le.current.useRef(e)};x.useState=function(e){return le.current.useState(e)};x.useSyncExternalStore=function(e,t,n){return le.current.useSyncExternalStore(e,t,n)};x.useTransition=function(){return le.current.useTransition()};x.version="18.3.1";Vl.exports=x;var je=Vl.exports;const Sc=ic(je);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cc=je,Tc=Symbol.for("react.element"),_c=Symbol.for("react.fragment"),Pc=Object.prototype.hasOwnProperty,Ec=Cc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ac={key:!0,ref:!0,__self:!0,__source:!0};function es(e,t,n){var o,r={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(o in t)Pc.call(t,o)&&!Ac.hasOwnProperty(o)&&(r[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)r[o]===void 0&&(r[o]=t[o]);return{$$typeof:Tc,type:e,key:i,ref:a,props:r,_owner:Ec.current}}tr.Fragment=_c;tr.jsx=es;tr.jsxs=es;Ul.exports=tr;var S=Ul.exports,Qr={},ts={exports:{}},ve={},ns={exports:{}},os={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,I){var b=_.length;_.push(I);e:for(;0<b;){var U=b-1>>>1,$=_[U];if(0<r($,I))_[U]=I,_[b]=$,b=U;else break e}}function n(_){return _.length===0?null:_[0]}function o(_){if(_.length===0)return null;var I=_[0],b=_.pop();if(b!==I){_[0]=b;e:for(var U=0,$=_.length,Jn=$>>>1;U<Jn;){var yt=2*(U+1)-1,wr=_[yt],gt=yt+1,eo=_[gt];if(0>r(wr,b))gt<$&&0>r(eo,wr)?(_[U]=eo,_[gt]=b,U=gt):(_[U]=wr,_[yt]=b,U=yt);else if(gt<$&&0>r(eo,b))_[U]=eo,_[gt]=b,U=gt;else break e}}return I}function r(_,I){var b=_.sortIndex-I.sortIndex;return b!==0?b:_.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],c=[],h=1,m=null,f=3,w=!1,v=!1,k=!1,F=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(_){for(var I=n(c);I!==null;){if(I.callback===null)o(c);else if(I.startTime<=_)o(c),I.sortIndex=I.expirationTime,t(s,I);else break;I=n(c)}}function y(_){if(k=!1,p(_),!v)if(n(s)!==null)v=!0,gr(T);else{var I=n(c);I!==null&&vr(y,I.startTime-_)}}function T(_,I){v=!1,k&&(k=!1,d(A),A=-1),w=!0;var b=f;try{for(p(I),m=n(s);m!==null&&(!(m.expirationTime>I)||_&&!Ee());){var U=m.callback;if(typeof U=="function"){m.callback=null,f=m.priorityLevel;var $=U(m.expirationTime<=I);I=e.unstable_now(),typeof $=="function"?m.callback=$:m===n(s)&&o(s),p(I)}else o(s);m=n(s)}if(m!==null)var Jn=!0;else{var yt=n(c);yt!==null&&vr(y,yt.startTime-I),Jn=!1}return Jn}finally{m=null,f=b,w=!1}}var P=!1,E=null,A=-1,G=5,D=-1;function Ee(){return!(e.unstable_now()-D<G)}function sn(){if(E!==null){var _=e.unstable_now();D=_;var I=!0;try{I=E(!0,_)}finally{I?un():(P=!1,E=null)}}else P=!1}var un;if(typeof u=="function")un=function(){u(sn)};else if(typeof MessageChannel<"u"){var Na=new MessageChannel,rc=Na.port2;Na.port1.onmessage=sn,un=function(){rc.postMessage(null)}}else un=function(){F(sn,0)};function gr(_){E=_,P||(P=!0,un())}function vr(_,I){A=F(function(){_(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){v||w||(v=!0,gr(T))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(_){switch(f){case 1:case 2:case 3:var I=3;break;default:I=f}var b=f;f=I;try{return _()}finally{f=b}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,I){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var b=f;f=_;try{return I()}finally{f=b}},e.unstable_scheduleCallback=function(_,I,b){var U=e.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?U+b:U):b=U,_){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=b+$,_={id:h++,callback:I,priorityLevel:_,startTime:b,expirationTime:$,sortIndex:-1},b>U?(_.sortIndex=b,t(c,_),n(s)===null&&_===n(c)&&(k?(d(A),A=-1):k=!0,vr(y,b-U))):(_.sortIndex=$,t(s,_),v||w||(v=!0,gr(T))),_},e.unstable_shouldYield=Ee,e.unstable_wrapCallback=function(_){var I=f;return function(){var b=f;f=I;try{return _.apply(this,arguments)}finally{f=b}}}})(os);ns.exports=os;var Ic=ns.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bc=je,ge=Ic;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rs=new Set,Dn={};function xt(e,t){Zt(e,t),Zt(e+"Capture",t)}function Zt(e,t){for(Dn[e]=t,e=0;e<t.length;e++)rs.add(t[e])}var Ve=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qr=Object.prototype.hasOwnProperty,xc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fa={},Wa={};function Dc(e){return qr.call(Wa,e)?!0:qr.call(Fa,e)?!1:xc.test(e)?Wa[e]=!0:(Fa[e]=!0,!1)}function Rc(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Nc(e,t,n,o){if(t===null||typeof t>"u"||Rc(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function se(e,t,n,o,r,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ee[t]=new se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new se(e,5,!1,e.toLowerCase(),null,!1,!1)});var Gi=/[\-:]([a-z])/g;function Ui(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Gi,Ui);ee[t]=new se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Gi,Ui);ee[t]=new se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Gi,Ui);ee[t]=new se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new se(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new se(e,1,!1,e.toLowerCase(),null,!0,!0)});function Vi(e,t,n,o){var r=ee.hasOwnProperty(t)?ee[t]:null;(r!==null?r.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Nc(t,n,r,o)&&(n=null),o||r===null?Dc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=n===null?r.type===3?!1:"":n:(t=r.attributeName,o=r.attributeNamespace,n===null?e.removeAttribute(t):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var $e=bc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,no=Symbol.for("react.element"),Nt=Symbol.for("react.portal"),Lt=Symbol.for("react.fragment"),Qi=Symbol.for("react.strict_mode"),Yr=Symbol.for("react.profiler"),is=Symbol.for("react.provider"),as=Symbol.for("react.context"),qi=Symbol.for("react.forward_ref"),$r=Symbol.for("react.suspense"),Kr=Symbol.for("react.suspense_list"),Yi=Symbol.for("react.memo"),Ze=Symbol.for("react.lazy"),ls=Symbol.for("react.offscreen"),Ha=Symbol.iterator;function cn(e){return e===null||typeof e!="object"?null:(e=Ha&&e[Ha]||e["@@iterator"],typeof e=="function"?e:null)}var z=Object.assign,Sr;function vn(e){if(Sr===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Sr=t&&t[1]||""}return`
`+Sr+e}var Cr=!1;function Tr(e,t){if(!e||Cr)return"";Cr=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var o=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){o=c}e.call(t.prototype)}else{try{throw Error()}catch(c){o=c}e()}}catch(c){if(c&&o&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),i=o.stack.split(`
`),a=r.length-1,l=i.length-1;1<=a&&0<=l&&r[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(r[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||r[a]!==i[l]){var s=`
`+r[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Cr=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?vn(e):""}function Lc(e){switch(e.tag){case 5:return vn(e.type);case 16:return vn("Lazy");case 13:return vn("Suspense");case 19:return vn("SuspenseList");case 0:case 2:case 15:return e=Tr(e.type,!1),e;case 11:return e=Tr(e.type.render,!1),e;case 1:return e=Tr(e.type,!0),e;default:return""}}function Zr(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Lt:return"Fragment";case Nt:return"Portal";case Yr:return"Profiler";case Qi:return"StrictMode";case $r:return"Suspense";case Kr:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case as:return(e.displayName||"Context")+".Consumer";case is:return(e._context.displayName||"Context")+".Provider";case qi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Yi:return t=e.displayName||null,t!==null?t:Zr(e.type)||"Memo";case Ze:t=e._payload,e=e._init;try{return Zr(e(t))}catch{}}return null}function Mc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zr(t);case 8:return t===Qi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function dt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ss(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Oc(e){var t=ss(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(a){o=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(a){o=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function oo(e){e._valueTracker||(e._valueTracker=Oc(e))}function us(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=ss(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function Do(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xr(e,t){var n=t.checked;return z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ja(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=dt(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function cs(e,t){t=t.checked,t!=null&&Vi(e,"checked",t,!1)}function Jr(e,t){cs(e,t);var n=dt(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ei(e,t.type,n):t.hasOwnProperty("defaultValue")&&ei(e,t.type,dt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function za(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ei(e,t,n){(t!=="number"||Do(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var wn=Array.isArray;function Vt(e,t,n,o){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&o&&(e[n].defaultSelected=!0)}else{for(n=""+dt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,o&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function ti(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(g(91));return z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ba(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(g(92));if(wn(n)){if(1<n.length)throw Error(g(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:dt(n)}}function ds(e,t){var n=dt(t.value),o=dt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function Ga(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ps(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ni(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ps(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ro,fs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,r){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,r)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ro=ro||document.createElement("div"),ro.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ro.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Rn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Cn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fc=["Webkit","ms","Moz","O"];Object.keys(Cn).forEach(function(e){Fc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Cn[t]=Cn[e]})});function hs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Cn.hasOwnProperty(e)&&Cn[e]?(""+t).trim():t+"px"}function ms(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,r=hs(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,r):e[n]=r}}var Wc=z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oi(e,t){if(t){if(Wc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(g(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(g(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(g(61))}if(t.style!=null&&typeof t.style!="object")throw Error(g(62))}}function ri(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ii=null;function $i(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ai=null,Qt=null,qt=null;function Ua(e){if(e=Zn(e)){if(typeof ai!="function")throw Error(g(280));var t=e.stateNode;t&&(t=ar(t),ai(e.stateNode,e.type,t))}}function ys(e){Qt?qt?qt.push(e):qt=[e]:Qt=e}function gs(){if(Qt){var e=Qt,t=qt;if(qt=Qt=null,Ua(e),t)for(e=0;e<t.length;e++)Ua(t[e])}}function vs(e,t){return e(t)}function ws(){}var _r=!1;function ks(e,t,n){if(_r)return e(t,n);_r=!0;try{return vs(e,t,n)}finally{_r=!1,(Qt!==null||qt!==null)&&(ws(),gs())}}function Nn(e,t){var n=e.stateNode;if(n===null)return null;var o=ar(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(g(231,t,typeof n));return n}var li=!1;if(Ve)try{var dn={};Object.defineProperty(dn,"passive",{get:function(){li=!0}}),window.addEventListener("test",dn,dn),window.removeEventListener("test",dn,dn)}catch{li=!1}function Hc(e,t,n,o,r,i,a,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Tn=!1,Ro=null,No=!1,si=null,jc={onError:function(e){Tn=!0,Ro=e}};function zc(e,t,n,o,r,i,a,l,s){Tn=!1,Ro=null,Hc.apply(jc,arguments)}function Bc(e,t,n,o,r,i,a,l,s){if(zc.apply(this,arguments),Tn){if(Tn){var c=Ro;Tn=!1,Ro=null}else throw Error(g(198));No||(No=!0,si=c)}}function Dt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ss(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Va(e){if(Dt(e)!==e)throw Error(g(188))}function Gc(e){var t=e.alternate;if(!t){if(t=Dt(e),t===null)throw Error(g(188));return t!==e?null:e}for(var n=e,o=t;;){var r=n.return;if(r===null)break;var i=r.alternate;if(i===null){if(o=r.return,o!==null){n=o;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===n)return Va(r),e;if(i===o)return Va(r),t;i=i.sibling}throw Error(g(188))}if(n.return!==o.return)n=r,o=i;else{for(var a=!1,l=r.child;l;){if(l===n){a=!0,n=r,o=i;break}if(l===o){a=!0,o=r,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,o=r;break}if(l===o){a=!0,o=i,n=r;break}l=l.sibling}if(!a)throw Error(g(189))}}if(n.alternate!==o)throw Error(g(190))}if(n.tag!==3)throw Error(g(188));return n.stateNode.current===n?e:t}function Cs(e){return e=Gc(e),e!==null?Ts(e):null}function Ts(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ts(e);if(t!==null)return t;e=e.sibling}return null}var _s=ge.unstable_scheduleCallback,Qa=ge.unstable_cancelCallback,Uc=ge.unstable_shouldYield,Vc=ge.unstable_requestPaint,V=ge.unstable_now,Qc=ge.unstable_getCurrentPriorityLevel,Ki=ge.unstable_ImmediatePriority,Ps=ge.unstable_UserBlockingPriority,Lo=ge.unstable_NormalPriority,qc=ge.unstable_LowPriority,Es=ge.unstable_IdlePriority,nr=null,Fe=null;function Yc(e){if(Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(nr,e,void 0,(e.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:Zc,$c=Math.log,Kc=Math.LN2;function Zc(e){return e>>>=0,e===0?32:31-($c(e)/Kc|0)|0}var io=64,ao=4194304;function kn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Mo(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,r=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~r;l!==0?o=kn(l):(i&=a,i!==0&&(o=kn(i)))}else a=n&~r,a!==0?o=kn(a):i!==0&&(o=kn(i));if(o===0)return 0;if(t!==0&&t!==o&&!(t&r)&&(r=o&-o,i=t&-t,r>=i||r===16&&(i&4194240)!==0))return t;if(o&4&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-De(t),r=1<<n,o|=e[n],t&=~r;return o}function Xc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jc(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-De(i),l=1<<a,s=r[a];s===-1?(!(l&n)||l&o)&&(r[a]=Xc(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}function ui(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function As(){var e=io;return io<<=1,!(io&4194240)&&(io=64),e}function Pr(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function $n(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-De(t),e[t]=n}function ed(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-De(n),i=1<<r;t[r]=0,o[r]=-1,e[r]=-1,n&=~i}}function Zi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-De(n),r=1<<o;r&t|e[o]&t&&(e[o]|=t),n&=~r}}var N=0;function Is(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var bs,Xi,xs,Ds,Rs,ci=!1,lo=[],ot=null,rt=null,it=null,Ln=new Map,Mn=new Map,Je=[],td="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qa(e,t){switch(e){case"focusin":case"focusout":ot=null;break;case"dragenter":case"dragleave":rt=null;break;case"mouseover":case"mouseout":it=null;break;case"pointerover":case"pointerout":Ln.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mn.delete(t.pointerId)}}function pn(e,t,n,o,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:i,targetContainers:[r]},t!==null&&(t=Zn(t),t!==null&&Xi(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function nd(e,t,n,o,r){switch(t){case"focusin":return ot=pn(ot,e,t,n,o,r),!0;case"dragenter":return rt=pn(rt,e,t,n,o,r),!0;case"mouseover":return it=pn(it,e,t,n,o,r),!0;case"pointerover":var i=r.pointerId;return Ln.set(i,pn(Ln.get(i)||null,e,t,n,o,r)),!0;case"gotpointercapture":return i=r.pointerId,Mn.set(i,pn(Mn.get(i)||null,e,t,n,o,r)),!0}return!1}function Ns(e){var t=kt(e.target);if(t!==null){var n=Dt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ss(n),t!==null){e.blockedOn=t,Rs(e.priority,function(){xs(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function So(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=di(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);ii=o,n.target.dispatchEvent(o),ii=null}else return t=Zn(n),t!==null&&Xi(t),e.blockedOn=n,!1;t.shift()}return!0}function Ya(e,t,n){So(e)&&n.delete(t)}function od(){ci=!1,ot!==null&&So(ot)&&(ot=null),rt!==null&&So(rt)&&(rt=null),it!==null&&So(it)&&(it=null),Ln.forEach(Ya),Mn.forEach(Ya)}function fn(e,t){e.blockedOn===t&&(e.blockedOn=null,ci||(ci=!0,ge.unstable_scheduleCallback(ge.unstable_NormalPriority,od)))}function On(e){function t(r){return fn(r,e)}if(0<lo.length){fn(lo[0],e);for(var n=1;n<lo.length;n++){var o=lo[n];o.blockedOn===e&&(o.blockedOn=null)}}for(ot!==null&&fn(ot,e),rt!==null&&fn(rt,e),it!==null&&fn(it,e),Ln.forEach(t),Mn.forEach(t),n=0;n<Je.length;n++)o=Je[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<Je.length&&(n=Je[0],n.blockedOn===null);)Ns(n),n.blockedOn===null&&Je.shift()}var Yt=$e.ReactCurrentBatchConfig,Oo=!0;function rd(e,t,n,o){var r=N,i=Yt.transition;Yt.transition=null;try{N=1,Ji(e,t,n,o)}finally{N=r,Yt.transition=i}}function id(e,t,n,o){var r=N,i=Yt.transition;Yt.transition=null;try{N=4,Ji(e,t,n,o)}finally{N=r,Yt.transition=i}}function Ji(e,t,n,o){if(Oo){var r=di(e,t,n,o);if(r===null)Mr(e,t,o,Fo,n),qa(e,o);else if(nd(r,e,t,n,o))o.stopPropagation();else if(qa(e,o),t&4&&-1<td.indexOf(e)){for(;r!==null;){var i=Zn(r);if(i!==null&&bs(i),i=di(e,t,n,o),i===null&&Mr(e,t,o,Fo,n),i===r)break;r=i}r!==null&&o.stopPropagation()}else Mr(e,t,o,null,n)}}var Fo=null;function di(e,t,n,o){if(Fo=null,e=$i(o),e=kt(e),e!==null)if(t=Dt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ss(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fo=e,null}function Ls(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qc()){case Ki:return 1;case Ps:return 4;case Lo:case qc:return 16;case Es:return 536870912;default:return 16}default:return 16}}var tt=null,ea=null,Co=null;function Ms(){if(Co)return Co;var e,t=ea,n=t.length,o,r="value"in tt?tt.value:tt.textContent,i=r.length;for(e=0;e<n&&t[e]===r[e];e++);var a=n-e;for(o=1;o<=a&&t[n-o]===r[i-o];o++);return Co=r.slice(e,1<o?1-o:void 0)}function To(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function so(){return!0}function $a(){return!1}function we(e){function t(n,o,r,i,a){this._reactName=n,this._targetInst=r,this.type=o,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?so:$a,this.isPropagationStopped=$a,this}return z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=so)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=so)},persist:function(){},isPersistent:so}),t}var an={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ta=we(an),Kn=z({},an,{view:0,detail:0}),ad=we(Kn),Er,Ar,hn,or=z({},Kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:na,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hn&&(hn&&e.type==="mousemove"?(Er=e.screenX-hn.screenX,Ar=e.screenY-hn.screenY):Ar=Er=0,hn=e),Er)},movementY:function(e){return"movementY"in e?e.movementY:Ar}}),Ka=we(or),ld=z({},or,{dataTransfer:0}),sd=we(ld),ud=z({},Kn,{relatedTarget:0}),Ir=we(ud),cd=z({},an,{animationName:0,elapsedTime:0,pseudoElement:0}),dd=we(cd),pd=z({},an,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fd=we(pd),hd=z({},an,{data:0}),Za=we(hd),md={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=gd[e])?!!t[e]:!1}function na(){return vd}var wd=z({},Kn,{key:function(e){if(e.key){var t=md[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=To(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:na,charCode:function(e){return e.type==="keypress"?To(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?To(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kd=we(wd),Sd=z({},or,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xa=we(Sd),Cd=z({},Kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:na}),Td=we(Cd),_d=z({},an,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pd=we(_d),Ed=z({},or,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ad=we(Ed),Id=[9,13,27,32],oa=Ve&&"CompositionEvent"in window,_n=null;Ve&&"documentMode"in document&&(_n=document.documentMode);var bd=Ve&&"TextEvent"in window&&!_n,Os=Ve&&(!oa||_n&&8<_n&&11>=_n),Ja=String.fromCharCode(32),el=!1;function Fs(e,t){switch(e){case"keyup":return Id.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ws(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Mt=!1;function xd(e,t){switch(e){case"compositionend":return Ws(t);case"keypress":return t.which!==32?null:(el=!0,Ja);case"textInput":return e=t.data,e===Ja&&el?null:e;default:return null}}function Dd(e,t){if(Mt)return e==="compositionend"||!oa&&Fs(e,t)?(e=Ms(),Co=ea=tt=null,Mt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Os&&t.locale!=="ko"?null:t.data;default:return null}}var Rd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Rd[e.type]:t==="textarea"}function Hs(e,t,n,o){ys(o),t=Wo(t,"onChange"),0<t.length&&(n=new ta("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var Pn=null,Fn=null;function Nd(e){Ks(e,0)}function rr(e){var t=Wt(e);if(us(t))return e}function Ld(e,t){if(e==="change")return t}var js=!1;if(Ve){var br;if(Ve){var xr="oninput"in document;if(!xr){var nl=document.createElement("div");nl.setAttribute("oninput","return;"),xr=typeof nl.oninput=="function"}br=xr}else br=!1;js=br&&(!document.documentMode||9<document.documentMode)}function ol(){Pn&&(Pn.detachEvent("onpropertychange",zs),Fn=Pn=null)}function zs(e){if(e.propertyName==="value"&&rr(Fn)){var t=[];Hs(t,Fn,e,$i(e)),ks(Nd,t)}}function Md(e,t,n){e==="focusin"?(ol(),Pn=t,Fn=n,Pn.attachEvent("onpropertychange",zs)):e==="focusout"&&ol()}function Od(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rr(Fn)}function Fd(e,t){if(e==="click")return rr(t)}function Wd(e,t){if(e==="input"||e==="change")return rr(t)}function Hd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ne=typeof Object.is=="function"?Object.is:Hd;function Wn(e,t){if(Ne(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var r=n[o];if(!qr.call(t,r)||!Ne(e[r],t[r]))return!1}return!0}function rl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function il(e,t){var n=rl(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rl(n)}}function Bs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gs(){for(var e=window,t=Do();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Do(e.document)}return t}function ra(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function jd(e){var t=Gs(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Bs(n.ownerDocument.documentElement,n)){if(o!==null&&ra(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=n.textContent.length,i=Math.min(o.start,r);o=o.end===void 0?i:Math.min(o.end,r),!e.extend&&i>o&&(r=o,o=i,i=r),r=il(n,i);var a=il(n,o);r&&a&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),i>o?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var zd=Ve&&"documentMode"in document&&11>=document.documentMode,Ot=null,pi=null,En=null,fi=!1;function al(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fi||Ot==null||Ot!==Do(o)||(o=Ot,"selectionStart"in o&&ra(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),En&&Wn(En,o)||(En=o,o=Wo(pi,"onSelect"),0<o.length&&(t=new ta("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=Ot)))}function uo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ft={animationend:uo("Animation","AnimationEnd"),animationiteration:uo("Animation","AnimationIteration"),animationstart:uo("Animation","AnimationStart"),transitionend:uo("Transition","TransitionEnd")},Dr={},Us={};Ve&&(Us=document.createElement("div").style,"AnimationEvent"in window||(delete Ft.animationend.animation,delete Ft.animationiteration.animation,delete Ft.animationstart.animation),"TransitionEvent"in window||delete Ft.transitionend.transition);function ir(e){if(Dr[e])return Dr[e];if(!Ft[e])return e;var t=Ft[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Us)return Dr[e]=t[n];return e}var Vs=ir("animationend"),Qs=ir("animationiteration"),qs=ir("animationstart"),Ys=ir("transitionend"),$s=new Map,ll="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ft(e,t){$s.set(e,t),xt(t,[e])}for(var Rr=0;Rr<ll.length;Rr++){var Nr=ll[Rr],Bd=Nr.toLowerCase(),Gd=Nr[0].toUpperCase()+Nr.slice(1);ft(Bd,"on"+Gd)}ft(Vs,"onAnimationEnd");ft(Qs,"onAnimationIteration");ft(qs,"onAnimationStart");ft("dblclick","onDoubleClick");ft("focusin","onFocus");ft("focusout","onBlur");ft(Ys,"onTransitionEnd");Zt("onMouseEnter",["mouseout","mouseover"]);Zt("onMouseLeave",["mouseout","mouseover"]);Zt("onPointerEnter",["pointerout","pointerover"]);Zt("onPointerLeave",["pointerout","pointerover"]);xt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xt("onBeforeInput",["compositionend","keypress","textInput","paste"]);xt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ud=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sn));function sl(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,Bc(o,t,void 0,e),e.currentTarget=null}function Ks(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],r=o.event;o=o.listeners;e:{var i=void 0;if(t)for(var a=o.length-1;0<=a;a--){var l=o[a],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==i&&r.isPropagationStopped())break e;sl(r,l,c),i=s}else for(a=0;a<o.length;a++){if(l=o[a],s=l.instance,c=l.currentTarget,l=l.listener,s!==i&&r.isPropagationStopped())break e;sl(r,l,c),i=s}}}if(No)throw e=si,No=!1,si=null,e}function M(e,t){var n=t[vi];n===void 0&&(n=t[vi]=new Set);var o=e+"__bubble";n.has(o)||(Zs(t,e,2,!1),n.add(o))}function Lr(e,t,n){var o=0;t&&(o|=4),Zs(n,e,o,t)}var co="_reactListening"+Math.random().toString(36).slice(2);function Hn(e){if(!e[co]){e[co]=!0,rs.forEach(function(n){n!=="selectionchange"&&(Ud.has(n)||Lr(n,!1,e),Lr(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[co]||(t[co]=!0,Lr("selectionchange",!1,t))}}function Zs(e,t,n,o){switch(Ls(t)){case 1:var r=rd;break;case 4:r=id;break;default:r=Ji}n=r.bind(null,t,n,e),r=void 0,!li||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),o?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Mr(e,t,n,o,r){var i=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var a=o.tag;if(a===3||a===4){var l=o.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(a===4)for(a=o.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===r||s.nodeType===8&&s.parentNode===r))return;a=a.return}for(;l!==null;){if(a=kt(l),a===null)return;if(s=a.tag,s===5||s===6){o=i=a;continue e}l=l.parentNode}}o=o.return}ks(function(){var c=i,h=$i(n),m=[];e:{var f=$s.get(e);if(f!==void 0){var w=ta,v=e;switch(e){case"keypress":if(To(n)===0)break e;case"keydown":case"keyup":w=kd;break;case"focusin":v="focus",w=Ir;break;case"focusout":v="blur",w=Ir;break;case"beforeblur":case"afterblur":w=Ir;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Ka;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=sd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Td;break;case Vs:case Qs:case qs:w=dd;break;case Ys:w=Pd;break;case"scroll":w=ad;break;case"wheel":w=Ad;break;case"copy":case"cut":case"paste":w=fd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Xa}var k=(t&4)!==0,F=!k&&e==="scroll",d=k?f!==null?f+"Capture":null:f;k=[];for(var u=c,p;u!==null;){p=u;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,d!==null&&(y=Nn(u,d),y!=null&&k.push(jn(u,y,p)))),F)break;u=u.return}0<k.length&&(f=new w(f,v,null,n,h),m.push({event:f,listeners:k}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",f&&n!==ii&&(v=n.relatedTarget||n.fromElement)&&(kt(v)||v[Qe]))break e;if((w||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,w?(v=n.relatedTarget||n.toElement,w=c,v=v?kt(v):null,v!==null&&(F=Dt(v),v!==F||v.tag!==5&&v.tag!==6)&&(v=null)):(w=null,v=c),w!==v)){if(k=Ka,y="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(k=Xa,y="onPointerLeave",d="onPointerEnter",u="pointer"),F=w==null?f:Wt(w),p=v==null?f:Wt(v),f=new k(y,u+"leave",w,n,h),f.target=F,f.relatedTarget=p,y=null,kt(h)===c&&(k=new k(d,u+"enter",v,n,h),k.target=p,k.relatedTarget=F,y=k),F=y,w&&v)t:{for(k=w,d=v,u=0,p=k;p;p=Rt(p))u++;for(p=0,y=d;y;y=Rt(y))p++;for(;0<u-p;)k=Rt(k),u--;for(;0<p-u;)d=Rt(d),p--;for(;u--;){if(k===d||d!==null&&k===d.alternate)break t;k=Rt(k),d=Rt(d)}k=null}else k=null;w!==null&&ul(m,f,w,k,!1),v!==null&&F!==null&&ul(m,F,v,k,!0)}}e:{if(f=c?Wt(c):window,w=f.nodeName&&f.nodeName.toLowerCase(),w==="select"||w==="input"&&f.type==="file")var T=Ld;else if(tl(f))if(js)T=Wd;else{T=Od;var P=Md}else(w=f.nodeName)&&w.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=Fd);if(T&&(T=T(e,c))){Hs(m,T,n,h);break e}P&&P(e,f,c),e==="focusout"&&(P=f._wrapperState)&&P.controlled&&f.type==="number"&&ei(f,"number",f.value)}switch(P=c?Wt(c):window,e){case"focusin":(tl(P)||P.contentEditable==="true")&&(Ot=P,pi=c,En=null);break;case"focusout":En=pi=Ot=null;break;case"mousedown":fi=!0;break;case"contextmenu":case"mouseup":case"dragend":fi=!1,al(m,n,h);break;case"selectionchange":if(zd)break;case"keydown":case"keyup":al(m,n,h)}var E;if(oa)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Mt?Fs(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(Os&&n.locale!=="ko"&&(Mt||A!=="onCompositionStart"?A==="onCompositionEnd"&&Mt&&(E=Ms()):(tt=h,ea="value"in tt?tt.value:tt.textContent,Mt=!0)),P=Wo(c,A),0<P.length&&(A=new Za(A,e,null,n,h),m.push({event:A,listeners:P}),E?A.data=E:(E=Ws(n),E!==null&&(A.data=E)))),(E=bd?xd(e,n):Dd(e,n))&&(c=Wo(c,"onBeforeInput"),0<c.length&&(h=new Za("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:c}),h.data=E))}Ks(m,t)})}function jn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wo(e,t){for(var n=t+"Capture",o=[];e!==null;){var r=e,i=r.stateNode;r.tag===5&&i!==null&&(r=i,i=Nn(e,n),i!=null&&o.unshift(jn(e,i,r)),i=Nn(e,t),i!=null&&o.push(jn(e,i,r))),e=e.return}return o}function Rt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ul(e,t,n,o,r){for(var i=t._reactName,a=[];n!==null&&n!==o;){var l=n,s=l.alternate,c=l.stateNode;if(s!==null&&s===o)break;l.tag===5&&c!==null&&(l=c,r?(s=Nn(n,i),s!=null&&a.unshift(jn(n,s,l))):r||(s=Nn(n,i),s!=null&&a.push(jn(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Vd=/\r\n?/g,Qd=/\u0000|\uFFFD/g;function cl(e){return(typeof e=="string"?e:""+e).replace(Vd,`
`).replace(Qd,"")}function po(e,t,n){if(t=cl(t),cl(e)!==t&&n)throw Error(g(425))}function Ho(){}var hi=null,mi=null;function yi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gi=typeof setTimeout=="function"?setTimeout:void 0,qd=typeof clearTimeout=="function"?clearTimeout:void 0,dl=typeof Promise=="function"?Promise:void 0,Yd=typeof queueMicrotask=="function"?queueMicrotask:typeof dl<"u"?function(e){return dl.resolve(null).then(e).catch($d)}:gi;function $d(e){setTimeout(function(){throw e})}function Or(e,t){var n=t,o=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(o===0){e.removeChild(r),On(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=r}while(n);On(t)}function at(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function pl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ln=Math.random().toString(36).slice(2),Oe="__reactFiber$"+ln,zn="__reactProps$"+ln,Qe="__reactContainer$"+ln,vi="__reactEvents$"+ln,Kd="__reactListeners$"+ln,Zd="__reactHandles$"+ln;function kt(e){var t=e[Oe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Qe]||n[Oe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=pl(e);e!==null;){if(n=e[Oe])return n;e=pl(e)}return t}e=n,n=e.parentNode}return null}function Zn(e){return e=e[Oe]||e[Qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Wt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(g(33))}function ar(e){return e[zn]||null}var wi=[],Ht=-1;function ht(e){return{current:e}}function O(e){0>Ht||(e.current=wi[Ht],wi[Ht]=null,Ht--)}function L(e,t){Ht++,wi[Ht]=e.current,e.current=t}var pt={},re=ht(pt),de=ht(!1),Pt=pt;function Xt(e,t){var n=e.type.contextTypes;if(!n)return pt;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var r={},i;for(i in n)r[i]=t[i];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function pe(e){return e=e.childContextTypes,e!=null}function jo(){O(de),O(re)}function fl(e,t,n){if(re.current!==pt)throw Error(g(168));L(re,t),L(de,n)}function Xs(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var r in o)if(!(r in t))throw Error(g(108,Mc(e)||"Unknown",r));return z({},n,o)}function zo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pt,Pt=re.current,L(re,e),L(de,de.current),!0}function hl(e,t,n){var o=e.stateNode;if(!o)throw Error(g(169));n?(e=Xs(e,t,Pt),o.__reactInternalMemoizedMergedChildContext=e,O(de),O(re),L(re,e)):O(de),L(de,n)}var ze=null,lr=!1,Fr=!1;function Js(e){ze===null?ze=[e]:ze.push(e)}function Xd(e){lr=!0,Js(e)}function mt(){if(!Fr&&ze!==null){Fr=!0;var e=0,t=N;try{var n=ze;for(N=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}ze=null,lr=!1}catch(r){throw ze!==null&&(ze=ze.slice(e+1)),_s(Ki,mt),r}finally{N=t,Fr=!1}}return null}var jt=[],zt=0,Bo=null,Go=0,ke=[],Se=0,Et=null,Be=1,Ge="";function vt(e,t){jt[zt++]=Go,jt[zt++]=Bo,Bo=e,Go=t}function eu(e,t,n){ke[Se++]=Be,ke[Se++]=Ge,ke[Se++]=Et,Et=e;var o=Be;e=Ge;var r=32-De(o)-1;o&=~(1<<r),n+=1;var i=32-De(t)+r;if(30<i){var a=r-r%5;i=(o&(1<<a)-1).toString(32),o>>=a,r-=a,Be=1<<32-De(t)+r|n<<r|o,Ge=i+e}else Be=1<<i|n<<r|o,Ge=e}function ia(e){e.return!==null&&(vt(e,1),eu(e,1,0))}function aa(e){for(;e===Bo;)Bo=jt[--zt],jt[zt]=null,Go=jt[--zt],jt[zt]=null;for(;e===Et;)Et=ke[--Se],ke[Se]=null,Ge=ke[--Se],ke[Se]=null,Be=ke[--Se],ke[Se]=null}var ye=null,me=null,W=!1,xe=null;function tu(e,t){var n=Ce(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ml(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ye=e,me=at(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ye=e,me=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Et!==null?{id:Be,overflow:Ge}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ce(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ye=e,me=null,!0):!1;default:return!1}}function ki(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Si(e){if(W){var t=me;if(t){var n=t;if(!ml(e,t)){if(ki(e))throw Error(g(418));t=at(n.nextSibling);var o=ye;t&&ml(e,t)?tu(o,n):(e.flags=e.flags&-4097|2,W=!1,ye=e)}}else{if(ki(e))throw Error(g(418));e.flags=e.flags&-4097|2,W=!1,ye=e}}}function yl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function fo(e){if(e!==ye)return!1;if(!W)return yl(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yi(e.type,e.memoizedProps)),t&&(t=me)){if(ki(e))throw nu(),Error(g(418));for(;t;)tu(e,t),t=at(t.nextSibling)}if(yl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){me=at(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}me=null}}else me=ye?at(e.stateNode.nextSibling):null;return!0}function nu(){for(var e=me;e;)e=at(e.nextSibling)}function Jt(){me=ye=null,W=!1}function la(e){xe===null?xe=[e]:xe.push(e)}var Jd=$e.ReactCurrentBatchConfig;function mn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(g(309));var o=n.stateNode}if(!o)throw Error(g(147,e));var r=o,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var l=r.refs;a===null?delete l[i]:l[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(g(284));if(!n._owner)throw Error(g(290,e))}return e}function ho(e,t){throw e=Object.prototype.toString.call(t),Error(g(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function gl(e){var t=e._init;return t(e._payload)}function ou(e){function t(d,u){if(e){var p=d.deletions;p===null?(d.deletions=[u],d.flags|=16):p.push(u)}}function n(d,u){if(!e)return null;for(;u!==null;)t(d,u),u=u.sibling;return null}function o(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function r(d,u){return d=ct(d,u),d.index=0,d.sibling=null,d}function i(d,u,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<u?(d.flags|=2,u):p):(d.flags|=2,u)):(d.flags|=1048576,u)}function a(d){return e&&d.alternate===null&&(d.flags|=2),d}function l(d,u,p,y){return u===null||u.tag!==6?(u=Ur(p,d.mode,y),u.return=d,u):(u=r(u,p),u.return=d,u)}function s(d,u,p,y){var T=p.type;return T===Lt?h(d,u,p.props.children,y,p.key):u!==null&&(u.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ze&&gl(T)===u.type)?(y=r(u,p.props),y.ref=mn(d,u,p),y.return=d,y):(y=xo(p.type,p.key,p.props,null,d.mode,y),y.ref=mn(d,u,p),y.return=d,y)}function c(d,u,p,y){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=Vr(p,d.mode,y),u.return=d,u):(u=r(u,p.children||[]),u.return=d,u)}function h(d,u,p,y,T){return u===null||u.tag!==7?(u=_t(p,d.mode,y,T),u.return=d,u):(u=r(u,p),u.return=d,u)}function m(d,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Ur(""+u,d.mode,p),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case no:return p=xo(u.type,u.key,u.props,null,d.mode,p),p.ref=mn(d,null,u),p.return=d,p;case Nt:return u=Vr(u,d.mode,p),u.return=d,u;case Ze:var y=u._init;return m(d,y(u._payload),p)}if(wn(u)||cn(u))return u=_t(u,d.mode,p,null),u.return=d,u;ho(d,u)}return null}function f(d,u,p,y){var T=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return T!==null?null:l(d,u,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case no:return p.key===T?s(d,u,p,y):null;case Nt:return p.key===T?c(d,u,p,y):null;case Ze:return T=p._init,f(d,u,T(p._payload),y)}if(wn(p)||cn(p))return T!==null?null:h(d,u,p,y,null);ho(d,p)}return null}function w(d,u,p,y,T){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(p)||null,l(u,d,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case no:return d=d.get(y.key===null?p:y.key)||null,s(u,d,y,T);case Nt:return d=d.get(y.key===null?p:y.key)||null,c(u,d,y,T);case Ze:var P=y._init;return w(d,u,p,P(y._payload),T)}if(wn(y)||cn(y))return d=d.get(p)||null,h(u,d,y,T,null);ho(u,y)}return null}function v(d,u,p,y){for(var T=null,P=null,E=u,A=u=0,G=null;E!==null&&A<p.length;A++){E.index>A?(G=E,E=null):G=E.sibling;var D=f(d,E,p[A],y);if(D===null){E===null&&(E=G);break}e&&E&&D.alternate===null&&t(d,E),u=i(D,u,A),P===null?T=D:P.sibling=D,P=D,E=G}if(A===p.length)return n(d,E),W&&vt(d,A),T;if(E===null){for(;A<p.length;A++)E=m(d,p[A],y),E!==null&&(u=i(E,u,A),P===null?T=E:P.sibling=E,P=E);return W&&vt(d,A),T}for(E=o(d,E);A<p.length;A++)G=w(E,d,A,p[A],y),G!==null&&(e&&G.alternate!==null&&E.delete(G.key===null?A:G.key),u=i(G,u,A),P===null?T=G:P.sibling=G,P=G);return e&&E.forEach(function(Ee){return t(d,Ee)}),W&&vt(d,A),T}function k(d,u,p,y){var T=cn(p);if(typeof T!="function")throw Error(g(150));if(p=T.call(p),p==null)throw Error(g(151));for(var P=T=null,E=u,A=u=0,G=null,D=p.next();E!==null&&!D.done;A++,D=p.next()){E.index>A?(G=E,E=null):G=E.sibling;var Ee=f(d,E,D.value,y);if(Ee===null){E===null&&(E=G);break}e&&E&&Ee.alternate===null&&t(d,E),u=i(Ee,u,A),P===null?T=Ee:P.sibling=Ee,P=Ee,E=G}if(D.done)return n(d,E),W&&vt(d,A),T;if(E===null){for(;!D.done;A++,D=p.next())D=m(d,D.value,y),D!==null&&(u=i(D,u,A),P===null?T=D:P.sibling=D,P=D);return W&&vt(d,A),T}for(E=o(d,E);!D.done;A++,D=p.next())D=w(E,d,A,D.value,y),D!==null&&(e&&D.alternate!==null&&E.delete(D.key===null?A:D.key),u=i(D,u,A),P===null?T=D:P.sibling=D,P=D);return e&&E.forEach(function(sn){return t(d,sn)}),W&&vt(d,A),T}function F(d,u,p,y){if(typeof p=="object"&&p!==null&&p.type===Lt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case no:e:{for(var T=p.key,P=u;P!==null;){if(P.key===T){if(T=p.type,T===Lt){if(P.tag===7){n(d,P.sibling),u=r(P,p.props.children),u.return=d,d=u;break e}}else if(P.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ze&&gl(T)===P.type){n(d,P.sibling),u=r(P,p.props),u.ref=mn(d,P,p),u.return=d,d=u;break e}n(d,P);break}else t(d,P);P=P.sibling}p.type===Lt?(u=_t(p.props.children,d.mode,y,p.key),u.return=d,d=u):(y=xo(p.type,p.key,p.props,null,d.mode,y),y.ref=mn(d,u,p),y.return=d,d=y)}return a(d);case Nt:e:{for(P=p.key;u!==null;){if(u.key===P)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){n(d,u.sibling),u=r(u,p.children||[]),u.return=d,d=u;break e}else{n(d,u);break}else t(d,u);u=u.sibling}u=Vr(p,d.mode,y),u.return=d,d=u}return a(d);case Ze:return P=p._init,F(d,u,P(p._payload),y)}if(wn(p))return v(d,u,p,y);if(cn(p))return k(d,u,p,y);ho(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(n(d,u.sibling),u=r(u,p),u.return=d,d=u):(n(d,u),u=Ur(p,d.mode,y),u.return=d,d=u),a(d)):n(d,u)}return F}var en=ou(!0),ru=ou(!1),Uo=ht(null),Vo=null,Bt=null,sa=null;function ua(){sa=Bt=Vo=null}function ca(e){var t=Uo.current;O(Uo),e._currentValue=t}function Ci(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function $t(e,t){Vo=e,sa=Bt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ce=!0),e.firstContext=null)}function _e(e){var t=e._currentValue;if(sa!==e)if(e={context:e,memoizedValue:t,next:null},Bt===null){if(Vo===null)throw Error(g(308));Bt=e,Vo.dependencies={lanes:0,firstContext:e}}else Bt=Bt.next=e;return t}var St=null;function da(e){St===null?St=[e]:St.push(e)}function iu(e,t,n,o){var r=t.interleaved;return r===null?(n.next=n,da(t)):(n.next=r.next,r.next=n),t.interleaved=n,qe(e,o)}function qe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Xe=!1;function pa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function au(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ue(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function lt(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,R&2){var r=o.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),o.pending=t,qe(e,n)}return r=o.interleaved,r===null?(t.next=t,da(o)):(t.next=r.next,r.next=t),o.interleaved=t,qe(e,n)}function _o(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Zi(e,n)}}function vl(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var r=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?r=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?r=i=t:i=i.next=t}else r=i=t;n={baseState:o.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Qo(e,t,n,o){var r=e.updateQueue;Xe=!1;var i=r.firstBaseUpdate,a=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var s=l,c=s.next;s.next=null,a===null?i=c:a.next=c,a=s;var h=e.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==a&&(l===null?h.firstBaseUpdate=c:l.next=c,h.lastBaseUpdate=s))}if(i!==null){var m=r.baseState;a=0,h=c=s=null,l=i;do{var f=l.lane,w=l.eventTime;if((o&f)===f){h!==null&&(h=h.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,k=l;switch(f=t,w=n,k.tag){case 1:if(v=k.payload,typeof v=="function"){m=v.call(w,m,f);break e}m=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=k.payload,f=typeof v=="function"?v.call(w,m,f):v,f==null)break e;m=z({},m,f);break e;case 2:Xe=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=r.effects,f===null?r.effects=[l]:f.push(l))}else w={eventTime:w,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(c=h=w,s=m):h=h.next=w,a|=f;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;f=l,l=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(1);if(h===null&&(s=m),r.baseState=s,r.firstBaseUpdate=c,r.lastBaseUpdate=h,t=r.shared.interleaved,t!==null){r=t;do a|=r.lane,r=r.next;while(r!==t)}else i===null&&(r.shared.lanes=0);It|=a,e.lanes=a,e.memoizedState=m}}function wl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],r=o.callback;if(r!==null){if(o.callback=null,o=n,typeof r!="function")throw Error(g(191,r));r.call(o)}}}var Xn={},We=ht(Xn),Bn=ht(Xn),Gn=ht(Xn);function Ct(e){if(e===Xn)throw Error(g(174));return e}function fa(e,t){switch(L(Gn,t),L(Bn,e),L(We,Xn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ni(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ni(t,e)}O(We),L(We,t)}function tn(){O(We),O(Bn),O(Gn)}function lu(e){Ct(Gn.current);var t=Ct(We.current),n=ni(t,e.type);t!==n&&(L(Bn,e),L(We,n))}function ha(e){Bn.current===e&&(O(We),O(Bn))}var H=ht(0);function qo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wr=[];function ma(){for(var e=0;e<Wr.length;e++)Wr[e]._workInProgressVersionPrimary=null;Wr.length=0}var Po=$e.ReactCurrentDispatcher,Hr=$e.ReactCurrentBatchConfig,At=0,j=null,q=null,K=null,Yo=!1,An=!1,Un=0,ep=0;function te(){throw Error(g(321))}function ya(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ne(e[n],t[n]))return!1;return!0}function ga(e,t,n,o,r,i){if(At=i,j=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Po.current=e===null||e.memoizedState===null?rp:ip,e=n(o,r),An){i=0;do{if(An=!1,Un=0,25<=i)throw Error(g(301));i+=1,K=q=null,t.updateQueue=null,Po.current=ap,e=n(o,r)}while(An)}if(Po.current=$o,t=q!==null&&q.next!==null,At=0,K=q=j=null,Yo=!1,t)throw Error(g(300));return e}function va(){var e=Un!==0;return Un=0,e}function Me(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return K===null?j.memoizedState=K=e:K=K.next=e,K}function Pe(){if(q===null){var e=j.alternate;e=e!==null?e.memoizedState:null}else e=q.next;var t=K===null?j.memoizedState:K.next;if(t!==null)K=t,q=e;else{if(e===null)throw Error(g(310));q=e,e={memoizedState:q.memoizedState,baseState:q.baseState,baseQueue:q.baseQueue,queue:q.queue,next:null},K===null?j.memoizedState=K=e:K=K.next=e}return K}function Vn(e,t){return typeof t=="function"?t(e):t}function jr(e){var t=Pe(),n=t.queue;if(n===null)throw Error(g(311));n.lastRenderedReducer=e;var o=q,r=o.baseQueue,i=n.pending;if(i!==null){if(r!==null){var a=r.next;r.next=i.next,i.next=a}o.baseQueue=r=i,n.pending=null}if(r!==null){i=r.next,o=o.baseState;var l=a=null,s=null,c=i;do{var h=c.lane;if((At&h)===h)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),o=c.hasEagerState?c.eagerState:e(o,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(l=s=m,a=o):s=s.next=m,j.lanes|=h,It|=h}c=c.next}while(c!==null&&c!==i);s===null?a=o:s.next=l,Ne(o,t.memoizedState)||(ce=!0),t.memoizedState=o,t.baseState=a,t.baseQueue=s,n.lastRenderedState=o}if(e=n.interleaved,e!==null){r=e;do i=r.lane,j.lanes|=i,It|=i,r=r.next;while(r!==e)}else r===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function zr(e){var t=Pe(),n=t.queue;if(n===null)throw Error(g(311));n.lastRenderedReducer=e;var o=n.dispatch,r=n.pending,i=t.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do i=e(i,a.action),a=a.next;while(a!==r);Ne(i,t.memoizedState)||(ce=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,o]}function su(){}function uu(e,t){var n=j,o=Pe(),r=t(),i=!Ne(o.memoizedState,r);if(i&&(o.memoizedState=r,ce=!0),o=o.queue,wa(pu.bind(null,n,o,e),[e]),o.getSnapshot!==t||i||K!==null&&K.memoizedState.tag&1){if(n.flags|=2048,Qn(9,du.bind(null,n,o,r,t),void 0,null),Z===null)throw Error(g(349));At&30||cu(n,t,r)}return r}function cu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=j.updateQueue,t===null?(t={lastEffect:null,stores:null},j.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function du(e,t,n,o){t.value=n,t.getSnapshot=o,fu(t)&&hu(e)}function pu(e,t,n){return n(function(){fu(t)&&hu(e)})}function fu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ne(e,n)}catch{return!0}}function hu(e){var t=qe(e,1);t!==null&&Re(t,e,1,-1)}function kl(e){var t=Me();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vn,lastRenderedState:e},t.queue=e,e=e.dispatch=op.bind(null,j,e),[t.memoizedState,e]}function Qn(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=j.updateQueue,t===null?(t={lastEffect:null,stores:null},j.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function mu(){return Pe().memoizedState}function Eo(e,t,n,o){var r=Me();j.flags|=e,r.memoizedState=Qn(1|t,n,void 0,o===void 0?null:o)}function sr(e,t,n,o){var r=Pe();o=o===void 0?null:o;var i=void 0;if(q!==null){var a=q.memoizedState;if(i=a.destroy,o!==null&&ya(o,a.deps)){r.memoizedState=Qn(t,n,i,o);return}}j.flags|=e,r.memoizedState=Qn(1|t,n,i,o)}function Sl(e,t){return Eo(8390656,8,e,t)}function wa(e,t){return sr(2048,8,e,t)}function yu(e,t){return sr(4,2,e,t)}function gu(e,t){return sr(4,4,e,t)}function vu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wu(e,t,n){return n=n!=null?n.concat([e]):null,sr(4,4,vu.bind(null,t,e),n)}function ka(){}function ku(e,t){var n=Pe();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&ya(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function Su(e,t){var n=Pe();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&ya(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function Cu(e,t,n){return At&21?(Ne(n,t)||(n=As(),j.lanes|=n,It|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ce=!0),e.memoizedState=n)}function tp(e,t){var n=N;N=n!==0&&4>n?n:4,e(!0);var o=Hr.transition;Hr.transition={};try{e(!1),t()}finally{N=n,Hr.transition=o}}function Tu(){return Pe().memoizedState}function np(e,t,n){var o=ut(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},_u(e))Pu(t,n);else if(n=iu(e,t,n,o),n!==null){var r=ae();Re(n,e,o,r),Eu(n,t,o)}}function op(e,t,n){var o=ut(e),r={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(_u(e))Pu(t,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,n);if(r.hasEagerState=!0,r.eagerState=l,Ne(l,a)){var s=t.interleaved;s===null?(r.next=r,da(t)):(r.next=s.next,s.next=r),t.interleaved=r;return}}catch{}finally{}n=iu(e,t,r,o),n!==null&&(r=ae(),Re(n,e,o,r),Eu(n,t,o))}}function _u(e){var t=e.alternate;return e===j||t!==null&&t===j}function Pu(e,t){An=Yo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Eu(e,t,n){if(n&4194240){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Zi(e,n)}}var $o={readContext:_e,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useInsertionEffect:te,useLayoutEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useMutableSource:te,useSyncExternalStore:te,useId:te,unstable_isNewReconciler:!1},rp={readContext:_e,useCallback:function(e,t){return Me().memoizedState=[e,t===void 0?null:t],e},useContext:_e,useEffect:Sl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Eo(4194308,4,vu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Eo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Eo(4,2,e,t)},useMemo:function(e,t){var n=Me();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=Me();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=np.bind(null,j,e),[o.memoizedState,e]},useRef:function(e){var t=Me();return e={current:e},t.memoizedState=e},useState:kl,useDebugValue:ka,useDeferredValue:function(e){return Me().memoizedState=e},useTransition:function(){var e=kl(!1),t=e[0];return e=tp.bind(null,e[1]),Me().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=j,r=Me();if(W){if(n===void 0)throw Error(g(407));n=n()}else{if(n=t(),Z===null)throw Error(g(349));At&30||cu(o,t,n)}r.memoizedState=n;var i={value:n,getSnapshot:t};return r.queue=i,Sl(pu.bind(null,o,i,e),[e]),o.flags|=2048,Qn(9,du.bind(null,o,i,n,t),void 0,null),n},useId:function(){var e=Me(),t=Z.identifierPrefix;if(W){var n=Ge,o=Be;n=(o&~(1<<32-De(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=Un++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ep++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ip={readContext:_e,useCallback:ku,useContext:_e,useEffect:wa,useImperativeHandle:wu,useInsertionEffect:yu,useLayoutEffect:gu,useMemo:Su,useReducer:jr,useRef:mu,useState:function(){return jr(Vn)},useDebugValue:ka,useDeferredValue:function(e){var t=Pe();return Cu(t,q.memoizedState,e)},useTransition:function(){var e=jr(Vn)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:su,useSyncExternalStore:uu,useId:Tu,unstable_isNewReconciler:!1},ap={readContext:_e,useCallback:ku,useContext:_e,useEffect:wa,useImperativeHandle:wu,useInsertionEffect:yu,useLayoutEffect:gu,useMemo:Su,useReducer:zr,useRef:mu,useState:function(){return zr(Vn)},useDebugValue:ka,useDeferredValue:function(e){var t=Pe();return q===null?t.memoizedState=e:Cu(t,q.memoizedState,e)},useTransition:function(){var e=zr(Vn)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:su,useSyncExternalStore:uu,useId:Tu,unstable_isNewReconciler:!1};function Ie(e,t){if(e&&e.defaultProps){t=z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ti(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ur={isMounted:function(e){return(e=e._reactInternals)?Dt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=ae(),r=ut(e),i=Ue(o,r);i.payload=t,n!=null&&(i.callback=n),t=lt(e,i,r),t!==null&&(Re(t,e,r,o),_o(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=ae(),r=ut(e),i=Ue(o,r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=lt(e,i,r),t!==null&&(Re(t,e,r,o),_o(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ae(),o=ut(e),r=Ue(n,o);r.tag=2,t!=null&&(r.callback=t),t=lt(e,r,o),t!==null&&(Re(t,e,o,n),_o(t,e,o))}};function Cl(e,t,n,o,r,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,i,a):t.prototype&&t.prototype.isPureReactComponent?!Wn(n,o)||!Wn(r,i):!0}function Au(e,t,n){var o=!1,r=pt,i=t.contextType;return typeof i=="object"&&i!==null?i=_e(i):(r=pe(t)?Pt:re.current,o=t.contextTypes,i=(o=o!=null)?Xt(e,r):pt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ur,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),t}function Tl(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&ur.enqueueReplaceState(t,t.state,null)}function _i(e,t,n,o){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs={},pa(e);var i=t.contextType;typeof i=="object"&&i!==null?r.context=_e(i):(i=pe(t)?Pt:re.current,r.context=Xt(e,i)),r.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ti(e,t,i,n),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&ur.enqueueReplaceState(r,r.state,null),Qo(e,n,r,o),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function nn(e,t){try{var n="",o=t;do n+=Lc(o),o=o.return;while(o);var r=n}catch(i){r=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:r,digest:null}}function Br(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Pi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var lp=typeof WeakMap=="function"?WeakMap:Map;function Iu(e,t,n){n=Ue(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){Zo||(Zo=!0,Mi=o),Pi(e,t)},n}function bu(e,t,n){n=Ue(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var r=t.value;n.payload=function(){return o(r)},n.callback=function(){Pi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Pi(e,t),typeof o!="function"&&(st===null?st=new Set([this]):st.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function _l(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new lp;var r=new Set;o.set(t,r)}else r=o.get(t),r===void 0&&(r=new Set,o.set(t,r));r.has(n)||(r.add(n),e=Sp.bind(null,e,t,n),t.then(e,e))}function Pl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function El(e,t,n,o,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ue(-1,1),t.tag=2,lt(n,t,1))),n.lanes|=1),e)}var sp=$e.ReactCurrentOwner,ce=!1;function ie(e,t,n,o){t.child=e===null?ru(t,null,n,o):en(t,e.child,n,o)}function Al(e,t,n,o,r){n=n.render;var i=t.ref;return $t(t,r),o=ga(e,t,n,o,i,r),n=va(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Ye(e,t,r)):(W&&n&&ia(t),t.flags|=1,ie(e,t,o,r),t.child)}function Il(e,t,n,o,r){if(e===null){var i=n.type;return typeof i=="function"&&!Ia(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,xu(e,t,i,o,r)):(e=xo(n.type,null,o,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&r)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Wn,n(a,o)&&e.ref===t.ref)return Ye(e,t,r)}return t.flags|=1,e=ct(i,o),e.ref=t.ref,e.return=t,t.child=e}function xu(e,t,n,o,r){if(e!==null){var i=e.memoizedProps;if(Wn(i,o)&&e.ref===t.ref)if(ce=!1,t.pendingProps=o=i,(e.lanes&r)!==0)e.flags&131072&&(ce=!0);else return t.lanes=e.lanes,Ye(e,t,r)}return Ei(e,t,n,o,r)}function Du(e,t,n){var o=t.pendingProps,r=o.children,i=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},L(Ut,he),he|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,L(Ut,he),he|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=i!==null?i.baseLanes:n,L(Ut,he),he|=o}else i!==null?(o=i.baseLanes|n,t.memoizedState=null):o=n,L(Ut,he),he|=o;return ie(e,t,r,n),t.child}function Ru(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ei(e,t,n,o,r){var i=pe(n)?Pt:re.current;return i=Xt(t,i),$t(t,r),n=ga(e,t,n,o,i,r),o=va(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Ye(e,t,r)):(W&&o&&ia(t),t.flags|=1,ie(e,t,n,r),t.child)}function bl(e,t,n,o,r){if(pe(n)){var i=!0;zo(t)}else i=!1;if($t(t,r),t.stateNode===null)Ao(e,t),Au(t,n,o),_i(t,n,o,r),o=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=_e(c):(c=pe(n)?Pt:re.current,c=Xt(t,c));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==o||s!==c)&&Tl(t,a,o,c),Xe=!1;var f=t.memoizedState;a.state=f,Qo(t,o,a,r),s=t.memoizedState,l!==o||f!==s||de.current||Xe?(typeof h=="function"&&(Ti(t,n,h,o),s=t.memoizedState),(l=Xe||Cl(t,n,l,o,f,s,c))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=s),a.props=o,a.state=s,a.context=c,o=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{a=t.stateNode,au(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Ie(t.type,l),a.props=c,m=t.pendingProps,f=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=_e(s):(s=pe(n)?Pt:re.current,s=Xt(t,s));var w=n.getDerivedStateFromProps;(h=typeof w=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==m||f!==s)&&Tl(t,a,o,s),Xe=!1,f=t.memoizedState,a.state=f,Qo(t,o,a,r);var v=t.memoizedState;l!==m||f!==v||de.current||Xe?(typeof w=="function"&&(Ti(t,n,w,o),v=t.memoizedState),(c=Xe||Cl(t,n,c,o,f,v,s)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(o,v,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(o,v,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=v),a.props=o,a.state=v,a.context=s,o=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),o=!1)}return Ai(e,t,n,o,i,r)}function Ai(e,t,n,o,r,i){Ru(e,t);var a=(t.flags&128)!==0;if(!o&&!a)return r&&hl(t,n,!1),Ye(e,t,i);o=t.stateNode,sp.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&a?(t.child=en(t,e.child,null,i),t.child=en(t,null,l,i)):ie(e,t,l,i),t.memoizedState=o.state,r&&hl(t,n,!0),t.child}function Nu(e){var t=e.stateNode;t.pendingContext?fl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&fl(e,t.context,!1),fa(e,t.containerInfo)}function xl(e,t,n,o,r){return Jt(),la(r),t.flags|=256,ie(e,t,n,o),t.child}var Ii={dehydrated:null,treeContext:null,retryLane:0};function bi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Lu(e,t,n){var o=t.pendingProps,r=H.current,i=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(r&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),L(H,r&1),e===null)return Si(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=o.children,e=o.fallback,i?(o=t.mode,i=t.child,a={mode:"hidden",children:a},!(o&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=pr(a,o,0,null),e=_t(e,o,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=bi(n),t.memoizedState=Ii,e):Sa(t,a));if(r=e.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return up(e,t,a,o,l,r,n);if(i){i=o.fallback,a=t.mode,r=e.child,l=r.sibling;var s={mode:"hidden",children:o.children};return!(a&1)&&t.child!==r?(o=t.child,o.childLanes=0,o.pendingProps=s,t.deletions=null):(o=ct(r,s),o.subtreeFlags=r.subtreeFlags&14680064),l!==null?i=ct(l,i):(i=_t(i,a,n,null),i.flags|=2),i.return=t,o.return=t,o.sibling=i,t.child=o,o=i,i=t.child,a=e.child.memoizedState,a=a===null?bi(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Ii,o}return i=e.child,e=i.sibling,o=ct(i,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Sa(e,t){return t=pr({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mo(e,t,n,o){return o!==null&&la(o),en(t,e.child,null,n),e=Sa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function up(e,t,n,o,r,i,a){if(n)return t.flags&256?(t.flags&=-257,o=Br(Error(g(422))),mo(e,t,a,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=o.fallback,r=t.mode,o=pr({mode:"visible",children:o.children},r,0,null),i=_t(i,r,a,null),i.flags|=2,o.return=t,i.return=t,o.sibling=i,t.child=o,t.mode&1&&en(t,e.child,null,a),t.child.memoizedState=bi(a),t.memoizedState=Ii,i);if(!(t.mode&1))return mo(e,t,a,null);if(r.data==="$!"){if(o=r.nextSibling&&r.nextSibling.dataset,o)var l=o.dgst;return o=l,i=Error(g(419)),o=Br(i,o,void 0),mo(e,t,a,o)}if(l=(a&e.childLanes)!==0,ce||l){if(o=Z,o!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(o.suspendedLanes|a)?0:r,r!==0&&r!==i.retryLane&&(i.retryLane=r,qe(e,r),Re(o,e,r,-1))}return Aa(),o=Br(Error(g(421))),mo(e,t,a,o)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=Cp.bind(null,e),r._reactRetry=t,null):(e=i.treeContext,me=at(r.nextSibling),ye=t,W=!0,xe=null,e!==null&&(ke[Se++]=Be,ke[Se++]=Ge,ke[Se++]=Et,Be=e.id,Ge=e.overflow,Et=t),t=Sa(t,o.children),t.flags|=4096,t)}function Dl(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Ci(e.return,t,n)}function Gr(e,t,n,o,r){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:r}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=o,i.tail=n,i.tailMode=r)}function Mu(e,t,n){var o=t.pendingProps,r=o.revealOrder,i=o.tail;if(ie(e,t,o.children,n),o=H.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dl(e,n,t);else if(e.tag===19)Dl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(L(H,o),!(t.mode&1))t.memoizedState=null;else switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&qo(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Gr(t,!1,r,n,i);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&qo(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Gr(t,!0,n,null,i);break;case"together":Gr(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ao(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ye(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),It|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(g(153));if(t.child!==null){for(e=t.child,n=ct(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ct(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function cp(e,t,n){switch(t.tag){case 3:Nu(t),Jt();break;case 5:lu(t);break;case 1:pe(t.type)&&zo(t);break;case 4:fa(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,r=t.memoizedProps.value;L(Uo,o._currentValue),o._currentValue=r;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(L(H,H.current&1),t.flags|=128,null):n&t.child.childLanes?Lu(e,t,n):(L(H,H.current&1),e=Ye(e,t,n),e!==null?e.sibling:null);L(H,H.current&1);break;case 19:if(o=(n&t.childLanes)!==0,e.flags&128){if(o)return Mu(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),L(H,H.current),o)break;return null;case 22:case 23:return t.lanes=0,Du(e,t,n)}return Ye(e,t,n)}var Ou,xi,Fu,Wu;Ou=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xi=function(){};Fu=function(e,t,n,o){var r=e.memoizedProps;if(r!==o){e=t.stateNode,Ct(We.current);var i=null;switch(n){case"input":r=Xr(e,r),o=Xr(e,o),i=[];break;case"select":r=z({},r,{value:void 0}),o=z({},o,{value:void 0}),i=[];break;case"textarea":r=ti(e,r),o=ti(e,o),i=[];break;default:typeof r.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Ho)}oi(n,o);var a;n=null;for(c in r)if(!o.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var l=r[c];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Dn.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in o){var s=o[c];if(l=r!=null?r[c]:void 0,o.hasOwnProperty(c)&&s!==l&&(s!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(i||(i=[]),i.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Dn.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&M("scroll",e),i||l===s||(i=[])):(i=i||[]).push(c,s))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Wu=function(e,t,n,o){n!==o&&(t.flags|=4)};function yn(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags&14680064,o|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags,o|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function dp(e,t,n){var o=t.pendingProps;switch(aa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(t),null;case 1:return pe(t.type)&&jo(),ne(t),null;case 3:return o=t.stateNode,tn(),O(de),O(re),ma(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(fo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,xe!==null&&(Wi(xe),xe=null))),xi(e,t),ne(t),null;case 5:ha(t);var r=Ct(Gn.current);if(n=t.type,e!==null&&t.stateNode!=null)Fu(e,t,n,o,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(g(166));return ne(t),null}if(e=Ct(We.current),fo(t)){o=t.stateNode,n=t.type;var i=t.memoizedProps;switch(o[Oe]=t,o[zn]=i,e=(t.mode&1)!==0,n){case"dialog":M("cancel",o),M("close",o);break;case"iframe":case"object":case"embed":M("load",o);break;case"video":case"audio":for(r=0;r<Sn.length;r++)M(Sn[r],o);break;case"source":M("error",o);break;case"img":case"image":case"link":M("error",o),M("load",o);break;case"details":M("toggle",o);break;case"input":ja(o,i),M("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!i.multiple},M("invalid",o);break;case"textarea":Ba(o,i),M("invalid",o)}oi(n,i),r=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?o.textContent!==l&&(i.suppressHydrationWarning!==!0&&po(o.textContent,l,e),r=["children",l]):typeof l=="number"&&o.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&po(o.textContent,l,e),r=["children",""+l]):Dn.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&M("scroll",o)}switch(n){case"input":oo(o),za(o,i,!0);break;case"textarea":oo(o),Ga(o);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(o.onclick=Ho)}o=r,t.updateQueue=o,o!==null&&(t.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ps(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=a.createElement(n,{is:o.is}):(e=a.createElement(n),n==="select"&&(a=e,o.multiple?a.multiple=!0:o.size&&(a.size=o.size))):e=a.createElementNS(e,n),e[Oe]=t,e[zn]=o,Ou(e,t,!1,!1),t.stateNode=e;e:{switch(a=ri(n,o),n){case"dialog":M("cancel",e),M("close",e),r=o;break;case"iframe":case"object":case"embed":M("load",e),r=o;break;case"video":case"audio":for(r=0;r<Sn.length;r++)M(Sn[r],e);r=o;break;case"source":M("error",e),r=o;break;case"img":case"image":case"link":M("error",e),M("load",e),r=o;break;case"details":M("toggle",e),r=o;break;case"input":ja(e,o),r=Xr(e,o),M("invalid",e);break;case"option":r=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},r=z({},o,{value:void 0}),M("invalid",e);break;case"textarea":Ba(e,o),r=ti(e,o),M("invalid",e);break;default:r=o}oi(n,r),l=r;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?ms(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&fs(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Rn(e,s):typeof s=="number"&&Rn(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Dn.hasOwnProperty(i)?s!=null&&i==="onScroll"&&M("scroll",e):s!=null&&Vi(e,i,s,a))}switch(n){case"input":oo(e),za(e,o,!1);break;case"textarea":oo(e),Ga(e);break;case"option":o.value!=null&&e.setAttribute("value",""+dt(o.value));break;case"select":e.multiple=!!o.multiple,i=o.value,i!=null?Vt(e,!!o.multiple,i,!1):o.defaultValue!=null&&Vt(e,!!o.multiple,o.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Ho)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ne(t),null;case 6:if(e&&t.stateNode!=null)Wu(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(g(166));if(n=Ct(Gn.current),Ct(We.current),fo(t)){if(o=t.stateNode,n=t.memoizedProps,o[Oe]=t,(i=o.nodeValue!==n)&&(e=ye,e!==null))switch(e.tag){case 3:po(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&po(o.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[Oe]=t,t.stateNode=o}return ne(t),null;case 13:if(O(H),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&me!==null&&t.mode&1&&!(t.flags&128))nu(),Jt(),t.flags|=98560,i=!1;else if(i=fo(t),o!==null&&o.dehydrated!==null){if(e===null){if(!i)throw Error(g(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(g(317));i[Oe]=t}else Jt(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ne(t),i=!1}else xe!==null&&(Wi(xe),xe=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?Y===0&&(Y=3):Aa())),t.updateQueue!==null&&(t.flags|=4),ne(t),null);case 4:return tn(),xi(e,t),e===null&&Hn(t.stateNode.containerInfo),ne(t),null;case 10:return ca(t.type._context),ne(t),null;case 17:return pe(t.type)&&jo(),ne(t),null;case 19:if(O(H),i=t.memoizedState,i===null)return ne(t),null;if(o=(t.flags&128)!==0,a=i.rendering,a===null)if(o)yn(i,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=qo(e),a!==null){for(t.flags|=128,yn(i,!1),o=a.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)i=n,e=o,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return L(H,H.current&1|2),t.child}e=e.sibling}i.tail!==null&&V()>on&&(t.flags|=128,o=!0,yn(i,!1),t.lanes=4194304)}else{if(!o)if(e=qo(a),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!W)return ne(t),null}else 2*V()-i.renderingStartTime>on&&n!==1073741824&&(t.flags|=128,o=!0,yn(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=V(),t.sibling=null,n=H.current,L(H,o?n&1|2:n&1),t):(ne(t),null);case 22:case 23:return Ea(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?he&1073741824&&(ne(t),t.subtreeFlags&6&&(t.flags|=8192)):ne(t),null;case 24:return null;case 25:return null}throw Error(g(156,t.tag))}function pp(e,t){switch(aa(t),t.tag){case 1:return pe(t.type)&&jo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tn(),O(de),O(re),ma(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ha(t),null;case 13:if(O(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(g(340));Jt()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(H),null;case 4:return tn(),null;case 10:return ca(t.type._context),null;case 22:case 23:return Ea(),null;case 24:return null;default:return null}}var yo=!1,oe=!1,fp=typeof WeakSet=="function"?WeakSet:Set,C=null;function Gt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){B(e,t,o)}else n.current=null}function Di(e,t,n){try{n()}catch(o){B(e,t,o)}}var Rl=!1;function hp(e,t){if(hi=Oo,e=Gs(),ra(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var r=o.anchorOffset,i=o.focusNode;o=o.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,c=0,h=0,m=e,f=null;t:for(;;){for(var w;m!==n||r!==0&&m.nodeType!==3||(l=a+r),m!==i||o!==0&&m.nodeType!==3||(s=a+o),m.nodeType===3&&(a+=m.nodeValue.length),(w=m.firstChild)!==null;)f=m,m=w;for(;;){if(m===e)break t;if(f===n&&++c===r&&(l=a),f===i&&++h===o&&(s=a),(w=m.nextSibling)!==null)break;m=f,f=m.parentNode}m=w}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(mi={focusedElem:e,selectionRange:n},Oo=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var k=v.memoizedProps,F=v.memoizedState,d=t.stateNode,u=d.getSnapshotBeforeUpdate(t.elementType===t.type?k:Ie(t.type,k),F);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(g(163))}}catch(y){B(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return v=Rl,Rl=!1,v}function In(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var r=o=o.next;do{if((r.tag&e)===e){var i=r.destroy;r.destroy=void 0,i!==void 0&&Di(t,n,i)}r=r.next}while(r!==o)}}function cr(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function Ri(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Hu(e){var t=e.alternate;t!==null&&(e.alternate=null,Hu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Oe],delete t[zn],delete t[vi],delete t[Kd],delete t[Zd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ju(e){return e.tag===5||e.tag===3||e.tag===4}function Nl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ju(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ni(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ho));else if(o!==4&&(e=e.child,e!==null))for(Ni(e,t,n),e=e.sibling;e!==null;)Ni(e,t,n),e=e.sibling}function Li(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Li(e,t,n),e=e.sibling;e!==null;)Li(e,t,n),e=e.sibling}var X=null,be=!1;function Ke(e,t,n){for(n=n.child;n!==null;)zu(e,t,n),n=n.sibling}function zu(e,t,n){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(nr,n)}catch{}switch(n.tag){case 5:oe||Gt(n,t);case 6:var o=X,r=be;X=null,Ke(e,t,n),X=o,be=r,X!==null&&(be?(e=X,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):X.removeChild(n.stateNode));break;case 18:X!==null&&(be?(e=X,n=n.stateNode,e.nodeType===8?Or(e.parentNode,n):e.nodeType===1&&Or(e,n),On(e)):Or(X,n.stateNode));break;case 4:o=X,r=be,X=n.stateNode.containerInfo,be=!0,Ke(e,t,n),X=o,be=r;break;case 0:case 11:case 14:case 15:if(!oe&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){r=o=o.next;do{var i=r,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Di(n,t,a),r=r.next}while(r!==o)}Ke(e,t,n);break;case 1:if(!oe&&(Gt(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(l){B(n,t,l)}Ke(e,t,n);break;case 21:Ke(e,t,n);break;case 22:n.mode&1?(oe=(o=oe)||n.memoizedState!==null,Ke(e,t,n),oe=o):Ke(e,t,n);break;default:Ke(e,t,n)}}function Ll(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new fp),t.forEach(function(o){var r=Tp.bind(null,e,o);n.has(o)||(n.add(o),o.then(r,r))})}}function Ae(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var r=n[o];try{var i=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:X=l.stateNode,be=!1;break e;case 3:X=l.stateNode.containerInfo,be=!0;break e;case 4:X=l.stateNode.containerInfo,be=!0;break e}l=l.return}if(X===null)throw Error(g(160));zu(i,a,r),X=null,be=!1;var s=r.alternate;s!==null&&(s.return=null),r.return=null}catch(c){B(r,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Bu(t,e),t=t.sibling}function Bu(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ae(t,e),Le(e),o&4){try{In(3,e,e.return),cr(3,e)}catch(k){B(e,e.return,k)}try{In(5,e,e.return)}catch(k){B(e,e.return,k)}}break;case 1:Ae(t,e),Le(e),o&512&&n!==null&&Gt(n,n.return);break;case 5:if(Ae(t,e),Le(e),o&512&&n!==null&&Gt(n,n.return),e.flags&32){var r=e.stateNode;try{Rn(r,"")}catch(k){B(e,e.return,k)}}if(o&4&&(r=e.stateNode,r!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&cs(r,i),ri(l,a);var c=ri(l,i);for(a=0;a<s.length;a+=2){var h=s[a],m=s[a+1];h==="style"?ms(r,m):h==="dangerouslySetInnerHTML"?fs(r,m):h==="children"?Rn(r,m):Vi(r,h,m,c)}switch(l){case"input":Jr(r,i);break;case"textarea":ds(r,i);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?Vt(r,!!i.multiple,w,!1):f!==!!i.multiple&&(i.defaultValue!=null?Vt(r,!!i.multiple,i.defaultValue,!0):Vt(r,!!i.multiple,i.multiple?[]:"",!1))}r[zn]=i}catch(k){B(e,e.return,k)}}break;case 6:if(Ae(t,e),Le(e),o&4){if(e.stateNode===null)throw Error(g(162));r=e.stateNode,i=e.memoizedProps;try{r.nodeValue=i}catch(k){B(e,e.return,k)}}break;case 3:if(Ae(t,e),Le(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{On(t.containerInfo)}catch(k){B(e,e.return,k)}break;case 4:Ae(t,e),Le(e);break;case 13:Ae(t,e),Le(e),r=e.child,r.flags&8192&&(i=r.memoizedState!==null,r.stateNode.isHidden=i,!i||r.alternate!==null&&r.alternate.memoizedState!==null||(_a=V())),o&4&&Ll(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(c=oe)||h,Ae(t,e),oe=c):Ae(t,e),Le(e),o&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(C=e,h=e.child;h!==null;){for(m=C=h;C!==null;){switch(f=C,w=f.child,f.tag){case 0:case 11:case 14:case 15:In(4,f,f.return);break;case 1:Gt(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){o=f,n=f.return;try{t=o,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(k){B(o,n,k)}}break;case 5:Gt(f,f.return);break;case 22:if(f.memoizedState!==null){Ol(m);continue}}w!==null?(w.return=f,C=w):Ol(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{r=m.stateNode,c?(i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,s=m.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=hs("display",a))}catch(k){B(e,e.return,k)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(k){B(e,e.return,k)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ae(t,e),Le(e),o&4&&Ll(e);break;case 21:break;default:Ae(t,e),Le(e)}}function Le(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ju(n)){var o=n;break e}n=n.return}throw Error(g(160))}switch(o.tag){case 5:var r=o.stateNode;o.flags&32&&(Rn(r,""),o.flags&=-33);var i=Nl(e);Li(e,i,r);break;case 3:case 4:var a=o.stateNode.containerInfo,l=Nl(e);Ni(e,l,a);break;default:throw Error(g(161))}}catch(s){B(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function mp(e,t,n){C=e,Gu(e)}function Gu(e,t,n){for(var o=(e.mode&1)!==0;C!==null;){var r=C,i=r.child;if(r.tag===22&&o){var a=r.memoizedState!==null||yo;if(!a){var l=r.alternate,s=l!==null&&l.memoizedState!==null||oe;l=yo;var c=oe;if(yo=a,(oe=s)&&!c)for(C=r;C!==null;)a=C,s=a.child,a.tag===22&&a.memoizedState!==null?Fl(r):s!==null?(s.return=a,C=s):Fl(r);for(;i!==null;)C=i,Gu(i),i=i.sibling;C=r,yo=l,oe=c}Ml(e)}else r.subtreeFlags&8772&&i!==null?(i.return=r,C=i):Ml(e)}}function Ml(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||cr(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!oe)if(n===null)o.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:Ie(t.type,n.memoizedProps);o.componentDidUpdate(r,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&wl(t,i,o);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}wl(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&On(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(g(163))}oe||t.flags&512&&Ri(t)}catch(f){B(t,t.return,f)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function Ol(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function Fl(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{cr(4,t)}catch(s){B(t,n,s)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var r=t.return;try{o.componentDidMount()}catch(s){B(t,r,s)}}var i=t.return;try{Ri(t)}catch(s){B(t,i,s)}break;case 5:var a=t.return;try{Ri(t)}catch(s){B(t,a,s)}}}catch(s){B(t,t.return,s)}if(t===e){C=null;break}var l=t.sibling;if(l!==null){l.return=t.return,C=l;break}C=t.return}}var yp=Math.ceil,Ko=$e.ReactCurrentDispatcher,Ca=$e.ReactCurrentOwner,Te=$e.ReactCurrentBatchConfig,R=0,Z=null,Q=null,J=0,he=0,Ut=ht(0),Y=0,qn=null,It=0,dr=0,Ta=0,bn=null,ue=null,_a=0,on=1/0,He=null,Zo=!1,Mi=null,st=null,go=!1,nt=null,Xo=0,xn=0,Oi=null,Io=-1,bo=0;function ae(){return R&6?V():Io!==-1?Io:Io=V()}function ut(e){return e.mode&1?R&2&&J!==0?J&-J:Jd.transition!==null?(bo===0&&(bo=As()),bo):(e=N,e!==0||(e=window.event,e=e===void 0?16:Ls(e.type)),e):1}function Re(e,t,n,o){if(50<xn)throw xn=0,Oi=null,Error(g(185));$n(e,n,o),(!(R&2)||e!==Z)&&(e===Z&&(!(R&2)&&(dr|=n),Y===4&&et(e,J)),fe(e,o),n===1&&R===0&&!(t.mode&1)&&(on=V()+500,lr&&mt()))}function fe(e,t){var n=e.callbackNode;Jc(e,t);var o=Mo(e,e===Z?J:0);if(o===0)n!==null&&Qa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&Qa(n),t===1)e.tag===0?Xd(Wl.bind(null,e)):Js(Wl.bind(null,e)),Yd(function(){!(R&6)&&mt()}),n=null;else{switch(Is(o)){case 1:n=Ki;break;case 4:n=Ps;break;case 16:n=Lo;break;case 536870912:n=Es;break;default:n=Lo}n=Zu(n,Uu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Uu(e,t){if(Io=-1,bo=0,R&6)throw Error(g(327));var n=e.callbackNode;if(Kt()&&e.callbackNode!==n)return null;var o=Mo(e,e===Z?J:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=Jo(e,o);else{t=o;var r=R;R|=2;var i=Qu();(Z!==e||J!==t)&&(He=null,on=V()+500,Tt(e,t));do try{wp();break}catch(l){Vu(e,l)}while(1);ua(),Ko.current=i,R=r,Q!==null?t=0:(Z=null,J=0,t=Y)}if(t!==0){if(t===2&&(r=ui(e),r!==0&&(o=r,t=Fi(e,r))),t===1)throw n=qn,Tt(e,0),et(e,o),fe(e,V()),n;if(t===6)et(e,o);else{if(r=e.current.alternate,!(o&30)&&!gp(r)&&(t=Jo(e,o),t===2&&(i=ui(e),i!==0&&(o=i,t=Fi(e,i))),t===1))throw n=qn,Tt(e,0),et(e,o),fe(e,V()),n;switch(e.finishedWork=r,e.finishedLanes=o,t){case 0:case 1:throw Error(g(345));case 2:wt(e,ue,He);break;case 3:if(et(e,o),(o&130023424)===o&&(t=_a+500-V(),10<t)){if(Mo(e,0)!==0)break;if(r=e.suspendedLanes,(r&o)!==o){ae(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=gi(wt.bind(null,e,ue,He),t);break}wt(e,ue,He);break;case 4:if(et(e,o),(o&4194240)===o)break;for(t=e.eventTimes,r=-1;0<o;){var a=31-De(o);i=1<<a,a=t[a],a>r&&(r=a),o&=~i}if(o=r,o=V()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*yp(o/1960))-o,10<o){e.timeoutHandle=gi(wt.bind(null,e,ue,He),o);break}wt(e,ue,He);break;case 5:wt(e,ue,He);break;default:throw Error(g(329))}}}return fe(e,V()),e.callbackNode===n?Uu.bind(null,e):null}function Fi(e,t){var n=bn;return e.current.memoizedState.isDehydrated&&(Tt(e,t).flags|=256),e=Jo(e,t),e!==2&&(t=ue,ue=n,t!==null&&Wi(t)),e}function Wi(e){ue===null?ue=e:ue.push.apply(ue,e)}function gp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var r=n[o],i=r.getSnapshot;r=r.value;try{if(!Ne(i(),r))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function et(e,t){for(t&=~Ta,t&=~dr,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-De(t),o=1<<n;e[n]=-1,t&=~o}}function Wl(e){if(R&6)throw Error(g(327));Kt();var t=Mo(e,0);if(!(t&1))return fe(e,V()),null;var n=Jo(e,t);if(e.tag!==0&&n===2){var o=ui(e);o!==0&&(t=o,n=Fi(e,o))}if(n===1)throw n=qn,Tt(e,0),et(e,t),fe(e,V()),n;if(n===6)throw Error(g(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wt(e,ue,He),fe(e,V()),null}function Pa(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(on=V()+500,lr&&mt())}}function bt(e){nt!==null&&nt.tag===0&&!(R&6)&&Kt();var t=R;R|=1;var n=Te.transition,o=N;try{if(Te.transition=null,N=1,e)return e()}finally{N=o,Te.transition=n,R=t,!(R&6)&&mt()}}function Ea(){he=Ut.current,O(Ut)}function Tt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,qd(n)),Q!==null)for(n=Q.return;n!==null;){var o=n;switch(aa(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&jo();break;case 3:tn(),O(de),O(re),ma();break;case 5:ha(o);break;case 4:tn();break;case 13:O(H);break;case 19:O(H);break;case 10:ca(o.type._context);break;case 22:case 23:Ea()}n=n.return}if(Z=e,Q=e=ct(e.current,null),J=he=t,Y=0,qn=null,Ta=dr=It=0,ue=bn=null,St!==null){for(t=0;t<St.length;t++)if(n=St[t],o=n.interleaved,o!==null){n.interleaved=null;var r=o.next,i=n.pending;if(i!==null){var a=i.next;i.next=r,o.next=a}n.pending=o}St=null}return e}function Vu(e,t){do{var n=Q;try{if(ua(),Po.current=$o,Yo){for(var o=j.memoizedState;o!==null;){var r=o.queue;r!==null&&(r.pending=null),o=o.next}Yo=!1}if(At=0,K=q=j=null,An=!1,Un=0,Ca.current=null,n===null||n.return===null){Y=1,qn=t,Q=null;break}e:{var i=e,a=n.return,l=n,s=t;if(t=J,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,h=l,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=Pl(a);if(w!==null){w.flags&=-257,El(w,a,l,i,t),w.mode&1&&_l(i,c,t),t=w,s=c;var v=t.updateQueue;if(v===null){var k=new Set;k.add(s),t.updateQueue=k}else v.add(s);break e}else{if(!(t&1)){_l(i,c,t),Aa();break e}s=Error(g(426))}}else if(W&&l.mode&1){var F=Pl(a);if(F!==null){!(F.flags&65536)&&(F.flags|=256),El(F,a,l,i,t),la(nn(s,l));break e}}i=s=nn(s,l),Y!==4&&(Y=2),bn===null?bn=[i]:bn.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=Iu(i,s,t);vl(i,d);break e;case 1:l=s;var u=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(st===null||!st.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=bu(i,l,t);vl(i,y);break e}}i=i.return}while(i!==null)}Yu(n)}catch(T){t=T,Q===n&&n!==null&&(Q=n=n.return);continue}break}while(1)}function Qu(){var e=Ko.current;return Ko.current=$o,e===null?$o:e}function Aa(){(Y===0||Y===3||Y===2)&&(Y=4),Z===null||!(It&268435455)&&!(dr&268435455)||et(Z,J)}function Jo(e,t){var n=R;R|=2;var o=Qu();(Z!==e||J!==t)&&(He=null,Tt(e,t));do try{vp();break}catch(r){Vu(e,r)}while(1);if(ua(),R=n,Ko.current=o,Q!==null)throw Error(g(261));return Z=null,J=0,Y}function vp(){for(;Q!==null;)qu(Q)}function wp(){for(;Q!==null&&!Uc();)qu(Q)}function qu(e){var t=Ku(e.alternate,e,he);e.memoizedProps=e.pendingProps,t===null?Yu(e):Q=t,Ca.current=null}function Yu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=pp(n,t),n!==null){n.flags&=32767,Q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Y=6,Q=null;return}}else if(n=dp(n,t,he),n!==null){Q=n;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);Y===0&&(Y=5)}function wt(e,t,n){var o=N,r=Te.transition;try{Te.transition=null,N=1,kp(e,t,n,o)}finally{Te.transition=r,N=o}return null}function kp(e,t,n,o){do Kt();while(nt!==null);if(R&6)throw Error(g(327));n=e.finishedWork;var r=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(g(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(ed(e,i),e===Z&&(Q=Z=null,J=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||go||(go=!0,Zu(Lo,function(){return Kt(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Te.transition,Te.transition=null;var a=N;N=1;var l=R;R|=4,Ca.current=null,hp(e,n),Bu(n,e),jd(mi),Oo=!!hi,mi=hi=null,e.current=n,mp(n),Vc(),R=l,N=a,Te.transition=i}else e.current=n;if(go&&(go=!1,nt=e,Xo=r),i=e.pendingLanes,i===0&&(st=null),Yc(n.stateNode),fe(e,V()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)r=t[n],o(r.value,{componentStack:r.stack,digest:r.digest});if(Zo)throw Zo=!1,e=Mi,Mi=null,e;return Xo&1&&e.tag!==0&&Kt(),i=e.pendingLanes,i&1?e===Oi?xn++:(xn=0,Oi=e):xn=0,mt(),null}function Kt(){if(nt!==null){var e=Is(Xo),t=Te.transition,n=N;try{if(Te.transition=null,N=16>e?16:e,nt===null)var o=!1;else{if(e=nt,nt=null,Xo=0,R&6)throw Error(g(331));var r=R;for(R|=4,C=e.current;C!==null;){var i=C,a=i.child;if(C.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var c=l[s];for(C=c;C!==null;){var h=C;switch(h.tag){case 0:case 11:case 15:In(8,h,i)}var m=h.child;if(m!==null)m.return=h,C=m;else for(;C!==null;){h=C;var f=h.sibling,w=h.return;if(Hu(h),h===c){C=null;break}if(f!==null){f.return=w,C=f;break}C=w}}}var v=i.alternate;if(v!==null){var k=v.child;if(k!==null){v.child=null;do{var F=k.sibling;k.sibling=null,k=F}while(k!==null)}}C=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,C=a;else e:for(;C!==null;){if(i=C,i.flags&2048)switch(i.tag){case 0:case 11:case 15:In(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,C=d;break e}C=i.return}}var u=e.current;for(C=u;C!==null;){a=C;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,C=p;else e:for(a=u;C!==null;){if(l=C,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:cr(9,l)}}catch(T){B(l,l.return,T)}if(l===a){C=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,C=y;break e}C=l.return}}if(R=r,mt(),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(nr,e)}catch{}o=!0}return o}finally{N=n,Te.transition=t}}return!1}function Hl(e,t,n){t=nn(n,t),t=Iu(e,t,1),e=lt(e,t,1),t=ae(),e!==null&&($n(e,1,t),fe(e,t))}function B(e,t,n){if(e.tag===3)Hl(e,e,n);else for(;t!==null;){if(t.tag===3){Hl(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(st===null||!st.has(o))){e=nn(n,e),e=bu(t,e,1),t=lt(t,e,1),e=ae(),t!==null&&($n(t,1,e),fe(t,e));break}}t=t.return}}function Sp(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=ae(),e.pingedLanes|=e.suspendedLanes&n,Z===e&&(J&n)===n&&(Y===4||Y===3&&(J&130023424)===J&&500>V()-_a?Tt(e,0):Ta|=n),fe(e,t)}function $u(e,t){t===0&&(e.mode&1?(t=ao,ao<<=1,!(ao&130023424)&&(ao=4194304)):t=1);var n=ae();e=qe(e,t),e!==null&&($n(e,t,n),fe(e,n))}function Cp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),$u(e,n)}function Tp(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(g(314))}o!==null&&o.delete(t),$u(e,n)}var Ku;Ku=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||de.current)ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ce=!1,cp(e,t,n);ce=!!(e.flags&131072)}else ce=!1,W&&t.flags&1048576&&eu(t,Go,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;Ao(e,t),e=t.pendingProps;var r=Xt(t,re.current);$t(t,n),r=ga(null,t,o,e,r,n);var i=va();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pe(o)?(i=!0,zo(t)):i=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,pa(t),r.updater=ur,t.stateNode=r,r._reactInternals=t,_i(t,o,e,n),t=Ai(null,t,o,!0,i,n)):(t.tag=0,W&&i&&ia(t),ie(null,t,r,n),t=t.child),t;case 16:o=t.elementType;e:{switch(Ao(e,t),e=t.pendingProps,r=o._init,o=r(o._payload),t.type=o,r=t.tag=Pp(o),e=Ie(o,e),r){case 0:t=Ei(null,t,o,e,n);break e;case 1:t=bl(null,t,o,e,n);break e;case 11:t=Al(null,t,o,e,n);break e;case 14:t=Il(null,t,o,Ie(o.type,e),n);break e}throw Error(g(306,o,""))}return t;case 0:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:Ie(o,r),Ei(e,t,o,r,n);case 1:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:Ie(o,r),bl(e,t,o,r,n);case 3:e:{if(Nu(t),e===null)throw Error(g(387));o=t.pendingProps,i=t.memoizedState,r=i.element,au(e,t),Qo(t,o,null,n);var a=t.memoizedState;if(o=a.element,i.isDehydrated)if(i={element:o,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){r=nn(Error(g(423)),t),t=xl(e,t,o,n,r);break e}else if(o!==r){r=nn(Error(g(424)),t),t=xl(e,t,o,n,r);break e}else for(me=at(t.stateNode.containerInfo.firstChild),ye=t,W=!0,xe=null,n=ru(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jt(),o===r){t=Ye(e,t,n);break e}ie(e,t,o,n)}t=t.child}return t;case 5:return lu(t),e===null&&Si(t),o=t.type,r=t.pendingProps,i=e!==null?e.memoizedProps:null,a=r.children,yi(o,r)?a=null:i!==null&&yi(o,i)&&(t.flags|=32),Ru(e,t),ie(e,t,a,n),t.child;case 6:return e===null&&Si(t),null;case 13:return Lu(e,t,n);case 4:return fa(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=en(t,null,o,n):ie(e,t,o,n),t.child;case 11:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:Ie(o,r),Al(e,t,o,r,n);case 7:return ie(e,t,t.pendingProps,n),t.child;case 8:return ie(e,t,t.pendingProps.children,n),t.child;case 12:return ie(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,r=t.pendingProps,i=t.memoizedProps,a=r.value,L(Uo,o._currentValue),o._currentValue=a,i!==null)if(Ne(i.value,a)){if(i.children===r.children&&!de.current){t=Ye(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var s=l.firstContext;s!==null;){if(s.context===o){if(i.tag===1){s=Ue(-1,n&-n),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?s.next=s:(s.next=h.next,h.next=s),c.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Ci(i.return,n,t),l.lanes|=n;break}s=s.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(g(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Ci(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}ie(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,o=t.pendingProps.children,$t(t,n),r=_e(r),o=o(r),t.flags|=1,ie(e,t,o,n),t.child;case 14:return o=t.type,r=Ie(o,t.pendingProps),r=Ie(o.type,r),Il(e,t,o,r,n);case 15:return xu(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:Ie(o,r),Ao(e,t),t.tag=1,pe(o)?(e=!0,zo(t)):e=!1,$t(t,n),Au(t,o,r),_i(t,o,r,n),Ai(null,t,o,!0,e,n);case 19:return Mu(e,t,n);case 22:return Du(e,t,n)}throw Error(g(156,t.tag))};function Zu(e,t){return _s(e,t)}function _p(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,t,n,o){return new _p(e,t,n,o)}function Ia(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pp(e){if(typeof e=="function")return Ia(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qi)return 11;if(e===Yi)return 14}return 2}function ct(e,t){var n=e.alternate;return n===null?(n=Ce(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function xo(e,t,n,o,r,i){var a=2;if(o=e,typeof e=="function")Ia(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Lt:return _t(n.children,r,i,t);case Qi:a=8,r|=8;break;case Yr:return e=Ce(12,n,t,r|2),e.elementType=Yr,e.lanes=i,e;case $r:return e=Ce(13,n,t,r),e.elementType=$r,e.lanes=i,e;case Kr:return e=Ce(19,n,t,r),e.elementType=Kr,e.lanes=i,e;case ls:return pr(n,r,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case is:a=10;break e;case as:a=9;break e;case qi:a=11;break e;case Yi:a=14;break e;case Ze:a=16,o=null;break e}throw Error(g(130,e==null?e:typeof e,""))}return t=Ce(a,n,t,r),t.elementType=e,t.type=o,t.lanes=i,t}function _t(e,t,n,o){return e=Ce(7,e,o,t),e.lanes=n,e}function pr(e,t,n,o){return e=Ce(22,e,o,t),e.elementType=ls,e.lanes=n,e.stateNode={isHidden:!1},e}function Ur(e,t,n){return e=Ce(6,e,null,t),e.lanes=n,e}function Vr(e,t,n){return t=Ce(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ep(e,t,n,o,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pr(0),this.expirationTimes=Pr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pr(0),this.identifierPrefix=o,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ba(e,t,n,o,r,i,a,l,s){return e=new Ep(e,t,n,l,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ce(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pa(i),e}function Ap(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Nt,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function Xu(e){if(!e)return pt;e=e._reactInternals;e:{if(Dt(e)!==e||e.tag!==1)throw Error(g(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(g(171))}if(e.tag===1){var n=e.type;if(pe(n))return Xs(e,n,t)}return t}function Ju(e,t,n,o,r,i,a,l,s){return e=ba(n,o,!0,e,r,i,a,l,s),e.context=Xu(null),n=e.current,o=ae(),r=ut(n),i=Ue(o,r),i.callback=t??null,lt(n,i,r),e.current.lanes=r,$n(e,r,o),fe(e,o),e}function fr(e,t,n,o){var r=t.current,i=ae(),a=ut(r);return n=Xu(n),t.context===null?t.context=n:t.pendingContext=n,t=Ue(i,a),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=lt(r,t,a),e!==null&&(Re(e,r,a,i),_o(e,r,a)),a}function er(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function jl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function xa(e,t){jl(e,t),(e=e.alternate)&&jl(e,t)}function Ip(){return null}var ec=typeof reportError=="function"?reportError:function(e){console.error(e)};function Da(e){this._internalRoot=e}hr.prototype.render=Da.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(g(409));fr(e,t,null,null)};hr.prototype.unmount=Da.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bt(function(){fr(null,e,null,null)}),t[Qe]=null}};function hr(e){this._internalRoot=e}hr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ds();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Je.length&&t!==0&&t<Je[n].priority;n++);Je.splice(n,0,e),n===0&&Ns(e)}};function Ra(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function mr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zl(){}function bp(e,t,n,o,r){if(r){if(typeof o=="function"){var i=o;o=function(){var c=er(a);i.call(c)}}var a=Ju(t,o,e,0,null,!1,!1,"",zl);return e._reactRootContainer=a,e[Qe]=a.current,Hn(e.nodeType===8?e.parentNode:e),bt(),a}for(;r=e.lastChild;)e.removeChild(r);if(typeof o=="function"){var l=o;o=function(){var c=er(s);l.call(c)}}var s=ba(e,0,!1,null,null,!1,!1,"",zl);return e._reactRootContainer=s,e[Qe]=s.current,Hn(e.nodeType===8?e.parentNode:e),bt(function(){fr(t,s,n,o)}),s}function yr(e,t,n,o,r){var i=n._reactRootContainer;if(i){var a=i;if(typeof r=="function"){var l=r;r=function(){var s=er(a);l.call(s)}}fr(t,a,e,r)}else a=bp(n,t,e,r,o);return er(a)}bs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=kn(t.pendingLanes);n!==0&&(Zi(t,n|1),fe(t,V()),!(R&6)&&(on=V()+500,mt()))}break;case 13:bt(function(){var o=qe(e,1);if(o!==null){var r=ae();Re(o,e,1,r)}}),xa(e,1)}};Xi=function(e){if(e.tag===13){var t=qe(e,134217728);if(t!==null){var n=ae();Re(t,e,134217728,n)}xa(e,134217728)}};xs=function(e){if(e.tag===13){var t=ut(e),n=qe(e,t);if(n!==null){var o=ae();Re(n,e,t,o)}xa(e,t)}};Ds=function(){return N};Rs=function(e,t){var n=N;try{return N=e,t()}finally{N=n}};ai=function(e,t,n){switch(t){case"input":if(Jr(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var r=ar(o);if(!r)throw Error(g(90));us(o),Jr(o,r)}}}break;case"textarea":ds(e,n);break;case"select":t=n.value,t!=null&&Vt(e,!!n.multiple,t,!1)}};vs=Pa;ws=bt;var xp={usingClientEntryPoint:!1,Events:[Zn,Wt,ar,ys,gs,Pa]},gn={findFiberByHostInstance:kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Dp={bundleType:gn.bundleType,version:gn.version,rendererPackageName:gn.rendererPackageName,rendererConfig:gn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$e.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Cs(e),e===null?null:e.stateNode},findFiberByHostInstance:gn.findFiberByHostInstance||Ip,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vo.isDisabled&&vo.supportsFiber)try{nr=vo.inject(Dp),Fe=vo}catch{}}ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xp;ve.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ra(t))throw Error(g(200));return Ap(e,t,null,n)};ve.createRoot=function(e,t){if(!Ra(e))throw Error(g(299));var n=!1,o="",r=ec;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=ba(e,1,!1,null,null,n,!1,o,r),e[Qe]=t.current,Hn(e.nodeType===8?e.parentNode:e),new Da(t)};ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(g(188)):(e=Object.keys(e).join(","),Error(g(268,e)));return e=Cs(t),e=e===null?null:e.stateNode,e};ve.flushSync=function(e){return bt(e)};ve.hydrate=function(e,t,n){if(!mr(t))throw Error(g(200));return yr(null,e,t,!0,n)};ve.hydrateRoot=function(e,t,n){if(!Ra(e))throw Error(g(405));var o=n!=null&&n.hydratedSources||null,r=!1,i="",a=ec;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Ju(t,null,e,1,n??null,r,!1,i,a),e[Qe]=t.current,Hn(e),o)for(e=0;e<o.length;e++)n=o[e],r=n._getVersion,r=r(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,r]:t.mutableSourceEagerHydrationData.push(n,r);return new hr(t)};ve.render=function(e,t,n){if(!mr(t))throw Error(g(200));return yr(null,e,t,!1,n)};ve.unmountComponentAtNode=function(e){if(!mr(e))throw Error(g(40));return e._reactRootContainer?(bt(function(){yr(null,null,e,!1,function(){e._reactRootContainer=null,e[Qe]=null})}),!0):!1};ve.unstable_batchedUpdates=Pa;ve.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!mr(n))throw Error(g(200));if(e==null||e._reactInternals===void 0)throw Error(g(38));return yr(e,t,n,!1,o)};ve.version="18.3.1-next-f1338f8080-20240426";function tc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tc)}catch(e){console.error(e)}}tc(),ts.exports=ve;var Rp=ts.exports,Bl=Rp;Qr.createRoot=Bl.createRoot,Qr.hydrateRoot=Bl.hydrateRoot;const Np=({className:e})=>S.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:`w-5 h-5 ${e}`,children:S.jsx("path",{fillRule:"evenodd",d:"M2 4.75A.75.75 0 0 1 2.75 4h5.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 0 1.5 0v-.5A2.25 2.25 0 0 0 8.25 2h-5.5A2.25 2.25 0 0 0 0 4.25v11.5A2.25 2.25 0 0 0 2.25 18h15.5A2.25 2.25 0 0 0 20 15.75V8.25A2.25 2.25 0 0 0 17.75 6h-5.5a.75.75 0 0 1-.75-.75v-.5a.75.75 0 0 0-1.5 0v.5A2.25 2.25 0 0 0 12.25 8h5.5A.75.75 0 0 1 18.5 8.75v7a.75.75 0 0 1-.75.75H2.25a.75.75 0 0 1-.75-.75V4.75Z",clipRule:"evenodd"})}),Lp=({className:e})=>S.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:`w-5 h-5 ${e}`,children:S.jsx("path",{fillRule:"evenodd",d:"M4.25 2A2.25 2.25 0 0 0 2 4.25v11.5A2.25 2.25 0 0 0 4.25 18h11.5A2.25 2.25 0 0 0 18 15.75V4.25A2.25 2.25 0 0 0 15.75 2H4.25ZM6 6.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm0 3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm0 3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z",clipRule:"evenodd"})}),Mp=({className:e})=>S.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:`w-5 h-5 ${e}`,children:S.jsx("path",{fillRule:"evenodd",d:"M8.5 3.543a.75.75 0 1 0-1.5 0V4.5h.5A2.5 2.5 0 0 1 10 7v3.5a.75.75 0 0 0 1.5 0V7A2.5 2.5 0 0 1 14 4.5h.5v-.957a.75.75 0 0 0-1.5 0V4.5h-.5A1 1 0 0 0 11.5 5.5v1.858a.75.75 0 0 0 1.5 0V5.5a1 1 0 0 0-.5-1 .75.75 0 0 0-.5.5v.043a.75.75 0 1 0 1.5 0V4.5h.5A2.5 2.5 0 0 1 16 7v7.25A2.25 2.25 0 0 1 13.75 16.5h-1.375a.75.75 0 0 0 0 1.5h1.375A3.75 3.75 0 0 0 17.5 14.25V7A4 4 0 0 0 13.5 3h-.5a.75.75 0 0 0 0-1.5H13A2.5 2.5 0 0 1 10.5 0h-1A2.5 2.5 0 0 1 7 2.5H6.5a.75.75 0 0 0 0 1.5h.5A4 4 0 0 0 11 7v7.25c0 .9-.356 1.748-.97 2.375a.75.75 0 1 0-1.06-1.06A2.238 2.238 0 0 1 9.5 14.25V7a2.5 2.5 0 0 1-2.5-2.5H6v.957a.75.75 0 0 0 1.5 0V4.5h.5a1 1 0 0 0 1-1V3.457a.75.75 0 0 0-1.5 0V3.5h-.5A2.5 2.5 0 0 1 4 6v.5a.75.75 0 0 0 1.5 0V6a1 1 0 0 0-.5-1 .75.75 0 0 0-.5.5v.5a.75.75 0 1 0 1.5 0v-.5A2.5 2.5 0 0 1 8.5 3.5v.043ZM6.25 18a.75.75 0 0 0 0-1.5H4.875a.75.75 0 0 0 0 1.5H6.25Z",clipRule:"evenodd"})}),Op=({className:e})=>S.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:`w-5 h-5 ${e}`,children:S.jsx("path",{fillRule:"evenodd",d:"M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"})}),Fp=({className:e})=>S.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:`w-5 h-5 ${e}`,children:S.jsx("path",{fillRule:"evenodd",d:"M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z",clipRule:"evenodd"})}),Wp=({className:e})=>S.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:`w-5 h-5 ${e}`,children:S.jsx("path",{d:"M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"})}),nc=({data:e,selectedFile:t,onFileSelect:n,expandedFolders:o,onToggleFolder:r,basePath:i=""})=>{const a=[...e].sort((l,s)=>l.type==="directory"&&s.type==="file"?-1:l.type==="file"&&s.type==="directory"?1:l.name.localeCompare(s.name));return S.jsx("ul",{className:"space-y-1",children:a.map(l=>{const s=i?`${i}/${l.name}`:l.name;if(l.type==="directory"){const c=o.has(s);return S.jsxs("li",{children:[S.jsxs("div",{className:"flex items-center p-2 rounded-md cursor-pointer hover:bg-gray-700/50 text-gray-300",onClick:()=>r(s),children:[S.jsx(Op,{className:`mr-2 transform transition-transform duration-200 ${c?"rotate-90":"rotate-0"}`}),S.jsx(Np,{className:"mr-2 text-sky-400"}),S.jsx("span",{className:"flex-1 truncate",children:l.name})]}),c&&S.jsx("div",{className:"pl-5 border-l border-gray-700 ml-2.5",children:S.jsx(nc,{data:l.children,selectedFile:t,onFileSelect:n,expandedFolders:o,onToggleFolder:r,basePath:s})})]},s)}if(l.type==="file"){const c=t===s,h=l.name.endsWith(".json");return S.jsx("li",{children:S.jsxs("div",{className:`flex items-center p-2 rounded-md cursor-pointer group ${c?"bg-sky-600/30 text-sky-300":"hover:bg-gray-700/50 text-gray-400 hover:text-gray-200"}`,onClick:()=>n(s),children:[S.jsx("div",{className:"w-5 mr-2"})," ",h?S.jsx(Mp,{className:"mr-2 text-yellow-400"}):S.jsx(Lp,{className:"mr-2 text-gray-500 group-hover:text-gray-400"}),S.jsx("span",{className:"flex-1 truncate",children:l.name})]})},s)}return null})})},Hp=e=>{const t=e.split(`
`),n=[];let o=!1,r="",i=[],a=[];const l=s=>{a.length>0&&(n.push(S.jsx("ul",{className:"pl-6 my-3 space-y-1 list-disc",children:a.map((c,h)=>S.jsx("li",{children:c},h))},s)),a=[])};return t.forEach((s,c)=>{if(s.trim().startsWith("```")){l(`list-before-code-${c}`),o?(n.push(S.jsxs("div",{className:"my-4 rounded-lg bg-gray-950/70 border border-gray-700 overflow-hidden",children:[S.jsx("div",{className:"text-xs text-gray-400 bg-gray-800 px-4 py-1",children:r}),S.jsx("pre",{className:"p-4 overflow-x-auto",children:S.jsx("code",{className:"text-sm font-mono text-cyan-300",children:i.join(`
`)})})]},`code-block-${c}`)),i=[],r=""):r=s.trim().substring(3).trim(),o=!o;return}if(o){i.push(s);return}!s.trim().startsWith("- ")&&!s.trim().startsWith("* ")&&l(`list-${c}`),s.startsWith("# ")?n.push(S.jsx("h1",{className:"text-3xl lg:text-4xl font-bold mt-8 mb-4 border-b border-gray-600 pb-3 text-gray-100",children:s.substring(2)},c)):s.startsWith("## ")?n.push(S.jsx("h2",{className:"text-2xl lg:text-3xl font-semibold mt-7 mb-3 border-b border-gray-700 pb-2 text-gray-200",children:s.substring(3)},c)):s.startsWith("### ")?n.push(S.jsx("h3",{className:"text-xl lg:text-2xl font-semibold mt-6 mb-2 text-gray-300",children:s.substring(4)},c)):s.trim().startsWith("- ")||s.trim().startsWith("* ")?a.push(s.trim().substring(2)):s.trim()==="---"||s.trim()==="⸻"?n.push(S.jsx("hr",{className:"my-8 border-gray-700"},c)):s.trim()!==""&&n.push(S.jsx("p",{className:"my-3 leading-relaxed text-gray-300",children:s},c))}),l("final-list"),o&&i.length>0&&n.push(S.jsxs("div",{className:"my-4 rounded-lg bg-gray-950/70 border border-gray-700 overflow-hidden",children:[S.jsx("div",{className:"text-xs text-gray-400 bg-gray-800 px-4 py-1",children:r}),S.jsx("pre",{className:"p-4 overflow-x-auto",children:S.jsx("code",{className:"text-sm font-mono text-cyan-300",children:i.join(`
`)})})]},"final-code")),n},jp=({file:e})=>{if(!e)return S.jsx("div",{className:"flex items-center justify-center h-full text-gray-500",children:S.jsxs("div",{className:"text-center",children:[S.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Client Acquisition System"}),S.jsx("p",{children:"Select a file from the sidebar to view its content."})]})});const t=e.name.endsWith(".json"),n=e.name.endsWith(".csv");return S.jsxs("div",{className:"p-4 sm:p-6 md:p-8 lg:p-10",children:[S.jsx("h1",{className:"text-lg font-semibold text-gray-400 mb-6 pb-2 border-b border-gray-700",children:e.name}),S.jsx("div",{className:"prose prose-invert max-w-none",children:t||n?S.jsx("pre",{className:"bg-gray-800/50 p-4 rounded-md overflow-x-auto my-4 w-full",children:S.jsx("code",{className:"text-sm font-mono text-yellow-300 whitespace-pre-wrap",children:e.content})}):Hp(e.content).map((o,r)=>S.jsx("div",{children:o},r))})]})},Gl={type:"directory",name:"client-acquisition",children:[{type:"directory",name:"strategy",children:[{type:"file",name:"ICP.md",content:`
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
`}]},zp=()=>{const[e,t]=je.useState(null),[n,o]=je.useState(new Set(["strategy"])),[r,i]=je.useState(!1),a=je.useMemo(()=>{const h=new Map,m=(f,w)=>{f.forEach(v=>{const k=w?`${w}/${v.name}`:v.name;v.type==="file"?h.set(k,v):v.type==="directory"&&m(v.children,k)})};return m(Gl.children,"client-acquisition"),h},[]),l=je.useCallback(h=>{t(h),window.innerWidth<768&&i(!1)},[]),s=je.useCallback(h=>{o(m=>{const f=new Set(m);return f.has(h)?f.delete(h):f.add(h),f})},[]),c=e?a.get(e)??null:null;return S.jsxs("div",{className:"flex h-screen w-screen overflow-hidden bg-gray-900 text-gray-200",children:[S.jsxs("header",{className:"md:hidden fixed top-0 left-0 right-0 h-14 bg-gray-900/80 backdrop-blur-sm border-b border-gray-700 flex items-center justify-between px-4 z-20",children:[S.jsx("h1",{className:"text-lg font-semibold text-gray-200 truncate",children:"Client Acquisition System"}),S.jsx("button",{onClick:()=>i(!r),className:"p-2 -mr-2",children:r?S.jsx(Wp,{}):S.jsx(Fp,{})})]}),S.jsxs("aside",{className:`fixed md:relative top-14 md:top-0 h-[calc(100vh-3.5rem)] md:h-screen w-72 md:w-80 lg:w-96 flex-shrink-0 bg-gray-800/50 border-r border-gray-700/50 transform transition-transform duration-300 ease-in-out z-10 ${r?"translate-x-0":"-translate-x-full"} md:translate-x-0`,children:[S.jsxs("div",{className:"p-4 border-b border-gray-700 hidden md:block",children:[S.jsx("h1",{className:"text-xl font-bold text-gray-100",children:"GitHub Repo Architect"}),S.jsx("p",{className:"text-sm text-gray-400",children:"Client Acquisition System"})]}),S.jsx("div",{className:"overflow-y-auto h-[calc(100%-4rem)] md:h-[calc(100%-5rem)] p-4",children:S.jsx(nc,{data:Gl.children,selectedFile:e,onFileSelect:l,expandedFolders:n,onToggleFolder:s,basePath:"client-acquisition"})})]}),S.jsx("main",{className:"flex-1 overflow-y-auto pt-14 md:pt-0",children:S.jsx(jp,{file:c})})]})},oc=document.getElementById("root");if(!oc)throw new Error("Could not find root element to mount to");const Bp=Qr.createRoot(oc);Bp.render(S.jsx(Sc.StrictMode,{children:S.jsx(zp,{})}));
