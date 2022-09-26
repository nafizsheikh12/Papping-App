import React from "react";
import Layout from "../../../Layout/Layout";
import { Table } from "react-bootstrap";
import "./CountryReport.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ReportAccordionForm from "../../../../shared/SharedComponents/ReportAccordionForm/ReportAccordionForm";
import FormSliderTop from './../../../../shared/SharedComponents/FormSlider/FormSliderTop';


const CountryReport = () => {
  return (
    <Layout
      title="Country Report"
      className="AffiliateReport"
      subActive="AffiliateReport.country"
      activeNum="14"
    >
      <div id="CountryReport">
        <div className="accordion__from">
          {/* form */}
          <FormSliderTop title="Country Report Form">
            <ReportAccordionForm />
          </FormSliderTop>

          <div className="header">
            <h2>country reports</h2>
          </div>
        </div>
        <Table responsive>
          <thead>
            <tr>
              <th>
                report date <ArrowDropDownIcon />
              </th>
              <th>
                click
                <ArrowDropDownIcon />
              </th>
              <th>
                unique click <ArrowDropDownIcon />
              </th>
              <th>
                conversion
                <ArrowDropDownIcon />
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
              <td>United State</td>
              <td>50</td>
              <td>50</td>
              <td>124</td>
              <td>$50.0</td>
              <td>$50.0</td>
              <td>$50.0</td>
            </tr>
            <tr>
              <td>United State</td>
              <td>50</td>
              <td>50</td>
              <td>124</td>
              <td>$50.0</td>
              <td>$50.0</td>
              <td>$50.0</td>
            </tr>
            <tr>
              <td>United State</td>
              <td>50</td>
              <td>50</td>
              <td>124</td>
              <td>$50.0</td>
              <td>$50.0</td>
              <td>$50.0</td>
            </tr>
            <tr>
              <td>United State</td>
              <td>50</td>
              <td>50</td>
              <td>124</td>
              <td>$50.0</td>
              <td>$50.0</td>
              <td>$50.0</td>
            </tr>
            <tr>
              <td>United State</td>
              <td>50</td>
              <td>50</td>
              <td>124</td>
              <td>$50.0</td>
              <td>$50.0</td>
              <td>$50.0</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Layout>
  );
};

export default CountryReport;
