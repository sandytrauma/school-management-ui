import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, subjectsData} from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Subject = {
  id: number;
  name: string;
  teachers: string[];
};

const columns = [
  {
    header: "Subject Names",
    accessor: "name",
  },
  {
    header: "Teachers",
    accessor: "teachers",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

const SubjectPage = () => {
  const renderRow = (item: Subject) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-sandytraumaPurpleLight">
      <td className="flex items-center gap-4 p-4">
      {item.name}
      </td>
      <td className="hidden md:table-cell">{item.teachers.join(",")}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center bg-sandytraumaSky">
              <Image
                src="/edit.png"
                alt="view single teacher page"
                width={16}
                height={16}
              />
            </button>
          </Link>
          {role === "admin" && (<button className="w-7 h-7 flex items-center justify-center bg-sandytraumaPurple">
            <Image
              src="/delete.png"
              alt="view single teacher page"
              width={16}
              height={16}
            />
          </button>)}
        </div>
      </td>
    </tr>
  );
  return (
    <div className="bg-white p-4 rounded-md  flex-1 m-4">
      {/* Top */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Subjects</h1>
        <div className="flex flex-col md:flex-row items-center gap-4  w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-sandytraumaYellow">
              <Image src="/filter.png" alt="buttons" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-sandytraumaYellow">
              <Image src="/sort.png" alt="buttons" width={14} height={14} />
            </button>
            {role === "admin" && (<button className="w-8 h-8 flex items-center justify-center rounded-full bg-sandytraumaYellow">
              <Image src="/plus.png" alt="buttons" width={14} height={14} />
            </button>)}
          </div>
        </div>
      </div>
      {/* List */}
    
      <Table columns={columns} renderRow={renderRow} data={subjectsData} />
      {/* Pagination */}

      <Pagination />
    </div>
  );
};

export default SubjectPage;
