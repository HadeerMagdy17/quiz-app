import { Link } from "react-router-dom";
import { TableProps } from "../../../Interfaces/Interfaces";

const Table : React.FC<TableProps> = ({
  title,
  name,
  personsNo,
  participants,
 date
}) => {
  return (
    <div>
      <table className="border-separate border-spacing-1 table-fixed">
        <thead>
          <tr>
            <th className="border border-slate-400 rounded-l-md bg-black text-white">Title</th>
            <th className="border border-slate-400 px-2 bg-black text-white">Group name</th>
            <th className="border border-slate-400 px-2 bg-black text-white">No. of persons in group</th>
            <th className="border border-slate-400 px-2 bg-black text-white">Participants</th>
            <th className="border border-slate-400 px-2 bg-black text-white">Date</th>
            <th className="border border-slate-400 px-2 rounded-r-md bg-black text-white"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-300 px-2 rounded-l-md">{title}</td>
            <td className="border border-slate-400 px-2">{name}</td>
            <td className="border border-slate-400 px-2">{personsNo}</td>
            <td className="border border-slate-400 px-2">{participants}</td>
            <td className="border border-slate-400 px-2">{date}</td>
            <td className="border border-slate-400 px-2 rounded-r-md">
              <button type="button" className="bg-green-600 rounded-full py-1 px-4 my-[0.5rem]"> <Link to={"/dashboard/results/viewresults"}>view</Link> </button>
            </td>
          </tr>

          
        </tbody>
      </table>
    </div>
  );
};

export default Table;
