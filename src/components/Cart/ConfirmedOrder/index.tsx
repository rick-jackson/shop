import { Dispatch, SetStateAction, useState } from "react";
import { Box, Button, CircularProgress, Modal, TextField } from "@mui/material";

import type { Product } from "src/types/entities/product";
import { clearProductsCart } from "@store/actions/productsCart";
import { useAppDispatch } from "@common/hooks/redux";
import { sendEmail } from "@gateways/sendEmail";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

type ConfirmedOrderProps = {
  products: Product[];
  onSubmit: Dispatch<SetStateAction<boolean>>;
};

const ConfirmedOrder: React.FC<ConfirmedOrderProps> = ({
  products,
  onSubmit,
}) => {
  const [isOpenModal, setOpenModal] = useState(false);
  const [isSubmiting, setSubmiting] = useState(false);
  const dispatch = useAppDispatch();

  const [inputs, setInputs] = useState({
    email: "",
    name: "",
  });

  const handleOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };

  const handleOnChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmiting(true);

    try {
      sendEmail({ data: products, ...inputs });

      setTimeout(() => {
        onSubmit(true);
        handleClose();
        setSubmiting(false);
        dispatch(clearProductsCart());
      }, 1000);
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <>
      <Modal open={isOpenModal} onClose={handleClose}>
        <Box sx={style}>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              gap: "12px",
            }}
          >
            <div style={{ display: "flex", gap: "12px" }}>
              <TextField
                label="Name"
                name="name"
                value={inputs.name}
                onChange={handleOnChange}
                required
              />
              <TextField
                label="Email"
                name="email"
                value={inputs.email}
                onChange={handleOnChange}
                required
              />
            </div>
            <Button type="submit" color="success" variant="outlined">
              {isSubmiting ? <CircularProgress size={24} /> : "Confirm"}
            </Button>
          </form>
        </Box>
      </Modal>
      <Button color="success" variant="outlined" onClick={handleOpen}>
        To order
      </Button>
    </>
  );
};

export default ConfirmedOrder;
