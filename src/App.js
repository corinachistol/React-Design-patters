import { printProps } from "./printProps.js";
import { UserInfo } from "./UserInfo.js";
import { withUser } from "./withUser.js";

const UserInfoWithLoader = withUser(UserInfo, '145')

function App() {
  return (
    <UserInfoWithLoader  />
  )
}

export default App;
