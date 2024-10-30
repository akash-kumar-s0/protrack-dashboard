import React from "react";
import ProfileIcon from "../../assets/sidebar/UserProfile/profile.png";
import SettingIcon from "../../assets/sidebar/UserProfile/setting.png";

const UserProfile = () => {
  return (
    <div className="flex relative gap-2 items-center p-2 mt-56 w-full text-sm bg-white rounded-xl border border-solid border-slate-200">
      <img
        loading="lazy"
        src={ProfileIcon}
        alt="User avatar"
        className="object-contain z-0 shrink-0 self-stretch my-auto w-12 aspect-square"
      />
      <img
        loading="lazy"
        src={SettingIcon}
        alt=""
        className="object-contain absolute top-2/4 z-0 shrink-0 self-start -translate-y-2/4 aspect-square h-[22px] right-[25px] translate-x-[0%] w-[22px]"
      />
      <div className="flex z-0 flex-col self-stretch my-auto rounded-none w-[89px]">
        <p data-layername="daltonSmith" className="font-jakarta text-body text-zinc-600">
          Dalton Smith
        </p>
        <p data-layername="freeAccount" className="font-jakarta text-body text-neutral-400">
          Free Account
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
