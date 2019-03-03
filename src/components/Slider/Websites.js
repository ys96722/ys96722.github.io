import React, { Component } from "react";
import CardList from "../Card/CardList";





export default class Websites extends Component {
  state = {
    website_infos: [
      {
      name: "Yooniverse",
      tool: "React",
      tools:
      "Front: React.js, Styled-Components\nDatabase: MySQL, PHPMyAdmin\nVersion Control: Git",
      imgPath: require("../../assets/hero.jpeg"),
      bgSize: "cover",
      popupInfo: {
        title: "Yooniverse",
        link: "#",
        images: [
          require("../../assets/hero.jpeg"),
          require("../../assets/hero.JPG"),
          require("../../assets/hero.JPG")
        ],
        content:
          "Culpa adipisicing elit officia ut ea. Aliquip laborum commodo aliqua cupidatat est sint veniam est. Deserunt veniam voluptate labore magna anim nisi quis voluptate et. Ex non incididunt culpa Lorem nostrud mollit consequat ipsum. Do non ea qui nostrud eiusmod laborum Lorem anim dolor reprehenderit minim. Velit mollit commodo ex fugiat voluptate non magna consequat. Velit ex occaecat voluptate laborum nostrud incididunt nostrud mollit enim sint ut esse ipsum.",
        testimonial: "He is a great man.",
        people: `Developer: Yoon Chang`
      }
      }, {
        name: "Native Roots",
        tool: "WordPress",
        tools:
          "CMS: WordPress\nFront: JavaScript, HTML5, CSS3\nServer: PHP\nDatabase: MySQL, PHPMyAdmin",
        imgPath: require("../../assets/website_banners/native_hero.png"),
        bgSize: "cover",
        popupInfo: {
          title: "Native Roots",
          link: "https://nativerootsdesign.org/",
          images: [
            require("../../assets/hero.jpeg"),
            require("../../assets/hero.JPG"),
            require("../../assets/hero.JPG")
          ],
          content:
            "Culpa adipisicing elit officia ut ea. Aliquip laborum commodo aliqua cupidatat est sint veniam est. Deserunt veniam voluptate labore magna anim nisi quis voluptate et. Ex non incididunt culpa Lorem nostrud mollit consequat ipsum. Do non ea qui nostrud eiusmod laborum Lorem anim dolor reprehenderit minim. Velit mollit commodo ex fugiat voluptate non magna consequat. Velit ex occaecat voluptate laborum nostrud incididunt nostrud mollit enim sint ut esse ipsum.",
          testimonial: "He is a great man.",
          people: `Developer: Yoon Chang\nGraphic Designer: Sophia Presutti \nProject Manager: Zamar El Zimra Rimba`
        }
      }, {
        name: "KoJobs",
        tool: "WordPress",
        tools:
          "CMS: WordPress\nFront: JavaScript, HTML5, CSS3\nServer: PHP\nDatabase: MySQL, PHPMyAdmin",
        imgPath: require("../../assets/website_banners/kojobs_hero2.png"),
        bgSize: "cover",
        popupInfo: {
          title: "KoJobs",
          link: "https://kojobsillinois.com/",
          images: [
            require("../../assets/hero.jpeg"),
            require("../../assets/hero.JPG"),
            require("../../assets/hero.JPG")
          ],
          content:
            "Culpa adipisicing elit officia ut ea. Aliquip laborum commodo aliqua cupidatat est sint veniam est. Deserunt veniam voluptate labore magna anim nisi quis voluptate et. Ex non incididunt culpa Lorem nostrud mollit consequat ipsum. Do non ea qui nostrud eiusmod laborum Lorem anim dolor reprehenderit minim. Velit mollit commodo ex fugiat voluptate non magna consequat. Velit ex occaecat voluptate laborum nostrud incididunt nostrud mollit enim sint ut esse ipsum.",
          testimonial: "He is a great man.",
          people: `Developer: Yoon Chang\nGraphic Designer: Ina Kang`
        }
      },
      {
        name: "Ability Marketplace",
        tool: "WordPress",
        tools:
          "CMS: WordPress\nFront: JavaScript, HTML5, CSS3\nServer: PHP\nDatabase: MySQL, PHPMyAdmin",
        imgPath: require("../../assets/website_banners/ability_logo.png"),
        bgSize: "cover",
        popupInfo: {
          title: "Ability Marketplace",
          link: "https://abilitymarketplace.com/",
          images: [
            require("../../assets/hero.jpeg"),
            require("../../assets/hero.JPG"),
            require("../../assets/hero.JPG")
          ],
          content:
            "Culpa adipisicing elit officia ut ea. Aliquip laborum commodo aliqua cupidatat est sint veniam est. Deserunt veniam voluptate labore magna anim nisi quis voluptate et. Ex non incididunt culpa Lorem nostrud mollit consequat ipsum. Do non ea qui nostrud eiusmod laborum Lorem anim dolor reprehenderit minim. Velit mollit commodo ex fugiat voluptate non magna consequat. Velit ex occaecat voluptate laborum nostrud incididunt nostrud mollit enim sint ut esse ipsum.",
          testimonial: "He is a great man.",
          people: `Developer: Yoon Chang\nGraphic Designer: Sophia Presutti \nProject Manager: Zamar El Zimra Rimba\nContent Developer: Alyson Gerdes`
        }
      },
      {
        name: "2XL Logistics",
        tool: "WordPress",
        tools:
          "CMS: WordPress\nFront: JavaScript, HTML5, CSS3\nServer: PHP\nDatabase: MySQL, PHPMyAdmin",
        imgPath: require("../../assets/website_banners/2xl_blue_logo.png"),
        bgSize: "contain",
        popupInfo: {
          title: "2XL Logistics",
          link: "https://2xllogistics.com/",
          images: [
            require("../../assets/hero.jpeg"),
            require("../../assets/hero.JPG"),
            require("../../assets/hero.JPG")
          ],
          content:
            "Culpa adipisicing elit officia ut ea. Aliquip laborum commodo aliqua cupidatat est sint veniam est. Deserunt veniam voluptate labore magna anim nisi quis voluptate et. Ex non incididunt culpa Lorem nostrud mollit consequat ipsum. Do non ea qui nostrud eiusmod laborum Lorem anim dolor reprehenderit minim. Velit mollit commodo ex fugiat voluptate non magna consequat. Velit ex occaecat voluptate laborum nostrud incididunt nostrud mollit enim sint ut esse ipsum.",
          testimonial: "He is a great man.",
          people: `Developer: Yoon Chang\nGraphic Designer: Alyssa Lenenfeld\nProject Manager: Zamar El Zimra Rimba\nContent Developer: Alyson Gerdes`
        }
      },
      {
        name: "Simbiosys",
        tool: "WordPress",
        tools:
          "CMS: WordPress\nFront: JavaScript, HTML5, CSS3\nServer: PHP\nDatabase: MySQL, PHPMyAdmin",
        imgPath: require("../../assets/website_banners/simbiosys_hero.png"),
        bgSize: "cover",
        popupInfo: {
          title: "Simbiosys",
          link: "https://simbiosys.tech/",
          images: [
            require("../../assets/hero.jpeg"),
            require("../../assets/hero.JPG"),
            require("../../assets/hero.JPG")
          ],
          content:
            "Culpa adipisicing elit officia ut ea. Aliquip laborum commodo aliqua cupidatat est sint veniam est. Deserunt veniam voluptate labore magna anim nisi quis voluptate et. Ex non incididunt culpa Lorem nostrud mollit consequat ipsum. Do non ea qui nostrud eiusmod laborum Lorem anim dolor reprehenderit minim. Velit mollit commodo ex fugiat voluptate non magna consequat. Velit ex occaecat voluptate laborum nostrud incididunt nostrud mollit enim sint ut esse ipsum.",
          testimonial: "He is a great man.",
          people: `Developer: Yoon Chang\nGraphic Designer: Charlotte Peloquin & Sophia Presutti \nProject Manager: Zamar El Zimra Rimba\nContent Developer: Alia Bellwood`
        }
      },
      {
        name: "Traverse Science",
        tool: "WordPress",
        tools:
          "CMS: WordPress\nFront: JavaScript, HTML5, CSS3\nServer: PHP\nDatabase: MySQL, PHPMyAdmin",
        imgPath: require("../../assets/website_banners/traverse_logo.png"),
        bgSize: "contain",
        popupInfo: {
          title: "Traverse Science",
          link: "https://traversescience.com/",
          images: [
            require("../../assets/hero.jpeg"),
            require("../../assets/hero.JPG"),
            require("../../assets/hero.JPG")
          ],
          content:
            "Culpa adipisicing elit officia ut ea. Aliquip laborum commodo aliqua cupidatat est sint veniam est. Deserunt veniam voluptate labore magna anim nisi quis voluptate et. Ex non incididunt culpa Lorem nostrud mollit consequat ipsum. Do non ea qui nostrud eiusmod laborum Lorem anim dolor reprehenderit minim. Velit mollit commodo ex fugiat voluptate non magna consequat. Velit ex occaecat voluptate laborum nostrud incididunt nostrud mollit enim sint ut esse ipsum.",
          testimonial: "He is a great man.",
          people: `Developer: Yoon Chang\nGraphic Designer: Charlotte Peloquin\nProject Manager: Zamar El Zimra Rimba\nContent Developer: Leah Lines`
        }
      }
    ]
  };

  render() {
    return (
      <CardList
        infos={this.state.website_infos}
        numCols="3"
        numRows="3"
        cardWidth="31"
        togglePopup={this.props.togglePopup}
      />
    );
  }
}
