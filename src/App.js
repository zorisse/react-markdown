import React, { Component } from 'react';
import marked from 'marked';
import { sampleText } from './sampleText';
import './App.css';


class App extends Component {
  // state
  state = {
    text: sampleText
  }
  // methods life cycle 
  componentDidMount = () => {
    console.log('je viens de monter ')
    const text = localStorage.getItem('text')
    if (text !== "") {
      this.setState({
        text
      })
    } else {
      this.setState({
        text: sampleText
      })
    }

  }
  componentDidUpdate = () => {
    const { text } = this.state
    console.log('update happenned')
    localStorage.setItem('text', text)
  }
  // methods 
  handleChange = (event) => {
    //1 copier le state 
    let text = { ...this.state.text }
    //2 changer et store les valeurs 
    let changedText = event.target.value
    text = changedText
    //setState 
    this.setState({
      text: text
    })
  }
  renderText = (txt) => {
    const __html = marked(txt, { sanitize: true });
    return { __html }
  }


  render() {
    return (
      <div className="container">
        <div className="row">

          <div className="col-sm-6">
            <textarea
              className="form-control"
              rows="35"
              onChange={this.handleChange}
              value={this.state.text}
            >

            </textarea>
          </div>
          <div className="col-sm-6">
            <div dangerouslySetInnerHTML={this.renderText(this.state.text)} >


            </div>
          </div>

        </div>
      </div >
    );
  }
}

export default App;
