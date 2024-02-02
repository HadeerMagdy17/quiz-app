import React from 'react'
import CustomLeftCard from '../../../Shared/CustomComponents/CustomLeftCard/CustomLeftCard'
import imagCard from "../../../assets/images/1.webp";
import CustomRightCard from './../../../Shared/CustomComponents/CustomRightCard/CustomRightCard';
const Dashboard = () => {
  const data1 = {
    title: 'Cours 1',
    date: '12 / 03 / 2023',
    time: '09:00 AM',
    enrolledStudents: 32,
    image: imagCard,
  };

  // second card
  const data2 = {
    name: 'william jos abou',
    classRank: 'CM2',
    score: 49,
    image: imagCard,
  };
  return (
    <>
    
    <div className='container-fluid flex justify-center gap-x-5'>
    < CustomLeftCard
    title={data1.title}
    date={data1.date}
    time={data1.time}
    enrolledStudents={data1.enrolledStudents}
    image={data1.image}/>

    < CustomRightCard
    name={data2.name}
    classRank={data2.classRank}
    score={data2.score}
    image={data2.image}/>
    </div>
    </>
  )
}

export default Dashboard