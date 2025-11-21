import { Content, Panel } from 'react-bulma-components';

export function JavaEcosystem() {
  return (
    <Panel>
      <Panel.Header>Java Ecosystem</Panel.Header>
      <Panel.Block>
        <Content>
          <div><a href="https://sdk.amazonaws.com/java/api/latest/index.html">AWS SDK</a></div>
          <div><a href="https://docs.jboss.org/hibernate/stable/orm/javadocs/">Hibernate</a></div>
          <div><a href="https://junit.org/junit5/docs/current/api/">JUnit</a></div>
          <div><a href="https://javadoc.io/doc/org.projectlombok/lombok/latest/index.html">Lombok</a></div>
          <div><a href="https://javadoc.io/doc/org.mockito/mockito-core">Mockito</a></div>
        </Content>
      </Panel.Block>
    </Panel>
  );
}
