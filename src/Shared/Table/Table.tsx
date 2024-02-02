const Table = () => {
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
            <td className="border border-slate-300 px-2 rounded-l-md">IndianaRRRRRRR</td>
            <td className="border border-slate-400 px-2">ffanapolis</td>
            <td className="border border-slate-400 px-2">ffanapolis</td>
            <td className="border border-slate-400 px-2">ffanapolis</td>
            <td className="border border-slate-400 px-2">ffanapolis</td>
            <td className="border border-slate-400 px-2 rounded-r-md">Indianapolis</td>
          </tr>


        </tbody>
      </table>
    </div>
  );
};

export default Table;