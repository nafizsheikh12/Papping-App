import React from "react";
import Layout from "../../../Layout/Layout";
import { Table } from "react-bootstrap";
import "./AffiliateReport.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import UserAvata from "../../../../assets/avata.png";


import Tooltip from "@mui/material/Tooltip";
import UserLogo from "../../../../assets/Rectangle 42.png";


import ReportAccordionForm from "../../../../shared/SharedComponents/ReportAccordionForm/ReportAccordionForm";
import FormSliderTop from "../../../../shared/SharedComponents/FormSlider/FormSliderTop";
import { Button } from '@mui/material';

const AffiliateReport = () => {

  const TooltipsContent = (avata, userTitle) => (
    <div className="text-center">
      <img src={avata} alt="avata.png" style={{ width: "200px" }} />
      <p className="mt-3 text-black"> {userTitle}</p>
    </div>
  );
  return (
    <Layout
      title="Affiliate Report"
      className="report"
      subActive="report.affiliate"
      activeNum="5"
    >
      <div id="AffiliateReport">
        {/* Form */}
        <div className="accordion__from">
          <FormSliderTop title="Affiliate Report Form">
            <ReportAccordionForm />
          </FormSliderTop>

          <div className="AffiliateReportHeader header">
            <h2>manage manager</h2>
          </div>
        </div>
        <Table responsive>
          <thead>
            <tr>
              <th>
                ID <ArrowDropDownIcon />
              </th>
              <th>
                Affiliate name <ArrowDropDownIcon />
              </th>
              <th>
                click <ArrowDropDownIcon />
              </th>
              <th>
                unique click
                <ArrowDropDownIcon />
              </th>
              <th>
                conversion <ArrowDropDownIcon />
              </th>
              <th>
                revenue <ArrowDropDownIcon />
              </th>
              <th>
                payout <ArrowDropDownIcon />
              </th>
              <th>
                profit <ArrowDropDownIcon />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <Tooltip
                  title={TooltipsContent(
                    UserLogo,
                    "new tR- smart link (US) only"
                  )}
                  className="text-center"
                  componentsProps={{
                    tooltip: {
                      sx: {
                        bgcolor: "white",
                        width: "400px",
                        padding: "10px 30px 10px 30px",
                        height: "auto",
                        borderRadius: "10px",
                        boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
                      },
                    },
                  }}
                >
                  <Button className="toolTipsStyle">
                    <img src={UserAvata} alt="avata.png" />
                    new tR- smart link (US) only
                  </Button>
                </Tooltip>
              </td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>$500</td>
              <td>$500</td>
              <td>$500</td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <Tooltip
                  title={TooltipsContent(
                    UserLogo,
                    "new tR- smart link (US) only"
                  )}
                  className="text-center"
                  componentsProps={{
                    tooltip: {
                      sx: {
                        bgcolor: "white",
                        width: "400px",
                        padding: "10px 30px 10px 30px",
                        height: "auto",
                        borderRadius: "10px",
                        boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
                      },
                    },
                  }}
                >
                  <Button className="toolTipsStyle">
                    <img src={UserAvata} alt="avata.png" />
                    new tR- smart link (US) only
                  </Button>
                </Tooltip>
              </td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>$500</td>
              <td>$500</td>
              <td>$500</td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <Tooltip
                  title={TooltipsContent(
                    UserLogo,
                    "new tR- smart link (US) only"
                  )}
                  className="text-center"
                  componentsProps={{
                    tooltip: {
                      sx: {
                        bgcolor: "white",
                        width: "400px",
                        padding: "10px 30px 10px 30px",
                        height: "auto",
                        borderRadius: "10px",
                        boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
                      },
                    },
                  }}
                >
                  <Button className="toolTipsStyle">
                    <img src={UserAvata} alt="avata.png" />
                    new tR- smart link (US) only
                  </Button>
                </Tooltip>
              </td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>$500</td>
              <td>$500</td>
              <td>$500</td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <Tooltip
                  title={TooltipsContent(
                    UserLogo,
                    "new tR- smart link (US) only"
                  )}
                  className="text-center"
                  componentsProps={{
                    tooltip: {
                      sx: {
                        bgcolor: "white",
                        width: "400px",
                        padding: "10px 30px 10px 30px",
                        height: "auto",
                        borderRadius: "10px",
                        boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
                      },
                    },
                  }}
                >
                  <Button className="toolTipsStyle">
                    <img src={UserAvata} alt="avata.png" />
                    new tR- smart link (US) only
                  </Button>
                </Tooltip>
              </td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>$500</td>
              <td>$500</td>
              <td>$500</td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <Tooltip
                  title={TooltipsContent(
                    UserLogo,
                    "new tR- smart link (US) only"
                  )}
                  className="text-center"
                  componentsProps={{
                    tooltip: {
                      sx: {
                        bgcolor: "white",
                        width: "400px",
                        padding: "10px 30px 10px 30px",
                        height: "auto",
                        borderRadius: "10px",
                        boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
                      },
                    },
                  }}
                >
                  <Button className="toolTipsStyle">
                    <img src={UserAvata} alt="avata.png" />
                    new tR- smart link (US) only
                  </Button>
                </Tooltip>
              </td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>$500</td>
              <td>$500</td>
              <td>$500</td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <Tooltip
                  title={TooltipsContent(
                    UserLogo,
                    "new tR- smart link (US) only"
                  )}
                  className="text-center"
                  componentsProps={{
                    tooltip: {
                      sx: {
                        bgcolor: "white",
                        width: "400px",
                        padding: "10px 30px 10px 30px",
                        height: "auto",
                        borderRadius: "10px",
                        boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
                      },
                    },
                  }}
                >
                  <Button className="toolTipsStyle">
                    <img src={UserAvata} alt="avata.png" />
                    new tR- smart link (US) only
                  </Button>
                </Tooltip>
              </td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>$500</td>
              <td>$500</td>
              <td>$500</td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <Tooltip
                  title={TooltipsContent(
                    UserLogo,
                    "new tR- smart link (US) only"
                  )}
                  className="text-center"
                  componentsProps={{
                    tooltip: {
                      sx: {
                        bgcolor: "white",
                        width: "400px",
                        padding: "10px 30px 10px 30px",
                        height: "auto",
                        borderRadius: "10px",
                        boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
                      },
                    },
                  }}
                >
                  <Button className="toolTipsStyle">
                    <img src={UserAvata} alt="avata.png" />
                    new tR- smart link (US) only
                  </Button>
                </Tooltip>
              </td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>$500</td>
              <td>$500</td>
              <td>$500</td>
            </tr>
         
          </tbody>
        </Table>
      </div>
    </Layout>
  );
};

export default AffiliateReport;
