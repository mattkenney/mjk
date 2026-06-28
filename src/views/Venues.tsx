import { useEffect, useState } from 'react';
import { Card, Heading, Media, Section } from 'react-bulma-components';

interface VenueLink {
  url: string;
  text: string;
}

interface Venue {
  name: string;
  links: VenueLink[];
  address: string[];
  capacity?: string;
  neighborhood?: string;
  nee?: string;
  aka?: string;
}

export function Venues() {
  const [venues, setVenues] = useState([] as Venue[]);

  useEffect(() => {
    fetch('/data/venues.json')
      .then(res => res.json())
      .then(({ venues }) => setVenues(venues))
      ;
  }, []);

  return (
    <Section>
      <Card>
        <Card.Content>
          <Media>
            <Media.Item>
              <Heading size={4}>Venues</Heading>
              <Heading subtitle size={6}>
                Where to see live music in and around Philadelphia
              </Heading>
            </Media.Item>
          </Media>
          <div>
            {venues.map(venue =>
              <div className="venue" key={venue.name}>
                {venue.name}<br />
                {venue.links.map(link =>
                  <span key={link.url}>
                    <a href={link.url}>{link.text}</a><br />
                  </span>
                )}
                {venue.address.map(line =>
                  <span key={line}>{line}<br /></span>
                )}
                {venue.capacity && <>capacity: {venue.capacity}<br /></>}
                {venue.neighborhood && <>neighborhood: {venue.neighborhood}<br /></>}
                {venue.nee && <>n&eacute;e: {venue.nee}<br /></>}
                {venue.aka && <>AKA: {venue.aka}<br /></>}
              </div>
            )}
          </div>
        </Card.Content>
      </Card>
    </Section>
  );
}
