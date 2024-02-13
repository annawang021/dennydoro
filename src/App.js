import React from "react";

import FaviconUpdater from "components/FaviconUpdater";
import HotKeysManager from "components/HotKeysManager";
import Notifications from "components/Notifications";
import Sounds from "components/Sounds";
import Timer from "components/Timer";
import TotalFocusTime from "components/TotalFocusTime";
import { HStack } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Notifications />
      <Sounds />
      <HotKeysManager />
      <FaviconUpdater />
      <TotalFocusTime/>
      <HStack>
        <Timer />
      </HStack>
    </>
  );
}

export default App;
