import * as React from 'react';

import Card from 'react-bulma-components/lib/components/card';
import Content from 'react-bulma-components/lib/components/content';
import Section from 'react-bulma-components/lib/components/section';

class BlogEntry extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.componentWillReceiveProps(this.props);
  }

  componentWillReceiveProps(props) {
    const url = '/data/' + props.match.params.id;
    fetch(url)
      .then(res => res.text())
      .then(html => this.setState({ html }))
      ;
  }

  render() {
    return (
      <Section>
        <Card>
          <Card.Content>
            <Content>
              <div dangerouslySetInnerHTML={{ __html: this.state.html || '' }} />
            </Content>
          </Card.Content>
        </Card>
      </Section>
    );
  }
}

export default BlogEntry;
