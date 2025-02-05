import { selectSortedNannies } from "../../store/state/filters/selectors";
import { fetchNannies } from "../../store/state/nannies/operations";
import { useAppSelector, useAppDispatch } from "../../store/tools/hooks";
import { Nanny } from "../../types/types";
import NannyItem from "../nannyItem/NannyItem";
import { useEffect } from "react";
import { TailSpin } from "react-loader-spinner";

const NanniesList = () => {
  const dispatch = useAppDispatch();
  const nannies = useAppSelector(selectSortedNannies);
  const isLoading = useAppSelector((state) => state.nannies.isLoading);
  const hasMore = useAppSelector((state) => state.nannies.hasMore);

  const color = getComputedStyle(document.documentElement)
    .getPropertyValue("--color")
    .trim();

  useEffect(() => {
    if (nannies.length === 0) {
      dispatch(fetchNannies());
    }
  }, [dispatch, nannies.length]);

  const handleLoadMore = () => {
    if (hasMore) {
      dispatch(fetchNannies());
    }
  };

  return (
    <div>
      <ul className="flex flex-col gap-8 mb-8">
        {nannies.map((nanny: Nanny) => (
          <NannyItem key={nanny.id} nanny={nanny} />
        ))}
      </ul>

      {isLoading ? (
        <div className="flex justify-center">
          <TailSpin visible={true} height="50" width="50" color={color} />
        </div>
      ) : hasMore ? (
        <button
          onClick={handleLoadMore}
          disabled={isLoading}
          className="flex rounded-[30px] px-7 py-3 bg-[var(--color)] text-white 
                     hover:text-[var(--color)] hover:bg-white hover:border 
                     hover:border-[var(--color)] transition-colors ease-in duration-300 mx-auto"
        >
          Load More
        </button>
      ) : (
        <p className="text-center text-gray-500">
          There is nothing to load anymore
        </p>
      )}
    </div>
  );
};

export default NanniesList;
