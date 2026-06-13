"use client";

import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.div`
  .btn-wrapper {
    --anim-speed: 1s;
    position: relative;
    padding: 1.25rem 2.5rem;
    min-width: 140px;
    min-height: 48px;
    user-select: none;
  }

  .btn-el {
    filter: drop-shadow(0 6px 2px rgba(0, 0, 0, 0.33))
      drop-shadow(0 14px 4px rgba(0, 0, 0, 0.33))
      drop-shadow(0 32px 8px rgba(0, 0, 0, 0.33))
      drop-shadow(0 64px 16px rgba(0, 0, 0, 0.33));
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .btn-content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0.5rem 2rem;
  }

  .btn-content span {
    font-weight: 600;
    font-size: 0.9rem;
    font-family: inherit;
    color: #ffffff;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    line-height: 1.4;
    white-space: nowrap;
    transition: opacity 0.4s ease;
  }

  .btn-content .main-text {
    opacity: 1;
    position: relative;
  }

  .btn-content .hover-text {
    opacity: 0;
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn-el:hover .btn-content .main-text {
    opacity: 0;
  }

  .btn-el:hover .btn-content .hover-text {
    opacity: 1;
  }

  .frame {
    position: absolute;
    inset: 0;
    z-index: 1;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background-color: #1a6b3c;
    box-shadow: inset 0 1px 4px 1px rgba(255, 255, 255, 0.15);
    transition: inset 0.5s ease;
  }

  .btn-el:hover .frame {
    inset: 6px;
  }

  .point {
    position: absolute;
    box-sizing: border-box;
    width: 8px;
    aspect-ratio: 1;
    border-radius: 25%;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background-color: #ffffff;
    background-image: radial-gradient(
      circle at 50% 120%,
      rgba(0, 0, 0, 0.3),
      #ffffff
    );
    transition: all 0.3s ease;
    z-index: 3;

    &.top {
      top: -4px;
    }
    &.bottom {
      bottom: -4px;
    }
    &.left {
      left: -4px;
    }
    &.right {
      right: -4px;
    }
  }

  .btn-el:hover .point {
    width: 10px;
  }

  .btn-el:active .btn-content {
    filter: contrast(1.4) brightness(1.4);
  }
`;

interface HeroActionButtonProps {
  href: string;
  primaryText: string;
  hoverText: string;
}

export default function HeroActionButton({
  href,
  primaryText,
  hoverText,
}: HeroActionButtonProps) {
  return (
    <Wrapper>
      <Link href={href}>
        <div className="btn-wrapper">
          <div className="btn-el">
            <span className="frame">
              <span className="point top left" />
              <span className="point top right" />
              <span className="point bottom left" />
              <span className="point bottom right" />
            </span>
            <div className="btn-content">
              <span className="main-text">{primaryText}</span>
              <span className="hover-text">{hoverText}</span>
            </div>
          </div>
        </div>
      </Link>
    </Wrapper>
  );
}
