import { Content, Panel } from 'react-bulma-components';

export function Websites() {
  return (
    <Panel>
      <Panel.Header>Websites</Panel.Header>
      <Panel.Block>
        <Content>
          Some websites I built for fun and learning:
          <br/>
          <a href="/">mattkenney.com</a>: This site
          (<a href="https://preactjs.com">Preact</a>{', '}
          <a href="https://babeljs.io">Babel</a>{' & '}
          <a href="https://webpack.js.org">webpack</a>)
          <br/>
          <a href="https://mwthr.com">mwthr.com</a>: US weather
          (<a href="https://nodejs.org">Node.js</a>{' & '}
          <a href="https://angularjs.org">AngularJS</a>)
          <br/>
          <a href="https://phillytrain.com">phillytrain.com</a>:
          Philadelphia regional rail trip planner
          (<a href="https://angularjs.org">AngularJS</a>)
        </Content>
      </Panel.Block>
    </Panel>
  );
}
