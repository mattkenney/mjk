import { Card, Section } from 'react-bulma-components';
import { useParams } from 'react-router-dom';

export function Music() {
  const { id } = useParams();
  const url = '//www.youtube.com/embed/' + encodeURIComponent(id ?? '');
  return (
    <Section>
      <Card>
        <Card.Content>
          <div className="video-container">
            <iframe
              src={url}
              frameBorder="0"
              height="315"
              width="560"
              ></iframe>
          </div>
        </Card.Content>
      </Card>
    </Section>
  );
}
