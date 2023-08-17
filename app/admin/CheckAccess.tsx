"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { Stack, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";

const CheckAccess = ({ children }: any) => {
  const [token, setToken] = useState("");
  const [access, setAccess] = useState<boolean>(false);

  const notifyError = () =>
    toast.error("forbidden", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  async function getAdmin(privacyToken: string) {
    try {
      return new Promise((resolve, reject) => {
        fetch(`/api/admin?token=${encodeURIComponent(privacyToken)}`)
          .then((response) => {
            if (!response.ok) {
              notifyError();
            }
            return response.json();
          })
          .then((data) => {
            resolve(data);
          });
      });
    } catch (error) {
      return console.log(error);
    }
  }

  const checkAdmin = () => {
    getAdmin(token).then((data: any) => {
      if (data.message === "admin") {
        setAccess(true);
        localStorage.setItem("prozheikoToken", token);
      }
    });
  };

  useEffect(() => {
    const lsToken = localStorage.getItem("prozheikoToken");
    if (!lsToken) return;
    getAdmin(lsToken).then((data: any) => {
      if (data.message === "admin") {
        setAccess(true);
      }
    });
  }, []);
  return (
    <div>
      {access ? (
        { children }
      ) : (
        <Stack
          alignItems="center"
          justifyContent="center"
          gap="20px"
          sx={{ width: "50%", padding: "10px", margin: "100px auto" }}
        >
          <p>Введіть пароль</p>
          <TextField
            fullWidth
            sx={{ border: "1px solid", borderRadius: "12px" }}
            value={token}
            placeholder="password"
            onChange={(e) => setToken(e.target.value)}
          />
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#009b98",
              borderRadius: "12px",
              "&:hover": { backgroundColor: "rgba(0,155,152,0.89)" },
            }}
            onClick={checkAdmin}
          >
            login
          </Button>
        </Stack>
      )}
    </div>
  );
};

export default CheckAccess;
