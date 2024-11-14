'use client';
import { useState } from "react";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <button className="btn btn-primary" onClick={async () => {
        const _ = (await import('lodash')).default;
        const users = [
          {name: 'a'},
          {name: 'b'},
          {name: 'c'}
        ];

        const sortedArray = _.orderBy(users, ['name']);
        console.log(sortedArray);
      }}>Show</button>
    </main>
  )
}
   