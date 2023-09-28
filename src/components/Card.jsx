// React core
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card({ data }) {
  const naviagtion = useNavigate()
  const { ref, title, duration, thumb } = data;
  return (
    <div className="grid-item"
      style={{ cursor: "pointer" }}
      onClick={() => { naviagtion(`../page/${ref}`); window.scrollTo(0, 0); }}
    >
      <section className="box feature">
        <img className="image featured non-overlay atfib"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = `${process.env.PUBLIC_URL}/images/default_image.gif`
          }}
          src={thumb} alt={title} loading="lazy" />

        <div id="span-case">
          <h3 className="meta-data-title">
            {title}
          </h3>
          <span className="icon fa-clock-o meta-data">{~~(duration / 60)}m {duration % 60}s</span>
        </div>
      </section>
    </div>
  );
}
