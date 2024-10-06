const Note = ({text,date,id}) => {

    return (
        <div className="note">
        <div className="text">
          {text}
        </div>
          <div className="footer">
        
        <div className="data"><br />{date}</div>
        <button className="btn"><i className="fa-solid fa-trash"></i></button>
        </div>
      </div>
    )
};

export default Note;