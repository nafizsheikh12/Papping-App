import "./FormSlider.scss";

const FormSlider = ({title,children}) => {
    return (
      <div class="accordion FormSlider mb-5" id="accordionExample">
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
              <p> {title} </p>
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

export default FormSlider