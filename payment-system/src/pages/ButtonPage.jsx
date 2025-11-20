import React, { useState } from "react";
import { Button } from "../components/button/Button";

export default function ButtonDemo() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div style={{ display: "grid", gap: "20px", padding: "20px" }}>
      
      {/* Basic Button */}
      <Button>Default Button</Button>

      {/* Different Color & Variant */}
      <Button colorScheme="red" variant="outline">
        Delete
      </Button>

      {/* Button with Icons */}
      <Button leftIcon={<span>👈</span>} rightIcon={<span>👉</span>}>
        Navigate
      </Button>

      {/* Loading Button */}
      <Button isLoading={loading} onClick={handleClick}>
        Submit
      </Button>

      {/* Disabled Button */}
      <Button disabled={true}>Can't Click Me</Button>

      {/* Full Width Button */}
      <Button isFullWidth={true}>Full Width</Button>

      {/* Large Green Button with Left Icon */}
      <Button
        colorScheme="green"
        variant="solid"
        size="lg"
        leftIcon={<span>✔</span>}
      >
        Confirm
      </Button>
      
    </div>
  );
}
