import React from 'react';
import FullPage from '../ui-kit/FullPage';
import { HeaderThumb } from '../ui-kit/Header';
// import "./HomePage.less";

class Eventpage extends React.PureComponent {

  render() {
    return (
      <>
        <HeaderThumb />
        <FullPage >
          {/* <Slider
            title='Barkat Stein'
            slides={mainSlides}
            titlesControl={titlesRules}
          /> */}
        </FullPage>
      </>
    );
  }
}

export default Eventpage;
