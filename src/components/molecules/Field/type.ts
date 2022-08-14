export type FieldType =
  | "number"
  | "string"
  | "text"
  | "imageUrl"
  | "s3Url"
  | "boolean"
  | "imageUrlArray"
  | "enum"
  | "stringArray"
  | "date";

export type FieldProps<Value> = {
  name: string;
  type?: FieldType;
  label?: string;
  value?: Value;
  /** @default true */
  editable?: boolean;
  /** string,text type인 경우, value의 최대길이제한울 위해 사용 */
  maxLength?: number;
  enumValues?: Array<{ label: string; value: Value }>;
  /** stringArray type인 경우, placeholder를 설정합니다. */
  placeholder?: string;
};
