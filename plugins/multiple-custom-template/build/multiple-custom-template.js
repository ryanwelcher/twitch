!function(){"use strict";var t,e={822:function(){var t=window.wp.blocks,e=JSON.parse('{"apiVersion":2,"name":"twitchstreams/multiple-custom-template","version":"0.1.0","title":"Test","category":"widgets","icon":"","description":"","supports":{"html":false},"textdomain":"twitchstreams","editorScript":"file:../../../../build/multiple-custom-template.js","editorStyle":"file:../../../../build/multiple-custom-template.css","style":"file:../../../../build/style-multiple-custom-template.css"}'),r=window.wp.element,o=window.wp.i18n,n=window.wp.blockEditor;const{name:i,...l}=e;(0,t.registerBlockType)(i,{...l,edit:function(){return(0,r.createElement)("p",(0,n.useBlockProps)(),(0,o.__)("Test – hello from the editor!","multiple-custom-template"))},save:function(){return(0,r.createElement)("p",n.useBlockProps.save(),(0,o.__)("Test – hello from the saved content!","multiple-custom-template"))}})}},r={};function o(t){var n=r[t];if(void 0!==n)return n.exports;var i=r[t]={exports:{}};return e[t](i,i.exports,o),i.exports}o.m=e,t=[],o.O=function(e,r,n,i){if(!r){var l=1/0;for(p=0;p<t.length;p++){r=t[p][0],n=t[p][1],i=t[p][2];for(var s=!0,u=0;u<r.length;u++)(!1&i||l>=i)&&Object.keys(o.O).every((function(t){return o.O[t](r[u])}))?r.splice(u--,1):(s=!1,i<l&&(l=i));if(s){t.splice(p--,1);var c=n();void 0!==c&&(e=c)}}return e}i=i||0;for(var p=t.length;p>0&&t[p-1][2]>i;p--)t[p]=t[p-1];t[p]=[r,n,i]},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t={71:0,171:0};o.O.j=function(e){return 0===t[e]};var e=function(e,r){var n,i,l=r[0],s=r[1],u=r[2],c=0;if(l.some((function(e){return 0!==t[e]}))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(u)var p=u(o)}for(e&&e(r);c<l.length;c++)i=l[c],o.o(t,i)&&t[i]&&t[i][0](),t[l[c]]=0;return o.O(p)},r=self.webpackChunkmultiple_custom_template=self.webpackChunkmultiple_custom_template||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var n=o.O(void 0,[171],(function(){return o(822)}));n=o.O(n)}();