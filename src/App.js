import React, { Component } from 'react';
import marked from 'marked';
import './App.scss';

marked.setOptions = ({ breaks: true, tables: true })

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toBeCompiled: markupText
    }
  }

  onChange = (e) => {
    this.setState({
      toBeCompiled: e.target.value
    })
  }

  createMarkup = () => {
    return { __html: marked(this.state.toBeCompiled) };
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <div className="content">
            <div className="row">
              <div className="col">
                <h3>Edit Markdown:</h3>
                <textarea type="text" id="editor" rows="40" cols="100" onChange={this.onChange} value={this.state.toBeCompiled} >
                </textarea>
              </div>
              <div className="col">
                <h3>Preview Markdown:</h3>
                <div id="preview" dangerouslySetInnerHTML={this.createMarkup()}>
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <p>
              Created by{" "}
              <a href="https://robertpaulrespicio.com/" target="_block">
                Respici0
              </a>
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const markupText =

  `# Markdown Common Examples (Learn it!)
   ---
In Github, README, you use markdown to decorate it! Here are some are the most common markdown you will see being used when reading a README on Github.
 
## Header Sizes
---
# h1
# H1
## H2
### H3
#### H4
##### H5
###### H6

 
## Lists
---

1. Here is a list using 1's, numbers don't matter.
1. Using 1's are the most common to use
1. You can list as many as you want.

Here are other types:
- These are bulleted.
* Unordered list can use asterisks
- Or minuses
+ Or pluses
     - You can indent as well!

## You can also inline code & do code blocks
--- 
Just use 2 back ticks, like this \`<header></header>\`.


you can do a code block by doing three backticks back to back:

\`\`\`
let phrase = "Heck yah! It is!";

function codeIsFun(string) {
  return string;
}

// here is a comment
codeIsFun(phrase);
\`\`\`
  
## Emphasis
---

You can make a bunch of different type of texts like these:
You can also make text 
1. **bold**
2. _italic_.
3. **_can be bold & italics_**
4. ~~crossed out~~.

## Couple of other things you can do with markdown:
---

You can add an image:
![It's funny cause it's true.](https://www.probytes.net/wp-content/uploads/2018/01/6-1.jpg)


You can add a youtube picture with the link to it:
<a href="https://www.youtube.com/watch?v=eJojC3lSkwg
" target="_blank"><img src="https://scotch-res.cloudinary.com/image/upload/w_1000,q_auto:good,f_auto/media/https://scotch.io/wp-content/uploads/2015/02/guide-to-markdown-web-writing.png" 
alt="IMAGE ALT TEXT HERE" width="360" height="180" border="10" /></a>

> A block quote, most commonly used to emulate a reply text. You can also put markdown inside a block quote

---

You can link URLs as well, here is an example, as well as a link to [adam-p's markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#headers).

`


export default App;
