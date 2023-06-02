import React from "react"
import "./FAQ.css"
import { useState } from "react"
import { GrAdd } from "react-icons/gr"
import { GrSubtract } from "react-icons/gr"

const FAQ = () => {
  const data = [
    {
      question: "How much do I earn for a 1hr public speaking gig?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, neque mollitia! Doloremque dolorem, explicabo tempore maiores a eum quos deleniti veniam non, error, nobis officiis praesentium. Repellat deserunt suscipit libero."
    },
    {
      question: "Can I hire more than 1 Speaker at a time?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, neque mollitia! Doloremque dolorem, explicabo tempore maiores a eum quos deleniti veniam non, error, nobis officiis praesentium. Repellat deserunt suscipit libero."
    },
    {
      question: `Will there be a refund if I’m not statisfied with my 
      Speaker’s Presentation?`,
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, neque mollitia! Doloremque dolorem, explicabo tempore maiores a eum quos deleniti veniam non, error, nobis officiis praesentium. Repellat deserunt suscipit libero."
    },
    {
      question: `Will there be a refund if I’m not statisfied with my 
      Speakers Presentation?`,
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, neque mollitia! Doloremque dolorem, explicabo tempore maiores a eum quos deleniti veniam non, error, nobis officiis praesentium. Repellat deserunt suscipit libero."
    },
    {
      question: `How much does it cost to register as a Speaker or 
      Event Coordinator?`,
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, neque mollitia! Doloremque dolorem, explicabo tempore maiores a eum quos deleniti veniam non, error, nobis officiis praesentium. Repellat deserunt suscipit libero."
    },
    {
      question: "How long does it take to find a Speaker of my choice?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, neque mollitia! Doloremque dolorem, explicabo tempore maiores a eum quos deleniti veniam non, error, nobis officiis praesentium. Repellat deserunt suscipit libero."
    }
  ]

  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  return (
    <div className='FAQ'>
      <h1>SPEFIND FAQs</h1>
      <div className='accordion'>
        {data.map((item, i, key) => (
          <div className='item' key={key}>
            <div className='title' onClick={() => toggle(i)}>
              <h2>{item.question}</h2>
              <span className='more'>{selected === i ? <GrSubtract /> : <GrAdd />}</span>
            </div>
            <div className={selected === i ? "show" : "content"}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ
