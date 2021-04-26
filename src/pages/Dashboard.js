import React from "react";
import { SidebarData } from "../components/SidebarData";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import cob from "../img/cob.png";
import { RiBankFill } from "react-icons/ri";
import { MdCardGiftcard } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdThumbUp } from "react-icons/md";


const Dashboard = () => {
  return (
    <div className="home">
      <div className="side-bar">
        <ul className="nav-menu-items" style={{ color: "black" }}>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <div className="card-head">
            <h3>TREASURY BALANCE</h3> <RiBankFill className="treasury-icon" />
          </div>
          <div className="card-amount">
            <p>24,000</p>
          </div>
        </div>
        <div className="dashboard-card">
          <div className="card-head">
            <h3>STAKING REWARDS</h3> <MdCardGiftcard className="rewards-icon" />
          </div>
          <div className="card-amount">
            <p>2,000</p>
          </div>
        </div>
        <div className="dashboard-card">
          <div className="card-head">
            <h3>OUTSTANDING LOANS</h3>{" "}
            <AiOutlineClockCircle className="clock-icon" />
          </div>
          <div className="card-amount">
            <p>5,000</p>
          </div>
        </div>
        <div className="dashboard-card">
          <div className="card-head">
            <h3>PENDING PROPOSALS</h3> <MdThumbUp className="thumb-icon" />
          </div>
          <div className="card-amount">
            <p>5,000</p>
          </div>
        </div>
        <div className="cobalt-card">
          <div className="cobalt-card-head">
            <img src={cob} className="cobalt-img" alt="cobalt-img" />
            <h4>CBLT</h4>
            <p>Current Price</p>
          </div>
          <div className="cobalt-prices">
            <p>.5 BTC</p>
            <p>2 ETH</p>
            <p>100,000 USD</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
