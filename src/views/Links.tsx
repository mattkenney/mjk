import { Columns, Section } from 'react-bulma-components';

import { JavaEcosystem } from '../components/JavaEcosystem';
import { JavaPlatform } from '../components/JavaPlatform';
import { SearchPanel } from '../components/SearchPanel';
import { PythonInfo } from '../components/PythonInfo';
import { ReactInfo } from '../components/ReactInfo';

export function Links() {
  return (
    <Section>
      <Columns>
        <Columns.Column>
          <SearchPanel/>
        </Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column>
          <ReactInfo/>
        </Columns.Column>
        <Columns.Column>
          <PythonInfo/>
        </Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column>
          <JavaPlatform/>
        </Columns.Column>
        <Columns.Column>
          <JavaEcosystem/>
        </Columns.Column>
      </Columns>
    </Section>
  );
}
