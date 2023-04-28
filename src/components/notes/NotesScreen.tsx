import { NotesAppBar } from './NotesAppBar';

export const NotesScreen = () => {
  return (
    <div className="notes-main-content">
      <NotesAppBar />
      <div className="notes-content">
        <input
          type="text"
          placeholder="Some awesome title"
          autoComplete="off"
          className="notes-title-input"
        />
        <textarea
          className="notes-textare"
          placeholder="What happened today"
        ></textarea>
        <div className="notes-image">
          <img
            src="https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};
