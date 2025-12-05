import React, { useState } from 'react';
import './home.css';

const TeamSection = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const teamMembers = [
    { name: 'Andrew Neil', job: 'Web Designer', img: 'images/img1.jpg' },
    { name: 'Jasmine Carter', job: 'UI Designer', img: 'images/img2.jpg' },
    { name: 'Justin Chung', job: 'Web Developer', img: 'images/img3.jpg' },
    { name: 'Appolo Reef', job: 'Web Designer', img: 'images/img4.jpg' },
    { name: 'Adrina Calvo', job: 'UI Designer', img: 'images/img5.jpg' },
    { name: 'Nicole Lewis', job: 'Web Developer', img: 'images/img6.jpeg' },
  ];

  return (
    <div className="container">
      <input
        type="radio"
        name="dot"
        id="one"
        checked={selectedTab === 1}
        onChange={() => handleTabChange(1)}
      />
      <input
        type="radio"
        name="dot"
        id="two"
        checked={selectedTab === 2}
        onChange={() => handleTabChange(2)}
      />

      <div className="main-card" style={{ marginLeft: selectedTab === 2 ? '-100%' : '0' }}>
        <div className="cards">
          {teamMembers.slice(0, 3).map((member, index) => (
            <div className="card" key={index}>
              <div className="content">
                <div className="img">
                  <img src={member.img} alt={member.name} />
                </div>
                <div className="details">
                  <div className="name">{member.name}</div>
                  <div className="job">{member.job}</div>
                </div>
                <div className="media-icons">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cards">
          {teamMembers.slice(3).map((member, index) => (
            <div className="card" key={index}>
              <div className="content">
                <div className="img">
                  <img src={member.img} alt={member.name} />
                </div>
                <div className="details">
                  <div className="name">{member.name}</div>
                  <div className="job">{member.job}</div>
                </div>
                <div className="media-icons">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="button">
        <label
          htmlFor="one"
          className={`active ${selectedTab === 1 ? 'one' : ''}`}
        ></label>
        <label
          htmlFor="two"
          className={selectedTab === 2 ? 'two' : ''}
        ></label>
      </div>
    </div>
  );
};

export default TeamSection;
