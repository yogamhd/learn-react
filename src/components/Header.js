// // import React from 'react';
// // import {Link} from "react-router-dom";

// // export default function Header() {
// //     return (
// //         <nav>
// //             <ul
// //                 style={{
// //                     display: "flex",
// //                     justifyContent: "center",
// //                     listStyleType: "none"
// //                 }}
// //                 >
// //                     <li style={{margin: "0 10px"}}>
// //                     <Link to="/">Home</Link>
// //                     </li>
// //                     <li style={{margin: "0 10px"}}>
// //                     <Link to="/about">About</Link>
// //                     </li>
// //                     <li style={{margin: "0 10px"}}>
// //                     <Link to="/contact">Contact</Link>
// //                     </li>
// //                     <li style={{margin: "0 10px"}}>
// //                     <Link to="/users">Users</Link>
// //                     </li>
// //                     <li style={{margin: "0 10px"}}>
// //                     <Link to="/signin">Signin</Link>
// //                     </li>
// //                     <li style={{margin: "0 10px"}}>
// //                     <Link to="/signup">SignUp</Link>
// //                     </li>
// //             </ul>
// //     </nav>
// //     )
// // }


// import React, { Fragment } from "react";
// import { withRouter } from "react-router-dom";
// import MemberHeader from "./member/Header";
// import GuestHeader from "./guest/Header";

// function Header() {
//     return (
//         <Fragment>
//             {JSON.parse(localStorage.getItem("isLogin")) !== true ? (
//                 <GuestHeader />
//             ) : (
//                 <MemberHeader />
//             )}
//         </Fragment>
//     );
// }

// export default withRouter(Header);


import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import MemberHeader from "./member/Header";
import GuestHeader from "./guest/Header";

function Header() {
    return (
        <Fragment>
            {JSON.parse(localStorage.getItem("isLogin")) !== true ? (
                <GuestHeader />
            ) : (
                <MemberHeader />
            )}
        </Fragment>
    );
}

export default withRouter(Header);