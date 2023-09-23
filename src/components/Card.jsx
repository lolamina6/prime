// React core
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card({ data }) {

  const naviagtion = useNavigate()
  const { ref, title, server, duration } = data;
  return (
    <div className="grid-item"
    style={{cursor:"pointer"}}
      onClick={() => { naviagtion(`../page/${ref}`); window.scrollTo(0, 0); }}
    >
      <section className="box feature">
        <img className="image featured non-overlay atfib"
          src={`//${server}.mxdcontent.net/thumbs/${ref}.jpg`} alt={title} loading="lazy" />

        <div id="span-case">
          <h3 class="meta-data-title">
            {title}
          </h3>
          <span class="icon fa-clock-o meta-data">{~~(duration / 60)}m {duration % 60}s</span>
        </div>
      </section>
    </div>
  );
}
