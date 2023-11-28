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
              <a href="http://www.powells.com/book/all-the-light-we-cannot-see-9781501173219/17-0"
                className="nom">
              All the Light We Cannot See</a>
            </dt>
            <dd>Anthony Doerr</dd>

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
              <a href="http://www.powells.com/book/capital-in-the-twenty-first-century-9780674979857/62-0"
                className="nom">
              Capital in the Twenty First Century</a>
            </dt>
            <dd>Thomas Piketty (translated by Arthur Goldhammer)</dd>

            <dt>
              <a href="http://www.powells.com/book/the-goldfinch-9780316055444/1-35"
                className="nom">
              The Goldfinch</a>
            </dt>
            <dd>Donna Tartt</dd>

            <dt>
              <a href="http://www.powells.com/book/righteous-mind-why-good-people-are-divided-by-politics-religion-9780307455772/2-8"
                className="nom">
              The Righteous Mind: Why Good People Are Divided by Politics &amp; Religion</a>
            </dt>
            <dd>Jonathan Haidt</dd>

            <dt>
              <a href="http://www.powells.com/book/the-spirit-level-9781608193417/2-10"
                className="nom">
              The Spirit Level: Why Greater Equality Makes Societies Stronger</a>
            </dt>
            <dd>Richard Wilkinson and Kate Pickett</dd>

            <dt>
              <a href="http://www.powells.com/book/how-the-economy-works-9780199360307/68-211"
                className="nom">
              How the Economy Works: Confidence, Crashes and Self-Fulfilling Prophecies</a>
            </dt>
            <dd>Roger E. A. Farmer</dd>

            <dt>
              <a href="http://www.powells.com/book/against-intellectual-monopoly-9780521127264/61-1"
                className="nom">
              Against Intellectual Monopoly</a>
              </dt>
            <dd>Michele Boldrin and David K. Levine</dd>

            <dt>
              <a href="http://www.powells.com/book/wind-up-bird-chronicle-9780679446699"
                className="nom">
              The Wind-Up Bird Chronicle</a>
            </dt>
            <dd>Haruki Murakami (translated by Jay Rubin)</dd>
          </dl>

        </Content>
      </Panel.Block>
    </Panel>
  );
}
