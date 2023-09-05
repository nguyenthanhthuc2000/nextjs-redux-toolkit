import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';


export type NextPageWithLayout<P = any, IP = P> = NextPage<P, IP> & {
  getAuth?: (page: ReactElement) => ReactNode,
}

export default function App({ Component, pageProps }: AppProps) {
  return <Layout> <Component {...pageProps} /> </Layout>;
}
