import{j as F}from"../../../react/jsx-runtime.Bzy84PhA.mjs";import{r}from"../../../react.h85BbI97.mjs";import{useClient as G,FlightContext as w}from"./context.C11qnkA2.mjs";function S({url:e,target:n,local:o,root:u,transition:m,prefetch:_,ttl:d=1/0,revalidate:f,noCache:c,fallback:s,Component:a,onRefresh:y,onError:O,onClick:R,onFocus:j,onMouseOver:E,onTouchStart:P,children:l,...v}){const{refresh:T,prefetch:A}=G(),{url:i,outlet:h}=r.useContext(w),p=r.useCallback(async()=>{try{await T(n||e||(o?h||i:u?"PAGE_ROOT":void 0),{noCache:c,fallback:s,Component:a,revalidate:f}),y?.()}catch(t){O?.(t)}},[T,n,o,u,e,h,i,f,c,s,a,y,O]),C=r.useCallback(async t=>{t.preventDefault(),R?.(t),m!==!1&&!s?r.startTransition(p):p()},[m,s,R,p]),x=t=>()=>{t?.(),_===!0&&A(e||i,{outlet:n||(o?h:u?"PAGE_ROOT":void 0),ttl:d,noCache:c,revalidate:f})};return F.jsx("a",{...v,href:e,onClick:C,onFocus:x(j),onMouseOver:x(E),onTouchStart:x(P),children:l})}export{S as default};
