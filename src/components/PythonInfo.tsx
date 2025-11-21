import { Content, Panel } from 'react-bulma-components';

export function PythonInfo() {
  return (
    <Panel>
      <Panel.Header>Python</Panel.Header>
      <Panel.Block>
        <Content>
          <div><a href="https://docs.python.org/3/py-modindex.html">Modules</a></div>
          <div><a href="https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/index.html">Boto</a></div>
        </Content>
      </Panel.Block>
    </Panel>
  );
}
