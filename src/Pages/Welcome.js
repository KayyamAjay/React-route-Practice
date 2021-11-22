import { Route } from "react-router";

const Welcome = () => {
  return (
    <section>
      <h1>Welcome to My First Page</h1>
      <Route path="/welcome/new-user">
        <p>welcome, newuser!</p>
      </Route>
    </section>
  );
};

export default Welcome;
