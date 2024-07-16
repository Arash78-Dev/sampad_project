import { FC, PropsWithChildren } from "react";
import icon from "/assets/images/Icons/Icon.svg"

interface Props {}

const MainButton: FC<PropsWithChildren<Props>> = ({ children }) => {
  const searchParams = new URLSearchParams(window.location.search);

 const utm_source = searchParams.get("utm_source")
 const utm_medium = searchParams.get("utm_medium")
 const utm_campaign = searchParams.get("utm_campaign")
 const utm_content = searchParams.get("utm_content")
 const gclid = searchParams.get("gclid")

 const baseLink = "https://student.classino.com/auth/login"

  const addQuerytoLink = (baseLink:string) => {
    let base = baseLink;
    if(!utm_source && !utm_campaign && !utm_content && !utm_medium && !gclid) return base; 
    base = base + "?"

    if(utm_campaign) {
      base  = base + `utm_campaign=${utm_campaign}`
    }

    if(utm_source) {
      base  = base + `utm_source=${utm_source}`
    }

    if(utm_content) {
      base  = base + `utm_content=${utm_content}`
    }

    if(utm_medium) {
      base  = base + `utm_medium=${utm_medium}`
    }
    
    if(gclid) {
      base  = base + `gclid=${gclid}`
    }

    return base
  }

  return (
    <a href={addQuerytoLink(baseLink)}>
      <button
        className="flex flex-row gap-2 items-center rounded-[36px] bg-[#007AFF] 
      hover:px-6  transition-all py-2 px-3 md:py-2 md:px-4 text-white text-[14px] md:text-[16px] lg:text-[18px]"
      >
        <img src={icon} />
        <div>{children}</div>
      </button>
    </a>
  );
};

export default MainButton;
