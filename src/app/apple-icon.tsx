import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 32,
          background: "#101114",
          color: "#C5F277",
          fontFamily: "Arial, sans-serif",
          fontSize: 64,
          fontWeight: 700,
          letterSpacing: "-0.08em",
        }}
      >
        MA.
      </div>
    ),
    size,
  );
}
