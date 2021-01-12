import React from "react";

const AllThingsList = (props) => {
    const { userThings } = props;

    return (
        <div>
            {userThings.map(({ name, key, info }) => {
                return <li key={key}>{name}</li>;
            })}
        </div>
    );
};

export default AllThingsList;
