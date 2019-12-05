// import React from 'react';
// import {withRouter} from "react-router-dom";
// import { makeStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// import ListItemText from '@material-ui/core/ListItemText';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import FormGroup from '@material-ui/core/FormGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import FolderIcon from '@material-ui/icons/Folder';
// import DeleteIcon from '@material-ui/icons/Delete';


// function NestedUser(props) {
//     const {
//         match: {
//             param: {name}
//         }
//     } = props;

//     return (
//         <div>
//             <p>Ini users dengan nama: {name}</p>
//         </div>
//     );
// }

// export default withRouter(NestedUser);















// // export default withRouter(NestedUser);



// // import React from "react";
// // import { withRouter } from "react-router-dom";
// // const API_PLACEHOLDER = process.env.REACT_APP_API_PLACEHOLDER;

// // class NestedUser extends Component {
// //     constructor(props) {
// //         super(props);

// //         this.state = {
// //             id: "",
// //             posts: []
// //         };
// //     }

// //     ComponentDidMount = () => {
// //         const {
// //             match: {
// //                 param: {id}
// //             }
// //         } = this.props;

// //         this.setState({id:})
// //     };

// // }


// // function NestedUser(props) {
// //     const {
// //         match: {
// //             params: { name }
// //         }
// //     } = props;

// //     return (
// //         <div>
// //             <p>ini users dengan name: {name}</p>
// //         </div>
// //     );
// // }


import React, { Component } from "react";
// import axios from "axios";
import { withRouter } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import Swal from "sweetalert2";
import {axiosPlaceholder} from "../helpers"

const API_PLACEHOLDER = process.env.REACT_APP_API_PLACEHOLDER;
class NestedUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: "",
            posts: []
        };
    }

    componentDidMount = () => {
        const {
            match: {
                params: { id }
            }
        } = this.props;

        this.setState({ id: id });

        axiosPlaceholder()
            .get(`${API_PLACEHOLDER}/posts`)
            .then(response => {
                const filtered = response.data.filter(
                    item => item.userId === parseInt(id)
                );

                this.setState({ posts: filtered });
            })
            .catch(error => {
                console.log(error);
            });
    };

    deletePost = (postId, key) => {
        axiosPlaceholder()
            .delete(`${API_PLACEHOLDER}/posts/${postId}`)
            .then(response => {
                if (response.status === 200) {
                    Swal.fire({
                        title: "Are you sure?",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, delete it!"
                    }).then(result => {
                        if (result.value) {
                            Swal.fire(
                                "Deleted!",
                                `Your post with id: ${postId} is deleted.`,
                                "success"
                            );

                            let rest = this.state.posts;

                            rest.splice(key, 1);

                            this.setState({
                                posts: rest
                            });
                        }
                    });
                } else {
                    Swal.fire("There is something wrong", "error");
                }
            })
            .catch(error => {
                Swal.fire("There is something wrong", "error");
                console.log(error);
            });
    };

    editPost = async (postId, index) => {
        Swal.mixin({
            input: "text",
            confirmButtonText: "Next &rarr;",
            showCancelButton: true,
            progressSteps: ["1", "2"],
            inputValidator: value => {
                if (!value) {
                    return "You need to write something!";
                }
            }
        })
            .queue(["Edit Title", "Edit Body"])
            .then(result => {
                if (result.value) {
                    axiosPlaceholder()
                        .put(`${API_PLACEHOLDER}/posts/${postId}`, {
                            title: result.value[0],
                            body: result.value[1]
                        })
                        .then(response => {
                            if (response.status === 200) {
                                Swal.fire({
                                    icon: "success",
                                    title: `Your post with id: ${postId} updated`,
                                    text: `title: ${response.data.title},  body: ${response.data.body}`
                                });
                            }

                            let rest = this.state.posts;

                            rest.splice(index, 1, {
                                title: result.value[0],
                                body: result.value[1]
                            });

                            this.setState({ posts: rest });
                        })
                        .catch(error => {
                            console.log(error);
                        });
                }
            });
    };

    addPost = () => {
        Swal.mixin({
            input: "text",
            confirmButtonText: "Next &rarr;",
            showCancelButton: true,
            progressSteps: ["1", "2"],
            inputValidator: value => {
                if (!value) {
                    return "You need to write something!";
                }
            }
        })
            .queue(["Add Title", "Add Body"])
            .then(result => {
                if (result.value) {
                    axiosPlaceholder()
                        .post(`${API_PLACEHOLDER}/posts`, {
                            title: result.value[0],
                            body: result.value[1]
                        })
                        .then(response => {
                            if (response.status === 201) {
                                Swal.fire({
                                    icon: "success",
                                    title: `Your new post is successfully added`,
                                    text: `title: ${response.data.title},  body: ${response.data.body}`
                                });
                                let rest = this.state.posts;

                                rest.push({
                                    id: rest.length + 1,
                                    title: result.value[0],
                                    body: result.value[1]
                                });

                                this.setState({ posts: rest });
                            }
                        })
                        .catch(error => {
                            console.log(error);
                        });
                }
            });
    };

    render() {
        return (
            <div>
                <Button
                    onClick={() => {
                        this.addPost();
                    }}
                >
                    Add New Post
                </Button>
                {this.state.posts.length > 0 &&
                    this.state.posts.map((item, key) => {
                        return (
                            <List key={key}>
                                <ListItem alignItems="flex-start">
                                    <ListItemText
                                        primary={item.title}
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    color="textPrimary"
                                                >
                                                    {item.body}
                                                </Typography>
                                            </React.Fragment>
                                        }
                                    />
                                    <IconButton
                                        edge="end"
                                        aria-label="edit"
                                        onClick={() => {
                                            this.editPost(item.id, key);
                                        }}
                                    >
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton
                                        edge="end"
                                        aria-label="delete"
                                        onClick={() => {
                                            this.deletePost(item.id, key);
                                        }}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItem>
                                <Divider variant="middle" component="li" />
                            </List>
                        );
                    })}
            </div>
        );
    }
}
export default withRouter(NestedUser);





