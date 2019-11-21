import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios'

const useStyles = makeStyles({
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

export default class CardMe extends Component {
    constructor (props) {
        super (props)

        this.state={
            data:[]
        }
    }
    
    componentDidMount = () => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                this.setState({data : response.data});
            })
            .catch(error => {
                console.log(error)
            });
    }

    render() {
      return (
        <div style={{display: "flex", flexWrap: "wrap", justifyContent:"center"}}>
          {this.state.data.length > 0 && this.state.data.map(item => {
        return (
          <div style={{margin:"10px"}}>
          <Card className={useStyles.card}>
          <CardContent>
            <Typography className={useStyles.title} color="textSecondary" gutterBottom>
              Cards
            </Typography>
            <Typography variant="h5" component="h2">
              {item.name}
            </Typography>
            <Typography className={useStyles.pos} color="textSecondary">
              {item.email}
            </Typography>
            <Typography variant="body2" component="p">
              {item.address.street}, {item.address.suite}, {item.address.city}
              <br />
              {item.address.zipcode}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        </div>
      )
      })}
        </div>
      )
    }
}























// import React, { Component } from "react";
// import axios from "axios";
// import ComponentUnmount from "./ComponentUnmount";
// import ComponentUpdate from "./ComponentUpdate";
// import { Typography } from "@material-ui/core";
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';


// export default class ComponentMount extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             color: "red",
//             text: "Update",
//             data: {}
//         };
//     }

//     componentDidMount = () => {
//         fetch("https://api.github.com/users/miftahmfaris")
//             .then(response => {
//                 return response.json();
//             })
//             .then(data => {
//                 this.setState({ data: data });
//             });
//     };
//     axios
//     .get("https://jsonplaceholder.typicode.com/users")
//     .then(Response => {
//         this.setState({data:Response.data});
//     })
//     .catch(error => {
//         console.log(error);
        
//     });
//     };

//     render() {
//         return (
//             <div style={{

//             }}>
//                 <ComponentUnmount />
//                 <p>My name is {this.state.name}</p>
//                 <p style={{ background: "red" }}>
//                     {this.state.text !== "" && this.state.text}{" "}
//                 </p>
//                 <img src={this.state.data.avatar_url} alt="profile_picture" />
//                 <ComponentUpdate text={this.state.text} />
//             </div>
//         );
//     }   
//     );
// }