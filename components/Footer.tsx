import { FOOTER_LINKS,FOOTER_CONTACT_INFO,SOCIALS } from "@/constants";
import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import { type } from "os";
import React from "react";

const Footer = () => {
  return (
    <section className="md:m-20 md:px-40 m-10">
      <div className="grid grid-cols-1 gap-8 md:flex md:flex-row">
        <div>
          <Image
            src="hilink-logo.svg"
            alt="logo"
            height={100}
            width={100}
          ></Image>
        </div>
        <div className="flex md:flex-row gap-5">
          {FOOTER_LINKS.map((columns)=>(
            <FooterColumn title={columns.title}> 
            <ul className="flex flex-col gap-3">
              {columns.links.map((link)=>(
                <Link href="/" key={link}>
                  {link}
                </Link>
              ))}
            </ul>
            </FooterColumn>
          ))}
        </div>
        <div className="flex flex-col">
         <FooterColumn title={FOOTER_CONTACT_INFO.title}>
          {FOOTER_CONTACT_INFO.links.map((link)=>(
            <Link href="/" key={link.label} >
              <p>
                {link.label}
              </p>
              <p>
                {link.value}
              </p>
            </Link>
          ))}
         </FooterColumn>
        </div>
        <div>
          <FooterColumn title={SOCIALS.title}>
            {SOCIALS.links.map((link)=>(
              <Link href="/" key={link}>
                {link}
              </Link>
            ))}
          </FooterColumn>
        </div>
      </div>
    </section>
  );
};

type FooterColumnProps={
  title:string;
  children:React.ReactNode;
}

const FooterColumn = ({title,children}:FooterColumnProps)=>{
  return(
    <div className="flex flex-col gap-5">
      <h4 className="bold-18">
        {title}
      </h4>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Footer;
