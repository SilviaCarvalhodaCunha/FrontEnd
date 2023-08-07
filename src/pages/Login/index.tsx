import { Box, Paper, Typography, Link as MuiLink } from "@mui/material";
import { LoginForm } from "../../components/Form/LoginForm";
import { Link } from "react-router-dom";
import agenda from "../../assets/agenda.png";

export const LoginPage = () => {
  return (
    <main>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Paper
          variant="outlined"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            p: 5,
            minWidth: 300,
            height: "50%",
          }}
        >
          <Typography variant="h5" component="h1" align="center" gutterBottom>
            Login
          </Typography>
          <LoginForm />
          <Typography variant="body2" align="center">
            Ainda não possui uma conta?{" "}
            <MuiLink component={Link} to="/register">
              Cadastre-se
            </MuiLink>
          </Typography>
        </Paper>
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            p: 5,
            minWidth: 300,
            width: "20%",
            height: "50%",
          }}
        >
          <Paper
            elevation={0}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              p: 0,
              minWidth: 300,
              width: "50%",
              height: "100%",
            }}
          >
            <Typography variant="h5" component="h1" align="center" gutterBottom>
              Agenda de contatos
            </Typography>
            <Typography variant="h6" component="h2" align="center" gutterBottom>
              Na trilha dos relacionamentos, cada contato é um passo em direção
              a conexões duradouras.
            </Typography>
          </Paper>
          <img src={agenda} alt="Agenda de Contatos" style={{ width: "30%" }} />
        </Paper>
      </Box>
    </main>
  );
};
