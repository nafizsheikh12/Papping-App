import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CreateIcon } from "../../../../../assets/Icons";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Button as BootstrapButton } from "react-bootstrap";
import CommonModal from "./Modal/CommonModal";
import { Button } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import {Table} from 'react-bootstrap';

const ConversionRatio = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div id="customerPayout">
      <h3>
        Offer Conversion Ratio
        <BootstrapButton
          onClick={() => setModalShow(true)}
          variant="primary duplicate-m_btn"
        >
          {CreateIcon} create
        </BootstrapButton>
      </h3>
      <CommonModal show={modalShow} onHide={() => setModalShow(false)} />
      <div className="main0table">
         <Table className="table" responsive>
           <thead>
                <tr>
                   
                    <th>Type</th>
                    <th>Percantage</th>
                   
                    <th>action</th>
                </tr>
           </thead>
          
          <tbody>
           
                <tr>
                   
                    <td><span className="cpa">CPA</span></td>
                   
                    <td><p>$50.00</p></td>
                    <td>
                          <Button variant="contained" size="small" className="delete__Btn">
                               <DeleteIcon className="delete-icon" />
                               <p>Delete</p>
                          </Button>
                    </td>
                  </tr>
                  <tr>
                  
                    <td><span className="cpa">CPA</span></td>
                    
                    <td><p>$50.00</p></td>
                    <td>
                          <Button variant="contained" size="small" className="delete__Btn">
                               <DeleteIcon className="delete-icon" />
                               <p>Delete</p>
                          </Button>
                    </td>
                  </tr>
                  <tr>
                   
                    <td><span className="cpa">CPA</span></td>
                  
                    <td><p>$50.00</p></td>
                    <td>
                          <Button variant="contained" size="small" className="delete__Btn">
                               <DeleteIcon className="delete-icon" />
                               <p>Delete</p>
                          </Button>
                    </td>
                  </tr>
                  <tr>
                   
                    <td><span className="cpa">CPA</span></td>
                 
                    <td><p>$50.00</p></td>
                    <td>
                          <Button variant="contained" size="small" className="delete__Btn">
                               <DeleteIcon className="delete-icon" />
                               <p>Delete</p>
                          </Button>
                    </td>
                  </tr>
                 
           </tbody>
          
        </Table>
      </div>
    </div>
  );
};

export default ConversionRatio;
