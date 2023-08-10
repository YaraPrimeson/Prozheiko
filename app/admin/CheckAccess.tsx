"use client";
import React, { useEffect, useState } from "react";
import { Stack, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { boolean } from "zod";

const CheckAccess = ({ children }: any) => {
  const [token, setToken] = useState("");
  const [access, setAccess] = useState(boolean);

  async function getAdmin() {
    try {
      const data = await fetch(
        `/api/admin?token=${encodeURIComponent(token)}`,
        {
          method: "GET",
        }
      );
      console.log(data);
      // localStorage.setItem("access", token);
      // setToken("");
      return data;
    } catch (error) {
      return console.log(error);
    }
  }

  useEffect(() => {}, []);
  return (
    <div>
      {/*<Stack sx={{}}>*/}
      {/*  <TextField*/}
      {/*    value={token}*/}
      {/*    placeholder="password"*/}
      {/*    onChange={(e) => setToken(e.target.value)}*/}
      {/*  />*/}
      {/*  <Button onClick={getAdmin}>login</Button>*/}
      {/*</Stack>*/}
      {children}
    </div>
  );
};

export default CheckAccess;
