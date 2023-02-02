import { useState, useRef } from "react";

function Navbar() {
  const [selected, setSelected] = useState(null);
  const [newValue, setNewValue] = useState("");
  const [inputName, setInputName] = useState("");

  const changeVal = useRef();

  const [data, setData] = useState([
    {
      id: 1,
      name: "Asadbek",
      age: 21,
      address: "Fergana",
      status: "Student",
      nickname: "zemeister",
    },
    {
      id: 2,
      name: "Jasurbek",
      age: 21,
      address: "Fergana",
      status: "Student",
      nickname: "jasur",
    },
    {
      id: 3,
      name: "John",
      age: 52,
      address: "Tashkent",
      status: "Music",
      nickname: "music",
    },
    {
      id: 4,
      name: "Nick",
      age: 21,
      address: "Andijon",
      status: "Engineer",
      nickname: "dev",
    },
    {
      id: 5,
      name: "Asadbek",
      age: 21,
      address: "Fergana",
      status: "Student",
      nickname: "zemeister",
    },
    {
      id: 6,
      name: "Asadbek",
      age: 21,
      address: "Fergana",
      status: "Student",
      nickname: "zemeister",
    },
    {
      id: 7,
      name: "Asadbek",
      age: 21,
      address: "Fergana",
      status: "Student",
      nickname: "zemeister",
    },
    {
      id: 8,
      name: "Asadbek",
      age: 21,
      address: "Fergana",
      status: "Student",
      nickname: "zemeister",
    },
    {
      id: 9,
      name: "Asadbek",
      age: 21,
      address: "Fergana",
      status: "Student",
      nickname: "zemeister",
    },
    {
      id: 10,
      name: "Asadbek",
      age: 21,
      address: "Fergana",
      status: "Student",
      nickname: "zemeister",
    },
    {
      id: 11,
      name: "Asadbek",
      age: 21,
      address: "Fergana",
      status: "Student",
      nickname: "zemeister",
    },
    {
      id: 12,
      name: "Asadbek",
      age: 21,
      address: "Fergana",
      status: "Student",
      nickname: "zemeister",
    },
    {
      id: 13,
      name: "Asadbek",
      age: 21,
      address: "Fergana",
      status: "Student",
      nickname: "zemeister",
    },
    {
      id: 14,
      name: "Asadbek",
      age: 21,
      address: "Fergana",
      status: "Student",
      nickname: "zemeister",
    },
    {
      id: 15,
      name: "Asadbek",
      age: 21,
      address: "Fergana",
      status: "Student",
      nickname: "zemeister",
    },
    {
      id: 16,
      name: "Asadbek",
      age: 21,
      address: "Fergana",
      status: "Student",
      nickname: "zemeister",
    },
    {
      id: 17,
      name: "Asadbek",
      age: 21,
      address: "Fergana",
      status: "Student",
      nickname: "zemeister",
    },
    {
      id: 18,
      name: "Asadbek",
      age: 21,
      address: "Fergana",
      status: "Student",
      nickname: "zemeister",
    },
    {
      id: 19,
      name: "Asadbek",
      age: 21,
      address: "Fergana",
      status: "Student",
      nickname: "zemeister",
    },
  ]);

  const edit = (val) => {
    setSelected(val);
  };

  const getInputValue = ({ target }) => {
    setNewValue(target.value);
    setInputName(target.name);
  };

  const onSave = () => {
    let res = data.map((item) =>
      item.id === selected?.id ? { ...item, [inputName]: newValue } : item
    );
    setData(res);
    setSelected(null);
    setInputName("");
  };

  return (
    <div className="App flex items-center justify-center h-screen px-12">
      <div className="tableScroll h-96 w-full overflow-auto">
        <table id="customers" className="border relative">
          <tr className="border sticky w-full top-0 z-50">
            <th className="top-6">ID</th>
            <th className="top-6">NAME</th>
            <th className="top-6">AGE</th>
            <th className="top-6">ADDRESS</th>
            <th className="top-6">STATUS</th>
            <th className="top-6">NICKNAME</th>
            <th className="top-6">EDIT</th>
          </tr>
          {data.map((item) => (
            <tr key={item.id} className="mt-[10px] datas">
              <td className="sticky left-0 bg-[#04aa6d] text-white">
                {item.id}
              </td>

              <td>
                {" "}
                {selected?.id === item.id ? (
                  <td className="flex items-center justify-center">
                    <input
                      name="name"
                      ref={changeVal}
                      onChange={getInputValue}
                      className="text-center border-2 border-red-400 rounded outline-none"
                      defaultValue={item.name}
                      type="text"
                    />
                  </td>
                ) : (
                  <td className="flex items-center justify-center">
                    {item.name}
                  </td>
                )}
              </td>

              <td>
                {selected?.id === item.id ? (
                  <td className="flex items-center justify-center">
                    <input
                      ref={changeVal}
                      onChange={getInputValue}
                      name="age"
                      className="text-center border-2 border-red-400 rounded outline-none"
                      defaultValue={item.age}
                      type="text"
                    />
                  </td>
                ) : (
                  <td className="flex items-center justify-center">
                    {item.age}
                  </td>
                )}
              </td>

              <td>
                {selected?.id === item.id ? (
                  <td className="flex items-center justify-center">
                    <input
                      ref={changeVal}
                      onChange={getInputValue}
                      name="address"
                      className="text-center border-2 border-red-400 rounded outline-none"
                      defaultValue={item.address}
                      type="text"
                    />
                  </td>
                ) : (
                  <td className="flex items-center justify-center">
                    {item.address}
                  </td>
                )}
              </td>

              <td>
                {selected?.id === item.id ? (
                  <td className="flex items-center justify-center">
                    <input
                      ref={changeVal}
                      onChange={getInputValue}
                      name="status"
                      className="text-center border-2 border-red-400 rounded outline-none"
                      defaultValue={item.status}
                      type="text"
                    />
                  </td>
                ) : (
                  <td className="flex items-center justify-center">
                    {item.status}
                  </td>
                )}
              </td>

              <td>
                {selected?.id === item.id ? (
                  <td className="flex items-center justify-center">
                    <input
                      ref={changeVal}
                      onChange={getInputValue}
                      name="nickname"
                      className="text-center border-2 border-red-400 rounded outline-none"
                      defaultValue={item.nickname}
                      type="text"
                    />
                  </td>
                ) : (
                  <td className="flex items-center justify-center">
                    {item.nickname}
                  </td>
                )}
              </td>

              {selected?.id === item.id ? (
                <td className="mt-2 text-blue-400">
                  <button
                    onClick={() => onSave(item)}
                    className="hover:text-blue-500"
                  >
                    save
                  </button>
                  <button
                    onClick={() => setSelected(null)}
                    className="ml-2 hover:text-blue-500"
                  >
                    cancel
                  </button>
                </td>
              ) : (
                <td>
                  <button className="text-blue-400" onClick={() => edit(item)}>
                    Edit
                  </button>
                </td>
              )}
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Navbar;
