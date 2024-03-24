import{u as n,j as t,r as p,a as I}from"./index-DMaGFBGH.js";import{r as j,s as L,a as m,f as F,F as R,b as B,C as W}from"./CampersList-CNhN9sMU.js";const z=n(j.Card)`
  width: 360px;
  margin-right: 64px;
`,E=n.label`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.color.greyPlaceholder};
  margin-bottom: 8px;
`,T=n.div`
  display: flex;
  align-items: center;

  border-radius: 10px;
  border: none;
  padding: 18px;
  height: 56px;
  background: ${e=>e.theme.color.whiteSecond};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: ${e=>e.theme.color.black};
  margin-bottom: 32px;
`,V=n(j.Input)`
  position: relative;

  border: none;
  padding: 8px 0;

  background: ${e=>e.theme.color.whiteSecond};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: ${e=>e.theme.color.black};

  &:focus,
  &:active {
    outline: 2px solid ${e=>e.theme.color.blackSecond};
  }

  &::placeholder {
    color: ${e=>e.theme.color.greyPlaceholder};
  }
`,N=n.svg`
  width: 18px;
  height: 20px;
  stroke: ${e=>e.theme.color.black};
  fill: none;
  margin-right: 8px;
`,O=n.svg`
  width: 40px;
  height: 28px;
  stroke: ${e=>e.theme.color.black};
  margin-bottom: 8px;
`,k=n.div`
  height: 48px;
  border-bottom: 1px solid ${e=>e.theme.color.blackThird};
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  margin-bottom: 24px;
`,P=n.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.color.grey};

  margin-bottom: 14px;
`,q=n.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  height: 95px;
  margin-bottom: 64px;
`,K=n.label`
  width: 80px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
`,A=n.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${e=>e.theme.color.blackSecond};
  border-radius: 10px;
  width: 106px;
  height: 95px;
  transition: all 300ms ease;

  &.fully-integrated {
    width: 128px;
  }
  &.checked {
    border-color: ${e=>e.theme.color.red};
    transform: scale(1.05);
  }
`,G=n.input`
  position: absolute;
  height: 100%;
  width: 100%;
  margin: 0;
  cursor: pointer;
  z-index: 2;
  opacity: 0;
  border: 1px solid ${e=>e.theme.color.blackSecond};
`,D=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`,U=n.svg`
  width: 32px;
  height: 32px;
  margin-bottom: 8px;
  fill: ${e=>e.theme.color.black};
  stroke: none;

  &.stroke {
    stroke: ${e=>e.theme.color.black};
    stroke-width: 1.8;
    fill: none;
  }
`,H=n.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${e=>e.theme.color.blackSecond};
  border-radius: 10px;
  width: 113px;
  height: 95px;
  transition: all 300ms ease;
  margin-right: 10px;

  &:nth-child(3n) {
    margin-right: 0;
  }

  &.checked {
    border-color: ${e=>e.theme.color.red};
    transform: scale(1.05);
  }
`,J=n.input`
  position: absolute;
  height: 100%;
  width: 100%;
  margin: 0;
  cursor: pointer;
  z-index: 2;
  opacity: 0;
  border: 1px solid ${e=>e.theme.color.blackSecond};
`,M=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`,Q=n.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  flex-direction: row;
  margin-bottom: 32px;
`,X=n.label`
  width: 90px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
`,Y=()=>{function e(){const[d,w]=p.useState(""),[x,y]=p.useState([!0,!1,!1]),[g,C]=p.useState([!1,!1,!1,!1,!1]),f=I(L),a=[{icon:"icon-camper-1",name:"panel truck",class:""},{icon:"icon-camper-2",name:"fully integrated",class:"fully-integrated"},{icon:"icon-camper-3",name:"alcove",class:""}],h=[{icon:"icon-wind",name:"AC",class:"",id:"airConditioner"},{icon:"icon-line-pd",name:"Automatic",class:"stroke",id:"transmission"},{icon:"icon-gastronomy",name:"Kitchen",class:"stroke",id:"kitchen"},{icon:"icon-tv",name:"TV",class:"stroke",id:"TV"},{icon:"icon-shower",name:"Shower/WC",class:"stroke",id:"shower"}],u=(i,o)=>{o?C(l=>{const r=[...l];return r[i]=!r[i],r}):y(l=>l.map((s,c)=>c===i))},$=i=>{const o={};return Object.entries(i).forEach(([l,r])=>{typeof r=="object"&&r!==null?Object.entries(r).forEach(([s,c])=>{o[s]=c}):o[l]=r}),o},b=i=>{i.preventDefault();let o=f;d!==""&&(o=f.filter(s=>s.location.toLowerCase().includes(d.toLocaleLowerCase())));const l=x.findIndex(s=>s);if(l!==-1){const s=a[l].name.toLocaleLowerCase();o=o.filter(c=>{if(B(c.form).toLocaleLowerCase()===s)return c})}const r=g.map((s,c)=>s?h[c].id:null).filter(Boolean);if(r.length>0)o=o.filter(s=>{const c=$(s);return r.every(S=>c.hasOwnProperty(S))});else return o;console.log("Filtered by checkboxes:",o)};return t.jsx(t.Fragment,{children:t.jsx(z,{children:t.jsxs("form",{onSubmit:i=>b(i),children:[t.jsx(E,{children:"Location"}),t.jsxs(T,{children:[t.jsx(N,{children:t.jsx("use",{href:`${m}#icon-location`})}),t.jsx(V,{placeholder:"City",type:"text",onChange:i=>w(i.target.value),value:d})]}),t.jsx(P,{children:"Filters"}),t.jsx(k,{children:"Vehicle equipment"}),t.jsx(Q,{children:g.map((i,o)=>t.jsxs(H,{className:i?"checked":"",children:[t.jsx(J,{id:h[o].id,type:"checkbox",checked:i,onChange:()=>u(o,!0)}),t.jsxs(M,{children:[t.jsx(U,{className:h[o].class,children:t.jsx("use",{href:`${m}#${h[o].icon}`})}),t.jsx(X,{children:h[o].name})]})]},o))}),t.jsx(k,{children:"Vehicle type"}),t.jsxs(q,{children:[x.map((i,o)=>t.jsxs(A,{className:i?`${a[o].class} checked`:`${a[o].class}`,children:[t.jsx(G,{id:a[o].name,type:"radio",name:"radio",checked:i,onChange:()=>u(o,!1)}),t.jsxs(D,{children:[t.jsx(O,{children:t.jsx("use",{href:`${m}#${a[o].icon}`})}),t.jsx(K,{htmlFor:a[o].name,children:F(a[o].name)})]})]},o)),t.jsx("div",{})]}),t.jsx(R,{type:"submit",onClick:b,children:"Send"})]})})})}return t.jsx(t.Fragment,{children:e()})};function ee(){return t.jsxs("div",{className:"flex-style",children:[t.jsx(Y,{}),t.jsx(W,{catalog:"catalog"})]})}export{ee as default};
