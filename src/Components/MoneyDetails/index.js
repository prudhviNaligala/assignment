import { AiOutlineDollar } from "react-icons/ai";
import { IoMdList } from "react-icons/io";
import { LiaWalletSolid } from "react-icons/lia";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import "./MoneyDetails.css";

const moneyDetails = [
  {
    id: 1,
    type: "Earnings",
    amount: "198k",
    percentage: "37.8%",
    background: "green",
    icon: AiOutlineDollar,
  },
  {
    id: 2,
    type: "orders",
    amount: "2.4k",
    percentage: "2%",
    background: "violet",
    icon: IoMdList,
  },
  {
    id: 3,
    type: "Balance",
    amount: "2.4K",
    percentage: "2%",
    background: "blue",
    icon: LiaWalletSolid,
  },
  {
    id: 4,
    type: "Total Sales",
    amount: "89k",
    percentage: "11%",
    background: "pink",
    icon: HiOutlineShoppingBag,
  },
];

const MoneyDetails = () => (
  <div className="money-container">
    <div className="input-container">
      <p className="m-name">Hello Shahrukh </p>
      <div>
        <input type="search" placeholder="Search" />
      </div>
    </div>
    <div className="details-container">
      {moneyDetails.map((eachItem) => {
        return (
          <div key={eachItem.id} className={`details`}>
            <div className="span">
              {eachItem.icon && (
                <eachItem.icon className={`icon ${eachItem.background}`} />
              )}
            </div>
            <div className="about">
              <p className="type">{eachItem.type}</p>
              <h1 className="amount">${eachItem.amount}</h1>
              <p>{eachItem.percentage}</p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default MoneyDetails;
