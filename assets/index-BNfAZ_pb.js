import{t as Wr,r as Be,u as Q,aP as Fr,aQ as Br,aR as zr,aS as Vr,aT as Qr,aU as Jr,aV as Gr,aW as Yr,aX as Kr,aY as Zr,aZ as Xr,a_ as eo,a$ as to,b0 as no,b1 as ro,b2 as oo,b3 as io,b4 as so,v as xt,o as Xt,b5 as ao,q as Re,a0 as en}from"./index-BARfQgZj.js";import{r as co,f as lo,g as uo,i as _o,b as fo,a as ho,s as po,m as mo,d as ie,o as go,h as It,n as vo}from"./index.es-SgATq9rs.js";var yo=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,n=[],r=0;r<t.rangeCount;r++)n.push(t.getRangeAt(r));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return t.removeAllRanges(),function(){t.type==="Caret"&&t.removeAllRanges(),t.rangeCount||n.forEach(function(o){t.addRange(o)}),e&&e.focus()}},wo=yo,Rt={"text/plain":"Text","text/html":"Url",default:"Text"},bo="Copy to clipboard: #{key}, Enter";function Eo(t){var e=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}function ko(t,e){var n,r,o,i,c,l,d=!1;e||(e={}),n=e.debug||!1;try{o=wo(),i=document.createRange(),c=document.getSelection(),l=document.createElement("span"),l.textContent=t,l.ariaHidden="true",l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",function(m){if(m.stopPropagation(),e.format)if(m.preventDefault(),typeof m.clipboardData>"u"){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var s=Rt[e.format]||Rt.default;window.clipboardData.setData(s,t)}else m.clipboardData.clearData(),m.clipboardData.setData(e.format,t);e.onCopy&&(m.preventDefault(),e.onCopy(m.clipboardData))}),document.body.appendChild(l),i.selectNodeContents(l),c.addRange(i);var _=document.execCommand("copy");if(!_)throw new Error("copy command was unsuccessful");d=!0}catch(m){n&&console.error("unable to copy using execCommand: ",m),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),d=!0}catch(s){n&&console.error("unable to copy using clipboardData: ",s),n&&console.error("falling back to prompt"),r=Eo("message"in e?e.message:bo),window.prompt(r,t)}}finally{c&&(typeof c.removeRange=="function"?c.removeRange(i):c.removeAllRanges()),l&&document.body.removeChild(l),o()}return d}var Co=ko,se,E,tn,W,Tt,nn,Le,ze,qe,Ae,rn,ne={},on=[],So=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ye=Array.isArray;function A(t,e){for(var n in e)t[n]=e[n];return t}function sn(t){var e=t.parentNode;e&&e.removeChild(t)}function L(t,e,n){var r,o,i,c={};for(i in e)i=="key"?r=e[i]:i=="ref"?o=e[i]:c[i]=e[i];if(arguments.length>2&&(c.children=arguments.length>3?se.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(i in t.defaultProps)c[i]===void 0&&(c[i]=t.defaultProps[i]);return ee(t,c,r,o,null)}function ee(t,e,n,r,o){var i={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++tn,__i:-1,__u:0};return o==null&&E.vnode!=null&&E.vnode(i),i}function an(){return{current:null}}function q(t){return t.children}function M(t,e){this.props=t,this.context=e}function F(t,e){if(e==null)return t.__?F(t.__,t.__i+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?F(t):null}function cn(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return cn(t)}}function Ue(t){(!t.__d&&(t.__d=!0)&&W.push(t)&&!me.__r++||Tt!==E.debounceRendering)&&((Tt=E.debounceRendering)||nn)(me)}function me(){var t,e,n,r,o,i,c,l;for(W.sort(Le);t=W.shift();)t.__d&&(e=W.length,r=void 0,i=(o=(n=t).__v).__e,c=[],l=[],n.__P&&((r=A({},o)).__v=o.__v+1,E.vnode&&E.vnode(r),Ve(n.__P,r,o,n.__n,n.__P.namespaceURI,32&o.__u?[i]:null,c,i??F(o),!!(32&o.__u),l),r.__v=o.__v,r.__.__k[r.__i]=r,_n(c,r,l),r.__e!=i&&cn(r)),W.length>e&&W.sort(Le));me.__r=0}function ln(t,e,n,r,o,i,c,l,d,_,m){var s,w,v,k,R,S=r&&r.__k||on,a=e.length;for(n.__d=d,xo(n,e,S),d=n.__d,s=0;s<a;s++)(v=n.__k[s])!=null&&typeof v!="boolean"&&typeof v!="function"&&(w=v.__i===-1?ne:S[v.__i]||ne,v.__i=s,Ve(t,v,w,o,i,c,l,d,_,m),k=v.__e,v.ref&&w.ref!=v.ref&&(w.ref&&Qe(w.ref,null,v),m.push(v.ref,v.__c||k,v)),R==null&&k!=null&&(R=k),65536&v.__u||w.__k===v.__k?(d&&!d.isConnected&&(d=F(w)),d=un(v,d,t)):typeof v.type=="function"&&v.__d!==void 0?d=v.__d:k&&(d=k.nextSibling),v.__d=void 0,v.__u&=-196609);n.__d=d,n.__e=R}function xo(t,e,n){var r,o,i,c,l,d=e.length,_=n.length,m=_,s=0;for(t.__k=[],r=0;r<d;r++)c=r+s,(o=t.__k[r]=(o=e[r])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?ee(null,o,null,null,null):ye(o)?ee(q,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?ee(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=t,o.__b=t.__b+1,l=Io(o,n,c,m),o.__i=l,i=null,l!==-1&&(m--,(i=n[l])&&(i.__u|=131072)),i==null||i.__v===null?(l==-1&&s--,typeof o.type!="function"&&(o.__u|=65536)):l!==c&&(l===c+1?s++:l>c?m>d-c?s+=l-c:s--:l<c?l==c-1&&(s=l-c):s=0,l!==r+s&&(o.__u|=65536))):(i=n[c])&&i.key==null&&i.__e&&!(131072&i.__u)&&(i.__e==t.__d&&(t.__d=F(i)),$e(i,i,!1),n[c]=null,m--);if(m)for(r=0;r<_;r++)(i=n[r])!=null&&!(131072&i.__u)&&(i.__e==t.__d&&(t.__d=F(i)),$e(i,i))}function un(t,e,n){var r,o;if(typeof t.type=="function"){for(r=t.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=t,e=un(r[o],e,n));return e}t.__e!=e&&(n.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function U(t,e){return e=e||[],t==null||typeof t=="boolean"||(ye(t)?t.some(function(n){U(n,e)}):e.push(t)),e}function Io(t,e,n,r){var o=t.key,i=t.type,c=n-1,l=n+1,d=e[n];if(d===null||d&&o==d.key&&i===d.type&&!(131072&d.__u))return n;if(r>(d!=null&&!(131072&d.__u)?1:0))for(;c>=0||l<e.length;){if(c>=0){if((d=e[c])&&!(131072&d.__u)&&o==d.key&&i===d.type)return c;c--}if(l<e.length){if((d=e[l])&&!(131072&d.__u)&&o==d.key&&i===d.type)return l;l++}}return-1}function Ot(t,e,n){e[0]==="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||So.test(e)?n:n+"px"}function de(t,e,n,r,o){var i;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||Ot(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||Ot(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")i=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in t||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=n,n?r?n.u=r.u:(n.u=ze,t.addEventListener(e,i?Ae:qe,i)):t.removeEventListener(e,i?Ae:qe,i);else{if(o=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,n))}}function Nt(t){return function(e){if(this.l){var n=this.l[e.type+t];if(e.t==null)e.t=ze++;else if(e.t<n.u)return;return n(E.event?E.event(e):e)}}}function Ve(t,e,n,r,o,i,c,l,d,_){var m,s,w,v,k,R,S,a,u,h,f,g,b,y,T,I=e.type;if(e.constructor!==void 0)return null;128&n.__u&&(d=!!(32&n.__u),i=[l=e.__e=n.__e]),(m=E.__b)&&m(e);e:if(typeof I=="function")try{if(a=e.props,u=(m=I.contextType)&&r[m.__c],h=m?u?u.props.value:m.__:r,n.__c?S=(s=e.__c=n.__c).__=s.__E:("prototype"in I&&I.prototype.render?e.__c=s=new I(a,h):(e.__c=s=new M(a,h),s.constructor=I,s.render=To),u&&u.sub(s),s.props=a,s.state||(s.state={}),s.context=h,s.__n=r,w=s.__d=!0,s.__h=[],s._sb=[]),s.__s==null&&(s.__s=s.state),I.getDerivedStateFromProps!=null&&(s.__s==s.state&&(s.__s=A({},s.__s)),A(s.__s,I.getDerivedStateFromProps(a,s.__s))),v=s.props,k=s.state,s.__v=e,w)I.getDerivedStateFromProps==null&&s.componentWillMount!=null&&s.componentWillMount(),s.componentDidMount!=null&&s.__h.push(s.componentDidMount);else{if(I.getDerivedStateFromProps==null&&a!==v&&s.componentWillReceiveProps!=null&&s.componentWillReceiveProps(a,h),!s.__e&&(s.shouldComponentUpdate!=null&&s.shouldComponentUpdate(a,s.__s,h)===!1||e.__v===n.__v)){for(e.__v!==n.__v&&(s.props=a,s.state=s.__s,s.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(N){N&&(N.__=e)}),f=0;f<s._sb.length;f++)s.__h.push(s._sb[f]);s._sb=[],s.__h.length&&c.push(s);break e}s.componentWillUpdate!=null&&s.componentWillUpdate(a,s.__s,h),s.componentDidUpdate!=null&&s.__h.push(function(){s.componentDidUpdate(v,k,R)})}if(s.context=h,s.props=a,s.__P=t,s.__e=!1,g=E.__r,b=0,"prototype"in I&&I.prototype.render){for(s.state=s.__s,s.__d=!1,g&&g(e),m=s.render(s.props,s.state,s.context),y=0;y<s._sb.length;y++)s.__h.push(s._sb[y]);s._sb=[]}else do s.__d=!1,g&&g(e),m=s.render(s.props,s.state,s.context),s.state=s.__s;while(s.__d&&++b<25);s.state=s.__s,s.getChildContext!=null&&(r=A(A({},r),s.getChildContext())),w||s.getSnapshotBeforeUpdate==null||(R=s.getSnapshotBeforeUpdate(v,k)),ln(t,ye(T=m!=null&&m.type===q&&m.key==null?m.props.children:m)?T:[T],e,n,r,o,i,c,l,d,_),s.base=e.__e,e.__u&=-161,s.__h.length&&c.push(s),S&&(s.__E=s.__=null)}catch(N){e.__v=null,d||i!=null?(e.__e=l,e.__u|=d?160:32,i[i.indexOf(l)]=null):(e.__e=n.__e,e.__k=n.__k),E.__e(N,e,n)}else i==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=Ro(n.__e,e,n,r,o,i,c,d,_);(m=E.diffed)&&m(e)}function _n(t,e,n){e.__d=void 0;for(var r=0;r<n.length;r++)Qe(n[r],n[++r],n[++r]);E.__c&&E.__c(e,t),t.some(function(o){try{t=o.__h,o.__h=[],t.some(function(i){i.call(o)})}catch(i){E.__e(i,o.__v)}})}function Ro(t,e,n,r,o,i,c,l,d){var _,m,s,w,v,k,R,S=n.props,a=e.props,u=e.type;if(u==="svg"?o="http://www.w3.org/2000/svg":u==="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),i!=null){for(_=0;_<i.length;_++)if((v=i[_])&&"setAttribute"in v==!!u&&(u?v.localName===u:v.nodeType===3)){t=v,i[_]=null;break}}if(t==null){if(u===null)return document.createTextNode(a);t=document.createElementNS(o,u,a.is&&a),i=null,l=!1}if(u===null)S===a||l&&t.data===a||(t.data=a);else{if(i=i&&se.call(t.childNodes),S=n.props||ne,!l&&i!=null)for(S={},_=0;_<t.attributes.length;_++)S[(v=t.attributes[_]).name]=v.value;for(_ in S)if(v=S[_],_!="children"){if(_=="dangerouslySetInnerHTML")s=v;else if(_!=="key"&&!(_ in a)){if(_=="value"&&"defaultValue"in a||_=="checked"&&"defaultChecked"in a)continue;de(t,_,null,v,o)}}for(_ in a)v=a[_],_=="children"?w=v:_=="dangerouslySetInnerHTML"?m=v:_=="value"?k=v:_=="checked"?R=v:_==="key"||l&&typeof v!="function"||S[_]===v||de(t,_,v,S[_],o);if(m)l||s&&(m.__html===s.__html||m.__html===t.innerHTML)||(t.innerHTML=m.__html),e.__k=[];else if(s&&(t.innerHTML=""),ln(t,ye(w)?w:[w],e,n,r,u==="foreignObject"?"http://www.w3.org/1999/xhtml":o,i,c,i?i[0]:n.__k&&F(n,0),l,d),i!=null)for(_=i.length;_--;)i[_]!=null&&sn(i[_]);l||(_="value",k!==void 0&&(k!==t[_]||u==="progress"&&!k||u==="option"&&k!==S[_])&&de(t,_,k,S[_],o),_="checked",R!==void 0&&R!==t[_]&&de(t,_,R,S[_],o))}return t}function Qe(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(r){E.__e(r,n)}}function $e(t,e,n){var r,o;if(E.unmount&&E.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||Qe(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){E.__e(i,e)}r.base=r.__P=null}if(r=t.__k)for(o=0;o<r.length;o++)r[o]&&$e(r[o],e,n||typeof t.type!="function");n||t.__e==null||sn(t.__e),t.__c=t.__=t.__e=t.__d=void 0}function To(t,e,n){return this.constructor(t,n)}function re(t,e,n){var r,o,i,c;E.__&&E.__(t,e),o=(r=typeof n=="function")?null:n&&n.__k||e.__k,i=[],c=[],Ve(e,t=(!r&&n||e).__k=L(q,null,[t]),o||ne,ne,e.namespaceURI,!r&&n?[n]:o?null:e.firstChild?se.call(e.childNodes):null,i,!r&&n?n:o?o.__e:e.firstChild,r,c),_n(i,t,c)}function dn(t,e){re(t,e,dn)}function Oo(t,e,n){var r,o,i,c,l=A({},t.props);for(i in t.type&&t.type.defaultProps&&(c=t.type.defaultProps),e)i=="key"?r=e[i]:i=="ref"?o=e[i]:l[i]=e[i]===void 0&&c!==void 0?c[i]:e[i];return arguments.length>2&&(l.children=arguments.length>3?se.call(arguments,2):n),ee(t.type,l,r||t.key,o||t.ref,null)}function fn(t,e){var n={__c:e="__cC"+rn++,__:t,Consumer:function(r,o){return r.children(o)},Provider:function(r){var o,i;return this.getChildContext||(o=[],(i={})[e]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(c){this.props.value!==c.value&&o.some(function(l){l.__e=!0,Ue(l)})},this.sub=function(c){o.push(c);var l=c.componentWillUnmount;c.componentWillUnmount=function(){o.splice(o.indexOf(c),1),l&&l.call(c)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}se=on.slice,E={__e:function(t,e,n,r){for(var o,i,c;e=e.__;)if((o=e.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(t)),c=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(t,r||{}),c=o.__d),c)return o.__E=o}catch(l){t=l}throw t}},tn=0,M.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=A({},this.state),typeof t=="function"&&(t=t(A({},n),this.props)),t&&A(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),Ue(this))},M.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Ue(this))},M.prototype.render=q,W=[],nn=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Le=function(t,e){return t.__v.__b-e.__v.__b},me.__r=0,ze=0,qe=Nt(!1),Ae=Nt(!0),rn=0;var $,C,Te,Mt,J=0,hn=[],fe=[],x=E,Lt=x.__b,qt=x.__r,At=x.diffed,Ut=x.__c,$t=x.unmount,Pt=x.__;function B(t,e){x.__h&&x.__h(C,t,J||e),J=0;var n=C.__H||(C.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:fe}),n.__[t]}function ae(t){return J=1,we(pn,t)}function we(t,e,n){var r=B($++,2);if(r.t=t,!r.__c&&(r.__=[n?n(e):pn(void 0,e),function(l){var d=r.__N?r.__N[0]:r.__[0],_=r.t(d,l);d!==_&&(r.__N=[_,r.__[1]],r.__c.setState({}))}],r.__c=C,!C.u)){var o=function(l,d,_){if(!r.__c.__H)return!0;var m=r.__c.__H.__.filter(function(w){return!!w.__c});if(m.every(function(w){return!w.__N}))return!i||i.call(this,l,d,_);var s=!1;return m.forEach(function(w){if(w.__N){var v=w.__[0];w.__=w.__N,w.__N=void 0,v!==w.__[0]&&(s=!0)}}),!(!s&&r.__c.props===l)&&(!i||i.call(this,l,d,_))};C.u=!0;var i=C.shouldComponentUpdate,c=C.componentWillUpdate;C.componentWillUpdate=function(l,d,_){if(this.__e){var m=i;i=void 0,o(l,d,_),i=m}c&&c.call(this,l,d,_)},C.shouldComponentUpdate=o}return r.__N||r.__}function be(t,e){var n=B($++,3);!x.__s&&et(n.__H,e)&&(n.__=t,n.i=e,C.__H.__h.push(n))}function K(t,e){var n=B($++,4);!x.__s&&et(n.__H,e)&&(n.__=t,n.i=e,C.__h.push(n))}function Je(t){return J=5,ce(function(){return{current:t}},[])}function Ge(t,e,n){J=6,K(function(){return typeof t=="function"?(t(e()),function(){return t(null)}):t?(t.current=e(),function(){return t.current=null}):void 0},n==null?n:n.concat(t))}function ce(t,e){var n=B($++,7);return et(n.__H,e)?(n.__V=t(),n.i=e,n.__h=t,n.__V):n.__}function Ye(t,e){return J=8,ce(function(){return t},e)}function Ke(t){var e=C.context[t.__c],n=B($++,9);return n.c=t,e?(n.__==null&&(n.__=!0,e.sub(C)),e.props.value):t.__}function Ze(t,e){x.useDebugValue&&x.useDebugValue(e?e(t):t)}function No(t){var e=B($++,10),n=ae();return e.__=t,C.componentDidCatch||(C.componentDidCatch=function(r,o){e.__&&e.__(r,o),n[1](r)}),[n[0],function(){n[1](void 0)}]}function Xe(){var t=B($++,11);if(!t.__){for(var e=C.__v;e!==null&&!e.__m&&e.__!==null;)e=e.__;var n=e.__m||(e.__m=[0,0]);t.__="P"+n[0]+"-"+n[1]++}return t.__}function Mo(){for(var t;t=hn.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(he),t.__H.__h.forEach(Pe),t.__H.__h=[]}catch(e){t.__H.__h=[],x.__e(e,t.__v)}}x.__b=function(t){C=null,Lt&&Lt(t)},x.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),Pt&&Pt(t,e)},x.__r=function(t){qt&&qt(t),$=0;var e=(C=t.__c).__H;e&&(Te===C?(e.__h=[],C.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=fe,n.__N=n.i=void 0})):(e.__h.forEach(he),e.__h.forEach(Pe),e.__h=[],$=0)),Te=C},x.diffed=function(t){At&&At(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(hn.push(e)!==1&&Mt===x.requestAnimationFrame||((Mt=x.requestAnimationFrame)||Lo)(Mo)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==fe&&(n.__=n.__V),n.i=void 0,n.__V=fe})),Te=C=null},x.__c=function(t,e){e.some(function(n){try{n.__h.forEach(he),n.__h=n.__h.filter(function(r){return!r.__||Pe(r)})}catch(r){e.some(function(o){o.__h&&(o.__h=[])}),e=[],x.__e(r,n.__v)}}),Ut&&Ut(t,e)},x.unmount=function(t){$t&&$t(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{he(r)}catch(o){e=o}}),n.__H=void 0,e&&x.__e(e,n.__v))};var Dt=typeof requestAnimationFrame=="function";function Lo(t){var e,n=function(){clearTimeout(r),Dt&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);Dt&&(e=requestAnimationFrame(n))}function he(t){var e=C,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),C=e}function Pe(t){var e=C;t.__c=t.__(),C=e}function et(t,e){return!t||t.length!==e.length||e.some(function(n,r){return n!==t[r]})}function pn(t,e){return typeof e=="function"?e(t):e}class jt extends co{constructor(e){super(e),this.events=new Wr.EventEmitter,this.hasRegisteredEventListeners=!1,this.connection=this.setConnection(e),this.connection.connected&&this.registerEventListeners()}async connect(e=this.connection){await this.open(e)}async disconnect(){await this.close()}on(e,n){this.events.on(e,n)}once(e,n){this.events.once(e,n)}off(e,n){this.events.off(e,n)}removeListener(e,n){this.events.removeListener(e,n)}async request(e,n){return this.requestStrict(lo(e.method,e.params||[],e.id||uo().toString()),n)}async requestStrict(e,n){return new Promise(async(r,o)=>{if(!this.connection.connected)try{await this.open()}catch(i){o(i)}this.events.on(`${e.id}`,i=>{_o(i)?o(i.error):r(i.result)});try{await this.connection.send(e,n)}catch(i){o(i)}})}setConnection(e=this.connection){return e}onPayload(e){this.events.emit("payload",e),fo(e)?this.events.emit(`${e.id}`,e):this.events.emit("message",{type:e.method,data:e.params})}onClose(e){e&&e.code===3e3&&this.events.emit("error",new Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason?`(${e.reason})`:""}`)),this.events.emit("disconnect")}async open(e=this.connection){this.connection===e&&this.connection.connected||(this.connection.connected&&this.close(),typeof e=="string"&&(await this.connection.open(e),e=this.connection),this.connection=this.setConnection(e),await this.connection.open(),this.registerEventListeners(),this.events.emit("connect"))}async close(){await this.connection.close()}registerEventListeners(){this.hasRegisteredEventListeners||(this.connection.on("payload",e=>this.onPayload(e)),this.connection.on("close",e=>this.onClose(e)),this.connection.on("error",e=>this.events.emit("error",e)),this.connection.on("register_error",e=>this.onClose()),this.hasRegisteredEventListeners=!0)}}const Oe="Session currently connected",H="Session currently disconnected",qo="Session Rejected",Ao="Missing JSON RPC response",Uo='JSON-RPC success response must include "result" field',$o='JSON-RPC error response must include "error" field',Po='JSON RPC request must have valid "method" value',Do='JSON RPC request must have valid "id" value',jo="Missing one of the required parameters: bridge / uri / session",Ht="JSON RPC response format is invalid",Ho="URI format is invalid",Wo="QRCode Modal not provided",Wt="User close QRCode Modal",Fo=["session_request","session_update","exchange_key","connect","disconnect","display_uri","modal_closed","transport_open","transport_close","transport_error"],Bo=["wallet_addEthereumChain","wallet_switchEthereumChain","wallet_getPermissions","wallet_requestPermissions","wallet_registerOnboarding","wallet_watchAsset","wallet_scanQRCode"],tt=["eth_sendTransaction","eth_signTransaction","eth_sign","eth_signTypedData","eth_signTypedData_v1","eth_signTypedData_v2","eth_signTypedData_v3","eth_signTypedData_v4","personal_sign",...Bo],De="WALLETCONNECT_DEEPLINK_CHOICE",zo={1:"mainnet",3:"ropsten",4:"rinkeby",5:"goerli",42:"kovan"};var mn=nt;nt.strict=gn;nt.loose=vn;var Vo=Object.prototype.toString,Qo={"[object Int8Array]":!0,"[object Int16Array]":!0,"[object Int32Array]":!0,"[object Uint8Array]":!0,"[object Uint8ClampedArray]":!0,"[object Uint16Array]":!0,"[object Uint32Array]":!0,"[object Float32Array]":!0,"[object Float64Array]":!0};function nt(t){return gn(t)||vn(t)}function gn(t){return t instanceof Int8Array||t instanceof Int16Array||t instanceof Int32Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Uint16Array||t instanceof Uint32Array||t instanceof Float32Array||t instanceof Float64Array}function vn(t){return Qo[Vo.call(t)]}const Jo=Be(mn);var Go=mn.strict,Yo=function(e){if(Go(e)){var n=Q.from(e.buffer);return e.byteLength!==e.buffer.byteLength&&(n=n.slice(e.byteOffset,e.byteOffset+e.byteLength)),n}else return Q.from(e)};const Ko=Be(Yo),rt="hex",ot="utf8",Zo="binary",Xo="buffer",ei="array",ti="typed-array",ni="array-buffer",Ee="0";function G(t){return new Uint8Array(t)}function it(t,e=!1){const n=t.toString(rt);return e?le(n):n}function st(t){return t.toString(ot)}function yn(t){return t.readUIntBE(0,t.length)}function Z(t){return Ko(t)}function P(t,e=!1){return it(Z(t),e)}function wn(t){return st(Z(t))}function bn(t){return yn(Z(t))}function at(t){return Q.from(Y(t),rt)}function D(t){return G(at(t))}function ri(t){return st(at(t))}function oi(t){return bn(D(t))}function ct(t){return Q.from(t,ot)}function En(t){return G(ct(t))}function ii(t,e=!1){return it(ct(t),e)}function si(t){const e=parseInt(t,10);return Ci(ki(e),"Number can only safely store up to 53 bits"),e}function ai(t){return _i(lt(t))}function ci(t){return ut(lt(t))}function li(t,e){return di(lt(t),e)}function ui(t){return`${t}`}function lt(t){const e=(t>>>0).toString(2);return dt(e)}function _i(t){return Z(ut(t))}function ut(t){return new Uint8Array(vi(t).map(e=>parseInt(e,2)))}function di(t,e){return P(ut(t),e)}function fi(t){return!(typeof t!="string"||!new RegExp(/^[01]+$/).test(t)||t.length%8!==0)}function kn(t,e){return!(typeof t!="string"||!t.match(/^0x[0-9A-Fa-f]*$/)||e&&t.length!==2+2*e)}function ke(t){return Q.isBuffer(t)}function _t(t){return Jo.strict(t)&&!ke(t)}function Cn(t){return!_t(t)&&!ke(t)&&typeof t.byteLength<"u"}function hi(t){return ke(t)?Xo:_t(t)?ti:Cn(t)?ni:Array.isArray(t)?ei:typeof t}function pi(t){return fi(t)?Zo:kn(t)?rt:ot}function mi(...t){return Q.concat(t)}function Sn(...t){let e=[];return t.forEach(n=>e=e.concat(Array.from(n))),new Uint8Array([...e])}function gi(t,e=8){const n=t%e;return n?(t-n)/e*e+e:t}function vi(t,e=8){const n=dt(t).match(new RegExp(`.{${e}}`,"gi"));return Array.from(n||[])}function dt(t,e=8,n=Ee){return yi(t,gi(t.length,e),n)}function yi(t,e,n=Ee){return Si(t,e,!0,n)}function Y(t){return t.replace(/^0x/,"")}function le(t){return t.startsWith("0x")?t:`0x${t}`}function wi(t){return t=Y(t),t=dt(t,2),t&&(t=le(t)),t}function bi(t){const e=t.startsWith("0x");return t=Y(t),t=t.startsWith(Ee)?t.substring(1):t,e?le(t):t}function Ei(t){return typeof t>"u"}function ki(t){return!Ei(t)}function Ci(t,e){if(!t)throw new Error(e)}function Si(t,e,n,r=Ee){const o=e-t.length;let i=t;return o>0&&(i=r.repeat(o)+t),i}function ge(t){return Z(new Uint8Array(t))}function xi(t){return wn(new Uint8Array(t))}function xn(t,e){return P(new Uint8Array(t),!e)}function Ii(t){return bn(new Uint8Array(t))}function Ri(...t){return D(t.map(e=>P(new Uint8Array(e))).join("")).buffer}function In(t){return G(t).buffer}function Ti(t){return st(t)}function Oi(t,e){return it(t,!e)}function Ni(t){return yn(t)}function Mi(...t){return mi(...t)}function Li(t){return En(t).buffer}function qi(t){return ct(t)}function Ai(t,e){return ii(t,!e)}function Ui(t){return si(t)}function $i(t){return at(t)}function Rn(t){return D(t).buffer}function Pi(t){return ri(t)}function Di(t){return oi(t)}function ji(t){return ai(t)}function Hi(t){return ci(t).buffer}function Wi(t){return ui(t)}function Tn(t,e){return li(Number(t),!e)}const Fi=Vr,Bi=Qr,zi=Jr,Vi=Gr,Qi=Yr,On=zr,Ji=Kr,Nn=Fr,Gi=Zr,Yi=Xr,Ki=eo,Ce=Br;function Se(t){return to(t)}function xe(){const t=Se();return t&&t.os?t.os:void 0}function Mn(){const t=xe();return t?t.toLowerCase().includes("android"):!1}function Ln(){const t=xe();return t?t.toLowerCase().includes("ios")||t.toLowerCase().includes("mac")&&navigator.maxTouchPoints>1:!1}function qn(){return xe()?Mn()||Ln():!1}function An(){const t=Se();return t&&t.name?t.name.toLowerCase()==="node":!1}function Un(){return!An()&&!!On()}const $n=ho,Pn=po;function ft(t,e){const n=Pn(e),r=Ce();r&&r.setItem(t,n)}function ht(t){let e=null,n=null;const r=Ce();return r&&(n=r.getItem(t)),e=n&&$n(n),e}function pt(t){const e=Ce();e&&e.removeItem(t)}function je(){return no()}function Zi(t){return wi(t)}function Xi(t){return le(t)}function es(t){return Y(t)}function ts(t){return bi(le(t))}const Dn=mo;function pe(){return((e,n)=>{for(n=e="";e++<36;n+=e*51&52?(e^15?8^Math.random()*(e^20?16:4):4).toString(16):"-");return n})()}function ns(){console.warn("DEPRECATION WARNING: This WalletConnect client library will be deprecated in favor of @walletconnect/client. Please check docs.walletconnect.org to learn more about this migration!")}function jn(t,e){let n;const r=zo[t];return r&&(n=`https://${r}.infura.io/v3/${e}`),n}function Hn(t,e){let n;const r=jn(t,e.infuraId);return e.custom&&e.custom[t]?n=e.custom[t]:r&&(n=r),n}function rs(t,e){const n=encodeURIComponent(t);return e.universalLink?`${e.universalLink}/wc?uri=${n}`:e.deepLink?`${e.deepLink}${e.deepLink.endsWith(":")?"//":"/"}wc?uri=${n}`:""}function os(t){const e=t.href.split("?")[0];ft(De,Object.assign(Object.assign({},t),{href:e}))}function Wn(t,e){return t.filter(n=>n.name.toLowerCase().includes(e.toLowerCase()))[0]}function is(t,e){let n=t;return e&&(n=e.map(r=>Wn(t,r)).filter(Boolean)),n}function ss(t,e){return async(...r)=>new Promise((o,i)=>{const c=(l,d)=>{(l===null||typeof l>"u")&&i(l),o(d)};t.apply(e,[...r,c])})}function Fn(t){const e=t.message||"Failed or Rejected Request";let n=-32e3;if(t&&!t.code)switch(e){case"Parse error":n=-32700;break;case"Invalid request":n=-32600;break;case"Method not found":n=-32601;break;case"Invalid params":n=-32602;break;case"Internal error":n=-32603;break;default:n=-32e3;break}const r={code:n,message:e};return t.data&&(r.data=t.data),r}const Bn="https://registry.walletconnect.com";function as(){return Bn+"/api/v2/wallets"}function cs(){return Bn+"/api/v2/dapps"}function zn(t,e="mobile"){var n;return{name:t.name||"",shortName:t.metadata.shortName||"",color:t.metadata.colors.primary||"",logo:(n=t.image_url.sm)!==null&&n!==void 0?n:"",universalLink:t[e].universal||"",deepLink:t[e].native||""}}function ls(t,e="mobile"){return Object.values(t).filter(n=>!!n[e].universal||!!n[e].native).map(n=>zn(n,e))}var mt={};(function(t){const e=io,n=so,r=ro,o=oo,i=a=>a==null;function c(a){switch(a.arrayFormat){case"index":return u=>(h,f)=>{const g=h.length;return f===void 0||a.skipNull&&f===null||a.skipEmptyString&&f===""?h:f===null?[...h,[_(u,a),"[",g,"]"].join("")]:[...h,[_(u,a),"[",_(g,a),"]=",_(f,a)].join("")]};case"bracket":return u=>(h,f)=>f===void 0||a.skipNull&&f===null||a.skipEmptyString&&f===""?h:f===null?[...h,[_(u,a),"[]"].join("")]:[...h,[_(u,a),"[]=",_(f,a)].join("")];case"comma":case"separator":return u=>(h,f)=>f==null||f.length===0?h:h.length===0?[[_(u,a),"=",_(f,a)].join("")]:[[h,_(f,a)].join(a.arrayFormatSeparator)];default:return u=>(h,f)=>f===void 0||a.skipNull&&f===null||a.skipEmptyString&&f===""?h:f===null?[...h,_(u,a)]:[...h,[_(u,a),"=",_(f,a)].join("")]}}function l(a){let u;switch(a.arrayFormat){case"index":return(h,f,g)=>{if(u=/\[(\d*)\]$/.exec(h),h=h.replace(/\[\d*\]$/,""),!u){g[h]=f;return}g[h]===void 0&&(g[h]={}),g[h][u[1]]=f};case"bracket":return(h,f,g)=>{if(u=/(\[\])$/.exec(h),h=h.replace(/\[\]$/,""),!u){g[h]=f;return}if(g[h]===void 0){g[h]=[f];return}g[h]=[].concat(g[h],f)};case"comma":case"separator":return(h,f,g)=>{const b=typeof f=="string"&&f.includes(a.arrayFormatSeparator),y=typeof f=="string"&&!b&&m(f,a).includes(a.arrayFormatSeparator);f=y?m(f,a):f;const T=b||y?f.split(a.arrayFormatSeparator).map(I=>m(I,a)):f===null?f:m(f,a);g[h]=T};default:return(h,f,g)=>{if(g[h]===void 0){g[h]=f;return}g[h]=[].concat(g[h],f)}}}function d(a){if(typeof a!="string"||a.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function _(a,u){return u.encode?u.strict?e(a):encodeURIComponent(a):a}function m(a,u){return u.decode?n(a):a}function s(a){return Array.isArray(a)?a.sort():typeof a=="object"?s(Object.keys(a)).sort((u,h)=>Number(u)-Number(h)).map(u=>a[u]):a}function w(a){const u=a.indexOf("#");return u!==-1&&(a=a.slice(0,u)),a}function v(a){let u="";const h=a.indexOf("#");return h!==-1&&(u=a.slice(h)),u}function k(a){a=w(a);const u=a.indexOf("?");return u===-1?"":a.slice(u+1)}function R(a,u){return u.parseNumbers&&!Number.isNaN(Number(a))&&typeof a=="string"&&a.trim()!==""?a=Number(a):u.parseBooleans&&a!==null&&(a.toLowerCase()==="true"||a.toLowerCase()==="false")&&(a=a.toLowerCase()==="true"),a}function S(a,u){u=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},u),d(u.arrayFormatSeparator);const h=l(u),f=Object.create(null);if(typeof a!="string"||(a=a.trim().replace(/^[?#&]/,""),!a))return f;for(const g of a.split("&")){if(g==="")continue;let[b,y]=r(u.decode?g.replace(/\+/g," "):g,"=");y=y===void 0?null:["comma","separator"].includes(u.arrayFormat)?y:m(y,u),h(m(b,u),y,f)}for(const g of Object.keys(f)){const b=f[g];if(typeof b=="object"&&b!==null)for(const y of Object.keys(b))b[y]=R(b[y],u);else f[g]=R(b,u)}return u.sort===!1?f:(u.sort===!0?Object.keys(f).sort():Object.keys(f).sort(u.sort)).reduce((g,b)=>{const y=f[b];return y&&typeof y=="object"&&!Array.isArray(y)?g[b]=s(y):g[b]=y,g},Object.create(null))}t.extract=k,t.parse=S,t.stringify=(a,u)=>{if(!a)return"";u=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},u),d(u.arrayFormatSeparator);const h=y=>u.skipNull&&i(a[y])||u.skipEmptyString&&a[y]==="",f=c(u),g={};for(const y of Object.keys(a))h(y)||(g[y]=a[y]);const b=Object.keys(g);return u.sort!==!1&&b.sort(u.sort),b.map(y=>{const T=a[y];return T===void 0?"":T===null?_(y,u):Array.isArray(T)?T.reduce(f(y),[]).join("&"):_(y,u)+"="+_(T,u)}).filter(y=>y.length>0).join("&")},t.parseUrl=(a,u)=>{u=Object.assign({decode:!0},u);const[h,f]=r(a,"#");return Object.assign({url:h.split("?")[0]||"",query:S(k(a),u)},u&&u.parseFragmentIdentifier&&f?{fragmentIdentifier:m(f,u)}:{})},t.stringifyUrl=(a,u)=>{u=Object.assign({encode:!0,strict:!0},u);const h=w(a.url).split("?")[0]||"",f=t.extract(a.url),g=t.parse(f,{sort:!1}),b=Object.assign(g,a.query);let y=t.stringify(b,u);y&&(y=`?${y}`);let T=v(a.url);return a.fragmentIdentifier&&(T=`#${_(a.fragmentIdentifier,u)}`),`${h}${y}${T}`},t.pick=(a,u,h)=>{h=Object.assign({parseFragmentIdentifier:!0},h);const{url:f,query:g,fragmentIdentifier:b}=t.parseUrl(a,h);return t.stringifyUrl({url:f,query:o(g,u),fragmentIdentifier:b},h)},t.exclude=(a,u,h)=>{const f=Array.isArray(u)?g=>!u.includes(g):(g,b)=>!u(g,b);return t.pick(a,f,h)}})(mt);function Vn(t){const e=t.indexOf("?")!==-1?t.indexOf("?"):void 0;return typeof e<"u"?t.substr(e):""}function Qn(t,e){let n=gt(t);return n=Object.assign(Object.assign({},n),e),t=Jn(n),t}function gt(t){return mt.parse(t)}function Jn(t){return mt.stringify(t)}function Gn(t){return typeof t.bridge<"u"}function Yn(t){const e=t.indexOf(":"),n=t.indexOf("?")!==-1?t.indexOf("?"):void 0,r=t.substring(0,e),o=t.substring(e+1,n);function i(s){const v=s.split("@");return{handshakeTopic:v[0],version:parseInt(v[1],10)}}const c=i(o),l=typeof n<"u"?t.substr(n):"";function d(s){const w=gt(s);return{key:w.key||"",bridge:w.bridge||""}}const _=d(l);return Object.assign(Object.assign({protocol:r},c),_)}function us(t){return t===""||typeof t=="string"&&t.trim()===""}function _s(t){return!(t&&t.length)}function ds(t){return ke(t)}function fs(t){return _t(t)}function hs(t){return Cn(t)}function ps(t){return hi(t)}function ms(t){return pi(t)}function gs(t,e){return kn(t,e)}function vs(t){return typeof t.params=="object"}function Kn(t){return typeof t.method<"u"}function z(t){return typeof t.result<"u"}function oe(t){return typeof t.error<"u"}function He(t){return typeof t.event<"u"}function Zn(t){return Fo.includes(t)||t.startsWith("wc_")}function Xn(t){return t.method.startsWith("wc_")?!0:!tt.includes(t.method)}const ys=Object.freeze(Object.defineProperty({__proto__:null,addHexPrefix:Xi,appendToQueryString:Qn,concatArrayBuffers:Ri,concatBuffers:Mi,convertArrayBufferToBuffer:ge,convertArrayBufferToHex:xn,convertArrayBufferToNumber:Ii,convertArrayBufferToUtf8:xi,convertBufferToArrayBuffer:In,convertBufferToHex:Oi,convertBufferToNumber:Ni,convertBufferToUtf8:Ti,convertHexToArrayBuffer:Rn,convertHexToBuffer:$i,convertHexToNumber:Di,convertHexToUtf8:Pi,convertNumberToArrayBuffer:Hi,convertNumberToBuffer:ji,convertNumberToHex:Tn,convertNumberToUtf8:Wi,convertUtf8ToArrayBuffer:Li,convertUtf8ToBuffer:qi,convertUtf8ToHex:Ai,convertUtf8ToNumber:Ui,detectEnv:Se,detectOS:xe,formatIOSMobile:rs,formatMobileRegistry:ls,formatMobileRegistryEntry:zn,formatQueryString:Jn,formatRpcError:Fn,getClientMeta:je,getCrypto:Yi,getCryptoOrThrow:Gi,getDappRegistryUrl:cs,getDocument:Vi,getDocumentOrThrow:zi,getEncoding:ms,getFromWindow:Fi,getFromWindowOrThrow:Bi,getInfuraRpcUrl:jn,getLocal:ht,getLocalStorage:Ce,getLocalStorageOrThrow:Ki,getLocation:Nn,getLocationOrThrow:Ji,getMobileLinkRegistry:is,getMobileRegistryEntry:Wn,getNavigator:On,getNavigatorOrThrow:Qi,getQueryString:Vn,getRpcUrl:Hn,getType:ps,getWalletRegistryUrl:as,isAndroid:Mn,isArrayBuffer:hs,isBrowser:Un,isBuffer:ds,isEmptyArray:_s,isEmptyString:us,isHexString:gs,isIOS:Ln,isInternalEvent:He,isJsonRpcRequest:Kn,isJsonRpcResponseError:oe,isJsonRpcResponseSuccess:z,isJsonRpcSubscription:vs,isMobile:qn,isNode:An,isReservedEvent:Zn,isSilentPayload:Xn,isTypedArray:fs,isWalletConnectSession:Gn,logDeprecationWarning:ns,parseQueryString:gt,parseWalletConnectUri:Yn,payloadId:Dn,promisify:ss,removeHexLeadingZeros:ts,removeHexPrefix:es,removeLocal:pt,safeJsonParse:$n,safeJsonStringify:Pn,sanitizeHex:Zi,saveMobileLinkInfo:os,setLocal:ft,uuid:pe},Symbol.toStringTag,{value:"Module"}));class ws{constructor(){this._eventEmitters=[],typeof window<"u"&&typeof window.addEventListener<"u"&&(window.addEventListener("online",()=>this.trigger("online")),window.addEventListener("offline",()=>this.trigger("offline")))}on(e,n){this._eventEmitters.push({event:e,callback:n})}trigger(e){let n=[];e&&(n=this._eventEmitters.filter(r=>r.event===e)),n.forEach(r=>{r.callback()})}}const bs=typeof xt.WebSocket<"u"?xt.WebSocket:require("ws");class Es{constructor(e){if(this.opts=e,this._queue=[],this._events=[],this._subscriptions=[],this._protocol=e.protocol,this._version=e.version,this._url="",this._netMonitor=null,this._socket=null,this._nextSocket=null,this._subscriptions=e.subscriptions||[],this._netMonitor=e.netMonitor||new ws,!e.url||typeof e.url!="string")throw new Error("Missing or invalid WebSocket url");this._url=e.url,this._netMonitor.on("online",()=>this._socketCreate())}set readyState(e){}get readyState(){return this._socket?this._socket.readyState:-1}set connecting(e){}get connecting(){return this.readyState===0}set connected(e){}get connected(){return this.readyState===1}set closing(e){}get closing(){return this.readyState===2}set closed(e){}get closed(){return this.readyState===3}open(){this._socketCreate()}close(){this._socketClose()}send(e,n,r){if(!n||typeof n!="string")throw new Error("Missing or invalid topic field");this._socketSend({topic:n,type:"pub",payload:e,silent:!!r})}subscribe(e){this._socketSend({topic:e,type:"sub",payload:"",silent:!0})}on(e,n){this._events.push({event:e,callback:n})}_socketCreate(){if(this._nextSocket)return;const e=ks(this._url,this._protocol,this._version);if(this._nextSocket=new bs(e),!this._nextSocket)throw new Error("Failed to create socket");this._nextSocket.onmessage=n=>this._socketReceive(n),this._nextSocket.onopen=()=>this._socketOpen(),this._nextSocket.onerror=n=>this._socketError(n),this._nextSocket.onclose=()=>{setTimeout(()=>{this._nextSocket=null,this._socketCreate()},1e3)}}_socketOpen(){this._socketClose(),this._socket=this._nextSocket,this._nextSocket=null,this._queueSubscriptions(),this._pushQueue()}_socketClose(){this._socket&&(this._socket.onclose=()=>{},this._socket.close())}_socketSend(e){const n=JSON.stringify(e);this._socket&&this._socket.readyState===1?this._socket.send(n):(this._setToQueue(e),this._socketCreate())}async _socketReceive(e){let n;try{n=JSON.parse(e.data)}catch{return}if(this._socketSend({topic:n.topic,type:"ack",payload:"",silent:!0}),this._socket&&this._socket.readyState===1){const r=this._events.filter(o=>o.event==="message");r&&r.length&&r.forEach(o=>o.callback(n))}}_socketError(e){const n=this._events.filter(r=>r.event==="error");n&&n.length&&n.forEach(r=>r.callback(e))}_queueSubscriptions(){this._subscriptions.forEach(n=>this._queue.push({topic:n,type:"sub",payload:"",silent:!0})),this._subscriptions=this.opts.subscriptions||[]}_setToQueue(e){this._queue.push(e)}_pushQueue(){this._queue.forEach(n=>this._socketSend(n)),this._queue=[]}}function ks(t,e,n){var r,o;const c=(t.startsWith("https")?t.replace("https","wss"):t.startsWith("http")?t.replace("http","ws"):t).split("?"),l=Un()?{protocol:e,version:n,env:"browser",host:((r=Nn())===null||r===void 0?void 0:r.host)||""}:{protocol:e,version:n,env:((o=Se())===null||o===void 0?void 0:o.name)||""},d=Qn(Vn(c[1]||""),l);return c[0]+"?"+d}class Cs{constructor(){this._eventEmitters=[]}subscribe(e){this._eventEmitters.push(e)}unsubscribe(e){this._eventEmitters=this._eventEmitters.filter(n=>n.event!==e)}trigger(e){let n=[],r;Kn(e)?r=e.method:z(e)||oe(e)?r=`response:${e.id}`:He(e)?r=e.event:r="",r&&(n=this._eventEmitters.filter(o=>o.event===r)),(!n||!n.length)&&!Zn(r)&&!He(r)&&(n=this._eventEmitters.filter(o=>o.event==="call_request")),n.forEach(o=>{if(oe(e)){const i=new Error(e.error.message);o.callback(i,null)}else o.callback(null,e)})}}class Ss{constructor(e="walletconnect"){this.storageId=e}getSession(){let e=null;const n=ht(this.storageId);return n&&Gn(n)&&(e=n),e}setSession(e){return ft(this.storageId,e),e}removeSession(){pt(this.storageId)}}const xs="walletconnect.org",Is="abcdefghijklmnopqrstuvwxyz0123456789",er=Is.split("").map(t=>`https://${t}.bridge.walletconnect.org`);function Rs(t){let e=t.indexOf("//")>-1?t.split("/")[2]:t.split("/")[0];return e=e.split(":")[0],e=e.split("?")[0],e}function Ts(t){return Rs(t).split(".").slice(-2).join(".")}function Os(){return Math.floor(Math.random()*er.length)}function Ns(){return er[Os()]}function Ms(t){return Ts(t)===xs}function Ls(t){return Ms(t)?Ns():t}class qs{constructor(e){if(this.protocol="wc",this.version=1,this._bridge="",this._key=null,this._clientId="",this._clientMeta=null,this._peerId="",this._peerMeta=null,this._handshakeId=0,this._handshakeTopic="",this._connected=!1,this._accounts=[],this._chainId=0,this._networkId=0,this._rpcUrl="",this._eventManager=new Cs,this._clientMeta=je()||e.connectorOpts.clientMeta||null,this._cryptoLib=e.cryptoLib,this._sessionStorage=e.sessionStorage||new Ss(e.connectorOpts.storageId),this._qrcodeModal=e.connectorOpts.qrcodeModal,this._qrcodeModalOptions=e.connectorOpts.qrcodeModalOptions,this._signingMethods=[...tt,...e.connectorOpts.signingMethods||[]],!e.connectorOpts.bridge&&!e.connectorOpts.uri&&!e.connectorOpts.session)throw new Error(jo);e.connectorOpts.bridge&&(this.bridge=Ls(e.connectorOpts.bridge)),e.connectorOpts.uri&&(this.uri=e.connectorOpts.uri);const n=e.connectorOpts.session||this._getStorageSession();n&&(this.session=n),this.handshakeId&&this._subscribeToSessionResponse(this.handshakeId,"Session request rejected"),this._transport=e.transport||new Es({protocol:this.protocol,version:this.version,url:this.bridge,subscriptions:[this.clientId]}),this._subscribeToInternalEvents(),this._initTransport(),e.connectorOpts.uri&&this._subscribeToSessionRequest(),e.pushServerOpts&&this._registerPushServer(e.pushServerOpts)}set bridge(e){e&&(this._bridge=e)}get bridge(){return this._bridge}set key(e){if(!e)return;const n=Rn(e);this._key=n}get key(){return this._key?xn(this._key,!0):""}set clientId(e){e&&(this._clientId=e)}get clientId(){let e=this._clientId;return e||(e=this._clientId=pe()),this._clientId}set peerId(e){e&&(this._peerId=e)}get peerId(){return this._peerId}set clientMeta(e){}get clientMeta(){let e=this._clientMeta;return e||(e=this._clientMeta=je()),e}set peerMeta(e){this._peerMeta=e}get peerMeta(){return this._peerMeta}set handshakeTopic(e){e&&(this._handshakeTopic=e)}get handshakeTopic(){return this._handshakeTopic}set handshakeId(e){e&&(this._handshakeId=e)}get handshakeId(){return this._handshakeId}get uri(){return this._formatUri()}set uri(e){if(!e)return;const{handshakeTopic:n,bridge:r,key:o}=this._parseUri(e);this.handshakeTopic=n,this.bridge=r,this.key=o}set chainId(e){this._chainId=e}get chainId(){return this._chainId}set networkId(e){this._networkId=e}get networkId(){return this._networkId}set accounts(e){this._accounts=e}get accounts(){return this._accounts}set rpcUrl(e){this._rpcUrl=e}get rpcUrl(){return this._rpcUrl}set connected(e){}get connected(){return this._connected}set pending(e){}get pending(){return!!this._handshakeTopic}get session(){return{connected:this.connected,accounts:this.accounts,chainId:this.chainId,bridge:this.bridge,key:this.key,clientId:this.clientId,clientMeta:this.clientMeta,peerId:this.peerId,peerMeta:this.peerMeta,handshakeId:this.handshakeId,handshakeTopic:this.handshakeTopic}}set session(e){e&&(this._connected=e.connected,this.accounts=e.accounts,this.chainId=e.chainId,this.bridge=e.bridge,this.key=e.key,this.clientId=e.clientId,this.clientMeta=e.clientMeta,this.peerId=e.peerId,this.peerMeta=e.peerMeta,this.handshakeId=e.handshakeId,this.handshakeTopic=e.handshakeTopic)}on(e,n){const r={event:e,callback:n};this._eventManager.subscribe(r)}off(e){this._eventManager.unsubscribe(e)}async createInstantRequest(e){this._key=await this._generateKey();const n=this._formatRequest({method:"wc_instantRequest",params:[{peerId:this.clientId,peerMeta:this.clientMeta,request:this._formatRequest(e)}]});this.handshakeId=n.id,this.handshakeTopic=pe(),this._eventManager.trigger({event:"display_uri",params:[this.uri]}),this.on("modal_closed",()=>{throw new Error(Wt)});const r=()=>{this.killSession()};try{const o=await this._sendCallRequest(n);return o&&r(),o}catch(o){throw r(),o}}async connect(e){if(!this._qrcodeModal)throw new Error(Wo);return this.connected?{chainId:this.chainId,accounts:this.accounts}:(await this.createSession(e),new Promise(async(n,r)=>{this.on("modal_closed",()=>r(new Error(Wt))),this.on("connect",(o,i)=>{if(o)return r(o);n(i.params[0])})}))}async createSession(e){if(this._connected)throw new Error(Oe);if(this.pending)return;this._key=await this._generateKey();const n=this._formatRequest({method:"wc_sessionRequest",params:[{peerId:this.clientId,peerMeta:this.clientMeta,chainId:e&&e.chainId?e.chainId:null}]});this.handshakeId=n.id,this.handshakeTopic=pe(),this._sendSessionRequest(n,"Session update rejected",{topic:this.handshakeTopic}),this._eventManager.trigger({event:"display_uri",params:[this.uri]})}approveSession(e){if(this._connected)throw new Error(Oe);this.chainId=e.chainId,this.accounts=e.accounts,this.networkId=e.networkId||0,this.rpcUrl=e.rpcUrl||"";const n={approved:!0,chainId:this.chainId,networkId:this.networkId,accounts:this.accounts,rpcUrl:this.rpcUrl,peerId:this.clientId,peerMeta:this.clientMeta},r={id:this.handshakeId,jsonrpc:"2.0",result:n};this._sendResponse(r),this._connected=!0,this._setStorageSession(),this._eventManager.trigger({event:"connect",params:[{peerId:this.peerId,peerMeta:this.peerMeta,chainId:this.chainId,accounts:this.accounts}]})}rejectSession(e){if(this._connected)throw new Error(Oe);const n=e&&e.message?e.message:qo,r=this._formatResponse({id:this.handshakeId,error:{message:n}});this._sendResponse(r),this._connected=!1,this._eventManager.trigger({event:"disconnect",params:[{message:n}]}),this._removeStorageSession()}updateSession(e){if(!this._connected)throw new Error(H);this.chainId=e.chainId,this.accounts=e.accounts,this.networkId=e.networkId||0,this.rpcUrl=e.rpcUrl||"";const n={approved:!0,chainId:this.chainId,networkId:this.networkId,accounts:this.accounts,rpcUrl:this.rpcUrl},r=this._formatRequest({method:"wc_sessionUpdate",params:[n]});this._sendSessionRequest(r,"Session update rejected"),this._eventManager.trigger({event:"session_update",params:[{chainId:this.chainId,accounts:this.accounts}]}),this._manageStorageSession()}async killSession(e){const n=e?e.message:"Session Disconnected",r={approved:!1,chainId:null,networkId:null,accounts:null},o=this._formatRequest({method:"wc_sessionUpdate",params:[r]});await this._sendRequest(o),this._handleSessionDisconnect(n)}async sendTransaction(e){if(!this._connected)throw new Error(H);const n=e,r=this._formatRequest({method:"eth_sendTransaction",params:[n]});return await this._sendCallRequest(r)}async signTransaction(e){if(!this._connected)throw new Error(H);const n=e,r=this._formatRequest({method:"eth_signTransaction",params:[n]});return await this._sendCallRequest(r)}async signMessage(e){if(!this._connected)throw new Error(H);const n=this._formatRequest({method:"eth_sign",params:e});return await this._sendCallRequest(n)}async signPersonalMessage(e){if(!this._connected)throw new Error(H);const n=this._formatRequest({method:"personal_sign",params:e});return await this._sendCallRequest(n)}async signTypedData(e){if(!this._connected)throw new Error(H);const n=this._formatRequest({method:"eth_signTypedData",params:e});return await this._sendCallRequest(n)}async updateChain(e){if(!this._connected)throw new Error("Session currently disconnected");const n=this._formatRequest({method:"wallet_updateChain",params:[e]});return await this._sendCallRequest(n)}unsafeSend(e,n){return this._sendRequest(e,n),this._eventManager.trigger({event:"call_request_sent",params:[{request:e,options:n}]}),new Promise((r,o)=>{this._subscribeToResponse(e.id,(i,c)=>{if(i){o(i);return}if(!c)throw new Error(Ao);r(c)})})}async sendCustomRequest(e,n){if(!this._connected)throw new Error(H);switch(e.method){case"eth_accounts":return this.accounts;case"eth_chainId":return Tn(this.chainId);case"eth_sendTransaction":case"eth_signTransaction":e.params;break;case"personal_sign":e.params;break}const r=this._formatRequest(e);return await this._sendCallRequest(r,n)}approveRequest(e){if(z(e)){const n=this._formatResponse(e);this._sendResponse(n)}else throw new Error(Uo)}rejectRequest(e){if(oe(e)){const n=this._formatResponse(e);this._sendResponse(n)}else throw new Error($o)}transportClose(){this._transport.close()}async _sendRequest(e,n){const r=this._formatRequest(e),o=await this._encrypt(r),i=typeof(n==null?void 0:n.topic)<"u"?n.topic:this.peerId,c=JSON.stringify(o),l=typeof(n==null?void 0:n.forcePushNotification)<"u"?!n.forcePushNotification:Xn(r);this._transport.send(c,i,l)}async _sendResponse(e){const n=await this._encrypt(e),r=this.peerId,o=JSON.stringify(n);this._transport.send(o,r,!0)}async _sendSessionRequest(e,n,r){this._sendRequest(e,r),this._subscribeToSessionResponse(e.id,n)}_sendCallRequest(e,n){return this._sendRequest(e,n),this._eventManager.trigger({event:"call_request_sent",params:[{request:e,options:n}]}),this._subscribeToCallResponse(e.id)}_formatRequest(e){if(typeof e.method>"u")throw new Error(Po);return{id:typeof e.id>"u"?Dn():e.id,jsonrpc:"2.0",method:e.method,params:typeof e.params>"u"?[]:e.params}}_formatResponse(e){if(typeof e.id>"u")throw new Error(Do);const n={id:e.id,jsonrpc:"2.0"};if(oe(e)){const r=Fn(e.error);return Object.assign(Object.assign(Object.assign({},n),e),{error:r})}else if(z(e))return Object.assign(Object.assign({},n),e);throw new Error(Ht)}_handleSessionDisconnect(e){const n=e||"Session Disconnected";this._connected||(this._qrcodeModal&&this._qrcodeModal.close(),pt(De)),this._connected&&(this._connected=!1),this._handshakeId&&(this._handshakeId=0),this._handshakeTopic&&(this._handshakeTopic=""),this._peerId&&(this._peerId=""),this._eventManager.trigger({event:"disconnect",params:[{message:n}]}),this._removeStorageSession(),this.transportClose()}_handleSessionResponse(e,n){n?n.approved?(this._connected?(n.chainId&&(this.chainId=n.chainId),n.accounts&&(this.accounts=n.accounts),this._eventManager.trigger({event:"session_update",params:[{chainId:this.chainId,accounts:this.accounts}]})):(this._connected=!0,n.chainId&&(this.chainId=n.chainId),n.accounts&&(this.accounts=n.accounts),n.peerId&&!this.peerId&&(this.peerId=n.peerId),n.peerMeta&&!this.peerMeta&&(this.peerMeta=n.peerMeta),this._eventManager.trigger({event:"connect",params:[{peerId:this.peerId,peerMeta:this.peerMeta,chainId:this.chainId,accounts:this.accounts}]})),this._manageStorageSession()):this._handleSessionDisconnect(e):this._handleSessionDisconnect(e)}async _handleIncomingMessages(e){if(![this.clientId,this.handshakeTopic].includes(e.topic))return;let r;try{r=JSON.parse(e.payload)}catch{return}const o=await this._decrypt(r);o&&this._eventManager.trigger(o)}_subscribeToSessionRequest(){this._transport.subscribe(this.handshakeTopic)}_subscribeToResponse(e,n){this.on(`response:${e}`,n)}_subscribeToSessionResponse(e,n){this._subscribeToResponse(e,(r,o)=>{if(r){this._handleSessionResponse(r.message);return}z(o)?this._handleSessionResponse(n,o.result):o.error&&o.error.message?this._handleSessionResponse(o.error.message):this._handleSessionResponse(n)})}_subscribeToCallResponse(e){return new Promise((n,r)=>{this._subscribeToResponse(e,(o,i)=>{if(o){r(o);return}z(i)?n(i.result):i.error&&i.error.message?r(i.error):r(new Error(Ht))})})}_subscribeToInternalEvents(){this.on("display_uri",()=>{this._qrcodeModal&&this._qrcodeModal.open(this.uri,()=>{this._eventManager.trigger({event:"modal_closed",params:[]})},this._qrcodeModalOptions)}),this.on("connect",()=>{this._qrcodeModal&&this._qrcodeModal.close()}),this.on("call_request_sent",(e,n)=>{const{request:r}=n.params[0];if(qn()&&this._signingMethods.includes(r.method)){const o=ht(De);o&&(window.location.href=o.href)}}),this.on("wc_sessionRequest",(e,n)=>{e&&this._eventManager.trigger({event:"error",params:[{code:"SESSION_REQUEST_ERROR",message:e.toString()}]}),this.handshakeId=n.id,this.peerId=n.params[0].peerId,this.peerMeta=n.params[0].peerMeta;const r=Object.assign(Object.assign({},n),{method:"session_request"});this._eventManager.trigger(r)}),this.on("wc_sessionUpdate",(e,n)=>{e&&this._handleSessionResponse(e.message),this._handleSessionResponse("Session disconnected",n.params[0])})}_initTransport(){this._transport.on("message",e=>this._handleIncomingMessages(e)),this._transport.on("open",()=>this._eventManager.trigger({event:"transport_open",params:[]})),this._transport.on("close",()=>this._eventManager.trigger({event:"transport_close",params:[]})),this._transport.on("error",()=>this._eventManager.trigger({event:"transport_error",params:["Websocket connection failed"]})),this._transport.open()}_formatUri(){const e=this.protocol,n=this.handshakeTopic,r=this.version,o=encodeURIComponent(this.bridge),i=this.key;return`${e}:${n}@${r}?bridge=${o}&key=${i}`}_parseUri(e){const n=Yn(e);if(n.protocol===this.protocol){if(!n.handshakeTopic)throw Error("Invalid or missing handshakeTopic parameter value");const r=n.handshakeTopic;if(!n.bridge)throw Error("Invalid or missing bridge url parameter value");const o=decodeURIComponent(n.bridge);if(!n.key)throw Error("Invalid or missing key parameter value");const i=n.key;return{handshakeTopic:r,bridge:o,key:i}}else throw new Error(Ho)}async _generateKey(){return this._cryptoLib?await this._cryptoLib.generateKey():null}async _encrypt(e){const n=this._key;return this._cryptoLib&&n?await this._cryptoLib.encrypt(e,n):null}async _decrypt(e){const n=this._key;return this._cryptoLib&&n?await this._cryptoLib.decrypt(e,n):null}_getStorageSession(){let e=null;return this._sessionStorage&&(e=this._sessionStorage.getSession()),e}_setStorageSession(){this._sessionStorage&&this._sessionStorage.setSession(this.session)}_removeStorageSession(){this._sessionStorage&&this._sessionStorage.removeSession()}_manageStorageSession(){this._connected?this._setStorageSession():this._removeStorageSession()}_registerPushServer(e){if(!e.url||typeof e.url!="string")throw Error("Invalid or missing pushServerOpts.url parameter value");if(!e.type||typeof e.type!="string")throw Error("Invalid or missing pushServerOpts.type parameter value");if(!e.token||typeof e.token!="string")throw Error("Invalid or missing pushServerOpts.token parameter value");const n={bridge:this.bridge,topic:this.clientId,type:e.type,token:e.token,peerName:"",language:e.language||""};this.on("connect",async(r,o)=>{if(r)throw r;if(e.peerMeta){const i=o.params[0].peerMeta.name;n.peerName=i}try{if(!(await(await fetch(`${e.url}/new`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)})).json()).success)throw Error("Failed to register in Push Server")}catch{throw Error("Failed to register in Push Server")}})}}function As(t){return ie.getBrowerCrypto().getRandomValues(new Uint8Array(t))}const tr=256,nr=tr,Us=tr,j="AES-CBC",$s=`SHA-${nr}`,We="HMAC",Ps="encrypt",Ds="decrypt",js="sign",Hs="verify";function Ws(t){return t===j?{length:nr,name:j}:{hash:{name:$s},name:We}}function Fs(t){return t===j?[Ps,Ds]:[js,Hs]}async function vt(t,e=j){return ie.getSubtleCrypto().importKey("raw",t,Ws(e),!0,Fs(e))}async function Bs(t,e,n){const r=ie.getSubtleCrypto(),o=await vt(e,j),i=await r.encrypt({iv:t,name:j},o,n);return new Uint8Array(i)}async function zs(t,e,n){const r=ie.getSubtleCrypto(),o=await vt(e,j),i=await r.decrypt({iv:t,name:j},o,n);return new Uint8Array(i)}async function Vs(t,e){const n=ie.getSubtleCrypto(),r=await vt(t,We),o=await n.sign({length:Us,name:We},r,e);return new Uint8Array(o)}function Qs(t,e,n){return Bs(t,e,n)}function Js(t,e,n){return zs(t,e,n)}async function rr(t,e){return await Vs(t,e)}async function or(t){const e=(t||256)/8,n=As(e);return In(Z(n))}async function ir(t,e){const n=D(t.data),r=D(t.iv),o=D(t.hmac),i=P(o,!1),c=Sn(n,r),l=await rr(e,c),d=P(l,!1);return Y(i)===Y(d)}async function Gs(t,e,n){const r=G(ge(e)),o=n||await or(128),i=G(ge(o)),c=P(i,!1),l=JSON.stringify(t),d=En(l),_=await Qs(i,r,d),m=P(_,!1),s=Sn(_,i),w=await rr(r,s),v=P(w,!1);return{data:m,hmac:v,iv:c}}async function Ys(t,e){const n=G(ge(e));if(!n)throw new Error("Missing key: required for decryption");if(!await ir(t,n))return null;const o=D(t.data),i=D(t.iv),c=await Js(i,n,o),l=wn(c);let d;try{d=JSON.parse(l)}catch{return null}return d}const Ks=Object.freeze(Object.defineProperty({__proto__:null,decrypt:Ys,encrypt:Gs,generateKey:or,verifyHmac:ir},Symbol.toStringTag,{value:"Module"}));class Zs extends qs{constructor(e,n){super({cryptoLib:Ks,connectorOpts:e,pushServerOpts:n})}}const Xs=Xt(ys);function sr(t,e){for(var n in e)t[n]=e[n];return t}function Fe(t,e){for(var n in t)if(n!=="__source"&&!(n in e))return!0;for(var r in e)if(r!=="__source"&&t[r]!==e[r])return!0;return!1}function ve(t,e){this.props=t,this.context=e}function ar(t,e){function n(o){var i=this.props.ref,c=i==o.ref;return!c&&i&&(i.call?i(null):i.current=null),e?!e(this.props,o)||!c:Fe(this.props,o)}function r(o){return this.shouldComponentUpdate=n,L(t,o)}return r.displayName="Memo("+(t.displayName||t.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(ve.prototype=new M).isPureReactComponent=!0,ve.prototype.shouldComponentUpdate=function(t,e){return Fe(this.props,t)||Fe(this.state,e)};var Ft=E.__b;E.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),Ft&&Ft(t)};var ea=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function cr(t){function e(n){var r=sr({},n);return delete r.ref,t(r,n.ref||null)}return e.$$typeof=ea,e.render=e,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(t.displayName||t.name)+")",e}var Bt=function(t,e){return t==null?null:U(U(t).map(e))},lr={map:Bt,forEach:Bt,count:function(t){return t?U(t).length:0},only:function(t){var e=U(t);if(e.length!==1)throw"Children.only";return e[0]},toArray:U},ta=E.__e;E.__e=function(t,e,n,r){if(t.then){for(var o,i=e;i=i.__;)if((o=i.__c)&&o.__c)return e.__e==null&&(e.__e=n.__e,e.__k=n.__k),o.__c(t,e)}ta(t,e,n,r)};var zt=E.unmount;function ur(t,e,n){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),t.__c.__H=null),(t=sr({},t)).__c!=null&&(t.__c.__P===n&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(r){return ur(r,e,n)})),t}function _r(t,e,n){return t&&n&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(r){return _r(r,e,n)}),t.__c&&t.__c.__P===e&&(t.__e&&n.appendChild(t.__e),t.__c.__e=!0,t.__c.__P=n)),t}function te(){this.__u=0,this.t=null,this.__b=null}function dr(t){var e=t.__.__c;return e&&e.__a&&e.__a(t)}function fr(t){var e,n,r;function o(i){if(e||(e=t()).then(function(c){n=c.default||c},function(c){r=c}),r)throw r;if(!n)throw e;return L(n,i)}return o.displayName="Lazy",o.__f=!0,o}function V(){this.u=null,this.o=null}E.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&32&t.__u&&(t.type=null),zt&&zt(t)},(te.prototype=new M).__c=function(t,e){var n=e.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var o=dr(r.__v),i=!1,c=function(){i||(i=!0,n.__R=null,o?o(l):l())};n.__R=c;var l=function(){if(!--r.__u){if(r.state.__a){var d=r.state.__a;r.__v.__k[0]=_r(d,d.__c.__P,d.__c.__O)}var _;for(r.setState({__a:r.__b=null});_=r.t.pop();)_.forceUpdate()}};r.__u++||32&e.__u||r.setState({__a:r.__b=r.__v.__k[0]}),t.then(c,c)},te.prototype.componentWillUnmount=function(){this.t=[]},te.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=ur(this.__b,n,r.__O=r.__P)}this.__b=null}var o=e.__a&&L(q,null,t.fallback);return o&&(o.__u&=-33),[L(q,null,e.__a?null:t.children),o]};var Vt=function(t,e,n){if(++n[1]===n[0]&&t.o.delete(e),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.o.size))for(n=t.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.u=n=n[2]}};function na(t){return this.getChildContext=function(){return t.context},t.children}function ra(t){var e=this,n=t.i;e.componentWillUnmount=function(){re(null,e.l),e.l=null,e.i=null},e.i&&e.i!==n&&e.componentWillUnmount(),e.l||(e.i=n,e.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(r){this.childNodes.push(r),e.i.appendChild(r)},insertBefore:function(r,o){this.childNodes.push(r),e.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),e.i.removeChild(r)}}),re(L(na,{context:e.context},t.__v),e.l)}function hr(t,e){var n=L(ra,{__v:t,i:e});return n.containerInfo=e,n}(V.prototype=new M).__a=function(t){var e=this,n=dr(e.__v),r=e.o.get(t);return r[0]++,function(o){var i=function(){e.props.revealOrder?(r.push(o),Vt(e,t,r)):o()};n?n(i):i()}},V.prototype.render=function(t){this.u=null,this.o=new Map;var e=U(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&e.reverse();for(var n=e.length;n--;)this.o.set(e[n],this.u=[1,0,this.u]);return t.children},V.prototype.componentDidUpdate=V.prototype.componentDidMount=function(){var t=this;this.o.forEach(function(e,n){Vt(t,n,e)})};var pr=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,oa=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,ia=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,sa=/[A-Z0-9]/g,aa=typeof document<"u",ca=function(t){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(t)};function mr(t,e,n){return e.__k==null&&(e.textContent=""),re(t,e),typeof n=="function"&&n(),t?t.__c:null}function gr(t,e,n){return dn(t,e),typeof n=="function"&&n(),t?t.__c:null}M.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(M.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})});var Qt=E.event;function la(){}function ua(){return this.cancelBubble}function _a(){return this.defaultPrevented}E.event=function(t){return Qt&&(t=Qt(t)),t.persist=la,t.isPropagationStopped=ua,t.isDefaultPrevented=_a,t.nativeEvent=t};var yt,da={enumerable:!1,configurable:!0,get:function(){return this.class}},Jt=E.vnode;E.vnode=function(t){typeof t.type=="string"&&function(e){var n=e.props,r=e.type,o={};for(var i in n){var c=n[i];if(!(i==="value"&&"defaultValue"in n&&c==null||aa&&i==="children"&&r==="noscript"||i==="class"||i==="className")){var l=i.toLowerCase();i==="defaultValue"&&"value"in n&&n.value==null?i="value":i==="download"&&c===!0?c="":l==="translate"&&c==="no"?c=!1:l==="ondoubleclick"?i="ondblclick":l!=="onchange"||r!=="input"&&r!=="textarea"||ca(n.type)?l==="onfocus"?i="onfocusin":l==="onblur"?i="onfocusout":ia.test(i)?i=l:r.indexOf("-")===-1&&oa.test(i)?i=i.replace(sa,"-$&").toLowerCase():c===null&&(c=void 0):l=i="oninput",l==="oninput"&&o[i=l]&&(i="oninputCapture"),o[i]=c}}r=="select"&&o.multiple&&Array.isArray(o.value)&&(o.value=U(n.children).forEach(function(d){d.props.selected=o.value.indexOf(d.props.value)!=-1})),r=="select"&&o.defaultValue!=null&&(o.value=U(n.children).forEach(function(d){d.props.selected=o.multiple?o.defaultValue.indexOf(d.props.value)!=-1:o.defaultValue==d.props.value})),n.class&&!n.className?(o.class=n.class,Object.defineProperty(o,"className",da)):(n.className&&!n.class||n.class&&n.className)&&(o.class=o.className=n.className),e.props=o}(t),t.$$typeof=pr,Jt&&Jt(t)};var Gt=E.__r;E.__r=function(t){Gt&&Gt(t),yt=t.__c};var Yt=E.diffed;E.diffed=function(t){Yt&&Yt(t);var e=t.props,n=t.__e;n!=null&&t.type==="textarea"&&"value"in e&&e.value!==n.value&&(n.value=e.value==null?"":e.value),yt=null};var vr={ReactCurrentDispatcher:{current:{readContext:function(t){return yt.__n[t.__c].props.value},useCallback:Ye,useContext:Ke,useDebugValue:Ze,useDeferredValue:bt,useEffect:be,useId:Xe,useImperativeHandle:Ge,useInsertionEffect:kt,useLayoutEffect:K,useMemo:ce,useReducer:we,useRef:Je,useState:ae,useSyncExternalStore:Ct,useTransition:Et}}},fa="17.0.2";function yr(t){return L.bind(null,t)}function ue(t){return!!t&&t.$$typeof===pr}function wr(t){return ue(t)&&t.type===q}function br(t){return!!t&&!!t.displayName&&(typeof t.displayName=="string"||t.displayName instanceof String)&&t.displayName.startsWith("Memo(")}function Er(t){return ue(t)?Oo.apply(null,arguments):t}function kr(t){return!!t.__k&&(re(null,t),!0)}function Cr(t){return t&&(t.base||t.nodeType===1&&t)||null}var Sr=function(t,e){return t(e)},xr=function(t,e){return t(e)},Ir=q;function wt(t){t()}function bt(t){return t}function Et(){return[!1,wt]}var kt=K,Rr=ue;function Ct(t,e){var n=e(),r=ae({h:{__:n,v:e}}),o=r[0].h,i=r[1];return K(function(){o.__=n,o.v=e,Ne(o)&&i({h:o})},[t,n,e]),be(function(){return Ne(o)&&i({h:o}),t(function(){Ne(o)&&i({h:o})})},[t]),n}function Ne(t){var e,n,r=t.v,o=t.__;try{var i=r();return!((e=o)===(n=i)&&(e!==0||1/e==1/n)||e!=e&&n!=n)}catch{return!0}}var ha={useState:ae,useId:Xe,useReducer:we,useEffect:be,useLayoutEffect:K,useInsertionEffect:kt,useTransition:Et,useDeferredValue:bt,useSyncExternalStore:Ct,startTransition:wt,useRef:Je,useImperativeHandle:Ge,useMemo:ce,useCallback:Ye,useContext:Ke,useDebugValue:Ze,version:"17.0.2",Children:lr,render:mr,hydrate:gr,unmountComponentAtNode:kr,createPortal:hr,createElement:L,createContext:fn,createFactory:yr,cloneElement:Er,createRef:an,Fragment:q,isValidElement:ue,isElement:Rr,isFragment:wr,isMemo:br,findDOMNode:Cr,Component:M,PureComponent:ve,memo:ar,forwardRef:cr,flushSync:xr,unstable_batchedUpdates:Sr,StrictMode:Ir,Suspense:te,SuspenseList:V,lazy:fr,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:vr};const pa=Object.freeze(Object.defineProperty({__proto__:null,Children:lr,Component:M,Fragment:q,PureComponent:ve,StrictMode:Ir,Suspense:te,SuspenseList:V,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:vr,cloneElement:Er,createContext:fn,createElement:L,createFactory:yr,createPortal:hr,createRef:an,default:ha,findDOMNode:Cr,flushSync:xr,forwardRef:cr,hydrate:gr,isElement:Rr,isFragment:wr,isMemo:br,isValidElement:ue,lazy:fr,memo:ar,render:mr,startTransition:wt,unmountComponentAtNode:kr,unstable_batchedUpdates:Sr,useCallback:Ye,useContext:Ke,useDebugValue:Ze,useDeferredValue:bt,useEffect:be,useErrorBoundary:No,useId:Xe,useImperativeHandle:Ge,useInsertionEffect:kt,useLayoutEffect:K,useMemo:ce,useReducer:we,useRef:Je,useState:ae,useSyncExternalStore:Ct,useTransition:Et,version:fa},Symbol.toStringTag,{value:"Module"})),ma=Xt(pa);function Tr(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var O=Xs,Or=Tr(ao),ga=Tr(Co),p=ma;function va(t){Or.toString(t,{type:"terminal"}).then(console.log)}var ya=`:root {
  --animation-duration: 300ms;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.animated {
  animation-duration: var(--animation-duration);
  animation-fill-mode: both;
}

.fadeIn {
  animation-name: fadeIn;
}

.fadeOut {
  animation-name: fadeOut;
}

#walletconnect-wrapper {
  -webkit-user-select: none;
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  user-select: none;
  width: 100%;
  z-index: 99999999999999;
}

.walletconnect-modal__headerLogo {
  height: 21px;
}

.walletconnect-modal__header p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  align-items: flex-start;
  display: flex;
  flex: 1;
  margin-left: 5px;
}

.walletconnect-modal__close__wrapper {
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 10000;
  background: white;
  border-radius: 26px;
  padding: 6px;
  box-sizing: border-box;
  width: 26px;
  height: 26px;
  cursor: pointer;
}

.walletconnect-modal__close__icon {
  position: relative;
  top: 7px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(45deg);
}

.walletconnect-modal__close__line1 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
}

.walletconnect-modal__close__line2 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
  transform: rotate(90deg);
}

.walletconnect-qrcode__base {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background: rgba(37, 41, 46, 0.95);
  height: 100%;
  left: 0;
  pointer-events: auto;
  position: fixed;
  top: 0;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  width: 100%;
  will-change: opacity;
  padding: 40px;
  box-sizing: border-box;
}

.walletconnect-qrcode__text {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 10px 0 20px 0;
  text-align: center;
  width: 100%;
}

@media only screen and (max-width: 768px) {
  .walletconnect-qrcode__text {
    font-size: 4vw;
  }
}

@media only screen and (max-width: 320px) {
  .walletconnect-qrcode__text {
    font-size: 14px;
  }
}

.walletconnect-qrcode__image {
  width: calc(100% - 30px);
  box-sizing: border-box;
  cursor: none;
  margin: 0 auto;
}

.walletconnect-qrcode__notification {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 16px;
  padding: 16px 20px;
  border-radius: 16px;
  text-align: center;
  transition: all 0.1s ease-in-out;
  background: white;
  color: black;
  margin-bottom: -60px;
  opacity: 0;
}

.walletconnect-qrcode__notification.notification__show {
  opacity: 1;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__header {
    height: 130px;
  }
  .walletconnect-modal__base {
    overflow: auto;
  }
}

@media only screen and (min-device-width: 415px) and (max-width: 768px) {
  #content {
    max-width: 768px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 375px) and (max-width: 415px) {
  #content {
    max-width: 414px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 320px) and (max-width: 375px) {
  #content {
    max-width: 375px;
    box-sizing: border-box;
  }
}

@media only screen and (max-width: 320px) {
  #content {
    max-width: 320px;
    box-sizing: border-box;
  }
}

.walletconnect-modal__base {
  -webkit-font-smoothing: antialiased;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);
  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,
    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: 41px;
  padding: 24px 24px 22px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  will-change: transform;
  overflow: visible;
  transform: translateY(-50%);
  top: 50%;
  max-width: 500px;
  margin: auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__base {
    padding: 24px 12px;
  }
}

.walletconnect-modal__base .hidden {
  transform: translateY(150%);
  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);
}

.walletconnect-modal__header {
  align-items: center;
  display: flex;
  height: 26px;
  left: 0;
  justify-content: space-between;
  position: absolute;
  top: -42px;
  width: 100%;
}

.walletconnect-modal__base .wc-logo {
  align-items: center;
  display: flex;
  height: 26px;
  margin-top: 15px;
  padding-bottom: 15px;
  pointer-events: auto;
}

.walletconnect-modal__base .wc-logo div {
  background-color: #3399ff;
  height: 21px;
  margin-right: 5px;
  mask-image: url("images/wc-logo.svg") center no-repeat;
  width: 32px;
}

.walletconnect-modal__base .wc-logo p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.walletconnect-modal__base h2 {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 0 0 19px 0;
  text-align: center;
  width: 100%;
}

.walletconnect-modal__base__row {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  height: 56px;
  justify-content: space-between;
  padding: 0 15px;
  position: relative;
  margin: 0px 0px 8px;
  text-align: left;
  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;
  text-decoration: none;
}

.walletconnect-modal__base__row:hover {
  background: rgba(60, 66, 82, 0.06);
}

.walletconnect-modal__base__row:active {
  background: rgba(60, 66, 82, 0.06);
  transform: scale(0.975);
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.walletconnect-modal__base__row__h3 {
  color: #25292e;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  padding-bottom: 3px;
}

.walletconnect-modal__base__row__right {
  align-items: center;
  display: flex;
  justify-content: center;
}

.walletconnect-modal__base__row__right__app-icon {
  border-radius: 8px;
  height: 34px;
  margin: 0 11px 2px 0;
  width: 34px;
  background-size: 100%;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-modal__base__row__right__caret {
  height: 18px;
  opacity: 0.3;
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  width: 8px;
  will-change: opacity;
}

.walletconnect-modal__base__row:hover .caret,
.walletconnect-modal__base__row:active .caret {
  opacity: 0.6;
}

.walletconnect-modal__mobile__toggle {
  width: 80%;
  display: flex;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 18px;
  background: #d4d5d9;
}

.walletconnect-modal__single_wallet {
  display: flex;
  justify-content: center;
  margin-top: 7px;
  margin-bottom: 18px;
}

.walletconnect-modal__single_wallet a {
  cursor: pointer;
  color: rgb(64, 153, 255);
  font-size: 21px;
  font-weight: 800;
  text-decoration: none !important;
  margin: 0 auto;
}

.walletconnect-modal__mobile__toggle_selector {
  width: calc(50% - 8px);
  background: white;
  position: absolute;
  border-radius: 5px;
  height: calc(100% - 8px);
  top: 4px;
  transition: all 0.2s ease-in-out;
  transform: translate3d(4px, 0, 0);
}

.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {
  transform: translate3d(calc(100% + 12px), 0, 0);
}

.walletconnect-modal__mobile__toggle a {
  font-size: 12px;
  width: 50%;
  text-align: center;
  padding: 8px;
  margin: 0;
  font-weight: 600;
  z-index: 1;
}

.walletconnect-modal__footer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__footer {
    margin-top: 5vw;
  }
}

.walletconnect-modal__footer a {
  cursor: pointer;
  color: #898d97;
  font-size: 15px;
  margin: 0 auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__footer a {
    font-size: 14px;
  }
}

.walletconnect-connect__buttons__wrapper {
  max-height: 44vh;
}

.walletconnect-connect__buttons__wrapper__android {
  margin: 50% 0;
}

.walletconnect-connect__buttons__wrapper__wrap {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 10px 0;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__buttons__wrapper__wrap {
    margin-top: 40px;
  }
}

.walletconnect-connect__button {
  background-color: rgb(64, 153, 255);
  padding: 12px;
  border-radius: 8px;
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-weight: 500;
}

.walletconnect-connect__button__icon_anchor {
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 8px;
  width: 42px;
  justify-self: center;
  flex-direction: column;
  text-decoration: none !important;
}

@media only screen and (max-width: 320px) {
  .walletconnect-connect__button__icon_anchor {
    margin: 4px;
  }
}

.walletconnect-connect__button__icon {
  border-radius: 10px;
  height: 42px;
  margin: 0;
  width: 42px;
  background-size: cover !important;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-connect__button__text {
  color: #424952;
  font-size: 2.7vw;
  text-decoration: none !important;
  padding: 0;
  margin-top: 1.8vw;
  font-weight: 600;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__button__text {
    font-size: 16px;
    margin-top: 12px;
  }
}

.walletconnect-search__input {
  border: none;
  background: #d4d5d9;
  border-style: none;
  padding: 8px 16px;
  outline: none;
  font-style: normal;
  font-stretch: normal;
  font-size: 16px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  border-radius: 8px;
  width: calc(100% - 16px);
  margin: 0;
  margin-bottom: 8px;
}
`;typeof Symbol<"u"&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")));typeof Symbol<"u"&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function wa(t,e){try{var n=t()}catch(r){return e(r)}return n&&n.then?n.then(void 0,e):n}var ba="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='300px' height='185px' viewBox='0 0 300 185' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3EWalletConnect%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='walletconnect-logo-alt' fill='%233B99FC' fill-rule='nonzero'%3E %3Cpath d='M61.4385429,36.2562612 C110.349767,-11.6319051 189.65053,-11.6319051 238.561752,36.2562612 L244.448297,42.0196786 C246.893858,44.4140867 246.893858,48.2961898 244.448297,50.690599 L224.311602,70.406102 C223.088821,71.6033071 221.106302,71.6033071 219.883521,70.406102 L211.782937,62.4749541 C177.661245,29.0669724 122.339051,29.0669724 88.2173582,62.4749541 L79.542302,70.9685592 C78.3195204,72.1657633 76.337001,72.1657633 75.1142214,70.9685592 L54.9775265,51.2530561 C52.5319653,48.8586469 52.5319653,44.9765439 54.9775265,42.5821357 L61.4385429,36.2562612 Z M280.206339,77.0300061 L298.128036,94.5769031 C300.573585,96.9713 300.573599,100.85338 298.128067,103.247793 L217.317896,182.368927 C214.872352,184.763353 210.907314,184.76338 208.461736,182.368989 C208.461726,182.368979 208.461714,182.368967 208.461704,182.368957 L151.107561,126.214385 C150.496171,125.615783 149.504911,125.615783 148.893521,126.214385 C148.893517,126.214389 148.893514,126.214393 148.89351,126.214396 L91.5405888,182.368927 C89.095052,184.763359 85.1300133,184.763399 82.6844276,182.369014 C82.6844133,182.369 82.684398,182.368986 82.6843827,182.36897 L1.87196327,103.246785 C-0.573596939,100.852377 -0.573596939,96.9702735 1.87196327,94.5758653 L19.7936929,77.028998 C22.2392531,74.6345898 26.2042918,74.6345898 28.6498531,77.028998 L86.0048306,133.184355 C86.6162214,133.782957 87.6074796,133.782957 88.2188704,133.184355 C88.2188796,133.184346 88.2188878,133.184338 88.2188969,133.184331 L145.571,77.028998 C148.016505,74.6345347 151.981544,74.6344449 154.427161,77.028798 C154.427195,77.0288316 154.427229,77.0288653 154.427262,77.028899 L211.782164,133.184331 C212.393554,133.782932 213.384814,133.782932 213.996204,133.184331 L271.350179,77.0300061 C273.79574,74.6355969 277.760778,74.6355969 280.206339,77.0300061 Z' id='WalletConnect'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/svg%3E",Ea="WalletConnect",ka=300,Ca="rgb(64, 153, 255)",Nr="walletconnect-wrapper",Kt="walletconnect-style-sheet",Mr="walletconnect-qrcode-modal",Sa="walletconnect-qrcode-close",Lr="walletconnect-qrcode-text",xa="walletconnect-connect-button";function Ia(t){return p.createElement("div",{className:"walletconnect-modal__header"},p.createElement("img",{src:ba,className:"walletconnect-modal__headerLogo"}),p.createElement("p",null,Ea),p.createElement("div",{className:"walletconnect-modal__close__wrapper",onClick:t.onClose},p.createElement("div",{id:Sa,className:"walletconnect-modal__close__icon"},p.createElement("div",{className:"walletconnect-modal__close__line1"}),p.createElement("div",{className:"walletconnect-modal__close__line2"}))))}function Ra(t){return p.createElement("a",{className:"walletconnect-connect__button",href:t.href,id:xa+"-"+t.name,onClick:t.onClick,rel:"noopener noreferrer",style:{backgroundColor:t.color},target:"_blank"},t.name)}var Ta="data:image/svg+xml,%3Csvg width='8' height='18' viewBox='0 0 8 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.586301 0.213898C0.150354 0.552968 0.0718197 1.18124 0.41089 1.61719L5.2892 7.88931C5.57007 8.25042 5.57007 8.75608 5.2892 9.11719L0.410889 15.3893C0.071819 15.8253 0.150353 16.4535 0.586301 16.7926C1.02225 17.1317 1.65052 17.0531 1.98959 16.6172L6.86791 10.3451C7.7105 9.26174 7.7105 7.74476 6.86791 6.66143L1.98959 0.38931C1.65052 -0.0466374 1.02225 -0.125172 0.586301 0.213898Z' fill='%233C4252'/%3E %3C/svg%3E";function Oa(t){var e=t.color,n=t.href,r=t.name,o=t.logo,i=t.onClick;return p.createElement("a",{className:"walletconnect-modal__base__row",href:n,onClick:i,rel:"noopener noreferrer",target:"_blank"},p.createElement("h3",{className:"walletconnect-modal__base__row__h3"},r),p.createElement("div",{className:"walletconnect-modal__base__row__right"},p.createElement("div",{className:"walletconnect-modal__base__row__right__app-icon",style:{background:"url('"+o+"') "+e,backgroundSize:"100%"}}),p.createElement("img",{src:Ta,className:"walletconnect-modal__base__row__right__caret"})))}function Na(t){var e=t.color,n=t.href,r=t.name,o=t.logo,i=t.onClick,c=window.innerWidth<768?(r.length>8?2.5:2.7)+"vw":"inherit";return p.createElement("a",{className:"walletconnect-connect__button__icon_anchor",href:n,onClick:i,rel:"noopener noreferrer",target:"_blank"},p.createElement("div",{className:"walletconnect-connect__button__icon",style:{background:"url('"+o+"') "+e,backgroundSize:"100%"}}),p.createElement("div",{style:{fontSize:c},className:"walletconnect-connect__button__text"},r))}var Ma=5,Me=12;function La(t){var e=O.isAndroid(),n=p.useState(""),r=n[0],o=n[1],i=p.useState(""),c=i[0],l=i[1],d=p.useState(1),_=d[0],m=d[1],s=c?t.links.filter(function(f){return f.name.toLowerCase().includes(c.toLowerCase())}):t.links,w=t.errorMessage,v=c||s.length>Ma,k=Math.ceil(s.length/Me),R=[(_-1)*Me+1,_*Me],S=s.length?s.filter(function(f,g){return g+1>=R[0]&&g+1<=R[1]}):[],a=!e&&k>1,u=void 0;function h(f){o(f.target.value),clearTimeout(u),f.target.value?u=setTimeout(function(){l(f.target.value),m(1)},1e3):(o(""),l(""),m(1))}return p.createElement("div",null,p.createElement("p",{id:Lr,className:"walletconnect-qrcode__text"},e?t.text.connect_mobile_wallet:t.text.choose_preferred_wallet),!e&&p.createElement("input",{className:"walletconnect-search__input",placeholder:"Search",value:r,onChange:h}),p.createElement("div",{className:"walletconnect-connect__buttons__wrapper"+(e?"__android":v&&s.length?"__wrap":"")},e?p.createElement(Ra,{name:t.text.connect,color:Ca,href:t.uri,onClick:p.useCallback(function(){O.saveMobileLinkInfo({name:"Unknown",href:t.uri})},[])}):S.length?S.map(function(f){var g=f.color,b=f.name,y=f.shortName,T=f.logo,I=O.formatIOSMobile(t.uri,f),N=p.useCallback(function(){O.saveMobileLinkInfo({name:b,href:I})},[S]);return v?p.createElement(Na,{color:g,href:I,name:y||b,logo:T,onClick:N}):p.createElement(Oa,{color:g,href:I,name:b,logo:T,onClick:N})}):p.createElement(p.Fragment,null,p.createElement("p",null,w.length?t.errorMessage:t.links.length&&!s.length?t.text.no_wallets_found:t.text.loading))),a&&p.createElement("div",{className:"walletconnect-modal__footer"},Array(k).fill(0).map(function(f,g){var b=g+1,y=_===b;return p.createElement("a",{style:{margin:"auto 10px",fontWeight:y?"bold":"normal"},onClick:function(){return m(b)}},b)})))}function qa(t){var e=!!t.message.trim();return p.createElement("div",{className:"walletconnect-qrcode__notification"+(e?" notification__show":"")},t.message)}var Aa=function(t){try{var e="";return Promise.resolve(Or.toString(t,{margin:0,type:"svg"})).then(function(n){return typeof n=="string"&&(e=n.replace("<svg",'<svg class="walletconnect-qrcode__image"')),e})}catch(n){return Promise.reject(n)}};function Ua(t){var e=p.useState(""),n=e[0],r=e[1],o=p.useState(""),i=o[0],c=o[1];p.useEffect(function(){try{return Promise.resolve(Aa(t.uri)).then(function(d){c(d)})}catch(d){Promise.reject(d)}},[]);var l=function(){var d=ga(t.uri);d?(r(t.text.copied_to_clipboard),setInterval(function(){return r("")},1200)):(r("Error"),setInterval(function(){return r("")},1200))};return p.createElement("div",null,p.createElement("p",{id:Lr,className:"walletconnect-qrcode__text"},t.text.scan_qrcode_with_wallet),p.createElement("div",{dangerouslySetInnerHTML:{__html:i}}),p.createElement("div",{className:"walletconnect-modal__footer"},p.createElement("a",{onClick:l},t.text.copy_to_clipboard)),p.createElement(qa,{message:n}))}function $a(t){var e=O.isAndroid(),n=O.isMobile(),r=n?t.qrcodeModalOptions&&t.qrcodeModalOptions.mobileLinks?t.qrcodeModalOptions.mobileLinks:void 0:t.qrcodeModalOptions&&t.qrcodeModalOptions.desktopLinks?t.qrcodeModalOptions.desktopLinks:void 0,o=p.useState(!1),i=o[0],c=o[1],l=p.useState(!1),d=l[0],_=l[1],m=p.useState(!n),s=m[0],w=m[1],v={mobile:n,text:t.text,uri:t.uri,qrcodeModalOptions:t.qrcodeModalOptions},k=p.useState(""),R=k[0],S=k[1],a=p.useState(!1),u=a[0],h=a[1],f=p.useState([]),g=f[0],b=f[1],y=p.useState(""),T=y[0],I=y[1],N=function(){d||i||r&&!r.length||g.length>0||p.useEffect(function(){var $r=function(){try{if(e)return Promise.resolve();c(!0);var Ie=wa(function(){var X=t.qrcodeModalOptions&&t.qrcodeModalOptions.registryUrl?t.qrcodeModalOptions.registryUrl:O.getWalletRegistryUrl();return Promise.resolve(fetch(X)).then(function(Pr){return Promise.resolve(Pr.json()).then(function(Dr){var jr=Dr.listings,Hr=n?"mobile":"desktop",_e=O.getMobileLinkRegistry(O.formatMobileRegistry(jr,Hr),r);c(!1),_(!0),I(_e.length?"":t.text.no_supported_wallets),b(_e);var St=_e.length===1;St&&(S(O.formatIOSMobile(t.uri,_e[0])),w(!0)),h(St)})})},function(X){c(!1),_(!0),I(t.text.something_went_wrong),console.error(X)});return Promise.resolve(Ie&&Ie.then?Ie.then(function(){}):void 0)}catch(X){return Promise.reject(X)}};$r()})};N();var Ur=n?s:!s;return p.createElement("div",{id:Mr,className:"walletconnect-qrcode__base animated fadeIn"},p.createElement("div",{className:"walletconnect-modal__base"},p.createElement(Ia,{onClose:t.onClose}),u&&s?p.createElement("div",{className:"walletconnect-modal__single_wallet"},p.createElement("a",{onClick:function(){return O.saveMobileLinkInfo({name:g[0].name,href:R})},href:R,rel:"noopener noreferrer",target:"_blank"},t.text.connect_with+" "+(u?g[0].name:"")+" ›")):e||i||!i&&g.length?p.createElement("div",{className:"walletconnect-modal__mobile__toggle"+(Ur?" right__selected":"")},p.createElement("div",{className:"walletconnect-modal__mobile__toggle_selector"}),n?p.createElement(p.Fragment,null,p.createElement("a",{onClick:function(){return w(!1),N()}},t.text.mobile),p.createElement("a",{onClick:function(){return w(!0)}},t.text.qrcode)):p.createElement(p.Fragment,null,p.createElement("a",{onClick:function(){return w(!0)}},t.text.qrcode),p.createElement("a",{onClick:function(){return w(!1),N()}},t.text.desktop))):null,p.createElement("div",null,s||!e&&!i&&!g.length?p.createElement(Ua,Object.assign({},v)):p.createElement(La,Object.assign({},v,{links:g,errorMessage:T})))))}var Pa={choose_preferred_wallet:"Wähle bevorzugte Wallet",connect_mobile_wallet:"Verbinde mit Mobile Wallet",scan_qrcode_with_wallet:"Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",connect:"Verbinden",qrcode:"QR-Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"In die Zwischenablage kopieren",copied_to_clipboard:"In die Zwischenablage kopiert!",connect_with:"Verbinden mit Hilfe von",loading:"Laden...",something_went_wrong:"Etwas ist schief gelaufen",no_supported_wallets:"Es gibt noch keine unterstützten Wallet",no_wallets_found:"keine Wallet gefunden"},Da={choose_preferred_wallet:"Choose your preferred wallet",connect_mobile_wallet:"Connect to Mobile Wallet",scan_qrcode_with_wallet:"Scan QR code with a WalletConnect-compatible wallet",connect:"Connect",qrcode:"QR Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"Copy to clipboard",copied_to_clipboard:"Copied to clipboard!",connect_with:"Connect with",loading:"Loading...",something_went_wrong:"Something went wrong",no_supported_wallets:"There are no supported wallets yet",no_wallets_found:"No wallets found"},ja={choose_preferred_wallet:"Elige tu billetera preferida",connect_mobile_wallet:"Conectar a billetera móvil",scan_qrcode_with_wallet:"Escanea el código QR con una billetera compatible con WalletConnect",connect:"Conectar",qrcode:"Código QR",mobile:"Móvil",desktop:"Desktop",copy_to_clipboard:"Copiar",copied_to_clipboard:"Copiado!",connect_with:"Conectar mediante",loading:"Cargando...",something_went_wrong:"Algo salió mal",no_supported_wallets:"Todavía no hay billeteras compatibles",no_wallets_found:"No se encontraron billeteras"},Ha={choose_preferred_wallet:"Choisissez votre portefeuille préféré",connect_mobile_wallet:"Se connecter au portefeuille mobile",scan_qrcode_with_wallet:"Scannez le QR code avec un portefeuille compatible WalletConnect",connect:"Se connecter",qrcode:"QR Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"Copier",copied_to_clipboard:"Copié!",connect_with:"Connectez-vous à l'aide de",loading:"Chargement...",something_went_wrong:"Quelque chose a mal tourné",no_supported_wallets:"Il n'y a pas encore de portefeuilles pris en charge",no_wallets_found:"Aucun portefeuille trouvé"},Wa={choose_preferred_wallet:"원하는 지갑을 선택하세요",connect_mobile_wallet:"모바일 지갑과 연결",scan_qrcode_with_wallet:"WalletConnect 지원 지갑에서 QR코드를 스캔하세요",connect:"연결",qrcode:"QR 코드",mobile:"모바일",desktop:"데스크탑",copy_to_clipboard:"클립보드에 복사",copied_to_clipboard:"클립보드에 복사되었습니다!",connect_with:"와 연결하다",loading:"로드 중...",something_went_wrong:"문제가 발생했습니다.",no_supported_wallets:"아직 지원되는 지갑이 없습니다",no_wallets_found:"지갑을 찾을 수 없습니다"},Fa={choose_preferred_wallet:"Escolha sua carteira preferida",connect_mobile_wallet:"Conectar-se à carteira móvel",scan_qrcode_with_wallet:"Ler o código QR com uma carteira compatível com WalletConnect",connect:"Conectar",qrcode:"Código QR",mobile:"Móvel",desktop:"Desktop",copy_to_clipboard:"Copiar",copied_to_clipboard:"Copiado!",connect_with:"Ligar por meio de",loading:"Carregamento...",something_went_wrong:"Algo correu mal",no_supported_wallets:"Ainda não há carteiras suportadas",no_wallets_found:"Nenhuma carteira encontrada"},Ba={choose_preferred_wallet:"选择你的钱包",connect_mobile_wallet:"连接至移动端钱包",scan_qrcode_with_wallet:"使用兼容 WalletConnect 的钱包扫描二维码",connect:"连接",qrcode:"二维码",mobile:"移动",desktop:"桌面",copy_to_clipboard:"复制到剪贴板",copied_to_clipboard:"复制到剪贴板成功！",connect_with:"通过以下方式连接",loading:"正在加载...",something_went_wrong:"出了问题",no_supported_wallets:"目前还没有支持的钱包",no_wallets_found:"没有找到钱包"},za={choose_preferred_wallet:"کیف پول مورد نظر خود را انتخاب کنید",connect_mobile_wallet:"به کیف پول موبایل وصل شوید",scan_qrcode_with_wallet:"کد QR را با یک کیف پول سازگار با WalletConnect اسکن کنید",connect:"اتصال",qrcode:"کد QR",mobile:"سیار",desktop:"دسکتاپ",copy_to_clipboard:"کپی به کلیپ بورد",copied_to_clipboard:"در کلیپ بورد کپی شد!",connect_with:"ارتباط با",loading:"...بارگذاری",something_went_wrong:"مشکلی پیش آمد",no_supported_wallets:"هنوز هیچ کیف پول پشتیبانی شده ای وجود ندارد",no_wallets_found:"هیچ کیف پولی پیدا نشد"},Zt={de:Pa,en:Da,es:ja,fr:Ha,ko:Wa,pt:Fa,zh:Ba,fa:za};function Va(){var t=O.getDocumentOrThrow(),e=t.getElementById(Kt);e&&t.head.removeChild(e);var n=t.createElement("style");n.setAttribute("id",Kt),n.innerText=ya,t.head.appendChild(n)}function Qa(){var t=O.getDocumentOrThrow(),e=t.createElement("div");return e.setAttribute("id",Nr),t.body.appendChild(e),e}function qr(){var t=O.getDocumentOrThrow(),e=t.getElementById(Mr);e&&(e.className=e.className.replace("fadeIn","fadeOut"),setTimeout(function(){var n=t.getElementById(Nr);n&&t.body.removeChild(n)},ka))}function Ja(t){return function(){qr(),t&&t()}}function Ga(){var t=O.getNavigatorOrThrow().language.split("-")[0]||"en";return Zt[t]||Zt.en}function Ya(t,e,n){Va();var r=Qa();p.render(p.createElement($a,{text:Ga(),uri:t,onClose:Ja(e),qrcodeModalOptions:n}),r)}function Ka(){qr()}var Ar=function(){return typeof Re<"u"&&typeof Re.versions<"u"&&typeof Re.versions.node<"u"};function Za(t,e,n){console.log(t),Ar()?va(t):Ya(t,e,n)}function Xa(){Ar()||Ka()}var ec={open:Za,close:Xa},tc=ec;const nc=Be(tc);class rc extends go{constructor(e){super(),this.events=new en,this.accounts=[],this.chainId=1,this.pending=!1,this.bridge="https://bridge.walletconnect.org",this.qrcode=!0,this.qrcodeModalOptions=void 0,this.opts=e,this.chainId=(e==null?void 0:e.chainId)||this.chainId,this.wc=this.register(e)}get connected(){return typeof this.wc<"u"&&this.wc.connected}get connecting(){return this.pending}get connector(){return this.wc=this.register(this.opts),this.wc}on(e,n){this.events.on(e,n)}once(e,n){this.events.once(e,n)}off(e,n){this.events.off(e,n)}removeListener(e,n){this.events.removeListener(e,n)}async open(e){if(this.connected){this.onOpen();return}return new Promise((n,r)=>{this.on("error",o=>{r(o)}),this.on("open",()=>{n()}),this.create(e)})}async close(){typeof this.wc>"u"||(this.wc.connected&&this.wc.killSession(),this.onClose())}async send(e){this.wc=this.register(this.opts),this.connected||await this.open(),this.sendPayload(e).then(n=>this.events.emit("payload",n)).catch(n=>this.events.emit("payload",It(e.id,n.message)))}register(e){if(this.wc)return this.wc;this.opts=e||this.opts,this.bridge=e!=null&&e.connector?e.connector.bridge:(e==null?void 0:e.bridge)||"https://bridge.walletconnect.org",this.qrcode=typeof(e==null?void 0:e.qrcode)>"u"||e.qrcode!==!1,this.chainId=typeof(e==null?void 0:e.chainId)<"u"?e.chainId:this.chainId,this.qrcodeModalOptions=e==null?void 0:e.qrcodeModalOptions;const n={bridge:this.bridge,qrcodeModal:this.qrcode?nc:void 0,qrcodeModalOptions:this.qrcodeModalOptions,storageId:e==null?void 0:e.storageId,signingMethods:e==null?void 0:e.signingMethods,clientMeta:e==null?void 0:e.clientMeta};if(this.wc=typeof(e==null?void 0:e.connector)<"u"?e.connector:new Zs(n),typeof this.wc>"u")throw new Error("Failed to register WalletConnect connector");return this.wc.accounts.length&&(this.accounts=this.wc.accounts),this.wc.chainId&&(this.chainId=this.wc.chainId),this.registerConnectorEvents(),this.wc}onOpen(e){this.pending=!1,e&&(this.wc=e),this.events.emit("open")}onClose(){this.pending=!1,this.wc&&(this.wc=void 0),this.events.emit("close")}onError(e,n="Failed or Rejected Request",r=-32e3){const o={id:e.id,jsonrpc:e.jsonrpc,error:{code:r,message:n}};return this.events.emit("payload",o),o}create(e){this.wc=this.register(this.opts),this.chainId=e||this.chainId,!(this.connected||this.pending)&&(this.pending=!0,this.registerConnectorEvents(),this.wc.createSession({chainId:this.chainId}).then(()=>this.events.emit("created")).catch(n=>this.events.emit("error",n)))}registerConnectorEvents(){this.wc=this.register(this.opts),this.wc.on("connect",e=>{var n,r;if(e){this.events.emit("error",e);return}this.accounts=((n=this.wc)===null||n===void 0?void 0:n.accounts)||[],this.chainId=((r=this.wc)===null||r===void 0?void 0:r.chainId)||this.chainId,this.onOpen()}),this.wc.on("disconnect",e=>{if(e){this.events.emit("error",e);return}this.onClose()}),this.wc.on("modal_closed",()=>{this.events.emit("error",new Error("User closed modal"))}),this.wc.on("session_update",(e,n)=>{const{accounts:r,chainId:o}=n.params[0];(!this.accounts||r&&this.accounts!==r)&&(this.accounts=r,this.events.emit("accountsChanged",r)),(!this.chainId||o&&this.chainId!==o)&&(this.chainId=o,this.events.emit("chainChanged",o))})}async sendPayload(e){this.wc=this.register(this.opts);try{const n=await this.wc.unsafeSend(e);return this.sanitizeResponse(n)}catch(n){return this.onError(e,n.message)}}sanitizeResponse(e){return typeof e.error<"u"&&typeof e.error.code>"u"?It(e.id,e.error.message,e.error.data):e}}class sc{constructor(e){this.events=new en,this.rpc={infuraId:e==null?void 0:e.infuraId,custom:e==null?void 0:e.rpc},this.signer=new jt(new rc(e));const n=this.signer.connection.chainId||(e==null?void 0:e.chainId)||1;this.http=this.setHttpProvider(n),this.registerEventListeners()}get connected(){return this.signer.connection.connected}get connector(){return this.signer.connection.connector}get accounts(){return this.signer.connection.accounts}get chainId(){return this.signer.connection.chainId}get rpcUrl(){var e;return((e=this.http)===null||e===void 0?void 0:e.connection).url||""}async request(e){switch(e.method){case"eth_requestAccounts":return await this.connect(),this.signer.connection.accounts;case"eth_accounts":return this.signer.connection.accounts;case"eth_chainId":return this.signer.connection.chainId}if(tt.includes(e.method))return this.signer.request(e);if(typeof this.http>"u")throw new Error(`Cannot request JSON-RPC method (${e.method}) without provided rpc url`);return this.http.request(e)}sendAsync(e,n){this.request(e).then(r=>n(null,r)).catch(r=>n(r,void 0))}async enable(){return await this.request({method:"eth_requestAccounts"})}async connect(){this.signer.connection.connected||await this.signer.connect()}async disconnect(){this.signer.connection.connected&&await this.signer.disconnect()}on(e,n){this.events.on(e,n)}once(e,n){this.events.once(e,n)}removeListener(e,n){this.events.removeListener(e,n)}off(e,n){this.events.off(e,n)}get isWalletConnect(){return!0}registerEventListeners(){this.signer.connection.on("accountsChanged",e=>{this.events.emit("accountsChanged",e)}),this.signer.connection.on("chainChanged",e=>{this.http=this.setHttpProvider(e),this.events.emit("chainChanged",e)}),this.signer.on("disconnect",()=>{this.events.emit("disconnect")})}setHttpProvider(e){const n=Hn(e,this.rpc);return typeof n>"u"?void 0:new jt(new vo(n))}}export{sc as default};
