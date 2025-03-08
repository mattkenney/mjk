import { Content, Panel } from 'react-bulma-components';
import { Search } from './Search';

export function SearchPanel() {
  return (
    <Panel>
      <Panel.Header>Search</Panel.Header>
      <Panel.Block>
        <Content className="search-container">
          <Search
            action="https://www.google.com/search"
            label="Web"
            >
            <input name="utm" type="hidden" value="14" />
          </Search>
          <Search
            action="https://en.wikipedia.org/w/index.php"
            label="Wikipedia"
            name="search"
            />
          <Search
            action="https://developer.mozilla.org/en-US/search"
            label="MDN"
            />
        </Content>
      </Panel.Block>
    </Panel>
  );
}
