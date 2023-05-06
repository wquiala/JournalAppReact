import { type store } from '../redux/store';
import { db } from '../firebase/firebaseConfig';
import { deleteDoc, doc, setDoc } from 'firebase/firestore';
import {
  type Note,
  nostesActive,
  notesUpdate,
  notesDelete,
} from '../redux/slices/notes.slice';
import Swal from 'sweetalert2';
import { fileUpload } from '../helpers/fileUploads';
import { useAppDispatch } from '../redux/hooks';

export const startNewNote = () => {
  return async (dispatch = useAppDispatch()) => {
    const newNote: Note = {
      title: '',
      body: '',
      date: new Date().getTime(),
      imgUrl: '',
      id: '',
    };
    dispatch(nostesActive(newNote));
  };
};

export const startUpdateFirestore = (note: Note) => {
  return async (
    dispatch = useAppDispatch(),
    getState: typeof store.getState,
  ) => {
    const { uid } = getState().authReducer;
    const noteToFirestore = { ...note };
    if (uid !== null) {
      const notee = doc(db, `${uid}`, `/journal/notes/${note.id}`);
      await setDoc(notee, noteToFirestore);

      dispatch(notesUpdate(note));
      dispatch(nostesActive(note));
      void Swal.fire('Saved', note.title, 'success');
    }
  };
};

export const startUploadImg = (file: File) => {
  return async (
    dispatch = useAppDispatch(),
    getState: typeof store.getState,
  ) => {
    const { active } = getState().noteReducer;
    if (active !== null) {
      const activeNote = { ...active };
      void Swal.fire({
        title: 'Uploading...',
        text: 'Please wait...',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      const fileUrl = await fileUpload(file);

      Swal.close();
      if (activeNote !== undefined) {
        activeNote.imgUrl = fileUrl.secure_url;
        dispatch(nostesActive(activeNote));

        // await dispatch(startUpdateFirestore(activeNote));
      }
    }
  };
};

export const deleteNote = (id: string) => {
  return async (
    dispatch = useAppDispatch(),
    getState: typeof store.getState,
  ) => {
    const { uid } = getState().authReducer;
    if (uid != null) {
      await deleteDoc(doc(db, `${uid}`, `/journal/notes/${id}`));

      dispatch(notesDelete(id));
    }
  };
};
