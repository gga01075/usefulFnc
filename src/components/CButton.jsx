import { Button } from 'antd';

const CButton = props => {

    return (
        <Button
        type='primary'>
           {props.children}
       </Button>
    )
 
}

export default CButton;