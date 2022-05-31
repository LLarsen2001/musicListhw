import React from "react";
import { Form } from "semantic-ui-react";

class SongForm extends React.Component{
    state = {
        name:"",
        artist:"",
        album:"",
    }
    handleSubmit = (c) =>{
        c.preventDefault();
        console.log("submitted")
        console.log('this.state: ', this.state)
    }
    handleChange = (e) =>{
        if(e.target.name === "artist"){
            this.setState({
                ['artist']:e.target.value,
            });
        }
        if(e.target.name === "name"){
            this.setState({
                ['name']:e.target.value,
            });
        }
        if(e.target.name === "album"){
            this.setState({
                ['album']:e.target.value,
            });
        }
    }
    render(){
            
            return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Input 
                    label="Name" 
                    placeholder="name placeholder" 
                    name="name" 
                    value={this.state.name} 
                    />
                    <Form.Input 
                    label="Arist" 
                    placeholder="artist placeholder" 
                    name="artist" 
                    value={this.state.artist} 
                    />
                     <Form.Input 
                    label="Album" 
                    placeholder="album placeholder" 
                    name="album" 
                    value={this.state.album} 
                    />
                    <Form.Button>Submit</Form.Button>
                </Form.Group>
            </Form>
        )
    }
}
export default SongForm;