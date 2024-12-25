interface Usershape { 
    name: string;
    age: number;
}
function User({name,age}:Usershape) {
  return (
      <div>{name} ,{age}</div>
  )
}

export default User