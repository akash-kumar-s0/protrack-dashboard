import React from "react";
import proUpgradeLogo from "../../assets/sidebar/proupgrade.png";

const ProUpgrade = () => {
  return (
    <section
      data-layername="getPro"
      className="flex flex-col w-full text-center text-white rounded-3xl mt-11"
    >
      <div
        data-layername="getProCta"
        className="relative flex flex-col items-center px-2 py-8 rounded-3xl bg-gradient-to-b from-[#FD71AF] to-[#FEC6DF]"
      >
        <div className="absolute -top-12 flex items-center justify-center w-[170px]">
          <img
            className="rounded-full "
            src={proUpgradeLogo}
            alt="Pro Upgrade Logo"
          />
        </div>
        <h2
          data-layername="pagetitle"
          className="mt-12 font-jakarta text-header-3 font-bold leading-7"
        >
          Upgrade to PRO
        </h2>
        <p
          data-layername="pagetitle"
          className="mt-2 font-jakarta text-body leading-5"
        >
          to get access to all features!
          <br />
          Connect with Protrack World!
        </p>
      </div>
    </section>
  );
};
export default ProUpgrade;
