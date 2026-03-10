import { Button,Avatar,  Card, CloseButton, Link,ScrollShadow  } from '@heroui/react'
import {Calendar,Clock,CircleNumber1} from '@gravity-ui/icons';


function App() {
  return (
    // Hero Section
    <div>
       <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images2.minutemediacdn.com/image/upload/c_crop,x_0,y_0,w_2000,h_2000/c_fill,w_800,ar_1:1,f_auto,q_auto,g_auto/images%2FvoltaxMediaLibrary%2Fmmsport%2Fsi%2F01k8hynk2pmz67vge8r5.jpg')",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto backdrop-blur-sm p-5 rounded-md">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white drop-shadow-lg">
          WonderPals 2026 <br /> March Madness
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 drop-shadow-md max-w-2xl mx-auto">
          We're back for another round of upsets, buzzer-beaters, and unforgettable moments.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Button size="lg" variant="primary">
            Join the Group
          </Button>
        </div>
        <br/>
         <div className="flex flex-wrap gap-3 justify-center">
          <Button size="sm" variant="secondary">
            Info about This Years Tourney
          </Button>
        </div>
      </div>

     


    </div>
          {/* End of Hero Section */}
    {/* Rules Section */}
    <div>
      <div className="flex w-full items-center justify-center">

        <div className="grid w-full max-w-2xl grid-cols-12 gap-4 p-4">
          <div className="md:max-w-2xl col-span-12 grid grid-cols-12 gap-4">
          {/* Left Column */}
          <div className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-6">
            {/* Top Card with dates */}
            <div className="col-span-12 grid grid-cols-12 gap-4">
              {/* Left Card */}
              <Card className="col-span-12 gap-2 sm:col-span-6">
                <Card.Header>
                  {/* <Avatar className="size-[56px] rounded-xl">
                    <Avatar.Image
                      alt="Demo 1"
                      src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/demo1.jpg"
                    />
                    <Avatar.Fallback>JK</Avatar.Fallback>
                  </Avatar> */}
                </Card.Header>
                <Card.Content className="mt-1">
                  <h2 className="text-lg font-bold">START DATE</h2>
                  <p className="text-md">
                    <Calendar className="inline-block mr-2" />
                    3/19/2026
                    </p>
                  <p className="text-md">
                    <Clock className="inline-block mr-2" />
                    10am CT
                    </p>

                </Card.Content>
                <Card.Footer className="flex items-center gap-2">
                  
                </Card.Footer>
              </Card>
              {/* Right Card */}
              <Card className="col-span-12 gap-2 sm:col-span-6">
                <Card.Header>
                 
                </Card.Header>
                <Card.Content className="mt-1">
                  <h2 className="text-lg font-bold">RULES</h2>
                  <p className="text-md">
                    Winner Take All
                    </p>
                </Card.Content>
                <Card.Footer className="flex items-center gap-2">
                  
                </Card.Footer>
              </Card>
            </div>
            {/* Bottom Card */}
            <Card className="col-span-12">
              <Card.Header className="gap-3">
                <div className="flex flex-col gap-1">
                  <h2 className="text-lg font-bold">PAYMENT</h2>
                  <Card.Title className="pr-8 text-sm sm:text-base">
                    Send $10 to Jonas via Venmo!
                  </Card.Title>
                  <Card.Description className="text-xs sm:text-sm">
                    Do this by 3/19 @ 10am CT!
                  </Card.Description>
                </div>
              </Card.Header>
              <Card.Footer>
                <Link aria-label="Go to settings" target="_blank" href="https://venmo.com/u/Jonas-Cyvas" rel="noopener noreferrer">
                  Link to Venmo
                  <Link.Icon aria-hidden="true" />
                </Link>
              </Card.Footer>
            </Card>
            {/* Bottom cards */}

          </div>
          {/* Right Column */}
          <Card className="col-span-12 min-h-[200px] overflow-hidden rounded-3xl lg:col-span-6">
            <img
              alt="Indiana v Marquette"
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover"
              src="https://images2.minutemediacdn.com/image/upload/f_auto,q_auto,g_auto/images%2FvoltaxMediaLibrary%2Fmmsport%2Fsi%2F01kben1v9kqyk5c411k7.jpg"
            />
            {/* Header */}
            <Card.Header className="z-10 text-white">
              <Card.Title className="text-xs font-semibold tracking-wide text-black/70">
                {/* NEO */}
              </Card.Title>
              <Card.Description className="text-sm leading-5 font-medium text-black/50">
                {/* Home Robot */}
              </Card.Description>
            </Card.Header>
            {/* Footer */}
            <Card.Footer className="z-10 mt-auto flex items-center justify-between">
              
            </Card.Footer>
          </Card>
        </div>
        </div>
      </div>




      <ul>
      <li><strong>Shoot $10 over to Colin before 3/16</strong></li>
      <li>Trash Talk as often as possible.</li>
      <li>Have an all around good time!</li>
      <li>Scoring (Points per correct selection)<br/>
          <ul>
            <li>Round 1 : 10pt (Round of 64)</li>
            <li>Round 2 : 20pt (Round of 32)</li>
            <li>Round 3 : 40pt (Sweet 16)</li>
            <li>Round 4 : 80pt (Elite 8)</li>
            <li>Round 5 : 160pt (Final 4)</li>
            <li>Round 6 : 320pt (Championship)</li>
          </ul>
      </li>
      <li>Have Questions? Ask Jonas.</li>
    </ul>  
    </div>
    {/* End of Rules Section */}

    </div>
   
    
    

  )
}

export default App
