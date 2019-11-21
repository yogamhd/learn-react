// import React from "react";
// import { Link, withRouter } from "react-router-dom";

// function Header(props) {
//     const logOut = () => {
//         localStorage.removeItem("isLogin");
        
//         props.history.push("/signin");
//     };
//     return (
//         <nav>
//             <ul
//                 style={{
//                     display: "flex",
//                     justifyContent: "center",
//                     listStyleType: "none"
//                 }}
//             >
//                 <li style={{ margin: "0 10px" }}>
//                     <Link to="/">Home</Link>
//                 </li>
//                 <li style={{ margin: "0 10px" }}>
//                     <Link to="/about">About</Link>
//                 </li>
//                 <li style={{ margin: "0 10px" }}>
//                     <Link to="/contact">Contact</Link>
//                 </li>
//                 <li style={{ margin: "0 10px" }}>
//                     <Link to="/users">Users</Link>
//                 </li>
//                 <li style={{ margin: "0 10px" }}>
//                     <a href="#/" onClick={logOut}>
//                         Log Out
//                     </a>
//                 </li>
//             </ul>
//         </nav>
//     );
// }

// export default withRouter(Header);

import React from "react";
import { Link, withRouter } from "react-router-dom";

function Header(props) {
    const logOut = () => {
        localStorage.removeItem("isLogin");
        
        props.history.push("/signin");
    };
    return (
        <nav>
            <ul
                style={{
                    display: "flex",
                    justifyContent: "center",
                    listStyleType: "none"
                }}
            >
                <li style={{ margin: "0 10px" }}>
                    <Link to="/">Home</Link>
                </li>
                <li style={{ margin: "0 10px" }}>
                    <Link to="/about">About</Link>
                </li>
                <li style={{ margin: "0 10px" }}>
                    <Link to="/contact">Contact</Link>
                </li>
                <li style={{ margin: "0 10px" }}>
                    <Link to="/users">Users</Link>
                </li>
                <li style={{ margin: "0 10px" }}>
                    <a href="#/" onClick={logOut}>
                        Log Out
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default withRouter(Header);