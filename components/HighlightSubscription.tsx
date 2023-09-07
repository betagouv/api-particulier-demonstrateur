import React from 'react';
import { Highlight } from '@codegouvfr/react-dsfr/Highlight';
interface HighlightSubscriptionProps {
  title?: string;
  content?: string;
  subContent?: string;
  style?: React.CSSProperties;
}

export default function HighlightSubscription({
  title = '',
  content = '',
  subContent = '',
  style = {},
}: HighlightSubscriptionProps) {
  return (
    <Highlight size="lg" style={{ marginLeft: 0, ...style }}>
      <span style={{ fontSize: '30px', fontWeight: 300 }}>{title}</span>
      <span style={{ fontSize: '20px', fontWeight: 500, marginTop: '20px', display: 'block' }}>{content}</span>
      <span style={{ fontSize: '15px', fontWeight: 400, display: 'block' }}>{subContent}</span>
    </Highlight>
  );
}
