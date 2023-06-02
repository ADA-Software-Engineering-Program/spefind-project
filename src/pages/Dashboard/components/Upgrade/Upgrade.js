import React, { useState } from "react"
import "./Upgrade.css"

const Upgrade = () => {
  const [isMonthlyPlan, setIsMonthlyPlan] = useState(true)

  return (
    <div className='upgradeContainer'>
      <div className='d-flex justify-content-center gap-3 align-items-center'>
        <button className={isMonthlyPlan ? "btn-orange" : "btn-orange-line"} onClick={() => setIsMonthlyPlan(true)}>
          Monthly Plan
        </button>
        <button className={isMonthlyPlan ? "btn-orange-line" : "btn-orange"} onClick={() => setIsMonthlyPlan(false)}>
          Yearly Plan
        </button>
      </div>

      <div className='upgradeBox mx-auto my-5 w-100 p-5'>
        <span className='upgradeType'>Free</span>
        <p className='text-center fw-bold fs-5 mb-2'>
          No charges applied <br /> ₦0.00
        </p>

        <div>
          <div className='upgradeOption d-flex gap-3 align-items-center mb-3'>
            <span></span> <p>Publish your communicator profile</p>
          </div>
          <div className='upgradeOption d-flex gap-3 align-items-center mb-3'>
            <span></span> <p>Add 1 photo or slide</p>
          </div>
          <div className='upgradeOption d-flex gap-3 align-items-center mb-3'>
            <span></span> <p>Limited visibility</p>
          </div>
          <div className='upgradeOption d-flex gap-3 align-items-center mb-3'>
            <span></span> <p>A few free speaking opportunities</p>
          </div>
          <div className='upgradeOption d-flex gap-3 align-items-center mb-3'>
            <span></span> <p>Event organizers can contact you</p>
          </div>
          <div className='upgradeOption d-flex gap-3 align-items-center mb-3'>
            <span></span> <p>Speaking tips and helpful articles</p>
          </div>
          <div className='upgradeOption d-flex gap-3 align-items-center mb-3'>
            <span></span> <p>No commission or transaction fee</p>
          </div>
        </div>
      </div>

      <div className='upgradeBox mx-auto my-5 w-100 p-5'>
        <span className='upgradeType'>Paid</span>
        <p className='text-center fw-bold fs-5 mb-2'>
          Charges Applied <br /> {isMonthlyPlan ? "₦5,000 /m" : "₦50,000 /yr"}
        </p>

        <div>
          <div className='upgradeOption d-flex gap-3 align-items-center mb-3'>
            <span></span> <p>Publish your communicator profile</p>
          </div>
          <div className='upgradeOption d-flex gap-3 align-items-center mb-3'>
            <span></span> <p>Unlimited photos, slides, and videos</p>
          </div>
          <div className='upgradeOption d-flex gap-3 align-items-center mb-3'>
            <span></span> <p>Unlimited visibility</p>
          </div>
          <div className='upgradeOption d-flex gap-3 align-items-center mb-3'>
            <span></span> <p>All free speaking opportunities</p>
          </div>
          <div className='upgradeOption d-flex gap-3 align-items-center mb-3'>
            <span></span> <p>Exclusive content and Webinars</p>
          </div>
          <div className='upgradeOption d-flex gap-3 align-items-center mb-3'>
            <span></span> <p>Event organizers can contact you</p>
          </div>
          <div className='upgradeOption d-flex gap-3 align-items-center mb-3'>
            <span></span> <p>Recommended speaking opportunities</p>
          </div>
          <div className='upgradeOption d-flex gap-3 align-items-center mb-3'>
            <span></span> <p>Get featured in search </p>
          </div>
          <div className='upgradeOption d-flex gap-3 align-items-center mb-3'>
            <span></span> <p>Detailed profile statistics </p>
          </div>
          <div className='upgradeOption d-flex gap-3 align-items-center mb-3'>
            <span></span> <p>Share presentations publicly </p>
          </div>
          <div className='upgradeOption d-flex gap-3 align-items-center mb-3'>
            <span></span> <p>Add workshop or training agendas. </p>
          </div>
        </div>

        <div>
          <button disabled className='btn-disabled mx-auto d-block mt-5 mb-3'>
            Free 30-Day Trial
          </button>
          <button className='btn-green mx-auto d-block'>Select</button>
        </div>
      </div>
    </div>
  )
}

export default Upgrade
