import { useEffect, useState } from 'react';
import { Panel, Section } from 'react-bulma-components';
import { Link } from 'react-router-dom';

interface Entry {
  path: string;
  title: string;
  dateText: string;
}

export function Blog() {
  const [entries, setEntries] = useState([] as Entry[]);

  useEffect(() => {
    fetch('/data/blog.json')
      .then(res => res.json())
      .then(res => { res.entries.reverse(); return res; })
      .then(({ entries }) => setEntries(entries))
      ;
  }, []);

  return (
    <Section>
      <Panel>
        <Panel.Header>Blog</Panel.Header>
        {entries?.map(entry =>
          <Panel.Block key={entry.path} renderAs="a">
            <Link to={'/blog/' + entry.path}>{entry.title}</Link>
          </Panel.Block>
        )}
      </Panel>
    </Section>
  );
}
