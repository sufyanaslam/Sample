import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { AuthContext } from "../../contexts";
import OnBoardStepper from "./onBoardStepper";
import LayoutComponent from "./layoutComponents";
import ClientDetection from "./clientDetection";

function MainPage() {
  const {user} = useContext(AuthContext);

  return (
    user && (
      <Switch>
        { (user.onboardingStep <= 3) && (user.isAdminForActiveClient || (!user.isAdminForActiveClient && !user.isSrForActiveClient)) &&
          <Route path={`/onboarding-stepper`} component={OnBoardStepper} />
        }
        <Route path={`/client-selection`} exact component={ClientDetection} />
        <Route component={LayoutComponent} path="/" />
      </Switch>
    )
  );
}

export default MainPage;
