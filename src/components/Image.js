import React, { useEffect } from "react";
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";

const Image = ({ url, id, alt }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    let tl = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: `.I${id}`,
        toggleActions: "play play restart restart",
        pin: false,   // pin the trigger element while active
        start: "top 25px",
        end: "bottom bottom", // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        markers: true,
        // snap: {
        //   snapTo: "labels", // snap to the closest label in the timeline
        //   duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
        //   delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
        //   ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
        // }
      }
    });

    // add animations and labels to the timeline
    tl.addLabel("start")
      .from(`.I${id}`, { scale: 1, rotation: 0 })
      .addLabel("end")
      .to(`.I${id}`, { scale: 0.5, rotation: 180 })
      .addLabel("spin")
  }, []);

  return (<li>
    <img className={`image I${id}`} src={url} alt={alt} />
  </li>)
};

export default Image;
