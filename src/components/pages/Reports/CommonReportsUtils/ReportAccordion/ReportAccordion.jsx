import "./ReportAccordion.scss";

const ReportAccordion = ({children}) => {
    return (
      <div class="accordion ReportAccordion" id="accordionExample ">
        <div>{children}</div>
      </div>
    );
}

export default ReportAccordion