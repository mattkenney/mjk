import { useEffect, useRef, useState } from 'react';
import { Card, Heading, Media, Section } from 'react-bulma-components';

interface HistoryEntry {
  artist: string;
  date: string;
  venue: string;
  image?: string;
}

export function History() {
  const [entries, setEntries] = useState([] as HistoryEntry[]);
  const [zoomed, setZoomed] = useState(null as { src: string; alt: string } | null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    fetch('/data/history.json')
      .then(res => res.json())
      .then(({ entries }) => setEntries(entries))
      ;
  }, []);

  function openImage(src: string, alt: string) {
    setZoomed({ src, alt });
    dialogRef.current?.showModal();
  }

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
          {entries.map(entry => {
            const src = entry.image ? '/images/' + entry.image : '';
            return (
              <Card className="history-entry" key={entry.date + entry.artist}>
                <Card.Content>
                  {entry.image &&
                    <span
                      className="history-photo"
                      onClick={() => openImage(src, entry.artist)}
                    >
                      <img src={src} alt={entry.artist} />
                      <span className="zoom-hint" aria-hidden="true">{'⤢'}</span>
                    </span>
                  }
                  <Heading size={5}>{entry.artist}</Heading>
                  <Heading subtitle size={6}>{entry.date}</Heading>
                  <p>{entry.venue}</p>
                </Card.Content>
              </Card>
            );
          })}
        </Card.Content>
      </Card>
      <dialog
        ref={dialogRef}
        className="history-dialog"
        onClick={() => dialogRef.current?.close()}
        onClose={() => setZoomed(null)}
      >
        {zoomed &&
          <span className="history-zoom">
            <img src={zoomed.src} alt={zoomed.alt} />
            <span className="close-hint" aria-hidden="true">{'✕'}</span>
          </span>
        }
      </dialog>
    </Section>
  );
}
