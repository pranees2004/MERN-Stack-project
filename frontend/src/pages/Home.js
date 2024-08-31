import React from 'react'
import './Home.css'
import food1 from '../images/CAT86.jpg'
import food2 from '../images/CAT158.jpg'
import food3 from '../images/CAT170.jpg'
import food4 from '../images/CAT211.jpg'
import food5 from '../images/CAT224.jpg'
import food6 from '../images/CAT228.jpg'
import food7 from '../images/CAT230.jpg'
import offer from '../images/Logo.jpeg'
import food8 from '../images/food8.jpg'

const Home = () => {
  return (
    <div>
      <section className='combo'>
          <img src={offer} alt=''/>
      </section>
      <div className='browser'>
        <span>BROWSER  CATEGORIES</span>
        <hr className="browser-line" />
      </div>
      {/* <section className='add1'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 '>
              <div className='card'>
                <img src={food1} alt='' className='card-image'/>
                <div className='card-title'>
                  BURGERS
                </div>
              </div>
            </div>
            <div className='col-lg-3 '>
              <div className='card'>
                <img src={food2} alt='' className='card-image'/>
                <div className='card-title'>
                  CHICKEN BUCKETS
                </div>
              </div>
            </div>
            <div className='col-lg-3 '>
              <div className='card'>
                <img src={food3} alt='' className='card-image'/>
                <div className='card-title'>
                  INTERNATIONAL BURGER FEST
                </div>
              </div>
            </div>
            <div className='col-lg-3 '>
              <div className='card'>
                <img src={food4} alt='' className='card-image'/>
                <div className='card-title'>
                  MATCH DAY COMBOS
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className='add2'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3'>
              <div className='card'>
                <img src={food5} alt='' className='card-image'/>
                <div className='card-title'>
                  VALUE LUNCH SPECIALS
                </div>
              </div>
            </div>
            <div className='col-lg-3 '>
              <div className='card'>
                <img src={food6} alt='' className='card-image'/>
                <div className='card-title'>
                  VALUE SNACKERS
                </div>
              </div>
            </div>
            <div className='col-lg-3 '>
              <div className='card'>
                <img src={food7} alt='' className='card-image'/>
                <div className='card-title'>
                  RICE BOWLZ
                </div>
              </div>
            </div>
            <div className='col-lg-3 '>
              <div className='card'>
                <img src={food8} alt='' className='card-image'/>
                <div className='card-title'>
                  Wednesday Chicken Bucket
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className='chicken'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3'>
              <div className='card'>
                <img src={food1} alt=''/>
                <div className='card-title'>CHICKEN BUCKETS</div>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='card'>
                <img src={food2} alt=''/>
                <div className='card-title'>BOX MEALS</div>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='card'>
                <img src={food3} alt=''/>
                <div className='card-title'>NEW CHICKEN ROLLS</div>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='card'>
                <img src={food4} alt=''/>
                <div className='card-title'>PERI PERI CHICKEN</div>
              </div>
            </div>
          </div>
          <div className='row mt-5'>
            <div className='col-lg-3'>
              <div className='card'>
                <img src={food5} alt=''/>
                <div className='card-title'>VALUE SNACKS</div>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='card'>
                <img src={food6} alt=''/>
                <div className='card-title'>VALUE LUNCH SPECIALS</div>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='card'>
                <img src={food7} alt=''/>
                <div className='card-title'>WEDNESDAY SPECIALS</div>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='card'>
                <img src={food8} alt=''/>
                <div className='card-title'>VARIETY CHICKEN MEALS</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home;
