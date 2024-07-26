import { OPTION } from "./Select";
import { StylesConfig } from "react-select";

export const selectStyles: StylesConfig<OPTION, false> = {
  input: (styles) => ({
    ...styles,
    paddingTop: 6,
    paddingBottom: 7,
    fontSize: "14px",
    margin: 0,
  }),

  valueContainer: (styles) => ({
    ...styles,
    margin: 0,
    // paddingTop: 0,
    // paddingBottom: 0,
    background: "transparent",
  }),

  control: (styles) => ({
    ...styles,
    border: "1px solid #8D8D8D",
    background: "transparent",
    maxHeight: "40px",
    borderRadius: "4px",
    outline: 0,
  }),

  option: (styles, state) => ({
    ...styles,
    // border: "1px solid #3b3b3b",
    // background: state.isFocused ? "#FFC10E" : "#0C0C0C",
    fontSize: "14px",
    // borderBottom: "1px solid gray",
    color: state.isFocused ? "white" : "#0C0C0C",
    backgroundColor: state.isFocused ? "#E26D38" : "#F2F2F5",
  }),

  menu: (styles) => ({
    ...styles,
    background: "#F2F2F5",
    border: "1px solid #3b3b3b",
    color: "#E26D38",
  }),

  singleValue: (styles) => ({
    ...styles,
    fontSize: "14px",
    color: "black",
    fontWeight: "400",
  }),
};
