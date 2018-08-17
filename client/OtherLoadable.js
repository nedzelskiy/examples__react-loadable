import React from 'react';
import Loadable from 'react-loadable';
import Loading from './Loading';
import { report } from "import-inspector";
import path from "path";

const LoadableComponent = Loadable({
  loader: () => report(import('./OtherPage'), {
    serverSideRequirePath: path.join(__dirname, './OtherPage'),
    webpackRequireWeakId: () => require.resolveWeak('./OtherPage')
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
