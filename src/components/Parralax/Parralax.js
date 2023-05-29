import React, { Component, useEffect, useState } from "react";
import p1 from "./IMG_5209_1.png";
import p2 from "./IMG_5209_2.png";
import p3 from "./IMG_5209_3.png";
import p4 from "./IMG_5209_4.png";
import p5 from "./IMG_5209_5.png";
import logo from "./logo.svg";
import "./Parallax.css"
export default function Parralax() {

	var up = document.getElementById("up")

    useEffect(() => {
        const onScroll = () => {
			document.documentElement.style.setProperty('--scrollTop', `${window.pageYOffset}px`)
		};
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

	// useEffect(() => {
	// 	window.removeEventListener('scroll');
	// 	window.addEventListener('scroll', e => {
	// 		document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`)
	// 		if (this.scrollY > 400) {
	// 			up.style.opacity = 100
	// 		}
	// 		else {
	// 			up.style.opacity = 0;
	// 		}
	// 	})
	// 	return () => window.removeEventListener('scroll');
	// }, [])

	

	return (
		<div className="wrap">
			<div className="content">
				<div className="layers">
					<div className="layer layer1" style={{ backgroundImage: `url(${p1})` }}></div>
					<div className="layer layer2" style={{ backgroundImage: `url(${p2})` }}></div>
					<div className="layer layer-logo">
						<img src={logo} style={{ height: "28vh", marginTop: "10vh" }} />
					</div>
					<div className="layer layer3" style={{ backgroundImage: `url(${p3})` }}></div>
					<div className="layer layer4" style={{ backgroundImage: `url(${p4})` }}></div>
					<div className="layer layer5" style={{ backgroundImage: `url(${p5})` }}></div>
				</div>
			</div>
		</div>
	);
}

