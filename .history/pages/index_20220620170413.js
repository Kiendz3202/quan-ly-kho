import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LoginIcon from '@mui/icons-material/Login';
import Login from '../components/Auth/Login';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {

  const router = useRouter()
  useEffect(() => {
    if (router.pathname === '/') {
      router.push('/home-page')
    }
  }, [])

  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Login />
      <div className='max-w-[250px] w-full mx-auto mt-[30px] '>
        <div>
          <div className=' text-center  p-[20px] mb-3 cursor-pointer hover:opacity-90'>Dành cho khách hàng</div>
          <div className=' text-center  p-[20px] shadow-shadowCustom font-semibold cursor-pointer hover:opacity-90'>Quét mã sản phẩm</div>
        </div>
      </div> */}
    </div>
  )
}
