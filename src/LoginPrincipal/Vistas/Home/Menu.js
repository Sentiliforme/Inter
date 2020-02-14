import React, { Component } from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Image1 from './Imagenes/logo.jpg'


export default class MenuExampleStackable extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu stackable widths="10" inverted color="black" fixed="top">
          <Menu.Item>
            <img src={Image1} alt="imagen" />
          </Menu.Item>

          <Menu.Item
            name='Inicio'
            active={activeItem === 'Inicio'}
            onClick={this.handleItemClick}
          ><Link to="/">
              Inicio
      </Link>
          </Menu.Item>

          <Menu.Item
            name='Quienes Somos'
            active={activeItem === 'Quienes Somos'}
            onClick={this.handleItemClick}
          >
            Quienes Somos
        </Menu.Item>
          <Menu.Item
            name='Categorias'
            active={activeItem === 'Categorias'}
            onClick={this.handleItemClick}
          >
            Categorias
        </Menu.Item>
          <Menu.Item
            name='Horarios'
            active={activeItem === 'Horarios'}
            onClick={this.handleItemClick}
          >
            Horarios
        </Menu.Item>

          <Menu.Item
            name='Ver mas'
            active={activeItem === 'Ver mas'}
            onClick={this.handleItemClick}>
            <Dropdown text='Ver mas' simple item>
              <Dropdown.Menu>
                <Dropdown.Item>Social</Dropdown.Item>
                <Dropdown.Item>Recintos</Dropdown.Item>
                <Dropdown.Item>Descargas</Dropdown.Item>
                <Dropdown.Item>InterCup</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>

          <Menu.Item
            name='sign-in'
            active={activeItem === 'sign-in'}
            onClick={this.handleItemClick}
            position="right"
          > <Link to="/Login">
              Iniciar Sesión
          </Link>
          </Menu.Item>
          <Menu.Item
            name='register'
            active={activeItem === 'register'}
            onClick={this.handleItemClick}
          > <Link to="/Register">
              Registrarse
          </Link>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}