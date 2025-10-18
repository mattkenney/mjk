import { Content, Panel } from 'react-bulma-components';

export function ReactInfo() {
  return (
    <Panel>
      <Panel.Header>React</Panel.Header>
      <Panel.Block>
        <Content>
            <div><a href="https://react.dev/reference/react">Reference</a></div>
            <div><a href="https://reactnative.dev/docs/components-and-apis">React Native Components</a></div>
            <div><a href="https://reactnative.dev/docs/accessibilityinfo">React Native APIs</a></div>
            <div><a href="https://watermelondb.dev/docs">Watermelon DB</a></div>
        </Content>
      </Panel.Block>
    </Panel>
  );
}
