import React, { PureComponent } from 'react';
import Img from '../Img';
import styles from './IconsBlock.less';


class IconsBlock extends PureComponent {
  state = {
      current : 'mail'
  };

  render() {
      const { items } = this.props;

      return (
          <div className='icons-block-wrapper'>
              {items.map((item, index) => (
                  <div key={index+1} className='block-item'>
                      <Img className='icon' src={item.icon} />
                      <div className='big-number'>
                          {item.boldText}
                      </div>
                      <div className='text'>
                          {item.text}
                      </div>
                  </div>
              ))}
          </div>
      );
  }
}

export default IconsBlock;
