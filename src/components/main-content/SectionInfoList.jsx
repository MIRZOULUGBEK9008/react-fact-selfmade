import React, { createElement } from 'react'

function SectionInfoList() {
  const listInfo = [
    {id: 1, text: "Was first released in 2013"},
    {id: 2, text: "Was originally created by Jordan Walke"},
    {id: 3, text: "Has well over 100K stars on GitHub"},
    {id: 4, text: "Is maintained by Facebook"},
    {id: 5, text: `Powers thousands of enterprise apps, including mobile apps`}
  ]

  return (
    <section className="section-info">
    <div className="section-info__container container">
    <h1 className="section-info__title">Fun facts about React</h1>
    <ul className='section-info__list list-info'>
    {
      listInfo.map((info) => {
        return (
          <li className='list-info__item' key={info.id}>{info.text}</li>
          )
        })
      }
      </ul>
      </div>
      </section>
      )
    }
    export default SectionInfoList