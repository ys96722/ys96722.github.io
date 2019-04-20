import React, { Component } from "react";
import CardList from "../Card/CardList";
import { blue } from "../../style/variables";
import { A, Text } from "../../style/types";
import { sizes } from "../../style/media";

let profile_urls = {
  sophia: "https://sophiapresutti.com/",
  charlotte: "https://charlottepeloquin.myportfolio.com/",
  zamar: "https://www.linkedin.com/in/zamarrimba/",
  alia: "https://www.linkedin.com/in/aliabellwood/",
  alyson: "https://www.linkedin.com/in/alyson-gerdes-236a3a126/",
  alyssa: "https://www.linkedin.com/in/alyssa-lenenfeld-62b77a169/",
  leah: "https://www.linkedin.com/in/leah-lines-8201b1128/",
  ina: "https://www.linkedin.com/in/inhwa-ina-kang-3a25ab176/",
  james: "https://www.jpt.design/",
  haley: "https://www.happygohayley.com/",
  shreya: "https://www.linkedin.com/in/shreya-goel-43703017b/",
  eugene: "https://www.linkedin.com/in/eugene-white-244587125/"
};

export default class Websites extends Component {
  state = {
    website_infos: [
      {
        name: "Yooniverse",
        tool: "React",
        tools: "Front: React.js\nVersion Control: Git",
        imgPath: require("../../assets/finalHero.jpeg"),
        bgSize: "cover",
        popupInfo: {
          title: "Yooniverse",
          link: "#",
          images: [
            require("../../assets/yooniverse/yooniverse1.png"),
            require("../../assets/yooniverse/yooniverse2.png"),
            require("../../assets/yooniverse/yooniverse3.png"),
            require("../../assets/yooniverse/yooniverse4.png")
          ],
          content:
            "Portfolio website developed using React.js hosted on GitHub Pages. Key dependencies include Styled-Components, Redux, and Axios.",
          // testimonial: "He is a great man.",
          people: (
            <Text>
              Developer: Yoon Chang
              <br />
              <br />
              Photographer:{" "}
              <A href={profile_urls.ina} target="_blank">
                Ina Kang
              </A>{" "}
            </Text>
          ),
          color: blue
        }
      },

      {
        name: "SimBioSys",
        tool: "WordPress",
        tools:
          "CMS: WordPress\nFront: JavaScript (jQuery), HTML5, CSS3\nServer: PHP\nDatabase: MySQL, PHPMyAdmin",
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
            "Website developed for a cancer treatment biotechnology start-up as the Lead Web Developer at EnterpriseWorks. Tools used include JavaScript, HTML5, and CSS5 for front-end, PHP for server-side, MySQL and PHPMyAdmin for Database, and WordPress for CMS.\n\n(There may be some content/design differences from the images on the left as the client may have changed their website.)",
          testimonial: `"Yoon did a fantastic job translating our idea for a website into practice. He was quick and responsive, went above and beyond in the design, and offered great "after sale" services. Moreover, he took an interest in our technology above and beyond what was required for creating the website. I highly recommend him for web development."\n\n- Joseph Peterson, Co-Founder of SimBioSys Inc.`,
          people: (
            <Text>
              Developer: Yoon Chang
              <br />
              <br />
              Graphic Designer:{" "}
              <A href={profile_urls.charlotte} target="_blank">
                Charlotte Peloquin
              </A>{" "}
              <br />
              Graphic Designer:{" "}
              <A href={profile_urls.sophia} target="_blank">
                Sophia Presutti
              </A>
              <br />
              <br />
              Project Manager:{" "}
              <A href={profile_urls.zamar} target="_blank">
                Zamar El Zimra Rimba
              </A>
              <br />
              <br />
              Content Developer:{" "}
              <A href={profile_urls.alia} target="_blank">
                Alia Bellwood
              </A>
            </Text>
          ),
          color: "#74A8B8"
        }
      },
      {
        name: "Native Roots",
        tool: "WordPress",
        tools:
          "CMS: WordPress\nFront: JavaScript (jQuery), HTML5, CSS3\nServer: PHP\nDatabase: MySQL, PHPMyAdmin",
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
            "Website developed for a landscaping company as the Lead Web Developer at EnterpriseWorks. Tools used include Adobe XD for prototyping, JavaScript, HTML5, and CSS5 for front-end, PHP for server-side, MySQL and PHPMyAdmin for Database, and WordPress for CMS.\n\n(There may be some content/design differences from the images on the left as the client may have changed their website.)",
          testimonial: `"Yoon has been tremendously helpful in every step of creating my new business website.  He was very professional, kind, and passionate during the whole process. Thank you!"\n\n- Ryan Cox, Owner of Native Roots Landscape Design`,
          people: (
            <Text>
              Developer: Yoon Chang
              <br />
              <br />
              Graphic Designer:{" "}
              <A href={profile_urls.sophia} target="_blank">
                Sophia Presutti
              </A>
              <br />
              <br />
              Project Manager:{" "}
              <A href={profile_urls.zamar} target="_blank">
                Zamar El Zimra Rimba
              </A>
            </Text>
          ),

          color: "#527B5D"
        }
      },
      {
        name: "KoJobs",
        tool: "WordPress",
        tools:
          "CMS: WordPress\nFront: JavaScript (jQuery), HTML5, CSS3\nServer: PHP\nDatabase: MySQL, PHPMyAdmin",
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
          content: `Website developed for a career development student organization that I have been part of for almost three years. Tools used include JavaScript, HTML5, and CSS5 for front-end, PHP for server-side, MySQL and PHPMyAdmin for Database, and WordPress for CMS.`,
          // testimonial: "He is a great man.",
          people: (
            <Text>
              Developer: Yoon Chang
              <br />
              <br />
              Illustrator:{" "}
              <A href={profile_urls.ina} target="_blank">
                Ina Kang
              </A>
              <br />
              Graphic Designer: Yoon Chang
            </Text>
          ),
          color: "#174872"
        }
      },

      {
        name: "Ability Marketplace",
        tool: "WordPress",
        tools:
          "CMS: WordPress\nFront: JavaScript (jQuery), HTML5, CSS3\nServer: PHP\nDatabase: MySQL, PHPMyAdmin",
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
            "Website developed for an entrepreneurial agency as the Lead Web Developer at EnterpriseWorks. Tools used include JavaScript, HTML5, and CSS5 for front-end, PHP for server-side, MySQL and PHPMyAdmin for Database, and WordPress for CMS.\n\n(There may be some content/design differences from the images on the left as the client may have changed their website.)",
          // "I worked on the website for an entreprenurial agency as the Lead Web Developer at EnterpriseWorks"
          testimonial: `"The team for the website includes Zamar El Zimra Rimba, Sophia Anne Presutti, Alyson Gerdes, and Yoon S. Chang... They spent countless hours refining the concept and the message for the website. They became very passionate about the Ability Marketplace. We are so grateful to have them on our team."\n\n-Theresa Grimaldi Olsen, COO of Ability Marketplace`,
          people: (
            <Text>
              Developer: Yoon Chang
              <br />
              <br />
              Graphic Designer:{" "}
              <A href={profile_urls.sophia} target="_blank">
                Sophia Presutti
              </A>
              <br />
              <br />
              Project Manager:{" "}
              <A href={profile_urls.zamar} target="_blank">
                Zamar El Zimra Rimba
              </A>
              <br />
              <br />
              Content Developer:{" "}
              <A href={profile_urls.alyson} target="_blank">
                Alyson Gerdes
              </A>
            </Text>
          ),
          color: "#E7AA22"
        }
      },
      {
        name: "Insigna",
        tool: "WordPress",
        tools:
          "CMS: WordPress\nFront: JavaScript (jQuery), HTML5, CSS3\nServer: PHP\nDatabase: MySQL, PHPMyAdmin",
        imgPath: require("../../assets/website_banners/insigna_hero.png"),
        bgSize: "cover",
        popupInfo: {
          title: "Insigna",
          link: "http://insigna.co/",
          images: [
            require("../../assets/insigna/insigna1.png"),
            require("../../assets/insigna/insigna2.png"),
            require("../../assets/insigna/insigna3.png"),
            require("../../assets/insigna/insigna4.png")
          ],
          content:
            "Website developed for a animal biotechnology start-up as the Lead Web Developer at EnterpriseWorks. Tools used include JavaScript, HTML5, and CSS5 for front-end, PHP for server-side, MySQL and PHPMyAdmin for Database, and WordPress for CMS.",
          // testimonial: `"Yoon did a fantastic job translating our idea for a website into practice. He was quick and responsive, went above and beyond in the design, and offered great "after sale" services. Moreover, he took an interest in our technology above and beyond what was required for creating the website. I highly recommend him for web development."\n\n- Joseph Peterson, Co-Founder of SimBioSys Inc.`,
          people: (
            <Text>
              Developer: Yoon Chang
              <br />
              <br />
              Lead Graphic Designer:{" "}
              <A href={profile_urls.james} target="_blank">
                James Tran
              </A>{" "}
              <br />
              Graphic Designer:{" "}
              <A href={profile_urls.haley} target="_blank">
                Haley Peterson
              </A>
              <br />
              <br />
              Project Manager:{" "}
              <A href={profile_urls.zamar} target="_blank">
                Zamar El Zimra Rimba
              </A>
              <br />
              <br />
              Content Developer:{" "}
              <A href={profile_urls.shreya} target="_blank">
                Shreya Goel
              </A>
              <br />
              Content Developer:{" "}
              <A href={profile_urls.eugene} target="_blank">
                Eugene White
              </A>
            </Text>
          ),
          color: "#AF8A75"
        }
      },
      {
        name: "2XL Logistics",
        tool: "WordPress",
        tools:
          "CMS: WordPress\nFront: JavaScript (jQuery), HTML5, CSS3\nServer: PHP\nDatabase: MySQL, PHPMyAdmin",
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
            "Website developed for a logistics company as the Lead Web Developer at EnterpriseWorks. Tools used include JavaScript, HTML5, and CSS5 for front-end, PHP for server-side, MySQL and PHPMyAdmin for Database, and WordPress for CMS.\n\n(There may be some content/design differences from the images on the left as the client may have changed their website.)",
          testimonial: `"On behalf of my brother Le'Mon Bass and myself we would like to take this opportunity to extend our sincere thanks and appreciation to you and your team for the dedication and hard work you all put into the completion of our website. It all came together in a timely fashion and we are confident that this will give our small business the extra edge to successfully compete in the extremely competitive e-commerce and logistical arena in the Midwest corridor."\n\n-LaMar Q. Bass, Owner of 2XL Logistics LLC`,
          people: (
            <Text>
              Developer: Yoon Chang
              <br />
              <br />
              Graphic Designer:{" "}
              <A href={profile_urls.alyssa} target="_blank">
                Alyssa Lenenfeld
              </A>
              <br />
              <br />
              Project Manager:{" "}
              <A href={profile_urls.zamar} target="_blank">
                Zamar El Zimra Rimba
              </A>
              <br />
              <br />
              Content Developer:{" "}
              <A href={profile_urls.alyson} target="_blank">
                Alyson Gerdes
              </A>
            </Text>
          ),
          color: "#806144"
        }
      },
      {
        name: "Traverse Science",
        tool: "WordPress",
        tools:
          "CMS: WordPress\nFront: JavaScript (jQuery), HTML5, CSS3\nServer: PHP\nDatabase: MySQL, PHPMyAdmin",
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
            "Website developed for an clinical research company as the Lead Web Developer at EnterpriseWorks. Tools used include JavaScript, HTML5, and CSS5 for front-end, PHP for server-side, MySQL and PHPMyAdmin for Database, and WordPress for CMS.\n\n(There may be some content/design differences from the images on the left as the client may have changed their website.)",
          testimonial: `“We worked with Yoon as part of the Shared Services Program at EnterpriseWorks where he helped us build our website through Wordpress. Yoon was very professional, responsive, and excellent at communicating. Beyond building the website to specifications, he was always available by phone and worked on off-hours to help bolster the security of our site when we were unable to. We appreciated his ability to distill complex web development issues to a level we could understand.”\n\n- Stephen Flemming, President and Co-founder of Traverse Science Inc.
            `,
          people: (
            <Text>
              Developer: Yoon Chang
              <br />
              <br />
              Graphic Designer:{" "}
              <A href={profile_urls.charlotte} target="_blank">
                Charlotte Peloquin
              </A>
              <br />
              <br />
              Project Manager:{" "}
              <A href={profile_urls.zamar} target="_blank">
                Zamar El Zimra Rimba
              </A>
              <br />
              <br />
              Content Developer:{" "}
              <A href={profile_urls.leah} target="_blank">
                Leah Lines
              </A>
            </Text>
          ),
          color: "#48AEE3" //"rgba(33,150,243,1)"
        }
      }
    ]
  };

  render() {
    let size = window.innerWidth;
    let numCols = 3;
    let numRows = 3;
    let cardWidth = 31;
    // if (size <= sizes.phone)
    if (size <= 680) {
      numCols = 1;
      numRows = 8;
      cardWidth = 100;
    } else if (size <= 1150) {
      numCols = 2;
      numRows = 4;
      cardWidth = 50;
    }
    return (
      <CardList
        infos={this.state.website_infos}
        // numCols={numCols}
        // numRows={numRows}
        // cardWidth={cardWidth}
        togglePopup={this.props.togglePopup}
      />
    );
  }
}
