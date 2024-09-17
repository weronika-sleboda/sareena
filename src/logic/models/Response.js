import stopImg from "../../ui/images/stop.svg";

export default class Response {
  constructor(
    title = "Title",
    imgSrc = stopImg,
    message = "Message",
    isHidden = true
  ) {
    this.title = title.toLocaleUpperCase();
    this.imgSrc = imgSrc;
    this.message = message;
    this.isHidden = isHidden
  }
}