"use strict";(self.webpackChunkrailab=self.webpackChunkrailab||[]).push([[652],{3180:function(e,t,r){r.r(t),r.d(t,{default:function(){return k}});var n=r(5785),a=r(7294),i=r(4160),o=r(3100),l=r(4418),s=r(5059),c=r(402),u=r(5893),m=(0,s.G)((function(e,t){const{templateAreas:r,gap:n,rowGap:a,columnGap:i,column:o,row:l,autoFlow:s,autoRows:m,templateRows:d,autoColumns:f,templateColumns:p,...g}=e,x={display:"grid",gridTemplateAreas:r,gridGap:n,gridRowGap:a,gridColumnGap:i,gridAutoColumns:f,gridColumn:o,gridRow:l,gridAutoFlow:s,gridAutoRows:m,gridTemplateRows:d,gridTemplateColumns:p};return(0,u.jsx)(c.m.div,{ref:t,__css:x,...g})}));m.displayName="Grid";var d=r(5119),f=r(4629),p=r(3951),g=(0,s.G)((function(e,t){const{columns:r,spacingX:n,spacingY:a,spacing:i,minChildWidth:o,...l}=e,s=(0,d.F)(),c=o?function(e,t){return(0,p.XQ)(e,(e=>{const r=(0,f.LP)("sizes",e,"number"==typeof(n=e)?`${n}px`:n)(t);var n;return null===e?null:`repeat(auto-fit, minmax(${r}, 1fr))`}))}(o,s):(g=r,(0,p.XQ)(g,(e=>null===e?null:`repeat(${e}, minmax(0, 1fr))`)));var g;return(0,u.jsx)(m,{ref:t,gap:i,columnGap:n,rowGap:a,templateColumns:c,...l})}));g.displayName="SimpleGrid";var x=(0,s.G)((function(e,t){const{htmlWidth:r,htmlHeight:n,alt:a,...i}=e;return(0,u.jsx)("img",{width:r,height:n,ref:t,alt:a,...i})}));x.displayName="NativeImage";var h=r(6245);function y(e,t=[]){const r=Object.assign({},e);for(const n of t)n in r&&delete r[n];return r}var b=(0,s.G)((function(e,t){const{fallbackSrc:r,fallback:n,src:i,srcSet:o,align:l,fit:s,loading:m,ignoreFallback:d,crossOrigin:f,fallbackStrategy:p="beforeLoadOrError",referrerPolicy:g,...b}=e,v=null!=m||d||!(void 0!==r||void 0!==n),C=function(e){const{loading:t,src:r,srcSet:n,onLoad:i,onError:o,crossOrigin:l,sizes:s,ignoreFallback:c}=e,[u,m]=(0,a.useState)("pending");(0,a.useEffect)((()=>{m(r?"loading":"pending")}),[r]);const d=(0,a.useRef)(),f=(0,a.useCallback)((()=>{if(!r)return;p();const e=new Image;e.src=r,l&&(e.crossOrigin=l),n&&(e.srcset=n),s&&(e.sizes=s),t&&(e.loading=t),e.onload=e=>{p(),m("loaded"),null==i||i(e)},e.onerror=e=>{p(),m("failed"),null==o||o(e)},d.current=e}),[r,l,n,s,i,o,t]),p=()=>{d.current&&(d.current.onload=null,d.current.onerror=null,d.current=null)};return(0,h.G)((()=>{if(!c)return"loading"===u&&f(),()=>{p()}}),[u,f,c]),c?"loaded":u}({...e,crossOrigin:f,ignoreFallback:v}),G=((e,t)=>"loaded"!==e&&"beforeLoadOrError"===t||"failed"===e&&"onError"===t)(C,p),S={ref:t,objectFit:s,objectPosition:l,...v?b:y(b,["onError","onLoad"])};return G?n||(0,u.jsx)(c.m.img,{as:x,className:"chakra-image__placeholder",src:r,...S}):(0,u.jsx)(c.m.img,{as:x,src:i,srcSet:o,crossOrigin:f,loading:m,referrerPolicy:g,className:"chakra-image",...S})}));b.displayName="Image";var v=r(5197),C=r(3179),G=r(1639),S=r(5432),j=(0,s.G)((function(e,t){const{className:r,centerContent:n,...a}=(0,C.Lr)(e),i=(0,G.mq)("Container",e);return(0,u.jsx)(c.m.div,{ref:t,className:(0,S.cx)("chakra-container",r),...a,__css:{...i,...n&&{display:"flex",flexDirection:"column",alignItems:"center"}}})}));j.displayName="Container";var w=r(9342),E=JSON.parse('{"professor":["Jemin Hwangbo"],"doctoral_students":["Yongjae Kim","Donghoon Youm","Choongin Lee","Suyoung Choi","Hyeongjun Kim","Gwanghyeon Ji"],"master_students":[]}');var k=()=>{const e=(0,i.K2)("2808876082").allFile.nodes,t=e.map((e=>{var t;return null===(t=e.childMdx)||void 0===t?void 0:t.frontmatter.title})).filter((e=>{for(const t in E)if(E[t].includes(e))return!1;return!0})),r={...E,master_students:[].concat((0,n.Z)(E.master_students),(0,n.Z)(t))};return a.createElement(a.Fragment,null,a.createElement(w.Z,null),a.createElement(o.xu,{maxW:"800px",mx:"auto",px:8,py:8},a.createElement(j,{maxW:"container.lg",mt:8},a.createElement(l.X,{as:"h1",size:"xl",mb:8,fontWeight:"bold",fontSize:{base:"3xl",md:"4xl"},textAlign:"center"},"Members"),Object.keys(r).map((t=>(t=>{const n=r[t]||[],i=e.filter((e=>{var t;return n.includes(null===(t=e.childMdx)||void 0===t?void 0:t.frontmatter.title)}));return a.createElement(o.xu,{mb:8},a.createElement(l.X,{as:"h2",size:"lg",mb:4},(e=>{const t=e.replace("_"," ");return t.charAt(0).toUpperCase()+t.slice(1)})(t)),a.createElement(g,{columns:[1,2,3],gap:4},i.map((e=>{var t,r,n,i;const s=null===(t=e.childMdx)||void 0===t?void 0:t.body.replace("Qualifications:","").trim();return a.createElement(o.xu,{key:e.childMdx.frontmatter.title,p:4,display:"flex",flexDirection:"column",alignItems:"center",borderRadius:"lg",textAlign:"center",boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px",transition:"transform 1s ease",_hover:{boxShadow:"rgba(149, 157, 165, 0.4) 0px 8px 24px",transform:"translateY(-4px)"}},a.createElement(b,{src:null===(r=e.childMdx)||void 0===r?void 0:r.frontmatter.featuredImage.childImageSharp.gatsbyImageData.images.fallback.src,alt:null===(n=e.childMdx)||void 0===n?void 0:n.frontmatter.title,objectFit:"cover",borderRadius:"lg",mb:4,width:"100%",height:"200px"}),a.createElement(l.X,{as:"h3",size:"md",mb:2,top:0},null===(i=e.childMdx)||void 0===i?void 0:i.frontmatter.title),a.createElement(o.xu,{justifyContent:"top",textAlign:"left"},a.createElement(v.QI,null,s.split("\n").map(((e,t)=>a.createElement(v.HC,{key:t,fontSize:"sm"},e.trim().replace("-","")))))))}))))})(t))))))}},5197:function(e,t,r){r.d(t,{GS:function(){return p},HC:function(){return x},QI:function(){return g}});var n=r(6877),a=r(5227),i=r(2495),o=r(5059),l=r(1639),s=r(3179),c=r(402),u=r(5893),[m,d]=(0,a.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),f=(0,o.G)((function(e,t){const r=(0,l.jC)("List",e),{children:n,styleType:a="none",stylePosition:o,spacing:d,...f}=(0,s.Lr)(e),p=(0,i.W)(n),g=d?{"& > *:not(style) ~ *:not(style)":{mt:d}}:{};return(0,u.jsx)(m,{value:r,children:(0,u.jsx)(c.m.ul,{ref:t,listStyleType:a,listStylePosition:o,role:"list",__css:{...r.container,...g},...f,children:p})})}));f.displayName="List";var p=(0,o.G)(((e,t)=>{const{as:r,...n}=e;return(0,u.jsx)(f,{ref:t,as:"ol",styleType:"decimal",marginStart:"1em",...n})}));p.displayName="OrderedList";var g=(0,o.G)((function(e,t){const{as:r,...n}=e;return(0,u.jsx)(f,{ref:t,as:"ul",styleType:"initial",marginStart:"1em",...n})}));g.displayName="UnorderedList";var x=(0,o.G)((function(e,t){const r=d();return(0,u.jsx)(c.m.li,{ref:t,...e,__css:r.item})}));x.displayName="ListItem",(0,o.G)((function(e,t){const r=d();return(0,u.jsx)(n.J,{ref:t,role:"presentation",...e,__css:r.icon})})).displayName="ListIcon"}}]);