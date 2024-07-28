import { Profile } from './components/Profile';
// import { Settings } from './components/Settings';
// import { TransactionHistory } from './components/TransactionHistory';

export default function UserProfilePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>
      <Profile />
      {/* <Settings />
      <TransactionHistory /> */}
    </div>
  );
}
