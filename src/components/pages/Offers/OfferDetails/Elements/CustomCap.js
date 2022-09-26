
import { Link } from 'react-router-dom';
import { CreateIcon } from '../../../../../assets/Icons';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import photo from '../../../../../assets/Ellipse 5.png';
import React, { useState } from "react";
import CommonModal from './Modal/CommonModal';
import {Table} from 'react-bootstrap';
import { Button as BootstrapButton } from "react-bootstrap";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const CustomCap = () => {
   const [modalShow, setModalShow] = useState(false);
    return (
      <div id="customerPayout">
        <h3>
          affiliate custom Cap{" "}
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
                    <th>affilaiate</th>
                    <th>Type</th>
                    <th>Cap</th>
                    
                    <th>action</th>
                </tr>
           </thead>
          
          <tbody>
           
                <tr>
                   <td>
                       <div className="affitlate-table-name">
                            <img src={photo} alt={photo} />
                            <p className="text">new tR- smart link (US) only</p>
                       </div>
                   </td>
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
                   <td>
                       <div className="affitlate-table-name">
                            <img src={photo} alt={photo} />
                            <p className="text">new tR- smart link (US) only</p>
                       </div>
                   </td>
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
                   <td>
                       <div className="affitlate-table-name">
                            <img src={photo} alt={photo} />
                            <p className="text">new tR- smart link (US) only</p>
                       </div>
                   </td>
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
                   <td>
                       <div className="affitlate-table-name">
                            <img src={photo} alt={photo} />
                            <p className="text">new tR- smart link (US) only</p>
                       </div>
                   </td>
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
}


export default CustomCap;






