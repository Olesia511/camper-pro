import { useSelector } from "react-redux";
import { CampersList } from "../../components/CampersList/CampersList";
import { Wrapper } from "./FavoritePage.styled";
import { selectFavoritesCampers } from "../../redux/favorites/selectors";

export default function FavoritePage() {
  const favoritesCampers = useSelector(selectFavoritesCampers);

  return (
    <div className="flex-style">
      {favoritesCampers.length === 0 && <Wrapper>Nothing has been added to the favorites list yet</Wrapper>}
      {favoritesCampers.length > 0 && <CampersList favorites={"favorites"} />}
    </div>
  );
}
