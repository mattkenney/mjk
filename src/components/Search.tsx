import { ReactNode, useEffect, useRef } from 'react';
import { Button, Form } from 'react-bulma-components';

export interface SearchProps {
  action: string;
  children?: ReactNode;
  focus?: boolean;
  name?: string;
}

export function Search({ action, children, focus, name = 'q' }: SearchProps) {
  const inputRef = useRef(null);
  useEffect(() => {
    if (!focus) return;
    const input = inputRef.current as unknown as HTMLElement;
    input?.focus();
  }, [focus, inputRef]);

  return (
    <form action={action}>
      <Form.Field horizontal>
        <Form.Field.Body>
          <Form.Field kind="addons">
            <Form.Control fullwidth>
              <Form.Input autoComplete="off" domRef={inputRef} name={name} type="search" />
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
