import {CustomRightCardProps} from '../../../Interfaces/Interfaces'
import styles from './CustomRightCard.module.css'


const CustomRightCard: React.FC<CustomRightCardProps>  = ({ name, classRank, score, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles["card-content"]}>

        <div className={styles["img-card"]}>
          <img src={image} alt="" />
        </div>

        <div className={styles["card-details"]}>
<div className="text pl-4">
          <h3 className="font-medium pb-2">
          {name}
          </h3>
          <span className="pr-2 border-r-2 ">{classRank}</span>
          <span className="pl-2">{score}</span>
</div>
<div className="icon-right  ml-14">

            {/* <span className="font-medium text-sm "> */}
             
             
              <i
                className={`fa-solid fa-circle-arrow-right ${styles["opan-icon"]}`}
              ></i>
            {/* </span>            */}
</div>

        </div>
      </div>
    </div>
  )
}

export default CustomRightCard
