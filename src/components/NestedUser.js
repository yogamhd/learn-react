import React from 'react';
import {withRouter} from "react-router-dom";

function NestedUser(props) {
    const {
        match: {
            param: {name}
        }
    } = props;

    return (
        <div>
            <p>Ini users dengan nama: {name}</p>
        </div>
    );
}

export default withRouter(NestedUser);