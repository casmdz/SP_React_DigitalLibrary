import { getAuth, signOut } from "firebase/auth"

function Testpage() {

  const auth = getAuth();

  return (
    <div>
      you should only access this if you log in... (protected by firebase!)
      <button className="bg-emerald-300" onClick={()=> signOut(auth)}>sign out of firebase</button>
    </div>
  )
}

export default Testpage
