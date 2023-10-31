import { useState } from 'react';
import Head from 'next/Head';
import Image from 'next/Image';

import styles from '../styles/Home.module.css';

export default function Home() {
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);
}