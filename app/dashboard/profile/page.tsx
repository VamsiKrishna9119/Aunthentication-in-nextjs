"use client";
import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";
export default function Profile() {
  const router = useRouter();
  return (
    <div>
      <h1>Welcome to profile</h1>

      <Button
        variant="outlined"
        onClick={() => {
          router.push("/dashboard");
        }}
      >
        back
      </Button>
    </div>
  );
}
