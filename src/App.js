import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
    Home,
    About,
    Contact,
    NestedUser,
    Users,
    Header,
    SignIn,
    SignUp,
    Todo,
    TodoMongoose
} from "./components";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/todo/mongo/:email">
                    <Todo />
                </Route>
                <Route path="/" exact={true}>
                    <Home />
                </Route>
                <Route path="/users" exact={true}>
                    <Users />
                </Route>
                <Route path="/users/:id">
                    <NestedUser />
                </Route>
                <Route path="/signin">
                    <SignIn />
                </Route>
                <Route path="/todo/mongoose">
                    <TodoMongoose />
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;


// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
// import {Home, About, Contact, Users, NestedUser, Header, SignIn, SignUp, Todo, TodoMongoose, TodoMysql} from "./components"

// function App() {
//   return (
//     <Router>
//     <Header/>
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/contact">
//             <Contact />
//           </Route>
//           <Route path="/todo/mongo/:email">
//             <Todo/>
//           </Route>
//           <Route path="/" exact={true}>
//             <Home />
//           </Route>
//           <Route path="/users" exact={true}>
//             <Users />
//           </Route>
//           <Route path="/users/:id">
//             <NestedUser />
//           </Route>
//           <Route path="/signin">
//             <SignIn />
//           </Route>
//           <Route path="/todo/mongoose">
//             <TodoMongoose />
//           </Route>
//           <Route path="/todo/mysql/">
//             <TodoMysql />
//           </Route>
//           <Route path="/signup">
//             <SignUp />
//           </Route>
//         </Switch>
//     </Router>
//   );
// }

// export default App;



// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import {
//     Home,
//     About,
//     Contact,
//     NestedUser,
//     Users,
//     Header,
//     SignIn,
//     SignUp,
//     Todo,
//     TodoMongoose
// } from "./components";

// function App() {
//     return (
//         <Router>
//             <Header />
//             <Switch>
//                 <Route path="/about">
//                     <About />
//                 </Route>
//                 <Route path="/contact">
//                     <Contact />
//                 </Route>
//                 <Route path="/todo/mongo/:email">
//                     <Todo />
//                 </Route>
//                 <Route path="/" exact={true}>
//                     <Home />
//                 </Route>
//                 <Route path="/users" exact={true}>
//                     <Users />
//                 </Route>
//                 <Route path="/users/:id">
//                     <NestedUser />
//                 </Route>
//                 <Route path="/signin">
//                     <SignIn />
//                 </Route>
//                 <Route path="/todo/mongoose">
//                     <TodoMongoose />
//                 </Route>
//                 <Route path="/signup">
//                     <SignUp />
//                 </Route>
//             </Switch>
//         </Router>
//     );
// }

// export default App;



// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import {
//     Home,
//     About,
//     Contact,
//     NestedUser,
//     Users,
//     Header,
//     SignIn,
//     SignUp,
//     Todo,
//     TodoMongoose
// } from "./components";

// function App() {
//     return (
//         <Router>
//             <Header />
//             <Switch>
//                 <Route path="/about">
//                     <About />
//                 </Route>
//                 <Route path="/contact">
//                     <Contact />
//                 </Route>
//                 <Route path="/todo/mongo/:email">
//                     <Todo />
//                 </Route>
//                 <Route path="/" exact={true}>
//                     <Home />
//                 </Route>
//                 <Route path="/users" exact={true}>
//                     <Users />
//                 </Route>
//                 <Route path="/users/:id">
//                     <NestedUser />
//                 </Route>
//                 <Route path="/signin">
//                     <SignIn />
//                 </Route>
//                 <Route path="/todo/mongoose">
//                     <TodoMongoose />
//                 </Route>
//                 <Route path="/signup">
//                     <SignUp />
//                 </Route>
//             </Switch>
//         </Router>
//     );
// }

// export default App;


// // import React from 'react';
// // // import logo from './logo.svg';
// // // import './App.css';
// // import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
// // import {Home, About, Contact, NestedUser, Users, Header, SignIn, SignUp} from "./components";
// // // import Home from "./components/Home";


// // function App() {
// //   const isLogin = JSON.parse(localStorage.getItem("isLogin"));
// //   return (
// //       <Router>
// //         <Header />
// //         <Switch>
// //           <Route path="/about">
// //             <About />
// //           </Route>
// //           <Route path="/contact">
// //             <Contact />
// //           </Route>
// //           <Route path="/" exact={true}>
// //           {isLogin !== true ? <Redirect to="/signin" /> : <Home />}
// //             <Home />
// //           </Route>
// //           <Route path="/users" exact={true}>
// //             <Users />
// //           </Route>
// //           <Route path="/users/:name">
// //             <NestedUser />
// //           </Route>
// //           <Route path="/signin">
// //             <SignIn />
// //           </Route>
// //           <Route path="/signup">
// //             <SignUp />
// //           </Route>
// //         </Switch>
// //     </Router>
// //   );
// // }

// // export default App;


