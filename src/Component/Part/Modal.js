import React from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Modals extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
        this.delete = this.delete.bind(this)
    }

    delete(){

        axios.delete('http://localhost:5500/mhs/delete', { data: { id: this.props.id }})
           .then((result) => {
            //    const data = result.data.data
               console.log(result)
               this.props.toggle()
               location.reload()
        })
        
    }
    render() {
        // console.log(this.props.id)
        return (
            <div>
                {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
                <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.props.toggle}>Delete</ModalHeader>
                    <ModalBody>
                        are you sure to delete it? {this.props.id}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={this.delete}>Delete Me!</Button>{' '}
                        <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default Modals;