import React, {Component} from 'react';
import {Theme} from '../types';
import Navbar from 'react-bootstrap/Navbar';
import {TITLE} from '../constants';

class Header extends Component<{theme: Theme}>{
    render(){
        return(
        <Navbar bg={this.props.theme.header.bg} expand="lg">
            <Navbar.Brand>
            {TITLE}
            </Navbar.Brand>
        </Navbar>
      )
    }  
}

export default Header;
