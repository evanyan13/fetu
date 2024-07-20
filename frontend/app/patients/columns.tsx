"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Patient = {
  id: string;
  name: string;
  admissionDate: string;
  risk: "High" | "Medium" | "Low";
};

export const columns: ColumnDef<Patient>[] = [
  {
    accessorKey: "id",
    header: "Patient ID",
  },
  {
    accessorKey: "name",
    header: "Patient Name",
  },
  {
    accessorKey: "admissionDate",
    header: "Admission Date",
  },
  {
    accessorKey: "risk",
    header: "Risk",
    cell: ({ row }) => {
      const risk = String(row.getValue("risk"));
      let backgroundColor;
      switch (risk) {
        case "High":
          backgroundColor = "bg-red-400";
          break;
        case "Medium":
          backgroundColor = "bg-yellow-400";
          break;
        case "Low":
          backgroundColor = "bg-green-400";
          break;
      }

      return <span className={`px-2 py-1 rounded text-white ${backgroundColor}`}>{risk}</span>;
    },
  },
];
