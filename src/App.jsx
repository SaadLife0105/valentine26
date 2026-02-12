import { useState } from 'react'
import './App.css'

function App() {
  const [page, setPage] = useState('main')
  const [noTransform, setNoTransform] = useState('translate(0, 0)')

  const gifAngles = [0, 60, 120, 180, 240, 300]
  const gifRadius = 320

  const goToSchedule = () => {
    setPage('schedule')
  }

  const runAwayNo = () => {
    // Pick a big random offset so the button moves far away
    const maxOffset = 260
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
          <h1 className="yaaay-title">YAAAYYY! 💖</h1>
          <p className="yaaay-subtitle">
            I&apos;m so happy you said yes. Here&apos;s our little Valentine&apos;s adventure:
          </p>

          <div className="schedule">
            <div className="schedule-item">
              <h2>1. Slow morning together</h2>
              <p>Lazy wake up, hugs, and your favorite breakfast to start the day softly.</p>
            </div>
            <div className="schedule-item">
              <h2>2. Cute daytime date</h2>
              <p>
                A walk, some photos, maybe coffee or hot chocolate &mdash; just us enjoying the day.
              </p>
            </div>
            <div className="schedule-item">
              <h2>3. Special evening plan</h2>
              <p>Dinner, surprises, and way too much sweetness (from both dessert and me).</p>
            </div>
            <div className="schedule-item">
              <h2>4. Cozy night in</h2>
              <p>
                Movies, cuddles, and ending the day exactly how we like it: together and comfy.
              </p>
            </div>
          </div>

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
        {gifAngles.map((angle, index) => (
          <div
            key={angle}
            className="gif-slot"
            style={{
              transform: `translate(-50%, -50%) rotate(${angle}deg) translate(${gifRadius}px) rotate(-${angle}deg)`,
            }}
          >
            GIF {index + 1}
          </div>
        ))}
      </div>

      <div className="question-wrapper">
        <h1 id="question" className="valentine-title question-text">
          Will you be my Valentine?
        </h1>

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
