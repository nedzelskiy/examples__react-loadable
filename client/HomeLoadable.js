import React from 'react';
import Loadable from 'react-loadable';
import Loading from './Loading';
import {report} from 'import-inspector';
import path from 'path';
import { addNamed, addDefault } from '@babel/helper-module-imports';

const LoadableComponent = Loadable({
  loader: () => report(import('./HomePage'), {
    serverSideRequirePath: path.join(__dirname, './HomePage'),
    webpackRequireWeakId: () => require.resolveWeak('./HomePage')
  }),
  loading: Loading,
  render(loaded, props) {
    let Component = loaded.namedExport;
    return <Component {...props}/>;
  },
});

export default class LoadableDashboard extends React.Component {
  render() {
    return <LoadableComponent />;
  }
}
