import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableRow,
  TableBody,
  TableProps,
} from "@heroui/react";

type Columns = {
  width?: string;
  header: string;
};

type Props<T> = TableProps & {
  items: T[];
  columns: Columns[];
  renderRow: (item: T, index: number) => React.ReactElement<typeof TableRow>;
};

const AppTable = <T,>({ items, columns, renderRow, ...props }: Props<T>) => {
  return (
    <Table
      isHeaderSticky
      aria-label="Reusable table"
      selectionMode="single"
      classNames={{
        wrapper: "max-h-[77vh] scrollbar-w-thin",
      }}
      align="center"
      {...props}
    >
      <TableHeader>
        {columns.map((item) => (
          <TableColumn
            key={item.header}
            style={{ fontSize: "13px", width: item.width }}
          >
            {item.header}
          </TableColumn>
        ))}
      </TableHeader>

      <TableBody items={items} emptyContent="No rows found">
        {items.map((item, index) => renderRow(item, index))}
      </TableBody>
    </Table>
  );
};

export default AppTable;
