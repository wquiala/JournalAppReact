import { JournalEntry } from './JournalEntry';

export const JournalEntrys = () => {
  const entries = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="journal-entries">
      {entries.map((value) => {
        return <JournalEntry key={value} />;
      })}
    </div>
  );
};
