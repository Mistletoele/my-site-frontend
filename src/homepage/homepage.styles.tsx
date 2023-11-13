import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

export const useStyles = makeStyles({
  titleContainer: {
    display: "flex",
    alignItems: "center",
    ...shorthands.padding("50px"),
  },

  cardContainer: {
    ...shorthands.gap("20px"),
    paddingLeft:"50px",
    paddingRight: "50px",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  },

  card: {
    width: "48.5%",
    maxWidth: "100%",
    height: "fit-content",
  },

  caption: {
    color: tokens.colorNeutralForeground3,
  },

  smallRadius: {
    ...shorthands.borderRadius(tokens.borderRadiusSmall),
  },

  grayBackground: {
    backgroundColor: tokens.colorNeutralBackground3,
  },

  logoBadge: {
    ...shorthands.padding("5px"),
    ...shorthands.borderRadius(tokens.borderRadiusSmall),
    backgroundColor: "#FFF",
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.14), 0px 0px 2px rgba(0, 0, 0, 0.12)",
  },
});
