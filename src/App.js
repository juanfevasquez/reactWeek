import React from 'react';
import createReactClass from 'create-react-class';
import RGBcontroller from './components/controller/Rgbcontroller';
import './App.css';

var App = createReactClass({
    getInitialState: function(){
        return {
            R: 255,
            G: 130,
            B: 161
        }
    },

    updateRed: function(e) {
        this.setState({
          R: e.target.value
        })
    },
    
    updateGreen: function(e) {
        this.setState({
          G: e.target.value
        })
    },
    
    updateBlue: function(e) {
        this.setState({
          B: e.target.value
        })
    },

    validateClass: function(){
        var state = this.state;
        if(state.R > 210 && state.G > 210 && state.B > 210){
            var classData = {
                container: 'container dark',
                result: 'result dark'
            }
            return classData
        } else {
            var classDefault = {
                container: 'container',
                result: 'result'
            }
            return classDefault
        }
    }, 

    render: function() {
        var text = 'RGB Generator without: ';
        var JSX = '🐞 JSX';
        var ES6 = '🐞 ES6';
        var REDUX = '🐞 REDUX';
        var value = 'RGB(' + this.state.R + ',' + this.state.G + ',' + this.state.B + ')';
        var titleClass = {className: 'title'};
        var isDarkContainer = this.validateClass().container;
        var isDarkResult = this.validateClass().result;
        var containerClass = {
            style: {
                color: "red", 
                backgroundColor: 'rgb('+this.state.R+','+this.state.G+','+this.state.B+')'
            },
            className: 'section'
        };
        var controllerClass = {
            className: 'controller'
        };
        var subtitlesClass = {
            className: 'subtitle'
        };
        var titlesClass = {
            className: isDarkContainer
        };
        var resultClass = {
            className: isDarkResult
        }
        //sconsole.log(this.state, '------------');
        return (
            React.createElement("section", containerClass, 
                React.createElement('div', titlesClass,
                    React.createElement('h1', titleClass, text),
                    React.createElement('h2', subtitlesClass, JSX),
                    React.createElement('h2', subtitlesClass, ES6),
                    React.createElement('h2', subtitlesClass, REDUX),
                ),
                React.createElement('div', controllerClass,
                    <RGBcontroller
                        default={this.state.R}
                        update={this.updateRed}
                        id={'R'}
                        state={this.state}
                    />,
                    <RGBcontroller
                        default={this.state.G}
                        update={this.updateGreen}
                        id={'G'}
                        state={this.state}
                    />,
                    <RGBcontroller
                        default={this.state.B}
                        update={this.updateBlue}
                        id={'B'}
                        state={this.state}
                    />,
                    React.createElement('p', resultClass, value )
                )
            )  
        )
    }
})

export default App;
