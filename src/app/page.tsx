"use client";

import {
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Container,
  Button,
} from "@mui/material";
import { VisibilityOff, Visibility, Login } from "@mui/icons-material";
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const UserFake = {
    email: "Test123",
    password: "password@2",
  };

  const Login = () => {
    setLoading(true);
    setIsButtonDisabled(true);

    if (email === "" || password === "") {
      alert("Por favor, completa todos los campos.");
      setLoading(false);
      setIsButtonDisabled(false);
      return;
    }
    if (email !== UserFake.email || password !== UserFake.password) {
      alert("Credenciales incorrectas");
      setLoading(false);
      setIsButtonDisabled(false);
      return;
    }
    if (email === UserFake.email && password === UserFake.password) {
      setTimeout(() => {
        setLoading(false);
        setIsButtonDisabled(false);
        router.push("/dash");
      }, 1000);
    }
  };
  return (
    <>
      <div className="montana-bg">
        <Container
          maxWidth="md"
          className="flex justify-center items-center h-screen "
        >
          <Grid
            container
            spacing={2}
            className="text-white blur-bg border-2 border-gray-500 rounded-lg px-5 py-30"
          >
            <Grid size={6} className="flex justify-center items-center">
              <img src="siac.png" alt="" width="70%" />
            </Grid>
            <Grid
              container
              size={6}
              className="flex justify-center items-center"
            >
              <Grid size={12} className="flex justify-center items-center">
                <h1 className="font-medium text-xl">Inicion de sesion</h1>
              </Grid>
              <Grid size={12} className="flex justify-center items-center">
                <TextField
                  id="email"
                  label="Correo"
                  variant="outlined"
                  className="w-md text-white"
                  onChange={(e) => setEmail(e.target.value)}
                  slotProps={{
                    input: {
                      style: {
                        color: "white", // texto blanco
                      },
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white", // borde blanco
                      },
                      "&:hover fieldset": {
                        borderColor: "gray",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "white",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "white", // label blanco
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "white",
                    },
                  }}
                />
              </Grid>
              <Grid size={12} className="flex justify-center items-center">
                <TextField
                  id="pass"
                  type={showPassword ? "text" : "password"}
                  label="Contraseña"
                  fullWidth
                  margin="normal"
                  onChange={(e) => setPassword(e.target.value)}
                  slotProps={{
                    htmlInput: { maxLength: 90 },
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      color: "white", // texto
                      "& fieldset": {
                        borderColor: "white", // borde normal
                      },
                      "&:hover fieldset": {
                        borderColor: "gray", // borde al pasar el mouse
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "white", // borde cuando está enfocado
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "white", // label normal
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "white", // label enfocado
                    },
                    "& .MuiSvgIcon-root": {
                      color: "white", // color del ícono (el ojito)
                    },
                  }}
                  variant="outlined"
                  className="w-md"
                />
              </Grid>
              <Grid size={12} className="flex justify-center items-center">
                <Button
                  loading={loading}
                  disabled={isButtonDisabled}
                  variant="contained"
                  onClick={Login}
                >
                  Iniciar Sesion
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
