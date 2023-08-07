"use client";
import React, { useState } from "react";
import { Stack, TextField } from "@mui/material";
import Button from "@mui/material/Button";

const CheckAccess = ({ children }: any) => {
  const [token, setToken] = useState("");

  async function getAdmin() {
    try {
      const data = await fetch(
        `/api/admin?token=${encodeURIComponent(token)}`,
        {
          method: "GET",
        }
      );
      console.log(data);
      return data;
    } catch (error) {
      return console.log(error);
    }
  }

  return (
    <div>
      <Stack sx={{}}>
        <TextField
          value={token}
          placeholder="password"
          onChange={(e) => setToken(e.target.value)}
        />
        <Button onClick={getAdmin}>login</Button>
      </Stack>
      {children}
    </div>
  );
};

export default CheckAccess;
