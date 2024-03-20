import { NavLink } from "react-router-dom";

export const Navigation = () => {
 return (
  <nav>
   <NavLink
    to="/"
    style={{
     fontSize: "24px",
    }}
   >
    Home
   </NavLink>

   <NavLink to="/catalog" style={{ fontSize: "24px", padding: "8px" }}>
    Catalog
   </NavLink>

   <NavLink to="/favorites" style={{ fontSize: "24px", padding: "8px" }}>
    Favorites
   </NavLink>
  </nav>
 );
};
