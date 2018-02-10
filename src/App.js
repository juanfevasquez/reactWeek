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

    render: function() {
        var text = 'RGB Generator without: ';
        var JSX = '🐞 JSX';
        var ES6 = '🐞 ES6';
        var REDUX = '🐞 REDUX';
        var value = 'RGB(' + this.state.R + ',' + this.state.G + ',' + this.state.B + ')';
        var titleClass = {class: 'title'};
        var containerClasses = {
            style: {
                color: "red", 
                backgroundColor: 'rgb('+this.state.R+','+this.state.G+','+this.state.B+')'
            },
            class: 'section'
        };
        var controllerClass = {
            class: 'controller'
        };
        var subtitlesClass = {
            class: 'subtitle'
        };
        var containerTitles = {
            class: 'container'
        };
        var resultClass = {
            class: 'result'
        }
        //sconsole.log(this.state, '------------');
        return (
            React.createElement("section", containerClasses, 
                React.createElement('div', containerTitles,
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
                    />,
                    <RGBcontroller
                        default={this.state.G}
                        update={this.updateGreen}
                        id={'G'}
                    />,
                    <RGBcontroller
                        default={this.state.B}
                        update={this.updateBlue}
                        id={'B'}
                    />,
                    React.createElement('p', resultClass, value )
                )
            )  
        )
    }
})

console.log(<App/>);

export default App;
