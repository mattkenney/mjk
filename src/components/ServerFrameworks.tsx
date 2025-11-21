import { Content, Panel } from 'react-bulma-components';

export function ServerFrameworks() {
  return (
    <Panel>
      <Panel.Header>Server Frameworks</Panel.Header>
      <Panel.Block>
        <Content>
            <div><a href="https://expressjs.com/en/5x/api.html">Express</a></div>
            <div><a href="https://nextjs.org/docs">Next.js</a></div>
            <div><a href="https://koajs.com/">Koa</a></div>
            <div><a href="https://docs.nestjs.com/">NestJS</a></div>
            <div><a href="https://v5-docs.adonisjs.com/guides/introduction">AdonisJS</a></div>
        </Content>
      </Panel.Block>
    </Panel>
  );
}
