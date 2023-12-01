import { Content, Panel } from 'react-bulma-components';

export function Books() {
  return (
    <Panel>
      <Panel.Header>Books I Liked</Panel.Header>
      <Panel.Block>
        <Content>
          <p>Read and found enjoyable and/or thought-provoking:</p>

          <dl>
 
            <dt>
              <a href="https://www.powells.com/book/the-idiot-9780143111061"
                className="nom">
              The Idiot</a>
            </dt>
            <dd>Elif Batuman</dd>

            <dt>
              <a href="https://www.powells.com/book/defenestrate-9781635577396"
                className="nom">
              Defenestrate</a>
            </dt>
            <dd>Renee Branum</dd>

            <dt>
              Neapolitan Quartet{': '}
              <a href="http://www.powells.com/book/my-brilliant-friend-9781609450786/17-0"
                className="nom">
              My Brilliant Friend</a>{', '}
              <a href="http://www.powells.com/book/story-of-a-new-name-9781609451349/17-2"
                className="nom">
              The Story of a New Name</a>{', '}
              <a href="http://www.powells.com/book/those-who-leave-those-who-stay-9781609452339/17-3"
                className="nom">
              Those Who Leave and Those Who Stay</a>{', and '}
              <a href="http://www.powells.com/book/the-story-of-the-lost-child-9781609452865/2-3"
                className="nom">
              The Story of The Lost Child</a>
            </dt>
            <dd>Elena Ferrante (translated by Ann Goldstein)</dd>

            <dt>
              <a href="http://www.powells.com/book/righteous-mind-why-good-people-are-divided-by-politics-religion-9780307455772/2-8"
                className="nom">
              The Righteous Mind: Why Good People Are Divided by Politics &amp; Religion</a>
            </dt>
            <dd>Jonathan Haidt</dd>

            <dt>
              <a href="https://www.powells.com/book/doxology-9780062877789"
                className="nom">
              Doxology</a>
            </dt>
            <dd>Nell Zink</dd>

          </dl>
        </Content>
      </Panel.Block>
    </Panel>
  );
}
