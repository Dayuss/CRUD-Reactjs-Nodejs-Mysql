import React from 'react'
import {
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input,

} from 'reactstrap';
class Forms extends React.Component{
    render(){
        return(
            <Form onSubmit={this.props.handleSubmit}>
                <FormGroup row>
                    <Label for="exampleEmail" sm={2}>Nama</Label>
                    <Col sm={10}>
                        <Input
                            name="nama"
                            type="text"
                            placeholder="Nama"
                            value={this.props.nama}
                            onChange={this.props.InputChangeHandler}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="examplePassword" sm={2}>Jurusan</Label>
                    <Col sm={10}>
                        <Input
                            type="text"
                            name="jurusan"
                            placeholder="Jurusan"
                            value={this.props.jurusan}
                            onChange={this.props.InputChangeHandler}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="examplePassword" sm={2}>Kelas</Label>
                    <Col sm={10}>
                        <Input
                            type="text"
                            name="kelas"
                            placeholder="Kelas"
                            value={this.props.kelas}
                            onChange={this.props.InputChangeHandler}
                        />
                    </Col>
                </FormGroup>

                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button color="primary">Submit</Button>
                    </Col>
                </FormGroup>
            </Form>  
        )
        
    }
}

export default Forms