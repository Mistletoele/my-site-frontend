import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

export const useStyles = makeStyles({
    root: {
      backgroundColor: tokens.colorBrandForegroundLinkHover,
    },
    textContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      backgroundColor: tokens.colorBrandForegroundLinkPressed,
      ...shorthands.padding("30px", "70px", "30px", "70px"),
    },
    text: {
      color: tokens.colorNeutralStroke3,
    },
    dataGrid: {
      display: "flex",
      flexDirection: "column",
      ...shorthands.margin("50px", "50px", 0, "50px"),
      ...shorthands.padding("20px", "20px", "20px", "20px"),
    },
    cellWidth: {
      textAlign: "left",
      maxWidth: "23%",
      color: tokens.colorNeutralStroke3,
      fontSize: "large",
      paddingBottom: "20px",
    },
    dataGridRowBorder: {
      borderBottomWidth: 0,
    },
    dataGridRow: {
      ":hover": {
        backgroundColor: tokens.colorBrandForegroundLinkHover,
      },
      ":active": {
        backgroundColor: tokens.colorBrandForegroundLinkHover,
      },
      ":focus:": {
        backgroundColor: tokens.colorBrandForegroundLinkHover,
      },
      borderBottomWidth: 0,
    },
    dataGridCell: {
      maxWidth: "23%",
      '& button': {
        paddingLeft: 0,
        color: tokens.colorNeutralForegroundDisabled  
      },
    //   ":hover": {
    //     '& button': {
    //       color: tokens.colorNeutralStroke1Pressed  
    //     },
    //   },
    //   ":active": {
    //     '& button': {
    //         color: tokens.colorNeutralStroke1Pressed  
    //       },
    //   },
    //   ":focus:": {
    //     '& button': {
    //         color: tokens.colorNeutralStroke1Pressed  
    //       },
    //   },
    },
  });
