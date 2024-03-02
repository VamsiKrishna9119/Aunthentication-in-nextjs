"use client";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  return (
    <div>
      <h1>Welcome to Dashboard</h1>
      <Stack spacing={2} direction="row">
        <Button
          variant="outlined"
          onClick={() => {
            router.push("/dashboard/profile");
          }}
        >
          Profile
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            router.push("/");
          }}
        >
          Logout
        </Button>
      </Stack>
    </div>
  );
}
