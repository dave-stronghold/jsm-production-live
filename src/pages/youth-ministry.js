import React from "react";
import MainLayout from "../components/layout/MainLayout";

const PortfolioDetailPage = () => {
  return (
    <MainLayout>
      <div className="case-study-details-wrapper pt-130 mb-130">
        <div className="container-fluid one pl--95">
          <div className="case-study-details-top mb-70">
            <div className="row g-lg-4 gy-5">
              <div className="col-lg-6 blog-details-page">
                <blockquote>
                  <div className="quoat-icon">
                    <img src="/blockq.svg" alt="Quote Icon" />
                  </div>
                  <p>
                    Let no one despise you for your youth, but set the believers 
                    an example in speech, in conduct, in love, in faith, in purity.
                  </p>
                  <cite>1 Timothy 4:12</cite>
                </blockquote>
              </div>
              <div className="col-lg-5">
                <div className="details-page-content">
                  <h2>Youth Ministry</h2>
                  <p className="first-para pb-20">
                    The youth are the future of the church, and it is crucial to
                    equip them with faith, wisdom, and a strong foundation in
                    Christ. Youth Ministry is a space where young people grow 
                    spiritually, build meaningful relationships, and discover 
                    their purpose in God's plan.
                  </p>
                  <p>
                    Through mentorship, worship, community service, and 
                    discipleship, we empower youth to navigate life's challenges 
                    with faith. We believe that investing in young people today 
                    leads to a stronger, Christ-centered generation tomorrow.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="case-study-statement mb-70">
            <div className="row g-lg-4 gy-5">
              <div className="col-lg-8">
                <div className="statement-content">
                  <div className="details-section-title mb-30">
                    <h4>Our Programmes</h4>
                  </div>
                  <p>
                    In our Youth Ministry, we focus on guiding young people 
                    in faith, character development, and leadership. 
                    Through engaging programs, we create opportunities for 
                    spiritual growth, fellowship, and service.
                  </p>
                  <div className="statement-content-bottom">
                    <div className="title">
                      <h6>Aspects</h6>
                    </div>
                    <ul>
                      <li>
                        <img src="/tick.svg" alt="Tick" />
                        Worship Gatherings
                      </li>
                      <li>
                        <img src="/tick.svg" alt="Tick" />
                        Bible Studies & Discipleship
                      </li>
                      <li>
                        <img src="/tick.svg" alt="Tick" />
                        Leadership Training
                      </li>
                      <li>
                        <img src="/tick.svg" alt="Tick" />
                        Mentorship & Counseling
                      </li>
                      <li>
                        <img src="/tick.svg" alt="Tick" />
                        Community Outreach & Service
                      </li>
                      <li>
                        <img src="/tick.svg" alt="Tick" />
                        Youth Retreats & Camps
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="advantage-img two">
                  <img src="assets/img/inner-pages/youth-ministry.jpg" alt="Youth Ministry" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </MainLayout>
  );
};

export default PortfolioDetailPage;
