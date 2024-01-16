import {
  Control,
  Controller,
  FieldError,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";
import MuiTextField from "@mui/material/TextField";
import InputMask from "react-input-mask";

type TextFieldProps = {
  name: string;
  label: string;
  error: FieldError;
  control: Control<FieldValues>;
  rules?: Omit<
    RegisterOptions<FieldValues, string>,
    "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"
  >;
  mask: string;
  maskChar: string;
};

const PhoneField: React.FC<TextFieldProps> = ({
  name,
  label,
  error,
  control,
  rules,
  mask,
  maskChar,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue=""
      render={({ field }) => (
        <InputMask
          mask={mask}
          maskChar={maskChar}
          value={field.value}
          onChange={(e) => field.onChange(e.target.value)}
        >
          {() => (
            <MuiTextField
              label={label}
              fullWidth
              margin="normal"
              error={!!error}
              helperText={error?.message as string}
            />
          )}
        </InputMask>
      )}
    />
  );
};

export default PhoneField;
