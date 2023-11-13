import { makeStyles, shorthands } from "@fluentui/react-components";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap("20px"),
    alignItems: "center",
    paddingTop: "10rem",
  },
  inputContainer: {
    display: "flex",
      flexDirection: "column",
      ...shorthands.gap("2px"),
  },
  label: {
    paddingBottom: "3px",
  },
  input: {
    width: "16rem",
  },
  buttonContainer:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  button:{
    marginRight: "1rem",
  }
});
