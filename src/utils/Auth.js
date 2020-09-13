import cookie from "js-cookie";
import { Router } from "react-router-dom";

export default function handleLogin(token) {
  cookie.set("token", token);
  Router.push("/dashboard");
}
