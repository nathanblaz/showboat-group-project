import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import UploadPhoto from "./components/file_upload/UploadPhoto";
import ViewPhotos from "./components/file_upload/ViewPhotos";
import PhotoPage from "./components/PhotoPage";
import AlbumsPage from "./components/Album";
import SingleAlbumPage from "./components/Album/SingleAlbumPage";
import TagSidebar from "./components/TagSidebar";
import CreateAlbum from "./components/Album/CreateAlbum";
import Splash from "./components/Splash";
import { authenticate } from "./store/session";
import SingleTag from "./components/SingleTag";

function App() {
  // const [authenticated, setAuthenticated] = useState(false);
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  const currentUser = useSelector((state) => state.session.user);

  console.log("App.js", currentUser)
  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/users" exact={true}>
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
          {/* <ViewPhotos /> */}
        </ProtectedRoute>
        <ProtectedRoute path="/users/:id/upload/" exact={true}>
          <UploadPhoto />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:id/photos/" exact={true}>
          <ViewPhotos user={currentUser} />
        </ProtectedRoute>
        <Route path="/" exact={true}>
          <Splash />
        </Route>
        <ProtectedRoute path="/home" exact={true}>
          <HomePage />
        </ProtectedRoute>
        <ProtectedRoute path="/photos/:id" exact={true}>
          <PhotoPage />
        </ProtectedRoute>
        <ProtectedRoute path="/tags/" exact={true}>
          <TagSidebar />
        </ProtectedRoute>
        <ProtectedRoute path="/tags/:id" exact={true}>
          <SingleTag />
          {/* <TagSidebar /> */}
        </ProtectedRoute>
        <ProtectedRoute path="/users/:id/albums/" exact={true}>
          <AlbumsPage />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:id/albums/new" exact={true}>
          <CreateAlbum />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:id/albums/:albumid" exact={true}>
          <SingleAlbumPage />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
