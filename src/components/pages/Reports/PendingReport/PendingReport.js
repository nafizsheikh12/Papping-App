
import Layout from "../../../Layout/Layout";

import { Table } from "react-bootstrap";
import ReportTableHeader from "./../../../../shared/SharedComponents/ReportTable/ReportTableHeader";
import ReportTableData from "../../../../shared/SharedComponents/ReportTable/ReportTableData";
import "./PendingReport.scss";
import FormSliderTop from "../../../../shared/SharedComponents/FormSlider/FormSliderTop";
import ReportAccordionForm from "../../../../shared/SharedComponents/ReportAccordionForm/ReportAccordionForm";

const PendingReport = () => {
  return (
    <Layout
      title="Pending Report"
      className="report"
      subActive="report.pendding"
      activeNum="5"
    >
      <div id="PendingReport">
        <div className="accordion__from ">
          {/* form */}
          <FormSliderTop title="Pending Report Form">
            <ReportAccordionForm />
          </FormSliderTop>

          <div className="header">
            <h2>Pending reports</h2>
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
        ;
      </div>
    </Layout>
  );
};

export default PendingReport;
