// import React from 'react';

// export default function Contact() {
//     return (
//         <div>
//             <p>Ini adalah Contact</p>
//         </div>
//     );
// }

import React, { Fragment } from "react";
import About from "./About";

export default function Contact() {
    return (
        <Fragment>
            <div>
                <p>Ini adalah Contact</p>
            </div>
            <About />
        </Fragment>
    );
}