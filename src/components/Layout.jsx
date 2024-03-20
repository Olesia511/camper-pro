import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { GlobalStyles } from "./GlobalStyles";
import { Navigation } from "./Navigation";

export const Layout = () => {
 return (
  <>
   <div>
    <Navigation />
   </div>
   <main
    style={{
     backgroundColor: "#E44848",
     width: "100vw",
     height: "100vh",
    }}
   >
    <Suspense fallback={<div>LOADING.......</div>}>
     <Outlet />
    </Suspense>
   </main>
   <GlobalStyles />
  </>
 );
};
