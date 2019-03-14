import InputGroupAddon from '../src';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


function demo1() {
    return (
        <div className="demo-input-group-addon">
        	<InputGroupAddon>I am InputGroupAddon</InputGroupAddon>
        </div>
    );
}


ReactDOM.render(demo1(), document.getElementById('ReactInputGroupAddonDemo1'));