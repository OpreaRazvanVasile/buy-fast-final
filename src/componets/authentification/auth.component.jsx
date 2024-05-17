import SignIn from "../sign-in/sign-in.component";
import SignUp from "../sign-up/sign-up.component"
import { AuthContainer } from "./auth.styles";


const Auth=()=>
<AuthContainer>
<SignIn/>
<SignUp/>

</AuthContainer>


export default Auth