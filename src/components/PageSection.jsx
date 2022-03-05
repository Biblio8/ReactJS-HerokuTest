import React from "react";

export default function PageSection({ title, children, id, subtitle }) {
  return (
    <>
      <section class="page-section border-bottom" id={id}>
        <div class="fluid-container">
          <h2 class="text-center mt-0">{title}</h2>
          <hr class="divider" />
          {subtitle ? <p className="text-muted mb-5 text-center">{subtitle}</p> : <></>}
          {children}
        </div>
      </section>
    </>
  );
}
