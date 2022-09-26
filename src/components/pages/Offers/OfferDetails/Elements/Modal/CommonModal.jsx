import Modal from "react-bootstrap/Modal";
import {  Grid, TextField } from "@mui/material";
import { Button } from 'react-bootstrap'
import './CommonModal.scss'

export default function CommonModal(props) {


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      id="CommonModal"
    >
      <Modal.Body>
        
        {props.children}
        {/* <form>
          <Grid xs={12} sm={12} item>
            <TextField
              name="name"
              placeholder="Category Name"
              label="Category Name"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid xs={12} sm={12} item className="mt-3">
            <TextField
              name="name"
              placeholder="Category Name"
              label="Category Name"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>

          <Button type="submit" variant="primary duplicate__m_btn">
            Save
          </Button>
        </form> */}
      </Modal.Body>
    </Modal>
  );
}
