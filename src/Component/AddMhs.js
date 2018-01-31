import React from 'react'
import axios from 'axios'
import { 
    Container,
    Col, 
    Row,
} from 'reactstrap';
import Navs from './Part/nav'
import Forms from './Part/Form'
// import Redirect from 'react-router-dom'

class AddMhs extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nama: '',
            jurusan: '',
            kelas: '',
            redirect: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.InputChangeHandler = this.InputChangeHandler.bind(this)
    }

    InputChangeHandler(event) {
        const value = event.target.value
        const name = event.target.name

        this.setState({
            [name]: value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        const data = this.state
        delete data.redirect
        axios.post('http://localhost:5500/mhs/add',data)
            .then((result) => {
                console.log(result)
                this.setState({redirect: true})
                window.location.href = '/';
            })
    }

    render(){
        // if (this.state.redirect) {
        //     return (<Redirect to='/' />)
        // }
        return(
            <div>
                <Navs/>
            
                <Container>
                    <Row>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <h2 >Tambah Mahasiswa</h2><br/>
                            <Forms
                                nama={this.state.name}
                                jurusan={this.state.jurusan}
                                kelas={this.state.kelas}
                                InputChangeHandler={this.InputChangeHandler}
                                handleSubmit={this.handleSubmit}
                            />
                           
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AddMhs