import { Box } from "@mui/material";
import UpdateProfile from "../../shared/components/UpdateProfile";
import { ContentProfile } from "./styles";

const Profile = () => {
  return (
    <ContentProfile>
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "100vw",
          minHeight: "100vh",
        }}
      >
        <UpdateProfile />
      </Box>
    </ContentProfile>
  );
};

export default Profile;
