import { useAppSelector } from '../../redux/hooks';
import { JournalEntry } from './JournalEntry';

export const JournalEntrys = () => {
  const { notes } = useAppSelector((state) => state.noteReducer);
  return (
    <div className="journal-entries">
      {notes.map((note) => {
        return <JournalEntry key={note.id} note={note} />;
      })}
    </div>
  );
};
