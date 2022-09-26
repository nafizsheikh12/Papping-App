import Layout from "../../../Layout/Layout";
import { Table } from "react-bootstrap";
import ReportTableHeader from "./../../../../shared/SharedComponents/ReportTable/ReportTableHeader";
import ReportTableData from "../../../../shared/SharedComponents/ReportTable/ReportTableData";
import "./RejectReport.scss";
import FormSliderTop from "../../../../shared/SharedComponents/FormSlider/FormSliderTop";
import ReportAccordionForm from "../../../../shared/SharedComponents/ReportAccordionForm/ReportAccordionForm";

const RejectReport = () => {
  return (
    <Layout
      title="Reject Report"
      className="report"
      subActive="report.reject"
      activeNum="5"
    >
      <div id="RejectReport">
        <div className="accordion__from ">
          {/* form */}
          <FormSliderTop title="Reject Report Form">
            <ReportAccordionForm />
          </FormSliderTop>

          <div className="header">
            <h2>Reject reports</h2>
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

export default RejectReport;
