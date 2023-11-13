import * as React from "react";
import {
  useId,
  Button,
  Input,
  Label,
  Subtitle1,
} from "@fluentui/react-components";
import { Person24Regular, Password24Regular, MailCopy24Regular, ApprovalsApp24Regular } from "@fluentui/react-icons";
import { useStyles } from "./login.styles";
import { useNavigate } from "react-router-dom";
import { default as loginService } from "../services/loginService"

export const Register = () => {
  const [name, setName] = React.useState("");
  const [eamil, setEmail] = React.useState("");
  const [validate, setValidate] = React.useState("");
  const [password, setPassword] = React.useState("");
  const styles = useStyles();
  const nameId = useId("input-name");
  const emailId = useId("input-email");
  const validateId = useId("input-validateId");
  const passwordId = useId("input-password");
  const passwordIdVerify = useId("input-passwordVerify")
  const navigate = useNavigate();
  const handleSubmitClick = async() => {
    const newObject = {
      name: name,
      email: eamil,
      validate: validate,
      password: password,
    };
    const response = await loginService.register("register", newObject);
    if(response === "success"){
      navigate('/login');
    }
  };
  const handleNameChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setName(event.target.value)
  };
  const handleEmailChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(event.target.value)
  };
  const handleValidateIdChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setValidate(event.target.value)
  };
  const handlePasswardChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setPassword(event.target.value)
  };

  return (
    <div className={styles.root}>
      <Subtitle1>Registration Info</Subtitle1>

      <div className={styles.inputContainer}>
        <Label htmlFor={nameId} size="large" className={styles.label}>Username</Label>
        <Input
          contentBefore={<Person24Regular/>}
          id={nameId}
          placeholder="please enter your name"
          className={styles.input}
          onChange={handleNameChange}/>
      </div>

      <div className={styles.inputContainer}>
        <Label htmlFor={emailId} size="large" className={styles.label}>Email</Label>
        <Input 
          type="email"
          contentBefore={<MailCopy24Regular/>}
          id={emailId}
          placeholder="please enter your email"
          className={styles.input}
          onChange={handleEmailChange}/>
      </div>

      <div className={styles.inputContainer}>
        <Label htmlFor={validateId} size="large" className={styles.label}>ValidateId</Label>
        <Input
          contentBefore={<ApprovalsApp24Regular/>}
          id={validateId}
          placeholder="please enter your validateId"
          className={styles.input}
          onChange={handleValidateIdChange}/>
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

      <div className={styles.inputContainer}>
        <Label htmlFor={passwordIdVerify} size="large" className={styles.label}>Confirm Password</Label>
        <Input
          type="password"
          contentBefore={<Password24Regular  />}
          id={passwordIdVerify}
          placeholder="re-enter your passward"
          className={styles.input}
          onChange={handlePasswardChange}
        />
      </div>

      <Button shape="circular" size="large" onClick={handleSubmitClick}>Submit</Button>

    </div>
  );
};
