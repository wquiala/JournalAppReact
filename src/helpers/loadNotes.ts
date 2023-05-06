import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { type Note } from '../redux/slices/notes.slice';

export const loadNotes = async (uid: string) => {
  const notesRef = collection(db, `${uid}/journal/notes`);
  const notesSnap = await getDocs(notesRef);
  const notes: Note[] = [];

  notesSnap.forEach((doc) => {
    notes.push({
      id: doc.id,
      title: doc.data().title,
      body: doc.data().body,
      imgUrl: doc.data().imgUrl,
      date: doc.data().date,
    });
  });
  return notes;
};
