import React ,{ useEffect, useState ,useTimeout } from "react";
import "./../../Styles/homeimg.css";
import axios from "axios";

import { NavLink } from "react-router-dom";
import Loader from "../Loader/Loader";
import baseUrl from "../../utils/baseUrl";

function Mainimggg() {
    const data = [
        {
            "_id": "6274ed120669802a0fb19392",
            "title": "'The Venus mission' of ISRO",
            "decription": "The Indian Space & Research Organisation (Isro) wants to conquer Venus after successfully launching missions to the Moon and Mars. Isro chairman S Somnath has said that the space agency has the ability to both build and launch the vehicle in a very short time. However, it's the uniqueness of the mission that will define it.The Venus mission is the next big ticket mission Isro is undertaking along side Chandrayaan-3 and Gaganyaan missions.The orbiter is the third mission announced to the inferno world of Venus after Nasa announced two probes followed by a spacecraft by the European Space Agency. The probes will investigate the world looking for clues to understand the destructive past of Earth's mysterious twin, which scientists believe once had vast reserves of water similar to our planet.Isro conducted a day-long meeting to identify the areas which can be explored when the mission is launched in the coming years. ISRO Chairman S Somnath said the Venus mission has been conceived, project report has been made and money has been identified and urged scientists to focus on high impact outcomes.According to a presentation by scientists, the Venus orbiter will investigate the surface processes as it tries to understand the geologic and resurfacing history of the planet, understand the impact processes and detect buried impact craters on the surface. The probe will aim to create a topography of the surface along with studying the structure, composition, and dynamics of the atmosphere.According to a presentation by scientists, the Venus orbiter will investigate the surface processes as it tries to understand the geologic and resurfacing history of the planet, understand the impact processes and detect buried impact craters on the surface. The probe will aim to create a topography of the surface along with studying the structure, composition, and dynamics of the atmosphere.The space agency is eyeing the December 2024 window for launch with orbital maneuvers planned for the following year when earth and Venus would be so aligned that the spacecraft could be put in the neighbouring planet's orbit using a minimum amount of propellant. The next similar window would be available in 2031",
            "authorphoto": "https://akm-img-a-in.tosshub.com/indiatoday/images/reporter/202105/india_today-1200x768.png?T_nem13aZnO3kckGUdUvsTnM19XsgtT0",
            "photo1": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202205/Venus_atmosphere.jpg?oiSRef9hgV7KRrTJCfF9UwYbav6ykp.i&size=770:433",
            "photo2": "https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/202205/Venus_5-x1200.jpg?w6x4r9CfuOGPFNoPli5UlmGfU.FIXJq.",
            "username": "India Today Web Desk",
            "categories": [
                "Technology"
            ],
            "claps": "104k",
            "date": "May 5, 2022",
            "time": "10 min read",
            "tag1": "ISRO",
            "tag2": "Venus",
            "tag3": "Mangalyan",
            "createdAt": "2022-05-06T09:40:34.928Z",
            "updatedAt": "2022-05-06T09:40:34.928Z",
            "__v": 0
        },
        {
            "_id": "6274f47500f9966c8b965195",
            "title": "Benedict Cumberbatch about Doctor Strange 2",
            "decription": "Benedict Cumberbatch had a sarcastic response when asked about whether Tom Cruise is appearing as a version of Iron Man in Marvel's upcoming film Doctor Strange in the Multiverse of Madness.Marvel’s latest superhero caper Doctor Strange in the Multiverse of Madness is just two days away from its worldwide release. And yet, so many fan theories remain unanswered even to this day. One of the biggest rumour/theory that keeps doing the rounds is that Tom Cruise is appearing as a variant of Iron Man called Superior Iron Man. Many fans claimed to have spotted the actor in the film’s teasers and trailers so far. Now, the film’s lead Benedict Cumberbatch has finally spoken about whether the actor is indeed in the film.",
            "authorphoto": "data:image/png;base64,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",
            "photo1": "https://images.hindustantimes.com/img/2022/05/04/550x309/Strange_1644826645157_1651665592479.jpeg",
            "photo2": "https://images.hindustantimes.com/img/2022/05/04/550x309/Strange_1644826645157_1651665592479.jpeg",
            "username": "Hindustan Times",
            "categories": [
                "Hollywood"
            ],
            "claps": "45k",
            "date": "May 5, 2022",
            "time": "3 min read",
            "tag1": "Hollywood",
            "tag2": "Marvel",
            "tag3": "Tom Cruise",
            "createdAt": "2022-05-06T10:12:05.816Z",
            "updatedAt": "2022-05-06T10:12:05.816Z",
            "__v": 0
        },
        {
            "_id": "62740af71b04df4c07577f6e",
            "title": "Russia denies it plans to declare war on 9 May",
            "decription": "Russia has dismissed speculation that it will declare all-out war in Ukraine in the coming days as nonsense.Moscow has up until now denied it is at war, instead referring to the invasion as a special military operation.But Western officials have speculated that President Vladimir Putin could use the 9 May Victory Parade to announce an escalation of military action.Kremlin spokesman Dmitry Peskov, however, said there was no truth to the rumours at all.UK Defence Secretary Ben Wallace said last week that the Moscow parade - commemorating the defeat of the Nazis and end of World War Two - might be used to drum up support for a mass mobilisation of troops and renewed push into Ukraine.As well as the annual parade in Moscow, there are also long-standing reports that the Kremlin is planning some sort of additional parade in the city of Mariupol in southern Ukraine, almost all of which is now under Russian control. Ukrainian forces remain in one area of the city - a vast industrial steelworks called Azovstal.Latest reports suggest that after the recent successful evacuation of some civilians, attacks on the steelworks have resumed and contact has been lost with the last remaining soldiers inside.Ukrainian officials say the streets of the city centre are being cleared of debris, bodies, and unexploded bombs. Large parts of the city lie in ruins, after Russian forces bombarded it relentlessly for weeks under siege.Ukrainian politician Alyona Shkrum told the BBC she was expecting things to become more difficult alongside Russia's victory day celebrations.",
            "authorphoto": "data:image/png;base64,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",
            "photo1": "https://ichef.bbci.co.uk/news/976/cpsprodpb/10754/production/_124421476_hi075754812.jpg",
            "photo2": "https://ichef.bbci.co.uk/live-experience/cps/960/cpsprodpb/16596/production/_124424519_gettyimages-1240338484.jpg",
            "username": "Hindustan Times",
            "categories": [
                "World"
            ],
            "claps": "78k",
            "date": "May 5, 2022",
            "time": "5 min read",
            "tag1": "Ukraine",
            "tag2": "Rusiia",
            "tag3": "India",
            "createdAt": "2022-05-05T17:35:51.624Z",
            "updatedAt": "2022-05-05T17:35:51.624Z",
            "__v": 0
        }
    ]
    
        return (
            <>
        
                <div className="MainImg" id="homeimgclick">
                    <div className="longImg">
                        <img className="img1" src={data[0].photo1} alt="Imageshow" />
                        <div className="textContaint1">
                            <NavLink className="MainImgLink" to={`/article/${data[0]._id}`}>
                                <h1>{data[0].title}</h1>
                            </NavLink>
                            <span className="postThumbnail1">{data[0].categories}</span>
                            <span className="date1"><code>   </code>/<code>   </code>{data[0].date}</span>
                        </div>
                    </div>
                    <div className="smallImg">
                        <div className="img2">
                            <img className="Img2" src={data[1].photo1} alt="Imageshow" />
                            <div className="textContaint2">
                                <NavLink className="MainImgLink" to={`/article/${data[1]._id}`}>
                                    <h4>{data[1].title} </h4>
                                </NavLink>
                                <span className="postThumbnail1">{data[1].categories} </span>
                                <span className="date1"><code>   </code>/<code>   </code>{data[1].date} </span>
                            </div>
                        </div>
                        <div className="img3">
                            <img className="Img3" src={data[2].photo1} alt="Imageshow" />
                            <div className="textContaint3">
                                <NavLink className="MainImgLink" to={`/article/${data[2]._id}`}>
                                    <h4>{data[2].title} </h4>
                                </NavLink>
                                <span className="postThumbnail1">{data[2].categories} </span>
                                <span className="date1"><code>   </code>/<code>   </code>{data[2].date} </span>
                            </div>
                        </div>
                    </div>
                </div>
            
               
            </>
        )
    
}

export default Mainimggg