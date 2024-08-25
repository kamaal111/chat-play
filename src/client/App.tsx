import database from "./database";

import "./App.css";

function App() {
  return (
    <>
      <button
        onClick={() => {
          database.messaging.set({
            path: "users/1",
            data: { email: "kamaal@email.io", username: "kamaal" },
          });
        }}
      >
        Add something
      </button>
    </>
  );
}

export default App;
