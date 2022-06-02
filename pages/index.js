import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>The Ikenna Blog</h1>
      <Link href="/about">About</Link>
    </div>
  )
}
