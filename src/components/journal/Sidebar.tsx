import { signOut } from 'firebase/auth';
import { useAppDispatch } from '../../redux/hooks';
import { logout } from '../../redux/slices/auth.slice';
import { JournalEntrys } from './JournalEntrys';
import { auth } from '../../firebase/firebaseConfig';

export const Sidebar = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <aside className="journal_sidebar">
      <div className="journal_sidebar_navbar">
        <h3 className="mt-5">
          <i className="far fa-moon" />
          <span> Wilfredo</span>
        </h3>
        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="journal_new_entry">
        <i className="far fa-calendar-plus fa-5x" />
        <p className="mt-5">New entry</p>
      </div>
      <JournalEntrys />
    </aside>
  );
};
