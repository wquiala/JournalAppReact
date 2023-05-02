import { startSaveFirestore } from '../../actions/notes';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { type Note, notesAddNew } from '../../redux/slices/notes.slice';
interface Props {
  note: Note;
}
export const NotesAppBar = (props: Props) => {
  const { notes } = useAppSelector((state) => state.noteReducer);
  const dispatch = useAppDispatch();
  const listNotesNew: Note[] = [...notes];

  const handleSaveFirestore = () => {
    void dispatch(startSaveFirestore(props.note));
    listNotesNew.push(props.note);
    dispatch(notesAddNew(listNotesNew));
  };

  /*   useEffect(() => {}, [listNotesNew, dispatch]);
   */
  return (
    <div className="notes-appbar">
      <span>28 de agosto 2020</span>
      <div>
        <button className="btn">Picture</button>
        <button className="btn" onClick={handleSaveFirestore}>
          Save
        </button>
      </div>
    </div>
  );
};
