import{jsxs as M,Fragment as q,jsx as r}from"react/jsx-runtime";import{g as v,Q as L,S as C,T as I,U as Y,c as $}from"./@lazarv/react-server.C71Mx6-w.mjs";import{u}from"./entrypoint.BX5zjuDc.mjs";import A from"./(root).page.ZA6Qa1eX.mjs";import{_ as D}from"./page.Dmqq9ymA.mjs";import"node:path";import"node:url";import"node:async_hooks";import"node:worker_threads";import"picocolors";import"react";import"react-server-dom-webpack/server.edge";const H={"/home/jinwatanabe/workspace/qiit/tech-article/src/app/@pageName/(root).page.tsx":A},{default:O,...d}=D,T=d?.frontmatter?.ttl??d?.frontmatter?.revalidate??d?.ttl??d?.revalidate,Q=typeof T=="number"?L(O,T):O,{default:w,...y}=await import("./(root).layout.D4VX2zba.mjs"),B=y?.frontmatter?.ttl??y?.frontmatter?.revalidate??y?.ttl??y?.revalidate,U=typeof B=="number"?L(w,B):w;let x=null;function _e(){if(!x){const l=[...v(C)??[]],i=v(I),n=v(Y);if(n){const c=Object.values(n.server).find(t=>t.src?.endsWith("editor/page.tsx")||t.src?.startsWith("virtual:")&&t.src?.includes("editor/page.tsx"))?.file;l.unshift(...i?.(c));const g=Object.values(n.server).find(t=>t.src?.endsWith("(root).layout.tsx")||t.src?.startsWith("virtual:")&&t.src?.includes("editor/page.tsx"))?.file;l.unshift(...i?.(g));const m=Object.values(n.server).find(t=>t.src?.endsWith("@pageName/(root).page.tsx"))?.file;l.unshift(...i?.(m))}x=[...new Set(l)]}$(C,x)}const se=l=>{const i={pageName:[["/home/jinwatanabe/workspace/qiit/tech-article/src/app/@pageName/(root).page.tsx","/","pageName","page"]]},n={},c={},g={},m=Object.fromEntries(Object.entries(i).map(([e,a],X)=>{const f=[],F=a.filter(([,,,p])=>p==="page");for(const[p,s,o,N]of F){const S=u(s,{exact:!0});if(S){f.push({src:p,type:N,path:s,params:S,loading:typeof loadingComponents=="object"?loadingComponents.get(n[o]?.find(([,_,,])=>s===_)?.[0]??n[o]?.find(([,_])=>u(_))?.[0]??null)??null:null,fallback:typeof fallbackComponents=="object"?fallbackComponents.get(g[o]?.find(([,_,,])=>s===_)?.[0]??g[o]?.find(([,_])=>u(_))?.[0]??null)??null:null,error:typeof errorBoundaryComponents=="object"?errorBoundaryComponents.get(c[o]?.find(([,_,,])=>s===_)?.[0]??c[o]?.find(([,_])=>u(_))?.[0]??null)??null:null});break}}if(f.length===0){const p=a.find(([,,s,o])=>e===s&&o==="default");if(p){const[s,o,,N]=p;f.push({src:s,type:N,path:o,params:u(o,{exact:!1})})}}return[e,f.length>0?f:null]})),t=m.pageName?.find(e=>e.path==="/"),b=H[t?.src],j=t?.error,k=t?.fallback,h=t?.loading,W=j?({key:e,...a})=>r(ErrorBoundary,{component:j,fallback:k?r(k,{}):h?r(h,{}):null,children:r(b,{...a})},e):h?({key:e,...a})=>r(Suspense,{fallback:r(h,{}),children:r(b,{...a})},e):({key:e,...a})=>r(b,{...a},e),E=typeof errorBoundaryComponents=="object"?errorBoundaryComponents.get(c.pageName?.find(([,e,,])=>e==="/")?.[0]??c.pageName?.find(([,e])=>u(e))?.[0]??null)??null:null,P=v(C);return M(q,{children:[P.map(e=>{const a=e?.id||e;return r("link",{rel:"stylesheet",href:a,precedence:"default"},a)}),r(U,{pageName:m.pageName?.find(e=>e.path==="/")&&W({key:"0_pageName_0",...m.pageName?.find(e=>e.path==="/")?.params??{}})||(E?r(ErrorBoundary,{component:E}):null),children:r(Q,{...d,...l})})]})};export{se as default,_e as init$};
