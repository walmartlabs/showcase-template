import React from 'react/addons';

import Playground from 'component-playground';
import assign from 'object-assign';

export default React.createClass({
  getDefaultProps() {
    return {
      title: 'Style Guide',
      route: 'style-guide'
    }
  },
  render() {
    return (
      <div className="component-documentation">
        <h1>Building Classes</h1>

        <p>So you want to build some React components and share them, eh? Want to have people ooo and ahh at your creation as they look over your shoulder at Starbucks? Well, we want that for you to. So to help you along the way we have come up with this handy style guide to give you some ideas about the type of code we expect to see in the PRs.</p>

        <h2>Component Construction</h2>

        <p>First, let&apos;s talk component construction.</p>

        <Playground
          codeText={require("raw!./examples/style-guide/create-class.example")}
          scope={assign({React}, require('../scope.jsx'))}/>

      </div>
    )
  }
});
