import React from 'react';
import { Helmet } from 'react-helmet';
import { Div, Title, Subtitle } from './style';

export const Layout = ({ children, title, subtitle }) => (
  <>
    <Helmet>
      {title && <title>{title} | Petgram 🐰 </title>}
      {subtitle && <meta name="description" content={subtitle} />}
    </Helmet>
    <Div>
      {title && <Title>{title}</Title>}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {children}
    </Div>
  </>
);
