import { useRouter } from "next/router";
import { FieldError, useForm } from "react-hook-form";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Button, CircularProgress, Container } from "@mui/material";

import type { Product } from "src/types/entities/product";
import { clearProductsCart } from "@store/actions/productsCart";
import PhoneField from "@components/UI/inputs/PhoneField";
import TextField from "@components/UI/inputs/TextField";
import { useAppDispatch } from "@common/hooks/redux";
import { sendEmail } from "@gateways/sendEmail";

import * as Styled from "./Form.styled";

type OrderFormProps = {
  products: Product[];
  onSubmitting: Dispatch<SetStateAction<boolean>>;
};

const OrderForm: React.FC<OrderFormProps> = ({ products, onSubmitting }) => {
  const [isSubmiting, setSubmiting] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setSubmiting(true);

    try {
      sendEmail({ data: products, ...data });
      setTimeout(() => {
        setSubmiting(false);
        console.log({ products, userData: data });
        dispatch(clearProductsCart());
        onSubmitting(true);
      }, 1000);
      setTimeout(() => {
        router.replace("/");
      }, 1500);
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <Container sx={{ p: 0 }}>
      <Styled.Form onSubmit={handleSubmit(onSubmit)}>
        <Styled.Inputs>
          <TextField
            name="name"
            label="Name"
            control={control}
            error={errors.name as FieldError}
            rules={{ required: "Name is required" }}
          />
          <TextField
            name="email"
            label="Email"
            control={control}
            error={errors.email as FieldError}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            }}
          />

          <PhoneField
            name="phoneNumber"
            control={control}
            rules={{
              required: "Phone number is required",
              validate: {
                validNumber: (value) => {
                  const isValid = /^\+38 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(
                    value
                  );
                  return isValid || "Invalid phone number";
                },
              },
            }}
            mask="+38 (999) 999-99-99"
            maskChar="_"
            label="Phone Number"
            error={errors.phoneNumber as FieldError}
          />
        </Styled.Inputs>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ width: "fit-content", margin: "0px auto" }}
        >
          {isSubmiting ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            "Submit"
          )}
        </Button>
      </Styled.Form>
    </Container>
  );
};

export default OrderForm;
