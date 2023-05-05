import { useRef, useEffect } from 'react';
import { userForm } from '../../hooks/userForm';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { nostesActive, type Note } from '../../redux/slices/notes.slice';
import { NotesAppBar } from './NotesAppBar';
import { deleteNote } from '../../actions/notes';
interface Props {
  notes: Note[];
}

export const NotesScreen = (props: Props) => {
  const { active } = useAppSelector((state) => state.noteReducer);
  if (active !== null) {
    const dispatch = useAppDispatch();
    const { handleInputChange, values, reset } = userForm(active);

    const { body, title, imgUrl } = values;

    const activeId = useRef(active.id);

    useEffect(() => {
      if (active.id !== activeId.current) {
        reset(active);
        activeId.current = active.id;
      }
    }, [active, reset]);

    useEffect(() => {
      dispatch(nostesActive(values));
    }, [body, title, imgUrl]);

    const handleDelete = () => {
      void dispatch(deleteNote(active.id));
    };

    return (
      <div className="notes-main-content">
        <NotesAppBar note={values} />
        <div className="notes-content">
          <input
            type="text"
            placeholder="Some awesome title"
            autoComplete="off"
            className="notes-title-input"
            value={title}
            name="title"
            onChange={handleInputChange}
          />
          <textarea
            className="notes-textare"
            placeholder="text"
            value={body}
            name="body"
            onChange={handleInputChange}
          ></textarea>
          {active.imgUrl !== '' && (
            <div className="notes-image">
              <img src={active.imgUrl} alt="img" />
            </div>
          )}
          <button className="btn btn-danger" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};
