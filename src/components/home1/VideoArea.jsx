import React from "react";
import Link from "next/link";

const VideoArea = () => {
  return (
    <div className="video-area mb-130">
      <div className="container-fluid one">
        <div className="row">
          <div className="col-lg-12">
            <div className="video-wrapper">
              <div className="video-content-wrap">
                <div className="video-content">
                  <h4>
                    <Link href="/online-gatherings">
                      Online Gatherings
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
                        />
                      </svg>
                    </Link>
                  </h4>
                  <ul>
                    <li>Congregational</li>
                    <li>Women</li>
                    <li>Youth</li>
                  </ul>
                </div>
              </div>
              <video
                autoPlay
                loop
                muted
                playsInline
                src="assets/video/video-bg4.webm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoArea;