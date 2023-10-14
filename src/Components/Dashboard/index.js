import { Component } from "react";
import MoneyDetails from "../MoneyDetails";
import {
  TbHexagonNumber0,
  TbSquareKey,
  TbHelpSquareRounded,
} from "react-icons/tb";
import { FiBox } from "react-icons/fi";
import {
  IoIosArrowForward,
  IoMdContacts,
  IoIosArrowDown,
} from "react-icons/io";
import { GiWallet } from "react-icons/gi";
import { LuBadgePercent } from "react-icons/lu";
import "./Dashboard.css";
import Overview from "../Overview";

class Dashboard extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="container">
          <div className="dashboard-details">
            <span className="logo">
              <TbHexagonNumber0 />
            </span>
            <h1 className="head">Dashboard</h1>
          </div>
          <div className="links-container">
            <ul>
              <li className="link-items">
                <span className="icons">
                  <TbSquareKey />
                </span>
                <span className="board">Dashboard</span>
              </li>
              <li className="link-items">
                <span className="icons">
                  <FiBox />
                </span>
                <span>product</span>
                <span className="arrow">
                  <IoIosArrowForward />
                </span>
              </li>
              <li className="link-items">
                <span className="icons">
                  <IoMdContacts />
                </span>
                <span>Customers</span>
                <span className="arrow">
                  <IoIosArrowForward />
                </span>
              </li>
              <li className="link-items">
                <span className="icons">
                  <GiWallet />
                </span>
                <span>Income</span>
                <span className="arrow">
                  <IoIosArrowForward />
                </span>
              </li>
              <li className="link-items">
                <span className="icons">
                  <LuBadgePercent />
                </span>
                <span>Promote</span>
                <span className="arrow">
                  <IoIosArrowForward />
                </span>
              </li>
              <li className="link-items">
                <span className="icons">
                  <TbHelpSquareRounded />
                </span>
                <span>Help</span>
                <span className="arrow">
                  <IoIosArrowForward />
                </span>
              </li>
            </ul>
            <div className="profile-container">
              <img
                src="https://img.freepik.com/free-photo/self-confidence-masculinity-concept-isolated-studio-portrait-positive-confident-young-male-employee-with-stylish-haircut-stubble-smiling-as-he-has-some-great-idea-concerning-work_343059-952.jpg?size=626&ext=jpg"
                alt="profile"
                className="image"
              />
              <div className="name-role">
                <p className="name">Evano</p>
                <p className="name">Project Manager</p>
              </div>
              <IoIosArrowDown className="icons" />
            </div>
          </div>
        </div>
        <div className="components">
          <MoneyDetails />
          <Overview />
        </div>
      </div>
    );
  }
}

export default Dashboard;
