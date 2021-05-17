import { Component } from "react";
import { Button, Modal } from 'react-bootstrap'

class TableRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showHide: false
        }
    }s

    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }

    render() {
        return (
            <tr>
                <td>
                    <Button variant="primary" onClick={() => this.handleModalShowHide()}>{this.props.obj.owner.display_name}</Button>
                    <Modal show={this.state.showHide}>
                        <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                            <Modal.Title><p>{this.props.obj.title}</p></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p><a href={this.props.obj.link}>{this.props.obj.link}</a></p>
                        </Modal.Body>
                    </Modal>
                </td>
                <td>
                    {this.props.obj.title}
                </td>
                <td>
                    {this.props.obj.creation_date}
                </td>
            </tr>
        )
    }
}

export default TableRow;