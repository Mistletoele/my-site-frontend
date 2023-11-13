import * as React from "react";
import {
  PresenceBadgeStatus,
  Button,
  DataGridBody,
  DataGridRow,
  DataGrid,
  DataGridProps,
  DataGridHeader,
  DataGridHeaderCell,
  DataGridCell,
  TableCellLayout,
  TableColumnDefinition,
  createTableColumn,
  Text
} from "@fluentui/react-components";
import { useStyles } from "./contactus.styles";

type AboutUsCell = {
  label: string;
};

type LearningCell = {
  label: string;
};

type contantUsCell = {
  label: string;
};

type NewsCell = {
  label: string;
};

type Item = {
  aboutus: AboutUsCell;
  learning: LearningCell;
  contanctus: contantUsCell;
  news: NewsCell;
};

const items: Item[] = [
  {
    aboutus: { label: "Background Discription" },
    learning: { label: "Backend Development" },
    contanctus: { label: "Wechat Offshow Account" },
    news: { label: "News of Campous Hire" }
  },
  {
    aboutus: { label: "" },
    learning: { label: "Fronted Development" },
    contanctus: { label: "Wechat Groups" },
    news: { label: "Industry News" }
  },
  {
    aboutus: { label: "" },
    learning: { label: "MiniPrograme Dev" },
    contanctus: { label: "Bilibili Account" },
    news: { label: "" }
  },
  {
    aboutus: { label: "" },
    learning: { label: "AI Agent Development" },
    contanctus: { label: "Email Address" },
    news: { label: "" }
  }
];

const columns: TableColumnDefinition<Item>[] = [
  createTableColumn<Item>({
    columnId: "aboutus",
    renderHeaderCell: () => {
      return "About Us";
    },
    renderCell: (item) => {
      return <Button appearance="transparent">{item.aboutus.label}</Button>;
    }
  }),
  createTableColumn<Item>({
    columnId: "learning",
    renderHeaderCell: () => {
      return "Learning";
    },
    renderCell: (item) => {
      return <Button appearance="transparent">{item.learning.label}</Button>;
    }
  }),
  createTableColumn<Item>({
    columnId: "contanctus",
    renderHeaderCell: () => {
      return "Contanct Us";
    },
    renderCell: (item) => {
      return <Button appearance="transparent">{item.contanctus.label}</Button>;
    }
  }),
  createTableColumn<Item>({
    columnId: "news",
    renderHeaderCell: () => {
      return "News";
    },
    renderCell: (item) => {
      return <Button appearance="transparent">{item.news.label}</Button>;
    }
  })
];

export const ContactUs = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
    <DataGrid items={items} columns={columns} className={styles.dataGrid}>
      <DataGridHeader>
        <DataGridRow className={styles.dataGridRowBorder}>
          {({ renderHeaderCell }) => (
            <DataGridHeaderCell className={styles.cellWidth}>{renderHeaderCell()}</DataGridHeaderCell>
          )}
        </DataGridRow>
      </DataGridHeader>
      <DataGridBody<Item>>
        {({ item, rowId }) => (
          <DataGridRow<Item> key={rowId} className={styles.dataGridRow}>
            {({ renderCell }) => (
              <DataGridCell className={styles.dataGridCell}>{renderCell(item)}</DataGridCell>
            )}
          </DataGridRow>
        )}
      </DataGridBody>
    </DataGrid>
    <div className={styles.textContainer}>
      <Text align="center" className={styles.text}>"Copyright @ 2023 有限公司 All rights reserved. 沪ICP备19026706号-13"</Text>
    </div>
    </div>
  );
};
