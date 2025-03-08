import { ReactNode } from 'react';
import { Button, Form } from 'react-bulma-components';

export interface SearchProps {
  action: string;
  children?: ReactNode;
  label: string;
  name?: string;
}

export function Search({ action, children, label, name = 'q' }: SearchProps) {
  return (
    <form action={action}>
      <Form.Field horizontal>
        <Form.Field.Label>
          <Form.Label>{label}</Form.Label>
        </Form.Field.Label>
        <Form.Field.Body>
          <Form.Field kind="addons">
            <Form.Control fullwidth>
              <Form.Input autoComplete="off" name={name} type="search" />
            </Form.Control>
            <Form.Control>
              <Button color="info">Search</Button>
            </Form.Control>
          </Form.Field>
        </Form.Field.Body>
      </Form.Field>
      <div>{children}</div>
    </form>
  );
}
