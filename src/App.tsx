import React, { useState } from 'react';
import Layout from './shared/layout/Layout';

export interface IAppProps {}

const App: React.FC = () => {
  const [data, setData] = useState([]);

  return (
    <Layout>
      <div className='mx-auto mt-6 flex max-w-sm items-center space-x-4 rounded-xl bg-white p-6 shadow-lg'>
        <div className='shrink-0'>
          <img
            className='h-12 w-12'
            src='https://mdbootstrap.com/img/new/avatars/1.jpg'
            alt='ChitChat Logo'
          />
        </div>
        <div>
          <div className='text-xl font-medium text-black'>Wow, it works!</div>
          <p className='text-slate-500'>
            This alert is build with Tailwind CSS classes
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default App;
