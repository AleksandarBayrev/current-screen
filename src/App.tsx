import { observer } from 'mobx-react';
import React from 'react';
import './App.css';
import { Store } from './Store';
import { AppStatus } from './types';

type AppProps = {
  store: Store;
  currentScreenUrl: string;
  statusUrl: string;
}

@observer
export class App extends React.Component<AppProps> {
  componentDidMount(): void {
    setInterval(async () => {
      await Promise.all([
        this.props.store.getCurrentScreen(this.props.currentScreenUrl),
        this.props.store.getCurrentStatus(this.props.statusUrl)
      ]).then(_ => this.props.store.setAppStatus(AppStatus.Loaded))
        .catch(_ => this.props.store.setAppStatus(AppStatus.Error));
    }, 1000);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.props.store.appStatus.get() === AppStatus.Loading ? this.renderLoader() : this.renderContent()}
        </header>
      </div>
    );
  }

  private renderLoader() {
    return (
      <div className='loader'>Loading application...</div>
    )
  }

  private renderContent() {
    return this.props.store.appStatus.get() === AppStatus.Loaded ? (
      <>
        <div>Current status: {this.props.store.status.get()}</div>
        <div>Current screen</div>
        <div><img src={this.props.store.currentScreen.get() || this.props.currentScreenUrl} width="100%" height="100%" /></div>
      </>
    ) : (
      <>
        <div>Error while loading the application.</div>
      </>
    )
  }
}

export default App;
