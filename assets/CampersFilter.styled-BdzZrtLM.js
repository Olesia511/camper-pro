import{u as t}from"./index-D6xekAkz.js";import{r as o}from"./StyledDatePicker-IHSaT0iB.js";const n=t(o.Card)`
  width: 360px;
  margin-right: 64px;
`,l=t.label`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.color.greyPlaceholder};
  margin-bottom: 8px;
`,a=t.div`
  display: flex;
  align-items: center;

  border-radius: 10px;
  border: none;
  padding: 18px;
  /* width: 360px; */
  height: 56px;
  background: ${e=>e.theme.color.whiteSecond};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: ${e=>e.theme.color.black};
  margin-bottom: 32px;
`,c=t(o.Input)`
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
`,p=t.svg`
  width: 18px;
  height: 20px;
  stroke: ${e=>e.theme.color.black};
  fill: none;
  margin-right: 8px;
`,h=t.svg`
  width: 40px;
  height: 28px;
  stroke: ${e=>e.theme.color.black};
  margin-bottom: 8px;
`,s=t.div`
  /* width: 360px; */
  height: 48px;
  border-bottom: 1px solid ${e=>e.theme.color.blackThird};
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  margin-bottom: 24px;
`,d=t.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.color.grey};

  margin-bottom: 14px;
`,x=t.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  /* width: 360px; */
  height: 95px;
  margin-bottom: 64px;
`,g=t.label`
  width: 80px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
`,m=t.li`
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
`,b=t.input`
  position: absolute;
  height: 100%;
  width: 100%;
  margin: 0;
  cursor: pointer;
  z-index: 2;
  opacity: 0;
  border: 1px solid ${e=>e.theme.color.blackSecond};
`,f=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`,u=t.svg`
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
`,w=t.li`
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
  /* margin-right: ${({index:e})=>e%3===0?"0":"10px"}; */

  &.checked {
    border-color: ${e=>e.theme.color.red};
    transform: scale(1.05);
  }
`,k=t.input`
  position: absolute;
  height: 100%;
  width: 100%;
  margin: 0;
  cursor: pointer;
  z-index: 2;
  opacity: 0;
  border: 1px solid ${e=>e.theme.color.blackSecond};
`,$=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`,y=t.ul`
  display: flex;
  flex-wrap: wrap;

  /* width: 360px; */
  row-gap: 10px;
  flex-direction: row;
  margin-bottom: 32px;
`,v=t.label`
  width: 90px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
`;export{y as C,s as E,n as F,l as L,x as R,h as V,a,p as b,c,d,w as e,k as f,$ as g,u as h,v as i,m as j,b as k,f as l,g as m};
