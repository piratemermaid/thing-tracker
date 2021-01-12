import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import AllThingsList from "../components/AllThingsList";

const Home = (props) => {
    const logOut = () => {
        axios({
            method: "get",
            url: "/api/account/logout"
        })
            .then((res) => {
                if (res.data.logout === "success") {
                    props.authenticateUser(false);
                    props.history.push("/");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <h1>Home</h1>
            <h2>All of Your Things</h2>
            <AllThingsList userThings={props.userThings} />
        </div>
    );
};

export default withRouter(Home);
