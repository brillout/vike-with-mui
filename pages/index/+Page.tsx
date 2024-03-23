import React from "react";
import { Counter } from "./Counter";
import Paper from '@mui/material/Paper'
console.log('Paper', Paper)

export default function Page() {
  return (
    <>
      <h1>My Vike app</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
<Paper>Test</Paper>
    </>
  );
}
