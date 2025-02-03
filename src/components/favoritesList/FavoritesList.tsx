import { selectFavorites } from "../../store/state/favourites/selectors";
import { selectNannies } from "../../store/state/nannies/selectors";
import { useAppSelector } from "../../store/tools/hooks";
import { Nanny } from "../../types/types";
import NannyItem from "../nannyItem/NannyItem";

const FavoritesList: React.FC = () => {
  const favorites = useAppSelector(selectFavorites);
  const nannies = useAppSelector(selectNannies);

  const favoriteNannies = nannies.filter((nanny: Nanny) =>
    favorites.includes(nanny.name)
  );

  return favoriteNannies.length > 0 ? (
    <ul className="flex flex-col gap-8">
      {favoriteNannies.map((nanny: Nanny) => (
        <NannyItem key={nanny.id} nanny={nanny} />
      ))}
    </ul>
  ) : (
    <p className="text-center font-medium text-lg">
      Looks like you have not added here anything yet.
    </p>
  );
};

export default FavoritesList;
