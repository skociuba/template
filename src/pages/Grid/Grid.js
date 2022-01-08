import React from 'react';
import {Cell, Grid, Row} from '@material/react-layout-grid';

import {container} from './Grid.style';
const GridComponent = () => {
  return (
    <Grid>
      <Row>
        <Cell desktopColumns={6} tabletColumns={4} phoneColumns={12}>
          <Row>
            <Cell desktopColumns={8} tabletColumns={6} phoneColumns={12} className={container}>
              Tennis
            </Cell>
            <Cell desktopColumns={4} tabletColumns={6} phoneColumns={12} className={container}>
              Cricket
            </Cell>
          </Row>
        </Cell>
        <Cell desktopColumns={6} tabletColumns={4} phoneColumns={12}>
          <Row>
            <Cell desktopColumns={8} tabletColumns={6} phoneColumns={12} className={container}>
              Box
            </Cell>
            <Cell desktopColumns={4} tabletColumns={6} phoneColumns={12} className={container}>
              Polo
            </Cell>
          </Row>
        </Cell>
      </Row>
    </Grid>
  );
};
export default GridComponent;
