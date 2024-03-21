import{u as r,r as w,j as e,a as E,f as W,b as B}from"./index-Df_n5VsG.js";const D=t=>t.campers.campers.items,H=r.li`
  display: flex;
  gap: 24px;
  border: ${t=>t.theme.border.cardBorder};
  border-radius: 20px;
  padding: 24px;
  width: 888px;
  height: 358px;
`,L=r.div`
  border-radius: 10px;
  overflow: hidden;
  width: 290px;
  height: 310px;
  background-color: ${t=>t.theme.color.whiteSecond};
`,X=r.img`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1);
  transition: transform 500ms ease-in-out, object-fit 500ms ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
  &.containCard {
    object-fit: contain;
  }
`,q=r.div`
  width: 526px;
  height: 310px;

  h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 1.25;
  }
`,I=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  margin-bottom: 8px;
`,M=r.div`
  display: flex;
  align-items: center;
`,R=r.button`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;

  padding: 16px 40px;
  width: 166px;
  height: 56px;
  border-radius: 200px;
  background: ${t=>t.theme.color.red};
  font-family: inherit;
  font-weight: 500;
  line-height: inherit;
  letter-spacing: -0.01em;
  color: ${t=>t.theme.color.whiteOrigin};
  transition: transform 300ms ease-in-out, background 300ms ease-in-out;

  &:hover,
  :active {
    background: ${t=>t.theme.color.redSecond};
  }
`,A=r.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: transparent;
  margin-left: 10px;
  transform: scaleX(1);
  &:hover,
  :active {
    transform: scaleX(1.1);
    overflow: visible;
  }
`,F=r.svg`
  width: 24px;
  height: 24px;
  stroke: ${t=>t.theme.color.black};
  fill: none;
  transform: scaleX(1);
  transition: transform 300ms ease-in-out, fill 300ms ease-in-out;

  &:hover,
  :active {
    fill: ${t=>t.theme.color.red};
    stroke: ${t=>t.theme.color.red};
    transform: scaleX(1.05);
    overflow: visible;
  }
`,O=r.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 24px;
`,P=r.div`
  text-decoration: underline;
  text-decoration-skip-ink: none;
  margin-right: 16px;
`,U=r.svg`
  width: 16px;
  height: 16px;
  margin-right: 4px;
  fill: ${t=>t.theme.color.yellow};
`,z=r.svg`
  width: 16px;
  height: 16px;
  stroke: ${t=>t.theme.color.black};
  fill: none;
  margin-right: 4px;
`,G=r.p`
  color: ${t=>t.theme.color.grey};
  text-align: start;
  white-space: nowrap;
  margin-bottom: 24px;
`,K=r.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`,o=r.li`
  display: flex;
  flex-wrap: nowrap;
  text-align: center;
  height: 44px;
  padding: 12px 18px;
  border-radius: 100px;
  white-space: nowrap;
  background: ${t=>t.theme.color.white};
`,h=r.svg`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  fill: ${t=>t.theme.color.black};
  stroke: none;
`,d=r.svg`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  stroke: ${t=>t.theme.color.black};
  fill: none;
`,i="/camper-pro/assets/sprite-Cva05X3S.svg",N=({camp:t})=>{const[c,a]=w.useState(!1),{_id:v,name:p,price:b,rating:$,location:k,adults:x,children:m,engine:g,transmission:f,description:y,details:n,gallery:C,reviews:S}=t,u=s=>{if(s.length>25&&s.length<64)return s.slice(0,25)+"...";let l=s.split(".");return s.length>=64?l[0].length>=64?l[0].slice(0,64)+"...":l[0]+".":s},j=s=>s.charAt(0).toUpperCase()+s.slice(1);return e.jsxs(H,{children:[e.jsx(L,{children:e.jsx(X,{className:c?"containCard":"",onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),src:C[0],alt:p})}),e.jsxs(q,{children:[e.jsxs(I,{children:[e.jsxs("h2",{children:[" ",u(p)," "]}),e.jsxs(M,{children:[e.jsxs("h2",{children:[" €",b.toFixed(2)]}),e.jsx(A,{children:e.jsx(F,{children:e.jsx("use",{href:`${i}#icon-heart`})})})]})]}),e.jsxs(O,{children:[e.jsx(U,{children:e.jsx("use",{href:`${i}#icon-star`})}),e.jsxs(P,{children:[$,"(",S.length," Reviews)"]}),e.jsx(z,{children:e.jsx("use",{href:`${i}#icon-location`})}),k]}),e.jsx(G,{children:u(y)}),e.jsxs(K,{children:[x&&e.jsxs(o,{children:[e.jsx(h,{children:e.jsx("use",{href:`${i}#icon-users`})}),x," adults",m>0&&`, ${m} children`]}),f&&e.jsxs(o,{children:[e.jsx(d,{children:e.jsx("use",{href:`${i}#icon-line-pd`})}),j(f)]}),g&&e.jsxs(o,{children:[e.jsx(h,{children:e.jsx("use",{href:`${i}#icon-gasoline`})}),j(g)]}),n.kitchen>=1&&e.jsxs(o,{children:[e.jsx(d,{children:e.jsx("use",{href:`${i}#icon-gastronomy`})}),"Kitchen"]}),n.beds>=1&&e.jsxs(o,{children:[e.jsx(d,{children:e.jsx("use",{href:`${i}#icon-bed`})}),n.beds>1?`${n.beds} Beds`:`${n.beds} Bed`]}),n.airConditioner>=1&&e.jsxs(o,{children:[e.jsx(h,{children:e.jsx("use",{href:`${i}#icon-wind`})}),"AC"]})]}),e.jsx(R,{children:"Show more"})]})]},v)},T=()=>{const t=E();w.useEffect(()=>{t(W())},[t]);const c=B(D);return e.jsx("ul",{style:{maxWidth:680},children:c.map(a=>e.jsx(N,{camp:a},a.name))})},_=r.h1`
 font-family: "Inter";
 font-weight: 400;
`;function Q(){return e.jsxs(e.Fragment,{children:[e.jsx(_,{children:"HOME PAGE "}),e.jsx("h2",{children:"WELCOME"}),e.jsx(T,{})]})}export{Q as default};
