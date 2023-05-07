import { useAppDispatch } from '../../redux/hooks';
import { nostesActive, type Note } from '../../redux/slices/notes.slice';
import moment from 'moment';

interface Props {
  note: Note;
}
export const JournalEntry = (prop: Props) => {
  const dispatch = useAppDispatch();

  const { body, date, imgUrl, title } = prop.note;
  const fecha = moment(date);

  const handleNoteActive = () => {
    dispatch(nostesActive(prop.note));
  };

  return (
    <div
      className="journal_entry pointer animate__animated animate__fadeIn animate__faster"
      onClick={handleNoteActive}
    >
      {imgUrl !== undefined && (
        <div
          className="journal_entry-picture"
          style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${imgUrl})`,
          }}
        ></div>
      )}
      <div className="journal-entry-body">
        <p className="journal-entry-title">{title}</p>
        <p className="journal-entry-content">{body} </p>
      </div>
      <div className="journal-entry-date-box">
        <span>{fecha.format('dddd')}</span>
        <h4>{fecha.format('Do')}</h4>
      </div>
    </div>
  );
};
