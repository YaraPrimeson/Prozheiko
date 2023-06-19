import React, { FC } from "react";
import { Box, Modal } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface ModalContainerProps {
  children: React.ReactNode;
  open: boolean;
  handleClose: () => void;
}

const ModalContainer: FC<ModalContainerProps> = ({
  children,
  open,
  handleClose,
}) => {
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
};

export default ModalContainer;
