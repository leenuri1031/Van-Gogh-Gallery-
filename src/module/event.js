import { functionObj } from "./function_obj";

export const menuEnter = (e) => {
  functionObj.size(e.target, "30%", "70%");
  e.target.style.left = "62.5%";
  e.target.style.bottom = "10%";
  e.target.innerHTML = ``;
};

export const menuOut = (e) => {
  functionObj.size(e.target, "5%", "20%");
  e.target.style.left = "87.5%";
  e.target.style.bottom = "57%";
  e.target.innerHTML = "Gallery Info";
};

export const mouseover = (e) => {
  functionObj.size(e.target, "140px", "140px");
};

export const mouseout1 = (e) => {
  functionObj.size(e.target, "90px", "90px");
};

export const mouseout2 = (e) => {
  functionObj.size(e.target, "100px", "100px");
};

export const mouseout3 = (e) => {
  functionObj.size(e.target, "125px", "125px");
};
