import DropdownComponent from "../../shared/ui/Dropdown";
import { Dispatch, SetStateAction, useState } from "react";
import { CameraType } from "./CameraType";

const cameraOptions = Object.keys(CameraType).map((key) => {
  return {
    label: CameraType[key],
    value: key,
  };
});

export const CameraSelect = ({
  camera,
  setCamera,
}: {
  camera: string;
  setCamera: Dispatch<SetStateAction<string>>;
}) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <DropdownComponent
      data={cameraOptions}
      value={camera}
      labelField={"label"}
      valueField={"value"}
      onChange={(item) => {
        setCamera(item.value);
        setIsFocus(false);
      }}
    />
  );
};
