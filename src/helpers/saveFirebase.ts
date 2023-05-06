import { collection, doc, setDoc } from 'firebase/firestore';
import {
  nostesActive,
  notesUpdate,
  type Note,
  notesAddNew,
} from '../redux/slices/notes.slice';
import { db } from '../firebase/firebaseConfig';
import { type store } from '../redux/store';
import { useAppDispatch } from '../redux/hooks';

export const saveFirebase = (note: Note) => {
  return async (
    dispatch = useAppDispatch(),
    getState: typeof store.getState,
  ) => {
    const { notes } = getState().noteReducer;
    const listNotesNew: Note[] = [...notes];

    console.log(note);
    const { uid } = getState().authReducer;
    if (uid != null) {
      const notee = doc(collection(db, `${uid}`, '/journal/notes/'));
      await setDoc(notee, { ...note, id: notee.id });
      dispatch(nostesActive({ ...note, id: notee.id }));
      dispatch(notesUpdate({ ...note, id: notee.id }));
      listNotesNew.push({ ...note, id: notee.id });
      dispatch(notesAddNew(listNotesNew));
    }
  };
};
