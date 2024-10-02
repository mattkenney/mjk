import { Content, Panel } from 'react-bulma-components';

export function Websites() {
  return (
    <Panel>
      <Panel.Header>Websites</Panel.Header>
      <Panel.Block>
        <Content>
          Some websites I built for fun:
          <br/>
          <a href="https://mwthr.com">mwthr.com</a>: US weather
          <br/>
          <a href="https://phillytrain.com">phillytrain.com</a>:
          Philadelphia regional rail trip planner
          <br/>
          <a href="/">mattkenney.com</a>: This site
        </Content>
      </Panel.Block>
    </Panel>
  );
}
