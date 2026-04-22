
/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});

/*!
 * Generated using the Bootstrap Customizer (https://getbootstrap.com/docs/3.4/customize/)
 */

/*!
 * Bootstrap v3.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under the MIT license
 */

if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||e[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),n=i.data("bs.alert");n||i.data("bs.alert",n=new o(this)),"string"==typeof e&&n[e].call(i)})}var i='[data-dismiss="alert"]',o=function(e){t(e).on("click",i,this.close)};o.VERSION="3.4.1",o.TRANSITION_DURATION=150,o.prototype.close=function(e){function i(){a.detach().trigger("closed.bs.alert").remove()}var n=t(this),s=n.attr("data-target");s||(s=n.attr("href"),s=s&&s.replace(/.*(?=#[^\s]*$)/,"")),s="#"===s?[]:s;var a=t(document).find(s);e&&e.preventDefault(),a.length||(a=n.closest(".alert")),a.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(a.removeClass("in"),t.support.transition&&a.hasClass("fade")?a.one("bsTransitionEnd",i).emulateTransitionEnd(o.TRANSITION_DURATION):i())};var n=t.fn.alert;t.fn.alert=e,t.fn.alert.Constructor=o,t.fn.alert.noConflict=function(){return t.fn.alert=n,this},t(document).on("click.bs.alert.data-api",i,o.prototype.close)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.button"),s="object"==typeof e&&e;n||o.data("bs.button",n=new i(this,s)),"toggle"==e?n.toggle():e&&n.setState(e)})}var i=function(e,o){this.$element=t(e),this.options=t.extend({},i.DEFAULTS,o),this.isLoading=!1};i.VERSION="3.4.1",i.DEFAULTS={loadingText:"loading..."},i.prototype.setState=function(e){var i="disabled",o=this.$element,n=o.is("input")?"val":"html",s=o.data();e+="Text",null==s.resetText&&o.data("resetText",o[n]()),setTimeout(t.proxy(function(){o[n](null==s[e]?this.options[e]:s[e]),"loadingText"==e?(this.isLoading=!0,o.addClass(i).attr(i,i).prop(i,!0)):this.isLoading&&(this.isLoading=!1,o.removeClass(i).removeAttr(i).prop(i,!1))},this),0)},i.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")?(i.prop("checked")&&(t=!1),e.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==i.prop("type")&&(i.prop("checked")!==this.$element.hasClass("active")&&(t=!1),this.$element.toggleClass("active")),i.prop("checked",this.$element.hasClass("active")),t&&i.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var o=t.fn.button;t.fn.button=e,t.fn.button.Constructor=i,t.fn.button.noConflict=function(){return t.fn.button=o,this},t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(i){var o=t(i.target).closest(".btn");e.call(o,"toggle"),t(i.target).is('input[type="radio"], input[type="checkbox"]')||(i.preventDefault(),o.is("input,button")?o.trigger("focus"):o.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(e){t(e.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(e.type))})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.carousel"),s=t.extend({},i.DEFAULTS,o.data(),"object"==typeof e&&e),a="string"==typeof e?e:s.slide;n||o.data("bs.carousel",n=new i(this,s)),"number"==typeof e?n.to(e):a?n[a]():s.interval&&n.pause().cycle()})}var i=function(e,i){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=i,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",t.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",t.proxy(this.pause,this)).on("mouseleave.bs.carousel",t.proxy(this.cycle,this))};i.VERSION="3.4.1",i.TRANSITION_DURATION=600,i.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},i.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},i.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},i.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},i.prototype.getItemForDirection=function(t,e){var i=this.getItemIndex(e),o="prev"==t&&0===i||"next"==t&&i==this.$items.length-1;if(o&&!this.options.wrap)return e;var n="prev"==t?-1:1,s=(i+n)%this.$items.length;return this.$items.eq(s)},i.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));return t>this.$items.length-1||0>t?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(t>i?"next":"prev",this.$items.eq(t))},i.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},i.prototype.next=function(){return this.sliding?void 0:this.slide("next")},i.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},i.prototype.slide=function(e,o){var n=this.$element.find(".item.active"),s=o||this.getItemForDirection(e,n),a=this.interval,r="next"==e?"left":"right",l=this;if(s.hasClass("active"))return this.sliding=!1;var h=s[0],d=t.Event("slide.bs.carousel",{relatedTarget:h,direction:r});if(this.$element.trigger(d),!d.isDefaultPrevented()){if(this.sliding=!0,a&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var p=t(this.$indicators.children()[this.getItemIndex(s)]);p&&p.addClass("active")}var c=t.Event("slid.bs.carousel",{relatedTarget:h,direction:r});return t.support.transition&&this.$element.hasClass("slide")?(s.addClass(e),"object"==typeof s&&s.length&&s[0].offsetWidth,n.addClass(r),s.addClass(r),n.one("bsTransitionEnd",function(){s.removeClass([e,r].join(" ")).addClass("active"),n.removeClass(["active",r].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger(c)},0)}).emulateTransitionEnd(i.TRANSITION_DURATION)):(n.removeClass("active"),s.addClass("active"),this.sliding=!1,this.$element.trigger(c)),a&&this.cycle(),this}};var o=t.fn.carousel;t.fn.carousel=e,t.fn.carousel.Constructor=i,t.fn.carousel.noConflict=function(){return t.fn.carousel=o,this};var n=function(i){var o=t(this),n=o.attr("href");n&&(n=n.replace(/.*(?=#[^\s]+$)/,""));var s=o.attr("data-target")||n,a=t(document).find(s);if(a.hasClass("carousel")){var r=t.extend({},a.data(),o.data()),l=o.attr("data-slide-to");l&&(r.interval=!1),e.call(a,r),l&&a.data("bs.carousel").to(l),i.preventDefault()}};t(document).on("click.bs.carousel.data-api","[data-slide]",n).on("click.bs.carousel.data-api","[data-slide-to]",n),t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var i=t(this);e.call(i,i.data())})})}(jQuery),+function(t){"use strict";function e(e){var i=e.attr("data-target");i||(i=e.attr("href"),i=i&&/#[A-Za-z]/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,""));var o="#"!==i?t(document).find(i):null;return o&&o.length?o:e.parent()}function i(i){i&&3===i.which||(t(n).remove(),t(s).each(function(){var o=t(this),n=e(o),s={relatedTarget:this};n.hasClass("open")&&(i&&"click"==i.type&&/input|textarea/i.test(i.target.tagName)&&t.contains(n[0],i.target)||(n.trigger(i=t.Event("hide.bs.dropdown",s)),i.isDefaultPrevented()||(o.attr("aria-expanded","false"),n.removeClass("open").trigger(t.Event("hidden.bs.dropdown",s)))))}))}function o(e){return this.each(function(){var i=t(this),o=i.data("bs.dropdown");o||i.data("bs.dropdown",o=new a(this)),"string"==typeof e&&o[e].call(i)})}var n=".dropdown-backdrop",s='[data-toggle="dropdown"]',a=function(e){t(e).on("click.bs.dropdown",this.toggle)};a.VERSION="3.4.1",a.prototype.toggle=function(o){var n=t(this);if(!n.is(".disabled, :disabled")){var s=e(n),a=s.hasClass("open");if(i(),!a){"ontouchstart"in document.documentElement&&!s.closest(".navbar-nav").length&&t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click",i);var r={relatedTarget:this};if(s.trigger(o=t.Event("show.bs.dropdown",r)),o.isDefaultPrevented())return;n.trigger("focus").attr("aria-expanded","true"),s.toggleClass("open").trigger(t.Event("shown.bs.dropdown",r))}return!1}},a.prototype.keydown=function(i){if(/(38|40|27|32)/.test(i.which)&&!/input|textarea/i.test(i.target.tagName)){var o=t(this);if(i.preventDefault(),i.stopPropagation(),!o.is(".disabled, :disabled")){var n=e(o),a=n.hasClass("open");if(!a&&27!=i.which||a&&27==i.which)return 27==i.which&&n.find(s).trigger("focus"),o.trigger("click");var r=" li:not(.disabled):visible a",l=n.find(".dropdown-menu"+r);if(l.length){var h=l.index(i.target);38==i.which&&h>0&&h--,40==i.which&&h<l.length-1&&h++,~h||(h=0),l.eq(h).trigger("focus")}}}};var r=t.fn.dropdown;t.fn.dropdown=o,t.fn.dropdown.Constructor=a,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=r,this},t(document).on("click.bs.dropdown.data-api",i).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",s,a.prototype.toggle).on("keydown.bs.dropdown.data-api",s,a.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",a.prototype.keydown)}(jQuery),+function(t){"use strict";function e(e,o){return this.each(function(){var n=t(this),s=n.data("bs.modal"),a=t.extend({},i.DEFAULTS,n.data(),"object"==typeof e&&e);s||n.data("bs.modal",s=new i(this,a)),"string"==typeof e?s[e](o):a.show&&s.show(o)})}var i=function(e,i){this.options=i,this.$body=t(document.body),this.$element=t(e),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.fixedContent=".navbar-fixed-top, .navbar-fixed-bottom",this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};i.VERSION="3.4.1",i.TRANSITION_DURATION=300,i.BACKDROP_TRANSITION_DURATION=150,i.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},i.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},i.prototype.show=function(e){var o=this,n=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(n),this.isShown||n.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){o.$element.one("mouseup.dismiss.bs.modal",function(e){t(e.target).is(o.$element)&&(o.ignoreBackdropClick=!0)})}),this.backdrop(function(){var n=t.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),o.adjustDialog(),n&&o.$element[0].offsetWidth,o.$element.addClass("in"),o.enforceFocus();var s=t.Event("shown.bs.modal",{relatedTarget:e});n?o.$dialog.one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(s)}).emulateTransitionEnd(i.TRANSITION_DURATION):o.$element.trigger("focus").trigger(s)}))},i.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(i.TRANSITION_DURATION):this.hideModal())},i.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){document===t.target||this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},i.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},i.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},i.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},i.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},i.prototype.backdrop=function(e){var o=this,n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var s=t.support.transition&&n;if(this.$backdrop=t(document.createElement("div")).addClass("modal-backdrop "+n).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),s&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;s?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var a=function(){o.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):a()}else e&&e()},i.prototype.handleUpdate=function(){this.adjustDialog()},i.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},i.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},i.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},i.prototype.setScrollbar=function(){var e=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"";var i=this.scrollbarWidth;this.bodyIsOverflowing&&(this.$body.css("padding-right",e+i),t(this.fixedContent).each(function(e,o){var n=o.style.paddingRight,s=t(o).css("padding-right");t(o).data("padding-right",n).css("padding-right",parseFloat(s)+i+"px")}))},i.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad),t(this.fixedContent).each(function(e,i){var o=t(i).data("padding-right");t(i).removeData("padding-right"),i.style.paddingRight=o?o:""})},i.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var o=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=i,t.fn.modal.noConflict=function(){return t.fn.modal=o,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(i){var o=t(this),n=o.attr("href"),s=o.attr("data-target")||n&&n.replace(/.*(?=#[^\s]+$)/,""),a=t(document).find(s),r=a.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(n)&&n},a.data(),o.data());o.is("a")&&i.preventDefault(),a.one("show.bs.modal",function(t){t.isDefaultPrevented()||a.one("hidden.bs.modal",function(){o.is(":visible")&&o.trigger("focus")})}),e.call(a,r,this)})}(jQuery),+function(t){"use strict";function e(e,i){var o=e.nodeName.toLowerCase();if(-1!==t.inArray(o,i))return-1!==t.inArray(o,s)?Boolean(e.nodeValue.match(l)||e.nodeValue.match(h)):!0;for(var n=t(i).filter(function(t,e){return e instanceof RegExp}),a=0,r=n.length;r>a;a++)if(o.match(n[a]))return!0;return!1}function i(i,o,n){if(0===i.length)return i;if(n&&"function"==typeof n)return n(i);if(!document.implementation||!document.implementation.createHTMLDocument)return i;var s=document.implementation.createHTMLDocument("sanitization");s.body.innerHTML=i;for(var a=t.map(o,function(t,e){return e}),r=t(s.body).find("*"),l=0,h=r.length;h>l;l++){var d=r[l],p=d.nodeName.toLowerCase();if(-1!==t.inArray(p,a))for(var c=t.map(d.attributes,function(t){return t}),f=[].concat(o["*"]||[],o[p]||[]),u=0,g=c.length;g>u;u++)e(c[u],f)||d.removeAttribute(c[u].nodeName);else d.parentNode.removeChild(d)}return s.body.innerHTML}function o(e){return this.each(function(){var i=t(this),o=i.data("bs.tooltip"),n="object"==typeof e&&e;!o&&/destroy|hide/.test(e)||(o||i.data("bs.tooltip",o=new d(this,n)),"string"==typeof e&&o[e]())})}var n=["sanitize","whiteList","sanitizeFn"],s=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],a=/^aria-[\w-]*$/i,r={"*":["class","dir","id","lang","role",a],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},l=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,h=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i,d=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};d.VERSION="3.4.1",d.TRANSITION_DURATION=150,d.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0},sanitize:!0,sanitizeFn:null,whiteList:r},d.prototype.init=function(e,i,o){if(this.enabled=!0,this.type=e,this.$element=t(i),this.options=this.getOptions(o),this.$viewport=this.options.viewport&&t(document).find(t.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var n=this.options.trigger.split(" "),s=n.length;s--;){var a=n[s];if("click"==a)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=a){var r="hover"==a?"mouseenter":"focusin",l="hover"==a?"mouseleave":"focusout";this.$element.on(r+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},d.prototype.getDefaults=function(){return d.DEFAULTS},d.prototype.getOptions=function(e){var o=this.$element.data();for(var s in o)o.hasOwnProperty(s)&&-1!==t.inArray(s,n)&&delete o[s];return e=t.extend({},this.getDefaults(),o,e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e.sanitize&&(e.template=i(e.template,e.whiteList,e.sanitizeFn)),e},d.prototype.getDelegateOptions=function(){var e={},i=this.getDefaults();return this._options&&t.each(this._options,function(t,o){i[t]!=o&&(e[t]=o)}),e},d.prototype.enter=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusin"==e.type?"focus":"hover"]=!0),i.tip().hasClass("in")||"in"==i.hoverState?void(i.hoverState="in"):(clearTimeout(i.timeout),i.hoverState="in",i.options.delay&&i.options.delay.show?void(i.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show)):i.show())},d.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},d.prototype.leave=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusout"==e.type?"focus":"hover"]=!1),i.isInStateTrue()?void 0:(clearTimeout(i.timeout),i.hoverState="out",i.options.delay&&i.options.delay.hide?void(i.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide)):i.hide())},d.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var i=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!i)return;var o=this,n=this.tip(),s=this.getUID(this.type);this.setContent(),n.attr("id",s),this.$element.attr("aria-describedby",s),this.options.animation&&n.addClass("fade");var a="function"==typeof this.options.placement?this.options.placement.call(this,n[0],this.$element[0]):this.options.placement,r=/\s?auto?\s?/i,l=r.test(a);l&&(a=a.replace(r,"")||"top"),n.detach().css({top:0,left:0,display:"block"}).addClass(a).data("bs."+this.type,this),this.options.container?n.appendTo(t(document).find(this.options.container)):n.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var h=this.getPosition(),p=n[0].offsetWidth,c=n[0].offsetHeight;if(l){var f=a,u=this.getPosition(this.$viewport);a="bottom"==a&&h.bottom+c>u.bottom?"top":"top"==a&&h.top-c<u.top?"bottom":"right"==a&&h.right+p>u.width?"left":"left"==a&&h.left-p<u.left?"right":a,n.removeClass(f).addClass(a)}var g=this.getCalculatedOffset(a,h,p,c);this.applyPlacement(g,a);var m=function(){var t=o.hoverState;o.$element.trigger("shown.bs."+o.type),o.hoverState=null,"out"==t&&o.leave(o)};t.support.transition&&this.$tip.hasClass("fade")?n.one("bsTransitionEnd",m).emulateTransitionEnd(d.TRANSITION_DURATION):m()}},d.prototype.applyPlacement=function(e,i){var o=this.tip(),n=o[0].offsetWidth,s=o[0].offsetHeight,a=parseInt(o.css("margin-top"),10),r=parseInt(o.css("margin-left"),10);isNaN(a)&&(a=0),isNaN(r)&&(r=0),e.top+=a,e.left+=r,t.offset.setOffset(o[0],t.extend({using:function(t){o.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),o.addClass("in");var l=o[0].offsetWidth,h=o[0].offsetHeight;"top"==i&&h!=s&&(e.top=e.top+s-h);var d=this.getViewportAdjustedDelta(i,e,l,h);d.left?e.left+=d.left:e.top+=d.top;var p=/top|bottom/.test(i),c=p?2*d.left-n+l:2*d.top-s+h,f=p?"offsetWidth":"offsetHeight";o.offset(e),this.replaceArrow(c,o[0][f],p)},d.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},d.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();this.options.html?(this.options.sanitize&&(e=i(e,this.options.whiteList,this.options.sanitizeFn)),t.find(".tooltip-inner").html(e)):t.find(".tooltip-inner").text(e),t.removeClass("fade in top bottom left right")},d.prototype.hide=function(e){function i(){"in"!=o.hoverState&&n.detach(),o.$element&&o.$element.removeAttr("aria-describedby").trigger("hidden.bs."+o.type),e&&e()}var o=this,n=t(this.$tip),s=t.Event("hide.bs."+this.type);return this.$element.trigger(s),s.isDefaultPrevented()?void 0:(n.removeClass("in"),t.support.transition&&n.hasClass("fade")?n.one("bsTransitionEnd",i).emulateTransitionEnd(d.TRANSITION_DURATION):i(),this.hoverState=null,this)},d.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},d.prototype.hasContent=function(){return this.getTitle()},d.prototype.getPosition=function(e){e=e||this.$element;var i=e[0],o="BODY"==i.tagName,n=i.getBoundingClientRect();null==n.width&&(n=t.extend({},n,{width:n.right-n.left,height:n.bottom-n.top}));var s=window.SVGElement&&i instanceof window.SVGElement,a=o?{top:0,left:0}:s?null:e.offset(),r={scroll:o?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},l=o?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},n,r,l,a)},d.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},d.prototype.getViewportAdjustedDelta=function(t,e,i,o){var n={top:0,left:0};if(!this.$viewport)return n;var s=this.options.viewport&&this.options.viewport.padding||0,a=this.getPosition(this.$viewport);if(/right|left/.test(t)){var r=e.top-s-a.scroll,l=e.top+s-a.scroll+o;r<a.top?n.top=a.top-r:l>a.top+a.height&&(n.top=a.top+a.height-l)}else{var h=e.left-s,d=e.left+s+i;h<a.left?n.left=a.left-h:d>a.right&&(n.left=a.left+a.width-d)}return n},d.prototype.getTitle=function(){var t,e=this.$element,i=this.options;return t=e.attr("data-original-title")||("function"==typeof i.title?i.title.call(e[0]):i.title)},d.prototype.getUID=function(t){do t+=~~(1e6*Math.random());while(document.getElementById(t));return t},d.prototype.tip=function(){if(!this.$tip&&(this.$tip=t(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},d.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},d.prototype.enable=function(){this.enabled=!0},d.prototype.disable=function(){this.enabled=!1},d.prototype.toggleEnabled=function(){this.enabled=!this.enabled},d.prototype.toggle=function(e){var i=this;e&&(i=t(e.currentTarget).data("bs."+this.type),i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i))),e?(i.inState.click=!i.inState.click,i.isInStateTrue()?i.enter(i):i.leave(i)):i.tip().hasClass("in")?i.leave(i):i.enter(i)},d.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null,t.$element=null})},d.prototype.sanitizeHtml=function(t){return i(t,this.options.whiteList,this.options.sanitizeFn)};var p=t.fn.tooltip;t.fn.tooltip=o,t.fn.tooltip.Constructor=d,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=p,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.popover"),s="object"==typeof e&&e;!n&&/destroy|hide/.test(e)||(n||o.data("bs.popover",n=new i(this,s)),"string"==typeof e&&n[e]())})}var i=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");i.VERSION="3.4.1",i.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),i.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),i.prototype.constructor=i,i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();if(this.options.html){var o=typeof i;this.options.sanitize&&(e=this.sanitizeHtml(e),"string"===o&&(i=this.sanitizeHtml(i))),t.find(".popover-title").html(e),t.find(".popover-content").children().detach().end()["string"===o?"html":"append"](i)}else t.find(".popover-title").text(e),t.find(".popover-content").children().detach().end().text(i);t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},i.prototype.hasContent=function(){return this.getTitle()||this.getContent()},i.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var o=t.fn.popover;t.fn.popover=e,t.fn.popover.Constructor=i,t.fn.popover.noConflict=function(){return t.fn.popover=o,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.tab");n||o.data("bs.tab",n=new i(this)),"string"==typeof e&&n[e]()})}var i=function(e){this.element=t(e)};i.VERSION="3.4.1",i.TRANSITION_DURATION=150,i.prototype.show=function(){var e=this.element,i=e.closest("ul:not(.dropdown-menu)"),o=e.data("target");if(o||(o=e.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var n=i.find(".active:last a"),s=t.Event("hide.bs.tab",{relatedTarget:e[0]}),a=t.Event("show.bs.tab",{relatedTarget:n[0]});if(n.trigger(s),e.trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){var r=t(document).find(o);this.activate(e.closest("li"),i),this.activate(r,r.parent(),function(){n.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:n[0]})})}}},i.prototype.activate=function(e,o,n){function s(){a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),r?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu").length&&e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),n&&n()}var a=o.find("> .active"),r=n&&t.support.transition&&(a.length&&a.hasClass("fade")||!!o.find("> .fade").length);a.length&&r?a.one("bsTransitionEnd",s).emulateTransitionEnd(i.TRANSITION_DURATION):s(),a.removeClass("in")};var o=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=i,t.fn.tab.noConflict=function(){return t.fn.tab=o,this};var n=function(i){i.preventDefault(),e.call(t(this),"show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',n).on("click.bs.tab.data-api",'[data-toggle="pill"]',n)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.affix"),s="object"==typeof e&&e;n||o.data("bs.affix",n=new i(this,s)),"string"==typeof e&&n[e]()})}var i=function(e,o){this.options=t.extend({},i.DEFAULTS,o);var n=this.options.target===i.DEFAULTS.target?t(this.options.target):t(document).find(this.options.target);this.$target=n.on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(e),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};i.VERSION="3.4.1",i.RESET="affix affix-top affix-bottom",i.DEFAULTS={offset:0,target:window},i.prototype.getState=function(t,e,i,o){var n=this.$target.scrollTop(),s=this.$element.offset(),a=this.$target.height();if(null!=i&&"top"==this.affixed)return i>n?"top":!1;if("bottom"==this.affixed)return null!=i?n+this.unpin<=s.top?!1:"bottom":t-o>=n+a?!1:"bottom";var r=null==this.affixed,l=r?n:s.top,h=r?a:e;return null!=i&&i>=n?"top":null!=o&&l+h>=t-o?"bottom":!1},i.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(i.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},i.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},i.prototype.checkPosition=function(){
if(this.$element.is(":visible")){var e=this.$element.height(),o=this.options.offset,n=o.top,s=o.bottom,a=Math.max(t(document).height(),t(document.body).height());"object"!=typeof o&&(s=n=o),"function"==typeof n&&(n=o.top(this.$element)),"function"==typeof s&&(s=o.bottom(this.$element));var r=this.getState(a,e,n,s);if(this.affixed!=r){null!=this.unpin&&this.$element.css("top","");var l="affix"+(r?"-"+r:""),h=t.Event(l+".bs.affix");if(this.$element.trigger(h),h.isDefaultPrevented())return;this.affixed=r,this.unpin="bottom"==r?this.getPinnedOffset():null,this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix","affixed")+".bs.affix")}"bottom"==r&&this.$element.offset({top:a-e-s})}};var o=t.fn.affix;t.fn.affix=e,t.fn.affix.Constructor=i,t.fn.affix.noConflict=function(){return t.fn.affix=o,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var i=t(this),o=i.data();o.offset=o.offset||{},null!=o.offsetBottom&&(o.offset.bottom=o.offsetBottom),null!=o.offsetTop&&(o.offset.top=o.offsetTop),e.call(i,o)})})}(jQuery),+function(t){"use strict";function e(e){var i,o=e.attr("data-target")||(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"");return t(document).find(o)}function i(e){return this.each(function(){var i=t(this),n=i.data("bs.collapse"),s=t.extend({},o.DEFAULTS,i.data(),"object"==typeof e&&e);!n&&s.toggle&&/show|hide/.test(e)&&(s.toggle=!1),n||i.data("bs.collapse",n=new o(this,s)),"string"==typeof e&&n[e]()})}var o=function(e,i){this.$element=t(e),this.options=t.extend({},o.DEFAULTS,i),this.$trigger=t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};o.VERSION="3.4.1",o.TRANSITION_DURATION=350,o.DEFAULTS={toggle:!0},o.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},o.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,n=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(n&&n.length&&(e=n.data("bs.collapse"),e&&e.transitioning))){var s=t.Event("show.bs.collapse");if(this.$element.trigger(s),!s.isDefaultPrevented()){n&&n.length&&(i.call(n,"hide"),e||n.data("bs.collapse",null));var a=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var r=function(){this.$element.removeClass("collapsing").addClass("collapse in")[a](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return r.call(this);var l=t.camelCase(["scroll",a].join("-"));this.$element.one("bsTransitionEnd",t.proxy(r,this)).emulateTransitionEnd(o.TRANSITION_DURATION)[a](this.$element[0][l])}}}},o.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var i=this.dimension();this.$element[i](this.$element[i]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var n=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return t.support.transition?void this.$element[i](0).one("bsTransitionEnd",t.proxy(n,this)).emulateTransitionEnd(o.TRANSITION_DURATION):n.call(this)}}},o.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},o.prototype.getParent=function(){return t(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(i,o){var n=t(o);this.addAriaAndCollapsedClass(e(n),n)},this)).end()},o.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var n=t.fn.collapse;t.fn.collapse=i,t.fn.collapse.Constructor=o,t.fn.collapse.noConflict=function(){return t.fn.collapse=n,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(o){var n=t(this);n.attr("data-target")||o.preventDefault();var s=e(n),a=s.data("bs.collapse"),r=a?"toggle":n.data();i.call(s,r)})}(jQuery),+function(t){"use strict";function e(i,o){this.$body=t(document.body),this.$scrollElement=t(t(i).is(document.body)?window:i),this.options=t.extend({},e.DEFAULTS,o),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",t.proxy(this.process,this)),this.refresh(),this.process()}function i(i){return this.each(function(){var o=t(this),n=o.data("bs.scrollspy"),s="object"==typeof i&&i;n||o.data("bs.scrollspy",n=new e(this,s)),"string"==typeof i&&n[i]()})}e.VERSION="3.4.1",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},e.prototype.refresh=function(){var e=this,i="offset",o=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),t.isWindow(this.$scrollElement[0])||(i="position",o=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var e=t(this),n=e.data("target")||e.attr("href"),s=/^#./.test(n)&&t(n);return s&&s.length&&s.is(":visible")&&[[s[i]().top+o,n]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){e.offsets.push(this[0]),e.targets.push(this[1])})},e.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),o=this.options.offset+i-this.$scrollElement.height(),n=this.offsets,s=this.targets,a=this.activeTarget;if(this.scrollHeight!=i&&this.refresh(),e>=o)return a!=(t=s[s.length-1])&&this.activate(t);if(a&&e<n[0])return this.activeTarget=null,this.clear();for(t=n.length;t--;)a!=s[t]&&e>=n[t]&&(void 0===n[t+1]||e<n[t+1])&&this.activate(s[t])},e.prototype.activate=function(e){this.activeTarget=e,this.clear();var i=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',o=t(i).parents("li").addClass("active");o.parent(".dropdown-menu").length&&(o=o.closest("li.dropdown").addClass("active")),o.trigger("activate.bs.scrollspy")},e.prototype.clear=function(){t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var o=t.fn.scrollspy;t.fn.scrollspy=i,t.fn.scrollspy.Constructor=e,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=o,this},t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);i.call(e,e.data())})})}(jQuery),+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}t.fn.emulateTransitionEnd=function(e){var i=!1,o=this;t(this).one("bsTransitionEnd",function(){i=!0});var n=function(){i||t(o).trigger(t.support.transition.end)};return setTimeout(n,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery);
/**
 * BxSlider v4.1.2 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2014, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */
!function(t){var e={},s={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){},onSliderResize:function(){}};t.fn.bxSlider=function(n){if(0==this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var o={},r=this;e.el=this;var a=t(window).width(),l=t(window).height(),d=function(){o.settings=t.extend({},s,n),o.settings.slideWidth=parseInt(o.settings.slideWidth),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.carousel&&(o.settings.preloadImages="all"),o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return o.cssPrefix=e[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),r.data("origStyle",r.attr("style")),r.children(o.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),c()},c=function(){r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=t('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?100*o.children.length+215+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing"),f(),o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.viewport.parent().css({maxWidth:p()}),o.settings.pager||o.viewport.parent().css({margin:"0 auto 0px"}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.css("width",u()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:o.settings.slideZIndex,display:"block"})),o.controls.el=t('<div class="bx-controls" />'),o.settings.captions&&P(),o.active.last=o.settings.startSlide==x()-1,o.settings.video&&r.fitVids();var e=o.children.eq(o.settings.startSlide);"all"==o.settings.preloadImages&&(e=o.children),o.settings.ticker?o.settings.pager=!1:(o.settings.pager&&T(),o.settings.controls&&C(),o.settings.auto&&o.settings.autoControls&&E(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),g(e,h)},g=function(e,i){var s=e.find("img, iframe").length;if(0==s)return i(),void 0;var n=0;e.find("img, iframe").each(function(){t(this).one("load",function(){++n==s&&i()}).each(function(){this.complete&&t(this).load()})})},h=function(){if(o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var e="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,e).clone().addClass("bx-clone"),s=o.children.slice(-e).clone().addClass("bx-clone");r.append(i).prepend(s)}o.loader.remove(),S(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(v()),r.redrawSlider(),o.settings.onSliderLoad(o.active.index),o.initialized=!0,o.settings.responsive&&t(window).bind("resize",Z),o.settings.auto&&o.settings.autoStart&&H(),o.settings.ticker&&L(),o.settings.pager&&q(o.settings.startSlide),o.settings.controls&&W(),o.settings.touchEnabled&&!o.settings.ticker&&O()},v=function(){var e=0,s=t();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var n=1==o.settings.moveSlides?o.active.index:o.active.index*m();for(s=o.children.eq(n),i=1;i<=o.settings.maxSlides-1;i++)s=n+i>=o.children.length?s.add(o.children.eq(i-1)):s.add(o.children.eq(n+i))}else s=o.children.eq(o.active.index);else s=o.children;return"vertical"==o.settings.mode?(s.each(function(){e+=t(this).outerHeight()}),o.settings.slideMargin>0&&(e+=o.settings.slideMargin*(o.settings.minSlides-1))):e=Math.max.apply(Math,s.map(function(){return t(this).outerHeight(!1)}).get()),e},p=function(){var t="100%";return o.settings.slideWidth>0&&(t="horizontal"==o.settings.mode?o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin:o.settings.slideWidth),t},u=function(){var t=o.settings.slideWidth,e=o.viewport.width();return 0==o.settings.slideWidth||o.settings.slideWidth>e&&!o.carousel||"vertical"==o.settings.mode?t=e:o.settings.maxSlides>1&&"horizontal"==o.settings.mode&&(e>o.maxThreshold||e<o.minThreshold&&(t=(e-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides)),t},f=function(){var t=1;if("horizontal"==o.settings.mode&&o.settings.slideWidth>0)if(o.viewport.width()<o.minThreshold)t=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)t=o.settings.maxSlides;else{var e=o.children.first().width();t=Math.floor(o.viewport.width()/e)}else"vertical"==o.settings.mode&&(t=o.settings.minSlides);return t},x=function(){var t=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)t=o.children.length/m();else for(var e=0,i=0;e<o.children.length;)++t,e=i+f(),i+=o.settings.moveSlides<=f()?o.settings.moveSlides:f();else t=Math.ceil(o.children.length/f());return t},m=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=f()?o.settings.moveSlides:f()},S=function(){if(o.children.length>o.settings.maxSlides&&o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var t=o.children.last(),e=t.position();b(-(e.left-(o.viewport.width()-t.width())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,e=o.children.eq(i).position();b(-e.top,"reset",0)}}else{var e=o.children.eq(o.active.index*m()).position();o.active.index==x()-1&&(o.active.last=!0),void 0!=e&&("horizontal"==o.settings.mode?b(-e.left,"reset",0):"vertical"==o.settings.mode&&b(-e.top,"reset",0))}},b=function(t,e,i,s){if(o.usingCSS){var n="vertical"==o.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==e?(r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),D()})):"reset"==e?r.css(o.animProp,n):"ticker"==e&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),b(s.resetValue,"reset",0),N()}))}else{var a={};a[o.animProp]=t,"slide"==e?r.animate(a,i,o.settings.easing,function(){D()}):"reset"==e?r.css(o.animProp,t):"ticker"==e&&r.animate(a,speed,"linear",function(){b(s.resetValue,"reset",0),N()})}},w=function(){for(var e="",i=x(),s=0;i>s;s++){var n="";o.settings.buildPager&&t.isFunction(o.settings.buildPager)?(n=o.settings.buildPager(s),o.pagerEl.addClass("bx-custom-pager")):(n=s+1,o.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+s+'" class="bx-pager-link">'+n+"</a></div>"}o.pagerEl.html(e)},T=function(){o.settings.pagerCustom?o.pagerEl=t(o.settings.pagerCustom):(o.pagerEl=t('<div class="bx-pager" />'),o.settings.pagerSelector?t(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),w()),o.pagerEl.on("click","a",I)},C=function(){o.controls.next=t('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=t('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",y),o.controls.prev.bind("click",z),o.settings.nextSelector&&t(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&t(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=t('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},E=function(){o.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=t('<div class="bx-controls-auto" />'),o.controls.autoEl.on("click",".bx-start",k),o.controls.autoEl.on("click",".bx-stop",M),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?t(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),A(o.settings.autoStart?"stop":"start")},P=function(){o.children.each(function(){var e=t(this).find("img:first").attr("title");void 0!=e&&(""+e).length&&t(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},y=function(t){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),t.preventDefault()},z=function(t){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),t.preventDefault()},k=function(t){r.startAuto(),t.preventDefault()},M=function(t){r.stopAuto(),t.preventDefault()},I=function(e){o.settings.auto&&r.stopAuto();var i=t(e.currentTarget),s=parseInt(i.attr("data-slide-index"));s!=o.active.index&&r.goToSlide(s),e.preventDefault()},q=function(e){var i=o.children.length;return"short"==o.settings.pagerType?(o.settings.maxSlides>1&&(i=Math.ceil(o.children.length/o.settings.maxSlides)),o.pagerEl.html(e+1+o.settings.pagerShortSeparator+i),void 0):(o.pagerEl.find("a").removeClass("active"),o.pagerEl.each(function(i,s){t(s).find("a").eq(e).addClass("active")}),void 0)},D=function(){if(o.settings.infiniteLoop){var t="";0==o.active.index?t=o.children.eq(0).position():o.active.index==x()-1&&o.carousel?t=o.children.eq((x()-1)*m()).position():o.active.index==o.children.length-1&&(t=o.children.eq(o.children.length-1).position()),t&&("horizontal"==o.settings.mode?b(-t.left,"reset",0):"vertical"==o.settings.mode&&b(-t.top,"reset",0))}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},A=function(t){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[t]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},W=function(){1==x()?(o.controls.prev.addClass("disabled"),o.controls.next.addClass("disabled")):!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==x()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},H=function(){o.settings.autoDelay>0?setTimeout(r.startAuto,o.settings.autoDelay):r.startAuto(),o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},L=function(){var e=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();e="horizontal"==o.settings.mode?-i.left:-i.top}b(e,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var e=0;o.children.each(function(){e+="horizontal"==o.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)});var i=o.settings.speed/e,s="horizontal"==o.settings.mode?"left":"top",n=i*(e-Math.abs(parseInt(r.css(s))));N(n)}),N()},N=function(t){speed=t?t:o.settings.speed;var e={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?e=r.find(".bx-clone").first().position():i=o.children.first().position();var s="horizontal"==o.settings.mode?-e.left:-e.top,n="horizontal"==o.settings.mode?-i.left:-i.top,a={resetValue:n};b(s,"ticker",speed,a)},O=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",X)},X=function(t){if(o.working)t.preventDefault();else{o.touch.originalPos=r.position();var e=t.originalEvent;o.touch.start.x=e.changedTouches[0].pageX,o.touch.start.y=e.changedTouches[0].pageY,o.viewport.bind("touchmove",Y),o.viewport.bind("touchend",V)}},Y=function(t){var e=t.originalEvent,i=Math.abs(e.changedTouches[0].pageX-o.touch.start.x),s=Math.abs(e.changedTouches[0].pageY-o.touch.start.y);if(3*i>s&&o.settings.preventDefaultSwipeX?t.preventDefault():3*s>i&&o.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!=o.settings.mode&&o.settings.oneToOneTouch){var n=0;if("horizontal"==o.settings.mode){var r=e.changedTouches[0].pageX-o.touch.start.x;n=o.touch.originalPos.left+r}else{var r=e.changedTouches[0].pageY-o.touch.start.y;n=o.touch.originalPos.top+r}b(n,"reset",0)}},V=function(t){o.viewport.unbind("touchmove",Y);var e=t.originalEvent,i=0;if(o.touch.end.x=e.changedTouches[0].pageX,o.touch.end.y=e.changedTouches[0].pageY,"fade"==o.settings.mode){var s=Math.abs(o.touch.start.x-o.touch.end.x);s>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var s=0;"horizontal"==o.settings.mode?(s=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(s=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&s>0||o.active.last&&0>s)?b(i,"reset",200):Math.abs(s)>=o.settings.swipeThreshold?(0>s?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):b(i,"reset",200)}o.viewport.unbind("touchend",V)},Z=function(){var e=t(window).width(),i=t(window).height();(a!=e||l!=i)&&(a=e,l=i,r.redrawSlider(),o.settings.onSliderResize.call(r,o.active.index))};return r.goToSlide=function(e,i){if(!o.working&&o.active.index!=e)if(o.working=!0,o.oldIndex=o.active.index,o.active.index=0>e?x()-1:e>=x()?0:e,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=x()-1,o.settings.pager&&q(o.active.index),o.settings.controls&&W(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",o.settings.slideZIndex+1).fadeIn(o.settings.speed,function(){t(this).css("zIndex",o.settings.slideZIndex),D()});else{o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed);var s=0,n={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);n=a.position(),s=o.viewport.width()-a.outerWidth()}else{var l=o.children.length-o.settings.minSlides;n=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var d=1==o.settings.moveSlides?o.settings.maxSlides-m():(x()-1)*m()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(d);n=a.position()}else if("next"==i&&0==o.active.index)n=r.find("> .bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(e>=0){var c=e*m();n=o.children.eq(c).position()}if("undefined"!=typeof n){var g="horizontal"==o.settings.mode?-(n.left-s):-n.top;b(g,"slide",o.settings.speed)}}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var t=parseInt(o.active.index)+1;r.goToSlide(t,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var t=parseInt(o.active.index)-1;r.goToSlide(t,"prev")}},r.startAuto=function(t){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=t&&A("stop"))},r.stopAuto=function(t){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=t&&A("start"))},r.getCurrentSlide=function(){return o.active.index},r.getCurrentSlideElement=function(){return o.children.eq(o.active.index)},r.getSlideCount=function(){return o.children.length},r.redrawSlider=function(){o.children.add(r.find(".bx-clone")).outerWidth(u()),o.viewport.css("height",v()),o.settings.ticker||S(),o.active.last&&(o.active.index=x()-1),o.active.index>=x()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(w(),q(o.active.index))},r.destroySlider=function(){o.initialized&&(o.initialized=!1,t(".bx-clone",this).remove(),o.children.each(function(){void 0!=t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!=t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.settings.controls&&o.pagerEl.remove(),t(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),o.settings.responsive&&t(window).unbind("resize",Z))},r.reloadSlider=function(t){void 0!=t&&(n=t),r.destroySlider(),d()},d(),this}}(jQuery);

/* jquery-colorbox */
(function(e,t,n){function Y(n,r,i){var o=t.createElement(n);if(r){o.id=s+r}if(i){o.style.cssText=i}return e(o)}function Z(){return n.innerHeight?n.innerHeight:e(n).height()}function et(e){var t=E.length,n=(q+e)%t;return n<0?t+n:n}function tt(e,t){return Math.round((/%/.test(e)?(t==="x"?S.width():Z())/100:1)*parseInt(e,10))}function nt(e,t){return e.photo||e.photoRegex.test(t)}function rt(e,t){return e.retinaUrl&&n.devicePixelRatio>1?t.replace(e.photoRegex,e.retinaSuffix):t}function it(e){if("contains"in d[0]&&!d[0].contains(e.target)){e.stopPropagation();d.focus()}}function st(){var t,n=e.data(I,i);if(n==null){P=e.extend({},r);if(console&&console.log){console.log("Error: cboxElement missing settings object")}}else{P=e.extend({},n)}for(t in P){if(e.isFunction(P[t])&&t.slice(0,2)!=="on"){P[t]=P[t].call(I)}}P.rel=P.rel||I.rel||e(I).data("rel")||"nofollow";P.href=P.href||e(I).attr("href");P.title=P.title||I.title;if(typeof P.href==="string"){P.href=e.trim(P.href)}}function ot(n,r){e(t).trigger(n);D.trigger(n);if(e.isFunction(r)){r.call(I)}}function ut(){var e,t=s+"Slideshow_",n="click."+s,r,i,o,u;if(P.slideshow&&E[1]){r=function(){clearTimeout(e)};i=function(){if(P.loop||E[q+1]){e=setTimeout(V.next,P.slideshowSpeed)}};o=function(){L.html(P.slideshowStop).unbind(n).one(n,u);D.bind(f,i).bind(a,r).bind(l,u);d.removeClass(t+"off").addClass(t+"on")};u=function(){r();D.unbind(f,i).unbind(a,r).unbind(l,u);L.html(P.slideshowStart).unbind(n).one(n,function(){V.next();o()});d.removeClass(t+"on").addClass(t+"off")};if(P.slideshowAuto){o()}else{u()}}else{d.removeClass(t+"off "+t+"on")}}function at(n){if(!W){I=n;st();E=e(I);q=0;if(P.rel!=="nofollow"){E=e("."+o).filter(function(){var t=e.data(this,i),n;if(t){n=e(this).data("rel")||t.rel||this.rel}return n===P.rel});q=E.index(I);if(q===-1){E=E.add(I);q=E.length-1}}p.css({opacity:parseFloat(P.opacity),cursor:P.overlayClose?"pointer":"auto",visibility:"visible"}).show();if(J){d.add(p).removeClass(J)}if(P.className){d.add(p).addClass(P.className)}J=P.className;if(P.closeButton){M.html(P.close).appendTo(m)}else{M.appendTo("<div/>")}if(!U){U=z=true;d.css({visibility:"hidden",display:"block"});x=Y($,"LoadedContent","width:0; height:0; overflow:hidden");m.css({width:"",height:""}).append(x);H=g.height()+w.height()+m.outerHeight(true)-m.height();B=y.width()+b.width()+m.outerWidth(true)-m.width();j=x.outerHeight(true);F=x.outerWidth(true);P.w=tt(P.initialWidth,"x");P.h=tt(P.initialHeight,"y");V.position();ut();ot(u,P.onOpen);_.add(C).hide();d.focus();if(P.trapFocus){if(t.addEventListener){t.addEventListener("focus",it,true);D.one(c,function(){t.removeEventListener("focus",it,true)})}}if(P.returnFocus){D.one(c,function(){e(I).focus()})}}ct()}}function ft(){if(!d&&t.body){G=false;S=e(n);d=Y($).attr({id:i,"class":e.support.opacity===false?s+"IE":"",role:"dialog",tabindex:"-1"}).hide();p=Y($,"Overlay").hide();N=e([Y($,"LoadingOverlay")[0],Y($,"LoadingGraphic")[0]]);v=Y($,"Wrapper");m=Y($,"Content").append(C=Y($,"Title"),k=Y($,"Current"),O=e('<button type="button"/>').attr({id:s+"Previous"}),A=e('<button type="button"/>').attr({id:s+"Next"}),L=Y("button","Slideshow"),N);M=e('<button type="button"/>').attr({id:s+"Close"});v.append(Y($).append(Y($,"TopLeft"),g=Y($,"TopCenter"),Y($,"TopRight")),Y($,false,"clear:left").append(y=Y($,"MiddleLeft"),m,b=Y($,"MiddleRight")),Y($,false,"clear:left").append(Y($,"BottomLeft"),w=Y($,"BottomCenter"),Y($,"BottomRight"))).find("div div").css({"float":"left"});T=Y($,false,"position:absolute; width:9999px; visibility:hidden; display:none");_=A.add(O).add(k).add(L);e(t.body).append(p,d.append(v,T))}}function lt(){function n(e){if(!(e.which>1||e.shiftKey||e.altKey||e.metaKey||e.ctrlKey)){e.preventDefault();at(this)}}if(d){if(!G){G=true;A.click(function(){V.next()});O.click(function(){V.prev()});M.click(function(){V.close()});p.click(function(){if(P.overlayClose){V.close()}});e(t).bind("keydown."+s,function(e){var t=e.keyCode;if(U&&P.escKey&&t===27){e.preventDefault();V.close()}if(U&&P.arrowKey&&E[1]&&!e.altKey){if(t===37){e.preventDefault();O.click()}else if(t===39){e.preventDefault();A.click()}}});if(e.isFunction(e.fn.on)){e(t).on("click."+s,"."+o,n)}else{e("."+o).live("click."+s,n)}}return true}return false}function ct(){var r,i,o=V.prep,u,f=++K;z=true;R=false;I=E[q];st();ot(h);ot(a,P.onLoad);P.h=P.height?tt(P.height,"y")-j-H:P.innerHeight&&tt(P.innerHeight,"y");P.w=P.width?tt(P.width,"x")-F-B:P.innerWidth&&tt(P.innerWidth,"x");P.mw=P.w;P.mh=P.h;if(P.maxWidth){P.mw=tt(P.maxWidth,"x")-F-B;P.mw=P.w&&P.w<P.mw?P.w:P.mw}if(P.maxHeight){P.mh=tt(P.maxHeight,"y")-j-H;P.mh=P.h&&P.h<P.mh?P.h:P.mh}r=P.href;X=setTimeout(function(){N.show()},100);if(P.inline){u=Y($).hide().insertBefore(e(r)[0]);D.one(h,function(){u.replaceWith(x.children())});o(e(r))}else if(P.iframe){o(" ")}else if(P.html){o(P.html)}else if(nt(P,r)){r=rt(P,r);R=t.createElement("img");e(R).addClass(s+"Photo").bind("error",function(){P.title=false;o(Y($,"Error").html(P.imgError))}).one("load",function(){var t;if(f!==K){return}R.alt=e(I).attr("alt")||e(I).attr("data-alt")||"";if(P.retinaImage&&n.devicePixelRatio>1){R.height=R.height/n.devicePixelRatio;R.width=R.width/n.devicePixelRatio}if(P.scalePhotos){i=function(){R.height-=R.height*t;R.width-=R.width*t};if(P.mw&&R.width>P.mw){t=(R.width-P.mw)/R.width;i()}if(P.mh&&R.height>P.mh){t=(R.height-P.mh)/R.height;i()}}if(P.h){R.style.marginTop=Math.max(P.mh-R.height,0)/2+"px"}if(E[1]&&(P.loop||E[q+1])){R.style.cursor="pointer";R.onclick=function(){V.next()}}R.style.width=R.width+"px";R.style.height=R.height+"px";setTimeout(function(){o(R)},1)});setTimeout(function(){R.src=r},1)}else if(r){T.load(r,P.data,function(t,n){if(f===K){o(n==="error"?Y($,"Error").html(P.xhrError):e(this).contents())}})}}var r={transition:"elastic",speed:300,fadeOut:300,width:false,initialWidth:"600",innerWidth:false,maxWidth:false,height:false,initialHeight:"450",innerHeight:false,maxHeight:false,scalePhotos:true,scrolling:true,inline:false,html:false,iframe:false,fastIframe:true,photo:false,href:false,title:false,rel:false,opacity:.9,preloading:true,className:false,retinaImage:false,retinaUrl:false,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",open:false,returnFocus:true,trapFocus:true,reposition:true,loop:true,slideshow:false,slideshowAuto:true,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp)((#|\?).*)?$/i,onOpen:false,onLoad:false,onComplete:false,onCleanup:false,onClosed:false,overlayClose:true,escKey:true,arrowKey:true,top:false,bottom:false,left:false,right:false,fixed:false,data:undefined,closeButton:true},i="colorbox",s="cbox",o=s+"Element",u=s+"_open",a=s+"_load",f=s+"_complete",l=s+"_cleanup",c=s+"_closed",h=s+"_purge",p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D=e("<a/>"),P,H,B,j,F,I,q,R,U,z,W,X,V,$="div",J,K=0,Q={},G;if(e.colorbox){return}e(ft);V=e.fn[i]=e[i]=function(t,n){var s=this;t=t||{};ft();if(lt()){if(e.isFunction(s)){s=e("<a/>");t.open=true}else if(!s[0]){return s}if(n){t.onComplete=n}s.each(function(){e.data(this,i,e.extend({},e.data(this,i)||r,t))}).addClass(o);if(e.isFunction(t.open)&&t.open.call(s)||t.open){at(s[0])}}return s};V.position=function(t,n){function l(){g[0].style.width=w[0].style.width=m[0].style.width=parseInt(d[0].style.width,10)-B+"px";m[0].style.height=y[0].style.height=b[0].style.height=parseInt(d[0].style.height,10)-H+"px"}var r,i=0,o=0,u=d.offset(),a,f;S.unbind("resize."+s);d.css({top:-9e4,left:-9e4});a=S.scrollTop();f=S.scrollLeft();if(P.fixed){u.top-=a;u.left-=f;d.css({position:"fixed"})}else{i=a;o=f;d.css({position:"absolute"})}if(P.right!==false){o+=Math.max(S.width()-P.w-F-B-tt(P.right,"x"),0)}else if(P.left!==false){o+=tt(P.left,"x")}else{o+=Math.round(Math.max(S.width()-P.w-F-B,0)/2)}if(P.bottom!==false){i+=Math.max(Z()-P.h-j-H-tt(P.bottom,"y"),0)}else if(P.top!==false){i+=tt(P.top,"y")}else{i+=Math.round(Math.max(Z()-P.h-j-H,0)/2)}d.css({top:u.top,left:u.left,visibility:"visible"});v[0].style.width=v[0].style.height="9999px";r={width:P.w+F+B,height:P.h+j+H,top:i,left:o};if(t){var c=0;e.each(r,function(e){if(r[e]!==Q[e]){c=t;return}});t=c}Q=r;if(!t){d.css(r)}d.dequeue().animate(r,{duration:t||0,complete:function(){l();z=false;v[0].style.width=P.w+F+B+"px";v[0].style.height=P.h+j+H+"px";if(P.reposition){setTimeout(function(){S.bind("resize."+s,V.position)},1)}if(n){n()}},step:l})};V.resize=function(e){var t;if(U){e=e||{};if(e.width){P.w=tt(e.width,"x")-F-B}if(e.innerWidth){P.w=tt(e.innerWidth,"x")}x.css({width:P.w});if(e.height){P.h=tt(e.height,"y")-j-H}if(e.innerHeight){P.h=tt(e.innerHeight,"y")}if(!e.innerHeight&&!e.height){t=x.scrollTop();x.css({height:"auto"});P.h=x.height()}x.css({height:P.h});if(t){x.scrollTop(t)}V.position(P.transition==="none"?0:P.speed)}};V.prep=function(n){function u(){P.w=P.w||x.width();P.w=P.mw&&P.mw<P.w?P.mw:P.w;return P.w}function a(){P.h=P.h||x.height();P.h=P.mh&&P.mh<P.h?P.mh:P.h;return P.h}if(!U){return}var r,o=P.transition==="none"?0:P.speed;x.empty().remove();x=Y($,"LoadedContent").append(n);x.hide().appendTo(T.show()).css({width:u(),overflow:P.scrolling?"auto":"hidden"}).css({height:a()}).prependTo(m);T.hide();e(R).css({"float":"none"});r=function(){function c(){if(e.support.opacity===false){d[0].style.removeAttribute("filter")}}var n=E.length,r,u="frameBorder",a="allowTransparency",l;if(!U){return}l=function(){clearTimeout(X);N.hide();ot(f,P.onComplete)};C.html(P.title).add(x).show();if(n>1){if(typeof P.current==="string"){k.html(P.current.replace("{current}",q+1).replace("{total}",n)).show()}A[P.loop||q<n-1?"show":"hide"]().html(P.next);O[P.loop||q?"show":"hide"]().html(P.previous);if(P.slideshow){L.show()}if(P.preloading){e.each([et(-1),et(1)],function(){var n,r,s=E[this],o=e.data(s,i);if(o&&o.href){n=o.href;if(e.isFunction(n)){n=n.call(s)}}else{n=e(s).attr("href")}if(n&&nt(o,n)){n=rt(o,n);r=t.createElement("img");r.src=n}})}}else{_.hide()}if(P.iframe){r=Y("iframe")[0];if(u in r){r[u]=0}if(a in r){r[a]="true"}if(!P.scrolling){r.scrolling="no"}e(r).attr({src:P.href,name:(new Date).getTime(),"class":s+"Iframe",allowFullScreen:true,webkitAllowFullScreen:true,mozallowfullscreen:true}).one("load",l).appendTo(x);D.one(h,function(){r.src="//about:blank"});if(P.fastIframe){e(r).trigger("load")}}else{l()}if(P.transition==="fade"){d.fadeTo(o,1,c)}else{c()}};if(P.transition==="fade"){d.fadeTo(o,0,function(){V.position(0,r)})}else{V.position(o,r)}};V.next=function(){if(!z&&E[1]&&(P.loop||E[q+1])){q=et(1);at(E[q])}};V.prev=function(){if(!z&&E[1]&&(P.loop||q)){q=et(-1);at(E[q])}};V.close=function(){if(U&&!W){W=true;U=false;ot(l,P.onCleanup);S.unbind("."+s);p.fadeTo(P.fadeOut||0,0);d.stop().fadeTo(P.fadeOut||0,0,function(){d.add(p).css({opacity:1,cursor:"auto"}).hide();ot(h);x.empty().remove();setTimeout(function(){W=false;ot(c,P.onClosed)},1)})}};V.remove=function(){if(!d){return}d.stop();e.colorbox.close();d.stop().remove();p.remove();W=false;d=null;e("."+o).removeData(i).removeClass(o);e(t).unbind("click."+s)};V.element=function(){return e(I)};V.settings=r})(jQuery,document,window)

/* jquery-colorbox-de */
jQuery.extend(jQuery.colorbox.settings,{current:"{current} / {total}",previous:"Zurück",next:"Vor",close:"Schließen",xhrError:"Dieser Inhalt konnte nicht geladen werden.",imgError:"Dieses Bild konnte nicht geladen werden.",slideshowStart:"Slideshow starten",slideshowStop:"Slideshow anhalten"})

/* stacktable / http://johnpolacek.github.io/stacktable.js/*/
/**
 * stacktable.js
 * Author & copyright (c) 2012: John Polacek
 * CardTable by: Justin McNally (2015)
 * Dual MIT & GPL license
 *
 * Page: http://johnpolacek.github.com/stacktable.js
 * Repo: https://github.com/johnpolacek/stacktable.js/
 *
 * jQuery plugin for stacking tables on small screens
 * Requires jQuery version 1.7 or above
 *
 */
;(function($) {
    $.fn.cardtable = function(options) {
        var $tables = this,
            defaults = {headIndex:0},
            settings = $.extend({}, defaults, options),
            headIndex;

        // checking the "headIndex" option presence... or defaults it to 0
        if(options && options.headIndex)
            headIndex = options.headIndex;
        else
            headIndex = 0;

        return $tables.each(function() {
            var $table = $(this);
            if ($table.hasClass('stacktable')) {
                return;
            }
            var table_css = $(this).prop('class');
            var $stacktable = $('<div></div>');
            if (typeof settings.myClass !== 'undefined') $stacktable.addClass(settings.myClass);
            var markup = '';
            var $caption, $topRow, headMarkup, bodyMarkup, tr_class;

            $table.addClass('stacktable large-only');
            $caption = $table.find("caption").clone();
            $topRow = $table.find('tr').eq(0);

            // using rowIndex and cellIndex in order to reduce ambiguity
            $table.find('tbody tr').each(function() {

                // declaring headMarkup and bodyMarkup, to be used for separately head and body of single records
                headMarkup = '';
                bodyMarkup = '';
                tr_class = $(this).prop('class');
                // for the first row, "headIndex" cell is the head of the table
                // for the other rows, put the "headIndex" cell as the head for that row
                // then iterate through the key/values
                $(this).find('td,th').each(function(cellIndex) {
                    if ($(this).html() !== ''){
                        bodyMarkup += '<tr class="' + tr_class +'">';
                        if ($topRow.find('td,th').eq(cellIndex).html()){
                            bodyMarkup += '<td class="st-key">'+$topRow.find('td,th').eq(cellIndex).html()+'</td>';
                        } else {
                            bodyMarkup += '<td class="st-key"></td>';
                        }
                        bodyMarkup += '<td class="st-val '+$(this).prop('class')  +'">'+$(this).html()+'</td>';
                        bodyMarkup += '</tr>';
                    }
                });

                markup += '<table class=" '+ table_css +' stacktable small-only"><tbody>' + headMarkup + bodyMarkup + '</tbody></table>';
            });

            $table.find('tfoot tr td').each(function(rowIndex,value) {
                if ($.trim($(value).text()) !== '') {
                    markup += '<table class="'+ table_css + ' stacktable small-only"><tbody><tr><td>' + $(value).html() + '</td></tr></tbody></table>';
                }
            });

            $stacktable.prepend($caption);
            $stacktable.append($(markup));
            $table.before($stacktable);
        });
    };

    $.fn.stacktable = function(options) {
        var $tables = this,
            defaults = {headIndex:0},
            settings = $.extend({}, defaults, options),
            headIndex;

        // checking the "headIndex" option presence... or defaults it to 0
        if(options && options.headIndex)
            headIndex = options.headIndex;
        else
            headIndex = 0;

        return $tables.each(function() {
            var table_css = $(this).prop('class');
            var $stacktable = $('<table class="'+ table_css +' stacktable small-only"><tbody></tbody></table>');
            if (typeof settings.myClass !== 'undefined') $stacktable.addClass(settings.myClass);
            var markup = '';
            var $table, $caption, $topRow, headMarkup, bodyMarkup, tr_class;

            $table = $(this);
            $table.addClass('stacktable large-only');
            $caption = $table.find("caption").clone();
            $topRow = $table.find('tr').eq(0);

            // using rowIndex and cellIndex in order to reduce ambiguity
            $table.find('tbody tr').each(function(rowIndex) {

                // declaring headMarkup and bodyMarkup, to be used for separately head and body of single records
                headMarkup = '';
                bodyMarkup = '';
                tr_class = $(this).prop('class');
                // for the first row, "headIndex" cell is the head of the table
                /*
                if (rowIndex === 0) {
                    // the main heading goes into the markup variable
                    console.log($(this).find('th,td').eq(headIndex).html());
                    markup += '<tr class=" '+tr_class +' "><th class="st-head-row st-head-row-main" colspan="2">'+$(this).find('th,td').eq(headIndex).html()+'</th></tr>';
                }
                else {*/
                    // for the other rows, put the "headIndex" cell as the head for that row
                    // then iterate through the key/values
                    $(this).find('td,th').each(function(cellIndex) {
                      /*  if (cellIndex === headIndex) {
                            headMarkup = '<tr class="'+ tr_class+'"><th class="st-head-row" colspan="2">'+$(this).html()+'</th></tr>';
                        } else {*/
                            if ($(this).html() !== ''){
                                if(cellIndex === headIndex){
                                    bodyMarkup += '<tr class="table-row-no-border"><td></td><td></td></tr>';
                                }
                                bodyMarkup += '<tr class="' + tr_class +'">';
                                if ($topRow.find('td,th').eq(cellIndex).html()){
                                    bodyMarkup += '<td class="st-key">'+$topRow.find('td,th').eq(cellIndex).html()+'</td>';
                                } else {
                                    bodyMarkup += '<td class="st-key"></td>';
                                }
                                bodyMarkup += '<td class="st-val '+$(this).prop('class')  +'">'+$(this).html()+'</td>';
                                bodyMarkup += '</tr>';
                            }
                       // }
                    });

                    markup += headMarkup + bodyMarkup;
               // }
            });

            $stacktable.prepend($caption);
            $stacktable.append($(markup));
            $table.before($stacktable);
        });
    };

    $.fn.stackcolumns = function(options) {
        var $tables = this,
            defaults = {},
            settings = $.extend({}, defaults, options);

        return $tables.each(function() {
            var $table = $(this);
            var num_cols = $table.find('tr').eq(0).find('td,th').length; //first table <tr> must not contain colspans, or add sum(colspan-1) here.
            if(num_cols<3) //stackcolumns has no effect on tables with less than 3 columns
                return;

            var $stackcolumns = $('<table class="stacktable small-only"></table>');
            if (typeof settings.myClass !== 'undefined') $stackcolumns.addClass(settings.myClass);
            $table.addClass('stacktable large-only');
            var tb = $('<tbody></tbody>');
            var col_i = 1; //col index starts at 0 -> start copy at second column.

            while (col_i < num_cols) {
                $table.find('tr').each(function(index) {
                    var tem = $('<tr></tr>'); // todo opt. copy styles of $this; todo check if parent is thead or tfoot to handle accordingly
                    if(index === 0) tem.addClass("st-head-row st-head-row-main");
                    var first = $(this).find('td,th').eq(0).clone().addClass("st-key");
                    var target = col_i;
                    // if colspan apply, recompute target for second cell.
                    if ($(this).find("*[colspan]").length) {
                        var i =0;
                        $(this).find('td,th').each(function() {
                            var cs = $(this).attr("colspan");
                            if (cs) {
                                cs = parseInt(cs, 10);
                                target -= cs-1;
                                if ((i+cs) > (col_i)) //out of current bounds
                                    target += i + cs - col_i -1;
                                i += cs;
                            }
                            else
                                i++;

                            if (i > col_i)
                                return false; //target is set; break.
                        });
                    }
                    var second = $(this).find('td,th').eq(target).clone().addClass("st-val").removeAttr("colspan");
                    tem.append(first, second);
                    tb.append(tem);
                });
                ++col_i;
            }

            $stackcolumns.append($(tb));
            $table.before($stackcolumns);
        });
    };

}(jQuery));
/*! jQuery UI - v1.12.1 - 2017-02-09
* http://jqueryui.com
* Includes: widget.js, position.js, keycode.js, unique-id.js, widgets/autocomplete.js, widgets/datepicker.js, widgets/menu.js, widgets/mouse.js, widgets/slider.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(t){function e(t){for(var e,i;t.length&&t[0]!==document;){if(e=t.css("position"),("absolute"===e||"relative"===e||"fixed"===e)&&(i=parseInt(t.css("zIndex"),10),!isNaN(i)&&0!==i))return i;t=t.parent()}return 0}function i(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},t.extend(this._defaults,this.regional[""]),this.regional.en=t.extend(!0,{},this.regional[""]),this.regional["en-US"]=t.extend(!0,{},this.regional.en),this.dpDiv=s(t("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function s(e){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.on("mouseout",i,function(){t(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).removeClass("ui-datepicker-next-hover")}).on("mouseover",i,n)}function n(){t.datepicker._isDisabledDatepicker(l.inline?l.dpDiv.parent()[0]:l.input[0])||(t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),t(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).addClass("ui-datepicker-next-hover"))}function o(e,i){t.extend(e,i);for(var s in i)null==i[s]&&(e[s]=i[s]);return e}t.ui=t.ui||{},t.ui.version="1.12.1";var a=0,r=Array.prototype.slice;t.cleanData=function(e){return function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)try{s=t._data(n,"events"),s&&s.remove&&t(n).triggerHandler("remove")}catch(a){}e(i)}}(t.cleanData),t.widget=function(e,i,s){var n,o,a,r={},l=e.split(".")[0];e=e.split(".")[1];var h=l+"-"+e;return s||(s=i,i=t.Widget),t.isArray(s)&&(s=t.extend.apply(null,[{}].concat(s))),t.expr[":"][h.toLowerCase()]=function(e){return!!t.data(e,h)},t[l]=t[l]||{},n=t[l][e],o=t[l][e]=function(t,e){return this._createWidget?(arguments.length&&this._createWidget(t,e),void 0):new o(t,e)},t.extend(o,n,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),a=new i,a.options=t.widget.extend({},a.options),t.each(s,function(e,s){return t.isFunction(s)?(r[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function n(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=n,e=s.apply(this,arguments),this._super=i,this._superApply=o,e}}(),void 0):(r[e]=s,void 0)}),o.prototype=t.widget.extend(a,{widgetEventPrefix:n?a.widgetEventPrefix||e:e},r,{constructor:o,namespace:l,widgetName:e,widgetFullName:h}),n?(t.each(n._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete n._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var i,s,n=r.call(arguments,1),o=0,a=n.length;a>o;o++)for(i in n[o])s=n[o][i],n[o].hasOwnProperty(i)&&void 0!==s&&(e[i]=t.isPlainObject(s)?t.isPlainObject(e[i])?t.widget.extend({},e[i],s):t.widget.extend({},s):s);return e},t.widget.bridge=function(e,i){var s=i.prototype.widgetFullName||e;t.fn[e]=function(n){var o="string"==typeof n,a=r.call(arguments,1),l=this;return o?this.length||"instance"!==n?this.each(function(){var i,o=t.data(this,s);return"instance"===n?(l=o,!1):o?t.isFunction(o[n])&&"_"!==n.charAt(0)?(i=o[n].apply(o,a),i!==o&&void 0!==i?(l=i&&i.jquery?l.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+n+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; "+"attempted to call method '"+n+"'")}):l=void 0:(a.length&&(n=t.widget.extend.apply(null,[n].concat(a))),this.each(function(){var e=t.data(this,s);e?(e.option(n||{}),e._init&&e._init()):t.data(this,s,new i(n,this))})),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(e,i){i=t(i||this.defaultElement||this)[0],this.element=t(i),this.uuid=a++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},i!==this&&(t.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===i&&this.destroy()}}),this.document=t(i.style?i.ownerDocument:i.document||i),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,function(t,i){e._removeClass(i,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},s=e.split("."),e=s.shift(),s.length){for(n=a[e]=t.widget.extend({},this.options[e]),o=0;s.length-1>o;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,s,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&n&&n.length&&(s=t(n.get()),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){function i(i,o){var a,r;for(r=0;i.length>r;r++)a=n.classesElementLookup[i[r]]||t(),a=e.add?t(t.unique(a.get().concat(e.element.get()))):t(a.not(e.element).get()),n.classesElementLookup[i[r]]=a,s.push(i[r]),o&&e.classes[i[r]]&&s.push(e.classes[i[r]])}var s=[],n=this;return e=t.extend({element:this.element,classes:this.options.classes||{}},e),this._on(e.element,{remove:"_untrackClassesElement"}),e.keys&&i(e.keys.match(/\S+/g)||[],!0),e.extra&&i(e.extra.match(/\S+/g)||[]),s.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,function(s,n){-1!==t.inArray(e.target,n)&&(i.classesElementLookup[s]=t(n.not(e.target).get()))})},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s="boolean"==typeof s?s:i;var n="string"==typeof t||null===t,o={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return o.element.toggleClass(this._classes(o),s),this},_on:function(e,i,s){var n,o=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,function(s,a){function r(){return e||o.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof a?o[a]:a).apply(o,arguments):void 0}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var l=s.match(/^([\w:-]*)\s*(.*)$/),h=l[1]+o.eventNamespace,c=l[2];c?n.on(h,c,r):i.on(h,r)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}}),t.widget,function(){function e(t,e,i){return[parseFloat(t[0])*(u.test(t[0])?e/100:1),parseFloat(t[1])*(u.test(t[1])?i/100:1)]}function i(e,i){return parseInt(t.css(e,i),10)||0}function s(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}var n,o=Math.max,a=Math.abs,r=/left|center|right/,l=/top|center|bottom/,h=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,u=/%$/,d=t.fn.position;t.position={scrollbarWidth:function(){if(void 0!==n)return n;var e,i,s=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=s.children()[0];return t("body").append(s),e=o.offsetWidth,s.css("overflow","scroll"),i=o.offsetWidth,e===i&&(i=s[0].clientWidth),s.remove(),n=e-i},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),s=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,o="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:o?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType,o=!s&&!n;return{element:i,isWindow:s,isDocument:n,offset:o?t(e).offset():{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:i.outerWidth(),height:i.outerHeight()}}},t.fn.position=function(n){if(!n||!n.of)return d.apply(this,arguments);n=t.extend({},n);var u,p,f,g,m,_,v=t(n.of),b=t.position.getWithinInfo(n.within),y=t.position.getScrollInfo(b),w=(n.collision||"flip").split(" "),k={};return _=s(v),v[0].preventDefault&&(n.at="left top"),p=_.width,f=_.height,g=_.offset,m=t.extend({},g),t.each(["my","at"],function(){var t,e,i=(n[this]||"").split(" ");1===i.length&&(i=r.test(i[0])?i.concat(["center"]):l.test(i[0])?["center"].concat(i):["center","center"]),i[0]=r.test(i[0])?i[0]:"center",i[1]=l.test(i[1])?i[1]:"center",t=h.exec(i[0]),e=h.exec(i[1]),k[this]=[t?t[0]:0,e?e[0]:0],n[this]=[c.exec(i[0])[0],c.exec(i[1])[0]]}),1===w.length&&(w[1]=w[0]),"right"===n.at[0]?m.left+=p:"center"===n.at[0]&&(m.left+=p/2),"bottom"===n.at[1]?m.top+=f:"center"===n.at[1]&&(m.top+=f/2),u=e(k.at,p,f),m.left+=u[0],m.top+=u[1],this.each(function(){var s,r,l=t(this),h=l.outerWidth(),c=l.outerHeight(),d=i(this,"marginLeft"),_=i(this,"marginTop"),x=h+d+i(this,"marginRight")+y.width,C=c+_+i(this,"marginBottom")+y.height,D=t.extend({},m),T=e(k.my,l.outerWidth(),l.outerHeight());"right"===n.my[0]?D.left-=h:"center"===n.my[0]&&(D.left-=h/2),"bottom"===n.my[1]?D.top-=c:"center"===n.my[1]&&(D.top-=c/2),D.left+=T[0],D.top+=T[1],s={marginLeft:d,marginTop:_},t.each(["left","top"],function(e,i){t.ui.position[w[e]]&&t.ui.position[w[e]][i](D,{targetWidth:p,targetHeight:f,elemWidth:h,elemHeight:c,collisionPosition:s,collisionWidth:x,collisionHeight:C,offset:[u[0]+T[0],u[1]+T[1]],my:n.my,at:n.at,within:b,elem:l})}),n.using&&(r=function(t){var e=g.left-D.left,i=e+p-h,s=g.top-D.top,r=s+f-c,u={target:{element:v,left:g.left,top:g.top,width:p,height:f},element:{element:l,left:D.left,top:D.top,width:h,height:c},horizontal:0>i?"left":e>0?"right":"center",vertical:0>r?"top":s>0?"bottom":"middle"};h>p&&p>a(e+i)&&(u.horizontal="center"),c>f&&f>a(s+r)&&(u.vertical="middle"),u.important=o(a(e),a(i))>o(a(s),a(r))?"horizontal":"vertical",n.using.call(this,t,u)}),l.offset(t.extend(D,{using:r}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,l=n-r,h=r+e.collisionWidth-a-n;e.collisionWidth>a?l>0&&0>=h?(i=t.left+l+e.collisionWidth-a-n,t.left+=l-i):t.left=h>0&&0>=l?n:l>h?n+a-e.collisionWidth:n:l>0?t.left+=l:h>0?t.left-=h:t.left=o(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,l=n-r,h=r+e.collisionHeight-a-n;e.collisionHeight>a?l>0&&0>=h?(i=t.top+l+e.collisionHeight-a-n,t.top+=l-i):t.top=h>0&&0>=l?n:l>h?n+a-e.collisionHeight:n:l>0?t.top+=l:h>0?t.top-=h:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,o=n.offset.left+n.scrollLeft,r=n.width,l=n.isWindow?n.scrollLeft:n.offset.left,h=t.left-e.collisionPosition.marginLeft,c=h-l,u=h+e.collisionWidth-r-l,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-r-o,(0>i||a(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-l,(s>0||u>a(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,o=n.offset.top+n.scrollTop,r=n.height,l=n.isWindow?n.scrollTop:n.offset.top,h=t.top-e.collisionPosition.marginTop,c=h-l,u=h+e.collisionHeight-r-l,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>c?(s=t.top+p+f+g+e.collisionHeight-r-o,(0>s||a(c)>s)&&(t.top+=p+f+g)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+g-l,(i>0||u>a(i))&&(t.top+=p+f+g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}}}(),t.ui.position,t.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},t.fn.extend({uniqueId:function(){var t=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++t)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")})}}),t.ui.safeActiveElement=function(t){var e;try{e=t.activeElement}catch(i){e=t.body}return e||(e=t.body),e.nodeName||(e=t.body),e},t.widget("ui.menu",{version:"1.12.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().attr({role:this.options.role,tabIndex:0}),this._addClass("ui-menu","ui-widget ui-widget-content"),this._on({"mousedown .ui-menu-item":function(t){t.preventDefault()},"click .ui-menu-item":function(e){var i=t(e.target),s=t(t.ui.safeActiveElement(this.document[0]));!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(e),e.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(e):!this.element.is(":focus")&&s.closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(e){if(!this.previousFilter){var i=t(e.target).closest(".ui-menu-item"),s=t(e.currentTarget);i[0]===s[0]&&(this._removeClass(s.siblings().children(".ui-state-active"),null,"ui-state-active"),this.focus(e,s))}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this.element.find(this.options.items).eq(0);e||this.focus(t,i)},blur:function(e){this._delay(function(){var i=!t.contains(this.element[0],t.ui.safeActiveElement(this.document[0]));i&&this.collapseAll(e)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(t){this._closeOnDocumentClick(t)&&this.collapseAll(t),this.mouseHandled=!1}})},_destroy:function(){var e=this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),i=e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),i.children().each(function(){var e=t(this);e.data("ui-menu-submenu-caret")&&e.remove()})},_keydown:function(e){var i,s,n,o,a=!0;switch(e.keyCode){case t.ui.keyCode.PAGE_UP:this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case t.ui.keyCode.HOME:this._move("first","first",e);break;case t.ui.keyCode.END:this._move("last","last",e);break;case t.ui.keyCode.UP:this.previous(e);break;case t.ui.keyCode.DOWN:this.next(e);break;case t.ui.keyCode.LEFT:this.collapse(e);break;case t.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e);break;case t.ui.keyCode.ESCAPE:this.collapse(e);break;default:a=!1,s=this.previousFilter||"",o=!1,n=e.keyCode>=96&&105>=e.keyCode?""+(e.keyCode-96):String.fromCharCode(e.keyCode),clearTimeout(this.filterTimer),n===s?o=!0:n=s+n,i=this._filterMenuItems(n),i=o&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i,i.length||(n=String.fromCharCode(e.keyCode),i=this._filterMenuItems(n)),i.length?(this.focus(e,i),this.previousFilter=n,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}a&&e.preventDefault()},_activate:function(t){this.active&&!this.active.is(".ui-state-disabled")&&(this.active.children("[aria-haspopup='true']").length?this.expand(t):this.select(t))},refresh:function(){var e,i,s,n,o,a=this,r=this.options.icons.submenu,l=this.element.find(this.options.menus);this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length),s=l.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var e=t(this),i=e.prev(),s=t("<span>").data("ui-menu-submenu-caret",!0);a._addClass(s,"ui-menu-icon","ui-icon "+r),i.attr("aria-haspopup","true").prepend(s),e.attr("aria-labelledby",i.attr("id"))}),this._addClass(s,"ui-menu","ui-widget ui-widget-content ui-front"),e=l.add(this.element),i=e.find(this.options.items),i.not(".ui-menu-item").each(function(){var e=t(this);a._isDivider(e)&&a._addClass(e,"ui-menu-divider","ui-widget-content")}),n=i.not(".ui-menu-item, .ui-menu-divider"),o=n.children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),this._addClass(n,"ui-menu-item")._addClass(o,"ui-menu-item-wrapper"),i.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!t.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){if("icons"===t){var i=this.element.find(".ui-menu-icon");this._removeClass(i,null,this.options.icons.submenu)._addClass(i,null,e.submenu)}this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t+""),this._toggleClass(null,"ui-state-disabled",!!t)},focus:function(t,e){var i,s,n;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),s=this.active.children(".ui-menu-item-wrapper"),this._addClass(s,null,"ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),n=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),this._addClass(n,null,"ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=e.children(".ui-menu"),i.length&&t&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(e){var i,s,n,o,a,r;this._hasScroll()&&(i=parseFloat(t.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(t.css(this.activeMenu[0],"paddingTop"))||0,n=e.offset().top-this.activeMenu.offset().top-i-s,o=this.activeMenu.scrollTop(),a=this.activeMenu.height(),r=e.outerHeight(),0>n?this.activeMenu.scrollTop(o+n):n+r>a&&this.activeMenu.scrollTop(o+n-a+r))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active"),this._trigger("blur",t,{item:this.active}),this.active=null)},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(e){var i=t.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:t(e&&e.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(e),this._removeClass(s.find(".ui-state-active"),null,"ui-state-active"),this.activeMenu=s},this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")},_closeOnDocumentClick:function(e){return!t(e.target).closest(".ui-menu").length},_isDivider:function(t){return!/[^\-\u2014\u2013\s]/.test(t.text())},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,i){var s;this.active&&(s="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.find(this.options.items)[e]()),this.focus(i,s)},nextPage:function(e){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=t(this),0>i.offset().top-s-n}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())),void 0):(this.next(e),void 0)},previousPage:function(e){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=t(this),i.offset().top-s+n>0}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items).first())),void 0):(this.next(e),void 0)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){this.active=this.active||t(e.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(e,!0),this._trigger("select",e,i)},_filterMenuItems:function(e){var i=e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),s=RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))})}}),t.widget("ui.autocomplete",{version:"1.12.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var e,i,s,n=this.element[0].nodeName.toLowerCase(),o="textarea"===n,a="input"===n;this.isMultiLine=o||!a&&this._isContentEditable(this.element),this.valueMethod=this.element[o||a?"val":"text"],this.isNewMenu=!0,this._addClass("ui-autocomplete-input"),this.element.attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return e=!0,s=!0,i=!0,void 0;e=!1,s=!1,i=!1;var o=t.ui.keyCode;switch(n.keyCode){case o.PAGE_UP:e=!0,this._move("previousPage",n);break;case o.PAGE_DOWN:e=!0,this._move("nextPage",n);break;case o.UP:e=!0,this._keyEvent("previous",n);break;case o.DOWN:e=!0,this._keyEvent("next",n);break;case o.ENTER:this.menu.active&&(e=!0,n.preventDefault(),this.menu.select(n));break;case o.TAB:this.menu.active&&this.menu.select(n);break;case o.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(e)return e=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),void 0;if(!i){var n=t.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(t){return s?(s=!1,t.preventDefault(),void 0):(this._searchTimeout(t),void 0)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,void 0):(clearTimeout(this.searching),this.close(t),this._change(t),void 0)}}),this._initSource(),this.menu=t("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._addClass(this.menu.element,"ui-autocomplete","ui-front"),this._on(this.menu.element,{mousedown:function(e){e.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,this.element[0]!==t.ui.safeActiveElement(this.document[0])&&this.element.trigger("focus")})},menufocus:function(e,i){var s,n;return this.isNewMenu&&(this.isNewMenu=!1,e.originalEvent&&/^mouse/.test(e.originalEvent.type))?(this.menu.blur(),this.document.one("mousemove",function(){t(e.target).trigger(e.originalEvent)}),void 0):(n=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",e,{item:n})&&e.originalEvent&&/^key/.test(e.originalEvent.type)&&this._value(n.value),s=i.item.attr("aria-label")||n.value,s&&t.trim(s).length&&(this.liveRegion.children().hide(),t("<div>").text(s).appendTo(this.liveRegion)),void 0)},menuselect:function(e,i){var s=i.item.data("ui-autocomplete-item"),n=this.previous;this.element[0]!==t.ui.safeActiveElement(this.document[0])&&(this.element.trigger("focus"),this.previous=n,this._delay(function(){this.previous=n,this.selectedItem=s})),!1!==this._trigger("select",e,{item:s})&&this._value(s.value),this.term=this._value(),this.close(e),this.selectedItem=s}}),this.liveRegion=t("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(t,e){this._super(t,e),"source"===t&&this._initSource(),"appendTo"===t&&this.menu.element.appendTo(this._appendTo()),"disabled"===t&&e&&this.xhr&&this.xhr.abort()},_isEventTargetInWidget:function(e){var i=this.menu.element[0];return e.target===this.element[0]||e.target===i||t.contains(i,e.target)},_closeOnClickOutside:function(t){this._isEventTargetInWidget(t)||this.close()},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front, dialog")),e.length||(e=this.document[0].body),e},_initSource:function(){var e,i,s=this;t.isArray(this.options.source)?(e=this.options.source,this.source=function(i,s){s(t.ui.autocomplete.filter(e,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(e,n){s.xhr&&s.xhr.abort(),s.xhr=t.ajax({url:i,data:e,dataType:"json",success:function(t){n(t)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(t){clearTimeout(this.searching),this.searching=this._delay(function(){var e=this.term===this._value(),i=this.menu.element.is(":visible"),s=t.altKey||t.ctrlKey||t.metaKey||t.shiftKey;(!e||e&&!i&&!s)&&(this.selectedItem=null,this.search(null,t))},this.options.delay)},search:function(t,e){return t=null!=t?t:this._value(),this.term=this._value(),t.length<this.options.minLength?this.close(e):this._trigger("search",e)!==!1?this._search(t):void 0},_search:function(t){this.pending++,this._addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:t},this._response())
},_response:function(){var e=++this.requestIndex;return t.proxy(function(t){e===this.requestIndex&&this.__response(t),this.pending--,this.pending||this._removeClass("ui-autocomplete-loading")},this)},__response:function(t){t&&(t=this._normalize(t)),this._trigger("response",null,{content:t}),!this.options.disabled&&t&&t.length&&!this.cancelSearch?(this._suggest(t),this._trigger("open")):this._close()},close:function(t){this.cancelSearch=!0,this._close(t)},_close:function(t){this._off(this.document,"mousedown"),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",t))},_change:function(t){this.previous!==this._value()&&this._trigger("change",t,{item:this.selectedItem})},_normalize:function(e){return e.length&&e[0].label&&e[0].value?e:t.map(e,function(e){return"string"==typeof e?{label:e,value:e}:t.extend({},e,{label:e.label||e.value,value:e.value||e.label})})},_suggest:function(e){var i=this.menu.element.empty();this._renderMenu(i,e),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(t.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(),this._on(this.document,{mousedown:"_closeOnClickOutside"})},_resizeMenu:function(){var t=this.menu.element;t.outerWidth(Math.max(t.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(e,i){var s=this;t.each(i,function(t,i){s._renderItemData(e,i)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-autocomplete-item",e)},_renderItem:function(e,i){return t("<li>").append(t("<div>").text(i.label)).appendTo(e)},_move:function(t,e){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(t)||this.menu.isLastItem()&&/^next/.test(t)?(this.isMultiLine||this._value(this.term),this.menu.blur(),void 0):(this.menu[t](e),void 0):(this.search(null,e),void 0)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(t,e){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(t,e),e.preventDefault())},_isContentEditable:function(t){if(!t.length)return!1;var e=t.prop("contentEditable");return"inherit"===e?this._isContentEditable(t.parent()):"true"===e}}),t.extend(t.ui.autocomplete,{escapeRegex:function(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(e,i){var s=RegExp(t.ui.autocomplete.escapeRegex(i),"i");return t.grep(e,function(t){return s.test(t.label||t.value||t)})}}),t.widget("ui.autocomplete",t.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(t){return t+(t>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=e&&e.length?this.options.messages.results(e.length):this.options.messages.noResults,this.liveRegion.children().hide(),t("<div>").text(i).appendTo(this.liveRegion))}}),t.ui.autocomplete,t.extend(t.ui,{datepicker:{version:"1.12.1"}});var l;t.extend(i.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(t){return o(this._defaults,t||{}),this},_attachDatepicker:function(e,i){var s,n,o;s=e.nodeName.toLowerCase(),n="div"===s||"span"===s,e.id||(this.uuid+=1,e.id="dp"+this.uuid),o=this._newInst(t(e),n),o.settings=t.extend({},i||{}),"input"===s?this._connectDatepicker(e,o):n&&this._inlineDatepicker(e,o)},_newInst:function(e,i){var n=e[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:n,input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?s(t("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(e,i){var s=t(e);i.append=t([]),i.trigger=t([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).on("keydown",this._doKeyDown).on("keypress",this._doKeyPress).on("keyup",this._doKeyUp),this._autoSize(i),t.data(e,"datepicker",i),i.settings.disabled&&this._disableDatepicker(e))},_attachments:function(e,i){var s,n,o,a=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),a&&(i.append=t("<span class='"+this._appendClass+"'>"+a+"</span>"),e[r?"before":"after"](i.append)),e.off("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&e.on("focus",this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),o=this._get(i,"buttonImage"),i.trigger=t(this._get(i,"buttonImageOnly")?t("<img/>").addClass(this._triggerClass).attr({src:o,alt:n,title:n}):t("<button type='button'></button>").addClass(this._triggerClass).html(o?t("<img/>").attr({src:o,alt:n,title:n}):n)),e[r?"before":"after"](i.trigger),i.trigger.on("click",function(){return t.datepicker._datepickerShowing&&t.datepicker._lastInput===e[0]?t.datepicker._hideDatepicker():t.datepicker._datepickerShowing&&t.datepicker._lastInput!==e[0]?(t.datepicker._hideDatepicker(),t.datepicker._showDatepicker(e[0])):t.datepicker._showDatepicker(e[0]),!1}))},_autoSize:function(t){if(this._get(t,"autoSize")&&!t.inline){var e,i,s,n,o=new Date(2009,11,20),a=this._get(t,"dateFormat");a.match(/[DM]/)&&(e=function(t){for(i=0,s=0,n=0;t.length>n;n++)t[n].length>i&&(i=t[n].length,s=n);return s},o.setMonth(e(this._get(t,a.match(/MM/)?"monthNames":"monthNamesShort"))),o.setDate(e(this._get(t,a.match(/DD/)?"dayNames":"dayNamesShort"))+20-o.getDay())),t.input.attr("size",this._formatDate(t,o).length)}},_inlineDatepicker:function(e,i){var s=t(e);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),t.data(e,"datepicker",i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(e),i.dpDiv.css("display","block"))},_dialogDatepicker:function(e,i,s,n,a){var r,l,h,c,u,d=this._dialogInst;return d||(this.uuid+=1,r="dp"+this.uuid,this._dialogInput=t("<input type='text' id='"+r+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.on("keydown",this._doKeyDown),t("body").append(this._dialogInput),d=this._dialogInst=this._newInst(this._dialogInput,!1),d.settings={},t.data(this._dialogInput[0],"datepicker",d)),o(d.settings,n||{}),i=i&&i.constructor===Date?this._formatDate(d,i):i,this._dialogInput.val(i),this._pos=a?a.length?a:[a.pageX,a.pageY]:null,this._pos||(l=document.documentElement.clientWidth,h=document.documentElement.clientHeight,c=document.documentElement.scrollLeft||document.body.scrollLeft,u=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[l/2-100+c,h/2-150+u]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),d.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),t.blockUI&&t.blockUI(this.dpDiv),t.data(this._dialogInput[0],"datepicker",d),this},_destroyDatepicker:function(e){var i,s=t(e),n=t.data(e,"datepicker");s.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),t.removeData(e,"datepicker"),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).off("focus",this._showDatepicker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty(),l===n&&(l=null))},_enableDatepicker:function(e){var i,s,n=t(e),o=t.data(e,"datepicker");n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!1,o.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}))},_disableDatepicker:function(e){var i,s,n=t(e),o=t.data(e,"datepicker");n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!0,o.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}),this._disabledInputs[this._disabledInputs.length]=e)},_isDisabledDatepicker:function(t){if(!t)return!1;for(var e=0;this._disabledInputs.length>e;e++)if(this._disabledInputs[e]===t)return!0;return!1},_getInst:function(e){try{return t.data(e,"datepicker")}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(e,i,s){var n,a,r,l,h=this._getInst(e);return 2===arguments.length&&"string"==typeof i?"defaults"===i?t.extend({},t.datepicker._defaults):h?"all"===i?t.extend({},h.settings):this._get(h,i):null:(n=i||{},"string"==typeof i&&(n={},n[i]=s),h&&(this._curInst===h&&this._hideDatepicker(),a=this._getDateDatepicker(e,!0),r=this._getMinMaxDate(h,"min"),l=this._getMinMaxDate(h,"max"),o(h.settings,n),null!==r&&void 0!==n.dateFormat&&void 0===n.minDate&&(h.settings.minDate=this._formatDate(h,r)),null!==l&&void 0!==n.dateFormat&&void 0===n.maxDate&&(h.settings.maxDate=this._formatDate(h,l)),"disabled"in n&&(n.disabled?this._disableDatepicker(e):this._enableDatepicker(e)),this._attachments(t(e),h),this._autoSize(h),this._setDate(h,a),this._updateAlternate(h),this._updateDatepicker(h)),void 0)},_changeDatepicker:function(t,e,i){this._optionDatepicker(t,e,i)},_refreshDatepicker:function(t){var e=this._getInst(t);e&&this._updateDatepicker(e)},_setDateDatepicker:function(t,e){var i=this._getInst(t);i&&(this._setDate(i,e),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(t,e){var i=this._getInst(t);return i&&!i.inline&&this._setDateFromField(i,e),i?this._getDate(i):null},_doKeyDown:function(e){var i,s,n,o=t.datepicker._getInst(e.target),a=!0,r=o.dpDiv.is(".ui-datepicker-rtl");if(o._keyEvent=!0,t.datepicker._datepickerShowing)switch(e.keyCode){case 9:t.datepicker._hideDatepicker(),a=!1;break;case 13:return n=t("td."+t.datepicker._dayOverClass+":not(."+t.datepicker._currentClass+")",o.dpDiv),n[0]&&t.datepicker._selectDay(e.target,o.selectedMonth,o.selectedYear,n[0]),i=t.datepicker._get(o,"onSelect"),i?(s=t.datepicker._formatDate(o),i.apply(o.input?o.input[0]:null,[s,o])):t.datepicker._hideDatepicker(),!1;case 27:t.datepicker._hideDatepicker();break;case 33:t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 34:t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");break;case 35:(e.ctrlKey||e.metaKey)&&t.datepicker._clearDate(e.target),a=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&t.datepicker._gotoToday(e.target),a=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?1:-1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,-7,"D"),a=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?-1:1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,7,"D"),a=e.ctrlKey||e.metaKey;break;default:a=!1}else 36===e.keyCode&&e.ctrlKey?t.datepicker._showDatepicker(this):a=!1;a&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(e){var i,s,n=t.datepicker._getInst(e.target);return t.datepicker._get(n,"constrainInput")?(i=t.datepicker._possibleChars(t.datepicker._get(n,"dateFormat")),s=String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),e.ctrlKey||e.metaKey||" ">s||!i||i.indexOf(s)>-1):void 0},_doKeyUp:function(e){var i,s=t.datepicker._getInst(e.target);if(s.input.val()!==s.lastVal)try{i=t.datepicker.parseDate(t.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,t.datepicker._getFormatConfig(s)),i&&(t.datepicker._setDateFromField(s),t.datepicker._updateAlternate(s),t.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(i){if(i=i.target||i,"input"!==i.nodeName.toLowerCase()&&(i=t("input",i.parentNode)[0]),!t.datepicker._isDisabledDatepicker(i)&&t.datepicker._lastInput!==i){var s,n,a,r,l,h,c;s=t.datepicker._getInst(i),t.datepicker._curInst&&t.datepicker._curInst!==s&&(t.datepicker._curInst.dpDiv.stop(!0,!0),s&&t.datepicker._datepickerShowing&&t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),n=t.datepicker._get(s,"beforeShow"),a=n?n.apply(i,[i,s]):{},a!==!1&&(o(s.settings,a),s.lastVal=null,t.datepicker._lastInput=i,t.datepicker._setDateFromField(s),t.datepicker._inDialog&&(i.value=""),t.datepicker._pos||(t.datepicker._pos=t.datepicker._findPos(i),t.datepicker._pos[1]+=i.offsetHeight),r=!1,t(i).parents().each(function(){return r|="fixed"===t(this).css("position"),!r}),l={left:t.datepicker._pos[0],top:t.datepicker._pos[1]},t.datepicker._pos=null,s.dpDiv.empty(),s.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),t.datepicker._updateDatepicker(s),l=t.datepicker._checkOffset(s,l,r),s.dpDiv.css({position:t.datepicker._inDialog&&t.blockUI?"static":r?"fixed":"absolute",display:"none",left:l.left+"px",top:l.top+"px"}),s.inline||(h=t.datepicker._get(s,"showAnim"),c=t.datepicker._get(s,"duration"),s.dpDiv.css("z-index",e(t(i))+1),t.datepicker._datepickerShowing=!0,t.effects&&t.effects.effect[h]?s.dpDiv.show(h,t.datepicker._get(s,"showOptions"),c):s.dpDiv[h||"show"](h?c:null),t.datepicker._shouldFocusInput(s)&&s.input.trigger("focus"),t.datepicker._curInst=s))}},_updateDatepicker:function(e){this.maxRows=4,l=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e);var i,s=this._getNumberOfMonths(e),o=s[1],a=17,r=e.dpDiv.find("."+this._dayOverClass+" a");r.length>0&&n.apply(r.get(0)),e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),o>1&&e.dpDiv.addClass("ui-datepicker-multi-"+o).css("width",a*o+"em"),e.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e===t.datepicker._curInst&&t.datepicker._datepickerShowing&&t.datepicker._shouldFocusInput(e)&&e.input.trigger("focus"),e.yearshtml&&(i=e.yearshtml,setTimeout(function(){i===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),i=e.yearshtml=null},0))},_shouldFocusInput:function(t){return t.input&&t.input.is(":visible")&&!t.input.is(":disabled")&&!t.input.is(":focus")},_checkOffset:function(e,i,s){var n=e.dpDiv.outerWidth(),o=e.dpDiv.outerHeight(),a=e.input?e.input.outerWidth():0,r=e.input?e.input.outerHeight():0,l=document.documentElement.clientWidth+(s?0:t(document).scrollLeft()),h=document.documentElement.clientHeight+(s?0:t(document).scrollTop());return i.left-=this._get(e,"isRTL")?n-a:0,i.left-=s&&i.left===e.input.offset().left?t(document).scrollLeft():0,i.top-=s&&i.top===e.input.offset().top+r?t(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>l&&l>n?Math.abs(i.left+n-l):0),i.top-=Math.min(i.top,i.top+o>h&&h>o?Math.abs(o+r):0),i},_findPos:function(e){for(var i,s=this._getInst(e),n=this._get(s,"isRTL");e&&("hidden"===e.type||1!==e.nodeType||t.expr.filters.hidden(e));)e=e[n?"previousSibling":"nextSibling"];return i=t(e).offset(),[i.left,i.top]},_hideDatepicker:function(e){var i,s,n,o,a=this._curInst;!a||e&&a!==t.data(e,"datepicker")||this._datepickerShowing&&(i=this._get(a,"showAnim"),s=this._get(a,"duration"),n=function(){t.datepicker._tidyDialog(a)},t.effects&&(t.effects.effect[i]||t.effects[i])?a.dpDiv.hide(i,t.datepicker._get(a,"showOptions"),s,n):a.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,o=this._get(a,"onClose"),o&&o.apply(a.input?a.input[0]:null,[a.input?a.input.val():"",a]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),t.blockUI&&(t.unblockUI(),t("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(t){t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")},_checkExternalClick:function(e){if(t.datepicker._curInst){var i=t(e.target),s=t.datepicker._getInst(i[0]);(i[0].id!==t.datepicker._mainDivId&&0===i.parents("#"+t.datepicker._mainDivId).length&&!i.hasClass(t.datepicker.markerClassName)&&!i.closest("."+t.datepicker._triggerClass).length&&t.datepicker._datepickerShowing&&(!t.datepicker._inDialog||!t.blockUI)||i.hasClass(t.datepicker.markerClassName)&&t.datepicker._curInst!==s)&&t.datepicker._hideDatepicker()}},_adjustDate:function(e,i,s){var n=t(e),o=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(o,i+("M"===s?this._get(o,"showCurrentAtPos"):0),s),this._updateDatepicker(o))},_gotoToday:function(e){var i,s=t(e),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(e,i,s){var n=t(e),o=this._getInst(n[0]);o["selected"+("M"===s?"Month":"Year")]=o["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(o),this._adjustDate(n)},_selectDay:function(e,i,s,n){var o,a=t(e);t(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(a[0])||(o=this._getInst(a[0]),o.selectedDay=o.currentDay=t("a",n).html(),o.selectedMonth=o.currentMonth=i,o.selectedYear=o.currentYear=s,this._selectDate(e,this._formatDate(o,o.currentDay,o.currentMonth,o.currentYear)))},_clearDate:function(e){var i=t(e);this._selectDate(i,"")},_selectDate:function(e,i){var s,n=t(e),o=this._getInst(n[0]);i=null!=i?i:this._formatDate(o),o.input&&o.input.val(i),this._updateAlternate(o),s=this._get(o,"onSelect"),s?s.apply(o.input?o.input[0]:null,[i,o]):o.input&&o.input.trigger("change"),o.inline?this._updateDatepicker(o):(this._hideDatepicker(),this._lastInput=o.input[0],"object"!=typeof o.input[0]&&o.input.trigger("focus"),this._lastInput=null)},_updateAlternate:function(e){var i,s,n,o=this._get(e,"altField");o&&(i=this._get(e,"altFormat")||this._get(e,"dateFormat"),s=this._getDate(e),n=this.formatDate(i,s,this._getFormatConfig(e)),t(o).val(n))},noWeekends:function(t){var e=t.getDay();return[e>0&&6>e,""]},iso8601Week:function(t){var e,i=new Date(t.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),e=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((e-i)/864e5)/7)+1},parseDate:function(e,i,s){if(null==e||null==i)throw"Invalid arguments";if(i="object"==typeof i?""+i:i+"",""===i)return null;var n,o,a,r,l=0,h=(s?s.shortYearCutoff:null)||this._defaults.shortYearCutoff,c="string"!=typeof h?h:(new Date).getFullYear()%100+parseInt(h,10),u=(s?s.dayNamesShort:null)||this._defaults.dayNamesShort,d=(s?s.dayNames:null)||this._defaults.dayNames,p=(s?s.monthNamesShort:null)||this._defaults.monthNamesShort,f=(s?s.monthNames:null)||this._defaults.monthNames,g=-1,m=-1,_=-1,v=-1,b=!1,y=function(t){var i=e.length>n+1&&e.charAt(n+1)===t;return i&&n++,i},w=function(t){var e=y(t),s="@"===t?14:"!"===t?20:"y"===t&&e?4:"o"===t?3:2,n="y"===t?s:1,o=RegExp("^\\d{"+n+","+s+"}"),a=i.substring(l).match(o);if(!a)throw"Missing number at position "+l;return l+=a[0].length,parseInt(a[0],10)},k=function(e,s,n){var o=-1,a=t.map(y(e)?n:s,function(t,e){return[[e,t]]}).sort(function(t,e){return-(t[1].length-e[1].length)});if(t.each(a,function(t,e){var s=e[1];return i.substr(l,s.length).toLowerCase()===s.toLowerCase()?(o=e[0],l+=s.length,!1):void 0}),-1!==o)return o+1;throw"Unknown name at position "+l},x=function(){if(i.charAt(l)!==e.charAt(n))throw"Unexpected literal at position "+l;l++};for(n=0;e.length>n;n++)if(b)"'"!==e.charAt(n)||y("'")?x():b=!1;else switch(e.charAt(n)){case"d":_=w("d");break;case"D":k("D",u,d);break;case"o":v=w("o");break;case"m":m=w("m");break;case"M":m=k("M",p,f);break;case"y":g=w("y");break;case"@":r=new Date(w("@")),g=r.getFullYear(),m=r.getMonth()+1,_=r.getDate();break;case"!":r=new Date((w("!")-this._ticksTo1970)/1e4),g=r.getFullYear(),m=r.getMonth()+1,_=r.getDate();break;case"'":y("'")?x():b=!0;break;default:x()}if(i.length>l&&(a=i.substr(l),!/^\s+/.test(a)))throw"Extra/unparsed characters found in date: "+a;if(-1===g?g=(new Date).getFullYear():100>g&&(g+=(new Date).getFullYear()-(new Date).getFullYear()%100+(c>=g?0:-100)),v>-1)for(m=1,_=v;;){if(o=this._getDaysInMonth(g,m-1),o>=_)break;m++,_-=o}if(r=this._daylightSavingAdjust(new Date(g,m-1,_)),r.getFullYear()!==g||r.getMonth()+1!==m||r.getDate()!==_)throw"Invalid date";return r},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(t,e,i){if(!e)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,o=(i?i.dayNames:null)||this._defaults.dayNames,a=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,l=function(e){var i=t.length>s+1&&t.charAt(s+1)===e;return i&&s++,i},h=function(t,e,i){var s=""+e;if(l(t))for(;i>s.length;)s="0"+s;return s},c=function(t,e,i,s){return l(t)?s[e]:i[e]},u="",d=!1;if(e)for(s=0;t.length>s;s++)if(d)"'"!==t.charAt(s)||l("'")?u+=t.charAt(s):d=!1;else switch(t.charAt(s)){case"d":u+=h("d",e.getDate(),2);break;case"D":u+=c("D",e.getDay(),n,o);break;case"o":u+=h("o",Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5),3);break;case"m":u+=h("m",e.getMonth()+1,2);break;case"M":u+=c("M",e.getMonth(),a,r);break;case"y":u+=l("y")?e.getFullYear():(10>e.getFullYear()%100?"0":"")+e.getFullYear()%100;break;case"@":u+=e.getTime();break;case"!":u+=1e4*e.getTime()+this._ticksTo1970;break;case"'":l("'")?u+="'":d=!0;break;default:u+=t.charAt(s)}return u},_possibleChars:function(t){var e,i="",s=!1,n=function(i){var s=t.length>e+1&&t.charAt(e+1)===i;return s&&e++,s};for(e=0;t.length>e;e++)if(s)"'"!==t.charAt(e)||n("'")?i+=t.charAt(e):s=!1;else switch(t.charAt(e)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=t.charAt(e)}return i},_get:function(t,e){return void 0!==t.settings[e]?t.settings[e]:this._defaults[e]},_setDateFromField:function(t,e){if(t.input.val()!==t.lastVal){var i=this._get(t,"dateFormat"),s=t.lastVal=t.input?t.input.val():null,n=this._getDefaultDate(t),o=n,a=this._getFormatConfig(t);try{o=this.parseDate(i,s,a)||n}catch(r){s=e?"":s}t.selectedDay=o.getDate(),t.drawMonth=t.selectedMonth=o.getMonth(),t.drawYear=t.selectedYear=o.getFullYear(),t.currentDay=s?o.getDate():0,t.currentMonth=s?o.getMonth():0,t.currentYear=s?o.getFullYear():0,this._adjustInstDate(t)}},_getDefaultDate:function(t){return this._restrictMinMax(t,this._determineDate(t,this._get(t,"defaultDate"),new Date))},_determineDate:function(e,i,s){var n=function(t){var e=new Date;return e.setDate(e.getDate()+t),e},o=function(i){try{return t.datepicker.parseDate(t.datepicker._get(e,"dateFormat"),i,t.datepicker._getFormatConfig(e))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?t.datepicker._getDate(e):null)||new Date,o=n.getFullYear(),a=n.getMonth(),r=n.getDate(),l=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,h=l.exec(i);h;){switch(h[2]||"d"){case"d":case"D":r+=parseInt(h[1],10);break;case"w":case"W":r+=7*parseInt(h[1],10);break;case"m":case"M":a+=parseInt(h[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(o,a));break;case"y":case"Y":o+=parseInt(h[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(o,a))}h=l.exec(i)}return new Date(o,a,r)},a=null==i||""===i?s:"string"==typeof i?o(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return a=a&&"Invalid Date"==""+a?s:a,a&&(a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)),this._daylightSavingAdjust(a)},_daylightSavingAdjust:function(t){return t?(t.setHours(t.getHours()>12?t.getHours()+2:0),t):null},_setDate:function(t,e,i){var s=!e,n=t.selectedMonth,o=t.selectedYear,a=this._restrictMinMax(t,this._determineDate(t,e,new Date));t.selectedDay=t.currentDay=a.getDate(),t.drawMonth=t.selectedMonth=t.currentMonth=a.getMonth(),t.drawYear=t.selectedYear=t.currentYear=a.getFullYear(),n===t.selectedMonth&&o===t.selectedYear||i||this._notifyChange(t),this._adjustInstDate(t),t.input&&t.input.val(s?"":this._formatDate(t))},_getDate:function(t){var e=!t.currentYear||t.input&&""===t.input.val()?null:this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return e},_attachHandlers:function(e){var i=this._get(e,"stepMonths"),s="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){t.datepicker._adjustDate(s,-i,"M")},next:function(){t.datepicker._adjustDate(s,+i,"M")},hide:function(){t.datepicker._hideDatepicker()},today:function(){t.datepicker._gotoToday(s)},selectDay:function(){return t.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return t.datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return t.datepicker._selectMonthYear(s,this,"Y"),!1}};t(this).on(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},_generateHTML:function(t){var e,i,s,n,o,a,r,l,h,c,u,d,p,f,g,m,_,v,b,y,w,k,x,C,D,T,I,M,P,S,N,H,A,z,O,E,W,F,L,R=new Date,Y=this._daylightSavingAdjust(new Date(R.getFullYear(),R.getMonth(),R.getDate())),B=this._get(t,"isRTL"),j=this._get(t,"showButtonPanel"),q=this._get(t,"hideIfNoPrevNext"),K=this._get(t,"navigationAsDateFormat"),U=this._getNumberOfMonths(t),V=this._get(t,"showCurrentAtPos"),X=this._get(t,"stepMonths"),$=1!==U[0]||1!==U[1],G=this._daylightSavingAdjust(t.currentDay?new Date(t.currentYear,t.currentMonth,t.currentDay):new Date(9999,9,9)),J=this._getMinMaxDate(t,"min"),Q=this._getMinMaxDate(t,"max"),Z=t.drawMonth-V,te=t.drawYear;if(0>Z&&(Z+=12,te--),Q)for(e=this._daylightSavingAdjust(new Date(Q.getFullYear(),Q.getMonth()-U[0]*U[1]+1,Q.getDate())),e=J&&J>e?J:e;this._daylightSavingAdjust(new Date(te,Z,1))>e;)Z--,0>Z&&(Z=11,te--);for(t.drawMonth=Z,t.drawYear=te,i=this._get(t,"prevText"),i=K?this.formatDate(i,this._daylightSavingAdjust(new Date(te,Z-X,1)),this._getFormatConfig(t)):i,s=this._canAdjustMonth(t,-1,te,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(B?"e":"w")+"'>"+i+"</span></a>":q?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(B?"e":"w")+"'>"+i+"</span></a>",n=this._get(t,"nextText"),n=K?this.formatDate(n,this._daylightSavingAdjust(new Date(te,Z+X,1)),this._getFormatConfig(t)):n,o=this._canAdjustMonth(t,1,te,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(B?"w":"e")+"'>"+n+"</span></a>":q?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(B?"w":"e")+"'>"+n+"</span></a>",a=this._get(t,"currentText"),r=this._get(t,"gotoCurrent")&&t.currentDay?G:Y,a=K?this.formatDate(a,r,this._getFormatConfig(t)):a,l=t.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(t,"closeText")+"</button>",h=j?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(B?l:"")+(this._isInRange(t,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+a+"</button>":"")+(B?"":l)+"</div>":"",c=parseInt(this._get(t,"firstDay"),10),c=isNaN(c)?0:c,u=this._get(t,"showWeek"),d=this._get(t,"dayNames"),p=this._get(t,"dayNamesMin"),f=this._get(t,"monthNames"),g=this._get(t,"monthNamesShort"),m=this._get(t,"beforeShowDay"),_=this._get(t,"showOtherMonths"),v=this._get(t,"selectOtherMonths"),b=this._getDefaultDate(t),y="",k=0;U[0]>k;k++){for(x="",this.maxRows=4,C=0;U[1]>C;C++){if(D=this._daylightSavingAdjust(new Date(te,Z,t.selectedDay)),T=" ui-corner-all",I="",$){if(I+="<div class='ui-datepicker-group",U[1]>1)switch(C){case 0:I+=" ui-datepicker-group-first",T=" ui-corner-"+(B?"right":"left");break;case U[1]-1:I+=" ui-datepicker-group-last",T=" ui-corner-"+(B?"left":"right");break;default:I+=" ui-datepicker-group-middle",T=""}I+="'>"}for(I+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+T+"'>"+(/all|left/.test(T)&&0===k?B?o:s:"")+(/all|right/.test(T)&&0===k?B?s:o:"")+this._generateMonthYearHeader(t,Z,te,J,Q,k>0||C>0,f,g)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",M=u?"<th class='ui-datepicker-week-col'>"+this._get(t,"weekHeader")+"</th>":"",w=0;7>w;w++)P=(w+c)%7,M+="<th scope='col'"+((w+c+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+d[P]+"'>"+p[P]+"</span></th>";for(I+=M+"</tr></thead><tbody>",S=this._getDaysInMonth(te,Z),te===t.selectedYear&&Z===t.selectedMonth&&(t.selectedDay=Math.min(t.selectedDay,S)),N=(this._getFirstDayOfMonth(te,Z)-c+7)%7,H=Math.ceil((N+S)/7),A=$?this.maxRows>H?this.maxRows:H:H,this.maxRows=A,z=this._daylightSavingAdjust(new Date(te,Z,1-N)),O=0;A>O;O++){for(I+="<tr>",E=u?"<td class='ui-datepicker-week-col'>"+this._get(t,"calculateWeek")(z)+"</td>":"",w=0;7>w;w++)W=m?m.apply(t.input?t.input[0]:null,[z]):[!0,""],F=z.getMonth()!==Z,L=F&&!v||!W[0]||J&&J>z||Q&&z>Q,E+="<td class='"+((w+c+6)%7>=5?" ui-datepicker-week-end":"")+(F?" ui-datepicker-other-month":"")+(z.getTime()===D.getTime()&&Z===t.selectedMonth&&t._keyEvent||b.getTime()===z.getTime()&&b.getTime()===D.getTime()?" "+this._dayOverClass:"")+(L?" "+this._unselectableClass+" ui-state-disabled":"")+(F&&!_?"":" "+W[1]+(z.getTime()===G.getTime()?" "+this._currentClass:"")+(z.getTime()===Y.getTime()?" ui-datepicker-today":""))+"'"+(F&&!_||!W[2]?"":" title='"+W[2].replace(/'/g,"&#39;")+"'")+(L?"":" data-handler='selectDay' data-event='click' data-month='"+z.getMonth()+"' data-year='"+z.getFullYear()+"'")+">"+(F&&!_?"&#xa0;":L?"<span class='ui-state-default'>"+z.getDate()+"</span>":"<a class='ui-state-default"+(z.getTime()===Y.getTime()?" ui-state-highlight":"")+(z.getTime()===G.getTime()?" ui-state-active":"")+(F?" ui-priority-secondary":"")+"' href='#'>"+z.getDate()+"</a>")+"</td>",z.setDate(z.getDate()+1),z=this._daylightSavingAdjust(z);I+=E+"</tr>"}Z++,Z>11&&(Z=0,te++),I+="</tbody></table>"+($?"</div>"+(U[0]>0&&C===U[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),x+=I}y+=x}return y+=h,t._keyEvent=!1,y},_generateMonthYearHeader:function(t,e,i,s,n,o,a,r){var l,h,c,u,d,p,f,g,m=this._get(t,"changeMonth"),_=this._get(t,"changeYear"),v=this._get(t,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",y="";if(o||!m)y+="<span class='ui-datepicker-month'>"+a[e]+"</span>";else{for(l=s&&s.getFullYear()===i,h=n&&n.getFullYear()===i,y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",c=0;12>c;c++)(!l||c>=s.getMonth())&&(!h||n.getMonth()>=c)&&(y+="<option value='"+c+"'"+(c===e?" selected='selected'":"")+">"+r[c]+"</option>");
y+="</select>"}if(v||(b+=y+(!o&&m&&_?"":"&#xa0;")),!t.yearshtml)if(t.yearshtml="",o||!_)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(u=this._get(t,"yearRange").split(":"),d=(new Date).getFullYear(),p=function(t){var e=t.match(/c[+\-].*/)?i+parseInt(t.substring(1),10):t.match(/[+\-].*/)?d+parseInt(t,10):parseInt(t,10);return isNaN(e)?d:e},f=p(u[0]),g=Math.max(f,p(u[1]||"")),f=s?Math.max(f,s.getFullYear()):f,g=n?Math.min(g,n.getFullYear()):g,t.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";g>=f;f++)t.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";t.yearshtml+="</select>",b+=t.yearshtml,t.yearshtml=null}return b+=this._get(t,"yearSuffix"),v&&(b+=(!o&&m&&_?"":"&#xa0;")+y),b+="</div>"},_adjustInstDate:function(t,e,i){var s=t.selectedYear+("Y"===i?e:0),n=t.selectedMonth+("M"===i?e:0),o=Math.min(t.selectedDay,this._getDaysInMonth(s,n))+("D"===i?e:0),a=this._restrictMinMax(t,this._daylightSavingAdjust(new Date(s,n,o)));t.selectedDay=a.getDate(),t.drawMonth=t.selectedMonth=a.getMonth(),t.drawYear=t.selectedYear=a.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(t)},_restrictMinMax:function(t,e){var i=this._getMinMaxDate(t,"min"),s=this._getMinMaxDate(t,"max"),n=i&&i>e?i:e;return s&&n>s?s:n},_notifyChange:function(t){var e=this._get(t,"onChangeMonthYear");e&&e.apply(t.input?t.input[0]:null,[t.selectedYear,t.selectedMonth+1,t])},_getNumberOfMonths:function(t){var e=this._get(t,"numberOfMonths");return null==e?[1,1]:"number"==typeof e?[1,e]:e},_getMinMaxDate:function(t,e){return this._determineDate(t,this._get(t,e+"Date"),null)},_getDaysInMonth:function(t,e){return 32-this._daylightSavingAdjust(new Date(t,e,32)).getDate()},_getFirstDayOfMonth:function(t,e){return new Date(t,e,1).getDay()},_canAdjustMonth:function(t,e,i,s){var n=this._getNumberOfMonths(t),o=this._daylightSavingAdjust(new Date(i,s+(0>e?e:n[0]*n[1]),1));return 0>e&&o.setDate(this._getDaysInMonth(o.getFullYear(),o.getMonth())),this._isInRange(t,o)},_isInRange:function(t,e){var i,s,n=this._getMinMaxDate(t,"min"),o=this._getMinMaxDate(t,"max"),a=null,r=null,l=this._get(t,"yearRange");return l&&(i=l.split(":"),s=(new Date).getFullYear(),a=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(a+=s),i[1].match(/[+\-].*/)&&(r+=s)),(!n||e.getTime()>=n.getTime())&&(!o||e.getTime()<=o.getTime())&&(!a||e.getFullYear()>=a)&&(!r||r>=e.getFullYear())},_getFormatConfig:function(t){var e=this._get(t,"shortYearCutoff");return e="string"!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),{shortYearCutoff:e,dayNamesShort:this._get(t,"dayNamesShort"),dayNames:this._get(t,"dayNames"),monthNamesShort:this._get(t,"monthNamesShort"),monthNames:this._get(t,"monthNames")}},_formatDate:function(t,e,i,s){e||(t.currentDay=t.selectedDay,t.currentMonth=t.selectedMonth,t.currentYear=t.selectedYear);var n=e?"object"==typeof e?e:this._daylightSavingAdjust(new Date(s,i,e)):this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return this.formatDate(this._get(t,"dateFormat"),n,this._getFormatConfig(t))}}),t.fn.datepicker=function(e){if(!this.length)return this;t.datepicker.initialized||(t(document).on("mousedown",t.datepicker._checkExternalClick),t.datepicker.initialized=!0),0===t("#"+t.datepicker._mainDivId).length&&t("body").append(t.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof e||"isDisabled"!==e&&"getDate"!==e&&"widget"!==e?"option"===e&&2===arguments.length&&"string"==typeof arguments[1]?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof e?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this].concat(i)):t.datepicker._attachDatepicker(this,e)}):t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i))},t.datepicker=new i,t.datepicker.initialized=!1,t.datepicker.uuid=(new Date).getTime(),t.datepicker.version="1.12.1",t.datepicker,t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());var h=!1;t(document).on("mouseup",function(){h=!1}),t.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.on("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).on("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(e){if(!h){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(e),this._mouseDownEvent=e;var i=this,s=1===e.which,n="string"==typeof this.options.cancel&&e.target.nodeName?t(e.target).closest(this.options.cancel).length:!1;return s&&!n&&this._mouseCapture(e)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(e)!==!1,!this._mouseStarted)?(e.preventDefault(),!0):(!0===t.data(e.target,this.widgetName+".preventClickEvent")&&t.removeData(e.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return i._mouseMove(t)},this._mouseUpDelegate=function(t){return i._mouseUp(t)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),e.preventDefault(),h=!0,!0)):!0}},_mouseMove:function(e){if(this._mouseMoved){if(t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button)return this._mouseUp(e);if(!e.which)if(e.originalEvent.altKey||e.originalEvent.ctrlKey||e.originalEvent.metaKey||e.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(e)}return(e.which||e.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,h=!1,e.preventDefault()},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),t.widget("ui.slider",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"slide",options:{animate:!1,classes:{"ui-slider":"ui-corner-all","ui-slider-handle":"ui-corner-all","ui-slider-range":"ui-corner-all ui-widget-header"},distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this._addClass("ui-slider ui-slider-"+this.orientation,"ui-widget ui-widget-content"),this._refresh(),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,s=this.options,n=this.element.find(".ui-slider-handle"),o="<span tabindex='0'></span>",a=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),e=n.length;i>e;e++)a.push(o);this.handles=n.add(t(a.join("")).appendTo(this.element)),this._addClass(this.handles,"ui-slider-handle","ui-state-default"),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e).attr("tabIndex",0)})},_createRange:function(){var e=this.options;e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?(this._removeClass(this.range,"ui-slider-range-min ui-slider-range-max"),this.range.css({left:"",bottom:""})):(this.range=t("<div>").appendTo(this.element),this._addClass(this.range,"ui-slider-range")),("min"===e.range||"max"===e.range)&&this._addClass(this.range,"ui-slider-range-"+e.range)):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,o,a,r,l,h,c=this,u=this.options;return u.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(s-c.values(e));(n>i||n===i&&(e===c._lastChangedValue||c.values(e)===u.min))&&(n=i,o=t(this),a=e)}),r=this._start(e,a),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=a,this._addClass(o,null,"ui-state-active"),o.trigger("focus"),l=o.offset(),h=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=h?{left:0,top:0}:{left:e.pageX-l.left-o.width()/2,top:e.pageY-l.top-o.height()/2-(parseInt(o.css("borderTopWidth"),10)||0)-(parseInt(o.css("borderBottomWidth"),10)||0)+(parseInt(o.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,a,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this._removeClass(this.handles,null,"ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,s,n,o;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/e,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),o=this._valueMin()+s*n,this._trimAlignValue(o)},_uiHash:function(t,e,i){var s={handle:this.handles[t],handleIndex:t,value:void 0!==e?e:this.value()};return this._hasMultipleValues()&&(s.value=void 0!==e?e:this.values(t),s.values=i||this.values()),s},_hasMultipleValues:function(){return this.options.values&&this.options.values.length},_start:function(t,e){return this._trigger("start",t,this._uiHash(e))},_slide:function(t,e,i){var s,n,o=this.value(),a=this.values();this._hasMultipleValues()&&(n=this.values(e?0:1),o=this.values(e),2===this.options.values.length&&this.options.range===!0&&(i=0===e?Math.min(n,i):Math.max(n,i)),a[e]=i),i!==o&&(s=this._trigger("slide",t,this._uiHash(e,i,a)),s!==!1&&(this._hasMultipleValues()?this.values(e,i):this.value(i)))},_stop:function(t,e){this._trigger("stop",t,this._uiHash(e))},_change:function(t,e){this._keySliding||this._mouseSliding||(this._lastChangedValue=e,this._trigger("change",t,this._uiHash(e)))},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),this._change(null,0),void 0):this._value()},values:function(e,i){var s,n,o;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),this._change(null,e),void 0;if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this._hasMultipleValues()?this._values(e):this.value();for(s=this.options.values,n=arguments[0],o=0;s.length>o;o+=1)s[o]=this._trimAlignValue(n[o]),this._change(null,o);this._refreshValue()},_setOption:function(e,i){var s,n=0;switch("range"===e&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(n=this.options.values.length),this._super(e,i),e){case"orientation":this._detectOrientation(),this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-"+this.orientation),this._refreshValue(),this.options.range&&this._refreshRange(i),this.handles.css("horizontal"===i?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=n-1;s>=0;s--)this._change(null,s);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_setOptionDisabled:function(t){this._super(t),this._toggleClass(null,"ui-state-disabled",!!t)},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this._hasMultipleValues()){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=i>0?e:-e),parseFloat(s.toFixed(5))},_calculateNewMax:function(){var t=this.options.max,e=this._valueMin(),i=this.options.step,s=Math.round((t-e)/i)*i;t=s+e,t>this.options.max&&(t-=i),this.max=parseFloat(t.toFixed(this._precision()))},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshRange:function(t){"vertical"===t&&this.range.css({width:"",left:""}),"horizontal"===t&&this.range.css({height:"",bottom:""})},_refreshValue:function(){var e,i,s,n,o,a=this.options.range,r=this.options,l=this,h=this._animateOff?!1:r.animate,c={};this._hasMultipleValues()?this.handles.each(function(s){i=100*((l.values(s)-l._valueMin())/(l._valueMax()-l._valueMin())),c["horizontal"===l.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[h?"animate":"css"](c,r.animate),l.options.range===!0&&("horizontal"===l.orientation?(0===s&&l.range.stop(1,1)[h?"animate":"css"]({left:i+"%"},r.animate),1===s&&l.range[h?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===s&&l.range.stop(1,1)[h?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&l.range[h?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i}):(s=this.value(),n=this._valueMin(),o=this._valueMax(),i=o!==n?100*((s-n)/(o-n)):0,c["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[h?"animate":"css"](c,r.animate),"min"===a&&"horizontal"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({width:i+"%"},r.animate),"max"===a&&"horizontal"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({width:100-i+"%"},r.animate),"min"===a&&"vertical"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({height:i+"%"},r.animate),"max"===a&&"vertical"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({height:100-i+"%"},r.animate))},_handleEvents:{keydown:function(e){var i,s,n,o,a=t(e.target).data("ui-slider-handle-index");switch(e.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(e.preventDefault(),!this._keySliding&&(this._keySliding=!0,this._addClass(t(e.target),null,"ui-state-active"),i=this._start(e,a),i===!1))return}switch(o=this.options.step,s=n=this._hasMultipleValues()?this.values(a):this.value(),e.keyCode){case t.ui.keyCode.HOME:n=this._valueMin();break;case t.ui.keyCode.END:n=this._valueMax();break;case t.ui.keyCode.PAGE_UP:n=this._trimAlignValue(s+(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.PAGE_DOWN:n=this._trimAlignValue(s-(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(s===this._valueMax())return;n=this._trimAlignValue(s+o);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(s===this._valueMin())return;n=this._trimAlignValue(s-o)}this._slide(e,a,n)},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),this._removeClass(t(e.target),null,"ui-state-active"))}}})});
/*
Lightbox for Bootstrap 3 by @ashleydw
https://github.com/ashleydw/lightbox

License: https://github.com/ashleydw/lightbox/blob/master/LICENSE
*/


(function() {
  "use strict";
  var $, EkkoLightbox;

  $ = jQuery;

  EkkoLightbox = function(element, options) {
    var content, footer, header,
      _this = this;
    this.options = $.extend({
      title: null,
      footer: null,
      remote: null
    }, $.fn.ekkoLightbox.defaults, options || {});
    this.$element = $(element);
    content = '';
    this.modal_id = this.options.modal_id ? this.options.modal_id : 'ekkoLightbox-' + Math.floor((Math.random() * 1000) + 1);
    header = '<div class="modal-header"' + (this.options.title || this.options.always_show_close ? '' : ' style="display:none"') + '><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h4 class="modal-title">' + (this.options.title || "&nbsp;") + '</h4></div>';
    footer = '<div class="modal-footer"' + (this.options.footer ? '' : ' style="display:none"') + '>' + this.options.footer + '</div>';
    $(document.body).append('<div id="' + this.modal_id + '" class="ekko-lightbox modal fade" tabindex="-1"><div class="modal-dialog"><div class="modal-content">' + header + '<div class="modal-body"><div class="ekko-lightbox-container"><div></div></div></div>' + footer + '</div></div></div>');
    this.modal = $('#' + this.modal_id);
    this.modal_dialog = this.modal.find('.modal-dialog').first();
    this.modal_content = this.modal.find('.modal-content').first();
    this.modal_body = this.modal.find('.modal-body').first();
    this.lightbox_container = this.modal_body.find('.ekko-lightbox-container').first();
    this.lightbox_body = this.lightbox_container.find('> div:first-child').first();
    this.showLoading();
    this.modal_arrows = null;
    this.border = {
      top: parseFloat(this.modal_dialog.css('border-top-width')) + parseFloat(this.modal_content.css('border-top-width')) + parseFloat(this.modal_body.css('border-top-width')),
      right: parseFloat(this.modal_dialog.css('border-right-width')) + parseFloat(this.modal_content.css('border-right-width')) + parseFloat(this.modal_body.css('border-right-width')),
      bottom: parseFloat(this.modal_dialog.css('border-bottom-width')) + parseFloat(this.modal_content.css('border-bottom-width')) + parseFloat(this.modal_body.css('border-bottom-width')),
      left: parseFloat(this.modal_dialog.css('border-left-width')) + parseFloat(this.modal_content.css('border-left-width')) + parseFloat(this.modal_body.css('border-left-width'))
    };
    this.padding = {
      top: parseFloat(this.modal_dialog.css('padding-top')) + parseFloat(this.modal_content.css('padding-top')) + parseFloat(this.modal_body.css('padding-top')),
      right: parseFloat(this.modal_dialog.css('padding-right')) + parseFloat(this.modal_content.css('padding-right')) + parseFloat(this.modal_body.css('padding-right')),
      bottom: parseFloat(this.modal_dialog.css('padding-bottom')) + parseFloat(this.modal_content.css('padding-bottom')) + parseFloat(this.modal_body.css('padding-bottom')),
      left: parseFloat(this.modal_dialog.css('padding-left')) + parseFloat(this.modal_content.css('padding-left')) + parseFloat(this.modal_body.css('padding-left'))
    };
    this.modal.on('show.bs.modal', this.options.onShow.bind(this)).on('shown.bs.modal', function() {
      _this.modal_shown();
      return _this.options.onShown.call(_this);
    }).on('hide.bs.modal', this.options.onHide.bind(this)).on('hidden.bs.modal', function() {
      if (_this.gallery) {
        $(document).off('keydown.ekkoLightbox');
      }
      _this.modal.remove();
      return _this.options.onHidden.call(_this);
    }).modal('show', options);
    return this.modal;
  };

  EkkoLightbox.prototype = {
    modal_shown: function() {
      var video_id,
        _this = this;
      if (!this.options.remote) {
        return this.error('No remote target given');
      } else {
        this.gallery = this.$element.data('gallery');
        if (this.gallery) {
          if (this.options.gallery_parent_selector === 'document.body' || this.options.gallery_parent_selector === '') {
            this.gallery_items = $(document.body).find('*[data-toggle="lightbox"][data-gallery="' + this.gallery + '"]');
          } else {
            this.gallery_items = this.$element.parents(this.options.gallery_parent_selector).first().find('*[data-toggle="lightbox"][data-gallery="' + this.gallery + '"]');
          }
          this.gallery_index = this.gallery_items.index(this.$element);
          $(document).on('keydown.ekkoLightbox', this.navigate.bind(this));
          if (this.options.directional_arrows && this.gallery_items.length > 1) {
            this.lightbox_container.append('<div class="ekko-lightbox-nav-overlay"><a href="#" class="' + this.strip_stops(this.options.left_arrow_class) + '"></a><a href="#" class="' + this.strip_stops(this.options.right_arrow_class) + '"></a></div>');
            this.modal_arrows = this.lightbox_container.find('div.ekko-lightbox-nav-overlay').first();
            this.lightbox_container.find('a' + this.strip_spaces(this.options.left_arrow_class)).on('click', function(event) {
              event.preventDefault();
              return _this.navigate_left();
            });
            this.lightbox_container.find('a' + this.strip_spaces(this.options.right_arrow_class)).on('click', function(event) {
              event.preventDefault();
              return _this.navigate_right();
            });
          }
        }
        if (this.options.type) {
          if (this.options.type === 'image') {
            return this.preloadImage(this.options.remote, true);
          } else if (this.options.type === 'youtube' && (video_id = this.getYoutubeId(this.options.remote))) {
            return this.showYoutubeVideo(video_id);
          } else if (this.options.type === 'vimeo') {
            return this.showVimeoVideo(this.options.remote);
          } else if (this.options.type === 'instagram') {
            return this.showInstagramVideo(this.options.remote);
          } else if (this.options.type === 'url') {
            return this.loadRemoteContent(this.options.remote);
          } else if (this.options.type === 'video') {
            return this.showVideo(this.options.remote);
          } else {
            return this.error("Could not detect remote target type. Force the type using data-type=\"image|youtube|vimeo|instagram|url|video\"");
          }
        } else {
          return this.detectRemoteType(this.options.remote);
        }
      }
    },
    strip_stops: function(str) {
      return str.replace(/\./g, '');
    },
    strip_spaces: function(str) {
      return str.replace(/\s/g, '');
    },
    isImage: function(str) {
      return str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
    },
    isSwf: function(str) {
      return str.match(/\.(swf)((\?|#).*)?$/i);
    },
    getYoutubeId: function(str) {
      var match;
      match = str.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);
      if (match && match[2].length === 11) {
        return match[2];
      } else {
		  match = str.replace('/')
        return match[match.length-1];
      }
    },
    getVimeoId: function(str) {
      if (str.indexOf('vimeo') > 0) {
        return str;
      } else {
        return false;
      }
    },
    getInstagramId: function(str) {
      if (str.indexOf('instagram') > 0) {
        return str;
      } else {
        return false;
      }
    },
    navigate: function(event) {
      event = event || window.event;
      if (event.keyCode === 39 || event.keyCode === 37) {
        if (event.keyCode === 39) {
          return this.navigate_right();
        } else if (event.keyCode === 37) {
          return this.navigate_left();
        }
      }
    },
    navigateTo: function(index) {
      var next, src;
      if (index < 0 || index > this.gallery_items.length - 1) {
        return this;
      }
      this.showLoading();
      this.gallery_index = index;
      this.$element = $(this.gallery_items.get(this.gallery_index));
      this.updateTitleAndFooter();
      src = this.$element.attr('data-remote') || this.$element.attr('href');
      this.detectRemoteType(src, this.$element.attr('data-type') || false);
      if (this.gallery_index + 1 < this.gallery_items.length) {
        next = $(this.gallery_items.get(this.gallery_index + 1), false);
        src = next.attr('data-remote') || next.attr('href');
        if (next.attr('data-type') === 'image' || this.isImage(src)) {
          return this.preloadImage(src, false);
        }
      }
    },
    navigate_left: function() {
      if (this.gallery_items.length === 1) {
        return;
      }
      if (this.gallery_index === 0) {
        this.gallery_index = this.gallery_items.length - 1;
      } else {
        this.gallery_index--;
      }
      this.options.onNavigate.call(this, 'left', this.gallery_index);
      return this.navigateTo(this.gallery_index);
    },
    navigate_right: function() {
      if (this.gallery_items.length === 1) {
        return;
      }
      if (this.gallery_index === this.gallery_items.length - 1) {
        this.gallery_index = 0;
      } else {
        this.gallery_index++;
      }
      this.options.onNavigate.call(this, 'right', this.gallery_index);
      return this.navigateTo(this.gallery_index);
    },
    detectRemoteType: function(src, type) {
      var video_id;
      type = type || false;
      if (type === 'image' || this.isImage(src)) {
        this.options.type = 'image';
        return this.preloadImage(src, true);
      } else if (type === 'youtube') {
	  	video_id = this.getYoutubeId(src)
        this.options.type = 'youtube';
        return this.showYoutubeVideo(video_id);
      } else if (type === 'vimeo') {
	    video_id = this.getVimeoId(src)
        this.options.type = 'vimeo';
        return this.showVimeoVideo(video_id);
      } else if (type === 'instagram') {
	  	video_id = this.getInstagramId(src)
        this.options.type = 'instagram';
        return this.showInstagramVideo(video_id);
      } else if (type === 'video') {
        this.options.type = 'video';
        return this.showVideo(src);
      } else {
        this.options.type = 'url';
        return this.loadRemoteContent(src);
      }
    },
    updateTitleAndFooter: function() {
      var caption, footer, header, title;
      header = this.modal_content.find('.modal-header');
      footer = this.modal_content.find('.modal-footer');
      title = this.$element.data('title') || "";
      caption = this.$element.data('footer') || "";
      if (title || this.options.always_show_close) {
        header.css('display', '').find('.modal-title').html(title || "&nbsp;");
      } else {
        header.css('display', 'none');
      }
      if (caption) {
        footer.css('display', '').html(caption);
      } else {
        footer.css('display', 'none');
      }
      return this;
    },
    showLoading: function() {
      this.lightbox_body.html('<div class="modal-loading">' + this.options.loadingMessage + '</div>');
      return this;
    },
    showYoutubeVideo: function(id) {
      var height, width;
      width = this.checkDimensions(this.$element.data('width') || 560);
      height = width / (560 / 315);
      return this.showVideoIframe('//www.youtube.com/embed/' + id + '?rel=0&amp;showinfo=0&autoplay=1&html5=1', width, height);
    },
    showVimeoVideo: function(id) {
      var height, width;
      width = this.checkDimensions(this.$element.data('width') || 560);
      height = width / (500 / 281);
      return this.showVideoIframe(id + '?autoplay=1', width, height);
    },
    showInstagramVideo: function(id) {
      var height, width;
      width = this.checkDimensions(this.$element.data('width') || 612);
      this.resize(width);
      height = width + 80;
      this.lightbox_body.html('<iframe width="' + width + '" height="' + height + '" src="' + this.addTrailingSlash(id) + 'embed/" frameborder="0" allowfullscreen></iframe>');
      this.options.onContentLoaded.call(this);
      if (this.modal_arrows) {
        return this.modal_arrows.css('display', 'none');
      }
    },

	  showVideo: function(url, width, height) {
		  height = height || width;
		  this.resize(800);
		  this.lightbox_body.html('<video class="videoelement" width="800px" height="" autoplay="autoplay" preload="auto" controls="controls"><source src="'+url+'" type="video/mp4"></video>');
		  this.options.onContentLoaded.call(this);
		  if (this.modal_arrows) {
			  this.modal_arrows.css('display', 'true');
		  }
		  return this;
	  },
    showVideoIframe: function(url, width, height) {
      height = height || width;
      this.resize(width);
      this.lightbox_body.html('<div class="embed-responsive embed-responsive-16by9"><iframe width="' + width + '" height="' + height + '" src="' + url + '" frameborder="0" allowfullscreenclass="embed-responsive-item"></iframe></div>');
      this.options.onContentLoaded.call(this);
      if (this.modal_arrows) {
       // this.modal_arrows.css('display', 'none');
      }
      return this;
    },
    loadRemoteContent: function(url) {
		var disableExternalCheck, width, height,
        _this = this;
      width = this.$element.data('width') || 560;
		height = this.$element.data('height') || 560;
      this.resize(width);
      disableExternalCheck = this.$element.data('disableExternalCheck') || false;
      if (!disableExternalCheck && !this.isExternal(url)) {
        this.lightbox_body.load(url, $.proxy(function() {
          return _this.$element.trigger('loaded.bs.modal');
        }));
      } else {
		  this.lightbox_body.html('<iframe width="' + width + '" height="' + height + '" src="' + url + (url.indexOf('maps.duesseldorf.de')!=-1?'&Height='+height:'') + '" frameborder="0" allowfullscreen></iframe>');
        this.options.onContentLoaded.call(this);
      }
      if (this.modal_arrows) {
        this.modal_arrows.css('display', 'none');
      }
      return this;
    },
    isExternal: function(url) {
      var match;
      match = url.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);
      if (typeof match[1] === "string" && match[1].length > 0 && match[1].toLowerCase() !== location.protocol) {
        return true;
      }
      if (typeof match[2] === "string" && match[2].length > 0 && match[2].replace(new RegExp(":(" + {
        "http:": 80,
        "https:": 443
      }[location.protocol] + ")?$"), "") !== location.host) {
        return true;
      }
      return false;
    },
    error: function(message) {
      this.lightbox_body.html(message);
      return this;
    },
    preloadImage: function(src, onLoadShowImage) {
      var img,
        _this = this;
      img = new Image();
      if ((onLoadShowImage == null) || onLoadShowImage === true) {
        img.onload = function() {
          var image;
          image = $('<img />');
          image.attr('src', img.src);
          image.addClass('img-responsive');
          _this.lightbox_body.html(image);
          if (_this.modal_arrows) {
            _this.modal_arrows.css('display', 'block');
          }
          return image.load(function() {
            _this.resize(img.width);
            return _this.options.onContentLoaded.call(_this);
          });
        };
        img.onerror = function() {
          return _this.error('Failed to load image: ' + src);
        };
      }
      img.src = src;
      return img;
    },
    resize: function(width) {
      var width_total;
      width_total = width + this.border.left + this.padding.left + this.padding.right + this.border.right;
      this.modal_dialog.css('width', 'auto').css('max-width', width_total);
      this.lightbox_container.find('a').css('line-height', function() {
        return $(this).parent().height() + 'px';
      });
      return this;
    },
    checkDimensions: function(width) {
      var body_width, width_total;
      width_total = width + this.border.left + this.padding.left + this.padding.right + this.border.right;
      body_width = document.body.clientWidth;
      if (width_total > body_width) {
        width = this.modal_body.width();
      }
      return width;
    },
    close: function() {
      return this.modal.modal('hide');
    },
    addTrailingSlash: function(url) {
      if (url.substr(-1) !== '/') {
        url += '/';
      }
      return url;
    }
  };

  $.fn.ekkoLightbox = function(options) {
    return this.each(function() {
      var $this;
      $this = $(this);
      options = $.extend({
        remote: $this.attr('data-remote') || $this.attr('href'),
        gallery_parent_selector: $this.attr('data-parent'),
        type: $this.attr('data-type')
      }, options, $this.data());
      new EkkoLightbox(this, options);
      return this;
    });
  };

  $.fn.ekkoLightbox.defaults = {
    gallery_parent_selector: 'document.body',
    left_arrow_class: '.glyphicon .glyphicon-chevron-left',
    right_arrow_class: '.glyphicon .glyphicon-chevron-right',
    directional_arrows: true,
    type: null,
    always_show_close: true,
    loadingMessage: 'Loading...',
    onShow: function() {},
    onShown: function() {},
    onHide: function() {},
    onHidden: function() {},
    onNavigate: function() {},
    onContentLoaded: function() {}
  };

}).call(this);

/*!
 * JavaScript Cookie v2.1.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var _OldCookies = window.Cookies;
        var api = window.Cookies = factory();
        api.noConflict = function () {
            window.Cookies = _OldCookies;
            return api;
        };
    }
}(function () {
    function extend () {
        var i = 0;
        var result = {};
        for (; i < arguments.length; i++) {
            var attributes = arguments[ i ];
            for (var key in attributes) {
                result[key] = attributes[key];
            }
        }
        return result;
    }

    function init (converter) {
        function api (key, value, attributes) {
            var result;

            // Write

            if (arguments.length > 1) {
                attributes = extend({
                    path: '/'
                }, api.defaults, attributes);

                if (typeof attributes.expires === 'number') {
                    var expires = new Date();
                    expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
                    attributes.expires = expires;
                }

                try {
                    result = JSON.stringify(value);
                    if (/^[\{\[]/.test(result)) {
                        value = result;
                    }
                } catch (e) {}

                if (!converter.write) {
                    value = encodeURIComponent(String(value))
                        .replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
                } else {
                    value = converter.write(value, key);
                }

                key = encodeURIComponent(String(key));
                key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
                key = key.replace(/[\(\)]/g, escape);

                return (document.cookie = [
                    key, '=', value,
                    attributes.expires && '; expires=' + attributes.expires.toUTCString(), // use expires attribute, max-age is not supported by IE
                    attributes.path    && '; path=' + attributes.path,
                    attributes.domain  && '; domain=' + attributes.domain,
                    attributes.secure ? '; secure' : ''
                ].join(''));
            }

            // Read

            if (!key) {
                result = {};
            }

            // To prevent the for loop in the first place assign an empty array
            // in case there are no cookies at all. Also prevents odd result when
            // calling "get()"
            var cookies = document.cookie ? document.cookie.split('; ') : [];
            var rdecode = /(%[0-9A-Z]{2})+/g;
            var i = 0;

            for (; i < cookies.length; i++) {
                var parts = cookies[i].split('=');
                var name = parts[0].replace(rdecode, decodeURIComponent);
                var cookie = parts.slice(1).join('=');

                if (cookie.charAt(0) === '"') {
                    cookie = cookie.slice(1, -1);
                }

                try {
                    cookie = converter.read ?
                        converter.read(cookie, name) : converter(cookie, name) ||
                    cookie.replace(rdecode, decodeURIComponent);

                    if (this.json) {
                        try {
                            cookie = JSON.parse(cookie);
                        } catch (e) {}
                    }

                    if (key === name) {
                        result = cookie;
                        break;
                    }

                    if (!key) {
                        result[name] = cookie;
                    }
                } catch (e) {}
            }

            return result;
        }

        api.get = api.set = api;
        api.getJSON = function () {
            return api.apply({
                json: true
            }, [].slice.call(arguments));
        };
        api.defaults = {};

        api.remove = function (key, attributes) {
            api(key, '', extend(attributes, {
                expires: -1
            }));
        };

        api.withConverter = init;

        return api;
    }

    return init(function () {});
}));
$(document).ready(function()
{

	/* browser supports javascript */
	$('html').removeClass('no-js');


	var viewport;


	/*var resizeId;
	$(window).resize(function() {
		clearTimeout(resizeId);
		resizeId = setTimeout( setViewport, 10);
	});*/

	setViewport();
	initStyleFunctions(viewport);
	//initMoreLinks();
	initStickyMenu();
	initButtonFunctions(viewport);
	initLightboxes();
	initSelectBoxes(viewport);
	initUIFunctions(viewport);
	initMainNav();
	initModalboxes();
	initPanel();

	// necessary because some JS resizes content and an initial positioning (of the browser) may break as the content has changed height while being modified/initialized.
	repositionIfAnchor();
});

function setViewport()
{
	viewport = getBreakpoint();
}


function initUIFunctions(vp)
{
	$('[data-toggle="tooltip"]').tooltip();

	//if($('#carousel .carousel-indicators').length > 0)
	//{
		$('#stage-innerwrap .carousel-indicators li').tooltip({
			trigger:'focus hover'
		});
	//}

	/* accordions */
	/* adjust height of each accordion */

	//if(getBreakpoint() == 'lg' || getBreakpoint() == 'md')
	/*if(vp == 'lg' || vp == 'md')
	{
		$('.accordion').each(function() {
			$(this).height($('.in .panel-body',this).height()+40);
			var minHeight = parseInt($('.panel-heading',this).length*$('.accordion .panel-heading').height()+3);
			$('.panel-body',this).css('minHeight',minHeight+'px');
			$('.collapse',this).css('minHeight',minHeight+'px');
			$(this).css('minHeight',(minHeight+20)+'px');
		});
*/
		/* panel-change on click
		$('.accordion .accordion-toggle').click(function() {
			console.log()
			var target = '#' + $(this).attr('href').split('#')[1];
			var parent = $(this).data('parent');
			$(parent+' .collapse').collapse('hide');
			$(target).collapse('toggle');
			var targetHeight = $(target+' .panel-body').height()+40;

			$(parent).animate({
				'height':targetHeight+'px'
			},300);
		});*/
	//}
}

/*
 * add arrow to the more-info items in menus
 * => menu ul must have class check-more-button and attribute data-last with number of menu items
 */
function initMoreLinks()
{
	$('.check-more-button').each(function() {
		var lastItem;
		if($(this).data('last'))
		{
			lastItem = parseInt($(this).data('last'));
			$('li:nth-child('+lastItem+')',this).addClass('more-button');
		}
	});
}


/*
	build popups from lists in tx-itk-service module in xxs-viewport
*/
function initSelectBoxes(vp)
{
	//if(getBreakpoint() == 'xxs')
	if(vp == 'xxs')
	{
		$('.tx-itk-service ul').hide();
		$('.tx-itk-service .select').click(function() {
			$(this).next('ul').toggle('slow');
			$(this).next('ul').toggle(200);
			if( $(this).next('ul').attr('aria-expanded') == "false" ) {
				$(this).next('ul').attr('aria-expanded', 'true');
			} else {
				$(this).next('ul').attr('aria-expanded', 'false');
			}
		});

	}
	$('.news-filter ul').hide();
	$('.news-filter .select').click(function() {
		$(this).next('ul').toggle(200);
		if( $(this).next('ul').attr('aria-expanded') == "false" ) {
			$(this).next('ul').attr('aria-expanded', 'true');
		} else {
			$(this).next('ul').attr('aria-expanded', 'false');
		}
	});
}

/*
 * sticky menu
 */
function initStickyMenu()
{
	$(window).scroll(function()
	{
		if($(document).scrollTop() > 0)
		{
			$('.scroll-container-fluid').addClass('container-fluid').removeClass('container');
			$('.scroll-container').addClass('container');
			// $('#metamenu').hide();
			$('#menu-outerwrap').addClass('fixed').removeClass('container');
			if(viewport != 'xs' && viewport!='xxs'){
				$('#toolbar .toolbar-content').hide();
			}
			$('#toolbar ul button').removeClass('active');
		}
		else
		{
			$('.scroll-container-fluid').addClass('container').removeClass('container-fluid');
			$('.scroll-container').removeClass('container');
			$('#metamenu').show();
			$('#menu-outerwrap').removeClass('fixed').addClass('container');
		}
	});
}

/*
 * functions for different buttons
 */
function initButtonFunctions(vp)
{
	/* scroll to top of page and close toolbar */
	$('.scroll-to-top').click(function() {
		$('html, body').animate({
			scrollTop:0
		},350);

	//	toggleToolbar(vp,$('#toolbar .toggle'),true);
	});

	/* open / close toolbar */
	$('#toolbar .toggle').click(function(){
		//toggleToolbar(vp,$(this),false);


	});
	/* open / close toolbar from button of toolbar */
	$('#toolbar ul button').click(function() {
        toggleToolbarContent(vp,$(this));
        if($(this).attr('id')=='buttonMap' ){
            if($(this).parent().find('.tx-lhd-maps-iframe').length==0){
                $('.textImageMapToolbar').html(iframeservicenav);
            }
        }
	});
	/* load galleries of explorer */

}

function initModalboxes() {

	$('.modal-box').on('show.bs.modal', function (e) {
		$('header,main,footer,aside').attr('aria-hidden', 'true');
	});

	$('.modal-box').on('hide.bs.modal', function (e) {
		$('header,main,footer,aside').attr('aria-hidden', 'false');
	});

}



/*
 * toggle toolbar-item content
 */
function toggleToolbarContent(vp,elem)
{
	$('#toolbar .toolbar-content').hide();

	if($(elem).hasClass('active'))
	{
		$('#toolbar ul button').removeClass('active');
		$(elem).next('.toolbar-content').hide();
		//enableScroll();
	}
	else
	{

		$('#toolbar ul button').removeClass('active');
		$(elem).addClass('active');
		$(elem).next('.toolbar-content').show();
		//disableScroll();
	}
}


/*
 * jquery bxslider
 * slider for listitems
 * => <ul class="bxslider"><li class="item"></li></ul>
 */
function initSlider(vp)
{
	/* walk through all sliders of page */
	$('.bxslider').each(function() {
		generateSlider(vp,$(this));
	});
}

function initMainNav() {
	// hide all except navigation
	$('#mainmenu').on('hide.bs.collapse', function () {
		$('main,footer,aside').show();
	})
	// display all
	$('#mainmenu').on('shown.bs.collapse', function () {
		$('main,footer,aside').hide();
	})
}

function generateSlider(vp,elem)
{
	var sliderType = 'default';
	var sliderItems = 4;
	var sizes = {};

	/* default options */
	var slideOptions = {
		speed:3500,
		pause:6000,
		captions:true,
		slideSelector:'.item',
		auto: false,
		pager:true,
		startSlide:0
	};

	/* show pager y/n */
	if($(elem).attr('data-slider-pager'))
	{
		slideOptions.pager = $(elem).attr('data-slider-pager');
	}


	if($(elem).attr('data-slider-type'))
	{
		sliderType = $(elem).attr('data-slider-type');
	}

	/* slider with one element show: hide controls if only one element */
	if(sliderType != 'carousel' && $(elem).children('li.item').length <= 1)
	{
		slideOptions.pager = false;
		slideOptions.controls = false;
	}

	switch(sliderType)
	{
		case 'carousel':

			// max displayed items
			if($(elem).attr('data-slider-items'))
			{
				sliderItems = parseInt($(elem).attr('data-slider-items'));
			}

			slideOptions.minSlides = 1;
			slideOptions.moveSlides = 1;
			slideOptions.maxSlides = sliderItems;
			slideOptions.slideWidth = 260;
			slideOptions.slideMargin = 20;
			slideOptions.pager = false;
			slideOptions.captions = false;

			if(sliderItems == 3)
			{
				slideOptions.slideWidth = 353;

				if(vp == 'md')
				{
					slideOptions.slideWidth = 270;
				}
			}
			//if(getBreakpoint() == 'xs' || getBreakpoint() == 'xxs') {
			if(vp == 'xs' || vp == 'xxs') {
				slideOptions.slideWidth = 767;
			}


			break;

		case 'explorer':

			/* use captions from html instead of captions from title-attribute */;
			slideOptions.captions = false;

			/* toggle prev-/next-links during transition */

			slideOptions.onSlideBefore = function($slideElement) {
				$slideElement.closest('.bx-viewport').next('.bx-controls').children('.bx-controls-direction').hide();
			};
			slideOptions.onSlideAfter = function($slideElement) {
				$slideElement.closest('.bx-viewport').next('.bx-controls').children('.bx-controls-direction').show();
			};

			break;

	}


	/* create slider */
	var slider = $(elem).bxSlider(slideOptions);

	/* autostart y/n */
	if($(elem).attr('data-slider-auto') === 'true') slider.startAuto();
}


/*
 * jquery colorbox
 * lightbox for images
 * => <a class="lightbox" href="exampleimage.jpg"><img src="exampleimage.jpg"></a>
 */
function initLightboxes() {
	// lightboxes for images
	var imagelightbox = $('a.lightbox').colorbox({
		opacity:'0.5',
		initialWidth:'0',
		initialHeight:'0',
		transition:'elastic',
		maxWidth:'90%',
		onComplete: function() {

			var titleHeight = ($('#cboxTitle').outerHeight() == 0) ? '16px' : $('#cboxTitle').outerHeight();

			$('#colorbox, #cboxWrapper').css({
				height: $('#cboxContent').outerHeight() + titleHeight - 20 + 'px'
			});
			$('#cboxContent').css({
				height: $('#colorbox').outerHeight()  - 20 + 'px'
			});
		}
	});
}

function initStyleFunctions(vp){

	/* tx-itk-links */
	$('.tx-itk-links ul.layout-2').attr('data-slider-type','carousel').attr('data-slider-items','3');
	$('.tx-itk-links ul.layout-2 li').addClass('item');

	/* changing icon of explorer-tool on hover or active state */
	$('.tx-itk-explorer a').hover(
		function() {
			$('.icon-small',this).addClass('icon-red');
		},
		function() {
			$('.icon-small',this).removeClass('icon-red');
		}
	);
	$('.tx-itk-explorer .active .icon-small').addClass('icon-white');


	/* setup explorer-menu slider-carousel for bp xxs */
	//if(getBreakpoint() == 'xxs')
	if(vp == 'xxs')
	{
		$('.itk-explorer-menu ul').addClass('bxslider').attr('data-slider-type','carousel');
		$('.itk-explorer-menu ul li').addClass('item');
	}

	/* toolbar-behaviour in different viewports */
	//if(getBreakpoint() == 'lg')
	if(vp == 'lg')
	{
		//toggleToolbar(vp,$('#toolbar .toggle'),false);
	}
	else
	{
		//toggleToolbar(vp,$('#toolbar .toggle'),false);
		//setTimeout(function() { toggleToolbar(vp,$('#toolbar .toggle'),false); }, 5000);
	}

	/* setting link icons */
	// $('.link-internal').prepend('<span class="icon-link icon-link-internal"></span>');
	// $('.link-interactive').prepend('<span class="icon-link icon-link-interactive"></span>');
	// $('.link-external').prepend('<span class="icon-link icon-link-external"></span>');
	// $('.link-email').prepend('<span class="icon-link icon-link-email"></span>');
	// $('.link-download').prepend('<span class="icon-link icon-link-download"></span>');
	// $('.link-pdf').prepend('<span class="icon-link icon-link-pdf"></span>');



	/* padding top of stage depending on existing breadcrumb */
	//if(getBreakpoint() == 'lg' || getBreakpoint() == 'md')
	if(vp == 'lg' || vp == 'md')
	{
		$('#stage-outerwrap').css('padding-top',parseInt($('#menu-outerwrap').height() + 40)+'px');
	}

	/* setting bottom-margin of expander-plugin */
	//$('.box-grey-1 .container .row .tx-itk-expander').closest('.container').parent('div').next('div').css('padding-top','40px');

	/* newslist / static headerstage images in xs */
	//if(getBreakpoint() == 'xs')
	if(vp == 'xs')
	{
		$('.news-list-view .newsitem ').each(function() {
			$('.news-img-wrap',this).before($('.teaser-text h2',this));
		});
		$('#stage-innerwrap .news-single-view').before($('#stage-innerwrap .teaser-text h2'));
		$('#stage-innerwrap .csc-textpic-imagewrap').before($('#stage-innerwrap .csc-textpicHeader'));
	}

	/* tables */
}


/*
 * check viewport
 */
function getBreakpoint() {
	if($('#bp-xxs').is(':visible')) return 'xxs';
	if($('#bp-xs').is(':visible')) return 'xs';
	if($('#bp-sm').is(':visible')) return 'sm';
	if($('#bp-md').is(':visible')) return 'md';
	if($('#bp-lg').is(':visible')) return 'lg';
}



/**
 * Add or replace a value/key pair to a url query
 *
 * @see http://stackoverflow.com/questions/5999118/add-or-update-query-string-parameter
*/
function updateQueryStringParameter(uri, key, value)
{
	var re = new RegExp("([?|&])" + key + "=.*?(&|$)", "i");
	var separator = uri.indexOf('?') !== -1 ? "&" : "?";
	if (uri.match(re)) {
		return uri.replace(re, '$1' + key + "=" + value + '$2');
	} else {
		return uri + separator + key + "=" + value;
	}
}

var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
	e = e || window.event;
	if (e.preventDefault)
		e.preventDefault();
	e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
	if (keys[e.keyCode]) {
		preventDefault(e);
		return false;
	}
}

function disableScroll() {
	if(viewport == 'xs' || viewport=='xxs'){
		if (window.addEventListener) // older FF
			window.addEventListener('DOMMouseScroll', preventDefault, false);
		window.onwheel = preventDefault; // modern standard
		window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
		window.ontouchmove  = preventDefault; // mobile
		document.onkeydown  = preventDefaultForScrollKeys;
	}
}

function enableScroll() {
	if(viewport == 'xs' || viewport=='xxs') {
		if (window.removeEventListener)
			window.removeEventListener('DOMMouseScroll', preventDefault, false);
		window.onmousewheel = document.onmousewheel = null;
		window.onwheel = null;
		window.ontouchmove = null;
		document.onkeydown = null;
	}
}

function initPanel() {
	// move info-box to correct position on search-page
	if( $('.panel').length > 0 && $('.searchLine').length > 0 ) {
		var element = $('.panel');
		$('.searchLine').after(element);
	}

	$('.panel.panel-closed .panel-heading').click(function() {
		$(this).parent().parent().find('.panel-body').slideToggle().attr('aria-hidden', function (i, attr) { return attr == 'true' ? 'false' : 'true' });
		$(this).attr('aria-expanded', function (i, attr) { return attr == 'true' ? 'false' : 'true' });
		$(this).find('i').toggleClass('glyphicon glyphicon-chevron-down').toggleClass('glyphicon glyphicon-chevron-up');
	})
}

function repositionIfAnchor() {
	var hash = window.location.hash;
	if (hash) {
		// if there is an anchor in the url the position might have changed as some javascript might have repositioned and resized the initial content.
		// therefore reposition again (multiple times as we do not know when everything is ready (we already are in 'document ready'!))
		setTimeout(repositionToHash, 125);
		setTimeout(repositionToHash, 250);
		setTimeout(repositionToHash, 500);
		setTimeout(repositionToHash, 1000);
	}
}

function repositionToHash() {
	var hash = window.location.hash;
	const elem = document.getElementById(hash.replace("#", ""));
	if (elem) {
		const y = elem.getBoundingClientRect().top + window.scrollY;
		window.scroll({
			top: y - 190,
			behavior: 'smooth'
		});
	}
}
/**
 * @license
 * jquery.socialshareprivacy.js | 2 Klicks fuer mehr Datenschutz
 *
 * http://www.heise.de/extras/socialshareprivacy/
 * http://www.heise.de/ct/artikel/2-Klicks-fuer-mehr-Datenschutz-1333879.html
 *
 * Copyright (c) 2011 Hilko Holweg, Sebastian Hilbig, Nicolas Heiringhoff, Juergen Schmidt,
 * Heise Zeitschriften Verlag GmbH & Co. KG, http://www.heise.de
 *
 * Copyright (c) 2012-2013 Mathias Panzenböck
 *
 * is released under the MIT License http://www.opensource.org/licenses/mit-license.php
 *
 * Spread the word, link to us if you can.
 */
(function ($, undefined) {
	"use strict";

	/*
	 * helper functions
	 */ 

	/**
	 * Build an absolute url using a base url.
	 * The provided base url has to be a valid absolute url. It will not be validated!
	 * If no base url is given the document location is used.
	 * Schemes that behave other than http might not work.
	 * This function tries to support file:-urls, but might fail in some cases.
	 * email:-urls aren't supported at all (don't make sense anyway).
	 */
	function absurl (url, base) {
		if (!base) base = document.baseURI || $("html > head > base").last().attr("href") || document.location.href;
		if (!url) {
			return base;
		}
		else if (/^[a-z][-+\.a-z0-9]*:/i.test(url)) {
			// The scheme actually could contain any kind of alphanumerical unicode
			// character, but JavaScript regular expressions don't support unicode
			// character classes. Maybe /^[^:]+:/ or even /^.*:/ would be sufficient?
			return url;
		}
		else if (url.slice(0,2) === '//') {
			return /^[^:]+:/.exec(base)[0]+url;
		}
		
		var ch = url.charAt(0);
		if (ch === '/') {
			if (/^file:/i.test(base)) {
				// file scheme has no hostname
				return 'file://'+url;
			}
			else {
				return /^[^:]+:\/*[^\/]+/i.exec(base)[0]+url;
			}
		}
		else if (ch === '#') {
			// assume "#" only occures at the end indicating the fragment
			return base.replace(/#.*$/,'')+url;
		}
		else if (ch === '?') {
			// assume "?" and "#" only occure at the end indicating the query
			// and the fragment
			return base.replace(/[\?#].*$/,'')+url;
		}
		else {
			var path;
			if (/^file:/i.test(base)) {
				path = base.replace(/^file:\/{0,2}/i,'');
				base = "file://";
			}
			else {
				var match = /^([^:]+:\/*[^\/]+)(\/.*?)?(\?.*?)?(#.*)?$/.exec(base);
				base = match[1];
				path = match[2]||"/";
			}
		
			path = path.split("/");
			path.pop();
			if (path.length === 0) {
				// Ensure leading "/". Of course this is only valid on
				// unix like filesystems. More magic would be needed to
				// support other filesystems.
				path.push("");
			}
			path.push(url);
			return base+path.join("/");
		}
	}

	function formatNumber (number) {
		number = Number(number);

		var prefix = "";
		var suffix = "";
		if (number < 0) {
			prefix = "-";
			number = -number;
		}

		if (number === Infinity) {
			return prefix + "Infinity";
		}

		if (number > 9999) {
			number = number / 1000;
			suffix = "K";
		}

		number = Math.round(number);
		if (number === 0) {
			return "0";
		}

		var buf = [];
		while (number > 0) {
			var part = String(number % 1000);

			number = Math.floor(number / 1000);
			if (number) {
				while (part.length < 3) {
					part = "0"+part;
				}
			}

			buf.unshift(part);
		}

		return prefix + buf.join(",") + suffix;
	}

	// helper function that gets the title of the current page
	function getTitle (options, uri, settings) {
		var title = settings && settings.title;
		if (typeof title === "function") {
			title = title.call(this, options, uri, settings);
		}

		if (title) {
			return title;
		}

		var title = $('meta[name="DC.title"]').attr('content');
		var creator = $('meta[name="DC.creator"]').attr('content');

		if (title && creator) {
			return title + ' - ' + creator;
		} else {
			return title || $('meta[property="og:title"]').attr('content') || $('title').text();
		}
	}

	function getDescription (options, uri, settings) {
		var description = settings && settings.description;
		if (typeof description === "function") {
			description = description.call(this, options, uri, settings);
		}

		if (description) {
			return description;
		}

		return abbreviateText(
			$('meta[name="twitter:description"]').attr('content') ||
			$('meta[itemprop="description"]').attr('content') ||
			$('meta[name="description"]').attr('content') ||
			$.trim($('article, p').first().text()) || $.trim($('body').text()), 3500);
	}

	var IMAGE_ATTR_MAP = {
		META   : 'content',
		IMG    : 'src',
		A      : 'href',
		IFRAME : 'src',
		LINK   : 'href'
	};
	
	// find the largest image of the website
	// if no image at all is found use googles favicon service, which
	// defaults to a small globe (so there is always some image)
	function getImage (options, uri, settings) {
		var imgs, img = settings && settings.image;
		if (typeof img === "function") {
			img = img.call(this, options, uri, settings);
		}

		if (!img) {
			imgs = $('meta[property="image"], meta[property="og:image"], meta[property="og:image:url"], meta[name="twitter:image"], link[rel="image_src"], itemscope *[itemprop="image"]').first();
			if (imgs.length > 0) {
				img = imgs.attr(IMAGE_ATTR_MAP[imgs[0].nodeName]);
			}
		}

		if (img) {
			return absurl(img);
		}

		imgs = $('img').filter(':visible').filter(function () {
			return $(this).parents('.social_share_privacy_area').length === 0;
		});
		if (imgs.length === 0) {
			img = $('link[rel~="shortcut"][rel~="icon"]').attr('href');
			if (img) return absurl(img);
			return 'http://www.google.com/s2/favicons?'+$.param({domain:location.hostname});
		}
		imgs.sort(function (lhs, rhs) {
			return rhs.offsetWidth * rhs.offsetHeight - lhs.offsetWidth * lhs.offsetHeight;
		});
		// browser makes src absolute:
		return imgs[0].src;
	}
	
	// abbreviate at last blank before length and add "\u2026" (horizontal ellipsis)
	function abbreviateText (text, length) {
		// length of UTF-8 encoded string
		if (unescape(encodeURIComponent(text)).length <= length) {
			return text;
		}

		// "\u2026" is actually 3 bytes long in UTF-8
		// TODO: if any of the last 3 characters is > 1 byte long this truncates too much
		var abbrev = text.slice(0, length - 3);

		if (!/\W/.test(text.charAt(length - 3))) {
			var match = /^(.*)\s\S*$/.exec(abbrev);
			if (match) {
				abbrev = match[1];
			}
		}
		return abbrev + "\u2026";
	}
	
	var HTML_CHAR_MAP = {
		'<': '&lt;',
		'>': '&gt;',
		'&': '&amp;',
		'"': '&quot;',
		"'": '&#39;'
	};

	function escapeHtml (s) {
		return s.replace(/[<>&"']/g, function (ch) {
			return HTML_CHAR_MAP[ch];
		});
	}

	function getEmbed (options, uri, settings) {
		var embed = settings && settings.embed;
		if (typeof embed === "function") {
			embed = embed.call(this, options, uri, settings);
		}

		if (embed) {
			return embed;
		}

		embed = ['<iframe scrolling="no" frameborder="0" style="border:none;" allowtransparency="true"'];
		var embed_url = $('meta[name="twitter:player"]').attr('content');

		if (embed_url) {
			var width  = $('meta[name="twitter:player:width"]').attr('content');
			var height = $('meta[name="twitter:player:height"]').attr('content');

			if (width)  embed.push(' width="',escapeHtml(width),'"');
			if (height) embed.push(' height="',escapeHtml(height),'"');
		}
		else {
			embed_url = uri + options.referrer_track;
		}

		embed.push(' src="',escapeHtml(embed_url),'"></iframe>');
		return embed.join('');
	}

	// build URI from rel="canonical" or document.location
	function getURI (options) {
		var uri = document.location.href;
		var canonical = $('head meta[property="og:url"]').attr("content") || $("link[rel=canonical]").attr("href");

		if (canonical) {
			uri = absurl(canonical);
		}
		else if (options && options.ignore_fragment) {
			uri = uri.replace(/#.*$/,'');
		}

		return uri;
	}

	function buttonClickHandler (service_name) {
		function onclick (event) {
			var $container = $(this).parents('li.help_info').first();
			var $share = $container.parents('.social_share_privacy_area').first().parent();
			var options = $share.data('social-share-privacy-options');
			var service = options.services[service_name];
			var button_class = service.button_class || service_name;
			var uri = options.uri;
			if (typeof uri === 'function') {
				uri = uri.call($share[0], options);
			}
			var $switch = $container.find('button.switch');
			if ($switch.hasClass('off')) {
				$container.addClass('info_off');
				$switch.addClass('on').removeClass('off').html(service.txt_on||'\u00a0');
				$container.find('img.privacy_dummy').replaceWith(
					typeof(service.button) === "function" ?
					service.button.call($container.parent().parent()[0],service,uri,options) :
					service.button);
				$share.trigger({type: 'socialshareprivacy:enable', serviceName: service_name, isClick: !event.isTrigger});
			} else {
				$container.removeClass('info_off');
				$switch.addClass('off').removeClass('on').html(service.txt_off||'\u00a0');
				$container.find('.dummy_btn').empty().
					append($('<img/>').addClass(button_class+'_privacy_dummy privacy_dummy').
						attr({
							alt: service.dummy_alt,
							src: service.path_prefix + (options.layout === 'line' ?
								service.dummy_line_img : service.dummy_box_img)
						}).click(onclick));
				$share.trigger({type: 'socialshareprivacy:disable', serviceName: service_name, isClick: !event.isTrigger});
			}
		};
		return onclick;
	}

	// display info-overlays a tiny bit delayed
	function enterHelpInfo () {
		var $info_wrapper = $(this);
		if ($info_wrapper.hasClass('info_off')) return;
		var timeout_id = window.setTimeout(function () {
			$info_wrapper.addClass('display');
			$info_wrapper.removeData('timeout_id');
		}, 500);
		$info_wrapper.data('timeout_id', timeout_id);
	}

	function leaveHelpInfo () {
		var $info_wrapper = $(this);
		var timeout_id = $info_wrapper.data('timeout_id');
		if (timeout_id !== undefined) {
			window.clearTimeout(timeout_id);
		}
		$info_wrapper.removeClass('display');
	}

	function permCheckChangeHandler () {
		var $input = $(this);
		var $share = $input.parents('.social_share_privacy_area').first().parent();
		var options = $share.data('social-share-privacy-options');
		if ($input.is(':checked')) {
			options.set_perma_option($input.attr('data-service'), options);
			$input.parent().addClass('checked');
		} else {
			options.del_perma_option($input.attr('data-service'), options);
			$input.parent().removeClass('checked');
		}
	}

	function enterSettingsInfo () {
		var $settings = $(this);
		var timeout_id = window.setTimeout(function () {
			$settings.find('.settings_info_menu').removeClass('off').addClass('on');
			$settings.removeData('timeout_id');
		}, 500);
		$settings.data('timeout_id', timeout_id);
	}
	
	function leaveSettingsInfo () {
		var $settings = $(this);
		var timeout_id = $settings.data('timeout_id');
		if (timeout_id !== undefined) {
			window.clearTimeout(timeout_id);
		}
		$settings.find('.settings_info_menu').removeClass('on').addClass('off');
	}

	function setPermaOption (service_name, options) {
		$.cookie('socialSharePrivacy_'+service_name, 'perma_on', options.cookie_expires, options.cookie_path, options.cookie_domain);
	}
	
	function delPermaOption (service_name, options) {
		$.cookie('socialSharePrivacy_'+service_name, null, -1, options.cookie_path, options.cookie_domain);
	}

	function getPermaOption (service_name, options) {
		return !!options.get_perma_options(options)[service_name];
	}
	
	function getPermaOptions (options) {
		var cookies = $.cookie();
		var permas = {};
		for (var name in cookies) {
			var match = /^socialSharePrivacy_(.+)$/.exec(name);
			if (match) {
				permas[match[1]] = cookies[name] === 'perma_on';
			}
		}
		return permas;
	}


	// extend jquery with our plugin function
	function socialSharePrivacy (options) {

		if (typeof options === "string") {
			var command = options;
			if (arguments.length === 1) {
				switch (command) {
					case "enable":
						this.find('.switch.off').click();
						break;

					case "disable":
						this.find('.switch.on').click();
						break;

					case "toggle":
						this.find('.switch').click();
						break;

					case "options":
						return this.data('social-share-privacy-options');

					case "destroy":
						this.trigger({type: 'socialshareprivacy:destroy'});
						this.children('.social_share_privacy_area').remove();
						this.removeData('social-share-privacy-options');
						break;

					case "enabled":
						var enabled = {};
						this.each(function () {
							var $self = $(this);
							var options = $self.data('social-share-privacy-options');
							for (var name in options.services) {
								enabled[name] = $self.find('.'+(options.services[name].class_name||name)+' .switch').hasClass('on');
							}
						});
						return enabled;

					case "disabled":
						var disabled = {};
						this.each(function () {
							var $self = $(this);
							var options = $self.data('social-share-privacy-options');
							for (var name in options.services) {
								disabled[name] = $self.find('.'+(options.services[name].class_name||name)+' .switch').hasClass('off');
							}
						});
						return disabled;
	
					default:
						throw new Error("socialSharePrivacy: unknown command: "+command);
				}
			}
			else {
				var arg = arguments[1];
				switch (command) {
					case "enable":
						this.each(function () {
							var $self = $(this);
							var options = $self.data('social-share-privacy-options');
							$self.find('.'+(options.services[arg].class_name||arg)+' .switch.off').click();
						});
						break;

					case "disable":
						this.each(function () {
							var $self = $(this);
							var options = $self.data('social-share-privacy-options');
							$self.find('.'+(options.services[arg].class_name||arg)+' .switch.on').click();
						});
						break;

					case "toggle":
						this.each(function () {
							var $self = $(this);
							var options = $self.data('social-share-privacy-options');
							$self.find('.'+(options.services[arg].class_name||arg)+' .switch').click();
						});
						break;

					case "option":
						if (arguments.length > 2) {
							var value = {};
							value[arg] = arguments[2];
							this.each(function () {
								$.extend(true, $(this).data('social-share-privacy-options'), value);
							});
						}
						else {
							return this.data('social-share-privacy-options')[arg];
						}
						break;

					case "options":
						$.extend(true, options, arg);
						break;

					case "enabled":
						var options = this.data('social-share-privacy-options');
						return this.find('.'+(options.services[arg].class_name||arg)+' .switch').hasClass('on');

					case "disabled":
						var options = this.data('social-share-privacy-options');
						return this.find('.'+(options.services[arg].class_name||arg)+' .switch').hasClass('off');

					default:
						throw new Error("socialSharePrivacy: unknown command: "+command);
				}
			}
			return this;
		}

		return this.each(function () {
			// parse options passed via data-* attributes:
			var data = {};
			if (this.lang) data.language = this.lang;
			for (var i = 0, attrs = this.attributes; i < attrs.length; ++ i) {
				var attr = attrs[i];
				if (/^data-./.test(attr.name)) {
					var path = attr.name.slice(5).replace(/-/g,"_").split(".");
					var ctx = data, j = 0;
					for (; j < path.length-1; ++ j) {
						var name = path[j];
						if (name in ctx) {
							ctx = ctx[name];
							if (typeof ctx === "string") {
								ctx = (new Function("$", "return ("+ctx+");")).call(this, $);
							}
						}
						else {
							ctx = ctx[name] = {};
						}
					}
					var name = path[j];
					if (typeof ctx[name] === "object") {
						ctx[name] = $.extend(true, (new Function("$", "return ("+attr.value+");")).call(this, $), ctx[name]);
					}
					else {
						ctx[name] = attr.value;
					}
				}
			}
			// parse global option values:
			if ('cookie_expires'   in data) data.cookie_expires  = Number(data.cookie_expires);
			if ('perma_option'     in data) data.perma_option    = $.trim(data.perma_option).toLowerCase()    === "true";
			if ('ignore_fragment'  in data) data.ignore_fragment = $.trim(data.ignore_fragment).toLowerCase() === "true";
			if ('set_perma_option' in data) {
				data.set_perma_option = new Function("service_name", "options", data.set_perma_option);
			}
			if ('del_perma_option' in data) {
				data.del_perma_option = new Function("service_name", "options", data.del_perma_option);
			}
			if ('get_perma_option' in data) {
				data.get_perma_option = new Function("service_name", "options", data.get_perma_option);
			}
			if ('get_perma_options' in data) {
				data.get_perma_options = new Function("options", data.get_perma_options);
			}
			if ('order' in data) {
				data.order = $.trim(data.order);
				if (data.order) {
					data.order = data.order.split(/\s+/g);
				}
				else {
					delete data.order;
				}
			}
			if (typeof data.services === "string") {
				data.services = (new Function("$", "return ("+data.services+");")).call(this, $);
			}
			if ('options' in data) {
				data = $.extend(data, (new Function("$", "return ("+data.options+");")).call(this, $));
				delete data.options;
			}
			if ('services' in data) {
				for (var service_name in data.services) {
					var service = data.services[service_name];
					if (typeof service === "string") {
						data.services[service_name] = (new Function("$", "return ("+service+");")).call(this, $);
					}
					// only values of common options are parsed:
					if (typeof service.status === "string") {
						service.status = $.trim(service.status).toLowerCase() === "true";
					}
					if (typeof service.perma_option === "string") {
						service.perma_option = $.trim(service.perma_option).toLowerCase() === "true";
					}
				}
			}
			// overwrite default values with user settings
			var this_options = $.extend(true,{},socialSharePrivacy.settings,options,data);
			var order = this_options.order || [];

			var dummy_img  = this_options.layout === 'line' ? 'dummy_line_img' : 'dummy_box_img';
			var any_on     = false;
			var any_perm   = false;
			var any_unsafe = false;
			var unordered  = [];
			for (var service_name in this_options.services) {
				var service = this_options.services[service_name];
				if (service.status) {
					any_on = true;
					if ($.inArray(service_name, order) === -1) {
						unordered.push(service_name);
					}
					if (service.privacy !== 'safe') {
						any_unsafe = true;
						if (service.perma_option) {
							any_perm = true;
						}
					}
				}
				if (!('language' in service)) {
					service.language = this_options.language;
				}
				if (!('path_prefix' in service)) {
					service.path_prefix = this_options.path_prefix;
				}
				if (!('referrer_track' in service)) {
					service.referrer_track = '';
				}
			}
			unordered.sort();
			order = order.concat(unordered);

			// check if at least one service is activated
			if (!any_on) {
				return;
			}

			// insert stylesheet into document and prepend target element
			if (this_options.css_path) {
				var css_path = '/' + (this_options.path_prefix||"") + this_options.css_path;
				// IE fix (needed for IE < 9 - but done for all IE versions)
				if (document.createStyleSheet) {
					document.createStyleSheet(css_path);
				} else if ($('link[href="'+css_path+'"]').length === 0) {
					$('<link/>',{rel:'stylesheet',type:'text/css',href:css_path}).appendTo(document.head);
				}
			}

			// get stored perma options
			var permas;
			if (this_options.perma_option && any_perm) {
				if (this_options.get_perma_options) {
					permas = this_options.get_perma_options(this_options);
				}
				else {
					permas = {};
					for (var service_name in this_options.services) {
						permas[service_name] = this_options.get_perma_option(service_name, this_options);
					}
				}
			}

			// canonical uri that will be shared
			var uri = this_options.uri;
			if (typeof uri === 'function') {
				uri = uri.call(this, this_options);
			}

			var $context = $('<ul class="social_share_privacy_area"></ul>').addClass(this_options.layout);
			var $share = $(this);

			$share.prepend($context).data('social-share-privacy-options',this_options);

			for (var i = 0; i < order.length; ++ i) {
				var service_name = order[i];
				var service = this_options.services[service_name];

				if (service && service.status) {
					var class_name = service.class_name || service_name;
					var button_class = service.button_class || service_name;
					var $help_info;

					if (service.privacy === 'safe') {
						$help_info = $('<li class="help_info"><div class="info">' +
							service.txt_info + '</div><div class="dummy_btn"></div></li>').addClass(class_name);
						$help_info.find('.dummy_btn').
							addClass(button_class).
							append(service.button.call(this,service,uri,this_options));
					}
					else {
						$help_info = $('<li class="help_info"><div class="info">' +
							service.txt_info + '</div><button class="switch off basic">' + (service.txt_off||'\u00a0') +
							'</button><div class="dummy_btn"></div></li>').addClass(class_name);
						$help_info.find('.dummy_btn').
							addClass(button_class).
							append($('<img/>').addClass(button_class+'_privacy_dummy privacy_dummy').
								attr({
									alt: service.dummy_alt,
									src: '/' + service.path_prefix + service[dummy_img]
								}));
					
						$help_info.find('.dummy_btn img.privacy_dummy, button.switch').click(
							buttonClickHandler(service_name));
					}
					$context.append($help_info);
				}
			}
			
			//
			// append Info/Settings-area
			//
			if (any_unsafe) {
				var $settings_info = $('<li class="settings_info"><div class="settings_info_menu off perma_option_off"><a>' +
					'<span class="help_info icon"><span class="info">' + this_options.txt_help + '</span></span></a></div></li>');
				var $info_link = $settings_info.find('> .settings_info_menu > a').attr('href', this_options.info_link);
				if (this_options.info_link_target) {
					$info_link.attr("target",this_options.info_link_target);
				}
				$context.append($settings_info);

				$context.find('.help_info').on('mouseenter', enterHelpInfo).on('mouseleave', leaveHelpInfo);

				// menu for permanently enabling of service buttons
				if (this_options.perma_option && any_perm) {

					// define container
					var $container_settings_info = $context.find('li.settings_info');

					// remove class that fomrats the i-icon, because perma-options are shown
					var $settings_info_menu = $container_settings_info.find('.settings_info_menu');
					$settings_info_menu.removeClass('perma_option_off');

					// append perma-options-icon (.settings) and form (hidden)
					$settings_info_menu.append(
						'<span class="settings">' + this_options.txt_settings + '</span><form><fieldset><legend>' +
						this_options.settings_perma + '</legend></fieldset></form>');

					// write services with <input> and <label> and checked state from cookie
					var $fieldset = $settings_info_menu.find('form fieldset');
					for (var i = 0; i < order.length; ++ i) {
						var service_name = order[i];
						var service = this_options.services[service_name];

						if (service && service.status && service.perma_option && service.privacy !== 'safe') {
							var class_name = service.class_name || service_name;
							var perma = permas[service_name];
							var $field = $('<label><input type="checkbox"' + (perma ? ' checked="checked"/>' : '/>') +
								service.display_name + '</label>');
							$field.find('input').attr('data-service', service_name);
							$fieldset.append($field);

							// enable services when cookie set and refresh cookie
							if (perma) {
								$context.find('li.'+class_name+' button.switch').click();
								this_options.set_perma_option(service_name, this_options);
							}
						}
					}

					// indicate clickable setings gear
					$container_settings_info.find('span.settings').css('cursor', 'pointer');

					// show settings menu on hover
					$container_settings_info.on('mouseenter', enterSettingsInfo).on('mouseleave', leaveSettingsInfo);

					// interaction for <input> to enable services permanently
					$container_settings_info.find('fieldset input').on('change', permCheckChangeHandler);
				}
			}
			$share.trigger({type: 'socialshareprivacy:create', options: this_options});
		});
	};

	// expose helper functions:
	socialSharePrivacy.absurl     = absurl;
	socialSharePrivacy.escapeHtml = escapeHtml;
	socialSharePrivacy.getTitle   = getTitle;
	socialSharePrivacy.getImage   = getImage;
	socialSharePrivacy.getEmbed   = getEmbed;
	socialSharePrivacy.getDescription = getDescription;
	socialSharePrivacy.abbreviateText = abbreviateText;
	socialSharePrivacy.formatNumber   = formatNumber;

	socialSharePrivacy.settings = {
		'services'          : {},
		'info_link'         : 'http://panzi.github.io/SocialSharePrivacy/',
		'info_link_target'  : '',
		'txt_settings'      : 'Settings',
		'txt_help'          : 'If you activate these fields via click, data will be sent to a third party (Facebook, X, Google, ...) and stored there. For more details click <em>i</em>-icon (#0837).',
		'settings_perma'    : 'Permanently enable share buttons:',
		'layout'            : 'line', // possible values: 'line' (~120x20) or 'box' (~58x62)
		'set_perma_option'  : setPermaOption,
		'del_perma_option'  : delPermaOption,
		'get_perma_options' : getPermaOptions,
		'get_perma_option'  : getPermaOption,
		'perma_option'      : !!$.cookie,
		'cookie_path'       : '/',
		'cookie_domain'     : document.location.hostname,
		'cookie_expires'    : 365,
		'path_prefix'       : '',
		'css_path'          : "stylesheets/socialshareprivacy.css",
		'uri'               : getURI,
		'language'          : 'en',
		'ignore_fragment'   : true
	};

	$.fn.socialSharePrivacy = socialSharePrivacy;
}(jQuery));

jQuery.extend(jQuery.fn.socialSharePrivacy.settings, {
	'info_link'         : 'http://panzi.github.io/SocialSharePrivacy/index.de.html',
	'txt_settings'      : 'Einstellungen',
	'settings_perma'    : 'Dauerhaft aktivieren und Daten&uuml;ber&shy;tragung zustimmen:',
	'language'          : 'de'
});
var twittertimeline = {
	'status'            : true,
	'button_class'      : 'twittertimeline',
	'dummy_line_img'    : 'images/twitter_timeline.png',
	'dummy_box_img'     : 'images/dummy_box_twitter.png',
	'perma_option'      : true,
	'display_name'      : 'Xtimeline',
	'referrer_track'    : '',
	'via'               : '',
	'related'           : '',
	'hashtags'          : '',
	'id'				: '',
	'dnt'               : true,
	'text'              : $.fn.socialSharePrivacy.getTitle,
	'button'            : function (options, uri, settings) {
		var text = typeof(options.text) === 'function' ?
			options.text.call(this, options, uri, settings) :
			String(options.text);
		// 120 is the max character count left after twitters automatic
		// url shortening with t.co
		text = $.fn.socialSharePrivacy.abbreviateText(text, 120);

		var code,
			params = {
			url     : uri + options.referrer_track,
			counturl: uri,
			text    : text,
			count   : settings.layout === 'line' ? 'horizontal' : 'vertical',
			lang    : options.language
		};
		//if (options.via)      params.via      = options.via;
		//if (options.related)  params.related  = options.related;
		//if (options.hashtags) params.hashtags = options.hashtags;
		//if (options.dnt)      params.dnt      = options.dnt;
		// width="450" height="600"
		code = $('<a class="twitter-timeline" href="https://twitter.com/'+options.referrer_track+'?ref_src=twsrc%5Etfw"></a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs"); if (typeof twttr !== \'undefined\'){ twttr.widgets.load(); }; </script>');
		return code;
/**/
	}
},
twitter = {
	'status'            : true,
	'button_class'      : 'tweet',
	'dummy_line_img'    : 'images/dummy_twitter.png',
	'dummy_box_img'     : 'images/dummy_box_twitter.png',
	'dummy_alt'         : '"Tweet this"-Dummy',
	'txt_info' : 'Zwei Klicks f&uuml;r mehr Datenschutz: Erst wenn Sie hier klicken, wird der Button aktiv und Sie k&ouml;nnen Ihre Empfehlung an X senden. Schon beim Aktivieren werden Daten an Dritte &uuml;bertragen &ndash; siehe <em>i</em>.',
	'txt_off'  : 'nicht mit X verbunden',
	'txt_on'   : 'mit X verbunden',
	'perma_option'      : true,
	'display_name'      : 'X',
	'referrer_track'    : '',
	'via'               : '',
	'related'           : '',
	'hashtags'          : '',
	'dnt'               : true,
	'text'              : $.fn.socialSharePrivacy.getTitle,
	'button'            : function (options, uri, settings) {
		var text = typeof(options.text) === 'function' ?
			options.text.call(this, options, uri, settings) :
			String(options.text);
		// 120 is the max character count left after twitters automatic
		// url shortening with t.co
		text = $.fn.socialSharePrivacy.abbreviateText(text, 120);

		var params = {
			url     : encodeURI(options.referrer_track),
			counturl: uri,
			text    : text,
			count   : settings.layout === 'line' ? 'horizontal' : 'vertical',
			lang    : options.language
		};
		if (options.via)      params.via      = options.via;
		if (options.related)  params.related  = options.related;
		if (options.hashtags) params.hashtags = options.hashtags;
		if (options.dnt)      params.dnt      = options.dnt;

		return $('<iframe allowtransparency="true" frameborder="0" scrolling="no"></iframe>').attr(
			'src', 'https://platform.twitter.com/widgets/tweet_button.html?' +
			$.param(params).replace(/\+/g,'%20'));
		//return '<a class="twitter-timeline" href="https://twitter.com/Duesseldorf?ref_src=twsrc%5Etfw">Tweets by Duesseldorf</a>\n' +
		//	'    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"><'+'/script>';

	}
},
facebook = {
	'status'            : true,
	'button_class'      : 'fb_like',
	'dummy_alt'         : 'Facebook "Like"-Dummy',
	'dummy_line_img' : 'images/de/dummy_facebook.png',
	'dummy_box_img'  : 'images/de/dummy_box_facebook.png',
	'txt_info'       : 'Zwei Klicks f&uuml;r mehr Datenschutz: Erst wenn Sie hier klicken, wird der Button aktiv und Sie k&ouml;nnen Ihre Empfehlung an Facebook senden. Schon beim Aktivieren werden Daten an Dritte &uuml;bertragen &ndash; siehe <em>i</em>.',
	'txt_off'  : '<img src="typo3conf/ext/site_duesseldorf/Resources/Public/Images/slide-play.png" alt="nicht mit Facebook verbunden">',
	'txt_on'   : '<img src="typo3conf/ext/site_duesseldorf/Resources/Public/Images/slide-stop.png" alt="mit Facebook verbunden">',
	'perma_option'      : true,
	'display_name'      : 'Facebook Like/Recommend',
	'referrer_track'    : '',
	'action'            : 'like',
	'colorscheme'       : 'light',
	'font'              : '',
	'button'            : function (options, uri, settings) {
		// ensure a locale that is supported by facebook
		// otherwise facebook renders nothing
		var match = /^([a-z]{2})_([A-Z]{2})$/.exec(options.language);
		var locale = "en_US";

		if (match) {
			if (match[1] in locales) {
				var subs = locales[match[1]];
				if ($.inArray(match[2], subs) !== -1) {
					locale = options.language;
				}
				else {
					locale = match[1]+"_"+subs[0];
				}
			}
		}
		else if (options.language in locales) {
			locale = options.language+"_"+locales[options.language][0];
		}

		var params = {
			locale     : locale,
			href       : uri + options.referrer_track,
			send       : 'false',
			show_faces : 'false',
			action     : options.action,
			colorscheme: options.colorscheme
		};
		if (options.font) params.font = options.font;

		if (settings.layout === 'line') {
			params.width  = '120';
			params.height = '20';
			params.layout = 'button_count';
		}
		else {
			params.width  = '62';
			params.height = '61';
			params.layout = 'box_count';
		}
		return $('<iframe scrolling="no" frameborder="0" allowtransparency="true"></iframe>').attr(
			'src', 'https://www.facebook.com/plugins/like.php?'+$.param(params));
	}
},
FBtimeline = {
	'status'            : true,
	'button_class'      : 'facebooktimeline',
	'dummy_line_img'    : 'images/fb_timeline.png',
	'dummy_box_img'     : 'images/dummy_box_twitter.png',
	'perma_option'      : true,
	'display_name'      : 'Facebooktimeline',
	'referrer_track'    : '',
	'via'               : '',
	'related'           : '',
	'hashtags'          : '',
	'id'				: '',
	'dnt'               : true,
	'text'              : $.fn.socialSharePrivacy.getTitle,
	'button'            : function (options, uri, settings) {
		var text = typeof(options.text) === 'function' ?
				options.text.call(this, options, uri, settings) :
				String(options.text);
		// 120 is the max character count left after twitters automatic
		// url shortening with t.co
		text = $.fn.socialSharePrivacy.abbreviateText(text, 120);

		var code,
				params = {
					url     : encodeURI(options.referrer_track),
					text    : text,
					count   : settings.layout === 'line' ? 'horizontal' : 'vertical',
					lang    : options.language
				};
		//if (options.via)      params.via      = options.via;
		//if (options.related)  params.related  = options.related;
		//if (options.hashtags) params.hashtags = options.hashtags;
		//if (options.dnt)      params.dnt      = options.dnt;
		//width="450" height="550"
		//&amp;width=460&amp;height=600
		var frameWidth =  window.innerWidth < 767 ? '310px' : '510px',

		code = $('<iframe frameborder="0" allowtransparency="true" src="https://www.facebook.com/plugins/likebox.php?locale=de_DE&amp;href=https%3A%2F%2Fwww.facebook.com%2F' + options.referrer_track +'&amp;header=true&amp;stream=true&amp;showBorder=true&amp;show_faces=true&amp;width='+frameWidth+'" width="100%" height=""></iframe>');
		return code;
		/**/
	}
},
INtimeline = {
	'status'            : true,
	'button_class'      : 'instagramimages',
	'dummy_line_img'    : 'images/in_timeline.png',
	'dummy_box_img'     : 'images/dummy_box_twitter.png',
	'perma_option'      : true,
	'display_name'      : 'Instagram',
	'referrer_track'    : '',
	'via'               : '',
	'related'           : '',
	'hashtags'          : '',
	'id'				: '',
	'dnt'               : true,
	'text'              : $.fn.socialSharePrivacy.getTitle,
	'button'            : function (options, uri, settings) {
        var text = typeof(options.text) === 'function' ?
                options.text.call(this, options, uri, settings) :
                String(options.text);
        // 120 is the max character count left after twitters automatic
        // url shortening with t.co
        code = $('<iframe frameborder="0" allowtransparency="true" src="'+options.ajaxUrl+'"></iframe>');
        // code = $('<iframe frameborder="0" allowtransparency="true" src="https://www.instagram.com/duesseldorf/"></iframe>');
        return code;
	}
};


/**
 * bxSlider v4.2.17
 * Copyright 2013-2017 Steven Wanderski
 * Written while drinking Belgian ales and listening to jazz
 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */

;(function($) {

    var defaults = {

        // GENERAL
        mode: 'horizontal',
        slideSelector: '',
        infiniteLoop: true,
        hideControlOnEnd: false,
        speed: 500,
        easing: null,
        slideMargin: 0,
        startSlide: 0,
        randomStart: false,
        captions: false,
        ticker: false,
        tickerHover: false,
        adaptiveHeight: false,
        adaptiveHeightSpeed: 500,
        video: false,
        useCSS: true,
        preloadImages: 'visible',
        responsive: true,
        slideZIndex: 50,
        wrapperClass: 'bx-wrapper',

        // TOUCH
        touchEnabled: true,
        swipeThreshold: 50,
        oneToOneTouch: true,
        preventDefaultSwipeX: true,
        preventDefaultSwipeY: false,

        // ACCESSIBILITY
        ariaLive: true,
        ariaHidden: true,

        // KEYBOARD
        keyboardEnabled: false,

        // PAGER
        pager: true,
        pagerType: 'full',
        pagerShortSeparator: ' / ',
        pagerSelector: null,
        buildPager: null,
        pagerCustom: null,

        // CONTROLS
        controls: true,
        nextText: 'Next',
        prevText: 'Prev',
        nextSelector: null,
        prevSelector: null,
        autoControls: false,
        startText: 'Start',
        stopText: 'Stop',
        autoControlsCombine: false,
        autoControlsSelector: null,

        // AUTO
        auto: false,
        pause: 4000,
        autoStart: true,
        autoDirection: 'next',
        stopAutoOnClick: false,
        autoHover: false,
        autoDelay: 0,
        autoSlideForOnePage: false,

        // CAROUSEL
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 0,
        slideWidth: 0,
        shrinkItems: false,

        // CALLBACKS
        onSliderLoad: function() { return true; },
        onSlideBefore: function() { return true; },
        onSlideAfter: function() { return true; },
        onSlideNext: function() { return true; },
        onSlidePrev: function() { return true; },
        onSliderResize: function() { return true; },
        onAutoChange: function() { return true; } //calls when auto slides starts and stops
    };

    $.fn.bxSlider = function(options) {

        if (this.length === 0) {
            return this;
        }

        // support multiple elements
        if (this.length > 1) {
            this.each(function() {
                $(this).bxSlider(options);
            });
            return this;
        }

        // create a namespace to be used throughout the plugin
        var slider = {},
            // set a reference to our slider element
            el = this,
            // get the original window dimens (thanks a lot IE)
            windowWidth = $(window).width(),
            windowHeight = $(window).height();

        // Return if slider is already initialized
        if ($(el).data('bxSlider')) { return; }

        /**
         * ===================================================================================
         * = PRIVATE FUNCTIONS
         * ===================================================================================
         */

        /**
         * Initializes namespace settings to be used throughout plugin
         */
        var init = function() {
            // Return if slider is already initialized
            if ($(el).data('bxSlider')) { return; }
            // merge user-supplied options with the defaults
            slider.settings = $.extend({}, defaults, options);
            // parse slideWidth setting
            slider.settings.slideWidth = parseInt(slider.settings.slideWidth);
            // store the original children
            slider.children = el.children(slider.settings.slideSelector);
            // check if actual number of slides is less than minSlides / maxSlides
            if (slider.children.length < slider.settings.minSlides) { slider.settings.minSlides = slider.children.length; }
            if (slider.children.length < slider.settings.maxSlides) { slider.settings.maxSlides = slider.children.length; }
            // if random start, set the startSlide setting to random number
            if (slider.settings.randomStart) { slider.settings.startSlide = Math.floor(Math.random() * slider.children.length); }
            // store active slide information
            slider.active = { index: slider.settings.startSlide };
            // store if the slider is in carousel mode (displaying / moving multiple slides)
            slider.carousel = slider.settings.minSlides > 1 || slider.settings.maxSlides > 1;
            // if carousel, force preloadImages = 'all'
            if (slider.carousel) { slider.settings.preloadImages = 'all'; }
            // calculate the min / max width thresholds based on min / max number of slides
            // used to setup and update carousel slides dimensions
            slider.minThreshold = (slider.settings.minSlides * slider.settings.slideWidth) + ((slider.settings.minSlides - 1) * slider.settings.slideMargin);
            slider.maxThreshold = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
            // store the current state of the slider (if currently animating, working is true)
            slider.working = false;
            // initialize the controls object
            slider.controls = {};
            // initialize an auto interval
            slider.interval = null;
            // determine which property to use for transitions
            slider.animProp = slider.settings.mode === 'vertical' ? 'top' : 'left';
            // determine if hardware acceleration can be used
            slider.usingCSS = slider.settings.useCSS && slider.settings.mode !== 'fade' && (function() {
                // create our test div element
                var div = document.createElement('div'),
                    // css transition properties
                    props = ['WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
                // test for each property
                for (var i = 0; i < props.length; i++) {
                    if (div.style[props[i]] !== undefined) {
                        slider.cssPrefix = props[i].replace('Perspective', '').toLowerCase();
                        slider.animProp = '-' + slider.cssPrefix + '-transform';
                        return true;
                    }
                }
                return false;
            }());
            // if vertical mode always make maxSlides and minSlides equal
            if (slider.settings.mode === 'vertical') { slider.settings.maxSlides = slider.settings.minSlides; }
            // save original style data
            el.data('origStyle', el.attr('style'));
            el.children(slider.settings.slideSelector).each(function() {
                $(this).data('origStyle', $(this).attr('style'));
            });

            // perform all DOM / CSS modifications
            setup();
        };

        /**
         * Performs all DOM and CSS modifications
         */
        var setup = function() {
            var preloadSelector = slider.children.eq(slider.settings.startSlide); // set the default preload selector (visible)

            // wrap el in a wrapper
            el.wrap('<div class="' + slider.settings.wrapperClass + '"><div class="bx-viewport"></div></div>');
            // store a namespace reference to .bx-viewport
            slider.viewport = el.parent();

            // add aria-live if the setting is enabled and ticker mode is disabled
            if (slider.settings.ariaLive && !slider.settings.ticker) {
                slider.viewport.attr('aria-live', 'polite');
            }
            // add a loading div to display while images are loading
            slider.loader = $('<div class="bx-loading" />');
            slider.viewport.prepend(slider.loader);
            // set el to a massive width, to hold any needed slides
            // also strip any margin and padding from el
            el.css({
                width: slider.settings.mode === 'horizontal' ? (slider.children.length * 1000 + 215) + '%' : 'auto',
                position: 'relative'
            });
            // if using CSS, add the easing property
            if (slider.usingCSS && slider.settings.easing) {
                el.css('-' + slider.cssPrefix + '-transition-timing-function', slider.settings.easing);
                // if not using CSS and no easing value was supplied, use the default JS animation easing (swing)
            } else if (!slider.settings.easing) {
                slider.settings.easing = 'swing';
            }
            // make modifications to the viewport (.bx-viewport)
            slider.viewport.css({
                width: '100%',
                overflow: 'hidden',
                position: 'relative'
            });
            slider.viewport.parent().css({
                maxWidth: getViewportMaxWidth()
            });
            // apply css to all slider children
            slider.children.css({
                // the float attribute is a reserved word in compressors like YUI compressor and need to be quoted #48
                'float': slider.settings.mode === 'horizontal' ? 'left' : 'none',
                listStyle: 'none',
                position: 'relative'
            });
            // apply the calculated width after the float is applied to prevent scrollbar interference
            slider.children.css('width', getSlideWidth());
            // if slideMargin is supplied, add the css
            if (slider.settings.mode === 'horizontal' && slider.settings.slideMargin > 0) { slider.children.css('marginRight', slider.settings.slideMargin); }
            if (slider.settings.mode === 'vertical' && slider.settings.slideMargin > 0) { slider.children.css('marginBottom', slider.settings.slideMargin); }
            // if "fade" mode, add positioning and z-index CSS
            if (slider.settings.mode === 'fade') {
                slider.children.css({
                    position: 'absolute',
                    zIndex: 0,
                    display: 'none'
                });
                // prepare the z-index on the showing element
                slider.children.eq(slider.settings.startSlide).css({zIndex: slider.settings.slideZIndex, display: 'block'});
            }
            // create an element to contain all slider controls (pager, start / stop, etc)
            slider.controls.el = $('<div class="bx-controls" />');
            // if captions are requested, add them
            if (slider.settings.captions) { appendCaptions(); }
            // check if startSlide is last slide
            slider.active.last = slider.settings.startSlide === getPagerQty() - 1;
            // if video is true, set up the fitVids plugin
            if (slider.settings.video) { el.fitVids(); }
            //preloadImages
            if (slider.settings.preloadImages === 'none') {
                preloadSelector = null;
            }
            else if (slider.settings.preloadImages === 'all' || slider.settings.ticker) {
                preloadSelector = slider.children;
            }
            // only check for control addition if not in "ticker" mode
            if (!slider.settings.ticker) {
                // if controls are requested, add them
                if (slider.settings.controls) { appendControls(); }
                // if auto is true, and auto controls are requested, add them
                if (slider.settings.auto && slider.settings.autoControls) { appendControlsAuto(); }
                // if pager is requested, add it
                if (slider.settings.pager) { appendPager(); }
                // if any control option is requested, add the controls wrapper
                if (slider.settings.controls || slider.settings.autoControls || slider.settings.pager) { slider.viewport.after(slider.controls.el); }
                // if ticker mode, do not allow a pager
            } else {
                slider.settings.pager = false;
            }
            if (preloadSelector === null) {
                start();
            } else {
                loadElements(preloadSelector, start);
            }
        };

        var loadElements = function(selector, callback) {
            var total = selector.find('img:not([src=""]), iframe').length,
                count = 0;
            if (total === 0) {
                callback();
                return;
            }
            selector.find('img:not([src=""]), iframe').each(function() {
                $(this).one('load error', function() {
                    if (++count === total) { callback(); }
                }).each(function() {
                    if (this.complete || this.src == '') { $(this).trigger('load'); }
                });
            });
        };

        /**
         * Start the slider
         */
        var start = function() {
            // if infinite loop, prepare additional slides
            if (slider.settings.infiniteLoop && slider.settings.mode !== 'fade' && !slider.settings.ticker) {
                var slice    = slider.settings.mode === 'vertical' ? slider.settings.minSlides : slider.settings.maxSlides,
                    sliceAppend  = slider.children.slice(0, slice).clone(true).addClass('bx-clone'),
                    slicePrepend = slider.children.slice(-slice).clone(true).addClass('bx-clone');
                if (slider.settings.ariaHidden) {
                    sliceAppend.attr('aria-hidden', true);
                    slicePrepend.attr('aria-hidden', true);
                }
                el.append(sliceAppend).prepend(slicePrepend);
            }
            // remove the loading DOM element
            slider.loader.remove();
            // set the left / top position of "el"
            setSlidePosition();
            // if "vertical" mode, always use adaptiveHeight to prevent odd behavior
            if (slider.settings.mode === 'vertical') { slider.settings.adaptiveHeight = true; }
            // set the viewport height
            slider.viewport.height(getViewportHeight());
            // make sure everything is positioned just right (same as a window resize)
            el.redrawSlider();
            // onSliderLoad callback
            slider.settings.onSliderLoad.call(el, slider.active.index);
            // slider has been fully initialized
            slider.initialized = true;
            // add the resize call to the window
            if (slider.settings.responsive) { $(window).on('resize', resizeWindow); }
            // if auto is true and has more than 1 page, start the show
            if (slider.settings.auto && slider.settings.autoStart && (getPagerQty() > 1 || slider.settings.autoSlideForOnePage)) { initAuto(); }
            // if ticker is true, start the ticker
            if (slider.settings.ticker) { initTicker(); }
            // if pager is requested, make the appropriate pager link active
            if (slider.settings.pager) { updatePagerActive(slider.settings.startSlide); }
            // check for any updates to the controls (like hideControlOnEnd updates)
            if (slider.settings.controls) { updateDirectionControls(); }
            // if touchEnabled is true, setup the touch events
            if (slider.settings.touchEnabled && !slider.settings.ticker) { initTouch(); }
            // if keyboardEnabled is true, setup the keyboard events
            if (slider.settings.keyboardEnabled && !slider.settings.ticker) {
                $(document).keydown(keyPress);
            }
        };

        /**
         * Returns the calculated height of the viewport, used to determine either adaptiveHeight or the maxHeight value
         */
        var getViewportHeight = function() {
            var height = 0;
            // first determine which children (slides) should be used in our height calculation
            var children = $();
            // if mode is not "vertical" and adaptiveHeight is false, include all children
            if (slider.settings.mode !== 'vertical' && !slider.settings.adaptiveHeight) {
                children = slider.children;
            } else {
                // if not carousel, return the single active child
                if (!slider.carousel) {
                    children = slider.children.eq(slider.active.index);
                    // if carousel, return a slice of children
                } else {
                    // get the individual slide index
                    var currentIndex = slider.settings.moveSlides === 1 ? slider.active.index : slider.active.index * getMoveBy();
                    // add the current slide to the children
                    children = slider.children.eq(currentIndex);
                    // cycle through the remaining "showing" slides
                    for (i = 1; i <= slider.settings.maxSlides - 1; i++) {
                        // if looped back to the start
                        if (currentIndex + i >= slider.children.length) {
                            children = children.add(slider.children.eq(i - 1));
                        } else {
                            children = children.add(slider.children.eq(currentIndex + i));
                        }
                    }
                }
            }
            // if "vertical" mode, calculate the sum of the heights of the children
            if (slider.settings.mode === 'vertical') {
                children.each(function(index) {
                    height += $(this).outerHeight();
                });
                // add user-supplied margins
                if (slider.settings.slideMargin > 0) {
                    height += slider.settings.slideMargin * (slider.settings.minSlides - 1);
                }
                // if not "vertical" mode, calculate the max height of the children
            } else {
                height = Math.max.apply(Math, children.map(function() {
                    return $(this).outerHeight(false);
                }).get());
            }

            if (slider.viewport.css('box-sizing') === 'border-box') {
                height += parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom')) +
                    parseFloat(slider.viewport.css('border-top-width')) + parseFloat(slider.viewport.css('border-bottom-width'));
            } else if (slider.viewport.css('box-sizing') === 'padding-box') {
                height += parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom'));
            }

            return height;
        };

        /**
         * Returns the calculated width to be used for the outer wrapper / viewport
         */
        var getViewportMaxWidth = function() {
            var width = '100%';
            if (slider.settings.slideWidth > 0) {
                if (slider.settings.mode === 'horizontal') {
                    width = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
                } else {
                    width = slider.settings.slideWidth;
                }
            }
            return width;
        };

        /**
         * Returns the calculated width to be applied to each slide
         */
        var getSlideWidth = function() {
            var newElWidth = slider.settings.slideWidth, // start with any user-supplied slide width
                wrapWidth      = slider.viewport.width();    // get the current viewport width
            // if slide width was not supplied, or is larger than the viewport use the viewport width
            if (slider.settings.slideWidth === 0 ||
                (slider.settings.slideWidth > wrapWidth && !slider.carousel) ||
                slider.settings.mode === 'vertical') {
                newElWidth = wrapWidth;
                // if carousel, use the thresholds to determine the width
            } else if (slider.settings.maxSlides > 1 && slider.settings.mode === 'horizontal') {
                if (wrapWidth > slider.maxThreshold) {
                    return newElWidth;
                } else if (wrapWidth < slider.minThreshold) {
                    newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.minSlides - 1))) / slider.settings.minSlides;
                } else if (slider.settings.shrinkItems) {
                    newElWidth = Math.floor((wrapWidth + slider.settings.slideMargin) / (Math.ceil((wrapWidth + slider.settings.slideMargin) / (newElWidth + slider.settings.slideMargin))) - slider.settings.slideMargin);
                }
            }
            return newElWidth;
        };

        /**
         * Returns the number of slides currently visible in the viewport (includes partially visible slides)
         */
        var getNumberSlidesShowing = function() {
            var slidesShowing = 1,
                childWidth = null;
            if (slider.settings.mode === 'horizontal' && slider.settings.slideWidth > 0) {
                // if viewport is smaller than minThreshold, return minSlides
                if (slider.viewport.width() < slider.minThreshold) {
                    slidesShowing = slider.settings.minSlides;
                    // if viewport is larger than maxThreshold, return maxSlides
                } else if (slider.viewport.width() > slider.maxThreshold) {
                    slidesShowing = slider.settings.maxSlides;
                    // if viewport is between min / max thresholds, divide viewport width by first child width
                } else {
                    childWidth = slider.children.first().width() + slider.settings.slideMargin;
                    slidesShowing = Math.floor((slider.viewport.width() +
                        slider.settings.slideMargin) / childWidth) || 1;
                }
                // if "vertical" mode, slides showing will always be minSlides
            } else if (slider.settings.mode === 'vertical') {
                slidesShowing = slider.settings.minSlides;
            }
            return slidesShowing;
        };

        /**
         * Returns the number of pages (one full viewport of slides is one "page")
         */
        var getPagerQty = function() {
            var pagerQty = 0,
                breakPoint = 0,
                counter = 0;
            // if moveSlides is specified by the user
            if (slider.settings.moveSlides > 0) {
                if (slider.settings.infiniteLoop) {
                    pagerQty = Math.ceil(slider.children.length / getMoveBy());
                } else {
                    // when breakpoint goes above children length, counter is the number of pages
                    while (breakPoint < slider.children.length) {
                        ++pagerQty;
                        breakPoint = counter + getNumberSlidesShowing();
                        counter += slider.settings.moveSlides <= getNumberSlidesShowing() ? slider.settings.moveSlides : getNumberSlidesShowing();
                    }
                    return counter;
                }
                // if moveSlides is 0 (auto) divide children length by sides showing, then round up
            } else {
                pagerQty = Math.ceil(slider.children.length / getNumberSlidesShowing());
            }
            return pagerQty;
        };

        /**
         * Returns the number of individual slides by which to shift the slider
         */
        var getMoveBy = function() {
            // if moveSlides was set by the user and moveSlides is less than number of slides showing
            if (slider.settings.moveSlides > 0 && slider.settings.moveSlides <= getNumberSlidesShowing()) {
                return slider.settings.moveSlides;
            }
            // if moveSlides is 0 (auto)
            return getNumberSlidesShowing();
        };

        /**
         * Sets the slider's (el) left or top position
         */
        var setSlidePosition = function() {
            var position, lastChild, lastShowingIndex;
            // if last slide, not infinite loop, and number of children is larger than specified maxSlides
            if (slider.children.length > slider.settings.maxSlides && slider.active.last && !slider.settings.infiniteLoop) {
                if (slider.settings.mode === 'horizontal') {
                    // get the last child's position
                    lastChild = slider.children.last();
                    position = lastChild.position();
                    // set the left position
                    setPositionProperty(-(position.left - (slider.viewport.width() - lastChild.outerWidth())), 'reset', 0);
                } else if (slider.settings.mode === 'vertical') {
                    // get the last showing index's position
                    lastShowingIndex = slider.children.length - slider.settings.minSlides;
                    position = slider.children.eq(lastShowingIndex).position();
                    // set the top position
                    setPositionProperty(-position.top, 'reset', 0);
                }
                // if not last slide
            } else {
                // get the position of the first showing slide
                position = slider.children.eq(slider.active.index * getMoveBy()).position();
                // check for last slide
                if (slider.active.index === getPagerQty() - 1) { slider.active.last = true; }
                // set the respective position
                if (position !== undefined) {
                    if (slider.settings.mode === 'horizontal') { setPositionProperty(-position.left, 'reset', 0); }
                    else if (slider.settings.mode === 'vertical') { setPositionProperty(-position.top, 'reset', 0); }
                }
            }
        };

        /**
         * Sets the el's animating property position (which in turn will sometimes animate el).
         * If using CSS, sets the transform property. If not using CSS, sets the top / left property.
         *
         * @param value (int)
         *  - the animating property's value
         *
         * @param type (string) 'slide', 'reset', 'ticker'
         *  - the type of instance for which the function is being
         *
         * @param duration (int)
         *  - the amount of time (in ms) the transition should occupy
         *
         * @param params (array) optional
         *  - an optional parameter containing any variables that need to be passed in
         */
        var setPositionProperty = function(value, type, duration, params) {
            var animateObj, propValue;
            // use CSS transform
            if (slider.usingCSS) {
                // determine the translate3d value
                propValue = slider.settings.mode === 'vertical' ? 'translate3d(0, ' + value + 'px, 0)' : 'translate3d(' + value + 'px, 0, 0)';
                // add the CSS transition-duration
                el.css('-' + slider.cssPrefix + '-transition-duration', duration / 1000 + 's');
                if (type === 'slide') {
                    // set the property value
                    el.css(slider.animProp, propValue);
                    if (duration !== 0) {
                        // add a callback method - executes when CSS transition completes
                        el.on('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(e) {
                            //make sure it's the correct one
                            if (!$(e.target).is(el)) { return; }
                            // remove the callback
                            el.off('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
                            updateAfterSlideTransition();
                        });
                    } else { //duration = 0
                        updateAfterSlideTransition();
                    }
                } else if (type === 'reset') {
                    el.css(slider.animProp, propValue);
                } else if (type === 'ticker') {
                    // make the transition use 'linear'
                    el.css('-' + slider.cssPrefix + '-transition-timing-function', 'linear');
                    el.css(slider.animProp, propValue);
                    if (duration !== 0) {
                        el.on('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(e) {
                            //make sure it's the correct one
                            if (!$(e.target).is(el)) { return; }
                            // remove the callback
                            el.off('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
                            // reset the position
                            setPositionProperty(params.resetValue, 'reset', 0);
                            // start the loop again
                            tickerLoop();
                        });
                    } else { //duration = 0
                        setPositionProperty(params.resetValue, 'reset', 0);
                        tickerLoop();
                    }
                }
                // use JS animate
            } else {
                animateObj = {};
                animateObj[slider.animProp] = value;
                if (type === 'slide') {
                    el.animate(animateObj, duration, slider.settings.easing, function() {
                        updateAfterSlideTransition();
                    });
                } else if (type === 'reset') {
                    el.css(slider.animProp, value);
                } else if (type === 'ticker') {
                    el.animate(animateObj, duration, 'linear', function() {
                        setPositionProperty(params.resetValue, 'reset', 0);
                        // run the recursive loop after animation
                        tickerLoop();
                    });
                }
            }
        };

        /**
         * Populates the pager with proper amount of pages
         */
        var populatePager = function() {
            var pagerHtml = '',
                linkContent = '',
                pagerQty = getPagerQty();
            // loop through each pager item
            for (var i = 0; i < pagerQty; i++) {
                linkContent = '';
                // if a buildPager function is supplied, use it to get pager link value, else use index + 1
                if (slider.settings.buildPager && $.isFunction(slider.settings.buildPager) || slider.settings.pagerCustom) {
                    linkContent = slider.settings.buildPager(i);
                    slider.pagerEl.addClass('bx-custom-pager');
                } else {
                    linkContent = i + 1;
                    slider.pagerEl.addClass('bx-default-pager');
                }
                // var linkContent = slider.settings.buildPager && $.isFunction(slider.settings.buildPager) ? slider.settings.buildPager(i) : i + 1;
                // add the markup to the string
                pagerHtml += '<div class="bx-pager-item"><a href="" data-slide-index="' + i + '" class="bx-pager-link">' + linkContent + '</a></div>';
            }
            // populate the pager element with pager links
            slider.pagerEl.html(pagerHtml);
        };

        /**
         * Appends the pager to the controls element
         */
        var appendPager = function() {
            if (!slider.settings.pagerCustom) {
                // create the pager DOM element
                slider.pagerEl = $('<div class="bx-pager" />');
                // if a pager selector was supplied, populate it with the pager
                if (slider.settings.pagerSelector) {
                    $(slider.settings.pagerSelector).html(slider.pagerEl);
                    // if no pager selector was supplied, add it after the wrapper
                } else {
                    slider.controls.el.addClass('bx-has-pager').append(slider.pagerEl);
                }
                // populate the pager
                populatePager();
            } else {
                slider.pagerEl = $(slider.settings.pagerCustom);
            }
            // assign the pager click binding
            slider.pagerEl.on('click touchend', 'a', clickPagerBind);
        };

        /**
         * Appends prev / next controls to the controls element
         */
        var appendControls = function() {
            slider.controls.next = $('<a class="bx-next" href="">' + slider.settings.nextText + '</a>');
            slider.controls.prev = $('<a class="bx-prev" href="">' + slider.settings.prevText + '</a>');
            // add click actions to the controls
            slider.controls.next.on('click touchend', clickNextBind);
            slider.controls.prev.on('click touchend', clickPrevBind);
            // if nextSelector was supplied, populate it
            if (slider.settings.nextSelector) {
                $(slider.settings.nextSelector).append(slider.controls.next);
            }
            // if prevSelector was supplied, populate it
            if (slider.settings.prevSelector) {
                $(slider.settings.prevSelector).append(slider.controls.prev);
            }
            // if no custom selectors were supplied
            if (!slider.settings.nextSelector && !slider.settings.prevSelector) {
                // add the controls to the DOM
                slider.controls.directionEl = $('<div class="bx-controls-direction" />');
                // add the control elements to the directionEl
                slider.controls.directionEl.append(slider.controls.prev).append(slider.controls.next);
                // slider.viewport.append(slider.controls.directionEl);
                slider.controls.el.addClass('bx-has-controls-direction').append(slider.controls.directionEl);
            }
        };

        /**
         * Appends start / stop auto controls to the controls element
         */
        var appendControlsAuto = function() {
            slider.controls.start = $('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + slider.settings.startText + '</a></div>');
            slider.controls.stop = $('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + slider.settings.stopText + '</a></div>');
            // add the controls to the DOM
            slider.controls.autoEl = $('<div class="bx-controls-auto" />');
            // on click actions to the controls
            slider.controls.autoEl.on('click', '.bx-start', clickStartBind);
            slider.controls.autoEl.on('click', '.bx-stop', clickStopBind);
            // if autoControlsCombine, insert only the "start" control
            if (slider.settings.autoControlsCombine) {
                slider.controls.autoEl.append(slider.controls.start);
                // if autoControlsCombine is false, insert both controls
            } else {
                slider.controls.autoEl.append(slider.controls.start).append(slider.controls.stop);
            }
            // if auto controls selector was supplied, populate it with the controls
            if (slider.settings.autoControlsSelector) {
                $(slider.settings.autoControlsSelector).html(slider.controls.autoEl);
                // if auto controls selector was not supplied, add it after the wrapper
            } else {
                slider.controls.el.addClass('bx-has-controls-auto').append(slider.controls.autoEl);
            }
            // update the auto controls
            updateAutoControls(slider.settings.autoStart ? 'stop' : 'start');
        };

        /**
         * Appends image captions to the DOM
         */
        var appendCaptions = function() {
            // cycle through each child
            slider.children.each(function(index) {
                // get the image title attribute
                var title = $(this).find('img:first').attr('title');
                // append the caption
                if (title !== undefined && ('' + title).length) {
                    $(this).append('<div class="bx-caption"><span>' + title + '</span></div>');
                }
            });
        };

        /**
         * Click next binding
         *
         * @param e (event)
         *  - DOM event object
         */
        var clickNextBind = function(e) {
            e.preventDefault();
            if (slider.controls.el.hasClass('disabled')) { return; }
            // if auto show is running, stop it
            if (slider.settings.auto && slider.settings.stopAutoOnClick) { el.stopAuto(); }
            el.goToNextSlide();
        };

        /**
         * Click prev binding
         *
         * @param e (event)
         *  - DOM event object
         */
        var clickPrevBind = function(e) {
            e.preventDefault();
            if (slider.controls.el.hasClass('disabled')) { return; }
            // if auto show is running, stop it
            if (slider.settings.auto && slider.settings.stopAutoOnClick) { el.stopAuto(); }
            el.goToPrevSlide();
        };

        /**
         * Click start binding
         *
         * @param e (event)
         *  - DOM event object
         */
        var clickStartBind = function(e) {
            el.startAuto();
            e.preventDefault();
        };

        /**
         * Click stop binding
         *
         * @param e (event)
         *  - DOM event object
         */
        var clickStopBind = function(e) {
            el.stopAuto();
            e.preventDefault();
        };

        /**
         * Click pager binding
         *
         * @param e (event)
         *  - DOM event object
         */
        var clickPagerBind = function(e) {
            var pagerLink, pagerIndex;
            e.preventDefault();
            if (slider.controls.el.hasClass('disabled')) {
                return;
            }
            // if auto show is running, stop it
            if (slider.settings.auto  && slider.settings.stopAutoOnClick) { el.stopAuto(); }
            pagerLink = $(e.currentTarget);
            if (pagerLink.attr('data-slide-index') !== undefined) {
                pagerIndex = parseInt(pagerLink.attr('data-slide-index'));
                // if clicked pager link is not active, continue with the goToSlide call
                if (pagerIndex !== slider.active.index) { el.goToSlide(pagerIndex); }
            }
        };

        /**
         * Updates the pager links with an active class
         *
         * @param slideIndex (int)
         *  - index of slide to make active
         */
        var updatePagerActive = function(slideIndex) {
            // if "short" pager type
            var len = slider.children.length; // nb of children
            if (slider.settings.pagerType === 'short') {
                if (slider.settings.maxSlides > 1) {
                    len = Math.ceil(slider.children.length / slider.settings.maxSlides);
                }
                slider.pagerEl.html((slideIndex + 1) + slider.settings.pagerShortSeparator + len);
                return;
            }
            // remove all pager active classes
            slider.pagerEl.find('a').removeClass('active');
            // apply the active class for all pagers
            slider.pagerEl.each(function(i, el) { $(el).find('a').eq(slideIndex).addClass('active'); });
        };

        /**
         * Performs needed actions after a slide transition
         */
        var updateAfterSlideTransition = function() {
            // if infinite loop is true
            if (slider.settings.infiniteLoop) {
                var position = '';
                // first slide
                if (slider.active.index === 0) {
                    // set the new position
                    position = slider.children.eq(0).position();
                    // carousel, last slide
                } else if (slider.active.index === getPagerQty() - 1 && slider.carousel) {
                    position = slider.children.eq((getPagerQty() - 1) * getMoveBy()).position();
                    // last slide
                } else if (slider.active.index === slider.children.length - 1) {
                    position = slider.children.eq(slider.children.length - 1).position();
                }
                if (position) {
                    if (slider.settings.mode === 'horizontal') { setPositionProperty(-position.left, 'reset', 0); }
                    else if (slider.settings.mode === 'vertical') { setPositionProperty(-position.top, 'reset', 0); }
                }
            }
            // declare that the transition is complete
            slider.working = false;
            // onSlideAfter callback
            slider.settings.onSlideAfter.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
        };

        /**
         * Updates the auto controls state (either active, or combined switch)
         *
         * @param state (string) "start", "stop"
         *  - the new state of the auto show
         */
        var updateAutoControls = function(state) {
            // if autoControlsCombine is true, replace the current control with the new state
            if (slider.settings.autoControlsCombine) {
                slider.controls.autoEl.html(slider.controls[state]);
                // if autoControlsCombine is false, apply the "active" class to the appropriate control
            } else {
                slider.controls.autoEl.find('a').removeClass('active');
                slider.controls.autoEl.find('a:not(.bx-' + state + ')').addClass('active');
            }
        };

        /**
         * Updates the direction controls (checks if either should be hidden)
         */
        var updateDirectionControls = function() {
            if (getPagerQty() === 1) {
                slider.controls.prev.addClass('disabled');
                slider.controls.next.addClass('disabled');
            } else if (!slider.settings.infiniteLoop && slider.settings.hideControlOnEnd) {
                // if first slide
                if (slider.active.index === 0) {
                    slider.controls.prev.addClass('disabled');
                    slider.controls.next.removeClass('disabled');
                    // if last slide
                } else if (slider.active.index === getPagerQty() - 1) {
                    slider.controls.next.addClass('disabled');
                    slider.controls.prev.removeClass('disabled');
                    // if any slide in the middle
                } else {
                    slider.controls.prev.removeClass('disabled');
                    slider.controls.next.removeClass('disabled');
                }
            }
        };
        /* auto start and stop functions */
        var windowFocusHandler = function() { el.startAuto(); };
        var windowBlurHandler = function() { el.stopAuto(); };
        /**
         * Initializes the auto process
         */
        var initAuto = function() {
            // if autoDelay was supplied, launch the auto show using a setTimeout() call
            if (slider.settings.autoDelay > 0) {
                setTimeout(el.startAuto, slider.settings.autoDelay);
                // if autoDelay was not supplied, start the auto show normally
            } else {
                el.startAuto();

                //add focus and blur events to ensure its running if timeout gets paused
                $(window).focus(windowFocusHandler).blur(windowBlurHandler);
            }
            // if autoHover is requested
            if (slider.settings.autoHover) {
                // on el hover
                el.hover(function() {
                    // if the auto show is currently playing (has an active interval)
                    if (slider.interval) {
                        // stop the auto show and pass true argument which will prevent control update
                        el.stopAuto(true);
                        // create a new autoPaused value which will be used by the relative "mouseout" event
                        slider.autoPaused = true;
                    }
                }, function() {
                    // if the autoPaused value was created be the prior "mouseover" event
                    if (slider.autoPaused) {
                        // start the auto show and pass true argument which will prevent control update
                        el.startAuto(true);
                        // reset the autoPaused value
                        slider.autoPaused = null;
                    }
                });
            }
        };

        /**
         * Initializes the ticker process
         */
        var initTicker = function() {
            var startPosition = 0,
                position, transform, value, idx, ratio, property, newSpeed, totalDimens;
            // if autoDirection is "next", append a clone of the entire slider
            if (slider.settings.autoDirection === 'next') {
                el.append(slider.children.clone().addClass('bx-clone'));
                // if autoDirection is "prev", prepend a clone of the entire slider, and set the left position
            } else {
                el.prepend(slider.children.clone().addClass('bx-clone'));
                position = slider.children.first().position();
                startPosition = slider.settings.mode === 'horizontal' ? -position.left : -position.top;
            }
            setPositionProperty(startPosition, 'reset', 0);
            // do not allow controls in ticker mode
            slider.settings.pager = false;
            slider.settings.controls = false;
            slider.settings.autoControls = false;
            // if autoHover is requested
            if (slider.settings.tickerHover) {
                if (slider.usingCSS) {
                    idx = slider.settings.mode === 'horizontal' ? 4 : 5;
                    slider.viewport.hover(function() {
                        transform = el.css('-' + slider.cssPrefix + '-transform');
                        value = parseFloat(transform.split(',')[idx]);
                        setPositionProperty(value, 'reset', 0);
                    }, function() {
                        totalDimens = 0;
                        slider.children.each(function(index) {
                            totalDimens += slider.settings.mode === 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
                        });
                        // calculate the speed ratio (used to determine the new speed to finish the paused animation)
                        ratio = slider.settings.speed / totalDimens;
                        // determine which property to use
                        property = slider.settings.mode === 'horizontal' ? 'left' : 'top';
                        // calculate the new speed
                        newSpeed = ratio * (totalDimens - (Math.abs(parseInt(value))));
                        tickerLoop(newSpeed);
                    });
                } else {
                    // on el hover
                    slider.viewport.hover(function() {
                        el.stop();
                    }, function() {
                        // calculate the total width of children (used to calculate the speed ratio)
                        totalDimens = 0;
                        slider.children.each(function(index) {
                            totalDimens += slider.settings.mode === 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
                        });
                        // calculate the speed ratio (used to determine the new speed to finish the paused animation)
                        ratio = slider.settings.speed / totalDimens;
                        // determine which property to use
                        property = slider.settings.mode === 'horizontal' ? 'left' : 'top';
                        // calculate the new speed
                        newSpeed = ratio * (totalDimens - (Math.abs(parseInt(el.css(property)))));
                        tickerLoop(newSpeed);
                    });
                }
            }
            // start the ticker loop
            tickerLoop();
        };

        /**
         * Runs a continuous loop, news ticker-style
         */
        var tickerLoop = function(resumeSpeed) {
            var speed = resumeSpeed ? resumeSpeed : slider.settings.speed,
                position = {left: 0, top: 0},
                reset = {left: 0, top: 0},
                animateProperty, resetValue, params;

            // if "next" animate left position to last child, then reset left to 0
            if (slider.settings.autoDirection === 'next') {
                position = el.find('.bx-clone').first().position();
                // if "prev" animate left position to 0, then reset left to first non-clone child
            } else {
                reset = slider.children.first().position();
            }
            animateProperty = slider.settings.mode === 'horizontal' ? -position.left : -position.top;
            resetValue = slider.settings.mode === 'horizontal' ? -reset.left : -reset.top;
            params = {resetValue: resetValue};
            setPositionProperty(animateProperty, 'ticker', speed, params);
        };

        /**
         * Check if el is on screen
         */
        var isOnScreen = function(el) {
            var win = $(window),
                viewport = {
                    top: win.scrollTop(),
                    left: win.scrollLeft()
                },
                bounds = el.offset();

            viewport.right = viewport.left + win.width();
            viewport.bottom = viewport.top + win.height();
            bounds.right = bounds.left + el.outerWidth();
            bounds.bottom = bounds.top + el.outerHeight();

            return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
        };

        /**
         * Initializes keyboard events
         */
        var keyPress = function(e) {
            var activeElementTag = document.activeElement.tagName.toLowerCase(),
                tagFilters = 'input|textarea',
                p = new RegExp(activeElementTag,['i']),
                result = p.exec(tagFilters);

            if (result == null && isOnScreen(el)) {
                if (e.keyCode === 39) {
                    clickNextBind(e);
                    return false;
                } else if (e.keyCode === 37) {
                    clickPrevBind(e);
                    return false;
                }
            }
        };

        /**
         * Initializes touch events
         */
        var initTouch = function() {
            // initialize object to contain all touch values
            slider.touch = {
                start: {x: 0, y: 0},
                end: {x: 0, y: 0}
            };
            slider.viewport.on('touchstart MSPointerDown pointerdown', onTouchStart);

            //for browsers that have implemented pointer events and fire a click after
            //every pointerup regardless of whether pointerup is on same screen location as pointerdown or not
            slider.viewport.on('click', '.bxslider a', function(e) {
                if (slider.viewport.hasClass('click-disabled')) {
                    e.preventDefault();
                    slider.viewport.removeClass('click-disabled');
                }
            });
        };

        /**
         * Event handler for "touchstart"
         *
         * @param e (event)
         *  - DOM event object
         */
        var onTouchStart = function(e) {
            // if the target is a link allow it to click through and
            // follow the URL
            if ($(e.target).is('a')) {
                return;
            }

            // watch only for left mouse, touch contact and pen contact
            // touchstart event object doesn`t have button property
            if (e.type !== 'touchstart' && e.button !== 0) {
                return;
            }
            e.preventDefault();
            //disable slider controls while user is interacting with slides to avoid slider freeze that happens on touch devices when a slide swipe happens immediately after interacting with slider controls
            slider.controls.el.addClass('disabled');

            if (slider.working) {
                slider.controls.el.removeClass('disabled');
            } else {
                // record the original position when touch starts
                slider.touch.originalPos = el.position();
                var orig = e.originalEvent,
                    touchPoints = (typeof orig.changedTouches !== 'undefined') ? orig.changedTouches : [orig];
                var chromePointerEvents = typeof PointerEvent === 'function';
                if (chromePointerEvents) {
                    if (orig.pointerId === undefined) {
                        return;
                    }
                }
                // record the starting touch x, y coordinates
                slider.touch.start.x = touchPoints[0].pageX;
                slider.touch.start.y = touchPoints[0].pageY;

                if (slider.viewport.get(0).setPointerCapture) {
                    slider.pointerId = orig.pointerId;
                    slider.viewport.get(0).setPointerCapture(slider.pointerId);
                }
                // store original event data for click fixation
                slider.originalClickTarget = orig.originalTarget || orig.target;
                slider.originalClickButton = orig.button;
                slider.originalClickButtons = orig.buttons;
                slider.originalEventType = orig.type;
                // at this moment we don`t know what it is click or swipe
                slider.hasMove = false;
                // on a "touchmove" event to the viewport
                slider.viewport.on('touchmove MSPointerMove pointermove', onTouchMove);
                // on a "touchend" event to the viewport
                slider.viewport.on('touchend MSPointerUp pointerup', onTouchEnd);
                slider.viewport.on('MSPointerCancel pointercancel', onPointerCancel);
            }
        };

        /**
         * Cancel Pointer for Windows Phone
         *
         * @param e (event)
         *  - DOM event object
         */
        var onPointerCancel = function(e) {
            e.preventDefault();
            /* onPointerCancel handler is needed to deal with situations when a touchend
            doesn't fire after a touchstart (this happens on windows phones only) */
            setPositionProperty(slider.touch.originalPos.left, 'reset', 0);

            //remove handlers
            slider.controls.el.removeClass('disabled');
            slider.viewport.off('MSPointerCancel pointercancel', onPointerCancel);
            slider.viewport.off('touchmove MSPointerMove pointermove', onTouchMove);
            slider.viewport.off('touchend MSPointerUp pointerup', onTouchEnd);
            if (slider.viewport.get(0).releasePointerCapture) {
                slider.viewport.get(0).releasePointerCapture(slider.pointerId);
            }
        };

        /**
         * Event handler for "touchmove"
         *
         * @param e (event)
         *  - DOM event object
         */
        var onTouchMove = function(e) {
            var orig = e.originalEvent,
                touchPoints = (typeof orig.changedTouches !== 'undefined') ? orig.changedTouches : [orig],
                // if scrolling on y axis, do not prevent default
                xMovement = Math.abs(touchPoints[0].pageX - slider.touch.start.x),
                yMovement = Math.abs(touchPoints[0].pageY - slider.touch.start.y),
                value = 0,
                change = 0;
            // this is swipe
            slider.hasMove = true;

            // x axis swipe
            if ((xMovement * 3) > yMovement && slider.settings.preventDefaultSwipeX) {
                e.preventDefault();
                // y axis swipe
            } else if ((yMovement * 3) > xMovement && slider.settings.preventDefaultSwipeY) {
                e.preventDefault();
            }
            if (e.type !== 'touchmove') {
                e.preventDefault();
            }

            if (slider.settings.mode !== 'fade' && slider.settings.oneToOneTouch) {
                // if horizontal, drag along x axis
                if (slider.settings.mode === 'horizontal') {
                    change = touchPoints[0].pageX - slider.touch.start.x;
                    value = slider.touch.originalPos.left + change;
                    // if vertical, drag along y axis
                } else {
                    change = touchPoints[0].pageY - slider.touch.start.y;
                    value = slider.touch.originalPos.top + change;
                }
                setPositionProperty(value, 'reset', 0);
            }
        };

        /**
         * Event handler for "touchend"
         *
         * @param e (event)
         *  - DOM event object
         */
        var onTouchEnd = function(e) {
            e.preventDefault();
            slider.viewport.off('touchmove MSPointerMove pointermove', onTouchMove);
            //enable slider controls as soon as user stops interacing with slides
            slider.controls.el.removeClass('disabled');
            var orig    = e.originalEvent,
                touchPoints = (typeof orig.changedTouches !== 'undefined') ? orig.changedTouches : [orig],
                value       = 0,
                distance    = 0;
            // record end x, y positions
            slider.touch.end.x = touchPoints[0].pageX;
            slider.touch.end.y = touchPoints[0].pageY;
            // if fade mode, check if absolute x distance clears the threshold
            if (slider.settings.mode === 'fade') {
                distance = Math.abs(slider.touch.start.x - slider.touch.end.x);
                if (distance >= slider.settings.swipeThreshold) {
                    if (slider.touch.start.x > slider.touch.end.x) {
                        el.goToNextSlide();
                    } else {
                        el.goToPrevSlide();
                    }
                    el.stopAuto();
                }
                // not fade mode
            } else {
                // calculate distance and el's animate property
                if (slider.settings.mode === 'horizontal') {
                    distance = slider.touch.end.x - slider.touch.start.x;
                    value = slider.touch.originalPos.left;
                } else {
                    distance = slider.touch.end.y - slider.touch.start.y;
                    value = slider.touch.originalPos.top;
                }
                // if not infinite loop and first / last slide, do not attempt a slide transition
                if (!slider.settings.infiniteLoop && ((slider.active.index === 0 && distance > 0) || (slider.active.last && distance < 0))) {
                    setPositionProperty(value, 'reset', 200);
                } else {
                    // check if distance clears threshold
                    if (Math.abs(distance) >= slider.settings.swipeThreshold) {
                        if (distance < 0) {
                            el.goToNextSlide();
                        } else {
                            el.goToPrevSlide();
                        }
                        el.stopAuto();
                    } else {
                        // el.animate(property, 200);
                        setPositionProperty(value, 'reset', 200);
                    }
                }
            }
            slider.viewport.off('touchend MSPointerUp pointerup', onTouchEnd);

            if (slider.viewport.get(0).releasePointerCapture) {
                slider.viewport.get(0).releasePointerCapture(slider.pointerId);
            }
            // if slider had swipe with left mouse, touch contact and pen contact
            if (slider.hasMove === false && (slider.originalClickButton === 0 || slider.originalEventType === 'touchstart')) {
                // trigger click event (fix for Firefox59 and PointerEvent standard compatibility)
                $(slider.originalClickTarget).trigger({
                    type: 'click',
                    button: slider.originalClickButton,
                    buttons: slider.originalClickButtons
                });
            }
        };

        /**
         * Window resize event callback
         */
        var resizeWindow = function(e) {
            // don't do anything if slider isn't initialized.
            if (!slider.initialized) { return; }
            // Delay if slider working.
            if (slider.working) {
                window.setTimeout(resizeWindow, 10);
            } else {
                // get the new window dimens (again, thank you IE)
                var windowWidthNew = $(window).width(),
                    windowHeightNew = $(window).height();
                // make sure that it is a true window resize
                // *we must check this because our dinosaur friend IE fires a window resize event when certain DOM elements
                // are resized. Can you just die already?*
                if (windowWidth !== windowWidthNew || windowHeight !== windowHeightNew) {
                    // set the new window dimens
                    windowWidth = windowWidthNew;
                    windowHeight = windowHeightNew;
                    // update all dynamic elements
                    el.redrawSlider();
                    // Call user resize handler
                    slider.settings.onSliderResize.call(el, slider.active.index);
                }
            }
        };

        /**
         * Adds an aria-hidden=true attribute to each element
         *
         * @param startVisibleIndex (int)
         *  - the first visible element's index
         */
        var applyAriaHiddenAttributes = function(startVisibleIndex) {
            var numberOfSlidesShowing = getNumberSlidesShowing();
            // only apply attributes if the setting is enabled and not in ticker mode
            if (slider.settings.ariaHidden && !slider.settings.ticker) {
                // add aria-hidden=true to all elements
                slider.children.attr('aria-hidden', 'true');
                // get the visible elements and change to aria-hidden=false
                slider.children.slice(startVisibleIndex, startVisibleIndex + numberOfSlidesShowing).attr('aria-hidden', 'false');
            }
        };

        /**
         * Returns index according to present page range
         *
         * @param slideOndex (int)
         *  - the desired slide index
         */
        var setSlideIndex = function(slideIndex) {
            if (slideIndex < 0) {
                if (slider.settings.infiniteLoop) {
                    return getPagerQty() - 1;
                }else {
                    //we don't go to undefined slides
                    return slider.active.index;
                }
                // if slideIndex is greater than children length, set active index to 0 (this happens during infinite loop)
            } else if (slideIndex >= getPagerQty()) {
                if (slider.settings.infiniteLoop) {
                    return 0;
                } else {
                    //we don't move to undefined pages
                    return slider.active.index;
                }
                // set active index to requested slide
            } else {
                return slideIndex;
            }
        };

        /**
         * ===================================================================================
         * = PUBLIC FUNCTIONS
         * ===================================================================================
         */

        /**
         * Performs slide transition to the specified slide
         *
         * @param slideIndex (int)
         *  - the destination slide's index (zero-based)
         *
         * @param direction (string)
         *  - INTERNAL USE ONLY - the direction of travel ("prev" / "next")
         */
        el.goToSlide = function(slideIndex, direction) {
            // onSlideBefore, onSlideNext, onSlidePrev callbacks
            // Allow transition canceling based on returned value
            var performTransition = true,
                moveBy = 0,
                position = {left: 0, top: 0},
                lastChild = null,
                lastShowingIndex, eq, value, requestEl;
            // store the old index
            slider.oldIndex = slider.active.index;
            //set new index
            slider.active.index = setSlideIndex(slideIndex);

            // if plugin is currently in motion, ignore request
            if (slider.working || slider.active.index === slider.oldIndex) { return; }
            // declare that plugin is in motion
            slider.working = true;

            performTransition = slider.settings.onSlideBefore.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);

            // If transitions canceled, reset and return
            if (typeof (performTransition) !== 'undefined' && !performTransition) {
                slider.active.index = slider.oldIndex; // restore old index
                slider.working = false; // is not in motion
                return;
            }

            if (direction === 'next') {
                // Prevent canceling in future functions or lack there-of from negating previous commands to cancel
                if (!slider.settings.onSlideNext.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index)) {
                    performTransition = false;
                }
            } else if (direction === 'prev') {
                // Prevent canceling in future functions or lack there-of from negating previous commands to cancel
                if (!slider.settings.onSlidePrev.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index)) {
                    performTransition = false;
                }
            }

            // check if last slide
            slider.active.last = slider.active.index >= getPagerQty() - 1;
            // update the pager with active class
            if (slider.settings.pager || slider.settings.pagerCustom) { updatePagerActive(slider.active.index); }
            // // check for direction control update
            if (slider.settings.controls) { updateDirectionControls(); }
            // if slider is set to mode: "fade"
            if (slider.settings.mode === 'fade') {
                // if adaptiveHeight is true and next height is different from current height, animate to the new height
                if (slider.settings.adaptiveHeight && slider.viewport.height() !== getViewportHeight()) {
                    slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
                }
                // fade out the visible child and reset its z-index value
                slider.children.filter(':visible').fadeOut(slider.settings.speed).css({zIndex: 0});
                // fade in the newly requested slide
                slider.children.eq(slider.active.index).css('zIndex', slider.settings.slideZIndex + 1).fadeIn(slider.settings.speed, function() {
                    $(this).css('zIndex', slider.settings.slideZIndex);
                    updateAfterSlideTransition();
                });
                // slider mode is not "fade"
            } else {
                // if adaptiveHeight is true and next height is different from current height, animate to the new height
                if (slider.settings.adaptiveHeight && slider.viewport.height() !== getViewportHeight()) {
                    slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
                }
                // if carousel and not infinite loop
                if (!slider.settings.infiniteLoop && slider.carousel && slider.active.last) {
                    if (slider.settings.mode === 'horizontal') {
                        // get the last child position
                        lastChild = slider.children.eq(slider.children.length - 1);
                        position = lastChild.position();
                        // calculate the position of the last slide
                        moveBy = slider.viewport.width() - lastChild.outerWidth();
                    } else {
                        // get last showing index position
                        lastShowingIndex = slider.children.length - slider.settings.minSlides;
                        position = slider.children.eq(lastShowingIndex).position();
                    }
                    // horizontal carousel, going previous while on first slide (infiniteLoop mode)
                } else if (slider.carousel && slider.active.last && direction === 'prev') {
                    // get the last child position
                    eq = slider.settings.moveSlides === 1 ? slider.settings.maxSlides - getMoveBy() : ((getPagerQty() - 1) * getMoveBy()) - (slider.children.length - slider.settings.maxSlides);
                    lastChild = el.children('.bx-clone').eq(eq);
                    position = lastChild.position();
                    // if infinite loop and "Next" is clicked on the last slide
                } else if (direction === 'next' && slider.active.index === 0) {
                    // get the last clone position
                    position = el.find('> .bx-clone').eq(slider.settings.maxSlides).position();
                    slider.active.last = false;
                    // normal non-zero requests
                } else if (slideIndex >= 0) {
                    //parseInt is applied to allow floats for slides/page
                    requestEl = slideIndex * parseInt(getMoveBy());
                    position = slider.children.eq(requestEl).position();
                }

                /* If the position doesn't exist
                 * (e.g. if you destroy the slider on a next click),
                 * it doesn't throw an error.
                 */
                if (typeof (position) !== 'undefined') {
                    value = slider.settings.mode === 'horizontal' ? -(position.left - moveBy) : -position.top;
                    // plugin values to be animated
                    setPositionProperty(value, 'slide', slider.settings.speed);
                }
                slider.working = false;
            }
            if (slider.settings.ariaHidden) { applyAriaHiddenAttributes(slider.active.index * getMoveBy()); }
        };

        /**
         * Transitions to the next slide in the show
         */
        el.goToNextSlide = function() {
            // if infiniteLoop is false and last page is showing, disregard call
            if (!slider.settings.infiniteLoop && slider.active.last) { return; }
            if (slider.working === true){ return ;}
            var pagerIndex = parseInt(slider.active.index) + 1;
            el.goToSlide(pagerIndex, 'next');
        };

        /**
         * Transitions to the prev slide in the show
         */
        el.goToPrevSlide = function() {
            // if infiniteLoop is false and last page is showing, disregard call
            if (!slider.settings.infiniteLoop && slider.active.index === 0) { return; }
            if (slider.working === true){ return ;}
            var pagerIndex = parseInt(slider.active.index) - 1;
            el.goToSlide(pagerIndex, 'prev');
        };

        /**
         * Starts the auto show
         *
         * @param preventControlUpdate (boolean)
         *  - if true, auto controls state will not be updated
         */
        el.startAuto = function(preventControlUpdate) {
            // if an interval already exists, disregard call
            if (slider.interval) { return; }
            // create an interval
            slider.interval = setInterval(function() {
                if (slider.settings.autoDirection === 'next') {
                    el.goToNextSlide();
                } else {
                    el.goToPrevSlide();
                }
            }, slider.settings.pause);
            //allback for when the auto rotate status changes
            slider.settings.onAutoChange.call(el, true);
            // if auto controls are displayed and preventControlUpdate is not true
            if (slider.settings.autoControls && preventControlUpdate !== true) { updateAutoControls('stop'); }
        };

        /**
         * Stops the auto show
         *
         * @param preventControlUpdate (boolean)
         *  - if true, auto controls state will not be updated
         */
        el.stopAuto = function(preventControlUpdate) {
            // if slider is auto paused, just clear that state
            if (slider.autoPaused) slider.autoPaused = false;
            // if no interval exists, disregard call
            if (!slider.interval) { return; }
            // clear the interval
            clearInterval(slider.interval);
            slider.interval = null;
            //allback for when the auto rotate status changes
            slider.settings.onAutoChange.call(el, false);
            // if auto controls are displayed and preventControlUpdate is not true
            if (slider.settings.autoControls && preventControlUpdate !== true) { updateAutoControls('start'); }
        };

        /**
         * Returns current slide index (zero-based)
         */
        el.getCurrentSlide = function() {
            return slider.active.index;
        };

        /**
         * Returns current slide element
         */
        el.getCurrentSlideElement = function() {
            return slider.children.eq(slider.active.index);
        };

        /**
         * Returns a slide element
         * @param index (int)
         *  - The index (zero-based) of the element you want returned.
         */
        el.getSlideElement = function(index) {
            return slider.children.eq(index);
        };

        /**
         * Returns number of slides in show
         */
        el.getSlideCount = function() {
            return slider.children.length;
        };

        /**
         * Return slider.working variable
         */
        el.isWorking = function() {
            return slider.working;
        };

        /**
         * Update all dynamic slider elements
         */
        el.redrawSlider = function() {
            // resize all children in ratio to new screen size
            slider.children.add(el.find('.bx-clone')).outerWidth(getSlideWidth());
            // adjust the height
            slider.viewport.css('height', getViewportHeight());
            // update the slide position
            if (!slider.settings.ticker) { setSlidePosition(); }
            // if active.last was true before the screen resize, we want
            // to keep it last no matter what screen size we end on
            if (slider.active.last) { slider.active.index = getPagerQty() - 1; }
            // if the active index (page) no longer exists due to the resize, simply set the index as last
            if (slider.active.index >= getPagerQty()) { slider.active.last = true; }
            // if a pager is being displayed and a custom pager is not being used, update it
            if (slider.settings.pager && !slider.settings.pagerCustom) {
                populatePager();
                updatePagerActive(slider.active.index);
            }
            if (slider.settings.ariaHidden) { applyAriaHiddenAttributes(slider.active.index * getMoveBy()); }
        };

        /**
         * Destroy the current instance of the slider (revert everything back to original state)
         */
        el.destroySlider = function() {
            // don't do anything if slider has already been destroyed
            if (!slider.initialized) { return; }
            slider.initialized = false;
            $('.bx-clone', this).remove();
            slider.children.each(function() {
                if ($(this).data('origStyle') !== undefined) {
                    $(this).attr('style', $(this).data('origStyle'));
                } else {
                    $(this).removeAttr('style');
                }
            });
            if ($(this).data('origStyle') !== undefined) {
                this.attr('style', $(this).data('origStyle'));
            } else {
                $(this).removeAttr('style');
            }
            $(this).unwrap().unwrap();
            if (slider.controls.el) { slider.controls.el.remove(); }
            if (slider.controls.next) { slider.controls.next.remove(); }
            if (slider.controls.prev) { slider.controls.prev.remove(); }
            if (slider.pagerEl && slider.settings.controls && !slider.settings.pagerCustom) { slider.pagerEl.remove(); }
            $('.bx-caption', this).remove();
            if (slider.controls.autoEl) { slider.controls.autoEl.remove(); }
            clearInterval(slider.interval);
            if (slider.settings.responsive) { $(window).off('resize', resizeWindow); }
            if (slider.settings.keyboardEnabled) { $(document).off('keydown', keyPress); }
            //remove self reference in data
            $(this).removeData('bxSlider');
            // remove global window handlers
            $(window).off('blur', windowBlurHandler).off('focus', windowFocusHandler);
        };

        /**
         * Reload the slider (revert all DOM changes, and re-initialize)
         */
        el.reloadSlider = function(settings) {
            if (settings !== undefined) { options = settings; }
            el.destroySlider();
            init();
            //store reference to self in order to access public functions later
            $(el).data('bxSlider', this);
        };

        init();

        $(el).data('bxSlider', this);

        // returns the current jQuery object
        return this;
    };

})(jQuery);
/*!
 * Datepicker for Bootstrap v1.5.0 (https://github.com/eternicode/bootstrap-datepicker)
 *
 * Copyright 2012 Stefan Petre
 * Improvements by Andrew Rowls
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a,b){function c(){return new Date(Date.UTC.apply(Date,arguments))}function d(){var a=new Date;return c(a.getFullYear(),a.getMonth(),a.getDate())}function e(a,b){return a.getUTCFullYear()===b.getUTCFullYear()&&a.getUTCMonth()===b.getUTCMonth()&&a.getUTCDate()===b.getUTCDate()}function f(a){return function(){return this[a].apply(this,arguments)}}function g(a){return a&&!isNaN(a.getTime())}function h(b,c){function d(a,b){return b.toLowerCase()}var e,f=a(b).data(),g={},h=new RegExp("^"+c.toLowerCase()+"([A-Z])");c=new RegExp("^"+c.toLowerCase());for(var i in f)c.test(i)&&(e=i.replace(h,d),g[e]=f[i]);return g}function i(b){var c={};if(q[b]||(b=b.split("-")[0],q[b])){var d=q[b];return a.each(p,function(a,b){b in d&&(c[b]=d[b])}),c}}var j=function(){var b={get:function(a){return this.slice(a)[0]},contains:function(a){for(var b=a&&a.valueOf(),c=0,d=this.length;d>c;c++)if(this[c].valueOf()===b)return c;return-1},remove:function(a){this.splice(a,1)},replace:function(b){b&&(a.isArray(b)||(b=[b]),this.clear(),this.push.apply(this,b))},clear:function(){this.length=0},copy:function(){var a=new j;return a.replace(this),a}};return function(){var c=[];return c.push.apply(c,arguments),a.extend(c,b),c}}(),k=function(b,c){this._process_options(c),this.dates=new j,this.viewDate=this.o.defaultViewDate,this.focusDate=null,this.element=a(b),this.isInline=!1,this.isInput=this.element.is("input"),this.component=this.element.hasClass("date")?this.element.find(".add-on, .input-group-addon, .btn"):!1,this.hasInput=this.component&&this.element.find("input").length,this.component&&0===this.component.length&&(this.component=!1),this.picker=a(r.template),this._buildEvents(),this._attachEvents(),this.isInline?this.picker.addClass("datepicker-inline").appendTo(this.element):this.picker.addClass("datepicker-dropdown dropdown-menu"),this.o.rtl&&this.picker.addClass("datepicker-rtl"),this.viewMode=this.o.startView,this.o.calendarWeeks&&this.picker.find("tfoot .today, tfoot .clear").attr("colspan",function(a,b){return parseInt(b)+1}),this._allow_update=!1,this.setStartDate(this._o.startDate),this.setEndDate(this._o.endDate),this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled),this.setDaysOfWeekHighlighted(this.o.daysOfWeekHighlighted),this.setDatesDisabled(this.o.datesDisabled),this.fillDow(),this.fillMonths(),this._allow_update=!0,this.update(),this.showMode(),this.isInline&&this.show()};k.prototype={constructor:k,_process_options:function(e){this._o=a.extend({},this._o,e);var f=this.o=a.extend({},this._o),g=f.language;switch(q[g]||(g=g.split("-")[0],q[g]||(g=o.language)),f.language=g,f.startView){case 2:case"decade":f.startView=2;break;case 1:case"year":f.startView=1;break;default:f.startView=0}switch(f.minViewMode){case 1:case"months":f.minViewMode=1;break;case 2:case"years":f.minViewMode=2;break;default:f.minViewMode=0}switch(f.maxViewMode){case 0:case"days":f.maxViewMode=0;break;case 1:case"months":f.maxViewMode=1;break;default:f.maxViewMode=2}f.startView=Math.min(f.startView,f.maxViewMode),f.startView=Math.max(f.startView,f.minViewMode),f.multidate!==!0&&(f.multidate=Number(f.multidate)||!1,f.multidate!==!1&&(f.multidate=Math.max(0,f.multidate))),f.multidateSeparator=String(f.multidateSeparator),f.weekStart%=7,f.weekEnd=(f.weekStart+6)%7;var h=r.parseFormat(f.format);if(f.startDate!==-(1/0)&&(f.startDate?f.startDate instanceof Date?f.startDate=this._local_to_utc(this._zero_time(f.startDate)):f.startDate=r.parseDate(f.startDate,h,f.language):f.startDate=-(1/0)),f.endDate!==1/0&&(f.endDate?f.endDate instanceof Date?f.endDate=this._local_to_utc(this._zero_time(f.endDate)):f.endDate=r.parseDate(f.endDate,h,f.language):f.endDate=1/0),f.daysOfWeekDisabled=f.daysOfWeekDisabled||[],a.isArray(f.daysOfWeekDisabled)||(f.daysOfWeekDisabled=f.daysOfWeekDisabled.split(/[,\s]*/)),f.daysOfWeekDisabled=a.map(f.daysOfWeekDisabled,function(a){return parseInt(a,10)}),f.daysOfWeekHighlighted=f.daysOfWeekHighlighted||[],a.isArray(f.daysOfWeekHighlighted)||(f.daysOfWeekHighlighted=f.daysOfWeekHighlighted.split(/[,\s]*/)),f.daysOfWeekHighlighted=a.map(f.daysOfWeekHighlighted,function(a){return parseInt(a,10)}),f.datesDisabled=f.datesDisabled||[],!a.isArray(f.datesDisabled)){var i=[];i.push(r.parseDate(f.datesDisabled,h,f.language)),f.datesDisabled=i}f.datesDisabled=a.map(f.datesDisabled,function(a){return r.parseDate(a,h,f.language)});var j=String(f.orientation).toLowerCase().split(/\s+/g),k=f.orientation.toLowerCase();if(j=a.grep(j,function(a){return/^auto|left|right|top|bottom$/.test(a)}),f.orientation={x:"auto",y:"auto"},k&&"auto"!==k)if(1===j.length)switch(j[0]){case"top":case"bottom":f.orientation.y=j[0];break;case"left":case"right":f.orientation.x=j[0]}else k=a.grep(j,function(a){return/^left|right$/.test(a)}),f.orientation.x=k[0]||"auto",k=a.grep(j,function(a){return/^top|bottom$/.test(a)}),f.orientation.y=k[0]||"auto";else;if(f.defaultViewDate){var l=f.defaultViewDate.year||(new Date).getFullYear(),m=f.defaultViewDate.month||0,n=f.defaultViewDate.day||1;f.defaultViewDate=c(l,m,n)}else f.defaultViewDate=d();f.showOnFocus=f.showOnFocus!==b?f.showOnFocus:!0,f.zIndexOffset=f.zIndexOffset!==b?f.zIndexOffset:10},_events:[],_secondaryEvents:[],_applyEvents:function(a){for(var c,d,e,f=0;f<a.length;f++)c=a[f][0],2===a[f].length?(d=b,e=a[f][1]):3===a[f].length&&(d=a[f][1],e=a[f][2]),c.on(e,d)},_unapplyEvents:function(a){for(var c,d,e,f=0;f<a.length;f++)c=a[f][0],2===a[f].length?(e=b,d=a[f][1]):3===a[f].length&&(e=a[f][1],d=a[f][2]),c.off(d,e)},_buildEvents:function(){var b={keyup:a.proxy(function(b){-1===a.inArray(b.keyCode,[27,37,39,38,40,32,13,9])&&this.update()},this),keydown:a.proxy(this.keydown,this),paste:a.proxy(this.paste,this)};this.o.showOnFocus===!0&&(b.focus=a.proxy(this.show,this)),this.isInput?this._events=[[this.element,b]]:this.component&&this.hasInput?this._events=[[this.element.find("input"),b],[this.component,{click:a.proxy(this.show,this)}]]:this.element.is("div")?this.isInline=!0:this._events=[[this.element,{click:a.proxy(this.show,this)}]],this._events.push([this.element,"*",{blur:a.proxy(function(a){this._focused_from=a.target},this)}],[this.element,{blur:a.proxy(function(a){this._focused_from=a.target},this)}]),this.o.immediateUpdates&&this._events.push([this.element,{"changeYear changeMonth":a.proxy(function(a){this.update(a.date)},this)}]),this._secondaryEvents=[[this.picker,{click:a.proxy(this.click,this)}],[a(window),{resize:a.proxy(this.place,this)}],[a(document),{mousedown:a.proxy(function(a){this.element.is(a.target)||this.element.find(a.target).length||this.picker.is(a.target)||this.picker.find(a.target).length||this.picker.hasClass("datepicker-inline")||this.hide()},this)}]]},_attachEvents:function(){this._detachEvents(),this._applyEvents(this._events)},_detachEvents:function(){this._unapplyEvents(this._events)},_attachSecondaryEvents:function(){this._detachSecondaryEvents(),this._applyEvents(this._secondaryEvents)},_detachSecondaryEvents:function(){this._unapplyEvents(this._secondaryEvents)},_trigger:function(b,c){var d=c||this.dates.get(-1),e=this._utc_to_local(d);this.element.trigger({type:b,date:e,dates:a.map(this.dates,this._utc_to_local),format:a.proxy(function(a,b){0===arguments.length?(a=this.dates.length-1,b=this.o.format):"string"==typeof a&&(b=a,a=this.dates.length-1),b=b||this.o.format;var c=this.dates.get(a);return r.formatDate(c,b,this.o.language)},this)})},show:function(){return this.element.attr("readonly")&&this.o.enableOnReadonly===!1?void 0:(this.isInline||this.picker.appendTo(this.o.container),this.place(),this.picker.show(),this._attachSecondaryEvents(),this._trigger("show"),(window.navigator.msMaxTouchPoints||"ontouchstart"in document)&&this.o.disableTouchKeyboard&&a(this.element).blur(),this)},hide:function(){return this.isInline?this:this.picker.is(":visible")?(this.focusDate=null,this.picker.hide().detach(),this._detachSecondaryEvents(),this.viewMode=this.o.startView,this.showMode(),this.o.forceParse&&(this.isInput&&this.element.val()||this.hasInput&&this.element.find("input").val())&&this.setValue(),this._trigger("hide"),this):this},remove:function(){return this.hide(),this._detachEvents(),this._detachSecondaryEvents(),this.picker.remove(),delete this.element.data().datepicker,this.isInput||delete this.element.data().date,this},paste:function(b){var c;if(b.originalEvent.clipboardData&&b.originalEvent.clipboardData.types&&-1!==a.inArray("text/plain",b.originalEvent.clipboardData.types))c=b.originalEvent.clipboardData.getData("text/plain");else{if(!window.clipboardData)return;c=window.clipboardData.getData("Text")}this.setDate(c),this.update(),b.preventDefault()},_utc_to_local:function(a){return a&&new Date(a.getTime()+6e4*a.getTimezoneOffset())},_local_to_utc:function(a){return a&&new Date(a.getTime()-6e4*a.getTimezoneOffset())},_zero_time:function(a){return a&&new Date(a.getFullYear(),a.getMonth(),a.getDate())},_zero_utc_time:function(a){return a&&new Date(Date.UTC(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate()))},getDates:function(){return a.map(this.dates,this._utc_to_local)},getUTCDates:function(){return a.map(this.dates,function(a){return new Date(a)})},getDate:function(){return this._utc_to_local(this.getUTCDate())},getUTCDate:function(){var a=this.dates.get(-1);return"undefined"!=typeof a?new Date(a):null},clearDates:function(){var a;this.isInput?a=this.element:this.component&&(a=this.element.find("input")),a&&a.val(""),this.update(),this._trigger("changeDate"),this.o.autoclose&&this.hide()},setDates:function(){var b=a.isArray(arguments[0])?arguments[0]:arguments;return this.update.apply(this,b),this._trigger("changeDate"),this.setValue(),this},setUTCDates:function(){var b=a.isArray(arguments[0])?arguments[0]:arguments;return this.update.apply(this,a.map(b,this._utc_to_local)),this._trigger("changeDate"),this.setValue(),this},setDate:f("setDates"),setUTCDate:f("setUTCDates"),setValue:function(){var a=this.getFormattedDate();return this.isInput?this.element.val(a):this.component&&this.element.find("input").val(a),this},getFormattedDate:function(c){c===b&&(c=this.o.format);var d=this.o.language;return a.map(this.dates,function(a){return r.formatDate(a,c,d)}).join(this.o.multidateSeparator)},setStartDate:function(a){return this._process_options({startDate:a}),this.update(),this.updateNavArrows(),this},setEndDate:function(a){return this._process_options({endDate:a}),this.update(),this.updateNavArrows(),this},setDaysOfWeekDisabled:function(a){return this._process_options({daysOfWeekDisabled:a}),this.update(),this.updateNavArrows(),this},setDaysOfWeekHighlighted:function(a){return this._process_options({daysOfWeekHighlighted:a}),this.update(),this},setDatesDisabled:function(a){this._process_options({datesDisabled:a}),this.update(),this.updateNavArrows()},place:function(){if(this.isInline)return this;var b=this.picker.outerWidth(),c=this.picker.outerHeight(),d=10,e=a(this.o.container),f=e.width(),g=e.scrollTop(),h=e.offset(),i=[];this.element.parents().each(function(){var b=a(this).css("z-index");"auto"!==b&&0!==b&&i.push(parseInt(b))});var j=Math.max.apply(Math,i)+this.o.zIndexOffset,k=this.component?this.component.parent().offset():this.element.offset(),l=this.component?this.component.outerHeight(!0):this.element.outerHeight(!1),m=this.component?this.component.outerWidth(!0):this.element.outerWidth(!1),n=k.left-h.left,o=k.top-h.top;this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"),"auto"!==this.o.orientation.x?(this.picker.addClass("datepicker-orient-"+this.o.orientation.x),"right"===this.o.orientation.x&&(n-=b-m)):k.left<0?(this.picker.addClass("datepicker-orient-left"),n-=k.left-d):n+b>f?(this.picker.addClass("datepicker-orient-right"),n=k.left+m-b):this.picker.addClass("datepicker-orient-left");var p,q=this.o.orientation.y;if("auto"===q&&(p=-g+o-c,q=0>p?"bottom":"top"),this.picker.addClass("datepicker-orient-"+q),"top"===q?o-=c+parseInt(this.picker.css("padding-top")):o+=l,this.o.rtl){var r=f-(n+m);this.picker.css({top:o,right:r,zIndex:j})}else this.picker.css({top:o,left:n,zIndex:j});return this},_allow_update:!0,update:function(){if(!this._allow_update)return this;var b=this.dates.copy(),c=[],d=!1;return arguments.length?(a.each(arguments,a.proxy(function(a,b){b instanceof Date&&(b=this._local_to_utc(b)),c.push(b)},this)),d=!0):(c=this.isInput?this.element.val():this.element.data("date")||this.element.find("input").val(),c=c&&this.o.multidate?c.split(this.o.multidateSeparator):[c],delete this.element.data().date),c=a.map(c,a.proxy(function(a){return r.parseDate(a,this.o.format,this.o.language)},this)),c=a.grep(c,a.proxy(function(a){return a<this.o.startDate||a>this.o.endDate||!a},this),!0),this.dates.replace(c),this.dates.length?this.viewDate=new Date(this.dates.get(-1)):this.viewDate<this.o.startDate?this.viewDate=new Date(this.o.startDate):this.viewDate>this.o.endDate?this.viewDate=new Date(this.o.endDate):this.viewDate=this.o.defaultViewDate,d?this.setValue():c.length&&String(b)!==String(this.dates)&&this._trigger("changeDate"),!this.dates.length&&b.length&&this._trigger("clearDate"),this.fill(),this.element.change(),this},fillDow:function(){var a=this.o.weekStart,b="<tr>";for(this.o.calendarWeeks&&(this.picker.find(".datepicker-days .datepicker-switch").attr("colspan",function(a,b){return parseInt(b)+1}),b+='<th class="cw">&#160;</th>');a<this.o.weekStart+7;)b+='<th class="dow">'+q[this.o.language].daysMin[a++%7]+"</th>";b+="</tr>",this.picker.find(".datepicker-days thead").append(b)},fillMonths:function(){for(var a="",b=0;12>b;)a+='<span class="month">'+q[this.o.language].monthsShort[b++]+"</span>";this.picker.find(".datepicker-months td").html(a)},setRange:function(b){b&&b.length?this.range=a.map(b,function(a){return a.valueOf()}):delete this.range,this.fill()},getClassNames:function(b){var c=[],d=this.viewDate.getUTCFullYear(),f=this.viewDate.getUTCMonth(),g=new Date;return b.getUTCFullYear()<d||b.getUTCFullYear()===d&&b.getUTCMonth()<f?c.push("old"):(b.getUTCFullYear()>d||b.getUTCFullYear()===d&&b.getUTCMonth()>f)&&c.push("new"),this.focusDate&&b.valueOf()===this.focusDate.valueOf()&&c.push("focused"),this.o.todayHighlight&&b.getUTCFullYear()===g.getFullYear()&&b.getUTCMonth()===g.getMonth()&&b.getUTCDate()===g.getDate()&&c.push("today"),-1!==this.dates.contains(b)&&c.push("active"),(b.valueOf()<this.o.startDate||b.valueOf()>this.o.endDate||-1!==a.inArray(b.getUTCDay(),this.o.daysOfWeekDisabled))&&c.push("disabled"),-1!==a.inArray(b.getUTCDay(),this.o.daysOfWeekHighlighted)&&c.push("highlighted"),this.o.datesDisabled.length>0&&a.grep(this.o.datesDisabled,function(a){return e(b,a)}).length>0&&c.push("disabled","disabled-date"),this.range&&(b>this.range[0]&&b<this.range[this.range.length-1]&&c.push("range"),-1!==a.inArray(b.valueOf(),this.range)&&c.push("selected"),b.valueOf()===this.range[0]&&c.push("range-start"),b.valueOf()===this.range[this.range.length-1]&&c.push("range-end")),c},fill:function(){var d,e=new Date(this.viewDate),f=e.getUTCFullYear(),g=e.getUTCMonth(),h=this.o.startDate!==-(1/0)?this.o.startDate.getUTCFullYear():-(1/0),i=this.o.startDate!==-(1/0)?this.o.startDate.getUTCMonth():-(1/0),j=this.o.endDate!==1/0?this.o.endDate.getUTCFullYear():1/0,k=this.o.endDate!==1/0?this.o.endDate.getUTCMonth():1/0,l=q[this.o.language].today||q.en.today||"",m=q[this.o.language].clear||q.en.clear||"",n=q[this.o.language].titleFormat||q.en.titleFormat;if(!isNaN(f)&&!isNaN(g)){this.picker.find(".datepicker-days thead .datepicker-switch").text(r.formatDate(new c(f,g),n,this.o.language)),this.picker.find("tfoot .today").text(l).toggle(this.o.todayBtn!==!1),this.picker.find("tfoot .clear").text(m).toggle(this.o.clearBtn!==!1),this.picker.find("thead .datepicker-title").text(this.o.title).toggle(""!==this.o.title),this.updateNavArrows(),this.fillMonths();var o=c(f,g-1,28),p=r.getDaysInMonth(o.getUTCFullYear(),o.getUTCMonth());o.setUTCDate(p),o.setUTCDate(p-(o.getUTCDay()-this.o.weekStart+7)%7);var s=new Date(o);o.getUTCFullYear()<100&&s.setUTCFullYear(o.getUTCFullYear()),s.setUTCDate(s.getUTCDate()+42),s=s.valueOf();for(var t,u=[];o.valueOf()<s;){if(o.getUTCDay()===this.o.weekStart&&(u.push("<tr>"),this.o.calendarWeeks)){var v=new Date(+o+(this.o.weekStart-o.getUTCDay()-7)%7*864e5),w=new Date(Number(v)+(11-v.getUTCDay())%7*864e5),x=new Date(Number(x=c(w.getUTCFullYear(),0,1))+(11-x.getUTCDay())%7*864e5),y=(w-x)/864e5/7+1;u.push('<td class="cw">'+y+"</td>")}if(t=this.getClassNames(o),t.push("day"),this.o.beforeShowDay!==a.noop){var z=this.o.beforeShowDay(this._utc_to_local(o));z===b?z={}:"boolean"==typeof z?z={enabled:z}:"string"==typeof z&&(z={classes:z}),z.enabled===!1&&t.push("disabled"),z.classes&&(t=t.concat(z.classes.split(/\s+/))),z.tooltip&&(d=z.tooltip)}t=a.unique(t),u.push('<td class="'+t.join(" ")+'"'+(d?' title="'+d+'"':"")+">"+o.getUTCDate()+"</td>"),d=null,o.getUTCDay()===this.o.weekEnd&&u.push("</tr>"),o.setUTCDate(o.getUTCDate()+1)}this.picker.find(".datepicker-days tbody").empty().append(u.join(""));var A=this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode<2?"Months":f).end().find("span").removeClass("active");if(a.each(this.dates,function(a,b){b.getUTCFullYear()===f&&A.eq(b.getUTCMonth()).addClass("active")}),(h>f||f>j)&&A.addClass("disabled"),f===h&&A.slice(0,i).addClass("disabled"),f===j&&A.slice(k+1).addClass("disabled"),this.o.beforeShowMonth!==a.noop){var B=this;a.each(A,function(b,c){if(!a(c).hasClass("disabled")){var d=new Date(f,b,1),e=B.o.beforeShowMonth(d);e===!1&&a(c).addClass("disabled")}})}u="",f=10*parseInt(f/10,10);var C=this.picker.find(".datepicker-years").find(".datepicker-switch").text(f+"-"+(f+9)).end().find("td");f-=1;for(var D,E=a.map(this.dates,function(a){return a.getUTCFullYear()}),F=-1;11>F;F++){if(D=["year"],d=null,-1===F?D.push("old"):10===F&&D.push("new"),-1!==a.inArray(f,E)&&D.push("active"),(h>f||f>j)&&D.push("disabled"),this.o.beforeShowYear!==a.noop){var G=this.o.beforeShowYear(new Date(f,0,1));G===b?G={}:"boolean"==typeof G?G={enabled:G}:"string"==typeof G&&(G={classes:G}),G.enabled===!1&&D.push("disabled"),G.classes&&(D=D.concat(G.classes.split(/\s+/))),G.tooltip&&(d=G.tooltip)}u+='<span class="'+D.join(" ")+'"'+(d?' title="'+d+'"':"")+">"+f+"</span>",f+=1}C.html(u)}},updateNavArrows:function(){if(this._allow_update){var a=new Date(this.viewDate),b=a.getUTCFullYear(),c=a.getUTCMonth();switch(this.viewMode){case 0:this.o.startDate!==-(1/0)&&b<=this.o.startDate.getUTCFullYear()&&c<=this.o.startDate.getUTCMonth()?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),this.o.endDate!==1/0&&b>=this.o.endDate.getUTCFullYear()&&c>=this.o.endDate.getUTCMonth()?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"});break;case 1:case 2:this.o.startDate!==-(1/0)&&b<=this.o.startDate.getUTCFullYear()||this.o.maxViewMode<2?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),this.o.endDate!==1/0&&b>=this.o.endDate.getUTCFullYear()||this.o.maxViewMode<2?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"})}}},click:function(b){b.preventDefault(),b.stopPropagation();var d,e,f,g=a(b.target).closest("span, td, th");if(1===g.length)switch(g[0].nodeName.toLowerCase()){case"th":switch(g[0].className){case"datepicker-switch":this.showMode(1);break;case"prev":case"next":var h=r.modes[this.viewMode].navStep*("prev"===g[0].className?-1:1);switch(this.viewMode){case 0:this.viewDate=this.moveMonth(this.viewDate,h),this._trigger("changeMonth",this.viewDate);break;case 1:case 2:this.viewDate=this.moveYear(this.viewDate,h),1===this.viewMode&&this._trigger("changeYear",this.viewDate)}this.fill();break;case"today":var i=new Date;i=c(i.getFullYear(),i.getMonth(),i.getDate(),0,0,0),this.showMode(-2);var j="linked"===this.o.todayBtn?null:"view";this._setDate(i,j);break;case"clear":this.clearDates()}break;case"span":g.hasClass("disabled")||(this.viewDate.setUTCDate(1),g.hasClass("month")?(f=1,e=g.parent().find("span").index(g),d=this.viewDate.getUTCFullYear(),this.viewDate.setUTCMonth(e),this._trigger("changeMonth",this.viewDate),1===this.o.minViewMode?(this._setDate(c(d,e,f)),this.showMode()):this.showMode(-1)):(f=1,e=0,d=parseInt(g.text(),10)||0,this.viewDate.setUTCFullYear(d),this._trigger("changeYear",this.viewDate),2===this.o.minViewMode&&this._setDate(c(d,e,f)),this.showMode(-1)),this.fill());break;case"td":g.hasClass("day")&&!g.hasClass("disabled")&&(f=parseInt(g.text(),10)||1,d=this.viewDate.getUTCFullYear(),e=this.viewDate.getUTCMonth(),g.hasClass("old")?0===e?(e=11,d-=1):e-=1:g.hasClass("new")&&(11===e?(e=0,d+=1):e+=1),this._setDate(c(d,e,f)))}this.picker.is(":visible")&&this._focused_from&&a(this._focused_from).focus(),delete this._focused_from},_toggle_multidate:function(a){var b=this.dates.contains(a);if(a||this.dates.clear(),-1!==b?(this.o.multidate===!0||this.o.multidate>1||this.o.toggleActive)&&this.dates.remove(b):this.o.multidate===!1?(this.dates.clear(),this.dates.push(a)):this.dates.push(a),"number"==typeof this.o.multidate)for(;this.dates.length>this.o.multidate;)this.dates.remove(0)},_setDate:function(a,b){b&&"date"!==b||this._toggle_multidate(a&&new Date(a)),b&&"view"!==b||(this.viewDate=a&&new Date(a)),this.fill(),this.setValue(),b&&"view"===b||this._trigger("changeDate");var c;this.isInput?c=this.element:this.component&&(c=this.element.find("input")),c&&c.change(),!this.o.autoclose||b&&"date"!==b||this.hide()},moveMonth:function(a,b){if(!g(a))return this.o.defaultViewDate;if(!b)return a;var c,d,e=new Date(a.valueOf()),f=e.getUTCDate(),h=e.getUTCMonth(),i=Math.abs(b);if(b=b>0?1:-1,1===i)d=-1===b?function(){return e.getUTCMonth()===h}:function(){return e.getUTCMonth()!==c},c=h+b,e.setUTCMonth(c),(0>c||c>11)&&(c=(c+12)%12);else{for(var j=0;i>j;j++)e=this.moveMonth(e,b);c=e.getUTCMonth(),e.setUTCDate(f),d=function(){return c!==e.getUTCMonth()}}for(;d();)e.setUTCDate(--f),e.setUTCMonth(c);return e},moveYear:function(a,b){return this.moveMonth(a,12*b)},dateWithinRange:function(a){return a>=this.o.startDate&&a<=this.o.endDate},keydown:function(a){if(!this.picker.is(":visible"))return void((40===a.keyCode||27===a.keyCode)&&(this.show(),a.stopPropagation()));var b,c,e,f=!1,g=this.focusDate||this.viewDate;switch(a.keyCode){case 27:this.focusDate?(this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill()):this.hide(),a.preventDefault(),a.stopPropagation();break;case 37:case 39:if(!this.o.keyboardNavigation)break;b=37===a.keyCode?-1:1,a.ctrlKey?(c=this.moveYear(this.dates.get(-1)||d(),b),e=this.moveYear(g,b),this._trigger("changeYear",this.viewDate)):a.shiftKey?(c=this.moveMonth(this.dates.get(-1)||d(),b),e=this.moveMonth(g,b),this._trigger("changeMonth",this.viewDate)):(c=new Date(this.dates.get(-1)||d()),c.setUTCDate(c.getUTCDate()+b),e=new Date(g),e.setUTCDate(g.getUTCDate()+b)),this.dateWithinRange(e)&&(this.focusDate=this.viewDate=e,this.setValue(),this.fill(),a.preventDefault());break;case 38:case 40:if(!this.o.keyboardNavigation)break;b=38===a.keyCode?-1:1,a.ctrlKey?(c=this.moveYear(this.dates.get(-1)||d(),b),e=this.moveYear(g,b),this._trigger("changeYear",this.viewDate)):a.shiftKey?(c=this.moveMonth(this.dates.get(-1)||d(),b),e=this.moveMonth(g,b),this._trigger("changeMonth",this.viewDate)):(c=new Date(this.dates.get(-1)||d()),c.setUTCDate(c.getUTCDate()+7*b),e=new Date(g),e.setUTCDate(g.getUTCDate()+7*b)),this.dateWithinRange(e)&&(this.focusDate=this.viewDate=e,this.setValue(),this.fill(),a.preventDefault());break;case 32:break;case 13:if(!this.o.forceParse)break;g=this.focusDate||this.dates.get(-1)||this.viewDate,this.o.keyboardNavigation&&(this._toggle_multidate(g),f=!0),this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.setValue(),this.fill(),this.picker.is(":visible")&&(a.preventDefault(),"function"==typeof a.stopPropagation?a.stopPropagation():a.cancelBubble=!0,this.o.autoclose&&this.hide());break;case 9:this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill(),this.hide()}if(f){this.dates.length?this._trigger("changeDate"):this._trigger("clearDate");var h;this.isInput?h=this.element:this.component&&(h=this.element.find("input")),h&&h.change()}},showMode:function(a){a&&(this.viewMode=Math.max(this.o.minViewMode,Math.min(this.o.maxViewMode,this.viewMode+a))),this.picker.children("div").hide().filter(".datepicker-"+r.modes[this.viewMode].clsName).show(),this.updateNavArrows()}};var l=function(b,c){this.element=a(b),this.inputs=a.map(c.inputs,function(a){return a.jquery?a[0]:a}),delete c.inputs,n.call(a(this.inputs),c).on("changeDate",a.proxy(this.dateUpdated,this)),this.pickers=a.map(this.inputs,function(b){return a(b).data("datepicker")}),this.updateDates()};l.prototype={updateDates:function(){this.dates=a.map(this.pickers,function(a){return a.getUTCDate()}),this.updateRanges()},updateRanges:function(){var b=a.map(this.dates,function(a){return a.valueOf()});a.each(this.pickers,function(a,c){c.setRange(b)})},dateUpdated:function(b){if(!this.updating){this.updating=!0;var c=a(b.target).data("datepicker");if("undefined"!=typeof c){var d=c.getUTCDate(),e=a.inArray(b.target,this.inputs),f=e-1,g=e+1,h=this.inputs.length;if(-1!==e){if(a.each(this.pickers,function(a,b){b.getUTCDate()||b.setUTCDate(d)}),d<this.dates[f])for(;f>=0&&d<this.dates[f];)this.pickers[f--].setUTCDate(d);else if(d>this.dates[g])for(;h>g&&d>this.dates[g];)this.pickers[g++].setUTCDate(d);this.updateDates(),delete this.updating}}}},remove:function(){a.map(this.pickers,function(a){a.remove()}),delete this.element.data().datepicker}};var m=a.fn.datepicker,n=function(c){var d=Array.apply(null,arguments);d.shift();var e;if(this.each(function(){var b=a(this),f=b.data("datepicker"),g="object"==typeof c&&c;if(!f){var j=h(this,"date"),m=a.extend({},o,j,g),n=i(m.language),p=a.extend({},o,n,j,g);if(b.hasClass("input-daterange")||p.inputs){var q={inputs:p.inputs||b.find("input").toArray()};b.data("datepicker",f=new l(this,a.extend(p,q)))}else b.data("datepicker",f=new k(this,p))}"string"==typeof c&&"function"==typeof f[c]&&(e=f[c].apply(f,d))}),e===b||e instanceof k||e instanceof l)return this;if(this.length>1)throw new Error("Using only allowed for the collection of a single element ("+c+" function)");return e};a.fn.datepicker=n;var o=a.fn.datepicker.defaults={autoclose:!1,beforeShowDay:a.noop,beforeShowMonth:a.noop,beforeShowYear:a.noop,calendarWeeks:!1,clearBtn:!1,toggleActive:!1,daysOfWeekDisabled:[],daysOfWeekHighlighted:[],datesDisabled:[],endDate:1/0,forceParse:!0,format:"mm/dd/yyyy",keyboardNavigation:!0,language:"en",minViewMode:0,maxViewMode:2,multidate:!1,multidateSeparator:",",orientation:"auto",rtl:!1,startDate:-(1/0),startView:0,todayBtn:!1,todayHighlight:!1,weekStart:0,disableTouchKeyboard:!1,enableOnReadonly:!0,container:"body",immediateUpdates:!1,title:""},p=a.fn.datepicker.locale_opts=["format","rtl","weekStart"];a.fn.datepicker.Constructor=k;var q=a.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear",titleFormat:"MM yyyy"}},r={modes:[{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10}],isLeapYear:function(a){return a%4===0&&a%100!==0||a%400===0},getDaysInMonth:function(a,b){return[31,r.isLeapYear(a)?29:28,31,30,31,30,31,31,30,31,30,31][b]},validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,parseFormat:function(a){if("function"==typeof a.toValue&&"function"==typeof a.toDisplay)return a;var b=a.replace(this.validParts,"\x00").split("\x00"),c=a.match(this.validParts);if(!b||!b.length||!c||0===c.length)throw new Error("Invalid date format.");return{separators:b,parts:c}},parseDate:function(d,e,f){function g(){var a=this.slice(0,m[j].length),b=m[j].slice(0,a.length);return a.toLowerCase()===b.toLowerCase()}if(!d)return b;if(d instanceof Date)return d;if("string"==typeof e&&(e=r.parseFormat(e)),e.toValue)return e.toValue(d,e,f);var h,i,j,l=/([\-+]\d+)([dmwy])/,m=d.match(/([\-+]\d+)([dmwy])/g);if(/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(d)){for(d=new Date,j=0;j<m.length;j++)switch(h=l.exec(m[j]),i=parseInt(h[1]),h[2]){case"d":d.setUTCDate(d.getUTCDate()+i);break;case"m":d=k.prototype.moveMonth.call(k.prototype,d,i);break;case"w":d.setUTCDate(d.getUTCDate()+7*i);break;case"y":d=k.prototype.moveYear.call(k.prototype,d,i)}return c(d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate(),0,0,0)}m=d&&d.match(this.nonpunctuation)||[],d=new Date;var n,o,p={},s=["yyyy","yy","M","MM","m","mm","d","dd"],t={yyyy:function(a,b){return a.setUTCFullYear(b)},yy:function(a,b){return a.setUTCFullYear(2e3+b)},m:function(a,b){if(isNaN(a))return a;for(b-=1;0>b;)b+=12;for(b%=12,a.setUTCMonth(b);a.getUTCMonth()!==b;)a.setUTCDate(a.getUTCDate()-1);return a},d:function(a,b){return a.setUTCDate(b)}};t.M=t.MM=t.mm=t.m,t.dd=t.d,d=c(d.getFullYear(),d.getMonth(),d.getDate(),0,0,0);var u=e.parts.slice();if(m.length!==u.length&&(u=a(u).filter(function(b,c){return-1!==a.inArray(c,s)}).toArray()),m.length===u.length){var v;for(j=0,v=u.length;v>j;j++){if(n=parseInt(m[j],10),h=u[j],isNaN(n))switch(h){case"MM":o=a(q[f].months).filter(g),n=a.inArray(o[0],q[f].months)+1;break;case"M":o=a(q[f].monthsShort).filter(g),n=a.inArray(o[0],q[f].monthsShort)+1}p[h]=n}var w,x;for(j=0;j<s.length;j++)x=s[j],x in p&&!isNaN(p[x])&&(w=new Date(d),t[x](w,p[x]),isNaN(w)||(d=w))}return d},formatDate:function(b,c,d){if(!b)return"";if("string"==typeof c&&(c=r.parseFormat(c)),c.toDisplay)return c.toDisplay(b,c,d);var e={d:b.getUTCDate(),D:q[d].daysShort[b.getUTCDay()],DD:q[d].days[b.getUTCDay()],m:b.getUTCMonth()+1,M:q[d].monthsShort[b.getUTCMonth()],MM:q[d].months[b.getUTCMonth()],yy:b.getUTCFullYear().toString().substring(2),yyyy:b.getUTCFullYear()};e.dd=(e.d<10?"0":"")+e.d,e.mm=(e.m<10?"0":"")+e.m,b=[];for(var f=a.extend([],c.separators),g=0,h=c.parts.length;h>=g;g++)f.length&&b.push(f.shift()),b.push(e[c.parts[g]]);return b.join("")},headTemplate:'<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">&#171;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&#187;</th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'};r.template='<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">'+r.headTemplate+"<tbody></tbody>"+r.footTemplate+'</table></div><div class="datepicker-months"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+"</table></div></div>",a.fn.datepicker.DPGlobal=r,a.fn.datepicker.noConflict=function(){return a.fn.datepicker=m,this},a.fn.datepicker.version="1.5.0",a(document).on("focus.datepicker.data-api click.datepicker.data-api",'[data-provide="datepicker"]',function(b){var c=a(this);c.data("datepicker")||(b.preventDefault(),n.call(c,"show"))}),a(function(){n.call(a('[data-provide="datepicker-inline"]'))})});
!function(a){a.fn.datepicker.dates.de={days:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],daysShort:["Son","Mon","Die","Mit","Don","Fre","Sam"],daysMin:["So","Mo","Di","Mi","Do","Fr","Sa"],months:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],monthsShort:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],today:"Heute",clear:"Löschen",weekStart:1,format:"dd.mm.yyyy"}}(jQuery);
!function(a){a.fn.datepicker.dates.fr={days:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],daysShort:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],daysMin:["d","l","ma","me","j","v","s"],months:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],monthsShort:["janv.","févr.","mars","avril","mai","juin","juil.","août","sept.","oct.","nov.","déc."],today:"Aujourd'hui",monthsTitle:"Mois",clear:"Effacer",weekStart:1,format:"dd-mm-yyyy"}}(jQuery);
!function(a){a.fn.datepicker.dates["en-GB"]={days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",monthsTitle:"Months",clear:"Clear",weekStart:1,format:"yyyy-mm-dd"}}(jQuery);
;(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define(factory) :
			global.moment = factory()
}(this, function () { 'use strict';

	var hookCallback;

	function utils_hooks__hooks () {
		return hookCallback.apply(null, arguments);
	}

	// This is done to register the method called with moment()
	// without creating circular dependencies.
	function setHookCallback (callback) {
		hookCallback = callback;
	}

	function isArray(input) {
		return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
	}

	function isDate(input) {
		return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
	}

	function map(arr, fn) {
		var res = [], i;
		for (i = 0; i < arr.length; ++i) {
			res.push(fn(arr[i], i));
		}
		return res;
	}

	function hasOwnProp(a, b) {
		return Object.prototype.hasOwnProperty.call(a, b);
	}

	function extend(a, b) {
		for (var i in b) {
			if (hasOwnProp(b, i)) {
				a[i] = b[i];
			}
		}

		if (hasOwnProp(b, 'toString')) {
			a.toString = b.toString;
		}

		if (hasOwnProp(b, 'valueOf')) {
			a.valueOf = b.valueOf;
		}

		return a;
	}

	function create_utc__createUTC (input, format, locale, strict) {
		return createLocalOrUTC(input, format, locale, strict, true).utc();
	}

	function defaultParsingFlags() {
		// We need to deep clone this object.
		return {
			empty           : false,
			unusedTokens    : [],
			unusedInput     : [],
			overflow        : -2,
			charsLeftOver   : 0,
			nullInput       : false,
			invalidMonth    : null,
			invalidFormat   : false,
			userInvalidated : false,
			iso             : false,
			parsedDateParts : [],
			meridiem        : null
		};
	}

	function getParsingFlags(m) {
		if (m._pf == null) {
			m._pf = defaultParsingFlags();
		}
		return m._pf;
	}

	var some;
	if (Array.prototype.some) {
		some = Array.prototype.some;
	} else {
		some = function (fun) {
			var t = Object(this);
			var len = t.length >>> 0;

			for (var i = 0; i < len; i++) {
				if (i in t && fun.call(this, t[i], i, t)) {
					return true;
				}
			}

			return false;
		};
	}

	function valid__isValid(m) {
		if (m._isValid == null) {
			var flags = getParsingFlags(m);
			var parsedParts = some.call(flags.parsedDateParts, function (i) {
				return i != null;
			});
			m._isValid = !isNaN(m._d.getTime()) &&
				flags.overflow < 0 &&
				!flags.empty &&
				!flags.invalidMonth &&
				!flags.invalidWeekday &&
				!flags.nullInput &&
				!flags.invalidFormat &&
				!flags.userInvalidated &&
				(!flags.meridiem || (flags.meridiem && parsedParts));

			if (m._strict) {
				m._isValid = m._isValid &&
					flags.charsLeftOver === 0 &&
					flags.unusedTokens.length === 0 &&
					flags.bigHour === undefined;
			}
		}
		return m._isValid;
	}

	function valid__createInvalid (flags) {
		var m = create_utc__createUTC(NaN);
		if (flags != null) {
			extend(getParsingFlags(m), flags);
		}
		else {
			getParsingFlags(m).userInvalidated = true;
		}

		return m;
	}

	function isUndefined(input) {
		return input === void 0;
	}

	// Plugins that add properties should also add the key here (null value),
	// so we can properly clone ourselves.
	var momentProperties = utils_hooks__hooks.momentProperties = [];

	function copyConfig(to, from) {
		var i, prop, val;

		if (!isUndefined(from._isAMomentObject)) {
			to._isAMomentObject = from._isAMomentObject;
		}
		if (!isUndefined(from._i)) {
			to._i = from._i;
		}
		if (!isUndefined(from._f)) {
			to._f = from._f;
		}
		if (!isUndefined(from._l)) {
			to._l = from._l;
		}
		if (!isUndefined(from._strict)) {
			to._strict = from._strict;
		}
		if (!isUndefined(from._tzm)) {
			to._tzm = from._tzm;
		}
		if (!isUndefined(from._isUTC)) {
			to._isUTC = from._isUTC;
		}
		if (!isUndefined(from._offset)) {
			to._offset = from._offset;
		}
		if (!isUndefined(from._pf)) {
			to._pf = getParsingFlags(from);
		}
		if (!isUndefined(from._locale)) {
			to._locale = from._locale;
		}

		if (momentProperties.length > 0) {
			for (i in momentProperties) {
				prop = momentProperties[i];
				val = from[prop];
				if (!isUndefined(val)) {
					to[prop] = val;
				}
			}
		}

		return to;
	}

	var updateInProgress = false;

	// Moment prototype object
	function Moment(config) {
		copyConfig(this, config);
		this._d = new Date(config._d != null ? config._d.getTime() : NaN);
		// Prevent infinite loop in case updateOffset creates new moment
		// objects.
		if (updateInProgress === false) {
			updateInProgress = true;
			utils_hooks__hooks.updateOffset(this);
			updateInProgress = false;
		}
	}

	function isMoment (obj) {
		return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
	}

	function absFloor (number) {
		if (number < 0) {
			return Math.ceil(number);
		} else {
			return Math.floor(number);
		}
	}

	function toInt(argumentForCoercion) {
		var coercedNumber = +argumentForCoercion,
			value = 0;

		if (coercedNumber !== 0 && isFinite(coercedNumber)) {
			value = absFloor(coercedNumber);
		}

		return value;
	}

	// compare two arrays, return the number of differences
	function compareArrays(array1, array2, dontConvert) {
		var len = Math.min(array1.length, array2.length),
			lengthDiff = Math.abs(array1.length - array2.length),
			diffs = 0,
			i;
		for (i = 0; i < len; i++) {
			if ((dontConvert && array1[i] !== array2[i]) ||
				(!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
				diffs++;
			}
		}
		return diffs + lengthDiff;
	}

	function warn(msg) {
		if (utils_hooks__hooks.suppressDeprecationWarnings === false &&
			(typeof console !==  'undefined') && console.warn) {
			console.warn('Deprecation warning: ' + msg);
		}
	}

	function deprecate(msg, fn) {
		var firstTime = true;

		return extend(function () {
			if (utils_hooks__hooks.deprecationHandler != null) {
				utils_hooks__hooks.deprecationHandler(null, msg);
			}
			if (firstTime) {
				warn(msg + '\nArguments: ' + Array.prototype.slice.call(arguments).join(', ') + '\n' + (new Error()).stack);
				firstTime = false;
			}
			return fn.apply(this, arguments);
		}, fn);
	}

	var deprecations = {};

	function deprecateSimple(name, msg) {
		if (utils_hooks__hooks.deprecationHandler != null) {
			utils_hooks__hooks.deprecationHandler(name, msg);
		}
		if (!deprecations[name]) {
			warn(msg);
			deprecations[name] = true;
		}
	}

	utils_hooks__hooks.suppressDeprecationWarnings = false;
	utils_hooks__hooks.deprecationHandler = null;

	function isFunction(input) {
		return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
	}

	function isObject(input) {
		return Object.prototype.toString.call(input) === '[object Object]';
	}

	function locale_set__set (config) {
		var prop, i;
		for (i in config) {
			prop = config[i];
			if (isFunction(prop)) {
				this[i] = prop;
			} else {
				this['_' + i] = prop;
			}
		}
		this._config = config;
		// Lenient ordinal parsing accepts just a number in addition to
		// number + (possibly) stuff coming from _ordinalParseLenient.
		this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + (/\d{1,2}/).source);
	}

	function mergeConfigs(parentConfig, childConfig) {
		var res = extend({}, parentConfig), prop;
		for (prop in childConfig) {
			if (hasOwnProp(childConfig, prop)) {
				if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
					res[prop] = {};
					extend(res[prop], parentConfig[prop]);
					extend(res[prop], childConfig[prop]);
				} else if (childConfig[prop] != null) {
					res[prop] = childConfig[prop];
				} else {
					delete res[prop];
				}
			}
		}
		return res;
	}

	function Locale(config) {
		if (config != null) {
			this.set(config);
		}
	}

	var keys;

	if (Object.keys) {
		keys = Object.keys;
	} else {
		keys = function (obj) {
			var i, res = [];
			for (i in obj) {
				if (hasOwnProp(obj, i)) {
					res.push(i);
				}
			}
			return res;
		};
	}

	// internal storage for locale config files
	var locales = {};
	var globalLocale;

	function normalizeLocale(key) {
		return key ? key.toLowerCase().replace('_', '-') : key;
	}

	// pick the locale from the array
	// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
	// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
	function chooseLocale(names) {
		var i = 0, j, next, locale, split;

		while (i < names.length) {
			split = normalizeLocale(names[i]).split('-');
			j = split.length;
			next = normalizeLocale(names[i + 1]);
			next = next ? next.split('-') : null;
			while (j > 0) {
				locale = loadLocale(split.slice(0, j).join('-'));
				if (locale) {
					return locale;
				}
				if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
					//the next array item is better than a shallower substring of this one
					break;
				}
				j--;
			}
			i++;
		}
		return null;
	}

	function loadLocale(name) {
		var oldLocale = null;
		// TODO: Find a better way to register and load all the locales in Node
		if (!locales[name] && (typeof module !== 'undefined') &&
			module && module.exports) {
			try {
				oldLocale = globalLocale._abbr;
				require('./locale/' + name);
				// because defineLocale currently also sets the global locale, we
				// want to undo that for lazy loaded locales
				locale_locales__getSetGlobalLocale(oldLocale);
			} catch (e) { }
		}
		return locales[name];
	}

	// This function will load locale and then set the global locale.  If
	// no arguments are passed in, it will simply return the current global
	// locale key.
	function locale_locales__getSetGlobalLocale (key, values) {
		var data;
		if (key) {
			if (isUndefined(values)) {
				data = locale_locales__getLocale(key);
			}
			else {
				data = defineLocale(key, values);
			}

			if (data) {
				// moment.duration._locale = moment._locale = data;
				globalLocale = data;
			}
		}

		return globalLocale._abbr;
	}

	function defineLocale (name, config) {
		if (config !== null) {
			config.abbr = name;
			if (locales[name] != null) {
				deprecateSimple('defineLocaleOverride',
					'use moment.updateLocale(localeName, config) to change ' +
					'an existing locale. moment.defineLocale(localeName, ' +
					'config) should only be used for creating a new locale');
				config = mergeConfigs(locales[name]._config, config);
			} else if (config.parentLocale != null) {
				if (locales[config.parentLocale] != null) {
					config = mergeConfigs(locales[config.parentLocale]._config, config);
				} else {
					// treat as if there is no base config
					deprecateSimple('parentLocaleUndefined',
						'specified parentLocale is not defined yet');
				}
			}
			locales[name] = new Locale(config);

			// backwards compat for now: also set the locale
			locale_locales__getSetGlobalLocale(name);

			return locales[name];
		} else {
			// useful for testing
			delete locales[name];
			return null;
		}
	}

	function updateLocale(name, config) {
		if (config != null) {
			var locale;
			if (locales[name] != null) {
				config = mergeConfigs(locales[name]._config, config);
			}
			locale = new Locale(config);
			locale.parentLocale = locales[name];
			locales[name] = locale;

			// backwards compat for now: also set the locale
			locale_locales__getSetGlobalLocale(name);
		} else {
			// pass null for config to unupdate, useful for tests
			if (locales[name] != null) {
				if (locales[name].parentLocale != null) {
					locales[name] = locales[name].parentLocale;
				} else if (locales[name] != null) {
					delete locales[name];
				}
			}
		}
		return locales[name];
	}

	// returns locale data
	function locale_locales__getLocale (key) {
		var locale;

		if (key && key._locale && key._locale._abbr) {
			key = key._locale._abbr;
		}

		if (!key) {
			return globalLocale;
		}

		if (!isArray(key)) {
			//short-circuit everything else
			locale = loadLocale(key);
			if (locale) {
				return locale;
			}
			key = [key];
		}

		return chooseLocale(key);
	}

	function locale_locales__listLocales() {
		return keys(locales);
	}

	var aliases = {};

	function addUnitAlias (unit, shorthand) {
		var lowerCase = unit.toLowerCase();
		aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
	}

	function normalizeUnits(units) {
		return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
	}

	function normalizeObjectUnits(inputObject) {
		var normalizedInput = {},
			normalizedProp,
			prop;

		for (prop in inputObject) {
			if (hasOwnProp(inputObject, prop)) {
				normalizedProp = normalizeUnits(prop);
				if (normalizedProp) {
					normalizedInput[normalizedProp] = inputObject[prop];
				}
			}
		}

		return normalizedInput;
	}

	function makeGetSet (unit, keepTime) {
		return function (value) {
			if (value != null) {
				get_set__set(this, unit, value);
				utils_hooks__hooks.updateOffset(this, keepTime);
				return this;
			} else {
				return get_set__get(this, unit);
			}
		};
	}

	function get_set__get (mom, unit) {
		return mom.isValid() ?
			mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
	}

	function get_set__set (mom, unit, value) {
		if (mom.isValid()) {
			mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
		}
	}

	// MOMENTS

	function getSet (units, value) {
		var unit;
		if (typeof units === 'object') {
			for (unit in units) {
				this.set(unit, units[unit]);
			}
		} else {
			units = normalizeUnits(units);
			if (isFunction(this[units])) {
				return this[units](value);
			}
		}
		return this;
	}

	function zeroFill(number, targetLength, forceSign) {
		var absNumber = '' + Math.abs(number),
			zerosToFill = targetLength - absNumber.length,
			sign = number >= 0;
		return (sign ? (forceSign ? '+' : '') : '-') +
			Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
	}

	var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

	var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

	var formatFunctions = {};

	var formatTokenFunctions = {};

	// token:    'M'
	// padded:   ['MM', 2]
	// ordinal:  'Mo'
	// callback: function () { this.month() + 1 }
	function addFormatToken (token, padded, ordinal, callback) {
		var func = callback;
		if (typeof callback === 'string') {
			func = function () {
				return this[callback]();
			};
		}
		if (token) {
			formatTokenFunctions[token] = func;
		}
		if (padded) {
			formatTokenFunctions[padded[0]] = function () {
				return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
			};
		}
		if (ordinal) {
			formatTokenFunctions[ordinal] = function () {
				return this.localeData().ordinal(func.apply(this, arguments), token);
			};
		}
	}

	function removeFormattingTokens(input) {
		if (input.match(/\[[\s\S]/)) {
			return input.replace(/^\[|\]$/g, '');
		}
		return input.replace(/\\/g, '');
	}

	function makeFormatFunction(format) {
		var array = format.match(formattingTokens), i, length;

		for (i = 0, length = array.length; i < length; i++) {
			if (formatTokenFunctions[array[i]]) {
				array[i] = formatTokenFunctions[array[i]];
			} else {
				array[i] = removeFormattingTokens(array[i]);
			}
		}

		return function (mom) {
			var output = '', i;
			for (i = 0; i < length; i++) {
				output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
			}
			return output;
		};
	}

	// format date using native date object
	function formatMoment(m, format) {
		if (!m.isValid()) {
			return m.localeData().invalidDate();
		}

		format = expandFormat(format, m.localeData());
		formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

		return formatFunctions[format](m);
	}

	function expandFormat(format, locale) {
		var i = 5;

		function replaceLongDateFormatTokens(input) {
			return locale.longDateFormat(input) || input;
		}

		localFormattingTokens.lastIndex = 0;
		while (i >= 0 && localFormattingTokens.test(format)) {
			format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
			localFormattingTokens.lastIndex = 0;
			i -= 1;
		}

		return format;
	}

	var match1         = /\d/;            //       0 - 9
	var match2         = /\d\d/;          //      00 - 99
	var match3         = /\d{3}/;         //     000 - 999
	var match4         = /\d{4}/;         //    0000 - 9999
	var match6         = /[+-]?\d{6}/;    // -999999 - 999999
	var match1to2      = /\d\d?/;         //       0 - 99
	var match3to4      = /\d\d\d\d?/;     //     999 - 9999
	var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
	var match1to3      = /\d{1,3}/;       //       0 - 999
	var match1to4      = /\d{1,4}/;       //       0 - 9999
	var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

	var matchUnsigned  = /\d+/;           //       0 - inf
	var matchSigned    = /[+-]?\d+/;      //    -inf - inf

	var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
	var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

	var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

	// any word (or two) characters or numbers including two/three word month in arabic.
	// includes scottish gaelic two word and hyphenated months
	var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;


	var regexes = {};

	function addRegexToken (token, regex, strictRegex) {
		regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
			return (isStrict && strictRegex) ? strictRegex : regex;
		};
	}

	function getParseRegexForToken (token, config) {
		if (!hasOwnProp(regexes, token)) {
			return new RegExp(unescapeFormat(token));
		}

		return regexes[token](config._strict, config._locale);
	}

	// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
	function unescapeFormat(s) {
		return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
			return p1 || p2 || p3 || p4;
		}));
	}

	function regexEscape(s) {
		return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
	}

	var tokens = {};

	function addParseToken (token, callback) {
		var i, func = callback;
		if (typeof token === 'string') {
			token = [token];
		}
		if (typeof callback === 'number') {
			func = function (input, array) {
				array[callback] = toInt(input);
			};
		}
		for (i = 0; i < token.length; i++) {
			tokens[token[i]] = func;
		}
	}

	function addWeekParseToken (token, callback) {
		addParseToken(token, function (input, array, config, token) {
			config._w = config._w || {};
			callback(input, config._w, config, token);
		});
	}

	function addTimeToArrayFromToken(token, input, config) {
		if (input != null && hasOwnProp(tokens, token)) {
			tokens[token](input, config._a, config, token);
		}
	}

	var YEAR = 0;
	var MONTH = 1;
	var DATE = 2;
	var HOUR = 3;
	var MINUTE = 4;
	var SECOND = 5;
	var MILLISECOND = 6;
	var WEEK = 7;
	var WEEKDAY = 8;

	var indexOf;

	if (Array.prototype.indexOf) {
		indexOf = Array.prototype.indexOf;
	} else {
		indexOf = function (o) {
			// I know
			var i;
			for (i = 0; i < this.length; ++i) {
				if (this[i] === o) {
					return i;
				}
			}
			return -1;
		};
	}

	function daysInMonth(year, month) {
		return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
	}

	// FORMATTING

	addFormatToken('M', ['MM', 2], 'Mo', function () {
		return this.month() + 1;
	});

	addFormatToken('MMM', 0, 0, function (format) {
		return this.localeData().monthsShort(this, format);
	});

	addFormatToken('MMMM', 0, 0, function (format) {
		return this.localeData().months(this, format);
	});

	// ALIASES

	addUnitAlias('month', 'M');

	// PARSING

	addRegexToken('M',    match1to2);
	addRegexToken('MM',   match1to2, match2);
	addRegexToken('MMM',  function (isStrict, locale) {
		return locale.monthsShortRegex(isStrict);
	});
	addRegexToken('MMMM', function (isStrict, locale) {
		return locale.monthsRegex(isStrict);
	});

	addParseToken(['M', 'MM'], function (input, array) {
		array[MONTH] = toInt(input) - 1;
	});

	addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
		var month = config._locale.monthsParse(input, token, config._strict);
		// if we didn't find a month name, mark the date as invalid.
		if (month != null) {
			array[MONTH] = month;
		} else {
			getParsingFlags(config).invalidMonth = input;
		}
	});

	// LOCALES

	var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/;
	var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
	function localeMonths (m, format) {
		return isArray(this._months) ? this._months[m.month()] :
			this._months[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
	}

	var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
	function localeMonthsShort (m, format) {
		return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
			this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
	}

	function units_month__handleStrictParse(monthName, format, strict) {
		var i, ii, mom, llc = monthName.toLocaleLowerCase();
		if (!this._monthsParse) {
			// this is not used
			this._monthsParse = [];
			this._longMonthsParse = [];
			this._shortMonthsParse = [];
			for (i = 0; i < 12; ++i) {
				mom = create_utc__createUTC([2000, i]);
				this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
				this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
			}
		}

		if (strict) {
			if (format === 'MMM') {
				ii = indexOf.call(this._shortMonthsParse, llc);
				return ii !== -1 ? ii : null;
			} else {
				ii = indexOf.call(this._longMonthsParse, llc);
				return ii !== -1 ? ii : null;
			}
		} else {
			if (format === 'MMM') {
				ii = indexOf.call(this._shortMonthsParse, llc);
				if (ii !== -1) {
					return ii;
				}
				ii = indexOf.call(this._longMonthsParse, llc);
				return ii !== -1 ? ii : null;
			} else {
				ii = indexOf.call(this._longMonthsParse, llc);
				if (ii !== -1) {
					return ii;
				}
				ii = indexOf.call(this._shortMonthsParse, llc);
				return ii !== -1 ? ii : null;
			}
		}
	}

	function localeMonthsParse (monthName, format, strict) {
		var i, mom, regex;

		if (this._monthsParseExact) {
			return units_month__handleStrictParse.call(this, monthName, format, strict);
		}

		if (!this._monthsParse) {
			this._monthsParse = [];
			this._longMonthsParse = [];
			this._shortMonthsParse = [];
		}

		// TODO: add sorting
		// Sorting makes sure if one month (or abbr) is a prefix of another
		// see sorting in computeMonthsParse
		for (i = 0; i < 12; i++) {
			// make the regex if we don't have it already
			mom = create_utc__createUTC([2000, i]);
			if (strict && !this._longMonthsParse[i]) {
				this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
				this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
			}
			if (!strict && !this._monthsParse[i]) {
				regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
				this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
			}
			// test the regex
			if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
				return i;
			} else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
				return i;
			} else if (!strict && this._monthsParse[i].test(monthName)) {
				return i;
			}
		}
	}

	// MOMENTS

	function setMonth (mom, value) {
		var dayOfMonth;

		if (!mom.isValid()) {
			// No op
			return mom;
		}

		if (typeof value === 'string') {
			if (/^\d+$/.test(value)) {
				value = toInt(value);
			} else {
				value = mom.localeData().monthsParse(value);
				// TODO: Another silent failure?
				if (typeof value !== 'number') {
					return mom;
				}
			}
		}

		dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
		mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
		return mom;
	}

	function getSetMonth (value) {
		if (value != null) {
			setMonth(this, value);
			utils_hooks__hooks.updateOffset(this, true);
			return this;
		} else {
			return get_set__get(this, 'Month');
		}
	}

	function getDaysInMonth () {
		return daysInMonth(this.year(), this.month());
	}

	var defaultMonthsShortRegex = matchWord;
	function monthsShortRegex (isStrict) {
		if (this._monthsParseExact) {
			if (!hasOwnProp(this, '_monthsRegex')) {
				computeMonthsParse.call(this);
			}
			if (isStrict) {
				return this._monthsShortStrictRegex;
			} else {
				return this._monthsShortRegex;
			}
		} else {
			return this._monthsShortStrictRegex && isStrict ?
				this._monthsShortStrictRegex : this._monthsShortRegex;
		}
	}

	var defaultMonthsRegex = matchWord;
	function monthsRegex (isStrict) {
		if (this._monthsParseExact) {
			if (!hasOwnProp(this, '_monthsRegex')) {
				computeMonthsParse.call(this);
			}
			if (isStrict) {
				return this._monthsStrictRegex;
			} else {
				return this._monthsRegex;
			}
		} else {
			return this._monthsStrictRegex && isStrict ?
				this._monthsStrictRegex : this._monthsRegex;
		}
	}

	function computeMonthsParse () {
		function cmpLenRev(a, b) {
			return b.length - a.length;
		}

		var shortPieces = [], longPieces = [], mixedPieces = [],
			i, mom;
		for (i = 0; i < 12; i++) {
			// make the regex if we don't have it already
			mom = create_utc__createUTC([2000, i]);
			shortPieces.push(this.monthsShort(mom, ''));
			longPieces.push(this.months(mom, ''));
			mixedPieces.push(this.months(mom, ''));
			mixedPieces.push(this.monthsShort(mom, ''));
		}
		// Sorting makes sure if one month (or abbr) is a prefix of another it
		// will match the longer piece.
		shortPieces.sort(cmpLenRev);
		longPieces.sort(cmpLenRev);
		mixedPieces.sort(cmpLenRev);
		for (i = 0; i < 12; i++) {
			shortPieces[i] = regexEscape(shortPieces[i]);
			longPieces[i] = regexEscape(longPieces[i]);
			mixedPieces[i] = regexEscape(mixedPieces[i]);
		}

		this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
		this._monthsShortRegex = this._monthsRegex;
		this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
		this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
	}

	function checkOverflow (m) {
		var overflow;
		var a = m._a;

		if (a && getParsingFlags(m).overflow === -2) {
			overflow =
				a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
					a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
						a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
							a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
								a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
									a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
										-1;

			if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
				overflow = DATE;
			}
			if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
				overflow = WEEK;
			}
			if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
				overflow = WEEKDAY;
			}

			getParsingFlags(m).overflow = overflow;
		}

		return m;
	}

	// iso 8601 regex
	// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
	var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
	var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;

	var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

	var isoDates = [
		['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
		['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
		['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
		['GGGG-[W]WW', /\d{4}-W\d\d/, false],
		['YYYY-DDD', /\d{4}-\d{3}/],
		['YYYY-MM', /\d{4}-\d\d/, false],
		['YYYYYYMMDD', /[+-]\d{10}/],
		['YYYYMMDD', /\d{8}/],
		// YYYYMM is NOT allowed by the standard
		['GGGG[W]WWE', /\d{4}W\d{3}/],
		['GGGG[W]WW', /\d{4}W\d{2}/, false],
		['YYYYDDD', /\d{7}/]
	];

	// iso time formats and regexes
	var isoTimes = [
		['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
		['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
		['HH:mm:ss', /\d\d:\d\d:\d\d/],
		['HH:mm', /\d\d:\d\d/],
		['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
		['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
		['HHmmss', /\d\d\d\d\d\d/],
		['HHmm', /\d\d\d\d/],
		['HH', /\d\d/]
	];

	var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

	// date from iso format
	function configFromISO(config) {
		var i, l,
			string = config._i,
			match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
			allowTime, dateFormat, timeFormat, tzFormat;

		if (match) {
			getParsingFlags(config).iso = true;

			for (i = 0, l = isoDates.length; i < l; i++) {
				if (isoDates[i][1].exec(match[1])) {
					dateFormat = isoDates[i][0];
					allowTime = isoDates[i][2] !== false;
					break;
				}
			}
			if (dateFormat == null) {
				config._isValid = false;
				return;
			}
			if (match[3]) {
				for (i = 0, l = isoTimes.length; i < l; i++) {
					if (isoTimes[i][1].exec(match[3])) {
						// match[2] should be 'T' or space
						timeFormat = (match[2] || ' ') + isoTimes[i][0];
						break;
					}
				}
				if (timeFormat == null) {
					config._isValid = false;
					return;
				}
			}
			if (!allowTime && timeFormat != null) {
				config._isValid = false;
				return;
			}
			if (match[4]) {
				if (tzRegex.exec(match[4])) {
					tzFormat = 'Z';
				} else {
					config._isValid = false;
					return;
				}
			}
			config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
			configFromStringAndFormat(config);
		} else {
			config._isValid = false;
		}
	}

	// date from iso format or fallback
	function configFromString(config) {
		var matched = aspNetJsonRegex.exec(config._i);

		if (matched !== null) {
			config._d = new Date(+matched[1]);
			return;
		}

		configFromISO(config);
		if (config._isValid === false) {
			delete config._isValid;
			utils_hooks__hooks.createFromInputFallback(config);
		}
	}

	utils_hooks__hooks.createFromInputFallback = deprecate(
		'moment construction falls back to js Date. This is ' +
		'discouraged and will be removed in upcoming major ' +
		'release. Please refer to ' +
		'https://github.com/moment/moment/issues/1407 for more info.',
		function (config) {
			config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
		}
	);

	function createDate (y, m, d, h, M, s, ms) {
		//can't just apply() to create a date:
		//http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
		var date = new Date(y, m, d, h, M, s, ms);

		//the date constructor remaps years 0-99 to 1900-1999
		if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
			date.setFullYear(y);
		}
		return date;
	}

	function createUTCDate (y) {
		var date = new Date(Date.UTC.apply(null, arguments));

		//the Date.UTC function remaps years 0-99 to 1900-1999
		if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
			date.setUTCFullYear(y);
		}
		return date;
	}

	// FORMATTING

	addFormatToken('Y', 0, 0, function () {
		var y = this.year();
		return y <= 9999 ? '' + y : '+' + y;
	});

	addFormatToken(0, ['YY', 2], 0, function () {
		return this.year() % 100;
	});

	addFormatToken(0, ['YYYY',   4],       0, 'year');
	addFormatToken(0, ['YYYYY',  5],       0, 'year');
	addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

	// ALIASES

	addUnitAlias('year', 'y');

	// PARSING

	addRegexToken('Y',      matchSigned);
	addRegexToken('YY',     match1to2, match2);
	addRegexToken('YYYY',   match1to4, match4);
	addRegexToken('YYYYY',  match1to6, match6);
	addRegexToken('YYYYYY', match1to6, match6);

	addParseToken(['YYYYY', 'YYYYYY'], YEAR);
	addParseToken('YYYY', function (input, array) {
		array[YEAR] = input.length === 2 ? utils_hooks__hooks.parseTwoDigitYear(input) : toInt(input);
	});
	addParseToken('YY', function (input, array) {
		array[YEAR] = utils_hooks__hooks.parseTwoDigitYear(input);
	});
	addParseToken('Y', function (input, array) {
		array[YEAR] = parseInt(input, 10);
	});

	// HELPERS

	function daysInYear(year) {
		return isLeapYear(year) ? 366 : 365;
	}

	function isLeapYear(year) {
		return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
	}

	// HOOKS

	utils_hooks__hooks.parseTwoDigitYear = function (input) {
		return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
	};

	// MOMENTS

	var getSetYear = makeGetSet('FullYear', true);

	function getIsLeapYear () {
		return isLeapYear(this.year());
	}

	// start-of-first-week - start-of-year
	function firstWeekOffset(year, dow, doy) {
		var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
			fwd = 7 + dow - doy,
		// first-week day local weekday -- which local weekday is fwd
			fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

		return -fwdlw + fwd - 1;
	}

	//http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
	function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
		var localWeekday = (7 + weekday - dow) % 7,
			weekOffset = firstWeekOffset(year, dow, doy),
			dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
			resYear, resDayOfYear;

		if (dayOfYear <= 0) {
			resYear = year - 1;
			resDayOfYear = daysInYear(resYear) + dayOfYear;
		} else if (dayOfYear > daysInYear(year)) {
			resYear = year + 1;
			resDayOfYear = dayOfYear - daysInYear(year);
		} else {
			resYear = year;
			resDayOfYear = dayOfYear;
		}

		return {
			year: resYear,
			dayOfYear: resDayOfYear
		};
	}

	function weekOfYear(mom, dow, doy) {
		var weekOffset = firstWeekOffset(mom.year(), dow, doy),
			week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
			resWeek, resYear;

		if (week < 1) {
			resYear = mom.year() - 1;
			resWeek = week + weeksInYear(resYear, dow, doy);
		} else if (week > weeksInYear(mom.year(), dow, doy)) {
			resWeek = week - weeksInYear(mom.year(), dow, doy);
			resYear = mom.year() + 1;
		} else {
			resYear = mom.year();
			resWeek = week;
		}

		return {
			week: resWeek,
			year: resYear
		};
	}

	function weeksInYear(year, dow, doy) {
		var weekOffset = firstWeekOffset(year, dow, doy),
			weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
		return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
	}

	// Pick the first defined of two or three arguments.
	function defaults(a, b, c) {
		if (a != null) {
			return a;
		}
		if (b != null) {
			return b;
		}
		return c;
	}

	function currentDateArray(config) {
		// hooks is actually the exported moment object
		var nowValue = new Date(utils_hooks__hooks.now());
		if (config._useUTC) {
			return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
		}
		return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
	}

	// convert an array to a date.
	// the array should mirror the parameters below
	// note: all values past the year are optional and will default to the lowest possible value.
	// [year, month, day , hour, minute, second, millisecond]
	function configFromArray (config) {
		var i, date, input = [], currentDate, yearToUse;

		if (config._d) {
			return;
		}

		currentDate = currentDateArray(config);

		//compute day of the year from weeks and weekdays
		if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
			dayOfYearFromWeekInfo(config);
		}

		//if the day of the year is set, figure out what it is
		if (config._dayOfYear) {
			yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

			if (config._dayOfYear > daysInYear(yearToUse)) {
				getParsingFlags(config)._overflowDayOfYear = true;
			}

			date = createUTCDate(yearToUse, 0, config._dayOfYear);
			config._a[MONTH] = date.getUTCMonth();
			config._a[DATE] = date.getUTCDate();
		}

		// Default to current date.
		// * if no year, month, day of month are given, default to today
		// * if day of month is given, default month and year
		// * if month is given, default only year
		// * if year is given, don't default anything
		for (i = 0; i < 3 && config._a[i] == null; ++i) {
			config._a[i] = input[i] = currentDate[i];
		}

		// Zero out whatever was not defaulted, including time
		for (; i < 7; i++) {
			config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
		}

		// Check for 24:00:00.000
		if (config._a[HOUR] === 24 &&
			config._a[MINUTE] === 0 &&
			config._a[SECOND] === 0 &&
			config._a[MILLISECOND] === 0) {
			config._nextDay = true;
			config._a[HOUR] = 0;
		}

		config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
		// Apply timezone offset from input. The actual utcOffset can be changed
		// with parseZone.
		if (config._tzm != null) {
			config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
		}

		if (config._nextDay) {
			config._a[HOUR] = 24;
		}
	}

	function dayOfYearFromWeekInfo(config) {
		var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

		w = config._w;
		if (w.GG != null || w.W != null || w.E != null) {
			dow = 1;
			doy = 4;

			// TODO: We need to take the current isoWeekYear, but that depends on
			// how we interpret now (local, utc, fixed offset). So create
			// a now version of current config (take local/utc/offset flags, and
			// create now).
			weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(local__createLocal(), 1, 4).year);
			week = defaults(w.W, 1);
			weekday = defaults(w.E, 1);
			if (weekday < 1 || weekday > 7) {
				weekdayOverflow = true;
			}
		} else {
			dow = config._locale._week.dow;
			doy = config._locale._week.doy;

			weekYear = defaults(w.gg, config._a[YEAR], weekOfYear(local__createLocal(), dow, doy).year);
			week = defaults(w.w, 1);

			if (w.d != null) {
				// weekday -- low day numbers are considered next week
				weekday = w.d;
				if (weekday < 0 || weekday > 6) {
					weekdayOverflow = true;
				}
			} else if (w.e != null) {
				// local weekday -- counting starts from begining of week
				weekday = w.e + dow;
				if (w.e < 0 || w.e > 6) {
					weekdayOverflow = true;
				}
			} else {
				// default to begining of week
				weekday = dow;
			}
		}
		if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
			getParsingFlags(config)._overflowWeeks = true;
		} else if (weekdayOverflow != null) {
			getParsingFlags(config)._overflowWeekday = true;
		} else {
			temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
			config._a[YEAR] = temp.year;
			config._dayOfYear = temp.dayOfYear;
		}
	}

	// constant that refers to the ISO standard
	utils_hooks__hooks.ISO_8601 = function () {};

	// date from string and format string
	function configFromStringAndFormat(config) {
		// TODO: Move this to another part of the creation flow to prevent circular deps
		if (config._f === utils_hooks__hooks.ISO_8601) {
			configFromISO(config);
			return;
		}

		config._a = [];
		getParsingFlags(config).empty = true;

		// This array is used to make a Date, either with `new Date` or `Date.UTC`
		var string = '' + config._i,
			i, parsedInput, tokens, token, skipped,
			stringLength = string.length,
			totalParsedInputLength = 0;

		tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

		for (i = 0; i < tokens.length; i++) {
			token = tokens[i];
			parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
			// console.log('token', token, 'parsedInput', parsedInput,
			//         'regex', getParseRegexForToken(token, config));
			if (parsedInput) {
				skipped = string.substr(0, string.indexOf(parsedInput));
				if (skipped.length > 0) {
					getParsingFlags(config).unusedInput.push(skipped);
				}
				string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
				totalParsedInputLength += parsedInput.length;
			}
			// don't parse if it's not a known token
			if (formatTokenFunctions[token]) {
				if (parsedInput) {
					getParsingFlags(config).empty = false;
				}
				else {
					getParsingFlags(config).unusedTokens.push(token);
				}
				addTimeToArrayFromToken(token, parsedInput, config);
			}
			else if (config._strict && !parsedInput) {
				getParsingFlags(config).unusedTokens.push(token);
			}
		}

		// add remaining unparsed input length to the string
		getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
		if (string.length > 0) {
			getParsingFlags(config).unusedInput.push(string);
		}

		// clear _12h flag if hour is <= 12
		if (getParsingFlags(config).bigHour === true &&
			config._a[HOUR] <= 12 &&
			config._a[HOUR] > 0) {
			getParsingFlags(config).bigHour = undefined;
		}

		getParsingFlags(config).parsedDateParts = config._a.slice(0);
		getParsingFlags(config).meridiem = config._meridiem;
		// handle meridiem
		config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

		configFromArray(config);
		checkOverflow(config);
	}


	function meridiemFixWrap (locale, hour, meridiem) {
		var isPm;

		if (meridiem == null) {
			// nothing to do
			return hour;
		}
		if (locale.meridiemHour != null) {
			return locale.meridiemHour(hour, meridiem);
		} else if (locale.isPM != null) {
			// Fallback
			isPm = locale.isPM(meridiem);
			if (isPm && hour < 12) {
				hour += 12;
			}
			if (!isPm && hour === 12) {
				hour = 0;
			}
			return hour;
		} else {
			// this is not supposed to happen
			return hour;
		}
	}

	// date from string and array of format strings
	function configFromStringAndArray(config) {
		var tempConfig,
			bestMoment,

			scoreToBeat,
			i,
			currentScore;

		if (config._f.length === 0) {
			getParsingFlags(config).invalidFormat = true;
			config._d = new Date(NaN);
			return;
		}

		for (i = 0; i < config._f.length; i++) {
			currentScore = 0;
			tempConfig = copyConfig({}, config);
			if (config._useUTC != null) {
				tempConfig._useUTC = config._useUTC;
			}
			tempConfig._f = config._f[i];
			configFromStringAndFormat(tempConfig);

			if (!valid__isValid(tempConfig)) {
				continue;
			}

			// if there is any input that was not parsed add a penalty for that format
			currentScore += getParsingFlags(tempConfig).charsLeftOver;

			//or tokens
			currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

			getParsingFlags(tempConfig).score = currentScore;

			if (scoreToBeat == null || currentScore < scoreToBeat) {
				scoreToBeat = currentScore;
				bestMoment = tempConfig;
			}
		}

		extend(config, bestMoment || tempConfig);
	}

	function configFromObject(config) {
		if (config._d) {
			return;
		}

		var i = normalizeObjectUnits(config._i);
		config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
			return obj && parseInt(obj, 10);
		});

		configFromArray(config);
	}

	function createFromConfig (config) {
		var res = new Moment(checkOverflow(prepareConfig(config)));
		if (res._nextDay) {
			// Adding is smart enough around DST
			res.add(1, 'd');
			res._nextDay = undefined;
		}

		return res;
	}

	function prepareConfig (config) {
		var input = config._i,
			format = config._f;

		config._locale = config._locale || locale_locales__getLocale(config._l);

		if (input === null || (format === undefined && input === '')) {
			return valid__createInvalid({nullInput: true});
		}

		if (typeof input === 'string') {
			config._i = input = config._locale.preparse(input);
		}

		if (isMoment(input)) {
			return new Moment(checkOverflow(input));
		} else if (isArray(format)) {
			configFromStringAndArray(config);
		} else if (format) {
			configFromStringAndFormat(config);
		} else if (isDate(input)) {
			config._d = input;
		} else {
			configFromInput(config);
		}

		if (!valid__isValid(config)) {
			config._d = null;
		}

		return config;
	}

	function configFromInput(config) {
		var input = config._i;
		if (input === undefined) {
			config._d = new Date(utils_hooks__hooks.now());
		} else if (isDate(input)) {
			config._d = new Date(input.valueOf());
		} else if (typeof input === 'string') {
			configFromString(config);
		} else if (isArray(input)) {
			config._a = map(input.slice(0), function (obj) {
				return parseInt(obj, 10);
			});
			configFromArray(config);
		} else if (typeof(input) === 'object') {
			configFromObject(config);
		} else if (typeof(input) === 'number') {
			// from milliseconds
			config._d = new Date(input);
		} else {
			utils_hooks__hooks.createFromInputFallback(config);
		}
	}

	function createLocalOrUTC (input, format, locale, strict, isUTC) {
		var c = {};

		if (typeof(locale) === 'boolean') {
			strict = locale;
			locale = undefined;
		}
		// object construction must be done this way.
		// https://github.com/moment/moment/issues/1423
		c._isAMomentObject = true;
		c._useUTC = c._isUTC = isUTC;
		c._l = locale;
		c._i = input;
		c._f = format;
		c._strict = strict;

		return createFromConfig(c);
	}

	function local__createLocal (input, format, locale, strict) {
		return createLocalOrUTC(input, format, locale, strict, false);
	}

	var prototypeMin = deprecate(
		'moment().min is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',
		function () {
			var other = local__createLocal.apply(null, arguments);
			if (this.isValid() && other.isValid()) {
				return other < this ? this : other;
			} else {
				return valid__createInvalid();
			}
		}
	);

	var prototypeMax = deprecate(
		'moment().max is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',
		function () {
			var other = local__createLocal.apply(null, arguments);
			if (this.isValid() && other.isValid()) {
				return other > this ? this : other;
			} else {
				return valid__createInvalid();
			}
		}
	);

	// Pick a moment m from moments so that m[fn](other) is true for all
	// other. This relies on the function fn to be transitive.
	//
	// moments should either be an array of moment objects or an array, whose
	// first element is an array of moment objects.
	function pickBy(fn, moments) {
		var res, i;
		if (moments.length === 1 && isArray(moments[0])) {
			moments = moments[0];
		}
		if (!moments.length) {
			return local__createLocal();
		}
		res = moments[0];
		for (i = 1; i < moments.length; ++i) {
			if (!moments[i].isValid() || moments[i][fn](res)) {
				res = moments[i];
			}
		}
		return res;
	}

	// TODO: Use [].sort instead?
	function min () {
		var args = [].slice.call(arguments, 0);

		return pickBy('isBefore', args);
	}

	function max () {
		var args = [].slice.call(arguments, 0);

		return pickBy('isAfter', args);
	}

	var now = function () {
		return Date.now ? Date.now() : +(new Date());
	};

	function Duration (duration) {
		var normalizedInput = normalizeObjectUnits(duration),
			years = normalizedInput.year || 0,
			quarters = normalizedInput.quarter || 0,
			months = normalizedInput.month || 0,
			weeks = normalizedInput.week || 0,
			days = normalizedInput.day || 0,
			hours = normalizedInput.hour || 0,
			minutes = normalizedInput.minute || 0,
			seconds = normalizedInput.second || 0,
			milliseconds = normalizedInput.millisecond || 0;

		// representation for dateAddRemove
		this._milliseconds = +milliseconds +
			seconds * 1e3 + // 1000
			minutes * 6e4 + // 1000 * 60
			hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
		// Because of dateAddRemove treats 24 hours as different from a
		// day when working around DST, we need to store them separately
		this._days = +days +
			weeks * 7;
		// It is impossible translate months into days without knowing
		// which months you are are talking about, so we have to store
		// it separately.
		this._months = +months +
			quarters * 3 +
			years * 12;

		this._data = {};

		this._locale = locale_locales__getLocale();

		this._bubble();
	}

	function isDuration (obj) {
		return obj instanceof Duration;
	}

	// FORMATTING

	function offset (token, separator) {
		addFormatToken(token, 0, 0, function () {
			var offset = this.utcOffset();
			var sign = '+';
			if (offset < 0) {
				offset = -offset;
				sign = '-';
			}
			return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
		});
	}

	offset('Z', ':');
	offset('ZZ', '');

	// PARSING

	addRegexToken('Z',  matchShortOffset);
	addRegexToken('ZZ', matchShortOffset);
	addParseToken(['Z', 'ZZ'], function (input, array, config) {
		config._useUTC = true;
		config._tzm = offsetFromString(matchShortOffset, input);
	});

	// HELPERS

	// timezone chunker
	// '+10:00' > ['10',  '00']
	// '-1530'  > ['-15', '30']
	var chunkOffset = /([\+\-]|\d\d)/gi;

	function offsetFromString(matcher, string) {
		var matches = ((string || '').match(matcher) || []);
		var chunk   = matches[matches.length - 1] || [];
		var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
		var minutes = +(parts[1] * 60) + toInt(parts[2]);

		return parts[0] === '+' ? minutes : -minutes;
	}

	// Return a moment from input, that is local/utc/zone equivalent to model.
	function cloneWithOffset(input, model) {
		var res, diff;
		if (model._isUTC) {
			res = model.clone();
			diff = (isMoment(input) || isDate(input) ? input.valueOf() : local__createLocal(input).valueOf()) - res.valueOf();
			// Use low-level api, because this fn is low-level api.
			res._d.setTime(res._d.valueOf() + diff);
			utils_hooks__hooks.updateOffset(res, false);
			return res;
		} else {
			return local__createLocal(input).local();
		}
	}

	function getDateOffset (m) {
		// On Firefox.24 Date#getTimezoneOffset returns a floating point.
		// https://github.com/moment/moment/pull/1871
		return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
	}

	// HOOKS

	// This function will be called whenever a moment is mutated.
	// It is intended to keep the offset in sync with the timezone.
	utils_hooks__hooks.updateOffset = function () {};

	// MOMENTS

	// keepLocalTime = true means only change the timezone, without
	// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
	// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
	// +0200, so we adjust the time as needed, to be valid.
	//
	// Keeping the time actually adds/subtracts (one hour)
	// from the actual represented time. That is why we call updateOffset
	// a second time. In case it wants us to change the offset again
	// _changeInProgress == true case, then we have to adjust, because
	// there is no such time in the given timezone.
	function getSetOffset (input, keepLocalTime) {
		var offset = this._offset || 0,
			localAdjust;
		if (!this.isValid()) {
			return input != null ? this : NaN;
		}
		if (input != null) {
			if (typeof input === 'string') {
				input = offsetFromString(matchShortOffset, input);
			} else if (Math.abs(input) < 16) {
				input = input * 60;
			}
			if (!this._isUTC && keepLocalTime) {
				localAdjust = getDateOffset(this);
			}
			this._offset = input;
			this._isUTC = true;
			if (localAdjust != null) {
				this.add(localAdjust, 'm');
			}
			if (offset !== input) {
				if (!keepLocalTime || this._changeInProgress) {
					add_subtract__addSubtract(this, create__createDuration(input - offset, 'm'), 1, false);
				} else if (!this._changeInProgress) {
					this._changeInProgress = true;
					utils_hooks__hooks.updateOffset(this, true);
					this._changeInProgress = null;
				}
			}
			return this;
		} else {
			return this._isUTC ? offset : getDateOffset(this);
		}
	}

	function getSetZone (input, keepLocalTime) {
		if (input != null) {
			if (typeof input !== 'string') {
				input = -input;
			}

			this.utcOffset(input, keepLocalTime);

			return this;
		} else {
			return -this.utcOffset();
		}
	}

	function setOffsetToUTC (keepLocalTime) {
		return this.utcOffset(0, keepLocalTime);
	}

	function setOffsetToLocal (keepLocalTime) {
		if (this._isUTC) {
			this.utcOffset(0, keepLocalTime);
			this._isUTC = false;

			if (keepLocalTime) {
				this.subtract(getDateOffset(this), 'm');
			}
		}
		return this;
	}

	function setOffsetToParsedOffset () {
		if (this._tzm) {
			this.utcOffset(this._tzm);
		} else if (typeof this._i === 'string') {
			this.utcOffset(offsetFromString(matchOffset, this._i));
		}
		return this;
	}

	function hasAlignedHourOffset (input) {
		if (!this.isValid()) {
			return false;
		}
		input = input ? local__createLocal(input).utcOffset() : 0;

		return (this.utcOffset() - input) % 60 === 0;
	}

	function isDaylightSavingTime () {
		return (
			this.utcOffset() > this.clone().month(0).utcOffset() ||
			this.utcOffset() > this.clone().month(5).utcOffset()
		);
	}

	function isDaylightSavingTimeShifted () {
		if (!isUndefined(this._isDSTShifted)) {
			return this._isDSTShifted;
		}

		var c = {};

		copyConfig(c, this);
		c = prepareConfig(c);

		if (c._a) {
			var other = c._isUTC ? create_utc__createUTC(c._a) : local__createLocal(c._a);
			this._isDSTShifted = this.isValid() &&
				compareArrays(c._a, other.toArray()) > 0;
		} else {
			this._isDSTShifted = false;
		}

		return this._isDSTShifted;
	}

	function isLocal () {
		return this.isValid() ? !this._isUTC : false;
	}

	function isUtcOffset () {
		return this.isValid() ? this._isUTC : false;
	}

	function isUtc () {
		return this.isValid() ? this._isUTC && this._offset === 0 : false;
	}

	// ASP.NET json date format regex
	var aspNetRegex = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/;

	// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
	// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
	// and further modified to allow for strings containing both week and day
	var isoRegex = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;

	function create__createDuration (input, key) {
		var duration = input,
		// matching against regexp is expensive, do it on demand
			match = null,
			sign,
			ret,
			diffRes;

		if (isDuration(input)) {
			duration = {
				ms : input._milliseconds,
				d  : input._days,
				M  : input._months
			};
		} else if (typeof input === 'number') {
			duration = {};
			if (key) {
				duration[key] = input;
			} else {
				duration.milliseconds = input;
			}
		} else if (!!(match = aspNetRegex.exec(input))) {
			sign = (match[1] === '-') ? -1 : 1;
			duration = {
				y  : 0,
				d  : toInt(match[DATE])        * sign,
				h  : toInt(match[HOUR])        * sign,
				m  : toInt(match[MINUTE])      * sign,
				s  : toInt(match[SECOND])      * sign,
				ms : toInt(match[MILLISECOND]) * sign
			};
		} else if (!!(match = isoRegex.exec(input))) {
			sign = (match[1] === '-') ? -1 : 1;
			duration = {
				y : parseIso(match[2], sign),
				M : parseIso(match[3], sign),
				w : parseIso(match[4], sign),
				d : parseIso(match[5], sign),
				h : parseIso(match[6], sign),
				m : parseIso(match[7], sign),
				s : parseIso(match[8], sign)
			};
		} else if (duration == null) {// checks for null or undefined
			duration = {};
		} else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
			diffRes = momentsDifference(local__createLocal(duration.from), local__createLocal(duration.to));

			duration = {};
			duration.ms = diffRes.milliseconds;
			duration.M = diffRes.months;
		}

		ret = new Duration(duration);

		if (isDuration(input) && hasOwnProp(input, '_locale')) {
			ret._locale = input._locale;
		}

		return ret;
	}

	create__createDuration.fn = Duration.prototype;

	function parseIso (inp, sign) {
		// We'd normally use ~~inp for this, but unfortunately it also
		// converts floats to ints.
		// inp may be undefined, so careful calling replace on it.
		var res = inp && parseFloat(inp.replace(',', '.'));
		// apply sign while we're at it
		return (isNaN(res) ? 0 : res) * sign;
	}

	function positiveMomentsDifference(base, other) {
		var res = {milliseconds: 0, months: 0};

		res.months = other.month() - base.month() +
			(other.year() - base.year()) * 12;
		if (base.clone().add(res.months, 'M').isAfter(other)) {
			--res.months;
		}

		res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

		return res;
	}

	function momentsDifference(base, other) {
		var res;
		if (!(base.isValid() && other.isValid())) {
			return {milliseconds: 0, months: 0};
		}

		other = cloneWithOffset(other, base);
		if (base.isBefore(other)) {
			res = positiveMomentsDifference(base, other);
		} else {
			res = positiveMomentsDifference(other, base);
			res.milliseconds = -res.milliseconds;
			res.months = -res.months;
		}

		return res;
	}

	function absRound (number) {
		if (number < 0) {
			return Math.round(-1 * number) * -1;
		} else {
			return Math.round(number);
		}
	}

	// TODO: remove 'name' arg after deprecation is removed
	function createAdder(direction, name) {
		return function (val, period) {
			var dur, tmp;
			//invert the arguments, but complain about it
			if (period !== null && !isNaN(+period)) {
				deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period).');
				tmp = val; val = period; period = tmp;
			}

			val = typeof val === 'string' ? +val : val;
			dur = create__createDuration(val, period);
			add_subtract__addSubtract(this, dur, direction);
			return this;
		};
	}

	function add_subtract__addSubtract (mom, duration, isAdding, updateOffset) {
		var milliseconds = duration._milliseconds,
			days = absRound(duration._days),
			months = absRound(duration._months);

		if (!mom.isValid()) {
			// No op
			return;
		}

		updateOffset = updateOffset == null ? true : updateOffset;

		if (milliseconds) {
			mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
		}
		if (days) {
			get_set__set(mom, 'Date', get_set__get(mom, 'Date') + days * isAdding);
		}
		if (months) {
			setMonth(mom, get_set__get(mom, 'Month') + months * isAdding);
		}
		if (updateOffset) {
			utils_hooks__hooks.updateOffset(mom, days || months);
		}
	}

	var add_subtract__add      = createAdder(1, 'add');
	var add_subtract__subtract = createAdder(-1, 'subtract');

	function moment_calendar__calendar (time, formats) {
		// We want to compare the start of today, vs this.
		// Getting start-of-today depends on whether we're local/utc/offset or not.
		var now = time || local__createLocal(),
			sod = cloneWithOffset(now, this).startOf('day'),
			diff = this.diff(sod, 'days', true),
			format = diff < -6 ? 'sameElse' :
				diff < -1 ? 'lastWeek' :
					diff < 0 ? 'lastDay' :
						diff < 1 ? 'sameDay' :
							diff < 2 ? 'nextDay' :
								diff < 7 ? 'nextWeek' : 'sameElse';

		var output = formats && (isFunction(formats[format]) ? formats[format]() : formats[format]);

		return this.format(output || this.localeData().calendar(format, this, local__createLocal(now)));
	}

	function clone () {
		return new Moment(this);
	}

	function isAfter (input, units) {
		var localInput = isMoment(input) ? input : local__createLocal(input);
		if (!(this.isValid() && localInput.isValid())) {
			return false;
		}
		units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
		if (units === 'millisecond') {
			return this.valueOf() > localInput.valueOf();
		} else {
			return localInput.valueOf() < this.clone().startOf(units).valueOf();
		}
	}

	function isBefore (input, units) {
		var localInput = isMoment(input) ? input : local__createLocal(input);
		if (!(this.isValid() && localInput.isValid())) {
			return false;
		}
		units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
		if (units === 'millisecond') {
			return this.valueOf() < localInput.valueOf();
		} else {
			return this.clone().endOf(units).valueOf() < localInput.valueOf();
		}
	}

	function isBetween (from, to, units, inclusivity) {
		inclusivity = inclusivity || '()';
		return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
			(inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
	}

	function isSame (input, units) {
		var localInput = isMoment(input) ? input : local__createLocal(input),
			inputMs;
		if (!(this.isValid() && localInput.isValid())) {
			return false;
		}
		units = normalizeUnits(units || 'millisecond');
		if (units === 'millisecond') {
			return this.valueOf() === localInput.valueOf();
		} else {
			inputMs = localInput.valueOf();
			return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
		}
	}

	function isSameOrAfter (input, units) {
		return this.isSame(input, units) || this.isAfter(input,units);
	}

	function isSameOrBefore (input, units) {
		return this.isSame(input, units) || this.isBefore(input,units);
	}

	function diff (input, units, asFloat) {
		var that,
			zoneDelta,
			delta, output;

		if (!this.isValid()) {
			return NaN;
		}

		that = cloneWithOffset(input, this);

		if (!that.isValid()) {
			return NaN;
		}

		zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

		units = normalizeUnits(units);

		if (units === 'year' || units === 'month' || units === 'quarter') {
			output = monthDiff(this, that);
			if (units === 'quarter') {
				output = output / 3;
			} else if (units === 'year') {
				output = output / 12;
			}
		} else {
			delta = this - that;
			output = units === 'second' ? delta / 1e3 : // 1000
				units === 'minute' ? delta / 6e4 : // 1000 * 60
					units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60
						units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
							units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
								delta;
		}
		return asFloat ? output : absFloor(output);
	}

	function monthDiff (a, b) {
		// difference in months
		var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
		// b is in (anchor - 1 month, anchor + 1 month)
			anchor = a.clone().add(wholeMonthDiff, 'months'),
			anchor2, adjust;

		if (b - anchor < 0) {
			anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
			// linear across the month
			adjust = (b - anchor) / (anchor - anchor2);
		} else {
			anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
			// linear across the month
			adjust = (b - anchor) / (anchor2 - anchor);
		}

		//check for negative zero, return zero if negative zero
		return -(wholeMonthDiff + adjust) || 0;
	}

	utils_hooks__hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
	utils_hooks__hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

	function toString () {
		return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
	}

	function moment_format__toISOString () {
		var m = this.clone().utc();
		if (0 < m.year() && m.year() <= 9999) {
			if (isFunction(Date.prototype.toISOString)) {
				// native implementation is ~50x faster, use it when we can
				return this.toDate().toISOString();
			} else {
				return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
			}
		} else {
			return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
		}
	}

	function moment_format__format (inputString) {
		if (!inputString) {
			inputString = this.isUtc() ? utils_hooks__hooks.defaultFormatUtc : utils_hooks__hooks.defaultFormat;
		}
		var output = formatMoment(this, inputString);
		return this.localeData().postformat(output);
	}

	function from (time, withoutSuffix) {
		if (this.isValid() &&
			((isMoment(time) && time.isValid()) ||
			local__createLocal(time).isValid())) {
			return create__createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
		} else {
			return this.localeData().invalidDate();
		}
	}

	function fromNow (withoutSuffix) {
		return this.from(local__createLocal(), withoutSuffix);
	}

	function to (time, withoutSuffix) {
		if (this.isValid() &&
			((isMoment(time) && time.isValid()) ||
			local__createLocal(time).isValid())) {
			return create__createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
		} else {
			return this.localeData().invalidDate();
		}
	}

	function toNow (withoutSuffix) {
		return this.to(local__createLocal(), withoutSuffix);
	}

	// If passed a locale key, it will set the locale for this
	// instance.  Otherwise, it will return the locale configuration
	// variables for this instance.
	function locale (key) {
		var newLocaleData;

		if (key === undefined) {
			return this._locale._abbr;
		} else {
			newLocaleData = locale_locales__getLocale(key);
			if (newLocaleData != null) {
				this._locale = newLocaleData;
			}
			return this;
		}
	}

	var lang = deprecate(
		'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
		function (key) {
			if (key === undefined) {
				return this.localeData();
			} else {
				return this.locale(key);
			}
		}
	);

	function localeData () {
		return this._locale;
	}

	function startOf (units) {
		units = normalizeUnits(units);
		// the following switch intentionally omits break keywords
		// to utilize falling through the cases.
		switch (units) {
			case 'year':
				this.month(0);
			/* falls through */
			case 'quarter':
			case 'month':
				this.date(1);
			/* falls through */
			case 'week':
			case 'isoWeek':
			case 'day':
			case 'date':
				this.hours(0);
			/* falls through */
			case 'hour':
				this.minutes(0);
			/* falls through */
			case 'minute':
				this.seconds(0);
			/* falls through */
			case 'second':
				this.milliseconds(0);
		}

		// weeks are a special case
		if (units === 'week') {
			this.weekday(0);
		}
		if (units === 'isoWeek') {
			this.isoWeekday(1);
		}

		// quarters are also special
		if (units === 'quarter') {
			this.month(Math.floor(this.month() / 3) * 3);
		}

		return this;
	}

	function endOf (units) {
		units = normalizeUnits(units);
		if (units === undefined || units === 'millisecond') {
			return this;
		}

		// 'date' is an alias for 'day', so it should be considered as such.
		if (units === 'date') {
			units = 'day';
		}

		return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
	}

	function to_type__valueOf () {
		return this._d.valueOf() - ((this._offset || 0) * 60000);
	}

	function unix () {
		return Math.floor(this.valueOf() / 1000);
	}

	function toDate () {
		return this._offset ? new Date(this.valueOf()) : this._d;
	}

	function toArray () {
		var m = this;
		return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
	}

	function toObject () {
		var m = this;
		return {
			years: m.year(),
			months: m.month(),
			date: m.date(),
			hours: m.hours(),
			minutes: m.minutes(),
			seconds: m.seconds(),
			milliseconds: m.milliseconds()
		};
	}

	function toJSON () {
		// new Date(NaN).toJSON() === null
		return this.isValid() ? this.toISOString() : null;
	}

	function moment_valid__isValid () {
		return valid__isValid(this);
	}

	function parsingFlags () {
		return extend({}, getParsingFlags(this));
	}

	function invalidAt () {
		return getParsingFlags(this).overflow;
	}

	function creationData() {
		return {
			input: this._i,
			format: this._f,
			locale: this._locale,
			isUTC: this._isUTC,
			strict: this._strict
		};
	}

	// FORMATTING

	addFormatToken(0, ['gg', 2], 0, function () {
		return this.weekYear() % 100;
	});

	addFormatToken(0, ['GG', 2], 0, function () {
		return this.isoWeekYear() % 100;
	});

	function addWeekYearFormatToken (token, getter) {
		addFormatToken(0, [token, token.length], 0, getter);
	}

	addWeekYearFormatToken('gggg',     'weekYear');
	addWeekYearFormatToken('ggggg',    'weekYear');
	addWeekYearFormatToken('GGGG',  'isoWeekYear');
	addWeekYearFormatToken('GGGGG', 'isoWeekYear');

	// ALIASES

	addUnitAlias('weekYear', 'gg');
	addUnitAlias('isoWeekYear', 'GG');

	// PARSING

	addRegexToken('G',      matchSigned);
	addRegexToken('g',      matchSigned);
	addRegexToken('GG',     match1to2, match2);
	addRegexToken('gg',     match1to2, match2);
	addRegexToken('GGGG',   match1to4, match4);
	addRegexToken('gggg',   match1to4, match4);
	addRegexToken('GGGGG',  match1to6, match6);
	addRegexToken('ggggg',  match1to6, match6);

	addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
		week[token.substr(0, 2)] = toInt(input);
	});

	addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
		week[token] = utils_hooks__hooks.parseTwoDigitYear(input);
	});

	// MOMENTS

	function getSetWeekYear (input) {
		return getSetWeekYearHelper.call(this,
			input,
			this.week(),
			this.weekday(),
			this.localeData()._week.dow,
			this.localeData()._week.doy);
	}

	function getSetISOWeekYear (input) {
		return getSetWeekYearHelper.call(this,
			input, this.isoWeek(), this.isoWeekday(), 1, 4);
	}

	function getISOWeeksInYear () {
		return weeksInYear(this.year(), 1, 4);
	}

	function getWeeksInYear () {
		var weekInfo = this.localeData()._week;
		return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
	}

	function getSetWeekYearHelper(input, week, weekday, dow, doy) {
		var weeksTarget;
		if (input == null) {
			return weekOfYear(this, dow, doy).year;
		} else {
			weeksTarget = weeksInYear(input, dow, doy);
			if (week > weeksTarget) {
				week = weeksTarget;
			}
			return setWeekAll.call(this, input, week, weekday, dow, doy);
		}
	}

	function setWeekAll(weekYear, week, weekday, dow, doy) {
		var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
			date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

		this.year(date.getUTCFullYear());
		this.month(date.getUTCMonth());
		this.date(date.getUTCDate());
		return this;
	}

	// FORMATTING

	addFormatToken('Q', 0, 'Qo', 'quarter');

	// ALIASES

	addUnitAlias('quarter', 'Q');

	// PARSING

	addRegexToken('Q', match1);
	addParseToken('Q', function (input, array) {
		array[MONTH] = (toInt(input) - 1) * 3;
	});

	// MOMENTS

	function getSetQuarter (input) {
		return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
	}

	// FORMATTING

	addFormatToken('w', ['ww', 2], 'wo', 'week');
	addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

	// ALIASES

	addUnitAlias('week', 'w');
	addUnitAlias('isoWeek', 'W');

	// PARSING

	addRegexToken('w',  match1to2);
	addRegexToken('ww', match1to2, match2);
	addRegexToken('W',  match1to2);
	addRegexToken('WW', match1to2, match2);

	addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
		week[token.substr(0, 1)] = toInt(input);
	});

	// HELPERS

	// LOCALES

	function localeWeek (mom) {
		return weekOfYear(mom, this._week.dow, this._week.doy).week;
	}

	var defaultLocaleWeek = {
		dow : 0, // Sunday is the first day of the week.
		doy : 6  // The week that contains Jan 1st is the first week of the year.
	};

	function localeFirstDayOfWeek () {
		return this._week.dow;
	}

	function localeFirstDayOfYear () {
		return this._week.doy;
	}

	// MOMENTS

	function getSetWeek (input) {
		var week = this.localeData().week(this);
		return input == null ? week : this.add((input - week) * 7, 'd');
	}

	function getSetISOWeek (input) {
		var week = weekOfYear(this, 1, 4).week;
		return input == null ? week : this.add((input - week) * 7, 'd');
	}

	// FORMATTING

	addFormatToken('D', ['DD', 2], 'Do', 'date');

	// ALIASES

	addUnitAlias('date', 'D');

	// PARSING

	addRegexToken('D',  match1to2);
	addRegexToken('DD', match1to2, match2);
	addRegexToken('Do', function (isStrict, locale) {
		return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;
	});

	addParseToken(['D', 'DD'], DATE);
	addParseToken('Do', function (input, array) {
		array[DATE] = toInt(input.match(match1to2)[0], 10);
	});

	// MOMENTS

	var getSetDayOfMonth = makeGetSet('Date', true);

	// FORMATTING

	addFormatToken('d', 0, 'do', 'day');

	addFormatToken('dd', 0, 0, function (format) {
		return this.localeData().weekdaysMin(this, format);
	});

	addFormatToken('ddd', 0, 0, function (format) {
		return this.localeData().weekdaysShort(this, format);
	});

	addFormatToken('dddd', 0, 0, function (format) {
		return this.localeData().weekdays(this, format);
	});

	addFormatToken('e', 0, 0, 'weekday');
	addFormatToken('E', 0, 0, 'isoWeekday');

	// ALIASES

	addUnitAlias('day', 'd');
	addUnitAlias('weekday', 'e');
	addUnitAlias('isoWeekday', 'E');

	// PARSING

	addRegexToken('d',    match1to2);
	addRegexToken('e',    match1to2);
	addRegexToken('E',    match1to2);
	addRegexToken('dd',   function (isStrict, locale) {
		return locale.weekdaysMinRegex(isStrict);
	});
	addRegexToken('ddd',   function (isStrict, locale) {
		return locale.weekdaysShortRegex(isStrict);
	});
	addRegexToken('dddd',   function (isStrict, locale) {
		return locale.weekdaysRegex(isStrict);
	});

	addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
		var weekday = config._locale.weekdaysParse(input, token, config._strict);
		// if we didn't get a weekday name, mark the date as invalid
		if (weekday != null) {
			week.d = weekday;
		} else {
			getParsingFlags(config).invalidWeekday = input;
		}
	});

	addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
		week[token] = toInt(input);
	});

	// HELPERS

	function parseWeekday(input, locale) {
		if (typeof input !== 'string') {
			return input;
		}

		if (!isNaN(input)) {
			return parseInt(input, 10);
		}

		input = locale.weekdaysParse(input);
		if (typeof input === 'number') {
			return input;
		}

		return null;
	}

	// LOCALES

	var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
	function localeWeekdays (m, format) {
		return isArray(this._weekdays) ? this._weekdays[m.day()] :
			this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
	}

	var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
	function localeWeekdaysShort (m) {
		return this._weekdaysShort[m.day()];
	}

	var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
	function localeWeekdaysMin (m) {
		return this._weekdaysMin[m.day()];
	}

	function day_of_week__handleStrictParse(weekdayName, format, strict) {
		var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
		if (!this._weekdaysParse) {
			this._weekdaysParse = [];
			this._shortWeekdaysParse = [];
			this._minWeekdaysParse = [];

			for (i = 0; i < 7; ++i) {
				mom = create_utc__createUTC([2000, 1]).day(i);
				this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
				this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
				this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
			}
		}

		if (strict) {
			if (format === 'dddd') {
				ii = indexOf.call(this._weekdaysParse, llc);
				return ii !== -1 ? ii : null;
			} else if (format === 'ddd') {
				ii = indexOf.call(this._shortWeekdaysParse, llc);
				return ii !== -1 ? ii : null;
			} else {
				ii = indexOf.call(this._minWeekdaysParse, llc);
				return ii !== -1 ? ii : null;
			}
		} else {
			if (format === 'dddd') {
				ii = indexOf.call(this._weekdaysParse, llc);
				if (ii !== -1) {
					return ii;
				}
				ii = indexOf.call(this._shortWeekdaysParse, llc);
				if (ii !== -1) {
					return ii;
				}
				ii = indexOf.call(this._minWeekdaysParse, llc);
				return ii !== -1 ? ii : null;
			} else if (format === 'ddd') {
				ii = indexOf.call(this._shortWeekdaysParse, llc);
				if (ii !== -1) {
					return ii;
				}
				ii = indexOf.call(this._weekdaysParse, llc);
				if (ii !== -1) {
					return ii;
				}
				ii = indexOf.call(this._minWeekdaysParse, llc);
				return ii !== -1 ? ii : null;
			} else {
				ii = indexOf.call(this._minWeekdaysParse, llc);
				if (ii !== -1) {
					return ii;
				}
				ii = indexOf.call(this._weekdaysParse, llc);
				if (ii !== -1) {
					return ii;
				}
				ii = indexOf.call(this._shortWeekdaysParse, llc);
				return ii !== -1 ? ii : null;
			}
		}
	}

	function localeWeekdaysParse (weekdayName, format, strict) {
		var i, mom, regex;

		if (this._weekdaysParseExact) {
			return day_of_week__handleStrictParse.call(this, weekdayName, format, strict);
		}

		if (!this._weekdaysParse) {
			this._weekdaysParse = [];
			this._minWeekdaysParse = [];
			this._shortWeekdaysParse = [];
			this._fullWeekdaysParse = [];
		}

		for (i = 0; i < 7; i++) {
			// make the regex if we don't have it already

			mom = create_utc__createUTC([2000, 1]).day(i);
			if (strict && !this._fullWeekdaysParse[i]) {
				this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
				this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
				this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
			}
			if (!this._weekdaysParse[i]) {
				regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
				this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
			}
			// test the regex
			if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
				return i;
			} else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
				return i;
			} else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
				return i;
			} else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
				return i;
			}
		}
	}

	// MOMENTS

	function getSetDayOfWeek (input) {
		if (!this.isValid()) {
			return input != null ? this : NaN;
		}
		var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
		if (input != null) {
			input = parseWeekday(input, this.localeData());
			return this.add(input - day, 'd');
		} else {
			return day;
		}
	}

	function getSetLocaleDayOfWeek (input) {
		if (!this.isValid()) {
			return input != null ? this : NaN;
		}
		var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
		return input == null ? weekday : this.add(input - weekday, 'd');
	}

	function getSetISODayOfWeek (input) {
		if (!this.isValid()) {
			return input != null ? this : NaN;
		}
		// behaves the same as moment#day except
		// as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
		// as a setter, sunday should belong to the previous week.
		return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
	}

	var defaultWeekdaysRegex = matchWord;
	function weekdaysRegex (isStrict) {
		if (this._weekdaysParseExact) {
			if (!hasOwnProp(this, '_weekdaysRegex')) {
				computeWeekdaysParse.call(this);
			}
			if (isStrict) {
				return this._weekdaysStrictRegex;
			} else {
				return this._weekdaysRegex;
			}
		} else {
			return this._weekdaysStrictRegex && isStrict ?
				this._weekdaysStrictRegex : this._weekdaysRegex;
		}
	}

	var defaultWeekdaysShortRegex = matchWord;
	function weekdaysShortRegex (isStrict) {
		if (this._weekdaysParseExact) {
			if (!hasOwnProp(this, '_weekdaysRegex')) {
				computeWeekdaysParse.call(this);
			}
			if (isStrict) {
				return this._weekdaysShortStrictRegex;
			} else {
				return this._weekdaysShortRegex;
			}
		} else {
			return this._weekdaysShortStrictRegex && isStrict ?
				this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
		}
	}

	var defaultWeekdaysMinRegex = matchWord;
	function weekdaysMinRegex (isStrict) {
		if (this._weekdaysParseExact) {
			if (!hasOwnProp(this, '_weekdaysRegex')) {
				computeWeekdaysParse.call(this);
			}
			if (isStrict) {
				return this._weekdaysMinStrictRegex;
			} else {
				return this._weekdaysMinRegex;
			}
		} else {
			return this._weekdaysMinStrictRegex && isStrict ?
				this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
		}
	}


	function computeWeekdaysParse () {
		function cmpLenRev(a, b) {
			return b.length - a.length;
		}

		var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
			i, mom, minp, shortp, longp;
		for (i = 0; i < 7; i++) {
			// make the regex if we don't have it already
			mom = create_utc__createUTC([2000, 1]).day(i);
			minp = this.weekdaysMin(mom, '');
			shortp = this.weekdaysShort(mom, '');
			longp = this.weekdays(mom, '');
			minPieces.push(minp);
			shortPieces.push(shortp);
			longPieces.push(longp);
			mixedPieces.push(minp);
			mixedPieces.push(shortp);
			mixedPieces.push(longp);
		}
		// Sorting makes sure if one weekday (or abbr) is a prefix of another it
		// will match the longer piece.
		minPieces.sort(cmpLenRev);
		shortPieces.sort(cmpLenRev);
		longPieces.sort(cmpLenRev);
		mixedPieces.sort(cmpLenRev);
		for (i = 0; i < 7; i++) {
			shortPieces[i] = regexEscape(shortPieces[i]);
			longPieces[i] = regexEscape(longPieces[i]);
			mixedPieces[i] = regexEscape(mixedPieces[i]);
		}

		this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
		this._weekdaysShortRegex = this._weekdaysRegex;
		this._weekdaysMinRegex = this._weekdaysRegex;

		this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
		this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
		this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
	}

	// FORMATTING

	addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

	// ALIASES

	addUnitAlias('dayOfYear', 'DDD');

	// PARSING

	addRegexToken('DDD',  match1to3);
	addRegexToken('DDDD', match3);
	addParseToken(['DDD', 'DDDD'], function (input, array, config) {
		config._dayOfYear = toInt(input);
	});

	// HELPERS

	// MOMENTS

	function getSetDayOfYear (input) {
		var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
		return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
	}

	// FORMATTING

	function hFormat() {
		return this.hours() % 12 || 12;
	}

	function kFormat() {
		return this.hours() || 24;
	}

	addFormatToken('H', ['HH', 2], 0, 'hour');
	addFormatToken('h', ['hh', 2], 0, hFormat);
	addFormatToken('k', ['kk', 2], 0, kFormat);

	addFormatToken('hmm', 0, 0, function () {
		return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
	});

	addFormatToken('hmmss', 0, 0, function () {
		return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
			zeroFill(this.seconds(), 2);
	});

	addFormatToken('Hmm', 0, 0, function () {
		return '' + this.hours() + zeroFill(this.minutes(), 2);
	});

	addFormatToken('Hmmss', 0, 0, function () {
		return '' + this.hours() + zeroFill(this.minutes(), 2) +
			zeroFill(this.seconds(), 2);
	});

	function meridiem (token, lowercase) {
		addFormatToken(token, 0, 0, function () {
			return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
		});
	}

	meridiem('a', true);
	meridiem('A', false);

	// ALIASES

	addUnitAlias('hour', 'h');

	// PARSING

	function matchMeridiem (isStrict, locale) {
		return locale._meridiemParse;
	}

	addRegexToken('a',  matchMeridiem);
	addRegexToken('A',  matchMeridiem);
	addRegexToken('H',  match1to2);
	addRegexToken('h',  match1to2);
	addRegexToken('HH', match1to2, match2);
	addRegexToken('hh', match1to2, match2);

	addRegexToken('hmm', match3to4);
	addRegexToken('hmmss', match5to6);
	addRegexToken('Hmm', match3to4);
	addRegexToken('Hmmss', match5to6);

	addParseToken(['H', 'HH'], HOUR);
	addParseToken(['a', 'A'], function (input, array, config) {
		config._isPm = config._locale.isPM(input);
		config._meridiem = input;
	});
	addParseToken(['h', 'hh'], function (input, array, config) {
		array[HOUR] = toInt(input);
		getParsingFlags(config).bigHour = true;
	});
	addParseToken('hmm', function (input, array, config) {
		var pos = input.length - 2;
		array[HOUR] = toInt(input.substr(0, pos));
		array[MINUTE] = toInt(input.substr(pos));
		getParsingFlags(config).bigHour = true;
	});
	addParseToken('hmmss', function (input, array, config) {
		var pos1 = input.length - 4;
		var pos2 = input.length - 2;
		array[HOUR] = toInt(input.substr(0, pos1));
		array[MINUTE] = toInt(input.substr(pos1, 2));
		array[SECOND] = toInt(input.substr(pos2));
		getParsingFlags(config).bigHour = true;
	});
	addParseToken('Hmm', function (input, array, config) {
		var pos = input.length - 2;
		array[HOUR] = toInt(input.substr(0, pos));
		array[MINUTE] = toInt(input.substr(pos));
	});
	addParseToken('Hmmss', function (input, array, config) {
		var pos1 = input.length - 4;
		var pos2 = input.length - 2;
		array[HOUR] = toInt(input.substr(0, pos1));
		array[MINUTE] = toInt(input.substr(pos1, 2));
		array[SECOND] = toInt(input.substr(pos2));
	});

	// LOCALES

	function localeIsPM (input) {
		// IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
		// Using charAt should be more compatible.
		return ((input + '').toLowerCase().charAt(0) === 'p');
	}

	var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
	function localeMeridiem (hours, minutes, isLower) {
		if (hours > 11) {
			return isLower ? 'pm' : 'PM';
		} else {
			return isLower ? 'am' : 'AM';
		}
	}


	// MOMENTS

	// Setting the hour should keep the time, because the user explicitly
	// specified which hour he wants. So trying to maintain the same hour (in
	// a new timezone) makes sense. Adding/subtracting hours does not follow
	// this rule.
	var getSetHour = makeGetSet('Hours', true);

	// FORMATTING

	addFormatToken('m', ['mm', 2], 0, 'minute');

	// ALIASES

	addUnitAlias('minute', 'm');

	// PARSING

	addRegexToken('m',  match1to2);
	addRegexToken('mm', match1to2, match2);
	addParseToken(['m', 'mm'], MINUTE);

	// MOMENTS

	var getSetMinute = makeGetSet('Minutes', false);

	// FORMATTING

	addFormatToken('s', ['ss', 2], 0, 'second');

	// ALIASES

	addUnitAlias('second', 's');

	// PARSING

	addRegexToken('s',  match1to2);
	addRegexToken('ss', match1to2, match2);
	addParseToken(['s', 'ss'], SECOND);

	// MOMENTS

	var getSetSecond = makeGetSet('Seconds', false);

	// FORMATTING

	addFormatToken('S', 0, 0, function () {
		return ~~(this.millisecond() / 100);
	});

	addFormatToken(0, ['SS', 2], 0, function () {
		return ~~(this.millisecond() / 10);
	});

	addFormatToken(0, ['SSS', 3], 0, 'millisecond');
	addFormatToken(0, ['SSSS', 4], 0, function () {
		return this.millisecond() * 10;
	});
	addFormatToken(0, ['SSSSS', 5], 0, function () {
		return this.millisecond() * 100;
	});
	addFormatToken(0, ['SSSSSS', 6], 0, function () {
		return this.millisecond() * 1000;
	});
	addFormatToken(0, ['SSSSSSS', 7], 0, function () {
		return this.millisecond() * 10000;
	});
	addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
		return this.millisecond() * 100000;
	});
	addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
		return this.millisecond() * 1000000;
	});


	// ALIASES

	addUnitAlias('millisecond', 'ms');

	// PARSING

	addRegexToken('S',    match1to3, match1);
	addRegexToken('SS',   match1to3, match2);
	addRegexToken('SSS',  match1to3, match3);

	var token;
	for (token = 'SSSS'; token.length <= 9; token += 'S') {
		addRegexToken(token, matchUnsigned);
	}

	function parseMs(input, array) {
		array[MILLISECOND] = toInt(('0.' + input) * 1000);
	}

	for (token = 'S'; token.length <= 9; token += 'S') {
		addParseToken(token, parseMs);
	}
	// MOMENTS

	var getSetMillisecond = makeGetSet('Milliseconds', false);

	// FORMATTING

	addFormatToken('z',  0, 0, 'zoneAbbr');
	addFormatToken('zz', 0, 0, 'zoneName');

	// MOMENTS

	function getZoneAbbr () {
		return this._isUTC ? 'UTC' : '';
	}

	function getZoneName () {
		return this._isUTC ? 'Coordinated Universal Time' : '';
	}

	var momentPrototype__proto = Moment.prototype;

	momentPrototype__proto.add               = add_subtract__add;
	momentPrototype__proto.calendar          = moment_calendar__calendar;
	momentPrototype__proto.clone             = clone;
	momentPrototype__proto.diff              = diff;
	momentPrototype__proto.endOf             = endOf;
	momentPrototype__proto.format            = moment_format__format;
	momentPrototype__proto.from              = from;
	momentPrototype__proto.fromNow           = fromNow;
	momentPrototype__proto.to                = to;
	momentPrototype__proto.toNow             = toNow;
	momentPrototype__proto.get               = getSet;
	momentPrototype__proto.invalidAt         = invalidAt;
	momentPrototype__proto.isAfter           = isAfter;
	momentPrototype__proto.isBefore          = isBefore;
	momentPrototype__proto.isBetween         = isBetween;
	momentPrototype__proto.isSame            = isSame;
	momentPrototype__proto.isSameOrAfter     = isSameOrAfter;
	momentPrototype__proto.isSameOrBefore    = isSameOrBefore;
	momentPrototype__proto.isValid           = moment_valid__isValid;
	momentPrototype__proto.lang              = lang;
	momentPrototype__proto.locale            = locale;
	momentPrototype__proto.localeData        = localeData;
	momentPrototype__proto.max               = prototypeMax;
	momentPrototype__proto.min               = prototypeMin;
	momentPrototype__proto.parsingFlags      = parsingFlags;
	momentPrototype__proto.set               = getSet;
	momentPrototype__proto.startOf           = startOf;
	momentPrototype__proto.subtract          = add_subtract__subtract;
	momentPrototype__proto.toArray           = toArray;
	momentPrototype__proto.toObject          = toObject;
	momentPrototype__proto.toDate            = toDate;
	momentPrototype__proto.toISOString       = moment_format__toISOString;
	momentPrototype__proto.toJSON            = toJSON;
	momentPrototype__proto.toString          = toString;
	momentPrototype__proto.unix              = unix;
	momentPrototype__proto.valueOf           = to_type__valueOf;
	momentPrototype__proto.creationData      = creationData;

	// Year
	momentPrototype__proto.year       = getSetYear;
	momentPrototype__proto.isLeapYear = getIsLeapYear;

	// Week Year
	momentPrototype__proto.weekYear    = getSetWeekYear;
	momentPrototype__proto.isoWeekYear = getSetISOWeekYear;

	// Quarter
	momentPrototype__proto.quarter = momentPrototype__proto.quarters = getSetQuarter;

	// Month
	momentPrototype__proto.month       = getSetMonth;
	momentPrototype__proto.daysInMonth = getDaysInMonth;

	// Week
	momentPrototype__proto.week           = momentPrototype__proto.weeks        = getSetWeek;
	momentPrototype__proto.isoWeek        = momentPrototype__proto.isoWeeks     = getSetISOWeek;
	momentPrototype__proto.weeksInYear    = getWeeksInYear;
	momentPrototype__proto.isoWeeksInYear = getISOWeeksInYear;

	// Day
	momentPrototype__proto.date       = getSetDayOfMonth;
	momentPrototype__proto.day        = momentPrototype__proto.days             = getSetDayOfWeek;
	momentPrototype__proto.weekday    = getSetLocaleDayOfWeek;
	momentPrototype__proto.isoWeekday = getSetISODayOfWeek;
	momentPrototype__proto.dayOfYear  = getSetDayOfYear;

	// Hour
	momentPrototype__proto.hour = momentPrototype__proto.hours = getSetHour;

	// Minute
	momentPrototype__proto.minute = momentPrototype__proto.minutes = getSetMinute;

	// Second
	momentPrototype__proto.second = momentPrototype__proto.seconds = getSetSecond;

	// Millisecond
	momentPrototype__proto.millisecond = momentPrototype__proto.milliseconds = getSetMillisecond;

	// Offset
	momentPrototype__proto.utcOffset            = getSetOffset;
	momentPrototype__proto.utc                  = setOffsetToUTC;
	momentPrototype__proto.local                = setOffsetToLocal;
	momentPrototype__proto.parseZone            = setOffsetToParsedOffset;
	momentPrototype__proto.hasAlignedHourOffset = hasAlignedHourOffset;
	momentPrototype__proto.isDST                = isDaylightSavingTime;
	momentPrototype__proto.isDSTShifted         = isDaylightSavingTimeShifted;
	momentPrototype__proto.isLocal              = isLocal;
	momentPrototype__proto.isUtcOffset          = isUtcOffset;
	momentPrototype__proto.isUtc                = isUtc;
	momentPrototype__proto.isUTC                = isUtc;

	// Timezone
	momentPrototype__proto.zoneAbbr = getZoneAbbr;
	momentPrototype__proto.zoneName = getZoneName;

	// Deprecations
	momentPrototype__proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
	momentPrototype__proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
	momentPrototype__proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
	momentPrototype__proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779', getSetZone);

	var momentPrototype = momentPrototype__proto;

	function moment_moment__createUnix (input) {
		return local__createLocal(input * 1000);
	}

	function moment_moment__createInZone () {
		return local__createLocal.apply(null, arguments).parseZone();
	}

	var defaultCalendar = {
		sameDay : '[Today at] LT',
		nextDay : '[Tomorrow at] LT',
		nextWeek : 'dddd [at] LT',
		lastDay : '[Yesterday at] LT',
		lastWeek : '[Last] dddd [at] LT',
		sameElse : 'L'
	};

	function locale_calendar__calendar (key, mom, now) {
		var output = this._calendar[key];
		return isFunction(output) ? output.call(mom, now) : output;
	}

	var defaultLongDateFormat = {
		LTS  : 'h:mm:ss A',
		LT   : 'h:mm A',
		L    : 'MM/DD/YYYY',
		LL   : 'MMMM D, YYYY',
		LLL  : 'MMMM D, YYYY h:mm A',
		LLLL : 'dddd, MMMM D, YYYY h:mm A'
	};

	function longDateFormat (key) {
		var format = this._longDateFormat[key],
			formatUpper = this._longDateFormat[key.toUpperCase()];

		if (format || !formatUpper) {
			return format;
		}

		this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
			return val.slice(1);
		});

		return this._longDateFormat[key];
	}

	var defaultInvalidDate = 'Invalid date';

	function invalidDate () {
		return this._invalidDate;
	}

	var defaultOrdinal = '%d';
	var defaultOrdinalParse = /\d{1,2}/;

	function ordinal (number) {
		return this._ordinal.replace('%d', number);
	}

	function preParsePostFormat (string) {
		return string;
	}

	var defaultRelativeTime = {
		future : 'in %s',
		past   : '%s ago',
		s  : 'a few seconds',
		m  : 'a minute',
		mm : '%d minutes',
		h  : 'an hour',
		hh : '%d hours',
		d  : 'a day',
		dd : '%d days',
		M  : 'a month',
		MM : '%d months',
		y  : 'a year',
		yy : '%d years'
	};

	function relative__relativeTime (number, withoutSuffix, string, isFuture) {
		var output = this._relativeTime[string];
		return (isFunction(output)) ?
			output(number, withoutSuffix, string, isFuture) :
			output.replace(/%d/i, number);
	}

	function pastFuture (diff, output) {
		var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
		return isFunction(format) ? format(output) : format.replace(/%s/i, output);
	}

	var prototype__proto = Locale.prototype;

	prototype__proto._calendar       = defaultCalendar;
	prototype__proto.calendar        = locale_calendar__calendar;
	prototype__proto._longDateFormat = defaultLongDateFormat;
	prototype__proto.longDateFormat  = longDateFormat;
	prototype__proto._invalidDate    = defaultInvalidDate;
	prototype__proto.invalidDate     = invalidDate;
	prototype__proto._ordinal        = defaultOrdinal;
	prototype__proto.ordinal         = ordinal;
	prototype__proto._ordinalParse   = defaultOrdinalParse;
	prototype__proto.preparse        = preParsePostFormat;
	prototype__proto.postformat      = preParsePostFormat;
	prototype__proto._relativeTime   = defaultRelativeTime;
	prototype__proto.relativeTime    = relative__relativeTime;
	prototype__proto.pastFuture      = pastFuture;
	prototype__proto.set             = locale_set__set;

	// Month
	prototype__proto.months            =        localeMonths;
	prototype__proto._months           = defaultLocaleMonths;
	prototype__proto.monthsShort       =        localeMonthsShort;
	prototype__proto._monthsShort      = defaultLocaleMonthsShort;
	prototype__proto.monthsParse       =        localeMonthsParse;
	prototype__proto._monthsRegex      = defaultMonthsRegex;
	prototype__proto.monthsRegex       = monthsRegex;
	prototype__proto._monthsShortRegex = defaultMonthsShortRegex;
	prototype__proto.monthsShortRegex  = monthsShortRegex;

	// Week
	prototype__proto.week = localeWeek;
	prototype__proto._week = defaultLocaleWeek;
	prototype__proto.firstDayOfYear = localeFirstDayOfYear;
	prototype__proto.firstDayOfWeek = localeFirstDayOfWeek;

	// Day of Week
	prototype__proto.weekdays       =        localeWeekdays;
	prototype__proto._weekdays      = defaultLocaleWeekdays;
	prototype__proto.weekdaysMin    =        localeWeekdaysMin;
	prototype__proto._weekdaysMin   = defaultLocaleWeekdaysMin;
	prototype__proto.weekdaysShort  =        localeWeekdaysShort;
	prototype__proto._weekdaysShort = defaultLocaleWeekdaysShort;
	prototype__proto.weekdaysParse  =        localeWeekdaysParse;

	prototype__proto._weekdaysRegex      = defaultWeekdaysRegex;
	prototype__proto.weekdaysRegex       =        weekdaysRegex;
	prototype__proto._weekdaysShortRegex = defaultWeekdaysShortRegex;
	prototype__proto.weekdaysShortRegex  =        weekdaysShortRegex;
	prototype__proto._weekdaysMinRegex   = defaultWeekdaysMinRegex;
	prototype__proto.weekdaysMinRegex    =        weekdaysMinRegex;

	// Hours
	prototype__proto.isPM = localeIsPM;
	prototype__proto._meridiemParse = defaultLocaleMeridiemParse;
	prototype__proto.meridiem = localeMeridiem;

	function lists__get (format, index, field, setter) {
		var locale = locale_locales__getLocale();
		var utc = create_utc__createUTC().set(setter, index);
		return locale[field](utc, format);
	}

	function listMonthsImpl (format, index, field) {
		if (typeof format === 'number') {
			index = format;
			format = undefined;
		}

		format = format || '';

		if (index != null) {
			return lists__get(format, index, field, 'month');
		}

		var i;
		var out = [];
		for (i = 0; i < 12; i++) {
			out[i] = lists__get(format, i, field, 'month');
		}
		return out;
	}

	// ()
	// (5)
	// (fmt, 5)
	// (fmt)
	// (true)
	// (true, 5)
	// (true, fmt, 5)
	// (true, fmt)
	function listWeekdaysImpl (localeSorted, format, index, field) {
		if (typeof localeSorted === 'boolean') {
			if (typeof format === 'number') {
				index = format;
				format = undefined;
			}

			format = format || '';
		} else {
			format = localeSorted;
			index = format;
			localeSorted = false;

			if (typeof format === 'number') {
				index = format;
				format = undefined;
			}

			format = format || '';
		}

		var locale = locale_locales__getLocale(),
			shift = localeSorted ? locale._week.dow : 0;

		if (index != null) {
			return lists__get(format, (index + shift) % 7, field, 'day');
		}

		var i;
		var out = [];
		for (i = 0; i < 7; i++) {
			out[i] = lists__get(format, (i + shift) % 7, field, 'day');
		}
		return out;
	}

	function lists__listMonths (format, index) {
		return listMonthsImpl(format, index, 'months');
	}

	function lists__listMonthsShort (format, index) {
		return listMonthsImpl(format, index, 'monthsShort');
	}

	function lists__listWeekdays (localeSorted, format, index) {
		return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
	}

	function lists__listWeekdaysShort (localeSorted, format, index) {
		return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
	}

	function lists__listWeekdaysMin (localeSorted, format, index) {
		return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
	}

	locale_locales__getSetGlobalLocale('en', {
		ordinalParse: /\d{1,2}(th|st|nd|rd)/,
		ordinal : function (number) {
			var b = number % 10,
				output = (toInt(number % 100 / 10) === 1) ? 'th' :
					(b === 1) ? 'st' :
						(b === 2) ? 'nd' :
							(b === 3) ? 'rd' : 'th';
			return number + output;
		}
	});

	// Side effect imports
	utils_hooks__hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', locale_locales__getSetGlobalLocale);
	utils_hooks__hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', locale_locales__getLocale);

	var mathAbs = Math.abs;

	function duration_abs__abs () {
		var data           = this._data;

		this._milliseconds = mathAbs(this._milliseconds);
		this._days         = mathAbs(this._days);
		this._months       = mathAbs(this._months);

		data.milliseconds  = mathAbs(data.milliseconds);
		data.seconds       = mathAbs(data.seconds);
		data.minutes       = mathAbs(data.minutes);
		data.hours         = mathAbs(data.hours);
		data.months        = mathAbs(data.months);
		data.years         = mathAbs(data.years);

		return this;
	}

	function duration_add_subtract__addSubtract (duration, input, value, direction) {
		var other = create__createDuration(input, value);

		duration._milliseconds += direction * other._milliseconds;
		duration._days         += direction * other._days;
		duration._months       += direction * other._months;

		return duration._bubble();
	}

	// supports only 2.0-style add(1, 's') or add(duration)
	function duration_add_subtract__add (input, value) {
		return duration_add_subtract__addSubtract(this, input, value, 1);
	}

	// supports only 2.0-style subtract(1, 's') or subtract(duration)
	function duration_add_subtract__subtract (input, value) {
		return duration_add_subtract__addSubtract(this, input, value, -1);
	}

	function absCeil (number) {
		if (number < 0) {
			return Math.floor(number);
		} else {
			return Math.ceil(number);
		}
	}

	function bubble () {
		var milliseconds = this._milliseconds;
		var days         = this._days;
		var months       = this._months;
		var data         = this._data;
		var seconds, minutes, hours, years, monthsFromDays;

		// if we have a mix of positive and negative values, bubble down first
		// check: https://github.com/moment/moment/issues/2166
		if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
			(milliseconds <= 0 && days <= 0 && months <= 0))) {
			milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
			days = 0;
			months = 0;
		}

		// The following code bubbles up values, see the tests for
		// examples of what that means.
		data.milliseconds = milliseconds % 1000;

		seconds           = absFloor(milliseconds / 1000);
		data.seconds      = seconds % 60;

		minutes           = absFloor(seconds / 60);
		data.minutes      = minutes % 60;

		hours             = absFloor(minutes / 60);
		data.hours        = hours % 24;

		days += absFloor(hours / 24);

		// convert days to months
		monthsFromDays = absFloor(daysToMonths(days));
		months += monthsFromDays;
		days -= absCeil(monthsToDays(monthsFromDays));

		// 12 months -> 1 year
		years = absFloor(months / 12);
		months %= 12;

		data.days   = days;
		data.months = months;
		data.years  = years;

		return this;
	}

	function daysToMonths (days) {
		// 400 years have 146097 days (taking into account leap year rules)
		// 400 years have 12 months === 4800
		return days * 4800 / 146097;
	}

	function monthsToDays (months) {
		// the reverse of daysToMonths
		return months * 146097 / 4800;
	}

	function as (units) {
		var days;
		var months;
		var milliseconds = this._milliseconds;

		units = normalizeUnits(units);

		if (units === 'month' || units === 'year') {
			days   = this._days   + milliseconds / 864e5;
			months = this._months + daysToMonths(days);
			return units === 'month' ? months : months / 12;
		} else {
			// handle milliseconds separately because of floating point math errors (issue #1867)
			days = this._days + Math.round(monthsToDays(this._months));
			switch (units) {
				case 'week'   : return days / 7     + milliseconds / 6048e5;
				case 'day'    : return days         + milliseconds / 864e5;
				case 'hour'   : return days * 24    + milliseconds / 36e5;
				case 'minute' : return days * 1440  + milliseconds / 6e4;
				case 'second' : return days * 86400 + milliseconds / 1000;
				// Math.floor prevents floating point math errors here
				case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
				default: throw new Error('Unknown unit ' + units);
			}
		}
	}

	// TODO: Use this.as('ms')?
	function duration_as__valueOf () {
		return (
			this._milliseconds +
			this._days * 864e5 +
			(this._months % 12) * 2592e6 +
			toInt(this._months / 12) * 31536e6
		);
	}

	function makeAs (alias) {
		return function () {
			return this.as(alias);
		};
	}

	var asMilliseconds = makeAs('ms');
	var asSeconds      = makeAs('s');
	var asMinutes      = makeAs('m');
	var asHours        = makeAs('h');
	var asDays         = makeAs('d');
	var asWeeks        = makeAs('w');
	var asMonths       = makeAs('M');
	var asYears        = makeAs('y');

	function duration_get__get (units) {
		units = normalizeUnits(units);
		return this[units + 's']();
	}

	function makeGetter(name) {
		return function () {
			return this._data[name];
		};
	}

	var milliseconds = makeGetter('milliseconds');
	var seconds      = makeGetter('seconds');
	var minutes      = makeGetter('minutes');
	var hours        = makeGetter('hours');
	var days         = makeGetter('days');
	var duration_get__months       = makeGetter('months');
	var years        = makeGetter('years');

	function weeks () {
		return absFloor(this.days() / 7);
	}

	var round = Math.round;
	var thresholds = {
		s: 45,  // seconds to minute
		m: 45,  // minutes to hour
		h: 22,  // hours to day
		d: 26,  // days to month
		M: 11   // months to year
	};

	// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
	function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
		return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
	}

	function duration_humanize__relativeTime (posNegDuration, withoutSuffix, locale) {
		var duration = create__createDuration(posNegDuration).abs();
		var seconds  = round(duration.as('s'));
		var minutes  = round(duration.as('m'));
		var hours    = round(duration.as('h'));
		var days     = round(duration.as('d'));
		var months   = round(duration.as('M'));
		var years    = round(duration.as('y'));

		var a = seconds < thresholds.s && ['s', seconds]  ||
			minutes <= 1           && ['m']           ||
			minutes < thresholds.m && ['mm', minutes] ||
			hours   <= 1           && ['h']           ||
			hours   < thresholds.h && ['hh', hours]   ||
			days    <= 1           && ['d']           ||
			days    < thresholds.d && ['dd', days]    ||
			months  <= 1           && ['M']           ||
			months  < thresholds.M && ['MM', months]  ||
			years   <= 1           && ['y']           || ['yy', years];

		a[2] = withoutSuffix;
		a[3] = +posNegDuration > 0;
		a[4] = locale;
		return substituteTimeAgo.apply(null, a);
	}

	// This function allows you to set a threshold for relative time strings
	function duration_humanize__getSetRelativeTimeThreshold (threshold, limit) {
		if (thresholds[threshold] === undefined) {
			return false;
		}
		if (limit === undefined) {
			return thresholds[threshold];
		}
		thresholds[threshold] = limit;
		return true;
	}

	function humanize (withSuffix) {
		var locale = this.localeData();
		var output = duration_humanize__relativeTime(this, !withSuffix, locale);

		if (withSuffix) {
			output = locale.pastFuture(+this, output);
		}

		return locale.postformat(output);
	}

	var iso_string__abs = Math.abs;

	function iso_string__toISOString() {
		// for ISO strings we do not use the normal bubbling rules:
		//  * milliseconds bubble up until they become hours
		//  * days do not bubble at all
		//  * months bubble up until they become years
		// This is because there is no context-free conversion between hours and days
		// (think of clock changes)
		// and also not between days and months (28-31 days per month)
		var seconds = iso_string__abs(this._milliseconds) / 1000;
		var days         = iso_string__abs(this._days);
		var months       = iso_string__abs(this._months);
		var minutes, hours, years;

		// 3600 seconds -> 60 minutes -> 1 hour
		minutes           = absFloor(seconds / 60);
		hours             = absFloor(minutes / 60);
		seconds %= 60;
		minutes %= 60;

		// 12 months -> 1 year
		years  = absFloor(months / 12);
		months %= 12;


		// inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
		var Y = years;
		var M = months;
		var D = days;
		var h = hours;
		var m = minutes;
		var s = seconds;
		var total = this.asSeconds();

		if (!total) {
			// this is the same as C#'s (Noda) and python (isodate)...
			// but not other JS (goog.date)
			return 'P0D';
		}

		return (total < 0 ? '-' : '') +
			'P' +
			(Y ? Y + 'Y' : '') +
			(M ? M + 'M' : '') +
			(D ? D + 'D' : '') +
			((h || m || s) ? 'T' : '') +
			(h ? h + 'H' : '') +
			(m ? m + 'M' : '') +
			(s ? s + 'S' : '');
	}

	var duration_prototype__proto = Duration.prototype;

	duration_prototype__proto.abs            = duration_abs__abs;
	duration_prototype__proto.add            = duration_add_subtract__add;
	duration_prototype__proto.subtract       = duration_add_subtract__subtract;
	duration_prototype__proto.as             = as;
	duration_prototype__proto.asMilliseconds = asMilliseconds;
	duration_prototype__proto.asSeconds      = asSeconds;
	duration_prototype__proto.asMinutes      = asMinutes;
	duration_prototype__proto.asHours        = asHours;
	duration_prototype__proto.asDays         = asDays;
	duration_prototype__proto.asWeeks        = asWeeks;
	duration_prototype__proto.asMonths       = asMonths;
	duration_prototype__proto.asYears        = asYears;
	duration_prototype__proto.valueOf        = duration_as__valueOf;
	duration_prototype__proto._bubble        = bubble;
	duration_prototype__proto.get            = duration_get__get;
	duration_prototype__proto.milliseconds   = milliseconds;
	duration_prototype__proto.seconds        = seconds;
	duration_prototype__proto.minutes        = minutes;
	duration_prototype__proto.hours          = hours;
	duration_prototype__proto.days           = days;
	duration_prototype__proto.weeks          = weeks;
	duration_prototype__proto.months         = duration_get__months;
	duration_prototype__proto.years          = years;
	duration_prototype__proto.humanize       = humanize;
	duration_prototype__proto.toISOString    = iso_string__toISOString;
	duration_prototype__proto.toString       = iso_string__toISOString;
	duration_prototype__proto.toJSON         = iso_string__toISOString;
	duration_prototype__proto.locale         = locale;
	duration_prototype__proto.localeData     = localeData;

	// Deprecations
	duration_prototype__proto.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', iso_string__toISOString);
	duration_prototype__proto.lang = lang;

	// Side effect imports

	// FORMATTING

	addFormatToken('X', 0, 0, 'unix');
	addFormatToken('x', 0, 0, 'valueOf');

	// PARSING

	addRegexToken('x', matchSigned);
	addRegexToken('X', matchTimestamp);
	addParseToken('X', function (input, array, config) {
		config._d = new Date(parseFloat(input, 10) * 1000);
	});
	addParseToken('x', function (input, array, config) {
		config._d = new Date(toInt(input));
	});

	// Side effect imports

	;

	//! moment.js
	//! version : 2.13.0
	//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
	//! license : MIT
	//! momentjs.com

	utils_hooks__hooks.version = '2.13.0';

	setHookCallback(local__createLocal);

	utils_hooks__hooks.fn                    = momentPrototype;
	utils_hooks__hooks.min                   = min;
	utils_hooks__hooks.max                   = max;
	utils_hooks__hooks.now                   = now;
	utils_hooks__hooks.utc                   = create_utc__createUTC;
	utils_hooks__hooks.unix                  = moment_moment__createUnix;
	utils_hooks__hooks.months                = lists__listMonths;
	utils_hooks__hooks.isDate                = isDate;
	utils_hooks__hooks.locale                = locale_locales__getSetGlobalLocale;
	utils_hooks__hooks.invalid               = valid__createInvalid;
	utils_hooks__hooks.duration              = create__createDuration;
	utils_hooks__hooks.isMoment              = isMoment;
	utils_hooks__hooks.weekdays              = lists__listWeekdays;
	utils_hooks__hooks.parseZone             = moment_moment__createInZone;
	utils_hooks__hooks.localeData            = locale_locales__getLocale;
	utils_hooks__hooks.isDuration            = isDuration;
	utils_hooks__hooks.monthsShort           = lists__listMonthsShort;
	utils_hooks__hooks.weekdaysMin           = lists__listWeekdaysMin;
	utils_hooks__hooks.defineLocale          = defineLocale;
	utils_hooks__hooks.updateLocale          = updateLocale;
	utils_hooks__hooks.locales               = locale_locales__listLocales;
	utils_hooks__hooks.weekdaysShort         = lists__listWeekdaysShort;
	utils_hooks__hooks.normalizeUnits        = normalizeUnits;
	utils_hooks__hooks.relativeTimeThreshold = duration_humanize__getSetRelativeTimeThreshold;
	utils_hooks__hooks.prototype             = momentPrototype;

	var moment__default = utils_hooks__hooks;

	//! moment.js locale configuration
	//! locale : afrikaans (af)
	//! author : Werner Mollentze : https://github.com/wernerm

	var af = moment__default.defineLocale('af', {
		months : 'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'.split('_'),
		monthsShort : 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),
		weekdays : 'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split('_'),
		weekdaysShort : 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),
		weekdaysMin : 'So_Ma_Di_Wo_Do_Vr_Sa'.split('_'),
		meridiemParse: /vm|nm/i,
		isPM : function (input) {
			return /^nm$/i.test(input);
		},
		meridiem : function (hours, minutes, isLower) {
			if (hours < 12) {
				return isLower ? 'vm' : 'VM';
			} else {
				return isLower ? 'nm' : 'NM';
			}
		},
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'DD/MM/YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY HH:mm',
			LLLL : 'dddd, D MMMM YYYY HH:mm'
		},
		calendar : {
			sameDay : '[Vandag om] LT',
			nextDay : '[Môre om] LT',
			nextWeek : 'dddd [om] LT',
			lastDay : '[Gister om] LT',
			lastWeek : '[Laas] dddd [om] LT',
			sameElse : 'L'
		},
		relativeTime : {
			future : 'oor %s',
			past : '%s gelede',
			s : '\'n paar sekondes',
			m : '\'n minuut',
			mm : '%d minute',
			h : '\'n uur',
			hh : '%d ure',
			d : '\'n dag',
			dd : '%d dae',
			M : '\'n maand',
			MM : '%d maande',
			y : '\'n jaar',
			yy : '%d jaar'
		},
		ordinalParse: /\d{1,2}(ste|de)/,
		ordinal : function (number) {
			return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de'); // Thanks to Joris Röling : https://github.com/jjupiter
		},
		week : {
			dow : 1, // Maandag is die eerste dag van die week.
			doy : 4  // Die week wat die 4de Januarie bevat is die eerste week van die jaar.
		}
	});

	//! moment.js locale configuration
	//! locale : Moroccan Arabic (ar-ma)
	//! author : ElFadili Yassine : https://github.com/ElFadiliY
	//! author : Abdel Said : https://github.com/abdelsaid

	var ar_ma = moment__default.defineLocale('ar-ma', {
		months : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
		monthsShort : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
		weekdays : 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
		weekdaysShort : 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
		weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
		weekdaysParseExact : true,
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'DD/MM/YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY HH:mm',
			LLLL : 'dddd D MMMM YYYY HH:mm'
		},
		calendar : {
			sameDay: '[اليوم على الساعة] LT',
			nextDay: '[غدا على الساعة] LT',
			nextWeek: 'dddd [على الساعة] LT',
			lastDay: '[أمس على الساعة] LT',
			lastWeek: 'dddd [على الساعة] LT',
			sameElse: 'L'
		},
		relativeTime : {
			future : 'في %s',
			past : 'منذ %s',
			s : 'ثوان',
			m : 'دقيقة',
			mm : '%d دقائق',
			h : 'ساعة',
			hh : '%d ساعات',
			d : 'يوم',
			dd : '%d أيام',
			M : 'شهر',
			MM : '%d أشهر',
			y : 'سنة',
			yy : '%d سنوات'
		},
		week : {
			dow : 6, // Saturday is the first day of the week.
			doy : 12  // The week that contains Jan 1st is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : Arabic Saudi Arabia (ar-sa)
	//! author : Suhail Alkowaileet : https://github.com/xsoh

	var ar_sa__symbolMap = {
		'1': '١',
		'2': '٢',
		'3': '٣',
		'4': '٤',
		'5': '٥',
		'6': '٦',
		'7': '٧',
		'8': '٨',
		'9': '٩',
		'0': '٠'
	}, ar_sa__numberMap = {
		'١': '1',
		'٢': '2',
		'٣': '3',
		'٤': '4',
		'٥': '5',
		'٦': '6',
		'٧': '7',
		'٨': '8',
		'٩': '9',
		'٠': '0'
	};

	var ar_sa = moment__default.defineLocale('ar-sa', {
		months : 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
		monthsShort : 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
		weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
		weekdaysShort : 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
		weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
		weekdaysParseExact : true,
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'DD/MM/YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY HH:mm',
			LLLL : 'dddd D MMMM YYYY HH:mm'
		},
		meridiemParse: /ص|م/,
		isPM : function (input) {
			return 'م' === input;
		},
		meridiem : function (hour, minute, isLower) {
			if (hour < 12) {
				return 'ص';
			} else {
				return 'م';
			}
		},
		calendar : {
			sameDay: '[اليوم على الساعة] LT',
			nextDay: '[غدا على الساعة] LT',
			nextWeek: 'dddd [على الساعة] LT',
			lastDay: '[أمس على الساعة] LT',
			lastWeek: 'dddd [على الساعة] LT',
			sameElse: 'L'
		},
		relativeTime : {
			future : 'في %s',
			past : 'منذ %s',
			s : 'ثوان',
			m : 'دقيقة',
			mm : '%d دقائق',
			h : 'ساعة',
			hh : '%d ساعات',
			d : 'يوم',
			dd : '%d أيام',
			M : 'شهر',
			MM : '%d أشهر',
			y : 'سنة',
			yy : '%d سنوات'
		},
		preparse: function (string) {
			return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
				return ar_sa__numberMap[match];
			}).replace(/،/g, ',');
		},
		postformat: function (string) {
			return string.replace(/\d/g, function (match) {
				return ar_sa__symbolMap[match];
			}).replace(/,/g, '،');
		},
		week : {
			dow : 6, // Saturday is the first day of the week.
			doy : 12  // The week that contains Jan 1st is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale  : Tunisian Arabic (ar-tn)

	var ar_tn = moment__default.defineLocale('ar-tn', {
		months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
		monthsShort: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
		weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
		weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
		weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
		weekdaysParseExact : true,
		longDateFormat: {
			LT: 'HH:mm',
			LTS: 'HH:mm:ss',
			L: 'DD/MM/YYYY',
			LL: 'D MMMM YYYY',
			LLL: 'D MMMM YYYY HH:mm',
			LLLL: 'dddd D MMMM YYYY HH:mm'
		},
		calendar: {
			sameDay: '[اليوم على الساعة] LT',
			nextDay: '[غدا على الساعة] LT',
			nextWeek: 'dddd [على الساعة] LT',
			lastDay: '[أمس على الساعة] LT',
			lastWeek: 'dddd [على الساعة] LT',
			sameElse: 'L'
		},
		relativeTime: {
			future: 'في %s',
			past: 'منذ %s',
			s: 'ثوان',
			m: 'دقيقة',
			mm: '%d دقائق',
			h: 'ساعة',
			hh: '%d ساعات',
			d: 'يوم',
			dd: '%d أيام',
			M: 'شهر',
			MM: '%d أشهر',
			y: 'سنة',
			yy: '%d سنوات'
		},
		week: {
			dow: 1, // Monday is the first day of the week.
			doy: 4 // The week that contains Jan 4th is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! Locale: Arabic (ar)
	//! Author: Abdel Said: https://github.com/abdelsaid
	//! Changes in months, weekdays: Ahmed Elkhatib
	//! Native plural forms: forabi https://github.com/forabi

	var ar__symbolMap = {
		'1': '١',
		'2': '٢',
		'3': '٣',
		'4': '٤',
		'5': '٥',
		'6': '٦',
		'7': '٧',
		'8': '٨',
		'9': '٩',
		'0': '٠'
	}, ar__numberMap = {
		'١': '1',
		'٢': '2',
		'٣': '3',
		'٤': '4',
		'٥': '5',
		'٦': '6',
		'٧': '7',
		'٨': '8',
		'٩': '9',
		'٠': '0'
	}, pluralForm = function (n) {
		return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
	}, plurals = {
		s : ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
		m : ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
		h : ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
		d : ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
		M : ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
		y : ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
	}, pluralize = function (u) {
		return function (number, withoutSuffix, string, isFuture) {
			var f = pluralForm(number),
				str = plurals[u][pluralForm(number)];
			if (f === 2) {
				str = str[withoutSuffix ? 0 : 1];
			}
			return str.replace(/%d/i, number);
		};
	}, ar__months = [
		'كانون الثاني يناير',
		'شباط فبراير',
		'آذار مارس',
		'نيسان أبريل',
		'أيار مايو',
		'حزيران يونيو',
		'تموز يوليو',
		'آب أغسطس',
		'أيلول سبتمبر',
		'تشرين الأول أكتوبر',
		'تشرين الثاني نوفمبر',
		'كانون الأول ديسمبر'
	];

	var ar = moment__default.defineLocale('ar', {
		months : ar__months,
		monthsShort : ar__months,
		weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
		weekdaysShort : 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
		weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
		weekdaysParseExact : true,
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'D/\u200FM/\u200FYYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY HH:mm',
			LLLL : 'dddd D MMMM YYYY HH:mm'
		},
		meridiemParse: /ص|م/,
		isPM : function (input) {
			return 'م' === input;
		},
		meridiem : function (hour, minute, isLower) {
			if (hour < 12) {
				return 'ص';
			} else {
				return 'م';
			}
		},
		calendar : {
			sameDay: '[اليوم عند الساعة] LT',
			nextDay: '[غدًا عند الساعة] LT',
			nextWeek: 'dddd [عند الساعة] LT',
			lastDay: '[أمس عند الساعة] LT',
			lastWeek: 'dddd [عند الساعة] LT',
			sameElse: 'L'
		},
		relativeTime : {
			future : 'بعد %s',
			past : 'منذ %s',
			s : pluralize('s'),
			m : pluralize('m'),
			mm : pluralize('m'),
			h : pluralize('h'),
			hh : pluralize('h'),
			d : pluralize('d'),
			dd : pluralize('d'),
			M : pluralize('M'),
			MM : pluralize('M'),
			y : pluralize('y'),
			yy : pluralize('y')
		},
		preparse: function (string) {
			return string.replace(/\u200f/g, '').replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
				return ar__numberMap[match];
			}).replace(/،/g, ',');
		},
		postformat: function (string) {
			return string.replace(/\d/g, function (match) {
				return ar__symbolMap[match];
			}).replace(/,/g, '،');
		},
		week : {
			dow : 6, // Saturday is the first day of the week.
			doy : 12  // The week that contains Jan 1st is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : azerbaijani (az)
	//! author : topchiyev : https://github.com/topchiyev

	var az__suffixes = {
		1: '-inci',
		5: '-inci',
		8: '-inci',
		70: '-inci',
		80: '-inci',
		2: '-nci',
		7: '-nci',
		20: '-nci',
		50: '-nci',
		3: '-üncü',
		4: '-üncü',
		100: '-üncü',
		6: '-ncı',
		9: '-uncu',
		10: '-uncu',
		30: '-uncu',
		60: '-ıncı',
		90: '-ıncı'
	};

	var az = moment__default.defineLocale('az', {
		months : 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split('_'),
		monthsShort : 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_'),
		weekdays : 'Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə'.split('_'),
		weekdaysShort : 'Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən'.split('_'),
		weekdaysMin : 'Bz_BE_ÇA_Çə_CA_Cü_Şə'.split('_'),
		weekdaysParseExact : true,
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'DD.MM.YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY HH:mm',
			LLLL : 'dddd, D MMMM YYYY HH:mm'
		},
		calendar : {
			sameDay : '[bugün saat] LT',
			nextDay : '[sabah saat] LT',
			nextWeek : '[gələn həftə] dddd [saat] LT',
			lastDay : '[dünən] LT',
			lastWeek : '[keçən həftə] dddd [saat] LT',
			sameElse : 'L'
		},
		relativeTime : {
			future : '%s sonra',
			past : '%s əvvəl',
			s : 'birneçə saniyyə',
			m : 'bir dəqiqə',
			mm : '%d dəqiqə',
			h : 'bir saat',
			hh : '%d saat',
			d : 'bir gün',
			dd : '%d gün',
			M : 'bir ay',
			MM : '%d ay',
			y : 'bir il',
			yy : '%d il'
		},
		meridiemParse: /gecə|səhər|gündüz|axşam/,
		isPM : function (input) {
			return /^(gündüz|axşam)$/.test(input);
		},
		meridiem : function (hour, minute, isLower) {
			if (hour < 4) {
				return 'gecə';
			} else if (hour < 12) {
				return 'səhər';
			} else if (hour < 17) {
				return 'gündüz';
			} else {
				return 'axşam';
			}
		},
		ordinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
		ordinal : function (number) {
			if (number === 0) {  // special case for zero
				return number + '-ıncı';
			}
			var a = number % 10,
				b = number % 100 - a,
				c = number >= 100 ? 100 : null;
			return number + (az__suffixes[a] || az__suffixes[b] || az__suffixes[c]);
		},
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 7  // The week that contains Jan 1st is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : belarusian (be)
	//! author : Dmitry Demidov : https://github.com/demidov91
	//! author: Praleska: http://praleska.pro/
	//! Author : Menelion Elensúle : https://github.com/Oire

	function be__plural(word, num) {
		var forms = word.split('_');
		return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
	}
	function be__relativeTimeWithPlural(number, withoutSuffix, key) {
		var format = {
			'mm': withoutSuffix ? 'хвіліна_хвіліны_хвілін' : 'хвіліну_хвіліны_хвілін',
			'hh': withoutSuffix ? 'гадзіна_гадзіны_гадзін' : 'гадзіну_гадзіны_гадзін',
			'dd': 'дзень_дні_дзён',
			'MM': 'месяц_месяцы_месяцаў',
			'yy': 'год_гады_гадоў'
		};
		if (key === 'm') {
			return withoutSuffix ? 'хвіліна' : 'хвіліну';
		}
		else if (key === 'h') {
			return withoutSuffix ? 'гадзіна' : 'гадзіну';
		}
		else {
			return number + ' ' + be__plural(format[key], +number);
		}
	}

	var be = moment__default.defineLocale('be', {
		months : {
			format: 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'.split('_'),
			standalone: 'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'.split('_')
		},
		monthsShort : 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split('_'),
		weekdays : {
			format: 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'.split('_'),
			standalone: 'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'.split('_'),
			isFormat: /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/
		},
		weekdaysShort : 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
		weekdaysMin : 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'DD.MM.YYYY',
			LL : 'D MMMM YYYY г.',
			LLL : 'D MMMM YYYY г., HH:mm',
			LLLL : 'dddd, D MMMM YYYY г., HH:mm'
		},
		calendar : {
			sameDay: '[Сёння ў] LT',
			nextDay: '[Заўтра ў] LT',
			lastDay: '[Учора ў] LT',
			nextWeek: function () {
				return '[У] dddd [ў] LT';
			},
			lastWeek: function () {
				switch (this.day()) {
					case 0:
					case 3:
					case 5:
					case 6:
						return '[У мінулую] dddd [ў] LT';
					case 1:
					case 2:
					case 4:
						return '[У мінулы] dddd [ў] LT';
				}
			},
			sameElse: 'L'
		},
		relativeTime : {
			future : 'праз %s',
			past : '%s таму',
			s : 'некалькі секунд',
			m : be__relativeTimeWithPlural,
			mm : be__relativeTimeWithPlural,
			h : be__relativeTimeWithPlural,
			hh : be__relativeTimeWithPlural,
			d : 'дзень',
			dd : be__relativeTimeWithPlural,
			M : 'месяц',
			MM : be__relativeTimeWithPlural,
			y : 'год',
			yy : be__relativeTimeWithPlural
		},
		meridiemParse: /ночы|раніцы|дня|вечара/,
		isPM : function (input) {
			return /^(дня|вечара)$/.test(input);
		},
		meridiem : function (hour, minute, isLower) {
			if (hour < 4) {
				return 'ночы';
			} else if (hour < 12) {
				return 'раніцы';
			} else if (hour < 17) {
				return 'дня';
			} else {
				return 'вечара';
			}
		},
		ordinalParse: /\d{1,2}-(і|ы|га)/,
		ordinal: function (number, period) {
			switch (period) {
				case 'M':
				case 'd':
				case 'DDD':
				case 'w':
				case 'W':
					return (number % 10 === 2 || number % 10 === 3) && (number % 100 !== 12 && number % 100 !== 13) ? number + '-і' : number + '-ы';
				case 'D':
					return number + '-га';
				default:
					return number;
			}
		},
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 7  // The week that contains Jan 1st is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : bulgarian (bg)
	//! author : Krasen Borisov : https://github.com/kraz

	var bg = moment__default.defineLocale('bg', {
		months : 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
		monthsShort : 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
		weekdays : 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
		weekdaysShort : 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
		weekdaysMin : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
		longDateFormat : {
			LT : 'H:mm',
			LTS : 'H:mm:ss',
			L : 'D.MM.YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY H:mm',
			LLLL : 'dddd, D MMMM YYYY H:mm'
		},
		calendar : {
			sameDay : '[Днес в] LT',
			nextDay : '[Утре в] LT',
			nextWeek : 'dddd [в] LT',
			lastDay : '[Вчера в] LT',
			lastWeek : function () {
				switch (this.day()) {
					case 0:
					case 3:
					case 6:
						return '[В изминалата] dddd [в] LT';
					case 1:
					case 2:
					case 4:
					case 5:
						return '[В изминалия] dddd [в] LT';
				}
			},
			sameElse : 'L'
		},
		relativeTime : {
			future : 'след %s',
			past : 'преди %s',
			s : 'няколко секунди',
			m : 'минута',
			mm : '%d минути',
			h : 'час',
			hh : '%d часа',
			d : 'ден',
			dd : '%d дни',
			M : 'месец',
			MM : '%d месеца',
			y : 'година',
			yy : '%d години'
		},
		ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
		ordinal : function (number) {
			var lastDigit = number % 10,
				last2Digits = number % 100;
			if (number === 0) {
				return number + '-ев';
			} else if (last2Digits === 0) {
				return number + '-ен';
			} else if (last2Digits > 10 && last2Digits < 20) {
				return number + '-ти';
			} else if (lastDigit === 1) {
				return number + '-ви';
			} else if (lastDigit === 2) {
				return number + '-ри';
			} else if (lastDigit === 7 || lastDigit === 8) {
				return number + '-ми';
			} else {
				return number + '-ти';
			}
		},
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 7  // The week that contains Jan 1st is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : Bengali (bn)
	//! author : Kaushik Gandhi : https://github.com/kaushikgandhi

	var bn__symbolMap = {
			'1': '১',
			'2': '২',
			'3': '৩',
			'4': '৪',
			'5': '৫',
			'6': '৬',
			'7': '৭',
			'8': '৮',
			'9': '৯',
			'0': '০'
		},
		bn__numberMap = {
			'১': '1',
			'২': '2',
			'৩': '3',
			'৪': '4',
			'৫': '5',
			'৬': '6',
			'৭': '7',
			'৮': '8',
			'৯': '9',
			'০': '0'
		};

	var bn = moment__default.defineLocale('bn', {
		months : 'জানুয়ারী_ফেবুয়ারী_মার্চ_এপ্রিল_মে_জুন_জুলাই_অগাস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর'.split('_'),
		monthsShort : 'জানু_ফেব_মার্চ_এপর_মে_জুন_জুল_অগ_সেপ্ট_অক্টো_নভ_ডিসেম্'.split('_'),
		weekdays : 'রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পত্তিবার_শুক্রবার_শনিবার'.split('_'),
		weekdaysShort : 'রবি_সোম_মঙ্গল_বুধ_বৃহস্পত্তি_শুক্র_শনি'.split('_'),
		weekdaysMin : 'রব_সম_মঙ্গ_বু_ব্রিহ_শু_শনি'.split('_'),
		longDateFormat : {
			LT : 'A h:mm সময়',
			LTS : 'A h:mm:ss সময়',
			L : 'DD/MM/YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY, A h:mm সময়',
			LLLL : 'dddd, D MMMM YYYY, A h:mm সময়'
		},
		calendar : {
			sameDay : '[আজ] LT',
			nextDay : '[আগামীকাল] LT',
			nextWeek : 'dddd, LT',
			lastDay : '[গতকাল] LT',
			lastWeek : '[গত] dddd, LT',
			sameElse : 'L'
		},
		relativeTime : {
			future : '%s পরে',
			past : '%s আগে',
			s : 'কয়েক সেকেন্ড',
			m : 'এক মিনিট',
			mm : '%d মিনিট',
			h : 'এক ঘন্টা',
			hh : '%d ঘন্টা',
			d : 'এক দিন',
			dd : '%d দিন',
			M : 'এক মাস',
			MM : '%d মাস',
			y : 'এক বছর',
			yy : '%d বছর'
		},
		preparse: function (string) {
			return string.replace(/[১২৩৪৫৬৭৮৯০]/g, function (match) {
				return bn__numberMap[match];
			});
		},
		postformat: function (string) {
			return string.replace(/\d/g, function (match) {
				return bn__symbolMap[match];
			});
		},
		meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
		meridiemHour : function (hour, meridiem) {
			if (hour === 12) {
				hour = 0;
			}
			if ((meridiem === 'রাত' && hour >= 4) ||
				(meridiem === 'দুপুর' && hour < 5) ||
				meridiem === 'বিকাল') {
				return hour + 12;
			} else {
				return hour;
			}
		},
		meridiem : function (hour, minute, isLower) {
			if (hour < 4) {
				return 'রাত';
			} else if (hour < 10) {
				return 'সকাল';
			} else if (hour < 17) {
				return 'দুপুর';
			} else if (hour < 20) {
				return 'বিকাল';
			} else {
				return 'রাত';
			}
		},
		week : {
			dow : 0, // Sunday is the first day of the week.
			doy : 6  // The week that contains Jan 1st is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : tibetan (bo)
	//! author : Thupten N. Chakrishar : https://github.com/vajradog

	var bo__symbolMap = {
			'1': '༡',
			'2': '༢',
			'3': '༣',
			'4': '༤',
			'5': '༥',
			'6': '༦',
			'7': '༧',
			'8': '༨',
			'9': '༩',
			'0': '༠'
		},
		bo__numberMap = {
			'༡': '1',
			'༢': '2',
			'༣': '3',
			'༤': '4',
			'༥': '5',
			'༦': '6',
			'༧': '7',
			'༨': '8',
			'༩': '9',
			'༠': '0'
		};

	var bo = moment__default.defineLocale('bo', {
		months : 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
		monthsShort : 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
		weekdays : 'གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་'.split('_'),
		weekdaysShort : 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
		weekdaysMin : 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
		longDateFormat : {
			LT : 'A h:mm',
			LTS : 'A h:mm:ss',
			L : 'DD/MM/YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY, A h:mm',
			LLLL : 'dddd, D MMMM YYYY, A h:mm'
		},
		calendar : {
			sameDay : '[དི་རིང] LT',
			nextDay : '[སང་ཉིན] LT',
			nextWeek : '[བདུན་ཕྲག་རྗེས་མ], LT',
			lastDay : '[ཁ་སང] LT',
			lastWeek : '[བདུན་ཕྲག་མཐའ་མ] dddd, LT',
			sameElse : 'L'
		},
		relativeTime : {
			future : '%s ལ་',
			past : '%s སྔན་ལ',
			s : 'ལམ་སང',
			m : 'སྐར་མ་གཅིག',
			mm : '%d སྐར་མ',
			h : 'ཆུ་ཚོད་གཅིག',
			hh : '%d ཆུ་ཚོད',
			d : 'ཉིན་གཅིག',
			dd : '%d ཉིན་',
			M : 'ཟླ་བ་གཅིག',
			MM : '%d ཟླ་བ',
			y : 'ལོ་གཅིག',
			yy : '%d ལོ'
		},
		preparse: function (string) {
			return string.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (match) {
				return bo__numberMap[match];
			});
		},
		postformat: function (string) {
			return string.replace(/\d/g, function (match) {
				return bo__symbolMap[match];
			});
		},
		meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
		meridiemHour : function (hour, meridiem) {
			if (hour === 12) {
				hour = 0;
			}
			if ((meridiem === 'མཚན་མོ' && hour >= 4) ||
				(meridiem === 'ཉིན་གུང' && hour < 5) ||
				meridiem === 'དགོང་དག') {
				return hour + 12;
			} else {
				return hour;
			}
		},
		meridiem : function (hour, minute, isLower) {
			if (hour < 4) {
				return 'མཚན་མོ';
			} else if (hour < 10) {
				return 'ཞོགས་ཀས';
			} else if (hour < 17) {
				return 'ཉིན་གུང';
			} else if (hour < 20) {
				return 'དགོང་དག';
			} else {
				return 'མཚན་མོ';
			}
		},
		week : {
			dow : 0, // Sunday is the first day of the week.
			doy : 6  // The week that contains Jan 1st is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : breton (br)
	//! author : Jean-Baptiste Le Duigou : https://github.com/jbleduigou

	function relativeTimeWithMutation(number, withoutSuffix, key) {
		var format = {
			'mm': 'munutenn',
			'MM': 'miz',
			'dd': 'devezh'
		};
		return number + ' ' + mutation(format[key], number);
	}
	function specialMutationForYears(number) {
		switch (lastNumber(number)) {
			case 1:
			case 3:
			case 4:
			case 5:
			case 9:
				return number + ' bloaz';
			default:
				return number + ' vloaz';
		}
	}
	function lastNumber(number) {
		if (number > 9) {
			return lastNumber(number % 10);
		}
		return number;
	}
	function mutation(text, number) {
		if (number === 2) {
			return softMutation(text);
		}
		return text;
	}
	function softMutation(text) {
		var mutationTable = {
			'm': 'v',
			'b': 'v',
			'd': 'z'
		};
		if (mutationTable[text.charAt(0)] === undefined) {
			return text;
		}
		return mutationTable[text.charAt(0)] + text.substring(1);
	}

	var br = moment__default.defineLocale('br', {
		months : 'Genver_C\'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu'.split('_'),
		monthsShort : 'Gen_C\'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker'.split('_'),
		weekdays : 'Sul_Lun_Meurzh_Merc\'her_Yaou_Gwener_Sadorn'.split('_'),
		weekdaysShort : 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),
		weekdaysMin : 'Su_Lu_Me_Mer_Ya_Gw_Sa'.split('_'),
		weekdaysParseExact : true,
		longDateFormat : {
			LT : 'h[e]mm A',
			LTS : 'h[e]mm:ss A',
			L : 'DD/MM/YYYY',
			LL : 'D [a viz] MMMM YYYY',
			LLL : 'D [a viz] MMMM YYYY h[e]mm A',
			LLLL : 'dddd, D [a viz] MMMM YYYY h[e]mm A'
		},
		calendar : {
			sameDay : '[Hiziv da] LT',
			nextDay : '[Warc\'hoazh da] LT',
			nextWeek : 'dddd [da] LT',
			lastDay : '[Dec\'h da] LT',
			lastWeek : 'dddd [paset da] LT',
			sameElse : 'L'
		},
		relativeTime : {
			future : 'a-benn %s',
			past : '%s \'zo',
			s : 'un nebeud segondennoù',
			m : 'ur vunutenn',
			mm : relativeTimeWithMutation,
			h : 'un eur',
			hh : '%d eur',
			d : 'un devezh',
			dd : relativeTimeWithMutation,
			M : 'ur miz',
			MM : relativeTimeWithMutation,
			y : 'ur bloaz',
			yy : specialMutationForYears
		},
		ordinalParse: /\d{1,2}(añ|vet)/,
		ordinal : function (number) {
			var output = (number === 1) ? 'añ' : 'vet';
			return number + output;
		},
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 4  // The week that contains Jan 4th is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : bosnian (bs)
	//! author : Nedim Cholich : https://github.com/frontyard
	//! based on (hr) translation by Bojan Marković

	function bs__translate(number, withoutSuffix, key) {
		var result = number + ' ';
		switch (key) {
			case 'm':
				return withoutSuffix ? 'jedna minuta' : 'jedne minute';
			case 'mm':
				if (number === 1) {
					result += 'minuta';
				} else if (number === 2 || number === 3 || number === 4) {
					result += 'minute';
				} else {
					result += 'minuta';
				}
				return result;
			case 'h':
				return withoutSuffix ? 'jedan sat' : 'jednog sata';
			case 'hh':
				if (number === 1) {
					result += 'sat';
				} else if (number === 2 || number === 3 || number === 4) {
					result += 'sata';
				} else {
					result += 'sati';
				}
				return result;
			case 'dd':
				if (number === 1) {
					result += 'dan';
				} else {
					result += 'dana';
				}
				return result;
			case 'MM':
				if (number === 1) {
					result += 'mjesec';
				} else if (number === 2 || number === 3 || number === 4) {
					result += 'mjeseca';
				} else {
					result += 'mjeseci';
				}
				return result;
			case 'yy':
				if (number === 1) {
					result += 'godina';
				} else if (number === 2 || number === 3 || number === 4) {
					result += 'godine';
				} else {
					result += 'godina';
				}
				return result;
		}
	}

	var bs = moment__default.defineLocale('bs', {
		months : 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split('_'),
		monthsShort : 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split('_'),
		monthsParseExact: true,
		weekdays : 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
		weekdaysShort : 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
		weekdaysMin : 'ne_po_ut_sr_če_pe_su'.split('_'),
		weekdaysParseExact : true,
		longDateFormat : {
			LT : 'H:mm',
			LTS : 'H:mm:ss',
			L : 'DD. MM. YYYY',
			LL : 'D. MMMM YYYY',
			LLL : 'D. MMMM YYYY H:mm',
			LLLL : 'dddd, D. MMMM YYYY H:mm'
		},
		calendar : {
			sameDay  : '[danas u] LT',
			nextDay  : '[sutra u] LT',
			nextWeek : function () {
				switch (this.day()) {
					case 0:
						return '[u] [nedjelju] [u] LT';
					case 3:
						return '[u] [srijedu] [u] LT';
					case 6:
						return '[u] [subotu] [u] LT';
					case 1:
					case 2:
					case 4:
					case 5:
						return '[u] dddd [u] LT';
				}
			},
			lastDay  : '[jučer u] LT',
			lastWeek : function () {
				switch (this.day()) {
					case 0:
					case 3:
						return '[prošlu] dddd [u] LT';
					case 6:
						return '[prošle] [subote] [u] LT';
					case 1:
					case 2:
					case 4:
					case 5:
						return '[prošli] dddd [u] LT';
				}
			},
			sameElse : 'L'
		},
		relativeTime : {
			future : 'za %s',
			past   : 'prije %s',
			s      : 'par sekundi',
			m      : bs__translate,
			mm     : bs__translate,
			h      : bs__translate,
			hh     : bs__translate,
			d      : 'dan',
			dd     : bs__translate,
			M      : 'mjesec',
			MM     : bs__translate,
			y      : 'godinu',
			yy     : bs__translate
		},
		ordinalParse: /\d{1,2}\./,
		ordinal : '%d.',
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 7  // The week that contains Jan 1st is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : catalan (ca)
	//! author : Juan G. Hurtado : https://github.com/juanghurtado

	var ca = moment__default.defineLocale('ca', {
		months : 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),
		monthsShort : 'gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.'.split('_'),
		monthsParseExact : true,
		weekdays : 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
		weekdaysShort : 'dg._dl._dt._dc._dj._dv._ds.'.split('_'),
		weekdaysMin : 'Dg_Dl_Dt_Dc_Dj_Dv_Ds'.split('_'),
		weekdaysParseExact : true,
		longDateFormat : {
			LT : 'H:mm',
			LTS : 'H:mm:ss',
			L : 'DD/MM/YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY H:mm',
			LLLL : 'dddd D MMMM YYYY H:mm'
		},
		calendar : {
			sameDay : function () {
				return '[avui a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
			},
			nextDay : function () {
				return '[demà a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
			},
			nextWeek : function () {
				return 'dddd [a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
			},
			lastDay : function () {
				return '[ahir a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
			},
			lastWeek : function () {
				return '[el] dddd [passat a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
			},
			sameElse : 'L'
		},
		relativeTime : {
			future : 'en %s',
			past : 'fa %s',
			s : 'uns segons',
			m : 'un minut',
			mm : '%d minuts',
			h : 'una hora',
			hh : '%d hores',
			d : 'un dia',
			dd : '%d dies',
			M : 'un mes',
			MM : '%d mesos',
			y : 'un any',
			yy : '%d anys'
		},
		ordinalParse: /\d{1,2}(r|n|t|è|a)/,
		ordinal : function (number, period) {
			var output = (number === 1) ? 'r' :
				(number === 2) ? 'n' :
					(number === 3) ? 'r' :
						(number === 4) ? 't' : 'è';
			if (period === 'w' || period === 'W') {
				output = 'a';
			}
			return number + output;
		},
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 4  // The week that contains Jan 4th is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : czech (cs)
	//! author : petrbela : https://github.com/petrbela

	var cs__months = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_'),
		cs__monthsShort = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_');
	function cs__plural(n) {
		return (n > 1) && (n < 5) && (~~(n / 10) !== 1);
	}
	function cs__translate(number, withoutSuffix, key, isFuture) {
		var result = number + ' ';
		switch (key) {
			case 's':  // a few seconds / in a few seconds / a few seconds ago
				return (withoutSuffix || isFuture) ? 'pár sekund' : 'pár sekundami';
			case 'm':  // a minute / in a minute / a minute ago
				return withoutSuffix ? 'minuta' : (isFuture ? 'minutu' : 'minutou');
			case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
				if (withoutSuffix || isFuture) {
					return result + (cs__plural(number) ? 'minuty' : 'minut');
				} else {
					return result + 'minutami';
				}
				break;
			case 'h':  // an hour / in an hour / an hour ago
				return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
			case 'hh': // 9 hours / in 9 hours / 9 hours ago
				if (withoutSuffix || isFuture) {
					return result + (cs__plural(number) ? 'hodiny' : 'hodin');
				} else {
					return result + 'hodinami';
				}
				break;
			case 'd':  // a day / in a day / a day ago
				return (withoutSuffix || isFuture) ? 'den' : 'dnem';
			case 'dd': // 9 days / in 9 days / 9 days ago
				if (withoutSuffix || isFuture) {
					return result + (cs__plural(number) ? 'dny' : 'dní');
				} else {
					return result + 'dny';
				}
				break;
			case 'M':  // a month / in a month / a month ago
				return (withoutSuffix || isFuture) ? 'měsíc' : 'měsícem';
			case 'MM': // 9 months / in 9 months / 9 months ago
				if (withoutSuffix || isFuture) {
					return result + (cs__plural(number) ? 'měsíce' : 'měsíců');
				} else {
					return result + 'měsíci';
				}
				break;
			case 'y':  // a year / in a year / a year ago
				return (withoutSuffix || isFuture) ? 'rok' : 'rokem';
			case 'yy': // 9 years / in 9 years / 9 years ago
				if (withoutSuffix || isFuture) {
					return result + (cs__plural(number) ? 'roky' : 'let');
				} else {
					return result + 'lety';
				}
				break;
		}
	}

	var cs = moment__default.defineLocale('cs', {
		months : cs__months,
		monthsShort : cs__monthsShort,
		monthsParse : (function (months, monthsShort) {
			var i, _monthsParse = [];
			for (i = 0; i < 12; i++) {
				// use custom parser to solve problem with July (červenec)
				_monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
			}
			return _monthsParse;
		}(cs__months, cs__monthsShort)),
		shortMonthsParse : (function (monthsShort) {
			var i, _shortMonthsParse = [];
			for (i = 0; i < 12; i++) {
				_shortMonthsParse[i] = new RegExp('^' + monthsShort[i] + '$', 'i');
			}
			return _shortMonthsParse;
		}(cs__monthsShort)),
		longMonthsParse : (function (months) {
			var i, _longMonthsParse = [];
			for (i = 0; i < 12; i++) {
				_longMonthsParse[i] = new RegExp('^' + months[i] + '$', 'i');
			}
			return _longMonthsParse;
		}(cs__months)),
		weekdays : 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
		weekdaysShort : 'ne_po_út_st_čt_pá_so'.split('_'),
		weekdaysMin : 'ne_po_út_st_čt_pá_so'.split('_'),
		longDateFormat : {
			LT: 'H:mm',
			LTS : 'H:mm:ss',
			L : 'DD.MM.YYYY',
			LL : 'D. MMMM YYYY',
			LLL : 'D. MMMM YYYY H:mm',
			LLLL : 'dddd D. MMMM YYYY H:mm'
		},
		calendar : {
			sameDay: '[dnes v] LT',
			nextDay: '[zítra v] LT',
			nextWeek: function () {
				switch (this.day()) {
					case 0:
						return '[v neděli v] LT';
					case 1:
					case 2:
						return '[v] dddd [v] LT';
					case 3:
						return '[ve středu v] LT';
					case 4:
						return '[ve čtvrtek v] LT';
					case 5:
						return '[v pátek v] LT';
					case 6:
						return '[v sobotu v] LT';
				}
			},
			lastDay: '[včera v] LT',
			lastWeek: function () {
				switch (this.day()) {
					case 0:
						return '[minulou neděli v] LT';
					case 1:
					case 2:
						return '[minulé] dddd [v] LT';
					case 3:
						return '[minulou středu v] LT';
					case 4:
					case 5:
						return '[minulý] dddd [v] LT';
					case 6:
						return '[minulou sobotu v] LT';
				}
			},
			sameElse: 'L'
		},
		relativeTime : {
			future : 'za %s',
			past : 'před %s',
			s : cs__translate,
			m : cs__translate,
			mm : cs__translate,
			h : cs__translate,
			hh : cs__translate,
			d : cs__translate,
			dd : cs__translate,
			M : cs__translate,
			MM : cs__translate,
			y : cs__translate,
			yy : cs__translate
		},
		ordinalParse : /\d{1,2}\./,
		ordinal : '%d.',
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 4  // The week that contains Jan 4th is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : chuvash (cv)
	//! author : Anatoly Mironov : https://github.com/mirontoli

	var cv = moment__default.defineLocale('cv', {
		months : 'кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав'.split('_'),
		monthsShort : 'кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш'.split('_'),
		weekdays : 'вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун'.split('_'),
		weekdaysShort : 'выр_тун_ытл_юн_кӗҫ_эрн_шӑм'.split('_'),
		weekdaysMin : 'вр_тн_ыт_юн_кҫ_эр_шм'.split('_'),
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'DD-MM-YYYY',
			LL : 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]',
			LLL : 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm',
			LLLL : 'dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm'
		},
		calendar : {
			sameDay: '[Паян] LT [сехетре]',
			nextDay: '[Ыран] LT [сехетре]',
			lastDay: '[Ӗнер] LT [сехетре]',
			nextWeek: '[Ҫитес] dddd LT [сехетре]',
			lastWeek: '[Иртнӗ] dddd LT [сехетре]',
			sameElse: 'L'
		},
		relativeTime : {
			future : function (output) {
				var affix = /сехет$/i.exec(output) ? 'рен' : /ҫул$/i.exec(output) ? 'тан' : 'ран';
				return output + affix;
			},
			past : '%s каялла',
			s : 'пӗр-ик ҫеккунт',
			m : 'пӗр минут',
			mm : '%d минут',
			h : 'пӗр сехет',
			hh : '%d сехет',
			d : 'пӗр кун',
			dd : '%d кун',
			M : 'пӗр уйӑх',
			MM : '%d уйӑх',
			y : 'пӗр ҫул',
			yy : '%d ҫул'
		},
		ordinalParse: /\d{1,2}-мӗш/,
		ordinal : '%d-мӗш',
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 7  // The week that contains Jan 1st is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : Welsh (cy)
	//! author : Robert Allen

	var cy = moment__default.defineLocale('cy', {
		months: 'Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr'.split('_'),
		monthsShort: 'Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag'.split('_'),
		weekdays: 'Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn'.split('_'),
		weekdaysShort: 'Sul_Llun_Maw_Mer_Iau_Gwe_Sad'.split('_'),
		weekdaysMin: 'Su_Ll_Ma_Me_Ia_Gw_Sa'.split('_'),
		weekdaysParseExact : true,
		// time formats are the same as en-gb
		longDateFormat: {
			LT: 'HH:mm',
			LTS : 'HH:mm:ss',
			L: 'DD/MM/YYYY',
			LL: 'D MMMM YYYY',
			LLL: 'D MMMM YYYY HH:mm',
			LLLL: 'dddd, D MMMM YYYY HH:mm'
		},
		calendar: {
			sameDay: '[Heddiw am] LT',
			nextDay: '[Yfory am] LT',
			nextWeek: 'dddd [am] LT',
			lastDay: '[Ddoe am] LT',
			lastWeek: 'dddd [diwethaf am] LT',
			sameElse: 'L'
		},
		relativeTime: {
			future: 'mewn %s',
			past: '%s yn ôl',
			s: 'ychydig eiliadau',
			m: 'munud',
			mm: '%d munud',
			h: 'awr',
			hh: '%d awr',
			d: 'diwrnod',
			dd: '%d diwrnod',
			M: 'mis',
			MM: '%d mis',
			y: 'blwyddyn',
			yy: '%d flynedd'
		},
		ordinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
		// traditional ordinal numbers above 31 are not commonly used in colloquial Welsh
		ordinal: function (number) {
			var b = number,
				output = '',
				lookup = [
					'', 'af', 'il', 'ydd', 'ydd', 'ed', 'ed', 'ed', 'fed', 'fed', 'fed', // 1af to 10fed
					'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'fed' // 11eg to 20fed
				];
			if (b > 20) {
				if (b === 40 || b === 50 || b === 60 || b === 80 || b === 100) {
					output = 'fed'; // not 30ain, 70ain or 90ain
				} else {
					output = 'ain';
				}
			} else if (b > 0) {
				output = lookup[b];
			}
			return number + output;
		},
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 4  // The week that contains Jan 4th is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : danish (da)
	//! author : Ulrik Nielsen : https://github.com/mrbase

	var da = moment__default.defineLocale('da', {
		months : 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split('_'),
		monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
		weekdays : 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
		weekdaysShort : 'søn_man_tir_ons_tor_fre_lør'.split('_'),
		weekdaysMin : 'sø_ma_ti_on_to_fr_lø'.split('_'),
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'DD/MM/YYYY',
			LL : 'D. MMMM YYYY',
			LLL : 'D. MMMM YYYY HH:mm',
			LLLL : 'dddd [d.] D. MMMM YYYY HH:mm'
		},
		calendar : {
			sameDay : '[I dag kl.] LT',
			nextDay : '[I morgen kl.] LT',
			nextWeek : 'dddd [kl.] LT',
			lastDay : '[I går kl.] LT',
			lastWeek : '[sidste] dddd [kl] LT',
			sameElse : 'L'
		},
		relativeTime : {
			future : 'om %s',
			past : '%s siden',
			s : 'få sekunder',
			m : 'et minut',
			mm : '%d minutter',
			h : 'en time',
			hh : '%d timer',
			d : 'en dag',
			dd : '%d dage',
			M : 'en måned',
			MM : '%d måneder',
			y : 'et år',
			yy : '%d år'
		},
		ordinalParse: /\d{1,2}\./,
		ordinal : '%d.',
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 4  // The week that contains Jan 4th is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : austrian german (de-at)
	//! author : lluchs : https://github.com/lluchs
	//! author: Menelion Elensúle: https://github.com/Oire
	//! author : Martin Groller : https://github.com/MadMG
	//! author : Mikolaj Dadela : https://github.com/mik01aj

	function de_at__processRelativeTime(number, withoutSuffix, key, isFuture) {
		var format = {
			'm': ['eine Minute', 'einer Minute'],
			'h': ['eine Stunde', 'einer Stunde'],
			'd': ['ein Tag', 'einem Tag'],
			'dd': [number + ' Tage', number + ' Tagen'],
			'M': ['ein Monat', 'einem Monat'],
			'MM': [number + ' Monate', number + ' Monaten'],
			'y': ['ein Jahr', 'einem Jahr'],
			'yy': [number + ' Jahre', number + ' Jahren']
		};
		return withoutSuffix ? format[key][0] : format[key][1];
	}

	var de_at = moment__default.defineLocale('de-at', {
		months : 'Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
		monthsShort : 'Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
		monthsParseExact : true,
		weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
		weekdaysShort : 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
		weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
		weekdaysParseExact : true,
		longDateFormat : {
			LT: 'HH:mm',
			LTS: 'HH:mm:ss',
			L : 'DD.MM.YYYY',
			LL : 'D. MMMM YYYY',
			LLL : 'D. MMMM YYYY HH:mm',
			LLLL : 'dddd, D. MMMM YYYY HH:mm'
		},
		calendar : {
			sameDay: '[heute um] LT [Uhr]',
			sameElse: 'L',
			nextDay: '[morgen um] LT [Uhr]',
			nextWeek: 'dddd [um] LT [Uhr]',
			lastDay: '[gestern um] LT [Uhr]',
			lastWeek: '[letzten] dddd [um] LT [Uhr]'
		},
		relativeTime : {
			future : 'in %s',
			past : 'vor %s',
			s : 'ein paar Sekunden',
			m : de_at__processRelativeTime,
			mm : '%d Minuten',
			h : de_at__processRelativeTime,
			hh : '%d Stunden',
			d : de_at__processRelativeTime,
			dd : de_at__processRelativeTime,
			M : de_at__processRelativeTime,
			MM : de_at__processRelativeTime,
			y : de_at__processRelativeTime,
			yy : de_at__processRelativeTime
		},
		ordinalParse: /\d{1,2}\./,
		ordinal : '%d.',
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 4  // The week that contains Jan 4th is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : german (de)
	//! author : lluchs : https://github.com/lluchs
	//! author: Menelion Elensúle: https://github.com/Oire
	//! author : Mikolaj Dadela : https://github.com/mik01aj

	function de__processRelativeTime(number, withoutSuffix, key, isFuture) {
		var format = {
			'm': ['eine Minute', 'einer Minute'],
			'h': ['eine Stunde', 'einer Stunde'],
			'd': ['ein Tag', 'einem Tag'],
			'dd': [number + ' Tage', number + ' Tagen'],
			'M': ['ein Monat', 'einem Monat'],
			'MM': [number + ' Monate', number + ' Monaten'],
			'y': ['ein Jahr', 'einem Jahr'],
			'yy': [number + ' Jahre', number + ' Jahren']
		};
		return withoutSuffix ? format[key][0] : format[key][1];
	}

	var de = moment__default.defineLocale('de', {
		months : 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
		monthsShort : 'Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
		monthsParseExact : true,
		weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
		weekdaysShort : 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
		weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
		weekdaysParseExact : true,
		longDateFormat : {
			LT: 'HH:mm',
			LTS: 'HH:mm:ss',
			L : 'DD.MM.YYYY',
			LL : 'D. MMMM YYYY',
			LLL : 'D. MMMM YYYY HH:mm',
			LLLL : 'dddd, D. MMMM YYYY HH:mm'
		},
		calendar : {
			sameDay: '[heute um] LT [Uhr]',
			sameElse: 'L',
			nextDay: '[morgen um] LT [Uhr]',
			nextWeek: 'dddd [um] LT [Uhr]',
			lastDay: '[gestern um] LT [Uhr]',
			lastWeek: '[letzten] dddd [um] LT [Uhr]'
		},
		relativeTime : {
			future : 'in %s',
			past : 'vor %s',
			s : 'ein paar Sekunden',
			m : de__processRelativeTime,
			mm : '%d Minuten',
			h : de__processRelativeTime,
			hh : '%d Stunden',
			d : de__processRelativeTime,
			dd : de__processRelativeTime,
			M : de__processRelativeTime,
			MM : de__processRelativeTime,
			y : de__processRelativeTime,
			yy : de__processRelativeTime
		},
		ordinalParse: /\d{1,2}\./,
		ordinal : '%d.',
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 4  // The week that contains Jan 4th is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : dhivehi (dv)
	//! author : Jawish Hameed : https://github.com/jawish

	var dv__months = [
		'ޖެނުއަރީ',
		'ފެބްރުއަރީ',
		'މާރިޗު',
		'އޭޕްރީލު',
		'މޭ',
		'ޖޫން',
		'ޖުލައި',
		'އޯގަސްޓު',
		'ސެޕްޓެމްބަރު',
		'އޮކްޓޯބަރު',
		'ނޮވެމްބަރު',
		'ޑިސެމްބަރު'
	], dv__weekdays = [
		'އާދިއްތަ',
		'ހޯމަ',
		'އަންގާރަ',
		'ބުދަ',
		'ބުރާސްފަތި',
		'ހުކުރު',
		'ހޮނިހިރު'
	];

	var dv = moment__default.defineLocale('dv', {
		months : dv__months,
		monthsShort : dv__months,
		weekdays : dv__weekdays,
		weekdaysShort : dv__weekdays,
		weekdaysMin : 'އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި'.split('_'),
		longDateFormat : {

			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'D/M/YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY HH:mm',
			LLLL : 'dddd D MMMM YYYY HH:mm'
		},
		meridiemParse: /މކ|މފ/,
		isPM : function (input) {
			return 'މފ' === input;
		},
		meridiem : function (hour, minute, isLower) {
			if (hour < 12) {
				return 'މކ';
			} else {
				return 'މފ';
			}
		},
		calendar : {
			sameDay : '[މިއަދު] LT',
			nextDay : '[މާދަމާ] LT',
			nextWeek : 'dddd LT',
			lastDay : '[އިއްޔެ] LT',
			lastWeek : '[ފާއިތުވި] dddd LT',
			sameElse : 'L'
		},
		relativeTime : {
			future : 'ތެރޭގައި %s',
			past : 'ކުރިން %s',
			s : 'ސިކުންތުކޮޅެއް',
			m : 'މިނިޓެއް',
			mm : 'މިނިޓު %d',
			h : 'ގަޑިއިރެއް',
			hh : 'ގަޑިއިރު %d',
			d : 'ދުވަހެއް',
			dd : 'ދުވަސް %d',
			M : 'މަހެއް',
			MM : 'މަސް %d',
			y : 'އަހަރެއް',
			yy : 'އަހަރު %d'
		},
		preparse: function (string) {
			return string.replace(/،/g, ',');
		},
		postformat: function (string) {
			return string.replace(/,/g, '،');
		},
		week : {
			dow : 7,  // Sunday is the first day of the week.
			doy : 12  // The week that contains Jan 1st is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : modern greek (el)
	//! author : Aggelos Karalias : https://github.com/mehiel

	var el = moment__default.defineLocale('el', {
		monthsNominativeEl : 'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος'.split('_'),
		monthsGenitiveEl : 'Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου'.split('_'),
		months : function (momentToFormat, format) {
			if (/D/.test(format.substring(0, format.indexOf('MMMM')))) { // if there is a day number before 'MMMM'
				return this._monthsGenitiveEl[momentToFormat.month()];
			} else {
				return this._monthsNominativeEl[momentToFormat.month()];
			}
		},
		monthsShort : 'Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ'.split('_'),
		weekdays : 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο'.split('_'),
		weekdaysShort : 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ'.split('_'),
		weekdaysMin : 'Κυ_Δε_Τρ_Τε_Πε_Πα_Σα'.split('_'),
		meridiem : function (hours, minutes, isLower) {
			if (hours > 11) {
				return isLower ? 'μμ' : 'ΜΜ';
			} else {
				return isLower ? 'πμ' : 'ΠΜ';
			}
		},
		isPM : function (input) {
			return ((input + '').toLowerCase()[0] === 'μ');
		},
		meridiemParse : /[ΠΜ]\.?Μ?\.?/i,
		longDateFormat : {
			LT : 'h:mm A',
			LTS : 'h:mm:ss A',
			L : 'DD/MM/YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY h:mm A',
			LLLL : 'dddd, D MMMM YYYY h:mm A'
		},
		calendarEl : {
			sameDay : '[Σήμερα {}] LT',
			nextDay : '[Αύριο {}] LT',
			nextWeek : 'dddd [{}] LT',
			lastDay : '[Χθες {}] LT',
			lastWeek : function () {
				switch (this.day()) {
					case 6:
						return '[το προηγούμενο] dddd [{}] LT';
					default:
						return '[την προηγούμενη] dddd [{}] LT';
				}
			},
			sameElse : 'L'
		},
		calendar : function (key, mom) {
			var output = this._calendarEl[key],
				hours = mom && mom.hours();
			if (isFunction(output)) {
				output = output.apply(mom);
			}
			return output.replace('{}', (hours % 12 === 1 ? 'στη' : 'στις'));
		},
		relativeTime : {
			future : 'σε %s',
			past : '%s πριν',
			s : 'λίγα δευτερόλεπτα',
			m : 'ένα λεπτό',
			mm : '%d λεπτά',
			h : 'μία ώρα',
			hh : '%d ώρες',
			d : 'μία μέρα',
			dd : '%d μέρες',
			M : 'ένας μήνας',
			MM : '%d μήνες',
			y : 'ένας χρόνος',
			yy : '%d χρόνια'
		},
		ordinalParse: /\d{1,2}η/,
		ordinal: '%dη',
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 4  // The week that contains Jan 4st is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : australian english (en-au)

	var en_au = moment__default.defineLocale('en-au', {
		months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
		monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
		weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
		weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
		weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
		longDateFormat : {
			LT : 'h:mm A',
			LTS : 'h:mm:ss A',
			L : 'DD/MM/YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY h:mm A',
			LLLL : 'dddd, D MMMM YYYY h:mm A'
		},
		calendar : {
			sameDay : '[Today at] LT',
			nextDay : '[Tomorrow at] LT',
			nextWeek : 'dddd [at] LT',
			lastDay : '[Yesterday at] LT',
			lastWeek : '[Last] dddd [at] LT',
			sameElse : 'L'
		},
		relativeTime : {
			future : 'in %s',
			past : '%s ago',
			s : 'a few seconds',
			m : 'a minute',
			mm : '%d minutes',
			h : 'an hour',
			hh : '%d hours',
			d : 'a day',
			dd : '%d days',
			M : 'a month',
			MM : '%d months',
			y : 'a year',
			yy : '%d years'
		},
		ordinalParse: /\d{1,2}(st|nd|rd|th)/,
		ordinal : function (number) {
			var b = number % 10,
				output = (~~(number % 100 / 10) === 1) ? 'th' :
					(b === 1) ? 'st' :
						(b === 2) ? 'nd' :
							(b === 3) ? 'rd' : 'th';
			return number + output;
		},
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 4  // The week that contains Jan 4th is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : canadian english (en-ca)
	//! author : Jonathan Abourbih : https://github.com/jonbca

	var en_ca = moment__default.defineLocale('en-ca', {
		months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
		monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
		weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
		weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
		weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
		longDateFormat : {
			LT : 'h:mm A',
			LTS : 'h:mm:ss A',
			L : 'YYYY-MM-DD',
			LL : 'MMMM D, YYYY',
			LLL : 'MMMM D, YYYY h:mm A',
			LLLL : 'dddd, MMMM D, YYYY h:mm A'
		},
		calendar : {
			sameDay : '[Today at] LT',
			nextDay : '[Tomorrow at] LT',
			nextWeek : 'dddd [at] LT',
			lastDay : '[Yesterday at] LT',
			lastWeek : '[Last] dddd [at] LT',
			sameElse : 'L'
		},
		relativeTime : {
			future : 'in %s',
			past : '%s ago',
			s : 'a few seconds',
			m : 'a minute',
			mm : '%d minutes',
			h : 'an hour',
			hh : '%d hours',
			d : 'a day',
			dd : '%d days',
			M : 'a month',
			MM : '%d months',
			y : 'a year',
			yy : '%d years'
		},
		ordinalParse: /\d{1,2}(st|nd|rd|th)/,
		ordinal : function (number) {
			var b = number % 10,
				output = (~~(number % 100 / 10) === 1) ? 'th' :
					(b === 1) ? 'st' :
						(b === 2) ? 'nd' :
							(b === 3) ? 'rd' : 'th';
			return number + output;
		}
	});

	//! moment.js locale configuration
	//! locale : great britain english (en-gb)
	//! author : Chris Gedrim : https://github.com/chrisgedrim

	var en_gb = moment__default.defineLocale('en-gb', {
		months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
		monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
		weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
		weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
		weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'DD/MM/YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY HH:mm',
			LLLL : 'dddd, D MMMM YYYY HH:mm'
		},
		calendar : {
			sameDay : '[Today at] LT',
			nextDay : '[Tomorrow at] LT',
			nextWeek : 'dddd [at] LT',
			lastDay : '[Yesterday at] LT',
			lastWeek : '[Last] dddd [at] LT',
			sameElse : 'L'
		},
		relativeTime : {
			future : 'in %s',
			past : '%s ago',
			s : 'a few seconds',
			m : 'a minute',
			mm : '%d minutes',
			h : 'an hour',
			hh : '%d hours',
			d : 'a day',
			dd : '%d days',
			M : 'a month',
			MM : '%d months',
			y : 'a year',
			yy : '%d years'
		},
		ordinalParse: /\d{1,2}(st|nd|rd|th)/,
		ordinal : function (number) {
			var b = number % 10,
				output = (~~(number % 100 / 10) === 1) ? 'th' :
					(b === 1) ? 'st' :
						(b === 2) ? 'nd' :
							(b === 3) ? 'rd' : 'th';
			return number + output;
		},
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 4  // The week that contains Jan 4th is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : Irish english (en-ie)
	//! author : Chris Cartlidge : https://github.com/chriscartlidge

	var en_ie = moment__default.defineLocale('en-ie', {
		months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
		monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
		weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
		weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
		weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'DD-MM-YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY HH:mm',
			LLLL : 'dddd D MMMM YYYY HH:mm'
		},
		calendar : {
			sameDay : '[Today at] LT',
			nextDay : '[Tomorrow at] LT',
			nextWeek : 'dddd [at] LT',
			lastDay : '[Yesterday at] LT',
			lastWeek : '[Last] dddd [at] LT',
			sameElse : 'L'
		},
		relativeTime : {
			future : 'in %s',
			past : '%s ago',
			s : 'a few seconds',
			m : 'a minute',
			mm : '%d minutes',
			h : 'an hour',
			hh : '%d hours',
			d : 'a day',
			dd : '%d days',
			M : 'a month',
			MM : '%d months',
			y : 'a year',
			yy : '%d years'
		},
		ordinalParse: /\d{1,2}(st|nd|rd|th)/,
		ordinal : function (number) {
			var b = number % 10,
				output = (~~(number % 100 / 10) === 1) ? 'th' :
					(b === 1) ? 'st' :
						(b === 2) ? 'nd' :
							(b === 3) ? 'rd' : 'th';
			return number + output;
		},
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 4  // The week that contains Jan 4th is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : New Zealand english (en-nz)

	var en_nz = moment__default.defineLocale('en-nz', {
		months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
		monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
		weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
		weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
		weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
		longDateFormat : {
			LT : 'h:mm A',
			LTS : 'h:mm:ss A',
			L : 'DD/MM/YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY h:mm A',
			LLLL : 'dddd, D MMMM YYYY h:mm A'
		},
		calendar : {
			sameDay : '[Today at] LT',
			nextDay : '[Tomorrow at] LT',
			nextWeek : 'dddd [at] LT',
			lastDay : '[Yesterday at] LT',
			lastWeek : '[Last] dddd [at] LT',
			sameElse : 'L'
		},
		relativeTime : {
			future : 'in %s',
			past : '%s ago',
			s : 'a few seconds',
			m : 'a minute',
			mm : '%d minutes',
			h : 'an hour',
			hh : '%d hours',
			d : 'a day',
			dd : '%d days',
			M : 'a month',
			MM : '%d months',
			y : 'a year',
			yy : '%d years'
		},
		ordinalParse: /\d{1,2}(st|nd|rd|th)/,
		ordinal : function (number) {
			var b = number % 10,
				output = (~~(number % 100 / 10) === 1) ? 'th' :
					(b === 1) ? 'st' :
						(b === 2) ? 'nd' :
							(b === 3) ? 'rd' : 'th';
			return number + output;
		},
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 4  // The week that contains Jan 4th is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : esperanto (eo)
	//! author : Colin Dean : https://github.com/colindean
	//! komento: Mi estas malcerta se mi korekte traktis akuzativojn en tiu traduko.
	//!          Se ne, bonvolu korekti kaj avizi min por ke mi povas lerni!

	var eo = moment__default.defineLocale('eo', {
		months : 'januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro'.split('_'),
		monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec'.split('_'),
		weekdays : 'Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato'.split('_'),
		weekdaysShort : 'Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab'.split('_'),
		weekdaysMin : 'Di_Lu_Ma_Me_Ĵa_Ve_Sa'.split('_'),
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'YYYY-MM-DD',
			LL : 'D[-an de] MMMM, YYYY',
			LLL : 'D[-an de] MMMM, YYYY HH:mm',
			LLLL : 'dddd, [la] D[-an de] MMMM, YYYY HH:mm'
		},
		meridiemParse: /[ap]\.t\.m/i,
		isPM: function (input) {
			return input.charAt(0).toLowerCase() === 'p';
		},
		meridiem : function (hours, minutes, isLower) {
			if (hours > 11) {
				return isLower ? 'p.t.m.' : 'P.T.M.';
			} else {
				return isLower ? 'a.t.m.' : 'A.T.M.';
			}
		},
		calendar : {
			sameDay : '[Hodiaŭ je] LT',
			nextDay : '[Morgaŭ je] LT',
			nextWeek : 'dddd [je] LT',
			lastDay : '[Hieraŭ je] LT',
			lastWeek : '[pasinta] dddd [je] LT',
			sameElse : 'L'
		},
		relativeTime : {
			future : 'je %s',
			past : 'antaŭ %s',
			s : 'sekundoj',
			m : 'minuto',
			mm : '%d minutoj',
			h : 'horo',
			hh : '%d horoj',
			d : 'tago',//ne 'diurno', ĉar estas uzita por proksimumo
			dd : '%d tagoj',
			M : 'monato',
			MM : '%d monatoj',
			y : 'jaro',
			yy : '%d jaroj'
		},
		ordinalParse: /\d{1,2}a/,
		ordinal : '%da',
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 7  // The week that contains Jan 1st is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : spanish (es)
	//! author : Julio Napurí : https://github.com/julionc

	var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
		es__monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');

	var es = moment__default.defineLocale('es', {
		months : 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
		monthsShort : function (m, format) {
			if (/-MMM-/.test(format)) {
				return es__monthsShort[m.month()];
			} else {
				return monthsShortDot[m.month()];
			}
		},
		monthsParseExact : true,
		weekdays : 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
		weekdaysShort : 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
		weekdaysMin : 'do_lu_ma_mi_ju_vi_sá'.split('_'),
		weekdaysParseExact : true,
		longDateFormat : {
			LT : 'H:mm',
			LTS : 'H:mm:ss',
			L : 'DD/MM/YYYY',
			LL : 'D [de] MMMM [de] YYYY',
			LLL : 'D [de] MMMM [de] YYYY H:mm',
			LLLL : 'dddd, D [de] MMMM [de] YYYY H:mm'
		},
		calendar : {
			sameDay : function () {
				return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
			},
			nextDay : function () {
				return '[mañana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
			},
			nextWeek : function () {
				return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
			},
			lastDay : function () {
				return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
			},
			lastWeek : function () {
				return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
			},
			sameElse : 'L'
		},
		relativeTime : {
			future : 'en %s',
			past : 'hace %s',
			s : 'unos segundos',
			m : 'un minuto',
			mm : '%d minutos',
			h : 'una hora',
			hh : '%d horas',
			d : 'un día',
			dd : '%d días',
			M : 'un mes',
			MM : '%d meses',
			y : 'un año',
			yy : '%d años'
		},
		ordinalParse : /\d{1,2}º/,
		ordinal : '%dº',
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 4  // The week that contains Jan 4th is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : estonian (et)
	//! author : Henry Kehlmann : https://github.com/madhenry
	//! improvements : Illimar Tambek : https://github.com/ragulka

	function et__processRelativeTime(number, withoutSuffix, key, isFuture) {
		var format = {
			's' : ['mõne sekundi', 'mõni sekund', 'paar sekundit'],
			'm' : ['ühe minuti', 'üks minut'],
			'mm': [number + ' minuti', number + ' minutit'],
			'h' : ['ühe tunni', 'tund aega', 'üks tund'],
			'hh': [number + ' tunni', number + ' tundi'],
			'd' : ['ühe päeva', 'üks päev'],
			'M' : ['kuu aja', 'kuu aega', 'üks kuu'],
			'MM': [number + ' kuu', number + ' kuud'],
			'y' : ['ühe aasta', 'aasta', 'üks aasta'],
			'yy': [number + ' aasta', number + ' aastat']
		};
		if (withoutSuffix) {
			return format[key][2] ? format[key][2] : format[key][1];
		}
		return isFuture ? format[key][0] : format[key][1];
	}

	var et = moment__default.defineLocale('et', {
		months        : 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
		monthsShort   : 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
		weekdays      : 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split('_'),
		weekdaysShort : 'P_E_T_K_N_R_L'.split('_'),
		weekdaysMin   : 'P_E_T_K_N_R_L'.split('_'),
		longDateFormat : {
			LT   : 'H:mm',
			LTS : 'H:mm:ss',
			L    : 'DD.MM.YYYY',
			LL   : 'D. MMMM YYYY',
			LLL  : 'D. MMMM YYYY H:mm',
			LLLL : 'dddd, D. MMMM YYYY H:mm'
		},
		calendar : {
			sameDay  : '[Täna,] LT',
			nextDay  : '[Homme,] LT',
			nextWeek : '[Järgmine] dddd LT',
			lastDay  : '[Eile,] LT',
			lastWeek : '[Eelmine] dddd LT',
			sameElse : 'L'
		},
		relativeTime : {
			future : '%s pärast',
			past   : '%s tagasi',
			s      : et__processRelativeTime,
			m      : et__processRelativeTime,
			mm     : et__processRelativeTime,
			h      : et__processRelativeTime,
			hh     : et__processRelativeTime,
			d      : et__processRelativeTime,
			dd     : '%d päeva',
			M      : et__processRelativeTime,
			MM     : et__processRelativeTime,
			y      : et__processRelativeTime,
			yy     : et__processRelativeTime
		},
		ordinalParse: /\d{1,2}\./,
		ordinal : '%d.',
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 4  // The week that contains Jan 4th is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : euskara (eu)
	//! author : Eneko Illarramendi : https://github.com/eillarra

	var eu = moment__default.defineLocale('eu', {
		months : 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split('_'),
		monthsShort : 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_'),
		monthsParseExact : true,
		weekdays : 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split('_'),
		weekdaysShort : 'ig._al._ar._az._og._ol._lr.'.split('_'),
		weekdaysMin : 'ig_al_ar_az_og_ol_lr'.split('_'),
		weekdaysParseExact : true,
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'YYYY-MM-DD',
			LL : 'YYYY[ko] MMMM[ren] D[a]',
			LLL : 'YYYY[ko] MMMM[ren] D[a] HH:mm',
			LLLL : 'dddd, YYYY[ko] MMMM[ren] D[a] HH:mm',
			l : 'YYYY-M-D',
			ll : 'YYYY[ko] MMM D[a]',
			lll : 'YYYY[ko] MMM D[a] HH:mm',
			llll : 'ddd, YYYY[ko] MMM D[a] HH:mm'
		},
		calendar : {
			sameDay : '[gaur] LT[etan]',
			nextDay : '[bihar] LT[etan]',
			nextWeek : 'dddd LT[etan]',
			lastDay : '[atzo] LT[etan]',
			lastWeek : '[aurreko] dddd LT[etan]',
			sameElse : 'L'
		},
		relativeTime : {
			future : '%s barru',
			past : 'duela %s',
			s : 'segundo batzuk',
			m : 'minutu bat',
			mm : '%d minutu',
			h : 'ordu bat',
			hh : '%d ordu',
			d : 'egun bat',
			dd : '%d egun',
			M : 'hilabete bat',
			MM : '%d hilabete',
			y : 'urte bat',
			yy : '%d urte'
		},
		ordinalParse: /\d{1,2}\./,
		ordinal : '%d.',
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 7  // The week that contains Jan 1st is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : Persian (fa)
	//! author : Ebrahim Byagowi : https://github.com/ebraminio

	var fa__symbolMap = {
		'1': '۱',
		'2': '۲',
		'3': '۳',
		'4': '۴',
		'5': '۵',
		'6': '۶',
		'7': '۷',
		'8': '۸',
		'9': '۹',
		'0': '۰'
	}, fa__numberMap = {
		'۱': '1',
		'۲': '2',
		'۳': '3',
		'۴': '4',
		'۵': '5',
		'۶': '6',
		'۷': '7',
		'۸': '8',
		'۹': '9',
		'۰': '0'
	};

	var fa = moment__default.defineLocale('fa', {
		months : 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
		monthsShort : 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
		weekdays : 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
		weekdaysShort : 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
		weekdaysMin : 'ی_د_س_چ_پ_ج_ش'.split('_'),
		weekdaysParseExact : true,
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'DD/MM/YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY HH:mm',
			LLLL : 'dddd, D MMMM YYYY HH:mm'
		},
		meridiemParse: /قبل از ظهر|بعد از ظهر/,
		isPM: function (input) {
			return /بعد از ظهر/.test(input);
		},
		meridiem : function (hour, minute, isLower) {
			if (hour < 12) {
				return 'قبل از ظهر';
			} else {
				return 'بعد از ظهر';
			}
		},
		calendar : {
			sameDay : '[امروز ساعت] LT',
			nextDay : '[فردا ساعت] LT',
			nextWeek : 'dddd [ساعت] LT',
			lastDay : '[دیروز ساعت] LT',
			lastWeek : 'dddd [پیش] [ساعت] LT',
			sameElse : 'L'
		},
		relativeTime : {
			future : 'در %s',
			past : '%s پیش',
			s : 'چندین ثانیه',
			m : 'یک دقیقه',
			mm : '%d دقیقه',
			h : 'یک ساعت',
			hh : '%d ساعت',
			d : 'یک روز',
			dd : '%d روز',
			M : 'یک ماه',
			MM : '%d ماه',
			y : 'یک سال',
			yy : '%d سال'
		},
		preparse: function (string) {
			return string.replace(/[۰-۹]/g, function (match) {
				return fa__numberMap[match];
			}).replace(/،/g, ',');
		},
		postformat: function (string) {
			return string.replace(/\d/g, function (match) {
				return fa__symbolMap[match];
			}).replace(/,/g, '،');
		},
		ordinalParse: /\d{1,2}م/,
		ordinal : '%dم',
		week : {
			dow : 6, // Saturday is the first day of the week.
			doy : 12 // The week that contains Jan 1st is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : finnish (fi)
	//! author : Tarmo Aidantausta : https://github.com/bleadof

	var numbersPast = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' '),
		numbersFuture = [
			'nolla', 'yhden', 'kahden', 'kolmen', 'neljän', 'viiden', 'kuuden',
			numbersPast[7], numbersPast[8], numbersPast[9]
		];
	function fi__translate(number, withoutSuffix, key, isFuture) {
		var result = '';
		switch (key) {
			case 's':
				return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';
			case 'm':
				return isFuture ? 'minuutin' : 'minuutti';
			case 'mm':
				result = isFuture ? 'minuutin' : 'minuuttia';
				break;
			case 'h':
				return isFuture ? 'tunnin' : 'tunti';
			case 'hh':
				result = isFuture ? 'tunnin' : 'tuntia';
				break;
			case 'd':
				return isFuture ? 'päivän' : 'päivä';
			case 'dd':
				result = isFuture ? 'päivän' : 'päivää';
				break;
			case 'M':
				return isFuture ? 'kuukauden' : 'kuukausi';
			case 'MM':
				result = isFuture ? 'kuukauden' : 'kuukautta';
				break;
			case 'y':
				return isFuture ? 'vuoden' : 'vuosi';
			case 'yy':
				result = isFuture ? 'vuoden' : 'vuotta';
				break;
		}
		result = verbalNumber(number, isFuture) + ' ' + result;
		return result;
	}
	function verbalNumber(number, isFuture) {
		return number < 10 ? (isFuture ? numbersFuture[number] : numbersPast[number]) : number;
	}

	var fi = moment__default.defineLocale('fi', {
		months : 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
		monthsShort : 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
		weekdays : 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
		weekdaysShort : 'su_ma_ti_ke_to_pe_la'.split('_'),
		weekdaysMin : 'su_ma_ti_ke_to_pe_la'.split('_'),
		longDateFormat : {
			LT : 'HH.mm',
			LTS : 'HH.mm.ss',
			L : 'DD.MM.YYYY',
			LL : 'Do MMMM[ta] YYYY',
			LLL : 'Do MMMM[ta] YYYY, [klo] HH.mm',
			LLLL : 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm',
			l : 'D.M.YYYY',
			ll : 'Do MMM YYYY',
			lll : 'Do MMM YYYY, [klo] HH.mm',
			llll : 'ddd, Do MMM YYYY, [klo] HH.mm'
		},
		calendar : {
			sameDay : '[tänään] [klo] LT',
			nextDay : '[huomenna] [klo] LT',
			nextWeek : 'dddd [klo] LT',
			lastDay : '[eilen] [klo] LT',
			lastWeek : '[viime] dddd[na] [klo] LT',
			sameElse : 'L'
		},
		relativeTime : {
			future : '%s päästä',
			past : '%s sitten',
			s : fi__translate,
			m : fi__translate,
			mm : fi__translate,
			h : fi__translate,
			hh : fi__translate,
			d : fi__translate,
			dd : fi__translate,
			M : fi__translate,
			MM : fi__translate,
			y : fi__translate,
			yy : fi__translate
		},
		ordinalParse: /\d{1,2}\./,
		ordinal : '%d.',
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 4  // The week that contains Jan 4th is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : faroese (fo)
	//! author : Ragnar Johannesen : https://github.com/ragnar123

	var fo = moment__default.defineLocale('fo', {
		months : 'januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
		monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
		weekdays : 'sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur'.split('_'),
		weekdaysShort : 'sun_mán_týs_mik_hós_frí_ley'.split('_'),
		weekdaysMin : 'su_má_tý_mi_hó_fr_le'.split('_'),
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'DD/MM/YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY HH:mm',
			LLLL : 'dddd D. MMMM, YYYY HH:mm'
		},
		calendar : {
			sameDay : '[Í dag kl.] LT',
			nextDay : '[Í morgin kl.] LT',
			nextWeek : 'dddd [kl.] LT',
			lastDay : '[Í gjár kl.] LT',
			lastWeek : '[síðstu] dddd [kl] LT',
			sameElse : 'L'
		},
		relativeTime : {
			future : 'um %s',
			past : '%s síðani',
			s : 'fá sekund',
			m : 'ein minutt',
			mm : '%d minuttir',
			h : 'ein tími',
			hh : '%d tímar',
			d : 'ein dagur',
			dd : '%d dagar',
			M : 'ein mánaði',
			MM : '%d mánaðir',
			y : 'eitt ár',
			yy : '%d ár'
		},
		ordinalParse: /\d{1,2}\./,
		ordinal : '%d.',
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 4  // The week that contains Jan 4th is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : canadian french (fr-ca)
	//! author : Jonathan Abourbih : https://github.com/jonbca

	var fr_ca = moment__default.defineLocale('fr-ca', {
		months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
		monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
		monthsParseExact : true,
		weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
		weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
		weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
		weekdaysParseExact : true,
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'YYYY-MM-DD',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY HH:mm',
			LLLL : 'dddd D MMMM YYYY HH:mm'
		},
		calendar : {
			sameDay: '[Aujourd\'hui à] LT',
			nextDay: '[Demain à] LT',
			nextWeek: 'dddd [à] LT',
			lastDay: '[Hier à] LT',
			lastWeek: 'dddd [dernier à] LT',
			sameElse: 'L'
		},
		relativeTime : {
			future : 'dans %s',
			past : 'il y a %s',
			s : 'quelques secondes',
			m : 'une minute',
			mm : '%d minutes',
			h : 'une heure',
			hh : '%d heures',
			d : 'un jour',
			dd : '%d jours',
			M : 'un mois',
			MM : '%d mois',
			y : 'un an',
			yy : '%d ans'
		},
		ordinalParse: /\d{1,2}(er|e)/,
		ordinal : function (number) {
			return number + (number === 1 ? 'er' : 'e');
		}
	});

	//! moment.js locale configuration
	//! locale : swiss french (fr)
	//! author : Gaspard Bucher : https://github.com/gaspard

	var fr_ch = moment__default.defineLocale('fr-ch', {
		months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
		monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
		monthsParseExact : true,
		weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
		weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
		weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
		weekdaysParseExact : true,
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'DD.MM.YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY HH:mm',
			LLLL : 'dddd D MMMM YYYY HH:mm'
		},
		calendar : {
			sameDay: '[Aujourd\'hui à] LT',
			nextDay: '[Demain à] LT',
			nextWeek: 'dddd [à] LT',
			lastDay: '[Hier à] LT',
			lastWeek: 'dddd [dernier à] LT',
			sameElse: 'L'
		},
		relativeTime : {
			future : 'dans %s',
			past : 'il y a %s',
			s : 'quelques secondes',
			m : 'une minute',
			mm : '%d minutes',
			h : 'une heure',
			hh : '%d heures',
			d : 'un jour',
			dd : '%d jours',
			M : 'un mois',
			MM : '%d mois',
			y : 'un an',
			yy : '%d ans'
		},
		ordinalParse: /\d{1,2}(er|e)/,
		ordinal : function (number) {
			return number + (number === 1 ? 'er' : 'e');
		},
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 4  // The week that contains Jan 4th is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : french (fr)
	//! author : John Fischer : https://github.com/jfroffice

	var fr = moment__default.defineLocale('fr', {
		months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
		monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
		monthsParseExact : true,
		weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
		weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
		weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
		weekdaysParseExact : true,
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'DD/MM/YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY HH:mm',
			LLLL : 'dddd D MMMM YYYY HH:mm'
		},
		calendar : {
			sameDay: '[Aujourd\'hui à] LT',
			nextDay: '[Demain à] LT',
			nextWeek: 'dddd [à] LT',
			lastDay: '[Hier à] LT',
			lastWeek: 'dddd [dernier à] LT',
			sameElse: 'L'
		},
		relativeTime : {
			future : 'dans %s',
			past : 'il y a %s',
			s : 'quelques secondes',
			m : 'une minute',
			mm : '%d minutes',
			h : 'une heure',
			hh : '%d heures',
			d : 'un jour',
			dd : '%d jours',
			M : 'un mois',
			MM : '%d mois',
			y : 'un an',
			yy : '%d ans'
		},
		ordinalParse: /\d{1,2}(er|)/,
		ordinal : function (number) {
			return number + (number === 1 ? 'er' : '');
		},
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 4  // The week that contains Jan 4th is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : frisian (fy)
	//! author : Robin van der Vliet : https://github.com/robin0van0der0v

	var fy__monthsShortWithDots = 'jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.'.split('_'),
		fy__monthsShortWithoutDots = 'jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_');

	var fy = moment__default.defineLocale('fy', {
		months : 'jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber'.split('_'),
		monthsShort : function (m, format) {
			if (/-MMM-/.test(format)) {
				return fy__monthsShortWithoutDots[m.month()];
			} else {
				return fy__monthsShortWithDots[m.month()];
			}
		},
		monthsParseExact : true,
		weekdays : 'snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon'.split('_'),
		weekdaysShort : 'si._mo._ti._wo._to._fr._so.'.split('_'),
		weekdaysMin : 'Si_Mo_Ti_Wo_To_Fr_So'.split('_'),
		weekdaysParseExact : true,
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'DD-MM-YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY HH:mm',
			LLLL : 'dddd D MMMM YYYY HH:mm'
		},
		calendar : {
			sameDay: '[hjoed om] LT',
			nextDay: '[moarn om] LT',
			nextWeek: 'dddd [om] LT',
			lastDay: '[juster om] LT',
			lastWeek: '[ôfrûne] dddd [om] LT',
			sameElse: 'L'
		},
		relativeTime : {
			future : 'oer %s',
			past : '%s lyn',
			s : 'in pear sekonden',
			m : 'ien minút',
			mm : '%d minuten',
			h : 'ien oere',
			hh : '%d oeren',
			d : 'ien dei',
			dd : '%d dagen',
			M : 'ien moanne',
			MM : '%d moannen',
			y : 'ien jier',
			yy : '%d jierren'
		},
		ordinalParse: /\d{1,2}(ste|de)/,
		ordinal : function (number) {
			return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
		},
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 4  // The week that contains Jan 4th is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : great britain scottish gealic (gd)
	//! author : Jon Ashdown : https://github.com/jonashdown

	var gd__months = [
		'Am Faoilleach', 'An Gearran', 'Am Màrt', 'An Giblean', 'An Cèitean', 'An t-Ògmhios', 'An t-Iuchar', 'An Lùnastal', 'An t-Sultain', 'An Dàmhair', 'An t-Samhain', 'An Dùbhlachd'
	];

	var gd__monthsShort = ['Faoi', 'Gear', 'Màrt', 'Gibl', 'Cèit', 'Ògmh', 'Iuch', 'Lùn', 'Sult', 'Dàmh', 'Samh', 'Dùbh'];

	var gd__weekdays = ['Didòmhnaich', 'Diluain', 'Dimàirt', 'Diciadain', 'Diardaoin', 'Dihaoine', 'Disathairne'];

	var weekdaysShort = ['Did', 'Dil', 'Dim', 'Dic', 'Dia', 'Dih', 'Dis'];

	var weekdaysMin = ['Dò', 'Lu', 'Mà', 'Ci', 'Ar', 'Ha', 'Sa'];

	var gd = moment__default.defineLocale('gd', {
		months : gd__months,
		monthsShort : gd__monthsShort,
		monthsParseExact : true,
		weekdays : gd__weekdays,
		weekdaysShort : weekdaysShort,
		weekdaysMin : weekdaysMin,
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'DD/MM/YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY HH:mm',
			LLLL : 'dddd, D MMMM YYYY HH:mm'
		},
		calendar : {
			sameDay : '[An-diugh aig] LT',
			nextDay : '[A-màireach aig] LT',
			nextWeek : 'dddd [aig] LT',
			lastDay : '[An-dè aig] LT',
			lastWeek : 'dddd [seo chaidh] [aig] LT',
			sameElse : 'L'
		},
		relativeTime : {
			future : 'ann an %s',
			past : 'bho chionn %s',
			s : 'beagan diogan',
			m : 'mionaid',
			mm : '%d mionaidean',
			h : 'uair',
			hh : '%d uairean',
			d : 'latha',
			dd : '%d latha',
			M : 'mìos',
			MM : '%d mìosan',
			y : 'bliadhna',
			yy : '%d bliadhna'
		},
		ordinalParse : /\d{1,2}(d|na|mh)/,
		ordinal : function (number) {
			var output = number === 1 ? 'd' : number % 10 === 2 ? 'na' : 'mh';
			return number + output;
		},
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 4  // The week that contains Jan 4th is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : galician (gl)
	//! author : Juan G. Hurtado : https://github.com/juanghurtado

	var gl = moment__default.defineLocale('gl', {
		months : 'Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro'.split('_'),
		monthsShort : 'Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.'.split('_'),
		monthsParseExact: true,
		weekdays : 'Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado'.split('_'),
		weekdaysShort : 'Dom._Lun._Mar._Mér._Xov._Ven._Sáb.'.split('_'),
		weekdaysMin : 'Do_Lu_Ma_Mé_Xo_Ve_Sá'.split('_'),
		weekdaysParseExact : true,
		longDateFormat : {
			LT : 'H:mm',
			LTS : 'H:mm:ss',
			L : 'DD/MM/YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY H:mm',
			LLLL : 'dddd D MMMM YYYY H:mm'
		},
		calendar : {
			sameDay : function () {
				return '[hoxe ' + ((this.hours() !== 1) ? 'ás' : 'á') + '] LT';
			},
			nextDay : function () {
				return '[mañá ' + ((this.hours() !== 1) ? 'ás' : 'á') + '] LT';
			},
			nextWeek : function () {
				return 'dddd [' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';
			},
			lastDay : function () {
				return '[onte ' + ((this.hours() !== 1) ? 'á' : 'a') + '] LT';
			},
			lastWeek : function () {
				return '[o] dddd [pasado ' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';
			},
			sameElse : 'L'
		},
		relativeTime : {
			future : function (str) {
				if (str === 'uns segundos') {
					return 'nuns segundos';
				}
				return 'en ' + str;
			},
			past : 'hai %s',
			s : 'uns segundos',
			m : 'un minuto',
			mm : '%d minutos',
			h : 'unha hora',
			hh : '%d horas',
			d : 'un día',
			dd : '%d días',
			M : 'un mes',
			MM : '%d meses',
			y : 'un ano',
			yy : '%d anos'
		},
		ordinalParse : /\d{1,2}º/,
		ordinal : '%dº',
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 7  // The week that contains Jan 1st is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : Hebrew (he)
	//! author : Tomer Cohen : https://github.com/tomer
	//! author : Moshe Simantov : https://github.com/DevelopmentIL
	//! author : Tal Ater : https://github.com/TalAter

	var he = moment__default.defineLocale('he', {
		months : 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
		monthsShort : 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),
		weekdays : 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
		weekdaysShort : 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
		weekdaysMin : 'א_ב_ג_ד_ה_ו_ש'.split('_'),
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'DD/MM/YYYY',
			LL : 'D [ב]MMMM YYYY',
			LLL : 'D [ב]MMMM YYYY HH:mm',
			LLLL : 'dddd, D [ב]MMMM YYYY HH:mm',
			l : 'D/M/YYYY',
			ll : 'D MMM YYYY',
			lll : 'D MMM YYYY HH:mm',
			llll : 'ddd, D MMM YYYY HH:mm'
		},
		calendar : {
			sameDay : '[היום ב־]LT',
			nextDay : '[מחר ב־]LT',
			nextWeek : 'dddd [בשעה] LT',
			lastDay : '[אתמול ב־]LT',
			lastWeek : '[ביום] dddd [האחרון בשעה] LT',
			sameElse : 'L'
		},
		relativeTime : {
			future : 'בעוד %s',
			past : 'לפני %s',
			s : 'מספר שניות',
			m : 'דקה',
			mm : '%d דקות',
			h : 'שעה',
			hh : function (number) {
				if (number === 2) {
					return 'שעתיים';
				}
				return number + ' שעות';
			},
			d : 'יום',
			dd : function (number) {
				if (number === 2) {
					return 'יומיים';
				}
				return number + ' ימים';
			},
			M : 'חודש',
			MM : function (number) {
				if (number === 2) {
					return 'חודשיים';
				}
				return number + ' חודשים';
			},
			y : 'שנה',
			yy : function (number) {
				if (number === 2) {
					return 'שנתיים';
				} else if (number % 10 === 0 && number !== 10) {
					return number + ' שנה';
				}
				return number + ' שנים';
			}
		},
		meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
		isPM : function (input) {
			return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(input);
		},
		meridiem : function (hour, minute, isLower) {
			if (hour < 5) {
				return 'לפנות בוקר';
			} else if (hour < 10) {
				return 'בבוקר';
			} else if (hour < 12) {
				return isLower ? 'לפנה"צ' : 'לפני הצהריים';
			} else if (hour < 18) {
				return isLower ? 'אחה"צ' : 'אחרי הצהריים';
			} else {
				return 'בערב';
			}
		}
	});

	//! moment.js locale configuration
	//! locale : hindi (hi)
	//! author : Mayank Singhal : https://github.com/mayanksinghal

	var hi__symbolMap = {
			'1': '१',
			'2': '२',
			'3': '३',
			'4': '४',
			'5': '५',
			'6': '६',
			'7': '७',
			'8': '८',
			'9': '९',
			'0': '०'
		},
		hi__numberMap = {
			'१': '1',
			'२': '2',
			'३': '3',
			'४': '4',
			'५': '5',
			'६': '6',
			'७': '7',
			'८': '8',
			'९': '9',
			'०': '0'
		};

	var hi = moment__default.defineLocale('hi', {
		months : 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
		monthsShort : 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
		monthsParseExact: true,
		weekdays : 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
		weekdaysShort : 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
		weekdaysMin : 'र_सो_मं_बु_गु_शु_श'.split('_'),
		longDateFormat : {
			LT : 'A h:mm बजे',
			LTS : 'A h:mm:ss बजे',
			L : 'DD/MM/YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY, A h:mm बजे',
			LLLL : 'dddd, D MMMM YYYY, A h:mm बजे'
		},
		calendar : {
			sameDay : '[आज] LT',
			nextDay : '[कल] LT',
			nextWeek : 'dddd, LT',
			lastDay : '[कल] LT',
			lastWeek : '[पिछले] dddd, LT',
			sameElse : 'L'
		},
		relativeTime : {
			future : '%s में',
			past : '%s पहले',
			s : 'कुछ ही क्षण',
			m : 'एक मिनट',
			mm : '%d मिनट',
			h : 'एक घंटा',
			hh : '%d घंटे',
			d : 'एक दिन',
			dd : '%d दिन',
			M : 'एक महीने',
			MM : '%d महीने',
			y : 'एक वर्ष',
			yy : '%d वर्ष'
		},
		preparse: function (string) {
			return string.replace(/[१२३४५६७८९०]/g, function (match) {
				return hi__numberMap[match];
			});
		},
		postformat: function (string) {
			return string.replace(/\d/g, function (match) {
				return hi__symbolMap[match];
			});
		},
		// Hindi notation for meridiems are quite fuzzy in practice. While there exists
		// a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
		meridiemParse: /रात|सुबह|दोपहर|शाम/,
		meridiemHour : function (hour, meridiem) {
			if (hour === 12) {
				hour = 0;
			}
			if (meridiem === 'रात') {
				return hour < 4 ? hour : hour + 12;
			} else if (meridiem === 'सुबह') {
				return hour;
			} else if (meridiem === 'दोपहर') {
				return hour >= 10 ? hour : hour + 12;
			} else if (meridiem === 'शाम') {
				return hour + 12;
			}
		},
		meridiem : function (hour, minute, isLower) {
			if (hour < 4) {
				return 'रात';
			} else if (hour < 10) {
				return 'सुबह';
			} else if (hour < 17) {
				return 'दोपहर';
			} else if (hour < 20) {
				return 'शाम';
			} else {
				return 'रात';
			}
		},
		week : {
			dow : 0, // Sunday is the first day of the week.
			doy : 6  // The week that contains Jan 1st is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : hrvatski (hr)
	//! author : Bojan Marković : https://github.com/bmarkovic

	function hr__translate(number, withoutSuffix, key) {
		var result = number + ' ';
		switch (key) {
			case 'm':
				return withoutSuffix ? 'jedna minuta' : 'jedne minute';
			case 'mm':
				if (number === 1) {
					result += 'minuta';
				} else if (number === 2 || number === 3 || number === 4) {
					result += 'minute';
				} else {
					result += 'minuta';
				}
				return result;
			case 'h':
				return withoutSuffix ? 'jedan sat' : 'jednog sata';
			case 'hh':
				if (number === 1) {
					result += 'sat';
				} else if (number === 2 || number === 3 || number === 4) {
					result += 'sata';
				} else {
					result += 'sati';
				}
				return result;
			case 'dd':
				if (number === 1) {
					result += 'dan';
				} else {
					result += 'dana';
				}
				return result;
			case 'MM':
				if (number === 1) {
					result += 'mjesec';
				} else if (number === 2 || number === 3 || number === 4) {
					result += 'mjeseca';
				} else {
					result += 'mjeseci';
				}
				return result;
			case 'yy':
				if (number === 1) {
					result += 'godina';
				} else if (number === 2 || number === 3 || number === 4) {
					result += 'godine';
				} else {
					result += 'godina';
				}
				return result;
		}
	}

	var hr = moment__default.defineLocale('hr', {
		months : {
			format: 'siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca'.split('_'),
			standalone: 'siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split('_')
		},
		monthsShort : 'sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split('_'),
		monthsParseExact: true,
		weekdays : 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
		weekdaysShort : 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
		weekdaysMin : 'ne_po_ut_sr_če_pe_su'.split('_'),
		weekdaysParseExact : true,
		longDateFormat : {
			LT : 'H:mm',
			LTS : 'H:mm:ss',
			L : 'DD. MM. YYYY',
			LL : 'D. MMMM YYYY',
			LLL : 'D. MMMM YYYY H:mm',
			LLLL : 'dddd, D. MMMM YYYY H:mm'
		},
		calendar : {
			sameDay  : '[danas u] LT',
			nextDay  : '[sutra u] LT',
			nextWeek : function () {
				switch (this.day()) {
					case 0:
						return '[u] [nedjelju] [u] LT';
					case 3:
						return '[u] [srijedu] [u] LT';
					case 6:
						return '[u] [subotu] [u] LT';
					case 1:
					case 2:
					case 4:
					case 5:
						return '[u] dddd [u] LT';
				}
			},
			lastDay  : '[jučer u] LT',
			lastWeek : function () {
				switch (this.day()) {
					case 0:
					case 3:
						return '[prošlu] dddd [u] LT';
					case 6:
						return '[prošle] [subote] [u] LT';
					case 1:
					case 2:
					case 4:
					case 5:
						return '[prošli] dddd [u] LT';
				}
			},
			sameElse : 'L'
		},
		relativeTime : {
			future : 'za %s',
			past   : 'prije %s',
			s      : 'par sekundi',
			m      : hr__translate,
			mm     : hr__translate,
			h      : hr__translate,
			hh     : hr__translate,
			d      : 'dan',
			dd     : hr__translate,
			M      : 'mjesec',
			MM     : hr__translate,
			y      : 'godinu',
			yy     : hr__translate
		},
		ordinalParse: /\d{1,2}\./,
		ordinal : '%d.',
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 7  // The week that contains Jan 1st is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : hungarian (hu)
	//! author : Adam Brunner : https://github.com/adambrunner

	var weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');
	function hu__translate(number, withoutSuffix, key, isFuture) {
		var num = number,
			suffix;
		switch (key) {
			case 's':
				return (isFuture || withoutSuffix) ? 'néhány másodperc' : 'néhány másodperce';
			case 'm':
				return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
			case 'mm':
				return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
			case 'h':
				return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');
			case 'hh':
				return num + (isFuture || withoutSuffix ? ' óra' : ' órája');
			case 'd':
				return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
			case 'dd':
				return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
			case 'M':
				return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
			case 'MM':
				return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
			case 'y':
				return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');
			case 'yy':
				return num + (isFuture || withoutSuffix ? ' év' : ' éve');
		}
		return '';
	}
	function week(isFuture) {
		return (isFuture ? '' : '[múlt] ') + '[' + weekEndings[this.day()] + '] LT[-kor]';
	}

	var hu = moment__default.defineLocale('hu', {
		months : 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
		monthsShort : 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
		weekdays : 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
		weekdaysShort : 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
		weekdaysMin : 'v_h_k_sze_cs_p_szo'.split('_'),
		longDateFormat : {
			LT : 'H:mm',
			LTS : 'H:mm:ss',
			L : 'YYYY.MM.DD.',
			LL : 'YYYY. MMMM D.',
			LLL : 'YYYY. MMMM D. H:mm',
			LLLL : 'YYYY. MMMM D., dddd H:mm'
		},
		meridiemParse: /de|du/i,
		isPM: function (input) {
			return input.charAt(1).toLowerCase() === 'u';
		},
		meridiem : function (hours, minutes, isLower) {
			if (hours < 12) {
				return isLower === true ? 'de' : 'DE';
			} else {
				return isLower === true ? 'du' : 'DU';
			}
		},
		calendar : {
			sameDay : '[ma] LT[-kor]',
			nextDay : '[holnap] LT[-kor]',
			nextWeek : function () {
				return week.call(this, true);
			},
			lastDay : '[tegnap] LT[-kor]',
			lastWeek : function () {
				return week.call(this, false);
			},
			sameElse : 'L'
		},
		relativeTime : {
			future : '%s múlva',
			past : '%s',
			s : hu__translate,
			m : hu__translate,
			mm : hu__translate,
			h : hu__translate,
			hh : hu__translate,
			d : hu__translate,
			dd : hu__translate,
			M : hu__translate,
			MM : hu__translate,
			y : hu__translate,
			yy : hu__translate
		},
		ordinalParse: /\d{1,2}\./,
		ordinal : '%d.',
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 7  // The week that contains Jan 1st is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : Armenian (hy-am)
	//! author : Armendarabyan : https://github.com/armendarabyan

	var hy_am = moment__default.defineLocale('hy-am', {
		months : {
			format: 'հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի'.split('_'),
			standalone: 'հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր'.split('_')
		},
		monthsShort : 'հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ'.split('_'),
		weekdays : 'կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ'.split('_'),
		weekdaysShort : 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
		weekdaysMin : 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'DD.MM.YYYY',
			LL : 'D MMMM YYYY թ.',
			LLL : 'D MMMM YYYY թ., HH:mm',
			LLLL : 'dddd, D MMMM YYYY թ., HH:mm'
		},
		calendar : {
			sameDay: '[այսօր] LT',
			nextDay: '[վաղը] LT',
			lastDay: '[երեկ] LT',
			nextWeek: function () {
				return 'dddd [օրը ժամը] LT';
			},
			lastWeek: function () {
				return '[անցած] dddd [օրը ժամը] LT';
			},
			sameElse: 'L'
		},
		relativeTime : {
			future : '%s հետո',
			past : '%s առաջ',
			s : 'մի քանի վայրկյան',
			m : 'րոպե',
			mm : '%d րոպե',
			h : 'ժամ',
			hh : '%d ժամ',
			d : 'օր',
			dd : '%d օր',
			M : 'ամիս',
			MM : '%d ամիս',
			y : 'տարի',
			yy : '%d տարի'
		},
		meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
		isPM: function (input) {
			return /^(ցերեկվա|երեկոյան)$/.test(input);
		},
		meridiem : function (hour) {
			if (hour < 4) {
				return 'գիշերվա';
			} else if (hour < 12) {
				return 'առավոտվա';
			} else if (hour < 17) {
				return 'ցերեկվա';
			} else {
				return 'երեկոյան';
			}
		},
		ordinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
		ordinal: function (number, period) {
			switch (period) {
				case 'DDD':
				case 'w':
				case 'W':
				case 'DDDo':
					if (number === 1) {
						return number + '-ին';
					}
					return number + '-րդ';
				default:
					return number;
			}
		},
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 7  // The week that contains Jan 1st is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : Bahasa Indonesia (id)
	//! author : Mohammad Satrio Utomo : https://github.com/tyok
	//! reference: http://id.wikisource.org/wiki/Pedoman_Umum_Ejaan_Bahasa_Indonesia_yang_Disempurnakan

	var id = moment__default.defineLocale('id', {
		months : 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
		monthsShort : 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des'.split('_'),
		weekdays : 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
		weekdaysShort : 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
		weekdaysMin : 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
		longDateFormat : {
			LT : 'HH.mm',
			LTS : 'HH.mm.ss',
			L : 'DD/MM/YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY [pukul] HH.mm',
			LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
		},
		meridiemParse: /pagi|siang|sore|malam/,
		meridiemHour : function (hour, meridiem) {
			if (hour === 12) {
				hour = 0;
			}
			if (meridiem === 'pagi') {
				return hour;
			} else if (meridiem === 'siang') {
				return hour >= 11 ? hour : hour + 12;
			} else if (meridiem === 'sore' || meridiem === 'malam') {
				return hour + 12;
			}
		},
		meridiem : function (hours, minutes, isLower) {
			if (hours < 11) {
				return 'pagi';
			} else if (hours < 15) {
				return 'siang';
			} else if (hours < 19) {
				return 'sore';
			} else {
				return 'malam';
			}
		},
		calendar : {
			sameDay : '[Hari ini pukul] LT',
			nextDay : '[Besok pukul] LT',
			nextWeek : 'dddd [pukul] LT',
			lastDay : '[Kemarin pukul] LT',
			lastWeek : 'dddd [lalu pukul] LT',
			sameElse : 'L'
		},
		relativeTime : {
			future : 'dalam %s',
			past : '%s yang lalu',
			s : 'beberapa detik',
			m : 'semenit',
			mm : '%d menit',
			h : 'sejam',
			hh : '%d jam',
			d : 'sehari',
			dd : '%d hari',
			M : 'sebulan',
			MM : '%d bulan',
			y : 'setahun',
			yy : '%d tahun'
		},
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 7  // The week that contains Jan 1st is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : icelandic (is)
	//! author : Hinrik Örn Sigurðsson : https://github.com/hinrik

	function is__plural(n) {
		if (n % 100 === 11) {
			return true;
		} else if (n % 10 === 1) {
			return false;
		}
		return true;
	}
	function is__translate(number, withoutSuffix, key, isFuture) {
		var result = number + ' ';
		switch (key) {
			case 's':
				return withoutSuffix || isFuture ? 'nokkrar sekúndur' : 'nokkrum sekúndum';
			case 'm':
				return withoutSuffix ? 'mínúta' : 'mínútu';
			case 'mm':
				if (is__plural(number)) {
					return result + (withoutSuffix || isFuture ? 'mínútur' : 'mínútum');
				} else if (withoutSuffix) {
					return result + 'mínúta';
				}
				return result + 'mínútu';
			case 'hh':
				if (is__plural(number)) {
					return result + (withoutSuffix || isFuture ? 'klukkustundir' : 'klukkustundum');
				}
				return result + 'klukkustund';
			case 'd':
				if (withoutSuffix) {
					return 'dagur';
				}
				return isFuture ? 'dag' : 'degi';
			case 'dd':
				if (is__plural(number)) {
					if (withoutSuffix) {
						return result + 'dagar';
					}
					return result + (isFuture ? 'daga' : 'dögum');
				} else if (withoutSuffix) {
					return result + 'dagur';
				}
				return result + (isFuture ? 'dag' : 'degi');
			case 'M':
				if (withoutSuffix) {
					return 'mánuður';
				}
				return isFuture ? 'mánuð' : 'mánuði';
			case 'MM':
				if (is__plural(number)) {
					if (withoutSuffix) {
						return result + 'mánuðir';
					}
					return result + (isFuture ? 'mánuði' : 'mánuðum');
				} else if (withoutSuffix) {
					return result + 'mánuður';
				}
				return result + (isFuture ? 'mánuð' : 'mánuði');
			case 'y':
				return withoutSuffix || isFuture ? 'ár' : 'ári';
			case 'yy':
				if (is__plural(number)) {
					return result + (withoutSuffix || isFuture ? 'ár' : 'árum');
				}
				return result + (withoutSuffix || isFuture ? 'ár' : 'ári');
		}
	}

	var is = moment__default.defineLocale('is', {
		months : 'janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember'.split('_'),
		monthsShort : 'jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des'.split('_'),
		weekdays : 'sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur'.split('_'),
		weekdaysShort : 'sun_mán_þri_mið_fim_fös_lau'.split('_'),
		weekdaysMin : 'Su_Má_Þr_Mi_Fi_Fö_La'.split('_'),
		longDateFormat : {
			LT : 'H:mm',
			LTS : 'H:mm:ss',
			L : 'DD.MM.YYYY',
			LL : 'D. MMMM YYYY',
			LLL : 'D. MMMM YYYY [kl.] H:mm',
			LLLL : 'dddd, D. MMMM YYYY [kl.] H:mm'
		},
		calendar : {
			sameDay : '[í dag kl.] LT',
			nextDay : '[á morgun kl.] LT',
			nextWeek : 'dddd [kl.] LT',
			lastDay : '[í gær kl.] LT',
			lastWeek : '[síðasta] dddd [kl.] LT',
			sameElse : 'L'
		},
		relativeTime : {
			future : 'eftir %s',
			past : 'fyrir %s síðan',
			s : is__translate,
			m : is__translate,
			mm : is__translate,
			h : 'klukkustund',
			hh : is__translate,
			d : is__translate,
			dd : is__translate,
			M : is__translate,
			MM : is__translate,
			y : is__translate,
			yy : is__translate
		},
		ordinalParse: /\d{1,2}\./,
		ordinal : '%d.',
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 4  // The week that contains Jan 4th is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : italian (it)
	//! author : Lorenzo : https://github.com/aliem
	//! author: Mattia Larentis: https://github.com/nostalgiaz

	var it = moment__default.defineLocale('it', {
		months : 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
		monthsShort : 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
		weekdays : 'Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato'.split('_'),
		weekdaysShort : 'Dom_Lun_Mar_Mer_Gio_Ven_Sab'.split('_'),
		weekdaysMin : 'Do_Lu_Ma_Me_Gi_Ve_Sa'.split('_'),
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'DD/MM/YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY HH:mm',
			LLLL : 'dddd, D MMMM YYYY HH:mm'
		},
		calendar : {
			sameDay: '[Oggi alle] LT',
			nextDay: '[Domani alle] LT',
			nextWeek: 'dddd [alle] LT',
			lastDay: '[Ieri alle] LT',
			lastWeek: function () {
				switch (this.day()) {
					case 0:
						return '[la scorsa] dddd [alle] LT';
					default:
						return '[lo scorso] dddd [alle] LT';
				}
			},
			sameElse: 'L'
		},
		relativeTime : {
			future : function (s) {
				return ((/^[0-9].+$/).test(s) ? 'tra' : 'in') + ' ' + s;
			},
			past : '%s fa',
			s : 'alcuni secondi',
			m : 'un minuto',
			mm : '%d minuti',
			h : 'un\'ora',
			hh : '%d ore',
			d : 'un giorno',
			dd : '%d giorni',
			M : 'un mese',
			MM : '%d mesi',
			y : 'un anno',
			yy : '%d anni'
		},
		ordinalParse : /\d{1,2}º/,
		ordinal: '%dº',
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 4  // The week that contains Jan 4th is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : japanese (ja)
	//! author : LI Long : https://github.com/baryon

	var ja = moment__default.defineLocale('ja', {
		months : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
		monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
		weekdays : '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
		weekdaysShort : '日_月_火_水_木_金_土'.split('_'),
		weekdaysMin : '日_月_火_水_木_金_土'.split('_'),
		longDateFormat : {
			LT : 'Ah時m分',
			LTS : 'Ah時m分s秒',
			L : 'YYYY/MM/DD',
			LL : 'YYYY年M月D日',
			LLL : 'YYYY年M月D日Ah時m分',
			LLLL : 'YYYY年M月D日Ah時m分 dddd'
		},
		meridiemParse: /午前|午後/i,
		isPM : function (input) {
			return input === '午後';
		},
		meridiem : function (hour, minute, isLower) {
			if (hour < 12) {
				return '午前';
			} else {
				return '午後';
			}
		},
		calendar : {
			sameDay : '[今日] LT',
			nextDay : '[明日] LT',
			nextWeek : '[来週]dddd LT',
			lastDay : '[昨日] LT',
			lastWeek : '[前週]dddd LT',
			sameElse : 'L'
		},
		ordinalParse : /\d{1,2}日/,
		ordinal : function (number, period) {
			switch (period) {
				case 'd':
				case 'D':
				case 'DDD':
					return number + '日';
				default:
					return number;
			}
		},
		relativeTime : {
			future : '%s後',
			past : '%s前',
			s : '数秒',
			m : '1分',
			mm : '%d分',
			h : '1時間',
			hh : '%d時間',
			d : '1日',
			dd : '%d日',
			M : '1ヶ月',
			MM : '%dヶ月',
			y : '1年',
			yy : '%d年'
		}
	});

	//! moment.js locale configuration
	//! locale : Boso Jowo (jv)
	//! author : Rony Lantip : https://github.com/lantip
	//! reference: http://jv.wikipedia.org/wiki/Basa_Jawa

	var jv = moment__default.defineLocale('jv', {
		months : 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember'.split('_'),
		monthsShort : 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des'.split('_'),
		weekdays : 'Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu'.split('_'),
		weekdaysShort : 'Min_Sen_Sel_Reb_Kem_Jem_Sep'.split('_'),
		weekdaysMin : 'Mg_Sn_Sl_Rb_Km_Jm_Sp'.split('_'),
		longDateFormat : {
			LT : 'HH.mm',
			LTS : 'HH.mm.ss',
			L : 'DD/MM/YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY [pukul] HH.mm',
			LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
		},
		meridiemParse: /enjing|siyang|sonten|ndalu/,
		meridiemHour : function (hour, meridiem) {
			if (hour === 12) {
				hour = 0;
			}
			if (meridiem === 'enjing') {
				return hour;
			} else if (meridiem === 'siyang') {
				return hour >= 11 ? hour : hour + 12;
			} else if (meridiem === 'sonten' || meridiem === 'ndalu') {
				return hour + 12;
			}
		},
		meridiem : function (hours, minutes, isLower) {
			if (hours < 11) {
				return 'enjing';
			} else if (hours < 15) {
				return 'siyang';
			} else if (hours < 19) {
				return 'sonten';
			} else {
				return 'ndalu';
			}
		},
		calendar : {
			sameDay : '[Dinten puniko pukul] LT',
			nextDay : '[Mbenjang pukul] LT',
			nextWeek : 'dddd [pukul] LT',
			lastDay : '[Kala wingi pukul] LT',
			lastWeek : 'dddd [kepengker pukul] LT',
			sameElse : 'L'
		},
		relativeTime : {
			future : 'wonten ing %s',
			past : '%s ingkang kepengker',
			s : 'sawetawis detik',
			m : 'setunggal menit',
			mm : '%d menit',
			h : 'setunggal jam',
			hh : '%d jam',
			d : 'sedinten',
			dd : '%d dinten',
			M : 'sewulan',
			MM : '%d wulan',
			y : 'setaun',
			yy : '%d taun'
		},
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 7  // The week that contains Jan 1st is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : Georgian (ka)
	//! author : Irakli Janiashvili : https://github.com/irakli-janiashvili

	var ka = moment__default.defineLocale('ka', {
		months : {
			standalone: 'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split('_'),
			format: 'იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს'.split('_')
		},
		monthsShort : 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_'),
		weekdays : {
			standalone: 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split('_'),
			format: 'კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს'.split('_'),
			isFormat: /(წინა|შემდეგ)/
		},
		weekdaysShort : 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),
		weekdaysMin : 'კვ_ორ_სა_ოთ_ხუ_პა_შა'.split('_'),
		longDateFormat : {
			LT : 'h:mm A',
			LTS : 'h:mm:ss A',
			L : 'DD/MM/YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY h:mm A',
			LLLL : 'dddd, D MMMM YYYY h:mm A'
		},
		calendar : {
			sameDay : '[დღეს] LT[-ზე]',
			nextDay : '[ხვალ] LT[-ზე]',
			lastDay : '[გუშინ] LT[-ზე]',
			nextWeek : '[შემდეგ] dddd LT[-ზე]',
			lastWeek : '[წინა] dddd LT-ზე',
			sameElse : 'L'
		},
		relativeTime : {
			future : function (s) {
				return (/(წამი|წუთი|საათი|წელი)/).test(s) ?
					s.replace(/ი$/, 'ში') :
				s + 'ში';
			},
			past : function (s) {
				if ((/(წამი|წუთი|საათი|დღე|თვე)/).test(s)) {
					return s.replace(/(ი|ე)$/, 'ის წინ');
				}
				if ((/წელი/).test(s)) {
					return s.replace(/წელი$/, 'წლის წინ');
				}
			},
			s : 'რამდენიმე წამი',
			m : 'წუთი',
			mm : '%d წუთი',
			h : 'საათი',
			hh : '%d საათი',
			d : 'დღე',
			dd : '%d დღე',
			M : 'თვე',
			MM : '%d თვე',
			y : 'წელი',
			yy : '%d წელი'
		},
		ordinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
		ordinal : function (number) {
			if (number === 0) {
				return number;
			}
			if (number === 1) {
				return number + '-ლი';
			}
			if ((number < 20) || (number <= 100 && (number % 20 === 0)) || (number % 100 === 0)) {
				return 'მე-' + number;
			}
			return number + '-ე';
		},
		week : {
			dow : 1,
			doy : 7
		}
	});

	//! moment.js locale configuration
	//! locale : kazakh (kk)
	//! authors : Nurlan Rakhimzhanov : https://github.com/nurlan

	var kk__suffixes = {
		0: '-ші',
		1: '-ші',
		2: '-ші',
		3: '-ші',
		4: '-ші',
		5: '-ші',
		6: '-шы',
		7: '-ші',
		8: '-ші',
		9: '-шы',
		10: '-шы',
		20: '-шы',
		30: '-шы',
		40: '-шы',
		50: '-ші',
		60: '-шы',
		70: '-ші',
		80: '-ші',
		90: '-шы',
		100: '-ші'
	};

	var kk = moment__default.defineLocale('kk', {
		months : 'қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан'.split('_'),
		monthsShort : 'қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел'.split('_'),
		weekdays : 'жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі'.split('_'),
		weekdaysShort : 'жек_дүй_сей_сәр_бей_жұм_сен'.split('_'),
		weekdaysMin : 'жк_дй_сй_ср_бй_жм_сн'.split('_'),
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'DD.MM.YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY HH:mm',
			LLLL : 'dddd, D MMMM YYYY HH:mm'
		},
		calendar : {
			sameDay : '[Бүгін сағат] LT',
			nextDay : '[Ертең сағат] LT',
			nextWeek : 'dddd [сағат] LT',
			lastDay : '[Кеше сағат] LT',
			lastWeek : '[Өткен аптаның] dddd [сағат] LT',
			sameElse : 'L'
		},
		relativeTime : {
			future : '%s ішінде',
			past : '%s бұрын',
			s : 'бірнеше секунд',
			m : 'бір минут',
			mm : '%d минут',
			h : 'бір сағат',
			hh : '%d сағат',
			d : 'бір күн',
			dd : '%d күн',
			M : 'бір ай',
			MM : '%d ай',
			y : 'бір жыл',
			yy : '%d жыл'
		},
		ordinalParse: /\d{1,2}-(ші|шы)/,
		ordinal : function (number) {
			var a = number % 10,
				b = number >= 100 ? 100 : null;
			return number + (kk__suffixes[number] || kk__suffixes[a] || kk__suffixes[b]);
		},
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 7  // The week that contains Jan 1st is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : khmer (km)
	//! author : Kruy Vanna : https://github.com/kruyvanna

	var km = moment__default.defineLocale('km', {
		months: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
		monthsShort: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
		weekdays: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
		weekdaysShort: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
		weekdaysMin: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
		longDateFormat: {
			LT: 'HH:mm',
			LTS : 'HH:mm:ss',
			L: 'DD/MM/YYYY',
			LL: 'D MMMM YYYY',
			LLL: 'D MMMM YYYY HH:mm',
			LLLL: 'dddd, D MMMM YYYY HH:mm'
		},
		calendar: {
			sameDay: '[ថ្ងៃនេះ ម៉ោង] LT',
			nextDay: '[ស្អែក ម៉ោង] LT',
			nextWeek: 'dddd [ម៉ោង] LT',
			lastDay: '[ម្សិលមិញ ម៉ោង] LT',
			lastWeek: 'dddd [សប្តាហ៍មុន] [ម៉ោង] LT',
			sameElse: 'L'
		},
		relativeTime: {
			future: '%sទៀត',
			past: '%sមុន',
			s: 'ប៉ុន្មានវិនាទី',
			m: 'មួយនាទី',
			mm: '%d នាទី',
			h: 'មួយម៉ោង',
			hh: '%d ម៉ោង',
			d: 'មួយថ្ងៃ',
			dd: '%d ថ្ងៃ',
			M: 'មួយខែ',
			MM: '%d ខែ',
			y: 'មួយឆ្នាំ',
			yy: '%d ឆ្នាំ'
		},
		week: {
			dow: 1, // Monday is the first day of the week.
			doy: 4 // The week that contains Jan 4th is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : korean (ko)
	//!
	//! authors
	//!
	//! - Kyungwook, Park : https://github.com/kyungw00k
	//! - Jeeeyul Lee <jeeeyul@gmail.com>

	var ko = moment__default.defineLocale('ko', {
		months : '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
		monthsShort : '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
		weekdays : '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
		weekdaysShort : '일_월_화_수_목_금_토'.split('_'),
		weekdaysMin : '일_월_화_수_목_금_토'.split('_'),
		longDateFormat : {
			LT : 'A h시 m분',
			LTS : 'A h시 m분 s초',
			L : 'YYYY.MM.DD',
			LL : 'YYYY년 MMMM D일',
			LLL : 'YYYY년 MMMM D일 A h시 m분',
			LLLL : 'YYYY년 MMMM D일 dddd A h시 m분'
		},
		calendar : {
			sameDay : '오늘 LT',
			nextDay : '내일 LT',
			nextWeek : 'dddd LT',
			lastDay : '어제 LT',
			lastWeek : '지난주 dddd LT',
			sameElse : 'L'
		},
		relativeTime : {
			future : '%s 후',
			past : '%s 전',
			s : '몇 초',
			ss : '%d초',
			m : '일분',
			mm : '%d분',
			h : '한 시간',
			hh : '%d시간',
			d : '하루',
			dd : '%d일',
			M : '한 달',
			MM : '%d달',
			y : '일 년',
			yy : '%d년'
		},
		ordinalParse : /\d{1,2}일/,
		ordinal : '%d일',
		meridiemParse : /오전|오후/,
		isPM : function (token) {
			return token === '오후';
		},
		meridiem : function (hour, minute, isUpper) {
			return hour < 12 ? '오전' : '오후';
		}
	});

	//! moment.js locale configuration
	//! locale : kyrgyz (ky)
	//! author : Chyngyz Arystan uulu : https://github.com/chyngyz


	var ky__suffixes = {
		0: '-чү',
		1: '-чи',
		2: '-чи',
		3: '-чү',
		4: '-чү',
		5: '-чи',
		6: '-чы',
		7: '-чи',
		8: '-чи',
		9: '-чу',
		10: '-чу',
		20: '-чы',
		30: '-чу',
		40: '-чы',
		50: '-чү',
		60: '-чы',
		70: '-чи',
		80: '-чи',
		90: '-чу',
		100: '-чү'
	};

	var ky = moment__default.defineLocale('ky', {
		months : 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
		monthsShort : 'янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_'),
		weekdays : 'Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби'.split('_'),
		weekdaysShort : 'Жек_Дүй_Шей_Шар_Бей_Жум_Ише'.split('_'),
		weekdaysMin : 'Жк_Дй_Шй_Шр_Бй_Жм_Иш'.split('_'),
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'DD.MM.YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY HH:mm',
			LLLL : 'dddd, D MMMM YYYY HH:mm'
		},
		calendar : {
			sameDay : '[Бүгүн саат] LT',
			nextDay : '[Эртең саат] LT',
			nextWeek : 'dddd [саат] LT',
			lastDay : '[Кече саат] LT',
			lastWeek : '[Өткен аптанын] dddd [күнү] [саат] LT',
			sameElse : 'L'
		},
		relativeTime : {
			future : '%s ичинде',
			past : '%s мурун',
			s : 'бирнече секунд',
			m : 'бир мүнөт',
			mm : '%d мүнөт',
			h : 'бир саат',
			hh : '%d саат',
			d : 'бир күн',
			dd : '%d күн',
			M : 'бир ай',
			MM : '%d ай',
			y : 'бир жыл',
			yy : '%d жыл'
		},
		ordinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
		ordinal : function (number) {
			var a = number % 10,
				b = number >= 100 ? 100 : null;
			return number + (ky__suffixes[number] || ky__suffixes[a] || ky__suffixes[b]);
		},
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 7  // The week that contains Jan 1st is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : Luxembourgish (lb)
	//! author : mweimerskirch : https://github.com/mweimerskirch, David Raison : https://github.com/kwisatz

	function lb__processRelativeTime(number, withoutSuffix, key, isFuture) {
		var format = {
			'm': ['eng Minutt', 'enger Minutt'],
			'h': ['eng Stonn', 'enger Stonn'],
			'd': ['een Dag', 'engem Dag'],
			'M': ['ee Mount', 'engem Mount'],
			'y': ['ee Joer', 'engem Joer']
		};
		return withoutSuffix ? format[key][0] : format[key][1];
	}
	function processFutureTime(string) {
		var number = string.substr(0, string.indexOf(' '));
		if (eifelerRegelAppliesToNumber(number)) {
			return 'a ' + string;
		}
		return 'an ' + string;
	}
	function processPastTime(string) {
		var number = string.substr(0, string.indexOf(' '));
		if (eifelerRegelAppliesToNumber(number)) {
			return 'viru ' + string;
		}
		return 'virun ' + string;
	}
	/**
	 * Returns true if the word before the given number loses the '-n' ending.
	 * e.g. 'an 10 Deeg' but 'a 5 Deeg'
	 *
	 * @param number {integer}
	 * @returns {boolean}
	 */
	function eifelerRegelAppliesToNumber(number) {
		number = parseInt(number, 10);
		if (isNaN(number)) {
			return false;
		}
		if (number < 0) {
			// Negative Number --> always true
			return true;
		} else if (number < 10) {
			// Only 1 digit
			if (4 <= number && number <= 7) {
				return true;
			}
			return false;
		} else if (number < 100) {
			// 2 digits
			var lastDigit = number % 10, firstDigit = number / 10;
			if (lastDigit === 0) {
				return eifelerRegelAppliesToNumber(firstDigit);
			}
			return eifelerRegelAppliesToNumber(lastDigit);
		} else if (number < 10000) {
			// 3 or 4 digits --> recursively check first digit
			while (number >= 10) {
				number = number / 10;
			}
			return eifelerRegelAppliesToNumber(number);
		} else {
			// Anything larger than 4 digits: recursively check first n-3 digits
			number = number / 1000;
			return eifelerRegelAppliesToNumber(number);
		}
	}

	var lb = moment__default.defineLocale('lb', {
		months: 'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
		monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
		monthsParseExact : true,
		weekdays: 'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),
		weekdaysShort: 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_'),
		weekdaysMin: 'So_Mé_Dë_Më_Do_Fr_Sa'.split('_'),
		weekdaysParseExact : true,
		longDateFormat: {
			LT: 'H:mm [Auer]',
			LTS: 'H:mm:ss [Auer]',
			L: 'DD.MM.YYYY',
			LL: 'D. MMMM YYYY',
			LLL: 'D. MMMM YYYY H:mm [Auer]',
			LLLL: 'dddd, D. MMMM YYYY H:mm [Auer]'
		},
		calendar: {
			sameDay: '[Haut um] LT',
			sameElse: 'L',
			nextDay: '[Muer um] LT',
			nextWeek: 'dddd [um] LT',
			lastDay: '[Gëschter um] LT',
			lastWeek: function () {
				// Different date string for 'Dënschdeg' (Tuesday) and 'Donneschdeg' (Thursday) due to phonological rule
				switch (this.day()) {
					case 2:
					case 4:
						return '[Leschten] dddd [um] LT';
					default:
						return '[Leschte] dddd [um] LT';
				}
			}
		},
		relativeTime : {
			future : processFutureTime,
			past : processPastTime,
			s : 'e puer Sekonnen',
			m : lb__processRelativeTime,
			mm : '%d Minutten',
			h : lb__processRelativeTime,
			hh : '%d Stonnen',
			d : lb__processRelativeTime,
			dd : '%d Deeg',
			M : lb__processRelativeTime,
			MM : '%d Méint',
			y : lb__processRelativeTime,
			yy : '%d Joer'
		},
		ordinalParse: /\d{1,2}\./,
		ordinal: '%d.',
		week: {
			dow: 1, // Monday is the first day of the week.
			doy: 4  // The week that contains Jan 4th is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : lao (lo)
	//! author : Ryan Hart : https://github.com/ryanhart2

	var lo = moment__default.defineLocale('lo', {
		months : 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
		monthsShort : 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
		weekdays : 'ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
		weekdaysShort : 'ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
		weekdaysMin : 'ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ'.split('_'),
		weekdaysParseExact : true,
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'DD/MM/YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY HH:mm',
			LLLL : 'ວັນdddd D MMMM YYYY HH:mm'
		},
		meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
		isPM: function (input) {
			return input === 'ຕອນແລງ';
		},
		meridiem : function (hour, minute, isLower) {
			if (hour < 12) {
				return 'ຕອນເຊົ້າ';
			} else {
				return 'ຕອນແລງ';
			}
		},
		calendar : {
			sameDay : '[ມື້ນີ້ເວລາ] LT',
			nextDay : '[ມື້ອື່ນເວລາ] LT',
			nextWeek : '[ວັນ]dddd[ໜ້າເວລາ] LT',
			lastDay : '[ມື້ວານນີ້ເວລາ] LT',
			lastWeek : '[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT',
			sameElse : 'L'
		},
		relativeTime : {
			future : 'ອີກ %s',
			past : '%sຜ່ານມາ',
			s : 'ບໍ່ເທົ່າໃດວິນາທີ',
			m : '1 ນາທີ',
			mm : '%d ນາທີ',
			h : '1 ຊົ່ວໂມງ',
			hh : '%d ຊົ່ວໂມງ',
			d : '1 ມື້',
			dd : '%d ມື້',
			M : '1 ເດືອນ',
			MM : '%d ເດືອນ',
			y : '1 ປີ',
			yy : '%d ປີ'
		},
		ordinalParse: /(ທີ່)\d{1,2}/,
		ordinal : function (number) {
			return 'ທີ່' + number;
		}
	});

	//! moment.js locale configuration
	//! locale : Lithuanian (lt)
	//! author : Mindaugas Mozūras : https://github.com/mmozuras

	var lt__units = {
		'm' : 'minutė_minutės_minutę',
		'mm': 'minutės_minučių_minutes',
		'h' : 'valanda_valandos_valandą',
		'hh': 'valandos_valandų_valandas',
		'd' : 'diena_dienos_dieną',
		'dd': 'dienos_dienų_dienas',
		'M' : 'mėnuo_mėnesio_mėnesį',
		'MM': 'mėnesiai_mėnesių_mėnesius',
		'y' : 'metai_metų_metus',
		'yy': 'metai_metų_metus'
	};
	function translateSeconds(number, withoutSuffix, key, isFuture) {
		if (withoutSuffix) {
			return 'kelios sekundės';
		} else {
			return isFuture ? 'kelių sekundžių' : 'kelias sekundes';
		}
	}
	function translateSingular(number, withoutSuffix, key, isFuture) {
		return withoutSuffix ? forms(key)[0] : (isFuture ? forms(key)[1] : forms(key)[2]);
	}
	function special(number) {
		return number % 10 === 0 || (number > 10 && number < 20);
	}
	function forms(key) {
		return lt__units[key].split('_');
	}
	function lt__translate(number, withoutSuffix, key, isFuture) {
		var result = number + ' ';
		if (number === 1) {
			return result + translateSingular(number, withoutSuffix, key[0], isFuture);
		} else if (withoutSuffix) {
			return result + (special(number) ? forms(key)[1] : forms(key)[0]);
		} else {
			if (isFuture) {
				return result + forms(key)[1];
			} else {
				return result + (special(number) ? forms(key)[1] : forms(key)[2]);
			}
		}
	}
	var lt = moment__default.defineLocale('lt', {
		months : {
			format: 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_'),
			standalone: 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split('_')
		},
		monthsShort : 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
		weekdays : {
			format: 'sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį'.split('_'),
			standalone: 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split('_'),
			isFormat: /dddd HH:mm/
		},
		weekdaysShort : 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
		weekdaysMin : 'S_P_A_T_K_Pn_Š'.split('_'),
		weekdaysParseExact : true,
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'YYYY-MM-DD',
			LL : 'YYYY [m.] MMMM D [d.]',
			LLL : 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
			LLLL : 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
			l : 'YYYY-MM-DD',
			ll : 'YYYY [m.] MMMM D [d.]',
			lll : 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
			llll : 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]'
		},
		calendar : {
			sameDay : '[Šiandien] LT',
			nextDay : '[Rytoj] LT',
			nextWeek : 'dddd LT',
			lastDay : '[Vakar] LT',
			lastWeek : '[Praėjusį] dddd LT',
			sameElse : 'L'
		},
		relativeTime : {
			future : 'po %s',
			past : 'prieš %s',
			s : translateSeconds,
			m : translateSingular,
			mm : lt__translate,
			h : translateSingular,
			hh : lt__translate,
			d : translateSingular,
			dd : lt__translate,
			M : translateSingular,
			MM : lt__translate,
			y : translateSingular,
			yy : lt__translate
		},
		ordinalParse: /\d{1,2}-oji/,
		ordinal : function (number) {
			return number + '-oji';
		},
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 4  // The week that contains Jan 4th is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : latvian (lv)
	//! author : Kristaps Karlsons : https://github.com/skakri
	//! author : Jānis Elmeris : https://github.com/JanisE

	var lv__units = {
		'm': 'minūtes_minūtēm_minūte_minūtes'.split('_'),
		'mm': 'minūtes_minūtēm_minūte_minūtes'.split('_'),
		'h': 'stundas_stundām_stunda_stundas'.split('_'),
		'hh': 'stundas_stundām_stunda_stundas'.split('_'),
		'd': 'dienas_dienām_diena_dienas'.split('_'),
		'dd': 'dienas_dienām_diena_dienas'.split('_'),
		'M': 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
		'MM': 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
		'y': 'gada_gadiem_gads_gadi'.split('_'),
		'yy': 'gada_gadiem_gads_gadi'.split('_')
	};
	/**
	 * @param withoutSuffix boolean true = a length of time; false = before/after a period of time.
	 */
	function lv__format(forms, number, withoutSuffix) {
		if (withoutSuffix) {
			// E.g. "21 minūte", "3 minūtes".
			return number % 10 === 1 && number !== 11 ? forms[2] : forms[3];
		} else {
			// E.g. "21 minūtes" as in "pēc 21 minūtes".
			// E.g. "3 minūtēm" as in "pēc 3 minūtēm".
			return number % 10 === 1 && number !== 11 ? forms[0] : forms[1];
		}
	}
	function lv__relativeTimeWithPlural(number, withoutSuffix, key) {
		return number + ' ' + lv__format(lv__units[key], number, withoutSuffix);
	}
	function relativeTimeWithSingular(number, withoutSuffix, key) {
		return lv__format(lv__units[key], number, withoutSuffix);
	}
	function relativeSeconds(number, withoutSuffix) {
		return withoutSuffix ? 'dažas sekundes' : 'dažām sekundēm';
	}

	var lv = moment__default.defineLocale('lv', {
		months : 'janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris'.split('_'),
		monthsShort : 'jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec'.split('_'),
		weekdays : 'svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena'.split('_'),
		weekdaysShort : 'Sv_P_O_T_C_Pk_S'.split('_'),
		weekdaysMin : 'Sv_P_O_T_C_Pk_S'.split('_'),
		weekdaysParseExact : true,
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'DD.MM.YYYY.',
			LL : 'YYYY. [gada] D. MMMM',
			LLL : 'YYYY. [gada] D. MMMM, HH:mm',
			LLLL : 'YYYY. [gada] D. MMMM, dddd, HH:mm'
		},
		calendar : {
			sameDay : '[Šodien pulksten] LT',
			nextDay : '[Rīt pulksten] LT',
			nextWeek : 'dddd [pulksten] LT',
			lastDay : '[Vakar pulksten] LT',
			lastWeek : '[Pagājušā] dddd [pulksten] LT',
			sameElse : 'L'
		},
		relativeTime : {
			future : 'pēc %s',
			past : 'pirms %s',
			s : relativeSeconds,
			m : relativeTimeWithSingular,
			mm : lv__relativeTimeWithPlural,
			h : relativeTimeWithSingular,
			hh : lv__relativeTimeWithPlural,
			d : relativeTimeWithSingular,
			dd : lv__relativeTimeWithPlural,
			M : relativeTimeWithSingular,
			MM : lv__relativeTimeWithPlural,
			y : relativeTimeWithSingular,
			yy : lv__relativeTimeWithPlural
		},
		ordinalParse: /\d{1,2}\./,
		ordinal : '%d.',
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 4  // The week that contains Jan 4th is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : Montenegrin (me)
	//! author : Miodrag Nikač <miodrag@restartit.me> : https://github.com/miodragnikac

	var me__translator = {
		words: { //Different grammatical cases
			m: ['jedan minut', 'jednog minuta'],
			mm: ['minut', 'minuta', 'minuta'],
			h: ['jedan sat', 'jednog sata'],
			hh: ['sat', 'sata', 'sati'],
			dd: ['dan', 'dana', 'dana'],
			MM: ['mjesec', 'mjeseca', 'mjeseci'],
			yy: ['godina', 'godine', 'godina']
		},
		correctGrammaticalCase: function (number, wordKey) {
			return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
		},
		translate: function (number, withoutSuffix, key) {
			var wordKey = me__translator.words[key];
			if (key.length === 1) {
				return withoutSuffix ? wordKey[0] : wordKey[1];
			} else {
				return number + ' ' + me__translator.correctGrammaticalCase(number, wordKey);
			}
		}
	};

	var me = moment__default.defineLocale('me', {
		months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
		monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
		monthsParseExact : true,
		weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
		weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
		weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
		weekdaysParseExact : true,
		longDateFormat: {
			LT: 'H:mm',
			LTS : 'H:mm:ss',
			L: 'DD. MM. YYYY',
			LL: 'D. MMMM YYYY',
			LLL: 'D. MMMM YYYY H:mm',
			LLLL: 'dddd, D. MMMM YYYY H:mm'
		},
		calendar: {
			sameDay: '[danas u] LT',
			nextDay: '[sjutra u] LT',

			nextWeek: function () {
				switch (this.day()) {
					case 0:
						return '[u] [nedjelju] [u] LT';
					case 3:
						return '[u] [srijedu] [u] LT';
					case 6:
						return '[u] [subotu] [u] LT';
					case 1:
					case 2:
					case 4:
					case 5:
						return '[u] dddd [u] LT';
				}
			},
			lastDay  : '[juče u] LT',
			lastWeek : function () {
				var lastWeekDays = [
					'[prošle] [nedjelje] [u] LT',
					'[prošlog] [ponedjeljka] [u] LT',
					'[prošlog] [utorka] [u] LT',
					'[prošle] [srijede] [u] LT',
					'[prošlog] [četvrtka] [u] LT',
					'[prošlog] [petka] [u] LT',
					'[prošle] [subote] [u] LT'
				];
				return lastWeekDays[this.day()];
			},
			sameElse : 'L'
		},
		relativeTime : {
			future : 'za %s',
			past   : 'prije %s',
			s      : 'nekoliko sekundi',
			m      : me__translator.translate,
			mm     : me__translator.translate,
			h      : me__translator.translate,
			hh     : me__translator.translate,
			d      : 'dan',
			dd     : me__translator.translate,
			M      : 'mjesec',
			MM     : me__translator.translate,
			y      : 'godinu',
			yy     : me__translator.translate
		},
		ordinalParse: /\d{1,2}\./,
		ordinal : '%d.',
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 7  // The week that contains Jan 1st is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : macedonian (mk)
	//! author : Borislav Mickov : https://github.com/B0k0

	var mk = moment__default.defineLocale('mk', {
		months : 'јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември'.split('_'),
		monthsShort : 'јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек'.split('_'),
		weekdays : 'недела_понеделник_вторник_среда_четврток_петок_сабота'.split('_'),
		weekdaysShort : 'нед_пон_вто_сре_чет_пет_саб'.split('_'),
		weekdaysMin : 'нe_пo_вт_ср_че_пе_сa'.split('_'),
		longDateFormat : {
			LT : 'H:mm',
			LTS : 'H:mm:ss',
			L : 'D.MM.YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY H:mm',
			LLLL : 'dddd, D MMMM YYYY H:mm'
		},
		calendar : {
			sameDay : '[Денес во] LT',
			nextDay : '[Утре во] LT',
			nextWeek : '[Во] dddd [во] LT',
			lastDay : '[Вчера во] LT',
			lastWeek : function () {
				switch (this.day()) {
					case 0:
					case 3:
					case 6:
						return '[Изминатата] dddd [во] LT';
					case 1:
					case 2:
					case 4:
					case 5:
						return '[Изминатиот] dddd [во] LT';
				}
			},
			sameElse : 'L'
		},
		relativeTime : {
			future : 'после %s',
			past : 'пред %s',
			s : 'неколку секунди',
			m : 'минута',
			mm : '%d минути',
			h : 'час',
			hh : '%d часа',
			d : 'ден',
			dd : '%d дена',
			M : 'месец',
			MM : '%d месеци',
			y : 'година',
			yy : '%d години'
		},
		ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
		ordinal : function (number) {
			var lastDigit = number % 10,
				last2Digits = number % 100;
			if (number === 0) {
				return number + '-ев';
			} else if (last2Digits === 0) {
				return number + '-ен';
			} else if (last2Digits > 10 && last2Digits < 20) {
				return number + '-ти';
			} else if (lastDigit === 1) {
				return number + '-ви';
			} else if (lastDigit === 2) {
				return number + '-ри';
			} else if (lastDigit === 7 || lastDigit === 8) {
				return number + '-ми';
			} else {
				return number + '-ти';
			}
		},
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 7  // The week that contains Jan 1st is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : malayalam (ml)
	//! author : Floyd Pink : https://github.com/floydpink

	var ml = moment__default.defineLocale('ml', {
		months : 'ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ'.split('_'),
		monthsShort : 'ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.'.split('_'),
		monthsParseExact : true,
		weekdays : 'ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച'.split('_'),
		weekdaysShort : 'ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി'.split('_'),
		weekdaysMin : 'ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ'.split('_'),
		longDateFormat : {
			LT : 'A h:mm -നു',
			LTS : 'A h:mm:ss -നു',
			L : 'DD/MM/YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY, A h:mm -നു',
			LLLL : 'dddd, D MMMM YYYY, A h:mm -നു'
		},
		calendar : {
			sameDay : '[ഇന്ന്] LT',
			nextDay : '[നാളെ] LT',
			nextWeek : 'dddd, LT',
			lastDay : '[ഇന്നലെ] LT',
			lastWeek : '[കഴിഞ്ഞ] dddd, LT',
			sameElse : 'L'
		},
		relativeTime : {
			future : '%s കഴിഞ്ഞ്',
			past : '%s മുൻപ്',
			s : 'അൽപ നിമിഷങ്ങൾ',
			m : 'ഒരു മിനിറ്റ്',
			mm : '%d മിനിറ്റ്',
			h : 'ഒരു മണിക്കൂർ',
			hh : '%d മണിക്കൂർ',
			d : 'ഒരു ദിവസം',
			dd : '%d ദിവസം',
			M : 'ഒരു മാസം',
			MM : '%d മാസം',
			y : 'ഒരു വർഷം',
			yy : '%d വർഷം'
		},
		meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
		meridiemHour : function (hour, meridiem) {
			if (hour === 12) {
				hour = 0;
			}
			if ((meridiem === 'രാത്രി' && hour >= 4) ||
				meridiem === 'ഉച്ച കഴിഞ്ഞ്' ||
				meridiem === 'വൈകുന്നേരം') {
				return hour + 12;
			} else {
				return hour;
			}
		},
		meridiem : function (hour, minute, isLower) {
			if (hour < 4) {
				return 'രാത്രി';
			} else if (hour < 12) {
				return 'രാവിലെ';
			} else if (hour < 17) {
				return 'ഉച്ച കഴിഞ്ഞ്';
			} else if (hour < 20) {
				return 'വൈകുന്നേരം';
			} else {
				return 'രാത്രി';
			}
		}
	});

	//! moment.js locale configuration
	//! locale : Marathi (mr)
	//! author : Harshad Kale : https://github.com/kalehv
	//! author : Vivek Athalye : https://github.com/vnathalye

	var mr__symbolMap = {
			'1': '१',
			'2': '२',
			'3': '३',
			'4': '४',
			'5': '५',
			'6': '६',
			'7': '७',
			'8': '८',
			'9': '९',
			'0': '०'
		},
		mr__numberMap = {
			'१': '1',
			'२': '2',
			'३': '3',
			'४': '4',
			'५': '5',
			'६': '6',
			'७': '7',
			'८': '8',
			'९': '9',
			'०': '0'
		};

	function relativeTimeMr(number, withoutSuffix, string, isFuture)
	{
		var output = '';
		if (withoutSuffix) {
			switch (string) {
				case 's': output = 'काही सेकंद'; break;
				case 'm': output = 'एक मिनिट'; break;
				case 'mm': output = '%d मिनिटे'; break;
				case 'h': output = 'एक तास'; break;
				case 'hh': output = '%d तास'; break;
				case 'd': output = 'एक दिवस'; break;
				case 'dd': output = '%d दिवस'; break;
				case 'M': output = 'एक महिना'; break;
				case 'MM': output = '%d महिने'; break;
				case 'y': output = 'एक वर्ष'; break;
				case 'yy': output = '%d वर्षे'; break;
			}
		}
		else {
			switch (string) {
				case 's': output = 'काही सेकंदां'; break;
				case 'm': output = 'एका मिनिटा'; break;
				case 'mm': output = '%d मिनिटां'; break;
				case 'h': output = 'एका तासा'; break;
				case 'hh': output = '%d तासां'; break;
				case 'd': output = 'एका दिवसा'; break;
				case 'dd': output = '%d दिवसां'; break;
				case 'M': output = 'एका महिन्या'; break;
				case 'MM': output = '%d महिन्यां'; break;
				case 'y': output = 'एका वर्षा'; break;
				case 'yy': output = '%d वर्षां'; break;
			}
		}
		return output.replace(/%d/i, number);
	}

	var mr = moment__default.defineLocale('mr', {
		months : 'जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split('_'),
		monthsShort: 'जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split('_'),
		monthsParseExact : true,
		weekdays : 'रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
		weekdaysShort : 'रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि'.split('_'),
		weekdaysMin : 'र_सो_मं_बु_गु_शु_श'.split('_'),
		longDateFormat : {
			LT : 'A h:mm वाजता',
			LTS : 'A h:mm:ss वाजता',
			L : 'DD/MM/YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY, A h:mm वाजता',
			LLLL : 'dddd, D MMMM YYYY, A h:mm वाजता'
		},
		calendar : {
			sameDay : '[आज] LT',
			nextDay : '[उद्या] LT',
			nextWeek : 'dddd, LT',
			lastDay : '[काल] LT',
			lastWeek: '[मागील] dddd, LT',
			sameElse : 'L'
		},
		relativeTime : {
			future: '%sमध्ये',
			past: '%sपूर्वी',
			s: relativeTimeMr,
			m: relativeTimeMr,
			mm: relativeTimeMr,
			h: relativeTimeMr,
			hh: relativeTimeMr,
			d: relativeTimeMr,
			dd: relativeTimeMr,
			M: relativeTimeMr,
			MM: relativeTimeMr,
			y: relativeTimeMr,
			yy: relativeTimeMr
		},
		preparse: function (string) {
			return string.replace(/[१२३४५६७८९०]/g, function (match) {
				return mr__numberMap[match];
			});
		},
		postformat: function (string) {
			return string.replace(/\d/g, function (match) {
				return mr__symbolMap[match];
			});
		},
		meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
		meridiemHour : function (hour, meridiem) {
			if (hour === 12) {
				hour = 0;
			}
			if (meridiem === 'रात्री') {
				return hour < 4 ? hour : hour + 12;
			} else if (meridiem === 'सकाळी') {
				return hour;
			} else if (meridiem === 'दुपारी') {
				return hour >= 10 ? hour : hour + 12;
			} else if (meridiem === 'सायंकाळी') {
				return hour + 12;
			}
		},
		meridiem: function (hour, minute, isLower) {
			if (hour < 4) {
				return 'रात्री';
			} else if (hour < 10) {
				return 'सकाळी';
			} else if (hour < 17) {
				return 'दुपारी';
			} else if (hour < 20) {
				return 'सायंकाळी';
			} else {
				return 'रात्री';
			}
		},
		week : {
			dow : 0, // Sunday is the first day of the week.
			doy : 6  // The week that contains Jan 1st is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : Bahasa Malaysia (ms-MY)
	//! author : Weldan Jamili : https://github.com/weldan

	var ms_my = moment__default.defineLocale('ms-my', {
		months : 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
		monthsShort : 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
		weekdays : 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
		weekdaysShort : 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
		weekdaysMin : 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
		longDateFormat : {
			LT : 'HH.mm',
			LTS : 'HH.mm.ss',
			L : 'DD/MM/YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY [pukul] HH.mm',
			LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
		},
		meridiemParse: /pagi|tengahari|petang|malam/,
		meridiemHour: function (hour, meridiem) {
			if (hour === 12) {
				hour = 0;
			}
			if (meridiem === 'pagi') {
				return hour;
			} else if (meridiem === 'tengahari') {
				return hour >= 11 ? hour : hour + 12;
			} else if (meridiem === 'petang' || meridiem === 'malam') {
				return hour + 12;
			}
		},
		meridiem : function (hours, minutes, isLower) {
			if (hours < 11) {
				return 'pagi';
			} else if (hours < 15) {
				return 'tengahari';
			} else if (hours < 19) {
				return 'petang';
			} else {
				return 'malam';
			}
		},
		calendar : {
			sameDay : '[Hari ini pukul] LT',
			nextDay : '[Esok pukul] LT',
			nextWeek : 'dddd [pukul] LT',
			lastDay : '[Kelmarin pukul] LT',
			lastWeek : 'dddd [lepas pukul] LT',
			sameElse : 'L'
		},
		relativeTime : {
			future : 'dalam %s',
			past : '%s yang lepas',
			s : 'beberapa saat',
			m : 'seminit',
			mm : '%d minit',
			h : 'sejam',
			hh : '%d jam',
			d : 'sehari',
			dd : '%d hari',
			M : 'sebulan',
			MM : '%d bulan',
			y : 'setahun',
			yy : '%d tahun'
		},
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 7  // The week that contains Jan 1st is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : Bahasa Malaysia (ms-MY)
	//! author : Weldan Jamili : https://github.com/weldan

	var locale_ms = moment__default.defineLocale('ms', {
		months : 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
		monthsShort : 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
		weekdays : 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
		weekdaysShort : 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
		weekdaysMin : 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
		longDateFormat : {
			LT : 'HH.mm',
			LTS : 'HH.mm.ss',
			L : 'DD/MM/YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY [pukul] HH.mm',
			LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
		},
		meridiemParse: /pagi|tengahari|petang|malam/,
		meridiemHour: function (hour, meridiem) {
			if (hour === 12) {
				hour = 0;
			}
			if (meridiem === 'pagi') {
				return hour;
			} else if (meridiem === 'tengahari') {
				return hour >= 11 ? hour : hour + 12;
			} else if (meridiem === 'petang' || meridiem === 'malam') {
				return hour + 12;
			}
		},
		meridiem : function (hours, minutes, isLower) {
			if (hours < 11) {
				return 'pagi';
			} else if (hours < 15) {
				return 'tengahari';
			} else if (hours < 19) {
				return 'petang';
			} else {
				return 'malam';
			}
		},
		calendar : {
			sameDay : '[Hari ini pukul] LT',
			nextDay : '[Esok pukul] LT',
			nextWeek : 'dddd [pukul] LT',
			lastDay : '[Kelmarin pukul] LT',
			lastWeek : 'dddd [lepas pukul] LT',
			sameElse : 'L'
		},
		relativeTime : {
			future : 'dalam %s',
			past : '%s yang lepas',
			s : 'beberapa saat',
			m : 'seminit',
			mm : '%d minit',
			h : 'sejam',
			hh : '%d jam',
			d : 'sehari',
			dd : '%d hari',
			M : 'sebulan',
			MM : '%d bulan',
			y : 'setahun',
			yy : '%d tahun'
		},
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 7  // The week that contains Jan 1st is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : Burmese (my)
	//! author : Squar team, mysquar.com

	var my__symbolMap = {
		'1': '၁',
		'2': '၂',
		'3': '၃',
		'4': '၄',
		'5': '၅',
		'6': '၆',
		'7': '၇',
		'8': '၈',
		'9': '၉',
		'0': '၀'
	}, my__numberMap = {
		'၁': '1',
		'၂': '2',
		'၃': '3',
		'၄': '4',
		'၅': '5',
		'၆': '6',
		'၇': '7',
		'၈': '8',
		'၉': '9',
		'၀': '0'
	};

	var my = moment__default.defineLocale('my', {
		months: 'ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ'.split('_'),
		monthsShort: 'ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ'.split('_'),
		weekdays: 'တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ'.split('_'),
		weekdaysShort: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
		weekdaysMin: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),

		longDateFormat: {
			LT: 'HH:mm',
			LTS: 'HH:mm:ss',
			L: 'DD/MM/YYYY',
			LL: 'D MMMM YYYY',
			LLL: 'D MMMM YYYY HH:mm',
			LLLL: 'dddd D MMMM YYYY HH:mm'
		},
		calendar: {
			sameDay: '[ယနေ.] LT [မှာ]',
			nextDay: '[မနက်ဖြန်] LT [မှာ]',
			nextWeek: 'dddd LT [မှာ]',
			lastDay: '[မနေ.က] LT [မှာ]',
			lastWeek: '[ပြီးခဲ့သော] dddd LT [မှာ]',
			sameElse: 'L'
		},
		relativeTime: {
			future: 'လာမည့် %s မှာ',
			past: 'လွန်ခဲ့သော %s က',
			s: 'စက္ကန်.အနည်းငယ်',
			m: 'တစ်မိနစ်',
			mm: '%d မိနစ်',
			h: 'တစ်နာရီ',
			hh: '%d နာရီ',
			d: 'တစ်ရက်',
			dd: '%d ရက်',
			M: 'တစ်လ',
			MM: '%d လ',
			y: 'တစ်နှစ်',
			yy: '%d နှစ်'
		},
		preparse: function (string) {
			return string.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (match) {
				return my__numberMap[match];
			});
		},
		postformat: function (string) {
			return string.replace(/\d/g, function (match) {
				return my__symbolMap[match];
			});
		},
		week: {
			dow: 1, // Monday is the first day of the week.
			doy: 4 // The week that contains Jan 1st is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : norwegian bokmål (nb)
	//! authors : Espen Hovlandsdal : https://github.com/rexxars
	//!           Sigurd Gartmann : https://github.com/sigurdga

	var nb = moment__default.defineLocale('nb', {
		months : 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
		monthsShort : 'jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
		monthsParseExact : true,
		weekdays : 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
		weekdaysShort : 'sø._ma._ti._on._to._fr._lø.'.split('_'),
		weekdaysMin : 'sø_ma_ti_on_to_fr_lø'.split('_'),
		weekdaysParseExact : true,
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'DD.MM.YYYY',
			LL : 'D. MMMM YYYY',
			LLL : 'D. MMMM YYYY [kl.] HH:mm',
			LLLL : 'dddd D. MMMM YYYY [kl.] HH:mm'
		},
		calendar : {
			sameDay: '[i dag kl.] LT',
			nextDay: '[i morgen kl.] LT',
			nextWeek: 'dddd [kl.] LT',
			lastDay: '[i går kl.] LT',
			lastWeek: '[forrige] dddd [kl.] LT',
			sameElse: 'L'
		},
		relativeTime : {
			future : 'om %s',
			past : '%s siden',
			s : 'noen sekunder',
			m : 'ett minutt',
			mm : '%d minutter',
			h : 'en time',
			hh : '%d timer',
			d : 'en dag',
			dd : '%d dager',
			M : 'en måned',
			MM : '%d måneder',
			y : 'ett år',
			yy : '%d år'
		},
		ordinalParse: /\d{1,2}\./,
		ordinal : '%d.',
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 4  // The week that contains Jan 4th is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : nepali/nepalese
	//! author : suvash : https://github.com/suvash

	var ne__symbolMap = {
			'1': '१',
			'2': '२',
			'3': '३',
			'4': '४',
			'5': '५',
			'6': '६',
			'7': '७',
			'8': '८',
			'9': '९',
			'0': '०'
		},
		ne__numberMap = {
			'१': '1',
			'२': '2',
			'३': '3',
			'४': '4',
			'५': '5',
			'६': '6',
			'७': '7',
			'८': '8',
			'९': '9',
			'०': '0'
		};

	var ne = moment__default.defineLocale('ne', {
		months : 'जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर'.split('_'),
		monthsShort : 'जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.'.split('_'),
		monthsParseExact : true,
		weekdays : 'आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार'.split('_'),
		weekdaysShort : 'आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.'.split('_'),
		weekdaysMin : 'आ._सो._मं._बु._बि._शु._श.'.split('_'),
		weekdaysParseExact : true,
		longDateFormat : {
			LT : 'Aको h:mm बजे',
			LTS : 'Aको h:mm:ss बजे',
			L : 'DD/MM/YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY, Aको h:mm बजे',
			LLLL : 'dddd, D MMMM YYYY, Aको h:mm बजे'
		},
		preparse: function (string) {
			return string.replace(/[१२३४५६७८९०]/g, function (match) {
				return ne__numberMap[match];
			});
		},
		postformat: function (string) {
			return string.replace(/\d/g, function (match) {
				return ne__symbolMap[match];
			});
		},
		meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
		meridiemHour : function (hour, meridiem) {
			if (hour === 12) {
				hour = 0;
			}
			if (meridiem === 'राति') {
				return hour < 4 ? hour : hour + 12;
			} else if (meridiem === 'बिहान') {
				return hour;
			} else if (meridiem === 'दिउँसो') {
				return hour >= 10 ? hour : hour + 12;
			} else if (meridiem === 'साँझ') {
				return hour + 12;
			}
		},
		meridiem : function (hour, minute, isLower) {
			if (hour < 3) {
				return 'राति';
			} else if (hour < 12) {
				return 'बिहान';
			} else if (hour < 16) {
				return 'दिउँसो';
			} else if (hour < 20) {
				return 'साँझ';
			} else {
				return 'राति';
			}
		},
		calendar : {
			sameDay : '[आज] LT',
			nextDay : '[भोलि] LT',
			nextWeek : '[आउँदो] dddd[,] LT',
			lastDay : '[हिजो] LT',
			lastWeek : '[गएको] dddd[,] LT',
			sameElse : 'L'
		},
		relativeTime : {
			future : '%sमा',
			past : '%s अगाडि',
			s : 'केही क्षण',
			m : 'एक मिनेट',
			mm : '%d मिनेट',
			h : 'एक घण्टा',
			hh : '%d घण्टा',
			d : 'एक दिन',
			dd : '%d दिन',
			M : 'एक महिना',
			MM : '%d महिना',
			y : 'एक बर्ष',
			yy : '%d बर्ष'
		},
		week : {
			dow : 0, // Sunday is the first day of the week.
			doy : 6  // The week that contains Jan 1st is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : dutch (nl)
	//! author : Joris Röling : https://github.com/jjupiter

	var nl__monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
		nl__monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');

	var nl = moment__default.defineLocale('nl', {
		months : 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
		monthsShort : function (m, format) {
			if (/-MMM-/.test(format)) {
				return nl__monthsShortWithoutDots[m.month()];
			} else {
				return nl__monthsShortWithDots[m.month()];
			}
		},
		monthsParseExact : true,
		weekdays : 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
		weekdaysShort : 'zo._ma._di._wo._do._vr._za.'.split('_'),
		weekdaysMin : 'Zo_Ma_Di_Wo_Do_Vr_Za'.split('_'),
		weekdaysParseExact : true,
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'DD-MM-YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY HH:mm',
			LLLL : 'dddd D MMMM YYYY HH:mm'
		},
		calendar : {
			sameDay: '[vandaag om] LT',
			nextDay: '[morgen om] LT',
			nextWeek: 'dddd [om] LT',
			lastDay: '[gisteren om] LT',
			lastWeek: '[afgelopen] dddd [om] LT',
			sameElse: 'L'
		},
		relativeTime : {
			future : 'over %s',
			past : '%s geleden',
			s : 'een paar seconden',
			m : 'één minuut',
			mm : '%d minuten',
			h : 'één uur',
			hh : '%d uur',
			d : 'één dag',
			dd : '%d dagen',
			M : 'één maand',
			MM : '%d maanden',
			y : 'één jaar',
			yy : '%d jaar'
		},
		ordinalParse: /\d{1,2}(ste|de)/,
		ordinal : function (number) {
			return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
		},
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 4  // The week that contains Jan 4th is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : norwegian nynorsk (nn)
	//! author : https://github.com/mechuwind

	var nn = moment__default.defineLocale('nn', {
		months : 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
		monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
		weekdays : 'sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
		weekdaysShort : 'sun_mån_tys_ons_tor_fre_lau'.split('_'),
		weekdaysMin : 'su_må_ty_on_to_fr_lø'.split('_'),
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'DD.MM.YYYY',
			LL : 'D. MMMM YYYY',
			LLL : 'D. MMMM YYYY [kl.] H:mm',
			LLLL : 'dddd D. MMMM YYYY [kl.] HH:mm'
		},
		calendar : {
			sameDay: '[I dag klokka] LT',
			nextDay: '[I morgon klokka] LT',
			nextWeek: 'dddd [klokka] LT',
			lastDay: '[I går klokka] LT',
			lastWeek: '[Føregåande] dddd [klokka] LT',
			sameElse: 'L'
		},
		relativeTime : {
			future : 'om %s',
			past : '%s sidan',
			s : 'nokre sekund',
			m : 'eit minutt',
			mm : '%d minutt',
			h : 'ein time',
			hh : '%d timar',
			d : 'ein dag',
			dd : '%d dagar',
			M : 'ein månad',
			MM : '%d månader',
			y : 'eit år',
			yy : '%d år'
		},
		ordinalParse: /\d{1,2}\./,
		ordinal : '%d.',
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 4  // The week that contains Jan 4th is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : punjabi india (pa-in)
	//! author : Harpreet Singh : https://github.com/harpreetkhalsagtbit

	var pa_in__symbolMap = {
			'1': '੧',
			'2': '੨',
			'3': '੩',
			'4': '੪',
			'5': '੫',
			'6': '੬',
			'7': '੭',
			'8': '੮',
			'9': '੯',
			'0': '੦'
		},
		pa_in__numberMap = {
			'੧': '1',
			'੨': '2',
			'੩': '3',
			'੪': '4',
			'੫': '5',
			'੬': '6',
			'੭': '7',
			'੮': '8',
			'੯': '9',
			'੦': '0'
		};

	var pa_in = moment__default.defineLocale('pa-in', {
		// There are months name as per Nanakshahi Calender but they are not used as rigidly in modern Punjabi.
		months : 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
		monthsShort : 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
		weekdays : 'ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ'.split('_'),
		weekdaysShort : 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
		weekdaysMin : 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
		longDateFormat : {
			LT : 'A h:mm ਵਜੇ',
			LTS : 'A h:mm:ss ਵਜੇ',
			L : 'DD/MM/YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY, A h:mm ਵਜੇ',
			LLLL : 'dddd, D MMMM YYYY, A h:mm ਵਜੇ'
		},
		calendar : {
			sameDay : '[ਅਜ] LT',
			nextDay : '[ਕਲ] LT',
			nextWeek : 'dddd, LT',
			lastDay : '[ਕਲ] LT',
			lastWeek : '[ਪਿਛਲੇ] dddd, LT',
			sameElse : 'L'
		},
		relativeTime : {
			future : '%s ਵਿੱਚ',
			past : '%s ਪਿਛਲੇ',
			s : 'ਕੁਝ ਸਕਿੰਟ',
			m : 'ਇਕ ਮਿੰਟ',
			mm : '%d ਮਿੰਟ',
			h : 'ਇੱਕ ਘੰਟਾ',
			hh : '%d ਘੰਟੇ',
			d : 'ਇੱਕ ਦਿਨ',
			dd : '%d ਦਿਨ',
			M : 'ਇੱਕ ਮਹੀਨਾ',
			MM : '%d ਮਹੀਨੇ',
			y : 'ਇੱਕ ਸਾਲ',
			yy : '%d ਸਾਲ'
		},
		preparse: function (string) {
			return string.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (match) {
				return pa_in__numberMap[match];
			});
		},
		postformat: function (string) {
			return string.replace(/\d/g, function (match) {
				return pa_in__symbolMap[match];
			});
		},
		// Punjabi notation for meridiems are quite fuzzy in practice. While there exists
		// a rigid notion of a 'Pahar' it is not used as rigidly in modern Punjabi.
		meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
		meridiemHour : function (hour, meridiem) {
			if (hour === 12) {
				hour = 0;
			}
			if (meridiem === 'ਰਾਤ') {
				return hour < 4 ? hour : hour + 12;
			} else if (meridiem === 'ਸਵੇਰ') {
				return hour;
			} else if (meridiem === 'ਦੁਪਹਿਰ') {
				return hour >= 10 ? hour : hour + 12;
			} else if (meridiem === 'ਸ਼ਾਮ') {
				return hour + 12;
			}
		},
		meridiem : function (hour, minute, isLower) {
			if (hour < 4) {
				return 'ਰਾਤ';
			} else if (hour < 10) {
				return 'ਸਵੇਰ';
			} else if (hour < 17) {
				return 'ਦੁਪਹਿਰ';
			} else if (hour < 20) {
				return 'ਸ਼ਾਮ';
			} else {
				return 'ਰਾਤ';
			}
		},
		week : {
			dow : 0, // Sunday is the first day of the week.
			doy : 6  // The week that contains Jan 1st is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : polish (pl)
	//! author : Rafal Hirsz : https://github.com/evoL

	var monthsNominative = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_'),
		monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_');
	function pl__plural(n) {
		return (n % 10 < 5) && (n % 10 > 1) && ((~~(n / 10) % 10) !== 1);
	}
	function pl__translate(number, withoutSuffix, key) {
		var result = number + ' ';
		switch (key) {
			case 'm':
				return withoutSuffix ? 'minuta' : 'minutę';
			case 'mm':
				return result + (pl__plural(number) ? 'minuty' : 'minut');
			case 'h':
				return withoutSuffix  ? 'godzina'  : 'godzinę';
			case 'hh':
				return result + (pl__plural(number) ? 'godziny' : 'godzin');
			case 'MM':
				return result + (pl__plural(number) ? 'miesiące' : 'miesięcy');
			case 'yy':
				return result + (pl__plural(number) ? 'lata' : 'lat');
		}
	}

	var pl = moment__default.defineLocale('pl', {
		months : function (momentToFormat, format) {
			if (format === '') {
				// Hack: if format empty we know this is used to generate
				// RegExp by moment. Give then back both valid forms of months
				// in RegExp ready format.
				return '(' + monthsSubjective[momentToFormat.month()] + '|' + monthsNominative[momentToFormat.month()] + ')';
			} else if (/D MMMM/.test(format)) {
				return monthsSubjective[momentToFormat.month()];
			} else {
				return monthsNominative[momentToFormat.month()];
			}
		},
		monthsShort : 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
		weekdays : 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
		weekdaysShort : 'nie_pon_wt_śr_czw_pt_sb'.split('_'),
		weekdaysMin : 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'DD.MM.YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY HH:mm',
			LLLL : 'dddd, D MMMM YYYY HH:mm'
		},
		calendar : {
			sameDay: '[Dziś o] LT',
			nextDay: '[Jutro o] LT',
			nextWeek: '[W] dddd [o] LT',
			lastDay: '[Wczoraj o] LT',
			lastWeek: function () {
				switch (this.day()) {
					case 0:
						return '[W zeszłą niedzielę o] LT';
					case 3:
						return '[W zeszłą środę o] LT';
					case 6:
						return '[W zeszłą sobotę o] LT';
					default:
						return '[W zeszły] dddd [o] LT';
				}
			},
			sameElse: 'L'
		},
		relativeTime : {
			future : 'za %s',
			past : '%s temu',
			s : 'kilka sekund',
			m : pl__translate,
			mm : pl__translate,
			h : pl__translate,
			hh : pl__translate,
			d : '1 dzień',
			dd : '%d dni',
			M : 'miesiąc',
			MM : pl__translate,
			y : 'rok',
			yy : pl__translate
		},
		ordinalParse: /\d{1,2}\./,
		ordinal : '%d.',
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 4  // The week that contains Jan 4th is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : brazilian portuguese (pt-br)
	//! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira

	var pt_br = moment__default.defineLocale('pt-br', {
		months : 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
		monthsShort : 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
		weekdays : 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
		weekdaysShort : 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
		weekdaysMin : 'Dom_2ª_3ª_4ª_5ª_6ª_Sáb'.split('_'),
		weekdaysParseExact : true,
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'DD/MM/YYYY',
			LL : 'D [de] MMMM [de] YYYY',
			LLL : 'D [de] MMMM [de] YYYY [às] HH:mm',
			LLLL : 'dddd, D [de] MMMM [de] YYYY [às] HH:mm'
		},
		calendar : {
			sameDay: '[Hoje às] LT',
			nextDay: '[Amanhã às] LT',
			nextWeek: 'dddd [às] LT',
			lastDay: '[Ontem às] LT',
			lastWeek: function () {
				return (this.day() === 0 || this.day() === 6) ?
					'[Último] dddd [às] LT' : // Saturday + Sunday
					'[Última] dddd [às] LT'; // Monday - Friday
			},
			sameElse: 'L'
		},
		relativeTime : {
			future : 'em %s',
			past : '%s atrás',
			s : 'poucos segundos',
			m : 'um minuto',
			mm : '%d minutos',
			h : 'uma hora',
			hh : '%d horas',
			d : 'um dia',
			dd : '%d dias',
			M : 'um mês',
			MM : '%d meses',
			y : 'um ano',
			yy : '%d anos'
		},
		ordinalParse: /\d{1,2}º/,
		ordinal : '%dº'
	});

	//! moment.js locale configuration
	//! locale : portuguese (pt)
	//! author : Jefferson : https://github.com/jalex79

	var pt = moment__default.defineLocale('pt', {
		months : 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
		monthsShort : 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
		weekdays : 'Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado'.split('_'),
		weekdaysShort : 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
		weekdaysMin : 'Dom_2ª_3ª_4ª_5ª_6ª_Sáb'.split('_'),
		weekdaysParseExact : true,
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'DD/MM/YYYY',
			LL : 'D [de] MMMM [de] YYYY',
			LLL : 'D [de] MMMM [de] YYYY HH:mm',
			LLLL : 'dddd, D [de] MMMM [de] YYYY HH:mm'
		},
		calendar : {
			sameDay: '[Hoje às] LT',
			nextDay: '[Amanhã às] LT',
			nextWeek: 'dddd [às] LT',
			lastDay: '[Ontem às] LT',
			lastWeek: function () {
				return (this.day() === 0 || this.day() === 6) ?
					'[Último] dddd [às] LT' : // Saturday + Sunday
					'[Última] dddd [às] LT'; // Monday - Friday
			},
			sameElse: 'L'
		},
		relativeTime : {
			future : 'em %s',
			past : 'há %s',
			s : 'segundos',
			m : 'um minuto',
			mm : '%d minutos',
			h : 'uma hora',
			hh : '%d horas',
			d : 'um dia',
			dd : '%d dias',
			M : 'um mês',
			MM : '%d meses',
			y : 'um ano',
			yy : '%d anos'
		},
		ordinalParse: /\d{1,2}º/,
		ordinal : '%dº',
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 4  // The week that contains Jan 4th is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : romanian (ro)
	//! author : Vlad Gurdiga : https://github.com/gurdiga
	//! author : Valentin Agachi : https://github.com/avaly

	function ro__relativeTimeWithPlural(number, withoutSuffix, key) {
		var format = {
				'mm': 'minute',
				'hh': 'ore',
				'dd': 'zile',
				'MM': 'luni',
				'yy': 'ani'
			},
			separator = ' ';
		if (number % 100 >= 20 || (number >= 100 && number % 100 === 0)) {
			separator = ' de ';
		}
		return number + separator + format[key];
	}

	var ro = moment__default.defineLocale('ro', {
		months : 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
		monthsShort : 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
		monthsParseExact: true,
		weekdays : 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
		weekdaysShort : 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
		weekdaysMin : 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
		longDateFormat : {
			LT : 'H:mm',
			LTS : 'H:mm:ss',
			L : 'DD.MM.YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY H:mm',
			LLLL : 'dddd, D MMMM YYYY H:mm'
		},
		calendar : {
			sameDay: '[azi la] LT',
			nextDay: '[mâine la] LT',
			nextWeek: 'dddd [la] LT',
			lastDay: '[ieri la] LT',
			lastWeek: '[fosta] dddd [la] LT',
			sameElse: 'L'
		},
		relativeTime : {
			future : 'peste %s',
			past : '%s în urmă',
			s : 'câteva secunde',
			m : 'un minut',
			mm : ro__relativeTimeWithPlural,
			h : 'o oră',
			hh : ro__relativeTimeWithPlural,
			d : 'o zi',
			dd : ro__relativeTimeWithPlural,
			M : 'o lună',
			MM : ro__relativeTimeWithPlural,
			y : 'un an',
			yy : ro__relativeTimeWithPlural
		},
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 7  // The week that contains Jan 1st is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : russian (ru)
	//! author : Viktorminator : https://github.com/Viktorminator
	//! Author : Menelion Elensúle : https://github.com/Oire
	//! author : Коренберг Марк : https://github.com/socketpair

	function ru__plural(word, num) {
		var forms = word.split('_');
		return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
	}
	function ru__relativeTimeWithPlural(number, withoutSuffix, key) {
		var format = {
			'mm': withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
			'hh': 'час_часа_часов',
			'dd': 'день_дня_дней',
			'MM': 'месяц_месяца_месяцев',
			'yy': 'год_года_лет'
		};
		if (key === 'm') {
			return withoutSuffix ? 'минута' : 'минуту';
		}
		else {
			return number + ' ' + ru__plural(format[key], +number);
		}
	}
	var monthsParse = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];

	// http://new.gramota.ru/spravka/rules/139-prop : § 103
	// Сокращения месяцев: http://new.gramota.ru/spravka/buro/search-answer?s=242637
	// CLDR data:          http://www.unicode.org/cldr/charts/28/summary/ru.html#1753
	var ru = moment__default.defineLocale('ru', {
		months : {
			format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_'),
			standalone: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_')
		},
		monthsShort : {
			// по CLDR именно "июл." и "июн.", но какой смысл менять букву на точку ?
			format: 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split('_'),
			standalone: 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split('_')
		},
		weekdays : {
			standalone: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
			format: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_'),
			isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
		},
		weekdaysShort : 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
		weekdaysMin : 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
		monthsParse : monthsParse,
		longMonthsParse : monthsParse,
		shortMonthsParse : monthsParse,
		monthsRegex: /^(сентябр[яь]|октябр[яь]|декабр[яь]|феврал[яь]|январ[яь]|апрел[яь]|августа?|ноябр[яь]|сент\.|февр\.|нояб\.|июнь|янв.|июль|дек.|авг.|апр.|марта|мар[.т]|окт.|июн[яь]|июл[яь]|ма[яй])/i,
		monthsShortRegex: /^(сентябр[яь]|октябр[яь]|декабр[яь]|феврал[яь]|январ[яь]|апрел[яь]|августа?|ноябр[яь]|сент\.|февр\.|нояб\.|июнь|янв.|июль|дек.|авг.|апр.|марта|мар[.т]|окт.|июн[яь]|июл[яь]|ма[яй])/i,
		monthsStrictRegex: /^(сентябр[яь]|октябр[яь]|декабр[яь]|феврал[яь]|январ[яь]|апрел[яь]|августа?|ноябр[яь]|марта?|июн[яь]|июл[яь]|ма[яй])/i,
		monthsShortStrictRegex: /^(нояб\.|февр\.|сент\.|июль|янв\.|июн[яь]|мар[.т]|авг\.|апр\.|окт\.|дек\.|ма[яй])/i,
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'DD.MM.YYYY',
			LL : 'D MMMM YYYY г.',
			LLL : 'D MMMM YYYY г., HH:mm',
			LLLL : 'dddd, D MMMM YYYY г., HH:mm'
		},
		calendar : {
			sameDay: '[Сегодня в] LT',
			nextDay: '[Завтра в] LT',
			lastDay: '[Вчера в] LT',
			nextWeek: function (now) {
				if (now.week() !== this.week()) {
					switch (this.day()) {
						case 0:
							return '[В следующее] dddd [в] LT';
						case 1:
						case 2:
						case 4:
							return '[В следующий] dddd [в] LT';
						case 3:
						case 5:
						case 6:
							return '[В следующую] dddd [в] LT';
					}
				} else {
					if (this.day() === 2) {
						return '[Во] dddd [в] LT';
					} else {
						return '[В] dddd [в] LT';
					}
				}
			},
			lastWeek: function (now) {
				if (now.week() !== this.week()) {
					switch (this.day()) {
						case 0:
							return '[В прошлое] dddd [в] LT';
						case 1:
						case 2:
						case 4:
							return '[В прошлый] dddd [в] LT';
						case 3:
						case 5:
						case 6:
							return '[В прошлую] dddd [в] LT';
					}
				} else {
					if (this.day() === 2) {
						return '[Во] dddd [в] LT';
					} else {
						return '[В] dddd [в] LT';
					}
				}
			},
			sameElse: 'L'
		},
		relativeTime : {
			future : 'через %s',
			past : '%s назад',
			s : 'несколько секунд',
			m : ru__relativeTimeWithPlural,
			mm : ru__relativeTimeWithPlural,
			h : 'час',
			hh : ru__relativeTimeWithPlural,
			d : 'день',
			dd : ru__relativeTimeWithPlural,
			M : 'месяц',
			MM : ru__relativeTimeWithPlural,
			y : 'год',
			yy : ru__relativeTimeWithPlural
		},
		meridiemParse: /ночи|утра|дня|вечера/i,
		isPM : function (input) {
			return /^(дня|вечера)$/.test(input);
		},
		meridiem : function (hour, minute, isLower) {
			if (hour < 4) {
				return 'ночи';
			} else if (hour < 12) {
				return 'утра';
			} else if (hour < 17) {
				return 'дня';
			} else {
				return 'вечера';
			}
		},
		ordinalParse: /\d{1,2}-(й|го|я)/,
		ordinal: function (number, period) {
			switch (period) {
				case 'M':
				case 'd':
				case 'DDD':
					return number + '-й';
				case 'D':
					return number + '-го';
				case 'w':
				case 'W':
					return number + '-я';
				default:
					return number;
			}
		},
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 7  // The week that contains Jan 1st is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : Northern Sami (se)
	//! authors : Bård Rolstad Henriksen : https://github.com/karamell


	var se = moment__default.defineLocale('se', {
		months : 'ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu'.split('_'),
		monthsShort : 'ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov'.split('_'),
		weekdays : 'sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat'.split('_'),
		weekdaysShort : 'sotn_vuos_maŋ_gask_duor_bear_láv'.split('_'),
		weekdaysMin : 's_v_m_g_d_b_L'.split('_'),
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'DD.MM.YYYY',
			LL : 'MMMM D. [b.] YYYY',
			LLL : 'MMMM D. [b.] YYYY [ti.] HH:mm',
			LLLL : 'dddd, MMMM D. [b.] YYYY [ti.] HH:mm'
		},
		calendar : {
			sameDay: '[otne ti] LT',
			nextDay: '[ihttin ti] LT',
			nextWeek: 'dddd [ti] LT',
			lastDay: '[ikte ti] LT',
			lastWeek: '[ovddit] dddd [ti] LT',
			sameElse: 'L'
		},
		relativeTime : {
			future : '%s geažes',
			past : 'maŋit %s',
			s : 'moadde sekunddat',
			m : 'okta minuhta',
			mm : '%d minuhtat',
			h : 'okta diimmu',
			hh : '%d diimmut',
			d : 'okta beaivi',
			dd : '%d beaivvit',
			M : 'okta mánnu',
			MM : '%d mánut',
			y : 'okta jahki',
			yy : '%d jagit'
		},
		ordinalParse: /\d{1,2}\./,
		ordinal : '%d.',
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 4  // The week that contains Jan 4th is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : Sinhalese (si)
	//! author : Sampath Sitinamaluwa : https://github.com/sampathsris

	/*jshint -W100*/
	var si = moment__default.defineLocale('si', {
		months : 'ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්'.split('_'),
		monthsShort : 'ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ'.split('_'),
		weekdays : 'ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා'.split('_'),
		weekdaysShort : 'ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන'.split('_'),
		weekdaysMin : 'ඉ_ස_අ_බ_බ්‍ර_සි_සෙ'.split('_'),
		weekdaysParseExact : true,
		longDateFormat : {
			LT : 'a h:mm',
			LTS : 'a h:mm:ss',
			L : 'YYYY/MM/DD',
			LL : 'YYYY MMMM D',
			LLL : 'YYYY MMMM D, a h:mm',
			LLLL : 'YYYY MMMM D [වැනි] dddd, a h:mm:ss'
		},
		calendar : {
			sameDay : '[අද] LT[ට]',
			nextDay : '[හෙට] LT[ට]',
			nextWeek : 'dddd LT[ට]',
			lastDay : '[ඊයේ] LT[ට]',
			lastWeek : '[පසුගිය] dddd LT[ට]',
			sameElse : 'L'
		},
		relativeTime : {
			future : '%sකින්',
			past : '%sකට පෙර',
			s : 'තත්පර කිහිපය',
			m : 'මිනිත්තුව',
			mm : 'මිනිත්තු %d',
			h : 'පැය',
			hh : 'පැය %d',
			d : 'දිනය',
			dd : 'දින %d',
			M : 'මාසය',
			MM : 'මාස %d',
			y : 'වසර',
			yy : 'වසර %d'
		},
		ordinalParse: /\d{1,2} වැනි/,
		ordinal : function (number) {
			return number + ' වැනි';
		},
		meridiemParse : /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
		isPM : function (input) {
			return input === 'ප.ව.' || input === 'පස් වරු';
		},
		meridiem : function (hours, minutes, isLower) {
			if (hours > 11) {
				return isLower ? 'ප.ව.' : 'පස් වරු';
			} else {
				return isLower ? 'පෙ.ව.' : 'පෙර වරු';
			}
		}
	});

	//! moment.js locale configuration
	//! locale : slovak (sk)
	//! author : Martin Minka : https://github.com/k2s
	//! based on work of petrbela : https://github.com/petrbela

	var sk__months = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_'),
		sk__monthsShort = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');
	function sk__plural(n) {
		return (n > 1) && (n < 5);
	}
	function sk__translate(number, withoutSuffix, key, isFuture) {
		var result = number + ' ';
		switch (key) {
			case 's':  // a few seconds / in a few seconds / a few seconds ago
				return (withoutSuffix || isFuture) ? 'pár sekúnd' : 'pár sekundami';
			case 'm':  // a minute / in a minute / a minute ago
				return withoutSuffix ? 'minúta' : (isFuture ? 'minútu' : 'minútou');
			case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
				if (withoutSuffix || isFuture) {
					return result + (sk__plural(number) ? 'minúty' : 'minút');
				} else {
					return result + 'minútami';
				}
				break;
			case 'h':  // an hour / in an hour / an hour ago
				return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
			case 'hh': // 9 hours / in 9 hours / 9 hours ago
				if (withoutSuffix || isFuture) {
					return result + (sk__plural(number) ? 'hodiny' : 'hodín');
				} else {
					return result + 'hodinami';
				}
				break;
			case 'd':  // a day / in a day / a day ago
				return (withoutSuffix || isFuture) ? 'deň' : 'dňom';
			case 'dd': // 9 days / in 9 days / 9 days ago
				if (withoutSuffix || isFuture) {
					return result + (sk__plural(number) ? 'dni' : 'dní');
				} else {
					return result + 'dňami';
				}
				break;
			case 'M':  // a month / in a month / a month ago
				return (withoutSuffix || isFuture) ? 'mesiac' : 'mesiacom';
			case 'MM': // 9 months / in 9 months / 9 months ago
				if (withoutSuffix || isFuture) {
					return result + (sk__plural(number) ? 'mesiace' : 'mesiacov');
				} else {
					return result + 'mesiacmi';
				}
				break;
			case 'y':  // a year / in a year / a year ago
				return (withoutSuffix || isFuture) ? 'rok' : 'rokom';
			case 'yy': // 9 years / in 9 years / 9 years ago
				if (withoutSuffix || isFuture) {
					return result + (sk__plural(number) ? 'roky' : 'rokov');
				} else {
					return result + 'rokmi';
				}
				break;
		}
	}

	var sk = moment__default.defineLocale('sk', {
		months : sk__months,
		monthsShort : sk__monthsShort,
		weekdays : 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
		weekdaysShort : 'ne_po_ut_st_št_pi_so'.split('_'),
		weekdaysMin : 'ne_po_ut_st_št_pi_so'.split('_'),
		longDateFormat : {
			LT: 'H:mm',
			LTS : 'H:mm:ss',
			L : 'DD.MM.YYYY',
			LL : 'D. MMMM YYYY',
			LLL : 'D. MMMM YYYY H:mm',
			LLLL : 'dddd D. MMMM YYYY H:mm'
		},
		calendar : {
			sameDay: '[dnes o] LT',
			nextDay: '[zajtra o] LT',
			nextWeek: function () {
				switch (this.day()) {
					case 0:
						return '[v nedeľu o] LT';
					case 1:
					case 2:
						return '[v] dddd [o] LT';
					case 3:
						return '[v stredu o] LT';
					case 4:
						return '[vo štvrtok o] LT';
					case 5:
						return '[v piatok o] LT';
					case 6:
						return '[v sobotu o] LT';
				}
			},
			lastDay: '[včera o] LT',
			lastWeek: function () {
				switch (this.day()) {
					case 0:
						return '[minulú nedeľu o] LT';
					case 1:
					case 2:
						return '[minulý] dddd [o] LT';
					case 3:
						return '[minulú stredu o] LT';
					case 4:
					case 5:
						return '[minulý] dddd [o] LT';
					case 6:
						return '[minulú sobotu o] LT';
				}
			},
			sameElse: 'L'
		},
		relativeTime : {
			future : 'za %s',
			past : 'pred %s',
			s : sk__translate,
			m : sk__translate,
			mm : sk__translate,
			h : sk__translate,
			hh : sk__translate,
			d : sk__translate,
			dd : sk__translate,
			M : sk__translate,
			MM : sk__translate,
			y : sk__translate,
			yy : sk__translate
		},
		ordinalParse: /\d{1,2}\./,
		ordinal : '%d.',
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 4  // The week that contains Jan 4th is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : slovenian (sl)
	//! author : Robert Sedovšek : https://github.com/sedovsek

	function sl__processRelativeTime(number, withoutSuffix, key, isFuture) {
		var result = number + ' ';
		switch (key) {
			case 's':
				return withoutSuffix || isFuture ? 'nekaj sekund' : 'nekaj sekundami';
			case 'm':
				return withoutSuffix ? 'ena minuta' : 'eno minuto';
			case 'mm':
				if (number === 1) {
					result += withoutSuffix ? 'minuta' : 'minuto';
				} else if (number === 2) {
					result += withoutSuffix || isFuture ? 'minuti' : 'minutama';
				} else if (number < 5) {
					result += withoutSuffix || isFuture ? 'minute' : 'minutami';
				} else {
					result += withoutSuffix || isFuture ? 'minut' : 'minutami';
				}
				return result;
			case 'h':
				return withoutSuffix ? 'ena ura' : 'eno uro';
			case 'hh':
				if (number === 1) {
					result += withoutSuffix ? 'ura' : 'uro';
				} else if (number === 2) {
					result += withoutSuffix || isFuture ? 'uri' : 'urama';
				} else if (number < 5) {
					result += withoutSuffix || isFuture ? 'ure' : 'urami';
				} else {
					result += withoutSuffix || isFuture ? 'ur' : 'urami';
				}
				return result;
			case 'd':
				return withoutSuffix || isFuture ? 'en dan' : 'enim dnem';
			case 'dd':
				if (number === 1) {
					result += withoutSuffix || isFuture ? 'dan' : 'dnem';
				} else if (number === 2) {
					result += withoutSuffix || isFuture ? 'dni' : 'dnevoma';
				} else {
					result += withoutSuffix || isFuture ? 'dni' : 'dnevi';
				}
				return result;
			case 'M':
				return withoutSuffix || isFuture ? 'en mesec' : 'enim mesecem';
			case 'MM':
				if (number === 1) {
					result += withoutSuffix || isFuture ? 'mesec' : 'mesecem';
				} else if (number === 2) {
					result += withoutSuffix || isFuture ? 'meseca' : 'mesecema';
				} else if (number < 5) {
					result += withoutSuffix || isFuture ? 'mesece' : 'meseci';
				} else {
					result += withoutSuffix || isFuture ? 'mesecev' : 'meseci';
				}
				return result;
			case 'y':
				return withoutSuffix || isFuture ? 'eno leto' : 'enim letom';
			case 'yy':
				if (number === 1) {
					result += withoutSuffix || isFuture ? 'leto' : 'letom';
				} else if (number === 2) {
					result += withoutSuffix || isFuture ? 'leti' : 'letoma';
				} else if (number < 5) {
					result += withoutSuffix || isFuture ? 'leta' : 'leti';
				} else {
					result += withoutSuffix || isFuture ? 'let' : 'leti';
				}
				return result;
		}
	}

	var sl = moment__default.defineLocale('sl', {
		months : 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
		monthsShort : 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
		monthsParseExact: true,
		weekdays : 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
		weekdaysShort : 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
		weekdaysMin : 'ne_po_to_sr_če_pe_so'.split('_'),
		weekdaysParseExact : true,
		longDateFormat : {
			LT : 'H:mm',
			LTS : 'H:mm:ss',
			L : 'DD. MM. YYYY',
			LL : 'D. MMMM YYYY',
			LLL : 'D. MMMM YYYY H:mm',
			LLLL : 'dddd, D. MMMM YYYY H:mm'
		},
		calendar : {
			sameDay  : '[danes ob] LT',
			nextDay  : '[jutri ob] LT',

			nextWeek : function () {
				switch (this.day()) {
					case 0:
						return '[v] [nedeljo] [ob] LT';
					case 3:
						return '[v] [sredo] [ob] LT';
					case 6:
						return '[v] [soboto] [ob] LT';
					case 1:
					case 2:
					case 4:
					case 5:
						return '[v] dddd [ob] LT';
				}
			},
			lastDay  : '[včeraj ob] LT',
			lastWeek : function () {
				switch (this.day()) {
					case 0:
						return '[prejšnjo] [nedeljo] [ob] LT';
					case 3:
						return '[prejšnjo] [sredo] [ob] LT';
					case 6:
						return '[prejšnjo] [soboto] [ob] LT';
					case 1:
					case 2:
					case 4:
					case 5:
						return '[prejšnji] dddd [ob] LT';
				}
			},
			sameElse : 'L'
		},
		relativeTime : {
			future : 'čez %s',
			past   : 'pred %s',
			s      : sl__processRelativeTime,
			m      : sl__processRelativeTime,
			mm     : sl__processRelativeTime,
			h      : sl__processRelativeTime,
			hh     : sl__processRelativeTime,
			d      : sl__processRelativeTime,
			dd     : sl__processRelativeTime,
			M      : sl__processRelativeTime,
			MM     : sl__processRelativeTime,
			y      : sl__processRelativeTime,
			yy     : sl__processRelativeTime
		},
		ordinalParse: /\d{1,2}\./,
		ordinal : '%d.',
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 7  // The week that contains Jan 1st is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : Albanian (sq)
	//! author : Flakërim Ismani : https://github.com/flakerimi
	//! author: Menelion Elensúle: https://github.com/Oire (tests)
	//! author : Oerd Cukalla : https://github.com/oerd (fixes)

	var sq = moment__default.defineLocale('sq', {
		months : 'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor'.split('_'),
		monthsShort : 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj'.split('_'),
		weekdays : 'E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë'.split('_'),
		weekdaysShort : 'Die_Hën_Mar_Mër_Enj_Pre_Sht'.split('_'),
		weekdaysMin : 'D_H_Ma_Më_E_P_Sh'.split('_'),
		weekdaysParseExact : true,
		meridiemParse: /PD|MD/,
		isPM: function (input) {
			return input.charAt(0) === 'M';
		},
		meridiem : function (hours, minutes, isLower) {
			return hours < 12 ? 'PD' : 'MD';
		},
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'DD/MM/YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY HH:mm',
			LLLL : 'dddd, D MMMM YYYY HH:mm'
		},
		calendar : {
			sameDay : '[Sot në] LT',
			nextDay : '[Nesër në] LT',
			nextWeek : 'dddd [në] LT',
			lastDay : '[Dje në] LT',
			lastWeek : 'dddd [e kaluar në] LT',
			sameElse : 'L'
		},
		relativeTime : {
			future : 'në %s',
			past : '%s më parë',
			s : 'disa sekonda',
			m : 'një minutë',
			mm : '%d minuta',
			h : 'një orë',
			hh : '%d orë',
			d : 'një ditë',
			dd : '%d ditë',
			M : 'një muaj',
			MM : '%d muaj',
			y : 'një vit',
			yy : '%d vite'
		},
		ordinalParse: /\d{1,2}\./,
		ordinal : '%d.',
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 4  // The week that contains Jan 4th is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : Serbian-cyrillic (sr-cyrl)
	//! author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j

	var sr_cyrl__translator = {
		words: { //Different grammatical cases
			m: ['један минут', 'једне минуте'],
			mm: ['минут', 'минуте', 'минута'],
			h: ['један сат', 'једног сата'],
			hh: ['сат', 'сата', 'сати'],
			dd: ['дан', 'дана', 'дана'],
			MM: ['месец', 'месеца', 'месеци'],
			yy: ['година', 'године', 'година']
		},
		correctGrammaticalCase: function (number, wordKey) {
			return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
		},
		translate: function (number, withoutSuffix, key) {
			var wordKey = sr_cyrl__translator.words[key];
			if (key.length === 1) {
				return withoutSuffix ? wordKey[0] : wordKey[1];
			} else {
				return number + ' ' + sr_cyrl__translator.correctGrammaticalCase(number, wordKey);
			}
		}
	};

	var sr_cyrl = moment__default.defineLocale('sr-cyrl', {
		months: 'јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар'.split('_'),
		monthsShort: 'јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.'.split('_'),
		monthsParseExact: true,
		weekdays: 'недеља_понедељак_уторак_среда_четвртак_петак_субота'.split('_'),
		weekdaysShort: 'нед._пон._уто._сре._чет._пет._суб.'.split('_'),
		weekdaysMin: 'не_по_ут_ср_че_пе_су'.split('_'),
		weekdaysParseExact : true,
		longDateFormat: {
			LT: 'H:mm',
			LTS : 'H:mm:ss',
			L: 'DD. MM. YYYY',
			LL: 'D. MMMM YYYY',
			LLL: 'D. MMMM YYYY H:mm',
			LLLL: 'dddd, D. MMMM YYYY H:mm'
		},
		calendar: {
			sameDay: '[данас у] LT',
			nextDay: '[сутра у] LT',
			nextWeek: function () {
				switch (this.day()) {
					case 0:
						return '[у] [недељу] [у] LT';
					case 3:
						return '[у] [среду] [у] LT';
					case 6:
						return '[у] [суботу] [у] LT';
					case 1:
					case 2:
					case 4:
					case 5:
						return '[у] dddd [у] LT';
				}
			},
			lastDay  : '[јуче у] LT',
			lastWeek : function () {
				var lastWeekDays = [
					'[прошле] [недеље] [у] LT',
					'[прошлог] [понедељка] [у] LT',
					'[прошлог] [уторка] [у] LT',
					'[прошле] [среде] [у] LT',
					'[прошлог] [четвртка] [у] LT',
					'[прошлог] [петка] [у] LT',
					'[прошле] [суботе] [у] LT'
				];
				return lastWeekDays[this.day()];
			},
			sameElse : 'L'
		},
		relativeTime : {
			future : 'за %s',
			past   : 'пре %s',
			s      : 'неколико секунди',
			m      : sr_cyrl__translator.translate,
			mm     : sr_cyrl__translator.translate,
			h      : sr_cyrl__translator.translate,
			hh     : sr_cyrl__translator.translate,
			d      : 'дан',
			dd     : sr_cyrl__translator.translate,
			M      : 'месец',
			MM     : sr_cyrl__translator.translate,
			y      : 'годину',
			yy     : sr_cyrl__translator.translate
		},
		ordinalParse: /\d{1,2}\./,
		ordinal : '%d.',
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 7  // The week that contains Jan 1st is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : Serbian-latin (sr)
	//! author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j

	var sr__translator = {
		words: { //Different grammatical cases
			m: ['jedan minut', 'jedne minute'],
			mm: ['minut', 'minute', 'minuta'],
			h: ['jedan sat', 'jednog sata'],
			hh: ['sat', 'sata', 'sati'],
			dd: ['dan', 'dana', 'dana'],
			MM: ['mesec', 'meseca', 'meseci'],
			yy: ['godina', 'godine', 'godina']
		},
		correctGrammaticalCase: function (number, wordKey) {
			return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
		},
		translate: function (number, withoutSuffix, key) {
			var wordKey = sr__translator.words[key];
			if (key.length === 1) {
				return withoutSuffix ? wordKey[0] : wordKey[1];
			} else {
				return number + ' ' + sr__translator.correctGrammaticalCase(number, wordKey);
			}
		}
	};

	var sr = moment__default.defineLocale('sr', {
		months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
		monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
		monthsParseExact: true,
		weekdays: 'nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota'.split('_'),
		weekdaysShort: 'ned._pon._uto._sre._čet._pet._sub.'.split('_'),
		weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
		weekdaysParseExact : true,
		longDateFormat: {
			LT: 'H:mm',
			LTS : 'H:mm:ss',
			L: 'DD. MM. YYYY',
			LL: 'D. MMMM YYYY',
			LLL: 'D. MMMM YYYY H:mm',
			LLLL: 'dddd, D. MMMM YYYY H:mm'
		},
		calendar: {
			sameDay: '[danas u] LT',
			nextDay: '[sutra u] LT',
			nextWeek: function () {
				switch (this.day()) {
					case 0:
						return '[u] [nedelju] [u] LT';
					case 3:
						return '[u] [sredu] [u] LT';
					case 6:
						return '[u] [subotu] [u] LT';
					case 1:
					case 2:
					case 4:
					case 5:
						return '[u] dddd [u] LT';
				}
			},
			lastDay  : '[juče u] LT',
			lastWeek : function () {
				var lastWeekDays = [
					'[prošle] [nedelje] [u] LT',
					'[prošlog] [ponedeljka] [u] LT',
					'[prošlog] [utorka] [u] LT',
					'[prošle] [srede] [u] LT',
					'[prošlog] [četvrtka] [u] LT',
					'[prošlog] [petka] [u] LT',
					'[prošle] [subote] [u] LT'
				];
				return lastWeekDays[this.day()];
			},
			sameElse : 'L'
		},
		relativeTime : {
			future : 'za %s',
			past   : 'pre %s',
			s      : 'nekoliko sekundi',
			m      : sr__translator.translate,
			mm     : sr__translator.translate,
			h      : sr__translator.translate,
			hh     : sr__translator.translate,
			d      : 'dan',
			dd     : sr__translator.translate,
			M      : 'mesec',
			MM     : sr__translator.translate,
			y      : 'godinu',
			yy     : sr__translator.translate
		},
		ordinalParse: /\d{1,2}\./,
		ordinal : '%d.',
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 7  // The week that contains Jan 1st is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : siSwati (ss)
	//! author : Nicolai Davies<mail@nicolai.io> : https://github.com/nicolaidavies


	var ss = moment__default.defineLocale('ss', {
		months : "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split('_'),
		monthsShort : 'Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo'.split('_'),
		weekdays : 'Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo'.split('_'),
		weekdaysShort : 'Lis_Umb_Lsb_Les_Lsi_Lsh_Umg'.split('_'),
		weekdaysMin : 'Li_Us_Lb_Lt_Ls_Lh_Ug'.split('_'),
		weekdaysParseExact : true,
		longDateFormat : {
			LT : 'h:mm A',
			LTS : 'h:mm:ss A',
			L : 'DD/MM/YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY h:mm A',
			LLLL : 'dddd, D MMMM YYYY h:mm A'
		},
		calendar : {
			sameDay : '[Namuhla nga] LT',
			nextDay : '[Kusasa nga] LT',
			nextWeek : 'dddd [nga] LT',
			lastDay : '[Itolo nga] LT',
			lastWeek : 'dddd [leliphelile] [nga] LT',
			sameElse : 'L'
		},
		relativeTime : {
			future : 'nga %s',
			past : 'wenteka nga %s',
			s : 'emizuzwana lomcane',
			m : 'umzuzu',
			mm : '%d emizuzu',
			h : 'lihora',
			hh : '%d emahora',
			d : 'lilanga',
			dd : '%d emalanga',
			M : 'inyanga',
			MM : '%d tinyanga',
			y : 'umnyaka',
			yy : '%d iminyaka'
		},
		meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
		meridiem : function (hours, minutes, isLower) {
			if (hours < 11) {
				return 'ekuseni';
			} else if (hours < 15) {
				return 'emini';
			} else if (hours < 19) {
				return 'entsambama';
			} else {
				return 'ebusuku';
			}
		},
		meridiemHour : function (hour, meridiem) {
			if (hour === 12) {
				hour = 0;
			}
			if (meridiem === 'ekuseni') {
				return hour;
			} else if (meridiem === 'emini') {
				return hour >= 11 ? hour : hour + 12;
			} else if (meridiem === 'entsambama' || meridiem === 'ebusuku') {
				if (hour === 0) {
					return 0;
				}
				return hour + 12;
			}
		},
		ordinalParse: /\d{1,2}/,
		ordinal : '%d',
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 4  // The week that contains Jan 4th is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : swedish (sv)
	//! author : Jens Alm : https://github.com/ulmus

	var sv = moment__default.defineLocale('sv', {
		months : 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
		monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
		weekdays : 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
		weekdaysShort : 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
		weekdaysMin : 'sö_må_ti_on_to_fr_lö'.split('_'),
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'YYYY-MM-DD',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY [kl.] HH:mm',
			LLLL : 'dddd D MMMM YYYY [kl.] HH:mm',
			lll : 'D MMM YYYY HH:mm',
			llll : 'ddd D MMM YYYY HH:mm'
		},
		calendar : {
			sameDay: '[Idag] LT',
			nextDay: '[Imorgon] LT',
			lastDay: '[Igår] LT',
			nextWeek: '[På] dddd LT',
			lastWeek: '[I] dddd[s] LT',
			sameElse: 'L'
		},
		relativeTime : {
			future : 'om %s',
			past : 'för %s sedan',
			s : 'några sekunder',
			m : 'en minut',
			mm : '%d minuter',
			h : 'en timme',
			hh : '%d timmar',
			d : 'en dag',
			dd : '%d dagar',
			M : 'en månad',
			MM : '%d månader',
			y : 'ett år',
			yy : '%d år'
		},
		ordinalParse: /\d{1,2}(e|a)/,
		ordinal : function (number) {
			var b = number % 10,
				output = (~~(number % 100 / 10) === 1) ? 'e' :
					(b === 1) ? 'a' :
						(b === 2) ? 'a' :
							(b === 3) ? 'e' : 'e';
			return number + output;
		},
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 4  // The week that contains Jan 4th is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : swahili (sw)
	//! author : Fahad Kassim : https://github.com/fadsel

	var sw = moment__default.defineLocale('sw', {
		months : 'Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba'.split('_'),
		monthsShort : 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des'.split('_'),
		weekdays : 'Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi'.split('_'),
		weekdaysShort : 'Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos'.split('_'),
		weekdaysMin : 'J2_J3_J4_J5_Al_Ij_J1'.split('_'),
		weekdaysParseExact : true,
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'DD.MM.YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY HH:mm',
			LLLL : 'dddd, D MMMM YYYY HH:mm'
		},
		calendar : {
			sameDay : '[leo saa] LT',
			nextDay : '[kesho saa] LT',
			nextWeek : '[wiki ijayo] dddd [saat] LT',
			lastDay : '[jana] LT',
			lastWeek : '[wiki iliyopita] dddd [saat] LT',
			sameElse : 'L'
		},
		relativeTime : {
			future : '%s baadaye',
			past : 'tokea %s',
			s : 'hivi punde',
			m : 'dakika moja',
			mm : 'dakika %d',
			h : 'saa limoja',
			hh : 'masaa %d',
			d : 'siku moja',
			dd : 'masiku %d',
			M : 'mwezi mmoja',
			MM : 'miezi %d',
			y : 'mwaka mmoja',
			yy : 'miaka %d'
		},
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 7  // The week that contains Jan 1st is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : tamil (ta)
	//! author : Arjunkumar Krishnamoorthy : https://github.com/tk120404

	var ta__symbolMap = {
		'1': '௧',
		'2': '௨',
		'3': '௩',
		'4': '௪',
		'5': '௫',
		'6': '௬',
		'7': '௭',
		'8': '௮',
		'9': '௯',
		'0': '௦'
	}, ta__numberMap = {
		'௧': '1',
		'௨': '2',
		'௩': '3',
		'௪': '4',
		'௫': '5',
		'௬': '6',
		'௭': '7',
		'௮': '8',
		'௯': '9',
		'௦': '0'
	};

	var ta = moment__default.defineLocale('ta', {
		months : 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
		monthsShort : 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
		weekdays : 'ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை'.split('_'),
		weekdaysShort : 'ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி'.split('_'),
		weekdaysMin : 'ஞா_தி_செ_பு_வி_வெ_ச'.split('_'),
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'DD/MM/YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY, HH:mm',
			LLLL : 'dddd, D MMMM YYYY, HH:mm'
		},
		calendar : {
			sameDay : '[இன்று] LT',
			nextDay : '[நாளை] LT',
			nextWeek : 'dddd, LT',
			lastDay : '[நேற்று] LT',
			lastWeek : '[கடந்த வாரம்] dddd, LT',
			sameElse : 'L'
		},
		relativeTime : {
			future : '%s இல்',
			past : '%s முன்',
			s : 'ஒரு சில விநாடிகள்',
			m : 'ஒரு நிமிடம்',
			mm : '%d நிமிடங்கள்',
			h : 'ஒரு மணி நேரம்',
			hh : '%d மணி நேரம்',
			d : 'ஒரு நாள்',
			dd : '%d நாட்கள்',
			M : 'ஒரு மாதம்',
			MM : '%d மாதங்கள்',
			y : 'ஒரு வருடம்',
			yy : '%d ஆண்டுகள்'
		},
		ordinalParse: /\d{1,2}வது/,
		ordinal : function (number) {
			return number + 'வது';
		},
		preparse: function (string) {
			return string.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (match) {
				return ta__numberMap[match];
			});
		},
		postformat: function (string) {
			return string.replace(/\d/g, function (match) {
				return ta__symbolMap[match];
			});
		},
		// refer http://ta.wikipedia.org/s/1er1
		meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
		meridiem : function (hour, minute, isLower) {
			if (hour < 2) {
				return ' யாமம்';
			} else if (hour < 6) {
				return ' வைகறை';  // வைகறை
			} else if (hour < 10) {
				return ' காலை'; // காலை
			} else if (hour < 14) {
				return ' நண்பகல்'; // நண்பகல்
			} else if (hour < 18) {
				return ' எற்பாடு'; // எற்பாடு
			} else if (hour < 22) {
				return ' மாலை'; // மாலை
			} else {
				return ' யாமம்';
			}
		},
		meridiemHour : function (hour, meridiem) {
			if (hour === 12) {
				hour = 0;
			}
			if (meridiem === 'யாமம்') {
				return hour < 2 ? hour : hour + 12;
			} else if (meridiem === 'வைகறை' || meridiem === 'காலை') {
				return hour;
			} else if (meridiem === 'நண்பகல்') {
				return hour >= 10 ? hour : hour + 12;
			} else {
				return hour + 12;
			}
		},
		week : {
			dow : 0, // Sunday is the first day of the week.
			doy : 6  // The week that contains Jan 1st is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : telugu (te)
	//! author : Krishna Chaitanya Thota : https://github.com/kcthota

	var te = moment__default.defineLocale('te', {
		months : 'జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్'.split('_'),
		monthsShort : 'జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.'.split('_'),
		monthsParseExact : true,
		weekdays : 'ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం'.split('_'),
		weekdaysShort : 'ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని'.split('_'),
		weekdaysMin : 'ఆ_సో_మం_బు_గు_శు_శ'.split('_'),
		longDateFormat : {
			LT : 'A h:mm',
			LTS : 'A h:mm:ss',
			L : 'DD/MM/YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY, A h:mm',
			LLLL : 'dddd, D MMMM YYYY, A h:mm'
		},
		calendar : {
			sameDay : '[నేడు] LT',
			nextDay : '[రేపు] LT',
			nextWeek : 'dddd, LT',
			lastDay : '[నిన్న] LT',
			lastWeek : '[గత] dddd, LT',
			sameElse : 'L'
		},
		relativeTime : {
			future : '%s లో',
			past : '%s క్రితం',
			s : 'కొన్ని క్షణాలు',
			m : 'ఒక నిమిషం',
			mm : '%d నిమిషాలు',
			h : 'ఒక గంట',
			hh : '%d గంటలు',
			d : 'ఒక రోజు',
			dd : '%d రోజులు',
			M : 'ఒక నెల',
			MM : '%d నెలలు',
			y : 'ఒక సంవత్సరం',
			yy : '%d సంవత్సరాలు'
		},
		ordinalParse : /\d{1,2}వ/,
		ordinal : '%dవ',
		meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
		meridiemHour : function (hour, meridiem) {
			if (hour === 12) {
				hour = 0;
			}
			if (meridiem === 'రాత్రి') {
				return hour < 4 ? hour : hour + 12;
			} else if (meridiem === 'ఉదయం') {
				return hour;
			} else if (meridiem === 'మధ్యాహ్నం') {
				return hour >= 10 ? hour : hour + 12;
			} else if (meridiem === 'సాయంత్రం') {
				return hour + 12;
			}
		},
		meridiem : function (hour, minute, isLower) {
			if (hour < 4) {
				return 'రాత్రి';
			} else if (hour < 10) {
				return 'ఉదయం';
			} else if (hour < 17) {
				return 'మధ్యాహ్నం';
			} else if (hour < 20) {
				return 'సాయంత్రం';
			} else {
				return 'రాత్రి';
			}
		},
		week : {
			dow : 0, // Sunday is the first day of the week.
			doy : 6  // The week that contains Jan 1st is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : thai (th)
	//! author : Kridsada Thanabulpong : https://github.com/sirn

	var th = moment__default.defineLocale('th', {
		months : 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
		monthsShort : 'มกรา_กุมภา_มีนา_เมษา_พฤษภา_มิถุนา_กรกฎา_สิงหา_กันยา_ตุลา_พฤศจิกา_ธันวา'.split('_'),
		monthsParseExact: true,
		weekdays : 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
		weekdaysShort : 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'), // yes, three characters difference
		weekdaysMin : 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
		weekdaysParseExact : true,
		longDateFormat : {
			LT : 'H นาฬิกา m นาที',
			LTS : 'H นาฬิกา m นาที s วินาที',
			L : 'YYYY/MM/DD',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY เวลา H นาฬิกา m นาที',
			LLLL : 'วันddddที่ D MMMM YYYY เวลา H นาฬิกา m นาที'
		},
		meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
		isPM: function (input) {
			return input === 'หลังเที่ยง';
		},
		meridiem : function (hour, minute, isLower) {
			if (hour < 12) {
				return 'ก่อนเที่ยง';
			} else {
				return 'หลังเที่ยง';
			}
		},
		calendar : {
			sameDay : '[วันนี้ เวลา] LT',
			nextDay : '[พรุ่งนี้ เวลา] LT',
			nextWeek : 'dddd[หน้า เวลา] LT',
			lastDay : '[เมื่อวานนี้ เวลา] LT',
			lastWeek : '[วัน]dddd[ที่แล้ว เวลา] LT',
			sameElse : 'L'
		},
		relativeTime : {
			future : 'อีก %s',
			past : '%sที่แล้ว',
			s : 'ไม่กี่วินาที',
			m : '1 นาที',
			mm : '%d นาที',
			h : '1 ชั่วโมง',
			hh : '%d ชั่วโมง',
			d : '1 วัน',
			dd : '%d วัน',
			M : '1 เดือน',
			MM : '%d เดือน',
			y : '1 ปี',
			yy : '%d ปี'
		}
	});

	//! moment.js locale configuration
	//! locale : Tagalog/Filipino (tl-ph)
	//! author : Dan Hagman

	var tl_ph = moment__default.defineLocale('tl-ph', {
		months : 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split('_'),
		monthsShort : 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
		weekdays : 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split('_'),
		weekdaysShort : 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
		weekdaysMin : 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'MM/D/YYYY',
			LL : 'MMMM D, YYYY',
			LLL : 'MMMM D, YYYY HH:mm',
			LLLL : 'dddd, MMMM DD, YYYY HH:mm'
		},
		calendar : {
			sameDay: '[Ngayon sa] LT',
			nextDay: '[Bukas sa] LT',
			nextWeek: 'dddd [sa] LT',
			lastDay: '[Kahapon sa] LT',
			lastWeek: 'dddd [huling linggo] LT',
			sameElse: 'L'
		},
		relativeTime : {
			future : 'sa loob ng %s',
			past : '%s ang nakalipas',
			s : 'ilang segundo',
			m : 'isang minuto',
			mm : '%d minuto',
			h : 'isang oras',
			hh : '%d oras',
			d : 'isang araw',
			dd : '%d araw',
			M : 'isang buwan',
			MM : '%d buwan',
			y : 'isang taon',
			yy : '%d taon'
		},
		ordinalParse: /\d{1,2}/,
		ordinal : function (number) {
			return number;
		},
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 4  // The week that contains Jan 4th is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : Klingon (tlh)
	//! author : Dominika Kruk : https://github.com/amaranthrose

	var numbersNouns = 'pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut'.split('_');

	function translateFuture(output) {
		var time = output;
		time = (output.indexOf('jaj') !== -1) ?
		time.slice(0, -3) + 'leS' :
			(output.indexOf('jar') !== -1) ?
			time.slice(0, -3) + 'waQ' :
				(output.indexOf('DIS') !== -1) ?
				time.slice(0, -3) + 'nem' :
				time + ' pIq';
		return time;
	}

	function translatePast(output) {
		var time = output;
		time = (output.indexOf('jaj') !== -1) ?
		time.slice(0, -3) + 'Hu’' :
			(output.indexOf('jar') !== -1) ?
			time.slice(0, -3) + 'wen' :
				(output.indexOf('DIS') !== -1) ?
				time.slice(0, -3) + 'ben' :
				time + ' ret';
		return time;
	}

	function tlh__translate(number, withoutSuffix, string, isFuture) {
		var numberNoun = numberAsNoun(number);
		switch (string) {
			case 'mm':
				return numberNoun + ' tup';
			case 'hh':
				return numberNoun + ' rep';
			case 'dd':
				return numberNoun + ' jaj';
			case 'MM':
				return numberNoun + ' jar';
			case 'yy':
				return numberNoun + ' DIS';
		}
	}

	function numberAsNoun(number) {
		var hundred = Math.floor((number % 1000) / 100),
			ten = Math.floor((number % 100) / 10),
			one = number % 10,
			word = '';
		if (hundred > 0) {
			word += numbersNouns[hundred] + 'vatlh';
		}
		if (ten > 0) {
			word += ((word !== '') ? ' ' : '') + numbersNouns[ten] + 'maH';
		}
		if (one > 0) {
			word += ((word !== '') ? ' ' : '') + numbersNouns[one];
		}
		return (word === '') ? 'pagh' : word;
	}

	var tlh = moment__default.defineLocale('tlh', {
		months : 'tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’'.split('_'),
		monthsShort : 'jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’'.split('_'),
		monthsParseExact : true,
		weekdays : 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
		weekdaysShort : 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
		weekdaysMin : 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'DD.MM.YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY HH:mm',
			LLLL : 'dddd, D MMMM YYYY HH:mm'
		},
		calendar : {
			sameDay: '[DaHjaj] LT',
			nextDay: '[wa’leS] LT',
			nextWeek: 'LLL',
			lastDay: '[wa’Hu’] LT',
			lastWeek: 'LLL',
			sameElse: 'L'
		},
		relativeTime : {
			future : translateFuture,
			past : translatePast,
			s : 'puS lup',
			m : 'wa’ tup',
			mm : tlh__translate,
			h : 'wa’ rep',
			hh : tlh__translate,
			d : 'wa’ jaj',
			dd : tlh__translate,
			M : 'wa’ jar',
			MM : tlh__translate,
			y : 'wa’ DIS',
			yy : tlh__translate
		},
		ordinalParse: /\d{1,2}\./,
		ordinal : '%d.',
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 4  // The week that contains Jan 4th is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : turkish (tr)
	//! authors : Erhan Gundogan : https://github.com/erhangundogan,
	//!           Burak Yiğit Kaya: https://github.com/BYK

	var tr__suffixes = {
		1: '\'inci',
		5: '\'inci',
		8: '\'inci',
		70: '\'inci',
		80: '\'inci',
		2: '\'nci',
		7: '\'nci',
		20: '\'nci',
		50: '\'nci',
		3: '\'üncü',
		4: '\'üncü',
		100: '\'üncü',
		6: '\'ncı',
		9: '\'uncu',
		10: '\'uncu',
		30: '\'uncu',
		60: '\'ıncı',
		90: '\'ıncı'
	};

	var tr = moment__default.defineLocale('tr', {
		months : 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
		monthsShort : 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
		weekdays : 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
		weekdaysShort : 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
		weekdaysMin : 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'DD.MM.YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY HH:mm',
			LLLL : 'dddd, D MMMM YYYY HH:mm'
		},
		calendar : {
			sameDay : '[bugün saat] LT',
			nextDay : '[yarın saat] LT',
			nextWeek : '[haftaya] dddd [saat] LT',
			lastDay : '[dün] LT',
			lastWeek : '[geçen hafta] dddd [saat] LT',
			sameElse : 'L'
		},
		relativeTime : {
			future : '%s sonra',
			past : '%s önce',
			s : 'birkaç saniye',
			m : 'bir dakika',
			mm : '%d dakika',
			h : 'bir saat',
			hh : '%d saat',
			d : 'bir gün',
			dd : '%d gün',
			M : 'bir ay',
			MM : '%d ay',
			y : 'bir yıl',
			yy : '%d yıl'
		},
		ordinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
		ordinal : function (number) {
			if (number === 0) {  // special case for zero
				return number + '\'ıncı';
			}
			var a = number % 10,
				b = number % 100 - a,
				c = number >= 100 ? 100 : null;
			return number + (tr__suffixes[a] || tr__suffixes[b] || tr__suffixes[c]);
		},
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 7  // The week that contains Jan 1st is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : talossan (tzl)
	//! author : Robin van der Vliet : https://github.com/robin0van0der0v with the help of Iustì Canun


	// After the year there should be a slash and the amount of years since December 26, 1979 in Roman numerals.
	// This is currently too difficult (maybe even impossible) to add.
	var tzl = moment__default.defineLocale('tzl', {
		months : 'Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar'.split('_'),
		monthsShort : 'Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec'.split('_'),
		weekdays : 'Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi'.split('_'),
		weekdaysShort : 'Súl_Lún_Mai_Már_Xhú_Vié_Sát'.split('_'),
		weekdaysMin : 'Sú_Lú_Ma_Má_Xh_Vi_Sá'.split('_'),
		longDateFormat : {
			LT : 'HH.mm',
			LTS : 'HH.mm.ss',
			L : 'DD.MM.YYYY',
			LL : 'D. MMMM [dallas] YYYY',
			LLL : 'D. MMMM [dallas] YYYY HH.mm',
			LLLL : 'dddd, [li] D. MMMM [dallas] YYYY HH.mm'
		},
		meridiemParse: /d\'o|d\'a/i,
		isPM : function (input) {
			return 'd\'o' === input.toLowerCase();
		},
		meridiem : function (hours, minutes, isLower) {
			if (hours > 11) {
				return isLower ? 'd\'o' : 'D\'O';
			} else {
				return isLower ? 'd\'a' : 'D\'A';
			}
		},
		calendar : {
			sameDay : '[oxhi à] LT',
			nextDay : '[demà à] LT',
			nextWeek : 'dddd [à] LT',
			lastDay : '[ieiri à] LT',
			lastWeek : '[sür el] dddd [lasteu à] LT',
			sameElse : 'L'
		},
		relativeTime : {
			future : 'osprei %s',
			past : 'ja%s',
			s : tzl__processRelativeTime,
			m : tzl__processRelativeTime,
			mm : tzl__processRelativeTime,
			h : tzl__processRelativeTime,
			hh : tzl__processRelativeTime,
			d : tzl__processRelativeTime,
			dd : tzl__processRelativeTime,
			M : tzl__processRelativeTime,
			MM : tzl__processRelativeTime,
			y : tzl__processRelativeTime,
			yy : tzl__processRelativeTime
		},
		ordinalParse: /\d{1,2}\./,
		ordinal : '%d.',
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 4  // The week that contains Jan 4th is the first week of the year.
		}
	});

	function tzl__processRelativeTime(number, withoutSuffix, key, isFuture) {
		var format = {
			's': ['viensas secunds', '\'iensas secunds'],
			'm': ['\'n míut', '\'iens míut'],
			'mm': [number + ' míuts', '' + number + ' míuts'],
			'h': ['\'n þora', '\'iensa þora'],
			'hh': [number + ' þoras', '' + number + ' þoras'],
			'd': ['\'n ziua', '\'iensa ziua'],
			'dd': [number + ' ziuas', '' + number + ' ziuas'],
			'M': ['\'n mes', '\'iens mes'],
			'MM': [number + ' mesen', '' + number + ' mesen'],
			'y': ['\'n ar', '\'iens ar'],
			'yy': [number + ' ars', '' + number + ' ars']
		};
		return isFuture ? format[key][0] : (withoutSuffix ? format[key][0] : format[key][1]);
	}

	//! moment.js locale configuration
	//! locale : Morocco Central Atlas Tamaziɣt in Latin (tzm-latn)
	//! author : Abdel Said : https://github.com/abdelsaid

	var tzm_latn = moment__default.defineLocale('tzm-latn', {
		months : 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
		monthsShort : 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
		weekdays : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
		weekdaysShort : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
		weekdaysMin : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'DD/MM/YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY HH:mm',
			LLLL : 'dddd D MMMM YYYY HH:mm'
		},
		calendar : {
			sameDay: '[asdkh g] LT',
			nextDay: '[aska g] LT',
			nextWeek: 'dddd [g] LT',
			lastDay: '[assant g] LT',
			lastWeek: 'dddd [g] LT',
			sameElse: 'L'
		},
		relativeTime : {
			future : 'dadkh s yan %s',
			past : 'yan %s',
			s : 'imik',
			m : 'minuḍ',
			mm : '%d minuḍ',
			h : 'saɛa',
			hh : '%d tassaɛin',
			d : 'ass',
			dd : '%d ossan',
			M : 'ayowr',
			MM : '%d iyyirn',
			y : 'asgas',
			yy : '%d isgasn'
		},
		week : {
			dow : 6, // Saturday is the first day of the week.
			doy : 12  // The week that contains Jan 1st is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : Morocco Central Atlas Tamaziɣt (tzm)
	//! author : Abdel Said : https://github.com/abdelsaid

	var tzm = moment__default.defineLocale('tzm', {
		months : 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
		monthsShort : 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
		weekdays : 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
		weekdaysShort : 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
		weekdaysMin : 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
		longDateFormat : {
			LT : 'HH:mm',
			LTS: 'HH:mm:ss',
			L : 'DD/MM/YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY HH:mm',
			LLLL : 'dddd D MMMM YYYY HH:mm'
		},
		calendar : {
			sameDay: '[ⴰⵙⴷⵅ ⴴ] LT',
			nextDay: '[ⴰⵙⴽⴰ ⴴ] LT',
			nextWeek: 'dddd [ⴴ] LT',
			lastDay: '[ⴰⵚⴰⵏⵜ ⴴ] LT',
			lastWeek: 'dddd [ⴴ] LT',
			sameElse: 'L'
		},
		relativeTime : {
			future : 'ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s',
			past : 'ⵢⴰⵏ %s',
			s : 'ⵉⵎⵉⴽ',
			m : 'ⵎⵉⵏⵓⴺ',
			mm : '%d ⵎⵉⵏⵓⴺ',
			h : 'ⵙⴰⵄⴰ',
			hh : '%d ⵜⴰⵙⵙⴰⵄⵉⵏ',
			d : 'ⴰⵙⵙ',
			dd : '%d oⵙⵙⴰⵏ',
			M : 'ⴰⵢoⵓⵔ',
			MM : '%d ⵉⵢⵢⵉⵔⵏ',
			y : 'ⴰⵙⴳⴰⵙ',
			yy : '%d ⵉⵙⴳⴰⵙⵏ'
		},
		week : {
			dow : 6, // Saturday is the first day of the week.
			doy : 12  // The week that contains Jan 1st is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : ukrainian (uk)
	//! author : zemlanin : https://github.com/zemlanin
	//! Author : Menelion Elensúle : https://github.com/Oire

	function uk__plural(word, num) {
		var forms = word.split('_');
		return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
	}
	function uk__relativeTimeWithPlural(number, withoutSuffix, key) {
		var format = {
			'mm': withoutSuffix ? 'хвилина_хвилини_хвилин' : 'хвилину_хвилини_хвилин',
			'hh': withoutSuffix ? 'година_години_годин' : 'годину_години_годин',
			'dd': 'день_дні_днів',
			'MM': 'місяць_місяці_місяців',
			'yy': 'рік_роки_років'
		};
		if (key === 'm') {
			return withoutSuffix ? 'хвилина' : 'хвилину';
		}
		else if (key === 'h') {
			return withoutSuffix ? 'година' : 'годину';
		}
		else {
			return number + ' ' + uk__plural(format[key], +number);
		}
	}
	function weekdaysCaseReplace(m, format) {
		var weekdays = {
				'nominative': 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split('_'),
				'accusative': 'неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу'.split('_'),
				'genitive': 'неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи'.split('_')
			},
			nounCase = (/(\[[ВвУу]\]) ?dddd/).test(format) ?
				'accusative' :
				((/\[?(?:минулої|наступної)? ?\] ?dddd/).test(format) ?
					'genitive' :
					'nominative');
		return weekdays[nounCase][m.day()];
	}
	function processHoursFunction(str) {
		return function () {
			return str + 'о' + (this.hours() === 11 ? 'б' : '') + '] LT';
		};
	}

	var uk = moment__default.defineLocale('uk', {
		months : {
			'format': 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split('_'),
			'standalone': 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_')
		},
		monthsShort : 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_'),
		weekdays : weekdaysCaseReplace,
		weekdaysShort : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
		weekdaysMin : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'DD.MM.YYYY',
			LL : 'D MMMM YYYY р.',
			LLL : 'D MMMM YYYY р., HH:mm',
			LLLL : 'dddd, D MMMM YYYY р., HH:mm'
		},
		calendar : {
			sameDay: processHoursFunction('[Сьогодні '),
			nextDay: processHoursFunction('[Завтра '),
			lastDay: processHoursFunction('[Вчора '),
			nextWeek: processHoursFunction('[У] dddd ['),
			lastWeek: function () {
				switch (this.day()) {
					case 0:
					case 3:
					case 5:
					case 6:
						return processHoursFunction('[Минулої] dddd [').call(this);
					case 1:
					case 2:
					case 4:
						return processHoursFunction('[Минулого] dddd [').call(this);
				}
			},
			sameElse: 'L'
		},
		relativeTime : {
			future : 'за %s',
			past : '%s тому',
			s : 'декілька секунд',
			m : uk__relativeTimeWithPlural,
			mm : uk__relativeTimeWithPlural,
			h : 'годину',
			hh : uk__relativeTimeWithPlural,
			d : 'день',
			dd : uk__relativeTimeWithPlural,
			M : 'місяць',
			MM : uk__relativeTimeWithPlural,
			y : 'рік',
			yy : uk__relativeTimeWithPlural
		},
		// M. E.: those two are virtually unused but a user might want to implement them for his/her website for some reason
		meridiemParse: /ночі|ранку|дня|вечора/,
		isPM: function (input) {
			return /^(дня|вечора)$/.test(input);
		},
		meridiem : function (hour, minute, isLower) {
			if (hour < 4) {
				return 'ночі';
			} else if (hour < 12) {
				return 'ранку';
			} else if (hour < 17) {
				return 'дня';
			} else {
				return 'вечора';
			}
		},
		ordinalParse: /\d{1,2}-(й|го)/,
		ordinal: function (number, period) {
			switch (period) {
				case 'M':
				case 'd':
				case 'DDD':
				case 'w':
				case 'W':
					return number + '-й';
				case 'D':
					return number + '-го';
				default:
					return number;
			}
		},
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 7  // The week that contains Jan 1st is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : uzbek (uz)
	//! author : Sardor Muminov : https://github.com/muminoff

	var uz = moment__default.defineLocale('uz', {
		months : 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split('_'),
		monthsShort : 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
		weekdays : 'Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба'.split('_'),
		weekdaysShort : 'Якш_Душ_Сеш_Чор_Пай_Жум_Шан'.split('_'),
		weekdaysMin : 'Як_Ду_Се_Чо_Па_Жу_Ша'.split('_'),
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'DD/MM/YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY HH:mm',
			LLLL : 'D MMMM YYYY, dddd HH:mm'
		},
		calendar : {
			sameDay : '[Бугун соат] LT [да]',
			nextDay : '[Эртага] LT [да]',
			nextWeek : 'dddd [куни соат] LT [да]',
			lastDay : '[Кеча соат] LT [да]',
			lastWeek : '[Утган] dddd [куни соат] LT [да]',
			sameElse : 'L'
		},
		relativeTime : {
			future : 'Якин %s ичида',
			past : 'Бир неча %s олдин',
			s : 'фурсат',
			m : 'бир дакика',
			mm : '%d дакика',
			h : 'бир соат',
			hh : '%d соат',
			d : 'бир кун',
			dd : '%d кун',
			M : 'бир ой',
			MM : '%d ой',
			y : 'бир йил',
			yy : '%d йил'
		},
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 7  // The week that contains Jan 4th is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : vietnamese (vi)
	//! author : Bang Nguyen : https://github.com/bangnk

	var vi = moment__default.defineLocale('vi', {
		months : 'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'.split('_'),
		monthsShort : 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split('_'),
		monthsParseExact : true,
		weekdays : 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy'.split('_'),
		weekdaysShort : 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
		weekdaysMin : 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
		weekdaysParseExact : true,
		meridiemParse: /sa|ch/i,
		isPM : function (input) {
			return /^ch$/i.test(input);
		},
		meridiem : function (hours, minutes, isLower) {
			if (hours < 12) {
				return isLower ? 'sa' : 'SA';
			} else {
				return isLower ? 'ch' : 'CH';
			}
		},
		longDateFormat : {
			LT : 'HH:mm',
			LTS : 'HH:mm:ss',
			L : 'DD/MM/YYYY',
			LL : 'D MMMM [năm] YYYY',
			LLL : 'D MMMM [năm] YYYY HH:mm',
			LLLL : 'dddd, D MMMM [năm] YYYY HH:mm',
			l : 'DD/M/YYYY',
			ll : 'D MMM YYYY',
			lll : 'D MMM YYYY HH:mm',
			llll : 'ddd, D MMM YYYY HH:mm'
		},
		calendar : {
			sameDay: '[Hôm nay lúc] LT',
			nextDay: '[Ngày mai lúc] LT',
			nextWeek: 'dddd [tuần tới lúc] LT',
			lastDay: '[Hôm qua lúc] LT',
			lastWeek: 'dddd [tuần rồi lúc] LT',
			sameElse: 'L'
		},
		relativeTime : {
			future : '%s tới',
			past : '%s trước',
			s : 'vài giây',
			m : 'một phút',
			mm : '%d phút',
			h : 'một giờ',
			hh : '%d giờ',
			d : 'một ngày',
			dd : '%d ngày',
			M : 'một tháng',
			MM : '%d tháng',
			y : 'một năm',
			yy : '%d năm'
		},
		ordinalParse: /\d{1,2}/,
		ordinal : function (number) {
			return number;
		},
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 4  // The week that contains Jan 4th is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : pseudo (x-pseudo)
	//! author : Andrew Hood : https://github.com/andrewhood125

	var x_pseudo = moment__default.defineLocale('x-pseudo', {
		months : 'J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér'.split('_'),
		monthsShort : 'J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc'.split('_'),
		monthsParseExact : true,
		weekdays : 'S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý'.split('_'),
		weekdaysShort : 'S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát'.split('_'),
		weekdaysMin : 'S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá'.split('_'),
		weekdaysParseExact : true,
		longDateFormat : {
			LT : 'HH:mm',
			L : 'DD/MM/YYYY',
			LL : 'D MMMM YYYY',
			LLL : 'D MMMM YYYY HH:mm',
			LLLL : 'dddd, D MMMM YYYY HH:mm'
		},
		calendar : {
			sameDay : '[T~ódá~ý át] LT',
			nextDay : '[T~ómó~rró~w át] LT',
			nextWeek : 'dddd [át] LT',
			lastDay : '[Ý~ést~érdá~ý át] LT',
			lastWeek : '[L~ást] dddd [át] LT',
			sameElse : 'L'
		},
		relativeTime : {
			future : 'í~ñ %s',
			past : '%s á~gó',
			s : 'á ~féw ~sécó~ñds',
			m : 'á ~míñ~úté',
			mm : '%d m~íñú~tés',
			h : 'á~ñ hó~úr',
			hh : '%d h~óúrs',
			d : 'á ~dáý',
			dd : '%d d~áýs',
			M : 'á ~móñ~th',
			MM : '%d m~óñt~hs',
			y : 'á ~ýéár',
			yy : '%d ý~éárs'
		},
		ordinalParse: /\d{1,2}(th|st|nd|rd)/,
		ordinal : function (number) {
			var b = number % 10,
				output = (~~(number % 100 / 10) === 1) ? 'th' :
					(b === 1) ? 'st' :
						(b === 2) ? 'nd' :
							(b === 3) ? 'rd' : 'th';
			return number + output;
		},
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 4  // The week that contains Jan 4th is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : chinese (zh-cn)
	//! author : suupic : https://github.com/suupic
	//! author : Zeno Zeng : https://github.com/zenozeng

	var zh_cn = moment__default.defineLocale('zh-cn', {
		months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
		monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
		weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
		weekdaysShort : '周日_周一_周二_周三_周四_周五_周六'.split('_'),
		weekdaysMin : '日_一_二_三_四_五_六'.split('_'),
		longDateFormat : {
			LT : 'Ah点mm分',
			LTS : 'Ah点m分s秒',
			L : 'YYYY-MM-DD',
			LL : 'YYYY年MMMD日',
			LLL : 'YYYY年MMMD日Ah点mm分',
			LLLL : 'YYYY年MMMD日ddddAh点mm分',
			l : 'YYYY-MM-DD',
			ll : 'YYYY年MMMD日',
			lll : 'YYYY年MMMD日Ah点mm分',
			llll : 'YYYY年MMMD日ddddAh点mm分'
		},
		meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
		meridiemHour: function (hour, meridiem) {
			if (hour === 12) {
				hour = 0;
			}
			if (meridiem === '凌晨' || meridiem === '早上' ||
				meridiem === '上午') {
				return hour;
			} else if (meridiem === '下午' || meridiem === '晚上') {
				return hour + 12;
			} else {
				// '中午'
				return hour >= 11 ? hour : hour + 12;
			}
		},
		meridiem : function (hour, minute, isLower) {
			var hm = hour * 100 + minute;
			if (hm < 600) {
				return '凌晨';
			} else if (hm < 900) {
				return '早上';
			} else if (hm < 1130) {
				return '上午';
			} else if (hm < 1230) {
				return '中午';
			} else if (hm < 1800) {
				return '下午';
			} else {
				return '晚上';
			}
		},
		calendar : {
			sameDay : function () {
				return this.minutes() === 0 ? '[今天]Ah[点整]' : '[今天]LT';
			},
			nextDay : function () {
				return this.minutes() === 0 ? '[明天]Ah[点整]' : '[明天]LT';
			},
			lastDay : function () {
				return this.minutes() === 0 ? '[昨天]Ah[点整]' : '[昨天]LT';
			},
			nextWeek : function () {
				var startOfWeek, prefix;
				startOfWeek = moment__default().startOf('week');
				prefix = this.diff(startOfWeek, 'days') >= 7 ? '[下]' : '[本]';
				return this.minutes() === 0 ? prefix + 'dddAh点整' : prefix + 'dddAh点mm';
			},
			lastWeek : function () {
				var startOfWeek, prefix;
				startOfWeek = moment__default().startOf('week');
				prefix = this.unix() < startOfWeek.unix()  ? '[上]' : '[本]';
				return this.minutes() === 0 ? prefix + 'dddAh点整' : prefix + 'dddAh点mm';
			},
			sameElse : 'LL'
		},
		ordinalParse: /\d{1,2}(日|月|周)/,
		ordinal : function (number, period) {
			switch (period) {
				case 'd':
				case 'D':
				case 'DDD':
					return number + '日';
				case 'M':
					return number + '月';
				case 'w':
				case 'W':
					return number + '周';
				default:
					return number;
			}
		},
		relativeTime : {
			future : '%s内',
			past : '%s前',
			s : '几秒',
			m : '1 分钟',
			mm : '%d 分钟',
			h : '1 小时',
			hh : '%d 小时',
			d : '1 天',
			dd : '%d 天',
			M : '1 个月',
			MM : '%d 个月',
			y : '1 年',
			yy : '%d 年'
		},
		week : {
			// GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
			dow : 1, // Monday is the first day of the week.
			doy : 4  // The week that contains Jan 4th is the first week of the year.
		}
	});

	//! moment.js locale configuration
	//! locale : traditional chinese (zh-tw)
	//! author : Ben : https://github.com/ben-lin

	var zh_tw = moment__default.defineLocale('zh-tw', {
		months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
		monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
		weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
		weekdaysShort : '週日_週一_週二_週三_週四_週五_週六'.split('_'),
		weekdaysMin : '日_一_二_三_四_五_六'.split('_'),
		longDateFormat : {
			LT : 'Ah點mm分',
			LTS : 'Ah點m分s秒',
			L : 'YYYY年MMMD日',
			LL : 'YYYY年MMMD日',
			LLL : 'YYYY年MMMD日Ah點mm分',
			LLLL : 'YYYY年MMMD日ddddAh點mm分',
			l : 'YYYY年MMMD日',
			ll : 'YYYY年MMMD日',
			lll : 'YYYY年MMMD日Ah點mm分',
			llll : 'YYYY年MMMD日ddddAh點mm分'
		},
		meridiemParse: /早上|上午|中午|下午|晚上/,
		meridiemHour : function (hour, meridiem) {
			if (hour === 12) {
				hour = 0;
			}
			if (meridiem === '早上' || meridiem === '上午') {
				return hour;
			} else if (meridiem === '中午') {
				return hour >= 11 ? hour : hour + 12;
			} else if (meridiem === '下午' || meridiem === '晚上') {
				return hour + 12;
			}
		},
		meridiem : function (hour, minute, isLower) {
			var hm = hour * 100 + minute;
			if (hm < 900) {
				return '早上';
			} else if (hm < 1130) {
				return '上午';
			} else if (hm < 1230) {
				return '中午';
			} else if (hm < 1800) {
				return '下午';
			} else {
				return '晚上';
			}
		},
		calendar : {
			sameDay : '[今天]LT',
			nextDay : '[明天]LT',
			nextWeek : '[下]ddddLT',
			lastDay : '[昨天]LT',
			lastWeek : '[上]ddddLT',
			sameElse : 'L'
		},
		ordinalParse: /\d{1,2}(日|月|週)/,
		ordinal : function (number, period) {
			switch (period) {
				case 'd' :
				case 'D' :
				case 'DDD' :
					return number + '日';
				case 'M' :
					return number + '月';
				case 'w' :
				case 'W' :
					return number + '週';
				default :
					return number;
			}
		},
		relativeTime : {
			future : '%s內',
			past : '%s前',
			s : '幾秒',
			m : '1分鐘',
			mm : '%d分鐘',
			h : '1小時',
			hh : '%d小時',
			d : '1天',
			dd : '%d天',
			M : '1個月',
			MM : '%d個月',
			y : '1年',
			yy : '%d年'
		}
	});

	var moment_with_locales = moment__default;
	moment_with_locales.locale('en');

	return moment_with_locales;

}));
/**
 *  Ajax Autocomplete for jQuery, version 1.4.2
 *  (c) 2017 Tomas Kirda
 *
 *  Ajax Autocomplete for jQuery is freely distributable under the terms of an MIT-style license.
 *  For details, see the web site: https://github.com/devbridge/jQuery-Autocomplete
 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports&&"function"==typeof require?require("jquery"):jQuery)}(function(a){"use strict";function b(c,d){var e=this;e.element=c,e.el=a(c),e.suggestions=[],e.badQueries=[],e.selectedIndex=-1,e.currentValue=e.element.value,e.timeoutId=null,e.cachedResponse={},e.onChangeTimeout=null,e.onChange=null,e.isLocal=!1,e.suggestionsContainer=null,e.noSuggestionsContainer=null,e.options=a.extend({},b.defaults,d),e.classes={selected:"autocomplete-selected",suggestion:"autocomplete-suggestion"},e.hint=null,e.hintValue="",e.selection=null,e.initialize(),e.setOptions(d)}function c(a,b,c){return-1!==a.value.toLowerCase().indexOf(c)}function d(b){return"string"==typeof b?a.parseJSON(b):b}function e(a,b){if(!b)return a.value;var c="("+g.escapeRegExChars(b)+")";return a.value.replace(new RegExp(c,"gi"),"<strong>$1</strong>").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/&lt;(\/?strong)&gt;/g,"<$1>")}function f(a,b){return'<div class="autocomplete-group">'+b+"</div>"}var g=function(){return{escapeRegExChars:function(a){return a.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&")},createNode:function(a){var b=document.createElement("div");return b.className=a,b.style.position="absolute",b.style.display="none",b}}}(),h={ESC:27,TAB:9,RETURN:13,LEFT:37,UP:38,RIGHT:39,DOWN:40},i=a.noop;b.utils=g,a.Autocomplete=b,b.defaults={ajaxSettings:{},autoSelectFirst:!1,appendTo:"body",serviceUrl:null,lookup:null,onSelect:null,width:"auto",minChars:1,maxHeight:300,deferRequestBy:0,params:{},formatResult:e,formatGroup:f,delimiter:null,zIndex:9999,type:"GET",noCache:!1,onSearchStart:i,onSearchComplete:i,onSearchError:i,preserveInput:!1,containerClass:"autocomplete-suggestions",tabDisabled:!1,dataType:"text",currentRequest:null,triggerSelectOnValidInput:!0,preventBadQueries:!0,lookupFilter:c,paramName:"query",transformResult:d,showNoSuggestionNotice:!1,noSuggestionNotice:"No results",orientation:"bottom",forceFixPosition:!1},b.prototype={initialize:function(){var c,d=this,e="."+d.classes.suggestion,f=d.classes.selected,g=d.options;d.element.setAttribute("autocomplete","off"),d.noSuggestionsContainer=a('<div class="autocomplete-no-suggestion"></div>').html(this.options.noSuggestionNotice).get(0),d.suggestionsContainer=b.utils.createNode(g.containerClass),c=a(d.suggestionsContainer),c.appendTo(g.appendTo||"body"),"auto"!==g.width&&c.css("width",g.width),c.on("mouseover.autocomplete",e,function(){d.activate(a(this).data("index"))}),c.on("mouseout.autocomplete",function(){d.selectedIndex=-1,c.children("."+f).removeClass(f)}),c.on("click.autocomplete",e,function(){d.select(a(this).data("index"))}),c.on("click.autocomplete",function(){clearTimeout(d.blurTimeoutId)}),d.fixPositionCapture=function(){d.visible&&d.fixPosition()},a(window).on("resize.autocomplete",d.fixPositionCapture),d.el.on("keydown.autocomplete",function(a){d.onKeyPress(a)}),d.el.on("keyup.autocomplete",function(a){d.onKeyUp(a)}),d.el.on("blur.autocomplete",function(){d.onBlur()}),d.el.on("focus.autocomplete",function(){d.onFocus()}),d.el.on("change.autocomplete",function(a){d.onKeyUp(a)}),d.el.on("input.autocomplete",function(a){d.onKeyUp(a)})},onFocus:function(){var a=this;a.fixPosition(),a.el.val().length>=a.options.minChars&&a.onValueChange()},onBlur:function(){var a=this;a.blurTimeoutId=setTimeout(function(){a.hide()},200)},abortAjax:function(){var a=this;a.currentRequest&&(a.currentRequest.abort(),a.currentRequest=null)},setOptions:function(b){var c=this,d=c.options;this.options=a.extend({},d,b),c.isLocal=Array.isArray(d.lookup),c.isLocal&&(d.lookup=c.verifySuggestionsFormat(d.lookup)),d.orientation=c.validateOrientation(d.orientation,"bottom"),a(c.suggestionsContainer).css({"max-height":d.maxHeight+"px",width:d.width+"px","z-index":d.zIndex})},clearCache:function(){this.cachedResponse={},this.badQueries=[]},clear:function(){this.clearCache(),this.currentValue="",this.suggestions=[]},disable:function(){var a=this;a.disabled=!0,clearTimeout(a.onChangeTimeout),a.abortAjax()},enable:function(){this.disabled=!1},fixPosition:function(){var b=this,c=a(b.suggestionsContainer),d=c.parent().get(0);if(d===document.body||b.options.forceFixPosition){var e=b.options.orientation,f=c.outerHeight(),g=b.el.outerHeight(),h=b.el.offset(),i={top:h.top,left:h.left};if("auto"===e){var j=a(window).height(),k=a(window).scrollTop(),l=-k+h.top-f,m=k+j-(h.top+g+f);e=Math.max(l,m)===l?"top":"bottom"}if("top"===e?i.top+=-f:i.top+=g,d!==document.body){var n,o=c.css("opacity");b.visible||c.css("opacity",0).show(),n=c.offsetParent().offset(),i.top-=n.top,i.left-=n.left,b.visible||c.css("opacity",o).hide()}"auto"===b.options.width&&(i.width=b.el.outerWidth()+"px"),c.css(i)}},isCursorAtEnd:function(){var a,b=this,c=b.el.val().length,d=b.element.selectionStart;return"number"==typeof d?d===c:document.selection?(a=document.selection.createRange(),a.moveStart("character",-c),c===a.text.length):!0},onKeyPress:function(a){var b=this;if(!b.disabled&&!b.visible&&a.which===h.DOWN&&b.currentValue)return void b.suggest();if(!b.disabled&&b.visible){switch(a.which){case h.ESC:b.el.val(b.currentValue),b.hide();break;case h.RIGHT:if(b.hint&&b.options.onHint&&b.isCursorAtEnd()){b.selectHint();break}return;case h.TAB:if(b.hint&&b.options.onHint)return void b.selectHint();if(-1===b.selectedIndex)return void b.hide();if(b.select(b.selectedIndex),b.options.tabDisabled===!1)return;break;case h.RETURN:if(-1===b.selectedIndex)return void b.hide();b.select(b.selectedIndex);break;case h.UP:b.moveUp();break;case h.DOWN:b.moveDown();break;default:return}a.stopImmediatePropagation(),a.preventDefault()}},onKeyUp:function(a){var b=this;if(!b.disabled){switch(a.which){case h.UP:case h.DOWN:return}clearTimeout(b.onChangeTimeout),b.currentValue!==b.el.val()&&(b.findBestHint(),b.options.deferRequestBy>0?b.onChangeTimeout=setTimeout(function(){b.onValueChange()},b.options.deferRequestBy):b.onValueChange())}},onValueChange:function(){var b=this,c=b.options,d=b.el.val(),e=b.getQuery(d);return b.selection&&b.currentValue!==e&&(b.selection=null,(c.onInvalidateSelection||a.noop).call(b.element)),clearTimeout(b.onChangeTimeout),b.currentValue=d,b.selectedIndex=-1,c.triggerSelectOnValidInput&&b.isExactMatch(e)?void b.select(0):void(e.length<c.minChars?b.hide():b.getSuggestions(e))},isExactMatch:function(a){var b=this.suggestions;return 1===b.length&&b[0].value.toLowerCase()===a.toLowerCase()},getQuery:function(b){var c,d=this.options.delimiter;return d?(c=b.split(d),a.trim(c[c.length-1])):b},getSuggestionsLocal:function(b){var c,d=this,e=d.options,f=b.toLowerCase(),g=e.lookupFilter,h=parseInt(e.lookupLimit,10);return c={suggestions:a.grep(e.lookup,function(a){return g(a,b,f)})},h&&c.suggestions.length>h&&(c.suggestions=c.suggestions.slice(0,h)),c},getSuggestions:function(b){var c,d,e,f,g=this,h=g.options,i=h.serviceUrl;if(h.params[h.paramName]=b,h.onSearchStart.call(g.element,h.params)!==!1){if(d=h.ignoreParams?null:h.params,a.isFunction(h.lookup))return void h.lookup(b,function(a){g.suggestions=a.suggestions,g.suggest(),h.onSearchComplete.call(g.element,b,a.suggestions)});g.isLocal?c=g.getSuggestionsLocal(b):(a.isFunction(i)&&(i=i.call(g.element,b)),e=i+"?"+a.param(d||{}),c=g.cachedResponse[e]),c&&Array.isArray(c.suggestions)?(g.suggestions=c.suggestions,g.suggest(),h.onSearchComplete.call(g.element,b,c.suggestions)):g.isBadQuery(b)?h.onSearchComplete.call(g.element,b,[]):(g.abortAjax(),f={url:i,data:d,type:h.type,dataType:h.dataType},a.extend(f,h.ajaxSettings),g.currentRequest=a.ajax(f).done(function(a){var c;g.currentRequest=null,c=h.transformResult(a,b),g.processResponse(c,b,e),h.onSearchComplete.call(g.element,b,c.suggestions)}).fail(function(a,c,d){h.onSearchError.call(g.element,b,a,c,d)}))}},isBadQuery:function(a){if(!this.options.preventBadQueries)return!1;for(var b=this.badQueries,c=b.length;c--;)if(0===a.indexOf(b[c]))return!0;return!1},hide:function(){var b=this,c=a(b.suggestionsContainer);a.isFunction(b.options.onHide)&&b.visible&&b.options.onHide.call(b.element,c),b.visible=!1,b.selectedIndex=-1,clearTimeout(b.onChangeTimeout),a(b.suggestionsContainer).hide(),b.signalHint(null)},suggest:function(){if(!this.suggestions.length)return void(this.options.showNoSuggestionNotice?this.noSuggestions():this.hide());var b,c=this,d=c.options,e=d.groupBy,f=d.formatResult,g=c.getQuery(c.currentValue),h=c.classes.suggestion,i=c.classes.selected,j=a(c.suggestionsContainer),k=a(c.noSuggestionsContainer),l=d.beforeRender,m="",n=function(a,c){var f=a.data[e];return b===f?"":(b=f,d.formatGroup(a,b))};return d.triggerSelectOnValidInput&&c.isExactMatch(g)?void c.select(0):(a.each(c.suggestions,function(a,b){e&&(m+=n(b,g,a)),m+='<div class="'+h+'" data-index="'+a+'">'+f(b,g,a)+"</div>"}),this.adjustContainerWidth(),k.detach(),j.html(m),a.isFunction(l)&&l.call(c.element,j,c.suggestions),c.fixPosition(),j.show(),d.autoSelectFirst&&(c.selectedIndex=0,j.scrollTop(0),j.children("."+h).first().addClass(i)),c.visible=!0,void c.findBestHint())},noSuggestions:function(){var b=this,c=b.options.beforeRender,d=a(b.suggestionsContainer),e=a(b.noSuggestionsContainer);this.adjustContainerWidth(),e.detach(),d.empty(),d.append(e),a.isFunction(c)&&c.call(b.element,d,b.suggestions),b.fixPosition(),d.show(),b.visible=!0},adjustContainerWidth:function(){var b,c=this,d=c.options,e=a(c.suggestionsContainer);"auto"===d.width?(b=c.el.outerWidth(),e.css("width",b>0?b:300)):"flex"===d.width&&e.css("width","")},findBestHint:function(){var b=this,c=b.el.val().toLowerCase(),d=null;c&&(a.each(b.suggestions,function(a,b){var e=0===b.value.toLowerCase().indexOf(c);return e&&(d=b),!e}),b.signalHint(d))},signalHint:function(b){var c="",d=this;b&&(c=d.currentValue+b.value.substr(d.currentValue.length)),d.hintValue!==c&&(d.hintValue=c,d.hint=b,(this.options.onHint||a.noop)(c))},verifySuggestionsFormat:function(b){return b.length&&"string"==typeof b[0]?a.map(b,function(a){return{value:a,data:null}}):b},validateOrientation:function(b,c){return b=a.trim(b||"").toLowerCase(),-1===a.inArray(b,["auto","bottom","top"])&&(b=c),b},processResponse:function(a,b,c){var d=this,e=d.options;a.suggestions=d.verifySuggestionsFormat(a.suggestions),e.noCache||(d.cachedResponse[c]=a,e.preventBadQueries&&!a.suggestions.length&&d.badQueries.push(b)),b===d.getQuery(d.currentValue)&&(d.suggestions=a.suggestions,d.suggest())},activate:function(b){var c,d=this,e=d.classes.selected,f=a(d.suggestionsContainer),g=f.find("."+d.classes.suggestion);return f.find("."+e).removeClass(e),d.selectedIndex=b,-1!==d.selectedIndex&&g.length>d.selectedIndex?(c=g.get(d.selectedIndex),a(c).addClass(e),c):null},selectHint:function(){var b=this,c=a.inArray(b.hint,b.suggestions);b.select(c)},select:function(a){var b=this;b.hide(),b.onSelect(a)},moveUp:function(){var b=this;if(-1!==b.selectedIndex)return 0===b.selectedIndex?(a(b.suggestionsContainer).children().first().removeClass(b.classes.selected),b.selectedIndex=-1,b.el.val(b.currentValue),void b.findBestHint()):void b.adjustScroll(b.selectedIndex-1)},moveDown:function(){var a=this;a.selectedIndex!==a.suggestions.length-1&&a.adjustScroll(a.selectedIndex+1)},adjustScroll:function(b){var c=this,d=c.activate(b);if(d){var e,f,g,h=a(d).outerHeight();e=d.offsetTop,f=a(c.suggestionsContainer).scrollTop(),g=f+c.options.maxHeight-h,f>e?a(c.suggestionsContainer).scrollTop(e):e>g&&a(c.suggestionsContainer).scrollTop(e-c.options.maxHeight+h),c.options.preserveInput||c.el.val(c.getValue(c.suggestions[b].value)),c.signalHint(null)}},onSelect:function(b){var c=this,d=c.options.onSelect,e=c.suggestions[b];c.currentValue=c.getValue(e.value),c.currentValue===c.el.val()||c.options.preserveInput||c.el.val(c.currentValue),c.signalHint(null),c.suggestions=[],c.selection=e,a.isFunction(d)&&d.call(c.element,e)},getValue:function(a){var b,c,d=this,e=d.options.delimiter;return e?(b=d.currentValue,c=b.split(e),1===c.length?a:b.substr(0,b.length-c[c.length-1].length)+a):a},dispose:function(){var b=this;b.el.off(".autocomplete").removeData("autocomplete"),a(window).off("resize.autocomplete",b.fixPositionCapture),a(b.suggestionsContainer).remove()}},a.fn.devbridgeAutocomplete=function(c,d){var e="autocomplete";return arguments.length?this.each(function(){var f=a(this),g=f.data(e);"string"==typeof c?g&&"function"==typeof g[c]&&g[c](d):(g&&g.dispose&&g.dispose(),g=new b(this,c),f.data(e,g))}):this.first().data(e)},a.fn.autocomplete||(a.fn.autocomplete=a.fn.devbridgeAutocomplete)});