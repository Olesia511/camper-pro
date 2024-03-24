import{u as n,j as t,r as p,a as v}from"./index-BBxT-UKV.js";import{r as j,s as S,a as m,F as I,b as L,C as F}from"./CampersList-ByK7PVMy.js";const R=n(j.Card)`
  width: 360px;
  margin-right: 64px;
`,B=n.label`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.color.greyPlaceholder};
  margin-bottom: 8px;
`,W=n.div`
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
`,z=n(j.Input)`
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
`,E=n.svg`
  width: 18px;
  height: 20px;
  stroke: ${e=>e.theme.color.black};
  fill: none;
  margin-right: 8px;
`,T=n.svg`
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
`,V=n.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.color.grey};

  margin-bottom: 14px;
`,N=n.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  height: 95px;
  margin-bottom: 64px;
`,O=n.label`
  width: 80px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
`,q=n.li`
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
`,P=n.input`
  position: absolute;
  height: 100%;
  width: 100%;
  margin: 0;
  cursor: pointer;
  z-index: 2;
  opacity: 0;
  border: 1px solid ${e=>e.theme.color.blackSecond};
`,A=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`,G=n.svg`
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
`,D=n.li`
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
`,K=n.input`
  position: absolute;
  height: 100%;
  width: 100%;
  margin: 0;
  cursor: pointer;
  z-index: 2;
  opacity: 0;
  border: 1px solid ${e=>e.theme.color.blackSecond};
`,H=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`,J=n.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  flex-direction: row;
  margin-bottom: 32px;
`,M=n.label`
  width: 90px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
`,Q=()=>{function e(){const[d,w]=p.useState(""),[x,y]=p.useState([!0,!1,!1]),[g,C]=p.useState([!1,!1,!1,!1,!1]),f=v(S),a=[{icon:"icon-camper-1",name:"van",class:""},{icon:"icon-camper-2",name:"fully integrated",class:"fully-integrated"},{icon:"icon-camper-3",name:"alcove",class:""}],h=[{icon:"icon-wind",name:"AC",class:"",id:"airConditioner"},{icon:"icon-line-pd",name:"Automatic",class:"stroke",id:"transmission"},{icon:"icon-gastronomy",name:"Kitchen",class:"stroke",id:"kitchen"},{icon:"icon-tv",name:"TV",class:"stroke",id:"TV"},{icon:"icon-shower",name:"Shower/WC",class:"stroke",id:"shower"}],u=(i,o)=>{o?C(l=>{const c=[...l];return c[i]=!c[i],c}):y(l=>l.map((r,s)=>s===i))},$=i=>{const o={};return Object.entries(i).forEach(([l,c])=>{typeof c=="object"&&c!==null?Object.entries(c).forEach(([r,s])=>{o[r]=s}):o[l]=c}),o},b=i=>{i.preventDefault();let o=f;d!==""&&(o=f.filter(r=>r.location.toLowerCase().includes(d.toLocaleLowerCase())));const l=x.findIndex(r=>r);if(l!==-1){const r=a[l].name.toLocaleLowerCase();o=o.filter(s=>{if(L(s.form).toLocaleLowerCase()===r)return s})}const c=g.map((r,s)=>r?h[s].id:null).filter(Boolean);console.log("selectedCheckboxes",c),c.length>0&&(console.log("filteredItems chek",o),o=o.filter(r=>(console.log("15623156",r),$(r),c.every(s=>Object.keys(r).includes(s)),c.every(s=>r.details[s])))),console.log("Filtered by checkboxes:",o)};return t.jsx(t.Fragment,{children:t.jsx(R,{children:t.jsxs("form",{onSubmit:i=>b(i),children:[t.jsx(B,{children:"Location"}),t.jsxs(W,{children:[t.jsx(E,{children:t.jsx("use",{href:`${m}#icon-location`})}),t.jsx(z,{placeholder:"City",type:"text",onChange:i=>w(i.target.value),value:d})]}),t.jsx(V,{children:"Filters"}),t.jsx(k,{children:"Vehicle equipment"}),t.jsx(J,{children:g.map((i,o)=>t.jsxs(D,{className:i?"checked":"",children:[t.jsx(K,{id:h[o].id,type:"checkbox",checked:i,onChange:()=>u(o,!0)}),t.jsxs(H,{children:[t.jsx(G,{className:h[o].class,children:t.jsx("use",{href:`${m}#${h[o].icon}`})}),t.jsx(M,{children:h[o].name})]})]},o))}),t.jsx(k,{children:"Vehicle type"}),t.jsxs(N,{children:[x.map((i,o)=>t.jsxs(q,{className:i?`${a[o].class} checked`:`${a[o].class}`,children:[t.jsx(P,{id:a[o].name,type:"radio",name:"radio",checked:i,onChange:()=>u(o,!1)}),t.jsxs(A,{children:[t.jsx(T,{children:t.jsx("use",{href:`${m}#${a[o].icon}`})}),t.jsx(O,{htmlFor:a[o].name,children:a[o].name})]})]},o)),t.jsx("div",{})]}),t.jsx(I,{type:"submit",onClick:b,children:"Send"})]})})})}return t.jsx(t.Fragment,{children:e()})};function Z(){return t.jsxs("div",{className:"flex-style",children:[t.jsx(Q,{}),t.jsx(F,{catalog:"catalog"})]})}export{Z as default};
