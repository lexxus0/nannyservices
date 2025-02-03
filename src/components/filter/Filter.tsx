import { useCallback, useEffect } from "react";
import Select from "react-select";
import { useAppDispatch, useAppSelector } from "../../store/tools/hooks";
import {
  chooseAsc,
  chooseDesc,
  choosePriceAsc,
  choosePriceDesc,
  chooseRatingAsc,
  chooseRatingDesc,
  showAll,
} from "../../store/state/filters/slice";
import { selectSortBy } from "../../store/state/filters/selectors";

const options = [
  { value: "asc", label: "A to Z" },
  { value: "desc", label: "Z to A" },
  { value: "rating_asc", label: "Rating ↑" },
  { value: "rating_desc", label: "Rating ↓" },
  { value: "price_asc", label: "Price ↑" },
  { value: "price_desc", label: "Price ↓" },
  { value: "show_all", label: "Show all" },
];

const Filter = () => {
  const dispatch = useAppDispatch();
  const sortBy = useAppSelector(selectSortBy);

  const dispatchAction = useCallback(
    (value: string) => {
      const actionMap: Record<
        string,
        () => ReturnType<
          | typeof chooseAsc
          | typeof chooseDesc
          | typeof chooseRatingAsc
          | typeof chooseRatingDesc
          | typeof choosePriceAsc
          | typeof choosePriceDesc
          | typeof showAll
        >
      > = {
        asc: chooseAsc,
        desc: chooseDesc,
        rating_asc: chooseRatingAsc,
        rating_desc: chooseRatingDesc,
        price_asc: choosePriceAsc,
        price_desc: choosePriceDesc,
        show_all: showAll,
      };
      dispatch(actionMap[value]());
    },
    [dispatch]
  );

  useEffect(() => {
    if (sortBy) {
      dispatchAction(sortBy);
    }
  }, [sortBy, dispatchAction]);

  const handleSortChange = (
    selectedOption: { value: string; label: string } | null
  ) => {
    if (!selectedOption) return;
    dispatchAction(selectedOption.value);
  };

  return (
    <div className="w-[220px] ml-[128px] mb-8">
      <Select
        options={options}
        value={options.find((opt) => opt.value === sortBy) || null}
        onChange={handleSortChange}
        placeholder="Sort by..."
        isSearchable={false}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: "var(--color)",
            color: "white",
            border: "none",
            borderColor: state.isFocused ? "#fff" : "#777",
            "&:hover": {
              borderColor: "#fff",
            },
          }),
          singleValue: (base) => ({
            ...base,
            color: "white",
          }),
          menu: (base) => ({
            ...base,
            backgroundColor: "var(--color)",
          }),
          option: (base, state) => ({
            ...base,
            backgroundColor: state.isSelected ? "#pink" : "var(--color)",
            color: state.isSelected ? "white" : "#ddd",
            "&:hover": {
              backgroundColor: "white",
              color: "black",
            },
          }),
        }}
      />
    </div>
  );
};

export default Filter;
