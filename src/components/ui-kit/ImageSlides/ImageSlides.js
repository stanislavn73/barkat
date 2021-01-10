import React, { useState } from 'react';
import cx from 'classnames';
import Img from '../Img';

import './ImageSlides.less';


function ProjectsFourthBlock({ data }) {
  const [activeSlide, setActiveSlide] = useState('');

  function handleSetActiveSlide(id) {
    return () => {
      setActiveSlide(activeSlide === id ? '' : id);
    };
  }

  return (
    <div className='slides'>
      
      {data.map(project => {
        const slideCX = cx(
          'slide-wrapper',
          {
            'slide-wrapper_active': project.id === activeSlide,
            'slide-wrapper_unactive': activeSlide && project.id !== activeSlide
          }
        );

        return (
          <div key={project.id} className={slideCX} onClick={handleSetActiveSlide(project.id)}>
            
            {project.title &&
              <div className='title'>
                {project.title}
              </div>
            }
            <Img src={project.thumbnail} />
          </div>
        );
      })}
    </div>
  );
}

export default React.memo(ProjectsFourthBlock);