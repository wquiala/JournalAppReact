/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { type Dispatch } from 'redux';
import { type store } from '../redux/store';
import { db } from '../firebase/firebaseConfig';
import { collection, doc, setDoc } from 'firebase/firestore';
import {
  type Note,
  nostesActive,
  notesUpdate,
} from '../redux/slices/notes.slice';
import Swal from 'sweetalert2';

export const startNewNote = () => {
  return async (dispatch: Dispatch, getState: typeof store.getState) => {
    const { uid } = getState().authReducer;
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
      imgUrl: '',
    };
    if (uid !== null) {
      const notee = doc(collection(db, `${uid}`, '/journal/notes/'));
      await setDoc(notee, newNote);
      dispatch(nostesActive({ ...newNote, id: notee.id }));
    }
  };
};

export const startSaveFirestore = (note: Note) => {
  return async (dispatch: Dispatch, getState: typeof store.getState) => {
    const { uid } = getState().authReducer;
    const noteToFirestore = { ...note };
    if (uid !== null) {
      const notee = doc(db, `${uid}`, `/journal/notes/${note.id}`);
      await setDoc(notee, noteToFirestore);
      dispatch(notesUpdate(note));
      void Swal.fire('Saved', note.title, 'success');
    }
    /* notes.forEach((note) => {
      notelist.push(note);
    });
    dispatch(notesAddNew(notelist));
    console.log(notes); */
  };
};
