import React from "react";
import {
  MdHistory,
  MdHome,
  MdOutlineFeedback,
  MdOutlinePodcasts,
  MdSubscriptions,
} from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { CgPlayList } from "react-icons/cg";
import { TbThumbUp } from "react-icons/tb";
import { BiHelpCircle, BiLike, BiShoppingBag } from "react-icons/bi";
import { BsFire } from "react-icons/bs";
import {
  IoGameControllerOutline,
  IoMusicalNoteOutline,
  IoNewspaperOutline,
} from "react-icons/io5";
import { GiClapperboard, GiHanger } from "react-icons/gi";
import { TfiCup } from "react-icons/tfi";
import { HiSignal } from "react-icons/hi2";
import { AiOutlineFlag, AiOutlineSetting } from "react-icons/ai";

const LeftPaneGuide = () => {
  return (
    <div className="yt-guide-section">
      <section className="yt-guide-home">
        <div>
          <MdHome size={26} />
          <span>Home</span>
        </div>
        <div>
          <SiYoutubeshorts size={26} />
          <span>Shorts</span>
        </div>
        <div>
          <MdSubscriptions size={26} />
          <span>Subscriptions</span>
        </div>
      </section>
      <hr />
      <section className="yt-guide-You">
        <div className="yt-guide-name">
          <span>You &#62;</span>
        </div>
        <div>
          <CgPlayList size={26} />
          <span>Play lists</span>
        </div>
        <div>
          <MdHistory size={26} />
          <span>History</span>
        </div>
        <div>
          <BiLike size={26} />
          <span>Liked videos</span>
        </div>
      </section>
      <hr />

      <section className="yt-guide-Explore">
        <div className="yt-guide-name">
          <span href="">Explore</span>
        </div>
        <div>
          <BsFire size={26} />
          <span>Trending</span>
        </div>
        <div>
          <IoMusicalNoteOutline size={26} />
          <span>Music</span>
        </div>
        <div>
          <GiClapperboard size={26} /> <span>Movies</span>
        </div>
        <div>
          <IoGameControllerOutline size={26} />
          <span>Gaming</span>
        </div>
        <div>
          <HiSignal size={26} />
          <span>Live</span>
        </div>
        <div>
          <BiShoppingBag size={26} />
          <span>Shopping</span>
        </div>
        <div>
          <TfiCup size={26} />
          <span>Sports</span>
        </div>
        <div>
          <MdOutlinePodcasts size={26} />
          <span>Podcasts</span>
        </div>
        <div>
          <GiHanger size={40} />
          <span>Fashion & Beauty</span>
        </div>
        <div>
          <IoNewspaperOutline size={26} />
          <span>News</span>
        </div>
      </section>
      <hr />

      <section className="yt-guide-Setting">
        <div>
          <AiOutlineSetting size={26} />
          <span>Settings</span>
        </div>
        <div>
          <AiOutlineFlag size={26} />
          <span>Report history</span>
        </div>
        <div>
          <BiHelpCircle size={26} />
          <span>Help</span>
        </div>
        <div>
          <MdOutlineFeedback size={26} />
          <span>Send feedback</span>
        </div>
      </section>
    </div>
  );
};

export default LeftPaneGuide;
