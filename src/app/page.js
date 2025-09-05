import React from 'react';
import HitCounter from '../components/HitCounter';
import { Censored } from '../components/Censored';

function Home() {

  return (
    <main>
      <h1>Hello Next!</h1>
      You are visitor number{'  '}
      <Censored>
        <HitCounter />
      </Censored>
    </main>
  );
}

export default Home;
