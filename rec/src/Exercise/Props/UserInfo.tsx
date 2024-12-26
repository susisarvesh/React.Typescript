import React from 'react';
import { User } from './types.ts';

interface UserType {
  user: User;
}

function UserInfo({ user }: UserType) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4">
      <h2 className="text-lg font-bold mb-2">User Details</h2>
      <div className="space-y-2">
        <p>
          <span className="font-semibold">Name:</span> {user.name}
        </p>
        <p>
          <span className="font-semibold">Age:</span> {user.age}
        </p>
        <p>
          <span className="font-semibold">Role:</span> {user.role}
        </p>
        <p>
          <span className="font-semibold">User ID:</span> {user.userid}
        </p>
      </div>
    </div>
  );
}

export default UserInfo;
