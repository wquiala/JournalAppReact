import { type ChangeEvent } from 'react';
import { startUpdateFirestore, startUploadImg } from '../../actions/notes';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { type Note } from '../../redux/slices/notes.slice';
import { saveFirebase } from '../../helpers/saveFirebase';
import moment from 'moment';
import Swal from 'sweetalert2';
interface Props {
  note: Note;
}
export const NotesAppBar = (props: Props) => {
  const { notes, active } = useAppSelector((state) => state.noteReducer);
  const dispatch = useAppDispatch();

  const handleSaveFirestore = () => {
    if (active?.title === '') {
      void Swal.fire(
        'Error',
        'El titulo de la nota no puede estar vacio',
        'error',
      );
    } else {
      if (active != null) {
        if (notes.find((note) => note.id === props.note.id) != null) {
          void dispatch(startUpdateFirestore(active));
        } else {
          void dispatch(saveFirebase(active));
        }
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
    <div className="notes-appbar animate__animated animate__fadeIn animate__faster">
      <span>
        {moment(new Date().getTime()).format('Do') +
          ' ' +
          moment(new Date().getTime()).format('MMMM') +
          ' ' +
          moment(new Date().getTime()).format('YYYY')}
      </span>
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
