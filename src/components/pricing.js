import React from "react";
import {TbRobot} from "react-icons/tb";
import {TiTick,TiLeaf} from "react-icons/ti";
import { BiDollar } from "react-icons/bi";
import {BsLightningCharge} from "react-icons/bs";
import "../styles/pricing.css";
function Pricing(){
    return(
        <div className="Pricing">
            <div className="first">
                <div className="name">
                    <TiLeaf/> Lite
                </div>
                <p>Perfect to get started</p>
                <div className="cost">
                    <h1 className="dsym"><BiDollar/></h1>
                    <h1 className="dam">11</h1>
                    <p>per seat/month</p>
                </div>
                <button className="main">Try 7 days for free</button>
                <div className="list">
                    <h4>Lite includes: </h4>
                    <p className="litem"><TiTick className="tick"/><p>CMS Integration</p></p>
                    <p className="litem"><TiTick className="tick"/><p>Email & SMS reminders</p></p>
                    <p className="litem"><TiTick className="tick"/><p>Customer support 24/7</p></p>
                </div>
                <button className="feat">See all features</button>
            </div>
            <div className="second">
                <div className="name">
                    <TbRobot/> Pro
                </div>
                <p>Perfect to get started</p>
                <div className="cost">
                    <h1><BiDollar/></h1>
                    <h1>19</h1>
                    <p>per seat/month</p>
                </div>
                <button className="main">Try 7 days for free</button>
                <div className="list">
                    <h4>Everything in Lite, plus:</h4>
                    <p className="litem"><TiTick className="tick"/><p>Advanced analytics</p></p>
                    <p className="litem"><TiTick className="tick"/><p>100+ integrations</p></p>
                    <p className="litem"><TiTick className="tick"/><p>Chat widget</p></p>
                    <p className="litem"><TiTick className="tick"/><p>Templates library</p></p>
                </div>
                <button className="feat">See all features</button>
            </div>
            <div className="third">
            <div className="name">
                    <BsLightningCharge/> Ultimate
                </div>
                <p className="des">Toolset for hard players</p>
                <div className="cost">
                    <h1 className="dsym"><BiDollar/></h1>
                    <h1 className="dam">35</h1>
                    <p>per seat/month</p>
                </div>
                <button className="main3">Get Started</button>
                <div className="list">
                    <h4>Everything in Pro, plus:</h4>
                    <p className="litem"><TiTick className="tick"/><p>Daily performance reports</p></p>
                    <p className="litem"><TiTick className="tick"/><p>Dedicated Assistant</p></p>
                    <p className="litem"><TiTick className="tick"/><p>Artificial Intelligence</p></p>
                    <p className="litem"><TiTick className="tick"/><p>Marketing tools & automations</p></p>
                </div>
                <button className="feat">See all features</button>
            </div>
        </div>
    )
}
export default Pricing;
