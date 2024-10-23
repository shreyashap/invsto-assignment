"use client";

import bg from "@/assets/images/bg-pattern.svg";
import bgCircle from "@/assets/images/pattern-circles.svg";
import checkboxSvg from "@/assets/images/icon-check.svg";
import slider from "@/assets/images/icon-slider.svg";
import Image from "next/image";
import React, {
  ChangeEvent,
  useState,
  useRef,
  useEffect,
  ButtonHTMLAttributes,
} from "react";

import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

type data = {
  [key: number]: { pageviews: string; monthly: number; yearly: number };
};

const pricingData: data = {
  1: { pageviews: "10K", monthly: 8, yearly: 72 },
  2: { pageviews: "50k", monthly: 12, yearly: 108 },
  3: { pageviews: "100K", monthly: 16, yearly: 144 },
  4: { pageviews: "500k", monthly: 24, yearly: 216 },
  5: { pageviews: "1M", monthly: 36, yearly: 324 },
};

const Pricing: React.FC = () => {
  const [pageviews, setPageViews] = useState<string>();
  const [price, setPrice] = useState<string>();
  const [isMonthly, setIsMonthly] = useState<boolean>(true);
  const [sliderValue, setSliderValue] = useState<number>(3);

  const [theme, setTheme] = useState<string>("light");

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSliderValue(Number(e.target.value));
  };

  // useEffect(() => {
  //   const body = document.querySelector("body");

  //   if (theme == "light") {
  //     body?.classList.remove("dark");
  //     body?.classList.remove("ight");
  //   } else {
  //     body?.classList.remove("light");
  //     body?.classList.remove("dark");
  //   }
  // }, [theme]);

  const handleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(theme);
    const body = document.querySelector("body");

    if (theme === "light") {
      setTheme("dark");
      body?.classList.remove("light");
      body?.classList.add("dark");
    } else {
      setTheme("light");
      body?.classList.remove("dark");
      body?.classList.add("light");
    }
  };

  return (
    <>
      <div className="w-full absolute top-0 left-0 z-30 flex justify-center md:justify-end items-center p-4">
        <button
          onClick={handleTheme}
          className={`w-10 h-10 p-2 rounded-full flex justify-center items-center text-3xl bg-gray-700`}
        >
          <CiLight />
        </button>
      </div>
      <div className="w-full min-h-screen max-h-auto bg-very-pale-blue mb-20 md:mb-0 dark:bg-gray-900">
        <div className="w-full h-10  absolute top-0 left-0 z-10 nav"></div>

        <div className="w-full relative">
          {theme === "light" ? (
            <Image src={bg} alt="background image" className="h-96" />
          ) : (
            <div className="w-[90%] mx-auto md:mx-0 h-96 bg-dark-desaturated-blue rounded-bl-3xl md:rounded-bl-[10rem]"></div>
          )}

          <div className="w-full absolute top-16 flex justify-center items-center">
            <Image src={bgCircle} alt="background circle pattern" />
          </div>
          <div className="w-full absolute top-0 text-center mt-24 font-manrope font z-10">
            <h3 className="text-lg md:text-3xl font-[800] tracking-wider text-dark-desaturated-blue dark:text-light-grayish-blue">
              Simple, traffic-based pricing
            </h3>
            <h4 className="mt-3 text-sm md:text-[15px] text-grayish-blue text-wrap dark:text-light-grayish-blue">
              Sign-up for our 30-day trial. No credit card required.
            </h4>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div
            className={`w-80 h-auto md:w-[540px] bg-white absolute top-60 z-10 rounded-lg ${
              theme === "light" && "shadow-custom1"
            } dark:bg-gray-800`}
          >
            <div className="h-2/4 text-center space-y-10 px-6 py-8">
              <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-y-8 justify-between items-center p-4">
                <p className="uppercase text-grayish-blue text-xs tracking-widest text-[14px] md:mr-24">
                  {pricingData[sliderValue].pageviews} Pageviews
                </p>
                {!isMonthly ? (
                  <p className="text-dark-desaturated-blue font-[800] text-3xl md:text-[39px] md:-mr-8 order-last md:order-none dark:text-light-grayish-blue">
                    $ {pricingData[sliderValue].monthly}.00
                    <span className="text-grayish-blue text-sm font-semibold md:text-[15px] dark:text-light-grayish-blue">
                      /month
                    </span>
                  </p>
                ) : (
                  <p className="text-dark-desaturated-blue font-[800] text-3xl md:text-[39px] md:-mr-8 order-last md:order-none dark:text-light-grayish-blue">
                    $ {pricingData[sliderValue].yearly}.00
                    <span className="text-grayish-blue text-sm font-semibold md:text-[15px] dark:text-light-grayish-blue">
                      /year
                    </span>
                  </p>
                )}

                <div className="w-full order-2 md:order-none md:col-span-2 relative">
                  <input
                    type="range"
                    min="1"
                    max="5"
                    step="1"
                    value={sliderValue}
                    style={{
                      background: "hsl(174, 77%, 80%)",
                      borderRadius: "3rem",
                      height: "0.5rem",
                    }}
                    className={`w-64 md:w-full border-0 outline-none bg-grayish-blue ${
                      theme === "light" && "shadow-custom2"
                    }`}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="w-full flex justify-center items-center text-xs font-semibold text-grayish-blue gap-2">
                <span>Monthly Billing</span>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={isMonthly}
                    onChange={() => setIsMonthly(!isMonthly)}
                  />
                  <span className="slider round"></span>
                </label>
                <span>Yearly Billing</span>
                <div className="bg-light-grayish-red w-12 h-4 md:w-24 rounded-lg text-xs text-light-red">
                  <p className="md:hidden">-25%</p>
                  <p className="hidden md:inline-block">25% discount</p>
                </div>
              </div>
            </div>
            <hr />

            <div className="h-2/4 text-center flex flex-col md:flex-row md:justify-between justify-center items-center gap-6 p-8">
              <div className="md:flex md:flex-col md:items-start">
                <div>
                  <Image
                    src={checkboxSvg}
                    alt="Checkbox image"
                    className=" inline-block mx-2"
                  />
                  <span className="text-grayish-blue text-xs ">
                    Unlimited websites
                  </span>
                </div>
                <div>
                  <Image
                    src={checkboxSvg}
                    alt="Checkbox image"
                    className=" inline-block mx-2"
                  />
                  <span className="text-grayish-blue text-xs ">
                    100% data ownership
                  </span>
                </div>
                <div>
                  <Image
                    src={checkboxSvg}
                    alt="Checkbox image"
                    className=" inline-block mx-2"
                  />
                  <span className="text-grayish-blue text-xs ">
                    Email reports
                  </span>
                </div>
              </div>
              <div>
                <button>Start my trial</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
