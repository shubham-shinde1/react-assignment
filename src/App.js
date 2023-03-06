//import { Headings } from "./assignment.js";
import React from 'react';
import { Firstheading } from './comp1.js';
import { Secondheading } from './comp2.js';
import { Thirdheading } from './comp3.js';
import { Button } from './comp4.js';

export default function App() {
  return (
    <div>
      <Firstheading />
      <Secondheading />
      <Thirdheading />
      <Button />
    </div>
  );
}
