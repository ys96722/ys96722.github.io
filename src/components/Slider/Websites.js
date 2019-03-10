import React, { Component } from "react";
import CardList from "../Card/CardList";
import { blue } from "../../style/variables";
import { A, P } from "../../style/types"

let profile_urls = {
  sophia: "https://sophiapresutti.com/",
  charlotte: "https://charlottepeloquin.myportfolio.com/",
  zamar: "https://www.linkedin.com/in/zamarrimba/",
  alia: "https://www.linkedin.com/in/aliabellwood/",
  alyson: "https://www.linkedin.com/in/alyson-gerdes-236a3a126/",
  alyssa: "https://www.linkedin.com/in/alyssa-lenenfeld-62b77a169/",
  leah: "https://www.linkedin.com/in/leah-lines-8201b1128/",
  ina: "https://www.linkedin.com/in/inhwa-ina-kang-3a25ab176/"
}

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
            require("../../assets/yooniverse/yooniverse1.png"),
            require("../../assets/yooniverse/yooniverse2.png")
          ],
          content:
            "Culpa adipisicing elit officia ut ea. Aliquip laborum commodo aliqua cupidatat est sint veniam est. Deserunt veniam voluptate labore magna anim nisi quis voluptate et. Ex non incididunt culpa Lorem nostrud mollit consequat ipsum. Do non ea qui nostrud eiusmod laborum Lorem anim dolor reprehenderit minim. Velit mollit commodo ex fugiat voluptate non magna consequat. Velit ex occaecat voluptate laborum nostrud incididunt nostrud mollit enim sint ut esse ipsum.",
          // testimonial: "He is a great man.",
          people: `Developer: Yoon Chang\n\nPhotographer: Ina Kang`,
          color: blue
        }
      },
      {
        name: "SimBioSys",
        tool: "WordPress",
        tools:
          "CMS: WordPress\nFront: JavaScript, HTML5, CSS3\nServer: PHP\nDatabase: MySQL, PHPMyAdmin",
        imgPath: require("../../assets/website_banners/simbiosys_hero.png"),
        bgSize: "cover",
        popupInfo: {
          title: "SimBioSys",
          link: "https://simbiosys.tech/",
          images: [
            require("../../assets/simbiosys/simbiosys1.png"),
            require("../../assets/simbiosys/simbiosys2.png"),
            require("../../assets/simbiosys/simbiosys3.png")
          ],
          content:
            "Culpa adipisicing elit officia ut ea. Aliquip laborum commodo aliqua cupidatat est sint veniam est. Deserunt veniam voluptate labore magna anim nisi quis voluptate et. Ex non incididunt culpa Lorem nostrud mollit consequat ipsum. Do non ea qui nostrud eiusmod laborum Lorem anim dolor reprehenderit minim. Velit mollit commodo ex fugiat voluptate non magna consequat. Velit ex occaecat voluptate laborum nostrud incididunt nostrud mollit enim sint ut esse ipsum.",
          testimonial: `"Yoon did a fantastic job translating our idea for a website into practice. He was quick and responsive, went above and beyond in the design, and offered great "after sale" services. Moreover, he took an interest in our technology above and beyond what was required for creating the website. I highly recommend him for web development."\n\n- Joseph Peterson, Co-Founder of SimBioSys Inc.`,
          people: <P>
            Developer: Yoon Chang
            <br /><br />Graphic Designer: <A href={profile_urls.charlotte} target="_blank">Charlotte Peloquin</A> <A href={profile_urls.sophia} target="_blank">Sophia Presutti</A>
            <br /><br />Project Manager: <A href={profile_urls.zamar} target="_blank">Zamar El Zimra Rimba</A>
            <br /><br />Content Developer: <A href={profile_urls.alia} target="_blank">Alia Bellwood</A>
            </P>,
          color: "#74A8B8"
        }
      },
      {
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
            require("../../assets/native/native1.png"),
            require("../../assets/native/native2.png"),
            require("../../assets/native/native3.png"),
            require("../../assets/native/native4.png")
          ],
          content:
            "Culpa adipisicing elit officia ut ea. Aliquip laborum commodo aliqua cupidatat est sint veniam est. Deserunt veniam voluptate labore magna anim nisi quis voluptate et. Ex non incididunt culpa Lorem nostrud mollit consequat ipsum. Do non ea qui nostrud eiusmod laborum Lorem anim dolor reprehenderit minim. Velit mollit commodo ex fugiat voluptate non magna consequat. Velit ex occaecat voluptate laborum nostrud incididunt nostrud mollit enim sint ut esse ipsum.",
          testimonial: `"Yoon has been tremendously helpful in every step of creating my new business website.  He was very professional, kind, and passionate during the whole process. Thank you!"\n\n- Ryan Cox, Owner of Native Roots Landscape Design`,
          people: 
          <P>
            Developer: Yoon Chang
            <br /><br />Graphic Designer: <A href={profile_urls.sophia} target="_blank">Sophia Presutti</A>
            <br /><br />Project Manager: <A href={profile_urls.zamar} target="_blank">Zamar El Zimra Rimba</A>
          </P>,
          
          color: "#527B5D"
        }
      },
      {
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
            require("../../assets/kojobs/kojobs1.png"),
            require("../../assets/kojobs/kojobs2.png"),
            require("../../assets/kojobs/kojobs3.png"),
            require("../../assets/kojobs/kojobs4.png"),
            require("../../assets/kojobs/kojobs5.png")
          ],
          content:
            "Culpa adipisicing elit officia ut ea. Aliquip laborum commodo aliqua cupidatat est sint veniam est. Deserunt veniam voluptate labore magna anim nisi quis voluptate et. Ex non incididunt culpa Lorem nostrud mollit consequat ipsum. Do non ea qui nostrud eiusmod laborum Lorem anim dolor reprehenderit minim. Velit mollit commodo ex fugiat voluptate non magna consequat. Velit ex occaecat voluptate laborum nostrud incididunt nostrud mollit enim sint ut esse ipsum.",
          testimonial: "He is a great man.",
          people: 
            <P>
              Developer: Yoon Chang
            <br /><br />Graphic Designer: <A href={profile_urls.ina} target="_blank">Ina Kang</A>
            </P>,
          color: "#174872"
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
            require("../../assets/ability/ability1.png"),
            require("../../assets/ability/ability2.png"),
            require("../../assets/ability/ability3.png"),
            require("../../assets/ability/ability4.png"),
            require("../../assets/ability/ability5.png")
          ],
          content:
            "Culpa adipisicing elit officia ut ea. Aliquip laborum commodo aliqua cupidatat est sint veniam est. Deserunt veniam voluptate labore magna anim nisi quis voluptate et. Ex non incididunt culpa Lorem nostrud mollit consequat ipsum. Do non ea qui nostrud eiusmod laborum Lorem anim dolor reprehenderit minim. Velit mollit commodo ex fugiat voluptate non magna consequat. Velit ex occaecat voluptate laborum nostrud incididunt nostrud mollit enim sint ut esse ipsum.",
          testimonial: `"The team for the website includes Zamar El Zimra Rimba, Sophia Anne Presutti, Alyson Gerdes, and Yoon S. Chang... They spent countless hours refining the concept and the message for the website. They became very passionate about the Ability Marketplace. We are so grateful to have them on our team."\n\n-Theresa Grimaldi Olsen, COO of Ability Marketplace`,
          people: 
            <P>
              Developer: Yoon Chang
            <br /><br />Graphic Designer: <A href={profile_urls.sophia} target="_blank">Sophia Presutti</A>
            <br /><br />Project Manager: <A href={profile_urls.zamar} target="_blank">Zamar El Zimra Rimba</A>
            <br /><br />Content Developer: <A href={profile_urls.alyson} target="_blank">Alyson Gerdes</A>
            </P>,
          color: "#E7AA22"
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
            require("../../assets/2xl/2xl1.png"),
            require("../../assets/2xl/2xl2.png"),
            require("../../assets/2xl/2xl3.png"),
            require("../../assets/2xl/2xl4.png")
          ],
          content:
            "Culpa adipisicing elit officia ut ea. Aliquip laborum commodo aliqua cupidatat est sint veniam est. Deserunt veniam voluptate labore magna anim nisi quis voluptate et. Ex non incididunt culpa Lorem nostrud mollit consequat ipsum. Do non ea qui nostrud eiusmod laborum Lorem anim dolor reprehenderit minim. Velit mollit commodo ex fugiat voluptate non magna consequat. Velit ex occaecat voluptate laborum nostrud incididunt nostrud mollit enim sint ut esse ipsum.",
          testimonial: `"On behalf of my brother Le'Mon Bass and myself we would like to take this opportunity to extend our sincere thanks and appreciation to you and your team for the dedication and hard work you all put into the completion of our website. It all came together in a timely fashion and we are confident that this will give our small business the extra edge to successfully compete in the extremely competitive e-commerce and logistical arena in the Midwest corridor."\n\n-LaMar Q. Bass, Owner of 2XL Logistics LLC`,
          people: 
            <P>
              Developer: Yoon Chang
              <br /><br />Graphic Designer: <A href={profile_urls.alyssa} target="_blank">Alyssa Lenenfeld</A>
              <br /><br />Project Manager: <A href={profile_urls.zamar} target="_blank">Zamar El Zimra Rimba</A>
              <br /><br />Content Developer: <A href={profile_urls.alyson} target="_blank">Alyson Gerdes</A>
            </P>,
          color: "#806144"
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
            require("../../assets/traverse/traverse1.png"),
            require("../../assets/traverse/traverse2.png"),
            require("../../assets/traverse/traverse3.png"),
            require("../../assets/traverse/traverse4.png"),
            require("../../assets/traverse/traverse5.png")
          ],
          content:
            "Culpa adipisicing elit officia ut ea. Aliquip laborum commodo aliqua cupidatat est sint veniam est. Deserunt veniam voluptate labore magna anim nisi quis voluptate et. Ex non incididunt culpa Lorem nostrud mollit consequat ipsum. Do non ea qui nostrud eiusmod laborum Lorem anim dolor reprehenderit minim. Velit mollit commodo ex fugiat voluptate non magna consequat. Velit ex occaecat voluptate laborum nostrud incididunt nostrud mollit enim sint ut esse ipsum.",
          testimonial: "He is a great man.",
          people: 
            <P>
              Developer: Yoon Chang
              <br /><br />Graphic Designer: <A href={profile_urls.charlotte} target="_blank">Charlotte Peloquin</A>
              <br /><br />Project Manager: <A href={profile_urls.zamar} target="_blank">Zamar El Zimra Rimba</A>
              <br /><br />Content Developer: <A href={profile_urls.leah} target="_blank">Leah Lines</A>
            </P>,
          color: "#48AEE3" //"rgba(33,150,243,1)"
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
