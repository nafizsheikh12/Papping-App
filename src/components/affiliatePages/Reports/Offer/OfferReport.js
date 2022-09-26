import React from "react";
import Layout from "../../../Layout/Layout";
import { Table } from "react-bootstrap";
import "./OfferReport.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import UserAvata from "../../../../assets/avata.png";
import FormSliderTop from "../../../../shared/SharedComponents/FormSlider/FormSliderTop";
import ReportAccordionForm from "../../../../shared/SharedComponents/ReportAccordionForm/ReportAccordionForm";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import UserLogo from '../../../../assets/Rectangle 42.png'
import { useHistory,Link } from 'react-router-dom';

const OfferReport = () => {
  const TooltipsContent = (avata, userTitle) => (
    <div className="text-center">
      <img src={avata} alt="avata.png" style={{ width: "200px" }} />
      <p className="mt-3 text-black"> {userTitle}</p>
    </div>
  );


  let history = useHistory()

  const handleClick = (id) =>{
    history.push(`/offer/details/${id}`);
  }




  return (
    <Layout
      title="Affiliate Application"
      className="AffiliateReport"
      subActive="AffiliateReport.offer"
      activeNum="14"
    >
      <div id="OfferReport">
        <div className="accordion__from">
          {/* Form */}
          <FormSliderTop title="Offer Report Form">
            <ReportAccordionForm />
          </FormSliderTop>

          <div className="header">
            <h2>offer reports</h2>
          </div>
        </div>
        <Table responsive>
          <thead>
            <tr>
              <th>
                ID <ArrowDropDownIcon />
              </th>
              <th>
                offer name <ArrowDropDownIcon />
              </th>
              <th>
                click <ArrowDropDownIcon />
              </th>
              <th>
                unique click <ArrowDropDownIcon />
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
            <tr onClick={() => handleClick(2)}>
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

              <td>20</td>
              <td>20</td>
              <td>20</td>
              <td>$50.00</td>
              <td>$50.00</td>
              <td>$50.00</td>
            </tr>
            <tr onClick={() => handleClick(2)}>
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

              <td>20</td>
              <td>20</td>
              <td>20</td>
              <td>$50.00</td>
              <td>$50.00</td>
              <td>$50.00</td>
            </tr>
            <tr onClick={() => handleClick(2)}>
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

              <td>20</td>
              <td>20</td>
              <td>20</td>
              <td>$50.00</td>
              <td>$50.00</td>
              <td>$50.00</td>
            </tr>
            <tr onClick={() => handleClick(2)}>
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

              <td>20</td>
              <td>20</td>
              <td>20</td>
              <td>$50.00</td>
              <td>$50.00</td>
              <td>$50.00</td>
            </tr>
            <tr onClick={() => handleClick(2)}>
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

              <td>20</td>
              <td>20</td>
              <td>20</td>
              <td>$50.00</td>
              <td>$50.00</td>
              <td>$50.00</td>
            </tr>
            <tr onClick={() => handleClick(2)}>
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

              <td>20</td>
              <td>20</td>
              <td>20</td>
              <td>$50.00</td>
              <td>$50.00</td>
              <td>$50.00</td>
            </tr>
            <tr onClick={() => handleClick(2)}>
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

              <td>20</td>
              <td>20</td>
              <td>20</td>
              <td>$50.00</td>
              <td>$50.00</td>
              <td>$50.00</td>
            </tr>
            <tr onClick={() => handleClick(2)}>
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

              <td>20</td>
              <td>20</td>
              <td>20</td>
              <td>$50.00</td>
              <td>$50.00</td>
              <td>$50.00</td>
            </tr>
            <tr onClick={() => handleClick(2)}>
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

              <td>20</td>
              <td>20</td>
              <td>20</td>
              <td>$50.00</td>
              <td>$50.00</td>
              <td>$50.00</td>
            </tr>
            <tr onClick={() => handleClick(2)}>
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

              <td>20</td>
              <td>20</td>
              <td>20</td>
              <td>$50.00</td>
              <td>$50.00</td>
              <td>$50.00</td>
            </tr>
            <tr onClick={() => handleClick(2)}>
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

              <td>20</td>
              <td>20</td>
              <td>20</td>
              <td>$50.00</td>
              <td>$50.00</td>
              <td>$50.00</td>
            </tr>
           
          </tbody>
        </Table>
      </div>
    </Layout>
  );
};

export default OfferReport;
