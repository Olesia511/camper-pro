import{u as i,j as t,r as d,a as B,b as W,s as f}from"./index-DrwTk2JP.js";import{r as C,s as z,a as g,f as E,F as w,b as T,C as V}from"./CampersList-CB2FgT36.js";const N=i(C.Card)`
  width: 360px;
  margin-right: 64px;
`,O=i.label`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.color.greyPlaceholder};
  margin-bottom: 8px;
`,P=i.div`
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
`,q=i(C.Input)`
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
`,K=i.svg`
  width: 18px;
  height: 20px;
  stroke: ${e=>e.theme.color.black};
  fill: none;
  margin-right: 8px;
`,A=i.svg`
  width: 40px;
  height: 28px;
  stroke: ${e=>e.theme.color.black};
  margin-bottom: 8px;
`,y=i.div`
  height: 48px;
  border-bottom: 1px solid ${e=>e.theme.color.blackThird};
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  margin-bottom: 24px;
`,D=i.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.color.grey};

  margin-bottom: 14px;
`,G=i.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  height: 95px;
  margin-bottom: 64px;
`,_=i.label`
  width: 80px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
`,U=i.li`
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
`,H=i.input`
  position: absolute;
  height: 100%;
  width: 100%;
  margin: 0;
  cursor: pointer;
  z-index: 2;
  opacity: 0;
  border: 1px solid ${e=>e.theme.color.blackSecond};
`,J=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`,M=i.svg`
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
`,Q=i.li`
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
`,X=i.input`
  position: absolute;
  height: 100%;
  width: 100%;
  margin: 0;
  cursor: pointer;
  z-index: 2;
  opacity: 0;
  border: 1px solid ${e=>e.theme.color.blackSecond};
`,Y=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`,Z=i.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  flex-direction: row;
  margin-bottom: 32px;
`,ee=i.label`
  width: 90px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
`,te=()=>{function e(){const[p,$]=d.useState(""),[u,v]=d.useState([!0,!1,!1]),[b,S]=d.useState([!1,!1,!1,!1,!1]),m=B(),j=W(z),a=[{icon:"icon-camper-1",name:"panel truck",class:""},{icon:"icon-camper-2",name:"fully integrated",class:"fully-integrated"},{icon:"icon-camper-3",name:"alcove",class:""}],h=[{icon:"icon-wind",name:"AC",class:"",id:"airConditioner"},{icon:"icon-line-pd",name:"Automatic",class:"stroke",id:"transmission"},{icon:"icon-gastronomy",name:"Kitchen",class:"stroke",id:"kitchen"},{icon:"icon-tv",name:"TV",class:"stroke",id:"TV"},{icon:"icon-shower",name:"Shower/WC",class:"stroke",id:"shower"}];d.useEffect(()=>{x(0,!1)},[]);const I=()=>{m(f([]))},x=(n,o)=>{o?S(l=>{const c=[...l];return c[n]=!c[n],c}):v(l=>l.map((s,r)=>r===n))},L=n=>{const o={};return Object.entries(n).forEach(([l,c])=>{typeof c=="object"&&c!==null?Object.entries(c).forEach(([s,r])=>{o[s]=r}):o[l]=c}),o},F=n=>{n.preventDefault();let o=j;p!==""&&(o=j.filter(s=>s.location.toLowerCase().includes(p.toLocaleLowerCase())));const l=u.findIndex(s=>s);if(l!==-1){const s=a[l].name.toLocaleLowerCase();o=o.filter(r=>{if(T(r.form).toLocaleLowerCase()===s)return r})}const c=b.map((s,r)=>s?h[r].id:null).filter(Boolean);if(c.length>0){o=o.filter(r=>{const k=L(r);return c.every(R=>k.hasOwnProperty(R))});const s=o.map(r=>r._id);m(f(s))}else{const s=o.map(r=>r._id);m(f(s))}};return t.jsx(t.Fragment,{children:t.jsxs(N,{children:[t.jsxs("form",{style:{marginBottom:"24px"},onSubmit:n=>F(n),children:[t.jsx(O,{children:"Location"}),t.jsxs(P,{children:[t.jsx(K,{children:t.jsx("use",{href:`${g}#icon-location`})}),t.jsx(q,{placeholder:"City",type:"text",onChange:n=>$(n.target.value),value:p})]}),t.jsx(D,{children:"Filters"}),t.jsx(y,{children:"Vehicle equipment"}),t.jsx(Z,{children:b.map((n,o)=>t.jsxs(Q,{className:n?"checked":"",children:[t.jsx(X,{id:h[o].id,type:"checkbox",checked:n,onChange:()=>x(o,!0)}),t.jsxs(Y,{children:[t.jsx(M,{className:h[o].class,children:t.jsx("use",{href:`${g}#${h[o].icon}`})}),t.jsx(ee,{children:h[o].name})]})]},o))}),t.jsx(y,{children:"Vehicle type"}),t.jsxs(G,{children:[u.map((n,o)=>t.jsxs(U,{className:n?`${a[o].class} checked`:`${a[o].class}`,children:[t.jsx(H,{id:a[o].name,type:"radio",name:"radio",checked:n,onChange:()=>x(o,!1)}),t.jsxs(J,{children:[t.jsx(A,{children:t.jsx("use",{href:`${g}#${a[o].icon}`})}),t.jsx(_,{htmlFor:a[o].name,children:E(a[o].name)})]})]},o)),t.jsx("div",{})]}),t.jsx(w,{type:"submit",children:"Send"})]}),t.jsx(w,{type:"submit",onClick:I,children:"Reset"})]})})}return t.jsx(t.Fragment,{children:e()})};function se(){return t.jsxs("div",{className:"flex-style",children:[t.jsx(te,{}),t.jsx(V,{catalog:"catalog"})]})}export{se as default};
