import Modal from 'react-bootstrap/Modal';
import{useState} from 'react';
import {
  Button,
  Grid,
  TextField,
} from "@mui/material";
import {userInfo} from '../../../../utils/auth';
import {createCategory} from '../../../../api/Offer/Category';
import {showError,showSuccess,showLoading} from '../../../../utils/messages';

export default function AddCategory(props) {
  const [values, setValues] = useState({
    name: ' ', 
    errorMsg:' ',
    error: false,
    loading: false,
    disabled: false,
    success: false
});

const { name, loading, error, success, disabled,errorMsg} = values;

const {token} = userInfo();

const handleChange = e =>{
  setValues({
      ...values,
      error:false,
      success:false,
      [e.target.name]:e.target.value
  })
}


const handleSubmit = e =>{

  e.preventDefault();
  setValues({
      ...values,
      error:false,
      loading:true,
      disabled:true, 
      });

      console.log(name);

      createCategory(token,{name:name})
      .then(response =>{
        if(response.status === 201){
          
          setValues({
            ...values,
            error: false,
            errorMsg:'Category Created Successfully!!',
            loading: false,
            disabled: false,
            success: true,
        });
        e.target.reset();
        }
          
      })
      .catch(err =>{
          let errMsg = 'Something went wrong!';
          if (err.response.data !== undefined) {
              errMsg = err.response.data.message;
          } else {
              errMsg = 'Something went wrong!';
          };
          setValues({ ...values,
            error:true, 
            errorMsg: errMsg,
             disabled: false,
              loading: false 
            });
      })
}
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        {showError(error,errorMsg)}
                {showLoading(loading)}
                {showSuccess(success,errorMsg)}
        <h4>Add Category</h4>
        <form onSubmit={handleSubmit}>
        <Grid xs={12} sm={12} item>
                      <TextField
                      onChange={handleChange}
                        name='name'
                        placeholder="Category Name"
                        label="Category Name"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    {/* <ul>
                      <li> */}
                        <Button type='submit' className='m_btn'> {loading? 'Loading....':'Save'}</Button>
                        {/* </li> */}
                      {/* <li><Button type='button' className='m_btn bg-danger' onClick={props.onHide}>Close</Button></li> */}
                    {/* </ul> */}
                    
                   
          </form>
      </Modal.Body>
    </Modal>
  );
}
