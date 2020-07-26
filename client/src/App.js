import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Title from "./components/Title";
import { SearchForm } from "./components/SearchForm";
// import SearchForm, { TextArea, FormBtn } from "./components/SearchForm";

function App() {
  return (
    // <Router>
    <div>
      <Nav />
      <Title />
      <SearchForm />
      {/* <Input />
      <TextArea />
      <FormBtn /> */}
      {/* <Switch>
          <Route exact path={["/", "/books"]}>
            <Books />
          </Route>
          <Route exact path="/books/:id">
            <Detail />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch> */}
    </div>
    // </Router>
  );
}

export default App;
