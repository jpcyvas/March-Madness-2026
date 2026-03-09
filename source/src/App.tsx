import { Button } from '@heroui/react'

function App() {
  return (
    // Hero Section
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images2.minutemediacdn.com/image/upload/c_crop,x_0,y_0,w_2000,h_2000/c_fill,w_800,ar_1:1,f_auto,q_auto,g_auto/images%2FvoltaxMediaLibrary%2Fmmsport%2Fsi%2F01k8hynk2pmz67vge8r5.jpg')",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white drop-shadow-lg">
          WonderPals 2026 <br /> March Madness
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 drop-shadow-md max-w-2xl mx-auto">
          We're back for another round of upsets, buzzer-beaters, and unforgettable moments.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 font-semibold shadow-lg">
            Join the Group
          </Button>
        </div>
      </div>
    </div>
    // End of Hero Section
  )
}

export default App
