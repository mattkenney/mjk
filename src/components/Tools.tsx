import { Content, Panel } from 'react-bulma-components';

export function Tools() {
  return (
    <Panel>
      <Panel.Header>Tools I Use</Panel.Header>
      <Panel.Block>
        <Content>
          <p>Favorites:<br/>
            <a href="https://nodejs.org/dist/latest-v8.x/docs/api/">Node.js</a>{', '}
            <a href="https://reactjs.org/docs/react-api.html">React</a>{' & '}
            <a href="https://preactjs.com">Preact</a>{', '}
            <a href="https://babeljs.io/learn-es2015/">Babel</a>{' & '}
            <a href="https://webpack.js.org/concepts/">webpack</a>
          </p>
          <p>Standbys:<br/>
            <a href="https://api.jquery.com/">jQuery</a>{', '}
            <a href="https://gulpjs.com/">gulp</a>{', '}
            <a href="https://docs.python.org/3/py-modindex.html">Python</a>
          </p>
          <p><span className="del">COBOL</span> Java:<br/>
            <a href="https://docs.oracle.com/javase/8/docs/api/index.html">Java SE</a>{', '}
            <a href="https://docs.oracle.com/javaee/7/api/toc.htm">Java EE</a>{', '}
            <a href="http://ant.apache.org/manual/index.html">Ant</a>
          </p>
        </Content>
      </Panel.Block>
    </Panel>
  );
}
