import React from "react";
import { Button, Table } from "semantic-ui-react";
class SongInfo extends React.Component{
    render(){
        return(
            <Table.Row>
                <Table.HeaderCell> {this.props.name}</Table.HeaderCell>
                <Table.HeaderCell> {this.props.album}</Table.HeaderCell>
                <Table.HeaderCell> {this.props.artist}</Table.HeaderCell>
                <Table.Cell width={6}>
                <Button>Delete</Button>
                </Table.Cell>
            </Table.Row>
        )
    }
}
export default SongInfo;