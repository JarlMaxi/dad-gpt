import React from "react";
import './Footer.css';
import discord from '../assets/discord.svg';

function Footer() {
    return (
        <div className="Footer smaller-size">
            <p>
                If you have any questions, DM me on discord: <a href="https://discordapp.com/users/206687854925971458"><img src={discord} alt="Discord logo" /></a>
            </p>
        </div>
    )
}

export default Footer;