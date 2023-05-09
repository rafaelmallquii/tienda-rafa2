import { Inter } from 'next/font/google'
import Modal from '@/componentes/Modal.js'
import Saludos from '@/componentes/Saludos'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <main>
      <Modal/>
      {/* <Saludos/> */}
    </main>
  )
}
