// import { NothingSelected } from './NothingSelected';
import { useAppSelector } from '../../redux/hooks';
import { NotesScreen } from '../notes/NotesScreen';
import { NothingSelected } from './NothingSelected';
import { Sidebar } from './Sidebar';

export const JournalScreem = () => {
  const { active, notes } = useAppSelector((state) => state.noteReducer);

  return (
    <div className="journal_main_content animate__animated animate__fadeIn animate__faster">
      <Sidebar />
      <main>
        {active !== null ? <NotesScreen notes={notes} /> : <NothingSelected />}
      </main>
    </div>
  );
};
