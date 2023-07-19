import Link from 'next/link'

import Card from './components/Card'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href='/bank-hack' className='block w-1/4'>
        <Card imageUrl='/bank-hack.png' title='Bank Hack' />
      </Link>
    </main>
  )
}
