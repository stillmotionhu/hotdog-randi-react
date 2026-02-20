import { Button } from "@components/shared/button";
import { Icon } from "@components/shared/icons";

/**
 * SIGN IN WITH GOOGLE BUTTON ROOT
 */
const ContinueWithGoogleButton: React.FC = () => {
  return (
    <Button variant="google">
      <Icon icon="google" size={22} />
      Continue With Google
    </Button>
  );
};

export { ContinueWithGoogleButton };
