import React from "react";
import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.twitter && (
          <li>
            <a aria-label="follow me on Twitter, this link will open in a new tab" target="_blank" href={socialprofils.twitter}>
              <FaTwitter />
            </a>
          </li>
        )}
        {socialprofils.github && (
          <li>
            <a aria-label="Follow me on Github, this link will open in a new tab" target="_blank" href={socialprofils.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.facebook && (
          <li>
            <a aria-label="Follow me on facebook, this link will open in a new tab" target="_blank" href={socialprofils.facebook}>
              <FaFacebookF />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a aria-label="Follow me on Linkedin, this link will open in a new tab" target="_blank" href={socialprofils.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
        {socialprofils.youtube && (
          <li>
            <a href={socialprofils.youtube}>
              <FaYoutube />
            </a>
          </li>
        )}
        {socialprofils.twitch && (
          <li>
            <a href={socialprofils.twitch}>
              <FaTwitch />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
