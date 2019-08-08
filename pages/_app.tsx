import React from 'react';
import App, { Container } from 'next/app';
import { Store } from 'redux';
import { initializeStore, PersistObject } from '../store';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PersistGate } from 'redux-persist/integration/react';
import { Persistor } from 'redux-persist';

const isServer = typeof window === 'undefined';
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(): PersistObject {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore();
  }

  const _window = (window as any);

  // Create store if unavailable on the client and set it on the window object
  if (!_window[__NEXT_REDUX_STORE__]) {
    _window[__NEXT_REDUX_STORE__] = initializeStore();
  }
  return _window[__NEXT_REDUX_STORE__];
}

class MyApp extends App {
  reduxStore: Store;
  persistor: Persistor;
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  static async getInitialProps({ Component, ctx }: any) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  constructor(props: any) {
    super(props);
    const persistStore = getOrCreateStore();
    this.reduxStore = persistStore.store;
    this.persistor = persistStore.persistor;
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet" />
        </Head>
        <PersistGate loading={null} persistor={this.persistor}>
          <Component {...pageProps} store={this.reduxStore} />
        </PersistGate>

        <style jsx={true} global={true}>{`
        body {
          font-family: "Raleway", sans-serif;
        }

        .app {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          min-height: 90vh;
        }

        .logo {
          width: 30%;
          height: 30%;
        }

        .custom-nav-link {
          color: var(--primary) !important;
          text-decoration: none;
          background-color: transparent;
        }
      `}</style>
      </Container>
    );
  }
}

export default MyApp;