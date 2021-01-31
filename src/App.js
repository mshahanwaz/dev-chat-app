import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./ChatFeed";
import LoginForm from "./LoginForm";

function App() {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID="74a93554-21d7-4134-91fd-d38683f47fe7"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
