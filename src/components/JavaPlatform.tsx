import { Content, Panel } from 'react-bulma-components';

export function JavaPlatform() {
  return (
    <Panel>
      <Panel.Header>Java Platform</Panel.Header>
      <Panel.Block>
        <Content>
            <div><a href="https://docs.oracle.com/javase/specs/jls/se21/html/index.html">JLS</a></div>
            <div><a href="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/module-summary.html">Java SE</a></div>
            <div><a href="https://docs.oracle.com/javaee/7/api/toc.htm">Java EE</a></div>
            <div>{'Jakarta EE '}
              <a href="https://jakarta.ee/specifications/platform/10/apidocs/">Platform</a>{', '}
              <a href="https://jakarta.ee/specifications/persistence/3.2/apidocs/jakarta.persistence/module-summary.html">Persistence</a>
            </div>
            <div>{'Spring '}
              <a href="https://docs.spring.io/spring-framework/docs/current/javadoc-api/index.html">Framework</a>{', '}
              <a href="https://docs.spring.io/spring-boot/api/java/index.html">Boot</a>{', '}
              <a href="https://docs.spring.io/spring-batch/docs/current/api/">Batch</a>{', '}
              <a href="https://docs.spring.io/spring-data/commons/docs/current/api/index.html">Data</a>
            </div>
        </Content>
      </Panel.Block>
    </Panel>
  );
}
