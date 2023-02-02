import CarouselLogin from "../../shared/components/CarouselLogin";
import LogInForm from "../../shared/components/LogInForm";
import { ContentLoginPage } from "./styles";

const LoginPage = () => {
  return (
    <ContentLoginPage>
      <div className="logInCarousel">
        <LogInForm />
        {/* <CarouselLogin /> */}
      </div>
    </ContentLoginPage>
  );
};

export default LoginPage;
