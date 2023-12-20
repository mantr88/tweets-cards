import Select from "react-select";
import { setStatusFfilter } from "../../redux/filter/filterSlice";
import { useDispatch } from "react-redux";
import { statusFilters } from "../../redux/constants";
import { FilterContainer, Title } from "./Filter.styled";

function Filter() {
  const dispatch = useDispatch();

  const options = [
    { value: statusFilters.showAll, label: statusFilters.showAll },
    { value: statusFilters.follow, label: statusFilters.follow },
    { value: statusFilters.followings, label: statusFilters.followings },
  ];

  const dot = (color = "transparent") => ({
    alignItems: "center",
    display: "flex",

    ":before": {
      backgroundColor: color,
      borderRadius: 10,
      content: '" "',
      display: "block",
      marginRight: 8,
      height: 10,
      width: 10,
    },
  });
  return (
    <FilterContainer>
      <Title>Filter</Title>
      <Select
        options={options}
        defaultValue={options[0]}
        onChange={(option) => dispatch(setStatusFfilter(option?.label))}
        styles={{
          control: (base) => ({
            ...base,
            marginBottom: 24,
            marginLeft: "auto",
            width: 200,
          }),
          option: (base, { isFocused, isSelected }) => ({
            ...base,
            backgroundColor: isSelected
              ? "#5736a3"
              : isFocused
              ? "#ebd8ff"
              : undefined,
            borderColor: "green",
          }),
          singleValue: (base) => ({ ...base, ...dot("#5736a3") }),
        }}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: "#5736a3",
          },
        })}
      ></Select>
    </FilterContainer>
  );
}

export default Filter;
