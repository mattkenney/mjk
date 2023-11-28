import { Columns, Section } from 'react-bulma-components';

import { Books } from '../components/Books';
import { Music } from '../components/Music';
import { Tools } from '../components/Tools';
import { Websites } from '../components/Websites';

export function Home() {
  return (
    <Section>
      <Columns>
        <Columns.Column>
          <Websites/>
          <Tools/>
        </Columns.Column>
        <Columns.Column>
          <Music/>
          <Books/>
        </Columns.Column>
      </Columns>
    </Section>
  );
}
