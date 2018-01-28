import * as React from 'react';

import Columns from 'react-bulma-components/lib/components/columns';
import Section from 'react-bulma-components/lib/components/section';

import Books from '../components/Books';
import Music from '../components/Music';
import Tools from '../components/Tools';
import Websites from '../components/Websites';

export default function Home() {
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
