import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Markdown Previewer</h1>
        </header>
        <div className="container-fluid">
          <div className="row">
            <div className="col" id="editor">
              <h3>Editor</h3>
              <textarea rows="25" cols="100">
              </textarea>
            </div>
            <div className="col">
              <h3>Previewer</h3>
              <div id="preview">
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
