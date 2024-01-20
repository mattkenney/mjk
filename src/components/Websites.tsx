import { Content, Panel } from 'react-bulma-components';

export function Websites() {
  return (
    <Panel>
      <Panel.Header>Websites</Panel.Header>
      <Panel.Block>
        <Content>
          Some websites I built for fun:
          <br/>
          <a href="https://mwthr.com">mwthr.com</a>: US weather{' '}
          (<a href="https://react.dev/reference/react">React</a>{' & '}
          <a href="https://vitejs.dev/guide/">Vite</a>)
          <br/>
          <a href="https://phillytrain.com">phillytrain.com</a>:
          Philadelphia regional rail trip planner
          (<a href="https://angularjs.org">AngularJS</a>)
          <br/>
          <a href="/">mattkenney.com</a>: This site
          (<a href="https://react.dev/reference/react">React</a>{' & '}
          <a href="https://vitejs.dev/guide/">Vite</a>)
        </Content>
      </Panel.Block>
    </Panel>
  );
}
