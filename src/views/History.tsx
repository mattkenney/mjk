import { useEffect, useState } from 'react';
import { Card, Heading, Media, Section } from 'react-bulma-components';

interface HistoryEntry {
  artist: string;
  date: string;
  venue: string;
  image?: string;
}

export function History() {
  const [entries, setEntries] = useState([] as HistoryEntry[]);

  useEffect(() => {
    fetch('/data/history.json')
      .then(res => res.json())
      .then(({ entries }) => setEntries(entries))
      ;
  }, []);

  return (
    <Section>
      <Card>
        <Card.Content>
          <Media>
            <Media.Item>
              <Heading size={4}>Live Shows</Heading>
              <Heading subtitle size={6}>
                Shows I&rsquo;ve been to
              </Heading>
            </Media.Item>
          </Media>
          {entries.map(entry =>
            <Card className="history-entry" key={entry.date + entry.artist}>
              <Card.Content>
                {entry.image &&
                  <img
                    className="history-photo"
                    src={'/images/' + entry.image}
                    alt={entry.artist}
                  />
                }
                <Heading size={5}>{entry.artist}</Heading>
                <Heading subtitle size={6}>{entry.date}</Heading>
                <p>{entry.venue}</p>
              </Card.Content>
            </Card>
          )}
        </Card.Content>
      </Card>
    </Section>
  );
}
