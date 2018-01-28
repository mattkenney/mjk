import * as React from 'react';

import Card from 'react-bulma-components/lib/components/card';
import Section from 'react-bulma-components/lib/components/section';

export default function Home(props) {
  const url = '//www.youtube.com/embed/' + props.match.params.id;
  return (
    <Section>
      <Card>
        <Card.Media>
          <div className="video-container">
            <iframe
              src={url}
              frameBorder="0"
              height="315"
              width="560"
              ></iframe>
          </div>
        </Card.Media>
      </Card>
    </Section>
  );
}
