const UserCard = (props) => {
  return (
    <div className="userCard">
      <div className="userCardImage">
        <img src={props.image} alt="profilImage" />
      </div>
      <div className="userCardDescription mt-4">
        <h1>{props.name}</h1>
        <p className="mb-2">{props.description}</p>

        <div className="flex flex-wrap gap-1  w-32">
          {props.tags.map((item, key) => (
            <span key={key}>{item.name}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
