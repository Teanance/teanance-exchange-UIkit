import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#b07946",
  primaryBright: "#b07946",
  primaryDark: "#EFE4D4",
  secondary: "#151618",
  success: "#601778",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#EFE4D4",
  backgroundDisabled: "#9c907c",
  backgroundAlt: "#B3A289",
  contrast: "#191326",
  dropdown: "#b8af86",
  invertedContrast: "#B3A289",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#efe4d4",
  text: "#151618",
  textDisabled: "#666171",
  textSubtle: "#151618",
  borderColor: "#a89779",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #EFE4D4 0%, #B3A289 100%)",
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#100C18",
  backgroundDisabled: "#3c3742",
  backgroundAlt: "#27262c",
  contrast: "#EFE4D4",
  dropdown: "#1E1D20",
  invertedContrast: "#181d25",
  input: "#151618",
  inputSecondary: "#151618",
  primaryDark: "#EFE4D4",
  tertiary: "#1E2A46",
  text: "#EFE4D4",
  textDisabled: "#666171",
  textSubtle: "#EFE4D4",
  borderColor: "#1d9661",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #1E2A46 0%, #7C7F9C 100%)",
    cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
  },
};
