import React from "react";
import { Link } from "react-router-dom";

export default function Card({
  title,
  body,
  buttonText,
  imgSrc,
  subtitle,
  href,
  footerText,
}) {
  return (
    <div className="shadow card flex-item">
      <img src={imgSrc} alt="" className="card-img" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{subtitle}</h6>
        <p className="card-text">{body}</p>
        <Link className="btn btn-primary btn-sm" to="/">
          {buttonText}
        </Link>
      </div>
      {footerText ? (
        <div className="card-footer text-muted">{footerText}</div>
      ) : (
        <></>
      )}
    </div>
  );
}
