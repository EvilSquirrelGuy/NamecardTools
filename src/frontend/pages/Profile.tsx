import React from "react";
import { useParams } from "react-router-dom";

export default function Profile() {
  const { uid } = useParams();

  return (
    <h1>{uid}'s Profile</h1>
  );
}