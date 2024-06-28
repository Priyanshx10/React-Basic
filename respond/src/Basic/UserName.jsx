import React from 'react';

const user = {
  firstName: "Priyansh ",
  lastName: "Yadav"
};

function FullName({ user }) {
  return (
    <h1>
      Hello {user.firstName} {user.lastName}
    </h1>
  );
}

function UserName() {
  return (
    <div>
      <FullName user={user} />
    </div>
  );
}

export default UserName;
