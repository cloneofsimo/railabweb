"use strict";(self.webpackChunkrailab=self.webpackChunkrailab||[]).push([[218],{2513:function(n,e,t){t.r(e),t.d(e,{Head:function(){return u}});var a=t(7294),r=t(4160),i=t(3100),s=t(4418),c=t(6521),l=t(6431),o=t(3838);e.default=()=>a.createElement(i.xu,{p:24,fontFamily:"-apple-system, Roboto, sans-serif, serif"},a.createElement(s.X,{as:"h1",mt:0,mb:16,maxW:"container.sm"},"Page not found"),a.createElement(c.x,{mb:12},"Sorry 😔, we couldn’t find what you were looking for.",a.createElement("br",null),null,a.createElement("br",null),a.createElement(l.z,null,a.createElement(o.r,{as:r.rU,to:"/"},"Go home"))));const u=()=>a.createElement("title",null,"Not found")},6431:function(n,e,t){t.d(e,{z:function(){return g}});var a=t(7294);var r=t(5227),[i,s]=(0,r.k)({strict:!1,name:"ButtonGroupContext"}),c=t(402),l=t(5432),o=t(5893);function u(n){const{children:e,className:t,...r}=n,i=(0,a.isValidElement)(e)?(0,a.cloneElement)(e,{"aria-hidden":!0,focusable:!1}):e,s=(0,l.cx)("chakra-button__icon",t);return(0,o.jsx)(c.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...r,className:s,children:i})}u.displayName="ButtonIcon";var m=t(295);function d(n){const{label:e,placement:t,spacing:r="0.5rem",children:i=(0,o.jsx)(m.$,{color:"currentColor",width:"1em",height:"1em"}),className:s,__css:u,...d}=n,f=(0,l.cx)("chakra-button__spinner",s),p="start"===t?"marginEnd":"marginStart",x=(0,a.useMemo)((()=>({display:"flex",alignItems:"center",position:e?"relative":"absolute",[p]:e?r:0,fontSize:"1em",lineHeight:"normal",...u})),[u,e,p,r]);return(0,o.jsx)(c.m.div,{className:f,...d,__css:x,children:i})}d.displayName="ButtonSpinner";var f=t(1103),p=t(5059),x=t(1639),h=t(3179),g=(0,p.G)(((n,e)=>{const t=s(),r=(0,x.mq)("Button",{...t,...n}),{isDisabled:i=(null==t?void 0:t.isDisabled),isLoading:u,isActive:m,children:p,leftIcon:g,rightIcon:N,loadingText:v,iconSpacing:y="0.5rem",type:_,spinner:k,spinnerPlacement:j="start",className:S,as:E,...w}=(0,h.Lr)(n),I=(0,a.useMemo)((()=>{const n={...null==r?void 0:r._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...r,...!!t&&{_focus:n}}}),[r,t]),{ref:q,type:C}=function(n){const[e,t]=(0,a.useState)(!n);return{ref:(0,a.useCallback)((n=>{n&&t("BUTTON"===n.tagName)}),[]),type:e?"button":void 0}}(E),B={rightIcon:N,leftIcon:g,iconSpacing:y,children:p};return(0,o.jsxs)(c.m.button,{ref:(0,f.qq)(e,q),as:E,type:null!=_?_:C,"data-active":(0,l.PB)(m),"data-loading":(0,l.PB)(u),__css:I,className:(0,l.cx)("chakra-button",S),...w,disabled:i||u,children:[u&&"start"===j&&(0,o.jsx)(d,{className:"chakra-button__spinner--start",label:v,placement:"start",spacing:y,children:k}),u?v||(0,o.jsx)(c.m.span,{opacity:0,children:(0,o.jsx)(b,{...B})}):(0,o.jsx)(b,{...B}),u&&"end"===j&&(0,o.jsx)(d,{className:"chakra-button__spinner--end",label:v,placement:"end",spacing:y,children:k})]})}));function b(n){const{leftIcon:e,rightIcon:t,children:a,iconSpacing:r}=n;return(0,o.jsxs)(o.Fragment,{children:[e&&(0,o.jsx)(u,{marginEnd:r,children:e}),a,t&&(0,o.jsx)(u,{marginStart:r,children:t})]})}g.displayName="Button"},3100:function(n,e,t){t.d(e,{xu:function(){return s}});var a=t(402),r=t(5059),i=t(5893),s=(0,a.m)("div");s.displayName="Box";var c=(0,r.G)((function(n,e){const{size:t,centerContent:a=!0,...r}=n,c=a?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,i.jsx)(s,{ref:e,boxSize:t,__css:{...c,flexShrink:0,flexGrow:0},...r})}));c.displayName="Square",(0,r.G)((function(n,e){const{size:t,...a}=n;return(0,i.jsx)(c,{size:t,ref:e,borderRadius:"9999px",...a})})).displayName="Circle"},4418:function(n,e,t){t.d(e,{X:function(){return o}});var a=t(5059),r=t(1639),i=t(3179),s=t(402),c=t(5432),l=t(5893),o=(0,a.G)((function(n,e){const t=(0,r.mq)("Heading",n),{className:a,...o}=(0,i.Lr)(n);return(0,l.jsx)(s.m.h2,{ref:e,className:(0,c.cx)("chakra-heading",n.className),...o,__css:t})}));o.displayName="Heading"},6521:function(n,e,t){t.d(e,{x:function(){return o}});var a=t(5059),r=t(1639),i=t(3179),s=t(402),c=t(5432);var l=t(5893),o=(0,a.G)((function(n,e){const t=(0,r.mq)("Text",n),{className:a,align:o,decoration:u,casing:m,...d}=(0,i.Lr)(n),f=function(n){const e=Object.assign({},n);for(let t in e)void 0===e[t]&&delete e[t];return e}({textAlign:n.align,textDecoration:n.decoration,textTransform:n.casing});return(0,l.jsx)(s.m.p,{ref:e,className:(0,c.cx)("chakra-text",n.className),...f,...d,__css:t})}));o.displayName="Text"},3838:function(n,e,t){t.d(e,{r:function(){return o}});var a=t(5059),r=t(1639),i=t(3179),s=t(402),c=t(5432),l=t(5893),o=(0,a.G)((function(n,e){const t=(0,r.mq)("Link",n),{className:a,isExternal:o,...u}=(0,i.Lr)(n);return(0,l.jsx)(s.m.a,{target:o?"_blank":void 0,rel:o?"noopener":void 0,ref:e,className:(0,c.cx)("chakra-link",a),...u,__css:t})}));o.displayName="Link"},1103:function(n,e,t){t.d(e,{lq:function(){return r},qq:function(){return i}});var a=t(7294);function r(...n){return e=>{n.forEach((n=>{!function(n,e){if(null!=n)if("function"!=typeof n)try{n.current=e}catch(t){throw new Error(`Cannot assign value '${e}' to ref '${n}'`)}else n(e)}(n,e)}))}}function i(...n){return(0,a.useMemo)((()=>r(...n)),n)}}}]);