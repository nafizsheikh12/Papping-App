import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Table from 'react-bootstrap/Table';
import photo1 from '../../../../assets/Placeholder.png';

const  AffiliateTable = () => {
  return (
    <div className="table_data">
      <Table responsive>
        <thead>
          <tr style={{ whiteSpace: "nowrap" }}>
            <th>ID</th>
            <th>
              Affiliate Name <ArrowDropDownIcon />
            </th>
            <th>
              Click <ArrowDropDownIcon />
            </th>
            <th>
              Conversation <ArrowDropDownIcon />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <img src={photo1} alt={photo1} />
              Samantha William
            </td>
            <td>29</td>
            <td>05</td>
          </tr>
          <tr>
            <td>1</td>
            <td>
              <img src={photo1} alt={photo1} />
              Samantha William
            </td>
            <td>29</td>
            <td>05</td>
          </tr>
    
        
          <tr>
            <td>1</td>
            <td>
              <img src={photo1} alt={photo1} />
              Samantha William
            </td>
            <td>29</td>
            <td>05</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default AffiliateTable;