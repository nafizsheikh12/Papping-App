import React,{useState} from 'react'
import {EditIcons,DeleteIcons} from '../../../../assets/Icons';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {Button, Form} from 'react-bootstrap';
import moment from "moment";
import {userInfo} from '../../../../utils/auth';
import {updateCategory} from '../../../../api/Offer/Category';

const ItemCategory = (props) => {
  const [values, setValues] = useState({
    name: ' ', 
    errorMsg:' ',
    error: false,
    loading: false,
    disabled: false,
    success: false,
    inputFile:0,
});
const { name, loading, error, success, disabled,errorMsg,inputFile} = values;

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
      inputFile:null,
      });

      updateCategory(token,{name:name})
      .then(response =>{
        // if(response.status === 201){
          
        //   setValues({
        //     ...values,
        //     error: false,
        //     errorMsg:'Advertiser Created Successfully!!',
        //     loading: false,
        //     disabled: false,
        //     success: true,
        // });
        // e.target.reset();
        // }
        console.log(response);
          
      })
      .catch(err =>{
          let errMsg = 'Something went wrong!';
          if (err.response.data != undefined) {
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

function buttonChange12(id){
  setValues({
        ...values,
        inputFile:0
    });
  setValues({
        ...values,
        inputFile:id
    });

}
console.log(inputFile);
  return (
    <>
      <tr>
                        <td># {props.data.id}</td>
                        <td>{props.data.name}</td>
                        <td>{inputFile == props.data.id ? (
                          <input type='text'name='name' value={name} onChange={handleChange} />
                        ):(
                          props.data.name
                        )}
                          
                          </td>
                        <td> <CalendarMonthIcon className='calender'/> {moment(props.data.created_at).format("D MMM, Y")}</td>
                        <td className='w__20'>
                            <ul className='actionButton'>
                                <li>{inputFile === props.data.id ? (
                                  <Button className='edit m_btn' onClick={() => buttonChange12(props.data.id)}>{EditIcons}Save</Button>
                          
                        ):(
                          <Button className='edit m_btn' onClick={() => buttonChange12(props.data.id)}>{EditIcons}edit</Button>
                        )}
                                    
                                    </li>
                                <li>
                                     <Button className='delete m_btn' onClick={props.removeItem}>{DeleteIcons} delete</Button>
                                     </li>
                            </ul>
                        </td>
                    </tr>
                    <br/>
    </>
  )
}

export default ItemCategory