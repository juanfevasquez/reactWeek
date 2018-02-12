import React from 'react';
import createReactClass from 'create-react-class'; 
import './Rgbcontroller.css';

var Rgbcontroller = createReactClass({
    validateClass: function(){
        var state = this.props.state;
        if(state.R > 210 && state.G > 210 && state.B > 210){
            var classData = {
                colorId: 'colorId dark'
            }
            return classData
        } else {
            var classDefault = {
                colorId: 'colorId'
            }
            return classDefault
        }
    },
    render: function(){
        var inputPropierties = {
            type: 'range',
            min: '0',
            max: '255',
            defaultValue: this.props.default, 
            onChange: this.props.update
        };
        var containerCLass = {
            className: 'controller'
        };
        var colorIdClass = {
            className: this.validateClass().colorId
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