import { useState } from "react";

import "./accordion.scss";

function Accordion({content, setContent}) {
  const toggleItem = (item) => {
    console.log('Called!')
    setContent(content.map((i) => {
      if(i.id === item.id){
        i.open = !i.open;
        console.log('TRUE');
      } else {
        console.log('FALSE');
        i.open = false;
      }

      return i;
    }));
  };

  return (
    <section className='accordion'>
      {JSON.stringify(content)}
      {content.map((item, index) => {
        return (
          <div
            key={index}
            className={`accordion__item ${item.open ? "open" : "closed"}`}
          >
            <h3
              className='accordion__item__title'
              onClick={() => {
                toggleItem(item);
              }}
            >
              {item.title}
            </h3>
            <div className='accordion__item__content'>
              <p>{item.description}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Accordion;
