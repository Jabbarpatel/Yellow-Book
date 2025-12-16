import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
} from "@heroui/react";

export type Props = {
  headers: string[];
  children: typeof TableRow;
  isLoading?: boolean;
};

const ReactTable = ({ headers, children, isLoading = false }: Props) => {
  return (
    <Table isStriped aria-label="Example static collection table">
      <TableHeader>
        {headers.map((header) => (
          <TableColumn key={header}>{header}</TableColumn>
        ))}
      </TableHeader>
      <TableBody isLoading={isLoading}>{children}</TableBody>
    </Table>
  );
};
export default ReactTable;
