import React from 'react';
import { Admin } from './types';

interface AdminType {
  admin: Admin;
}

function AdminInfo({ admin }: AdminType) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4">
      <h2 className="text-lg font-bold mb-2">Admin Details</h2>
      <div className="space-y-2">
        <p>
          <span className="font-semibold">Name:</span> {admin.name}
        </p>
        <p>
          <span className="font-semibold">Age:</span> {admin.age}
        </p>
        <p>
          <span className="font-semibold">Role:</span> {admin.role}
        </p>
        <p>
          <span className="font-semibold">User ID:</span> {admin.userid}
        </p>
        <p>
          <span className="font-semibold">Password:</span> {admin.password}
        </p>
        <p>
          <span className="font-semibold">Last Login:</span>{' '}
          {admin.lastLogin.toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default AdminInfo;
