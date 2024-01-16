import {
  Control,
  Controller,
  FieldError,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";
import MuiTextField from "@mui/material/TextField";

type TextFieldProps = {
  name: string;
  label: string;
  error: FieldError;
  control: Control<FieldValues>;
  rules?: Omit<
    RegisterOptions<FieldValues, string>,
    "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"
  >;
};

const TextField: React.FC<TextFieldProps> = ({
  name,
  label,
  error,
  control,
  rules,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue=""
      render={({ field }) => (
        <MuiTextField
          label={label}
          fullWidth
          margin="normal"
          {...field}
          error={!!error}
          helperText={error?.message as string}
        />
      )}
    />
  );
};

export default TextField;
