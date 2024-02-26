import{a as o,d as e}from"./index-DLM_LoTc.js";const a="/taka-app/assets/hero-DUZjNzXb.jpg",t=o.h1`
  display: none;
  @media ${e.desktop} {
    display: block;
    font-family: var(--lato-font-regular);
    color: var(--bg-color);
    font-size: 48px;
    line-height: 1;
  }
`,n=o.section`
  padding: 0;
  padding-top: 32px;
  @media ${e.desktop} {
    background-image: url(${a});
    background-repeat: no-repeat;
    background-position: center;
    margin: 0 auto;
    background-size: cover;
  }
`,r=o.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  .logo-icon {
    width: 153px;
    height: 47px;
  }
  @media ${e.desktop} {
    display: none;
  }
`;export{n as H,t as a,r as b};
