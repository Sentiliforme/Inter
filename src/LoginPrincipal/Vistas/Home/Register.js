import React, { Component } from 'react'
import { Button, Form, Grid, Header, Segment, Container } from 'semantic-ui-react'
import Image1 from './Imagenes/logo.jpg'
import axios from 'axios';
export default class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            password_confirmation: "",
            registrationErrors: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        const { email, password, password_confirmation } = this.state;

        axios
            .post(
                "http://localhost:3001/registrations",
                {
                    user: {
                        email: email,
                        password: password,
                        password_confirmation: password_confirmation
                    }
                },
                { withCredentials: true }
            )
            .then(response => {
                if (response.data.status === "created") {
                    this.props.handleSuccessfulAuth(response.data);
                }
            })
            .catch(error => {
                console.log("registration error", error);
            });
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <Container text>
                    <Grid textAlign='center' style={{ height: '150vh' }} verticalAlign='middle'>
                        <Grid.Column style={{ maxWidth: 450 }}>
                            <Header as='h1' color='red' textAlign='center'>
                                <img src={Image1} className="Logo" alt="imagen" /> Registrate con tu Email
                            </Header>
                            <Form size='large' onSubmit={this.handleSubmit}>
                                <Segment stacked>
                                    <Form.Input
                                        type="email"
                                        name="email"
                                        fluid
                                        icon='user'
                                        iconPosition='left'
                                        placeholder='Usuario'
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        required
                                    />
                                    <Form.Input
                                        type="password"
                                        name="password"
                                        fluid
                                        icon='lock'
                                        iconPosition='left'
                                        placeholder='Contraseña'
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                        required
                                    />
                                    <Form.Input
                                        type="password"
                                        name="password_confirmation"
                                        fluid
                                        icon='lock'
                                        iconPosition='left'
                                        placeholder='Confirmar Contaseña'
                                        value={this.state.password_confirmation}
                                        onChange={this.handleChange}
                                        required
                                    />
                                    <Button type="submit" color='red' fluid size='large'>
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