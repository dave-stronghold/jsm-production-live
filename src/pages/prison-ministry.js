import React from "react";
import MainLayout from "../components/layout/MainLayout";
import Link from "next/link";

const PortfolioDetailoPage = () => {
  return (
    <MainLayout>
      <div className="case-study-details-wrapper pt-130 mb-130">
        <div className="container-fluid one pl--95">
          <div className="case-study-details-top mb-70">
            <div className="row g-lg-4 gy-5">
              <div className="col-lg-6 blog-details-page">
                <blockquote>
                  <div className="quoat-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={26}
                      height={18}
                      viewBox="0 0 26 18"
                    >
                      <path
                        d="M20.6832 6.05443L20.4534 6.62147L21.0549 6.73371C23.6453 7.21714 25.5 9.46982 25.5 12.0337C25.5 13.573 24.8343 15.0529 23.6667 16.09C22.4982 17.1192 20.9207 17.6286 19.3329 17.4722C16.4907 17.1844 14.2846 14.6588 14.3404 11.7032C14.4201 7.67759 15.8945 5.07458 17.6289 3.38578C19.3761 1.68459 21.4158 0.884497 22.6452 0.531618L22.6591 0.527628L22.6728 0.52284C22.7152 0.507954 22.7704 0.5 22.8713 0.5C23.1425 0.5 23.3799 0.624329 23.5265 0.85037L23.5277 0.852289C23.7128 1.13485 23.6857 1.4981 23.4524 1.75822L23.4523 1.75827C22.2163 3.13698 21.2806 4.57999 20.6832 6.05443Z"
                        stroke="white"
                      />
                      <path
                        d="M6.84136 6.05442L6.61159 6.62147L7.21303 6.73371C9.80353 7.21714 11.6582 9.46983 11.6582 12.0337C11.6582 13.573 10.9925 15.0529 9.82487 16.09C8.65615 17.1194 7.07865 17.6285 5.50008 17.4722C2.67976 17.1842 0.498651 14.7207 0.498651 11.8126V11.6985C0.579458 7.67556 2.05336 5.07393 3.7871 3.38579C5.53424 1.6846 7.574 0.884504 8.8034 0.531628L8.81731 0.527636L8.83096 0.522848C8.8734 0.507959 8.92859 0.500008 9.02944 0.500008C9.3007 0.500008 9.53807 0.624359 9.68459 0.850338L9.6859 0.852327C9.87103 1.13488 9.84386 1.49811 9.61059 1.75823L9.61054 1.75828C8.37446 3.13698 7.43881 4.57999 6.84136 6.05442Z"
                        stroke="white"
                      />
                    </svg>
                  </div>
                  <p>
                    Remember those in prison as if you were together with them
                    in prison, and those who are mistreated as if you yourselves
                    were suffering.
                  </p>
                  <cite>Hebrews 13:3</cite>
                </blockquote>
              </div>
              <div className="col-lg-5">
                <div className="details-page-content">
                  <h2>Prison Ministry</h2>
                  <p className="first-para pb-20">
                    Matthew 25:36 teaches us to visit those in prison, showing
                    the importance of ministering to the incarcerated. Prison
                    ministry reflects God's grace and mercy, offering hope and
                    healing to the forgotten. It shares the transformative power
                    of the Gospel, demonstrating God's unconditional love for
                    all.
                  </p>
                  <p>
                    Through prison ministry, we bring light to darkness,
                    offering support, encouragement, and spiritual guidance to
                    those seeking redemption. It shows God's redemptive work,
                    proving that no one is beyond His reach or love.
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={10}
                      height={14}
                      viewBox="0 0 10 14"
                    >
                      <path d="M0 14V0L10 7L0 14Z" />
                    </svg>
                    <h4>Our Programmes</h4>
                  </div>
                  <p>
                    {" "}
                    In our Prison Ministry Journey, we delve into various
                    aspects of faith and redemption, exploring how God's love
                    and teachings can transform even the darkest of
                    circumstances. Let's embark on this transformative journey
                    together as we explore the following topics:
                  </p>
                  <div className="statement-content-bottom">
                    <div className="title">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={7}
                        height={10}
                        viewBox="0 0 7 10"
                      >
                        <path d="M0 10V0L7 5L0 10Z" />
                      </svg>
                      <h6>Aspects </h6>
                    </div>
                    <ul>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={14}
                          height={14}
                          viewBox="0 0 14 14"
                        >
                          <path d="M12.1223 3.1903C12.1631 3.23094 12.1954 3.27922 12.2174 3.33237C12.2395 3.38552 12.2508 3.4425 12.2508 3.50005C12.2508 3.5576 12.2395 3.61458 12.2174 3.66773C12.1954 3.72088 12.1631 3.76916 12.1223 3.8098L5.99731 9.9348C5.95667 9.97554 5.9084 10.0079 5.85524 10.0299C5.80209 10.052 5.74511 10.0633 5.68756 10.0633C5.63002 10.0633 5.57304 10.052 5.51988 10.0299C5.46673 10.0079 5.41845 9.97554 5.37781 9.9348L2.31531 6.8723C2.23316 6.79015 2.18701 6.67873 2.18701 6.56255C2.18701 6.44637 2.23316 6.33495 2.31531 6.2528C2.39747 6.17065 2.50889 6.1245 2.62506 6.1245C2.74124 6.1245 2.85266 6.17065 2.93481 6.2528L5.68756 9.00642L11.5028 3.1903C11.5435 3.14956 11.5917 3.11723 11.6449 3.09518C11.698 3.07312 11.755 3.06177 11.8126 3.06177C11.8701 3.06177 11.9271 3.07312 11.9802 3.09518C12.0334 3.11723 12.0817 3.14956 12.1223 3.1903Z" />
                        </svg>
                        Visitation
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={14}
                          height={14}
                          viewBox="0 0 14 14"
                        >
                          <path d="M12.1223 3.1903C12.1631 3.23094 12.1954 3.27922 12.2174 3.33237C12.2395 3.38552 12.2508 3.4425 12.2508 3.50005C12.2508 3.5576 12.2395 3.61458 12.2174 3.66773C12.1954 3.72088 12.1631 3.76916 12.1223 3.8098L5.99731 9.9348C5.95667 9.97554 5.9084 10.0079 5.85524 10.0299C5.80209 10.052 5.74511 10.0633 5.68756 10.0633C5.63002 10.0633 5.57304 10.052 5.51988 10.0299C5.46673 10.0079 5.41845 9.97554 5.37781 9.9348L2.31531 6.8723C2.23316 6.79015 2.18701 6.67873 2.18701 6.56255C2.18701 6.44637 2.23316 6.33495 2.31531 6.2528C2.39747 6.17065 2.50889 6.1245 2.62506 6.1245C2.74124 6.1245 2.85266 6.17065 2.93481 6.2528L5.68756 9.00642L11.5028 3.1903C11.5435 3.14956 11.5917 3.11723 11.6449 3.09518C11.698 3.07312 11.755 3.06177 11.8126 3.06177C11.8701 3.06177 11.9271 3.07312 11.9802 3.09518C12.0334 3.11723 12.0817 3.14956 12.1223 3.1903Z" />
                        </svg>
                        Bible Studies
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={14}
                          height={14}
                          viewBox="0 0 14 14"
                        >
                          <path d="M12.1223 3.1903C12.1631 3.23094 12.1954 3.27922 12.2174 3.33237C12.2395 3.38552 12.2508 3.4425 12.2508 3.50005C12.2508 3.5576 12.2395 3.61458 12.2174 3.66773C12.1954 3.72088 12.1631 3.76916 12.1223 3.8098L5.99731 9.9348C5.95667 9.97554 5.9084 10.0079 5.85524 10.0299C5.80209 10.052 5.74511 10.0633 5.68756 10.0633C5.63002 10.0633 5.57304 10.052 5.51988 10.0299C5.46673 10.0079 5.41845 9.97554 5.37781 9.9348L2.31531 6.8723C2.23316 6.79015 2.18701 6.67873 2.18701 6.56255C2.18701 6.44637 2.23316 6.33495 2.31531 6.2528C2.39747 6.17065 2.50889 6.1245 2.62506 6.1245C2.74124 6.1245 2.85266 6.17065 2.93481 6.2528L5.68756 9.00642L11.5028 3.1903C11.5435 3.14956 11.5917 3.11723 11.6449 3.09518C11.698 3.07312 11.755 3.06177 11.8126 3.06177C11.8701 3.06177 11.9271 3.07312 11.9802 3.09518C12.0334 3.11723 12.0817 3.14956 12.1223 3.1903Z" />
                        </svg>
                        Reentry Support
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={14}
                          height={14}
                          viewBox="0 0 14 14"
                        >
                          <path d="M12.1223 3.1903C12.1631 3.23094 12.1954 3.27922 12.2174 3.33237C12.2395 3.38552 12.2508 3.4425 12.2508 3.50005C12.2508 3.5576 12.2395 3.61458 12.2174 3.66773C12.1954 3.72088 12.1631 3.76916 12.1223 3.8098L5.99731 9.9348C5.95667 9.97554 5.9084 10.0079 5.85524 10.0299C5.80209 10.052 5.74511 10.0633 5.68756 10.0633C5.63002 10.0633 5.57304 10.052 5.51988 10.0299C5.46673 10.0079 5.41845 9.97554 5.37781 9.9348L2.31531 6.8723C2.23316 6.79015 2.18701 6.67873 2.18701 6.56255C2.18701 6.44637 2.23316 6.33495 2.31531 6.2528C2.39747 6.17065 2.50889 6.1245 2.62506 6.1245C2.74124 6.1245 2.85266 6.17065 2.93481 6.2528L5.68756 9.00642L11.5028 3.1903C11.5435 3.14956 11.5917 3.11723 11.6449 3.09518C11.698 3.07312 11.755 3.06177 11.8126 3.06177C11.8701 3.06177 11.9271 3.07312 11.9802 3.09518C12.0334 3.11723 12.0817 3.14956 12.1223 3.1903Z" />
                        </svg>
                        Mentoring Programs
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={14}
                          height={14}
                          viewBox="0 0 14 14"
                        >
                          <path d="M12.1223 3.1903C12.1631 3.23094 12.1954 3.27922 12.2174 3.33237C12.2395 3.38552 12.2508 3.4425 12.2508 3.50005C12.2508 3.5576 12.2395 3.61458 12.2174 3.66773C12.1954 3.72088 12.1631 3.76916 12.1223 3.8098L5.99731 9.9348C5.95667 9.97554 5.9084 10.0079 5.85524 10.0299C5.80209 10.052 5.74511 10.0633 5.68756 10.0633C5.63002 10.0633 5.57304 10.052 5.51988 10.0299C5.46673 10.0079 5.41845 9.97554 5.37781 9.9348L2.31531 6.8723C2.23316 6.79015 2.18701 6.67873 2.18701 6.56255C2.18701 6.44637 2.23316 6.33495 2.31531 6.2528C2.39747 6.17065 2.50889 6.1245 2.62506 6.1245C2.74124 6.1245 2.85266 6.17065 2.93481 6.2528L5.68756 9.00642L11.5028 3.1903C11.5435 3.14956 11.5917 3.11723 11.6449 3.09518C11.698 3.07312 11.755 3.06177 11.8126 3.06177C11.8701 3.06177 11.9271 3.07312 11.9802 3.09518C12.0334 3.11723 12.0817 3.14956 12.1223 3.1903Z" />
                        </svg>
                        Letter Writing
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={14}
                          height={14}
                          viewBox="0 0 14 14"
                        >
                          <path d="M12.1223 3.1903C12.1631 3.23094 12.1954 3.27922 12.2174 3.33237C12.2395 3.38552 12.2508 3.4425 12.2508 3.50005C12.2508 3.5576 12.2395 3.61458 12.2174 3.66773C12.1954 3.72088 12.1631 3.76916 12.1223 3.8098L5.99731 9.9348C5.95667 9.97554 5.9084 10.0079 5.85524 10.0299C5.80209 10.052 5.74511 10.0633 5.68756 10.0633C5.63002 10.0633 5.57304 10.052 5.51988 10.0299C5.46673 10.0079 5.41845 9.97554 5.37781 9.9348L2.31531 6.8723C2.23316 6.79015 2.18701 6.67873 2.18701 6.56255C2.18701 6.44637 2.23316 6.33495 2.31531 6.2528C2.39747 6.17065 2.50889 6.1245 2.62506 6.1245C2.74124 6.1245 2.85266 6.17065 2.93481 6.2528L5.68756 9.00642L11.5028 3.1903C11.5435 3.14956 11.5917 3.11723 11.6449 3.09518C11.698 3.07312 11.755 3.06177 11.8126 3.06177C11.8701 3.06177 11.9271 3.07312 11.9802 3.09518C12.0334 3.11723 12.0817 3.14956 12.1223 3.1903Z" />
                        </svg>
                        Substance Abuse Counseling
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="advantage-img two">
                  <img src="assets/img/inner-pages/prison-img.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PortfolioDetailoPage;
