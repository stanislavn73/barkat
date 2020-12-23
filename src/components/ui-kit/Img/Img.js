import React from 'react'


export default function Img({ src, className, ...rest }) {
    return (
        <img src={src} className={className} {...rest} loading='lazy' />
    );
}
// class Img extends React.Component {
//   state = {
//       image : null,
//       fade  : false
//   }

//   componentDidMount = async () => {
//       const { src, className } = this.props;

//       const response = await fetch(src.src);
//       const blob = await response.blob();

//       this.blobToBase64(blob);
//   }

//   blobToBase64 = (blob) => {
//       const reader = new FileReader();

//       reader.readAsDataURL(blob);
//       reader.onloadend = () => {
//           const base64data = reader.result;

//           this.setState({ image: base64data });

//           setTimeout(() => this.setState({ fade: true }), 0);
//       };
//   }

//   render() {
//       const { src, className, ...rest } = this.props;
//       const { image, fade } = this.state;

//       const srcCX = cx(
//           {
//               [className]   : true,
//               'src-opacity' : true,
//               'fade-in'     : fade
//           }
//       );

//       const traceCX = cx(
//           {
//               [className]     : true,
//               'trace-opacity' : true,
//               'fade-out'      : fade
//           }
//       );

//       return (
//           <>
//               {!image && <img src={src.trace} className={traceCX} {...rest} />}
//               {image && <img src={image} className={srcCX} {...rest} />}
//           </>
//       );
//   }
// }

// export default Img;
