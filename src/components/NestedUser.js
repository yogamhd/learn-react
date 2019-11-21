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

// export default withRouter(NestedUser);



// import React from "react";
// import { withRouter } from "react-router-dom";
// const API_PLACEHOLDER = process.env.REACT_APP_API_PLACEHOLDER;

// class NestedUser extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             id: "",
//             posts: []
//         };
//     }

//     ComponentDidMount = () => {
//         const {
//             match: {
//                 param: {id}
//             }
//         } = this.props;

//         this.setState({id:})
//     };

// }


// function NestedUser(props) {
//     const {
//         match: {
//             params: { name }
//         }
//     } = props;

//     return (
//         <div>
//             <p>ini users dengan name: {name}</p>
//         </div>
//     );
// }

export default withRouter(NestedUser);