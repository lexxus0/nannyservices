import { selectSortedNannies } from "../../store/state/filters/selectors";
import { useAppSelector } from "../../store/tools/hooks";
import { Nanny } from "../../types/types";
import NannyItem from "../nannyItem/NannyItem";

const NanniesList = () => {
  const nannies = useAppSelector(selectSortedNannies);
  return (
    <ul className="flex flex-col gap-8">
      {nannies.map((nanny: Nanny) => (
        <NannyItem key={nanny.name} nanny={nanny} />
      ))}
    </ul>
  );
};

export default NanniesList;
