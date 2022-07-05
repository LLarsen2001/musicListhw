import React from 'react'
import { Button, Table } from 'semantic-ui-react';
import SongInfo from './SongInfo';

class MusicList extends React.Component{
    state = {
        songs:[
            {id:1, name:'American Idiot', artist:'GreenDay',album:'American Idiot'},
            {id:2, name:'Smells like teen spirit', artist:'Nirvana',album:'NeverMind'},
            {id:3, name:'Hello', artist:'jon',album:'The way'},
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
                <Table.HeaderCell>Song</Table.HeaderCell>
                <Table.HeaderCell>Album</Table.HeaderCell>
                <Table.HeaderCell>Artist</Table.HeaderCell>
                <Table.HeaderCell>Delete</Table.HeaderCell>
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