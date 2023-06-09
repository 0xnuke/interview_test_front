
import Engagement from '@/components/Engagement/Engagement'
import Report from '@/components/Engagement/Report/Report';
import styles from "@/styles/Home.module.css"
import Layout from "@/components/Layout/Layout";
import LayoutReport from "@/components/LayoutReport/LayoutReport";
import { useState } from 'react';

const Home = () => {
  const [page, setPage] = useState('normal');

  const handleClickPage = (value) => {
    setPage(value);
  };

  return (
    <>
      {page === 'normal' ? (
        <Layout>
          <main className={styles.main}>
            <Engagement handleClickPage={handleClickPage} />
          </main>
        </Layout>
      ) : (
        <LayoutReport handleClickPage={handleClickPage} >
          <main className={styles.main}>
            <Report />
          </main>
        </LayoutReport>
      )}
    </>
  );
}

export default Home;






