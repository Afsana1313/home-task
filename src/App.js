import "./App.scss";
import LoginForm from "./components/LoginForm";
import BusinessContentInputBlock from "./business-content/BusinessContentInputBlock";
import BusinessContent from "./business-content/BusinessContent";
import CompaniesEditContentInputBlock from "./companies-content/CompaniesEditContentInputBlock";
import story1 from "./companies-content/2_story1.png";
import story2 from "./companies-content/2_story2.png";
import ReactDraftW from "./ReactDraft/ReactDraftW";

function App() {
  return (
    <div className="container">
      <ReactDraftW />
      <CompaniesEditContentInputBlock
        title="Entrepreneurship story"
        imageOne={story1}
        imageTwo={story2}
      />
      {/* <LoginForm/> */}
      {/* <BusinessContent /> */}
      {/* <BusinessContentInputBlock /> */}
    </div>
  );
}

export default App;
