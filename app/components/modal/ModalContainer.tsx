import React, { FC } from "react";
import { Box, Modal } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "94%",
  maxWidth: "max-content",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  p: "0",
  "&:active": { border: "none", outline: "none" },
  "&:focus-visible": { border: "none", outline: "none" },
  "&:target": { border: "none", outline: "none" },
  "&:visited": { border: "none", outline: "none" },
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
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>{children}</Box>
    </Modal>
  );
};

export default ModalContainer;
