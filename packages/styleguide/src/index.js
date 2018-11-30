import React from 'react';
import ReactDOM from 'react-dom';
import { Catalog, pageLoader } from 'catalog';
import Hello from '@hoa.nguyen-thai-test/components/lib/Hello';
import Another from '@hoa.nguyen-thai-test/components/lib/Another';

ReactDOM.render(
  <Catalog
    title="Catalog"
    pages={[
      {
        imports: { Hello, Another },
        path: '/',
        title: 'Introduction',
        content: pageLoader('intro.md')
      }
    ]}
  />
, document.getElementById('root'));