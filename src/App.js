import './App.css';
//import SwiftParser from 'swift-parser';
import inputText from './swiftMsgInput.js';

var SwiftParser = require('swift-parser').SwiftParser;

function App() {
  var output;
  var parser = new SwiftParser();
  const swifttext = inputText;
  parser.parse(swifttext, function(err, ast) {
    console.log(err);
    console.log("------------");
    console.log(ast);
    output = ast;
  });

  return (
    <div className="App">
      <div>
        <h1>Input : </h1>
        <p>{swifttext}</p>
        <br />
        <h1>Output : </h1>
        <p>{JSON.stringify(output)}</p>
      </div>
    </div>
  );
}

export default App;
