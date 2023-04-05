import React, { useEffect, useState } from 'react'
import {startGame} from '../../public/src/main'
import {Zepto} from '../../public/src/zepto'
import {ScriptSorce} from '../../public/src/index3'
import image1 from '../../public/assets/main-share-icon.png'
import image2 from '../../public/assets/main-loading.gif'
import image3 from '../../public/assets/main-index-title.png'
import image4 from '../../public/assets/main-index-start.png'
import image5 from '../../public/assets/main-modal-bg.png'
import image6 from '../../public/assets/main-modal-over.png'
import image7 from '../../public/assets/main-modal-again-b.png'
import image8 from '../../public/assets/main-modal-invite-b.png'
import Script from 'next/script'
import Image from 'next/image'
import style from '../styles/Game.module.css'
type Props = {}

const Game = (props: Props) => {
    const[scoreData,setScoreData]=useState<number>(0)
    const[data,setData]=useState("./assets/")
   
    useEffect(() => {
        startGame(data)
        Zepto()
        ScriptSorce(setScoreData)
    }, [])
    console.log(data);
    return (
        <div>
            {/* {scoreData} */}
            <canvas id="canvas" className="hide"></canvas>
            <div className="content">
                <div className="loading">
                    <div className="main"><Image src={image2}alt="loading" />
                        <div className="progress">
                            <div className="title font-wenxue">0%</div>
                            <div className="bar">
                                <div className="sub">
                                    <div className="percent"></div>
                                </div>
                            </div>
                            <div className="text">Loading...</div>
                        </div>
                    </div>
                </div>
                <div className="landing hide">
                    <div className="action-1"><Image src={image3}alt="image" className="title swing" style={{width:'400px'}}/></div>
                    <div className="action-2"><Image id="start" src={image4}alt="image" className="start" style={{width:'400px'}}/></div>
                </div>
                <div id="modal" className="modal hide">
                    <div className="mask"></div>
                    <div className="js-modal-content modal-content">
                        <div className="main">
                            <div className="container"><Image src={image5}alt={'image'} className="bg" />
                                <div className="modal-main">
                                    <div id="over-modal" className="hide js-modal-card"><Image src={image6}alt="image" className="over-img" />
                                        <div id="score" className="over-score font-wenxue"></div>
                                        <div id="over-zero" className="hide">
                                            <div className="tip">
                                                <p>Try Again!</p><Image src={image7}alt="image" className="over-button-b js-reload" /><Image
                                                    src={image8}alt="image" className="over-button-b js-invite" />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wxShare hide"><Image src={image1}alt="image" /></div>
            </div>
          
        </div>
    )
}

export default Game