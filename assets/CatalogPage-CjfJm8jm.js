import{u as i,j as t,r as f,a as N,b as q,s as C}from"./index-BEcW1oX8.js";import{r as F,s as D,a as S,f as P,b as G,C as _}from"./CampersList-WNwfN90z.js";const K=i(F.Card)`
  width: 360px;
  margin-right: 64px;
`,U=i.label`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.color.greyPlaceholder};
  margin-bottom: 8px;
`,H=i.div`
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
`,J=i(F.Input)`
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
`,M=i.svg`
  width: 18px;
  height: 20px;
  stroke: ${e=>e.theme.color.black};
  fill: none;
  margin-right: 8px;
`,Q=i.svg`
  width: 40px;
  height: 28px;
  stroke: ${e=>e.theme.color.black};
  margin-bottom: 8px;
`,z=i.div`
  height: 48px;
  border-bottom: 1px solid ${e=>e.theme.color.blackThird};
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  margin-bottom: 24px;
`,X=i.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.color.grey};

  margin-bottom: 14px;
`,Y=i.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  height: 95px;
  margin-bottom: 64px;
`,Z=i.label`
  width: 80px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
`,ee=i.li`
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
`,te=i.input`
  position: absolute;
  height: 100%;
  width: 100%;
  margin: 0;
  cursor: pointer;
  z-index: 2;
  opacity: 0;
  border: 1px solid ${e=>e.theme.color.blackSecond};
`,oe=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`,ie=i.svg`
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
`,ne=i.li`
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
`,re=i.input`
  position: absolute;
  height: 100%;
  width: 100%;
  margin: 0;
  cursor: pointer;
  z-index: 2;
  opacity: 0;
  border: 1px solid ${e=>e.theme.color.blackSecond};
`,se=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`,ce=i.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  flex-direction: row;
  margin-bottom: 32px;
`,le=i.label`
  width: 90px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
`,W=i(F.Button)`
  border-radius: 200px;
  padding: 16px 60px;
  width: 160px;
  height: 56px;
  background: ${e=>e.theme.color.red};

  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: ${e=>e.theme.color.whiteOrigin};
  transition: border-color 300ms ease-in-out;

  &:hover,
  :active {
    background: ${e=>e.theme.color.redSecond};
  }
`,ae=e=>{const c=[];return Object.entries(e).forEach(([g,l])=>{typeof l=="object"&&l!==null?Object.entries(l).forEach(([u,b])=>{c.push({[u]:b})}):c.push({[g]:l})}),c},he=()=>{function e(){const[c,g]=f.useState(""),[l,u]=f.useState([!0,!1,!1]),[b,I]=f.useState([!1,!1,!1,!1,!1]),k=N(),$=q(D),E=$.map(n=>n._id);f.useEffect(()=>{k(C(E))},[]);const a=[{icon:"icon-camper-1",name:"panel truck",class:""},{icon:"icon-camper-2",name:"fully integrated",class:"fully-integrated"},{icon:"icon-camper-3",name:"alcove",class:""}],m=[{icon:"icon-wind",name:"AC",class:"",id:"airConditioner"},{icon:"icon-line-pd",name:"Automatic",class:"stroke",id:"transmission"},{icon:"icon-gastronomy",name:"Kitchen",class:"stroke",id:"kitchen"},{icon:"icon-tv",name:"TV",class:"stroke",id:"TV"},{icon:"icon-shower",name:"Shower/WC",class:"stroke",id:"shower"}];f.useEffect(()=>{v(0,!1)},[]);const A=()=>{k(C([])),g(""),u([!0,!1,!1]),I([!1,!1,!1,!1,!1])},v=(n,o)=>{o?I(j=>{const x=[...j];return x[n]=!x[n],x}):u(j=>j.map((T,r)=>r===n))},O=n=>{n.preventDefault();let o=[];if((()=>{if(c!==""){const r=$.filter(s=>s.location.toLowerCase().includes(c.toLowerCase()));o.push(r)}else o.push($)})(),(()=>{const r=o[0];if(r.length===0)return;let s=[];const h=l.findIndex(d=>d),p=a[h].name.toLowerCase();r.filter(d=>{G(d.form).toLowerCase()===p&&s.push(d)}),o=[...s]})(),(()=>{const r=o;if(r.length===0)return;const s=[];if(b.filter((h,p)=>{h===!0&&s.push(m[p].id)}),s.length>0){let h=[];r.map(p=>{const d=ae(p);let w=0;s.map(L=>{d.find(V=>{const B=Object.entries(V)[0],R=B[0],y=B[1];R===L&&typeof y=="string"&&y!==""&&(w+=1),R===L&&typeof y=="number"&&y>0&&(w+=1)})}),w===s.length&&h.push(p)}),o=[...h]}})(),o.length>0){const r=o.map(s=>s._id);k(C(r))}else k(C(null))};return t.jsx(t.Fragment,{children:t.jsxs(K,{children:[t.jsxs("form",{style:{marginBottom:"24px"},onSubmit:n=>O(n),children:[t.jsx(U,{children:"Location"}),t.jsxs(H,{children:[t.jsx(M,{children:t.jsx("use",{href:`${S}#icon-location`})}),t.jsx(J,{placeholder:"City",type:"text",onChange:n=>g(n.target.value),value:c})]}),t.jsx(X,{children:"Filters"}),t.jsx(z,{children:"Vehicle equipment"}),t.jsx(ce,{children:b.map((n,o)=>t.jsxs(ne,{className:n?"checked":"",children:[t.jsx(re,{id:m[o].id,type:"checkbox",checked:n,onChange:()=>v(o,!0)}),t.jsxs(se,{children:[t.jsx(ie,{className:m[o].class,children:t.jsx("use",{href:`${S}#${m[o].icon}`})}),t.jsx(le,{children:m[o].name})]})]},o))}),t.jsx(z,{children:"Vehicle type"}),t.jsxs(Y,{children:[l.map((n,o)=>t.jsxs(ee,{className:n?`${a[o].class} checked`:`${a[o].class}`,children:[t.jsx(te,{id:a[o].name,type:"radio",name:"radio",checked:n,onChange:()=>v(o,!1)}),t.jsxs(oe,{children:[t.jsx(Q,{children:t.jsx("use",{href:`${S}#${a[o].icon}`})}),t.jsx(Z,{htmlFor:a[o].name,children:P(a[o].name)})]})]},o)),t.jsx("div",{})]}),t.jsx(W,{type:"submit",children:"Search"})]}),t.jsx(W,{type:"button",onClick:A,children:"Reset"})]})})}return t.jsx(e,{})};function me(){return t.jsxs("div",{className:"flex-style",children:[t.jsx(he,{}),t.jsx(_,{catalog:"catalog"})]})}export{me as default};
