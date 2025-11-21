import { Content, Panel } from 'react-bulma-components';

export function CloudInfo() {
  return (
    <Panel>
      <Panel.Header>Cloud</Panel.Header>
      <Panel.Block>
        <Content>
          <div><a href="https://docs.aws.amazon.com/cli/latest/">AWS CLI</a></div>
          <div><a href="https://search.opentofu.org/provider/opentofu/aws/latest">Terraform AWS provider</a></div>
        </Content>
      </Panel.Block>
    </Panel>
  );
}
