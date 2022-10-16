import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
} from "react";

interface State {
  leftColor: string;
  rightColor: string;
  text: string;
  textColor: string;
  updateColorAndText: (data: StateData) => void;
}

export type StateData = Pick<
  State,
  "leftColor" | "rightColor" | "text" | "textColor"
>;

export const colorsAndTextData: StateData[] = [
  {
    leftColor: "rgb(29,78,216)",
    rightColor: "#3b82f6",
    text: "Blue",
    textColor: "rgb(147,197,253)",
  },
  {
    leftColor: "rgb(68,64,60)",
    rightColor: "#78716c",
    text: "Stone",
    textColor: "rgb(214,211,209)",
  },
  {
    leftColor: "rgb(180,83,9)",
    rightColor: "#f59e0b",
    text: "Amber",
    textColor: "rgb(252,211,77)",
  },
  {
    leftColor: "rgb(4,120,87)",
    rightColor: "#10b981",
    text: "Emerald",
    textColor: "rgb(110,231,183)",
  },
  {
    leftColor: "rgb(126,34,206)",
    rightColor: "#a855f7",
    text: "Purple",
    textColor: "rgb(216,180,254)",
  },
];

const ColorSectionContext = createContext<State>({
  updateColorAndText: () => {},
  ...colorsAndTextData[0],
});

export const ColorSectionProvider: FC<{ children: ReactNode[] }> = ({
  children,
}) => {
  const [leftColor, setLeftColor] = useState(colorsAndTextData[0].leftColor);
  const [rightColor, setRightColor] = useState(colorsAndTextData[0].rightColor);
  const [textColor, setTextColor] = useState(colorsAndTextData[0].textColor);
  const [text, setText] = useState("Sierra Blue");

  const updateColorAndText = (data: StateData) => {
    setLeftColor(data.leftColor);
    setRightColor(data.rightColor);
    setTextColor(data.textColor);
    setText(data.text);
  };

  return (
    <ColorSectionContext.Provider
      value={{ leftColor, rightColor, text, textColor, updateColorAndText }}>
      {children}
    </ColorSectionContext.Provider>
  );
};

export const useColorSectionContext = () => useContext(ColorSectionContext);
