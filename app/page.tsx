"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onPasswordChange = (e: any) => setPassword(e.target.value);
  const onEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const login = async () => {
    let obj = {
      email: email,
      password: password,
    };

    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        body: JSON.stringify(obj),
      },
    };
    try {
      const fetchResponse = await fetch(
        `https://dev-api.peepul.farm/v1.0/users/signin`,
        settings
      );

      const data = await fetchResponse.json();
      if (data.status == 200) {
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          onChange={onEmailChange}
          id="outlined-basic"
          label="email  "
          variant="outlined"
        />
        <br />
        <TextField
          onChange={onPasswordChange}
          id="outlined-basic"
          label="password"
          variant="outlined"
        />
        <br />
        <Button variant="outlined" onClick={login}>
          Login
        </Button>
      </Box>
    </div>
  );
}
