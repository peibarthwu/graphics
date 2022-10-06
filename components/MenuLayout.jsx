import React from "react";
import Menu from "./Menu";

let pixelCounter = 0;
let counter = 0;
let articleBits = [];
let activeBit1 = null;
let activeBit2 = null;
let lastActiveIndex = 0;

function getCurrentRotation(el) {
  var st = window.getComputedStyle(el, null);
  var rotateX = 0;
  var rotateY = 0;
  var rotateZ = 0;
  var tm =
    st.getPropertyValue("-webkit-transform") ||
    st.getPropertyValue("-moz-transform") ||
    st.getPropertyValue("-ms-transform") ||
    st.getPropertyValue("-o-transform") ||
    st.getPropertyValue("transform") ||
    "none";
  if (tm != "none") {
    // do some magic
    var values = tm.split("(")[1].split(")")[0].split(","),
      pi = Math.PI,
      sinB = parseFloat(values[8]),
      b = Math.round((Math.asin(sinB) * 180) / pi),
      cosB = Math.cos((b * pi) / 180),
      matrixVal10 = parseFloat(values[9]),
      a = Math.round((Math.asin(-matrixVal10 / cosB) * 180) / pi),
      matrixVal1 = parseFloat(values[0]),
      c = Math.round((Math.acos(matrixVal1 / cosB) * 180) / pi);

    rotateX = a;
    rotateY = b;
    rotateZ = c;
  }

  return {
    rotateX: rotateX,
    rotateY: rotateY,
    rotateZ: rotateZ,
  };
}

class MenuLayout extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    console.log("init");

    const node = this.myRef.current;
    const siteHeight = document.body.getBoundingClientRect().height;

    const container = document.createElement("div");
    node.append(container);
    container.classList.add("three-d-container");

    const baseItems = document.querySelectorAll(".base");

    const base = baseItems[0];
    const baseHeight = base.getBoundingClientRect().height;
    container.style.perspective = `${baseHeight / 100}px`;

    const sizeFixHeight = window.innerHeight / 6;
    const animStart = window.innerHeight / 2.5;

    function init() {
      while (pixelCounter < baseHeight) {
        let sizeFixEle = document.createElement("div");
        sizeFixEle.classList.add("size-fix");
        sizeFixEle.style.height = `${sizeFixHeight}px`;
        let innerContent = base.cloneNode(true);
        //need to remove base from class list first
        innerContent.classList = "";
        innerContent.style.transform = `translateY(${
          -pixelCounter - counter
        }px)`;
        sizeFixEle.append(innerContent);
        container.append(sizeFixEle);

        articleBits.push(sizeFixEle);
        pixelCounter += sizeFixHeight;
      }

      //hide the base element
      base.style.overflow = "hidden";
      base.style.height = 0;

      //set up initial active elements
      if (articleBits.length > 0) {
        activeBit1 = articleBits[0];
        lastActiveIndex = 0;
      }

      if (articleBits.length > 1) {
        activeBit2 = articleBits[1];
        lastActiveIndex = 1;
      }

      //set rotation points of each element
      for (let i = 0; i + 1 < articleBits.length; i += 1) {
        //odd
        if (i % 2 != 0) {
          articleBits[i].style.transformOrigin = "bottom";
        } else {
          articleBits[i].style.transformOrigin = "top";
        }
      }
    }

    init();

    const onScroll = () => {
      for (let i = 0; i + 1 < articleBits.length; i += 2) {
        if (
          articleBits[i + 1].getBoundingClientRect().top <= animStart &&
          Math.abs(animStart - articleBits[i + 1].getBoundingClientRect().top) *
            0.03 <
            14
        ) {
          container.style.perspectiveOrigin = `50% ${window.pageYOffset}px`;
          articleBits[i].style.transform = `rotateX(${
            -(animStart - articleBits[i + 1].getBoundingClientRect().top) * 0.02
          }deg)`;
          articleBits[i + 1].style.transform = `rotateX(${
            (animStart - articleBits[i + 1].getBoundingClientRect().top) * 0.02
          }deg)`;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
  }
  render() {
    return (
      <div>
        <div ref={this.myRef}></div>
        <div className="base">
          <Menu />
        </div>
      </div>
    );
  }
}

export default MenuLayout;
