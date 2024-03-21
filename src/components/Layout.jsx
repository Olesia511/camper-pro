import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { GlobalStyles } from "../GlobalStyles";
import { Navigation } from "./Navigation";

export const Layout = () => {
  return (
    <>
      <main
        style={{
          //  backgroundColor: "#E44848",
          width: "100%",
          height: "100%",
        }}
      >
        <div>
          <Navigation />
        </div>
        <Suspense fallback={<div>LOADING.......</div>}>
          <Outlet />
        </Suspense>
      </main>
      <GlobalStyles />
    </>
  );
};
