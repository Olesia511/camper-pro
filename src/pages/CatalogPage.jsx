import { CampersFilter } from "../components/CampersFilter/CampersFilter";
import { CampersList } from "../components/CampersList";

export default function CatalogPage() {
  return (
    <div className="flex-style">
      <CampersFilter />
      <CampersList catalog={"catalog"} />
    </div>
  );
}
