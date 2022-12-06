import { Checkbox } from 'antd';

const CCheckbox = props => {
 

    return (
      <Checkbox onChange={onChange}>{props.children}</Checkbox>
    )
 
}

export default CCheckbox;