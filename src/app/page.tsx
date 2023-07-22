import Link from 'next/link'

import Card from './components/Card'

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <div className="block-header text-center font-bold text-3xl mb-10">
        <h1>Mini games of Gta 5</h1>
      </div>
      <Link href='/constant-block' className='block w-1/6'>
        <Card imageUrl='/constant-block.png' title='Constant Block' />
      </Link>
    </main>
  )
}
