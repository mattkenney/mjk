import { useEffect, useState } from 'react';
import { Card, Content, Section } from 'react-bulma-components';
import { useParams } from 'react-router-dom';

export function BlogEntry() {
  const { id } = useParams();
  const [html, setHtml] = useState('');

  useEffect(() => {
    const url = '/data/' + id;
    fetch(url)
      .then(res => res.text())
      .then(text => setHtml(text))
      ;
  }, [id]);

  return (
    <Section>
      <Card>
        <Card.Content>
          <Content>
            <div dangerouslySetInnerHTML={{ __html: html || '' }} />
          </Content>
        </Card.Content>
      </Card>
    </Section>
  );
}
