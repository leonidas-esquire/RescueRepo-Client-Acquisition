(function(){const te=document.createElement("link").relList;if(te&&te.supports&&te.supports("modulepreload"))return;for(const H of document.querySelectorAll('link[rel="modulepreload"]'))m(H);new MutationObserver(H=>{for(const q of H)if(q.type==="childList")for(const ae of q.addedNodes)ae.tagName==="LINK"&&ae.rel==="modulepreload"&&m(ae)}).observe(document,{childList:!0,subtree:!0});function B(H){const q={};return H.integrity&&(q.integrity=H.integrity),H.referrerPolicy&&(q.referrerPolicy=H.referrerPolicy),H.crossOrigin==="use-credentials"?q.credentials="include":H.crossOrigin==="anonymous"?q.credentials="omit":q.credentials="same-origin",q}function m(H){if(H.ep)return;H.ep=!0;const q=B(H);fetch(H.href,q)}})();function _d(A){return A&&A.__esModule&&Object.prototype.hasOwnProperty.call(A,"default")?A.default:A}var lr={exports:{}},Si={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var md;function Fm(){if(md)return Si;md=1;var A=Symbol.for("react.transitional.element"),te=Symbol.for("react.fragment");function B(m,H,q){var ae=null;if(q!==void 0&&(ae=""+q),H.key!==void 0&&(ae=""+H.key),"key"in H){q={};for(var K in H)K!=="key"&&(q[K]=H[K])}else q=H;return H=q.ref,{$$typeof:A,type:m,key:ae,ref:H!==void 0?H:null,props:q}}return Si.Fragment=te,Si.jsx=B,Si.jsxs=B,Si}var yd;function Jm(){return yd||(yd=1,lr.exports=Fm()),lr.exports}var D=Jm(),or={exports:{}},L={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pd;function $m(){if(pd)return L;pd=1;var A=Symbol.for("react.transitional.element"),te=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),q=Symbol.for("react.consumer"),ae=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),S=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),$=Symbol.iterator;function ze(c){return c===null||typeof c!="object"?null:(c=$&&c[$]||c["@@iterator"],typeof c=="function"?c:null)}var ge={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ee=Object.assign,kt={};function Pe(c,T,E){this.props=c,this.context=T,this.refs=kt,this.updater=E||ge}Pe.prototype.isReactComponent={},Pe.prototype.setState=function(c,T){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,T,"setState")},Pe.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function Zt(){}Zt.prototype=Pe.prototype;function xe(c,T,E){this.props=c,this.context=T,this.refs=kt,this.updater=E||ge}var ot=xe.prototype=new Zt;ot.constructor=xe,Ee(ot,Pe.prototype),ot.isPureReactComponent=!0;var wt=Array.isArray;function je(){}var Z={H:null,A:null,T:null,S:null},Ue=Object.prototype.hasOwnProperty;function Tt(c,T,E){var R=E.ref;return{$$typeof:A,type:c,key:T,ref:R!==void 0?R:null,props:E}}function Ga(c,T){return Tt(c.type,T,c.props)}function At(c){return typeof c=="object"&&c!==null&&c.$$typeof===A}function Ge(c){var T={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(E){return T[E]})}var Sa=/\/+/g;function Rt(c,T){return typeof c=="object"&&c!==null&&c.key!=null?Ge(""+c.key):T.toString(36)}function gt(c){switch(c.status){case"fulfilled":return c.value;case"rejected":throw c.reason;default:switch(typeof c.status=="string"?c.then(je,je):(c.status="pending",c.then(function(T){c.status==="pending"&&(c.status="fulfilled",c.value=T)},function(T){c.status==="pending"&&(c.status="rejected",c.reason=T)})),c.status){case"fulfilled":return c.value;case"rejected":throw c.reason}}throw c}function v(c,T,E,R,U){var Q=typeof c;(Q==="undefined"||Q==="boolean")&&(c=null);var ne=!1;if(c===null)ne=!0;else switch(Q){case"bigint":case"string":case"number":ne=!0;break;case"object":switch(c.$$typeof){case A:case te:ne=!0;break;case j:return ne=c._init,v(ne(c._payload),T,E,R,U)}}if(ne)return U=U(c),ne=R===""?"."+Rt(c,0):R,wt(U)?(E="",ne!=null&&(E=ne.replace(Sa,"$&/")+"/"),v(U,T,E,"",function(Dn){return Dn})):U!=null&&(At(U)&&(U=Ga(U,E+(U.key==null||c&&c.key===U.key?"":(""+U.key).replace(Sa,"$&/")+"/")+ne)),T.push(U)),1;ne=0;var Le=R===""?".":R+":";if(wt(c))for(var ve=0;ve<c.length;ve++)R=c[ve],Q=Le+Rt(R,ve),ne+=v(R,T,E,Q,U);else if(ve=ze(c),typeof ve=="function")for(c=ve.call(c),ve=0;!(R=c.next()).done;)R=R.value,Q=Le+Rt(R,ve++),ne+=v(R,T,E,Q,U);else if(Q==="object"){if(typeof c.then=="function")return v(gt(c),T,E,R,U);throw T=String(c),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return ne}function _(c,T,E){if(c==null)return c;var R=[],U=0;return v(c,R,"","",function(Q){return T.call(E,Q,U++)}),R}function x(c){if(c._status===-1){var T=c._result;T=T(),T.then(function(E){(c._status===0||c._status===-1)&&(c._status=1,c._result=E)},function(E){(c._status===0||c._status===-1)&&(c._status=2,c._result=E)}),c._status===-1&&(c._status=0,c._result=T)}if(c._status===1)return c._result.default;throw c._result}var oe=typeof reportError=="function"?reportError:function(c){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof c=="object"&&c!==null&&typeof c.message=="string"?String(c.message):String(c),error:c});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",c);return}console.error(c)},ce={map:_,forEach:function(c,T,E){_(c,function(){T.apply(this,arguments)},E)},count:function(c){var T=0;return _(c,function(){T++}),T},toArray:function(c){return _(c,function(T){return T})||[]},only:function(c){if(!At(c))throw Error("React.Children.only expected to receive a single React element child.");return c}};return L.Activity=N,L.Children=ce,L.Component=Pe,L.Fragment=B,L.Profiler=H,L.PureComponent=xe,L.StrictMode=m,L.Suspense=C,L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,L.__COMPILER_RUNTIME={__proto__:null,c:function(c){return Z.H.useMemoCache(c)}},L.cache=function(c){return function(){return c.apply(null,arguments)}},L.cacheSignal=function(){return null},L.cloneElement=function(c,T,E){if(c==null)throw Error("The argument must be a React element, but you passed "+c+".");var R=Ee({},c.props),U=c.key;if(T!=null)for(Q in T.key!==void 0&&(U=""+T.key),T)!Ue.call(T,Q)||Q==="key"||Q==="__self"||Q==="__source"||Q==="ref"&&T.ref===void 0||(R[Q]=T[Q]);var Q=arguments.length-2;if(Q===1)R.children=E;else if(1<Q){for(var ne=Array(Q),Le=0;Le<Q;Le++)ne[Le]=arguments[Le+2];R.children=ne}return Tt(c.type,U,R)},L.createContext=function(c){return c={$$typeof:ae,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null},c.Provider=c,c.Consumer={$$typeof:q,_context:c},c},L.createElement=function(c,T,E){var R,U={},Q=null;if(T!=null)for(R in T.key!==void 0&&(Q=""+T.key),T)Ue.call(T,R)&&R!=="key"&&R!=="__self"&&R!=="__source"&&(U[R]=T[R]);var ne=arguments.length-2;if(ne===1)U.children=E;else if(1<ne){for(var Le=Array(ne),ve=0;ve<ne;ve++)Le[ve]=arguments[ve+2];U.children=Le}if(c&&c.defaultProps)for(R in ne=c.defaultProps,ne)U[R]===void 0&&(U[R]=ne[R]);return Tt(c,Q,U)},L.createRef=function(){return{current:null}},L.forwardRef=function(c){return{$$typeof:K,render:c}},L.isValidElement=At,L.lazy=function(c){return{$$typeof:j,_payload:{_status:-1,_result:c},_init:x}},L.memo=function(c,T){return{$$typeof:S,type:c,compare:T===void 0?null:T}},L.startTransition=function(c){var T=Z.T,E={};Z.T=E;try{var R=c(),U=Z.S;U!==null&&U(E,R),typeof R=="object"&&R!==null&&typeof R.then=="function"&&R.then(je,oe)}catch(Q){oe(Q)}finally{T!==null&&E.types!==null&&(T.types=E.types),Z.T=T}},L.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},L.use=function(c){return Z.H.use(c)},L.useActionState=function(c,T,E){return Z.H.useActionState(c,T,E)},L.useCallback=function(c,T){return Z.H.useCallback(c,T)},L.useContext=function(c){return Z.H.useContext(c)},L.useDebugValue=function(){},L.useDeferredValue=function(c,T){return Z.H.useDeferredValue(c,T)},L.useEffect=function(c,T){return Z.H.useEffect(c,T)},L.useEffectEvent=function(c){return Z.H.useEffectEvent(c)},L.useId=function(){return Z.H.useId()},L.useImperativeHandle=function(c,T,E){return Z.H.useImperativeHandle(c,T,E)},L.useInsertionEffect=function(c,T){return Z.H.useInsertionEffect(c,T)},L.useLayoutEffect=function(c,T){return Z.H.useLayoutEffect(c,T)},L.useMemo=function(c,T){return Z.H.useMemo(c,T)},L.useOptimistic=function(c,T){return Z.H.useOptimistic(c,T)},L.useReducer=function(c,T,E){return Z.H.useReducer(c,T,E)},L.useRef=function(c){return Z.H.useRef(c)},L.useState=function(c){return Z.H.useState(c)},L.useSyncExternalStore=function(c,T,E){return Z.H.useSyncExternalStore(c,T,E)},L.useTransition=function(){return Z.H.useTransition()},L.version="19.2.0",L}var gd;function fr(){return gd||(gd=1,or.exports=$m()),or.exports}var Ua=fr();const ey=_d(Ua);var ur={exports:{}},wi={},rr={exports:{}},sr={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vd;function ty(){return vd||(vd=1,(function(A){function te(v,_){var x=v.length;v.push(_);e:for(;0<x;){var oe=x-1>>>1,ce=v[oe];if(0<H(ce,_))v[oe]=_,v[x]=ce,x=oe;else break e}}function B(v){return v.length===0?null:v[0]}function m(v){if(v.length===0)return null;var _=v[0],x=v.pop();if(x!==_){v[0]=x;e:for(var oe=0,ce=v.length,c=ce>>>1;oe<c;){var T=2*(oe+1)-1,E=v[T],R=T+1,U=v[R];if(0>H(E,x))R<ce&&0>H(U,E)?(v[oe]=U,v[R]=x,oe=R):(v[oe]=E,v[T]=x,oe=T);else if(R<ce&&0>H(U,x))v[oe]=U,v[R]=x,oe=R;else break e}}return _}function H(v,_){var x=v.sortIndex-_.sortIndex;return x!==0?x:v.id-_.id}if(A.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var q=performance;A.unstable_now=function(){return q.now()}}else{var ae=Date,K=ae.now();A.unstable_now=function(){return ae.now()-K}}var C=[],S=[],j=1,N=null,$=3,ze=!1,ge=!1,Ee=!1,kt=!1,Pe=typeof setTimeout=="function"?setTimeout:null,Zt=typeof clearTimeout=="function"?clearTimeout:null,xe=typeof setImmediate<"u"?setImmediate:null;function ot(v){for(var _=B(S);_!==null;){if(_.callback===null)m(S);else if(_.startTime<=v)m(S),_.sortIndex=_.expirationTime,te(C,_);else break;_=B(S)}}function wt(v){if(Ee=!1,ot(v),!ge)if(B(C)!==null)ge=!0,je||(je=!0,Ge());else{var _=B(S);_!==null&&gt(wt,_.startTime-v)}}var je=!1,Z=-1,Ue=5,Tt=-1;function Ga(){return kt?!0:!(A.unstable_now()-Tt<Ue)}function At(){if(kt=!1,je){var v=A.unstable_now();Tt=v;var _=!0;try{e:{ge=!1,Ee&&(Ee=!1,Zt(Z),Z=-1),ze=!0;var x=$;try{t:{for(ot(v),N=B(C);N!==null&&!(N.expirationTime>v&&Ga());){var oe=N.callback;if(typeof oe=="function"){N.callback=null,$=N.priorityLevel;var ce=oe(N.expirationTime<=v);if(v=A.unstable_now(),typeof ce=="function"){N.callback=ce,ot(v),_=!0;break t}N===B(C)&&m(C),ot(v)}else m(C);N=B(C)}if(N!==null)_=!0;else{var c=B(S);c!==null&&gt(wt,c.startTime-v),_=!1}}break e}finally{N=null,$=x,ze=!1}_=void 0}}finally{_?Ge():je=!1}}}var Ge;if(typeof xe=="function")Ge=function(){xe(At)};else if(typeof MessageChannel<"u"){var Sa=new MessageChannel,Rt=Sa.port2;Sa.port1.onmessage=At,Ge=function(){Rt.postMessage(null)}}else Ge=function(){Pe(At,0)};function gt(v,_){Z=Pe(function(){v(A.unstable_now())},_)}A.unstable_IdlePriority=5,A.unstable_ImmediatePriority=1,A.unstable_LowPriority=4,A.unstable_NormalPriority=3,A.unstable_Profiling=null,A.unstable_UserBlockingPriority=2,A.unstable_cancelCallback=function(v){v.callback=null},A.unstable_forceFrameRate=function(v){0>v||125<v?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ue=0<v?Math.floor(1e3/v):5},A.unstable_getCurrentPriorityLevel=function(){return $},A.unstable_next=function(v){switch($){case 1:case 2:case 3:var _=3;break;default:_=$}var x=$;$=_;try{return v()}finally{$=x}},A.unstable_requestPaint=function(){kt=!0},A.unstable_runWithPriority=function(v,_){switch(v){case 1:case 2:case 3:case 4:case 5:break;default:v=3}var x=$;$=v;try{return _()}finally{$=x}},A.unstable_scheduleCallback=function(v,_,x){var oe=A.unstable_now();switch(typeof x=="object"&&x!==null?(x=x.delay,x=typeof x=="number"&&0<x?oe+x:oe):x=oe,v){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=x+ce,v={id:j++,callback:_,priorityLevel:v,startTime:x,expirationTime:ce,sortIndex:-1},x>oe?(v.sortIndex=x,te(S,v),B(C)===null&&v===B(S)&&(Ee?(Zt(Z),Z=-1):Ee=!0,gt(wt,x-oe))):(v.sortIndex=ce,te(C,v),ge||ze||(ge=!0,je||(je=!0,Ge()))),v},A.unstable_shouldYield=Ga,A.unstable_wrapCallback=function(v){var _=$;return function(){var x=$;$=_;try{return v.apply(this,arguments)}finally{$=x}}}})(sr)),sr}var bd;function ay(){return bd||(bd=1,rr.exports=ty()),rr.exports}var cr={exports:{}},Be={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sd;function ny(){if(Sd)return Be;Sd=1;var A=fr();function te(C){var S="https://react.dev/errors/"+C;if(1<arguments.length){S+="?args[]="+encodeURIComponent(arguments[1]);for(var j=2;j<arguments.length;j++)S+="&args[]="+encodeURIComponent(arguments[j])}return"Minified React error #"+C+"; visit "+S+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function B(){}var m={d:{f:B,r:function(){throw Error(te(522))},D:B,C:B,L:B,m:B,X:B,S:B,M:B},p:0,findDOMNode:null},H=Symbol.for("react.portal");function q(C,S,j){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:H,key:N==null?null:""+N,children:C,containerInfo:S,implementation:j}}var ae=A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function K(C,S){if(C==="font")return"";if(typeof S=="string")return S==="use-credentials"?S:""}return Be.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=m,Be.createPortal=function(C,S){var j=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!S||S.nodeType!==1&&S.nodeType!==9&&S.nodeType!==11)throw Error(te(299));return q(C,S,null,j)},Be.flushSync=function(C){var S=ae.T,j=m.p;try{if(ae.T=null,m.p=2,C)return C()}finally{ae.T=S,m.p=j,m.d.f()}},Be.preconnect=function(C,S){typeof C=="string"&&(S?(S=S.crossOrigin,S=typeof S=="string"?S==="use-credentials"?S:"":void 0):S=null,m.d.C(C,S))},Be.prefetchDNS=function(C){typeof C=="string"&&m.d.D(C)},Be.preinit=function(C,S){if(typeof C=="string"&&S&&typeof S.as=="string"){var j=S.as,N=K(j,S.crossOrigin),$=typeof S.integrity=="string"?S.integrity:void 0,ze=typeof S.fetchPriority=="string"?S.fetchPriority:void 0;j==="style"?m.d.S(C,typeof S.precedence=="string"?S.precedence:void 0,{crossOrigin:N,integrity:$,fetchPriority:ze}):j==="script"&&m.d.X(C,{crossOrigin:N,integrity:$,fetchPriority:ze,nonce:typeof S.nonce=="string"?S.nonce:void 0})}},Be.preinitModule=function(C,S){if(typeof C=="string")if(typeof S=="object"&&S!==null){if(S.as==null||S.as==="script"){var j=K(S.as,S.crossOrigin);m.d.M(C,{crossOrigin:j,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0})}}else S==null&&m.d.M(C)},Be.preload=function(C,S){if(typeof C=="string"&&typeof S=="object"&&S!==null&&typeof S.as=="string"){var j=S.as,N=K(j,S.crossOrigin);m.d.L(C,j,{crossOrigin:N,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0,type:typeof S.type=="string"?S.type:void 0,fetchPriority:typeof S.fetchPriority=="string"?S.fetchPriority:void 0,referrerPolicy:typeof S.referrerPolicy=="string"?S.referrerPolicy:void 0,imageSrcSet:typeof S.imageSrcSet=="string"?S.imageSrcSet:void 0,imageSizes:typeof S.imageSizes=="string"?S.imageSizes:void 0,media:typeof S.media=="string"?S.media:void 0})}},Be.preloadModule=function(C,S){if(typeof C=="string")if(S){var j=K(S.as,S.crossOrigin);m.d.m(C,{as:typeof S.as=="string"&&S.as!=="script"?S.as:void 0,crossOrigin:j,integrity:typeof S.integrity=="string"?S.integrity:void 0})}else m.d.m(C)},Be.requestFormReset=function(C){m.d.r(C)},Be.unstable_batchedUpdates=function(C,S){return C(S)},Be.useFormState=function(C,S,j){return ae.H.useFormState(C,S,j)},Be.useFormStatus=function(){return ae.H.useHostTransitionStatus()},Be.version="19.2.0",Be}var wd;function iy(){if(wd)return cr.exports;wd=1;function A(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A)}catch(te){console.error(te)}}return A(),cr.exports=ny(),cr.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Td;function ly(){if(Td)return wi;Td=1;var A=ay(),te=fr(),B=iy();function m(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function H(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function q(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function ae(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function K(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function C(e){if(q(e)!==e)throw Error(m(188))}function S(e){var t=e.alternate;if(!t){if(t=q(e),t===null)throw Error(m(188));return t!==e?null:e}for(var a=e,n=t;;){var i=a.return;if(i===null)break;var l=i.alternate;if(l===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===a)return C(i),e;if(l===n)return C(i),t;l=l.sibling}throw Error(m(188))}if(a.return!==n.return)a=i,n=l;else{for(var o=!1,u=i.child;u;){if(u===a){o=!0,a=i,n=l;break}if(u===n){o=!0,n=i,a=l;break}u=u.sibling}if(!o){for(u=l.child;u;){if(u===a){o=!0,a=l,n=i;break}if(u===n){o=!0,n=l,a=i;break}u=u.sibling}if(!o)throw Error(m(189))}}if(a.alternate!==n)throw Error(m(190))}if(a.tag!==3)throw Error(m(188));return a.stateNode.current===a?e:t}function j(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=j(e),t!==null)return t;e=e.sibling}return null}var N=Object.assign,$=Symbol.for("react.element"),ze=Symbol.for("react.transitional.element"),ge=Symbol.for("react.portal"),Ee=Symbol.for("react.fragment"),kt=Symbol.for("react.strict_mode"),Pe=Symbol.for("react.profiler"),Zt=Symbol.for("react.consumer"),xe=Symbol.for("react.context"),ot=Symbol.for("react.forward_ref"),wt=Symbol.for("react.suspense"),je=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),Ue=Symbol.for("react.lazy"),Tt=Symbol.for("react.activity"),Ga=Symbol.for("react.memo_cache_sentinel"),At=Symbol.iterator;function Ge(e){return e===null||typeof e!="object"?null:(e=At&&e[At]||e["@@iterator"],typeof e=="function"?e:null)}var Sa=Symbol.for("react.client.reference");function Rt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Sa?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ee:return"Fragment";case Pe:return"Profiler";case kt:return"StrictMode";case wt:return"Suspense";case je:return"SuspenseList";case Tt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ge:return"Portal";case xe:return e.displayName||"Context";case Zt:return(e._context.displayName||"Context")+".Consumer";case ot:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Z:return t=e.displayName||null,t!==null?t:Rt(e.type)||"Memo";case Ue:t=e._payload,e=e._init;try{return Rt(e(t))}catch{}}return null}var gt=Array.isArray,v=te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_=B.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,x={pending:!1,data:null,method:null,action:null},oe=[],ce=-1;function c(e){return{current:e}}function T(e){0>ce||(e.current=oe[ce],oe[ce]=null,ce--)}function E(e,t){ce++,oe[ce]=e.current,e.current=t}var R=c(null),U=c(null),Q=c(null),ne=c(null);function Le(e,t){switch(E(Q,t),E(U,e),E(R,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Lf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Lf(t),e=qf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}T(R),E(R,e)}function ve(){T(R),T(U),T(Q)}function Dn(e){e.memoizedState!==null&&E(ne,e);var t=R.current,a=qf(t,e.type);t!==a&&(E(U,e),E(R,a))}function Ti(e){U.current===e&&(T(R),T(U)),ne.current===e&&(T(ne),pi._currentValue=x)}var Ul,dr;function wa(e){if(Ul===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Ul=t&&t[1]||"",dr=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ul+e+dr}var Gl=!1;function Yl(e,t){if(!e||Gl)return"";Gl=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var w=function(){throw Error()};if(Object.defineProperty(w.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(w,[])}catch(p){var y=p}Reflect.construct(e,[],w)}else{try{w.call()}catch(p){y=p}e.call(w.prototype)}}else{try{throw Error()}catch(p){y=p}(w=e())&&typeof w.catch=="function"&&w.catch(function(){})}}catch(p){if(p&&y&&typeof p.stack=="string")return[p.stack,y.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=n.DetermineComponentFrameRoot(),o=l[0],u=l[1];if(o&&u){var r=o.split(`
`),h=u.split(`
`);for(i=n=0;n<r.length&&!r[n].includes("DetermineComponentFrameRoot");)n++;for(;i<h.length&&!h[i].includes("DetermineComponentFrameRoot");)i++;if(n===r.length||i===h.length)for(n=r.length-1,i=h.length-1;1<=n&&0<=i&&r[n]!==h[i];)i--;for(;1<=n&&0<=i;n--,i--)if(r[n]!==h[i]){if(n!==1||i!==1)do if(n--,i--,0>i||r[n]!==h[i]){var g=`
`+r[n].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),g}while(1<=n&&0<=i);break}}}finally{Gl=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?wa(a):""}function kd(e,t){switch(e.tag){case 26:case 27:case 5:return wa(e.type);case 16:return wa("Lazy");case 13:return e.child!==t&&t!==null?wa("Suspense Fallback"):wa("Suspense");case 19:return wa("SuspenseList");case 0:case 15:return Yl(e.type,!1);case 11:return Yl(e.type.render,!1);case 1:return Yl(e.type,!0);case 31:return wa("Activity");default:return""}}function hr(e){try{var t="",a=null;do t+=kd(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Ql=Object.prototype.hasOwnProperty,Vl=A.unstable_scheduleCallback,Il=A.unstable_cancelCallback,Rd=A.unstable_shouldYield,Md=A.unstable_requestPaint,Ke=A.unstable_now,Od=A.unstable_getCurrentPriorityLevel,mr=A.unstable_ImmediatePriority,yr=A.unstable_UserBlockingPriority,Ai=A.unstable_NormalPriority,Nd=A.unstable_LowPriority,pr=A.unstable_IdlePriority,Hd=A.log,zd=A.unstable_setDisableYieldValue,kn=null,Fe=null;function Pt(e){if(typeof Hd=="function"&&zd(e),Fe&&typeof Fe.setStrictMode=="function")try{Fe.setStrictMode(kn,e)}catch{}}var Je=Math.clz32?Math.clz32:Ld,xd=Math.log,Bd=Math.LN2;function Ld(e){return e>>>=0,e===0?32:31-(xd(e)/Bd|0)|0}var Ci=256,_i=262144,Ei=4194304;function Ta(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Di(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var i=0,l=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var u=n&134217727;return u!==0?(n=u&~l,n!==0?i=Ta(n):(o&=u,o!==0?i=Ta(o):a||(a=u&~e,a!==0&&(i=Ta(a))))):(u=n&~l,u!==0?i=Ta(u):o!==0?i=Ta(o):a||(a=n&~e,a!==0&&(i=Ta(a)))),i===0?0:t!==0&&t!==i&&(t&l)===0&&(l=i&-i,a=t&-t,l>=a||l===32&&(a&4194048)!==0)?t:i}function Rn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function qd(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gr(){var e=Ei;return Ei<<=1,(Ei&62914560)===0&&(Ei=4194304),e}function Wl(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Mn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function jd(e,t,a,n,i,l){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var u=e.entanglements,r=e.expirationTimes,h=e.hiddenUpdates;for(a=o&~a;0<a;){var g=31-Je(a),w=1<<g;u[g]=0,r[g]=-1;var y=h[g];if(y!==null)for(h[g]=null,g=0;g<y.length;g++){var p=y[g];p!==null&&(p.lane&=-536870913)}a&=~w}n!==0&&vr(e,n,0),l!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=l&~(o&~t))}function vr(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-Je(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function br(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-Je(a),i=1<<n;i&t|e[n]&t&&(e[n]|=t),a&=~i}}function Sr(e,t){var a=t&-t;return a=(a&42)!==0?1:Xl(a),(a&(e.suspendedLanes|t))!==0?0:a}function Xl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Zl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function wr(){var e=_.p;return e!==0?e:(e=window.event,e===void 0?32:ud(e.type))}function Tr(e,t){var a=_.p;try{return _.p=e,t()}finally{_.p=a}}var Kt=Math.random().toString(36).slice(2),Re="__reactFiber$"+Kt,Ye="__reactProps$"+Kt,Ya="__reactContainer$"+Kt,Pl="__reactEvents$"+Kt,Ud="__reactListeners$"+Kt,Gd="__reactHandles$"+Kt,Ar="__reactResources$"+Kt,On="__reactMarker$"+Kt;function Kl(e){delete e[Re],delete e[Ye],delete e[Pl],delete e[Ud],delete e[Gd]}function Qa(e){var t=e[Re];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ya]||a[Re]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=If(e);e!==null;){if(a=e[Re])return a;e=If(e)}return t}e=a,a=e.parentNode}return null}function Va(e){if(e=e[Re]||e[Ya]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Nn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(m(33))}function Ia(e){var t=e[Ar];return t||(t=e[Ar]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function De(e){e[On]=!0}var Cr=new Set,_r={};function Aa(e,t){Wa(e,t),Wa(e+"Capture",t)}function Wa(e,t){for(_r[e]=t,e=0;e<t.length;e++)Cr.add(t[e])}var Yd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Er={},Dr={};function Qd(e){return Ql.call(Dr,e)?!0:Ql.call(Er,e)?!1:Yd.test(e)?Dr[e]=!0:(Er[e]=!0,!1)}function ki(e,t,a){if(Qd(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Ri(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Mt(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function ut(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function kr(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vd(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){a=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fl(e){if(!e._valueTracker){var t=kr(e)?"checked":"value";e._valueTracker=Vd(e,t,""+e[t])}}function Rr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=kr(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Mi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Id=/[\n"\\]/g;function rt(e){return e.replace(Id,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Jl(e,t,a,n,i,l,o,u){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ut(t)):e.value!==""+ut(t)&&(e.value=""+ut(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?$l(e,o,ut(t)):a!=null?$l(e,o,ut(a)):n!=null&&e.removeAttribute("value"),i==null&&l!=null&&(e.defaultChecked=!!l),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+ut(u):e.removeAttribute("name")}function Mr(e,t,a,n,i,l,o,u){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),t!=null||a!=null){if(!(l!=="submit"&&l!=="reset"||t!=null)){Fl(e);return}a=a!=null?""+ut(a):"",t=t!=null?""+ut(t):a,u||t===e.value||(e.value=t),e.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=u?e.checked:!!n,e.defaultChecked=!!n,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),Fl(e)}function $l(e,t,a){t==="number"&&Mi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Xa(e,t,a,n){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&n&&(e[a].defaultSelected=!0)}else{for(a=""+ut(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Or(e,t,a){if(t!=null&&(t=""+ut(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+ut(a):""}function Nr(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(m(92));if(gt(n)){if(1<n.length)throw Error(m(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=ut(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),Fl(e)}function Za(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Wd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hr(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||Wd.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function zr(e,t,a){if(t!=null&&typeof t!="object")throw Error(m(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&a[i]!==n&&Hr(e,i,n)}else for(var l in t)t.hasOwnProperty(l)&&Hr(e,l,t[l])}function eo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Zd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Oi(e){return Zd.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ot(){}var to=null;function ao(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pa=null,Ka=null;function xr(e){var t=Va(e);if(t&&(e=t.stateNode)){var a=e[Ye]||null;e:switch(e=t.stateNode,t.type){case"input":if(Jl(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+rt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var i=n[Ye]||null;if(!i)throw Error(m(90));Jl(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&Rr(n)}break e;case"textarea":Or(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Xa(e,!!a.multiple,t,!1)}}}var no=!1;function Br(e,t,a){if(no)return e(t,a);no=!0;try{var n=e(t);return n}finally{if(no=!1,(Pa!==null||Ka!==null)&&(vl(),Pa&&(t=Pa,e=Ka,Ka=Pa=null,xr(t),e)))for(t=0;t<e.length;t++)xr(e[t])}}function Hn(e,t){var a=e.stateNode;if(a===null)return null;var n=a[Ye]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(m(231,t,typeof a));return a}var Nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),io=!1;if(Nt)try{var zn={};Object.defineProperty(zn,"passive",{get:function(){io=!0}}),window.addEventListener("test",zn,zn),window.removeEventListener("test",zn,zn)}catch{io=!1}var Ft=null,lo=null,Ni=null;function Lr(){if(Ni)return Ni;var e,t=lo,a=t.length,n,i="value"in Ft?Ft.value:Ft.textContent,l=i.length;for(e=0;e<a&&t[e]===i[e];e++);var o=a-e;for(n=1;n<=o&&t[a-n]===i[l-n];n++);return Ni=i.slice(e,1<n?1-n:void 0)}function Hi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zi(){return!0}function qr(){return!1}function Qe(e){function t(a,n,i,l,o){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(a=e[u],this[u]=a?a(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?zi:qr,this.isPropagationStopped=qr,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=zi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=zi)},persist:function(){},isPersistent:zi}),t}var Ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xi=Qe(Ca),xn=N({},Ca,{view:0,detail:0}),Pd=Qe(xn),oo,uo,Bn,Bi=N({},xn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:so,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bn&&(Bn&&e.type==="mousemove"?(oo=e.screenX-Bn.screenX,uo=e.screenY-Bn.screenY):uo=oo=0,Bn=e),oo)},movementY:function(e){return"movementY"in e?e.movementY:uo}}),jr=Qe(Bi),Kd=N({},Bi,{dataTransfer:0}),Fd=Qe(Kd),Jd=N({},xn,{relatedTarget:0}),ro=Qe(Jd),$d=N({},Ca,{animationName:0,elapsedTime:0,pseudoElement:0}),eh=Qe($d),th=N({},Ca,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ah=Qe(th),nh=N({},Ca,{data:0}),Ur=Qe(nh),ih={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=oh[e])?!!t[e]:!1}function so(){return uh}var rh=N({},xn,{key:function(e){if(e.key){var t=ih[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:so,charCode:function(e){return e.type==="keypress"?Hi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sh=Qe(rh),ch=N({},Bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gr=Qe(ch),fh=N({},xn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:so}),dh=Qe(fh),hh=N({},Ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),mh=Qe(hh),yh=N({},Bi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ph=Qe(yh),gh=N({},Ca,{newState:0,oldState:0}),vh=Qe(gh),bh=[9,13,27,32],co=Nt&&"CompositionEvent"in window,Ln=null;Nt&&"documentMode"in document&&(Ln=document.documentMode);var Sh=Nt&&"TextEvent"in window&&!Ln,Yr=Nt&&(!co||Ln&&8<Ln&&11>=Ln),Qr=" ",Vr=!1;function Ir(e,t){switch(e){case"keyup":return bh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wr(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fa=!1;function wh(e,t){switch(e){case"compositionend":return Wr(t);case"keypress":return t.which!==32?null:(Vr=!0,Qr);case"textInput":return e=t.data,e===Qr&&Vr?null:e;default:return null}}function Th(e,t){if(Fa)return e==="compositionend"||!co&&Ir(e,t)?(e=Lr(),Ni=lo=Ft=null,Fa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yr&&t.locale!=="ko"?null:t.data;default:return null}}var Ah={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ah[e.type]:t==="textarea"}function Zr(e,t,a,n){Pa?Ka?Ka.push(n):Ka=[n]:Pa=n,t=_l(t,"onChange"),0<t.length&&(a=new xi("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var qn=null,jn=null;function Ch(e){Of(e,0)}function Li(e){var t=Nn(e);if(Rr(t))return e}function Pr(e,t){if(e==="change")return t}var Kr=!1;if(Nt){var fo;if(Nt){var ho="oninput"in document;if(!ho){var Fr=document.createElement("div");Fr.setAttribute("oninput","return;"),ho=typeof Fr.oninput=="function"}fo=ho}else fo=!1;Kr=fo&&(!document.documentMode||9<document.documentMode)}function Jr(){qn&&(qn.detachEvent("onpropertychange",$r),jn=qn=null)}function $r(e){if(e.propertyName==="value"&&Li(jn)){var t=[];Zr(t,jn,e,ao(e)),Br(Ch,t)}}function _h(e,t,a){e==="focusin"?(Jr(),qn=t,jn=a,qn.attachEvent("onpropertychange",$r)):e==="focusout"&&Jr()}function Eh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Li(jn)}function Dh(e,t){if(e==="click")return Li(t)}function kh(e,t){if(e==="input"||e==="change")return Li(t)}function Rh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $e=typeof Object.is=="function"?Object.is:Rh;function Un(e,t){if($e(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!Ql.call(t,i)||!$e(e[i],t[i]))return!1}return!0}function es(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ts(e,t){var a=es(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=es(a)}}function as(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?as(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ns(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Mi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Mi(e.document)}return t}function mo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Mh=Nt&&"documentMode"in document&&11>=document.documentMode,Ja=null,yo=null,Gn=null,po=!1;function is(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;po||Ja==null||Ja!==Mi(n)||(n=Ja,"selectionStart"in n&&mo(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Gn&&Un(Gn,n)||(Gn=n,n=_l(yo,"onSelect"),0<n.length&&(t=new xi("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=Ja)))}function _a(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var $a={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionrun:_a("Transition","TransitionRun"),transitionstart:_a("Transition","TransitionStart"),transitioncancel:_a("Transition","TransitionCancel"),transitionend:_a("Transition","TransitionEnd")},go={},ls={};Nt&&(ls=document.createElement("div").style,"AnimationEvent"in window||(delete $a.animationend.animation,delete $a.animationiteration.animation,delete $a.animationstart.animation),"TransitionEvent"in window||delete $a.transitionend.transition);function Ea(e){if(go[e])return go[e];if(!$a[e])return e;var t=$a[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in ls)return go[e]=t[a];return e}var os=Ea("animationend"),us=Ea("animationiteration"),rs=Ea("animationstart"),Oh=Ea("transitionrun"),Nh=Ea("transitionstart"),Hh=Ea("transitioncancel"),ss=Ea("transitionend"),cs=new Map,vo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vo.push("scrollEnd");function vt(e,t){cs.set(e,t),Aa(t,[e])}var qi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},st=[],en=0,bo=0;function ji(){for(var e=en,t=bo=en=0;t<e;){var a=st[t];st[t++]=null;var n=st[t];st[t++]=null;var i=st[t];st[t++]=null;var l=st[t];if(st[t++]=null,n!==null&&i!==null){var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}l!==0&&fs(a,i,l)}}function Ui(e,t,a,n){st[en++]=e,st[en++]=t,st[en++]=a,st[en++]=n,bo|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function So(e,t,a,n){return Ui(e,t,a,n),Gi(e)}function Da(e,t){return Ui(e,null,null,t),Gi(e)}function fs(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var i=!1,l=e.return;l!==null;)l.childLanes|=a,n=l.alternate,n!==null&&(n.childLanes|=a),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(i=!0)),e=l,l=l.return;return e.tag===3?(l=e.stateNode,i&&t!==null&&(i=31-Je(a),e=l.hiddenUpdates,n=e[i],n===null?e[i]=[t]:n.push(t),t.lane=a|536870912),l):null}function Gi(e){if(50<si)throw si=0,Ru=null,Error(m(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var tn={};function zh(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,a,n){return new zh(e,t,a,n)}function wo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ht(e,t){var a=e.alternate;return a===null?(a=et(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function ds(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Yi(e,t,a,n,i,l){var o=0;if(n=e,typeof e=="function")wo(e)&&(o=1);else if(typeof e=="string")o=jm(e,a,R.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Tt:return e=et(31,a,t,i),e.elementType=Tt,e.lanes=l,e;case Ee:return ka(a.children,i,l,t);case kt:o=8,i|=24;break;case Pe:return e=et(12,a,t,i|2),e.elementType=Pe,e.lanes=l,e;case wt:return e=et(13,a,t,i),e.elementType=wt,e.lanes=l,e;case je:return e=et(19,a,t,i),e.elementType=je,e.lanes=l,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xe:o=10;break e;case Zt:o=9;break e;case ot:o=11;break e;case Z:o=14;break e;case Ue:o=16,n=null;break e}o=29,a=Error(m(130,e===null?"null":typeof e,"")),n=null}return t=et(o,a,t,i),t.elementType=e,t.type=n,t.lanes=l,t}function ka(e,t,a,n){return e=et(7,e,n,t),e.lanes=a,e}function To(e,t,a){return e=et(6,e,null,t),e.lanes=a,e}function hs(e){var t=et(18,null,null,0);return t.stateNode=e,t}function Ao(e,t,a){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ms=new WeakMap;function ct(e,t){if(typeof e=="object"&&e!==null){var a=ms.get(e);return a!==void 0?a:(t={value:e,source:t,stack:hr(t)},ms.set(e,t),t)}return{value:e,source:t,stack:hr(t)}}var an=[],nn=0,Qi=null,Yn=0,ft=[],dt=0,Jt=null,Ct=1,_t="";function zt(e,t){an[nn++]=Yn,an[nn++]=Qi,Qi=e,Yn=t}function ys(e,t,a){ft[dt++]=Ct,ft[dt++]=_t,ft[dt++]=Jt,Jt=e;var n=Ct;e=_t;var i=32-Je(n)-1;n&=~(1<<i),a+=1;var l=32-Je(t)+i;if(30<l){var o=i-i%5;l=(n&(1<<o)-1).toString(32),n>>=o,i-=o,Ct=1<<32-Je(t)+i|a<<i|n,_t=l+e}else Ct=1<<l|a<<i|n,_t=e}function Co(e){e.return!==null&&(zt(e,1),ys(e,1,0))}function _o(e){for(;e===Qi;)Qi=an[--nn],an[nn]=null,Yn=an[--nn],an[nn]=null;for(;e===Jt;)Jt=ft[--dt],ft[dt]=null,_t=ft[--dt],ft[dt]=null,Ct=ft[--dt],ft[dt]=null}function ps(e,t){ft[dt++]=Ct,ft[dt++]=_t,ft[dt++]=Jt,Ct=t.id,_t=t.overflow,Jt=e}var Me=null,de=null,P=!1,$t=null,ht=!1,Eo=Error(m(519));function ea(e){var t=Error(m(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Qn(ct(t,e)),Eo}function gs(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[Re]=e,t[Ye]=n,a){case"dialog":I("cancel",t),I("close",t);break;case"iframe":case"object":case"embed":I("load",t);break;case"video":case"audio":for(a=0;a<fi.length;a++)I(fi[a],t);break;case"source":I("error",t);break;case"img":case"image":case"link":I("error",t),I("load",t);break;case"details":I("toggle",t);break;case"input":I("invalid",t),Mr(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":I("invalid",t);break;case"textarea":I("invalid",t),Nr(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||xf(t.textContent,a)?(n.popover!=null&&(I("beforetoggle",t),I("toggle",t)),n.onScroll!=null&&I("scroll",t),n.onScrollEnd!=null&&I("scrollend",t),n.onClick!=null&&(t.onclick=Ot),t=!0):t=!1,t||ea(e,!0)}function vs(e){for(Me=e.return;Me;)switch(Me.tag){case 5:case 31:case 13:ht=!1;return;case 27:case 3:ht=!0;return;default:Me=Me.return}}function ln(e){if(e!==Me)return!1;if(!P)return vs(e),P=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Vu(e.type,e.memoizedProps)),a=!a),a&&de&&ea(e),vs(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));de=Vf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));de=Vf(e)}else t===27?(t=de,ma(e.type)?(e=Pu,Pu=null,de=e):de=t):de=Me?yt(e.stateNode.nextSibling):null;return!0}function Ra(){de=Me=null,P=!1}function Do(){var e=$t;return e!==null&&(Xe===null?Xe=e:Xe.push.apply(Xe,e),$t=null),e}function Qn(e){$t===null?$t=[e]:$t.push(e)}var ko=c(null),Ma=null,xt=null;function ta(e,t,a){E(ko,t._currentValue),t._currentValue=a}function Bt(e){e._currentValue=ko.current,T(ko)}function Ro(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Mo(e,t,a,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){var o=i.child;l=l.firstContext;e:for(;l!==null;){var u=l;l=i;for(var r=0;r<t.length;r++)if(u.context===t[r]){l.lanes|=a,u=l.alternate,u!==null&&(u.lanes|=a),Ro(l.return,a,e),n||(o=null);break e}l=u.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(m(341));o.lanes|=a,l=o.alternate,l!==null&&(l.lanes|=a),Ro(o,a,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function on(e,t,a,n){e=null;for(var i=t,l=!1;i!==null;){if(!l){if((i.flags&524288)!==0)l=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(m(387));if(o=o.memoizedProps,o!==null){var u=i.type;$e(i.pendingProps.value,o.value)||(e!==null?e.push(u):e=[u])}}else if(i===ne.current){if(o=i.alternate,o===null)throw Error(m(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(pi):e=[pi])}i=i.return}e!==null&&Mo(t,e,a,n),t.flags|=262144}function Vi(e){for(e=e.firstContext;e!==null;){if(!$e(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Oa(e){Ma=e,xt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Oe(e){return bs(Ma,e)}function Ii(e,t){return Ma===null&&Oa(e),bs(e,t)}function bs(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},xt===null){if(e===null)throw Error(m(308));xt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else xt=xt.next=t;return a}var xh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Bh=A.unstable_scheduleCallback,Lh=A.unstable_NormalPriority,we={$$typeof:xe,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Oo(){return{controller:new xh,data:new Map,refCount:0}}function Vn(e){e.refCount--,e.refCount===0&&Bh(Lh,function(){e.controller.abort()})}var In=null,No=0,un=0,rn=null;function qh(e,t){if(In===null){var a=In=[];No=0,un=xu(),rn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return No++,t.then(Ss,Ss),t}function Ss(){if(--No===0&&In!==null){rn!==null&&(rn.status="fulfilled");var e=In;In=null,un=0,rn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function jh(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var ws=v.S;v.S=function(e,t){lf=Ke(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&qh(e,t),ws!==null&&ws(e,t)};var Na=c(null);function Ho(){var e=Na.current;return e!==null?e:fe.pooledCache}function Wi(e,t){t===null?E(Na,Na.current):E(Na,t.pool)}function Ts(){var e=Ho();return e===null?null:{parent:we._currentValue,pool:e}}var sn=Error(m(460)),zo=Error(m(474)),Xi=Error(m(542)),Zi={then:function(){}};function As(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Cs(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Ot,Ot),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Es(e),e;default:if(typeof t.status=="string")t.then(Ot,Ot);else{if(e=fe,e!==null&&100<e.shellSuspendCounter)throw Error(m(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Es(e),e}throw za=t,sn}}function Ha(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(za=a,sn):a}}var za=null;function _s(){if(za===null)throw Error(m(459));var e=za;return za=null,e}function Es(e){if(e===sn||e===Xi)throw Error(m(483))}var cn=null,Wn=0;function Pi(e){var t=Wn;return Wn+=1,cn===null&&(cn=[]),Cs(cn,e,t)}function Xn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ki(e,t){throw t.$$typeof===$?Error(m(525)):(e=Object.prototype.toString.call(t),Error(m(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ds(e){function t(f,s){if(e){var d=f.deletions;d===null?(f.deletions=[s],f.flags|=16):d.push(s)}}function a(f,s){if(!e)return null;for(;s!==null;)t(f,s),s=s.sibling;return null}function n(f){for(var s=new Map;f!==null;)f.key!==null?s.set(f.key,f):s.set(f.index,f),f=f.sibling;return s}function i(f,s){return f=Ht(f,s),f.index=0,f.sibling=null,f}function l(f,s,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<s?(f.flags|=67108866,s):d):(f.flags|=67108866,s)):(f.flags|=1048576,s)}function o(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function u(f,s,d,b){return s===null||s.tag!==6?(s=To(d,f.mode,b),s.return=f,s):(s=i(s,d),s.return=f,s)}function r(f,s,d,b){var O=d.type;return O===Ee?g(f,s,d.props.children,b,d.key):s!==null&&(s.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Ue&&Ha(O)===s.type)?(s=i(s,d.props),Xn(s,d),s.return=f,s):(s=Yi(d.type,d.key,d.props,null,f.mode,b),Xn(s,d),s.return=f,s)}function h(f,s,d,b){return s===null||s.tag!==4||s.stateNode.containerInfo!==d.containerInfo||s.stateNode.implementation!==d.implementation?(s=Ao(d,f.mode,b),s.return=f,s):(s=i(s,d.children||[]),s.return=f,s)}function g(f,s,d,b,O){return s===null||s.tag!==7?(s=ka(d,f.mode,b,O),s.return=f,s):(s=i(s,d),s.return=f,s)}function w(f,s,d){if(typeof s=="string"&&s!==""||typeof s=="number"||typeof s=="bigint")return s=To(""+s,f.mode,d),s.return=f,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case ze:return d=Yi(s.type,s.key,s.props,null,f.mode,d),Xn(d,s),d.return=f,d;case ge:return s=Ao(s,f.mode,d),s.return=f,s;case Ue:return s=Ha(s),w(f,s,d)}if(gt(s)||Ge(s))return s=ka(s,f.mode,d,null),s.return=f,s;if(typeof s.then=="function")return w(f,Pi(s),d);if(s.$$typeof===xe)return w(f,Ii(f,s),d);Ki(f,s)}return null}function y(f,s,d,b){var O=s!==null?s.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return O!==null?null:u(f,s,""+d,b);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ze:return d.key===O?r(f,s,d,b):null;case ge:return d.key===O?h(f,s,d,b):null;case Ue:return d=Ha(d),y(f,s,d,b)}if(gt(d)||Ge(d))return O!==null?null:g(f,s,d,b,null);if(typeof d.then=="function")return y(f,s,Pi(d),b);if(d.$$typeof===xe)return y(f,s,Ii(f,d),b);Ki(f,d)}return null}function p(f,s,d,b,O){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return f=f.get(d)||null,u(s,f,""+b,O);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ze:return f=f.get(b.key===null?d:b.key)||null,r(s,f,b,O);case ge:return f=f.get(b.key===null?d:b.key)||null,h(s,f,b,O);case Ue:return b=Ha(b),p(f,s,d,b,O)}if(gt(b)||Ge(b))return f=f.get(d)||null,g(s,f,b,O,null);if(typeof b.then=="function")return p(f,s,d,Pi(b),O);if(b.$$typeof===xe)return p(f,s,d,Ii(s,b),O);Ki(s,b)}return null}function k(f,s,d,b){for(var O=null,F=null,M=s,Y=s=0,X=null;M!==null&&Y<d.length;Y++){M.index>Y?(X=M,M=null):X=M.sibling;var J=y(f,M,d[Y],b);if(J===null){M===null&&(M=X);break}e&&M&&J.alternate===null&&t(f,M),s=l(J,s,Y),F===null?O=J:F.sibling=J,F=J,M=X}if(Y===d.length)return a(f,M),P&&zt(f,Y),O;if(M===null){for(;Y<d.length;Y++)M=w(f,d[Y],b),M!==null&&(s=l(M,s,Y),F===null?O=M:F.sibling=M,F=M);return P&&zt(f,Y),O}for(M=n(M);Y<d.length;Y++)X=p(M,f,Y,d[Y],b),X!==null&&(e&&X.alternate!==null&&M.delete(X.key===null?Y:X.key),s=l(X,s,Y),F===null?O=X:F.sibling=X,F=X);return e&&M.forEach(function(ba){return t(f,ba)}),P&&zt(f,Y),O}function z(f,s,d,b){if(d==null)throw Error(m(151));for(var O=null,F=null,M=s,Y=s=0,X=null,J=d.next();M!==null&&!J.done;Y++,J=d.next()){M.index>Y?(X=M,M=null):X=M.sibling;var ba=y(f,M,J.value,b);if(ba===null){M===null&&(M=X);break}e&&M&&ba.alternate===null&&t(f,M),s=l(ba,s,Y),F===null?O=ba:F.sibling=ba,F=ba,M=X}if(J.done)return a(f,M),P&&zt(f,Y),O;if(M===null){for(;!J.done;Y++,J=d.next())J=w(f,J.value,b),J!==null&&(s=l(J,s,Y),F===null?O=J:F.sibling=J,F=J);return P&&zt(f,Y),O}for(M=n(M);!J.done;Y++,J=d.next())J=p(M,f,Y,J.value,b),J!==null&&(e&&J.alternate!==null&&M.delete(J.key===null?Y:J.key),s=l(J,s,Y),F===null?O=J:F.sibling=J,F=J);return e&&M.forEach(function(Km){return t(f,Km)}),P&&zt(f,Y),O}function se(f,s,d,b){if(typeof d=="object"&&d!==null&&d.type===Ee&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case ze:e:{for(var O=d.key;s!==null;){if(s.key===O){if(O=d.type,O===Ee){if(s.tag===7){a(f,s.sibling),b=i(s,d.props.children),b.return=f,f=b;break e}}else if(s.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Ue&&Ha(O)===s.type){a(f,s.sibling),b=i(s,d.props),Xn(b,d),b.return=f,f=b;break e}a(f,s);break}else t(f,s);s=s.sibling}d.type===Ee?(b=ka(d.props.children,f.mode,b,d.key),b.return=f,f=b):(b=Yi(d.type,d.key,d.props,null,f.mode,b),Xn(b,d),b.return=f,f=b)}return o(f);case ge:e:{for(O=d.key;s!==null;){if(s.key===O)if(s.tag===4&&s.stateNode.containerInfo===d.containerInfo&&s.stateNode.implementation===d.implementation){a(f,s.sibling),b=i(s,d.children||[]),b.return=f,f=b;break e}else{a(f,s);break}else t(f,s);s=s.sibling}b=Ao(d,f.mode,b),b.return=f,f=b}return o(f);case Ue:return d=Ha(d),se(f,s,d,b)}if(gt(d))return k(f,s,d,b);if(Ge(d)){if(O=Ge(d),typeof O!="function")throw Error(m(150));return d=O.call(d),z(f,s,d,b)}if(typeof d.then=="function")return se(f,s,Pi(d),b);if(d.$$typeof===xe)return se(f,s,Ii(f,d),b);Ki(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,s!==null&&s.tag===6?(a(f,s.sibling),b=i(s,d),b.return=f,f=b):(a(f,s),b=To(d,f.mode,b),b.return=f,f=b),o(f)):a(f,s)}return function(f,s,d,b){try{Wn=0;var O=se(f,s,d,b);return cn=null,O}catch(M){if(M===sn||M===Xi)throw M;var F=et(29,M,null,f.mode);return F.lanes=b,F.return=f,F}finally{}}}var xa=Ds(!0),ks=Ds(!1),aa=!1;function xo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ia(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(ee&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=Gi(e),fs(e,null,a),t}return Ui(e,n,t,a),Gi(e)}function Zn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,br(e,a)}}function Lo(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,l=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};l===null?i=l=o:l=l.next=o,a=a.next}while(a!==null);l===null?i=l=t:l=l.next=t}else i=l=t;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var qo=!1;function Pn(){if(qo){var e=rn;if(e!==null)throw e}}function Kn(e,t,a,n){qo=!1;var i=e.updateQueue;aa=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var r=u,h=r.next;r.next=null,o===null?l=h:o.next=h,o=r;var g=e.alternate;g!==null&&(g=g.updateQueue,u=g.lastBaseUpdate,u!==o&&(u===null?g.firstBaseUpdate=h:u.next=h,g.lastBaseUpdate=r))}if(l!==null){var w=i.baseState;o=0,g=h=r=null,u=l;do{var y=u.lane&-536870913,p=y!==u.lane;if(p?(W&y)===y:(n&y)===y){y!==0&&y===un&&(qo=!0),g!==null&&(g=g.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var k=e,z=u;y=t;var se=a;switch(z.tag){case 1:if(k=z.payload,typeof k=="function"){w=k.call(se,w,y);break e}w=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=z.payload,y=typeof k=="function"?k.call(se,w,y):k,y==null)break e;w=N({},w,y);break e;case 2:aa=!0}}y=u.callback,y!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[y]:p.push(y))}else p={lane:y,tag:u.tag,payload:u.payload,callback:u.callback,next:null},g===null?(h=g=p,r=w):g=g.next=p,o|=y;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;p=u,u=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);g===null&&(r=w),i.baseState=r,i.firstBaseUpdate=h,i.lastBaseUpdate=g,l===null&&(i.shared.lanes=0),sa|=o,e.lanes=o,e.memoizedState=w}}function Rs(e,t){if(typeof e!="function")throw Error(m(191,e));e.call(t)}function Ms(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Rs(a[e],t)}var fn=c(null),Fi=c(0);function Os(e,t){e=It,E(Fi,e),E(fn,t),It=e|t.baseLanes}function jo(){E(Fi,It),E(fn,fn.current)}function Uo(){It=Fi.current,T(fn),T(Fi)}var tt=c(null),mt=null;function la(e){var t=e.alternate;E(be,be.current&1),E(tt,e),mt===null&&(t===null||fn.current!==null||t.memoizedState!==null)&&(mt=e)}function Go(e){E(be,be.current),E(tt,e),mt===null&&(mt=e)}function Ns(e){e.tag===22?(E(be,be.current),E(tt,e),mt===null&&(mt=e)):oa()}function oa(){E(be,be.current),E(tt,tt.current)}function at(e){T(tt),mt===e&&(mt=null),T(be)}var be=c(0);function Ji(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Xu(a)||Zu(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Lt=0,G=null,ue=null,Te=null,$i=!1,dn=!1,Ba=!1,el=0,Fn=0,hn=null,Uh=0;function ye(){throw Error(m(321))}function Yo(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!$e(e[a],t[a]))return!1;return!0}function Qo(e,t,a,n,i,l){return Lt=l,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,v.H=e===null||e.memoizedState===null?yc:iu,Ba=!1,l=a(n,i),Ba=!1,dn&&(l=zs(t,a,n,i)),Hs(e),l}function Hs(e){v.H=ei;var t=ue!==null&&ue.next!==null;if(Lt=0,Te=ue=G=null,$i=!1,Fn=0,hn=null,t)throw Error(m(300));e===null||Ae||(e=e.dependencies,e!==null&&Vi(e)&&(Ae=!0))}function zs(e,t,a,n){G=e;var i=0;do{if(dn&&(hn=null),Fn=0,dn=!1,25<=i)throw Error(m(301));if(i+=1,Te=ue=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}v.H=pc,l=t(a,n)}while(dn);return l}function Gh(){var e=v.H,t=e.useState()[0];return t=typeof t.then=="function"?Jn(t):t,e=e.useState()[0],(ue!==null?ue.memoizedState:null)!==e&&(G.flags|=1024),t}function Vo(){var e=el!==0;return el=0,e}function Io(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Wo(e){if($i){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}$i=!1}Lt=0,Te=ue=G=null,dn=!1,Fn=el=0,hn=null}function qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?G.memoizedState=Te=e:Te=Te.next=e,Te}function Se(){if(ue===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=Te===null?G.memoizedState:Te.next;if(t!==null)Te=t,ue=e;else{if(e===null)throw G.alternate===null?Error(m(467)):Error(m(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},Te===null?G.memoizedState=Te=e:Te=Te.next=e}return Te}function tl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Jn(e){var t=Fn;return Fn+=1,hn===null&&(hn=[]),e=Cs(hn,e,t),t=G,(Te===null?t.memoizedState:Te.next)===null&&(t=t.alternate,v.H=t===null||t.memoizedState===null?yc:iu),e}function al(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Jn(e);if(e.$$typeof===xe)return Oe(e)}throw Error(m(438,String(e)))}function Xo(e){var t=null,a=G.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=G.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=tl(),G.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=Ga;return t.index++,a}function qt(e,t){return typeof t=="function"?t(e):t}function nl(e){var t=Se();return Zo(t,ue,e)}function Zo(e,t,a){var n=e.queue;if(n===null)throw Error(m(311));n.lastRenderedReducer=a;var i=e.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}t.baseQueue=i=l,n.pending=null}if(l=e.baseState,i===null)e.memoizedState=l;else{t=i.next;var u=o=null,r=null,h=t,g=!1;do{var w=h.lane&-536870913;if(w!==h.lane?(W&w)===w:(Lt&w)===w){var y=h.revertLane;if(y===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),w===un&&(g=!0);else if((Lt&y)===y){h=h.next,y===un&&(g=!0);continue}else w={lane:0,revertLane:h.revertLane,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},r===null?(u=r=w,o=l):r=r.next=w,G.lanes|=y,sa|=y;w=h.action,Ba&&a(l,w),l=h.hasEagerState?h.eagerState:a(l,w)}else y={lane:w,revertLane:h.revertLane,gesture:h.gesture,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},r===null?(u=r=y,o=l):r=r.next=y,G.lanes|=w,sa|=w;h=h.next}while(h!==null&&h!==t);if(r===null?o=l:r.next=u,!$e(l,e.memoizedState)&&(Ae=!0,g&&(a=rn,a!==null)))throw a;e.memoizedState=l,e.baseState=o,e.baseQueue=r,n.lastRenderedState=l}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Po(e){var t=Se(),a=t.queue;if(a===null)throw Error(m(311));a.lastRenderedReducer=e;var n=a.dispatch,i=a.pending,l=t.memoizedState;if(i!==null){a.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);$e(l,t.memoizedState)||(Ae=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),a.lastRenderedState=l}return[l,n]}function xs(e,t,a){var n=G,i=Se(),l=P;if(l){if(a===void 0)throw Error(m(407));a=a()}else a=t();var o=!$e((ue||i).memoizedState,a);if(o&&(i.memoizedState=a,Ae=!0),i=i.queue,Jo(qs.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||Te!==null&&Te.memoizedState.tag&1){if(n.flags|=2048,mn(9,{destroy:void 0},Ls.bind(null,n,i,a,t),null),fe===null)throw Error(m(349));l||(Lt&127)!==0||Bs(n,t,a)}return a}function Bs(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=G.updateQueue,t===null?(t=tl(),G.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Ls(e,t,a,n){t.value=a,t.getSnapshot=n,js(t)&&Us(e)}function qs(e,t,a){return a(function(){js(t)&&Us(e)})}function js(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!$e(e,a)}catch{return!0}}function Us(e){var t=Da(e,2);t!==null&&Ze(t,e,2)}function Ko(e){var t=qe();if(typeof e=="function"){var a=e;if(e=a(),Ba){Pt(!0);try{a()}finally{Pt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:e},t}function Gs(e,t,a,n){return e.baseState=a,Zo(e,ue,typeof n=="function"?n:qt)}function Yh(e,t,a,n,i){if(ol(e))throw Error(m(485));if(e=t.action,e!==null){var l={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){l.listeners.push(o)}};v.T!==null?a(!0):l.isTransition=!1,n(l),a=t.pending,a===null?(l.next=t.pending=l,Ys(t,l)):(l.next=a.next,t.pending=a.next=l)}}function Ys(e,t){var a=t.action,n=t.payload,i=e.state;if(t.isTransition){var l=v.T,o={};v.T=o;try{var u=a(i,n),r=v.S;r!==null&&r(o,u),Qs(e,t,u)}catch(h){Fo(e,t,h)}finally{l!==null&&o.types!==null&&(l.types=o.types),v.T=l}}else try{l=a(i,n),Qs(e,t,l)}catch(h){Fo(e,t,h)}}function Qs(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){Vs(e,t,n)},function(n){return Fo(e,t,n)}):Vs(e,t,a)}function Vs(e,t,a){t.status="fulfilled",t.value=a,Is(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Ys(e,a)))}function Fo(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,Is(t),t=t.next;while(t!==n)}e.action=null}function Is(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ws(e,t){return t}function Xs(e,t){if(P){var a=fe.formState;if(a!==null){e:{var n=G;if(P){if(de){t:{for(var i=de,l=ht;i.nodeType!==8;){if(!l){i=null;break t}if(i=yt(i.nextSibling),i===null){i=null;break t}}l=i.data,i=l==="F!"||l==="F"?i:null}if(i){de=yt(i.nextSibling),n=i.data==="F!";break e}}ea(n)}n=!1}n&&(t=a[0])}}return a=qe(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ws,lastRenderedState:t},a.queue=n,a=dc.bind(null,G,n),n.dispatch=a,n=Ko(!1),l=nu.bind(null,G,!1,n.queue),n=qe(),i={state:t,dispatch:null,action:e,pending:null},n.queue=i,a=Yh.bind(null,G,i,l,a),i.dispatch=a,n.memoizedState=e,[t,a,!1]}function Zs(e){var t=Se();return Ps(t,ue,e)}function Ps(e,t,a){if(t=Zo(e,t,Ws)[0],e=nl(qt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=Jn(t)}catch(o){throw o===sn?Xi:o}else n=t;t=Se();var i=t.queue,l=i.dispatch;return a!==t.memoizedState&&(G.flags|=2048,mn(9,{destroy:void 0},Qh.bind(null,i,a),null)),[n,l,e]}function Qh(e,t){e.action=t}function Ks(e){var t=Se(),a=ue;if(a!==null)return Ps(t,a,e);Se(),t=t.memoizedState,a=Se();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function mn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=G.updateQueue,t===null&&(t=tl(),G.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function Fs(){return Se().memoizedState}function il(e,t,a,n){var i=qe();G.flags|=e,i.memoizedState=mn(1|t,{destroy:void 0},a,n===void 0?null:n)}function ll(e,t,a,n){var i=Se();n=n===void 0?null:n;var l=i.memoizedState.inst;ue!==null&&n!==null&&Yo(n,ue.memoizedState.deps)?i.memoizedState=mn(t,l,a,n):(G.flags|=e,i.memoizedState=mn(1|t,l,a,n))}function Js(e,t){il(8390656,8,e,t)}function Jo(e,t){ll(2048,8,e,t)}function Vh(e){G.flags|=4;var t=G.updateQueue;if(t===null)t=tl(),G.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function $s(e){var t=Se().memoizedState;return Vh({ref:t,nextImpl:e}),function(){if((ee&2)!==0)throw Error(m(440));return t.impl.apply(void 0,arguments)}}function ec(e,t){return ll(4,2,e,t)}function tc(e,t){return ll(4,4,e,t)}function ac(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function nc(e,t,a){a=a!=null?a.concat([e]):null,ll(4,4,ac.bind(null,t,e),a)}function $o(){}function ic(e,t){var a=Se();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&Yo(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function lc(e,t){var a=Se();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&Yo(t,n[1]))return n[0];if(n=e(),Ba){Pt(!0);try{e()}finally{Pt(!1)}}return a.memoizedState=[n,t],n}function eu(e,t,a){return a===void 0||(Lt&1073741824)!==0&&(W&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=uf(),G.lanes|=e,sa|=e,a)}function oc(e,t,a,n){return $e(a,t)?a:fn.current!==null?(e=eu(e,a,n),$e(e,t)||(Ae=!0),e):(Lt&42)===0||(Lt&1073741824)!==0&&(W&261930)===0?(Ae=!0,e.memoizedState=a):(e=uf(),G.lanes|=e,sa|=e,t)}function uc(e,t,a,n,i){var l=_.p;_.p=l!==0&&8>l?l:8;var o=v.T,u={};v.T=u,nu(e,!1,t,a);try{var r=i(),h=v.S;if(h!==null&&h(u,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var g=jh(r,n);$n(e,t,g,lt(e))}else $n(e,t,n,lt(e))}catch(w){$n(e,t,{then:function(){},status:"rejected",reason:w},lt())}finally{_.p=l,o!==null&&u.types!==null&&(o.types=u.types),v.T=o}}function Ih(){}function tu(e,t,a,n){if(e.tag!==5)throw Error(m(476));var i=rc(e).queue;uc(e,i,t,x,a===null?Ih:function(){return sc(e),a(n)})}function rc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:x,baseState:x,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:x},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function sc(e){var t=rc(e);t.next===null&&(t=e.alternate.memoizedState),$n(e,t.next.queue,{},lt())}function au(){return Oe(pi)}function cc(){return Se().memoizedState}function fc(){return Se().memoizedState}function Wh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=lt();e=na(a);var n=ia(t,e,a);n!==null&&(Ze(n,t,a),Zn(n,t,a)),t={cache:Oo()},e.payload=t;return}t=t.return}}function Xh(e,t,a){var n=lt();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ol(e)?hc(t,a):(a=So(e,t,a,n),a!==null&&(Ze(a,e,n),mc(a,t,n)))}function dc(e,t,a){var n=lt();$n(e,t,a,n)}function $n(e,t,a,n){var i={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ol(e))hc(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,u=l(o,a);if(i.hasEagerState=!0,i.eagerState=u,$e(u,o))return Ui(e,t,i,0),fe===null&&ji(),!1}catch{}finally{}if(a=So(e,t,i,n),a!==null)return Ze(a,e,n),mc(a,t,n),!0}return!1}function nu(e,t,a,n){if(n={lane:2,revertLane:xu(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ol(e)){if(t)throw Error(m(479))}else t=So(e,a,n,2),t!==null&&Ze(t,e,2)}function ol(e){var t=e.alternate;return e===G||t!==null&&t===G}function hc(e,t){dn=$i=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function mc(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,br(e,a)}}var ei={readContext:Oe,use:al,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useLayoutEffect:ye,useInsertionEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useSyncExternalStore:ye,useId:ye,useHostTransitionStatus:ye,useFormState:ye,useActionState:ye,useOptimistic:ye,useMemoCache:ye,useCacheRefresh:ye};ei.useEffectEvent=ye;var yc={readContext:Oe,use:al,useCallback:function(e,t){return qe().memoizedState=[e,t===void 0?null:t],e},useContext:Oe,useEffect:Js,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,il(4194308,4,ac.bind(null,t,e),a)},useLayoutEffect:function(e,t){return il(4194308,4,e,t)},useInsertionEffect:function(e,t){il(4,2,e,t)},useMemo:function(e,t){var a=qe();t=t===void 0?null:t;var n=e();if(Ba){Pt(!0);try{e()}finally{Pt(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=qe();if(a!==void 0){var i=a(t);if(Ba){Pt(!0);try{a(t)}finally{Pt(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=Xh.bind(null,G,e),[n.memoizedState,e]},useRef:function(e){var t=qe();return e={current:e},t.memoizedState=e},useState:function(e){e=Ko(e);var t=e.queue,a=dc.bind(null,G,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:$o,useDeferredValue:function(e,t){var a=qe();return eu(a,e,t)},useTransition:function(){var e=Ko(!1);return e=uc.bind(null,G,e.queue,!0,!1),qe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=G,i=qe();if(P){if(a===void 0)throw Error(m(407));a=a()}else{if(a=t(),fe===null)throw Error(m(349));(W&127)!==0||Bs(n,t,a)}i.memoizedState=a;var l={value:a,getSnapshot:t};return i.queue=l,Js(qs.bind(null,n,l,e),[e]),n.flags|=2048,mn(9,{destroy:void 0},Ls.bind(null,n,l,a,t),null),a},useId:function(){var e=qe(),t=fe.identifierPrefix;if(P){var a=_t,n=Ct;a=(n&~(1<<32-Je(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=el++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Uh++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:au,useFormState:Xs,useActionState:Xs,useOptimistic:function(e){var t=qe();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=nu.bind(null,G,!0,a),a.dispatch=t,[e,t]},useMemoCache:Xo,useCacheRefresh:function(){return qe().memoizedState=Wh.bind(null,G)},useEffectEvent:function(e){var t=qe(),a={impl:e};return t.memoizedState=a,function(){if((ee&2)!==0)throw Error(m(440));return a.impl.apply(void 0,arguments)}}},iu={readContext:Oe,use:al,useCallback:ic,useContext:Oe,useEffect:Jo,useImperativeHandle:nc,useInsertionEffect:ec,useLayoutEffect:tc,useMemo:lc,useReducer:nl,useRef:Fs,useState:function(){return nl(qt)},useDebugValue:$o,useDeferredValue:function(e,t){var a=Se();return oc(a,ue.memoizedState,e,t)},useTransition:function(){var e=nl(qt)[0],t=Se().memoizedState;return[typeof e=="boolean"?e:Jn(e),t]},useSyncExternalStore:xs,useId:cc,useHostTransitionStatus:au,useFormState:Zs,useActionState:Zs,useOptimistic:function(e,t){var a=Se();return Gs(a,ue,e,t)},useMemoCache:Xo,useCacheRefresh:fc};iu.useEffectEvent=$s;var pc={readContext:Oe,use:al,useCallback:ic,useContext:Oe,useEffect:Jo,useImperativeHandle:nc,useInsertionEffect:ec,useLayoutEffect:tc,useMemo:lc,useReducer:Po,useRef:Fs,useState:function(){return Po(qt)},useDebugValue:$o,useDeferredValue:function(e,t){var a=Se();return ue===null?eu(a,e,t):oc(a,ue.memoizedState,e,t)},useTransition:function(){var e=Po(qt)[0],t=Se().memoizedState;return[typeof e=="boolean"?e:Jn(e),t]},useSyncExternalStore:xs,useId:cc,useHostTransitionStatus:au,useFormState:Ks,useActionState:Ks,useOptimistic:function(e,t){var a=Se();return ue!==null?Gs(a,ue,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Xo,useCacheRefresh:fc};pc.useEffectEvent=$s;function lu(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:N({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ou={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=lt(),i=na(n);i.payload=t,a!=null&&(i.callback=a),t=ia(e,i,n),t!==null&&(Ze(t,e,n),Zn(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=lt(),i=na(n);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=ia(e,i,n),t!==null&&(Ze(t,e,n),Zn(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=lt(),n=na(a);n.tag=2,t!=null&&(n.callback=t),t=ia(e,n,a),t!==null&&(Ze(t,e,a),Zn(t,e,a))}};function gc(e,t,a,n,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,l,o):t.prototype&&t.prototype.isPureReactComponent?!Un(a,n)||!Un(i,l):!0}function vc(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&ou.enqueueReplaceState(t,t.state,null)}function La(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=N({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}function bc(e){qi(e)}function Sc(e){console.error(e)}function wc(e){qi(e)}function ul(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Tc(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function uu(e,t,a){return a=na(a),a.tag=3,a.payload={element:null},a.callback=function(){ul(e,t)},a}function Ac(e){return e=na(e),e.tag=3,e}function Cc(e,t,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var l=n.value;e.payload=function(){return i(l)},e.callback=function(){Tc(t,a,n)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){Tc(t,a,n),typeof i!="function"&&(ca===null?ca=new Set([this]):ca.add(this));var u=n.stack;this.componentDidCatch(n.value,{componentStack:u!==null?u:""})})}function Zh(e,t,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&on(t,a,i,!0),a=tt.current,a!==null){switch(a.tag){case 31:case 13:return mt===null?bl():a.alternate===null&&pe===0&&(pe=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===Zi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),Nu(e,n,i)),!1;case 22:return a.flags|=65536,n===Zi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),Nu(e,n,i)),!1}throw Error(m(435,a.tag))}return Nu(e,n,i),bl(),!1}if(P)return t=tt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==Eo&&(e=Error(m(422),{cause:n}),Qn(ct(e,a)))):(n!==Eo&&(t=Error(m(423),{cause:n}),Qn(ct(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=ct(n,a),i=uu(e.stateNode,n,i),Lo(e,i),pe!==4&&(pe=2)),!1;var l=Error(m(520),{cause:n});if(l=ct(l,a),ri===null?ri=[l]:ri.push(l),pe!==4&&(pe=2),t===null)return!0;n=ct(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=uu(a.stateNode,n,e),Lo(a,e),!1;case 1:if(t=a.type,l=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(ca===null||!ca.has(l))))return a.flags|=65536,i&=-i,a.lanes|=i,i=Ac(i),Cc(i,e,a,n),Lo(a,i),!1}a=a.return}while(a!==null);return!1}var ru=Error(m(461)),Ae=!1;function Ne(e,t,a,n){t.child=e===null?ks(t,null,a,n):xa(t,e.child,a,n)}function _c(e,t,a,n,i){a=a.render;var l=t.ref;if("ref"in n){var o={};for(var u in n)u!=="ref"&&(o[u]=n[u])}else o=n;return Oa(t),n=Qo(e,t,a,o,l,i),u=Vo(),e!==null&&!Ae?(Io(e,t,i),jt(e,t,i)):(P&&u&&Co(t),t.flags|=1,Ne(e,t,n,i),t.child)}function Ec(e,t,a,n,i){if(e===null){var l=a.type;return typeof l=="function"&&!wo(l)&&l.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=l,Dc(e,t,l,n,i)):(e=Yi(a.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!pu(e,i)){var o=l.memoizedProps;if(a=a.compare,a=a!==null?a:Un,a(o,n)&&e.ref===t.ref)return jt(e,t,i)}return t.flags|=1,e=Ht(l,n),e.ref=t.ref,e.return=t,t.child=e}function Dc(e,t,a,n,i){if(e!==null){var l=e.memoizedProps;if(Un(l,n)&&e.ref===t.ref)if(Ae=!1,t.pendingProps=n=l,pu(e,i))(e.flags&131072)!==0&&(Ae=!0);else return t.lanes=e.lanes,jt(e,t,i)}return su(e,t,a,n,i)}function kc(e,t,a,n){var i=n.children,l=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(l=l!==null?l.baseLanes|a:a,e!==null){for(n=t.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;n=i&~l}else n=0,t.child=null;return Rc(e,t,l,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Wi(t,l!==null?l.cachePool:null),l!==null?Os(t,l):jo(),Ns(t);else return n=t.lanes=536870912,Rc(e,t,l!==null?l.baseLanes|a:a,a,n)}else l!==null?(Wi(t,l.cachePool),Os(t,l),oa(),t.memoizedState=null):(e!==null&&Wi(t,null),jo(),oa());return Ne(e,t,i,a),t.child}function ti(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Rc(e,t,a,n,i){var l=Ho();return l=l===null?null:{parent:we._currentValue,pool:l},t.memoizedState={baseLanes:a,cachePool:l},e!==null&&Wi(t,null),jo(),Ns(t),e!==null&&on(e,t,n,!0),t.childLanes=i,null}function rl(e,t){return t=cl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Mc(e,t,a){return xa(t,e.child,null,a),e=rl(t,t.pendingProps),e.flags|=2,at(t),t.memoizedState=null,e}function Ph(e,t,a){var n=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(P){if(n.mode==="hidden")return e=rl(t,n),t.lanes=536870912,ti(null,e);if(Go(t),(e=de)?(e=Qf(e,ht),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Jt!==null?{id:Ct,overflow:_t}:null,retryLane:536870912,hydrationErrors:null},a=hs(e),a.return=t,t.child=a,Me=t,de=null)):e=null,e===null)throw ea(t);return t.lanes=536870912,null}return rl(t,n)}var l=e.memoizedState;if(l!==null){var o=l.dehydrated;if(Go(t),i)if(t.flags&256)t.flags&=-257,t=Mc(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(m(558));else if(Ae||on(e,t,a,!1),i=(a&e.childLanes)!==0,Ae||i){if(n=fe,n!==null&&(o=Sr(n,a),o!==0&&o!==l.retryLane))throw l.retryLane=o,Da(e,o),Ze(n,e,o),ru;bl(),t=Mc(e,t,a)}else e=l.treeContext,de=yt(o.nextSibling),Me=t,P=!0,$t=null,ht=!1,e!==null&&ps(t,e),t=rl(t,n),t.flags|=4096;return t}return e=Ht(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function sl(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(m(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function su(e,t,a,n,i){return Oa(t),a=Qo(e,t,a,n,void 0,i),n=Vo(),e!==null&&!Ae?(Io(e,t,i),jt(e,t,i)):(P&&n&&Co(t),t.flags|=1,Ne(e,t,a,i),t.child)}function Oc(e,t,a,n,i,l){return Oa(t),t.updateQueue=null,a=zs(t,n,a,i),Hs(e),n=Vo(),e!==null&&!Ae?(Io(e,t,l),jt(e,t,l)):(P&&n&&Co(t),t.flags|=1,Ne(e,t,a,l),t.child)}function Nc(e,t,a,n,i){if(Oa(t),t.stateNode===null){var l=tn,o=a.contextType;typeof o=="object"&&o!==null&&(l=Oe(o)),l=new a(n,l),t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=ou,t.stateNode=l,l._reactInternals=t,l=t.stateNode,l.props=n,l.state=t.memoizedState,l.refs={},xo(t),o=a.contextType,l.context=typeof o=="object"&&o!==null?Oe(o):tn,l.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(lu(t,a,o,n),l.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(o=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),o!==l.state&&ou.enqueueReplaceState(l,l.state,null),Kn(t,n,l,i),Pn(),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){l=t.stateNode;var u=t.memoizedProps,r=La(a,u);l.props=r;var h=l.context,g=a.contextType;o=tn,typeof g=="object"&&g!==null&&(o=Oe(g));var w=a.getDerivedStateFromProps;g=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,g||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u||h!==o)&&vc(t,l,n,o),aa=!1;var y=t.memoizedState;l.state=y,Kn(t,n,l,i),Pn(),h=t.memoizedState,u||y!==h||aa?(typeof w=="function"&&(lu(t,a,w,n),h=t.memoizedState),(r=aa||gc(t,a,r,n,y,h,o))?(g||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=h),l.props=n,l.state=h,l.context=o,n=r):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{l=t.stateNode,Bo(e,t),o=t.memoizedProps,g=La(a,o),l.props=g,w=t.pendingProps,y=l.context,h=a.contextType,r=tn,typeof h=="object"&&h!==null&&(r=Oe(h)),u=a.getDerivedStateFromProps,(h=typeof u=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==w||y!==r)&&vc(t,l,n,r),aa=!1,y=t.memoizedState,l.state=y,Kn(t,n,l,i),Pn();var p=t.memoizedState;o!==w||y!==p||aa||e!==null&&e.dependencies!==null&&Vi(e.dependencies)?(typeof u=="function"&&(lu(t,a,u,n),p=t.memoizedState),(g=aa||gc(t,a,g,n,y,p,r)||e!==null&&e.dependencies!==null&&Vi(e.dependencies))?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,p,r),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,p,r)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=p),l.props=n,l.state=p,l.context=r,n=g):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),n=!1)}return l=n,sl(e,t),n=(t.flags&128)!==0,l||n?(l=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:l.render(),t.flags|=1,e!==null&&n?(t.child=xa(t,e.child,null,i),t.child=xa(t,null,a,i)):Ne(e,t,a,i),t.memoizedState=l.state,e=t.child):e=jt(e,t,i),e}function Hc(e,t,a,n){return Ra(),t.flags|=256,Ne(e,t,a,n),t.child}var cu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function fu(e){return{baseLanes:e,cachePool:Ts()}}function du(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=it),e}function zc(e,t,a){var n=t.pendingProps,i=!1,l=(t.flags&128)!==0,o;if((o=l)||(o=e!==null&&e.memoizedState===null?!1:(be.current&2)!==0),o&&(i=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(P){if(i?la(t):oa(),(e=de)?(e=Qf(e,ht),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Jt!==null?{id:Ct,overflow:_t}:null,retryLane:536870912,hydrationErrors:null},a=hs(e),a.return=t,t.child=a,Me=t,de=null)):e=null,e===null)throw ea(t);return Zu(e)?t.lanes=32:t.lanes=536870912,null}var u=n.children;return n=n.fallback,i?(oa(),i=t.mode,u=cl({mode:"hidden",children:u},i),n=ka(n,i,a,null),u.return=t,n.return=t,u.sibling=n,t.child=u,n=t.child,n.memoizedState=fu(a),n.childLanes=du(e,o,a),t.memoizedState=cu,ti(null,n)):(la(t),hu(t,u))}var r=e.memoizedState;if(r!==null&&(u=r.dehydrated,u!==null)){if(l)t.flags&256?(la(t),t.flags&=-257,t=mu(e,t,a)):t.memoizedState!==null?(oa(),t.child=e.child,t.flags|=128,t=null):(oa(),u=n.fallback,i=t.mode,n=cl({mode:"visible",children:n.children},i),u=ka(u,i,a,null),u.flags|=2,n.return=t,u.return=t,n.sibling=u,t.child=n,xa(t,e.child,null,a),n=t.child,n.memoizedState=fu(a),n.childLanes=du(e,o,a),t.memoizedState=cu,t=ti(null,n));else if(la(t),Zu(u)){if(o=u.nextSibling&&u.nextSibling.dataset,o)var h=o.dgst;o=h,n=Error(m(419)),n.stack="",n.digest=o,Qn({value:n,source:null,stack:null}),t=mu(e,t,a)}else if(Ae||on(e,t,a,!1),o=(a&e.childLanes)!==0,Ae||o){if(o=fe,o!==null&&(n=Sr(o,a),n!==0&&n!==r.retryLane))throw r.retryLane=n,Da(e,n),Ze(o,e,n),ru;Xu(u)||bl(),t=mu(e,t,a)}else Xu(u)?(t.flags|=192,t.child=e.child,t=null):(e=r.treeContext,de=yt(u.nextSibling),Me=t,P=!0,$t=null,ht=!1,e!==null&&ps(t,e),t=hu(t,n.children),t.flags|=4096);return t}return i?(oa(),u=n.fallback,i=t.mode,r=e.child,h=r.sibling,n=Ht(r,{mode:"hidden",children:n.children}),n.subtreeFlags=r.subtreeFlags&65011712,h!==null?u=Ht(h,u):(u=ka(u,i,a,null),u.flags|=2),u.return=t,n.return=t,n.sibling=u,t.child=n,ti(null,n),n=t.child,u=e.child.memoizedState,u===null?u=fu(a):(i=u.cachePool,i!==null?(r=we._currentValue,i=i.parent!==r?{parent:r,pool:r}:i):i=Ts(),u={baseLanes:u.baseLanes|a,cachePool:i}),n.memoizedState=u,n.childLanes=du(e,o,a),t.memoizedState=cu,ti(e.child,n)):(la(t),a=e.child,e=a.sibling,a=Ht(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function hu(e,t){return t=cl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function cl(e,t){return e=et(22,e,null,t),e.lanes=0,e}function mu(e,t,a){return xa(t,e.child,null,a),e=hu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xc(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Ro(e.return,t,a)}function yu(e,t,a,n,i,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i,treeForkCount:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=a,o.tailMode=i,o.treeForkCount=l)}function Bc(e,t,a){var n=t.pendingProps,i=n.revealOrder,l=n.tail;n=n.children;var o=be.current,u=(o&2)!==0;if(u?(o=o&1|2,t.flags|=128):o&=1,E(be,o),Ne(e,t,n,a),n=P?Yn:0,!u&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xc(e,a,t);else if(e.tag===19)xc(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&Ji(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),yu(t,!1,i,a,l,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ji(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}yu(t,!0,a,null,l,n);break;case"together":yu(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function jt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),sa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(on(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(m(153));if(t.child!==null){for(e=t.child,a=Ht(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Ht(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function pu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Vi(e)))}function Kh(e,t,a){switch(t.tag){case 3:Le(t,t.stateNode.containerInfo),ta(t,we,e.memoizedState.cache),Ra();break;case 27:case 5:Dn(t);break;case 4:Le(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Go(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(la(t),t.flags|=128,null):(a&t.child.childLanes)!==0?zc(e,t,a):(la(t),e=jt(e,t,a),e!==null?e.sibling:null);la(t);break;case 19:var i=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(on(e,t,a,!1),n=(a&t.childLanes)!==0),i){if(n)return Bc(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),E(be,be.current),n)break;return null;case 22:return t.lanes=0,kc(e,t,a,t.pendingProps);case 24:ta(t,we,e.memoizedState.cache)}return jt(e,t,a)}function Lc(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ae=!0;else{if(!pu(e,a)&&(t.flags&128)===0)return Ae=!1,Kh(e,t,a);Ae=(e.flags&131072)!==0}else Ae=!1,P&&(t.flags&1048576)!==0&&ys(t,Yn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=Ha(t.elementType),t.type=e,typeof e=="function")wo(e)?(n=La(e,n),t.tag=1,t=Nc(null,t,e,n,a)):(t.tag=0,t=su(null,t,e,n,a));else{if(e!=null){var i=e.$$typeof;if(i===ot){t.tag=11,t=_c(null,t,e,n,a);break e}else if(i===Z){t.tag=14,t=Ec(null,t,e,n,a);break e}}throw t=Rt(e)||e,Error(m(306,t,""))}}return t;case 0:return su(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,i=La(n,t.pendingProps),Nc(e,t,n,i,a);case 3:e:{if(Le(t,t.stateNode.containerInfo),e===null)throw Error(m(387));n=t.pendingProps;var l=t.memoizedState;i=l.element,Bo(e,t),Kn(t,n,null,a);var o=t.memoizedState;if(n=o.cache,ta(t,we,n),n!==l.cache&&Mo(t,[we],a,!0),Pn(),n=o.element,l.isDehydrated)if(l={element:n,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){t=Hc(e,t,n,a);break e}else if(n!==i){i=ct(Error(m(424)),t),Qn(i),t=Hc(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(de=yt(e.firstChild),Me=t,P=!0,$t=null,ht=!0,a=ks(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ra(),n===i){t=jt(e,t,a);break e}Ne(e,t,n,a)}t=t.child}return t;case 26:return sl(e,t),e===null?(a=Pf(t.type,null,t.pendingProps,null))?t.memoizedState=a:P||(a=t.type,e=t.pendingProps,n=El(Q.current).createElement(a),n[Re]=t,n[Ye]=e,He(n,a,e),De(n),t.stateNode=n):t.memoizedState=Pf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Dn(t),e===null&&P&&(n=t.stateNode=Wf(t.type,t.pendingProps,Q.current),Me=t,ht=!0,i=de,ma(t.type)?(Pu=i,de=yt(n.firstChild)):de=i),Ne(e,t,t.pendingProps.children,a),sl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&P&&((i=n=de)&&(n=Em(n,t.type,t.pendingProps,ht),n!==null?(t.stateNode=n,Me=t,de=yt(n.firstChild),ht=!1,i=!0):i=!1),i||ea(t)),Dn(t),i=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,n=l.children,Vu(i,l)?n=null:o!==null&&Vu(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=Qo(e,t,Gh,null,null,a),pi._currentValue=i),sl(e,t),Ne(e,t,n,a),t.child;case 6:return e===null&&P&&((e=a=de)&&(a=Dm(a,t.pendingProps,ht),a!==null?(t.stateNode=a,Me=t,de=null,e=!0):e=!1),e||ea(t)),null;case 13:return zc(e,t,a);case 4:return Le(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=xa(t,null,n,a):Ne(e,t,n,a),t.child;case 11:return _c(e,t,t.type,t.pendingProps,a);case 7:return Ne(e,t,t.pendingProps,a),t.child;case 8:return Ne(e,t,t.pendingProps.children,a),t.child;case 12:return Ne(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,ta(t,t.type,n.value),Ne(e,t,n.children,a),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,Oa(t),i=Oe(i),n=n(i),t.flags|=1,Ne(e,t,n,a),t.child;case 14:return Ec(e,t,t.type,t.pendingProps,a);case 15:return Dc(e,t,t.type,t.pendingProps,a);case 19:return Bc(e,t,a);case 31:return Ph(e,t,a);case 22:return kc(e,t,a,t.pendingProps);case 24:return Oa(t),n=Oe(we),e===null?(i=Ho(),i===null&&(i=fe,l=Oo(),i.pooledCache=l,l.refCount++,l!==null&&(i.pooledCacheLanes|=a),i=l),t.memoizedState={parent:n,cache:i},xo(t),ta(t,we,i)):((e.lanes&a)!==0&&(Bo(e,t),Kn(t,null,null,a),Pn()),i=e.memoizedState,l=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),ta(t,we,n)):(n=l.cache,ta(t,we,n),n!==i.cache&&Mo(t,[we],a,!0))),Ne(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(m(156,t.tag))}function Ut(e){e.flags|=4}function gu(e,t,a,n,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(ff())e.flags|=8192;else throw za=Zi,zo}else e.flags&=-16777217}function qc(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ed(t))if(ff())e.flags|=8192;else throw za=Zi,zo}function fl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?gr():536870912,e.lanes|=t,vn|=t)}function ai(e,t){if(!P)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Fh(e,t,a){var n=t.pendingProps;switch(_o(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return he(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Bt(we),ve(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ln(t)?Ut(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Do())),he(t),null;case 26:var i=t.type,l=t.memoizedState;return e===null?(Ut(t),l!==null?(he(t),qc(t,l)):(he(t),gu(t,i,null,n,a))):l?l!==e.memoizedState?(Ut(t),he(t),qc(t,l)):(he(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&Ut(t),he(t),gu(t,i,e,n,a)),null;case 27:if(Ti(t),a=Q.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Ut(t);else{if(!n){if(t.stateNode===null)throw Error(m(166));return he(t),null}e=R.current,ln(t)?gs(t):(e=Wf(i,n,a),t.stateNode=e,Ut(t))}return he(t),null;case 5:if(Ti(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Ut(t);else{if(!n){if(t.stateNode===null)throw Error(m(166));return he(t),null}if(l=R.current,ln(t))gs(t);else{var o=El(Q.current);switch(l){case 1:l=o.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:l=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":l=o.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":l=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":l=o.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof n.is=="string"?o.createElement("select",{is:n.is}):o.createElement("select"),n.multiple?l.multiple=!0:n.size&&(l.size=n.size);break;default:l=typeof n.is=="string"?o.createElement(i,{is:n.is}):o.createElement(i)}}l[Re]=t,l[Ye]=n;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)l.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=l;e:switch(He(l,i,n),i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Ut(t)}}return he(t),gu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&Ut(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(m(166));if(e=Q.current,ln(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,i=Me,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[Re]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||xf(e.nodeValue,a)),e||ea(t,!0)}else e=El(e).createTextNode(n),e[Re]=t,t.stateNode=e}return he(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=ln(t),a!==null){if(e===null){if(!n)throw Error(m(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(557));e[Re]=t}else Ra(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;he(t),e=!1}else a=Do(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(at(t),t):(at(t),null);if((t.flags&128)!==0)throw Error(m(558))}return he(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=ln(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(m(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(m(317));i[Re]=t}else Ra(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;he(t),i=!1}else i=Do(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(at(t),t):(at(t),null)}return at(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==i&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),fl(t,t.updateQueue),he(t),null);case 4:return ve(),e===null&&ju(t.stateNode.containerInfo),he(t),null;case 10:return Bt(t.type),he(t),null;case 19:if(T(be),n=t.memoizedState,n===null)return he(t),null;if(i=(t.flags&128)!==0,l=n.rendering,l===null)if(i)ai(n,!1);else{if(pe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=Ji(e),l!==null){for(t.flags|=128,ai(n,!1),e=l.updateQueue,t.updateQueue=e,fl(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)ds(a,e),a=a.sibling;return E(be,be.current&1|2),P&&zt(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&Ke()>pl&&(t.flags|=128,i=!0,ai(n,!1),t.lanes=4194304)}else{if(!i)if(e=Ji(l),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,fl(t,e),ai(n,!0),n.tail===null&&n.tailMode==="hidden"&&!l.alternate&&!P)return he(t),null}else 2*Ke()-n.renderingStartTime>pl&&a!==536870912&&(t.flags|=128,i=!0,ai(n,!1),t.lanes=4194304);n.isBackwards?(l.sibling=t.child,t.child=l):(e=n.last,e!==null?e.sibling=l:t.child=l,n.last=l)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=Ke(),e.sibling=null,a=be.current,E(be,i?a&1|2:a&1),P&&zt(t,n.treeForkCount),e):(he(t),null);case 22:case 23:return at(t),Uo(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),a=t.updateQueue,a!==null&&fl(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&T(Na),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Bt(we),he(t),null;case 25:return null;case 30:return null}throw Error(m(156,t.tag))}function Jh(e,t){switch(_o(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bt(we),ve(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ti(t),null;case 31:if(t.memoizedState!==null){if(at(t),t.alternate===null)throw Error(m(340));Ra()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(at(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(m(340));Ra()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return T(be),null;case 4:return ve(),null;case 10:return Bt(t.type),null;case 22:case 23:return at(t),Uo(),e!==null&&T(Na),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Bt(we),null;case 25:return null;default:return null}}function jc(e,t){switch(_o(t),t.tag){case 3:Bt(we),ve();break;case 26:case 27:case 5:Ti(t);break;case 4:ve();break;case 31:t.memoizedState!==null&&at(t);break;case 13:at(t);break;case 19:T(be);break;case 10:Bt(t.type);break;case 22:case 23:at(t),Uo(),e!==null&&T(Na);break;case 24:Bt(we)}}function ni(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){n=void 0;var l=a.create,o=a.inst;n=l(),o.destroy=n}a=a.next}while(a!==i)}}catch(u){le(t,t.return,u)}}function ua(e,t,a){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var l=i.next;n=l;do{if((n.tag&e)===e){var o=n.inst,u=o.destroy;if(u!==void 0){o.destroy=void 0,i=t;var r=a,h=u;try{h()}catch(g){le(i,r,g)}}}n=n.next}while(n!==l)}}catch(g){le(t,t.return,g)}}function Uc(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Ms(t,a)}catch(n){le(e,e.return,n)}}}function Gc(e,t,a){a.props=La(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){le(e,t,n)}}function ii(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(i){le(e,t,i)}}function Et(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){le(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){le(e,t,i)}else a.current=null}function Yc(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){le(e,e.return,i)}}function vu(e,t,a){try{var n=e.stateNode;Sm(n,e.type,a,t),n[Ye]=t}catch(i){le(e,e.return,i)}}function Qc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ma(e.type)||e.tag===4}function bu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ma(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Su(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Ot));else if(n!==4&&(n===27&&ma(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Su(e,t,a),e=e.sibling;e!==null;)Su(e,t,a),e=e.sibling}function dl(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&ma(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(dl(e,t,a),e=e.sibling;e!==null;)dl(e,t,a),e=e.sibling}function Vc(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);He(t,n,a),t[Re]=e,t[Ye]=a}catch(l){le(e,e.return,l)}}var Gt=!1,Ce=!1,wu=!1,Ic=typeof WeakSet=="function"?WeakSet:Set,ke=null;function $h(e,t){if(e=e.containerInfo,Yu=Hl,e=ns(e),mo(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,l=n.focusNode;n=n.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break e}var o=0,u=-1,r=-1,h=0,g=0,w=e,y=null;t:for(;;){for(var p;w!==a||i!==0&&w.nodeType!==3||(u=o+i),w!==l||n!==0&&w.nodeType!==3||(r=o+n),w.nodeType===3&&(o+=w.nodeValue.length),(p=w.firstChild)!==null;)y=w,w=p;for(;;){if(w===e)break t;if(y===a&&++h===i&&(u=o),y===l&&++g===n&&(r=o),(p=w.nextSibling)!==null)break;w=y,y=w.parentNode}w=p}a=u===-1||r===-1?null:{start:u,end:r}}else a=null}a=a||{start:0,end:0}}else a=null;for(Qu={focusedElem:e,selectionRange:a},Hl=!1,ke=t;ke!==null;)if(t=ke,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ke=e;else for(;ke!==null;){switch(t=ke,l=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)i=e[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&l!==null){e=void 0,a=t,i=l.memoizedProps,l=l.memoizedState,n=a.stateNode;try{var k=La(a.type,i);e=n.getSnapshotBeforeUpdate(k,l),n.__reactInternalSnapshotBeforeUpdate=e}catch(z){le(a,a.return,z)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Wu(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Wu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(m(163))}if(e=t.sibling,e!==null){e.return=t.return,ke=e;break}ke=t.return}}function Wc(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Qt(e,a),n&4&&ni(5,a);break;case 1:if(Qt(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){le(a,a.return,o)}else{var i=La(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){le(a,a.return,o)}}n&64&&Uc(a),n&512&&ii(a,a.return);break;case 3:if(Qt(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Ms(e,t)}catch(o){le(a,a.return,o)}}break;case 27:t===null&&n&4&&Vc(a);case 26:case 5:Qt(e,a),t===null&&n&4&&Yc(a),n&512&&ii(a,a.return);break;case 12:Qt(e,a);break;case 31:Qt(e,a),n&4&&Pc(e,a);break;case 13:Qt(e,a),n&4&&Kc(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=rm.bind(null,a),km(e,a))));break;case 22:if(n=a.memoizedState!==null||Gt,!n){t=t!==null&&t.memoizedState!==null||Ce,i=Gt;var l=Ce;Gt=n,(Ce=t)&&!l?Vt(e,a,(a.subtreeFlags&8772)!==0):Qt(e,a),Gt=i,Ce=l}break;case 30:break;default:Qt(e,a)}}function Xc(e){var t=e.alternate;t!==null&&(e.alternate=null,Xc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Kl(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var me=null,Ve=!1;function Yt(e,t,a){for(a=a.child;a!==null;)Zc(e,t,a),a=a.sibling}function Zc(e,t,a){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(kn,a)}catch{}switch(a.tag){case 26:Ce||Et(a,t),Yt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ce||Et(a,t);var n=me,i=Ve;ma(a.type)&&(me=a.stateNode,Ve=!1),Yt(e,t,a),hi(a.stateNode),me=n,Ve=i;break;case 5:Ce||Et(a,t);case 6:if(n=me,i=Ve,me=null,Yt(e,t,a),me=n,Ve=i,me!==null)if(Ve)try{(me.nodeType===9?me.body:me.nodeName==="HTML"?me.ownerDocument.body:me).removeChild(a.stateNode)}catch(l){le(a,t,l)}else try{me.removeChild(a.stateNode)}catch(l){le(a,t,l)}break;case 18:me!==null&&(Ve?(e=me,Gf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),En(e)):Gf(me,a.stateNode));break;case 4:n=me,i=Ve,me=a.stateNode.containerInfo,Ve=!0,Yt(e,t,a),me=n,Ve=i;break;case 0:case 11:case 14:case 15:ua(2,a,t),Ce||ua(4,a,t),Yt(e,t,a);break;case 1:Ce||(Et(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&Gc(a,t,n)),Yt(e,t,a);break;case 21:Yt(e,t,a);break;case 22:Ce=(n=Ce)||a.memoizedState!==null,Yt(e,t,a),Ce=n;break;default:Yt(e,t,a)}}function Pc(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{En(e)}catch(a){le(t,t.return,a)}}}function Kc(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{En(e)}catch(a){le(t,t.return,a)}}function em(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ic),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ic),t;default:throw Error(m(435,e.tag))}}function hl(e,t){var a=em(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var i=sm.bind(null,e,n);n.then(i,i)}})}function Ie(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],l=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 27:if(ma(u.type)){me=u.stateNode,Ve=!1;break e}break;case 5:me=u.stateNode,Ve=!1;break e;case 3:case 4:me=u.stateNode.containerInfo,Ve=!0;break e}u=u.return}if(me===null)throw Error(m(160));Zc(l,o,i),me=null,Ve=!1,l=i.alternate,l!==null&&(l.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Fc(t,e),t=t.sibling}var bt=null;function Fc(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ie(t,e),We(e),n&4&&(ua(3,e,e.return),ni(3,e),ua(5,e,e.return));break;case 1:Ie(t,e),We(e),n&512&&(Ce||a===null||Et(a,a.return)),n&64&&Gt&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=bt;if(Ie(t,e),We(e),n&512&&(Ce||a===null||Et(a,a.return)),n&4){var l=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":l=i.getElementsByTagName("title")[0],(!l||l[On]||l[Re]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=i.createElement(n),i.head.insertBefore(l,i.querySelector("head > title"))),He(l,n,a),l[Re]=e,De(l),n=l;break e;case"link":var o=Jf("link","href",i).get(n+(a.href||""));if(o){for(var u=0;u<o.length;u++)if(l=o[u],l.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&l.getAttribute("rel")===(a.rel==null?null:a.rel)&&l.getAttribute("title")===(a.title==null?null:a.title)&&l.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(u,1);break t}}l=i.createElement(n),He(l,n,a),i.head.appendChild(l);break;case"meta":if(o=Jf("meta","content",i).get(n+(a.content||""))){for(u=0;u<o.length;u++)if(l=o[u],l.getAttribute("content")===(a.content==null?null:""+a.content)&&l.getAttribute("name")===(a.name==null?null:a.name)&&l.getAttribute("property")===(a.property==null?null:a.property)&&l.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&l.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(u,1);break t}}l=i.createElement(n),He(l,n,a),i.head.appendChild(l);break;default:throw Error(m(468,n))}l[Re]=e,De(l),n=l}e.stateNode=n}else $f(i,e.type,e.stateNode);else e.stateNode=Ff(i,n,e.memoizedProps);else l!==n?(l===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):l.count--,n===null?$f(i,e.type,e.stateNode):Ff(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&vu(e,e.memoizedProps,a.memoizedProps)}break;case 27:Ie(t,e),We(e),n&512&&(Ce||a===null||Et(a,a.return)),a!==null&&n&4&&vu(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Ie(t,e),We(e),n&512&&(Ce||a===null||Et(a,a.return)),e.flags&32){i=e.stateNode;try{Za(i,"")}catch(k){le(e,e.return,k)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,vu(e,i,a!==null?a.memoizedProps:i)),n&1024&&(wu=!0);break;case 6:if(Ie(t,e),We(e),n&4){if(e.stateNode===null)throw Error(m(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(k){le(e,e.return,k)}}break;case 3:if(Rl=null,i=bt,bt=Dl(t.containerInfo),Ie(t,e),bt=i,We(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{En(t.containerInfo)}catch(k){le(e,e.return,k)}wu&&(wu=!1,Jc(e));break;case 4:n=bt,bt=Dl(e.stateNode.containerInfo),Ie(t,e),We(e),bt=n;break;case 12:Ie(t,e),We(e);break;case 31:Ie(t,e),We(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,hl(e,n)));break;case 13:Ie(t,e),We(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(yl=Ke()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,hl(e,n)));break;case 22:i=e.memoizedState!==null;var r=a!==null&&a.memoizedState!==null,h=Gt,g=Ce;if(Gt=h||i,Ce=g||r,Ie(t,e),Ce=g,Gt=h,We(e),n&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||r||Gt||Ce||qa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){r=a=t;try{if(l=r.stateNode,i)o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{u=r.stateNode;var w=r.memoizedProps.style,y=w!=null&&w.hasOwnProperty("display")?w.display:null;u.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(k){le(r,r.return,k)}}}else if(t.tag===6){if(a===null){r=t;try{r.stateNode.nodeValue=i?"":r.memoizedProps}catch(k){le(r,r.return,k)}}}else if(t.tag===18){if(a===null){r=t;try{var p=r.stateNode;i?Yf(p,!0):Yf(r.stateNode,!1)}catch(k){le(r,r.return,k)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,hl(e,a))));break;case 19:Ie(t,e),We(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,hl(e,n)));break;case 30:break;case 21:break;default:Ie(t,e),We(e)}}function We(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(Qc(n)){a=n;break}n=n.return}if(a==null)throw Error(m(160));switch(a.tag){case 27:var i=a.stateNode,l=bu(e);dl(e,l,i);break;case 5:var o=a.stateNode;a.flags&32&&(Za(o,""),a.flags&=-33);var u=bu(e);dl(e,u,o);break;case 3:case 4:var r=a.stateNode.containerInfo,h=bu(e);Su(e,h,r);break;default:throw Error(m(161))}}catch(g){le(e,e.return,g)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Jc(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Jc(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Qt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Wc(e,t.alternate,t),t=t.sibling}function qa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ua(4,t,t.return),qa(t);break;case 1:Et(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Gc(t,t.return,a),qa(t);break;case 27:hi(t.stateNode);case 26:case 5:Et(t,t.return),qa(t);break;case 22:t.memoizedState===null&&qa(t);break;case 30:qa(t);break;default:qa(t)}e=e.sibling}}function Vt(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=e,l=t,o=l.flags;switch(l.tag){case 0:case 11:case 15:Vt(i,l,a),ni(4,l);break;case 1:if(Vt(i,l,a),n=l,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(h){le(n,n.return,h)}if(n=l,i=n.updateQueue,i!==null){var u=n.stateNode;try{var r=i.shared.hiddenCallbacks;if(r!==null)for(i.shared.hiddenCallbacks=null,i=0;i<r.length;i++)Rs(r[i],u)}catch(h){le(n,n.return,h)}}a&&o&64&&Uc(l),ii(l,l.return);break;case 27:Vc(l);case 26:case 5:Vt(i,l,a),a&&n===null&&o&4&&Yc(l),ii(l,l.return);break;case 12:Vt(i,l,a);break;case 31:Vt(i,l,a),a&&o&4&&Pc(i,l);break;case 13:Vt(i,l,a),a&&o&4&&Kc(i,l);break;case 22:l.memoizedState===null&&Vt(i,l,a),ii(l,l.return);break;case 30:break;default:Vt(i,l,a)}t=t.sibling}}function Tu(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Vn(a))}function Au(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Vn(e))}function St(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)$c(e,t,a,n),t=t.sibling}function $c(e,t,a,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:St(e,t,a,n),i&2048&&ni(9,t);break;case 1:St(e,t,a,n);break;case 3:St(e,t,a,n),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Vn(e)));break;case 12:if(i&2048){St(e,t,a,n),e=t.stateNode;try{var l=t.memoizedProps,o=l.id,u=l.onPostCommit;typeof u=="function"&&u(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(r){le(t,t.return,r)}}else St(e,t,a,n);break;case 31:St(e,t,a,n);break;case 13:St(e,t,a,n);break;case 23:break;case 22:l=t.stateNode,o=t.alternate,t.memoizedState!==null?l._visibility&2?St(e,t,a,n):li(e,t):l._visibility&2?St(e,t,a,n):(l._visibility|=2,yn(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),i&2048&&Tu(o,t);break;case 24:St(e,t,a,n),i&2048&&Au(t.alternate,t);break;default:St(e,t,a,n)}}function yn(e,t,a,n,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var l=e,o=t,u=a,r=n,h=o.flags;switch(o.tag){case 0:case 11:case 15:yn(l,o,u,r,i),ni(8,o);break;case 23:break;case 22:var g=o.stateNode;o.memoizedState!==null?g._visibility&2?yn(l,o,u,r,i):li(l,o):(g._visibility|=2,yn(l,o,u,r,i)),i&&h&2048&&Tu(o.alternate,o);break;case 24:yn(l,o,u,r,i),i&&h&2048&&Au(o.alternate,o);break;default:yn(l,o,u,r,i)}t=t.sibling}}function li(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,i=n.flags;switch(n.tag){case 22:li(a,n),i&2048&&Tu(n.alternate,n);break;case 24:li(a,n),i&2048&&Au(n.alternate,n);break;default:li(a,n)}t=t.sibling}}var oi=8192;function pn(e,t,a){if(e.subtreeFlags&oi)for(e=e.child;e!==null;)ef(e,t,a),e=e.sibling}function ef(e,t,a){switch(e.tag){case 26:pn(e,t,a),e.flags&oi&&e.memoizedState!==null&&Um(a,bt,e.memoizedState,e.memoizedProps);break;case 5:pn(e,t,a);break;case 3:case 4:var n=bt;bt=Dl(e.stateNode.containerInfo),pn(e,t,a),bt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=oi,oi=16777216,pn(e,t,a),oi=n):pn(e,t,a));break;default:pn(e,t,a)}}function tf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ui(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];ke=n,nf(n,e)}tf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)af(e),e=e.sibling}function af(e){switch(e.tag){case 0:case 11:case 15:ui(e),e.flags&2048&&ua(9,e,e.return);break;case 3:ui(e);break;case 12:ui(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ml(e)):ui(e);break;default:ui(e)}}function ml(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];ke=n,nf(n,e)}tf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ua(8,t,t.return),ml(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,ml(t));break;default:ml(t)}e=e.sibling}}function nf(e,t){for(;ke!==null;){var a=ke;switch(a.tag){case 0:case 11:case 15:ua(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Vn(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,ke=n;else e:for(a=e;ke!==null;){n=ke;var i=n.sibling,l=n.return;if(Xc(n),n===a){ke=null;break e}if(i!==null){i.return=l,ke=i;break e}ke=l}}}var tm={getCacheForType:function(e){var t=Oe(we),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Oe(we).controller.signal}},am=typeof WeakMap=="function"?WeakMap:Map,ee=0,fe=null,V=null,W=0,ie=0,nt=null,ra=!1,gn=!1,Cu=!1,It=0,pe=0,sa=0,ja=0,_u=0,it=0,vn=0,ri=null,Xe=null,Eu=!1,yl=0,lf=0,pl=1/0,gl=null,ca=null,_e=0,fa=null,bn=null,Wt=0,Du=0,ku=null,of=null,si=0,Ru=null;function lt(){return(ee&2)!==0&&W!==0?W&-W:v.T!==null?xu():wr()}function uf(){if(it===0)if((W&536870912)===0||P){var e=_i;_i<<=1,(_i&3932160)===0&&(_i=262144),it=e}else it=536870912;return e=tt.current,e!==null&&(e.flags|=32),it}function Ze(e,t,a){(e===fe&&(ie===2||ie===9)||e.cancelPendingCommit!==null)&&(Sn(e,0),da(e,W,it,!1)),Mn(e,a),((ee&2)===0||e!==fe)&&(e===fe&&((ee&2)===0&&(ja|=a),pe===4&&da(e,W,it,!1)),Dt(e))}function rf(e,t,a){if((ee&6)!==0)throw Error(m(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Rn(e,t),i=n?lm(e,t):Ou(e,t,!0),l=n;do{if(i===0){gn&&!n&&da(e,t,0,!1);break}else{if(a=e.current.alternate,l&&!nm(a)){i=Ou(e,t,!1),l=!1;continue}if(i===2){if(l=t,e.errorRecoveryDisabledLanes&l)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var u=e;i=ri;var r=u.current.memoizedState.isDehydrated;if(r&&(Sn(u,o).flags|=256),o=Ou(u,o,!1),o!==2){if(Cu&&!r){u.errorRecoveryDisabledLanes|=l,ja|=l,i=4;break e}l=Xe,Xe=i,l!==null&&(Xe===null?Xe=l:Xe.push.apply(Xe,l))}i=o}if(l=!1,i!==2)continue}}if(i===1){Sn(e,0),da(e,t,0,!0);break}e:{switch(n=e,l=i,l){case 0:case 1:throw Error(m(345));case 4:if((t&4194048)!==t)break;case 6:da(n,t,it,!ra);break e;case 2:Xe=null;break;case 3:case 5:break;default:throw Error(m(329))}if((t&62914560)===t&&(i=yl+300-Ke(),10<i)){if(da(n,t,it,!ra),Di(n,0,!0)!==0)break e;Wt=t,n.timeoutHandle=jf(sf.bind(null,n,a,Xe,gl,Eu,t,it,ja,vn,ra,l,"Throttled",-0,0),i);break e}sf(n,a,Xe,gl,Eu,t,it,ja,vn,ra,l,null,-0,0)}}break}while(!0);Dt(e)}function sf(e,t,a,n,i,l,o,u,r,h,g,w,y,p){if(e.timeoutHandle=-1,w=t.subtreeFlags,w&8192||(w&16785408)===16785408){w={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ot},ef(t,l,w);var k=(l&62914560)===l?yl-Ke():(l&4194048)===l?lf-Ke():0;if(k=Gm(w,k),k!==null){Wt=l,e.cancelPendingCommit=k(gf.bind(null,e,t,l,a,n,i,o,u,r,g,w,null,y,p)),da(e,l,o,!h);return}}gf(e,t,l,a,n,i,o,u,r)}function nm(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],l=i.getSnapshot;i=i.value;try{if(!$e(l(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function da(e,t,a,n){t&=~_u,t&=~ja,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var l=31-Je(i),o=1<<l;n[l]=-1,i&=~o}a!==0&&vr(e,a,t)}function vl(){return(ee&6)===0?(ci(0),!1):!0}function Mu(){if(V!==null){if(ie===0)var e=V.return;else e=V,xt=Ma=null,Wo(e),cn=null,Wn=0,e=V;for(;e!==null;)jc(e.alternate,e),e=e.return;V=null}}function Sn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Am(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Wt=0,Mu(),fe=e,V=a=Ht(e.current,null),W=t,ie=0,nt=null,ra=!1,gn=Rn(e,t),Cu=!1,vn=it=_u=ja=sa=pe=0,Xe=ri=null,Eu=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-Je(n),l=1<<i;t|=e[i],n&=~l}return It=t,ji(),a}function cf(e,t){G=null,v.H=ei,t===sn||t===Xi?(t=_s(),ie=3):t===zo?(t=_s(),ie=4):ie=t===ru?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,nt=t,V===null&&(pe=1,ul(e,ct(t,e.current)))}function ff(){var e=tt.current;return e===null?!0:(W&4194048)===W?mt===null:(W&62914560)===W||(W&536870912)!==0?e===mt:!1}function df(){var e=v.H;return v.H=ei,e===null?ei:e}function hf(){var e=v.A;return v.A=tm,e}function bl(){pe=4,ra||(W&4194048)!==W&&tt.current!==null||(gn=!0),(sa&134217727)===0&&(ja&134217727)===0||fe===null||da(fe,W,it,!1)}function Ou(e,t,a){var n=ee;ee|=2;var i=df(),l=hf();(fe!==e||W!==t)&&(gl=null,Sn(e,t)),t=!1;var o=pe;e:do try{if(ie!==0&&V!==null){var u=V,r=nt;switch(ie){case 8:Mu(),o=6;break e;case 3:case 2:case 9:case 6:tt.current===null&&(t=!0);var h=ie;if(ie=0,nt=null,wn(e,u,r,h),a&&gn){o=0;break e}break;default:h=ie,ie=0,nt=null,wn(e,u,r,h)}}im(),o=pe;break}catch(g){cf(e,g)}while(!0);return t&&e.shellSuspendCounter++,xt=Ma=null,ee=n,v.H=i,v.A=l,V===null&&(fe=null,W=0,ji()),o}function im(){for(;V!==null;)mf(V)}function lm(e,t){var a=ee;ee|=2;var n=df(),i=hf();fe!==e||W!==t?(gl=null,pl=Ke()+500,Sn(e,t)):gn=Rn(e,t);e:do try{if(ie!==0&&V!==null){t=V;var l=nt;t:switch(ie){case 1:ie=0,nt=null,wn(e,t,l,1);break;case 2:case 9:if(As(l)){ie=0,nt=null,yf(t);break}t=function(){ie!==2&&ie!==9||fe!==e||(ie=7),Dt(e)},l.then(t,t);break e;case 3:ie=7;break e;case 4:ie=5;break e;case 7:As(l)?(ie=0,nt=null,yf(t)):(ie=0,nt=null,wn(e,t,l,7));break;case 5:var o=null;switch(V.tag){case 26:o=V.memoizedState;case 5:case 27:var u=V;if(o?ed(o):u.stateNode.complete){ie=0,nt=null;var r=u.sibling;if(r!==null)V=r;else{var h=u.return;h!==null?(V=h,Sl(h)):V=null}break t}}ie=0,nt=null,wn(e,t,l,5);break;case 6:ie=0,nt=null,wn(e,t,l,6);break;case 8:Mu(),pe=6;break e;default:throw Error(m(462))}}om();break}catch(g){cf(e,g)}while(!0);return xt=Ma=null,v.H=n,v.A=i,ee=a,V!==null?0:(fe=null,W=0,ji(),pe)}function om(){for(;V!==null&&!Rd();)mf(V)}function mf(e){var t=Lc(e.alternate,e,It);e.memoizedProps=e.pendingProps,t===null?Sl(e):V=t}function yf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Oc(a,t,t.pendingProps,t.type,void 0,W);break;case 11:t=Oc(a,t,t.pendingProps,t.type.render,t.ref,W);break;case 5:Wo(t);default:jc(a,t),t=V=ds(t,It),t=Lc(a,t,It)}e.memoizedProps=e.pendingProps,t===null?Sl(e):V=t}function wn(e,t,a,n){xt=Ma=null,Wo(t),cn=null,Wn=0;var i=t.return;try{if(Zh(e,i,t,a,W)){pe=1,ul(e,ct(a,e.current)),V=null;return}}catch(l){if(i!==null)throw V=i,l;pe=1,ul(e,ct(a,e.current)),V=null;return}t.flags&32768?(P||n===1?e=!0:gn||(W&536870912)!==0?e=!1:(ra=e=!0,(n===2||n===9||n===3||n===6)&&(n=tt.current,n!==null&&n.tag===13&&(n.flags|=16384))),pf(t,e)):Sl(t)}function Sl(e){var t=e;do{if((t.flags&32768)!==0){pf(t,ra);return}e=t.return;var a=Fh(t.alternate,t,It);if(a!==null){V=a;return}if(t=t.sibling,t!==null){V=t;return}V=t=e}while(t!==null);pe===0&&(pe=5)}function pf(e,t){do{var a=Jh(e.alternate,e);if(a!==null){a.flags&=32767,V=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){V=e;return}V=e=a}while(e!==null);pe=6,V=null}function gf(e,t,a,n,i,l,o,u,r){e.cancelPendingCommit=null;do wl();while(_e!==0);if((ee&6)!==0)throw Error(m(327));if(t!==null){if(t===e.current)throw Error(m(177));if(l=t.lanes|t.childLanes,l|=bo,jd(e,a,l,o,u,r),e===fe&&(V=fe=null,W=0),bn=t,fa=e,Wt=a,Du=l,ku=i,of=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,cm(Ai,function(){return Tf(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=v.T,v.T=null,i=_.p,_.p=2,o=ee,ee|=4;try{$h(e,t,a)}finally{ee=o,_.p=i,v.T=n}}_e=1,vf(),bf(),Sf()}}function vf(){if(_e===1){_e=0;var e=fa,t=bn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=v.T,v.T=null;var n=_.p;_.p=2;var i=ee;ee|=4;try{Fc(t,e);var l=Qu,o=ns(e.containerInfo),u=l.focusedElem,r=l.selectionRange;if(o!==u&&u&&u.ownerDocument&&as(u.ownerDocument.documentElement,u)){if(r!==null&&mo(u)){var h=r.start,g=r.end;if(g===void 0&&(g=h),"selectionStart"in u)u.selectionStart=h,u.selectionEnd=Math.min(g,u.value.length);else{var w=u.ownerDocument||document,y=w&&w.defaultView||window;if(y.getSelection){var p=y.getSelection(),k=u.textContent.length,z=Math.min(r.start,k),se=r.end===void 0?z:Math.min(r.end,k);!p.extend&&z>se&&(o=se,se=z,z=o);var f=ts(u,z),s=ts(u,se);if(f&&s&&(p.rangeCount!==1||p.anchorNode!==f.node||p.anchorOffset!==f.offset||p.focusNode!==s.node||p.focusOffset!==s.offset)){var d=w.createRange();d.setStart(f.node,f.offset),p.removeAllRanges(),z>se?(p.addRange(d),p.extend(s.node,s.offset)):(d.setEnd(s.node,s.offset),p.addRange(d))}}}}for(w=[],p=u;p=p.parentNode;)p.nodeType===1&&w.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<w.length;u++){var b=w[u];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}Hl=!!Yu,Qu=Yu=null}finally{ee=i,_.p=n,v.T=a}}e.current=t,_e=2}}function bf(){if(_e===2){_e=0;var e=fa,t=bn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=v.T,v.T=null;var n=_.p;_.p=2;var i=ee;ee|=4;try{Wc(e,t.alternate,t)}finally{ee=i,_.p=n,v.T=a}}_e=3}}function Sf(){if(_e===4||_e===3){_e=0,Md();var e=fa,t=bn,a=Wt,n=of;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?_e=5:(_e=0,bn=fa=null,wf(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ca=null),Zl(a),t=t.stateNode,Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(kn,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=v.T,i=_.p,_.p=2,v.T=null;try{for(var l=e.onRecoverableError,o=0;o<n.length;o++){var u=n[o];l(u.value,{componentStack:u.stack})}}finally{v.T=t,_.p=i}}(Wt&3)!==0&&wl(),Dt(e),i=e.pendingLanes,(a&261930)!==0&&(i&42)!==0?e===Ru?si++:(si=0,Ru=e):si=0,ci(0)}}function wf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Vn(t)))}function wl(){return vf(),bf(),Sf(),Tf()}function Tf(){if(_e!==5)return!1;var e=fa,t=Du;Du=0;var a=Zl(Wt),n=v.T,i=_.p;try{_.p=32>a?32:a,v.T=null,a=ku,ku=null;var l=fa,o=Wt;if(_e=0,bn=fa=null,Wt=0,(ee&6)!==0)throw Error(m(331));var u=ee;if(ee|=4,af(l.current),$c(l,l.current,o,a),ee=u,ci(0,!1),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(kn,l)}catch{}return!0}finally{_.p=i,v.T=n,wf(e,t)}}function Af(e,t,a){t=ct(a,t),t=uu(e.stateNode,t,2),e=ia(e,t,2),e!==null&&(Mn(e,2),Dt(e))}function le(e,t,a){if(e.tag===3)Af(e,e,a);else for(;t!==null;){if(t.tag===3){Af(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ca===null||!ca.has(n))){e=ct(a,e),a=Ac(2),n=ia(t,a,2),n!==null&&(Cc(a,n,t,e),Mn(n,2),Dt(n));break}}t=t.return}}function Nu(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new am;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(a)||(Cu=!0,i.add(a),e=um.bind(null,e,t,a),t.then(e,e))}function um(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,fe===e&&(W&a)===a&&(pe===4||pe===3&&(W&62914560)===W&&300>Ke()-yl?(ee&2)===0&&Sn(e,0):_u|=a,vn===W&&(vn=0)),Dt(e)}function Cf(e,t){t===0&&(t=gr()),e=Da(e,t),e!==null&&(Mn(e,t),Dt(e))}function rm(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Cf(e,a)}function sm(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(m(314))}n!==null&&n.delete(t),Cf(e,a)}function cm(e,t){return Vl(e,t)}var Tl=null,Tn=null,Hu=!1,Al=!1,zu=!1,ha=0;function Dt(e){e!==Tn&&e.next===null&&(Tn===null?Tl=Tn=e:Tn=Tn.next=e),Al=!0,Hu||(Hu=!0,dm())}function ci(e,t){if(!zu&&Al){zu=!0;do for(var a=!1,n=Tl;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var l=0;else{var o=n.suspendedLanes,u=n.pingedLanes;l=(1<<31-Je(42|e)+1)-1,l&=i&~(o&~u),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(a=!0,kf(n,l))}else l=W,l=Di(n,n===fe?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(l&3)===0||Rn(n,l)||(a=!0,kf(n,l));n=n.next}while(a);zu=!1}}function fm(){_f()}function _f(){Al=Hu=!1;var e=0;ha!==0&&Tm()&&(e=ha);for(var t=Ke(),a=null,n=Tl;n!==null;){var i=n.next,l=Ef(n,t);l===0?(n.next=null,a===null?Tl=i:a.next=i,i===null&&(Tn=a)):(a=n,(e!==0||(l&3)!==0)&&(Al=!0)),n=i}_e!==0&&_e!==5||ci(e),ha!==0&&(ha=0)}function Ef(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var o=31-Je(l),u=1<<o,r=i[o];r===-1?((u&a)===0||(u&n)!==0)&&(i[o]=qd(u,t)):r<=t&&(e.expiredLanes|=u),l&=~u}if(t=fe,a=W,a=Di(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(ie===2||ie===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Il(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Rn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&Il(n),Zl(a)){case 2:case 8:a=yr;break;case 32:a=Ai;break;case 268435456:a=pr;break;default:a=Ai}return n=Df.bind(null,e),a=Vl(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&Il(n),e.callbackPriority=2,e.callbackNode=null,2}function Df(e,t){if(_e!==0&&_e!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(wl()&&e.callbackNode!==a)return null;var n=W;return n=Di(e,e===fe?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(rf(e,n,t),Ef(e,Ke()),e.callbackNode!=null&&e.callbackNode===a?Df.bind(null,e):null)}function kf(e,t){if(wl())return null;rf(e,t,!0)}function dm(){Cm(function(){(ee&6)!==0?Vl(mr,fm):_f()})}function xu(){if(ha===0){var e=un;e===0&&(e=Ci,Ci<<=1,(Ci&261888)===0&&(Ci=256)),ha=e}return ha}function Rf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Oi(""+e)}function Mf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function hm(e,t,a,n,i){if(t==="submit"&&a&&a.stateNode===i){var l=Rf((i[Ye]||null).action),o=n.submitter;o&&(t=(t=o[Ye]||null)?Rf(t.formAction):o.getAttribute("formAction"),t!==null&&(l=t,o=null));var u=new xi("action","action",null,n,i);e.push({event:u,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(ha!==0){var r=o?Mf(i,o):new FormData(i);tu(a,{pending:!0,data:r,method:i.method,action:l},null,r)}}else typeof l=="function"&&(u.preventDefault(),r=o?Mf(i,o):new FormData(i),tu(a,{pending:!0,data:r,method:i.method,action:l},l,r))},currentTarget:i}]})}}for(var Bu=0;Bu<vo.length;Bu++){var Lu=vo[Bu],mm=Lu.toLowerCase(),ym=Lu[0].toUpperCase()+Lu.slice(1);vt(mm,"on"+ym)}vt(os,"onAnimationEnd"),vt(us,"onAnimationIteration"),vt(rs,"onAnimationStart"),vt("dblclick","onDoubleClick"),vt("focusin","onFocus"),vt("focusout","onBlur"),vt(Oh,"onTransitionRun"),vt(Nh,"onTransitionStart"),vt(Hh,"onTransitionCancel"),vt(ss,"onTransitionEnd"),Wa("onMouseEnter",["mouseout","mouseover"]),Wa("onMouseLeave",["mouseout","mouseover"]),Wa("onPointerEnter",["pointerout","pointerover"]),Wa("onPointerLeave",["pointerout","pointerover"]),Aa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Aa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Aa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Aa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Aa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Aa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fi));function Of(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],i=n.event;n=n.listeners;e:{var l=void 0;if(t)for(var o=n.length-1;0<=o;o--){var u=n[o],r=u.instance,h=u.currentTarget;if(u=u.listener,r!==l&&i.isPropagationStopped())break e;l=u,i.currentTarget=h;try{l(i)}catch(g){qi(g)}i.currentTarget=null,l=r}else for(o=0;o<n.length;o++){if(u=n[o],r=u.instance,h=u.currentTarget,u=u.listener,r!==l&&i.isPropagationStopped())break e;l=u,i.currentTarget=h;try{l(i)}catch(g){qi(g)}i.currentTarget=null,l=r}}}}function I(e,t){var a=t[Pl];a===void 0&&(a=t[Pl]=new Set);var n=e+"__bubble";a.has(n)||(Nf(t,e,2,!1),a.add(n))}function qu(e,t,a){var n=0;t&&(n|=4),Nf(a,e,n,t)}var Cl="_reactListening"+Math.random().toString(36).slice(2);function ju(e){if(!e[Cl]){e[Cl]=!0,Cr.forEach(function(a){a!=="selectionchange"&&(pm.has(a)||qu(a,!1,e),qu(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Cl]||(t[Cl]=!0,qu("selectionchange",!1,t))}}function Nf(e,t,a,n){switch(ud(t)){case 2:var i=Vm;break;case 8:i=Im;break;default:i=er}a=i.bind(null,t,a,e),i=void 0,!io||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function Uu(e,t,a,n,i){var l=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var u=n.stateNode.containerInfo;if(u===i)break;if(o===4)for(o=n.return;o!==null;){var r=o.tag;if((r===3||r===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;u!==null;){if(o=Qa(u),o===null)return;if(r=o.tag,r===5||r===6||r===26||r===27){n=l=o;continue e}u=u.parentNode}}n=n.return}Br(function(){var h=l,g=ao(a),w=[];e:{var y=cs.get(e);if(y!==void 0){var p=xi,k=e;switch(e){case"keypress":if(Hi(a)===0)break e;case"keydown":case"keyup":p=sh;break;case"focusin":k="focus",p=ro;break;case"focusout":k="blur",p=ro;break;case"beforeblur":case"afterblur":p=ro;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=jr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Fd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=dh;break;case os:case us:case rs:p=eh;break;case ss:p=mh;break;case"scroll":case"scrollend":p=Pd;break;case"wheel":p=ph;break;case"copy":case"cut":case"paste":p=ah;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Gr;break;case"toggle":case"beforetoggle":p=vh}var z=(t&4)!==0,se=!z&&(e==="scroll"||e==="scrollend"),f=z?y!==null?y+"Capture":null:y;z=[];for(var s=h,d;s!==null;){var b=s;if(d=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||d===null||f===null||(b=Hn(s,f),b!=null&&z.push(di(s,b,d))),se)break;s=s.return}0<z.length&&(y=new p(y,k,null,a,g),w.push({event:y,listeners:z}))}}if((t&7)===0){e:{if(y=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",y&&a!==to&&(k=a.relatedTarget||a.fromElement)&&(Qa(k)||k[Ya]))break e;if((p||y)&&(y=g.window===g?g:(y=g.ownerDocument)?y.defaultView||y.parentWindow:window,p?(k=a.relatedTarget||a.toElement,p=h,k=k?Qa(k):null,k!==null&&(se=q(k),z=k.tag,k!==se||z!==5&&z!==27&&z!==6)&&(k=null)):(p=null,k=h),p!==k)){if(z=jr,b="onMouseLeave",f="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(z=Gr,b="onPointerLeave",f="onPointerEnter",s="pointer"),se=p==null?y:Nn(p),d=k==null?y:Nn(k),y=new z(b,s+"leave",p,a,g),y.target=se,y.relatedTarget=d,b=null,Qa(g)===h&&(z=new z(f,s+"enter",k,a,g),z.target=d,z.relatedTarget=se,b=z),se=b,p&&k)t:{for(z=gm,f=p,s=k,d=0,b=f;b;b=z(b))d++;b=0;for(var O=s;O;O=z(O))b++;for(;0<d-b;)f=z(f),d--;for(;0<b-d;)s=z(s),b--;for(;d--;){if(f===s||s!==null&&f===s.alternate){z=f;break t}f=z(f),s=z(s)}z=null}else z=null;p!==null&&Hf(w,y,p,z,!1),k!==null&&se!==null&&Hf(w,se,k,z,!0)}}e:{if(y=h?Nn(h):window,p=y.nodeName&&y.nodeName.toLowerCase(),p==="select"||p==="input"&&y.type==="file")var F=Pr;else if(Xr(y))if(Kr)F=kh;else{F=Eh;var M=_h}else p=y.nodeName,!p||p.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?h&&eo(h.elementType)&&(F=Pr):F=Dh;if(F&&(F=F(e,h))){Zr(w,F,a,g);break e}M&&M(e,y,h),e==="focusout"&&h&&y.type==="number"&&h.memoizedProps.value!=null&&$l(y,"number",y.value)}switch(M=h?Nn(h):window,e){case"focusin":(Xr(M)||M.contentEditable==="true")&&(Ja=M,yo=h,Gn=null);break;case"focusout":Gn=yo=Ja=null;break;case"mousedown":po=!0;break;case"contextmenu":case"mouseup":case"dragend":po=!1,is(w,a,g);break;case"selectionchange":if(Mh)break;case"keydown":case"keyup":is(w,a,g)}var Y;if(co)e:{switch(e){case"compositionstart":var X="onCompositionStart";break e;case"compositionend":X="onCompositionEnd";break e;case"compositionupdate":X="onCompositionUpdate";break e}X=void 0}else Fa?Ir(e,a)&&(X="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(X="onCompositionStart");X&&(Yr&&a.locale!=="ko"&&(Fa||X!=="onCompositionStart"?X==="onCompositionEnd"&&Fa&&(Y=Lr()):(Ft=g,lo="value"in Ft?Ft.value:Ft.textContent,Fa=!0)),M=_l(h,X),0<M.length&&(X=new Ur(X,e,null,a,g),w.push({event:X,listeners:M}),Y?X.data=Y:(Y=Wr(a),Y!==null&&(X.data=Y)))),(Y=Sh?wh(e,a):Th(e,a))&&(X=_l(h,"onBeforeInput"),0<X.length&&(M=new Ur("onBeforeInput","beforeinput",null,a,g),w.push({event:M,listeners:X}),M.data=Y)),hm(w,e,h,a,g)}Of(w,t)})}function di(e,t,a){return{instance:e,listener:t,currentTarget:a}}function _l(e,t){for(var a=t+"Capture",n=[];e!==null;){var i=e,l=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||l===null||(i=Hn(e,a),i!=null&&n.unshift(di(e,i,l)),i=Hn(e,t),i!=null&&n.push(di(e,i,l))),e.tag===3)return n;e=e.return}return[]}function gm(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Hf(e,t,a,n,i){for(var l=t._reactName,o=[];a!==null&&a!==n;){var u=a,r=u.alternate,h=u.stateNode;if(u=u.tag,r!==null&&r===n)break;u!==5&&u!==26&&u!==27||h===null||(r=h,i?(h=Hn(a,l),h!=null&&o.unshift(di(a,h,r))):i||(h=Hn(a,l),h!=null&&o.push(di(a,h,r)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var vm=/\r\n?/g,bm=/\u0000|\uFFFD/g;function zf(e){return(typeof e=="string"?e:""+e).replace(vm,`
`).replace(bm,"")}function xf(e,t){return t=zf(t),zf(e)===t}function re(e,t,a,n,i,l){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Za(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Za(e,""+n);break;case"className":Ri(e,"class",n);break;case"tabIndex":Ri(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Ri(e,a,n);break;case"style":zr(e,n,l);break;case"data":if(t!=="object"){Ri(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Oi(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(a==="formAction"?(t!=="input"&&re(e,t,"name",i.name,i,null),re(e,t,"formEncType",i.formEncType,i,null),re(e,t,"formMethod",i.formMethod,i,null),re(e,t,"formTarget",i.formTarget,i,null)):(re(e,t,"encType",i.encType,i,null),re(e,t,"method",i.method,i,null),re(e,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Oi(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=Ot);break;case"onScroll":n!=null&&I("scroll",e);break;case"onScrollEnd":n!=null&&I("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(m(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(m(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Oi(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":I("beforetoggle",e),I("toggle",e),ki(e,"popover",n);break;case"xlinkActuate":Mt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Mt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Mt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Mt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Mt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Mt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Mt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Mt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Mt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":ki(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Xd.get(a)||a,ki(e,a,n))}}function Gu(e,t,a,n,i,l){switch(a){case"style":zr(e,n,l);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(m(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(m(60));e.innerHTML=a}}break;case"children":typeof n=="string"?Za(e,n):(typeof n=="number"||typeof n=="bigint")&&Za(e,""+n);break;case"onScroll":n!=null&&I("scroll",e);break;case"onScrollEnd":n!=null&&I("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Ot);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!_r.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),l=e[Ye]||null,l=l!=null?l[a]:null,typeof l=="function"&&e.removeEventListener(t,l,i),typeof n=="function")){typeof l!="function"&&l!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,i);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):ki(e,a,n)}}}function He(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":I("error",e),I("load",e);var n=!1,i=!1,l;for(l in a)if(a.hasOwnProperty(l)){var o=a[l];if(o!=null)switch(l){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(m(137,t));default:re(e,t,l,o,a,null)}}i&&re(e,t,"srcSet",a.srcSet,a,null),n&&re(e,t,"src",a.src,a,null);return;case"input":I("invalid",e);var u=l=o=i=null,r=null,h=null;for(n in a)if(a.hasOwnProperty(n)){var g=a[n];if(g!=null)switch(n){case"name":i=g;break;case"type":o=g;break;case"checked":r=g;break;case"defaultChecked":h=g;break;case"value":l=g;break;case"defaultValue":u=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(m(137,t));break;default:re(e,t,n,g,a,null)}}Mr(e,l,u,r,h,o,i,!1);return;case"select":I("invalid",e),n=o=l=null;for(i in a)if(a.hasOwnProperty(i)&&(u=a[i],u!=null))switch(i){case"value":l=u;break;case"defaultValue":o=u;break;case"multiple":n=u;default:re(e,t,i,u,a,null)}t=l,a=o,e.multiple=!!n,t!=null?Xa(e,!!n,t,!1):a!=null&&Xa(e,!!n,a,!0);return;case"textarea":I("invalid",e),l=i=n=null;for(o in a)if(a.hasOwnProperty(o)&&(u=a[o],u!=null))switch(o){case"value":n=u;break;case"defaultValue":i=u;break;case"children":l=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(m(91));break;default:re(e,t,o,u,a,null)}Nr(e,n,i,l);return;case"option":for(r in a)if(a.hasOwnProperty(r)&&(n=a[r],n!=null))switch(r){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:re(e,t,r,n,a,null)}return;case"dialog":I("beforetoggle",e),I("toggle",e),I("cancel",e),I("close",e);break;case"iframe":case"object":I("load",e);break;case"video":case"audio":for(n=0;n<fi.length;n++)I(fi[n],e);break;case"image":I("error",e),I("load",e);break;case"details":I("toggle",e);break;case"embed":case"source":case"link":I("error",e),I("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in a)if(a.hasOwnProperty(h)&&(n=a[h],n!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(m(137,t));default:re(e,t,h,n,a,null)}return;default:if(eo(t)){for(g in a)a.hasOwnProperty(g)&&(n=a[g],n!==void 0&&Gu(e,t,g,n,a,void 0));return}}for(u in a)a.hasOwnProperty(u)&&(n=a[u],n!=null&&re(e,t,u,n,a,null))}function Sm(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,l=null,o=null,u=null,r=null,h=null,g=null;for(p in a){var w=a[p];if(a.hasOwnProperty(p)&&w!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":r=w;default:n.hasOwnProperty(p)||re(e,t,p,null,n,w)}}for(var y in n){var p=n[y];if(w=a[y],n.hasOwnProperty(y)&&(p!=null||w!=null))switch(y){case"type":l=p;break;case"name":i=p;break;case"checked":h=p;break;case"defaultChecked":g=p;break;case"value":o=p;break;case"defaultValue":u=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(m(137,t));break;default:p!==w&&re(e,t,y,p,n,w)}}Jl(e,o,u,r,h,g,l,i);return;case"select":p=o=u=y=null;for(l in a)if(r=a[l],a.hasOwnProperty(l)&&r!=null)switch(l){case"value":break;case"multiple":p=r;default:n.hasOwnProperty(l)||re(e,t,l,null,n,r)}for(i in n)if(l=n[i],r=a[i],n.hasOwnProperty(i)&&(l!=null||r!=null))switch(i){case"value":y=l;break;case"defaultValue":u=l;break;case"multiple":o=l;default:l!==r&&re(e,t,i,l,n,r)}t=u,a=o,n=p,y!=null?Xa(e,!!a,y,!1):!!n!=!!a&&(t!=null?Xa(e,!!a,t,!0):Xa(e,!!a,a?[]:"",!1));return;case"textarea":p=y=null;for(u in a)if(i=a[u],a.hasOwnProperty(u)&&i!=null&&!n.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:re(e,t,u,null,n,i)}for(o in n)if(i=n[o],l=a[o],n.hasOwnProperty(o)&&(i!=null||l!=null))switch(o){case"value":y=i;break;case"defaultValue":p=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(m(91));break;default:i!==l&&re(e,t,o,i,n,l)}Or(e,y,p);return;case"option":for(var k in a)if(y=a[k],a.hasOwnProperty(k)&&y!=null&&!n.hasOwnProperty(k))switch(k){case"selected":e.selected=!1;break;default:re(e,t,k,null,n,y)}for(r in n)if(y=n[r],p=a[r],n.hasOwnProperty(r)&&y!==p&&(y!=null||p!=null))switch(r){case"selected":e.selected=y&&typeof y!="function"&&typeof y!="symbol";break;default:re(e,t,r,y,n,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var z in a)y=a[z],a.hasOwnProperty(z)&&y!=null&&!n.hasOwnProperty(z)&&re(e,t,z,null,n,y);for(h in n)if(y=n[h],p=a[h],n.hasOwnProperty(h)&&y!==p&&(y!=null||p!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(m(137,t));break;default:re(e,t,h,y,n,p)}return;default:if(eo(t)){for(var se in a)y=a[se],a.hasOwnProperty(se)&&y!==void 0&&!n.hasOwnProperty(se)&&Gu(e,t,se,void 0,n,y);for(g in n)y=n[g],p=a[g],!n.hasOwnProperty(g)||y===p||y===void 0&&p===void 0||Gu(e,t,g,y,n,p);return}}for(var f in a)y=a[f],a.hasOwnProperty(f)&&y!=null&&!n.hasOwnProperty(f)&&re(e,t,f,null,n,y);for(w in n)y=n[w],p=a[w],!n.hasOwnProperty(w)||y===p||y==null&&p==null||re(e,t,w,y,n,p)}function Bf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function wm(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var i=a[n],l=i.transferSize,o=i.initiatorType,u=i.duration;if(l&&u&&Bf(o)){for(o=0,u=i.responseEnd,n+=1;n<a.length;n++){var r=a[n],h=r.startTime;if(h>u)break;var g=r.transferSize,w=r.initiatorType;g&&Bf(w)&&(r=r.responseEnd,o+=g*(r<u?1:(u-h)/(r-h)))}if(--n,t+=8*(l+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Yu=null,Qu=null;function El(e){return e.nodeType===9?e:e.ownerDocument}function Lf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function qf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Vu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Iu=null;function Tm(){var e=window.event;return e&&e.type==="popstate"?e===Iu?!1:(Iu=e,!0):(Iu=null,!1)}var jf=typeof setTimeout=="function"?setTimeout:void 0,Am=typeof clearTimeout=="function"?clearTimeout:void 0,Uf=typeof Promise=="function"?Promise:void 0,Cm=typeof queueMicrotask=="function"?queueMicrotask:typeof Uf<"u"?function(e){return Uf.resolve(null).then(e).catch(_m)}:jf;function _m(e){setTimeout(function(){throw e})}function ma(e){return e==="head"}function Gf(e,t){var a=t,n=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(i),En(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")hi(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,hi(a);for(var l=a.firstChild;l;){var o=l.nextSibling,u=l.nodeName;l[On]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&l.rel.toLowerCase()==="stylesheet"||a.removeChild(l),l=o}}else a==="body"&&hi(e.ownerDocument.body);a=i}while(a);En(t)}function Yf(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function Wu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Wu(a),Kl(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Em(e,t,a,n){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[On])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var l=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=yt(e.nextSibling),e===null)break}return null}function Dm(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=yt(e.nextSibling),e===null))return null;return e}function Qf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=yt(e.nextSibling),e===null))return null;return e}function Xu(e){return e.data==="$?"||e.data==="$~"}function Zu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function km(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Pu=null;function Vf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return yt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function If(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Wf(e,t,a){switch(t=El(a),e){case"html":if(e=t.documentElement,!e)throw Error(m(452));return e;case"head":if(e=t.head,!e)throw Error(m(453));return e;case"body":if(e=t.body,!e)throw Error(m(454));return e;default:throw Error(m(451))}}function hi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Kl(e)}var pt=new Map,Xf=new Set;function Dl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Xt=_.d;_.d={f:Rm,r:Mm,D:Om,C:Nm,L:Hm,m:zm,X:Bm,S:xm,M:Lm};function Rm(){var e=Xt.f(),t=vl();return e||t}function Mm(e){var t=Va(e);t!==null&&t.tag===5&&t.type==="form"?sc(t):Xt.r(e)}var An=typeof document>"u"?null:document;function Zf(e,t,a){var n=An;if(n&&typeof t=="string"&&t){var i=rt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),Xf.has(i)||(Xf.add(i),e={rel:e,crossOrigin:a,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),He(t,"link",e),De(t),n.head.appendChild(t)))}}function Om(e){Xt.D(e),Zf("dns-prefetch",e,null)}function Nm(e,t){Xt.C(e,t),Zf("preconnect",e,t)}function Hm(e,t,a){Xt.L(e,t,a);var n=An;if(n&&e&&t){var i='link[rel="preload"][as="'+rt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+rt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+rt(a.imageSizes)+'"]')):i+='[href="'+rt(e)+'"]';var l=i;switch(t){case"style":l=Cn(e);break;case"script":l=_n(e)}pt.has(l)||(e=N({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),pt.set(l,e),n.querySelector(i)!==null||t==="style"&&n.querySelector(mi(l))||t==="script"&&n.querySelector(yi(l))||(t=n.createElement("link"),He(t,"link",e),De(t),n.head.appendChild(t)))}}function zm(e,t){Xt.m(e,t);var a=An;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+rt(n)+'"][href="'+rt(e)+'"]',l=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=_n(e)}if(!pt.has(l)&&(e=N({rel:"modulepreload",href:e},t),pt.set(l,e),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(yi(l)))return}n=a.createElement("link"),He(n,"link",e),De(n),a.head.appendChild(n)}}}function xm(e,t,a){Xt.S(e,t,a);var n=An;if(n&&e){var i=Ia(n).hoistableStyles,l=Cn(e);t=t||"default";var o=i.get(l);if(!o){var u={loading:0,preload:null};if(o=n.querySelector(mi(l)))u.loading=5;else{e=N({rel:"stylesheet",href:e,"data-precedence":t},a),(a=pt.get(l))&&Ku(e,a);var r=o=n.createElement("link");De(r),He(r,"link",e),r._p=new Promise(function(h,g){r.onload=h,r.onerror=g}),r.addEventListener("load",function(){u.loading|=1}),r.addEventListener("error",function(){u.loading|=2}),u.loading|=4,kl(o,t,n)}o={type:"stylesheet",instance:o,count:1,state:u},i.set(l,o)}}}function Bm(e,t){Xt.X(e,t);var a=An;if(a&&e){var n=Ia(a).hoistableScripts,i=_n(e),l=n.get(i);l||(l=a.querySelector(yi(i)),l||(e=N({src:e,async:!0},t),(t=pt.get(i))&&Fu(e,t),l=a.createElement("script"),De(l),He(l,"link",e),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},n.set(i,l))}}function Lm(e,t){Xt.M(e,t);var a=An;if(a&&e){var n=Ia(a).hoistableScripts,i=_n(e),l=n.get(i);l||(l=a.querySelector(yi(i)),l||(e=N({src:e,async:!0,type:"module"},t),(t=pt.get(i))&&Fu(e,t),l=a.createElement("script"),De(l),He(l,"link",e),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},n.set(i,l))}}function Pf(e,t,a,n){var i=(i=Q.current)?Dl(i):null;if(!i)throw Error(m(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Cn(a.href),a=Ia(i).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Cn(a.href);var l=Ia(i).hoistableStyles,o=l.get(e);if(o||(i=i.ownerDocument||i,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,o),(l=i.querySelector(mi(e)))&&!l._p&&(o.instance=l,o.state.loading=5),pt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},pt.set(e,a),l||qm(i,e,a,o.state))),t&&n===null)throw Error(m(528,""));return o}if(t&&n!==null)throw Error(m(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=_n(a),a=Ia(i).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(m(444,e))}}function Cn(e){return'href="'+rt(e)+'"'}function mi(e){return'link[rel="stylesheet"]['+e+"]"}function Kf(e){return N({},e,{"data-precedence":e.precedence,precedence:null})}function qm(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),He(t,"link",a),De(t),e.head.appendChild(t))}function _n(e){return'[src="'+rt(e)+'"]'}function yi(e){return"script[async]"+e}function Ff(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+rt(a.href)+'"]');if(n)return t.instance=n,De(n),n;var i=N({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),De(n),He(n,"style",i),kl(n,a.precedence,e),t.instance=n;case"stylesheet":i=Cn(a.href);var l=e.querySelector(mi(i));if(l)return t.state.loading|=4,t.instance=l,De(l),l;n=Kf(a),(i=pt.get(i))&&Ku(n,i),l=(e.ownerDocument||e).createElement("link"),De(l);var o=l;return o._p=new Promise(function(u,r){o.onload=u,o.onerror=r}),He(l,"link",n),t.state.loading|=4,kl(l,a.precedence,e),t.instance=l;case"script":return l=_n(a.src),(i=e.querySelector(yi(l)))?(t.instance=i,De(i),i):(n=a,(i=pt.get(l))&&(n=N({},a),Fu(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),De(i),He(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(m(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,kl(n,a.precedence,e));return t.instance}function kl(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,l=i,o=0;o<n.length;o++){var u=n[o];if(u.dataset.precedence===t)l=u;else if(l!==i)break}l?l.parentNode.insertBefore(e,l.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Ku(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Fu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Rl=null;function Jf(e,t,a){if(Rl===null){var n=new Map,i=Rl=new Map;i.set(a,n)}else i=Rl,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var l=a[i];if(!(l[On]||l[Re]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var o=l.getAttribute(t)||"";o=e+o;var u=n.get(o);u?u.push(l):n.set(o,[l])}}return n}function $f(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function jm(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function ed(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Um(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=Cn(n.href),l=t.querySelector(mi(i));if(l){t=l._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ml.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=l,De(l);return}l=t.ownerDocument||t,n=Kf(n),(i=pt.get(i))&&Ku(n,i),l=l.createElement("link"),De(l);var o=l;o._p=new Promise(function(u,r){o.onload=u,o.onerror=r}),He(l,"link",n),a.instance=l}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ml.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Ju=0;function Gm(e,t){return e.stylesheets&&e.count===0&&Nl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&Nl(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4+t);0<e.imgBytes&&Ju===0&&(Ju=62500*wm());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Nl(e,e.stylesheets),e.unsuspend)){var l=e.unsuspend;e.unsuspend=null,l()}},(e.imgBytes>Ju?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(i)}}:null}function Ml(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Nl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ol=null;function Nl(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ol=new Map,t.forEach(Ym,e),Ol=null,Ml.call(e))}function Ym(e,t){if(!(t.state.loading&4)){var a=Ol.get(e);if(a)var n=a.get(null);else{a=new Map,Ol.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<i.length;l++){var o=i[l];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),n=o)}n&&a.set(null,n)}i=t.instance,o=i.getAttribute("data-precedence"),l=a.get(o)||n,l===n&&a.set(null,i),a.set(o,i),this.count++,n=Ml.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),l?l.parentNode.insertBefore(i,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var pi={$$typeof:xe,Provider:null,Consumer:null,_currentValue:x,_currentValue2:x,_threadCount:0};function Qm(e,t,a,n,i,l,o,u,r){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wl(0),this.hiddenUpdates=Wl(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=l,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function td(e,t,a,n,i,l,o,u,r,h,g,w){return e=new Qm(e,t,a,o,r,h,g,w,u),t=1,l===!0&&(t|=24),l=et(3,null,null,t),e.current=l,l.stateNode=e,t=Oo(),t.refCount++,e.pooledCache=t,t.refCount++,l.memoizedState={element:n,isDehydrated:a,cache:t},xo(l),e}function ad(e){return e?(e=tn,e):tn}function nd(e,t,a,n,i,l){i=ad(i),n.context===null?n.context=i:n.pendingContext=i,n=na(t),n.payload={element:a},l=l===void 0?null:l,l!==null&&(n.callback=l),a=ia(e,n,t),a!==null&&(Ze(a,e,t),Zn(a,e,t))}function id(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function $u(e,t){id(e,t),(e=e.alternate)&&id(e,t)}function ld(e){if(e.tag===13||e.tag===31){var t=Da(e,67108864);t!==null&&Ze(t,e,67108864),$u(e,67108864)}}function od(e){if(e.tag===13||e.tag===31){var t=lt();t=Xl(t);var a=Da(e,t);a!==null&&Ze(a,e,t),$u(e,t)}}var Hl=!0;function Vm(e,t,a,n){var i=v.T;v.T=null;var l=_.p;try{_.p=2,er(e,t,a,n)}finally{_.p=l,v.T=i}}function Im(e,t,a,n){var i=v.T;v.T=null;var l=_.p;try{_.p=8,er(e,t,a,n)}finally{_.p=l,v.T=i}}function er(e,t,a,n){if(Hl){var i=tr(n);if(i===null)Uu(e,t,n,zl,a),rd(e,n);else if(Xm(i,e,t,a,n))n.stopPropagation();else if(rd(e,n),t&4&&-1<Wm.indexOf(e)){for(;i!==null;){var l=Va(i);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var o=Ta(l.pendingLanes);if(o!==0){var u=l;for(u.pendingLanes|=2,u.entangledLanes|=2;o;){var r=1<<31-Je(o);u.entanglements[1]|=r,o&=~r}Dt(l),(ee&6)===0&&(pl=Ke()+500,ci(0))}}break;case 31:case 13:u=Da(l,2),u!==null&&Ze(u,l,2),vl(),$u(l,2)}if(l=tr(n),l===null&&Uu(e,t,n,zl,a),l===i)break;i=l}i!==null&&n.stopPropagation()}else Uu(e,t,n,null,a)}}function tr(e){return e=ao(e),ar(e)}var zl=null;function ar(e){if(zl=null,e=Qa(e),e!==null){var t=q(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=ae(t),e!==null)return e;e=null}else if(a===31){if(e=K(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return zl=e,null}function ud(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Od()){case mr:return 2;case yr:return 8;case Ai:case Nd:return 32;case pr:return 268435456;default:return 32}default:return 32}}var nr=!1,ya=null,pa=null,ga=null,gi=new Map,vi=new Map,va=[],Wm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function rd(e,t){switch(e){case"focusin":case"focusout":ya=null;break;case"dragenter":case"dragleave":pa=null;break;case"mouseover":case"mouseout":ga=null;break;case"pointerover":case"pointerout":gi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vi.delete(t.pointerId)}}function bi(e,t,a,n,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:l,targetContainers:[i]},t!==null&&(t=Va(t),t!==null&&ld(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Xm(e,t,a,n,i){switch(t){case"focusin":return ya=bi(ya,e,t,a,n,i),!0;case"dragenter":return pa=bi(pa,e,t,a,n,i),!0;case"mouseover":return ga=bi(ga,e,t,a,n,i),!0;case"pointerover":var l=i.pointerId;return gi.set(l,bi(gi.get(l)||null,e,t,a,n,i)),!0;case"gotpointercapture":return l=i.pointerId,vi.set(l,bi(vi.get(l)||null,e,t,a,n,i)),!0}return!1}function sd(e){var t=Qa(e.target);if(t!==null){var a=q(t);if(a!==null){if(t=a.tag,t===13){if(t=ae(a),t!==null){e.blockedOn=t,Tr(e.priority,function(){od(a)});return}}else if(t===31){if(t=K(a),t!==null){e.blockedOn=t,Tr(e.priority,function(){od(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=tr(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);to=n,a.target.dispatchEvent(n),to=null}else return t=Va(a),t!==null&&ld(t),e.blockedOn=a,!1;t.shift()}return!0}function cd(e,t,a){xl(e)&&a.delete(t)}function Zm(){nr=!1,ya!==null&&xl(ya)&&(ya=null),pa!==null&&xl(pa)&&(pa=null),ga!==null&&xl(ga)&&(ga=null),gi.forEach(cd),vi.forEach(cd)}function Bl(e,t){e.blockedOn===t&&(e.blockedOn=null,nr||(nr=!0,A.unstable_scheduleCallback(A.unstable_NormalPriority,Zm)))}var Ll=null;function fd(e){Ll!==e&&(Ll=e,A.unstable_scheduleCallback(A.unstable_NormalPriority,function(){Ll===e&&(Ll=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],i=e[t+2];if(typeof n!="function"){if(ar(n||a)===null)continue;break}var l=Va(a);l!==null&&(e.splice(t,3),t-=3,tu(l,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function En(e){function t(r){return Bl(r,e)}ya!==null&&Bl(ya,e),pa!==null&&Bl(pa,e),ga!==null&&Bl(ga,e),gi.forEach(t),vi.forEach(t);for(var a=0;a<va.length;a++){var n=va[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<va.length&&(a=va[0],a.blockedOn===null);)sd(a),a.blockedOn===null&&va.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],l=a[n+1],o=i[Ye]||null;if(typeof l=="function")o||fd(a);else if(o){var u=null;if(l&&l.hasAttribute("formAction")){if(i=l,o=l[Ye]||null)u=o.formAction;else if(ar(i)!==null)continue}else u=o.action;typeof u=="function"?a[n+1]=u:(a.splice(n,3),n-=3),fd(a)}}}function dd(){function e(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(o){return i=o})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function ir(e){this._internalRoot=e}ql.prototype.render=ir.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(m(409));var a=t.current,n=lt();nd(a,n,e,t,null,null)},ql.prototype.unmount=ir.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nd(e.current,2,null,e,null,null),vl(),t[Ya]=null}};function ql(e){this._internalRoot=e}ql.prototype.unstable_scheduleHydration=function(e){if(e){var t=wr();e={blockedOn:null,target:e,priority:t};for(var a=0;a<va.length&&t!==0&&t<va[a].priority;a++);va.splice(a,0,e),a===0&&sd(e)}};var hd=te.version;if(hd!=="19.2.0")throw Error(m(527,hd,"19.2.0"));_.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(m(188)):(e=Object.keys(e).join(","),Error(m(268,e)));return e=S(t),e=e!==null?j(e):null,e=e===null?null:e.stateNode,e};var Pm={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:v,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jl.isDisabled&&jl.supportsFiber)try{kn=jl.inject(Pm),Fe=jl}catch{}}return wi.createRoot=function(e,t){if(!H(e))throw Error(m(299));var a=!1,n="",i=bc,l=Sc,o=wc;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(l=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=td(e,1,!1,null,null,a,n,null,i,l,o,dd),e[Ya]=t.current,ju(e),new ir(t)},wi.hydrateRoot=function(e,t,a){if(!H(e))throw Error(m(299));var n=!1,i="",l=bc,o=Sc,u=wc,r=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(l=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError),a.formState!==void 0&&(r=a.formState)),t=td(e,1,!0,t,a??null,n,i,r,l,o,u,dd),t.context=ad(null),a=t.current,n=lt(),n=Xl(n),i=na(n),i.callback=null,ia(a,i,n),a=n,t.current.lanes=a,Mn(t,a),Dt(t),e[Ya]=t.current,ju(e),new ql(t)},wi.version="19.2.0",wi}var Ad;function oy(){if(Ad)return ur.exports;Ad=1;function A(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A)}catch(te){console.error(te)}}return A(),ur.exports=ly(),ur.exports}var uy=oy();const ry=_d(uy),sy=({className:A})=>D.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:`w-5 h-5 ${A}`,children:D.jsx("path",{fillRule:"evenodd",d:"M2 4.75A.75.75 0 0 1 2.75 4h5.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 0 1.5 0v-.5A2.25 2.25 0 0 0 8.25 2h-5.5A2.25 2.25 0 0 0 0 4.25v11.5A2.25 2.25 0 0 0 2.25 18h15.5A2.25 2.25 0 0 0 20 15.75V8.25A2.25 2.25 0 0 0 17.75 6h-5.5a.75.75 0 0 1-.75-.75v-.5a.75.75 0 0 0-1.5 0v.5A2.25 2.25 0 0 0 12.25 8h5.5A.75.75 0 0 1 18.5 8.75v7a.75.75 0 0 1-.75.75H2.25a.75.75 0 0 1-.75-.75V4.75Z",clipRule:"evenodd"})}),cy=({className:A})=>D.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:`w-5 h-5 ${A}`,children:D.jsx("path",{fillRule:"evenodd",d:"M4.25 2A2.25 2.25 0 0 0 2 4.25v11.5A2.25 2.25 0 0 0 4.25 18h11.5A2.25 2.25 0 0 0 18 15.75V4.25A2.25 2.25 0 0 0 15.75 2H4.25ZM6 6.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm0 3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm0 3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z",clipRule:"evenodd"})}),fy=({className:A})=>D.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:`w-5 h-5 ${A}`,children:D.jsx("path",{fillRule:"evenodd",d:"M8.5 3.543a.75.75 0 1 0-1.5 0V4.5h.5A2.5 2.5 0 0 1 10 7v3.5a.75.75 0 0 0 1.5 0V7A2.5 2.5 0 0 1 14 4.5h.5v-.957a.75.75 0 0 0-1.5 0V4.5h-.5A1 1 0 0 0 11.5 5.5v1.858a.75.75 0 0 0 1.5 0V5.5a1 1 0 0 0-.5-1 .75.75 0 0 0-.5.5v.043a.75.75 0 1 0 1.5 0V4.5h.5A2.5 2.5 0 0 1 16 7v7.25A2.25 2.25 0 0 1 13.75 16.5h-1.375a.75.75 0 0 0 0 1.5h1.375A3.75 3.75 0 0 0 17.5 14.25V7A4 4 0 0 0 13.5 3h-.5a.75.75 0 0 0 0-1.5H13A2.5 2.5 0 0 1 10.5 0h-1A2.5 2.5 0 0 1 7 2.5H6.5a.75.75 0 0 0 0 1.5h.5A4 4 0 0 0 11 7v7.25c0 .9-.356 1.748-.97 2.375a.75.75 0 1 0-1.06-1.06A2.238 2.238 0 0 1 9.5 14.25V7a2.5 2.5 0 0 1-2.5-2.5H6v.957a.75.75 0 0 0 1.5 0V4.5h.5a1 1 0 0 0 1-1V3.457a.75.75 0 0 0-1.5 0V3.5h-.5A2.5 2.5 0 0 1 4 6v.5a.75.75 0 0 0 1.5 0V6a1 1 0 0 0-.5-1 .75.75 0 0 0-.5.5v.5a.75.75 0 1 0 1.5 0v-.5A2.5 2.5 0 0 1 8.5 3.5v.043ZM6.25 18a.75.75 0 0 0 0-1.5H4.875a.75.75 0 0 0 0 1.5H6.25Z",clipRule:"evenodd"})}),dy=({className:A})=>D.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:`w-5 h-5 ${A}`,children:D.jsx("path",{fillRule:"evenodd",d:"M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"})}),hy=({className:A})=>D.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:`w-5 h-5 ${A}`,children:D.jsx("path",{fillRule:"evenodd",d:"M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z",clipRule:"evenodd"})}),my=({className:A})=>D.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:`w-5 h-5 ${A}`,children:D.jsx("path",{d:"M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"})}),Ed=({data:A,selectedFile:te,onFileSelect:B,expandedFolders:m,onToggleFolder:H,basePath:q=""})=>{const ae=[...A].sort((K,C)=>K.type==="directory"&&C.type==="file"?-1:K.type==="file"&&C.type==="directory"?1:K.name.localeCompare(C.name));return D.jsx("ul",{className:"space-y-1",children:ae.map(K=>{const C=q?`${q}/${K.name}`:K.name;if(K.type==="directory"){const S=m.has(C);return D.jsxs("li",{children:[D.jsxs("div",{className:"flex items-center p-2 rounded-md cursor-pointer hover:bg-gray-700/50 text-gray-300",onClick:()=>H(C),children:[D.jsx(dy,{className:`mr-2 transform transition-transform duration-200 ${S?"rotate-90":"rotate-0"}`}),D.jsx(sy,{className:"mr-2 text-sky-400"}),D.jsx("span",{className:"flex-1 truncate",children:K.name})]}),S&&D.jsx("div",{className:"pl-5 border-l border-gray-700 ml-2.5",children:D.jsx(Ed,{data:K.children,selectedFile:te,onFileSelect:B,expandedFolders:m,onToggleFolder:H,basePath:C})})]},C)}if(K.type==="file"){const S=te===C,j=K.name.endsWith(".json");return D.jsx("li",{children:D.jsxs("div",{className:`flex items-center p-2 rounded-md cursor-pointer group ${S?"bg-sky-600/30 text-sky-300":"hover:bg-gray-700/50 text-gray-400 hover:text-gray-200"}`,onClick:()=>B(C),children:[D.jsx("div",{className:"w-5 mr-2"})," ",j?D.jsx(fy,{className:"mr-2 text-yellow-400"}):D.jsx(cy,{className:"mr-2 text-gray-500 group-hover:text-gray-400"}),D.jsx("span",{className:"flex-1 truncate",children:K.name})]})},C)}return null})})},yy=A=>{const te=A.split(`
`),B=[];let m=!1,H="",q=[],ae=[];const K=C=>{ae.length>0&&(B.push(D.jsx("ul",{className:"pl-6 my-3 space-y-1 list-disc",children:ae.map((S,j)=>D.jsx("li",{children:S},j))},C)),ae=[])};return te.forEach((C,S)=>{if(C.trim().startsWith("```")){K(`list-before-code-${S}`),m?(B.push(D.jsxs("div",{className:"my-4 rounded-lg bg-gray-950/70 border border-gray-700 overflow-hidden",children:[D.jsx("div",{className:"text-xs text-gray-400 bg-gray-800 px-4 py-1",children:H}),D.jsx("pre",{className:"p-4 overflow-x-auto",children:D.jsx("code",{className:"text-sm font-mono text-cyan-300",children:q.join(`
`)})})]},`code-block-${S}`)),q=[],H=""):H=C.trim().substring(3).trim(),m=!m;return}if(m){q.push(C);return}!C.trim().startsWith("- ")&&!C.trim().startsWith("* ")&&K(`list-${S}`),C.startsWith("# ")?B.push(D.jsx("h1",{className:"text-3xl lg:text-4xl font-bold mt-8 mb-4 border-b border-gray-600 pb-3 text-gray-100",children:C.substring(2)},S)):C.startsWith("## ")?B.push(D.jsx("h2",{className:"text-2xl lg:text-3xl font-semibold mt-7 mb-3 border-b border-gray-700 pb-2 text-gray-200",children:C.substring(3)},S)):C.startsWith("### ")?B.push(D.jsx("h3",{className:"text-xl lg:text-2xl font-semibold mt-6 mb-2 text-gray-300",children:C.substring(4)},S)):C.trim().startsWith("- ")||C.trim().startsWith("* ")?ae.push(C.trim().substring(2)):C.trim()==="---"||C.trim()==="⸻"?B.push(D.jsx("hr",{className:"my-8 border-gray-700"},S)):C.trim()!==""&&B.push(D.jsx("p",{className:"my-3 leading-relaxed text-gray-300",children:C},S))}),K("final-list"),m&&q.length>0&&B.push(D.jsxs("div",{className:"my-4 rounded-lg bg-gray-950/70 border border-gray-700 overflow-hidden",children:[D.jsx("div",{className:"text-xs text-gray-400 bg-gray-800 px-4 py-1",children:H}),D.jsx("pre",{className:"p-4 overflow-x-auto",children:D.jsx("code",{className:"text-sm font-mono text-cyan-300",children:q.join(`
`)})})]},"final-code")),B},py=({file:A})=>{if(!A)return D.jsx("div",{className:"flex items-center justify-center h-full text-gray-500",children:D.jsxs("div",{className:"text-center",children:[D.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Client Acquisition System"}),D.jsx("p",{children:"Select a file from the sidebar to view its content."})]})});const te=A.name.endsWith(".json"),B=A.name.endsWith(".csv");return D.jsxs("div",{className:"p-4 sm:p-6 md:p-8 lg:p-10",children:[D.jsx("h1",{className:"text-lg font-semibold text-gray-400 mb-6 pb-2 border-b border-gray-700",children:A.name}),D.jsx("div",{className:"prose prose-invert max-w-none",children:te||B?D.jsx("pre",{className:"bg-gray-800/50 p-4 rounded-md overflow-x-auto my-4 w-full",children:D.jsx("code",{className:"text-sm font-mono text-yellow-300 whitespace-pre-wrap",children:A.content})}):yy(A.content).map((m,H)=>D.jsx("div",{children:m},H))})]})},Cd={children:[{type:"directory",name:"strategy",children:[{type:"file",name:"ICP.md",content:`
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
`}]},gy=()=>{const[A,te]=Ua.useState(null),[B,m]=Ua.useState(new Set(["strategy"])),[H,q]=Ua.useState(!1),ae=Ua.useMemo(()=>{const j=new Map,N=($,ze)=>{$.forEach(ge=>{const Ee=ze?`${ze}/${ge.name}`:ge.name;ge.type==="file"?j.set(Ee,ge):ge.type==="directory"&&N(ge.children,Ee)})};return N(Cd.children,"client-acquisition"),j},[]),K=Ua.useCallback(j=>{te(j),window.innerWidth<768&&q(!1)},[]),C=Ua.useCallback(j=>{m(N=>{const $=new Set(N);return $.has(j)?$.delete(j):$.add(j),$})},[]),S=A?ae.get(A)??null:null;return D.jsxs("div",{className:"flex h-screen w-screen overflow-hidden bg-gray-900 text-gray-200",children:[D.jsxs("header",{className:"md:hidden fixed top-0 left-0 right-0 h-14 bg-gray-900/80 backdrop-blur-sm border-b border-gray-700 flex items-center justify-between px-4 z-20",children:[D.jsx("h1",{className:"text-lg font-semibold text-gray-200 truncate",children:"Client Acquisition System"}),D.jsx("button",{onClick:()=>q(!H),className:"p-2 -mr-2",children:H?D.jsx(my,{}):D.jsx(hy,{})})]}),D.jsxs("aside",{className:`fixed md:relative top-14 md:top-0 h-[calc(100vh-3.5rem)] md:h-screen w-72 md:w-80 lg:w-96 flex-shrink-0 bg-gray-800/50 border-r border-gray-700/50 transform transition-transform duration-300 ease-in-out z-10 ${H?"translate-x-0":"-translate-x-full"} md:translate-x-0`,children:[D.jsxs("div",{className:"p-4 border-b border-gray-700 hidden md:block",children:[D.jsx("h1",{className:"text-xl font-bold text-gray-100",children:"GitHub Repo Architect"}),D.jsx("p",{className:"text-sm text-gray-400",children:"Client Acquisition System"})]}),D.jsx("div",{className:"overflow-y-auto h-[calc(100%-4rem)] md:h-[calc(100%-5rem)] p-4",children:D.jsx(Ed,{data:Cd.children,selectedFile:A,onFileSelect:K,expandedFolders:B,onToggleFolder:C,basePath:"client-acquisition"})})]}),D.jsx("main",{className:"flex-1 overflow-y-auto pt-14 md:pt-0",children:D.jsx(py,{file:S})})]})},Dd=document.getElementById("root");if(!Dd)throw new Error("Could not find root element to mount to");const vy=ry.createRoot(Dd);vy.render(D.jsx(ey.StrictMode,{children:D.jsx(gy,{})}));
