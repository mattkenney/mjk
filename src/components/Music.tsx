import { Link } from 'react-router-dom';
import { Content, Panel } from 'react-bulma-components';

export function Music() {
  return (
    <Panel>
      <Panel.Header>Music I Love</Panel.Header>
      <Panel.Block>
        <Content>
          <Link to="/music/DZ8Ue8lNGIE">Christian Scott</Link><br/>
          <Link to="/music/1ox4_e1PIfM">Christine and the Queens</Link><br/>
          <Link to="/music/Od9I3P06_fQ">Mother Falcon</Link>
        </Content>
      </Panel.Block>
    </Panel>
  );
}
