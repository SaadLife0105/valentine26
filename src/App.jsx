import { useState } from 'react'
import './App.css'

function App() {
  const [page, setPage] = useState('main')
  const [noTransform, setNoTransform] = useState('translate(0, 0)')
  const [noHoverCount, setNoHoverCount] = useState(0)

  const gifData = [
    // top band
    { src: '/rose-hover.gif', alt: 'Rose hover 1', top: 6, left: 18 },
    { src: '/searching-love.gif', alt: 'Searching love 1', top: 7, left: 40 },
    { src: '/rose-hover.gif', alt: 'Rose hover 2', top: 8, left: 62 },
    { src: '/searching-love.gif', alt: 'Searching love 2', top: 9, left: 82 },
    // upper-mid scattered
    { src: '/searching-love.gif', alt: 'Searching love 3', top: 24, left: 10 },
    { src: '/rose-hover.gif', alt: 'Rose hover 3', top: 26, left: 32 },
    { src: '/searching-love.gif', alt: 'Searching love 4', top: 24, left: 78 },
    { src: '/rose-hover.gif', alt: 'Rose hover 4', top: 27, left: 90 },
    // mid / lower-mid scattered
    { src: '/rose-hover.gif', alt: 'Rose hover 5', top: 46, left: 12 },
    { src: '/searching-love.gif', alt: 'Searching love 5', top: 48, left: 86 },
    { src: '/searching-love.gif', alt: 'Searching love 6', top: 62, left: 8 },
    { src: '/rose-hover.gif', alt: 'Rose hover 6', top: 64, left: 92 },
    // bottom band
    { src: '/rose-hover.gif', alt: 'Rose hover 7', top: 82, left: 22 },
    { src: '/searching-love.gif', alt: 'Searching love 7', top: 84, left: 80 },
  ]

  const goToSchedule = () => {
    setPage('schedule')
  }

  const runAwayNo = () => {
    setNoHoverCount((count) => count + 1)

    // Pick a big random offset so the button moves far away
    const maxOffset = 120
    const minOffset = 120

    const randomSign = () => (Math.random() > 0.5 ? 1 : -1)
    const randomOffset = () =>
      (Math.floor(Math.random() * (maxOffset - minOffset)) + minOffset) * randomSign()

    const x = randomOffset()
    const y = randomOffset()

    setNoTransform(`translate(${x}px, ${y}px)`)
  }

  if (page === 'schedule') {
    return (
      <div className="valentine-page">
        <div className="schedule-card">
          <h1 className="yaaay-title">YAAAAAAAYYY!!!!!! 😁😁</h1>
          <p className="yaaay-subtitle">
            PRAISE THE LORDS. Here's the schedule for our first VALENTINE'S DATE:
          </p>

          <div className="schedule">
            <div className="schedule-item">
              <h2>1. KISS KISS</h2>
              <p>We meet at the bus station of rh and then lots and lots and lots and lots of kisses when we meet first. eheh</p>
            </div>
            <div className="schedule-item">
              <h2>2. KAREOKE</h2>
              <p>
                We go to tribecca and then we JUMP IN THE KAREOKE BOX.
              </p>
            </div>
            <div className="schedule-item">
              <h2>3. WE EAT ANYTHING</h2>
              <p>A nice big lunch for the both of us eheh, i am thinking some chinese stuff, i dont remember the name apologies.</p>
            </div>
            <div className="schedule-item">
              <h2>4. LEAGUEEEEEE</h2>
              <p>
                Since cyber room is offering the 2x thing on all PC stuff, let us indulge in some gamimg, even if it is too much time we keep it for next time, PROGRAM.
              </p>
            </div>
            <div className="schedule-item">
              <h2>5. the sad return 😭</h2>
              <p>We finish by big fat kisses and anything else you need before we go back home. (hopefully i live)</p>
            </div>
          </div>

          <p className="schedule-note">
            ps: any of the plans may be subject to change AKZ SA BAN PLN P ALLE MARSER GRAND BASSIN LA FLMM.
          </p>

          <button className="btn back-btn" onClick={() => setPage('main')}>
            &larr; Back to the question
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="valentine-page main-page">
      <div className="gif-ring">
        {gifData.map(({ top, left, src, alt }, index) => (
          <div
            key={`${top}-${left}-${index}`}
            className="gif-slot"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <img src={src} alt={alt} />
          </div>
        ))}
      </div>

      <div className="question-wrapper">
        <img src="/happy-day.gif" alt="Happy day" className="happy-day-gif" />
        <h1 id="question" className="valentine-title question-text">
          Sneha Beeltah,
          <br />
          would you do me the honor of going out with me on the 14th of February?
        </h1>

        {noHoverCount >= 10 && (
          <p className="beg-message">Please say yes mommy 🥺🥺🥺</p>
        )}

        <div className="valentine-buttons">
          <button className="btn yes" onClick={goToSchedule}>
            Yes 💗
          </button>
          <button
            className="btn no"
            style={{ transform: noTransform }}
            onMouseEnter={runAwayNo}
          >
            No
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
