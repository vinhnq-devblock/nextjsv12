import React from "react";
import { useRouter } from "next/router";

export default function Slug() {
  const router = useRouter();

  return (
    <div style={{ marginLeft: "20px", marginTop: "15px" }}>
      <span style={{ color: "red", fontSize: "22px", fontWeight: "bold" }}>
        {JSON.stringify(router.query, null, 0)}
      </span>
    </div>
  );
}
