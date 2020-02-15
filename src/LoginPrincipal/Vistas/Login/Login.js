import React, {Component} from 'react'
import { Button, Form, Grid, Header, Message, Segment, Container } from 'semantic-ui-react'
import Image1 from './Imagenes/logo.jpg'
import axios from 'axios';
import { Link } from 'react-router-dom';
export default class LoginForm extends Component{
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      password: ''
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

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password,
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: '',
      password: '',
    })
  }
  render() {
    return (
      <div>
        <Container text>
          <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h1' color='red' textAlign='center'>
                <img src={Image1} className="Logo" alt="imagen" /> Inicia sesión en tu cuenta
              </Header>
              <Form size='large' onSubmit={this.onSubmit}>
                <Segment stacked>
                  <Form.Input
                    value={this.state.username}
                    type="email"
                    name="email"
                    fluid icon='user'
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

                  <Button type="submit" color='red' fluid size='large' value="Create User">
                    Acceder
          </Button>
                </Segment>
              </Form>
              <Message>

                ¿No tienes cuenta? <Link to="/Register">Registrate!
                </Link>
              </Message>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    )
  }
}
