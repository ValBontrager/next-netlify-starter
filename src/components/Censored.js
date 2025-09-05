'use client';
import React, { useState } from 'react';

export function Censored({ children }) {
 const [isCensored, setIsCensored] = useState(false);

  return (
    <button className={isCensored ? 'censored' : ''} onClick={() => setIsCensored(!isCensored)}>{children}</button>
  );
}