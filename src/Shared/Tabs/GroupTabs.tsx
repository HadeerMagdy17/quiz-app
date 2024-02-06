import React, { useState } from "react";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";
import imagCard from "../../assets/images/1.webp";
import CustomRightCard from "../CustomComponents/CustomRightCard/CustomRightCard";


interface GroupTabsProps {}

const GroupTabs: React.FC<GroupTabsProps> = () => {
  const data2 = {
    name: 'william jos abou',
    classRank: 'CM2',
    score: 49,
    image: imagCard,
  };
  const [buttonActive, setButtonActive] = useState<string>("tab1");

  const handleButtonClick = (value: string) => {
    if (value === buttonActive) {
      return;
    }
    setButtonActive(value);
  };

  return (
    <div className="mb-3">
      <TETabs>
        <TETabsItem
          onClick={() => handleButtonClick("tab1")}
          active={buttonActive === "tab1"}
          tag="button"
          className={`${
            buttonActive === "tab1"
              ? "bg-black text-white"
              : "bg-white text-black"
          } border border-gray-300 px-4 py-2 m-2 rounded-md flex items-center`}
        >
          Group 1
        </TETabsItem>
        <TETabsItem
          onClick={() => handleButtonClick("tab2")}
          active={buttonActive === "tab2"}
          tag="button"
          className={`${
            buttonActive === "tab2"
              ? "bg-black text-white"
              : "bg-white text-black"
          } border border-gray-300 px-4 py-2 m-2 rounded-md flex items-center`}
        >
          Group 2
        </TETabsItem>
        <TETabsItem
          onClick={() => handleButtonClick("tab3")}
          active={buttonActive === "tab3"}
          tag="button"
          className={`${
            buttonActive === "tab3"
              ? "bg-black text-white"
              : "bg-white text-black"
          } border border-gray-300 px-4 m-2  py-2 rounded-md flex items-center`}
        >
          Group 3
        </TETabsItem>
      </TETabs>

      <TETabsContent>
        {buttonActive === "tab1" && (
          <TETabsPane show={true}>
           
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 sm:col-span-6 lg:col-span-6">
                

                <CustomRightCard
                  name={data2.name}
                  classRank={data2.classRank}
                  score={data2.score}
                  image={data2.image}
                />
                     <CustomRightCard
                  name={data2.name}
                  classRank={data2.classRank}
                  score={data2.score}
                  image={data2.image}
                />

              </div>
             
              <div className="col-span-12 sm:col-span-6 lg:col-span-6">
                
                 <CustomRightCard
                  name={data2.name}
                  classRank={data2.classRank}
                  score={data2.score}
                  image={data2.image}
                />
                     <CustomRightCard
                  name={data2.name}
                  classRank={data2.classRank}
                  score={data2.score}
                  image={data2.image}
                />
              </div>
             

            </div>
          </TETabsPane>
        )}
        {buttonActive === "tab2" && (
          <TETabsPane show={true}>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 sm:col-span-6 lg:col-span-6">
                <p className="bg-gray-200 p-4">group 2</p>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-6">
                <p className="bg-blue-200 p-4">Paragraph 2</p>
              </div>
            </div>
          </TETabsPane>
        )}
        {buttonActive === "tab3" && (
          <TETabsPane show={true}>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 sm:col-span-6 lg:col-span-6">
                <p className="bg-gray-200 p-4">group 3</p>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-6">
                <p className="bg-blue-200 p-4">Paragraph 3</p>
              </div>
            </div>
          </TETabsPane>
        )}
      </TETabsContent>
    </div>
  );
};

export default GroupTabs;
