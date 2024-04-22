import{u as o,j as e}from"./index-Dv9l5Dm8.js";const s="/camper-pro/assets/backg-img-3-min-BpCobcrq.jpg",i=o.section`
  height: 100vh;
  width: 100vw;
  background-image: url(${s});
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: cover;
  background-attachment: fixed;
  z-index: -1;
`,a=o.div`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.7);
`,c=o.h1`
  font-weight: 900;
  font-size: 164px;
  letter-spacing: 1.2;
  color: ${r=>r.theme.color.white};
  text-align: center;
  margin-bottom: 60px;
`,n=o.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 80px;
`,t=o.img`
  position: relative;
  height: 320px;
  width: 600px;
  border-radius: 150px;
  border: 12px solid ${r=>r.theme.color.grey};
  overflow: hidden;

  opacity: 1;
  object-fit: cover;
  transform: scale(1);
  transition: transform 500ms ease-in-out, object-fit 500ms ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
  &.contain-card {
    object-fit: contain;
  }
`,g="/camper-pro/assets/backg-img-2-min-DeWWR-mY.jpg",m="/camper-pro/assets/backg-img-4-min-DsAk8BWM.jpg",p="/camper-pro/assets/backg-img-5-min-B9QQ4JZz.jpg",d="/camper-pro/assets/backg-img-6-min-CHQzMzAf.jpg";function x(){return e.jsx(i,{children:e.jsxs(a,{children:[e.jsx(c,{children:"Discover Easy Travel"}),e.jsxs(n,{children:[e.jsx(t,{src:g}),e.jsx(t,{src:s}),e.jsx(t,{src:m}),e.jsx(t,{src:p}),e.jsx(t,{src:d})]})]})})}export{x as default};
