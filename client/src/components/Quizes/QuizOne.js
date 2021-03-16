// import React from "react";
// import { render } from "react-dom";
// import Header from "./header";
// import Slider from "react-animated-slider";
// import "react-animated-slider/build/horizontal.css";
// import "normalize.css/normalize.css";
// import "./slider-animations.css";
// import "./styles.css";

// const content = [
//   {
//     title: "Vulputate Mollis Ultricies Fermentum Parturient",
//     description:
//       "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
//     button: "Read More",
//     image: "https://i.imgur.com/ZXBtVw7.jpg",
//     user: "Luan Gjokaj",
//     userProfile: "https://i.imgur.com/JSW6mEk.png"
//   },
//   {
//     title: "Tortor Dapibus Commodo Aenean Quam",
//     description:
//       "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
//     button: "Discover",
//     image: "https://i.imgur.com/DCdBXcq.jpg",
//     user: "Erich Behrens",
//     userProfile: "https://i.imgur.com/0Clfnu7.png"
//   },
//   {
//     title: "Phasellus volutpat metus",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
//     button: "Buy now",
//     image: "https://i.imgur.com/DvmN8Hx.jpg",
//     user: "Bruno Vizovskyy",
//     userProfile: "https://i.imgur.com/4KeKvtH.png"
//   },
//   {
//     title: "Ultricies Vulputate Mollis Fermentum Parturient",
//     description:
//       "Aenean eu leo quam. Pellentesque ornare sem lacinia  nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
//     button: "Read More",
//     image: "https://i.imgur.com/ZXBtVw7.jpg",
//     user: "Luan Gjokaj",
//     userProfile: "https://i.imgur.com/JSW6mEk.png"
//   },
//   {
//     title: "odo Aenean Quam Tortor Dapimodo Aenean Quam",
//     description:
//       "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis  purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
//     button: "Discover",
//     image: "https://i.imgur.com/DCdBXcq.jpg",
//     user: "Erich Behrens",
//     userProfile: "https://i.imgur.com/0Clfnu7.png"
//   },
//   {
//     title: "volutpat Aenean metus",
//     description:
//       "quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentumconsectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
//     button: "Buy now",
//     image: "https://i.imgur.com/DvmN8Hx.jpg",
//     user: "Bruno Vizovskyy",
//     userProfile: "https://i.imgur.com/4KeKvtH.png"
//   }
// ];

// function SliderItem({ item }) {
//   return (
//     <div
//       className="slider-content"
//       style={{ background: `url('${item.image}') no-repeat center center` }}
//     >
//       <div className="inner">
//         <h1>{item.title}</h1>
//         <p>{item.description}</p>
//         <button>{item.button}</button>
//       </div>
//       <section>
//         <img src={item.userProfile} alt={item.user} />
//         <span>
//           Posted by <strong>{item.user}</strong>
//         </span>
//       </section>
//     </div>
//   );
// }

// const App = () => (
//   <div>
//     <Header />

//     <div className="page">
//       <div className="center">
//         <a href="https://circleci.com/gh/erichbehrens/react-animated-slider/tree/master">
//           <img
//             src="https://circleci.com/gh/erichbehrens/react-animated-slider/tree/master.svg?style=shield"
//             alt="CircleCI"
//           />
//         </a>
//         &nbsp;
//         <a href="https://www.npmjs.com/package/react-animated-slider">
//           <img
//             src="https://img.shields.io/npm/v/react-animated-slider.svg"
//             alt="version"
//           />
//         </a>
//         &nbsp;
//         <a href="https://www.npmjs.com/package/react-animated-slider">
//           <img
//             src="https://img.shields.io/npm/dt/react-animated-slider.svg"
//             alt="downloads"
//           />
//         </a>
//         &nbsp;
//         <a href="https://github.com/erichbehrens/react-animated-slider">
//           <img src="https://img.shields.io/github/stars/erichbehrens/react-animated-slider.svg?style=social&label=Stars" />
//         </a>
//       </div>
//     </div>
//     <h1>DEMO</h1>
//     <h1>1 element</h1>
//     <Slider className="slider-wrapper">
//       {content.slice(0, 1).map((item, index) => (
//         <div
//           key={index}
//           className="slider-content"
//           style={{ background: `url('${item.image}') no-repeat center center` }}
//         >
//           <div className="inner">
//             <h1>{item.title}</h1>
//             <p>{item.description}</p>
//             <button>{item.button}</button>
//           </div>
//           <section>
//             <img src={item.userProfile} alt={item.user} />
//             <span>
//               Posted by <strong>{item.user}</strong>
//             </span>
//           </section>
//         </div>
//       ))}
//     </Slider>

//     <h1>2 elements</h1>
//     <Slider className="slider-wrapper">
//       {content.slice(0, 2).map((item, index) => (
//         <div
//           key={index}
//           className="slider-content"
//           style={{ background: `url('${item.image}') no-repeat center center` }}
//         >
//           <div className="inner">
//             <h1>{item.title}</h1>
//             <p>{item.description}</p>
//             <button>{item.button}</button>
//           </div>
//           <section>
//             <img src={item.userProfile} alt={item.user} />
//             <span>
//               Posted by <strong>{item.user}</strong>
//             </span>
//           </section>
//         </div>
//       ))}
//     </Slider>

//     <h1>3 elements</h1>
//     <Slider className="slider-wrapper">
//       {content.slice(0, 3).map((item, index) => (
//         <div
//           key={index}
//           className="slider-content"
//           style={{ background: `url('${item.image}') no-repeat center center` }}
//         >
//           <div className="inner">
//             <h1>{item.title}</h1>
//             <p>{item.description}</p>
//             <button>{item.button}</button>
//           </div>
//           <section>
//             <img src={item.userProfile} alt={item.user} />
//             <span>
//               Posted by <strong>{item.user}</strong>
//             </span>
//           </section>
//         </div>
//       ))}
//     </Slider>

//     <h1>{content.length} elements</h1>
//     <Slider className="slider-wrapper">
//       {content.map((item, index) => (
//         <div
//           key={index}
//           className="slider-content"
//           style={{ background: `url('${item.image}') no-repeat center center` }}
//         >
//           <div className="inner">
//             <h1>{item.title}</h1>
//             <p>{item.description}</p>
//             <button>{item.button}</button>
//           </div>
//           <section>
//             <img src={item.userProfile} alt={item.user} />
//             <span>
//               Posted by <strong>{item.user}</strong>
//             </span>
//           </section>
//         </div>
//       ))}
//     </Slider>

//     <h1>{content.length} elements autoplay 1s</h1>
//     <Slider className="slider-wrapper" autoplay={1000}>
//       {content.map((item, index) => (
//         <div
//           key={index}
//           className="slider-content"
//           style={{ background: `url('${item.image}') no-repeat center center` }}
//         >
//           <div className="inner">
//             <h1>{item.title}</h1>
//             <p>{item.description}</p>
//             <button>{item.button}</button>
//           </div>
//           <section>
//             <img src={item.userProfile} alt={item.user} />
//             <span>
//               Posted by <strong>{item.user}</strong>
//             </span>
//           </section>
//         </div>
//       ))}
//     </Slider>

//     <h1>{content.length} elements touch disabled</h1>
//     <Slider className="slider-wrapper" touchDisabled>
//       {content.map((item, index) => (
//         <div
//           key={index}
//           className="slider-content"
//           style={{ background: `url('${item.image}') no-repeat center center` }}
//         >
//           <div className="inner">
//             <h1>{item.title}</h1>
//             <p>{item.description}</p>
//             <button>{item.button}</button>
//           </div>
//           <section>
//             <img src={item.userProfile} alt={item.user} />
//             <span>
//               Posted by <strong>{item.user}</strong>
//             </span>
//           </section>
//         </div>
//       ))}
//     </Slider>

//     <h1>Dynamic elements</h1>
//     <DynamicSlider />
//   </div>
// );

// class DynamicSlider extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { items: ['iusndcinoijs', 2, 3, 4, 5], lastItem: 5 };
//   }

//   add() {
//     const lastItem = this.state.lastItem + 1;
//     this.setState({ lastItem, items: [...this.state.items, lastItem] });
//   }

//   pop(len) {
//     const lastItem = this.state.lastItem - len;
//     this.setState({ lastItem, items: this.state.items.slice(0, -len) });
//   }

//   render() {
//     return (
//       <div>
//         {this.state.items.join(", ")}
//         <Slider className="slider-wrapper">
//           {this.state.items.map(item => (
//             <div key={item} style={{ "text-align": "center" }}>
//               {item}
//             </div>
//           ))}
//         </Slider>
//         <button onClick={() => this.add()}>Add 1</button>
//         <button onClick={() => this.pop(1)}>Remove 1</button>
//         <button onClick={() => this.pop(3)}>Remove 3</button>
//       </div>
//     );
//   }
// }

import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const QuizOne = ({ text }) => {
  const [key, setKey] = useState(1);

  const scrolling = useSpring({
    from: { transform: "translate(60%,0)" },
    to: { transform: "translate(-60%,0)" },
    config: { duration: 10000 },
    reset: true,
    //reverse: key % 2 == 0,
    // onRest: () => {
    //   setKey(key + 2);
    // }
  });

  return (
    <div key={key}>
      <animated.div style={scrolling}>{text}</animated.div>
    </div>
  );
};

export default QuizOne;
