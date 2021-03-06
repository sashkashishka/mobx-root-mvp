import * as React from 'react';
import { observer } from 'mobx-react';
import { NavLink } from 'react-router-dom';

import { register, inject } from '../providers';
import { BarStore } from '../stores';
import { compose } from '../utils';

const Bar = ({ bar, common }) => (
  <>
    <NavLink to="/">
      home
    </NavLink>
    <br />
    <NavLink to="/foo">
      foo
    </NavLink>
    <br />
    
    <button
      onClick={() => bar?.dec()}
    >
      inc
    </button>
    <div>this is BAR page</div>
    <div>
      counter: {bar?.count}
    </div>
    <button
      onClick={() => common?.baz()}
    >
      common call
    </button>
    <div>
      common called: {common?.called}
    </div>
  </>
);

export const BarPage = compose(
  observer,
  inject(
    [BarStore, 'bar'],
    'common',
  ),
)(Bar);

