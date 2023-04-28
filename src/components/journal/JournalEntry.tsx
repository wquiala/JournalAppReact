import React from 'react';

export const JournalEntry = () => {
  return (
    <div className="journal_entry pointer">
      <div
        className="journal_entry-picture"
        style={{
          backgroundSize: 'cover',
          backgroundImage:
            'url(https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg)',
        }}
      ></div>
      <div className="journal-entry-body">
        <p className="journal-entry-title">Un nuevo dia</p>
        <p className="journal-entry-content">
          sjdksjkdjdkjdksjkdjksjkdjsdkjdkjskjdksdjksdjksjkdjdkjsdkjd
        </p>
      </div>
      <div className="journal-entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};
