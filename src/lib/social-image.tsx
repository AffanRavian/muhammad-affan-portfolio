import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const socialImageSize = {
  width: 1200,
  height: 630,
};

export function createSocialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#101114",
          color: "#F3F0E8",
          padding: "64px 72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          <span style={{ color: "#C5F277", fontWeight: 700 }}>MA.</span>
          <span style={{ color: "#B4B7BE" }}>Portfolio · Full-stack engineering</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
          <p
            style={{
              margin: 0,
              color: "#C5F277",
              fontSize: 30,
              letterSpacing: "0.04em",
            }}
          >
            {site.name}
          </p>
          <h1
            style={{
              margin: "22px 0 0",
              fontSize: 68,
              lineHeight: 1.06,
              letterSpacing: "-0.035em",
              fontWeight: 600,
            }}
          >
            {site.headline}
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(243, 240, 232, 0.2)",
            paddingTop: 24,
            color: "#B4B7BE",
            fontSize: 22,
          }}
        >
          <span>{site.role}</span>
          <span>Next.js · React · Node.js · PostgreSQL</span>
        </div>
      </div>
    ),
    socialImageSize,
  );
}
