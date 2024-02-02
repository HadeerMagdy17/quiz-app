import styles from "./CustomLeftCard.module.css";
// import imagCard from "../../../assets/images/1.webp";
import {CustomLeftCardProps} from '../../Interface/Interface'


const CustomLeftCard: React.FC<CustomLeftCardProps> = ({ title, date, time, enrolledStudents, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles["card-content"]}>
        <div className={styles["img-card"]}>
          <img src={image} alt="" />
        </div>

        <div className={styles["card-details"]}>
          <h3 className="font-medium pb-2">
          {title}
          </h3>
          <span className="pr-2 border-r-2 ">{date}</span>
          <span className="pl-2">{time}</span>
          <div className={styles["card-open"]}>
            <span className="font-medium text-sm">
              No. of student’s enrolled:<span>{enrolledStudents} </span>
            </span>


            <span className="font-medium text-sm">
              Open
              <i
                className={`fa-solid fa-circle-arrow-right ${styles["opan-icon"]}`}
              ></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomLeftCard;