import * as React from "react";
import {
  Button,
  Caption1,
  Text,
  Image,
} from "@fluentui/react-components";
import { MoreHorizontal20Regular } from "@fluentui/react-icons";
import {
  Card,
  CardHeader,
  CardPreview,
  CardProps,
} from "@fluentui/react-components";
import {useStyles} from "./homepage.styles";
import { ContactUs } from "./contactus";

interface CardExampleProps extends CardProps {
  headerText: string;
  descriptionText: string;
  srcPath: string;
}
  
const CardExample: React.FC<CardExampleProps> = ({
  headerText,
  descriptionText,
  srcPath,
  ...props
}) => {
  const styles = useStyles();
  return (
    <Card className={styles.card} {...props}>
      <CardPreview
        className={styles.grayBackground}>
        <img
          className={styles.smallRadius}
          src={srcPath}
          alt="Presentation Preview"
        />
      </CardPreview>

      <CardHeader
        header={<Text weight="semibold">{headerText}</Text>}
        description={
          <Caption1 className={styles.caption}>{descriptionText}</Caption1>
        }
        action={
          <Button
            appearance="transparent"
            icon={<MoreHorizontal20Regular />}
            aria-label="More actions"
          />
        }
      />
    </Card>
  );
};

export const Homepage = () => {
  const styles = useStyles();

  const [selected1, setSelected1] = React.useState(false);
  const [selected2, setSelected2] = React.useState(false);
  const [selected3, setSelected3] = React.useState(false);
  const [selected4, setSelected4] = React.useState(false);

  return (
    <div>
      <div className={styles.titleContainer}>
        <Image
          src="https://pica.zhimg.com/v2-36d4626179b21ede507f08593329aa22_r.jpg?source=1def8aca"
          fit="center"
        />
      </div>

      <div className={styles.cardContainer}>
        <CardExample
          selected={selected1}
          onSelectionChange={(_, { selected }) => setSelected1(selected)}
          headerText={"Backend Development"}
          descriptionText={"You can learn some backend knowledges here"}
          srcPath={"https://web.zhyunxuan.com/uploads/20210709/930b1bd901f2cbb3fed86b1f948e4601.jpg"}
        />
        <CardExample
          selected={selected2}
          onSelectionChange={(_, { selected }) => setSelected2(selected)}
          headerText={"Frontend Development"}
          descriptionText={"You can learn some frontend knowledges here"}
          srcPath={"https://web.zhyunxuan.com/uploads/20210709/930b1bd901f2cbb3fed86b1f948e4601.jpg"}
        />
        <CardExample
          selected={selected3}
          onSelectionChange={(_, { selected }) => setSelected3(selected)}
          headerText={"MiniProgram Development"}
          descriptionText={"You can learn some MiniProgram knowledges here"}
          srcPath={"https://web.zhyunxuan.com/uploads/20210709/930b1bd901f2cbb3fed86b1f948e4601.jpg"}
        />
        <CardExample
          selected={selected4}
          onSelectionChange={(_, { selected }) => setSelected4(selected)}
          headerText={"AI Agent Program"}
          descriptionText={"You can use some AI Agent programs here"}
          srcPath={"https://0.rc.xiniu.com/g2/M00/B0/64/CgAGfFtGuaWAQIbjAAHlikUWAtQ186.jpg"}
        />
      </div>
      <ContactUs/>
    </div>
  );
};
