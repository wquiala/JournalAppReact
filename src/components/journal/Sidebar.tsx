import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { JournalEntrys } from './JournalEntrys';
import { type MouseEvent } from 'react';
import { startNewNote } from '../../actions/notes';
import { logouT } from '../../actions/auth';

export const Sidebar = () => {
  const dispatch = useAppDispatch();
  const { name } = useAppSelector((state) => state.authReducer);
  const handleLogout = () => {
    dispatch(logouT());
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
