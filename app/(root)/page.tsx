import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = {firstName: 'fuhad', lastName: 'obasa', email: 'fuhad@gmail.com'};
  return (
    <section className='home'>
      <div className="home-content">
        <header className='home-header'>
            <HeaderBox
              type= 'greeting'
              title= 'welcome'
              user={loggedIn?.firstName || 'Guest'}
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