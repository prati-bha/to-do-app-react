import React from 'react';
import { Checkbox } from 'antd';
function index(props) {
    const { isAdmin, setAdmin } = props;
    return (
        <div>
            <Checkbox checked={isAdmin} onChange={e => setAdmin(e.target.checked)} />
            <p>Is the User Admin ?</p>
        </div>
    );
}

export default index;