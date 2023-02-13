import { Box } from "@mui/material";
import UpdateProfile from "../../shared/components/UpdateProfile";
import { ContentProfile } from "./styles";

const Profile = () => {
  return (
    <ContentProfile>
      <Box
        sx={{
          position: "absolute",
          display:"flex",
          alignItems:"center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          borderRadius: "1rem 1rem 0 0",
          boxShadow: (theme) => theme.shadows[5],
        }}
      >
        <UpdateProfile />
      </Box>
    </ContentProfile>
  );
};

export default Profile;
