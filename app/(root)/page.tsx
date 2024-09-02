import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.action';
import React from 'react'

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  return (
    <section className='home'>
      <div className="home-content">
        <header className='home-header'>
            <HeaderBox
              type= 'greeting'
              title= 'welcome'
              user={loggedIn?.name || 'Guest'}
              subtext= 'Access and manage your account and transaction efficiently. '
            />
            <TotalBalanceBox
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={1250.34}
            />
        </header>
        RECENT TRANSACTION
      </div>
      <RightSidebar
        user={loggedIn}
        transaction={[]}
        banks={[{currentBalance: 123.40},{currentBalance: 600.90}]}
      />
    </section>
  )
}

export default Home