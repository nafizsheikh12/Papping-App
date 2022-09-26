import React, { useState, useEffect } from "react";
import Layout from "../../../Layout/Layout";
import { Table, Button } from "react-bootstrap";
import AddCategory from "./AddCategory";
import "./Category.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { FaPlus } from "react-icons/fa";
import { userInfo } from "../../../../utils/auth";
import { Loading, showError, showSuccess } from "../../../../utils/messages";
import { getCategory, deleteCategory } from "../../../../api/Offer/Category";
import ItemCategory from "./ItemCategory";

const Category = () => {
  const [modalShow, setModalShow] = useState(false);
  const [inputFile, setInputFile] = useState(0);
  const [values, setValues] = useState({
    errorMsg: "",
    error: false,
    loading: true,
    success: false,
    Categories_data: [],
  });
  const { loading, error, errorMsg, Categories_data, success } = values;
  const { token } = userInfo();
  const parentSetInputFile = (id) => {
    setInputFile(id);
  };
  const loeadCategory = () => {
    getCategory(token)
      .then((response) => {
        if (response.status === 200) {
          setValues({
            ...values,
            Categories_data: response.data,
            error: false,
            success: success,
            disabled: false,
            loading: false,
          });
        }
      })
      .catch((err) => {
        let errMsg = "Something went wrong!";
        if (err.response.data !== undefined) {
          errMsg = err.response.data.message;
        } else {
          errMsg = "Something went wrong!";
        }
        setValues({
          ...values,
          error: true,
          errorMsg: errMsg,
          disabled: false,
          loading: true,
        });
      });
  };

  useEffect(() => {
    loeadCategory();
  }, []);

  const removeItem = (item) => () => {
    if (!window.confirm("Are You Sure?")) return;
    deleteCategory(token, item)
      .then((response) => {
        console.log(response);
        loeadCategory();
        setValues({
          ...values,
          error: false,
          success: true,
          errorMsg: "Deleted Successfully!!",
          disabled: false,
          loading: false,
        });
      })
      .catch((err) => {
        let errMsg = "Something went wrong!";
        if (err.response.data !== undefined) {
          errMsg = err.response.data.message;
        } else {
          errMsg = "Something went wrong!";
        }
        setValues({ ...values, error: true, errorMsg: errMsg });
      });
  };

  return (
    <Layout
      title="Category"
      className="offer"
      subActive="offer.category"
      activeNum="2"
    >
      <div id="Category">
        <div className="manageFinaceHeader">
          <h2>Create category</h2>
          <Button
            variant="primary duplicate__m_btn"
            onClick={() => setModalShow(true)}
          >
            <FaPlus fill="white" /> Create
          </Button>
          <AddCategory show={modalShow} onHide={() => setModalShow(false)} />
        </div>
        <div className="accordion__from mt-3">
          <div className="header">
            <h2>Category</h2>
          </div>
        </div>
        {showSuccess(success, errorMsg)}
        {showError(error, errorMsg)}
        <Table className="table" responsive>
          <thead>
            <tr>
              <th>
                ID <ArrowDropDownIcon />
              </th>
              <th>
                Name <ArrowDropDownIcon />
              </th>
              <th>
                Created At <ArrowDropDownIcon />
              </th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {Categories_data.map((item) => (
              <ItemCategory
                data={item}
                key={item.id}
                inputFile={inputFile}
                childSetInputFile={parentSetInputFile}
                removeItem={removeItem(item.id)}
                loeadCategory={loeadCategory}
              />
            ))}
          </tbody>
        </Table>
        {showError(error, errorMsg)}
        {Loading(loading)}
      </div>
    </Layout>
  );
};

export default Category;
