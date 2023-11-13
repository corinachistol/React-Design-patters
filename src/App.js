import { printProps } from "./printProps.js";
import { UserInfo } from "./UserInfo.js";
import { withUser } from "./withUser.js";
import { UserInfoForm } from "./UserInfoForm.js";

const UserInfoWithLoader = withUser(UserInfo, '145')

function App() {
  return (
    <UserInfoForm  />
  )
}

export default App;
