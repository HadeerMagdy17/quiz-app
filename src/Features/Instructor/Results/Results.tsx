
import Table from '../../../Shared/CustomComponents/Table/Table'

const Results = () => {
  const data = {
    title: "Assembly language",
    name: "Group 1",
    personsNo: "23 persons",
    participants: "20 participants",
    date: "12 / 03 / 2023",
  };

  return (
    <div className='border border-solid w-fit rounded-md pb-8 px-3 mx-4'>
      <h1 className='py-4'>Completed Quizes</h1>
      <Table
        title={data.title}
        name={data.name}
        personsNo={data.personsNo}
        participants={data.participants}
        date={data.date} />
    </div>
  )
}

export default Results