import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getResults } from "../../../Redux/Features/Instructor/Results/GetAllResultsSlice";
import { useEffect } from 'react';

const Results = () => {

  // get results
  const dispatch = useDispatch();

  const {
    data: results,
    loading,
    error,
  } = useSelector((state) => state.resultsData) || {};

  useEffect(() => {
    dispatch(getResults());
  }, [dispatch]);

  return (
    <div className='border border-solid w-fit rounded-md pb-8 px-3 mx-4'>
      <h1 className='py-4'>Completed Quizes</h1>
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
            <td className="border border-slate-300 px-2 rounded-l-md">Assembly language</td>
            <td className="border border-slate-400 px-2">Group 1</td>
            <td className="border border-slate-400 px-2">23 persons</td>
            <td className="border border-slate-400 px-2">20 participants</td>
            <td className="border border-slate-400 px-2">12 / 03 / 2023</td>
            <td className="border border-slate-400 px-2 rounded-r-md">
              <button type="button" className="bg-green-600 rounded-full py-1 px-4 my-[0.5rem]"> <Link to={"/dashboard/results/viewresults"}>view</Link> </button>
            </td>
          </tr>

          
        </tbody>
      </table>
    </div>
  )
}

export default Results