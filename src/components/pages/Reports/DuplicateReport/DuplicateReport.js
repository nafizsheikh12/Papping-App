
import Layout from "../../../Layout/Layout";
import { Table } from "react-bootstrap";
import ReportTableHeader from "./../../../../shared/SharedComponents/ReportTable/ReportTableHeader";
import ReportTableData from "../../../../shared/SharedComponents/ReportTable/ReportTableData";
import "./DuplicateReport.scss";

import FormSliderTop from "../../../../shared/SharedComponents/FormSlider/FormSliderTop";
import ReportAccordionForm from "../../../../shared/SharedComponents/ReportAccordionForm/ReportAccordionForm";

const DuplicateReport = () => {
  return (
    <Layout
      title="Duplicate Report"
      className="report"
      subActive="report.duplicate"
      activeNum="5"
    >
      <div id="DuplicateReport">
        <div className="accordion__from ">
          {/* form */}
          <FormSliderTop title="Duplicate Report Form">
            <ReportAccordionForm />
          </FormSliderTop>
          <div className="header">
            <h2>Duplicate reports</h2>
          </div>
        </div>

        <Table responsive>
          <thead>
            <ReportTableHeader />
          </thead>
          <tbody>
            <ReportTableData id="1" />
            <ReportTableData id="2" />
            <ReportTableData id="3" />
          </tbody>
        </Table>
      </div>
    </Layout>
  );
};

export default DuplicateReport;
