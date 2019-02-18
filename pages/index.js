import Link from 'next/link';
import Head from 'next/head';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
const Index = () => (
    <div>
        <Head>
            <link rel="stylesheet" href="/static/base.css" />
        </Head>
        <Header/>
        <Navbar/>
    </div>
        
)
export default Index;