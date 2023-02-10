import React from "react";

import Form from "./Form";
import { NavBar } from "./../../components/index";

const LoginPage = () => {
  return (
    <div>
      <NavBar contact={false} />
      <Form />
    </div>
  );
};

export default LoginPage;
