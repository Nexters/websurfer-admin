import { useEffect, useState } from "react";

import dayjs from "dayjs";

import { BaseField, BaseFieldProps } from "./Base";

import { useForm } from "@/hooks";

export function DateField(props: Omit<BaseFieldProps<Date>, "children">) {
  const { name, value, editable = true } = props;
  const [date, setDate] = useState(value);
  const { update } = useForm();

  return (
    <BaseField {...props}>
      {editable ? (
        <input
          type="date"
          value={dayjs(date).format("YYYY-MM-DD")}
          onChange={(e) => {
            setDate(dayjs(e.target.value).toDate());
            update({
              [name]: dayjs(e.target.value).format("YYYY-MM-DD"),
            });
          }}
        />
      ) : (
        value
      )}
    </BaseField>
  );
}
