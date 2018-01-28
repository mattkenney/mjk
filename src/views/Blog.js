import * as React from 'react';
import { Link } from 'react-router-dom';

import Panel from 'react-bulma-components/lib/components/panel';
import Section from 'react-bulma-components/lib/components/section';

class Blog extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch('/data/blog.json')
      .then(res => res.json())
      .then(res => { res.entries.reverse(); return res; })
      .then(({ entries }) => this.setState({ entries }))
      ;
  }

  render() {
    return (
      <Section>
        <Panel>
          <Panel.Header>Blog</Panel.Header>
          {this.state.entries && this.state.entries.map(entry =>
            <Panel.Block key={entry.path} renderAs="a">
              <Link to={'/blog/' + entry.path}>{entry.title}</Link>
            </Panel.Block>
          )}
        </Panel>
      </Section>
    );
  }
}

export default Blog;
