// import { NothingSelected } from './NothingSelected';
import { NotesScreen } from '../notes/NotesScreen';
import { Sidebar } from './Sidebar';

export const JournalScreem = () => {
  return (
    <div className="journal_main_content">
      <Sidebar />
      <main>
        {/*  // <NothingSelected /> */}
        <NotesScreen />
      </main>
    </div>
  );
};
