(function(){const j=document.createElement("link").relList;if(j&&j.supports&&j.supports("modulepreload"))return;for(const A of document.querySelectorAll('link[rel="modulepreload"]'))B(A);new MutationObserver(A=>{for(const M of A)if(M.type==="childList")for(const te of M.addedNodes)te.tagName==="LINK"&&te.rel==="modulepreload"&&B(te)}).observe(document,{childList:!0,subtree:!0});function m(A){const M={};return A.integrity&&(M.integrity=A.integrity),A.referrerPolicy&&(M.referrerPolicy=A.referrerPolicy),A.crossOrigin==="use-credentials"?M.credentials="include":A.crossOrigin==="anonymous"?M.credentials="omit":M.credentials="same-origin",M}function B(A){if(A.ep)return;A.ep=!0;const M=m(A);fetch(A.href,M)}})();function Ad(x){return x&&x.__esModule&&Object.prototype.hasOwnProperty.call(x,"default")?x.default:x}var Cs={exports:{}},wr={},Ps={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cu;function Od(){if(Cu)return z;Cu=1;var x=Symbol.for("react.element"),j=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),M=Symbol.for("react.provider"),te=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),ne=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),X=Symbol.iterator;function $(c){return c===null||typeof c!="object"?null:(c=X&&c[X]||c["@@iterator"],typeof c=="function"?c:null)}var je={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Je=Object.assign,re={};function G(c,y,F){this.props=c,this.context=y,this.refs=re,this.updater=F||je}G.prototype.isReactComponent={},G.prototype.setState=function(c,y){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,y,"setState")},G.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function yt(){}yt.prototype=G.prototype;function ut(c,y,F){this.props=c,this.context=y,this.refs=re,this.updater=F||je}var Ze=ut.prototype=new yt;Ze.constructor=ut,Je(Ze,G.prototype),Ze.isPureReactComponent=!0;var xe=Array.isArray,et=Object.prototype.hasOwnProperty,Pe={current:null},_e={key:!0,ref:!0,__self:!0,__source:!0};function $e(c,y,F){var D,W={},V=null,Y=null;if(y!=null)for(D in y.ref!==void 0&&(Y=y.ref),y.key!==void 0&&(V=""+y.key),y)et.call(y,D)&&!_e.hasOwnProperty(D)&&(W[D]=y[D]);var q=arguments.length-2;if(q===1)W.children=F;else if(1<q){for(var oe=Array(q),De=0;De<q;De++)oe[De]=arguments[De+2];W.children=oe}if(c&&c.defaultProps)for(D in q=c.defaultProps,q)W[D]===void 0&&(W[D]=q[D]);return{$$typeof:x,type:c,key:V,ref:Y,props:W,_owner:Pe.current}}function Nt(c,y){return{$$typeof:x,type:c.type,key:y,ref:c.ref,props:c.props,_owner:c._owner}}function vt(c){return typeof c=="object"&&c!==null&&c.$$typeof===x}function Qt(c){var y={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(F){return y[F]})}var ct=/\/+/g;function ze(c,y){return typeof c=="object"&&c!==null&&c.key!=null?Qt(""+c.key):y.toString(36)}function tt(c,y,F,D,W){var V=typeof c;(V==="undefined"||V==="boolean")&&(c=null);var Y=!1;if(c===null)Y=!0;else switch(V){case"string":case"number":Y=!0;break;case"object":switch(c.$$typeof){case x:case j:Y=!0}}if(Y)return Y=c,W=W(Y),c=D===""?"."+ze(Y,0):D,xe(W)?(F="",c!=null&&(F=c.replace(ct,"$&/")+"/"),tt(W,y,F,"",function(De){return De})):W!=null&&(vt(W)&&(W=Nt(W,F+(!W.key||Y&&Y.key===W.key?"":(""+W.key).replace(ct,"$&/")+"/")+c)),y.push(W)),1;if(Y=0,D=D===""?".":D+":",xe(c))for(var q=0;q<c.length;q++){V=c[q];var oe=D+ze(V,q);Y+=tt(V,y,F,oe,W)}else if(oe=$(c),typeof oe=="function")for(c=oe.call(c),q=0;!(V=c.next()).done;)V=V.value,oe=D+ze(V,q++),Y+=tt(V,y,F,oe,W);else if(V==="object")throw y=String(c),Error("Objects are not valid as a React child (found: "+(y==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":y)+"). If you meant to render a collection of children, use an array instead.");return Y}function dt(c,y,F){if(c==null)return c;var D=[],W=0;return tt(c,D,"","",function(V){return y.call(F,V,W++)}),D}function Ie(c){if(c._status===-1){var y=c._result;y=y(),y.then(function(F){(c._status===0||c._status===-1)&&(c._status=1,c._result=F)},function(F){(c._status===0||c._status===-1)&&(c._status=2,c._result=F)}),c._status===-1&&(c._status=0,c._result=y)}if(c._status===1)return c._result.default;throw c._result}var ue={current:null},S={transition:null},L={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:S,ReactCurrentOwner:Pe};function C(){throw Error("act(...) is not supported in production builds of React.")}return z.Children={map:dt,forEach:function(c,y,F){dt(c,function(){y.apply(this,arguments)},F)},count:function(c){var y=0;return dt(c,function(){y++}),y},toArray:function(c){return dt(c,function(y){return y})||[]},only:function(c){if(!vt(c))throw Error("React.Children.only expected to receive a single React element child.");return c}},z.Component=G,z.Fragment=m,z.Profiler=A,z.PureComponent=ut,z.StrictMode=B,z.Suspense=R,z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,z.act=C,z.cloneElement=function(c,y,F){if(c==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+c+".");var D=Je({},c.props),W=c.key,V=c.ref,Y=c._owner;if(y!=null){if(y.ref!==void 0&&(V=y.ref,Y=Pe.current),y.key!==void 0&&(W=""+y.key),c.type&&c.type.defaultProps)var q=c.type.defaultProps;for(oe in y)et.call(y,oe)&&!_e.hasOwnProperty(oe)&&(D[oe]=y[oe]===void 0&&q!==void 0?q[oe]:y[oe])}var oe=arguments.length-2;if(oe===1)D.children=F;else if(1<oe){q=Array(oe);for(var De=0;De<oe;De++)q[De]=arguments[De+2];D.children=q}return{$$typeof:x,type:c.type,key:W,ref:V,props:D,_owner:Y}},z.createContext=function(c){return c={$$typeof:te,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},c.Provider={$$typeof:M,_context:c},c.Consumer=c},z.createElement=$e,z.createFactory=function(c){var y=$e.bind(null,c);return y.type=c,y},z.createRef=function(){return{current:null}},z.forwardRef=function(c){return{$$typeof:U,render:c}},z.isValidElement=vt,z.lazy=function(c){return{$$typeof:ae,_payload:{_status:-1,_result:c},_init:Ie}},z.memo=function(c,y){return{$$typeof:ne,type:c,compare:y===void 0?null:y}},z.startTransition=function(c){var y=S.transition;S.transition={};try{c()}finally{S.transition=y}},z.unstable_act=C,z.useCallback=function(c,y){return ue.current.useCallback(c,y)},z.useContext=function(c){return ue.current.useContext(c)},z.useDebugValue=function(){},z.useDeferredValue=function(c){return ue.current.useDeferredValue(c)},z.useEffect=function(c,y){return ue.current.useEffect(c,y)},z.useId=function(){return ue.current.useId()},z.useImperativeHandle=function(c,y,F){return ue.current.useImperativeHandle(c,y,F)},z.useInsertionEffect=function(c,y){return ue.current.useInsertionEffect(c,y)},z.useLayoutEffect=function(c,y){return ue.current.useLayoutEffect(c,y)},z.useMemo=function(c,y){return ue.current.useMemo(c,y)},z.useReducer=function(c,y,F){return ue.current.useReducer(c,y,F)},z.useRef=function(c){return ue.current.useRef(c)},z.useState=function(c){return ue.current.useState(c)},z.useSyncExternalStore=function(c,y,F){return ue.current.useSyncExternalStore(c,y,F)},z.useTransition=function(){return ue.current.useTransition()},z.version="18.3.1",z}var Pu;function _s(){return Pu||(Pu=1,Ps.exports=Od()),Ps.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tu;function Rd(){if(Tu)return wr;Tu=1;var x=_s(),j=Symbol.for("react.element"),m=Symbol.for("react.fragment"),B=Object.prototype.hasOwnProperty,A=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,M={key:!0,ref:!0,__self:!0,__source:!0};function te(U,R,ne){var ae,X={},$=null,je=null;ne!==void 0&&($=""+ne),R.key!==void 0&&($=""+R.key),R.ref!==void 0&&(je=R.ref);for(ae in R)B.call(R,ae)&&!M.hasOwnProperty(ae)&&(X[ae]=R[ae]);if(U&&U.defaultProps)for(ae in R=U.defaultProps,R)X[ae]===void 0&&(X[ae]=R[ae]);return{$$typeof:j,type:U,key:$,ref:je,props:X,_owner:A.current}}return wr.Fragment=m,wr.jsx=te,wr.jsxs=te,wr}var Nu;function Md(){return Nu||(Nu=1,Cs.exports=Rd()),Cs.exports}var h=Md(),Io={},Ts={exports:{}},Fe={},Ns={exports:{}},js={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ju;function Fd(){return ju||(ju=1,(function(x){function j(S,L){var C=S.length;S.push(L);e:for(;0<C;){var c=C-1>>>1,y=S[c];if(0<A(y,L))S[c]=L,S[C]=y,C=c;else break e}}function m(S){return S.length===0?null:S[0]}function B(S){if(S.length===0)return null;var L=S[0],C=S.pop();if(C!==L){S[0]=C;e:for(var c=0,y=S.length,F=y>>>1;c<F;){var D=2*(c+1)-1,W=S[D],V=D+1,Y=S[V];if(0>A(W,C))V<y&&0>A(Y,W)?(S[c]=Y,S[V]=C,c=V):(S[c]=W,S[D]=C,c=D);else if(V<y&&0>A(Y,C))S[c]=Y,S[V]=C,c=V;else break e}}return L}function A(S,L){var C=S.sortIndex-L.sortIndex;return C!==0?C:S.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var M=performance;x.unstable_now=function(){return M.now()}}else{var te=Date,U=te.now();x.unstable_now=function(){return te.now()-U}}var R=[],ne=[],ae=1,X=null,$=3,je=!1,Je=!1,re=!1,G=typeof setTimeout=="function"?setTimeout:null,yt=typeof clearTimeout=="function"?clearTimeout:null,ut=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ze(S){for(var L=m(ne);L!==null;){if(L.callback===null)B(ne);else if(L.startTime<=S)B(ne),L.sortIndex=L.expirationTime,j(R,L);else break;L=m(ne)}}function xe(S){if(re=!1,Ze(S),!Je)if(m(R)!==null)Je=!0,Ie(et);else{var L=m(ne);L!==null&&ue(xe,L.startTime-S)}}function et(S,L){Je=!1,re&&(re=!1,yt($e),$e=-1),je=!0;var C=$;try{for(Ze(L),X=m(R);X!==null&&(!(X.expirationTime>L)||S&&!Qt());){var c=X.callback;if(typeof c=="function"){X.callback=null,$=X.priorityLevel;var y=c(X.expirationTime<=L);L=x.unstable_now(),typeof y=="function"?X.callback=y:X===m(R)&&B(R),Ze(L)}else B(R);X=m(R)}if(X!==null)var F=!0;else{var D=m(ne);D!==null&&ue(xe,D.startTime-L),F=!1}return F}finally{X=null,$=C,je=!1}}var Pe=!1,_e=null,$e=-1,Nt=5,vt=-1;function Qt(){return!(x.unstable_now()-vt<Nt)}function ct(){if(_e!==null){var S=x.unstable_now();vt=S;var L=!0;try{L=_e(!0,S)}finally{L?ze():(Pe=!1,_e=null)}}else Pe=!1}var ze;if(typeof ut=="function")ze=function(){ut(ct)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,dt=tt.port2;tt.port1.onmessage=ct,ze=function(){dt.postMessage(null)}}else ze=function(){G(ct,0)};function Ie(S){_e=S,Pe||(Pe=!0,ze())}function ue(S,L){$e=G(function(){S(x.unstable_now())},L)}x.unstable_IdlePriority=5,x.unstable_ImmediatePriority=1,x.unstable_LowPriority=4,x.unstable_NormalPriority=3,x.unstable_Profiling=null,x.unstable_UserBlockingPriority=2,x.unstable_cancelCallback=function(S){S.callback=null},x.unstable_continueExecution=function(){Je||je||(Je=!0,Ie(et))},x.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Nt=0<S?Math.floor(1e3/S):5},x.unstable_getCurrentPriorityLevel=function(){return $},x.unstable_getFirstCallbackNode=function(){return m(R)},x.unstable_next=function(S){switch($){case 1:case 2:case 3:var L=3;break;default:L=$}var C=$;$=L;try{return S()}finally{$=C}},x.unstable_pauseExecution=function(){},x.unstable_requestPaint=function(){},x.unstable_runWithPriority=function(S,L){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var C=$;$=S;try{return L()}finally{$=C}},x.unstable_scheduleCallback=function(S,L,C){var c=x.unstable_now();switch(typeof C=="object"&&C!==null?(C=C.delay,C=typeof C=="number"&&0<C?c+C:c):C=c,S){case 1:var y=-1;break;case 2:y=250;break;case 5:y=1073741823;break;case 4:y=1e4;break;default:y=5e3}return y=C+y,S={id:ae++,callback:L,priorityLevel:S,startTime:C,expirationTime:y,sortIndex:-1},C>c?(S.sortIndex=C,j(ne,S),m(R)===null&&S===m(ne)&&(re?(yt($e),$e=-1):re=!0,ue(xe,C-c))):(S.sortIndex=y,j(R,S),Je||je||(Je=!0,Ie(et))),S},x.unstable_shouldYield=Qt,x.unstable_wrapCallback=function(S){var L=$;return function(){var C=$;$=L;try{return S.apply(this,arguments)}finally{$=C}}}})(js)),js}var _u;function zd(){return _u||(_u=1,Ns.exports=Fd()),Ns.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iu;function Dd(){if(Iu)return Fe;Iu=1;var x=_s(),j=zd();function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var B=new Set,A={};function M(e,t){te(e,t),te(e+"Capture",t)}function te(e,t){for(A[e]=t,e=0;e<t.length;e++)B.add(t[e])}var U=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),R=Object.prototype.hasOwnProperty,ne=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ae={},X={};function $(e){return R.call(X,e)?!0:R.call(ae,e)?!1:ne.test(e)?X[e]=!0:(ae[e]=!0,!1)}function je(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Je(e,t,n,r){if(t===null||typeof t>"u"||je(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function re(e,t,n,r,o,l,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=s}var G={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){G[e]=new re(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];G[t]=new re(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){G[e]=new re(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){G[e]=new re(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){G[e]=new re(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){G[e]=new re(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){G[e]=new re(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){G[e]=new re(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){G[e]=new re(e,5,!1,e.toLowerCase(),null,!1,!1)});var yt=/[\-:]([a-z])/g;function ut(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(yt,ut);G[t]=new re(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(yt,ut);G[t]=new re(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(yt,ut);G[t]=new re(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){G[e]=new re(e,1,!1,e.toLowerCase(),null,!1,!1)}),G.xlinkHref=new re("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){G[e]=new re(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ze(e,t,n,r){var o=G.hasOwnProperty(t)?G[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Je(t,n,o,r)&&(n=null),r||o===null?$(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var xe=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,et=Symbol.for("react.element"),Pe=Symbol.for("react.portal"),_e=Symbol.for("react.fragment"),$e=Symbol.for("react.strict_mode"),Nt=Symbol.for("react.profiler"),vt=Symbol.for("react.provider"),Qt=Symbol.for("react.context"),ct=Symbol.for("react.forward_ref"),ze=Symbol.for("react.suspense"),tt=Symbol.for("react.suspense_list"),dt=Symbol.for("react.memo"),Ie=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),S=Symbol.iterator;function L(e){return e===null||typeof e!="object"?null:(e=S&&e[S]||e["@@iterator"],typeof e=="function"?e:null)}var C=Object.assign,c;function y(e){if(c===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);c=t&&t[1]||""}return`
`+c+e}var F=!1;function D(e,t){if(!e||F)return"";F=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var r=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){r=p}e.call(t.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var o=p.stack.split(`
`),l=r.stack.split(`
`),s=o.length-1,i=l.length-1;1<=s&&0<=i&&o[s]!==l[i];)i--;for(;1<=s&&0<=i;s--,i--)if(o[s]!==l[i]){if(s!==1||i!==1)do if(s--,i--,0>i||o[s]!==l[i]){var a=`
`+o[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=i);break}}}finally{F=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?y(e):""}function W(e){switch(e.tag){case 5:return y(e.type);case 16:return y("Lazy");case 13:return y("Suspense");case 19:return y("SuspenseList");case 0:case 2:case 15:return e=D(e.type,!1),e;case 11:return e=D(e.type.render,!1),e;case 1:return e=D(e.type,!0),e;default:return""}}function V(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _e:return"Fragment";case Pe:return"Portal";case Nt:return"Profiler";case $e:return"StrictMode";case ze:return"Suspense";case tt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Qt:return(e.displayName||"Context")+".Consumer";case vt:return(e._context.displayName||"Context")+".Provider";case ct:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case dt:return t=e.displayName||null,t!==null?t:V(e.type)||"Memo";case Ie:t=e._payload,e=e._init;try{return V(e(t))}catch{}}return null}function Y(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return V(t);case 8:return t===$e?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function q(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function oe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function De(e){var t=oe(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,l.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function kr(e){e._valueTracker||(e._valueTracker=De(e))}function Is(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=oe(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function xr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Lo(e,t){var n=t.checked;return C({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ls(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=q(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function As(e,t){t=t.checked,t!=null&&Ze(e,"checked",t,!1)}function Ao(e,t){As(e,t);var n=q(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Oo(e,t.type,n):t.hasOwnProperty("defaultValue")&&Oo(e,t.type,q(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Os(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Oo(e,t,n){(t!=="number"||xr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var On=Array.isArray;function un(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+q(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ro(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(m(91));return C({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Rs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(m(92));if(On(n)){if(1<n.length)throw Error(m(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:q(n)}}function Ms(e,t){var n=q(t.value),r=q(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Fs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function zs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Mo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?zs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Sr,Ds=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Sr=Sr||document.createElement("div"),Sr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Sr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Rn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Mn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fu=["Webkit","ms","Moz","O"];Object.keys(Mn).forEach(function(e){Fu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mn[t]=Mn[e]})});function Bs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Mn.hasOwnProperty(e)&&Mn[e]?(""+t).trim():t+"px"}function Us(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Bs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var zu=C({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fo(e,t){if(t){if(zu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(m(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(m(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(m(61))}if(t.style!=null&&typeof t.style!="object")throw Error(m(62))}}function zo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Do=null;function Bo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Uo=null,cn=null,dn=null;function Hs(e){if(e=or(e)){if(typeof Uo!="function")throw Error(m(280));var t=e.stateNode;t&&(t=Jr(t),Uo(e.stateNode,e.type,t))}}function Ws(e){cn?dn?dn.push(e):dn=[e]:cn=e}function Vs(){if(cn){var e=cn,t=dn;if(dn=cn=null,Hs(e),t)for(e=0;e<t.length;e++)Hs(t[e])}}function Js(e,t){return e(t)}function $s(){}var Ho=!1;function qs(e,t,n){if(Ho)return e(t,n);Ho=!0;try{return Js(e,t,n)}finally{Ho=!1,(cn!==null||dn!==null)&&($s(),Vs())}}function Fn(e,t){var n=e.stateNode;if(n===null)return null;var r=Jr(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(m(231,t,typeof n));return n}var Wo=!1;if(U)try{var zn={};Object.defineProperty(zn,"passive",{get:function(){Wo=!0}}),window.addEventListener("test",zn,zn),window.removeEventListener("test",zn,zn)}catch{Wo=!1}function Du(e,t,n,r,o,l,s,i,a){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(v){this.onError(v)}}var Dn=!1,Er=null,br=!1,Vo=null,Bu={onError:function(e){Dn=!0,Er=e}};function Uu(e,t,n,r,o,l,s,i,a){Dn=!1,Er=null,Du.apply(Bu,arguments)}function Hu(e,t,n,r,o,l,s,i,a){if(Uu.apply(this,arguments),Dn){if(Dn){var p=Er;Dn=!1,Er=null}else throw Error(m(198));br||(br=!0,Vo=p)}}function Gt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Qs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Gs(e){if(Gt(e)!==e)throw Error(m(188))}function Wu(e){var t=e.alternate;if(!t){if(t=Gt(e),t===null)throw Error(m(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return Gs(o),e;if(l===r)return Gs(o),t;l=l.sibling}throw Error(m(188))}if(n.return!==r.return)n=o,r=l;else{for(var s=!1,i=o.child;i;){if(i===n){s=!0,n=o,r=l;break}if(i===r){s=!0,r=o,n=l;break}i=i.sibling}if(!s){for(i=l.child;i;){if(i===n){s=!0,n=l,r=o;break}if(i===r){s=!0,r=l,n=o;break}i=i.sibling}if(!s)throw Error(m(189))}}if(n.alternate!==r)throw Error(m(190))}if(n.tag!==3)throw Error(m(188));return n.stateNode.current===n?e:t}function Ys(e){return e=Wu(e),e!==null?Ks(e):null}function Ks(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ks(e);if(t!==null)return t;e=e.sibling}return null}var Xs=j.unstable_scheduleCallback,Zs=j.unstable_cancelCallback,Vu=j.unstable_shouldYield,Ju=j.unstable_requestPaint,de=j.unstable_now,$u=j.unstable_getCurrentPriorityLevel,Jo=j.unstable_ImmediatePriority,ei=j.unstable_UserBlockingPriority,Cr=j.unstable_NormalPriority,qu=j.unstable_LowPriority,ti=j.unstable_IdlePriority,Pr=null,ft=null;function Qu(e){if(ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(Pr,e,void 0,(e.current.flags&128)===128)}catch{}}var nt=Math.clz32?Math.clz32:Ku,Gu=Math.log,Yu=Math.LN2;function Ku(e){return e>>>=0,e===0?32:31-(Gu(e)/Yu|0)|0}var Tr=64,Nr=4194304;function Bn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function jr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,s=n&268435455;if(s!==0){var i=s&~o;i!==0?r=Bn(i):(l&=s,l!==0&&(r=Bn(l)))}else s=n&~o,s!==0?r=Bn(s):l!==0&&(r=Bn(l));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-nt(t),o=1<<n,r|=e[n],t&=~o;return r}function Xu(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zu(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var s=31-nt(l),i=1<<s,a=o[s];a===-1?((i&n)===0||(i&r)!==0)&&(o[s]=Xu(i,t)):a<=t&&(e.expiredLanes|=i),l&=~i}}function $o(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ni(){var e=Tr;return Tr<<=1,(Tr&4194240)===0&&(Tr=64),e}function qo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Un(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-nt(t),e[t]=n}function ec(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-nt(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function Qo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-nt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var Q=0;function ri(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var oi,Go,li,si,ii,Yo=!1,_r=[],jt=null,_t=null,It=null,Hn=new Map,Wn=new Map,Lt=[],tc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ai(e,t){switch(e){case"focusin":case"focusout":jt=null;break;case"dragenter":case"dragleave":_t=null;break;case"mouseover":case"mouseout":It=null;break;case"pointerover":case"pointerout":Hn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wn.delete(t.pointerId)}}function Vn(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=or(t),t!==null&&Go(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function nc(e,t,n,r,o){switch(t){case"focusin":return jt=Vn(jt,e,t,n,r,o),!0;case"dragenter":return _t=Vn(_t,e,t,n,r,o),!0;case"mouseover":return It=Vn(It,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return Hn.set(l,Vn(Hn.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,Wn.set(l,Vn(Wn.get(l)||null,e,t,n,r,o)),!0}return!1}function ui(e){var t=Yt(e.target);if(t!==null){var n=Gt(t);if(n!==null){if(t=n.tag,t===13){if(t=Qs(n),t!==null){e.blockedOn=t,ii(e.priority,function(){li(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ir(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Xo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Do=r,n.target.dispatchEvent(r),Do=null}else return t=or(n),t!==null&&Go(t),e.blockedOn=n,!1;t.shift()}return!0}function ci(e,t,n){Ir(e)&&n.delete(t)}function rc(){Yo=!1,jt!==null&&Ir(jt)&&(jt=null),_t!==null&&Ir(_t)&&(_t=null),It!==null&&Ir(It)&&(It=null),Hn.forEach(ci),Wn.forEach(ci)}function Jn(e,t){e.blockedOn===t&&(e.blockedOn=null,Yo||(Yo=!0,j.unstable_scheduleCallback(j.unstable_NormalPriority,rc)))}function $n(e){function t(o){return Jn(o,e)}if(0<_r.length){Jn(_r[0],e);for(var n=1;n<_r.length;n++){var r=_r[n];r.blockedOn===e&&(r.blockedOn=null)}}for(jt!==null&&Jn(jt,e),_t!==null&&Jn(_t,e),It!==null&&Jn(It,e),Hn.forEach(t),Wn.forEach(t),n=0;n<Lt.length;n++)r=Lt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Lt.length&&(n=Lt[0],n.blockedOn===null);)ui(n),n.blockedOn===null&&Lt.shift()}var fn=xe.ReactCurrentBatchConfig,Lr=!0;function oc(e,t,n,r){var o=Q,l=fn.transition;fn.transition=null;try{Q=1,Ko(e,t,n,r)}finally{Q=o,fn.transition=l}}function lc(e,t,n,r){var o=Q,l=fn.transition;fn.transition=null;try{Q=4,Ko(e,t,n,r)}finally{Q=o,fn.transition=l}}function Ko(e,t,n,r){if(Lr){var o=Xo(e,t,n,r);if(o===null)hl(e,t,r,Ar,n),ai(e,r);else if(nc(o,e,t,n,r))r.stopPropagation();else if(ai(e,r),t&4&&-1<tc.indexOf(e)){for(;o!==null;){var l=or(o);if(l!==null&&oi(l),l=Xo(e,t,n,r),l===null&&hl(e,t,r,Ar,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else hl(e,t,r,null,n)}}var Ar=null;function Xo(e,t,n,r){if(Ar=null,e=Bo(r),e=Yt(e),e!==null)if(t=Gt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Qs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ar=e,null}function di(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($u()){case Jo:return 1;case ei:return 4;case Cr:case qu:return 16;case ti:return 536870912;default:return 16}default:return 16}}var At=null,Zo=null,Or=null;function fi(){if(Or)return Or;var e,t=Zo,n=t.length,r,o="value"in At?At.value:At.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[l-r];r++);return Or=o.slice(e,1<r?1-r:void 0)}function Rr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Mr(){return!0}function pi(){return!1}function Be(e){function t(n,r,o,l,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(l):l[i]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Mr:pi,this.isPropagationStopped=pi,this}return C(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Mr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Mr)},persist:function(){},isPersistent:Mr}),t}var pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},el=Be(pn),qn=C({},pn,{view:0,detail:0}),sc=Be(qn),tl,nl,Qn,Fr=C({},qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ol,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qn&&(Qn&&e.type==="mousemove"?(tl=e.screenX-Qn.screenX,nl=e.screenY-Qn.screenY):nl=tl=0,Qn=e),tl)},movementY:function(e){return"movementY"in e?e.movementY:nl}}),mi=Be(Fr),ic=C({},Fr,{dataTransfer:0}),ac=Be(ic),uc=C({},qn,{relatedTarget:0}),rl=Be(uc),cc=C({},pn,{animationName:0,elapsedTime:0,pseudoElement:0}),dc=Be(cc),fc=C({},pn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pc=Be(fc),mc=C({},pn,{data:0}),hi=Be(mc),hc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yc[e])?!!t[e]:!1}function ol(){return vc}var wc=C({},qn,{key:function(e){if(e.key){var t=hc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Rr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ol,charCode:function(e){return e.type==="keypress"?Rr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kc=Be(wc),xc=C({},Fr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gi=Be(xc),Sc=C({},qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ol}),Ec=Be(Sc),bc=C({},pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cc=Be(bc),Pc=C({},Fr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Tc=Be(Pc),Nc=[9,13,27,32],ll=U&&"CompositionEvent"in window,Gn=null;U&&"documentMode"in document&&(Gn=document.documentMode);var jc=U&&"TextEvent"in window&&!Gn,yi=U&&(!ll||Gn&&8<Gn&&11>=Gn),vi=" ",wi=!1;function ki(e,t){switch(e){case"keyup":return Nc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xi(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mn=!1;function _c(e,t){switch(e){case"compositionend":return xi(t);case"keypress":return t.which!==32?null:(wi=!0,vi);case"textInput":return e=t.data,e===vi&&wi?null:e;default:return null}}function Ic(e,t){if(mn)return e==="compositionend"||!ll&&ki(e,t)?(e=fi(),Or=Zo=At=null,mn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return yi&&t.locale!=="ko"?null:t.data;default:return null}}var Lc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Si(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Lc[e.type]:t==="textarea"}function Ei(e,t,n,r){Ws(r),t=Hr(t,"onChange"),0<t.length&&(n=new el("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Yn=null,Kn=null;function Ac(e){Ui(e,0)}function zr(e){var t=wn(e);if(Is(t))return e}function Oc(e,t){if(e==="change")return t}var bi=!1;if(U){var sl;if(U){var il="oninput"in document;if(!il){var Ci=document.createElement("div");Ci.setAttribute("oninput","return;"),il=typeof Ci.oninput=="function"}sl=il}else sl=!1;bi=sl&&(!document.documentMode||9<document.documentMode)}function Pi(){Yn&&(Yn.detachEvent("onpropertychange",Ti),Kn=Yn=null)}function Ti(e){if(e.propertyName==="value"&&zr(Kn)){var t=[];Ei(t,Kn,e,Bo(e)),qs(Ac,t)}}function Rc(e,t,n){e==="focusin"?(Pi(),Yn=t,Kn=n,Yn.attachEvent("onpropertychange",Ti)):e==="focusout"&&Pi()}function Mc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zr(Kn)}function Fc(e,t){if(e==="click")return zr(t)}function zc(e,t){if(e==="input"||e==="change")return zr(t)}function Dc(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rt=typeof Object.is=="function"?Object.is:Dc;function Xn(e,t){if(rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!R.call(t,o)||!rt(e[o],t[o]))return!1}return!0}function Ni(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ji(e,t){var n=Ni(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ni(n)}}function _i(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_i(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ii(){for(var e=window,t=xr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=xr(e.document)}return t}function al(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Bc(e){var t=Ii(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&_i(n.ownerDocument.documentElement,n)){if(r!==null&&al(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=ji(n,l);var s=ji(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Uc=U&&"documentMode"in document&&11>=document.documentMode,hn=null,ul=null,Zn=null,cl=!1;function Li(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;cl||hn==null||hn!==xr(r)||(r=hn,"selectionStart"in r&&al(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zn&&Xn(Zn,r)||(Zn=r,r=Hr(ul,"onSelect"),0<r.length&&(t=new el("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=hn)))}function Dr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var gn={animationend:Dr("Animation","AnimationEnd"),animationiteration:Dr("Animation","AnimationIteration"),animationstart:Dr("Animation","AnimationStart"),transitionend:Dr("Transition","TransitionEnd")},dl={},Ai={};U&&(Ai=document.createElement("div").style,"AnimationEvent"in window||(delete gn.animationend.animation,delete gn.animationiteration.animation,delete gn.animationstart.animation),"TransitionEvent"in window||delete gn.transitionend.transition);function Br(e){if(dl[e])return dl[e];if(!gn[e])return e;var t=gn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ai)return dl[e]=t[n];return e}var Oi=Br("animationend"),Ri=Br("animationiteration"),Mi=Br("animationstart"),Fi=Br("transitionend"),zi=new Map,Di="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ot(e,t){zi.set(e,t),M(t,[e])}for(var fl=0;fl<Di.length;fl++){var pl=Di[fl],Hc=pl.toLowerCase(),Wc=pl[0].toUpperCase()+pl.slice(1);Ot(Hc,"on"+Wc)}Ot(Oi,"onAnimationEnd"),Ot(Ri,"onAnimationIteration"),Ot(Mi,"onAnimationStart"),Ot("dblclick","onDoubleClick"),Ot("focusin","onFocus"),Ot("focusout","onBlur"),Ot(Fi,"onTransitionEnd"),te("onMouseEnter",["mouseout","mouseover"]),te("onMouseLeave",["mouseout","mouseover"]),te("onPointerEnter",["pointerout","pointerover"]),te("onPointerLeave",["pointerout","pointerover"]),M("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),M("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),M("onBeforeInput",["compositionend","keypress","textInput","paste"]),M("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),M("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),M("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var er="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vc=new Set("cancel close invalid load scroll toggle".split(" ").concat(er));function Bi(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Hu(r,t,void 0,e),e.currentTarget=null}function Ui(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var s=r.length-1;0<=s;s--){var i=r[s],a=i.instance,p=i.currentTarget;if(i=i.listener,a!==l&&o.isPropagationStopped())break e;Bi(o,i,p),l=a}else for(s=0;s<r.length;s++){if(i=r[s],a=i.instance,p=i.currentTarget,i=i.listener,a!==l&&o.isPropagationStopped())break e;Bi(o,i,p),l=a}}}if(br)throw e=Vo,br=!1,Vo=null,e}function Z(e,t){var n=t[xl];n===void 0&&(n=t[xl]=new Set);var r=e+"__bubble";n.has(r)||(Hi(t,e,2,!1),n.add(r))}function ml(e,t,n){var r=0;t&&(r|=4),Hi(n,e,r,t)}var Ur="_reactListening"+Math.random().toString(36).slice(2);function tr(e){if(!e[Ur]){e[Ur]=!0,B.forEach(function(n){n!=="selectionchange"&&(Vc.has(n)||ml(n,!1,e),ml(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ur]||(t[Ur]=!0,ml("selectionchange",!1,t))}}function Hi(e,t,n,r){switch(di(t)){case 1:var o=oc;break;case 4:o=lc;break;default:o=Ko}n=o.bind(null,t,n,e),o=void 0,!Wo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function hl(e,t,n,r,o){var l=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var i=r.stateNode.containerInfo;if(i===o||i.nodeType===8&&i.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;s=s.return}for(;i!==null;){if(s=Yt(i),s===null)return;if(a=s.tag,a===5||a===6){r=l=s;continue e}i=i.parentNode}}r=r.return}qs(function(){var p=l,v=Bo(n),w=[];e:{var g=zi.get(e);if(g!==void 0){var E=el,P=e;switch(e){case"keypress":if(Rr(n)===0)break e;case"keydown":case"keyup":E=kc;break;case"focusin":P="focus",E=rl;break;case"focusout":P="blur",E=rl;break;case"beforeblur":case"afterblur":E=rl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=mi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=ac;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=Ec;break;case Oi:case Ri:case Mi:E=dc;break;case Fi:E=Cc;break;case"scroll":E=sc;break;case"wheel":E=Tc;break;case"copy":case"cut":case"paste":E=pc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=gi}var T=(t&4)!==0,fe=!T&&e==="scroll",d=T?g!==null?g+"Capture":null:g;T=[];for(var u=p,f;u!==null;){f=u;var k=f.stateNode;if(f.tag===5&&k!==null&&(f=k,d!==null&&(k=Fn(u,d),k!=null&&T.push(nr(u,k,f)))),fe)break;u=u.return}0<T.length&&(g=new E(g,P,null,n,v),w.push({event:g,listeners:T}))}}if((t&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",g&&n!==Do&&(P=n.relatedTarget||n.fromElement)&&(Yt(P)||P[wt]))break e;if((E||g)&&(g=v.window===v?v:(g=v.ownerDocument)?g.defaultView||g.parentWindow:window,E?(P=n.relatedTarget||n.toElement,E=p,P=P?Yt(P):null,P!==null&&(fe=Gt(P),P!==fe||P.tag!==5&&P.tag!==6)&&(P=null)):(E=null,P=p),E!==P)){if(T=mi,k="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(T=gi,k="onPointerLeave",d="onPointerEnter",u="pointer"),fe=E==null?g:wn(E),f=P==null?g:wn(P),g=new T(k,u+"leave",E,n,v),g.target=fe,g.relatedTarget=f,k=null,Yt(v)===p&&(T=new T(d,u+"enter",P,n,v),T.target=f,T.relatedTarget=fe,k=T),fe=k,E&&P)t:{for(T=E,d=P,u=0,f=T;f;f=yn(f))u++;for(f=0,k=d;k;k=yn(k))f++;for(;0<u-f;)T=yn(T),u--;for(;0<f-u;)d=yn(d),f--;for(;u--;){if(T===d||d!==null&&T===d.alternate)break t;T=yn(T),d=yn(d)}T=null}else T=null;E!==null&&Wi(w,g,E,T,!1),P!==null&&fe!==null&&Wi(w,fe,P,T,!0)}}e:{if(g=p?wn(p):window,E=g.nodeName&&g.nodeName.toLowerCase(),E==="select"||E==="input"&&g.type==="file")var N=Oc;else if(Si(g))if(bi)N=zc;else{N=Mc;var _=Rc}else(E=g.nodeName)&&E.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(N=Fc);if(N&&(N=N(e,p))){Ei(w,N,n,v);break e}_&&_(e,g,p),e==="focusout"&&(_=g._wrapperState)&&_.controlled&&g.type==="number"&&Oo(g,"number",g.value)}switch(_=p?wn(p):window,e){case"focusin":(Si(_)||_.contentEditable==="true")&&(hn=_,ul=p,Zn=null);break;case"focusout":Zn=ul=hn=null;break;case"mousedown":cl=!0;break;case"contextmenu":case"mouseup":case"dragend":cl=!1,Li(w,n,v);break;case"selectionchange":if(Uc)break;case"keydown":case"keyup":Li(w,n,v)}var I;if(ll)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else mn?ki(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(yi&&n.locale!=="ko"&&(mn||O!=="onCompositionStart"?O==="onCompositionEnd"&&mn&&(I=fi()):(At=v,Zo="value"in At?At.value:At.textContent,mn=!0)),_=Hr(p,O),0<_.length&&(O=new hi(O,e,null,n,v),w.push({event:O,listeners:_}),I?O.data=I:(I=xi(n),I!==null&&(O.data=I)))),(I=jc?_c(e,n):Ic(e,n))&&(p=Hr(p,"onBeforeInput"),0<p.length&&(v=new hi("onBeforeInput","beforeinput",null,n,v),w.push({event:v,listeners:p}),v.data=I))}Ui(w,t)})}function nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hr(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Fn(e,n),l!=null&&r.unshift(nr(e,l,o)),l=Fn(e,t),l!=null&&r.push(nr(e,l,o))),e=e.return}return r}function yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Wi(e,t,n,r,o){for(var l=t._reactName,s=[];n!==null&&n!==r;){var i=n,a=i.alternate,p=i.stateNode;if(a!==null&&a===r)break;i.tag===5&&p!==null&&(i=p,o?(a=Fn(n,l),a!=null&&s.unshift(nr(n,a,i))):o||(a=Fn(n,l),a!=null&&s.push(nr(n,a,i)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Jc=/\r\n?/g,$c=/\u0000|\uFFFD/g;function Vi(e){return(typeof e=="string"?e:""+e).replace(Jc,`
`).replace($c,"")}function Wr(e,t,n){if(t=Vi(t),Vi(e)!==t&&n)throw Error(m(425))}function Vr(){}var gl=null,yl=null;function vl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wl=typeof setTimeout=="function"?setTimeout:void 0,qc=typeof clearTimeout=="function"?clearTimeout:void 0,Ji=typeof Promise=="function"?Promise:void 0,Qc=typeof queueMicrotask=="function"?queueMicrotask:typeof Ji<"u"?function(e){return Ji.resolve(null).then(e).catch(Gc)}:wl;function Gc(e){setTimeout(function(){throw e})}function kl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),$n(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);$n(t)}function Rt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $i(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var vn=Math.random().toString(36).slice(2),pt="__reactFiber$"+vn,rr="__reactProps$"+vn,wt="__reactContainer$"+vn,xl="__reactEvents$"+vn,Yc="__reactListeners$"+vn,Kc="__reactHandles$"+vn;function Yt(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wt]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$i(e);e!==null;){if(n=e[pt])return n;e=$i(e)}return t}e=n,n=e.parentNode}return null}function or(e){return e=e[pt]||e[wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function wn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(m(33))}function Jr(e){return e[rr]||null}var Sl=[],kn=-1;function Mt(e){return{current:e}}function ee(e){0>kn||(e.current=Sl[kn],Sl[kn]=null,kn--)}function K(e,t){kn++,Sl[kn]=e.current,e.current=t}var Ft={},Se=Mt(Ft),Le=Mt(!1),Kt=Ft;function xn(e,t){var n=e.type.contextTypes;if(!n)return Ft;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ae(e){return e=e.childContextTypes,e!=null}function $r(){ee(Le),ee(Se)}function qi(e,t,n){if(Se.current!==Ft)throw Error(m(168));K(Se,t),K(Le,n)}function Qi(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(m(108,Y(e)||"Unknown",o));return C({},n,r)}function qr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ft,Kt=Se.current,K(Se,e),K(Le,Le.current),!0}function Gi(e,t,n){var r=e.stateNode;if(!r)throw Error(m(169));n?(e=Qi(e,t,Kt),r.__reactInternalMemoizedMergedChildContext=e,ee(Le),ee(Se),K(Se,e)):ee(Le),K(Le,n)}var kt=null,Qr=!1,El=!1;function Yi(e){kt===null?kt=[e]:kt.push(e)}function Xc(e){Qr=!0,Yi(e)}function zt(){if(!El&&kt!==null){El=!0;var e=0,t=Q;try{var n=kt;for(Q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}kt=null,Qr=!1}catch(o){throw kt!==null&&(kt=kt.slice(e+1)),Xs(Jo,zt),o}finally{Q=t,El=!1}}return null}var Sn=[],En=0,Gr=null,Yr=0,qe=[],Qe=0,Xt=null,xt=1,St="";function Zt(e,t){Sn[En++]=Yr,Sn[En++]=Gr,Gr=e,Yr=t}function Ki(e,t,n){qe[Qe++]=xt,qe[Qe++]=St,qe[Qe++]=Xt,Xt=e;var r=xt;e=St;var o=32-nt(r)-1;r&=~(1<<o),n+=1;var l=32-nt(t)+o;if(30<l){var s=o-o%5;l=(r&(1<<s)-1).toString(32),r>>=s,o-=s,xt=1<<32-nt(t)+o|n<<o|r,St=l+e}else xt=1<<l|n<<o|r,St=e}function bl(e){e.return!==null&&(Zt(e,1),Ki(e,1,0))}function Cl(e){for(;e===Gr;)Gr=Sn[--En],Sn[En]=null,Yr=Sn[--En],Sn[En]=null;for(;e===Xt;)Xt=qe[--Qe],qe[Qe]=null,St=qe[--Qe],qe[Qe]=null,xt=qe[--Qe],qe[Qe]=null}var Ue=null,He=null,le=!1,ot=null;function Xi(e,t){var n=Xe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Zi(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ue=e,He=Rt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ue=e,He=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Xt!==null?{id:xt,overflow:St}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Xe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ue=e,He=null,!0):!1;default:return!1}}function Pl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Tl(e){if(le){var t=He;if(t){var n=t;if(!Zi(e,t)){if(Pl(e))throw Error(m(418));t=Rt(n.nextSibling);var r=Ue;t&&Zi(e,t)?Xi(r,n):(e.flags=e.flags&-4097|2,le=!1,Ue=e)}}else{if(Pl(e))throw Error(m(418));e.flags=e.flags&-4097|2,le=!1,Ue=e}}}function ea(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ue=e}function Kr(e){if(e!==Ue)return!1;if(!le)return ea(e),le=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vl(e.type,e.memoizedProps)),t&&(t=He)){if(Pl(e))throw ta(),Error(m(418));for(;t;)Xi(e,t),t=Rt(t.nextSibling)}if(ea(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){He=Rt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}He=null}}else He=Ue?Rt(e.stateNode.nextSibling):null;return!0}function ta(){for(var e=He;e;)e=Rt(e.nextSibling)}function bn(){He=Ue=null,le=!1}function Nl(e){ot===null?ot=[e]:ot.push(e)}var Zc=xe.ReactCurrentBatchConfig;function lr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(m(309));var r=n.stateNode}if(!r)throw Error(m(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(s){var i=o.refs;s===null?delete i[l]:i[l]=s},t._stringRef=l,t)}if(typeof e!="string")throw Error(m(284));if(!n._owner)throw Error(m(290,e))}return e}function Xr(e,t){throw e=Object.prototype.toString.call(t),Error(m(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function na(e){var t=e._init;return t(e._payload)}function ra(e){function t(d,u){if(e){var f=d.deletions;f===null?(d.deletions=[u],d.flags|=16):f.push(u)}}function n(d,u){if(!e)return null;for(;u!==null;)t(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function o(d,u){return d=$t(d,u),d.index=0,d.sibling=null,d}function l(d,u,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<u?(d.flags|=2,u):f):(d.flags|=2,u)):(d.flags|=1048576,u)}function s(d){return e&&d.alternate===null&&(d.flags|=2),d}function i(d,u,f,k){return u===null||u.tag!==6?(u=ws(f,d.mode,k),u.return=d,u):(u=o(u,f),u.return=d,u)}function a(d,u,f,k){var N=f.type;return N===_e?v(d,u,f.props.children,k,f.key):u!==null&&(u.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ie&&na(N)===u.type)?(k=o(u,f.props),k.ref=lr(d,u,f),k.return=d,k):(k=Eo(f.type,f.key,f.props,null,d.mode,k),k.ref=lr(d,u,f),k.return=d,k)}function p(d,u,f,k){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=ks(f,d.mode,k),u.return=d,u):(u=o(u,f.children||[]),u.return=d,u)}function v(d,u,f,k,N){return u===null||u.tag!==7?(u=an(f,d.mode,k,N),u.return=d,u):(u=o(u,f),u.return=d,u)}function w(d,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=ws(""+u,d.mode,f),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case et:return f=Eo(u.type,u.key,u.props,null,d.mode,f),f.ref=lr(d,null,u),f.return=d,f;case Pe:return u=ks(u,d.mode,f),u.return=d,u;case Ie:var k=u._init;return w(d,k(u._payload),f)}if(On(u)||L(u))return u=an(u,d.mode,f,null),u.return=d,u;Xr(d,u)}return null}function g(d,u,f,k){var N=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return N!==null?null:i(d,u,""+f,k);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case et:return f.key===N?a(d,u,f,k):null;case Pe:return f.key===N?p(d,u,f,k):null;case Ie:return N=f._init,g(d,u,N(f._payload),k)}if(On(f)||L(f))return N!==null?null:v(d,u,f,k,null);Xr(d,f)}return null}function E(d,u,f,k,N){if(typeof k=="string"&&k!==""||typeof k=="number")return d=d.get(f)||null,i(u,d,""+k,N);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case et:return d=d.get(k.key===null?f:k.key)||null,a(u,d,k,N);case Pe:return d=d.get(k.key===null?f:k.key)||null,p(u,d,k,N);case Ie:var _=k._init;return E(d,u,f,_(k._payload),N)}if(On(k)||L(k))return d=d.get(f)||null,v(u,d,k,N,null);Xr(u,k)}return null}function P(d,u,f,k){for(var N=null,_=null,I=u,O=u=0,ve=null;I!==null&&O<f.length;O++){I.index>O?(ve=I,I=null):ve=I.sibling;var J=g(d,I,f[O],k);if(J===null){I===null&&(I=ve);break}e&&I&&J.alternate===null&&t(d,I),u=l(J,u,O),_===null?N=J:_.sibling=J,_=J,I=ve}if(O===f.length)return n(d,I),le&&Zt(d,O),N;if(I===null){for(;O<f.length;O++)I=w(d,f[O],k),I!==null&&(u=l(I,u,O),_===null?N=I:_.sibling=I,_=I);return le&&Zt(d,O),N}for(I=r(d,I);O<f.length;O++)ve=E(I,d,O,f[O],k),ve!==null&&(e&&ve.alternate!==null&&I.delete(ve.key===null?O:ve.key),u=l(ve,u,O),_===null?N=ve:_.sibling=ve,_=ve);return e&&I.forEach(function(qt){return t(d,qt)}),le&&Zt(d,O),N}function T(d,u,f,k){var N=L(f);if(typeof N!="function")throw Error(m(150));if(f=N.call(f),f==null)throw Error(m(151));for(var _=N=null,I=u,O=u=0,ve=null,J=f.next();I!==null&&!J.done;O++,J=f.next()){I.index>O?(ve=I,I=null):ve=I.sibling;var qt=g(d,I,J.value,k);if(qt===null){I===null&&(I=ve);break}e&&I&&qt.alternate===null&&t(d,I),u=l(qt,u,O),_===null?N=qt:_.sibling=qt,_=qt,I=ve}if(J.done)return n(d,I),le&&Zt(d,O),N;if(I===null){for(;!J.done;O++,J=f.next())J=w(d,J.value,k),J!==null&&(u=l(J,u,O),_===null?N=J:_.sibling=J,_=J);return le&&Zt(d,O),N}for(I=r(d,I);!J.done;O++,J=f.next())J=E(I,d,O,J.value,k),J!==null&&(e&&J.alternate!==null&&I.delete(J.key===null?O:J.key),u=l(J,u,O),_===null?N=J:_.sibling=J,_=J);return e&&I.forEach(function(Ld){return t(d,Ld)}),le&&Zt(d,O),N}function fe(d,u,f,k){if(typeof f=="object"&&f!==null&&f.type===_e&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case et:e:{for(var N=f.key,_=u;_!==null;){if(_.key===N){if(N=f.type,N===_e){if(_.tag===7){n(d,_.sibling),u=o(_,f.props.children),u.return=d,d=u;break e}}else if(_.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ie&&na(N)===_.type){n(d,_.sibling),u=o(_,f.props),u.ref=lr(d,_,f),u.return=d,d=u;break e}n(d,_);break}else t(d,_);_=_.sibling}f.type===_e?(u=an(f.props.children,d.mode,k,f.key),u.return=d,d=u):(k=Eo(f.type,f.key,f.props,null,d.mode,k),k.ref=lr(d,u,f),k.return=d,d=k)}return s(d);case Pe:e:{for(_=f.key;u!==null;){if(u.key===_)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){n(d,u.sibling),u=o(u,f.children||[]),u.return=d,d=u;break e}else{n(d,u);break}else t(d,u);u=u.sibling}u=ks(f,d.mode,k),u.return=d,d=u}return s(d);case Ie:return _=f._init,fe(d,u,_(f._payload),k)}if(On(f))return P(d,u,f,k);if(L(f))return T(d,u,f,k);Xr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(n(d,u.sibling),u=o(u,f),u.return=d,d=u):(n(d,u),u=ws(f,d.mode,k),u.return=d,d=u),s(d)):n(d,u)}return fe}var Cn=ra(!0),oa=ra(!1),Zr=Mt(null),eo=null,Pn=null,jl=null;function _l(){jl=Pn=eo=null}function Il(e){var t=Zr.current;ee(Zr),e._currentValue=t}function Ll(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Tn(e,t){eo=e,jl=Pn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Oe=!0),e.firstContext=null)}function Ge(e){var t=e._currentValue;if(jl!==e)if(e={context:e,memoizedValue:t,next:null},Pn===null){if(eo===null)throw Error(m(308));Pn=e,eo.dependencies={lanes:0,firstContext:e}}else Pn=Pn.next=e;return t}var en=null;function Al(e){en===null?en=[e]:en.push(e)}function la(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Al(t)):(n.next=o.next,o.next=n),t.interleaved=n,Et(e,r)}function Et(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Dt=!1;function Ol(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(H&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Et(e,n)}return o=r.interleaved,o===null?(t.next=t,Al(r)):(t.next=o.next,o.next=t),r.interleaved=t,Et(e,n)}function to(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qo(e,n)}}function ia(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=s:l=l.next=s,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function no(e,t,n,r){var o=e.updateQueue;Dt=!1;var l=o.firstBaseUpdate,s=o.lastBaseUpdate,i=o.shared.pending;if(i!==null){o.shared.pending=null;var a=i,p=a.next;a.next=null,s===null?l=p:s.next=p,s=a;var v=e.alternate;v!==null&&(v=v.updateQueue,i=v.lastBaseUpdate,i!==s&&(i===null?v.firstBaseUpdate=p:i.next=p,v.lastBaseUpdate=a))}if(l!==null){var w=o.baseState;s=0,v=p=a=null,i=l;do{var g=i.lane,E=i.eventTime;if((r&g)===g){v!==null&&(v=v.next={eventTime:E,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var P=e,T=i;switch(g=t,E=n,T.tag){case 1:if(P=T.payload,typeof P=="function"){w=P.call(E,w,g);break e}w=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=T.payload,g=typeof P=="function"?P.call(E,w,g):P,g==null)break e;w=C({},w,g);break e;case 2:Dt=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[i]:g.push(i))}else E={eventTime:E,lane:g,tag:i.tag,payload:i.payload,callback:i.callback,next:null},v===null?(p=v=E,a=w):v=v.next=E,s|=g;if(i=i.next,i===null){if(i=o.shared.pending,i===null)break;g=i,i=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(v===null&&(a=w),o.baseState=a,o.firstBaseUpdate=p,o.lastBaseUpdate=v,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);rn|=s,e.lanes=s,e.memoizedState=w}}function aa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(m(191,o));o.call(r)}}}var sr={},mt=Mt(sr),ir=Mt(sr),ar=Mt(sr);function tn(e){if(e===sr)throw Error(m(174));return e}function Rl(e,t){switch(K(ar,t),K(ir,e),K(mt,sr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Mo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Mo(t,e)}ee(mt),K(mt,t)}function Nn(){ee(mt),ee(ir),ee(ar)}function ua(e){tn(ar.current);var t=tn(mt.current),n=Mo(t,e.type);t!==n&&(K(ir,e),K(mt,n))}function Ml(e){ir.current===e&&(ee(mt),ee(ir))}var se=Mt(0);function ro(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fl=[];function zl(){for(var e=0;e<Fl.length;e++)Fl[e]._workInProgressVersionPrimary=null;Fl.length=0}var oo=xe.ReactCurrentDispatcher,Dl=xe.ReactCurrentBatchConfig,nn=0,ie=null,me=null,ge=null,lo=!1,ur=!1,cr=0,ed=0;function Ee(){throw Error(m(321))}function Bl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!rt(e[n],t[n]))return!1;return!0}function Ul(e,t,n,r,o,l){if(nn=l,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,oo.current=e===null||e.memoizedState===null?od:ld,e=n(r,o),ur){l=0;do{if(ur=!1,cr=0,25<=l)throw Error(m(301));l+=1,ge=me=null,t.updateQueue=null,oo.current=sd,e=n(r,o)}while(ur)}if(oo.current=ao,t=me!==null&&me.next!==null,nn=0,ge=me=ie=null,lo=!1,t)throw Error(m(300));return e}function Hl(){var e=cr!==0;return cr=0,e}function ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?ie.memoizedState=ge=e:ge=ge.next=e,ge}function Ye(){if(me===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var t=ge===null?ie.memoizedState:ge.next;if(t!==null)ge=t,me=e;else{if(e===null)throw Error(m(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},ge===null?ie.memoizedState=ge=e:ge=ge.next=e}return ge}function dr(e,t){return typeof t=="function"?t(e):t}function Wl(e){var t=Ye(),n=t.queue;if(n===null)throw Error(m(311));n.lastRenderedReducer=e;var r=me,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var s=o.next;o.next=l.next,l.next=s}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var i=s=null,a=null,p=l;do{var v=p.lane;if((nn&v)===v)a!==null&&(a=a.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var w={lane:v,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};a===null?(i=a=w,s=r):a=a.next=w,ie.lanes|=v,rn|=v}p=p.next}while(p!==null&&p!==l);a===null?s=r:a.next=i,rt(r,t.memoizedState)||(Oe=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,ie.lanes|=l,rn|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Vl(e){var t=Ye(),n=t.queue;if(n===null)throw Error(m(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do l=e(l,s.action),s=s.next;while(s!==o);rt(l,t.memoizedState)||(Oe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function ca(){}function da(e,t){var n=ie,r=Ye(),o=t(),l=!rt(r.memoizedState,o);if(l&&(r.memoizedState=o,Oe=!0),r=r.queue,Jl(ma.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||ge!==null&&ge.memoizedState.tag&1){if(n.flags|=2048,fr(9,pa.bind(null,n,r,o,t),void 0,null),ye===null)throw Error(m(349));(nn&30)!==0||fa(n,t,o)}return o}function fa(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function pa(e,t,n,r){t.value=n,t.getSnapshot=r,ha(t)&&ga(e)}function ma(e,t,n){return n(function(){ha(t)&&ga(e)})}function ha(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!rt(e,n)}catch{return!0}}function ga(e){var t=Et(e,1);t!==null&&at(t,e,1,-1)}function ya(e){var t=ht();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:dr,lastRenderedState:e},t.queue=e,e=e.dispatch=rd.bind(null,ie,e),[t.memoizedState,e]}function fr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function va(){return Ye().memoizedState}function so(e,t,n,r){var o=ht();ie.flags|=e,o.memoizedState=fr(1|t,n,void 0,r===void 0?null:r)}function io(e,t,n,r){var o=Ye();r=r===void 0?null:r;var l=void 0;if(me!==null){var s=me.memoizedState;if(l=s.destroy,r!==null&&Bl(r,s.deps)){o.memoizedState=fr(t,n,l,r);return}}ie.flags|=e,o.memoizedState=fr(1|t,n,l,r)}function wa(e,t){return so(8390656,8,e,t)}function Jl(e,t){return io(2048,8,e,t)}function ka(e,t){return io(4,2,e,t)}function xa(e,t){return io(4,4,e,t)}function Sa(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ea(e,t,n){return n=n!=null?n.concat([e]):null,io(4,4,Sa.bind(null,t,e),n)}function $l(){}function ba(e,t){var n=Ye();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ca(e,t){var n=Ye();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Pa(e,t,n){return(nn&21)===0?(e.baseState&&(e.baseState=!1,Oe=!0),e.memoizedState=n):(rt(n,t)||(n=ni(),ie.lanes|=n,rn|=n,e.baseState=!0),t)}function td(e,t){var n=Q;Q=n!==0&&4>n?n:4,e(!0);var r=Dl.transition;Dl.transition={};try{e(!1),t()}finally{Q=n,Dl.transition=r}}function Ta(){return Ye().memoizedState}function nd(e,t,n){var r=Vt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Na(e))ja(t,n);else if(n=la(e,t,n,r),n!==null){var o=Ne();at(n,e,r,o),_a(n,t,r)}}function rd(e,t,n){var r=Vt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Na(e))ja(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var s=t.lastRenderedState,i=l(s,n);if(o.hasEagerState=!0,o.eagerState=i,rt(i,s)){var a=t.interleaved;a===null?(o.next=o,Al(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=la(e,t,o,r),n!==null&&(o=Ne(),at(n,e,r,o),_a(n,t,r))}}function Na(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function ja(e,t){ur=lo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _a(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qo(e,n)}}var ao={readContext:Ge,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useInsertionEffect:Ee,useLayoutEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useMutableSource:Ee,useSyncExternalStore:Ee,useId:Ee,unstable_isNewReconciler:!1},od={readContext:Ge,useCallback:function(e,t){return ht().memoizedState=[e,t===void 0?null:t],e},useContext:Ge,useEffect:wa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,so(4194308,4,Sa.bind(null,t,e),n)},useLayoutEffect:function(e,t){return so(4194308,4,e,t)},useInsertionEffect:function(e,t){return so(4,2,e,t)},useMemo:function(e,t){var n=ht();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ht();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=nd.bind(null,ie,e),[r.memoizedState,e]},useRef:function(e){var t=ht();return e={current:e},t.memoizedState=e},useState:ya,useDebugValue:$l,useDeferredValue:function(e){return ht().memoizedState=e},useTransition:function(){var e=ya(!1),t=e[0];return e=td.bind(null,e[1]),ht().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ie,o=ht();if(le){if(n===void 0)throw Error(m(407));n=n()}else{if(n=t(),ye===null)throw Error(m(349));(nn&30)!==0||fa(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,wa(ma.bind(null,r,l,e),[e]),r.flags|=2048,fr(9,pa.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=ht(),t=ye.identifierPrefix;if(le){var n=St,r=xt;n=(r&~(1<<32-nt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=cr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ed++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ld={readContext:Ge,useCallback:ba,useContext:Ge,useEffect:Jl,useImperativeHandle:Ea,useInsertionEffect:ka,useLayoutEffect:xa,useMemo:Ca,useReducer:Wl,useRef:va,useState:function(){return Wl(dr)},useDebugValue:$l,useDeferredValue:function(e){var t=Ye();return Pa(t,me.memoizedState,e)},useTransition:function(){var e=Wl(dr)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:ca,useSyncExternalStore:da,useId:Ta,unstable_isNewReconciler:!1},sd={readContext:Ge,useCallback:ba,useContext:Ge,useEffect:Jl,useImperativeHandle:Ea,useInsertionEffect:ka,useLayoutEffect:xa,useMemo:Ca,useReducer:Vl,useRef:va,useState:function(){return Vl(dr)},useDebugValue:$l,useDeferredValue:function(e){var t=Ye();return me===null?t.memoizedState=e:Pa(t,me.memoizedState,e)},useTransition:function(){var e=Vl(dr)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:ca,useSyncExternalStore:da,useId:Ta,unstable_isNewReconciler:!1};function lt(e,t){if(e&&e.defaultProps){t=C({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ql(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:C({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var uo={isMounted:function(e){return(e=e._reactInternals)?Gt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ne(),o=Vt(e),l=bt(r,o);l.payload=t,n!=null&&(l.callback=n),t=Bt(e,l,o),t!==null&&(at(t,e,o,r),to(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ne(),o=Vt(e),l=bt(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Bt(e,l,o),t!==null&&(at(t,e,o,r),to(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ne(),r=Vt(e),o=bt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Bt(e,o,r),t!==null&&(at(t,e,r,n),to(t,e,r))}};function Ia(e,t,n,r,o,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,s):t.prototype&&t.prototype.isPureReactComponent?!Xn(n,r)||!Xn(o,l):!0}function La(e,t,n){var r=!1,o=Ft,l=t.contextType;return typeof l=="object"&&l!==null?l=Ge(l):(o=Ae(t)?Kt:Se.current,r=t.contextTypes,l=(r=r!=null)?xn(e,o):Ft),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=uo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Aa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&uo.enqueueReplaceState(t,t.state,null)}function Ql(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ol(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=Ge(l):(l=Ae(t)?Kt:Se.current,o.context=xn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(ql(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&uo.enqueueReplaceState(o,o.state,null),no(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function jn(e,t){try{var n="",r=t;do n+=W(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function Gl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Yl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var id=typeof WeakMap=="function"?WeakMap:Map;function Oa(e,t,n){n=bt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){yo||(yo=!0,ds=r),Yl(e,t)},n}function Ra(e,t,n){n=bt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Yl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Yl(e,t),typeof r!="function"&&(Ht===null?Ht=new Set([this]):Ht.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Ma(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new id;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=xd.bind(null,e,t,n),t.then(e,e))}function Fa(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function za(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=bt(-1,1),t.tag=2,Bt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var ad=xe.ReactCurrentOwner,Oe=!1;function Te(e,t,n,r){t.child=e===null?oa(t,null,n,r):Cn(t,e.child,n,r)}function Da(e,t,n,r,o){n=n.render;var l=t.ref;return Tn(t,o),r=Ul(e,t,n,r,l,o),n=Hl(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ct(e,t,o)):(le&&n&&bl(t),t.flags|=1,Te(e,t,r,o),t.child)}function Ba(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!vs(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Ua(e,t,l,r,o)):(e=Eo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&o)===0){var s=l.memoizedProps;if(n=n.compare,n=n!==null?n:Xn,n(s,r)&&e.ref===t.ref)return Ct(e,t,o)}return t.flags|=1,e=$t(l,r),e.ref=t.ref,e.return=t,t.child=e}function Ua(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(Xn(l,r)&&e.ref===t.ref)if(Oe=!1,t.pendingProps=r=l,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Oe=!0);else return t.lanes=e.lanes,Ct(e,t,o)}return Kl(e,t,n,r,o)}function Ha(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(In,We),We|=n;else{if((n&1073741824)===0)return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(In,We),We|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,K(In,We),We|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,K(In,We),We|=r;return Te(e,t,o,n),t.child}function Wa(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Kl(e,t,n,r,o){var l=Ae(n)?Kt:Se.current;return l=xn(t,l),Tn(t,o),n=Ul(e,t,n,r,l,o),r=Hl(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ct(e,t,o)):(le&&r&&bl(t),t.flags|=1,Te(e,t,n,o),t.child)}function Va(e,t,n,r,o){if(Ae(n)){var l=!0;qr(t)}else l=!1;if(Tn(t,o),t.stateNode===null)fo(e,t),La(t,n,r),Ql(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,i=t.memoizedProps;s.props=i;var a=s.context,p=n.contextType;typeof p=="object"&&p!==null?p=Ge(p):(p=Ae(n)?Kt:Se.current,p=xn(t,p));var v=n.getDerivedStateFromProps,w=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function";w||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(i!==r||a!==p)&&Aa(t,s,r,p),Dt=!1;var g=t.memoizedState;s.state=g,no(t,r,s,o),a=t.memoizedState,i!==r||g!==a||Le.current||Dt?(typeof v=="function"&&(ql(t,n,v,r),a=t.memoizedState),(i=Dt||Ia(t,n,i,r,g,a,p))?(w||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),s.props=r,s.state=a,s.context=p,r=i):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,sa(e,t),i=t.memoizedProps,p=t.type===t.elementType?i:lt(t.type,i),s.props=p,w=t.pendingProps,g=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ge(a):(a=Ae(n)?Kt:Se.current,a=xn(t,a));var E=n.getDerivedStateFromProps;(v=typeof E=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(i!==w||g!==a)&&Aa(t,s,r,a),Dt=!1,g=t.memoizedState,s.state=g,no(t,r,s,o);var P=t.memoizedState;i!==w||g!==P||Le.current||Dt?(typeof E=="function"&&(ql(t,n,E,r),P=t.memoizedState),(p=Dt||Ia(t,n,p,r,g,P,a)||!1)?(v||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,P,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,P,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=P),s.props=r,s.state=P,s.context=a,r=p):(typeof s.componentDidUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Xl(e,t,n,r,l,o)}function Xl(e,t,n,r,o,l){Wa(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&Gi(t,n,!1),Ct(e,t,l);r=t.stateNode,ad.current=t;var i=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Cn(t,e.child,null,l),t.child=Cn(t,null,i,l)):Te(e,t,i,l),t.memoizedState=r.state,o&&Gi(t,n,!0),t.child}function Ja(e){var t=e.stateNode;t.pendingContext?qi(e,t.pendingContext,t.pendingContext!==t.context):t.context&&qi(e,t.context,!1),Rl(e,t.containerInfo)}function $a(e,t,n,r,o){return bn(),Nl(o),t.flags|=256,Te(e,t,n,r),t.child}var Zl={dehydrated:null,treeContext:null,retryLane:0};function es(e){return{baseLanes:e,cachePool:null,transitions:null}}function qa(e,t,n){var r=t.pendingProps,o=se.current,l=!1,s=(t.flags&128)!==0,i;if((i=s)||(i=e!==null&&e.memoizedState===null?!1:(o&2)!==0),i?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),K(se,o&1),e===null)return Tl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(s=r.children,e=r.fallback,l?(r=t.mode,l=t.child,s={mode:"hidden",children:s},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=s):l=bo(s,r,0,null),e=an(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=es(n),t.memoizedState=Zl,e):ts(t,s));if(o=e.memoizedState,o!==null&&(i=o.dehydrated,i!==null))return ud(e,t,s,r,i,o,n);if(l){l=r.fallback,s=t.mode,o=e.child,i=o.sibling;var a={mode:"hidden",children:r.children};return(s&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=$t(o,a),r.subtreeFlags=o.subtreeFlags&14680064),i!==null?l=$t(i,l):(l=an(l,s,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,s=e.child.memoizedState,s=s===null?es(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Zl,r}return l=e.child,e=l.sibling,r=$t(l,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ts(e,t){return t=bo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function co(e,t,n,r){return r!==null&&Nl(r),Cn(t,e.child,null,n),e=ts(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ud(e,t,n,r,o,l,s){if(n)return t.flags&256?(t.flags&=-257,r=Gl(Error(m(422))),co(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=bo({mode:"visible",children:r.children},o,0,null),l=an(l,o,s,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,(t.mode&1)!==0&&Cn(t,e.child,null,s),t.child.memoizedState=es(s),t.memoizedState=Zl,l);if((t.mode&1)===0)return co(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var i=r.dgst;return r=i,l=Error(m(419)),r=Gl(l,r,void 0),co(e,t,s,r)}if(i=(s&e.childLanes)!==0,Oe||i){if(r=ye,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|s))!==0?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,Et(e,o),at(r,e,o,-1))}return ys(),r=Gl(Error(m(421))),co(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Sd.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,He=Rt(o.nextSibling),Ue=t,le=!0,ot=null,e!==null&&(qe[Qe++]=xt,qe[Qe++]=St,qe[Qe++]=Xt,xt=e.id,St=e.overflow,Xt=t),t=ts(t,r.children),t.flags|=4096,t)}function Qa(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ll(e.return,t,n)}function ns(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function Ga(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(Te(e,t,r.children,n),r=se.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qa(e,n,t);else if(e.tag===19)Qa(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(K(se,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ro(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ns(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ro(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ns(t,!0,n,null,l);break;case"together":ns(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ct(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),rn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(m(153));if(t.child!==null){for(e=t.child,n=$t(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$t(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function cd(e,t,n){switch(t.tag){case 3:Ja(t),bn();break;case 5:ua(t);break;case 1:Ae(t.type)&&qr(t);break;case 4:Rl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;K(Zr,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(K(se,se.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?qa(e,t,n):(K(se,se.current&1),e=Ct(e,t,n),e!==null?e.sibling:null);K(se,se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Ga(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),K(se,se.current),r)break;return null;case 22:case 23:return t.lanes=0,Ha(e,t,n)}return Ct(e,t,n)}var Ya,rs,Ka,Xa;Ya=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},rs=function(){},Ka=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,tn(mt.current);var l=null;switch(n){case"input":o=Lo(e,o),r=Lo(e,r),l=[];break;case"select":o=C({},o,{value:void 0}),r=C({},r,{value:void 0}),l=[];break;case"textarea":o=Ro(e,o),r=Ro(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Vr)}Fo(n,r);var s;n=null;for(p in o)if(!r.hasOwnProperty(p)&&o.hasOwnProperty(p)&&o[p]!=null)if(p==="style"){var i=o[p];for(s in i)i.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(A.hasOwnProperty(p)?l||(l=[]):(l=l||[]).push(p,null));for(p in r){var a=r[p];if(i=o?.[p],r.hasOwnProperty(p)&&a!==i&&(a!=null||i!=null))if(p==="style")if(i){for(s in i)!i.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&i[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(l||(l=[]),l.push(p,n)),n=a;else p==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,i=i?i.__html:void 0,a!=null&&i!==a&&(l=l||[]).push(p,a)):p==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(p,""+a):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(A.hasOwnProperty(p)?(a!=null&&p==="onScroll"&&Z("scroll",e),l||i===a||(l=[])):(l=l||[]).push(p,a))}n&&(l=l||[]).push("style",n);var p=l;(t.updateQueue=p)&&(t.flags|=4)}},Xa=function(e,t,n,r){n!==r&&(t.flags|=4)};function pr(e,t){if(!le)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function dd(e,t,n){var r=t.pendingProps;switch(Cl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return Ae(t.type)&&$r(),be(t),null;case 3:return r=t.stateNode,Nn(),ee(Le),ee(Se),zl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Kr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ot!==null&&(ms(ot),ot=null))),rs(e,t),be(t),null;case 5:Ml(t);var o=tn(ar.current);if(n=t.type,e!==null&&t.stateNode!=null)Ka(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(m(166));return be(t),null}if(e=tn(mt.current),Kr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[pt]=t,r[rr]=l,e=(t.mode&1)!==0,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(o=0;o<er.length;o++)Z(er[o],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":Ls(r,l),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},Z("invalid",r);break;case"textarea":Rs(r,l),Z("invalid",r)}Fo(n,l),o=null;for(var s in l)if(l.hasOwnProperty(s)){var i=l[s];s==="children"?typeof i=="string"?r.textContent!==i&&(l.suppressHydrationWarning!==!0&&Wr(r.textContent,i,e),o=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(l.suppressHydrationWarning!==!0&&Wr(r.textContent,i,e),o=["children",""+i]):A.hasOwnProperty(s)&&i!=null&&s==="onScroll"&&Z("scroll",r)}switch(n){case"input":kr(r),Os(r,l,!0);break;case"textarea":kr(r),Fs(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Vr)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=zs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[pt]=t,e[rr]=r,Ya(e,t,!1,!1),t.stateNode=e;e:{switch(s=zo(n,r),n){case"dialog":Z("cancel",e),Z("close",e),o=r;break;case"iframe":case"object":case"embed":Z("load",e),o=r;break;case"video":case"audio":for(o=0;o<er.length;o++)Z(er[o],e);o=r;break;case"source":Z("error",e),o=r;break;case"img":case"image":case"link":Z("error",e),Z("load",e),o=r;break;case"details":Z("toggle",e),o=r;break;case"input":Ls(e,r),o=Lo(e,r),Z("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=C({},r,{value:void 0}),Z("invalid",e);break;case"textarea":Rs(e,r),o=Ro(e,r),Z("invalid",e);break;default:o=r}Fo(n,o),i=o;for(l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="style"?Us(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Ds(e,a)):l==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Rn(e,a):typeof a=="number"&&Rn(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(A.hasOwnProperty(l)?a!=null&&l==="onScroll"&&Z("scroll",e):a!=null&&Ze(e,l,a,s))}switch(n){case"input":kr(e),Os(e,r,!1);break;case"textarea":kr(e),Fs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+q(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?un(e,!!r.multiple,l,!1):r.defaultValue!=null&&un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Vr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return be(t),null;case 6:if(e&&t.stateNode!=null)Xa(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(m(166));if(n=tn(ar.current),tn(mt.current),Kr(t)){if(r=t.stateNode,n=t.memoizedProps,r[pt]=t,(l=r.nodeValue!==n)&&(e=Ue,e!==null))switch(e.tag){case 3:Wr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Wr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pt]=t,t.stateNode=r}return be(t),null;case 13:if(ee(se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(le&&He!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ta(),bn(),t.flags|=98560,l=!1;else if(l=Kr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(m(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(m(317));l[pt]=t}else bn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;be(t),l=!1}else ot!==null&&(ms(ot),ot=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(se.current&1)!==0?he===0&&(he=3):ys())),t.updateQueue!==null&&(t.flags|=4),be(t),null);case 4:return Nn(),rs(e,t),e===null&&tr(t.stateNode.containerInfo),be(t),null;case 10:return Il(t.type._context),be(t),null;case 17:return Ae(t.type)&&$r(),be(t),null;case 19:if(ee(se),l=t.memoizedState,l===null)return be(t),null;if(r=(t.flags&128)!==0,s=l.rendering,s===null)if(r)pr(l,!1);else{if(he!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=ro(e),s!==null){for(t.flags|=128,pr(l,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,s=l.alternate,s===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,l.type=s.type,e=s.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return K(se,se.current&1|2),t.child}e=e.sibling}l.tail!==null&&de()>Ln&&(t.flags|=128,r=!0,pr(l,!1),t.lanes=4194304)}else{if(!r)if(e=ro(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),pr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!le)return be(t),null}else 2*de()-l.renderingStartTime>Ln&&n!==1073741824&&(t.flags|=128,r=!0,pr(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(n=l.last,n!==null?n.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=de(),t.sibling=null,n=se.current,K(se,r?n&1|2:n&1),t):(be(t),null);case 22:case 23:return gs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(We&1073741824)!==0&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),null;case 24:return null;case 25:return null}throw Error(m(156,t.tag))}function fd(e,t){switch(Cl(t),t.tag){case 1:return Ae(t.type)&&$r(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Nn(),ee(Le),ee(Se),zl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ml(t),null;case 13:if(ee(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(m(340));bn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ee(se),null;case 4:return Nn(),null;case 10:return Il(t.type._context),null;case 22:case 23:return gs(),null;case 24:return null;default:return null}}var po=!1,Ce=!1,pd=typeof WeakSet=="function"?WeakSet:Set,b=null;function _n(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(e,t,r)}else n.current=null}function os(e,t,n){try{n()}catch(r){ce(e,t,r)}}var Za=!1;function md(e,t){if(gl=Lr,e=Ii(),al(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var s=0,i=-1,a=-1,p=0,v=0,w=e,g=null;t:for(;;){for(var E;w!==n||o!==0&&w.nodeType!==3||(i=s+o),w!==l||r!==0&&w.nodeType!==3||(a=s+r),w.nodeType===3&&(s+=w.nodeValue.length),(E=w.firstChild)!==null;)g=w,w=E;for(;;){if(w===e)break t;if(g===n&&++p===o&&(i=s),g===l&&++v===r&&(a=s),(E=w.nextSibling)!==null)break;w=g,g=w.parentNode}w=E}n=i===-1||a===-1?null:{start:i,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(yl={focusedElem:e,selectionRange:n},Lr=!1,b=t;b!==null;)if(t=b,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,b=e;else for(;b!==null;){t=b;try{var P=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var T=P.memoizedProps,fe=P.memoizedState,d=t.stateNode,u=d.getSnapshotBeforeUpdate(t.elementType===t.type?T:lt(t.type,T),fe);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(m(163))}}catch(k){ce(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,b=e;break}b=t.return}return P=Za,Za=!1,P}function mr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&os(t,n,l)}o=o.next}while(o!==r)}}function mo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ls(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function eu(e){var t=e.alternate;t!==null&&(e.alternate=null,eu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pt],delete t[rr],delete t[xl],delete t[Yc],delete t[Kc])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function tu(e){return e.tag===5||e.tag===3||e.tag===4}function nu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ss(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vr));else if(r!==4&&(e=e.child,e!==null))for(ss(e,t,n),e=e.sibling;e!==null;)ss(e,t,n),e=e.sibling}function is(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(is(e,t,n),e=e.sibling;e!==null;)is(e,t,n),e=e.sibling}var we=null,st=!1;function Ut(e,t,n){for(n=n.child;n!==null;)ru(e,t,n),n=n.sibling}function ru(e,t,n){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(Pr,n)}catch{}switch(n.tag){case 5:Ce||_n(n,t);case 6:var r=we,o=st;we=null,Ut(e,t,n),we=r,st=o,we!==null&&(st?(e=we,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):we.removeChild(n.stateNode));break;case 18:we!==null&&(st?(e=we,n=n.stateNode,e.nodeType===8?kl(e.parentNode,n):e.nodeType===1&&kl(e,n),$n(e)):kl(we,n.stateNode));break;case 4:r=we,o=st,we=n.stateNode.containerInfo,st=!0,Ut(e,t,n),we=r,st=o;break;case 0:case 11:case 14:case 15:if(!Ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,s=l.destroy;l=l.tag,s!==void 0&&((l&2)!==0||(l&4)!==0)&&os(n,t,s),o=o.next}while(o!==r)}Ut(e,t,n);break;case 1:if(!Ce&&(_n(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(i){ce(n,t,i)}Ut(e,t,n);break;case 21:Ut(e,t,n);break;case 22:n.mode&1?(Ce=(r=Ce)||n.memoizedState!==null,Ut(e,t,n),Ce=r):Ut(e,t,n);break;default:Ut(e,t,n)}}function ou(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new pd),t.forEach(function(r){var o=Ed.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function it(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,s=t,i=s;e:for(;i!==null;){switch(i.tag){case 5:we=i.stateNode,st=!1;break e;case 3:we=i.stateNode.containerInfo,st=!0;break e;case 4:we=i.stateNode.containerInfo,st=!0;break e}i=i.return}if(we===null)throw Error(m(160));ru(l,s,o),we=null,st=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(p){ce(o,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)lu(t,e),t=t.sibling}function lu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(it(t,e),gt(e),r&4){try{mr(3,e,e.return),mo(3,e)}catch(T){ce(e,e.return,T)}try{mr(5,e,e.return)}catch(T){ce(e,e.return,T)}}break;case 1:it(t,e),gt(e),r&512&&n!==null&&_n(n,n.return);break;case 5:if(it(t,e),gt(e),r&512&&n!==null&&_n(n,n.return),e.flags&32){var o=e.stateNode;try{Rn(o,"")}catch(T){ce(e,e.return,T)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,s=n!==null?n.memoizedProps:l,i=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{i==="input"&&l.type==="radio"&&l.name!=null&&As(o,l),zo(i,s);var p=zo(i,l);for(s=0;s<a.length;s+=2){var v=a[s],w=a[s+1];v==="style"?Us(o,w):v==="dangerouslySetInnerHTML"?Ds(o,w):v==="children"?Rn(o,w):Ze(o,v,w,p)}switch(i){case"input":Ao(o,l);break;case"textarea":Ms(o,l);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var E=l.value;E!=null?un(o,!!l.multiple,E,!1):g!==!!l.multiple&&(l.defaultValue!=null?un(o,!!l.multiple,l.defaultValue,!0):un(o,!!l.multiple,l.multiple?[]:"",!1))}o[rr]=l}catch(T){ce(e,e.return,T)}}break;case 6:if(it(t,e),gt(e),r&4){if(e.stateNode===null)throw Error(m(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(T){ce(e,e.return,T)}}break;case 3:if(it(t,e),gt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$n(t.containerInfo)}catch(T){ce(e,e.return,T)}break;case 4:it(t,e),gt(e);break;case 13:it(t,e),gt(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(cs=de())),r&4&&ou(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(Ce=(p=Ce)||v,it(t,e),Ce=p):it(t,e),gt(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!v&&(e.mode&1)!==0)for(b=e,v=e.child;v!==null;){for(w=b=v;b!==null;){switch(g=b,E=g.child,g.tag){case 0:case 11:case 14:case 15:mr(4,g,g.return);break;case 1:_n(g,g.return);var P=g.stateNode;if(typeof P.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,P.props=t.memoizedProps,P.state=t.memoizedState,P.componentWillUnmount()}catch(T){ce(r,n,T)}}break;case 5:_n(g,g.return);break;case 22:if(g.memoizedState!==null){au(w);continue}}E!==null?(E.return=g,b=E):au(w)}v=v.sibling}e:for(v=null,w=e;;){if(w.tag===5){if(v===null){v=w;try{o=w.stateNode,p?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(i=w.stateNode,a=w.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,i.style.display=Bs("display",s))}catch(T){ce(e,e.return,T)}}}else if(w.tag===6){if(v===null)try{w.stateNode.nodeValue=p?"":w.memoizedProps}catch(T){ce(e,e.return,T)}}else if((w.tag!==22&&w.tag!==23||w.memoizedState===null||w===e)&&w.child!==null){w.child.return=w,w=w.child;continue}if(w===e)break e;for(;w.sibling===null;){if(w.return===null||w.return===e)break e;v===w&&(v=null),w=w.return}v===w&&(v=null),w.sibling.return=w.return,w=w.sibling}}break;case 19:it(t,e),gt(e),r&4&&ou(e);break;case 21:break;default:it(t,e),gt(e)}}function gt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(tu(n)){var r=n;break e}n=n.return}throw Error(m(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Rn(o,""),r.flags&=-33);var l=nu(e);is(e,l,o);break;case 3:case 4:var s=r.stateNode.containerInfo,i=nu(e);ss(e,i,s);break;default:throw Error(m(161))}}catch(a){ce(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hd(e,t,n){b=e,su(e)}function su(e,t,n){for(var r=(e.mode&1)!==0;b!==null;){var o=b,l=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||po;if(!s){var i=o.alternate,a=i!==null&&i.memoizedState!==null||Ce;i=po;var p=Ce;if(po=s,(Ce=a)&&!p)for(b=o;b!==null;)s=b,a=s.child,s.tag===22&&s.memoizedState!==null?uu(o):a!==null?(a.return=s,b=a):uu(o);for(;l!==null;)b=l,su(l),l=l.sibling;b=o,po=i,Ce=p}iu(e)}else(o.subtreeFlags&8772)!==0&&l!==null?(l.return=o,b=l):iu(e)}}function iu(e){for(;b!==null;){var t=b;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ce||mo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ce)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:lt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&aa(t,l,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}aa(t,s,n)}break;case 5:var i=t.stateNode;if(n===null&&t.flags&4){n=i;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var v=p.memoizedState;if(v!==null){var w=v.dehydrated;w!==null&&$n(w)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(m(163))}Ce||t.flags&512&&ls(t)}catch(g){ce(t,t.return,g)}}if(t===e){b=null;break}if(n=t.sibling,n!==null){n.return=t.return,b=n;break}b=t.return}}function au(e){for(;b!==null;){var t=b;if(t===e){b=null;break}var n=t.sibling;if(n!==null){n.return=t.return,b=n;break}b=t.return}}function uu(e){for(;b!==null;){var t=b;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{mo(4,t)}catch(a){ce(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){ce(t,o,a)}}var l=t.return;try{ls(t)}catch(a){ce(t,l,a)}break;case 5:var s=t.return;try{ls(t)}catch(a){ce(t,s,a)}}}catch(a){ce(t,t.return,a)}if(t===e){b=null;break}var i=t.sibling;if(i!==null){i.return=t.return,b=i;break}b=t.return}}var gd=Math.ceil,ho=xe.ReactCurrentDispatcher,as=xe.ReactCurrentOwner,Ke=xe.ReactCurrentBatchConfig,H=0,ye=null,pe=null,ke=0,We=0,In=Mt(0),he=0,hr=null,rn=0,go=0,us=0,gr=null,Re=null,cs=0,Ln=1/0,Pt=null,yo=!1,ds=null,Ht=null,vo=!1,Wt=null,wo=0,yr=0,fs=null,ko=-1,xo=0;function Ne(){return(H&6)!==0?de():ko!==-1?ko:ko=de()}function Vt(e){return(e.mode&1)===0?1:(H&2)!==0&&ke!==0?ke&-ke:Zc.transition!==null?(xo===0&&(xo=ni()),xo):(e=Q,e!==0||(e=window.event,e=e===void 0?16:di(e.type)),e)}function at(e,t,n,r){if(50<yr)throw yr=0,fs=null,Error(m(185));Un(e,n,r),((H&2)===0||e!==ye)&&(e===ye&&((H&2)===0&&(go|=n),he===4&&Jt(e,ke)),Me(e,r),n===1&&H===0&&(t.mode&1)===0&&(Ln=de()+500,Qr&&zt()))}function Me(e,t){var n=e.callbackNode;Zu(e,t);var r=jr(e,e===ye?ke:0);if(r===0)n!==null&&Zs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Zs(n),t===1)e.tag===0?Xc(du.bind(null,e)):Yi(du.bind(null,e)),Qc(function(){(H&6)===0&&zt()}),n=null;else{switch(ri(r)){case 1:n=Jo;break;case 4:n=ei;break;case 16:n=Cr;break;case 536870912:n=ti;break;default:n=Cr}n=wu(n,cu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function cu(e,t){if(ko=-1,xo=0,(H&6)!==0)throw Error(m(327));var n=e.callbackNode;if(An()&&e.callbackNode!==n)return null;var r=jr(e,e===ye?ke:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=So(e,r);else{t=r;var o=H;H|=2;var l=pu();(ye!==e||ke!==t)&&(Pt=null,Ln=de()+500,ln(e,t));do try{wd();break}catch(i){fu(e,i)}while(!0);_l(),ho.current=l,H=o,pe!==null?t=0:(ye=null,ke=0,t=he)}if(t!==0){if(t===2&&(o=$o(e),o!==0&&(r=o,t=ps(e,o))),t===1)throw n=hr,ln(e,0),Jt(e,r),Me(e,de()),n;if(t===6)Jt(e,r);else{if(o=e.current.alternate,(r&30)===0&&!yd(o)&&(t=So(e,r),t===2&&(l=$o(e),l!==0&&(r=l,t=ps(e,l))),t===1))throw n=hr,ln(e,0),Jt(e,r),Me(e,de()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(m(345));case 2:sn(e,Re,Pt);break;case 3:if(Jt(e,r),(r&130023424)===r&&(t=cs+500-de(),10<t)){if(jr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ne(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=wl(sn.bind(null,e,Re,Pt),t);break}sn(e,Re,Pt);break;case 4:if(Jt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-nt(r);l=1<<s,s=t[s],s>o&&(o=s),r&=~l}if(r=o,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gd(r/1960))-r,10<r){e.timeoutHandle=wl(sn.bind(null,e,Re,Pt),r);break}sn(e,Re,Pt);break;case 5:sn(e,Re,Pt);break;default:throw Error(m(329))}}}return Me(e,de()),e.callbackNode===n?cu.bind(null,e):null}function ps(e,t){var n=gr;return e.current.memoizedState.isDehydrated&&(ln(e,t).flags|=256),e=So(e,t),e!==2&&(t=Re,Re=n,t!==null&&ms(t)),e}function ms(e){Re===null?Re=e:Re.push.apply(Re,e)}function yd(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!rt(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Jt(e,t){for(t&=~us,t&=~go,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-nt(t),r=1<<n;e[n]=-1,t&=~r}}function du(e){if((H&6)!==0)throw Error(m(327));An();var t=jr(e,0);if((t&1)===0)return Me(e,de()),null;var n=So(e,t);if(e.tag!==0&&n===2){var r=$o(e);r!==0&&(t=r,n=ps(e,r))}if(n===1)throw n=hr,ln(e,0),Jt(e,t),Me(e,de()),n;if(n===6)throw Error(m(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,sn(e,Re,Pt),Me(e,de()),null}function hs(e,t){var n=H;H|=1;try{return e(t)}finally{H=n,H===0&&(Ln=de()+500,Qr&&zt())}}function on(e){Wt!==null&&Wt.tag===0&&(H&6)===0&&An();var t=H;H|=1;var n=Ke.transition,r=Q;try{if(Ke.transition=null,Q=1,e)return e()}finally{Q=r,Ke.transition=n,H=t,(H&6)===0&&zt()}}function gs(){We=In.current,ee(In)}function ln(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,qc(n)),pe!==null)for(n=pe.return;n!==null;){var r=n;switch(Cl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$r();break;case 3:Nn(),ee(Le),ee(Se),zl();break;case 5:Ml(r);break;case 4:Nn();break;case 13:ee(se);break;case 19:ee(se);break;case 10:Il(r.type._context);break;case 22:case 23:gs()}n=n.return}if(ye=e,pe=e=$t(e.current,null),ke=We=t,he=0,hr=null,us=go=rn=0,Re=gr=null,en!==null){for(t=0;t<en.length;t++)if(n=en[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var s=l.next;l.next=o,r.next=s}n.pending=r}en=null}return e}function fu(e,t){do{var n=pe;try{if(_l(),oo.current=ao,lo){for(var r=ie.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}lo=!1}if(nn=0,ge=me=ie=null,ur=!1,cr=0,as.current=null,n===null||n.return===null){he=1,hr=t,pe=null;break}e:{var l=e,s=n.return,i=n,a=t;if(t=ke,i.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var p=a,v=i,w=v.tag;if((v.mode&1)===0&&(w===0||w===11||w===15)){var g=v.alternate;g?(v.updateQueue=g.updateQueue,v.memoizedState=g.memoizedState,v.lanes=g.lanes):(v.updateQueue=null,v.memoizedState=null)}var E=Fa(s);if(E!==null){E.flags&=-257,za(E,s,i,l,t),E.mode&1&&Ma(l,p,t),t=E,a=p;var P=t.updateQueue;if(P===null){var T=new Set;T.add(a),t.updateQueue=T}else P.add(a);break e}else{if((t&1)===0){Ma(l,p,t),ys();break e}a=Error(m(426))}}else if(le&&i.mode&1){var fe=Fa(s);if(fe!==null){(fe.flags&65536)===0&&(fe.flags|=256),za(fe,s,i,l,t),Nl(jn(a,i));break e}}l=a=jn(a,i),he!==4&&(he=2),gr===null?gr=[l]:gr.push(l),l=s;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var d=Oa(l,a,t);ia(l,d);break e;case 1:i=a;var u=l.type,f=l.stateNode;if((l.flags&128)===0&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ht===null||!Ht.has(f)))){l.flags|=65536,t&=-t,l.lanes|=t;var k=Ra(l,i,t);ia(l,k);break e}}l=l.return}while(l!==null)}hu(n)}catch(N){t=N,pe===n&&n!==null&&(pe=n=n.return);continue}break}while(!0)}function pu(){var e=ho.current;return ho.current=ao,e===null?ao:e}function ys(){(he===0||he===3||he===2)&&(he=4),ye===null||(rn&268435455)===0&&(go&268435455)===0||Jt(ye,ke)}function So(e,t){var n=H;H|=2;var r=pu();(ye!==e||ke!==t)&&(Pt=null,ln(e,t));do try{vd();break}catch(o){fu(e,o)}while(!0);if(_l(),H=n,ho.current=r,pe!==null)throw Error(m(261));return ye=null,ke=0,he}function vd(){for(;pe!==null;)mu(pe)}function wd(){for(;pe!==null&&!Vu();)mu(pe)}function mu(e){var t=vu(e.alternate,e,We);e.memoizedProps=e.pendingProps,t===null?hu(e):pe=t,as.current=null}function hu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=dd(n,t,We),n!==null){pe=n;return}}else{if(n=fd(n,t),n!==null){n.flags&=32767,pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{he=6,pe=null;return}}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);he===0&&(he=5)}function sn(e,t,n){var r=Q,o=Ke.transition;try{Ke.transition=null,Q=1,kd(e,t,n,r)}finally{Ke.transition=o,Q=r}return null}function kd(e,t,n,r){do An();while(Wt!==null);if((H&6)!==0)throw Error(m(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(m(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(ec(e,l),e===ye&&(pe=ye=null,ke=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||vo||(vo=!0,wu(Cr,function(){return An(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=Ke.transition,Ke.transition=null;var s=Q;Q=1;var i=H;H|=4,as.current=null,md(e,n),lu(n,e),Bc(yl),Lr=!!gl,yl=gl=null,e.current=n,hd(n),Ju(),H=i,Q=s,Ke.transition=l}else e.current=n;if(vo&&(vo=!1,Wt=e,wo=o),l=e.pendingLanes,l===0&&(Ht=null),Qu(n.stateNode),Me(e,de()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(yo)throw yo=!1,e=ds,ds=null,e;return(wo&1)!==0&&e.tag!==0&&An(),l=e.pendingLanes,(l&1)!==0?e===fs?yr++:(yr=0,fs=e):yr=0,zt(),null}function An(){if(Wt!==null){var e=ri(wo),t=Ke.transition,n=Q;try{if(Ke.transition=null,Q=16>e?16:e,Wt===null)var r=!1;else{if(e=Wt,Wt=null,wo=0,(H&6)!==0)throw Error(m(331));var o=H;for(H|=4,b=e.current;b!==null;){var l=b,s=l.child;if((b.flags&16)!==0){var i=l.deletions;if(i!==null){for(var a=0;a<i.length;a++){var p=i[a];for(b=p;b!==null;){var v=b;switch(v.tag){case 0:case 11:case 15:mr(8,v,l)}var w=v.child;if(w!==null)w.return=v,b=w;else for(;b!==null;){v=b;var g=v.sibling,E=v.return;if(eu(v),v===p){b=null;break}if(g!==null){g.return=E,b=g;break}b=E}}}var P=l.alternate;if(P!==null){var T=P.child;if(T!==null){P.child=null;do{var fe=T.sibling;T.sibling=null,T=fe}while(T!==null)}}b=l}}if((l.subtreeFlags&2064)!==0&&s!==null)s.return=l,b=s;else e:for(;b!==null;){if(l=b,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:mr(9,l,l.return)}var d=l.sibling;if(d!==null){d.return=l.return,b=d;break e}b=l.return}}var u=e.current;for(b=u;b!==null;){s=b;var f=s.child;if((s.subtreeFlags&2064)!==0&&f!==null)f.return=s,b=f;else e:for(s=u;b!==null;){if(i=b,(i.flags&2048)!==0)try{switch(i.tag){case 0:case 11:case 15:mo(9,i)}}catch(N){ce(i,i.return,N)}if(i===s){b=null;break e}var k=i.sibling;if(k!==null){k.return=i.return,b=k;break e}b=i.return}}if(H=o,zt(),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(Pr,e)}catch{}r=!0}return r}finally{Q=n,Ke.transition=t}}return!1}function gu(e,t,n){t=jn(n,t),t=Oa(e,t,1),e=Bt(e,t,1),t=Ne(),e!==null&&(Un(e,1,t),Me(e,t))}function ce(e,t,n){if(e.tag===3)gu(e,e,n);else for(;t!==null;){if(t.tag===3){gu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ht===null||!Ht.has(r))){e=jn(n,e),e=Ra(t,e,1),t=Bt(t,e,1),e=Ne(),t!==null&&(Un(t,1,e),Me(t,e));break}}t=t.return}}function xd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ne(),e.pingedLanes|=e.suspendedLanes&n,ye===e&&(ke&n)===n&&(he===4||he===3&&(ke&130023424)===ke&&500>de()-cs?ln(e,0):us|=n),Me(e,t)}function yu(e,t){t===0&&((e.mode&1)===0?t=1:(t=Nr,Nr<<=1,(Nr&130023424)===0&&(Nr=4194304)));var n=Ne();e=Et(e,t),e!==null&&(Un(e,t,n),Me(e,n))}function Sd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),yu(e,n)}function Ed(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(m(314))}r!==null&&r.delete(t),yu(e,n)}var vu;vu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Le.current)Oe=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Oe=!1,cd(e,t,n);Oe=(e.flags&131072)!==0}else Oe=!1,le&&(t.flags&1048576)!==0&&Ki(t,Yr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;fo(e,t),e=t.pendingProps;var o=xn(t,Se.current);Tn(t,n),o=Ul(null,t,r,e,o,n);var l=Hl();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ae(r)?(l=!0,qr(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ol(t),o.updater=uo,t.stateNode=o,o._reactInternals=t,Ql(t,r,e,n),t=Xl(null,t,r,!0,l,n)):(t.tag=0,le&&l&&bl(t),Te(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(fo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Cd(r),e=lt(r,e),o){case 0:t=Kl(null,t,r,e,n);break e;case 1:t=Va(null,t,r,e,n);break e;case 11:t=Da(null,t,r,e,n);break e;case 14:t=Ba(null,t,r,lt(r.type,e),n);break e}throw Error(m(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),Kl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),Va(e,t,r,o,n);case 3:e:{if(Ja(t),e===null)throw Error(m(387));r=t.pendingProps,l=t.memoizedState,o=l.element,sa(e,t),no(t,r,null,n);var s=t.memoizedState;if(r=s.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=jn(Error(m(423)),t),t=$a(e,t,r,n,o);break e}else if(r!==o){o=jn(Error(m(424)),t),t=$a(e,t,r,n,o);break e}else for(He=Rt(t.stateNode.containerInfo.firstChild),Ue=t,le=!0,ot=null,n=oa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bn(),r===o){t=Ct(e,t,n);break e}Te(e,t,r,n)}t=t.child}return t;case 5:return ua(t),e===null&&Tl(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,s=o.children,vl(r,o)?s=null:l!==null&&vl(r,l)&&(t.flags|=32),Wa(e,t),Te(e,t,s,n),t.child;case 6:return e===null&&Tl(t),null;case 13:return qa(e,t,n);case 4:return Rl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Cn(t,null,r,n):Te(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),Da(e,t,r,o,n);case 7:return Te(e,t,t.pendingProps,n),t.child;case 8:return Te(e,t,t.pendingProps.children,n),t.child;case 12:return Te(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,s=o.value,K(Zr,r._currentValue),r._currentValue=s,l!==null)if(rt(l.value,s)){if(l.children===o.children&&!Le.current){t=Ct(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var i=l.dependencies;if(i!==null){s=l.child;for(var a=i.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=bt(-1,n&-n),a.tag=2;var p=l.updateQueue;if(p!==null){p=p.shared;var v=p.pending;v===null?a.next=a:(a.next=v.next,v.next=a),p.pending=a}}l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Ll(l.return,n,t),i.lanes|=n;break}a=a.next}}else if(l.tag===10)s=l.type===t.type?null:l.child;else if(l.tag===18){if(s=l.return,s===null)throw Error(m(341));s.lanes|=n,i=s.alternate,i!==null&&(i.lanes|=n),Ll(s,n,t),s=l.sibling}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===t){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}Te(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Tn(t,n),o=Ge(o),r=r(o),t.flags|=1,Te(e,t,r,n),t.child;case 14:return r=t.type,o=lt(r,t.pendingProps),o=lt(r.type,o),Ba(e,t,r,o,n);case 15:return Ua(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),fo(e,t),t.tag=1,Ae(r)?(e=!0,qr(t)):e=!1,Tn(t,n),La(t,r,o),Ql(t,r,o,n),Xl(null,t,r,!0,e,n);case 19:return Ga(e,t,n);case 22:return Ha(e,t,n)}throw Error(m(156,t.tag))};function wu(e,t){return Xs(e,t)}function bd(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xe(e,t,n,r){return new bd(e,t,n,r)}function vs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Cd(e){if(typeof e=="function")return vs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ct)return 11;if(e===dt)return 14}return 2}function $t(e,t){var n=e.alternate;return n===null?(n=Xe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Eo(e,t,n,r,o,l){var s=2;if(r=e,typeof e=="function")vs(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case _e:return an(n.children,o,l,t);case $e:s=8,o|=8;break;case Nt:return e=Xe(12,n,t,o|2),e.elementType=Nt,e.lanes=l,e;case ze:return e=Xe(13,n,t,o),e.elementType=ze,e.lanes=l,e;case tt:return e=Xe(19,n,t,o),e.elementType=tt,e.lanes=l,e;case ue:return bo(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vt:s=10;break e;case Qt:s=9;break e;case ct:s=11;break e;case dt:s=14;break e;case Ie:s=16,r=null;break e}throw Error(m(130,e==null?e:typeof e,""))}return t=Xe(s,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function an(e,t,n,r){return e=Xe(7,e,r,t),e.lanes=n,e}function bo(e,t,n,r){return e=Xe(22,e,r,t),e.elementType=ue,e.lanes=n,e.stateNode={isHidden:!1},e}function ws(e,t,n){return e=Xe(6,e,null,t),e.lanes=n,e}function ks(e,t,n){return t=Xe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Pd(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qo(0),this.expirationTimes=qo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function xs(e,t,n,r,o,l,s,i,a){return e=new Pd(e,t,n,i,a),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Xe(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ol(l),e}function Td(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pe,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ku(e){if(!e)return Ft;e=e._reactInternals;e:{if(Gt(e)!==e||e.tag!==1)throw Error(m(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ae(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(m(171))}if(e.tag===1){var n=e.type;if(Ae(n))return Qi(e,n,t)}return t}function xu(e,t,n,r,o,l,s,i,a){return e=xs(n,r,!0,e,o,l,s,i,a),e.context=ku(null),n=e.current,r=Ne(),o=Vt(n),l=bt(r,o),l.callback=t??null,Bt(n,l,o),e.current.lanes=o,Un(e,o,r),Me(e,r),e}function Co(e,t,n,r){var o=t.current,l=Ne(),s=Vt(o);return n=ku(n),t.context===null?t.context=n:t.pendingContext=n,t=bt(l,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Bt(o,t,s),e!==null&&(at(e,o,s,l),to(e,o,s)),s}function Po(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Su(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ss(e,t){Su(e,t),(e=e.alternate)&&Su(e,t)}function Nd(){return null}var Eu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Es(e){this._internalRoot=e}To.prototype.render=Es.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(m(409));Co(e,t,null,null)},To.prototype.unmount=Es.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;on(function(){Co(null,e,null,null)}),t[wt]=null}};function To(e){this._internalRoot=e}To.prototype.unstable_scheduleHydration=function(e){if(e){var t=si();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lt.length&&t!==0&&t<Lt[n].priority;n++);Lt.splice(n,0,e),n===0&&ui(e)}};function bs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function No(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function bu(){}function jd(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var p=Po(s);l.call(p)}}var s=xu(t,r,e,0,null,!1,!1,"",bu);return e._reactRootContainer=s,e[wt]=s.current,tr(e.nodeType===8?e.parentNode:e),on(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var i=r;r=function(){var p=Po(a);i.call(p)}}var a=xs(e,0,!1,null,null,!1,!1,"",bu);return e._reactRootContainer=a,e[wt]=a.current,tr(e.nodeType===8?e.parentNode:e),on(function(){Co(t,a,n,r)}),a}function jo(e,t,n,r,o){var l=n._reactRootContainer;if(l){var s=l;if(typeof o=="function"){var i=o;o=function(){var a=Po(s);i.call(a)}}Co(t,s,e,o)}else s=jd(n,t,e,o,r);return Po(s)}oi=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Bn(t.pendingLanes);n!==0&&(Qo(t,n|1),Me(t,de()),(H&6)===0&&(Ln=de()+500,zt()))}break;case 13:on(function(){var r=Et(e,1);if(r!==null){var o=Ne();at(r,e,1,o)}}),Ss(e,1)}},Go=function(e){if(e.tag===13){var t=Et(e,134217728);if(t!==null){var n=Ne();at(t,e,134217728,n)}Ss(e,134217728)}},li=function(e){if(e.tag===13){var t=Vt(e),n=Et(e,t);if(n!==null){var r=Ne();at(n,e,t,r)}Ss(e,t)}},si=function(){return Q},ii=function(e,t){var n=Q;try{return Q=e,t()}finally{Q=n}},Uo=function(e,t,n){switch(t){case"input":if(Ao(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Jr(r);if(!o)throw Error(m(90));Is(r),Ao(r,o)}}}break;case"textarea":Ms(e,n);break;case"select":t=n.value,t!=null&&un(e,!!n.multiple,t,!1)}},Js=hs,$s=on;var _d={usingClientEntryPoint:!1,Events:[or,wn,Jr,Ws,Vs,hs]},vr={findFiberByHostInstance:Yt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Id={bundleType:vr.bundleType,version:vr.version,rendererPackageName:vr.rendererPackageName,rendererConfig:vr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ys(e),e===null?null:e.stateNode},findFiberByHostInstance:vr.findFiberByHostInstance||Nd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_o.isDisabled&&_o.supportsFiber)try{Pr=_o.inject(Id),ft=_o}catch{}}return Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_d,Fe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bs(t))throw Error(m(200));return Td(e,t,null,n)},Fe.createRoot=function(e,t){if(!bs(e))throw Error(m(299));var n=!1,r="",o=Eu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=xs(e,1,!1,null,null,n,!1,r,o),e[wt]=t.current,tr(e.nodeType===8?e.parentNode:e),new Es(t)},Fe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(m(188)):(e=Object.keys(e).join(","),Error(m(268,e)));return e=Ys(t),e=e===null?null:e.stateNode,e},Fe.flushSync=function(e){return on(e)},Fe.hydrate=function(e,t,n){if(!No(t))throw Error(m(200));return jo(null,e,t,!0,n)},Fe.hydrateRoot=function(e,t,n){if(!bs(e))throw Error(m(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",s=Eu;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=xu(t,null,e,1,n??null,o,!1,l,s),e[wt]=t.current,tr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new To(t)},Fe.render=function(e,t,n){if(!No(t))throw Error(m(200));return jo(null,e,t,!1,n)},Fe.unmountComponentAtNode=function(e){if(!No(e))throw Error(m(40));return e._reactRootContainer?(on(function(){jo(null,null,e,!1,function(){e._reactRootContainer=null,e[wt]=null})}),!0):!1},Fe.unstable_batchedUpdates=hs,Fe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!No(n))throw Error(m(200));if(e==null||e._reactInternals===void 0)throw Error(m(38));return jo(e,t,n,!1,r)},Fe.version="18.3.1-next-f1338f8080-20240426",Fe}var Lu;function Bd(){if(Lu)return Ts.exports;Lu=1;function x(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x)}catch(j){console.error(j)}}return x(),Ts.exports=Dd(),Ts.exports}var Au;function Ud(){if(Au)return Io;Au=1;var x=Bd();return Io.createRoot=x.createRoot,Io.hydrateRoot=x.hydrateRoot,Io}var Hd=Ud(),Tt=_s();const Wd=Ad(Tt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=x=>x.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Jd=x=>x.replace(/^([A-Z])|[\s-_]+(\w)/g,(j,m,B)=>B?B.toUpperCase():m.toLowerCase()),Ou=x=>{const j=Jd(x);return j.charAt(0).toUpperCase()+j.slice(1)},Ru=(...x)=>x.filter((j,m,B)=>!!j&&j.trim()!==""&&B.indexOf(j)===m).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $d={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=Tt.forwardRef(({color:x="currentColor",size:j=24,strokeWidth:m=2,absoluteStrokeWidth:B,className:A="",children:M,iconNode:te,...U},R)=>Tt.createElement("svg",{ref:R,...$d,width:j,height:j,stroke:x,strokeWidth:B?Number(m)*24/Number(j):m,className:Ru("lucide",A),...U},[...te.map(([ne,ae])=>Tt.createElement(ne,ae)),...Array.isArray(M)?M:[M]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=(x,j)=>{const m=Tt.forwardRef(({className:B,...A},M)=>Tt.createElement(qd,{ref:M,iconNode:j,className:Ru(`lucide-${Vd(Ou(x))}`,`lucide-${x}`,B),...A}));return m.displayName=Ou(x),m};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Mu=Ve("book-open",Qd);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Yd=Ve("check",Gd);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Xd=Ve("chevron-down",Kd);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],ef=Ve("chevron-right",Zd);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],nf=Ve("code-xml",tf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]],of=Ve("code",rf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],sf=Ve("copy",lf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],uf=Ve("lightbulb",af);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],df=Ve("menu",cf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],pf=Ve("rocket",ff);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],hf=Ve("sparkles",mf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],yf=Ve("x",gf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],wf=Ve("zap",vf),kf=[{id:"phase-1",phase:"Phase 1: JavaScript Foundations",description:"Start here! Learn the basics: variables, functions, loops, and how to write your first JavaScript code.",topics:[{id:"intro-to-js",title:"Introduction to JavaScript"},{id:"js-basics",title:"JavaScript Basics"},{id:"operators",title:"Operators"},{id:"control-flow",title:"Control Flow"},{id:"functions",title:"Functions"}]},{id:"phase-2",phase:"Phase 2: Core JavaScript",description:"Understand how JavaScript really works: scope, closures, this keyword, and execution context.",topics:[{id:"execution-context",title:"Execution Context & Memory"},{id:"scope-hoisting",title:"Scope & Hoisting"},{id:"this-keyword",title:"this Keyword"},{id:"closures",title:"Closures"},{id:"call-apply-bind",title:"Call, Apply, Bind"}]},{id:"phase-3",phase:"Phase 3: Objects & OOP",description:"Master objects, prototypes, classes, and object-oriented programming in JavaScript.",topics:[{id:"objects",title:"Objects in JavaScript"},{id:"prototypes",title:"Prototypes & Inheritance"},{id:"constructors",title:"Constructor Functions"},{id:"es6-classes",title:"ES6 Classes"},{id:"oop-concepts",title:"OOP Concepts"}]},{id:"phase-4",phase:"Phase 4: Asynchronous JavaScript",description:"Learn async programming: callbacks, Promises, async/await, and the Event Loop.",topics:[{id:"sync-async",title:"Synchronous vs Asynchronous"},{id:"callbacks",title:"Callbacks"},{id:"promises",title:"Promises"},{id:"async-await",title:"Async / Await"},{id:"event-loop",title:"Event Loop"}]},{id:"phase-5",phase:"Phase 5: Arrays, Strings & Functional JS",description:"Deep dive into arrays, strings, functional programming, and performance techniques.",topics:[{id:"arrays",title:"Arrays (Deep Dive)"},{id:"strings",title:"Strings"},{id:"functional-programming",title:"Functional Programming"},{id:"debounce-throttle",title:"Debouncing & Throttling"}]},{id:"phase-6",phase:"Phase 6: DOM & Browser JavaScript",description:"Make websites interactive! Learn DOM manipulation, events, forms, and browser APIs.",topics:[{id:"dom-basics",title:"DOM Basics"},{id:"events",title:"Events"},{id:"forms-validation",title:"Forms & Validation"},{id:"browser-apis",title:"Browser APIs"},{id:"fetch-ajax",title:"Fetch API & AJAX"}]},{id:"phase-7",phase:"Phase 7: Modern JavaScript",description:"Use the latest ES6+ features: destructuring, spread operators, modules, and more.",topics:[{id:"es6-features",title:"ES6+ Features"}]},{id:"phase-8",phase:"Phase 8: Performance & Optimization",description:"Write fast, efficient code. Learn performance measurement and optimization techniques.",topics:[{id:"performance",title:"Performance Concepts"},{id:"optimization",title:"Optimization Techniques"}]},{id:"phase-9",phase:"Phase 9: Debugging & Testing",description:"Find and fix bugs like a pro. Learn debugging tools and testing basics.",topics:[{id:"debugging",title:"Debugging"},{id:"testing",title:"Testing Basics"}]},{id:"phase-10",phase:"Phase 10: JavaScript for Backend",description:"Use JavaScript on the server with Node.js and build REST APIs.",topics:[{id:"nodejs",title:"Node.js Fundamentals"},{id:"rest-api",title:"REST API Basics"}]},{id:"phase-11",phase:"Phase 11: Security & Best Practices",description:"Write secure code. Learn about common vulnerabilities and how to prevent them.",topics:[{id:"security",title:"Security"}]}];function xf({selectedTopic:x,onTopicSelect:j,isOpen:m,onClose:B}){const[A,M]=Wd.useState(new Set),te=R=>{const ne=new Set(A);ne.has(R)?ne.delete(R):ne.add(R),M(ne)},U=["📚","⚙️","🏗️","⏱️","🎯","🌐","✨","⚡","🐛","🖥️","🔒"];return h.jsxs(h.Fragment,{children:[m&&h.jsx("div",{className:"fixed inset-0 bg-black/50 z-30 lg:hidden backdrop-blur-sm",onClick:B}),h.jsxs("aside",{className:`
          fixed lg:sticky top-[73px] left-0 h-[calc(100vh-73px)] w-80 
          bg-gradient-to-b from-gray-900 to-gray-950 border-r border-gray-800/50
          overflow-y-auto z-30 transition-transform duration-300 ease-in-out
          ${m?"translate-x-0":"-translate-x-full lg:translate-x-0"}
          scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent
        `,children:[h.jsx("div",{className:"p-4 space-y-2",children:kf.map((R,ne)=>{const ae=R.phase.match(/\d+/)?.[0]||"1",X=U[ne]||"📖";return h.jsxs("div",{className:"space-y-1",children:[h.jsxs("button",{onClick:()=>te(ae),className:"w-full flex items-center gap-2 px-3 py-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-purple-600/10 transition-all duration-200 text-left border border-transparent hover:border-blue-500/20 group",children:[h.jsx("span",{className:"text-xl",children:X}),A.has(ae)?h.jsx(Xd,{size:16,className:"text-blue-400 group-hover:text-blue-300"}):h.jsx(ef,{size:16,className:"text-gray-400 group-hover:text-blue-300"}),h.jsxs("div",{className:"flex-1",children:[h.jsx("div",{className:"text-sm font-semibold text-gray-100 group-hover:text-blue-300 transition-colors",children:R.phase}),R.description&&h.jsx("div",{className:"text-xs text-gray-500 mt-0.5 line-clamp-2",children:R.description})]})]}),A.has(ae)&&h.jsx("div",{className:"ml-6 space-y-1 animate-in slide-in-from-top-2 duration-200",children:R.topics.map(($,je)=>h.jsxs("button",{onClick:()=>j($.id),className:`
                          w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all duration-200
                          flex items-center gap-2 group
                          ${x===$.id?"bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20":"text-gray-300 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 hover:text-blue-300 hover:border-blue-500/30 border border-transparent"}
                        `,children:[x===$.id?h.jsx(wf,{size:14,className:"text-yellow-300"}):h.jsx(Mu,{size:14,className:"text-gray-500 group-hover:text-blue-400"}),h.jsx("span",{className:"flex-1",children:$.title}),h.jsx("span",{className:"text-xs opacity-50",children:String(je+1).padStart(2,"0")})]},$.id))})]},R.id)})}),h.jsx("div",{className:"sticky bottom-0 p-4 bg-gradient-to-t from-gray-950 to-transparent",children:h.jsx("div",{className:"bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-3 text-center",children:h.jsx("p",{className:"text-xs text-gray-400",children:"💡 Keep learning, keep growing!"})})})]})]})}const Sf={"intro-to-js":{title:"Introduction to JavaScript",phase:"1",sections:[{subtitle:"What is JavaScript?",content:`JavaScript is a programming language that makes websites interactive and alive. Think of HTML as the skeleton of a webpage, CSS as the skin and clothes, and JavaScript as the brain and muscles that make it move and respond to you.

JavaScript runs inside your web browser (like Chrome, Firefox, Safari) and can also run on servers using Node.js. It's one of the most popular programming languages in the world because almost every website uses it.`,points:["Makes web pages interactive - buttons work, animations play, forms validate","Runs in browsers (Chrome, Firefox, Safari) and on servers (Node.js)","Used everywhere - websites, mobile apps, desktop apps, games, even robots","Easy to start learning - you can write your first code in minutes"]},{subtitle:"History & Evolution",content:`JavaScript was created by Brendan Eich in just 10 days back in 1995! It was originally called Mocha, then renamed to LiveScript, and finally became JavaScript. The name "JavaScript" was chosen for marketing reasons (Java was popular then), but JavaScript and Java are completely different languages.

The language has grown tremendously. ES6 (released in 2015) was a huge update that added many modern features we use today.`,points:["1995 - Created in 10 days by Brendan Eich at Netscape","ES5 (2009) - Added strict mode and better JSON support","ES6/ES2015 - Big update! Added arrow functions, classes, promises, let/const","ES2016 onwards - Yearly updates with new features","TypeScript - A version of JavaScript with type checking (like a safety net)"]},{subtitle:"JavaScript vs Other Languages",content:"People often confuse JavaScript with other languages. Here's how it's different:",points:["JavaScript ≠ Java - They are completely different! JavaScript runs in browsers, Java runs on servers/apps","JavaScript is dynamically typed - You don't declare types, Java needs types (int, String, etc.)","Python - Similar ease of use, both are beginner-friendly","C++ - Much harder to learn, gives you more control but more complexity","JavaScript advantage - Works in every browser, no installation needed"]},{subtitle:"How JavaScript Runs",content:`When you write JavaScript code, it goes through several steps before it actually runs:

1. **Parsing** - The JavaScript engine reads your code like reading a book
2. **Compilation** - It converts your code into machine language (0s and 1s)
3. **Execution** - The computer actually runs the instructions

The most popular JavaScript engine is V8, created by Google. It powers Chrome browser and Node.js.`},{subtitle:"Your First JavaScript Code",code:`// Browser Console Example
console.log('Hello, JavaScript!');

// This simple line goes through:
// 1. Parsing (reading the code)
// 2. Compilation (converting to machine code)
// 3. Execution (running the code)
// 4. Output: "Hello, JavaScript!"

// Try this in your browser console (F12)
alert('Welcome to JavaScript!'); // Shows a popup
console.log(2 + 2); // Shows 4 in the console`,example:"Real-world use: When you visit Facebook, JavaScript updates your news feed without refreshing the page, validates your login form as you type, shows notifications in real-time, and makes everything interactive. Without JavaScript, websites would just be static pages like a printed magazine!"}]},"js-basics":{title:"JavaScript Basics",phase:"1",sections:[{subtitle:"Variables: var, let, const",content:`Variables are like labeled boxes where you store information. Just like you might have a box labeled "toys" or "books", in JavaScript you have variables with names that hold data.

JavaScript has three ways to create variables:
• **var** - The old way (avoid using it)
• **let** - Modern way, value can change
• **const** - Modern way, value cannot change (constant)`,code:`// var - function scoped, can be redeclared (old, avoid this)
var name = 'John';
var name = 'Jane'; // OK but confusing!

// let - block scoped, cannot be redeclared (RECOMMENDED)
let age = 25;
age = 26; // OK - you can change it
// let age = 27; // Error! Can't redeclare

// const - block scoped, cannot be reassigned (RECOMMENDED)
const PI = 3.14159;
// PI = 3.14; // Error! Constants can't change

// Important: const objects/arrays can have their contents changed
const user = { name: 'Alice' };
user.name = 'Bob'; // OK - changing property
user.age = 30; // OK - adding property
// user = {}; // Error - can't reassign the whole object`,example:"In real apps: Use const by default. Only use let when you know the value will change (like a counter). Never use var in modern JavaScript."},{subtitle:"Naming Conventions",points:["Use camelCase: firstName, lastName, userAge","Constants in UPPERCASE: MAX_SIZE, API_KEY","Must start with letter, $, or _","Cannot use reserved keywords: let, class, function",'Be descriptive: use "userName" not "un"']},{subtitle:"Data Types",content:`JavaScript has different types of data, just like in real life we have different types of things (numbers, words, yes/no answers).

**Primitive Types** (Simple, basic values):
• String - Text like "hello"
• Number - Numbers like 42 or 3.14
• Boolean - true or false
• undefined - Variable exists but has no value
• null - Intentionally empty
• BigInt - Really huge numbers
• Symbol - Unique identifiers

**Non-Primitive** (Complex, can hold multiple values):
• Object - Collections of key-value pairs
• Array - Ordered lists
• Function - Reusable code blocks`,code:`// Primitive Types (simple values)
let str = 'Hello';           // String - text in quotes
let num = 42;                // Number - any number
let bigNum = 123n;           // BigInt - huge numbers (notice the 'n')
let isActive = true;         // Boolean - true or false only
let notDefined;              // undefined - no value assigned yet
let empty = null;            // null - intentionally empty
let sym = Symbol('id');      // Symbol - unique identifier

// Non-Primitive (complex values)
let person = {               // Object - stores related data
  name: 'John',
  age: 30,
  isStudent: false
};
let colors = ['red', 'blue', 'green']; // Array - ordered list
let greet = function() {     // Function - reusable code
  console.log('Hi!');
};`,example:"Think of primitives like atoms (can't be broken down) and objects like molecules (made of multiple atoms). A person object might contain name (string), age (number), and isStudent (boolean)."},{subtitle:"typeof Operator",code:`console.log(typeof 'hello');      // "string"
console.log(typeof 42);           // "number"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object" (bug in JS!)
console.log(typeof {});           // "object"
console.log(typeof []);           // "object"
console.log(typeof function(){}); // "function"`},{subtitle:"Type Conversion & Coercion",code:`// Explicit Conversion (you do it)
let num = Number('123');      // 123
let str = String(456);        // "456"
let bool = Boolean(0);        // false

// Implicit Coercion (JavaScript does it)
console.log('5' + 3);         // "53" (number to string)
console.log('5' - 3);         // 2 (string to number)
console.log('5' * '2');       // 10 (both to numbers)
console.log(true + 1);        // 2 (true becomes 1)
console.log(false + 1);       // 1 (false becomes 0)`,example:'In a shopping cart, if a user enters "5" (string) in a quantity field, you need to convert it to a number before calculating the total: Number("5") * price'},{subtitle:"Truthy & Falsy Values",code:`// Falsy values (become false in boolean context)
// false, 0, -0, 0n, "", null, undefined, NaN

if (0) {
  console.log('This will not run');
}

if ('Hello') {
  console.log('This will run!'); // non-empty string is truthy
}

// Common use case
let username = '';
if (username) {
  console.log(\`Welcome, \${username}\`);
} else {
  console.log('Please enter a username'); // This runs
}`,example:"When checking if a user is logged in: if (user) { showDashboard(); } - if user is null or undefined, it won't show the dashboard."}]},operators:{title:"Operators",phase:"1",sections:[{subtitle:"What are Operators?",content:`Operators are symbols that tell JavaScript to perform specific operations on values. Think of them as the buttons on a calculator!

**Types of Operators:**
• **Arithmetic** - Math operations (+, -, *, /)
• **Assignment** - Storing values (=, +=, -=)
• **Comparison** - Comparing values (==, ===, >, <)
• **Logical** - Combining conditions (&&, ||, !)
• **Ternary** - Shortcut for if/else (?:)

Just like in math class where + means "add" and - means "subtract", JavaScript operators tell the computer what to do with your data.`},{subtitle:"Arithmetic Operators (Math)",content:"These operators perform mathematical calculations, just like a calculator.",code:`let a = 10, b = 3;

console.log(a + b);  // 13 (Addition)
console.log(a - b);  // 7  (Subtraction)
console.log(a * b);  // 30 (Multiplication)
console.log(a / b);  // 3.333... (Division)
console.log(a % b);  // 1  (Modulus - remainder)
console.log(a ** b); // 1000 (Exponentiation - 10³)

// Increment & Decrement
let x = 5;
console.log(x++);    // 5 (post-increment: use then increase)
console.log(x);      // 6
console.log(++x);    // 7 (pre-increment: increase then use)`,example:"Calculating a restaurant bill tip: const tip = billAmount * 0.15; const total = billAmount + tip;"},{subtitle:"Assignment Operators",code:`let num = 10;

num += 5;  // num = num + 5  → 15
num -= 3;  // num = num - 3  → 12
num *= 2;  // num = num * 2  → 24
num /= 4;  // num = num / 4  → 6
num %= 4;  // num = num % 4  → 2
num **= 3; // num = num ** 3 → 8`},{subtitle:"Comparison Operators",code:`// Equality
console.log(5 == '5');   // true  (loose equality - type coercion)
console.log(5 === '5');  // false (strict equality - no coercion)
console.log(5 != '5');   // false
console.log(5 !== '5');  // true

// Relational
console.log(10 > 5);     // true
console.log(10 < 5);     // false
console.log(10 >= 10);   // true
console.log(10 <= 9);    // false

// Best Practice: Always use === and !== to avoid bugs`,example:"Checking user age for access: if (userAge >= 18) { allowAccess(); } else { showAgeRestrictionMessage(); }"},{subtitle:"Logical Operators",code:`// AND (&&) - all must be true
console.log(true && true);   // true
console.log(true && false);  // false

// OR (||) - at least one must be true
console.log(true || false);  // true
console.log(false || false); // false

// NOT (!) - inverts boolean
console.log(!true);          // false
console.log(!false);         // true

// Real example
let age = 20;
let hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log('Can drive');
}

// Short-circuit evaluation
let username = userInput || 'Guest'; // Use 'Guest' if userInput is falsy`,example:"Form validation: if (email && password && agreedToTerms) { submitForm(); } - all fields must be filled."},{subtitle:"Ternary Operator",code:`// Syntax: condition ? valueIfTrue : valueIfFalse

let age = 20;
let canVote = age >= 18 ? 'Yes' : 'No';
console.log(canVote); // "Yes"

// Instead of:
let status;
if (isLoggedIn) {
  status = 'Welcome back!';
} else {
  status = 'Please log in';
}

// Use:
let status = isLoggedIn ? 'Welcome back!' : 'Please log in';

// Nested ternary (avoid if too complex)
let grade = score >= 90 ? 'A' : score >= 80 ? 'B' : 'C';`,example:'Displaying user role: const badge = isAdmin ? "👑 Admin" : "👤 User";'},{subtitle:"Operator Precedence",code:`// Higher precedence executes first
console.log(2 + 3 * 4);        // 14 (not 20)
console.log((2 + 3) * 4);      // 20 (parentheses first)

console.log(10 > 5 && 20 > 15); // true
console.log(true || false && false); // true (AND before OR)

// Common precedences (high to low):
// 1. Parentheses ()
// 2. Exponentiation **
// 3. Multiplication *, Division /, Modulus %
// 4. Addition +, Subtraction -
// 5. Comparison >, <, >=, <=
// 6. Equality ==, ===, !=, !==
// 7. Logical AND &&
// 8. Logical OR ||
// 9. Assignment =, +=, etc.`}]},"control-flow":{title:"Control Flow",phase:"1",sections:[{subtitle:"What is Control Flow?",content:`Control Flow is like a GPS for your code - it determines which path your program takes!

Imagine you're driving:
• **if/else** - "If road is closed, take detour, else continue straight"
• **switch** - "At roundabout, take 1st, 2nd, or 3rd exit based on destination"
• **loops** - "Keep driving until you reach your destination"

**Without control flow:** Code runs line by line, top to bottom (boring!)
**With control flow:** Code can make decisions, repeat tasks, and skip sections (powerful!)

Control flow makes your programs smart - they can respond differently based on conditions.`},{subtitle:"if, else if, else (Making Decisions)",content:`The if statement lets your code make decisions, like choosing what to wear based on the weather.

**How it works:**
1. Check a condition (is it true or false?)
2. If true → run this code block
3. If false → check next condition or run else block`,code:`let temperature = 25;

if (temperature > 30) {
  console.log('It\\'s hot!');
} else if (temperature > 20) {
  console.log('It\\'s warm');
} else if (temperature > 10) {
  console.log('It\\'s cool');
} else {
  console.log('It\\'s cold');
}

// Only one block executes
// Checks from top to bottom, stops at first true condition`,example:"E-commerce discount: if (totalAmount > 1000) { discount = 20%; } else if (totalAmount > 500) { discount = 10%; }"},{subtitle:"switch Statement",code:`let day = 'Monday';

switch (day) {
  case 'Monday':
    console.log('Start of work week');
    break;
  case 'Friday':
    console.log('TGIF!');
    break;
  case 'Saturday':
  case 'Sunday':
    console.log('Weekend!');
    break;
  default:
    console.log('Midweek day');
}

// Without break, it "falls through" to next case
let grade = 'B';
switch (grade) {
  case 'A':
  case 'B':
    console.log('Great job!');
    break;
  case 'C':
    console.log('Good');
    break;
  default:
    console.log('Keep trying');
}`,example:'Payment method handling: switch(paymentType) { case "card": processCardPayment(); break; case "paypal": processPayPal(); break; }'},{subtitle:"for Loop",code:`// Classic for loop
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

// Loop through array
let fruits = ['apple', 'banana', 'orange'];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// for...of (modern way for arrays)
for (let fruit of fruits) {
  console.log(fruit);
}

// for...in (for object properties)
let person = { name: 'John', age: 30 };
for (let key in person) {
  console.log(key, person[key]); // name John, age 30
}`,example:"Generating a multiplication table: for (let i = 1; i <= 10; i++) { console.log(`5 x ${i} = ${5 * i}`); }"},{subtitle:"while Loop",code:`// while - checks condition first
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

// Common use: user input validation
let password = '';
while (password.length < 8) {
  password = prompt('Enter password (min 8 chars):');
}

// Infinite loop (avoid!)
// while (true) {
//   console.log('This runs forever!');
// }`,example:"Game loop: while (playerHealth > 0 && enemyHealth > 0) { playTurn(); }"},{subtitle:"do...while Loop",code:`// Executes at least once, then checks condition
let num = 0;

do {
  console.log(num);
  num++;
} while (num < 5); // 0, 1, 2, 3, 4

// Difference from while:
let x = 10;
do {
  console.log('Runs once'); // This executes even though x >= 10
} while (x < 5);

// while version wouldn't execute at all
while (x < 5) {
  console.log('Never runs');
}`,example:'Menu system: do { showMenu(); choice = getUserChoice(); processChoice(choice); } while (choice !== "exit");'},{subtitle:"break & continue",code:`// break - exits loop completely
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i); // 0, 1, 2, 3, 4 (stops at 5)
}

// continue - skips current iteration
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i); // 0, 1, 3, 4 (skips 2)
}

// Real example: finding first match
let numbers = [1, 3, 5, 8, 9];
let firstEven;

for (let num of numbers) {
  if (num % 2 === 0) {
    firstEven = num;
    break; // Found it, no need to continue
  }
}
console.log(firstEven); // 8`,example:"Search function: for (let product of products) { if (product.id === searchId) { return product; break; } }"}]},functions:{title:"Functions",phase:"1",sections:[{subtitle:"What are Functions?",content:`Functions are like recipes in cooking. Instead of writing the same code over and over, you write it once in a function and use it whenever needed.

Think of a function as a machine: you put something in (input), it does some work, and gives you something back (output).

**Why use functions?**
• Avoid repeating code
• Make code organized and easier to read
• Easier to fix bugs (fix once, works everywhere)
• Break big problems into smaller pieces`},{subtitle:"Function Declaration",content:`The traditional way to create functions. These can be called even before they're defined in your code (called "hoisting").`,code:`// Basic function - like a recipe
function greet(name) {
  return 'Hello, ' + name;
}

console.log(greet('Alice')); // "Hello, Alice"
console.log(greet('Bob'));   // "Hello, Bob"

// Function with multiple inputs (parameters)
function add(a, b) {
  return a + b;
}
console.log(add(5, 3)); // 8

// Function without return (just does something)
function logMessage(msg) {
  console.log(msg);
  // no return statement = returns undefined
}

// Can be called before it's written (hoisting)
sayHello(); // Works!
function sayHello() {
  console.log('Hello!');
}`,example:"Real example - E-commerce: function calculateTotal(price, quantity, taxRate) { const subtotal = price * quantity; const tax = subtotal * taxRate; return subtotal + tax; }"},{subtitle:"Function Expression",code:`// Function stored in a variable (not hoisted)
const multiply = function(a, b) {
  return a * b;
};

console.log(multiply(5, 3)); // 15

// Cannot be called before definition
// sayHi(); // Error!
const sayHi = function() {
  return 'Hi!';
};`},{subtitle:"Arrow Functions (Modern Way)",content:`Arrow functions are a shorter, modern way to write functions. They were introduced in ES6 (2015) and are now the most popular way to write functions.

**Benefits:**
• Shorter syntax
• Cleaner code
• Different "this" behavior (explained in advanced sections)`,code:`// Traditional function
const square = (num) => {
  return num * num;
};
console.log(square(5)); // 25

// Super short - for one line
const square2 = num => num * num;
console.log(square2(5)); // 25

// Multiple parameters - need parentheses
const add = (a, b) => a + b;
console.log(add(3, 4)); // 7

// No parameters - need empty parentheses
const getRandom = () => Math.random();
console.log(getRandom()); // random number

// Returning an object - wrap in parentheses
const makePerson = (name, age) => ({ name: name, age: age });
// Even shorter with ES6 shorthand:
const makePerson2 = (name, age) => ({ name, age });

console.log(makePerson('John', 30)); 
// Output: {name: 'John', age: 30}`,example:"Real use - Doubling prices: const prices = [10, 20, 30]; const doubled = prices.map(price => price * 2); // [20, 40, 60]"},{subtitle:"Parameters & Arguments",code:`// Parameters are variables in function definition
// Arguments are actual values passed when calling

function introduce(name, age, city) {
  // name, age, city are parameters
  return \`I'm \${name}, \${age} years old, from \${city}\`;
}

// 'John', 25, 'NYC' are arguments
console.log(introduce('John', 25, 'NYC'));

// Missing arguments become undefined
console.log(introduce('Jane', 28));
// "I'm Jane, 28 years old, from undefined"`},{subtitle:"Default Parameters",code:`// Old way
function greet(name) {
  name = name || 'Guest';
  return 'Hello, ' + name;
}

// Modern way (ES6+)
function greet2(name = 'Guest') {
  return \`Hello, \${name}\`;
}

console.log(greet2());        // "Hello, Guest"
console.log(greet2('Alice')); // "Hello, Alice"

// Multiple defaults
function createUser(name, role = 'user', active = true) {
  return { name, role, active };
}

console.log(createUser('Bob'));
// {name: 'Bob', role: 'user', active: true}`,example:'API request with defaults: function fetchData(url, method = "GET", timeout = 5000) { /* ... */ }'},{subtitle:"Return Statement",code:`// Returns value and exits function
function getMax(a, b) {
  if (a > b) {
    return a;
  }
  return b; // This line won't run if a > b
}

// Multiple return points
function checkAge(age) {
  if (age < 0) return 'Invalid age';
  if (age < 18) return 'Minor';
  if (age < 65) return 'Adult';
  return 'Senior';
}

// No return = undefined
function doNothing() {
  let x = 5;
}
console.log(doNothing()); // undefined`,example:'Validation: function validateEmail(email) { if (!email.includes("@")) return false; return true; }'},{subtitle:"Nested Functions & Closures Preview",code:`// Function inside function
function outer() {
  let count = 0;
  
  function inner() {
    count++;
    return count;
  }
  
  return inner;
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Inner function has access to outer's variables
// This is a closure (covered in detail later)`,example:"Creating a private counter: const bankAccount = createAccount(); bankAccount.deposit(100); bankAccount.withdraw(50);"},{subtitle:"Anonymous Functions",code:`// Function without a name
setTimeout(function() {
  console.log('Executed after 1 second');
}, 1000);

// Arrow function version
setTimeout(() => {
  console.log('This also works!');
}, 1000);

// As callback
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(num) {
  return num * 2;
});

// Arrow version
const tripled = numbers.map(num => num * 3);`,example:'Event listener: button.addEventListener("click", function() { alert("Clicked!"); });'}]},"execution-context":{title:"Execution Context & Memory",phase:"2",sections:[{subtitle:"What is Execution Context? (Simple Explanation)",content:`Execution Context is like a workspace where JavaScript does its work. Imagine you're cooking:

**Your Kitchen = Execution Context**
• **Ingredients** = Variables
• **Recipe** = Your code
• **Cooking tools** = Functions
• **Kitchen counter** = Memory space

Every time you run JavaScript code, it creates a workspace (execution context) with:
1. **Memory** - Where variables and functions are stored
2. **Code** - The actual code to execute
3. **this** - Reference to the current object

**Types of Execution Contexts:**
• **Global** - The main kitchen (created when page loads)
• **Function** - A prep station (created when function runs)
• **Eval** - Special context (rarely used)

Understanding this helps you understand how JavaScript runs your code step by step!`},{subtitle:"Global Execution Context",code:`// This code runs in Global Execution Context
let globalVar = 'I am global';

function sayHello() {
  console.log('Hello');
}

// Global Context has:
// 1. Memory for globalVar and sayHello
// 2. this points to window (in browser)
// 3. Only ONE global context exists`,example:"When your HTML file loads, everything at the top level (not inside functions) runs in the global context."},{subtitle:"Function Execution Context",code:`function multiply(a, b) {
  let result = a * b;
  return result;
}

multiply(5, 3);

// When multiply() is called:
// 1. New Function Execution Context is created
// 2. Parameters a, b get values 5, 3
// 3. Memory allocated for 'result'
// 4. Code executes
// 5. Context is destroyed after return`},{subtitle:"The Call Stack",code:`function first() {
  console.log('First function');
  second();
  console.log('First function again');
}

function second() {
  console.log('Second function');
  third();
}

function third() {
  console.log('Third function');
}

first();

// Call Stack visualization:
// Step 1: [Global]
// Step 2: [Global, first]
// Step 3: [Global, first, second]
// Step 4: [Global, first, second, third]
// Step 5: [Global, first, second] (third removed)
// Step 6: [Global, first] (second removed)
// Step 7: [Global] (first removed)

// Output:
// First function
// Second function
// Third function
// First function again`,example:"When you call function A, which calls function B, which calls function C - they stack up. C finishes first, then B, then A (Last In, First Out)."},{subtitle:"Memory Creation & Execution Phases",code:`// Code example:
var x = 10;
function square(num) {
  var result = num * num;
  return result;
}
var squared = square(x);

// PHASE 1: Memory Creation
// - x: undefined
// - square: function code
// - squared: undefined

// PHASE 2: Execution
// - x = 10
// - square stays as function
// - square(x) is called:
//   - New context created
//   - Memory: num = undefined, result = undefined
//   - Execution: num = 10, result = 100
//   - Return 100
// - squared = 100`},{subtitle:"How JavaScript Code Runs",code:`let name = 'Alice';

function greet() {
  let message = 'Hello';
  console.log(message + ' ' + name);
}

greet();

// Step-by-step execution:
// 1. Global Execution Context created
// 2. Memory phase: name = undefined, greet = function
// 3. Execution phase: name = 'Alice'
// 4. greet() called → New Function Context
// 5. Memory: message = undefined
// 6. Execution: message = 'Hello'
// 7. Logs: "Hello Alice"
// 8. Function context destroyed
// 9. Back to global context`,example:'Understanding this helps you debug: if you get "undefined", the variable might be accessed before it is assigned in the execution phase.'}]},"scope-hoisting":{title:"Scope & Hoisting",phase:"2",sections:[{subtitle:"What is Scope? (Simple Explanation)",content:`Scope is like the visibility rules for variables - it determines where in your code you can access a variable.

Think of it like rooms in a house:

**🏠 Global Scope (Living Room)**
• Everyone in the house can access it
• Variables declared outside any function

**🚪 Function Scope (Bedroom)**
• Only people in that room can access it
• Variables declared with var, let, or const inside functions

**📦 Block Scope (Closet in bedroom)**
• Only accessible inside that block { }
• Variables declared with let or const in if, for, while blocks

**Why does this matter?**
• Prevents variable naming conflicts
• Protects data (encapsulation)
• Helps avoid bugs
• Makes code more organized`},{subtitle:"Global Scope (Accessible Everywhere)",content:"Variables declared outside any function or block. They can be accessed from anywhere in your code.",code:`// Variables declared outside functions
let globalVar = 'Accessible everywhere';

function showGlobal() {
  console.log(globalVar); // Can access
}

if (true) {
  console.log(globalVar); // Can access
}

showGlobal(); // "Accessible everywhere"

// Warning: Global variables can be modified anywhere
globalVar = 'Changed!';`,example:'Global variables: const API_URL = "https://api.example.com"; - can be used in any function.'},{subtitle:"Function Scope",code:`function myFunction() {
  var functionVar = 'Only inside function';
  let alsoFunctionScoped = 'Same here';
  
  console.log(functionVar); // Works
}

myFunction();
// console.log(functionVar); // Error! Not accessible outside

// Parameters are also function-scoped
function greet(name) {
  console.log(name); // OK
}
// console.log(name); // Error!`,example:'Function variables are private: function processPayment() { let cardNumber = "..."; } - cardNumber cannot be accessed outside.'},{subtitle:"Block Scope",code:`// let and const are block-scoped
if (true) {
  let blockVar = 'Only in this block';
  const alsoBlock = 'Me too';
  console.log(blockVar); // Works
}
// console.log(blockVar); // Error!

// var is NOT block-scoped
if (true) {
  var notBlock = 'I leak out!';
}
console.log(notBlock); // "I leak out!" (works!)

// for loop example
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Logs: 0, 1, 2

for (var j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 100);
}
// Logs: 3, 3, 3 (var is not block-scoped!)`,example:"Using let in loops: for (let i = 0; i < items.length; i++) { ... } - i is only accessible inside the loop."},{subtitle:"Scope Chain",code:`let global = 'global';

function outer() {
  let outerVar = 'outer';
  
  function inner() {
    let innerVar = 'inner';
    
    // Can access all three
    console.log(innerVar);  // "inner"
    console.log(outerVar);  // "outer"
    console.log(global);    // "global"
  }
  
  inner();
  // console.log(innerVar); // Error! Can't access inner's variables
}

outer();

// Lookup order: inner → outer → global
// If not found, ReferenceError`,example:"Nested functions in React: component → useEffect → event handler - inner can access outer variables."},{subtitle:"Hoisting",code:`// Function declarations are hoisted
sayHello(); // Works!

function sayHello() {
  console.log('Hello!');
}

// var is hoisted but initialized as undefined
console.log(x); // undefined (not error!)
var x = 5;
console.log(x); // 5

// Equivalent to:
// var x;
// console.log(x);
// x = 5;

// let and const are hoisted but in "Temporal Dead Zone"
// console.log(y); // ReferenceError!
let y = 10;`},{subtitle:"Hoisting: let, const, function",code:`// Function declarations - fully hoisted
greet(); // "Hello" - works!
function greet() {
  console.log('Hello');
}

// Function expressions - not hoisted
// sayHi(); // Error!
const sayHi = function() {
  console.log('Hi');
};

// var hoisting
console.log(a); // undefined
var a = 1;

// let/const hoisting - Temporal Dead Zone
// console.log(b); // ReferenceError!
let b = 2;

// console.log(c); // ReferenceError!
const c = 3;`,example:"Why use let/const: They prevent bugs from using variables before declaration. var lets you access before definition (gives undefined)."},{subtitle:"Temporal Dead Zone (TDZ)",code:`// TDZ = Time between entering scope and declaration

{
  // TDZ starts for 'x'
  // console.log(x); // ReferenceError
  // Still in TDZ
  let x = 5; // TDZ ends
  console.log(x); // 5 - OK
}

// Why TDZ exists:
// Prevents using variables before initialization
// Catches errors early

// Example with function parameter
function test(x = y, y = 2) {
  // Error! y is in TDZ when x is evaluated
}

function testCorrect(y = 2, x = y) {
  // OK! y is defined before x uses it
  console.log(x, y); // 2, 2
}`,example:"TDZ catches bugs: if (condition) { console.log(data); let data = fetchData(); } - Error! Must declare before use."}]},"this-keyword":{title:"this Keyword",phase:"2",sections:[{subtitle:'What is "this"?',content:'The "this" keyword refers to the object that is executing the current function. Its value depends on HOW a function is called, not where it is defined.'},{subtitle:"this in Global Scope",code:`console.log(this); // Window object (in browser)

function showThis() {
  console.log(this); // Window object (non-strict mode)
}

showThis();

// In strict mode:
'use strict';
function showThisStrict() {
  console.log(this); // undefined
}`},{subtitle:"this in Object Methods",code:`const person = {
  name: 'Alice',
  age: 30,
  greet: function() {
    console.log(this); // person object
    console.log(\`Hi, I'm \${this.name}\`);
  }
};

person.greet(); // "Hi, I'm Alice"

// Problem: losing context
const greetFunc = person.greet;
greetFunc(); // this = undefined (strict) or Window`,example:'Button click: const button = { text: "Click me", click() { alert(this.text); } }; button.click(); - this refers to button object.'},{subtitle:"this in Arrow Functions",code:`const person = {
  name: 'Bob',
  regularFunc: function() {
    console.log(this.name); // "Bob"
  },
  arrowFunc: () => {
    console.log(this.name); // undefined (this = Window/global)
  },
  nested: function() {
    const inner = () => {
      console.log(this.name); // "Bob" (inherits from nested)
    };
    inner();
  }
};

person.regularFunc(); // "Bob"
person.arrowFunc();   // undefined
person.nested();      // "Bob"

// Arrow functions don't have their own 'this'
// They inherit from parent scope`,example:"React class component: setTimeout(() => { this.setState(...); }, 1000); - arrow function keeps component this."},{subtitle:"this in Event Handlers",code:`// HTML: <button id="btn">Click me</button>

const button = document.getElementById('btn');

// Regular function - this = button element
button.addEventListener('click', function() {
  console.log(this); // <button> element
  this.style.background = 'red';
});

// Arrow function - this = Window (or parent scope)
button.addEventListener('click', () => {
  console.log(this); // Window (not button!)
  // this.style.background = 'red'; // Error!
});

// Solution: use event parameter
button.addEventListener('click', (e) => {
  e.target.style.background = 'blue';
});`,example:'Form submission: form.addEventListener("submit", function(e) { e.preventDefault(); console.log(this.elements.email.value); });'},{subtitle:"Interview Edge Cases",code:`// Case 1: Nested functions
const obj = {
  value: 10,
  method: function() {
    function inner() {
      console.log(this.value); // undefined!
    }
    inner();
  }
};
obj.method();

// Case 2: setTimeout
const obj2 = {
  value: 20,
  method: function() {
    setTimeout(function() {
      console.log(this.value); // undefined
    }, 100);
  }
};
obj2.method();

// Solution: Arrow function or bind
const obj3 = {
  value: 30,
  method: function() {
    setTimeout(() => {
      console.log(this.value); // 30
    }, 100);
  }
};
obj3.method();

// Case 3: Method extracted
const person = {
  name: 'Charlie',
  greet() { return \`Hi, \${this.name}\`; }
};

const greetFn = person.greet;
console.log(greetFn()); // "Hi, undefined"

// Solution:
const greetBound = person.greet.bind(person);
console.log(greetBound()); // "Hi, Charlie"`,example:"Common React mistake: <button onClick={this.handleClick}>Click</button> - need to bind or use arrow function in class component."}]},closures:{title:"Closures",phase:"2",sections:[{subtitle:"What is a Closure? (Simple Explanation)",content:`A closure is like a backpack that a function carries around. This backpack contains all the variables that were available when the function was created.

Even if the function is used somewhere else later, it still has access to everything in its backpack!

**Think of it like this:**
Imagine you pack a lunch box (variables) in the morning. Later at school (different scope), you can still open that lunch box and eat what you packed. The lunch box "closed" around your food and kept it safe.

**In simple terms:** A closure lets a function remember and access variables from where it was created, even after that place is gone.`},{subtitle:"Simple Closure Example",content:`Let's see a closure in action. The inner function "closes over" the outer variable, keeping it alive even after the outer function is done.`,code:`function outer() {
  let outerVar = 'I am outside';  // This variable is in outer function
  
  function inner() {
    console.log(outerVar);  // Inner can "see" outerVar
  }
  
  return inner;  // Return the inner function
}

const myFunc = outer();  // outer() runs and finishes
myFunc();  // "I am outside"

// MAGIC! Even though outer() finished and is gone,
// inner() still remembers outerVar!
// This is a CLOSURE - inner "closed over" outerVar

// Think of it as:
// outer() gave inner() a backpack with outerVar inside
// Even when outer() is gone, inner() still has that backpack`},{subtitle:"Classic Closure Example",code:`function createCounter() {
  let count = 0; // Private variable
  
  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
    getCount: function() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount());  // 1

// count is private, cannot access directly
// console.log(counter.count); // undefined`,example:"Private variables in modules: const calculator = createCalculator(); calculator.add(5); - internal state is protected."},{subtitle:"Practical Use Cases",code:`// 1. Data Privacy
function createBankAccount(initialBalance) {
  let balance = initialBalance;
  
  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
        return balance;
      }
      return 'Insufficient funds';
    },
    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount(1000);
account.deposit(500);  // 1500
account.withdraw(200); // 1300
// Cannot access balance directly!

// 2. Function Factories
function createGreeting(greeting) {
  return function(name) {
    return \`\${greeting}, \${name}!\`;
  };
}

const sayHello = createGreeting('Hello');
const sayHola = createGreeting('Hola');

console.log(sayHello('Alice')); // "Hello, Alice!"
console.log(sayHola('Bob'));    // "Hola, Bob!"`,example:"Creating specialized functions: const taxCalculator = createTaxCalculator(0.15); taxCalculator(100); // 115"},{subtitle:"Closures in Loops (Interview Favorite)",code:`// Problem: var is not block-scoped
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // 3, 3, 3 (NOT 0, 1, 2!)
  }, 1000);
}

// Solution 1: Use let (block-scoped)
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // 0, 1, 2
  }, 1000);
}

// Solution 2: IIFE (Immediately Invoked Function Expression)
for (var i = 0; i < 3; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(j); // 0, 1, 2
    }, 1000);
  })(i);
}

// Solution 3: Pass parameter to setTimeout
for (var i = 0; i < 3; i++) {
  setTimeout(function(j) {
    console.log(j); // 0, 1, 2
  }, 1000, i);
}`,example:'Adding event listeners in a loop: buttons.forEach((btn, i) => { btn.addEventListener("click", () => console.log(i)); });'},{subtitle:"Memory Implications",code:`// Closures keep references to outer variables
// Can cause memory leaks if not careful

function heavyOperation() {
  const bigArray = new Array(1000000).fill('data');
  
  return function() {
    // As long as this function exists,
    // bigArray stays in memory!
    console.log(bigArray[0]);
  };
}

const fn = heavyOperation();
// bigArray is still in memory

// Solution: Remove reference when done
fn = null; // Now bigArray can be garbage collected

// Good practice: only close over what you need
function betterOperation() {
  const bigArray = new Array(1000000).fill('data');
  const firstElement = bigArray[0];
  
  return function() {
    console.log(firstElement); // Only keeps firstElement
  };
}`,example:'Event listeners: Always remove listeners when component unmounts to avoid memory leaks: button.removeEventListener("click", handler);'},{subtitle:"Common Interview Questions",code:`// Q: What will this output?
function createFunctions() {
  const arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(function() {
      return i;
    });
  }
  return arr;
}

const funcs = createFunctions();
console.log(funcs[0]()); // 3
console.log(funcs[1]()); // 3
console.log(funcs[2]()); // 3
// All return 3 because they share same 'i'

// Q: Fix it to return 0, 1, 2
function createFunctionsFix() {
  const arr = [];
  for (let i = 0; i < 3; i++) { // Use let
    arr.push(function() {
      return i;
    });
  }
  return arr;
}`}]},"call-apply-bind":{title:"Call, Apply, Bind",phase:"2",sections:[{subtitle:"Function Borrowing",content:'call(), apply(), and bind() are methods that allow you to set the value of "this" explicitly and borrow methods from other objects.'},{subtitle:"call() Method",code:`const person1 = {
  name: 'Alice',
  greet: function(greeting, punctuation) {
    return \`\${greeting}, I'm \${this.name}\${punctuation}\`;
  }
};

const person2 = {
  name: 'Bob'
};

// Normal call
console.log(person1.greet('Hello', '!')); 
// "Hello, I'm Alice!"

// Using call() to borrow method
console.log(person1.greet.call(person2, 'Hi', '.'));
// "Hi, I'm Bob."

// Syntax: func.call(thisArg, arg1, arg2, ...)`,example:"Array method on array-like: Array.prototype.slice.call(arguments) - borrow slice for array-like objects."},{subtitle:"apply() Method",code:`const person = {
  name: 'Charlie',
  introduce: function(age, city) {
    return \`I'm \${this.name}, \${age} years old, from \${city}\`;
  }
};

const anotherPerson = { name: 'Diana' };

// apply takes array of arguments
console.log(person.introduce.apply(anotherPerson, [25, 'NYC']));
// "I'm Diana, 25 years old, from NYC"

// vs call (takes separate arguments)
console.log(person.introduce.call(anotherPerson, 25, 'NYC'));

// Useful with Math functions
const numbers = [5, 2, 8, 1, 9];
console.log(Math.max.apply(null, numbers)); // 9

// Modern alternative (spread operator)
console.log(Math.max(...numbers)); // 9`,example:"Merging arrays: Array.prototype.push.apply(arr1, arr2) - or use arr1.push(...arr2) in modern JS."},{subtitle:"bind() Method",code:`const person = {
  name: 'Eve',
  greet: function() {
    return \`Hello, I'm \${this.name}\`;
  }
};

// bind() returns a NEW function with 'this' bound
const greetEve = person.greet.bind(person);

console.log(greetEve()); // "Hello, I'm Eve"

// Use case: callbacks
setTimeout(person.greet, 1000); 
// "Hello, I'm undefined" - loses context!

setTimeout(person.greet.bind(person), 1000);
// "Hello, I'm Eve" - context preserved!

// Partial application
function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);
console.log(double(5)); // 10 (2 * 5)
console.log(double(3)); // 6  (2 * 3)`,example:"React class components: <button onClick={this.handleClick.bind(this)}>Click</button> - bind this to component."},{subtitle:"Comparison: call vs apply vs bind",code:`const obj = { value: 42 };

function showValue(a, b) {
  console.log(this.value, a, b);
}

// call - executes immediately, args separate
showValue.call(obj, 1, 2); // 42 1 2

// apply - executes immediately, args as array
showValue.apply(obj, [1, 2]); // 42 1 2

// bind - returns new function, doesn't execute
const boundFunc = showValue.bind(obj, 1, 2);
boundFunc(); // 42 1 2

// When to use which:
// call: When you know arguments in advance
// apply: When arguments are in an array
// bind: When you need function for later (callbacks)`},{subtitle:"Polyfill Understanding",code:`// Simple bind polyfill (not production-ready)
if (!Function.prototype.bind) {
  Function.prototype.bind = function(context, ...args) {
    const fn = this;
    return function(...newArgs) {
      return fn.apply(context, [...args, ...newArgs]);
    };
  };
}

// Simple call polyfill
if (!Function.prototype.call) {
  Function.prototype.call = function(context, ...args) {
    context = context || globalThis;
    const fnSymbol = Symbol();
    context[fnSymbol] = this;
    const result = context[fnSymbol](...args);
    delete context[fnSymbol];
    return result;
  };
}

// How it works:
const person = { name: 'Frank' };
function greet() {
  return \`Hi, \${this.name}\`;
}

// greet.call(person) internally does:
// person.greet = greet;
// person.greet();
// delete person.greet;`,example:'Understanding polyfills helps in interviews: "Implement your own bind() function" - common question.'},{subtitle:"Real-World Examples",code:`// 1. Event handlers
class Button {
  constructor(label) {
    this.label = label;
  }
  
  handleClick() {
    console.log(\`Button "\${this.label}" clicked\`);
  }
  
  render() {
    const btn = document.createElement('button');
    btn.textContent = this.label;
    btn.addEventListener('click', this.handleClick.bind(this));
    return btn;
  }
}

// 2. Borrowing array methods
const arrayLike = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
};

const arr = Array.prototype.slice.call(arrayLike);
console.log(arr); // ['a', 'b', 'c']

// 3. Function currying
function log(level, message) {
  console.log(\`[\${level}] \${message}\`);
}

const logError = log.bind(null, 'ERROR');
const logInfo = log.bind(null, 'INFO');

logError('Something went wrong'); // [ERROR] Something went wrong
logInfo('Process completed');      // [INFO] Process completed`,example:'Logging utility: const logger = console.log.bind(console, "[APP]"); logger("Started"); // [APP] Started'}]},objects:{title:"Objects in JavaScript",phase:"3",sections:[{subtitle:"What are Objects? (Simple Explanation)",content:`Objects are like containers that hold related information together. Think of a person - they have a name, age, address, etc. Instead of storing these in separate variables, we group them in an object!

**Real-World Analogy:**
Imagine a contact card in your phone:
• Name: "John Doe"
• Phone: "555-1234"
• Email: "john@example.com"

In JavaScript, this becomes an object with properties!

**Why Use Objects?**
• Group related data together
• Easier to organize and manage
• Can have methods (functions that belong to the object)
• Represent real-world things in code

**Everything in JavaScript is an object** (except primitives like numbers, strings, booleans). Even arrays and functions are special types of objects!`},{subtitle:"Creating Objects (Different Ways)",content:"JavaScript gives you multiple ways to create objects. Object literal syntax is the most common and easiest.",code:`// 1. Object literal (most common)
const person = {
  name: 'John',
  age: 30,
  city: 'NYC'
};

// 2. new Object()
const person2 = new Object();
person2.name = 'Jane';
person2.age = 25;

// 3. Object.create()
const proto = { species: 'Human' };
const person3 = Object.create(proto);
person3.name = 'Alice';

// 4. Constructor function (covered later)
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person4 = new Person('Bob', 35);`},{subtitle:"Properties & Methods",code:`const car = {
  // Properties (data)
  brand: 'Toyota',
  model: 'Camry',
  year: 2022,
  
  // Methods (functions)
  start: function() {
    return 'Engine started';
  },
  
  // Shorthand method syntax (ES6)
  stop() {
    return 'Engine stopped';
  },
  
  // Method accessing properties
  getInfo() {
    return \`\${this.brand} \${this.model} (\${this.year})\`;
  }
};

console.log(car.brand);      // "Toyota"
console.log(car.start());    // "Engine started"
console.log(car.getInfo());  // "Toyota Camry (2022)"`,example:'User profile: const user = { name: "John", avatar: "...", updateProfile() { ... } };'},{subtitle:"Dot vs Bracket Notation",code:`const user = {
  name: 'Alice',
  age: 28,
  'favorite-color': 'blue', // Property with hyphen
  email: 'alice@example.com'
};

// Dot notation (preferred when possible)
console.log(user.name);  // "Alice"
user.age = 29;

// Bracket notation (required for special cases)
console.log(user['favorite-color']); // "blue"

// Dynamic property access
const prop = 'email';
console.log(user[prop]); // "alice@example.com"

// Computed property names
const key = 'score';
const value = 100;
const game = {
  [key]: value,           // score: 100
  [\`\${key}_max\`]: 1000  // score_max: 1000
};`,example:'Form data: const field = "username"; formData[field] = input.value; - dynamic key access.'},{subtitle:"Object Iteration",code:`const product = {
  name: 'Laptop',
  price: 999,
  stock: 50,
  category: 'Electronics'
};

// 1. for...in (iterates over keys)
for (let key in product) {
  console.log(\`\${key}: \${product[key]}\`);
}

// 2. Object.keys() - returns array of keys
const keys = Object.keys(product);
console.log(keys); // ['name', 'price', 'stock', 'category']

// 3. Object.values() - returns array of values
const values = Object.values(product);
console.log(values); // ['Laptop', 999, 50, 'Electronics']

// 4. Object.entries() - returns array of [key, value] pairs
const entries = Object.entries(product);
console.log(entries);
// [['name', 'Laptop'], ['price', 999], ...]

// Using with forEach
Object.entries(product).forEach(([key, value]) => {
  console.log(\`\${key}: \${value}\`);
});`,example:'Converting object to query string: const params = Object.entries(filters).map(([k,v]) => `${k}=${v}`).join("&");'},{subtitle:"Object Destructuring",code:`const user = {
  name: 'John',
  age: 30,
  email: 'john@example.com',
  address: {
    city: 'NYC',
    zip: '10001'
  }
};

// Basic destructuring
const { name, age } = user;
console.log(name); // "John"
console.log(age);  // 30

// Renaming variables
const { name: userName, email: userEmail } = user;

// Default values
const { phone = 'N/A' } = user;
console.log(phone); // "N/A"

// Nested destructuring
const { address: { city, zip } } = user;
console.log(city); // "NYC"

// Function parameters
function greet({ name, age }) {
  return \`Hello \${name}, you are \${age}\`;
}
console.log(greet(user)); // "Hello John, you are 30"

// Rest operator
const { name: n, ...rest } = user;
console.log(rest); // { age: 30, email: '...', address: {...} }`,example:"React props: function UserCard({ name, avatar, bio }) { ... } - destructure in parameters."}]},"async-await":{title:"Async / Await",phase:"4",sections:[{subtitle:"What is Async/Await? (Simple Explanation)",content:`Async/Await is a modern, cleaner way to work with Promises. Instead of writing .then().then().then(), you can write code that looks normal and easy to read!

**Think of it like this:**
Promises with .then() = Getting directions by following signs one by one
Async/Await = Having GPS that tells you each step clearly

**Two keywords:**
• **async** - Put before a function to make it asynchronous (returns a Promise)
• **await** - Put before a Promise to wait for it to complete (can only use inside async functions)

Introduced in ES2017 (ES8), it's now the preferred way to handle async code!`},{subtitle:"Basic Syntax",content:`**Step 1:** Add "async" before function
**Step 2:** Use "await" before Promises inside the function
**Result:** Code looks synchronous but runs asynchronously!`,code:`// 1. Basic async function
// Any function with 'async' keyword automatically returns a Promise
async function greet() {
  return 'Hello';  // Automatically wrapped in Promise
}

greet().then(msg => console.log(msg)); // "Hello"

// 2. Using await to wait for Promises
async function fetchData() {
  // await pauses here until fetch completes
  const response = await fetch('https://api.example.com/data');
  
  // Then pauses here until json() completes
  const data = await response.json();
  
  return data;  // Returns the data
}

// COMPARE: Old way with .then() chains
function fetchDataOld() {
  return fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => data);
}

// Async/await is much cleaner and easier to read!
// It reads like normal code, top to bottom`,example:"Real example: Loading user profile. Instead of .then().then(), you write: const user = await fetchUser(); const posts = await fetchPosts(user.id); Much clearer!"},{subtitle:"Error Handling",code:`// Using try/catch
async function getUserData(id) {
  try {
    const response = await fetch(\`https://api.example.com/users/\${id}\`);
    
    if (!response.ok) {
      throw new Error('User not found');
    }
    
    const user = await response.json();
    return user;
  } catch (error) {
    console.error('Error:', error.message);
    return null;
  }
}

// Without try/catch (handle in .catch())
async function getData() {
  const data = await fetch('/api/data');
  return data.json();
}

getData()
  .then(result => console.log(result))
  .catch(error => console.error(error));`,example:'Login function: async function login(email, password) { try { const response = await fetch("/api/login", { method: "POST", body: JSON.stringify({ email, password }) }); if (response.ok) { return await response.json(); } } catch (e) { showError(e); } }'},{subtitle:"Sequential vs Parallel Execution",code:`// Sequential (slow - waits for each)
async function sequential() {
  const user = await fetchUser();      // Wait 1s
  const posts = await fetchPosts();    // Wait 1s
  const comments = await fetchComments(); // Wait 1s
  return { user, posts, comments };
  // Total: 3 seconds
}

// Parallel (fast - all at once)
async function parallel() {
  const [user, posts, comments] = await Promise.all([
    fetchUser(),
    fetchPosts(),
    fetchComments()
  ]);
  return { user, posts, comments };
  // Total: 1 second (all run together)
}

// Parallel with individual access
async function parallelIndividual() {
  const userPromise = fetchUser();
  const postsPromise = fetchPosts();
  
  const user = await userPromise;
  const posts = await postsPromise;
  
  return { user, posts };
}`,example:"Loading dashboard: await Promise.all([loadUser(), loadStats(), loadNotifications()]) - load all data simultaneously."},{subtitle:"Best Practices",code:`// ✅ Good: Always handle errors
async function goodExample() {
  try {
    const data = await fetchData();
    return data;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw if needed
  }
}

// ❌ Bad: Unhandled promise rejection
async function badExample() {
  const data = await fetchData(); // No error handling!
  return data;
}

// ✅ Good: Use Promise.all for parallel operations
async function loadPage() {
  const [user, settings, posts] = await Promise.all([
    fetchUser(),
    fetchSettings(),
    fetchPosts()
  ]);
  return { user, settings, posts };
}

// ❌ Bad: Sequential when not needed
async function loadPageSlow() {
  const user = await fetchUser();
  const settings = await fetchSettings();
  const posts = await fetchPosts();
  return { user, settings, posts };
}

// ✅ Good: Don't await if you don't need the result immediately
async function smartExample() {
  const promise1 = longOperation1();
  const promise2 = longOperation2();
  
  // Do other work here...
  
  const result1 = await promise1;
  const result2 = await promise2;
  
  return { result1, result2 };
}`,example:"API calls in React: useEffect(() => { async function load() { const data = await fetchData(); setData(data); } load(); }, []);"}]},"event-loop":{title:"Event Loop",phase:"4",sections:[{subtitle:"Understanding the Event Loop (Simple Explanation)",content:`The Event Loop is like a restaurant manager who makes sure everything runs smoothly!

**The Problem:** JavaScript can only do ONE thing at a time (single-threaded). But websites need to do many things at once - load images, handle clicks, fetch data, etc.

**The Solution:** The Event Loop!

Think of it like this:
🍽️ **Call Stack** = Kitchen where chef cooks (current task being done)
📋 **Callback Queue** = Orders waiting to be cooked (tasks waiting)
👨‍💼 **Event Loop** = Manager who checks: "Is kitchen free? Get next order!"

**How it works:**
1. JavaScript executes code on the Call Stack
2. When async task (setTimeout, fetch) is done, it goes to Queue
3. Event Loop constantly checks: "Is Call Stack empty?"
4. If yes, it moves task from Queue to Call Stack
5. Repeat forever!

This is why JavaScript can handle multiple things even though it can only do one thing at a time!`},{subtitle:"Call Stack",code:`console.log('1');

function first() {
  console.log('2');
  second();
  console.log('4');
}

function second() {
  console.log('3');
}

first();
console.log('5');

// Output: 1, 2, 3, 4, 5

// Call Stack visualization:
// [global]
// [global, first]
// [global, first, second]
// [global, first]
// [global]`},{subtitle:"Callback Queue & Microtask Queue",content:`Not all tasks are equal! JavaScript has TWO queues:

**Microtask Queue** (VIP lane):
• Promises (.then, .catch)
• Gets priority!

**Callback Queue** (Regular lane):
• setTimeout, setInterval
• DOM events (clicks, etc.)
• Waits for microtasks first

**Order of execution:**
1. Run all code in Call Stack
2. Run ALL microtasks (Promises)
3. Run ONE callback (setTimeout, etc.)
4. Repeat`,code:`console.log('1'); // Synchronous - runs immediately

setTimeout(() => {
  console.log('2'); // Macrotask (goes to Callback Queue)
}, 0);

Promise.resolve().then(() => {
  console.log('3'); // Microtask (goes to Microtask Queue - PRIORITY!)
});

console.log('4'); // Synchronous

// Output: 1, 4, 3, 2

// Execution order:
// 1. Synchronous code (1, 4)
// 2. Microtasks (3)
// 3. Macrotasks (2)`,example:'Understanding order: fetch().then(data => console.log(data)); setTimeout(() => console.log("timeout"), 0); - fetch callback runs before setTimeout.'},{subtitle:"Microtasks vs Macrotasks",code:`// Microtasks (higher priority):
// - Promise callbacks (.then, .catch, .finally)
// - queueMicrotask()
// - MutationObserver

// Macrotasks (lower priority):
// - setTimeout
// - setInterval
// - setImmediate (Node.js)
// - I/O operations

console.log('Start');

setTimeout(() => console.log('Timeout 1'), 0);

Promise.resolve()
  .then(() => console.log('Promise 1'))
  .then(() => console.log('Promise 2'));

setTimeout(() => console.log('Timeout 2'), 0);

Promise.resolve().then(() => console.log('Promise 3'));

console.log('End');

// Output:
// Start
// End
// Promise 1
// Promise 2
// Promise 3
// Timeout 1
// Timeout 2`},{subtitle:"Event Loop Flow",code:`// The Event Loop:
// 1. Execute all synchronous code (until call stack is empty)
// 2. Execute ALL microtasks (until microtask queue is empty)
// 3. Execute ONE macrotask
// 4. Execute ALL microtasks again
// 5. Repeat from step 3

console.log('Script start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

Promise.resolve()
  .then(() => {
    console.log('Promise 1');
  })
  .then(() => {
    console.log('Promise 2');
  });

console.log('Script end');

// Execution:
// 1. "Script start" (sync)
// 2. "Script end" (sync)
// 3. "Promise 1" (microtask)
// 4. "Promise 2" (microtask)
// 5. "setTimeout" (macrotask)`},{subtitle:"Complex Interview Question",code:`console.log('1');

setTimeout(() => {
  console.log('2');
  Promise.resolve().then(() => console.log('3'));
}, 0);

Promise.resolve()
  .then(() => {
    console.log('4');
    setTimeout(() => console.log('5'), 0);
  })
  .then(() => console.log('6'));

console.log('7');

// Output: 1, 7, 4, 6, 2, 3, 5

// Step by step:
// Sync: 1, 7
// Microtasks: 4, 6
// Macrotask 1: 2
// Microtasks: 3
// Macrotask 2: 5`,example:"React rendering: setState() → microtask → DOM update → useEffect cleanup → useEffect callback"}]},arrays:{title:"Arrays (Deep Dive)",phase:"5",sections:[{subtitle:"What are Arrays? (Simple Explanation)",content:`Arrays are ordered lists of values - like a shopping list or a playlist. Each item has a position (index) starting from 0.

**Real-World Analogy:**
Think of an array like a row of mailboxes:
• Each mailbox has a number (index): 0, 1, 2, 3...
• Each mailbox contains something (value)
• They're in order, so you can find things easily

**Why Use Arrays?**
• Store multiple related values in one variable
• Keep things in order
• Loop through items easily
• Use powerful methods (map, filter, reduce)

**Array Power:**
Arrays have built-in methods that make working with lists SUPER easy. Instead of writing loops for everything, you can use methods like map() to transform data, filter() to find items, and reduce() to calculate totals!`},{subtitle:"map() - Transform Each Item",content:"map() creates a NEW array by transforming each element. Think of it as a factory assembly line - each item goes in, gets transformed, comes out new!",code:`const numbers = [1, 2, 3, 4, 5];

// map() creates a new array with transformed elements
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

const names = users.map(user => user.name);
console.log(names); // ['Alice', 'Bob']

// map() with index
const withIndex = numbers.map((num, index) => ({
  value: num,
  index: index
}));`,example:"Rendering list in React: {users.map(user => <UserCard key={user.id} {...user} />)}"},{subtitle:"filter()",code:`const numbers = [1, 2, 3, 4, 5, 6];

// filter() creates new array with elements that pass test
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4, 6]

const products = [
  { name: 'Laptop', price: 999, inStock: true },
  { name: 'Mouse', price: 25, inStock: false },
  { name: 'Keyboard', price: 75, inStock: true }
];

const available = products.filter(p => p.inStock);
const affordable = products.filter(p => p.price < 100);

// Combining conditions
const cheapAndAvailable = products.filter(
  p => p.price < 100 && p.inStock
);`,example:"Search: const results = items.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));"},{subtitle:"reduce()",code:`const numbers = [1, 2, 3, 4, 5];

// reduce() reduces array to single value
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15

// Count occurrences
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count); // { apple: 3, banana: 2, orange: 1 }

// Flatten array
const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.reduce((acc, arr) => acc.concat(arr), []);
console.log(flat); // [1, 2, 3, 4, 5, 6]

// Shopping cart total
const cart = [
  { name: 'Item 1', price: 10, quantity: 2 },
  { name: 'Item 2', price: 15, quantity: 1 }
];
const total = cart.reduce((sum, item) => {
  return sum + (item.price * item.quantity);
}, 0);
console.log(total); // 35`,example:"Calculating average: const avg = numbers.reduce((sum, n) => sum + n, 0) / numbers.length;"},{subtitle:"find() & findIndex()",code:`const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 }
];

// find() returns first element that matches
const user = users.find(u => u.id === 2);
console.log(user); // { id: 2, name: 'Bob', age: 30 }

// Returns undefined if not found
const notFound = users.find(u => u.id === 99);
console.log(notFound); // undefined

// findIndex() returns index, or -1 if not found
const index = users.findIndex(u => u.name === 'Bob');
console.log(index); // 1`,example:"Finding selected item: const selected = items.find(item => item.id === selectedId);"},{subtitle:"some() & every()",code:`const numbers = [1, 2, 3, 4, 5];

// some() - returns true if at least one element passes test
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true

// every() - returns true if ALL elements pass test
const allPositive = numbers.every(num => num > 0);
console.log(allPositive); // true

const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // false

// Form validation
const fields = [
  { name: 'email', value: 'test@test.com', valid: true },
  { name: 'password', value: '12345', valid: false }
];

const formValid = fields.every(field => field.valid);
console.log(formValid); // false

const hasErrors = fields.some(field => !field.valid);
console.log(hasErrors); // true`,example:"Checking permissions: const canAccess = user.roles.some(role => allowedRoles.includes(role));"},{subtitle:"sort()",code:`// Numbers (ascending)
const numbers = [3, 1, 4, 1, 5, 9, 2, 6];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 1, 2, 3, 4, 5, 6, 9]

// Numbers (descending)
numbers.sort((a, b) => b - a);
console.log(numbers); // [9, 6, 5, 4, 3, 2, 1, 1]

// Strings (alphabetically)
const fruits = ['banana', 'apple', 'cherry'];
fruits.sort();
console.log(fruits); // ['apple', 'banana', 'cherry']

// Objects
const users = [
  { name: 'Charlie', age: 35 },
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 }
];

// Sort by age
users.sort((a, b) => a.age - b.age);

// Sort by name
users.sort((a, b) => a.name.localeCompare(b.name));

// Note: sort() mutates the original array!
// To avoid mutation:
const sorted = [...numbers].sort((a, b) => a - b);`,example:'Sorting products: products.sort((a, b) => sortBy === "price" ? a.price - b.price : a.name.localeCompare(b.name));'}]},promises:{title:"Promises",phase:"4",sections:[{subtitle:"What is a Promise? (Simple Explanation)",content:`A Promise is like ordering a pizza:

1. **Pending** - You ordered the pizza, waiting for it to arrive
2. **Fulfilled** - Pizza arrived! Success! 🍕
3. **Rejected** - Pizza shop called, they're closed. Failure! ❌

In JavaScript, a Promise represents something that will happen in the future. It might succeed (resolve) or fail (reject).

**Why Promises?**
• Better than callbacks (avoids "callback hell")
• Easier to read and understand
• Can chain multiple async operations
• Better error handling`},{subtitle:"Creating Promises",content:"To create a Promise, use the new Promise() constructor. It takes a function with two parameters: resolve (for success) and reject (for failure).",code:`// Basic Promise structure
const myPromise = new Promise((resolve, reject) => {
  // Do something asynchronous
  setTimeout(() => {
    const success = true;  // Imagine this is the result of an operation
    
    if (success) {
      resolve('Operation successful!');  // Success!
    } else {
      reject('Operation failed!');  // Failure!
    }
  }, 1000);
});

// Using the promise with .then() and .catch()
myPromise
  .then(result => {
    console.log(result);  // Runs if promise resolves
  })
  .catch(error => {
    console.error(error);  // Runs if promise rejects
  });

// Real example: Simulating fetching user data
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    // Simulate API call with setTimeout
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, name: 'John Doe', email: 'john@example.com' });
      } else {
        reject('Invalid user ID');
      }
    }, 1000);
  });
}

fetchUser(1)
  .then(user => console.log(user))
  .catch(err => console.error(err));`,example:"Database query: return new Promise((resolve, reject) => { db.query(sql, (err, results) => { if (err) reject(err); else resolve(results); }); });"},{subtitle:"Promise Chaining",code:`// Chaining .then() calls
fetch('https://api.example.com/user/1')
  .then(response => response.json())
  .then(user => {
    console.log(user);
    return fetch(\`https://api.example.com/posts?userId=\${user.id}\`);
  })
  .then(response => response.json())
  .then(posts => console.log(posts))
  .catch(error => console.error('Error:', error))
  .finally(() => console.log('Cleanup'));

// Each .then() receives the return value of previous
getUserById(1)
  .then(user => user.email)
  .then(email => sendEmail(email))
  .then(() => console.log('Email sent'))
  .catch(handleError);`},{subtitle:"Promise.all()",code:`// Wait for all promises to resolve
const promise1 = fetch('/api/user');
const promise2 = fetch('/api/posts');
const promise3 = fetch('/api/comments');

Promise.all([promise1, promise2, promise3])
  .then(([userRes, postsRes, commentsRes]) => {
    return Promise.all([
      userRes.json(),
      postsRes.json(),
      commentsRes.json()
    ]);
  })
  .then(([user, posts, comments]) => {
    console.log({ user, posts, comments });
  })
  .catch(error => {
    // If ANY promise rejects, entire Promise.all rejects
    console.error('One of the requests failed:', error);
  });

// Shorter version
Promise.all([
  fetch('/api/user').then(r => r.json()),
  fetch('/api/posts').then(r => r.json()),
  fetch('/api/comments').then(r => r.json())
]).then(([user, posts, comments]) => {
  console.log({ user, posts, comments });
});`,example:"Loading multiple resources: Promise.all([loadCSS(), loadJS(), loadImages()]).then(() => { showPage(); });"},{subtitle:"Promise.race(), any(), allSettled()",code:`// Promise.race() - resolves/rejects with first completed promise
const fast = new Promise(resolve => setTimeout(() => resolve('fast'), 100));
const slow = new Promise(resolve => setTimeout(() => resolve('slow'), 500));

Promise.race([fast, slow])
  .then(result => console.log(result)); // "fast"

// Promise.any() - resolves with first fulfilled (ignores rejections)
const p1 = Promise.reject('Error 1');
const p2 = new Promise(resolve => setTimeout(() => resolve('Success'), 100));
const p3 = Promise.reject('Error 2');

Promise.any([p1, p2, p3])
  .then(result => console.log(result)); // "Success"

// Promise.allSettled() - waits for all, never rejects
const promises = [
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another success')
];

Promise.allSettled(promises)
  .then(results => {
    results.forEach(result => {
      if (result.status === 'fulfilled') {
        console.log('Value:', result.value);
      } else {
        console.log('Reason:', result.reason);
      }
    });
  });`,example:"Timeout race: Promise.race([fetchData(), timeout(5000)]).then(data => { ... });"}]},"debounce-throttle":{title:"Debouncing & Throttling",phase:"5",sections:[{subtitle:"What is Debouncing?",content:"Debouncing delays execution until after a certain time has passed since the last call. Perfect for search boxes, resize events, etc.",code:`// Debounce implementation
function debounce(func, delay) {
  let timeoutId;
  
  return function(...args) {
    // Clear previous timer
    clearTimeout(timeoutId);
    
    // Set new timer
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Usage: Search input
const searchInput = document.getElementById('search');

const performSearch = (query) => {
  console.log('Searching for:', query);
  // API call here
};

const debouncedSearch = debounce(performSearch, 300);

searchInput.addEventListener('input', (e) => {
  debouncedSearch(e.target.value);
});

// User types "hello"
// h -> timer starts (300ms)
// e -> timer reset (300ms)
// l -> timer reset (300ms)
// l -> timer reset (300ms)
// o -> timer reset (300ms)
// ... 300ms later -> performSearch("hello")`,example:"Auto-save: const debouncedSave = debounce(saveDocument, 1000); - saves 1 second after user stops typing."},{subtitle:"What is Throttling?",content:"Throttling limits execution to once per specified time period. Perfect for scroll events, button clicks, etc.",code:`// Throttle implementation
function throttle(func, limit) {
  let inThrottle;
  
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

// Usage: Scroll event
const handleScroll = () => {
  console.log('Scroll position:', window.scrollY);
  // Update navbar, lazy load images, etc.
};

const throttledScroll = throttle(handleScroll, 100);

window.addEventListener('scroll', throttledScroll);

// User scrolls continuously
// Time 0ms: handleScroll() executes
// Time 50ms: ignored (in throttle)
// Time 100ms: ignored (in throttle)
// Time 101ms: handleScroll() executes
// Time 150ms: ignored (in throttle)
// ...`,example:"Button click prevention: const throttledSubmit = throttle(submitForm, 2000); - prevents double submission."},{subtitle:"Debounce vs Throttle",code:`// DEBOUNCE: Waits for pause in events
// Good for: Search, auto-save, window resize
const debouncedResize = debounce(() => {
  console.log('Window resized!');
}, 500);

window.addEventListener('resize', debouncedResize);

// THROTTLE: Ensures regular execution
// Good for: Scroll, mousemove, game loops
const throttledMouseMove = throttle((e) => {
  console.log('Mouse at:', e.clientX, e.clientY);
}, 100);

document.addEventListener('mousemove', throttledMouseMove);

// COMPARISON:
// Event fires: | | | | | | | | | | (10 times)
// Debounce:                       | (1 time - after pause)
// Throttle:    |     |     |     | (3 times - every interval)`},{subtitle:"Advanced: Debounce with Immediate",code:`function debounce(func, delay, immediate = false) {
  let timeoutId;
  
  return function(...args) {
    const callNow = immediate && !timeoutId;
    
    clearTimeout(timeoutId);
    
    timeoutId = setTimeout(() => {
      timeoutId = null;
      if (!immediate) {
        func.apply(this, args);
      }
    }, delay);
    
    if (callNow) {
      func.apply(this, args);
    }
  };
}

// Execute immediately on first call, then debounce
const immediateDebounce = debounce(handleClick, 1000, true);

// First click: executes immediately
// Subsequent clicks within 1s: ignored
// After 1s: ready for next immediate execution`,example:"Form submission: const handleSubmit = debounce(submitForm, 300, true); - submit immediately, block rapid clicks."}]},prototypes:{title:"Prototypes & Inheritance",phase:"3",sections:[{subtitle:"What is a Prototype?",content:"Every JavaScript object has an internal property called [[Prototype]] (accessible via __proto__). Prototypes allow objects to inherit properties and methods from other objects.",code:`const person = {
  greet() {
    return 'Hello!';
  }
};

const john = Object.create(person);
john.name = 'John';

console.log(john.name);    // "John" (own property)
console.log(john.greet()); // "Hello!" (inherited from person)
console.log(john.__proto__ === person); // true`},{subtitle:"Prototype Chain",code:`const animal = {
  eats: true,
  walk() {
    console.log('Animal walks');
  }
};

const dog = Object.create(animal);
dog.barks = true;

const myDog = Object.create(dog);
myDog.name = 'Rex';

// Prototype chain: myDog -> dog -> animal -> Object.prototype -> null

console.log(myDog.name);   // "Rex" (own)
console.log(myDog.barks);  // true (from dog)
console.log(myDog.eats);   // true (from animal)
myDog.walk();              // "Animal walks" (from animal)

// Checking prototype chain
console.log(myDog.__proto__ === dog);           // true
console.log(dog.__proto__ === animal);          // true
console.log(animal.__proto__ === Object.prototype); // true`,example:"Array methods: [1,2,3].map(...) - map exists on Array.prototype, inherited by all arrays."},{subtitle:"Constructor Functions & Prototypes",code:`function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add methods to prototype (shared across all instances)
Person.prototype.greet = function() {
  return \`Hi, I'm \${this.name}\`;
};

Person.prototype.species = 'Human';

const alice = new Person('Alice', 25);
const bob = new Person('Bob', 30);

console.log(alice.greet()); // "Hi, I'm Alice"
console.log(bob.greet());   // "Hi, I'm Bob"

// Both share the same method (memory efficient)
console.log(alice.greet === bob.greet); // true`,example:"Creating custom array methods: Array.prototype.last = function() { return this[this.length - 1]; }; [1,2,3].last(); // 3"}]},constructors:{title:"Constructor Functions",phase:"3",sections:[{subtitle:"What are Constructor Functions?",content:'Constructor functions are regular functions used with the "new" keyword to create objects. Convention: capitalize first letter.',code:`function User(name, email) {
  this.name = name;
  this.email = email;
  this.isActive = true;
}

const user1 = new User('Alice', 'alice@example.com');
console.log(user1); // User { name: 'Alice', email: '...', isActive: true }

// Without 'new' - wrong way!
const user2 = User('Bob', 'bob@example.com'); // undefined`},{subtitle:'The "new" Keyword',code:`function Product(name, price) {
  this.name = name;
  this.price = price;
}

const laptop = new Product('Laptop', 999);

// What 'new' does:
// 1. Creates an empty object: {}
// 2. Sets 'this' to that object
// 3. Sets object's __proto__ to Product.prototype
// 4. Executes the constructor function
// 5. Returns the object`}]},"es6-classes":{title:"ES6 Classes",phase:"3",sections:[{subtitle:"Class Syntax",code:`class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return \`Hello, I'm \${this.name}\`;
  }
}

const alice = new Person('Alice', 25);
console.log(alice.greet()); // "Hello, I'm Alice"`},{subtitle:"Inheritance with extends",code:`class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return \`\${this.name} makes a sound\`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Must call super first!
    this.breed = breed;
  }
  
  speak() {
    return \`\${this.name} barks\`;
  }
}

const dog = new Dog('Rex', 'Labrador');
console.log(dog.speak());  // "Rex barks"`}]},"oop-concepts":{title:"OOP Concepts",phase:"3",sections:[{subtitle:"Encapsulation",content:"Bundling data and methods together, hiding internal details.",code:`class BankAccount {
  #balance; // Private field
  
  constructor(initialBalance) {
    this.#balance = initialBalance;
  }
  
  deposit(amount) {
    this.#balance += amount;
  }
  
  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // 1500`}]},"sync-async":{title:"Synchronous vs Asynchronous",phase:"4",sections:[{subtitle:"Understanding Sync vs Async",content:`**Synchronous (Sync)** = Like waiting in line at a coffee shop. You wait for the person in front to finish before you order. Everything happens one at a time, in order.

**Asynchronous (Async)** = Like ordering food at a restaurant. You place your order and sit down. While the chef cooks, you can talk, check your phone, etc. When food is ready, they bring it to you. You don't just sit there frozen waiting!

**Why is this important?** Websites need to do things that take time (loading images, fetching data from servers, waiting for user clicks). If we used only sync code, the entire page would freeze while waiting!`},{subtitle:"Synchronous Code",content:"Synchronous code runs line by line, top to bottom. Each line waits for the previous line to finish. This is the default behavior.",code:`console.log('First');
console.log('Second');
console.log('Third');

// Output (in order):
// First
// Second
// Third

// Each line waits for the previous one to finish
// Like standing in a queue - one person at a time`},{subtitle:"Asynchronous Code",content:`Asynchronous code doesn't wait! It starts a task and moves on. When the task finishes later, it runs a callback function.

Common async operations:
• Fetching data from a server
• Reading files
• Timers (setTimeout, setInterval)
• User interactions (clicks, keyboard)`,code:`console.log('First');

setTimeout(() => {
  console.log('Second (after 1s)');
}, 1000);

console.log('Third');

// Output:
// First
// Third
// (1 second pause)
// Second (after 1s)

// setTimeout is async - doesn't wait!
// Code continues while timer runs in background`,example:"Real world: Loading a YouTube video. The page doesn't freeze while loading - you can scroll comments, read description, etc. When video loads, it starts playing. That's async!"}]},callbacks:{title:"Callbacks",phase:"4",sections:[{subtitle:"What is a Callback?",content:"A function passed as an argument to another function, to be executed later.",code:`function greet(name, callback) {
  console.log('Hello ' + name);
  callback();
}

function afterGreeting() {
  console.log('Nice to meet you!');
}

greet('Alice', afterGreeting);`},{subtitle:"Callback Hell",code:`// ❌ Callback Hell (Pyramid of Doom)
getUser(userId, function(user) {
  getPosts(user.id, function(posts) {
    getComments(posts[0].id, function(comments) {
      getLikes(comments[0].id, function(likes) {
        console.log('Finally got likes:', likes);
      });
    });
  });
});

// ✅ Solution: Use Promises or async/await
async function getData() {
  const user = await getUser(userId);
  const posts = await getPosts(user.id);
  const comments = await getComments(posts[0].id);
  const likes = await getLikes(comments[0].id);
  console.log('Likes:', likes);
}`}]},strings:{title:"Strings",phase:"5",sections:[{subtitle:"String Methods",code:`const str = 'Hello, World!';

console.log(str.length); // 13
console.log(str.toLowerCase()); // "hello, world!"
console.log(str.toUpperCase()); // "HELLO, WORLD!"
console.log(str.includes('World')); // true
console.log(str.slice(0, 5)); // "Hello"
console.log(str.replace('World', 'JavaScript')); // "Hello, JavaScript!"`},{subtitle:"Template Literals",code:`const name = 'Alice';
const age = 25;

const greeting = \`Hello, \${name}! You are \${age} years old.\`;

// Multi-line
const message = \`
  Dear \${name},
  You are \${age} years old.
\`;`,example:'HTML generation: const html = `<div class="${className}">${content}</div>`;'}]},"functional-programming":{title:"Functional Programming",phase:"5",sections:[{subtitle:"Pure Functions",content:"Functions that always return the same output for the same input and have no side effects.",code:`// ✅ Pure function
function add(a, b) {
  return a + b;
}

// ❌ Impure function (side effect)
let count = 0;
function increment() {
  count++; // Modifies external variable
  return count;
}`},{subtitle:"Higher-Order Functions",code:`function multiplyBy(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplyBy(2);
console.log(double(5)); // 10`}]},"dom-basics":{title:"DOM Basics",phase:"6",sections:[{subtitle:"What is the DOM? (Simple Explanation)",content:`The DOM (Document Object Model) is like a family tree of your webpage. Every element in your HTML becomes an object that JavaScript can talk to and change.

**Think of it like this:**
Your HTML is a house blueprint. The DOM is the actual house that gets built. JavaScript can then rearrange furniture (elements), paint walls (change styles), add rooms (create elements), etc.

**The DOM is a tree structure:**
\`\`\`
Document
  └── html
      ├── head
      │   └── title
      └── body
          ├── div (id="header")
          │   └── h1
          └── div (class="content")
              └── p
\`\`\`

Each box (element) is called a **node**. JavaScript can access, modify, add, or remove any node!`},{subtitle:"Selecting Elements (Finding Elements on the Page)",content:`Before you can change an element, you need to find it first! JavaScript gives you several ways to grab elements from your HTML.

**Most Common (Modern):**
• querySelector() - Finds first match (uses CSS selectors)
• querySelectorAll() - Finds all matches

**Older Methods (still work):**
• getElementById() - Find by ID
• getElementsByClassName() - Find by class
• getElementsByTagName() - Find by tag name`,code:`// MODERN WAY (Recommended) - querySelector
// Use CSS selectors just like in CSS!
const header = document.querySelector('#header');  // ID
const firstItem = document.querySelector('.item');  // Class (first one)
const button = document.querySelector('button');    // Tag

// querySelectorAll - gets ALL matches (returns NodeList)
const allItems = document.querySelectorAll('.item');
const allButtons = document.querySelectorAll('button');

// You can use any CSS selector!
const firstParagraph = document.querySelector('div.content p:first-child');

// OLD WAY (still works, but querySelector is better)
const headerOld = document.getElementById('header');
const itemsOld = document.getElementsByClassName('item');
const paragraphsOld = document.getElementsByTagName('p');

// Query selector (CSS selector)
const firstItem = document.querySelector('.item');
const allItems = document.querySelectorAll('.item'); // NodeList

// Modern approach (use querySelector/All)
const button = document.querySelector('#submit-btn');
const cards = document.querySelectorAll('.card');`,example:'Getting form input: const emailInput = document.querySelector("#email"); const value = emailInput.value;'},{subtitle:"Modifying Elements",code:`const element = document.querySelector('#myElement');

// Change content
element.textContent = 'New text';
element.innerHTML = '<strong>Bold text</strong>';

// Change styles
element.style.color = 'red';
element.style.backgroundColor = 'yellow';
element.style.fontSize = '20px';

// Change attributes
element.setAttribute('data-id', '123');
const id = element.getAttribute('data-id');

// Add/remove classes
element.classList.add('active');
element.classList.remove('hidden');
element.classList.toggle('highlight');
element.classList.contains('active'); // true/false`,example:'Toggle dark mode: document.body.classList.toggle("dark-mode");'},{subtitle:"Creating & Removing Elements",code:`// Create element
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello!';
newDiv.className = 'box';

// Append to DOM
document.body.appendChild(newDiv);

// Insert at specific position
const container = document.querySelector('#container');
container.insertBefore(newDiv, container.firstChild);

// Remove element
newDiv.remove();

// Or using parent
container.removeChild(newDiv);

// Replace element
const newElement = document.createElement('span');
oldElement.replaceWith(newElement);`,example:'Adding list item: const li = document.createElement("li"); li.textContent = "New item"; list.appendChild(li);'}]},events:{title:"Events",phase:"6",sections:[{subtitle:"What are Events? (Simple Explanation)",content:`Events are things that happen on your webpage - clicks, mouse movements, key presses, form submissions, etc. JavaScript can "listen" for these events and respond to them!

**Real-World Analogy:**
Think of events like a doorbell:
• **Event** = Someone pressing the doorbell
• **Event Listener** = You listening for the doorbell
• **Event Handler** = What you do when you hear it (go answer the door)

**Common Events:**
• **Click** - User clicks an element
• **Submit** - Form is submitted
• **Keypress** - User types on keyboard
• **Mouseover** - Mouse hovers over element
• **Load** - Page or image finishes loading
• **Scroll** - User scrolls the page

**Why Events Matter:**
Events make websites interactive! Without events, websites would just sit there - no clicking buttons, no forms, no interactivity. Events are what make the web ALIVE!`},{subtitle:"Event Handling (Listening & Responding)",content:"To handle events, you need to: 1) Select an element, 2) Add an event listener, 3) Define what to do when event happens.",code:`const button = document.querySelector('#myButton');

// Method 1: addEventListener (best practice)
button.addEventListener('click', function() {
  console.log('Button clicked!');
});

// Method 2: onclick property
button.onclick = function() {
  console.log('Clicked');
};

// Arrow function
button.addEventListener('click', () => {
  console.log('Clicked!');
});

// Named function
function handleClick() {
  console.log('Clicked');
}
button.addEventListener('click', handleClick);

// Remove event listener
button.removeEventListener('click', handleClick);`},{subtitle:"Event Object",code:`button.addEventListener('click', function(event) {
  console.log('Event type:', event.type); // "click"
  console.log('Target element:', event.target);
  console.log('Mouse position:', event.clientX, event.clientY);
  console.log('Key pressed:', event.key); // For keyboard events
});

// Common properties
// event.target - element that triggered event
// event.currentTarget - element with listener attached
// event.preventDefault() - prevent default behavior
// event.stopPropagation() - stop bubbling`},{subtitle:"Event Bubbling & Capturing",code:`// HTML: <div id="outer"><div id="inner"><button>Click</button></div></div>

// Bubbling (default) - from target to root
document.querySelector('#outer').addEventListener('click', () => {
  console.log('Outer clicked');
});

document.querySelector('#inner').addEventListener('click', () => {
  console.log('Inner clicked');
});

document.querySelector('button').addEventListener('click', () => {
  console.log('Button clicked');
});

// Click button → Output:
// Button clicked
// Inner clicked
// Outer clicked

// Stop propagation
document.querySelector('button').addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('Button clicked');
});
// Now only "Button clicked" will log`,example:'Modal close: overlay.addEventListener("click", (e) => { if (e.target === overlay) closeModal(); });'},{subtitle:"Event Delegation",code:`// Instead of adding listener to each item
const items = document.querySelectorAll('.item');
items.forEach(item => {
  item.addEventListener('click', handleClick); // Inefficient for many items
});

// Use event delegation (add listener to parent)
const list = document.querySelector('#itemList');
list.addEventListener('click', function(e) {
  if (e.target.classList.contains('item')) {
    console.log('Item clicked:', e.target.textContent);
  }
});

// Works for dynamically added items too!
const newItem = document.createElement('li');
newItem.className = 'item';
newItem.textContent = 'New item';
list.appendChild(newItem); // Listener works automatically!`,example:'Todo list: todoList.addEventListener("click", (e) => { if (e.target.matches(".delete-btn")) { deleteItem(e.target.closest("li")); } });'}]},"forms-validation":{title:"Forms & Validation",phase:"6",sections:[{subtitle:"Form Events",code:`const form = document.querySelector('#myForm');
const input = document.querySelector('#email');

// Submit event
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent page reload
  console.log('Form submitted');
});

// Input events
input.addEventListener('input', (e) => {
  console.log('Value:', e.target.value); // Fires on every keystroke
});

input.addEventListener('change', (e) => {
  console.log('Changed:', e.target.value); // Fires when input loses focus
});

input.addEventListener('focus', () => {
  console.log('Input focused');
});

input.addEventListener('blur', () => {
  console.log('Input lost focus');
});`},{subtitle:"Client-Side Validation",code:`const form = document.querySelector('#registrationForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const errors = [];
  
  // Email validation
  if (!email) {
    errors.push('Email is required');
  } else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
    errors.push('Invalid email format');
  }
  
  // Password validation
  if (!password) {
    errors.push('Password is required');
  } else if (password.length < 8) {
    errors.push('Password must be at least 8 characters');
  }
  
  if (errors.length > 0) {
    displayErrors(errors);
  } else {
    submitForm();
  }
});

function displayErrors(errors) {
  const errorDiv = document.querySelector('#errors');
  errorDiv.innerHTML = errors.map(err => \`<p>\${err}</p>\`).join('');
}`,example:'Real-time validation: input.addEventListener("input", () => { const isValid = validateEmail(input.value); showFeedback(isValid); });'}]},"browser-apis":{title:"Browser APIs",phase:"6",sections:[{subtitle:"localStorage & sessionStorage",code:`// localStorage (persists after browser close)
localStorage.setItem('username', 'Alice');
const username = localStorage.getItem('username');
localStorage.removeItem('username');
localStorage.clear(); // Clear all

// Store objects (must stringify)
const user = { name: 'Bob', age: 30 };
localStorage.setItem('user', JSON.stringify(user));
const storedUser = JSON.parse(localStorage.getItem('user'));

// sessionStorage (cleared when tab closes)
sessionStorage.setItem('sessionId', '12345');
const sessionId = sessionStorage.getItem('sessionId');`,example:'Remember user preference: const theme = localStorage.getItem("theme") || "light"; applyTheme(theme);'},{subtitle:"Cookies",code:`// Set cookie
document.cookie = "username=Alice; max-age=3600; path=/";

// Read cookies
const cookies = document.cookie.split('; ');
const cookieObj = {};
cookies.forEach(cookie => {
  const [key, value] = cookie.split('=');
  cookieObj[key] = value;
});

// Delete cookie (set expiration to past)
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";`}]},"fetch-ajax":{title:"Fetch API & AJAX",phase:"6",sections:[{subtitle:"What is Fetch/AJAX? (Simple Explanation)",content:`Fetch is how your website talks to servers to get or send data - without reloading the page!

**Before AJAX:**
• Click link → Whole page reloads → Slow!
• Like tearing down your house to change a light bulb

**With AJAX/Fetch:**
• Click button → Fetch new data → Update just that part → Fast!
• Like changing a light bulb without touching anything else

**Real Examples:**
• **Twitter** - New tweets appear without page reload
• **Google Maps** - Scroll to load new areas
• **Instagram** - Infinite scroll loading more posts
• **YouTube** - Comments load without leaving video

**AJAX = Asynchronous JavaScript And XML** (old term)
**Fetch = Modern way to do AJAX** (better, cleaner)

**What Can You Do?**
• Get data from APIs (weather, user info, products)
• Send data to servers (forms, comments, likes)
• Update parts of page without reload (smooth UX)`},{subtitle:"Basic Fetch (Getting Data)",content:"Fetch returns a Promise, so you can use .then() or async/await to handle the response.",code:`// GET request
fetch('https://api.example.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Async/await version
async function getUsers() {
  try {
    const response = await fetch('https://api.example.com/users');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}`},{subtitle:"POST Request",code:`// POST with JSON data
async function createUser(userData) {
  try {
    const response = await fetch('https://api.example.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData)
    });
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

createUser({ name: 'Alice', email: 'alice@example.com' });`}]},"es6-features":{title:"ES6+ Features",phase:"7",sections:[{subtitle:"Modern JavaScript Features (ES6+)",content:`ES6 (ECMAScript 2015) brought HUGE improvements to JavaScript, making it cleaner and more powerful!

**What is ES6?**
ES6 = Big update to JavaScript in 2015. Since then, we get yearly updates (ES2016, ES2017, etc.)

**Key Features:**
• **Destructuring** - Extract values easily
• **Spread/Rest operators** - Work with arrays/objects better
• **Arrow functions** - Shorter function syntax
• **Template literals** - Better string formatting
• **let/const** - Better variable declarations
• **Classes** - Object-oriented programming
• **Modules** - Import/export code
• **Promises** - Better async handling

**Why Learn These?**
Modern JavaScript code uses these features everywhere! If you want to read React, Vue, or modern JS code, you MUST know ES6+.`},{subtitle:"Destructuring (Unpacking Values)",content:"Destructuring extracts values from arrays or objects into variables. It's like unpacking a suitcase!",code:`// Array destructuring
const [a, b, c] = [1, 2, 3];

// Object destructuring
const { name, age } = { name: 'Alice', age: 25 };

// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// Rest operator
const [first, ...rest] = [1, 2, 3, 4];
console.log(rest); // [2, 3, 4]`},{subtitle:"Optional Chaining & Nullish Coalescing",code:`// Optional chaining
const user = { name: 'Alice' };
console.log(user.address?.city); // undefined (no error)

// Nullish coalescing
const count = 0;
console.log(count ?? 10); // 0 (0 is not null/undefined)
console.log(count || 10); // 10 (0 is falsy)`}]},performance:{title:"Performance Concepts",phase:"8",sections:[{subtitle:"Why Performance Matters",content:`Slow websites lose users! People expect websites to load instantly.

**Statistics:**
• 53% of users leave if page takes >3 seconds to load
• Amazon loses $1.6 BILLION per year for every second of delay
• Google uses page speed as ranking factor

**Performance Affects:**
• User experience (happy vs frustrated users)
• SEO rankings (Google prefers fast sites)
• Conversion rates (slow = lost sales)
• Mobile users (often on slow connections)

**What Makes Sites Slow?**
• Too much JavaScript
• Large images
• Inefficient code (nested loops)
• Too many network requests
• Memory leaks`},{subtitle:"Time & Space Complexity (Big O Notation)",content:`Big O notation tells you how fast your code is as data grows. It's like a speedometer for algorithms!

**Common Complexities:**
• **O(1)** - Constant: Same speed regardless of size (FAST!)
• **O(log n)** - Logarithmic: Doubles data, tiny speed increase (FAST)
• **O(n)** - Linear: Double data, double time (OK)
• **O(n²)** - Quadratic: Double data, 4x slower (SLOW!)
• **O(2ⁿ)** - Exponential: Add 1 item, double time (VERY SLOW!)`,code:`// O(1) - Constant time
function getFirst(arr) {
  return arr[0];
}

// O(n) - Linear time
function findItem(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// O(n²) - Quadratic time
function hasDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
}`}]},optimization:{title:"Optimization Techniques",phase:"8",sections:[{subtitle:"Memoization",code:`// Without memoization
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// With memoization
function fibonacciMemo() {
  const cache = {};
  
  return function fib(n) {
    if (n in cache) return cache[n];
    if (n <= 1) return n;
    
    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  };
}

const fib = fibonacciMemo();
console.log(fib(40)); // Much faster!`}]},debugging:{title:"Debugging",phase:"9",sections:[{subtitle:"What is Debugging?",content:`Debugging is finding and fixing errors (bugs) in your code. Every developer spends LOTS of time debugging - it's a crucial skill!

**Why "Bug"?**
In 1947, a real moth was found in a computer! Engineers had to "debug" it. The term stuck.

**Common Bugs:**
• **Syntax errors** - Typos, missing brackets
• **Logic errors** - Code runs but does wrong thing
• **Runtime errors** - Code crashes while running
• **Async errors** - Promises, timing issues

**Debugging Tools:**
• **console.log()** - Print values to see what's happening
• **Breakpoints** - Pause code at specific lines
• **DevTools** - Browser's built-in debugger
• **Error messages** - Read them carefully!

**Pro Tip:**
Debugging is like being a detective. Follow the clues (error messages), check the evidence (variable values), and solve the mystery!`},{subtitle:"Browser DevTools (Your Best Friend)",content:"Browser DevTools let you inspect, pause, and step through your code. Press F12 to open them!",code:`// Console methods
console.log('Normal log');
console.warn('Warning');
console.error('Error');
console.table([{ name: 'Alice' }, { name: 'Bob' }]);

// Debugger statement
function calculate(x, y) {
  debugger; // Execution pauses here
  return x + y;
}

// Console assertions
console.assert(2 + 2 === 4, 'Math still works!');
console.assert(2 + 2 === 5, 'Math is broken!'); // Logs error`}]},testing:{title:"Testing Basics",phase:"9",sections:[{subtitle:"Why Write Tests?",content:`Tests are like insurance for your code - they catch bugs before users do!

**Without Tests:**
• Change code → Hope it works → Users find bugs → Oops!
• Fear of refactoring (might break things)
• Hard to know if everything still works

**With Tests:**
• Change code → Run tests → Know if you broke something
• Confidence to refactor
• Living documentation (tests show how code should work)

**Types of Tests:**
• **Unit Tests** - Test individual functions (like testing a single lego brick)
• **Integration Tests** - Test multiple parts together (like testing connected lego pieces)
• **E2E Tests** - Test whole app (like testing the entire lego castle)

**When to Test:**
• Critical business logic
• Complex functions
• Bug fixes (prevent regression)
• Public APIs

**Reality Check:**
Not everything needs tests. Start with important functions. Testing takes time but saves more time later!`},{subtitle:"Writing Testable Code",content:"Good tests need good code. Pure functions (same input = same output) are easiest to test.",code:`// ✅ Good: Pure function, easy to test
function add(a, b) {
  return a + b;
}

// Test
console.assert(add(2, 3) === 5, 'add function works');

// ❌ Bad: Side effects, hard to test
let total = 0;
function addToTotal(num) {
  total += num;
}`}]},nodejs:{title:"Node.js Fundamentals",phase:"10",sections:[{subtitle:"What is Node.js? (Simple Explanation)",content:`Node.js lets you run JavaScript outside the browser - on servers, computers, even robots!

**Before Node.js:**
• JavaScript only ran in browsers
• Backend = PHP, Python, Ruby, Java
• Frontend developers couldn't build servers

**After Node.js (2009):**
• JavaScript runs ANYWHERE
• One language for frontend AND backend
• JavaScript developers can build full applications!

**Think of it like:**
• Browser JavaScript = JavaScript in a sandbox (limited)
• Node.js = JavaScript with superpowers (file access, database connections, servers)

**Why Use Node.js?**
• Use JavaScript everywhere (full-stack)
• Fast and efficient (non-blocking I/O)
• Huge ecosystem (NPM - millions of packages)
• Great for real-time apps (chat, live updates)`},{subtitle:"Creating a Simple Server",content:"Node.js makes it easy to create a web server that responds to HTTP requests.",code:`// File: server.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});

// Run: node server.js`}]},"rest-api":{title:"REST API Basics",phase:"10",sections:[{subtitle:"What is a REST API? (Simple Explanation)",content:`A REST API is like a waiter at a restaurant:

**You (Frontend)** → **Waiter (API)** → **Kitchen (Server/Database)**

1. You tell the waiter what you want (API request)
2. Waiter goes to the kitchen (server processes)
3. Kitchen prepares your order (database query)
4. Waiter brings it back (API response)

**REST = Representational State Transfer**
Fancy words for: "A standardized way for apps to talk to each other over the internet"

**HTTP Methods (What you want to do):**
• **GET** - "Give me data" (like viewing a menu)
• **POST** - "Create something new" (placing an order)
• **PUT** - "Update existing data" (change your order)
• **DELETE** - "Remove data" (cancel order)

**Why REST?**
• Standard way of building APIs
• Works over HTTP (the web's protocol)
• Easy to understand and use
• Language-agnostic (works with any programming language)`},{subtitle:"HTTP Methods in Action",content:"Each HTTP method corresponds to a CRUD operation: Create, Read, Update, Delete.",code:`// Express.js example
const express = require('express');
const app = express();

app.get('/users', (req, res) => {
  res.json([{ id: 1, name: 'Alice' }]);
});

app.post('/users', (req, res) => {
  const newUser = req.body;
  res.status(201).json(newUser);
});

app.listen(3000);`}]},security:{title:"Security",phase:"11",sections:[{subtitle:"Why Security Matters",content:`Web security is like locking your house - you need it to protect yourself and your users!

**What Can Go Wrong?**
• **Data Theft** - Hackers steal user passwords, credit cards
• **Site Defacement** - Attackers change your website
• **Privacy Violation** - User data leaked to public
• **Financial Loss** - Company loses money and reputation

**Your Responsibility:**
As a developer, YOU are responsible for keeping users safe. Even small mistakes can lead to huge security breaches.

**Common Attacks:**
• XSS (Cross-Site Scripting) - Injecting malicious scripts
• SQL Injection - Attacking databases
• CSRF (Cross-Site Request Forgery) - Tricking users into unwanted actions

**Golden Rules:**
1. NEVER trust user input
2. Always validate and sanitize
3. Use HTTPS
4. Keep libraries updated
5. Don't store passwords in plain text`},{subtitle:"XSS (Cross-Site Scripting) Prevention",content:`XSS is when attackers inject malicious JavaScript into your website. It's like letting a stranger write on your walls!

**How it happens:**
User inputs: \`<script>alert("Hacked!")<\/script>\`
If you display this without sanitizing → script runs!

**Prevention:**
• Use textContent instead of innerHTML
• Sanitize user input
• Use Content Security Policy (CSP)`,code:`// ❌ Vulnerable to XSS
const userInput = '<script>alert("XSS")<\/script>';
element.innerHTML = userInput; // Script will execute!

// ✅ Safe
element.textContent = userInput; // Treated as text

// Or use sanitization library
import DOMPurify from 'dompurify';
const clean = DOMPurify.sanitize(userInput);
element.innerHTML = clean;`},{subtitle:"Input Validation",code:`// Always validate on both client AND server
function validateEmail(email) {
  const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return regex.test(email);
}

function sanitizeInput(input) {
  return input.trim().replace(/<[^>]*>/g, '');
}`}]}};function Ef({code:x,language:j="javascript"}){const[m,B]=Tt.useState(!1),A=async()=>{try{await navigator.clipboard.writeText(x),B(!0),setTimeout(()=>B(!1),2e3)}catch{try{const U=document.createElement("textarea");U.value=x,U.style.position="fixed",U.style.left="-999999px",U.style.top="-999999px",document.body.appendChild(U),U.focus(),U.select();const R=document.execCommand("copy");document.body.removeChild(U),R&&(B(!0),setTimeout(()=>B(!1),2e3))}catch(U){console.error("Failed to copy text:",U)}}},M=x.split(`
`);return h.jsxs("div",{className:"relative group my-6",children:[h.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-750 border border-gray-700/50 border-b-0 rounded-t-xl",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(of,{size:16,className:"text-blue-400"}),h.jsx("span",{className:"text-xs font-semibold text-gray-300 uppercase tracking-wider",children:j}),h.jsxs("div",{className:"flex gap-1.5 ml-2",children:[h.jsx("div",{className:"w-3 h-3 rounded-full bg-red-500/60"}),h.jsx("div",{className:"w-3 h-3 rounded-full bg-yellow-500/60"}),h.jsx("div",{className:"w-3 h-3 rounded-full bg-green-500/60"})]})]}),h.jsx("button",{onClick:A,className:`
            px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-2 text-xs font-medium
            ${m?"bg-green-600 text-white shadow-lg shadow-green-500/30":"bg-gray-700 hover:bg-blue-600 text-gray-200 hover:text-white hover:shadow-lg hover:shadow-blue-500/30"}
          `,title:"Copy code",children:m?h.jsxs(h.Fragment,{children:[h.jsx(Yd,{size:14}),h.jsx("span",{children:"Copied!"})]}):h.jsxs(h.Fragment,{children:[h.jsx(sf,{size:14}),h.jsx("span",{className:"hidden sm:inline",children:"Copy"})]})})]}),h.jsxs("div",{className:"relative overflow-hidden rounded-b-xl border border-gray-700/50 border-t-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 shadow-2xl",children:[h.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5 pointer-events-none"}),h.jsxs("div",{className:"flex",children:[h.jsx("div",{className:"select-none py-4 px-3 bg-gray-900/50 border-r border-gray-700/30 min-w-[3rem] text-right",children:M.map((te,U)=>h.jsx("div",{className:"text-xs text-gray-600 leading-relaxed font-mono",children:U+1},U))}),h.jsx("div",{className:"flex-1 overflow-x-auto",children:h.jsx("pre",{className:"p-4",children:h.jsx("code",{className:"text-sm text-gray-100 font-mono leading-relaxed block",children:x})})})]}),h.jsx("div",{className:"h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"})]})]})}function bf({selectedTopic:x}){const j=Sf[x];return j?!j.sections||j.sections.length===0?h.jsx("div",{className:"p-8 flex items-center justify-center min-h-[400px]",children:h.jsxs("div",{className:"text-center",children:[h.jsx("div",{className:"text-6xl mb-4",children:"🚧"}),h.jsx("h1",{className:"text-3xl font-bold mb-2",children:j.title}),h.jsx("p",{className:"text-gray-400",children:"Content coming soon! Stay tuned 🎉"})]})}):h.jsxs("div",{className:"max-w-4xl mx-auto p-6 lg:p-8",children:[h.jsx("div",{className:"mb-8 rounded-2xl bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 border border-blue-500/20 p-6 shadow-xl",children:h.jsxs("div",{className:"flex items-start gap-4",children:[h.jsx("div",{className:"flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg",children:h.jsx(Mu,{className:"text-white",size:24})}),h.jsxs("div",{className:"flex-1",children:[h.jsx("h1",{className:"text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2",children:j.title}),j.phase&&h.jsx("div",{className:"flex items-center gap-2",children:h.jsxs("span",{className:"px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-xs font-semibold text-blue-300",children:["📍 Phase ",j.phase]})})]})]})}),h.jsx("div",{className:"space-y-8",children:j.sections.map((m,B)=>h.jsxs("section",{className:"space-y-4",children:[m.subtitle&&h.jsxs("div",{className:"flex items-center gap-3 mt-8",children:[h.jsx("div",{className:"w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"}),h.jsx("h2",{className:"text-2xl font-semibold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent",children:m.subtitle})]}),m.content&&h.jsx("div",{className:"text-gray-300 leading-relaxed space-y-3 bg-gray-900/30 rounded-xl p-6 border border-gray-800/50",children:m.content.split(`
`).filter(A=>A.trim()).map((A,M)=>h.jsx("p",{className:"text-gray-300",children:A},M))}),m.points&&h.jsx("div",{className:"bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-xl p-6 border border-gray-700/50",children:h.jsx("ul",{className:"space-y-3 text-gray-300",children:m.points.map((A,M)=>h.jsxs("li",{className:"flex items-start gap-3",children:[h.jsx("span",{className:"flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold mt-0.5",children:M+1}),h.jsx("span",{className:"flex-1 pt-0.5",children:A})]},M))})}),m.code&&h.jsx(Ef,{code:m.code,language:m.language||"javascript"}),m.example&&h.jsxs("div",{className:"relative overflow-hidden bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl p-5 shadow-lg",children:[h.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-3xl"}),h.jsxs("div",{className:"relative",children:[h.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[h.jsx(uf,{size:20,className:"text-green-400"}),h.jsx("p",{className:"text-sm font-semibold text-green-400",children:"💡 Real-World Example"})]}),h.jsx("p",{className:"text-gray-300 text-sm leading-relaxed",children:m.example})]})]})]},B))}),h.jsxs("div",{className:"mt-12 p-6 rounded-xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 text-center",children:[h.jsx(pf,{className:"w-8 h-8 mx-auto mb-2 text-blue-400"}),h.jsx("p",{className:"text-sm text-gray-400",children:"🎯 Keep exploring! Check out more topics in the sidebar"})]})]}):h.jsx("div",{className:"p-8 flex items-center justify-center min-h-[400px]",children:h.jsxs("div",{className:"text-center",children:[h.jsx("div",{className:"text-6xl mb-4",children:"🔍"}),h.jsx("p",{className:"text-gray-400 text-lg",children:"Topic not found"})]})})}function Cf(){const[x,j]=Tt.useState("intro-to-js"),[m,B]=Tt.useState(!1);return h.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100",children:[h.jsx("header",{className:"sticky top-0 z-40 backdrop-blur-xl bg-gray-900/80 border-b border-gray-800/50 shadow-lg",children:h.jsxs("div",{className:"flex items-center justify-between px-4 py-4",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("button",{onClick:()=>B(!m),className:"lg:hidden p-2 hover:bg-gradient-to-br hover:from-blue-600/20 hover:to-purple-600/20 rounded-lg transition-all duration-200",children:m?h.jsx(yf,{size:24}):h.jsx(df,{size:24})}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsxs("div",{className:"relative",children:[h.jsx(nf,{size:28,className:"text-blue-500"}),h.jsx(hf,{size:14,className:"absolute -top-1 -right-1 text-yellow-400"})]}),h.jsxs("div",{children:[h.jsx("h1",{className:"text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",children:"JavaScript Mastery"}),h.jsx("p",{className:"text-xs text-gray-400",children:"✨ From Zero to Hero"})]})]})]}),h.jsxs("div",{className:"hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30",children:[h.jsx("span",{className:"text-xs font-semibold text-blue-400",children:"🚀 11 Phases"}),h.jsx("span",{className:"text-gray-600",children:"•"}),h.jsx("span",{className:"text-xs font-semibold text-purple-400",children:"37 Topics"})]})]})}),h.jsxs("div",{className:"flex",children:[h.jsx(xf,{selectedTopic:x,onTopicSelect:A=>{j(A),B(!1)},isOpen:m,onClose:()=>B(!1)}),h.jsx("main",{className:"flex-1 min-h-[calc(100vh-73px)]",children:h.jsx(bf,{selectedTopic:x})})]})]})}Hd.createRoot(document.getElementById("root")).render(h.jsx(Cf,{}));
