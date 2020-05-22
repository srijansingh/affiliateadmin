import React, {Component} from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";


const styles = (theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
          margin: theme.spacing(1),
          width: theme.spacing(16),
          height: theme.spacing(16),
        }
    }});
  

class  Customer extends Component {
    constructor(){
        super();
        this.state = {
            isLoading: false,
            
           
        }
    }

    



       
    render(){

        // const {classes} = this.props;



        return (
            <div>
            <div style={{background:'rgb(50, 70, 246)', padding:'0.8rem'}}>
               
                <Typography style={{color:'white'}}>
                  Customer
               </Typography>

               
                
            </div>
            <div style={{
                height:'80vh',
                overflowY:'scroll',
                overflowX:'hidden',
                display:'flex',
                flexDirection:'row',
                flexWrap:'wrap',
                padding:'0.5rem',
               
                justifyContent:'space-between'
                }}>
                
            </div>
            </div>
        ) 
    }
        
   
}

export default withStyles(styles, {withThemes: true})(Customer);