import React, { Component } from 'react'
import { Button, Form, Grid, Header, Segment, Container } from 'semantic-ui-react'
import Image1 from './Imagenes/logo.jpg'
import axios from 'axios'
export default class ResgisterForm extends Component {
    constructor(props) {
        super(props);
    
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangePasswordConfirmation = this.onChangePasswordConfirmation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          username: '',
          password: '',
          password_confirmation: ''
        }
      }
    
      onChangeUsername(e) {
        this.setState({
          username: e.target.value
        })
      }
      onChangePassword(e) {
        this.setState({
          password: e.target.value
        })
      }
      onChangePasswordConfirmation(e) {
        this.setState({
          password_confirmation: e.target.value
        })
      }
    
      onSubmit(e) {
        e.preventDefault();
    
        const user = {
          username: this.state.username,
          password: this.state.password,
          password_confirmation: this.state.password_confirmation,
        }
    
        console.log(user);
    
        axios.post('http://localhost:5000/users/add', user)
          .then(res => console.log(res.data));
    
        this.setState({
          username: '',
          password:'',
          password_confirmation:''
        })
      }
    render() {
        return (
            <div>
                <Container text>
                    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                        <Grid.Column style={{ maxWidth: 450 }}>
                            <Header as='h1' color='red' textAlign='center'>
                                <img src={Image1} className="Logo" alt="imagen" /> Registrate con tu Email
                            </Header>
                            <Form size='large' onSubmit={this.onSubmit}>
                                <Segment stacked>
                                    <Form.Input
                                        value={this.state.username}
                                        type="email"
                                        name="email"
                                        fluid
                                        icon='user'
                                        iconPosition='left'
                                        placeholder='Usuario'
                                        onChange={this.onChangeUsername}
                                        required
                                    />
                                    <Form.Input
                                        value={this.state.password}
                                        type="password"
                                        name="password"
                                        fluid
                                        icon='lock'
                                        iconPosition='left'
                                        placeholder='Contraseña'
                                        onChange={this.onChangePassword}
                                        required
                                    />
                                    <Form.Input
                                        value={this.state.password_confirmation}
                                        type="password"
                                        name="password_confirmation"
                                        fluid
                                        icon='lock'
                                        iconPosition='left'
                                        placeholder='Confirmar Contaseña'
                                        onChange={this.onChangePasswordConfirmation}
                                        required
                                    />
                                    <Button type="submit" color='red' fluid size='large' value="Create User">
                                        Ingresar
                                    </Button>
                                </Segment>
                            </Form>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        );
    }
}