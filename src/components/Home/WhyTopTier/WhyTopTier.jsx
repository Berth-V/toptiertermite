import {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import './WhyTopTier.css';

export default function WhyTopTier() {
  useEffect(() => {
    scrollTo(0, 0);
  }, [location]);
  return (
    <div className='whytoptier'>
      <h2 className='whytoptier__h2'>
        Why should I choose Top-Tier Termite Control?
      </h2>
      <p className='whytoptier__p'>
        <b>Our Commitment</b>
        <br />
        <br />
        <b> *Protecting Homes:</b> We&apos;ve assisted
        <b> thousands of homeowners</b> in Southern California, safeguarding
        their properties from the <b>devastating damage</b> caused by termites.
        Our expertise ensures that your home remains a safe haven for you and
        your family. <br />
        <b>*Eco-Friendly Solutions:</b> At <b>Top-Tier</b>, we believe in
        responsible pest control. Our methods are not only effective but also
        <b>environmentally friendly</b>. We strive to minimize our impact on the
        ecosystem while ensuring your home&apos;s safety. <br />
        <br />
        <b>What We Offer</b>
        <br />
        <br />
        <b>*Free Inspections:</b> Worried about termites? Our inspections come
        at no cost to you. Let us assess your property and provide personalized
        recommendations. <br />
        <b>*Fumigation Services:</b> When necessary, we offer thorough
        fumigation to eliminate termites and protect your home&apos;s structural
        integrity. <br />
        <b>*Subterranean Termites:</b> Our team specializes in dealing with
        subterranean termites, addressing their unique behavior and nesting
        patterns. <br />
        <b>*Structural Repairs:</b> If termites have already caused damage, we
        provide <b>expert repairs</b> to restore your home. <br />
        <b>*Preventative Treatment:</b> Prevention is key. We offer proactive
        solutions to keep termites at bay. <br />
        <b>*Escrow Services:</b> When buying or selling a home, trust us to
        handle termite-related escrow requirements. <br />
        <br />
        <b>Contact Us</b> <br />
        <br />
        Ready to safeguard your investment?<span> </span>
        <NavLink className='whytoptier__btn'>
          Contact Top-Tier Termite Control
        </NavLink>
        <span> </span>
        today. Our friendly team will guide you through
        <b> eco-friendly termite extermination</b> options tailored to your
        needs. Remember, inspections are <b>always free</b>—so take the first
        step now!
        <br />
        <br />
      </p>
    </div>
  );
}
