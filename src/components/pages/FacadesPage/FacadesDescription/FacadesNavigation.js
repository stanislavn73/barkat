import React from 'react';
import Divider from '../BlockDivider';
import './FacadesDescription.less';

const navs = [{
  id: 0,
  title: 'Фасад МРАМОР / ДОЛОМИТ / ТРАВЕРТИН'
}, {
  id: 1,
  title: 'Фасад КЛИНКЕРСТОУН'
}, {
  id: 2,
  title: 'Фасад ТЕРРАКОТОВЫЕ ПАНЕЛИ'
}, {
  id: 3,
  title: 'Фасад КЕРАМОГРАНИТ'
}, {
  id: 4,
  title: 'Фасад ИСКУССТВЕННЫЙ КАМЕНЬ'
}]

const handleScrollToAnchor = id => () => { // eslint-disable-line
  const scrollContainer = document.getElementById('root');
  const element = document.getElementById(id);

  const yOffset = -100;
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: 'smooth' });


  // element.scrollIntoView({
  //   behavior: 'smooth'
  // });
  // window.scrollBy(0, -10);
};

export default function FacadesDescription({ anchors }) {
  return (
    <div className="facades-description-wrapper">
      <Divider className='facades-nav-divider' />
      <ul>
        {anchors.map(navItem => <li key={navItem.id} onClick={handleScrollToAnchor(navItem.id)} >{navItem.title}</li>)}
      </ul>
      <Divider className='facades-nav-divider' />
    </div>
  )
}