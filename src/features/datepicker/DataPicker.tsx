import DateTimePicker from "@react-native-community/datetimepicker";
import { Dispatch, SetStateAction, useState } from "react";

export const DataPicker = ({
  setShow,
  date,
  setDate,
}: {
  setShow: Dispatch<SetStateAction<boolean>>;
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
}) => {
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  return (
    <DateTimePicker
      testID="dateTimePicker"
      value={date}
      mode={"date"}
      is24Hour={true}
      onChange={onChange}
    />
  );
};
