import { type ChangeEvent } from 'react';
import { startUpdateFirestore, startUploadImg } from '../../actions/notes';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { type Note } from '../../redux/slices/notes.slice';
import { saveFirebase } from '../../helpers/saveFirebase';
interface Props {
  note: Note;
}
export const NotesAppBar = (props: Props) => {
  const { notes, active } = useAppSelector((state) => state.noteReducer);
  const dispatch = useAppDispatch();

  const handleSaveFirestore = () => {
    if (active != null) {
      if (notes.find((note) => note.id === props.note.id) != null) {
        void dispatch(startUpdateFirestore(active));
      } else {
        void dispatch(saveFirebase(active));
      }
    }
  };

  const handlePictureUpload = () => {
    document.getElementById('uploadFile')?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files != null) {
      const file = e.target.files[0];
      void dispatch(startUploadImg(file));
    }
  };
  return (
    <div className="notes-appbar">
      <span>28 de agosto 2020</span>
      <input
        id="uploadFile"
        type="file"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <div>
        <button className="btn" onClick={handlePictureUpload}>
          Picture
        </button>
        <button className="btn" onClick={handleSaveFirestore}>
          Save
        </button>
      </div>
    </div>
  );
};
