import Dropdown from 'react-bootstrap/Dropdown';

function DropdownPay() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        PAY TYPE
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownPay;