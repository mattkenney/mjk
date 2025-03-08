import { Content, Panel } from 'react-bulma-components';

export function Tools() {
  return (
    <Panel>
      <Panel.Header>Tools I Use</Panel.Header>
      <Panel.Block>
        <Content>
          <p>Favorites:<br/>
            <a href="https://kubernetes.io/docs/home/">Kubernetes</a>{', '}
            <a href="https://nodejs.org/dist/latest-v20.x/docs/api/">Node.js</a>{', '}
            <a href="https://react.dev/reference/react">React</a>{', '}
            <a href="https://www.typescriptlang.org/docs/">TypeScript</a>{', '}
            <a href="https://vimhelp.org/">Vim</a>{' & '}
            <a href="https://vitejs.dev/guide/">Vite</a>
          </p>
          <p>Standbys:<br/>
            <a href="https://babeljs.io/docs/">Babel</a>{', '}
            <a href="https://api.jquery.com/">jQuery</a>{', '}
            <a href="https://docs.python.org/3/library/index.html">Python</a>{' & '}
            <a href="https://webpack.js.org/concepts/">Webpack</a>
          </p>
          <p>Java:<br/>
            <a href="https://docs.oracle.com/javase/specs/jls/se21/html/index.html">JLS</a>{', '}
            <a href="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/module-summary.html">Java SE</a>{', '}
            <a href="https://jakarta.ee/specifications/platform/10/apidocs/">Jakarta EE</a>{', '}
            <a href="https://docs.spring.io/spring-framework/docs/current/javadoc-api/index.html">Spring</a>{' & '}
            <a href="https://spring.io/projects/spring-boot">Spring Boot</a>
          </p>
        </Content>
      </Panel.Block>
    </Panel>
  );
}
