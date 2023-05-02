import { signOut } from 'firebase/auth';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { logout } from '../../redux/slices/auth.slice';
import { JournalEntrys } from './JournalEntrys';
import { auth } from '../../firebase/firebaseConfig';
import { type MouseEvent } from 'react';
import { startNewNote } from '../../actions/notes';

export const Sidebar = () => {
  const dispatch = useAppDispatch();
  const { name } = useAppSelector((state) => state.authReducer);
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAddNew = (e: MouseEvent<HTMLDivElement>) => {
    void dispatch(startNewNote());
  };
  return (
    <aside className="journal_sidebar">
      <div className="journal_sidebar_navbar">
        <h3 className="mt-5">
          <i className="far fa-moon" />
          <span> {name} </span>
        </h3>
        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="journal_new_entry" onClick={handleAddNew}>
        <i className="far fa-calendar-plus fa-5x" />
        <p className="mt-5">New entry</p>
      </div>
      <JournalEntrys />
    </aside>
  );
};
