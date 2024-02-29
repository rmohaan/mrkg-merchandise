import { signInWithGooglePopup, createDocFromAuth } from "../../utils/firebase";

const SignIn = () => {

    const signInWithPopup = async () => {
        const response = await signInWithGooglePopup()
        console.log(response)
        const user = await createDocFromAuth(response.user)
        console.log(user)
    }

    return (
        <div>
            <h2> Sign in page</h2>
            <button onClick={signInWithPopup}> SignIn With Google </button>
        </div>
    )
}

export default SignIn;