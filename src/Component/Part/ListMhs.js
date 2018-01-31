import React from 'react';
import { Table, Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
// import Pagination from "../components/Pagination";
import Modals from './Modal';


class ListMhs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false,
            id:''
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle(e) {

        this.setState({
            modal: !this.state.modal,
        });
    }

    
    render() {
        const url = 'http://localhost:3000/'
        const lists = this.props.list.map((e, i) => {
             return (
                 <tr key={i}>
                     <td>{i+1}</td>
                     <td>{e.nama}</td>
                     <td>{e.jurusan}</td>
                     <td>{e.kelas}</td>
                     <td>
                        <Button color="success" size='sm' href={url + 'edit/' + e.id_mhs} ><FontAwesome name='edit' /></Button>{' '}
                        <Button color="danger" size='sm' key={e.id_mhs} onClick={() => this.setState({ id: e.id_mhs }, this.toggle)} ><FontAwesome name='trash' /></Button> 
                    </td>
                 </tr>
             )
         })
        return (
            <div>
                <Modals
                    modal={this.state.modal}
                    toggle={this.toggle}
                    id={this.state.id}
                />
                <Table hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nama</th>
                            <th>Jurusan</th>
                            <th>Kelas</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { lists }
                    </tbody>
                </Table>
            </div>
        );
    }
}
        
export default ListMhs
