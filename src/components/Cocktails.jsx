import React from 'react'

const Cocktails = () => {
  return (
  <section id='cocktails' className='noisy'>
    <img src="/img/cocktail-left-leaf.png" alt="left-leaf" id="c-left-leaf" />
    <img src="/img/cocktail-right-leaf.png" alt="right-leaf" id="c-right-leaf" />
    <div className='list'>
        <div className="popular">
            <h2>Most Popular cocktails:</h2>
            <ul>
              {cocktailsList.map((drink)=>(
                <li key={drink.name}>
                <div className='md:me-28'>
                <h3>{drink.name}</h3>
                <p>{drink.country}|{drink.detail}</p>
                <span>-{drink.price}</span>
                </div>
                </li>
              )
              )}  
            </ul>
        </div>
    </div>
  </section>
  )
}

export default Cocktails
