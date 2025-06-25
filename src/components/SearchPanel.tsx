import { useState } from 'react';
import { Button, Content, Icon, Panel } from 'react-bulma-components';
import { Search } from './Search';
import duckDuckGo from './icons/duckduckgo-icon.svg';
import google from './icons/google-icon.svg';
import googleNews from './icons/google-news-icon.svg';
import mdn from './icons/mdn-icon.svg';
import wikipedia from './icons/wikipedia-icon.svg';

interface Zone {
  action: string;
  alt: string;
  extra?: { [key : string]: string; },
  name?: string;
  src: string;
}

const zones: Zone[] = [
  {
    action: 'https://start.duckduckgo.com/',
    alt: 'DuckDuckGo',
    extra: { t: 'h_', hps: '1', start: '1' },
    src: duckDuckGo,
  },
  {
    action: 'https://www.google.com/search',
    alt: 'Google',
    extra: { utm: '14' },
    src: google,
  },
  {
    action: 'https://news.google.com/search',
    alt: 'Google News',
    extra: { hl: 'en-US', gl: 'US', ceid: 'US:en' },
    src: googleNews,
  },
  {
    action: 'https://developer.mozilla.org/en-US/search',
    alt: 'Mozilla Developer Network',
    src: mdn,
  },
  {
    action: 'https://en.wikipedia.org/w/index.php',
    alt: 'Wikipedia',
    name: 'search',
    src: wikipedia,
  },
];

interface ZoneButtonProps {
  active?: boolean;
  alt: string;
  onClick?: () => unknown;
  src: string;
}

function ZoneButton({ active, alt, onClick, src }: ZoneButtonProps) {
  return (
    <Button
      color={active ? 'info' : undefined}
      isSelected={active}
      onClick={onClick}
      >
        <Icon><img alt={alt} src={src} title={alt} /></Icon>
    </Button>
  );
}

export function SearchPanel() {
  const [ zoneIndex, setZoneIndex ] = useState(0);

  return (
    <Panel>
      <Panel.Header>Search</Panel.Header>
      <Panel.Block>
        <Content className="search-container">
          <Button.Group hasAddons>
            {zones.map((zone, n) => (
              <ZoneButton
                key={zone.action}
                active={zoneIndex === n}
                alt={zone.alt}
                onClick={() => setZoneIndex(n)}
                src={zone.src}
              />
            ))}
          </Button.Group>
          <Search
            action={zones[zoneIndex].action}
            focus
            name={zones[zoneIndex].name}
            >
            {Object.entries(zones[zoneIndex].extra ?? []).map(([k, v]) =>
              <input name={k} type="hidden" value={v} />
            )}
          </Search>
        </Content>
      </Panel.Block>
    </Panel>
  );
}
