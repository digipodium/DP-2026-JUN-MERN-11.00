import Card from '@/components/Card';
import MyButton from '@/components/MyButton';
import React from 'react'

const Home = () => {

  return (
    <div>
      <h1 style={{ fontSize: '40px', textAlign: 'center', fontWeight: 'bold' }}>
        Welcome to Home Page
      </h1>

      <hr />
      <br />
      <input type="text" />

      <div className='grid grid-cols-3 gap-4'>
        <Card
          title={'my card title'}
          desc={'my card description'}
          btnText={'submit'}
        />
        <Card
          title={'my card title 2'}
          desc={'my card description 2'}
          btnText={'submit'}
        />
        <Card
          title={'my card title 3'}
          desc={'my card description 3'}
          btnText={'submit'}
        />

      </div>

      <MyButton>some value</MyButton>
      <MyButton>submit</MyButton>
      <MyButton>click</MyButton>
      <MyButton>sdkfh</MyButton>
      <MyButton>dsjfhg</MyButton>

    </div>
  )
}

export default Home;