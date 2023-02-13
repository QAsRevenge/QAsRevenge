import { useState } from "react"


function App() {


  const [selectedRating, setSelectedRating] = useState();
  
  const [isSubmitted, setIsSubmitted] = useState(false)


  function handleClickedRating(rating) {
    setSelectedRating(rating)
  }


  function handleFormSubmit(e) {
    e.preventDefault()
    setIsSubmitted(true)
  }


  return isSubmitted ? (<main className="modalThankYou">
    <img className="imageThankYou" src="./public/images/illustration-thank-you.svg" alt="" />
    <p className="selectedRating">You selected {selectedRating} out of 5</p>
    <section className="textThankYou">
      <h2 className="titleThankYou">Thank you!</h2>
      <p className="descriptionThankYou">  We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    </section>
  </main>)
  
    :
  
    <form onSubmit={handleFormSubmit} className="modal">
    <img className="image" src="./public/images/icon-star.svg" alt="" />
    <section className="text">
      <h2 className="title">How did we do?</h2>
      <p className="description">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
    </section>
    <section className="ratings">
      {[1, 2, 3, 4, 5].map((rating) => (
      <button type="button" className="rating " onClick={() => handleClickedRating(rating)}>
        {rating}
      </button>
    ))}
    </section>

    <section className="submitButton">
      <button disabled={selectedRating === undefined}>SUBMIT</button>
    </section>
      
  </form>

}

export default App
