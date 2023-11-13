import * as React from "react";
import {
  useId,
  Button,
  Input,
  Label,
  Subtitle1,
} from "@fluentui/react-components";
import { Person24Regular, Password24Regular } from "@fluentui/react-icons";
import { useStyles } from "./login.styles";
import { useNavigate } from "react-router-dom";
import { default as loginService } from "../services/loginService"

export const Login = () => {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const styles = useStyles();
  const nameId = useId("input-name");
  const passwordId = useId("input-password");
  const navigate = useNavigate();
  const handleRegisterClick = () => {
    navigate('/register');
  };
  const handleSubmitClick = async() => {
    const newObject = { name: name, password: password };
    const response = await loginService.verify("login", newObject);
    if(response === "success"){
      navigate('/homepage');
    }
  };
  const handleNameChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setName(event.target.value)
  };
  const handlePasswardChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setPassword(event.target.value)
  };

  return (
    <div className={styles.root}>

      <Subtitle1>Login</Subtitle1>

      <div className={styles.inputContainer}>
        <Label htmlFor={nameId} size="large" className={styles.label}>Username</Label>
        <Input contentBefore={<Person24Regular/>} id={nameId}
          placeholder="please enter your name"
          className={styles.input}
          onChange={handleNameChange}/>
      </div>

      <div className={styles.inputContainer}>
        <Label htmlFor={passwordId} size="large" className={styles.label}>Password</Label>
        <Input
          type="password"
          contentBefore={<Password24Regular  />}
          id={passwordId}
          placeholder="please enter your passward"
          className={styles.input}
          onChange={handlePasswardChange}
        />
      </div>

      <div className={styles.buttonContainer}>
        <Button shape="circular" size="large" className={styles.button} onClick={handleSubmitClick}>Submit</Button>
        <Button shape="circular" size="large" onClick={handleRegisterClick}>Register</Button>
      </div>

    </div>
  );
};
