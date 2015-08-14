import React from 'react/addons';

import Playground from 'component-playground';
import assign from 'object-assign';

export default React.createClass({
  getDefaultProps() {
    return {
      title: 'Home',
      route: 'home'
    }
  },
  render() {
    return (
      <div className="component-documentation">
        <h1>Welcome To Our React Component Library!</h1>
        <p>We are glad you are here and interested in all of the components that are available to you to build apps. To get started hit the hamburger menu on the right to see a list of all of the libraries and their components. But before you get going we&apos;d like you to play with one thing first:</p>

        <Playground
          codeText={require("raw!./examples/home/simple.example")}
          scope={assign({React}, require('../scope.jsx'))}
          noRender={true}/>

        <p>Change the text inside the &lt;div&gt;. Notice how it updates dynamically? All of the code examples in showcase do that. So wherever you see code, you can play with it and adjust it to your needs. Then just copy and paste it into your app and you should be good to go!</p>
      </div>
    )
  }
});
