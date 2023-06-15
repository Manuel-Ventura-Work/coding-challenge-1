import './App.css'
import rmclogo from "./imgcomponents/logoimage.jpg"
import rmcmap from "./imgcomponents/truck.png"
import socialmediaplaceholder from "./imgcomponents/icons8-instagram-48.png"

function App() {


  return (
    <div className="background">
      <div className='main-area'>
        <section className='logo-section'>
          <img className='logo' src={rmclogo} alt='Logo of the Restoration Management Company'></img>
          </section>
          <div className='inner-background'>
            <div className='overlay-image'>
              <div className='overlay-text'>
              <h1 className='header-text light-text'>24/7 Emergency Restoration Specialists</h1>
              <br></br>
              <p className='sub-text light-text'>We are a full service restoration and cleaning company delivering reliable emergency and restoration services 24 hours a day 7 days a week</p>
              </div>
            </div>
          </div>
          <hr className='rounded red-divider'></hr>
          <article className='posting graybg'>
            <h1 className='posting-header-text'>Evacuation Hack: Emergency Restoration</h1>
            <br></br>
            <br></br>
            <p className='posting-text'>When a major storm or hurricane is on the horizon, it is always best to follow evacuation orders if your country authorities advise you to do so. While following basic tips like placing your valuables high that you cannot take with you and securing patio furniture, did you ever think of your refrigerator?</p>
            <br></br>
            <p className='posting-text'>Is the food safe when you return?</p>
            <br></br>
            <p className='posting-text'>If the electric goes out, the contents of a freezer can completely thaw out spoiling all of your groceries</p>
            <br></br>
            <p className='posting-text'>There may even be enough time for the spoiled food to completely refreeze again making it hard to tell if your freezer and refrigerated items are safe for consumption. How will you know?</p>
          </article>
          <article className='posting'>
            <h1 className='posting-header-text'>Evacuation Tip!</h1>
            <br></br>
            <br></br>
            <p className='posting-text'>Next time, while packing and preparing for the evacuation, freeze a cup of water. After the water is frozen, place a quarter on top of the water and put it back into the freezer</p>
            <br></br>
            <p className='posting-text'>After returning home from the evacuation, if you find the quarter has moved to the bottom of the cup, then you'll know your power was out long enough to unthaw your frozen goods. This food should be thrown away.</p>
            <br></br>
            <p className='posting-text'>If you find your quarter in the middle, you know the power did go out, but not long enough to completely thaw the cup of water. Use your own discretion for discarding food if this is the case</p>
            <br></br>
            <p className='posting-text'>Is the quarter still on top? That means your freezer's contents stayed frozen the entire time. All your refrigerated goods are safe for consumption!</p>
            <br></br>
            <p className='posting-text'>Remember to always follow authority guidelines for returning back to your home or business during an evacuation, if you've experienced any damage to your business, multi-family property, or campus. -- please call RMC's 24/7 emergency intake line!</p>
          </article>
          <hr className='rounded red-divider'></hr>
          <section className='promo-section'>
            <p className='promo-text'><strong>RMC</strong> delivers prompt and reliable emergency mitigation services for businesses, commercial buildings, homes and catastrophes across the United States</p>
          </section>


          <div className='gridcontainer'>


            <article className='griditem graybg'>
              <h1 className='posting-header-text'>Water Damage</h1>
              <br></br>
              <p className='posting-text'>RMC takes care of every detail when it comes to managing your water problem, including the quick extraction, drying and restoration of your property and belongings.</p>
              <button className='learnmore'>Learn More</button>
            </article>


            <article className='griditem'>
              <h1 className='posting-header-text'>Fire & Smoke Damage</h1>
              <br></br>
              <p className='posting-text'>Few events parallel the destruction caused by fire, smoke, and soot. RMC is your expert in the state of the art techniques and services needed to restore a property back to pre-loss condition.</p>
              <button className='learnmore'>Learn More</button>
            </article>


            <article className='griditem '>
              <h1 className='posting-header-text'>Mold Remediation</h1>
              <br></br>
              <p className='posting-text'>Mold can be costly, difficult to remove and dangerous for your health. Timing is critical to the containment and remediation of a structure to remove and prevent the growth of destructive mold and mildew</p>
              <button className='learnmore'>Learn More</button>
            </article>


            <article className='griditem graybg'>
              <h1 className='posting-header-text'>Environmental Remediation</h1>
              <br></br>
              <p className='posting-text'>Lead and asbestos abatement, controlled demolition, trauma scene cleanup, containment and debris removal are all services that you want done right --the first time</p>
              <button className='learnmore'>Learn More</button>
            </article>

            
            <article className='griditem graybg'>
              <h1 className='posting-header-text'>Electronics & Equipment</h1>
              <br></br>
              <p className='posting-text'>Electronics can be the most important part of getting a business back in order, RMC can clean and stop any further damage from occurring and return your equipment to pre-loss condition</p>
              <button className='learnmore'>Learn More</button>
            </article>


            <article className='griditem '>
              <h1 className='posting-header-text'>Construction</h1>
              <br></br>
              <p className='posting-text'>If you need to rebuild your commercial facility following a flood, fire or other catastrophe, the construction team at RMC can provide construction services that get you back to business as soon as possible.</p>
              <button className='learnmore'>Learn More</button>
            </article>


            
          </div>
          <div className='viewbutton paddingtop50'>
              <button className='viewall'>View All Our Services</button>
          </div>

          <div className='quotediv graybg'>
            <p className='quote'><em>"Getting our customers back on their feet is not only our goal but our passion." - Branch Manager, Phoenix, AZ</em></p>
          </div>
          <img className='truckimage' src={rmcmap} alt="Map of the United States with a truck in front of it"></img>
          <div className='quotediv graybg'>
            <p className='quote'>RMC has 13 regional offices serving Arizona, California, Colorado and Washington, as well as a national catastrophe response fleet of vehicles, equipment and experts serving North America</p>
          </div>
          <div className='viewbutton paddingtop50'>
              <button className='viewall'>View All Locations</button>
          </div>
          <div className='testimonialdiv'>
            <p className='testimonial'> "I want to express my sincerest thank you to you all. I am so very grateful to have such remarkable vendors support me and my clients when we need it the most. You all played an integral part in getting this issue contained so quickly. Both the Landlord and the Tenant appreciate the speed with which we mobilized to resolve the issue. You are all rock stars THANK YOU!"</p>
            <br></br>
            <p className='testimonial'>- Kara Rountree, Property Manager, Retail, JLL</p>
            <br></br>
            <button className='gethelp'>GET HELP NOW</button>
          </div>
          <section className='information'>
            <p className='infored info'>Restoration Management Company</p>
            <p className='info'>Tel: 1-800-400-5058 | rmc.com</p>
            <p className='info'>4142 Point Eden Way Hayward, CA 94545</p>
          </section>
      </div>
      <div className='socialmediacenter'>
        <img className='socialmedia' src={socialmediaplaceholder}></img> <img className='socialmedia' src={socialmediaplaceholder}></img> <img className='socialmedia' src={socialmediaplaceholder}></img> <img className='socialmedia' src={socialmediaplaceholder}></img> 
      </div>
    </div>
  )
}

export default App
