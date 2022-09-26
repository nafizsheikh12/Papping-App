import React from "react";
import Avata from "../../../../../assets/avata.png";
import DateTime from "../../../../../assets/date-time.png";
import Profile from "../../../../../assets/profile.png";
import "./ReportAccordion.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const ReportAccordionBox = ({ heading, collapse }) => {
  return (
    <div class="accordion-item">
      <h2 class="accordion-header accordian__collaps" id={heading}>
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${collapse}`}
          aria-expanded="true"
          aria-controls={collapse}
        >
          <div class="d-flex gap-2 flex-row justify-content-around table_head table__head__width">
            <div class="">
              <div className="d-flex">
                <p className="text-muted">ID </p>
                <ArrowDropDownIcon fontSize="small" />
              </div>

              <p className="text__dark-n-light">#1</p>
            </div>
            <div class="text-center">
              <div className="d-flex">
                <p className="text-muted">Offer </p>
                <ArrowDropDownIcon fontSize="small" />
              </div>

              <div class="text-center text__dark-n-light">
                <img
                  src={Avata}
                  style={{ height: "25px", width: "25px" }}
                  alt="avatar"
                />
                <p className="mr-1 text__dark-n-light">New TR-smart Link (US) Only</p>
              </div>
            </div>
            <div class=" ">
              <div className="d-flex">
                <p className="text-muted"> Date/Time </p>
                <ArrowDropDownIcon fontSize="small" />
              </div>

              <div class="text-center text__dark-n-light">
               
                <div>
                  <p className="text__dark-n-light">15 jan </p>
                  <p className="text__dark-n-light">23:58:01</p>
                </div>
              </div>
            </div>
            <div class=" ">
              <div className="d-flex">
                <p className="text-muted"> Advertiser </p>
                <ArrowDropDownIcon fontSize="small" />
              </div>

              <p className="text__dark-n-light">Maxbounty </p>
            </div>
            <div class=" ">
              <div className="d-flex">
                <p className="text-muted"> Affiliate </p>
                <ArrowDropDownIcon fontSize="small" />
              </div>

              <div class="text-center text__dark-n-light">
                <img
                  src={Profile}
                  style={{ height: "25px", width: "25px" }}
                  alt="avatar"
                />
                <p className="text__dark-n-light">Rakib</p>
              </div>
            </div>
            <div class=" ">
              <div className="d-flex">
                <p className="text-muted"> Source </p>
                <ArrowDropDownIcon fontSize="small" />
              </div>

              <p className="text__dark-n-light">http//hsnn.thec...</p>
            </div>
            <div class=" ">
              <div className="d-flex">
                <p className="text-muted"> Geography/IP </p>
                <ArrowDropDownIcon fontSize="small" />
              </div>

              <div class=" text__dark-n-light">
                <p class=" text__dark-n-light">USA- Santa</p>
                <p class=" text__dark-n-light">(104.7.64.178)</p>
              </div>
            </div>
            <div class=" ">
              <div className="d-flex">
                <p className="text-muted"> Click ID </p>
                <ArrowDropDownIcon fontSize="small" />
              </div>

              <div className="d-flex flex-row mr-1 text__dark-n-light">
                <p class=" text__dark-n-light">EQUP0j....</p>
              </div>
            </div>
            <div class=" ">
              <div className="d-flex">
                <p className="text-muted text-center"> AFF click ID </p>
                <ArrowDropDownIcon fontSize="small" />
              </div>

              <div className="d-flex flex-row mr-1 text__dark-n-light">
                <p class=" text__dark-n-light">EQUP0j....</p>
              </div>
            </div>
          </div>
        </button>
      </h2>
      <div
        id={collapse}
        class="accordion-collapse collapse"
        aria-labelledby={heading}
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <hr class="accordion-hr" />
          <div>
            <div class="d-flex gap-2 flex-row justify-content-around table_head">
              <div class="">
                <p className="text-muted"> Sub 1 </p>
                <p className="text__dark-n-light">Rmm125425</p>
              </div>
              <div class="">
                <p className="text-muted"> Sub 2 </p>
                <p className="text__dark-n-light">Rmm</p>
              </div>
              <div class="">
                <p className="text-muted"> Sub 3 </p>
                <p className="text__dark-n-light">Rmm3234</p>
              </div>
              <div class="">
                <p className="text-muted"> Device </p>
                <div class="text-center">
                  <p className="text__dark-n-light">Mobile IOS(14.2) </p>
                  <p>(Mobile Safari)</p>
                </div>
              </div>

              <div class="">
                <p className="text-muted"> User Agent </p>
                <p className="text__dark-n-light text-center"> I </p>
              </div>
              <div class="">
                <p className="text-muted"> Revenue </p>
                <p className="text__dark-n-light"> $51.00 </p>
              </div>
              <div class="">
                <p className="text-muted"> Payout </p>
                <p className="text__dark-n-light"> $51.00 </p>
              </div>
              <div class="">
                <p className="text-muted"> Profit </p>
                <p className="text__dark-n-light"> $200.00 </p>
              </div>
              <div class="">
                <p className="text-muted"> Action </p>
                <button
                  type="button"
                  class="btn btn-success"
                  style={{
                    backgroundColor: "rgba(113, 216, 117, 0.1)",
                    color: "#71d875",
                    border: "none",
                  }}
                >
                  Approved
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportAccordionBox;
