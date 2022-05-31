import React from 'react'
import { Button, Table } from 'semantic-ui-react';
import SongInfo from './SongInfo';

class MusicList extends React.Component{
    state = {
        songs:[
            {id:1, name:'American Idiot', artist:'GreenDay',album:'American Idiot'},
            {id:2, name:'Smells like teen spirit', artist:'Nirvana',album:'NeverMind'}
        ]
    }
    renderSongs=()=>{
        return this.state.songs.map(x=><SongInfo key={x.id}{...x}/>)
    }
    render(){
        return(
        <Table celled>
            <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Song Name</Table.HeaderCell>
                <Table.HeaderCell>Album Name</Table.HeaderCell>
                <Table.HeaderCell>Artist Name</Table.HeaderCell>
                <Table.HeaderCell>Add or Delete</Table.HeaderCell>
            </Table.Row>
            </Table.Header>
            <Table.Body>
                {this.renderSongs()}
            
            </Table.Body>
            

  
        </Table>
        )
    }
}
export default MusicList;