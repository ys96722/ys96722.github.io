import React, { Component } from "react";
require("./Card.style.scss");

// const cardContainer = document.querySelector(".react-card");

// React component for form inputs
// class CardInput extends Component {
//   render() {
//     return (
//       <fieldset>
//         <input
//           name={this.props.name}
//           id={this.props.id}
//           type={this.props.type || "text"}
//           placeholder={this.props.placeholder}
//           required
//         />
//       </fieldset>
//     );
//   }
// }

// // React component for textarea
// class CardTextarea extends Component {
//   render() {
//     return (
//       <fieldset>
//         <textarea
//           name={this.props.name}
//           id={this.props.id}
//           placeholder={this.props.placeholder}
//           required
//         />
//       </fieldset>
//     );
//   }
// }

// // React component for form button
// class CardBtn extends Component {
//   render() {
//     return (
//       <fieldset>
//         <button
//           className={this.props.className}
//           type={this.props.type}
//           value={this.props.value}
//         >
//           {this.props.value}
//         </button>
//       </fieldset>
//     );
//   }
// }

// // React component for social profile links
// class CardProfileLinks extends Component {
//   render() {
//     const profileLinks = ["twitter", "linkedin", "dribbble", "facebook"];

//     const linksList = profileLinks.map((link, index) => (
//       <li key={index}>
//         <a href="#">
//           <i className={"fa fa-" + link} />
//         </a>
//       </li>
//     ));

//     return (
//       <div className="card-social-links">
//         <ul className="social-links">{linksList}</ul>
//       </div>
//     );
//   }
// }

// React component for the front side of the card
class CardFront extends Component {
  render() {
    return (
      <div className="card-side side-front">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-6">
              <img
                src={require("../../assets/website_banners/native_hero.png")}
              />
            </div>

            <div className="col-xs-6 side-front-content">
              <h2>Native Roots Landscape and Design</h2>

              <h1>Web Developer</h1>

              <p>Worked on the website as the Web Developer.</p>

              {/* <p>
                He is currently the founder of Dvorak Media. Previously, Andrey
                was a product designer at Dropbox.
              </p>

              <p>
                Over the years, Michael has been priviledged to have worked with
                Adobe, Evernote, Square and more.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// React component for the back side of the card
class CardBack extends Component {
  render() {
    return (
      <div className="card-side side-back">
        <div className="container-fluid">
          <h1>Let's get in touch!</h1>

          <form formAction="" className="card-form">
            <div className="row">
              <div className="col-xs-6" />

              <div className="col-xs-6" />
            </div>

            <div className="row">
              <div className="col-xs-6" />

              <div className="col-xs-6" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

// React component for the card (main component)
class Card extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="card-body">
          <CardBack />

          <CardFront />
        </div>
      </div>
    );
  }
}

export default Card;
