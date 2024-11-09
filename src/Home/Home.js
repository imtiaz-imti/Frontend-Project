import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  const scrollToFooter = ()=>{
    if(document.getElementById('footer')){
      const element = document.getElementById('footer')
      element?.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }
  return (
    <div className='mainhome'>
    <div className='home'>
      <img src='https://d33wubrfki0l68.cloudfront.net/assets/6e489219d46a5f1ada7c36fe0189c7cc85613a05/truck-bg-compressed.jpg' alt=''/>
      <div className='home1'>
        <div className='home11'>
            <div className='home111'>Your Ultimate Trucking And Warehousing Services</div>
            <div className='home112'>Here at Wilsonport we pride ourselves in being known for our quality services. Your satisfaction and happiness is our number one priority all the time </div>
            <div className='home113'>
               <div className='home1131' onClick={scrollToFooter}>GET IN TOUCH</div>
               <div className='home1132'><Link to="/about" style={{color:'white'}}>ABOUT US</Link></div> 
            </div>
        </div>
      </div>
    </div>
    <div className='mainhome2'>
        <div className='mainhome21'>
            <div className='mainhome211'>
               <div className='mainhome2111'>
                 <div className='mainhome21111'><img src='https://d33wubrfki0l68.cloudfront.net/7ba91247b4fd9e13d242b6a1905262e54897097a/8cabe/assets/trucking-1.jpg' alt=''/></div>
                 <div className='mainhome21112'>Trucking</div>
                 <div className='mainhome21113'>With multiple trucks servicing in entire Ireland, we are capable of handling your trucking needs. </div>
               </div>
               <div className='mainhome2111'>
               <div className='mainhome21111'><img src='https://d33wubrfki0l68.cloudfront.net/8839363c9c9fae21b4f35e4bd9a52918c1c9f2b7/0927e/assets/warehousing.jpg' alt=''/></div>
                 <div className='mainhome21112'>Warehousing</div>
                 <div className='mainhome21113'>We have warehousing facilities available for long or short term storage needs. </div>
               </div>
               <div className='mainhome2111'>
               <div className='mainhome21111'><img src='https://d33wubrfki0l68.cloudfront.net/3ebd4e82100600bb6c5ea554c8508fe20f322358/7e41f/assets/cfs.jpg' alt=''/></div>
                 <div className='mainhome21112'>Bonded CFS</div>
                 <div className='mainhome21113'>Let us transfer your Air freight to our custom's bonded facility and will make it ready to go. </div>
               </div>
               <div className='mainhome2111'>
               <div className='mainhome21111'><img src='https://d33wubrfki0l68.cloudfront.net/f8d6f925ad2ec1a89d08d2c1e0e46405a7224f80/e51dc/assets/commercial.jpg' alt=''/></div>
                 <div className='mainhome21112'>Commercial</div>
                 <div className='mainhome21113'>We can be your mover of choice for your next office commercial move whenever you want. </div> 
               </div> 
            </div>
        </div>
        <div className='mainhome22'>
          <div className='mainhome221'>
            <div className='mainhome2211'>Our Story</div>
            <div className='mainhome2212'></div>
            <div className='mainhome2213'> We are a customs bonded trucking and warehousing company and we have been in service for over 20 years and are fully committed to providing the best service for our customers.We started our journey in 1982 and we are located in Ireland and specialize in trucking and warehousing. </div>
            <div className='mainhome2214'>
              <div className='mainhome22141'>More About Us</div>
            </div>
          </div>
          <div className='mainhome222'><img src='https://d33wubrfki0l68.cloudfront.net/assets/d60a16bd3274eb3247a2ef3870668f7892e8aff8/red-truck-compressed.jpg' alt=''/></div>
          <div className='mainhome223'>
            <div className='mainhome2231'>
              <div className='mainhome22311'>Core Values</div>
              <div className='mainhome22311'>
                <div className='mainhome223111'><img src='https://cdn1.iconfinder.com/data/icons/ui-colored-2-of-3/100/UI_2__20-64.png' alt=''/></div>
                <div className='mainhome223112'>A commitment to sustainability and to acting in an environmentally friendly way </div>
              </div>
              <div className='mainhome22311'>
              <div className='mainhome223111'><img src='https://cdn1.iconfinder.com/data/icons/ui-colored-2-of-3/100/UI_2__20-64.png' alt=''/></div>
              <div className='mainhome223112'>A commitment to provide innovation and excellence through our extraordinary services </div>
              </div>
              <div className='mainhome22311'>
              <div className='mainhome223111'><img src='https://cdn1.iconfinder.com/data/icons/ui-colored-2-of-3/100/UI_2__20-64.png' alt=''/></div>
              <div className='mainhome223112'>A commitment to doing good for the whole world and to bring huge value for the whole generation </div>
              </div>
              <div className='mainhome22311'>
              <div className='mainhome223111'><img src='https://cdn1.iconfinder.com/data/icons/ui-colored-2-of-3/100/UI_2__20-64.png' alt=''/></div>
              <div className='mainhome223112'>A commitment to helping everyone regardless of age, gender, religion, status, etc. </div>
              </div>
              <div className='mainhome22311'>
              <div className='mainhome223111'><img src='https://cdn1.iconfinder.com/data/icons/ui-colored-2-of-3/100/UI_2__20-64.png' alt=''/></div>
              <div className='mainhome223112'>A commitment to building strong relations with our customers through our great work </div>
              </div>
            </div>
          </div>
        </div>
    </div>
      <div className='mainhome3' id='mainhome3'>
        <div className='mainhome31'>
          <div className='mainhome311'>Our Services </div>
          <div className='mainhome312'></div>
          <div className='mainhome313'>
            <div className='mainhome3131'>
              <div className='mainhome31311'>
                <div className='mainhome313111'><img src='https://cdn1.iconfinder.com/data/icons/logos-1/24/web-service-amazon-web-services-64.png' alt=''/></div>
                <div className='mainhome313112'>
                  <div className='mainhome3131121'>Transport</div>
                  <div className='mainhome3131122'>We transport your needs all around the country </div>
                </div>
              </div>
              <div className='mainhome31311'>
              <div className='mainhome313111'><img src='https://cdn0.iconfinder.com/data/icons/essentials-solid-glyphs-vol-1/100/Data-Database-Storage-64.png' alt=''/></div>
                <div className='mainhome313112'>
                  <div className='mainhome3131121'>Storage</div>
                  <div className='mainhome3131122'>We store your needs so you don't have to worry </div>
                </div>
              </div>
              <div className='mainhome31311'>
              <div className='mainhome313111'><img src='https://cdn3.iconfinder.com/data/icons/business-round-set-1/128/CONSULTING-64.png' alt=''/></div>
                <div className='mainhome313112'>
                  <div className='mainhome3131121'>Consulting</div>
                  <div className='mainhome3131122'>We love counsulting for logistics like any expert </div>
                </div>
              </div>
            </div>
            <div className='mainhome3131'>
              <div className='mainhome31311'>
              <div className='mainhome313111'><img src='https://cdn1.iconfinder.com/data/icons/shopping-e-commerce-10/33/truck_delivery-64.png' alt=''/></div>
                <div className='mainhome313112'>
                  <div className='mainhome3131121'>Trucking</div>
                  <div className='mainhome3131122'>We provide local trucking based on your needs </div>
                </div>
              </div>
              <div className='mainhome31311'>
              <div className='mainhome313111'><img src='https://cdn3.iconfinder.com/data/icons/public-services-14/496/postal_services-mail-post-deliveries-courier-64.png' alt=''/></div>
                <div className='mainhome313112'>
                  <div className='mainhome3131121'>Deliveries</div>
                  <div className='mainhome3131122'>We provide door to door deliveries for any product </div>
                </div>
              </div>
              <div className='mainhome31311'>
              <div className='mainhome313111'><img src='https://cdn2.iconfinder.com/data/icons/giftbox/64/gift_bag-packaging-gift-shopping-box-64.png' alt=''/></div>
                <div className='mainhome313112'>
                  <div className='mainhome3131121'>Packaging</div>
                  <div className='mainhome3131122'>We will cover your products with solid packaging </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mainhome4' id='mainhome4'>
      <div className='mainhome41'>
          <div className='mainhome411'>Our Stats </div>
          <div className='mainhome412'></div>
          <div className='mainhome413'>
            <div className='mainhome4131'>
              <div className='mainhome41311'>
                <div className='mainhome413111'>
                  <div className='mainhome4131111'><img src='https://cdn4.iconfinder.com/data/icons/iconsimple-business/512/archive_box-64.png' alt=''/></div>
                  <div className='mainhome4131112'>7000+</div>
                  <div className='mainhome4131113'>Packages Stored</div>
                </div>
              </div>
              <div className='mainhome41312'>
              <div className='mainhome413111'>
              <div className='mainhome4131111'><img src='https://cdn4.iconfinder.com/data/icons/emoji-66/64/05-happy-64.png' alt=''/></div>
                  <div className='mainhome4131112'>800+</div>
                  <div className='mainhome4131113'>Happy Clients</div>
              </div>
              </div>
              <div className='mainhome41313'>
              <div className='mainhome413111'>
              <div className='mainhome4131111'><img src='https://cdn1.iconfinder.com/data/icons/shopping-e-commerce-10/33/truck_delivery-64.png' alt=''/></div>
                  <div className='mainhome4131112'>3000+</div>
                  <div className='mainhome4131113'>Deliveries Completed</div>
              </div>
              </div>
              <div className='mainhome41314'>
              <div className='mainhome413111'>
              <div className='mainhome4131111'><img src='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/globe-64.png' alt=''/></div>
                  <div className='mainhome4131112'>20000+</div>
                  <div className='mainhome4131113'>Miles Travelled</div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
