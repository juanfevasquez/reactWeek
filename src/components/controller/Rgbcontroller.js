import React from 'react';
import createReactClass from 'create-react-class'; 
import './Rgbcontroller.css';

var Rgbcontroller = createReactClass({
    render: function(){
       console.log(this.props.default);
        var inputPropierties = {
            type: 'range',
            min: '0',
            max: '255',
            defaultValue: this.props.default, 
            onChange: this.props.update
       };
        var containerCLass = {
            class: 'controller'
        };
        var colorIdClass = {
            class: 'colorId'
        }

       return(
            React.createElement('div', containerCLass,
                React.createElement('h1', colorIdClass, this.props.id),
                React.createElement('input', inputPropierties)
            )
       )
   }
})

export default Rgbcontroller;