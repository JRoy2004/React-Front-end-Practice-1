import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Link = (link) => (
  <li
    className={`font-poppins font-normal text-[16px] leading-6 text-dimWhite hover:text-secondary cursor-pointer `}
  >
    <a href={link.link}>{link.name}</a>
  </li>
);

const FooterElement = (footerlink) => (
  <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
    <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
      {footerlink.title}
    </h4>
    <ul className="list-none flex flex-col gap-3 mt-6">
      {footerlink.links.map((link, index) => (
        <Link key={link.name} {...link} />
      ))}
    </ul>
  </div>
);

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexCenter} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>
      <div className="flex-[1.5] w-full flex md:flex-row flex-col justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((link, index) => (
          <FooterElement key={index} {...link} />
        ))}
      </div>
    </div>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
      <p className="font-poppins text-[18px] leading-[27px] text-dimWhite">
        Copyright © 2024 HooBank. All Rights Reserved.
      </p>
      <div className="flex flex-row md:mt-0 mt-6 gap-6">
        {socialMedia.map((social, index) => (
          <a href={social.link} className="glowing">
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain`}
            />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
