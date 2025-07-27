import { type UserProfileCardProps } from "../../types";

export default function UserProfileCard(props: UserProfileCardProps){
  return (
  <div>

  {props.user.avatarUrl && (
    <img  src={props.user.avatarUrl}
    alt= {`${props.user.name}'s avatar`}
    style ={{width:'100px', borderRadius:'50%'}}

/>
)}

    <p> {props.user.name}</p>
    <p> {props.user.email}</p>
    <p> {props.user.role}</p>

    {props.user.onEdit &&(
        <button onClick={()=> props.user.onEdit?.(props.user.id)}> Edit Profile </button>

    )}

    </div>
  );
}