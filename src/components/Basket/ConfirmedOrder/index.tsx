import { sendEmail } from "@gateways/sendEmail";
import { Box, Button, Modal, TextField } from "@mui/material";
import { useState } from "react";

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
  products: any;
};

const ConfirmedOrder: React.FC<ConfirmedOrderProps> = ({ products }) => {
  const [openModal, setOpenModal] = useState(false);
  const [submiting, setSubmiting] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmiting(true);
      await sendEmail({ data: products, ...inputs });
      handleClose();
    } catch (e) {
      alert(e.message);
    } finally {
      setSubmiting(false);
    }
  };

  return (
    <>
      <Modal open={openModal} onClose={handleClose}>
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
              {submiting ? "loading" : "Confirm"}
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
