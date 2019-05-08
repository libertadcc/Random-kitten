import React from 'react';
import RandomCat from './RandomCat';

class CatList extends React.Component {
  render() {
    return (
      <section className="section-cats">
        <h1>All Cats Are Beautiful</h1>
        <ul className="section-cats_list">
          <li>
            <RandomCat ancho={400} />
          </li>
          <li>
            <RandomCat ancho={200}/>
          </li>
          <li>
            <RandomCat alto={100} />
          </li>
        </ul>
      </section>
    );
  }
}

export default CatList;