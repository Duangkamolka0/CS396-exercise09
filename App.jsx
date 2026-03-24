import { useState } from "react";
import "./styles.css";
import Register from "./components/Register";
import VerifyPhone from "./components/VerifyPhone";

function App() {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({});

  return (
    <>
      {step === 1 && (
        <Register
          onNext={(data) => {
            setUserData(data);
            setStep(2);
          }}
        />
      )}

      {step === 2 && (
        <VerifyPhone
          userData={userData}
          onBack={() => setStep(1)}
          onFinish={() => alert("สมัครสำเร็จ!")}
        />
      )}
    </>
  );
}

export default App;