/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";

import { BaseField, BaseFieldProps } from "./Base";
import { ImageUpload } from "@/components/atoms";

import { useForm } from "@/hooks";

import styles from "./ImageUrl.module.scss";

export function ImageUrlField(props: Omit<BaseFieldProps<string>, "children">) {
  const { name, value: _value, editable = true } = props;
  const [value, setValue] = useState(_value);
  const { update } = useForm();

  const clear = () => {
    update({
      [name]: null,
    });
    setValue(null);
  };

  return (
    <BaseField {...props}>
      {editable ? (
        <ImageUpload
          onUpload={([url]) => {
            update({
              [name]: url,
            });
            setValue(url);
          }}
          onClear={clear}
          value={value}
          preview
        />
      ) : (
        <div className={styles.image_wrapper}>
          <img src={value} />
        </div>
      )}
    </BaseField>
  );
}
