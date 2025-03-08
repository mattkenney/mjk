import { Columns, Section } from 'react-bulma-components';

import { JavaEcosystem } from '../components/JavaEcosystem';
import { JavaPlatform } from '../components/JavaPlatform';
import { SearchPanel } from '../components/SearchPanel';

export function Links() {
  return (
    <Section>
      <Columns>
        <Columns.Column>
          <JavaPlatform/>
        </Columns.Column>
        <Columns.Column>
          <JavaEcosystem/>
        </Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column>
          <SearchPanel/>
        </Columns.Column>
      </Columns>
    </Section>
  );
}
