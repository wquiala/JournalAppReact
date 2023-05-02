import { useRef, useEffect } from 'react';
import { userForm } from '../../hooks/userForm';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { nostesActive, type Note } from '../../redux/slices/notes.slice';
import { NotesAppBar } from './NotesAppBar';
interface Props {
  notes: Note[];
}

export const NotesScreen = (props: Props) => {
  const { active } = useAppSelector((state) => state.noteReducer);
  if (active !== null) {
    const dispatch = useAppDispatch();
    const { handleInputChange, values, reset } = userForm(active);

    const { body, title } = values;

    const activeId = useRef(active.id);

    useEffect(() => {
      if (active.id !== activeId.current) {
        reset(active);
        activeId.current = active.id;
      }
    }, [active, reset]);

    useEffect(() => {
      dispatch(nostesActive(values));
    }, [values, dispatch]);

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
          {values.imgUrl !== '' && (
            <div className="notes-image">
              <img
                src="https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
                alt="img"
              />
            </div>
          )}
        </div>
      </div>
    );
  }
};
