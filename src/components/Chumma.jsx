import React from "react";
import { ArrowRight } from "./ArrowRight";
import { Artificium } from "./Artificium";
import { Attachment } from "./Attachment";
import { Bulb } from "./Bulb";
import { Code } from "./Code";
import { CommentCircle } from "./CommentCircle";
import { CreditCard } from "./CreditCard";
import { Edit } from "./Edit";
import { Folder } from "./Folder";
import { IconComponentNode } from "./IconComponentNode";
import { MessageInput } from "./MessageInput";
import { Microphone } from "./Microphone";
import { Octagon } from "./Octagon";
import { PaperPlane } from "./PaperPlane";
import { Pencil } from "./Pencil";
import { Search } from "./Search";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { Triangle } from "./Triangle";

export const ArtificiumScreen = () => {
  return (
    <div className="flex min-h-screen items-start gap-[12px] p-[12px] relative bg-noble-black700">
      <Sidebar
        avatarClassName="bg-[url(/avatar-3.png)]"
        className="!self-stretch !h-[unset]"
        footerClassName="!bg-transparent"
        icon={<Search className="!relative !w-[38.83px] !h-[39.42px] !mb-[-19.42px] !ml-[-9.42px]" />}
        navigationItemIcon={<CreditCard className="!relative !w-[40.5px] !h-[38.58px] !mb-[-18.58px] !ml-[-10.25px]" />}
        navigationItemIcon1={
          <Octagon className="!relative !w-[40.5px] !h-[40.5px] !mt-[-0.25px] !mb-[-20.25px] !ml-[-10.25px]" />
        }
        override={<Triangle className="!relative !w-[39.7px] !h-[40.25px] !mb-[-20.25px] !ml-[-9.85px]" />}
        userAvatarPersonAdamGreenClassName="bg-[url(/avatar-2.png)] !relative"
      />
      <div className="flex flex-col items-start gap-[12px] relative flex-1 self-stretch grow">
        <TopBar
          avatarClassName="bg-[url(/avatar-5.png)]"
          avatarClassNameOverride="bg-[url(/avatar-6.png)]"
          avatarPersonAdamGreenClassName="!border-noble-black800 !h-[40px] !mt-[-4.00px] !rounded-[12px] !ml-[-4.00px] !mb-[-4.00px] !border-4 !border-solid !z-[4] bg-[url(/avatar-4.png)] !relative !w-[40px]"
          avatarPersonAdamGreenClassNameOverride="!border-noble-black800 !h-[40px] !mt-[-4.00px] !rounded-[12px] !ml-[-4px] !mb-[-4.00px] !border-4 !border-solid !z-[1] bg-[url(/avatar-7.png)] !relative !w-[40px]"
          buttonIconIcon={
            <Edit className="!relative !w-[20px] !h-[20px] !ml-[-6.00px] !mr-[-6.00px]" color="#CDCECF" />
          }
          className="!self-stretch !flex-[0_0_auto] !w-full"
          override={
            <CommentCircle className="!relative !w-[40.5px] !h-[40.5px] !mt-[-0.25px] !mb-[-20.25px] !ml-[-10.25px]" />
          }
          tab={<Artificium className="!relative !w-[40.5px] !h-[40.5px] !mt-[-0.25px] !mb-[-20.25px] !ml-[-10.25px]" />}
          tab1={<Folder className="!relative !w-[40.5px] !h-[40.5px] !mt-[-0.25px] !mb-[-20.25px] !ml-[-10.25px]" />}
        />
        <div className="flex flex-col items-center justify-center gap-[64px] relative flex-1 self-stretch w-full grow">
          <div className="inline-flex flex-col items-center gap-[16px] relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-heading-m-bold font-[number:var(--heading-m-bold-font-weight)] text-noble-black0 text-[length:var(--heading-m-bold-font-size)] tracking-[var(--heading-m-bold-letter-spacing)] leading-[var(--heading-m-bold-line-height)] whitespace-nowrap [font-style:var(--heading-m-bold-font-style)]">
              Innovation Starter Pack
            </div>
            <p className="relative w-fit font-body-l-medium font-[number:var(--body-l-medium-font-weight)] text-noble-black300 text-[length:var(--body-l-medium-font-size)] text-center tracking-[var(--body-l-medium-letter-spacing)] leading-[var(--body-l-medium-line-height)] whitespace-nowrap [font-style:var(--body-l-medium-font-style)]">
              Kickstart your innovation process with our comprehensive selection of predefined prompts.
            </p>
          </div>
          <div className="flex items-start gap-[64px] px-[52px] py-0 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-[32px] relative flex-1 grow">
              <div className="flex-col justify-center gap-[16px] flex items-center relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex w-[48px] h-[48px] items-center justify-center gap-[16px] px-[16px] py-[14px] relative rounded-[56px] border-t [border-top-style:solid] border-glassstroke shadow-[0px_0px_64px_#b6f09c29] [background:linear-gradient(180deg,rgba(215.22,236.94,236.94,0.16)_0%,rgba(204.48,234.81,234.81,0)_100%)]">
                  <IconComponentNode className="!relative !w-[40.5px] !h-[40.5px] !mt-[-0.25px] !mb-[-20.25px] !ml-[-12.25px] !mr-[-12.25px]" />
                </div>
                <div className="relative self-stretch font-body-XL-semibold font-[number:var(--body-XL-semibold-font-weight)] text-white text-[length:var(--body-XL-semibold-font-size)] text-center tracking-[var(--body-XL-semibold-letter-spacing)] leading-[var(--body-XL-semibold-line-height)] [font-style:var(--body-XL-semibold-font-style)]">
                  Creative Assets
                </div>
              </div>
              <div className="flex flex-col items-start gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-center gap-[8px] p-[16px] relative self-stretch w-full flex-[0_0_auto] rounded-[12px] overflow-hidden border-t [border-top-style:solid] border-glassstroke [background:linear-gradient(180deg,rgba(215.22,236.94,236.94,0.16)_0%,rgba(204.48,234.81,234.81,0)_100%)]">
                  <div className="relative flex-1 mt-[-1.00px] font-body-m-semibold font-[number:var(--body-m-semibold-font-weight)] text-noble-black200 text-[length:var(--body-m-semibold-font-size)] tracking-[var(--body-m-semibold-letter-spacing)] leading-[var(--body-m-semibold-line-height)] [font-style:var(--body-m-semibold-font-style)]">
                    UI wireframe
                  </div>
                  <ArrowRight className="!relative !w-[16px] !h-[16px]" />
                </div>
                <div className="flex items-center gap-[8px] p-[16px] relative self-stretch w-full flex-[0_0_auto] rounded-[12px] overflow-hidden border-t [border-top-style:solid] border-glassstroke [background:linear-gradient(180deg,rgba(215.22,236.94,236.94,0.16)_0%,rgba(204.48,234.81,234.81,0)_100%)]">
                  <div className="relative flex-1 mt-[-1.00px] font-body-m-semibold font-[number:var(--body-m-semibold-font-weight)] text-noble-black200 text-[length:var(--body-m-semibold-font-size)] tracking-[var(--body-m-semibold-letter-spacing)] leading-[var(--body-m-semibold-line-height)] [font-style:var(--body-m-semibold-font-style)]">
                    Brochure design
                  </div>
                  <ArrowRight className="!relative !w-[16px] !h-[16px]" />
                </div>
                <div className="flex items-center gap-[8px] p-[16px] relative self-stretch w-full flex-[0_0_auto] rounded-[12px] overflow-hidden border-t [border-top-style:solid] border-glassstroke [background:linear-gradient(180deg,rgba(215.22,236.94,236.94,0.16)_0%,rgba(204.48,234.81,234.81,0)_100%)]">
                  <div className="relative flex-1 mt-[-1.00px] font-body-m-semibold font-[number:var(--body-m-semibold-font-weight)] text-noble-black200 text-[length:var(--body-m-semibold-font-size)] tracking-[var(--body-m-semibold-letter-spacing)] leading-[var(--body-m-semibold-line-height)] [font-style:var(--body-m-semibold-font-style)]">
                    Social media
                  </div>
                  <ArrowRight className="!relative !w-[16px] !h-[16px]" />
                </div>
                <div className="flex items-center gap-[8px] p-[16px] relative self-stretch w-full flex-[0_0_auto] rounded-[12px] overflow-hidden border-t [border-top-style:solid] border-glassstroke [background:linear-gradient(180deg,rgba(215.22,236.94,236.94,0.16)_0%,rgba(204.48,234.81,234.81,0)_100%)]">
                  <div className="relative flex-1 mt-[-1.00px] font-body-m-semibold font-[number:var(--body-m-semibold-font-weight)] text-noble-black200 text-[length:var(--body-m-semibold-font-size)] tracking-[var(--body-m-semibold-letter-spacing)] leading-[var(--body-m-semibold-line-height)] [font-style:var(--body-m-semibold-font-style)]">
                    Brand guidelines
                  </div>
                  <ArrowRight className="!relative !w-[16px] !h-[16px]" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-[32px] relative flex-1 grow">
              <div className="flex-col justify-center gap-[16px] flex items-center relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex w-[48px] h-[48px] items-center justify-center gap-[16px] px-[16px] py-[14px] relative rounded-[56px] border-t [border-top-style:solid] border-glassstroke shadow-[0px_0px_64px_#82dbf729] [background:linear-gradient(180deg,rgba(215.22,236.94,236.94,0.16)_0%,rgba(204.48,234.81,234.81,0)_100%)]">
                  <Code className="!relative !w-[39.81px] !h-[37.75px] !mb-[-17.75px] !ml-[-11.91px] !mr-[-11.90px]" />
                </div>
                <div className="relative self-stretch font-body-XL-semibold font-[number:var(--body-XL-semibold-font-weight)] text-white text-[length:var(--body-XL-semibold-font-size)] text-center tracking-[var(--body-XL-semibold-letter-spacing)] leading-[var(--body-XL-semibold-line-height)] [font-style:var(--body-XL-semibold-font-style)]">
                  Developer Tools
                </div>
              </div>
              <div className="flex flex-col items-start gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-center gap-[8px] p-[16px] relative self-stretch w-full flex-[0_0_auto] rounded-[12px] overflow-hidden border-t [border-top-style:solid] border-glassstroke [background:linear-gradient(180deg,rgba(215.22,236.94,236.94,0.16)_0%,rgba(204.48,234.81,234.81,0)_100%)]">
                  <div className="relative flex-1 mt-[-1.00px] font-body-m-semibold font-[number:var(--body-m-semibold-font-weight)] text-noble-black200 text-[length:var(--body-m-semibold-font-size)] tracking-[var(--body-m-semibold-letter-spacing)] leading-[var(--body-m-semibold-line-height)] [font-style:var(--body-m-semibold-font-style)]">
                    API Integration
                  </div>
                  <ArrowRight className="!relative !w-[16px] !h-[16px]" />
                </div>
                <div className="flex items-center gap-[8px] p-[16px] relative self-stretch w-full flex-[0_0_auto] rounded-[12px] overflow-hidden border-t [border-top-style:solid] border-glassstroke [background:linear-gradient(180deg,rgba(215.22,236.94,236.94,0.16)_0%,rgba(204.48,234.81,234.81,0)_100%)]">
                  <div className="relative flex-1 mt-[-1.00px] font-body-m-semibold font-[number:var(--body-m-semibold-font-weight)] text-noble-black200 text-[length:var(--body-m-semibold-font-size)] tracking-[var(--body-m-semibold-letter-spacing)] leading-[var(--body-m-semibold-line-height)] [font-style:var(--body-m-semibold-font-style)]">
                    Test automation
                  </div>
                  <ArrowRight className="!relative !w-[16px] !h-[16px]" />
                </div>
                <div className="flex items-center gap-[8px] p-[16px] relative self-stretch w-full flex-[0_0_auto] rounded-[12px] overflow-hidden border-t [border-top-style:solid] border-glassstroke [background:linear-gradient(180deg,rgba(215.22,236.94,236.94,0.16)_0%,rgba(204.48,234.81,234.81,0)_100%)]">
                  <div className="relative flex-1 mt-[-1.00px] font-body-m-semibold font-[number:var(--body-m-semibold-font-weight)] text-noble-black200 text-[length:var(--body-m-semibold-font-size)] tracking-[var(--body-m-semibold-letter-spacing)] leading-[var(--body-m-semibold-line-height)] [font-style:var(--body-m-semibold-font-style)]">
                    DB optimization
                  </div>
                  <ArrowRight className="!relative !w-[16px] !h-[16px]" />
                </div>
                <div className="flex items-center gap-[8px] p-[16px] relative self-stretch w-full flex-[0_0_auto] rounded-[12px] overflow-hidden border-t [border-top-style:solid] border-glassstroke [background:linear-gradient(180deg,rgba(215.22,236.94,236.94,0.16)_0%,rgba(204.48,234.81,234.81,0)_100%)]">
                  <div className="relative flex-1 mt-[-1.00px] font-body-m-semibold font-[number:var(--body-m-semibold-font-weight)] text-noble-black200 text-[length:var(--body-m-semibold-font-size)] tracking-[var(--body-m-semibold-letter-spacing)] leading-[var(--body-m-semibold-line-height)] [font-style:var(--body-m-semibold-font-style)]">
                    Code review
                  </div>
                  <ArrowRight className="!relative !w-[16px] !h-[16px]" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-[32px] relative flex-1 grow">
              <div className="flex-col justify-center gap-[16px] flex items-center relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex w-[48px] h-[48px] items-center justify-center gap-[16px] px-[16px] py-[14px] relative rounded-[56px] border-t [border-top-style:solid] border-glassstroke shadow-[0px_0px_64px_#bd9af829] [background:linear-gradient(180deg,rgba(215.22,236.94,236.94,0.16)_0%,rgba(204.48,234.81,234.81,0)_100%)]">
                  <Pencil className="!relative !w-[38px] !h-[39.42px] !mb-[-19.42px] !ml-[-11.42px] !mr-[-10.59px]" />
                </div>
                <div className="relative self-stretch font-body-XL-semibold font-[number:var(--body-XL-semibold-font-weight)] text-white text-[length:var(--body-XL-semibold-font-size)] text-center tracking-[var(--body-XL-semibold-letter-spacing)] leading-[var(--body-XL-semibold-line-height)] [font-style:var(--body-XL-semibold-font-style)]">
                  Content Creation
                </div>
              </div>
              <div className="flex flex-col items-start gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-center gap-[8px] p-[16px] relative self-stretch w-full flex-[0_0_auto] rounded-[12px] overflow-hidden border-t [border-top-style:solid] border-glassstroke [background:linear-gradient(180deg,rgba(215.22,236.94,236.94,0.16)_0%,rgba(204.48,234.81,234.81,0)_100%)]">
                  <div className="relative flex-1 mt-[-1.00px] font-body-m-semibold font-[number:var(--body-m-semibold-font-weight)] text-noble-black200 text-[length:var(--body-m-semibold-font-size)] tracking-[var(--body-m-semibold-letter-spacing)] leading-[var(--body-m-semibold-line-height)] [font-style:var(--body-m-semibold-font-style)]">
                    Product description
                  </div>
                  <ArrowRight className="!relative !w-[16px] !h-[16px]" />
                </div>
                <div className="flex items-center gap-[8px] p-[16px] relative self-stretch w-full flex-[0_0_auto] rounded-[12px] overflow-hidden border-t [border-top-style:solid] border-glassstroke [background:linear-gradient(180deg,rgba(215.22,236.94,236.94,0.16)_0%,rgba(204.48,234.81,234.81,0)_100%)]">
                  <div className="relative flex-1 mt-[-1.00px] font-body-m-semibold font-[number:var(--body-m-semibold-font-weight)] text-noble-black200 text-[length:var(--body-m-semibold-font-size)] tracking-[var(--body-m-semibold-letter-spacing)] leading-[var(--body-m-semibold-line-height)] [font-style:var(--body-m-semibold-font-style)]">
                    E-mail copy
                  </div>
                  <ArrowRight className="!relative !w-[16px] !h-[16px]" />
                </div>
                <div className="flex items-center gap-[8px] p-[16px] relative self-stretch w-full flex-[0_0_auto] rounded-[12px] overflow-hidden border-t [border-top-style:solid] border-glassstroke [background:linear-gradient(180deg,rgba(215.22,236.94,236.94,0.16)_0%,rgba(204.48,234.81,234.81,0)_100%)]">
                  <div className="relative flex-1 mt-[-1.00px] font-body-m-semibold font-[number:var(--body-m-semibold-font-weight)] text-noble-black200 text-[length:var(--body-m-semibold-font-size)] tracking-[var(--body-m-semibold-letter-spacing)] leading-[var(--body-m-semibold-line-height)] [font-style:var(--body-m-semibold-font-style)]">
                    Whitepaper
                  </div>
                  <ArrowRight className="!relative !w-[16px] !h-[16px]" />
                </div>
                <div className="flex items-center gap-[8px] p-[16px] relative self-stretch w-full flex-[0_0_auto] rounded-[12px] overflow-hidden border-t [border-top-style:solid] border-glassstroke [background:linear-gradient(180deg,rgba(215.22,236.94,236.94,0.16)_0%,rgba(204.48,234.81,234.81,0)_100%)]">
                  <div className="relative flex-1 mt-[-1.00px] font-body-m-semibold font-[number:var(--body-m-semibold-font-weight)] text-noble-black200 text-[length:var(--body-m-semibold-font-size)] tracking-[var(--body-m-semibold-letter-spacing)] leading-[var(--body-m-semibold-line-height)] [font-style:var(--body-m-semibold-font-style)]">
                    Press release
                  </div>
                  <ArrowRight className="!relative !w-[16px] !h-[16px]" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-[32px] relative flex-1 grow">
              <div className="flex-col justify-center gap-[16px] flex items-center relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex w-[48px] h-[48px] items-center justify-center gap-[16px] px-[16px] py-[14px] relative rounded-[56px] border-t [border-top-style:solid] border-glassstroke shadow-[0px_0px_64px_#ffd14729] [background:linear-gradient(180deg,rgba(215.22,236.94,236.94,0.16)_0%,rgba(204.48,234.81,234.81,0)_100%)]">
                  <Bulb className="!relative !w-[35.5px] !h-[40.5px] !mt-[-0.25px] !mb-[-20.25px] !ml-[-9.75px] !mr-[-9.75px]" />
                </div>
                <div className="relative self-stretch font-body-XL-semibold font-[number:var(--body-XL-semibold-font-weight)] text-white text-[length:var(--body-XL-semibold-font-size)] text-center tracking-[var(--body-XL-semibold-letter-spacing)] leading-[var(--body-XL-semibold-line-height)] [font-style:var(--body-XL-semibold-font-style)]">
                  Idea Generation
                </div>
              </div>
              <div className="flex flex-col items-start gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-center gap-[8px] p-[16px] relative self-stretch w-full flex-[0_0_auto] rounded-[12px] overflow-hidden border-t [border-top-style:solid] border-glassstroke [background:linear-gradient(180deg,rgba(215.22,236.94,236.94,0.16)_0%,rgba(204.48,234.81,234.81,0)_100%)]">
                  <div className="relative flex-1 mt-[-1.00px] font-body-m-semibold font-[number:var(--body-m-semibold-font-weight)] text-noble-black200 text-[length:var(--body-m-semibold-font-size)] tracking-[var(--body-m-semibold-letter-spacing)] leading-[var(--body-m-semibold-line-height)] [font-style:var(--body-m-semibold-font-style)]">
                    Hashtag ideas
                  </div>
                  <ArrowRight className="!relative !w-[16px] !h-[16px]" />
                </div>
                <div className="flex items-center gap-[8px] p-[16px] relative self-stretch w-full flex-[0_0_auto] rounded-[12px] overflow-hidden border-t [border-top-style:solid] border-glassstroke [background:linear-gradient(180deg,rgba(215.22,236.94,236.94,0.16)_0%,rgba(204.48,234.81,234.81,0)_100%)]">
                  <div className="relative flex-1 mt-[-1.00px] font-body-m-semibold font-[number:var(--body-m-semibold-font-weight)] text-noble-black200 text-[length:var(--body-m-semibold-font-size)] tracking-[var(--body-m-semibold-letter-spacing)] leading-[var(--body-m-semibold-line-height)] [font-style:var(--body-m-semibold-font-style)]">
                    Brainstorming
                  </div>
                  <ArrowRight className="!relative !w-[16px] !h-[16px]" />
                </div>
                <div className="flex items-center gap-[8px] p-[16px] relative self-stretch w-full flex-[0_0_auto] rounded-[12px] overflow-hidden border-t [border-top-style:solid] border-glassstroke [background:linear-gradient(180deg,rgba(215.22,236.94,236.94,0.16)_0%,rgba(204.48,234.81,234.81,0)_100%)]">
                  <div className="relative flex-1 mt-[-1.00px] font-body-m-semibold font-[number:var(--body-m-semibold-font-weight)] text-noble-black200 text-[length:var(--body-m-semibold-font-size)] tracking-[var(--body-m-semibold-letter-spacing)] leading-[var(--body-m-semibold-line-height)] [font-style:var(--body-m-semibold-font-style)]">
                    Trend analysis
                  </div>
                  <ArrowRight className="!relative !w-[16px] !h-[16px]" />
                </div>
                <div className="flex items-center gap-[8px] p-[16px] relative self-stretch w-full flex-[0_0_auto] rounded-[12px] overflow-hidden border-t [border-top-style:solid] border-glassstroke [background:linear-gradient(180deg,rgba(215.22,236.94,236.94,0.16)_0%,rgba(204.48,234.81,234.81,0)_100%)]">
                  <div className="relative flex-1 mt-[-1.00px] font-body-m-semibold font-[number:var(--body-m-semibold-font-weight)] text-noble-black200 text-[length:var(--body-m-semibold-font-size)] tracking-[var(--body-m-semibold-letter-spacing)] leading-[var(--body-m-semibold-line-height)] [font-style:var(--body-m-semibold-font-style)]">
                    Social media posts
                  </div>
                  <ArrowRight className="!relative !w-[16px] !h-[16px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <MessageInput
          buttonIconIcon={<Microphone className="!relative !w-[24px] !h-[24px] !ml-[-12.00px] !mr-[-12.00px]" />}
          buttonIconIcon1={
            <PaperPlane className="!relative !w-[24px] !h-[24px] !ml-[-12.00px] !mr-[-12.00px]" color="#CDCECF" />
          }
          className="!self-stretch !flex-[0_0_auto] !w-full"
          override={<Attachment className="!relative !w-[24px] !h-[24px] !ml-[-12.00px] !mr-[-12.00px]" />}
        />
      </div>
    </div>
  );
};
