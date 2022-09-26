import "./FormSliderTop.scss";

const FormSliderTop = ({title,children}) => {
    return (
      <div className="accordion FormSliderTop " id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header accordian__collaps" id="formHeading">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#formCollapse"
              aria-expanded="true"
              aria-controls="formCollapse"
            >
              <p> Filter </p>
            </button>
          </h2>
          <div
            id="formCollapse"
            class="accordion-collapse collapse"
            aria-labelledby="formHeading"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <hr class="accordion-hr" />

             {children}
            </div>
          </div>
        </div>
      </div>
    );
}

export default FormSliderTop