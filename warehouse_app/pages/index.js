import Head from 'next/head'
import {GiCardboardBoxClosed} from 'react-icons/gi'
import Table from '../components/table'
import Form from '../components/form'
import { useSelector, useDispatch } from 'react-redux';
import { toggleChangeAction } from '../redux/reducer';

export default function Home() {

const visible  = useSelector((state) => state.app.client.toggleForm)
const dispatch = useDispatch()

const handler = () => {
  dispatch(toggleChangeAction())
}


  return (
    <section>
      <Head>
        <title>Warehouse Tool </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <main className='py-5'>
      <h1 className='text-xl md:text-5xl text-center font-bold py-10'>Storage Management</h1>
 
     <div className="container mx-auto flex justify-between py-5 border-b">
          <div className="left flex gap-3">
            <button onClick={handler} className='flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-indigo-500 hover:text-g-800'>
              Add New Product  <span className='px-1'><GiCardboardBoxClosed size={23}></GiCardboardBoxClosed></span>
            </button>
          </div>
     </div>

     <div className="container mx-auto py-5">
       { visible ? <Form></Form>:<></>}
     </div>


      <div className="container mx-auto">
          <Table></Table>
      </div>


    </main>
    </section>
  )
}
