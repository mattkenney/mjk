import { Content, Panel } from 'react-bulma-components';
import { Search } from './Search';

export function SearchPanel() {
  return (
    <Panel>
      <Panel.Header>Search</Panel.Header>
      <Panel.Block>
        <Content className="search-container">
          <Search
            action="https://start.duckduckgo.com/"
            focus
            label="DuckDuckGo"
            >
            <input name="t" type="hidden" value="h_" />
            <input name="hps" type="hidden" value="1" />
            <input name="start" type="hidden" value="1" />
          </Search>
          <Search
            action="https://www.google.com/search"
            label="Google"
            >
            <input name="utm" type="hidden" value="14" />
          </Search>
          <Search
            action="https://developer.mozilla.org/en-US/search"
            label="MDN"
            />
          <Search
            action="https://en.wikipedia.org/w/index.php"
            label="Wikipedia"
            name="search"
            />
        </Content>
      </Panel.Block>
    </Panel>
  );
}
