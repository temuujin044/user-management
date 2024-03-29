import { nanoid } from "nanoid";

export default function AddUser() {
  const BE_URL = "http://localhost:3001/add-user";
  const newID = nanoid();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.username.value,
      age: Number(e.target.userage.value),
      mail: e.target.usermail.value,
      id: newID,
    };
    console.log(data);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const FETCHED_DATA = await fetch(BE_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.text();

    console.log(data);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <main className="flex justify-center items-center container mx-auto gap-10 mt-[100px]">
        <div className="flex w-[350px] h-[200px] rounded-[12px] gap-5 border flex-col p-4 justify-center">
          <div className="flex gap-2">
            <label htmlFor="name">User Name:</label>
            <input
              type="text"
              placeholder="enter user name"
              id="username"
              className="border text-center rounded-[5px] p-[2px]"
              name="username"
            />
          </div>
          <div className="flex gap-[21px]">
            <label htmlFor="age">User Age:</label>
            <input
              type="text"
              placeholder="enter user age"
              id="userage"
              className="border text-center  rounded-[5px] p-[2px]"
              name="userage"
            />
          </div>
          <div className="flex gap-[48px]">
            <label htmlFor="mail">Email:</label>
            <input
              type="text"
              placeholder="enter user email"
              id="usermail"
              className="border text-center  rounded-[5px] p-[2px]"
              name="usermail"
            />
          </div>
          <input
            className="flex justify-center items-center rounded-[5px] border bg-[#9494d2] w-[100px]"
            type="submit"
            name="Add User"
          />
        </div>
        {/* <div className="flex w-[350px] h-[200px] rounded-[12px] gap-5 border flex-col p-4 justify-center">
          {props.data?.allData.users.map((user, index) => (
            <div className="flex gap-2" key={index}>
              <div className="flex gap-4">
                <span>{user.name}</span>
                <span>{user.age} </span>
              </div>
              <button className="flex justify-center items-center rounded-[50%] border bg-[#9494d2] w-[30px]">
                X
              </button>
              <button className="flex justify-center items-center rounded-[5px] border bg-[#9494d2] w-[50px]">
                Edit
              </button>
            </div>
          ))}
        </div> */}
      </main>
    </form>
  );
}
